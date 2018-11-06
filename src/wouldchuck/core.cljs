(ns ^:figwheel-hooks wouldchuck.core
  (:require
   [goog.dom :as gdom]
   [goog.color :as gcolor]
   [goog.math :as gmath]
   [reagent.core :as r]
   [clojure.string :as str]))

(defonce app-state
  (r/atom
   {:tile/ratio 1.5
    :tile/angle 45

    :layout/rows 10
    :layout/cols 10

    :rule/string "abba,0033,03"}))

(def hickory "#FFF8DC")
(def walnut "#8B4513")
(def colors [hickory walnut])
(def adjacent (zipmap colors (rest (cycle colors))))
(defn darken
  [hex-color]
  (-> hex-color gcolor/hexToRgb (gcolor/darken 0.20) gcolor/rgbArrayToHex))

(def editable-keys
  {:tile/ratio {::label "Ratio (height/width):"
                ::presets {"1" 1
                           "√2" (Math/sqrt 2)
                           "√3" (Math/sqrt 3)
                           "2 (√4)" 2
                           "√5" (Math/sqrt 5)}
                ::coerce js/parseFloat}
   :tile/angle {::label "Angle (deg):"
                ::presets {"30°" 30
                           "45°" 45
                           "60°" 60}
                ::coerce js/parseFloat} ;; TODO: actually make coerce work
   :rule/string {::label "Rule:"}})

(defn ^:private parameter-form
  []
  (let [state @app-state]
    [:ul {:id "editable"}
     [:li "Tile width ≝ 1 unit"]
     (for [[k {::keys [label presets]}] editable-keys]
       [:li
        [:label label]
        [:input
         {:value (state k)
          :on-change #(swap! app-state assoc k (-> % .-target .-value))}]
        (when presets
          (into
           [:span {:class "presets"}
            (for [[preset v] presets]
              [:button {:on-click #(swap! app-state assoc k v)} preset])]))])]))

(def tile-width 1)
(def gutter-width 0.5)

(defn canvas
  []
  (let [state @app-state
        tile-height (* tile-width (:tile/ratio state))
        {:layout/keys [rows cols]} state
        make-tile (fn [root variant base-color]
                    [:symbol
                     {:id (str "tile-" root variant)
                      :transform (let [hw (/ tile-width 2)
                                       hh (/ tile-height 2)
                                       center (str "translate(-" hw ", -" hh ")")]
                                   (case variant
                                     "0" nil
                                     "1" (str "rotate(180, " hw ", " hh ")")
                                     "2" (str center " scale(-1, 1) translate(" (- (- hw) tile-width) ", " hh ")" )
                                     "3" (str center " scale(1, -1) translate(" hw ", " (- (- hh) tile-height) ")" )
                                     ))}
                     [:rect {:class "tile-base" :id (str "tile-base-" root variant)
                             :width tile-width :height tile-height
                             :style {:fill base-color
                                     :stroke (darken base-color)
                                     :stroke-width "0.05"}}]
                     (let [w tile-width
                           t (-> state :tile/angle gmath/toRadians Math/tan)]
                       [:polyline
                        {:class (str "tile-notch-" root variant)
                         :points (->> [[0 0] [w 0] [w (* w t)]]
                                      (map (partial str/join ","))
                                      (str/join " "))
                         :style {:fill (adjacent base-color)
                                 :clip-path "url(#tile-base-clip)"}}])])]
    [:div
     [:h2 "Base tiles and variants"]
     [:svg
      (let [viewbox-width 15
            viewbox-height (+ tile-height 1) ;; tile + room for the labels
            zoom-ratio 35]
        {:id "sample"
         :width (str (* zoom-ratio viewbox-width) "px")
         :height (str (* zoom-ratio viewbox-height) "px")
         :view-box (str/join " " [0 0 viewbox-width viewbox-height])
         :style {:display "block"} })
      ;; To fix stroke-width being centered on the rect path instead of on
      ;; the inside, see: https://stackoverflow.com/a/32162431

      ;; Can't use clipPath inside the symbol definition, mysteriously breaks.
      [:defs
       (make-tile "sample" "0" "#000")
       [:clipPath {:id "tile-base-clip"}
        [:use {:href "#tile-base-sample0"}]]
       (for [root ["a" "b"]
             variant ["0" "1" "2" "3"]
             :let [color (case root
                           "a" hickory
                           "b" walnut)]]
         (make-tile root variant color))]

      (map-indexed
       (fn [i [root variant]]
         (let [x (* i (+ gutter-width tile-width))]
           [:g
            [:use {:href (str "#tile-" root variant) :x x :y 0}]
            [:text {:x (+ x 0.5)
                    :y (+ tile-height 0.2)
                    :style {:dominant-baseline "hanging" :text-anchor "middle" :font-size "0.5pt"}}
             (str root variant)]]))
       (for [root ["a" "b"] variant ["0" "1" "2" "3"]] [root variant]))]

     [:h2 "Generator row"]
     [:svg
      (let [viewbox-width 15
            viewbox-height 1
            zoom-ratio 35]
        {:id "root-tile"
         :width (str (* zoom-ratio viewbox-width) "px")
         :height (str (* zoom-ratio viewbox-height) "px")
         :view-box (str/join " " [0 0 viewbox-width viewbox-height])
         :style {:display "block"}})

      (let [cols (state :layout/cols)
            [root h-rule] (-> state :rule/string (str/split ","))]
        (.log js/console (str "root: " root " h-rule: " h-rule))
        [:defs
         [:symbol
          {:id "generator"}
          (->> (map vector root h-rule)
               (cycle)
               (take cols)
               (map-indexed
                (fn [i [tile variant]]
                  [:use {:x i :href (str "#tile-" tile variant)}])))]])
      [:use {:href "#generator"}]]

     [:h2 "Entire board"]
     [:svg
      {:width "500px" :height "600px" :style {:border "1px solid blue"} :view-box "0 0 20 20"}
      [:use {:href "#tile-a0"}]
      [:use {:href "#tile-a0" :transform "translate(2 2) rotate(45)"}]]]))

(defn rule-splainer
  []
                                        ; Explanation: The top row consists of h
                                        ; rectangles of two types, either 0 or 1
                                        ; as shown: Specify them in the
                                        ; field "type". If "type" has less than
                                        ; h digits, then it is wrapped around.
                                        ; These rectangles depend on two tunable
                                        ; parameters: ratio (height/width) and
                                        ; angle (the angle of the top triangular
                                        ; cutout) The h rectangles of the top
                                        ; strip are transformed as specified
                                        ; in "trans1". It is a sequence of up to
                                        ; h digits; if less than h digits are
                                        ; specified then the transformations are
                                        ; wrapped around. Each digit is either
                                        ; 0 (original orientation), 1 (180
                                        ; rotation), 2 (vertical flip) or
                                        ; 3 (horizontal flip).
                                        ; After the top row is built, v copies of it are made and stacked below. Each of the v copies is transformed as specified by "trans2" in the same way as "trans1". Turn on the border to see individual triangles.

  (let [rule (@app-state :rule/string)
        [root-tile h-rule v-rule] (str/split rule ",")]
    [:div
     [:p "The rule above consists of several parts separated by commas:"]
     [:ol
      [:li "Root tile, here: " [:b root-tile]]
      [:li "Horizontal production rule, here: " [:b h-rule]]
      [:li "Vertical production rule, here: " [:b v-rule]]]
     [:p "The horizontal role determines how the first row is created, the vertical rule defines how the first row is copied. Both parts consist of digits from 0 to 3 inclusive. These digits mean:"]
     [:ul
      [:li "0: no change"]
      [:li "1: 180° rotation"]
      [:li "2: vertical flip"]
      [:li "3: horizontal flip"]]
     ])
  )

(defn main
  []
  [:div
   [:img {:src "/img/woodchuck.svg" :style {:float :right}}]
   [parameter-form]
   [rule-splainer]
   [canvas]])

(defn mount-app-element
  []
  (when-let [el (gdom/getElement "app")]
    (r/render-component [main] el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload
  []
  (mount-app-element))

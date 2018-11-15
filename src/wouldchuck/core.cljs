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
(def sqrt2 (Math/sqrt 2))
(def sqrt3 (Math/sqrt 3))
(def sqrt5 (Math/sqrt 5))

(def editable-keys
  {:tile/ratio {::label "Ratio (height/width):"
                ::presets {"1" 1
                           "√2" sqrt2
                           "√3" sqrt3
                           "2 (√4)" 2
                           "√5" sqrt5}
                ::coerce js/parseFloat}
   :tile/angle {::label "Angle (deg):"
                ::presets {"30°" 30
                           "45°" 45
                           "60°" 60}
                ::coerce js/parseFloat}
   :rule/string {::label "Rule:"
                 ::presets {"Debug combo" "ab,0123,0123"
                            "Hexagons" "abba,0033,03"}}
   :layout/rows {::label "Rows:"
                 ::coerce js/parseInt}
   :layout/cols {::label "Cols:"
                 ::coerce js/parseInt}})

(defn ^:private parameter-form
  []
  (let [state @app-state]
    [:ul {:id "editable"}
     [:li "Tile width ≝ 1 unit"]
     (for [[k {::keys [label presets coerce] :or {coerce identity}}] editable-keys]
       [:li
        [:label label]
        [:input
         {:value (state k)
          :on-change #(swap! app-state assoc k (-> % .-target .-value coerce))}]
        (when presets
          (into
           [:span {:class "presets"}
            (for [[preset v] presets]
              [:button {:on-click #(swap! app-state assoc k v)} preset])]))])]))

(def full-presets
  [{:name "Hexagons"
    :values {:rule/string "abba,0033,03"
             :layout/cols 18
             :layout/rows 8
             :tile/angle 30
             :tile/ratio sqrt2}}])

(defn ^:private full-presets-form
  []
  [:div
   [:span "Example presets: "]
   (for [{:keys [name values]} full-presets]
     ^{:key name}
     [:button {:on-click #(swap! app-state merge values)} name])])

(def tile-width 1)
(def gutter-width 0.5)

(def highlight-filter
  [:filter#highlight
   [:feColorMatrix {:type "matrix"
                    :values (->> [[0 0 0 0 0]
                                  [0 1 0 0 0]
                                  [0 0 1 0 0]
                                  [0 0 0 1 0]]
                                 (flatten)
                                 (str/join " "))}]])

(defn ^:private transform
  "Given an object's width, height, and a variant (given by a string 0, 1, 2, 3 as
  defined elsewhere in the app), produce a SVG specification of said transform."
  [width height variant]
  (let [hw (/ width 2)
        hh (/ height 2)
        center (str "translate(-" hw ", -" hh ")")]
    (case (str variant)
      "0" nil
      "1" (str "rotate(180, " hw ", " hh ")")
      "2" (str center " scale(1, -1) translate(" hw ", " (- (- hh) height) ")" )
      "3" (str center " scale(-1, 1) translate(" (- (- hw) width) ", " hh ")" ))))

(defn canvas
  []
  (let [state @app-state
        tile-height (* tile-width (:tile/ratio state))
        {:layout/keys [rows cols]} state
        make-tile (fn [root variant base-color]
                    [:symbol
                     {:id (str "tile-" root variant)
                      :class "tile-root"
                      :transform (transform tile-width tile-height variant)}
                     [:g
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
                                  :clip-path "url(#tile-base-clip)"}}])]])]
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
       highlight-filter

       [make-tile "sample" "0" "#000"]
       [:clipPath {:id "tile-base-clip"}
        [:use {:href "#tile-base-sample0"}]]
       (for [root ["a" "b"]
             variant ["0" "1" "2" "3"]
             :let [color (case root
                           "a" walnut
                           "b" hickory)]]
         ^{:key [root variant color]} [make-tile root variant color])]

      (map-indexed
       (fn [i [root variant]]
         (let [x (* i (+ gutter-width tile-width))]
           [:g
            [:use {:href (str "#tile-" root variant) :x x :y 0}]
            [:text {:x (+ x (/ tile-width 2))
                    :y (+ tile-height 0.2)
                    :style {:dominant-baseline "hanging" :text-anchor "middle" :font-size "0.5pt"}}
             (str root variant)]]))
       (for [root ["a" "b"] variant ["0" "1" "2" "3"]] [root variant]))]

     (let [viewbox-width 15
           viewbox-height tile-height
           zoom-ratio 35

           cols (state :layout/cols)
           [root h-rule] (-> state :rule/string (str/split ","))
           tiles (->> (map vector (cycle root) (cycle h-rule)) (take cols))]
       [:section
        [:h2 "Generator row"]
        [:svg
         {:id "generator-row-demo"
          :width (str (* zoom-ratio viewbox-width) "px")
          :height (str (* zoom-ratio viewbox-height) "px")
          :view-box (str/join " " [0 0 viewbox-width viewbox-height])
          :style {:display "block"}}
         [:defs
          [:symbol
           {:id "generator-row"}
           (map-indexed
            (fn [i [tile variant]]
              ^{:key i} [:use {:x i :href (str "#tile-" tile variant)}])
            tiles)]]
         [:use {:href "#generator-row"}]]])

     [:section
      [:h2 "Entire board"]
      [:svg
       {:width "500px" :height "600px" :view-box "0 0 20 20"}
       [:use {:href "#generator-row"}]]]]))

(defn rule-splainer
  []
  (let [rule (@app-state :rule/string)
        [root-tile h-rule v-rule] (str/split rule ",")]
    [:div
     [:p "The rule above consists of several parts separated by commas:"]
     [:ol
      [:li "Base pattern, here: " [:b root-tile]]
      [:li "Horizontal production rule, here: " [:b h-rule]]
      [:li "Vertical production rule, here: " [:b v-rule]]]
     [:p "The horizontal role determines how the first row is created, the vertical rule defines how the first row is copied to produce the following rows. Both parts consist of digits from 0 to 3 inclusive. These digits mean:"]
     [:ul
      [:li "0: no change"]
      [:li "1: 180° rotation"]
      [:li "2: vertical flip ↕"]
      [:li "3: horizontal flip ↔"]]]))

(defn main
  []
  [:div
   [:img {:src "/img/woodchuck.svg" :style {:float :right}}]

   [parameter-form]
   [full-presets-form]

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

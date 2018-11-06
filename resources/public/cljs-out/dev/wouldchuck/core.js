// Compiled by ClojureScript 1.10.339 {}
goog.provide('wouldchuck.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.color');
goog.require('goog.math');
goog.require('reagent.core');
goog.require('clojure.string');
if((typeof wouldchuck !== 'undefined') && (typeof wouldchuck.core !== 'undefined') && (typeof wouldchuck.core.app_state !== 'undefined')){
} else {
wouldchuck.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("tile","ratio","tile/ratio",-921992190),1.5,new cljs.core.Keyword("tile","angle","tile/angle",1618207712),(45),new cljs.core.Keyword("layout","rows","layout/rows",-191511306),(10),new cljs.core.Keyword("layout","cols","layout/cols",1272147023),(10),new cljs.core.Keyword("rule","string","rule/string",-1984981454),"abba,0033,03"], null));
}
wouldchuck.core.hickory = "#FFF8DC";
wouldchuck.core.walnut = "#8B4513";
wouldchuck.core.colors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.hickory,wouldchuck.core.walnut], null);
wouldchuck.core.adjacent = cljs.core.zipmap.call(null,wouldchuck.core.colors,cljs.core.rest.call(null,cljs.core.cycle.call(null,wouldchuck.core.colors)));
wouldchuck.core.darken = (function wouldchuck$core$darken(hex_color){
return goog.color.rgbArrayToHex(goog.color.darken(goog.color.hexToRgb(hex_color),0.2));
});
wouldchuck.core.editable_keys = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("tile","ratio","tile/ratio",-921992190),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510),"Ratio (height/width):",new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855),new cljs.core.PersistentArrayMap(null, 5, ["1",(1),"\u221A2",Math.sqrt((2)),"\u221A3",Math.sqrt((3)),"2 (\u221A4)",(2),"\u221A5",Math.sqrt((5))], null),new cljs.core.Keyword("wouldchuck.core","coerce","wouldchuck.core/coerce",-140869634),parseFloat], null),new cljs.core.Keyword("tile","angle","tile/angle",1618207712),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510),"Angle (deg):",new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855),new cljs.core.PersistentArrayMap(null, 3, ["30\u00B0",(30),"45\u00B0",(45),"60\u00B0",(60)], null),new cljs.core.Keyword("wouldchuck.core","coerce","wouldchuck.core/coerce",-140869634),parseFloat], null),new cljs.core.Keyword("rule","string","rule/string",-1984981454),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510),"Rule:"], null)], null);
wouldchuck.core.parameter_form = (function wouldchuck$core$parameter_form(){
var state = cljs.core.deref.call(null,wouldchuck.core.app_state);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"editable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Tile width \u225D 1 unit"], null),(function (){var iter__4324__auto__ = ((function (state){
return (function wouldchuck$core$parameter_form_$_iter__24600(s__24601){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__24601__$1 = s__24601;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24601__$1);
if(temp__5457__auto__){
var s__24601__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24601__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24601__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24603 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24602 = (0);
while(true){
if((i__24602 < size__4323__auto__)){
var vec__24604 = cljs.core._nth.call(null,c__4322__auto__,i__24602);
var k = cljs.core.nth.call(null,vec__24604,(0),null);
var map__24607 = cljs.core.nth.call(null,vec__24604,(1),null);
var map__24607__$1 = ((((!((map__24607 == null)))?(((((map__24607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24607):map__24607);
var label = cljs.core.get.call(null,map__24607__$1,new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510));
var presets = cljs.core.get.call(null,map__24607__$1,new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855));
cljs.core.chunk_append.call(null,b__24603,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),state.call(null,k),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__24602,vec__24604,k,map__24607,map__24607__$1,label,presets,c__4322__auto__,size__4323__auto__,b__24603,s__24601__$2,temp__5457__auto__,state){
return (function (p1__24599_SHARP_){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,p1__24599_SHARP_.target.value);
});})(i__24602,vec__24604,k,map__24607,map__24607__$1,label,presets,c__4322__auto__,size__4323__auto__,b__24603,s__24601__$2,temp__5457__auto__,state))
], null)], null),(cljs.core.truth_(presets)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"presets"], null),(function (){var iter__4324__auto__ = ((function (i__24602,vec__24604,k,map__24607,map__24607__$1,label,presets,c__4322__auto__,size__4323__auto__,b__24603,s__24601__$2,temp__5457__auto__,state){
return (function wouldchuck$core$parameter_form_$_iter__24600_$_iter__24609(s__24610){
return (new cljs.core.LazySeq(null,((function (i__24602,vec__24604,k,map__24607,map__24607__$1,label,presets,c__4322__auto__,size__4323__auto__,b__24603,s__24601__$2,temp__5457__auto__,state){
return (function (){
var s__24610__$1 = s__24610;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__24610__$1);
if(temp__5457__auto____$1){
var s__24610__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24610__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__24610__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__24612 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__24611 = (0);
while(true){
if((i__24611 < size__4323__auto____$1)){
var vec__24613 = cljs.core._nth.call(null,c__4322__auto____$1,i__24611);
var preset = cljs.core.nth.call(null,vec__24613,(0),null);
var v = cljs.core.nth.call(null,vec__24613,(1),null);
cljs.core.chunk_append.call(null,b__24612,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24611,i__24602,vec__24613,preset,v,c__4322__auto____$1,size__4323__auto____$1,b__24612,s__24610__$2,temp__5457__auto____$1,vec__24604,k,map__24607,map__24607__$1,label,presets,c__4322__auto__,size__4323__auto__,b__24603,s__24601__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(i__24611,i__24602,vec__24613,preset,v,c__4322__auto____$1,size__4323__auto____$1,b__24612,s__24610__$2,temp__5457__auto____$1,vec__24604,k,map__24607,map__24607__$1,label,presets,c__4322__auto__,size__4323__auto__,b__24603,s__24601__$2,temp__5457__auto__,state))
], null),preset], null));

var G__24634 = (i__24611 + (1));
i__24611 = G__24634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24612),wouldchuck$core$parameter_form_$_iter__24600_$_iter__24609.call(null,cljs.core.chunk_rest.call(null,s__24610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24612),null);
}
} else {
var vec__24616 = cljs.core.first.call(null,s__24610__$2);
var preset = cljs.core.nth.call(null,vec__24616,(0),null);
var v = cljs.core.nth.call(null,vec__24616,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24602,vec__24616,preset,v,s__24610__$2,temp__5457__auto____$1,vec__24604,k,map__24607,map__24607__$1,label,presets,c__4322__auto__,size__4323__auto__,b__24603,s__24601__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(i__24602,vec__24616,preset,v,s__24610__$2,temp__5457__auto____$1,vec__24604,k,map__24607,map__24607__$1,label,presets,c__4322__auto__,size__4323__auto__,b__24603,s__24601__$2,temp__5457__auto__,state))
], null),preset], null),wouldchuck$core$parameter_form_$_iter__24600_$_iter__24609.call(null,cljs.core.rest.call(null,s__24610__$2)));
}
} else {
return null;
}
break;
}
});})(i__24602,vec__24604,k,map__24607,map__24607__$1,label,presets,c__4322__auto__,size__4323__auto__,b__24603,s__24601__$2,temp__5457__auto__,state))
,null,null));
});})(i__24602,vec__24604,k,map__24607,map__24607__$1,label,presets,c__4322__auto__,size__4323__auto__,b__24603,s__24601__$2,temp__5457__auto__,state))
;
return iter__4324__auto__.call(null,presets);
})()], null)):null)], null));

var G__24635 = (i__24602 + (1));
i__24602 = G__24635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24603),wouldchuck$core$parameter_form_$_iter__24600.call(null,cljs.core.chunk_rest.call(null,s__24601__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24603),null);
}
} else {
var vec__24619 = cljs.core.first.call(null,s__24601__$2);
var k = cljs.core.nth.call(null,vec__24619,(0),null);
var map__24622 = cljs.core.nth.call(null,vec__24619,(1),null);
var map__24622__$1 = ((((!((map__24622 == null)))?(((((map__24622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24622):map__24622);
var label = cljs.core.get.call(null,map__24622__$1,new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510));
var presets = cljs.core.get.call(null,map__24622__$1,new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),state.call(null,k),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__24619,k,map__24622,map__24622__$1,label,presets,s__24601__$2,temp__5457__auto__,state){
return (function (p1__24599_SHARP_){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,p1__24599_SHARP_.target.value);
});})(vec__24619,k,map__24622,map__24622__$1,label,presets,s__24601__$2,temp__5457__auto__,state))
], null)], null),(cljs.core.truth_(presets)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"presets"], null),(function (){var iter__4324__auto__ = ((function (vec__24619,k,map__24622,map__24622__$1,label,presets,s__24601__$2,temp__5457__auto__,state){
return (function wouldchuck$core$parameter_form_$_iter__24600_$_iter__24624(s__24625){
return (new cljs.core.LazySeq(null,((function (vec__24619,k,map__24622,map__24622__$1,label,presets,s__24601__$2,temp__5457__auto__,state){
return (function (){
var s__24625__$1 = s__24625;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__24625__$1);
if(temp__5457__auto____$1){
var s__24625__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24625__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24625__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24627 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24626 = (0);
while(true){
if((i__24626 < size__4323__auto__)){
var vec__24628 = cljs.core._nth.call(null,c__4322__auto__,i__24626);
var preset = cljs.core.nth.call(null,vec__24628,(0),null);
var v = cljs.core.nth.call(null,vec__24628,(1),null);
cljs.core.chunk_append.call(null,b__24627,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24626,vec__24628,preset,v,c__4322__auto__,size__4323__auto__,b__24627,s__24625__$2,temp__5457__auto____$1,vec__24619,k,map__24622,map__24622__$1,label,presets,s__24601__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(i__24626,vec__24628,preset,v,c__4322__auto__,size__4323__auto__,b__24627,s__24625__$2,temp__5457__auto____$1,vec__24619,k,map__24622,map__24622__$1,label,presets,s__24601__$2,temp__5457__auto__,state))
], null),preset], null));

var G__24636 = (i__24626 + (1));
i__24626 = G__24636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24627),wouldchuck$core$parameter_form_$_iter__24600_$_iter__24624.call(null,cljs.core.chunk_rest.call(null,s__24625__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24627),null);
}
} else {
var vec__24631 = cljs.core.first.call(null,s__24625__$2);
var preset = cljs.core.nth.call(null,vec__24631,(0),null);
var v = cljs.core.nth.call(null,vec__24631,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__24631,preset,v,s__24625__$2,temp__5457__auto____$1,vec__24619,k,map__24622,map__24622__$1,label,presets,s__24601__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(vec__24631,preset,v,s__24625__$2,temp__5457__auto____$1,vec__24619,k,map__24622,map__24622__$1,label,presets,s__24601__$2,temp__5457__auto__,state))
], null),preset], null),wouldchuck$core$parameter_form_$_iter__24600_$_iter__24624.call(null,cljs.core.rest.call(null,s__24625__$2)));
}
} else {
return null;
}
break;
}
});})(vec__24619,k,map__24622,map__24622__$1,label,presets,s__24601__$2,temp__5457__auto__,state))
,null,null));
});})(vec__24619,k,map__24622,map__24622__$1,label,presets,s__24601__$2,temp__5457__auto__,state))
;
return iter__4324__auto__.call(null,presets);
})()], null)):null)], null),wouldchuck$core$parameter_form_$_iter__24600.call(null,cljs.core.rest.call(null,s__24601__$2)));
}
} else {
return null;
}
break;
}
});})(state))
,null,null));
});})(state))
;
return iter__4324__auto__.call(null,wouldchuck.core.editable_keys);
})()], null);
});
wouldchuck.core.tile_width = (1);
wouldchuck.core.gutter_width = 0.5;
wouldchuck.core.canvas = (function wouldchuck$core$canvas(){
var state = cljs.core.deref.call(null,wouldchuck.core.app_state);
var tile_height = (wouldchuck.core.tile_width * new cljs.core.Keyword("tile","ratio","tile/ratio",-921992190).cljs$core$IFn$_invoke$arity$1(state));
var map__24637 = state;
var map__24637__$1 = ((((!((map__24637 == null)))?(((((map__24637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24637):map__24637);
var rows = cljs.core.get.call(null,map__24637__$1,new cljs.core.Keyword("layout","rows","layout/rows",-191511306));
var cols = cljs.core.get.call(null,map__24637__$1,new cljs.core.Keyword("layout","cols","layout/cols",1272147023));
var make_tile = ((function (state,tile_height,map__24637,map__24637__$1,rows,cols){
return (function (root,variant,base_color){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["tile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),(function (){var hw = (wouldchuck.core.tile_width / (2));
var hh = (tile_height / (2));
var center = ["translate(-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hw),", -",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hh),")"].join('');
var G__24639 = variant;
switch (G__24639) {
case "0":
return null;

break;
case "1":
return ["rotate(180, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hw),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hh),")"].join('');

break;
case "2":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(center)," scale(-1, 1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((- hw) - wouldchuck.core.tile_width)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hh),")"].join('');

break;
case "3":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(center)," scale(1, -1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hw),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((- hh) - tile_height)),")"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24639)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"tile-base",new cljs.core.Keyword(null,"id","id",-1388402092),["tile-base-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),wouldchuck.core.tile_width,new cljs.core.Keyword(null,"height","height",1025178622),tile_height,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),base_color,new cljs.core.Keyword(null,"stroke","stroke",1741823555),wouldchuck.core.darken.call(null,base_color),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.05"], null)], null)], null),(function (){var w = wouldchuck.core.tile_width;
var t = Math.tan(goog.math.toRadians(new cljs.core.Keyword("tile","angle","tile/angle",1618207712).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["tile-notch-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join(''),new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.partial.call(null,clojure.string.join,","),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,(w * t)], null)], null))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),wouldchuck.core.adjacent.call(null,base_color),new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#tile-base-clip)"], null)], null)], null);
})()], null);
});})(state,tile_height,map__24637,map__24637__$1,rows,cols))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Base tiles and variants"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),(function (){var viewbox_width = (15);
var viewbox_height = (tile_height + (1));
var zoom_ratio = (35);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"sample",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom_ratio * viewbox_width)),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom_ratio * viewbox_height)),"px"].join(''),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),viewbox_width,viewbox_height], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),make_tile.call(null,"sample","0","#000"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tile-base-clip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#tile-base-sample0"], null)], null)], null),(function (){var iter__4324__auto__ = ((function (state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile){
return (function wouldchuck$core$canvas_$_iter__24640(s__24641){
return (new cljs.core.LazySeq(null,((function (state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile){
return (function (){
var s__24641__$1 = s__24641;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24641__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var root = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__24641__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile){
return (function wouldchuck$core$canvas_$_iter__24640_$_iter__24642(s__24643){
return (new cljs.core.LazySeq(null,((function (s__24641__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile){
return (function (){
var s__24643__$1 = s__24643;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__24643__$1);
if(temp__5457__auto____$1){
var s__24643__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24643__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24643__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24645 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24644 = (0);
while(true){
if((i__24644 < size__4323__auto__)){
var variant = cljs.core._nth.call(null,c__4322__auto__,i__24644);
var color = (function (){var G__24646 = root;
switch (G__24646) {
case "a":
return wouldchuck.core.hickory;

break;
case "b":
return wouldchuck.core.walnut;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24646)].join('')));

}
})();
cljs.core.chunk_append.call(null,b__24645,make_tile.call(null,root,variant,color));

var G__24667 = (i__24644 + (1));
i__24644 = G__24667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24645),wouldchuck$core$canvas_$_iter__24640_$_iter__24642.call(null,cljs.core.chunk_rest.call(null,s__24643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24645),null);
}
} else {
var variant = cljs.core.first.call(null,s__24643__$2);
var color = (function (){var G__24647 = root;
switch (G__24647) {
case "a":
return wouldchuck.core.hickory;

break;
case "b":
return wouldchuck.core.walnut;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24647)].join('')));

}
})();
return cljs.core.cons.call(null,make_tile.call(null,root,variant,color),wouldchuck$core$canvas_$_iter__24640_$_iter__24642.call(null,cljs.core.rest.call(null,s__24643__$2)));
}
} else {
return null;
}
break;
}
});})(s__24641__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile))
,null,null));
});})(s__24641__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1","2","3"], null)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,wouldchuck$core$canvas_$_iter__24640.call(null,cljs.core.rest.call(null,s__24641__$1)));
} else {
var G__24669 = cljs.core.rest.call(null,s__24641__$1);
s__24641__$1 = G__24669;
continue;
}
} else {
return null;
}
break;
}
});})(state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile))
,null,null));
});})(state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile))
;
return iter__4324__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null));
})()], null),cljs.core.map_indexed.call(null,((function (state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile){
return (function (i,p__24648){
var vec__24649 = p__24648;
var root = cljs.core.nth.call(null,vec__24649,(0),null);
var variant = cljs.core.nth.call(null,vec__24649,(1),null);
var x = (i * (wouldchuck.core.gutter_width + wouldchuck.core.tile_width));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),["#tile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(x + 0.5),new cljs.core.Keyword(null,"y","y",-1757859776),(tile_height + 0.2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"hanging",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.5pt"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join('')], null)], null);
});})(state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile))
,(function (){var iter__4324__auto__ = ((function (state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile){
return (function wouldchuck$core$canvas_$_iter__24652(s__24653){
return (new cljs.core.LazySeq(null,((function (state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile){
return (function (){
var s__24653__$1 = s__24653;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24653__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var root = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__24653__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile){
return (function wouldchuck$core$canvas_$_iter__24652_$_iter__24654(s__24655){
return (new cljs.core.LazySeq(null,((function (s__24653__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile){
return (function (){
var s__24655__$1 = s__24655;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__24655__$1);
if(temp__5457__auto____$1){
var s__24655__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24655__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24655__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24657 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24656 = (0);
while(true){
if((i__24656 < size__4323__auto__)){
var variant = cljs.core._nth.call(null,c__4322__auto__,i__24656);
cljs.core.chunk_append.call(null,b__24657,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,variant], null));

var G__24670 = (i__24656 + (1));
i__24656 = G__24670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24657),wouldchuck$core$canvas_$_iter__24652_$_iter__24654.call(null,cljs.core.chunk_rest.call(null,s__24655__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24657),null);
}
} else {
var variant = cljs.core.first.call(null,s__24655__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,variant], null),wouldchuck$core$canvas_$_iter__24652_$_iter__24654.call(null,cljs.core.rest.call(null,s__24655__$2)));
}
} else {
return null;
}
break;
}
});})(s__24653__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile))
,null,null));
});})(s__24653__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1","2","3"], null)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,wouldchuck$core$canvas_$_iter__24652.call(null,cljs.core.rest.call(null,s__24653__$1)));
} else {
var G__24671 = cljs.core.rest.call(null,s__24653__$1);
s__24653__$1 = G__24671;
continue;
}
} else {
return null;
}
break;
}
});})(state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile))
,null,null));
});})(state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile))
;
return iter__4324__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Generator row"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),(function (){var viewbox_width = (15);
var viewbox_height = (1);
var zoom_ratio = (35);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"root-tile",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom_ratio * viewbox_width)),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom_ratio * viewbox_height)),"px"].join(''),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),viewbox_width,viewbox_height], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null);
})(),(function (){var cols__$1 = state.call(null,new cljs.core.Keyword("layout","cols","layout/cols",1272147023));
var vec__24658 = clojure.string.split.call(null,new cljs.core.Keyword("rule","string","rule/string",-1984981454).cljs$core$IFn$_invoke$arity$1(state),",");
var root = cljs.core.nth.call(null,vec__24658,(0),null);
var h_rule = cljs.core.nth.call(null,vec__24658,(1),null);
console.log(["root: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(root)," h-rule: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h_rule)].join(''));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"generator"], null),cljs.core.map_indexed.call(null,((function (cols__$1,vec__24658,root,h_rule,state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile){
return (function (i,p__24661){
var vec__24662 = p__24661;
var tile = cljs.core.nth.call(null,vec__24662,(0),null);
var variant = cljs.core.nth.call(null,vec__24662,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"href","href",-793805698),["#tile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tile),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join('')], null)], null);
});})(cols__$1,vec__24658,root,h_rule,state,tile_height,map__24637,map__24637__$1,rows,cols,make_tile))
,cljs.core.take.call(null,cols__$1,cljs.core.cycle.call(null,cljs.core.map.call(null,cljs.core.vector,root,h_rule))))], null)], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#generator"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Entire board"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),"600px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid blue"], null),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 20 20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#tile-a0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#tile-a0",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(2 2) rotate(45)"], null)], null)], null)], null);
});
wouldchuck.core.rule_splainer = (function wouldchuck$core$rule_splainer(){
var rule = cljs.core.deref.call(null,wouldchuck.core.app_state).call(null,new cljs.core.Keyword("rule","string","rule/string",-1984981454));
var vec__24672 = clojure.string.split.call(null,rule,",");
var root_tile = cljs.core.nth.call(null,vec__24672,(0),null);
var h_rule = cljs.core.nth.call(null,vec__24672,(1),null);
var v_rule = cljs.core.nth.call(null,vec__24672,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The rule above consists of several parts separated by commas:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Root tile, here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),root_tile], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Horizontal production rule, here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),h_rule], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Vertical production rule, here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),v_rule], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The horizontal role determines how the first row is created, the vertical rule defines how the first row is copied. Both parts consist of digits from 0 to 3 inclusive. These digits mean:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"0: no change"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"1: 180\u00B0 rotation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"2: vertical flip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"3: horizontal flip"], null)], null)], null);
});
wouldchuck.core.main = (function wouldchuck$core$main(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/woodchuck.svg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.parameter_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.rule_splainer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.canvas], null)], null);
});
wouldchuck.core.mount_app_element = (function wouldchuck$core$mount_app_element(){
var temp__5457__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.main], null),el);
} else {
return null;
}
});
wouldchuck.core.mount_app_element.call(null);
wouldchuck.core.on_reload = (function wouldchuck$core$on_reload(){
return wouldchuck.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map

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
wouldchuck.core.variants = cljs.core.range.call(null,(4));
wouldchuck.core.roots = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null);
wouldchuck.core.colors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.hickory,wouldchuck.core.walnut], null);
wouldchuck.core.adjacent = cljs.core.zipmap.call(null,wouldchuck.core.colors,cljs.core.rest.call(null,cljs.core.cycle.call(null,wouldchuck.core.colors)));
wouldchuck.core.darken = (function wouldchuck$core$darken(var_args){
var G__21449 = arguments.length;
switch (G__21449) {
case 2:
return wouldchuck.core.darken.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return wouldchuck.core.darken.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wouldchuck.core.darken.cljs$core$IFn$_invoke$arity$2 = (function (hex_color,amount){
return goog.color.rgbArrayToHex(goog.color.darken(goog.color.hexToRgb(hex_color),amount));
});

wouldchuck.core.darken.cljs$core$IFn$_invoke$arity$1 = (function (hex_color){
return wouldchuck.core.darken.call(null,hex_color,0.25);
});

wouldchuck.core.darken.cljs$lang$maxFixedArity = 2;

wouldchuck.core.tile_width = (1);
wouldchuck.core.gutter_width = 0.5;
wouldchuck.core.eps_height = 0.1;
wouldchuck.core.sqrt2 = Math.sqrt((2));
wouldchuck.core.sqrt3 = Math.sqrt((3));
wouldchuck.core.sqrt5 = Math.sqrt((5));
wouldchuck.core.editable_keys = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("tile","ratio","tile/ratio",-921992190),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510),"Ratio (height/width):",new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855),new cljs.core.PersistentArrayMap(null, 5, ["1",(1),"\u221A2",wouldchuck.core.sqrt2,"\u221A3",wouldchuck.core.sqrt3,"2 (\u221A4)",(2),"\u221A5",wouldchuck.core.sqrt5], null),new cljs.core.Keyword("wouldchuck.core","coerce","wouldchuck.core/coerce",-140869634),parseFloat], null),new cljs.core.Keyword("tile","angle","tile/angle",1618207712),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510),"Angle (deg):",new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855),new cljs.core.PersistentArrayMap(null, 3, ["30\u00B0",(30),"45\u00B0",(45),"60\u00B0",(60)], null),new cljs.core.Keyword("wouldchuck.core","coerce","wouldchuck.core/coerce",-140869634),parseFloat], null),new cljs.core.Keyword("rule","string","rule/string",-1984981454),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510),"Rule:",new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855),new cljs.core.PersistentArrayMap(null, 2, ["Debug combo","ab,0123,0123","Hexagons","abba,0033,03"], null)], null),new cljs.core.Keyword("layout","rows","layout/rows",-191511306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510),"Rows:",new cljs.core.Keyword("wouldchuck.core","coerce","wouldchuck.core/coerce",-140869634),parseInt], null),new cljs.core.Keyword("layout","cols","layout/cols",1272147023),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510),"Cols:",new cljs.core.Keyword("wouldchuck.core","coerce","wouldchuck.core/coerce",-140869634),parseInt], null)], null);
wouldchuck.core.parameter_form = (function wouldchuck$core$parameter_form(){
var state = cljs.core.deref.call(null,wouldchuck.core.app_state);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"editable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Tile width \u225D 1 unit"], null),(function (){var iter__4324__auto__ = ((function (state){
return (function wouldchuck$core$parameter_form_$_iter__21452(s__21453){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__21453__$1 = s__21453;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21453__$1);
if(temp__5457__auto__){
var s__21453__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21453__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__21453__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__21455 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__21454 = (0);
while(true){
if((i__21454 < size__4323__auto__)){
var vec__21456 = cljs.core._nth.call(null,c__4322__auto__,i__21454);
var k = cljs.core.nth.call(null,vec__21456,(0),null);
var map__21459 = cljs.core.nth.call(null,vec__21456,(1),null);
var map__21459__$1 = ((((!((map__21459 == null)))?(((((map__21459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21459):map__21459);
var label = cljs.core.get.call(null,map__21459__$1,new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510));
var presets = cljs.core.get.call(null,map__21459__$1,new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855));
var coerce = cljs.core.get.call(null,map__21459__$1,new cljs.core.Keyword("wouldchuck.core","coerce","wouldchuck.core/coerce",-140869634),cljs.core.identity);
cljs.core.chunk_append.call(null,b__21455,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),state.call(null,k),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__21454,vec__21456,k,map__21459,map__21459__$1,label,presets,coerce,c__4322__auto__,size__4323__auto__,b__21455,s__21453__$2,temp__5457__auto__,state){
return (function (p1__21451_SHARP_){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,coerce.call(null,p1__21451_SHARP_.target.value));
});})(i__21454,vec__21456,k,map__21459,map__21459__$1,label,presets,coerce,c__4322__auto__,size__4323__auto__,b__21455,s__21453__$2,temp__5457__auto__,state))
], null)], null),(cljs.core.truth_(presets)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"presets"], null),(function (){var iter__4324__auto__ = ((function (i__21454,vec__21456,k,map__21459,map__21459__$1,label,presets,coerce,c__4322__auto__,size__4323__auto__,b__21455,s__21453__$2,temp__5457__auto__,state){
return (function wouldchuck$core$parameter_form_$_iter__21452_$_iter__21461(s__21462){
return (new cljs.core.LazySeq(null,((function (i__21454,vec__21456,k,map__21459,map__21459__$1,label,presets,coerce,c__4322__auto__,size__4323__auto__,b__21455,s__21453__$2,temp__5457__auto__,state){
return (function (){
var s__21462__$1 = s__21462;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__21462__$1);
if(temp__5457__auto____$1){
var s__21462__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21462__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__21462__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__21464 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__21463 = (0);
while(true){
if((i__21463 < size__4323__auto____$1)){
var vec__21465 = cljs.core._nth.call(null,c__4322__auto____$1,i__21463);
var preset = cljs.core.nth.call(null,vec__21465,(0),null);
var v = cljs.core.nth.call(null,vec__21465,(1),null);
cljs.core.chunk_append.call(null,b__21464,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21463,i__21454,vec__21465,preset,v,c__4322__auto____$1,size__4323__auto____$1,b__21464,s__21462__$2,temp__5457__auto____$1,vec__21456,k,map__21459,map__21459__$1,label,presets,coerce,c__4322__auto__,size__4323__auto__,b__21455,s__21453__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(i__21463,i__21454,vec__21465,preset,v,c__4322__auto____$1,size__4323__auto____$1,b__21464,s__21462__$2,temp__5457__auto____$1,vec__21456,k,map__21459,map__21459__$1,label,presets,coerce,c__4322__auto__,size__4323__auto__,b__21455,s__21453__$2,temp__5457__auto__,state))
], null),preset], null));

var G__21486 = (i__21463 + (1));
i__21463 = G__21486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21464),wouldchuck$core$parameter_form_$_iter__21452_$_iter__21461.call(null,cljs.core.chunk_rest.call(null,s__21462__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21464),null);
}
} else {
var vec__21468 = cljs.core.first.call(null,s__21462__$2);
var preset = cljs.core.nth.call(null,vec__21468,(0),null);
var v = cljs.core.nth.call(null,vec__21468,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21454,vec__21468,preset,v,s__21462__$2,temp__5457__auto____$1,vec__21456,k,map__21459,map__21459__$1,label,presets,coerce,c__4322__auto__,size__4323__auto__,b__21455,s__21453__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(i__21454,vec__21468,preset,v,s__21462__$2,temp__5457__auto____$1,vec__21456,k,map__21459,map__21459__$1,label,presets,coerce,c__4322__auto__,size__4323__auto__,b__21455,s__21453__$2,temp__5457__auto__,state))
], null),preset], null),wouldchuck$core$parameter_form_$_iter__21452_$_iter__21461.call(null,cljs.core.rest.call(null,s__21462__$2)));
}
} else {
return null;
}
break;
}
});})(i__21454,vec__21456,k,map__21459,map__21459__$1,label,presets,coerce,c__4322__auto__,size__4323__auto__,b__21455,s__21453__$2,temp__5457__auto__,state))
,null,null));
});})(i__21454,vec__21456,k,map__21459,map__21459__$1,label,presets,coerce,c__4322__auto__,size__4323__auto__,b__21455,s__21453__$2,temp__5457__auto__,state))
;
return iter__4324__auto__.call(null,presets);
})()], null)):null)], null));

var G__21487 = (i__21454 + (1));
i__21454 = G__21487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21455),wouldchuck$core$parameter_form_$_iter__21452.call(null,cljs.core.chunk_rest.call(null,s__21453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21455),null);
}
} else {
var vec__21471 = cljs.core.first.call(null,s__21453__$2);
var k = cljs.core.nth.call(null,vec__21471,(0),null);
var map__21474 = cljs.core.nth.call(null,vec__21471,(1),null);
var map__21474__$1 = ((((!((map__21474 == null)))?(((((map__21474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21474):map__21474);
var label = cljs.core.get.call(null,map__21474__$1,new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510));
var presets = cljs.core.get.call(null,map__21474__$1,new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855));
var coerce = cljs.core.get.call(null,map__21474__$1,new cljs.core.Keyword("wouldchuck.core","coerce","wouldchuck.core/coerce",-140869634),cljs.core.identity);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),state.call(null,k),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__21471,k,map__21474,map__21474__$1,label,presets,coerce,s__21453__$2,temp__5457__auto__,state){
return (function (p1__21451_SHARP_){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,coerce.call(null,p1__21451_SHARP_.target.value));
});})(vec__21471,k,map__21474,map__21474__$1,label,presets,coerce,s__21453__$2,temp__5457__auto__,state))
], null)], null),(cljs.core.truth_(presets)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"presets"], null),(function (){var iter__4324__auto__ = ((function (vec__21471,k,map__21474,map__21474__$1,label,presets,coerce,s__21453__$2,temp__5457__auto__,state){
return (function wouldchuck$core$parameter_form_$_iter__21452_$_iter__21476(s__21477){
return (new cljs.core.LazySeq(null,((function (vec__21471,k,map__21474,map__21474__$1,label,presets,coerce,s__21453__$2,temp__5457__auto__,state){
return (function (){
var s__21477__$1 = s__21477;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__21477__$1);
if(temp__5457__auto____$1){
var s__21477__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21477__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__21477__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__21479 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__21478 = (0);
while(true){
if((i__21478 < size__4323__auto__)){
var vec__21480 = cljs.core._nth.call(null,c__4322__auto__,i__21478);
var preset = cljs.core.nth.call(null,vec__21480,(0),null);
var v = cljs.core.nth.call(null,vec__21480,(1),null);
cljs.core.chunk_append.call(null,b__21479,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21478,vec__21480,preset,v,c__4322__auto__,size__4323__auto__,b__21479,s__21477__$2,temp__5457__auto____$1,vec__21471,k,map__21474,map__21474__$1,label,presets,coerce,s__21453__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(i__21478,vec__21480,preset,v,c__4322__auto__,size__4323__auto__,b__21479,s__21477__$2,temp__5457__auto____$1,vec__21471,k,map__21474,map__21474__$1,label,presets,coerce,s__21453__$2,temp__5457__auto__,state))
], null),preset], null));

var G__21488 = (i__21478 + (1));
i__21478 = G__21488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21479),wouldchuck$core$parameter_form_$_iter__21452_$_iter__21476.call(null,cljs.core.chunk_rest.call(null,s__21477__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21479),null);
}
} else {
var vec__21483 = cljs.core.first.call(null,s__21477__$2);
var preset = cljs.core.nth.call(null,vec__21483,(0),null);
var v = cljs.core.nth.call(null,vec__21483,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__21483,preset,v,s__21477__$2,temp__5457__auto____$1,vec__21471,k,map__21474,map__21474__$1,label,presets,coerce,s__21453__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(vec__21483,preset,v,s__21477__$2,temp__5457__auto____$1,vec__21471,k,map__21474,map__21474__$1,label,presets,coerce,s__21453__$2,temp__5457__auto__,state))
], null),preset], null),wouldchuck$core$parameter_form_$_iter__21452_$_iter__21476.call(null,cljs.core.rest.call(null,s__21477__$2)));
}
} else {
return null;
}
break;
}
});})(vec__21471,k,map__21474,map__21474__$1,label,presets,coerce,s__21453__$2,temp__5457__auto__,state))
,null,null));
});})(vec__21471,k,map__21474,map__21474__$1,label,presets,coerce,s__21453__$2,temp__5457__auto__,state))
;
return iter__4324__auto__.call(null,presets);
})()], null)):null)], null),wouldchuck$core$parameter_form_$_iter__21452.call(null,cljs.core.rest.call(null,s__21453__$2)));
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
wouldchuck.core.full_presets = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Hexagons",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("rule","string","rule/string",-1984981454),"abba,0033,03",new cljs.core.Keyword("layout","cols","layout/cols",1272147023),(18),new cljs.core.Keyword("layout","rows","layout/rows",-191511306),(8),new cljs.core.Keyword("tile","angle","tile/angle",1618207712),(30),new cljs.core.Keyword("tile","ratio","tile/ratio",-921992190),wouldchuck.core.sqrt2], null)], null)], null);
wouldchuck.core.full_presets_form = (function wouldchuck$core$full_presets_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Example presets: "], null),(function (){var iter__4324__auto__ = (function wouldchuck$core$full_presets_form_$_iter__21489(s__21490){
return (new cljs.core.LazySeq(null,(function (){
var s__21490__$1 = s__21490;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21490__$1);
if(temp__5457__auto__){
var s__21490__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21490__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__21490__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__21492 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__21491 = (0);
while(true){
if((i__21491 < size__4323__auto__)){
var map__21493 = cljs.core._nth.call(null,c__4322__auto__,i__21491);
var map__21493__$1 = ((((!((map__21493 == null)))?(((((map__21493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21493):map__21493);
var name = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var values = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"values","values",372645556));
cljs.core.chunk_append.call(null,b__21492,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21491,map__21493,map__21493__$1,name,values,c__4322__auto__,size__4323__auto__,b__21492,s__21490__$2,temp__5457__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.merge,values);
});})(i__21491,map__21493,map__21493__$1,name,values,c__4322__auto__,size__4323__auto__,b__21492,s__21490__$2,temp__5457__auto__))
], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)));

var G__21497 = (i__21491 + (1));
i__21491 = G__21497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21492),wouldchuck$core$full_presets_form_$_iter__21489.call(null,cljs.core.chunk_rest.call(null,s__21490__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21492),null);
}
} else {
var map__21495 = cljs.core.first.call(null,s__21490__$2);
var map__21495__$1 = ((((!((map__21495 == null)))?(((((map__21495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21495):map__21495);
var name = cljs.core.get.call(null,map__21495__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var values = cljs.core.get.call(null,map__21495__$1,new cljs.core.Keyword(null,"values","values",372645556));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21495,map__21495__$1,name,values,s__21490__$2,temp__5457__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.merge,values);
});})(map__21495,map__21495__$1,name,values,s__21490__$2,temp__5457__auto__))
], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)),wouldchuck$core$full_presets_form_$_iter__21489.call(null,cljs.core.rest.call(null,s__21490__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,wouldchuck.core.full_presets);
})()], null);
});
wouldchuck.core.highlight_filter = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter#highlight","filter#highlight",891692793),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feColorMatrix","feColorMatrix",-1697260201),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"matrix",new cljs.core.Keyword(null,"values","values",372645556),clojure.string.join.call(null," ",cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0)], null)], null)))], null)], null)], null);
/**
 * Given an object's width, height, and a variant (given by a string 0, 1, 2, 3 as
 *   defined elsewhere in the app), produce a SVG specification of said transform.
 */
wouldchuck.core.transform = (function wouldchuck$core$transform(width,height,variant){
var hw = (width / (2));
var hh = (height / (2));
var center = ["translate(-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hw),", -",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hh),")"].join('');
var G__21498 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join('');
switch (G__21498) {
case "0":
return null;

break;
case "1":
return ["rotate(180, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hw),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hh),")"].join('');

break;
case "2":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(center)," scale(1, -1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hw),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((- hh) - height)),")"].join('');

break;
case "3":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(center)," scale(-1, 1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((- hw) - width)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hh),")"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21498)].join('')));

}
});
wouldchuck.core.canvas = (function wouldchuck$core$canvas(){
var state = cljs.core.deref.call(null,wouldchuck.core.app_state);
var tile_height = (wouldchuck.core.tile_width * new cljs.core.Keyword("tile","ratio","tile/ratio",-921992190).cljs$core$IFn$_invoke$arity$1(state));
var map__21500 = state;
var map__21500__$1 = ((((!((map__21500 == null)))?(((((map__21500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21500):map__21500);
var rows = cljs.core.get.call(null,map__21500__$1,new cljs.core.Keyword("layout","rows","layout/rows",-191511306));
var cols = cljs.core.get.call(null,map__21500__$1,new cljs.core.Keyword("layout","cols","layout/cols",1272147023));
var make_tile = ((function (state,tile_height,map__21500,map__21500__$1,rows,cols){
return (function (root,variant,base_color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["tile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"tile-root",new cljs.core.Keyword(null,"transform","transform",1381301764),wouldchuck.core.transform.call(null,wouldchuck.core.tile_width,tile_height,variant)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"tile-base",new cljs.core.Keyword(null,"id","id",-1388402092),["tile-base-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),wouldchuck.core.tile_width,new cljs.core.Keyword(null,"height","height",1025178622),tile_height,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),base_color,new cljs.core.Keyword(null,"stroke","stroke",1741823555),wouldchuck.core.darken.call(null,base_color),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.05"], null)], null)], null),(function (){var w = wouldchuck.core.tile_width;
var t = Math.tan(goog.math.toRadians(new cljs.core.Keyword("tile","angle","tile/angle",1618207712).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["tile-notch-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join(''),new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.partial.call(null,clojure.string.join,","),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,(w * t)], null)], null))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),wouldchuck.core.adjacent.call(null,base_color),new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#tile-base-clip)"], null)], null)], null);
})()], null)], null);
});})(state,tile_height,map__21500,map__21500__$1,rows,cols))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Base tiles and variants"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),(function (){var n_tiles = (cljs.core.count.call(null,wouldchuck.core.roots) * cljs.core.count.call(null,wouldchuck.core.variants));
var viewbox_width = ((wouldchuck.core.tile_width * n_tiles) + (wouldchuck.core.gutter_width * (n_tiles - (1))));
var label_height = (1);
var viewbox_height = (tile_height + label_height);
var zoom_ratio = (35);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"sample",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom_ratio * viewbox_width)),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom_ratio * viewbox_height)),"px"].join(''),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),viewbox_width,viewbox_height], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null);
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),wouldchuck.core.highlight_filter,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [make_tile,"sample","0","#000"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tile-base-clip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#tile-base-sample0"], null)], null)], null),(function (){var iter__4324__auto__ = ((function (state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function wouldchuck$core$canvas_$_iter__21502(s__21503){
return (new cljs.core.LazySeq(null,((function (state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function (){
var s__21503__$1 = s__21503;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21503__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var root = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__21503__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function wouldchuck$core$canvas_$_iter__21502_$_iter__21504(s__21505){
return (new cljs.core.LazySeq(null,((function (s__21503__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function (){
var s__21505__$1 = s__21505;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__21505__$1);
if(temp__5457__auto____$1){
var s__21505__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21505__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__21505__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__21507 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__21506 = (0);
while(true){
if((i__21506 < size__4323__auto__)){
var variant = cljs.core._nth.call(null,c__4322__auto__,i__21506);
var color = (function (){var G__21508 = root;
switch (G__21508) {
case "a":
return wouldchuck.core.walnut;

break;
case "b":
return wouldchuck.core.hickory;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21508)].join('')));

}
})();
cljs.core.chunk_append.call(null,b__21507,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [make_tile,root,variant,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,variant,color], null)], null)));

var G__21541 = (i__21506 + (1));
i__21506 = G__21541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21507),wouldchuck$core$canvas_$_iter__21502_$_iter__21504.call(null,cljs.core.chunk_rest.call(null,s__21505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21507),null);
}
} else {
var variant = cljs.core.first.call(null,s__21505__$2);
var color = (function (){var G__21509 = root;
switch (G__21509) {
case "a":
return wouldchuck.core.walnut;

break;
case "b":
return wouldchuck.core.hickory;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21509)].join('')));

}
})();
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [make_tile,root,variant,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,variant,color], null)], null)),wouldchuck$core$canvas_$_iter__21502_$_iter__21504.call(null,cljs.core.rest.call(null,s__21505__$2)));
}
} else {
return null;
}
break;
}
});})(s__21503__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
,null,null));
});})(s__21503__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1","2","3"], null)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,wouldchuck$core$canvas_$_iter__21502.call(null,cljs.core.rest.call(null,s__21503__$1)));
} else {
var G__21543 = cljs.core.rest.call(null,s__21503__$1);
s__21503__$1 = G__21543;
continue;
}
} else {
return null;
}
break;
}
});})(state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
,null,null));
});})(state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
;
return iter__4324__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null));
})()], null),cljs.core.map_indexed.call(null,((function (state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function (i,p__21510){
var vec__21511 = p__21510;
var root = cljs.core.nth.call(null,vec__21511,(0),null);
var variant = cljs.core.nth.call(null,vec__21511,(1),null);
var x = (i * (wouldchuck.core.gutter_width + wouldchuck.core.tile_width));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),["#tile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(x + (wouldchuck.core.tile_width / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(tile_height + 0.2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"hanging",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.5pt"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join('')], null)], null);
});})(state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
,(function (){var iter__4324__auto__ = ((function (state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function wouldchuck$core$canvas_$_iter__21514(s__21515){
return (new cljs.core.LazySeq(null,((function (state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function (){
var s__21515__$1 = s__21515;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21515__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var root = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__21515__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function wouldchuck$core$canvas_$_iter__21514_$_iter__21516(s__21517){
return (new cljs.core.LazySeq(null,((function (s__21515__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function (){
var s__21517__$1 = s__21517;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__21517__$1);
if(temp__5457__auto____$1){
var s__21517__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21517__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__21517__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__21519 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__21518 = (0);
while(true){
if((i__21518 < size__4323__auto__)){
var variant = cljs.core._nth.call(null,c__4322__auto__,i__21518);
cljs.core.chunk_append.call(null,b__21519,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,variant], null));

var G__21544 = (i__21518 + (1));
i__21518 = G__21544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21519),wouldchuck$core$canvas_$_iter__21514_$_iter__21516.call(null,cljs.core.chunk_rest.call(null,s__21517__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21519),null);
}
} else {
var variant = cljs.core.first.call(null,s__21517__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,variant], null),wouldchuck$core$canvas_$_iter__21514_$_iter__21516.call(null,cljs.core.rest.call(null,s__21517__$2)));
}
} else {
return null;
}
break;
}
});})(s__21515__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
,null,null));
});})(s__21515__$1,root,xs__6012__auto__,temp__5457__auto__,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1","2","3"], null)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,wouldchuck$core$canvas_$_iter__21514.call(null,cljs.core.rest.call(null,s__21515__$1)));
} else {
var G__21545 = cljs.core.rest.call(null,s__21515__$1);
s__21515__$1 = G__21545;
continue;
}
} else {
return null;
}
break;
}
});})(state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
,null,null));
});})(state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
;
return iter__4324__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null));
})())], null),(function (){var cols__$1 = state.call(null,new cljs.core.Keyword("layout","cols","layout/cols",1272147023));
var viewbox_width = (cols__$1 * wouldchuck.core.tile_width);
var viewbox_height = ((5) * tile_height);
var zoom_ratio = (35);
var vec__21520 = clojure.string.split.call(null,new cljs.core.Keyword("rule","string","rule/string",-1984981454).cljs$core$IFn$_invoke$arity$1(state),",");
var root = cljs.core.nth.call(null,vec__21520,(0),null);
var h_rule = cljs.core.nth.call(null,vec__21520,(1),null);
var tiles = cljs.core.take.call(null,cols__$1,cljs.core.map.call(null,cljs.core.vector,cljs.core.cycle.call(null,root),cljs.core.cycle.call(null,h_rule)));
var row_transform = cljs.core.partial.call(null,wouldchuck.core.transform,(cols__$1 * wouldchuck.core.tile_width),tile_height);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Row variants"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"row-demo",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom_ratio * viewbox_width)),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom_ratio * viewbox_height)),"px"].join(''),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),viewbox_width,viewbox_height], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"generator-row"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.map_indexed.call(null,((function (cols__$1,viewbox_width,viewbox_height,zoom_ratio,vec__21520,root,h_rule,tiles,row_transform,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function (i,p__21523){
var vec__21524 = p__21523;
var tile = cljs.core.nth.call(null,vec__21524,(0),null);
var variant = cljs.core.nth.call(null,vec__21524,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"href","href",-793805698),["#tile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tile),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});})(cols__$1,viewbox_width,viewbox_height,zoom_ratio,vec__21520,root,h_rule,tiles,row_transform,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
,tiles)], null)], null),(function (){var iter__4324__auto__ = ((function (cols__$1,viewbox_width,viewbox_height,zoom_ratio,vec__21520,root,h_rule,tiles,row_transform,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function wouldchuck$core$canvas_$_iter__21527(s__21528){
return (new cljs.core.LazySeq(null,((function (cols__$1,viewbox_width,viewbox_height,zoom_ratio,vec__21520,root,h_rule,tiles,row_transform,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function (){
var s__21528__$1 = s__21528;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21528__$1);
if(temp__5457__auto__){
var s__21528__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21528__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__21528__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__21530 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__21529 = (0);
while(true){
if((i__21529 < size__4323__auto__)){
var variant = cljs.core._nth.call(null,c__4322__auto__,i__21529);
cljs.core.chunk_append.call(null,b__21530,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#generator-row",new cljs.core.Keyword(null,"transform","transform",1381301764),row_transform.call(null,variant)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),variant], null)));

var G__21546 = (i__21529 + (1));
i__21529 = G__21546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21530),wouldchuck$core$canvas_$_iter__21527.call(null,cljs.core.chunk_rest.call(null,s__21528__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21530),null);
}
} else {
var variant = cljs.core.first.call(null,s__21528__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#generator-row",new cljs.core.Keyword(null,"transform","transform",1381301764),row_transform.call(null,variant)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),variant], null)),wouldchuck$core$canvas_$_iter__21527.call(null,cljs.core.rest.call(null,s__21528__$2)));
}
} else {
return null;
}
break;
}
});})(cols__$1,viewbox_width,viewbox_height,zoom_ratio,vec__21520,root,h_rule,tiles,row_transform,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
,null,null));
});})(cols__$1,viewbox_width,viewbox_height,zoom_ratio,vec__21520,root,h_rule,tiles,row_transform,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(4)));
})()], null),(function (){var iter__4324__auto__ = ((function (cols__$1,viewbox_width,viewbox_height,zoom_ratio,vec__21520,root,h_rule,tiles,row_transform,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function wouldchuck$core$canvas_$_iter__21531(s__21532){
return (new cljs.core.LazySeq(null,((function (cols__$1,viewbox_width,viewbox_height,zoom_ratio,vec__21520,root,h_rule,tiles,row_transform,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function (){
var s__21532__$1 = s__21532;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21532__$1);
if(temp__5457__auto__){
var s__21532__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21532__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__21532__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__21534 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__21533 = (0);
while(true){
if((i__21533 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__21533);
cljs.core.chunk_append.call(null,b__21534,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"y","y",-1757859776),((i + (1)) * tile_height)], null)], null));

var G__21547 = (i__21533 + (1));
i__21533 = G__21547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21534),wouldchuck$core$canvas_$_iter__21531.call(null,cljs.core.chunk_rest.call(null,s__21532__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21534),null);
}
} else {
var i = cljs.core.first.call(null,s__21532__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"y","y",-1757859776),((i + (1)) * tile_height)], null)], null),wouldchuck$core$canvas_$_iter__21531.call(null,cljs.core.rest.call(null,s__21532__$2)));
}
} else {
return null;
}
break;
}
});})(cols__$1,viewbox_width,viewbox_height,zoom_ratio,vec__21520,root,h_rule,tiles,row_transform,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
,null,null));
});})(cols__$1,viewbox_width,viewbox_height,zoom_ratio,vec__21520,root,h_rule,tiles,row_transform,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(4)));
})()], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Entire board"], null),(function (){var map__21535 = state;
var map__21535__$1 = ((((!((map__21535 == null)))?(((((map__21535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21535):map__21535);
var cols__$1 = cljs.core.get.call(null,map__21535__$1,new cljs.core.Keyword("layout","cols","layout/cols",1272147023));
var rows__$1 = cljs.core.get.call(null,map__21535__$1,new cljs.core.Keyword("layout","rows","layout/rows",-191511306));
var viewbox_width = (cols__$1 * wouldchuck.core.tile_width);
var viewbox_height = (rows__$1 * tile_height);
var zoom_ratio = (35);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom_ratio * viewbox_width)),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom_ratio * viewbox_height)),"px"].join(''),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),viewbox_width,viewbox_height], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),(function (){var vec__21537 = clojure.string.split.call(null,new cljs.core.Keyword("rule","string","rule/string",-1984981454).cljs$core$IFn$_invoke$arity$1(state),",");
var _ = cljs.core.nth.call(null,vec__21537,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__21537,(1),null);
var v_rule = cljs.core.nth.call(null,vec__21537,(2),null);
var row_variants = cljs.core.take.call(null,rows__$1,cljs.core.cycle.call(null,v_rule));
return cljs.core.map_indexed.call(null,((function (vec__21537,_,___$1,v_rule,row_variants,map__21535,map__21535__$1,cols__$1,rows__$1,viewbox_width,viewbox_height,zoom_ratio,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile){
return (function (i,row_variant){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_variant)].join(''),new cljs.core.Keyword(null,"y","y",-1757859776),((i * tile_height) - wouldchuck.core.eps_height)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});})(vec__21537,_,___$1,v_rule,row_variants,map__21535,map__21535__$1,cols__$1,rows__$1,viewbox_width,viewbox_height,zoom_ratio,state,tile_height,map__21500,map__21500__$1,rows,cols,make_tile))
,row_variants);
})()], null);
})()], null)], null);
});
wouldchuck.core.rule_splainer = (function wouldchuck$core$rule_splainer(){
var rule = cljs.core.deref.call(null,wouldchuck.core.app_state).call(null,new cljs.core.Keyword("rule","string","rule/string",-1984981454));
var vec__21548 = clojure.string.split.call(null,rule,",");
var root_tile = cljs.core.nth.call(null,vec__21548,(0),null);
var h_rule = cljs.core.nth.call(null,vec__21548,(1),null);
var v_rule = cljs.core.nth.call(null,vec__21548,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The rule above consists of several parts separated by commas:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Base pattern, here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),root_tile], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Horizontal production rule, here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),h_rule], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Vertical production rule, here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),v_rule], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The horizontal role determines how the first row is created, the vertical rule defines how the first row is copied to produce the following rows. Both parts consist of digits from 0 to 3 inclusive. These digits mean:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"0: no change"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"1: 180\u00B0 rotation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"2: vertical flip \u2195"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"3: horizontal flip \u2194"], null)], null)], null);
});
wouldchuck.core.main = (function wouldchuck$core$main(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/woodchuck.svg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.parameter_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.full_presets_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.rule_splainer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.canvas], null)], null);
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

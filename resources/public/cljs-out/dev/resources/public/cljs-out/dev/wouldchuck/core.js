// Compiled by ClojureScript 1.10.339 {}
goog.provide('wouldchuck.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.color');
goog.require('reagent.core');
goog.require('clojure.string');
if((typeof wouldchuck !== 'undefined') && (typeof wouldchuck.core !== 'undefined') && (typeof wouldchuck.core.app_state !== 'undefined')){
} else {
wouldchuck.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("tile","ratio","tile/ratio",-921992190),1.5,new cljs.core.Keyword("tile","angle","tile/angle",1618207712),(45),new cljs.core.Keyword("layout","rows","layout/rows",-191511306),(10),new cljs.core.Keyword("layout","cols","layout/cols",1272147023),(10)], null));
}
wouldchuck.core.hickory = "#FFF8DC";
wouldchuck.core.walnut = "#8B4513";
wouldchuck.core.colors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wouldchuck.core.hickory,wouldchuck.core.walnut], null);
wouldchuck.core.adjacent = cljs.core.zipmap.call(null,wouldchuck.core.colors,cljs.core.rest.call(null,cljs.core.cycle.call(null,wouldchuck.core.colors)));
wouldchuck.core.darken = (function wouldchuck$core$darken(hex_color){
return goog.color.rgbToHex(goog.color.darken(goog.color.hexToRgb(hex_color),0.2));
});
wouldchuck.core.editable_keys = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tile","ratio","tile/ratio",-921992190),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510),"Ratio (height/width):",new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855),new cljs.core.PersistentArrayMap(null, 3, ["1",(1),"\u221A2",Math.sqrt((2)),"\u221A3",Math.sqrt((3))], null)], null),new cljs.core.Keyword("tile","angle","tile/angle",1618207712),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510),"Angle (deg):",new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855),new cljs.core.PersistentArrayMap(null, 3, ["30\u00B0",(30),"45\u00B0",(45),"60\u00B0",(60)], null)], null)], null);
wouldchuck.core.main = (function wouldchuck$core$main(){
var state = cljs.core.deref.call(null,wouldchuck.core.app_state);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/woodchuck.svg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"right","right",-452581833),"10px"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"editable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Tile width \u225D 1 unit"], null),(function (){var iter__4324__auto__ = ((function (state){
return (function wouldchuck$core$main_$_iter__23428(s__23429){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__23429__$1 = s__23429;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23429__$1);
if(temp__5457__auto__){
var s__23429__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23429__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23429__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23431 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23430 = (0);
while(true){
if((i__23430 < size__4323__auto__)){
var vec__23432 = cljs.core._nth.call(null,c__4322__auto__,i__23430);
var k = cljs.core.nth.call(null,vec__23432,(0),null);
var map__23435 = cljs.core.nth.call(null,vec__23432,(1),null);
var map__23435__$1 = ((((!((map__23435 == null)))?(((((map__23435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23435):map__23435);
var label = cljs.core.get.call(null,map__23435__$1,new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510));
var presets = cljs.core.get.call(null,map__23435__$1,new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855));
cljs.core.chunk_append.call(null,b__23431,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),state.call(null,k),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__23430,vec__23432,k,map__23435,map__23435__$1,label,presets,c__4322__auto__,size__4323__auto__,b__23431,s__23429__$2,temp__5457__auto__,state){
return (function (p1__23427_SHARP_){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,p1__23427_SHARP_.target.value);
});})(i__23430,vec__23432,k,map__23435,map__23435__$1,label,presets,c__4322__auto__,size__4323__auto__,b__23431,s__23429__$2,temp__5457__auto__,state))
], null)], null),(cljs.core.truth_(presets)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"presets"], null),(function (){var iter__4324__auto__ = ((function (i__23430,vec__23432,k,map__23435,map__23435__$1,label,presets,c__4322__auto__,size__4323__auto__,b__23431,s__23429__$2,temp__5457__auto__,state){
return (function wouldchuck$core$main_$_iter__23428_$_iter__23437(s__23438){
return (new cljs.core.LazySeq(null,((function (i__23430,vec__23432,k,map__23435,map__23435__$1,label,presets,c__4322__auto__,size__4323__auto__,b__23431,s__23429__$2,temp__5457__auto__,state){
return (function (){
var s__23438__$1 = s__23438;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__23438__$1);
if(temp__5457__auto____$1){
var s__23438__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23438__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__23438__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__23440 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__23439 = (0);
while(true){
if((i__23439 < size__4323__auto____$1)){
var vec__23441 = cljs.core._nth.call(null,c__4322__auto____$1,i__23439);
var preset = cljs.core.nth.call(null,vec__23441,(0),null);
var v = cljs.core.nth.call(null,vec__23441,(1),null);
cljs.core.chunk_append.call(null,b__23440,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23439,i__23430,vec__23441,preset,v,c__4322__auto____$1,size__4323__auto____$1,b__23440,s__23438__$2,temp__5457__auto____$1,vec__23432,k,map__23435,map__23435__$1,label,presets,c__4322__auto__,size__4323__auto__,b__23431,s__23429__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(i__23439,i__23430,vec__23441,preset,v,c__4322__auto____$1,size__4323__auto____$1,b__23440,s__23438__$2,temp__5457__auto____$1,vec__23432,k,map__23435,map__23435__$1,label,presets,c__4322__auto__,size__4323__auto__,b__23431,s__23429__$2,temp__5457__auto__,state))
], null),preset], null));

var G__23464 = (i__23439 + (1));
i__23439 = G__23464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23440),wouldchuck$core$main_$_iter__23428_$_iter__23437.call(null,cljs.core.chunk_rest.call(null,s__23438__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23440),null);
}
} else {
var vec__23444 = cljs.core.first.call(null,s__23438__$2);
var preset = cljs.core.nth.call(null,vec__23444,(0),null);
var v = cljs.core.nth.call(null,vec__23444,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23430,vec__23444,preset,v,s__23438__$2,temp__5457__auto____$1,vec__23432,k,map__23435,map__23435__$1,label,presets,c__4322__auto__,size__4323__auto__,b__23431,s__23429__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(i__23430,vec__23444,preset,v,s__23438__$2,temp__5457__auto____$1,vec__23432,k,map__23435,map__23435__$1,label,presets,c__4322__auto__,size__4323__auto__,b__23431,s__23429__$2,temp__5457__auto__,state))
], null),preset], null),wouldchuck$core$main_$_iter__23428_$_iter__23437.call(null,cljs.core.rest.call(null,s__23438__$2)));
}
} else {
return null;
}
break;
}
});})(i__23430,vec__23432,k,map__23435,map__23435__$1,label,presets,c__4322__auto__,size__4323__auto__,b__23431,s__23429__$2,temp__5457__auto__,state))
,null,null));
});})(i__23430,vec__23432,k,map__23435,map__23435__$1,label,presets,c__4322__auto__,size__4323__auto__,b__23431,s__23429__$2,temp__5457__auto__,state))
;
return iter__4324__auto__.call(null,presets);
})()], null)):null)], null));

var G__23465 = (i__23430 + (1));
i__23430 = G__23465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23431),wouldchuck$core$main_$_iter__23428.call(null,cljs.core.chunk_rest.call(null,s__23429__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23431),null);
}
} else {
var vec__23447 = cljs.core.first.call(null,s__23429__$2);
var k = cljs.core.nth.call(null,vec__23447,(0),null);
var map__23450 = cljs.core.nth.call(null,vec__23447,(1),null);
var map__23450__$1 = ((((!((map__23450 == null)))?(((((map__23450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23450):map__23450);
var label = cljs.core.get.call(null,map__23450__$1,new cljs.core.Keyword("wouldchuck.core","label","wouldchuck.core/label",-508901510));
var presets = cljs.core.get.call(null,map__23450__$1,new cljs.core.Keyword("wouldchuck.core","presets","wouldchuck.core/presets",1587051855));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),state.call(null,k),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__23447,k,map__23450,map__23450__$1,label,presets,s__23429__$2,temp__5457__auto__,state){
return (function (p1__23427_SHARP_){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,p1__23427_SHARP_.target.value);
});})(vec__23447,k,map__23450,map__23450__$1,label,presets,s__23429__$2,temp__5457__auto__,state))
], null)], null),(cljs.core.truth_(presets)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"presets"], null),(function (){var iter__4324__auto__ = ((function (vec__23447,k,map__23450,map__23450__$1,label,presets,s__23429__$2,temp__5457__auto__,state){
return (function wouldchuck$core$main_$_iter__23428_$_iter__23452(s__23453){
return (new cljs.core.LazySeq(null,((function (vec__23447,k,map__23450,map__23450__$1,label,presets,s__23429__$2,temp__5457__auto__,state){
return (function (){
var s__23453__$1 = s__23453;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__23453__$1);
if(temp__5457__auto____$1){
var s__23453__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23453__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23453__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23455 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23454 = (0);
while(true){
if((i__23454 < size__4323__auto__)){
var vec__23456 = cljs.core._nth.call(null,c__4322__auto__,i__23454);
var preset = cljs.core.nth.call(null,vec__23456,(0),null);
var v = cljs.core.nth.call(null,vec__23456,(1),null);
cljs.core.chunk_append.call(null,b__23455,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23454,vec__23456,preset,v,c__4322__auto__,size__4323__auto__,b__23455,s__23453__$2,temp__5457__auto____$1,vec__23447,k,map__23450,map__23450__$1,label,presets,s__23429__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(i__23454,vec__23456,preset,v,c__4322__auto__,size__4323__auto__,b__23455,s__23453__$2,temp__5457__auto____$1,vec__23447,k,map__23450,map__23450__$1,label,presets,s__23429__$2,temp__5457__auto__,state))
], null),preset], null));

var G__23466 = (i__23454 + (1));
i__23454 = G__23466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23455),wouldchuck$core$main_$_iter__23428_$_iter__23452.call(null,cljs.core.chunk_rest.call(null,s__23453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23455),null);
}
} else {
var vec__23459 = cljs.core.first.call(null,s__23453__$2);
var preset = cljs.core.nth.call(null,vec__23459,(0),null);
var v = cljs.core.nth.call(null,vec__23459,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__23459,preset,v,s__23453__$2,temp__5457__auto____$1,vec__23447,k,map__23450,map__23450__$1,label,presets,s__23429__$2,temp__5457__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,wouldchuck.core.app_state,cljs.core.assoc,k,v);
});})(vec__23459,preset,v,s__23453__$2,temp__5457__auto____$1,vec__23447,k,map__23450,map__23450__$1,label,presets,s__23429__$2,temp__5457__auto__,state))
], null),preset], null),wouldchuck$core$main_$_iter__23428_$_iter__23452.call(null,cljs.core.rest.call(null,s__23453__$2)));
}
} else {
return null;
}
break;
}
});})(vec__23447,k,map__23450,map__23450__$1,label,presets,s__23429__$2,temp__5457__auto__,state))
,null,null));
});})(vec__23447,k,map__23450,map__23450__$1,label,presets,s__23429__$2,temp__5457__auto__,state))
;
return iter__4324__auto__.call(null,presets);
})()], null)):null)], null),wouldchuck$core$main_$_iter__23428.call(null,cljs.core.rest.call(null,s__23429__$2)));
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
})()], null),(function (){var tile_width = (1);
var tile_height = (tile_width * new cljs.core.Keyword("tile","ratio","tile/ratio",-921992190).cljs$core$IFn$_invoke$arity$1(state));
var map__23462 = state;
var map__23462__$1 = ((((!((map__23462 == null)))?(((((map__23462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23462):map__23462);
var rows = cljs.core.get.call(null,map__23462__$1,new cljs.core.Keyword("layout","rows","layout/rows",-191511306));
var cols = cljs.core.get.call(null,map__23462__$1,new cljs.core.Keyword("layout","cols","layout/cols",1272147023));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"sample",new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 3 3",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid red",new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),(function (){var make_tile = ((function (tile_width,tile_height,map__23462,map__23462__$1,rows,cols,state){
return (function (sym,color){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["tile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["tile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"-base"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),tile_width,new cljs.core.Keyword(null,"height","height",1025178622),tile_height,new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"stroke","stroke",1741823555),color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"-notch"].join('')], null)], null)], null);
});})(tile_width,tile_height,map__23462,map__23462__$1,rows,cols,state))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),make_tile.call(null,"a",wouldchuck.core.hickory),make_tile.call(null,"b",wouldchuck.core.walnut)], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#tile-a",new cljs.core.Keyword(null,"x","x",2099068185),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#tile-b",new cljs.core.Keyword(null,"x","x",2099068185),(2)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),"600px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid blue"], null),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 20 20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#tile-a"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#tile-a",new cljs.core.Keyword(null,"fill","fill",883462889),"blue",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(2 2) rotate(45)"], null)], null)], null)], null);
})()], null);
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

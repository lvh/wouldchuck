// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__12241_SHARP_){
var k = f.call(null,p1__12241_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12242){
var vec__12243 = p__12242;
var k = cljs.core.nth.call(null,vec__12243,(0),null);
var v = cljs.core.nth.call(null,vec__12243,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12247 = arguments.length;
var i__4532__auto___12248 = (0);
while(true){
if((i__4532__auto___12248 < len__4531__auto___12247)){
args__4534__auto__.push((arguments[i__4532__auto___12248]));

var G__12249 = (i__4532__auto___12248 + (1));
i__4532__auto___12248 = G__12249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq12246){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12246));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__12252){
var map__12253 = p__12252;
var map__12253__$1 = ((((!((map__12253 == null)))?(((((map__12253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12253):map__12253);
var message = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__12253,map__12253__$1,message,column){
return (function (p1__12251_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12251_SHARP_], null)));
});})(map__12253,map__12253__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__12253,map__12253__$1,message,column){
return (function (p1__12250_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__12250_SHARP_);
});})(map__12253,map__12253__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__12256){
var map__12257 = p__12256;
var map__12257__$1 = ((((!((map__12257 == null)))?(((((map__12257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12257):map__12257);
var message_data = map__12257__$1;
var message = cljs.core.get.call(null,map__12257__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__12257__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12257__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__12257__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__12259 = file_excerpt;
var map__12259__$1 = ((((!((map__12259 == null)))?(((((map__12259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12259):map__12259);
var start_line = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__12259,map__12259__$1,start_line,path,excerpt,map__12257,map__12257__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__12259,map__12259__$1,start_line,path,excerpt,map__12257,map__12257__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__12260 = cljs.core.split_with.call(null,((function (map__12259,map__12259__$1,start_line,path,excerpt,lines,map__12257,map__12257__$1,message_data,message,line,column,file_excerpt){
return (function (p1__12255_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__12255_SHARP_));
});})(map__12259,map__12259__$1,start_line,path,excerpt,lines,map__12257,map__12257__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__12260,(0),null);
var end = cljs.core.nth.call(null,vec__12260,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__12264){
var map__12265 = p__12264;
var map__12265__$1 = ((((!((map__12265 == null)))?(((((map__12265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12265):map__12265);
var file = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__12267 = "";
var G__12267__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12267),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__12267);
var G__12267__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12267__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__12267__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12267__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__12267__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_12313 = (new goog.debug.Console());
var G__12274_12314 = c_12313.getFormatter();
goog.object.set(G__12274_12314,"showAbsoluteTime",false);

goog.object.set(G__12274_12314,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_12313);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((((typeof document !== 'undefined')) && ((typeof document !== 'undefined') && (typeof document.body !== 'undefined'))))?document.body:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__12275 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__12275,"data",(function (){var or__3949__auto__ = data;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__12275;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5455__auto__ = e.event_;
if(cljs.core.truth_(temp__5455__auto__)){
var e__$1 = temp__5455__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && (!((goog.global.document == null))));
});

var last_reload_timestamp_12315 = cljs.core.atom.call(null,(0));
var promise_chain_12316 = (new goog.Promise(((function (last_reload_timestamp_12315){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_12315))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_12315,promise_chain_12316){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
var and__3938__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_12315) < ts);
if(and__3938__auto__){
return ts;
} else {
return and__3938__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var ts = temp__5455__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_12315,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_12316.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_12315,promise_chain_12316){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR_12276 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR_12276,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_12315,promise_chain_12316){
return (function (){
var seq__12277 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__12278 = null;
var count__12279 = (0);
var i__12280 = (0);
while(true){
if((i__12280 < count__12279)){
var w = cljs.core._nth.call(null,chunk__12278,i__12280);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__12317 = seq__12277;
var G__12318 = chunk__12278;
var G__12319 = count__12279;
var G__12320 = (i__12280 + (1));
seq__12277 = G__12317;
chunk__12278 = G__12318;
count__12279 = G__12319;
i__12280 = G__12320;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12277);
if(temp__5457__auto__){
var seq__12277__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12277__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12277__$1);
var G__12321 = cljs.core.chunk_rest.call(null,seq__12277__$1);
var G__12322 = c__4351__auto__;
var G__12323 = cljs.core.count.call(null,c__4351__auto__);
var G__12324 = (0);
seq__12277 = G__12321;
chunk__12278 = G__12322;
count__12279 = G__12323;
i__12280 = G__12324;
continue;
} else {
var w = cljs.core.first.call(null,seq__12277__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__12325 = cljs.core.next.call(null,seq__12277__$1);
var G__12326 = null;
var G__12327 = (0);
var G__12328 = (0);
seq__12277 = G__12325;
chunk__12278 = G__12326;
count__12279 = G__12327;
i__12280 = G__12328;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR_12276,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_12315,promise_chain_12316))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_12276;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_12315,promise_chain_12316))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_12316.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_12315,promise_chain_12316){
return (function (){
var _STAR_inline_code_message_max_column_STAR_12281 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_12281;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_12315,promise_chain_12316))
);
} else {
return promise_chain_12316.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_12315,promise_chain_12316){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_12315,promise_chain_12316))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_12315,promise_chain_12316))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__3938__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__3938__auto____$1){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12329 = arguments.length;
var i__4532__auto___12330 = (0);
while(true){
if((i__4532__auto___12330 < len__4531__auto___12329)){
args__4534__auto__.push((arguments[i__4532__auto___12330]));

var G__12331 = (i__4532__auto___12330 + (1));
i__4532__auto___12330 = G__12331;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__12284){
var vec__12285 = p__12284;
var n = cljs.core.nth.call(null,vec__12285,(0),null);
var mdata = cljs.core.nth.call(null,vec__12285,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__12288 = cljs.core.seq.call(null,hooks);
var chunk__12289 = null;
var count__12290 = (0);
var i__12291 = (0);
while(true){
if((i__12291 < count__12290)){
var vec__12292 = cljs.core._nth.call(null,chunk__12289,i__12291);
var n = cljs.core.nth.call(null,vec__12292,(0),null);
var f = cljs.core.nth.call(null,vec__12292,(1),null);
var temp__5455__auto___12332 = cljs.core.reduce.call(null,((function (seq__12288,chunk__12289,count__12290,i__12291,vec__12292,n,f,hooks){
return (function (p1__12268_SHARP_,p2__12269_SHARP_){
if(cljs.core.truth_(p1__12268_SHARP_)){
return goog.object.get(p1__12268_SHARP_,p2__12269_SHARP_);
} else {
return null;
}
});})(seq__12288,chunk__12289,count__12290,i__12291,vec__12292,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___12332)){
var hook_12333 = temp__5455__auto___12332;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_12333,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__12334 = seq__12288;
var G__12335 = chunk__12289;
var G__12336 = count__12290;
var G__12337 = (i__12291 + (1));
seq__12288 = G__12334;
chunk__12289 = G__12335;
count__12290 = G__12336;
i__12291 = G__12337;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12288);
if(temp__5457__auto__){
var seq__12288__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12288__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12288__$1);
var G__12338 = cljs.core.chunk_rest.call(null,seq__12288__$1);
var G__12339 = c__4351__auto__;
var G__12340 = cljs.core.count.call(null,c__4351__auto__);
var G__12341 = (0);
seq__12288 = G__12338;
chunk__12289 = G__12339;
count__12290 = G__12340;
i__12291 = G__12341;
continue;
} else {
var vec__12295 = cljs.core.first.call(null,seq__12288__$1);
var n = cljs.core.nth.call(null,vec__12295,(0),null);
var f = cljs.core.nth.call(null,vec__12295,(1),null);
var temp__5455__auto___12342 = cljs.core.reduce.call(null,((function (seq__12288,chunk__12289,count__12290,i__12291,vec__12295,n,f,seq__12288__$1,temp__5457__auto__,hooks){
return (function (p1__12268_SHARP_,p2__12269_SHARP_){
if(cljs.core.truth_(p1__12268_SHARP_)){
return goog.object.get(p1__12268_SHARP_,p2__12269_SHARP_);
} else {
return null;
}
});})(seq__12288,chunk__12289,count__12290,i__12291,vec__12295,n,f,seq__12288__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___12342)){
var hook_12343 = temp__5455__auto___12342;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_12343,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__12344 = cljs.core.next.call(null,seq__12288__$1);
var G__12345 = null;
var G__12346 = (0);
var G__12347 = (0);
seq__12288 = G__12344;
chunk__12289 = G__12345;
count__12290 = G__12346;
i__12291 = G__12347;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq12282){
var G__12283 = cljs.core.first.call(null,seq12282);
var seq12282__$1 = cljs.core.next.call(null,seq12282);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12283,seq12282__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12298){
var vec__12299 = p__12298;
var k = cljs.core.nth.call(null,vec__12299,(0),null);
var v = cljs.core.nth.call(null,vec__12299,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__12270_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__12270_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__12270_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__12271_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__12271_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3938__auto__ = !(figwheel.core.load_warninged_code);
if(and__3938__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3938__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__12272_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__12272_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__12302_12348 = cljs.core.seq.call(null,to_reload);
var chunk__12303_12349 = null;
var count__12304_12350 = (0);
var i__12305_12351 = (0);
while(true){
if((i__12305_12351 < count__12304_12350)){
var ns_12352 = cljs.core._nth.call(null,chunk__12303_12349,i__12305_12351);
goog.require(cljs.core.name.call(null,ns_12352),true);


var G__12353 = seq__12302_12348;
var G__12354 = chunk__12303_12349;
var G__12355 = count__12304_12350;
var G__12356 = (i__12305_12351 + (1));
seq__12302_12348 = G__12353;
chunk__12303_12349 = G__12354;
count__12304_12350 = G__12355;
i__12305_12351 = G__12356;
continue;
} else {
var temp__5457__auto___12357 = cljs.core.seq.call(null,seq__12302_12348);
if(temp__5457__auto___12357){
var seq__12302_12358__$1 = temp__5457__auto___12357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12302_12358__$1)){
var c__4351__auto___12359 = cljs.core.chunk_first.call(null,seq__12302_12358__$1);
var G__12360 = cljs.core.chunk_rest.call(null,seq__12302_12358__$1);
var G__12361 = c__4351__auto___12359;
var G__12362 = cljs.core.count.call(null,c__4351__auto___12359);
var G__12363 = (0);
seq__12302_12348 = G__12360;
chunk__12303_12349 = G__12361;
count__12304_12350 = G__12362;
i__12305_12351 = G__12363;
continue;
} else {
var ns_12364 = cljs.core.first.call(null,seq__12302_12358__$1);
goog.require(cljs.core.name.call(null,ns_12364),true);


var G__12365 = cljs.core.next.call(null,seq__12302_12358__$1);
var G__12366 = null;
var G__12367 = (0);
var G__12368 = (0);
seq__12302_12348 = G__12365;
chunk__12303_12349 = G__12366;
count__12304_12350 = G__12367;
i__12305_12351 = G__12368;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_12369 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,to_reload))].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5457__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5457__auto__)){
var not_loaded = temp__5457__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,not_loaded))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_12369);
} else {
setTimeout(after_reload_fn_12369,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__12306 = cljs.core.seq.call(null,warnings);
var chunk__12307 = null;
var count__12308 = (0);
var i__12309 = (0);
while(true){
if((i__12309 < count__12308)){
var warning = cljs.core._nth.call(null,chunk__12307,i__12309);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__12370 = seq__12306;
var G__12371 = chunk__12307;
var G__12372 = count__12308;
var G__12373 = (i__12309 + (1));
seq__12306 = G__12370;
chunk__12307 = G__12371;
count__12308 = G__12372;
i__12309 = G__12373;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12306);
if(temp__5457__auto__){
var seq__12306__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12306__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12306__$1);
var G__12374 = cljs.core.chunk_rest.call(null,seq__12306__$1);
var G__12375 = c__4351__auto__;
var G__12376 = cljs.core.count.call(null,c__4351__auto__);
var G__12377 = (0);
seq__12306 = G__12374;
chunk__12307 = G__12375;
count__12308 = G__12376;
i__12309 = G__12377;
continue;
} else {
var warning = cljs.core.first.call(null,seq__12306__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__12378 = cljs.core.next.call(null,seq__12306__$1);
var G__12379 = null;
var G__12380 = (0);
var G__12381 = (0);
seq__12306 = G__12378;
chunk__12307 = G__12379;
count__12308 = G__12380;
i__12309 = G__12381;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__12310){
var map__12311 = p__12310;
var map__12311__$1 = ((((!((map__12311 == null)))?(((((map__12311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12311):map__12311);
var exception_data = map__12311__$1;
var file = cljs.core.get.call(null,map__12311__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__12311__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__12311__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__12311,map__12311__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__12311,map__12311__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__12311,map__12311__$1,exception_data,file,type,message){
return (function (p1__12273_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__12273_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__12311,map__12311__$1,exception_data,file,type,message))
);

goog.log.info(figwheel.core.logger,"Compile Exception");

if(cljs.core.truth_((function (){var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return message;
}
})())){
goog.log.info(figwheel.core.logger,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))));
} else {
}

if(cljs.core.truth_(file)){
return goog.log.info(figwheel.core.logger,["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,exception_data))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map

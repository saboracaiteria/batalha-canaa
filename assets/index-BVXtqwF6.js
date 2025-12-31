(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function wx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Lf={exports:{}},_o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function Rx(){if(gg)return _o;gg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return _o.Fragment=e,_o.jsx=i,_o.jsxs=i,_o}var _g;function Cx(){return _g||(_g=1,Lf.exports=Rx()),Lf.exports}var tt=Cx(),Df={exports:{}},vo={},Uf={exports:{}},Nf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function Lx(){return vg||(vg=1,(function(o){function e(U,V){var k=U.length;U.push(V);t:for(;0<k;){var dt=k-1>>>1,ht=U[dt];if(0<l(ht,V))U[dt]=V,U[k]=ht,k=dt;else break t}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var V=U[0],k=U.pop();if(k!==V){U[0]=k;t:for(var dt=0,ht=U.length,D=ht>>>1;dt<D;){var Y=2*(dt+1)-1,W=U[Y],Z=Y+1,gt=U[Z];if(0>l(W,k))Z<ht&&0>l(gt,W)?(U[dt]=gt,U[Z]=k,dt=Z):(U[dt]=W,U[Y]=k,dt=Y);else if(Z<ht&&0>l(gt,k))U[dt]=gt,U[Z]=k,dt=Z;else break t}}return V}function l(U,V){var k=U.sortIndex-V.sortIndex;return k!==0?k:U.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,y=null,x=3,M=!1,A=!1,w=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function B(U){for(var V=i(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=U)r(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function N(U){if(w=!1,B(U),!A)if(i(m)!==null)A=!0,G||(G=!0,ut());else{var V=i(p);V!==null&&P(N,V.startTime-U)}}var G=!1,X=-1,ot=5,R=-1;function O(){return E?!0:!(o.unstable_now()-R<ot)}function yt(){if(E=!1,G){var U=o.unstable_now();R=U;var V=!0;try{t:{A=!1,w&&(w=!1,I(X),X=-1),M=!0;var k=x;try{e:{for(B(U),y=i(m);y!==null&&!(y.expirationTime>U&&O());){var dt=y.callback;if(typeof dt=="function"){y.callback=null,x=y.priorityLevel;var ht=dt(y.expirationTime<=U);if(U=o.unstable_now(),typeof ht=="function"){y.callback=ht,B(U),V=!0;break e}y===i(m)&&r(m),B(U)}else r(m);y=i(m)}if(y!==null)V=!0;else{var D=i(p);D!==null&&P(N,D.startTime-U),V=!1}}break t}finally{y=null,x=k,M=!1}V=void 0}}finally{V?ut():G=!1}}}var ut;if(typeof L=="function")ut=function(){L(yt)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,it=K.port2;K.port1.onmessage=yt,ut=function(){it.postMessage(null)}}else ut=function(){g(yt,0)};function P(U,V){X=g(function(){U(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ot=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(U){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var k=x;x=V;try{return U()}finally{x=k}},o.unstable_requestPaint=function(){E=!0},o.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var k=x;x=U;try{return V()}finally{x=k}},o.unstable_scheduleCallback=function(U,V,k){var dt=o.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?dt+k:dt):k=dt,U){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=k+ht,U={id:_++,callback:V,priorityLevel:U,startTime:k,expirationTime:ht,sortIndex:-1},k>dt?(U.sortIndex=k,e(p,U),i(m)===null&&U===i(p)&&(w?(I(X),X=-1):w=!0,P(N,k-dt))):(U.sortIndex=ht,e(m,U),A||M||(A=!0,G||(G=!0,ut()))),U},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(U){var V=x;return function(){var k=x;x=V;try{return U.apply(this,arguments)}finally{x=k}}}})(Nf)),Nf}var xg;function Dx(){return xg||(xg=1,Uf.exports=Lx()),Uf.exports}var Of={exports:{}},Qt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function Ux(){if(yg)return Qt;yg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),x=Symbol.iterator;function M(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function g(D,Y,W){this.props=D,this.context=Y,this.refs=E,this.updater=W||A}g.prototype.isReactComponent={},g.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},g.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function I(){}I.prototype=g.prototype;function L(D,Y,W){this.props=D,this.context=Y,this.refs=E,this.updater=W||A}var B=L.prototype=new I;B.constructor=L,w(B,g.prototype),B.isPureReactComponent=!0;var N=Array.isArray;function G(){}var X={H:null,A:null,T:null,S:null},ot=Object.prototype.hasOwnProperty;function R(D,Y,W){var Z=W.ref;return{$$typeof:o,type:D,key:Y,ref:Z!==void 0?Z:null,props:W}}function O(D,Y){return R(D.type,Y,D.props)}function yt(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function ut(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(W){return Y[W]})}var K=/\/+/g;function it(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?ut(""+D.key):Y.toString(36)}function P(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(G,G):(D.status="pending",D.then(function(Y){D.status==="pending"&&(D.status="fulfilled",D.value=Y)},function(Y){D.status==="pending"&&(D.status="rejected",D.reason=Y)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function U(D,Y,W,Z,gt){var bt=typeof D;(bt==="undefined"||bt==="boolean")&&(D=null);var z=!1;if(D===null)z=!0;else switch(bt){case"bigint":case"string":case"number":z=!0;break;case"object":switch(D.$$typeof){case o:case e:z=!0;break;case _:return z=D._init,U(z(D._payload),Y,W,Z,gt)}}if(z)return gt=gt(D),z=Z===""?"."+it(D,0):Z,N(gt)?(W="",z!=null&&(W=z.replace(K,"$&/")+"/"),U(gt,Y,W,"",function(wt){return wt})):gt!=null&&(yt(gt)&&(gt=O(gt,W+(gt.key==null||D&&D.key===gt.key?"":(""+gt.key).replace(K,"$&/")+"/")+z)),Y.push(gt)),1;z=0;var Pt=Z===""?".":Z+":";if(N(D))for(var Ut=0;Ut<D.length;Ut++)Z=D[Ut],bt=Pt+it(Z,Ut),z+=U(Z,Y,W,bt,gt);else if(Ut=M(D),typeof Ut=="function")for(D=Ut.call(D),Ut=0;!(Z=D.next()).done;)Z=Z.value,bt=Pt+it(Z,Ut++),z+=U(Z,Y,W,bt,gt);else if(bt==="object"){if(typeof D.then=="function")return U(P(D),Y,W,Z,gt);throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return z}function V(D,Y,W){if(D==null)return D;var Z=[],gt=0;return U(D,Z,"","",function(bt){return Y.call(W,bt,gt++)}),Z}function k(D){if(D._status===-1){var Y=D._result;Y=Y(),Y.then(function(W){(D._status===0||D._status===-1)&&(D._status=1,D._result=W)},function(W){(D._status===0||D._status===-1)&&(D._status=2,D._result=W)}),D._status===-1&&(D._status=0,D._result=Y)}if(D._status===1)return D._result.default;throw D._result}var dt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},ht={map:V,forEach:function(D,Y,W){V(D,function(){Y.apply(this,arguments)},W)},count:function(D){var Y=0;return V(D,function(){Y++}),Y},toArray:function(D){return V(D,function(Y){return Y})||[]},only:function(D){if(!yt(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return Qt.Activity=y,Qt.Children=ht,Qt.Component=g,Qt.Fragment=i,Qt.Profiler=l,Qt.PureComponent=L,Qt.StrictMode=r,Qt.Suspense=m,Qt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,Qt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return X.H.useMemoCache(D)}},Qt.cache=function(D){return function(){return D.apply(null,arguments)}},Qt.cacheSignal=function(){return null},Qt.cloneElement=function(D,Y,W){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Z=w({},D.props),gt=D.key;if(Y!=null)for(bt in Y.key!==void 0&&(gt=""+Y.key),Y)!ot.call(Y,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&Y.ref===void 0||(Z[bt]=Y[bt]);var bt=arguments.length-2;if(bt===1)Z.children=W;else if(1<bt){for(var z=Array(bt),Pt=0;Pt<bt;Pt++)z[Pt]=arguments[Pt+2];Z.children=z}return R(D.type,gt,Z)},Qt.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Qt.createElement=function(D,Y,W){var Z,gt={},bt=null;if(Y!=null)for(Z in Y.key!==void 0&&(bt=""+Y.key),Y)ot.call(Y,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(gt[Z]=Y[Z]);var z=arguments.length-2;if(z===1)gt.children=W;else if(1<z){for(var Pt=Array(z),Ut=0;Ut<z;Ut++)Pt[Ut]=arguments[Ut+2];gt.children=Pt}if(D&&D.defaultProps)for(Z in z=D.defaultProps,z)gt[Z]===void 0&&(gt[Z]=z[Z]);return R(D,bt,gt)},Qt.createRef=function(){return{current:null}},Qt.forwardRef=function(D){return{$$typeof:h,render:D}},Qt.isValidElement=yt,Qt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:k}},Qt.memo=function(D,Y){return{$$typeof:p,type:D,compare:Y===void 0?null:Y}},Qt.startTransition=function(D){var Y=X.T,W={};X.T=W;try{var Z=D(),gt=X.S;gt!==null&&gt(W,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(G,dt)}catch(bt){dt(bt)}finally{Y!==null&&W.types!==null&&(Y.types=W.types),X.T=Y}},Qt.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},Qt.use=function(D){return X.H.use(D)},Qt.useActionState=function(D,Y,W){return X.H.useActionState(D,Y,W)},Qt.useCallback=function(D,Y){return X.H.useCallback(D,Y)},Qt.useContext=function(D){return X.H.useContext(D)},Qt.useDebugValue=function(){},Qt.useDeferredValue=function(D,Y){return X.H.useDeferredValue(D,Y)},Qt.useEffect=function(D,Y){return X.H.useEffect(D,Y)},Qt.useEffectEvent=function(D){return X.H.useEffectEvent(D)},Qt.useId=function(){return X.H.useId()},Qt.useImperativeHandle=function(D,Y,W){return X.H.useImperativeHandle(D,Y,W)},Qt.useInsertionEffect=function(D,Y){return X.H.useInsertionEffect(D,Y)},Qt.useLayoutEffect=function(D,Y){return X.H.useLayoutEffect(D,Y)},Qt.useMemo=function(D,Y){return X.H.useMemo(D,Y)},Qt.useOptimistic=function(D,Y){return X.H.useOptimistic(D,Y)},Qt.useReducer=function(D,Y,W){return X.H.useReducer(D,Y,W)},Qt.useRef=function(D){return X.H.useRef(D)},Qt.useState=function(D){return X.H.useState(D)},Qt.useSyncExternalStore=function(D,Y,W){return X.H.useSyncExternalStore(D,Y,W)},Qt.useTransition=function(){return X.H.useTransition()},Qt.version="19.2.3",Qt}var Mg;function Mh(){return Mg||(Mg=1,Of.exports=Ux()),Of.exports}var zf={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function Nx(){if(Sg)return xn;Sg=1;var o=Mh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,xn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},xn.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},xn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},xn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},xn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,y=h(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:y,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},xn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},xn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,y=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},xn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},xn.requestFormReset=function(m){r.d.r(m)},xn.unstable_batchedUpdates=function(m,p){return m(p)},xn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},xn.useFormStatus=function(){return d.H.useHostTransitionStatus()},xn.version="19.2.3",xn}var Eg;function Ox(){if(Eg)return zf.exports;Eg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=Nx(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function zx(){if(bg)return vo;bg=1;var o=Dx(),e=Mh(),i=Ox();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var v=!1,b=c.child;b;){if(b===a){v=!0,a=c,s=f;break}if(b===s){v=!0,s=c,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,s=c;break}if(b===s){v=!0,s=f,a=c;break}b=b.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),yt=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=yt&&t[yt]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function it(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case g:return"Profiler";case E:return"StrictMode";case N:return"Suspense";case G:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case L:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return n=t.displayName||null,n!==null?n:it(t.type)||"Memo";case ot:n=t._payload,t=t._init;try{return it(t(n))}catch{}}return null}var P=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},dt=[],ht=-1;function D(t){return{current:t}}function Y(t){0>ht||(t.current=dt[ht],dt[ht]=null,ht--)}function W(t,n){ht++,dt[ht]=t.current,t.current=n}var Z=D(null),gt=D(null),bt=D(null),z=D(null);function Pt(t,n){switch(W(bt,n),W(gt,t),W(Z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Fm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Fm(n),t=Gm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Z),W(Z,t)}function Ut(){Y(Z),Y(gt),Y(bt)}function wt(t){t.memoizedState!==null&&W(z,t);var n=Z.current,a=Gm(n,t.type);n!==a&&(W(gt,t),W(Z,a))}function Wt(t){gt.current===t&&(Y(Z),Y(gt)),z.current===t&&(Y(z),ho._currentValue=k)}var fe,kt;function Zt(t){if(fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);fe=n&&n[1]||"",kt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fe+t+kt}var ze=!1;function Fe(t,n){if(!t||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ct){var st=ct}Reflect.construct(t,[],Mt)}else{try{Mt.call()}catch(ct){st=ct}t.call(Mt.prototype)}}else{try{throw Error()}catch(ct){st=ct}(Mt=t())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ct){if(ct&&st&&typeof ct.stack=="string")return[ct.stack,st.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var F=v.split(`
`),nt=b.split(`
`);for(c=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(s===F.length||c===nt.length)for(s=F.length-1,c=nt.length-1;1<=s&&0<=c&&F[s]!==nt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(F[s]!==nt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||F[s]!==nt[c]){var _t=`
`+F[s].replace(" at new "," at ");return t.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",t.displayName)),_t}while(1<=s&&0<=c);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Zt(a):""}function Ve(t,n){switch(t.tag){case 26:case 27:case 5:return Zt(t.type);case 16:return Zt("Lazy");case 13:return t.child!==n&&n!==null?Zt("Suspense Fallback"):Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return Fe(t.type,!1);case 11:return Fe(t.type.render,!1);case 1:return Fe(t.type,!0);case 31:return Zt("Activity");default:return""}}function Pe(t){try{var n="",a=null;do n+=Ve(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var me=Object.prototype.hasOwnProperty,Ae=o.unstable_scheduleCallback,Nt=o.unstable_cancelCallback,T=o.unstable_shouldYield,S=o.unstable_requestPaint,H=o.unstable_now,at=o.unstable_getCurrentPriorityLevel,vt=o.unstable_ImmediatePriority,At=o.unstable_UserBlockingPriority,Ft=o.unstable_NormalPriority,Lt=o.unstable_LowPriority,ft=o.unstable_IdlePriority,Bt=o.log,zt=o.unstable_setDisableYieldValue,Gt=null,Rt=null;function Tt(t){if(typeof Bt=="function"&&zt(t),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Gt,t)}catch{}}var Et=Math.clz32?Math.clz32:q,Xt=Math.log,re=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(Xt(t)/re|0)|0}var lt=256,St=262144,Ct=4194304;function Ot(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $t(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=Ot(s):(v&=b,v!==0?c=Ot(v):a||(a=b&~t,a!==0&&(c=Ot(a))))):(b=s&~f,b!==0?c=Ot(b):v!==0?c=Ot(v):a||(a=s&~t,a!==0&&(c=Ot(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ee(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ye(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function In(){var t=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),t}function we(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qn(t,n,a,s,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,F=t.expirationTimes,nt=t.hiddenUpdates;for(a=v&~a;0<a;){var _t=31-Et(a),Mt=1<<_t;b[_t]=0,F[_t]=-1;var st=nt[_t];if(st!==null)for(nt[_t]=null,_t=0;_t<st.length;_t++){var ct=st[_t];ct!==null&&(ct.lane&=-536870913)}a&=~Mt}s!==0&&Pa(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Pa(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Et(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ar(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Et(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Po(t,n){var a=n&-n;return a=(a&42)!==0?1:wr(a),(a&(t.suspendedLanes|n))!==0?0:a}function wr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Rr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function C(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:cg(t.type))}function rt(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var pt=Math.random().toString(36).slice(2),J="__reactFiber$"+pt,mt="__reactProps$"+pt,Vt="__reactContainer$"+pt,qt="__reactEvents$"+pt,Kt="__reactListeners$"+pt,ne="__reactHandles$"+pt,oe="__reactResources$"+pt,Jt="__reactMarker$"+pt;function le(t){delete t[J],delete t[mt],delete t[qt],delete t[Kt],delete t[ne]}function ve(t){var n=t[J];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vt]||a[J]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=qm(t);t!==null;){if(a=t[J])return a;t=qm(t)}return n}t=a,a=t.parentNode}return null}function We(t){if(t=t[J]||t[Vt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function hn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Rn(t){var n=t[oe];return n||(n=t[oe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ce(t){t[Jt]=!0}var he=new Set,ps={};function Oe(t,n){Cn(t,n),Cn(t+"Capture",n)}function Cn(t,n){for(ps[t]=n,t=0;t<n.length;t++)he.add(n[t])}var Bo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sa={},ms={};function dn(t){return me.call(ms,t)?!0:me.call(sa,t)?!1:Bo.test(t)?ms[t]=!0:(sa[t]=!0,!1)}function Jn(t,n,a){if(dn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ra(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function vn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Io(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fo(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Sc(t){if(!t._valueTracker){var n=Io(t)?"checked":"value";t._valueTracker=Fo(t,n,""+t[n])}}function Uh(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Io(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Go(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var M_=/[\n"\\]/g;function $n(t){return t.replace(M_,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ec(t,n,a,s,c,f,v,b){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vn(n)):t.value!==""+vn(n)&&(t.value=""+vn(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?bc(t,v,vn(n)):a!=null?bc(t,v,vn(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+vn(b):t.removeAttribute("name")}function Nh(t,n,a,s,c,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Sc(t);return}a=a!=null?""+vn(a):"",n=n!=null?""+vn(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Sc(t)}function bc(t,n,a){n==="number"&&Go(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function gs(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+vn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Oh(t,n,a){if(n!=null&&(n=""+vn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+vn(a):""}function zh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(P(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=vn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Sc(t)}function _s(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var S_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ph(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||S_.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Bh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Ph(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Ph(t,f,n[f])}function Tc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),b_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(t){return b_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var Ac=null;function wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vs=null,xs=null;function Ih(t){var n=We(t);if(n&&(t=n.stateNode)){var a=t[mt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ec(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+$n(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[mt]||null;if(!c)throw Error(r(90));Ec(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Uh(s)}break t;case"textarea":Oh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gs(t,!!a.multiple,n,!1)}}}var Rc=!1;function Fh(t,n,a){if(Rc)return t(n,a);Rc=!0;try{var s=t(n);return s}finally{if(Rc=!1,(vs!==null||xs!==null)&&(Rl(),vs&&(n=vs,t=xs,xs=vs=null,Ih(n),t)))for(n=0;n<t.length;n++)Ih(t[n])}}function Cr(t,n){var a=t.stateNode;if(a===null)return null;var s=a[mt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=!1;if(zi)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Cc=!1}var oa=null,Lc=null,Vo=null;function Gh(){if(Vo)return Vo;var t,n=Lc,a=n.length,s,c="value"in oa?oa.value:oa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function Hh(){return!1}function Ln(t){function n(a,s,c,f,v){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:Hh,this.isPropagationStopped=Hh,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=Ln(Ba),Dr=y({},Ba,{view:0,detail:0}),T_=Ln(Dr),Dc,Uc,Ur,jo=y({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ur&&(Ur&&t.type==="mousemove"?(Dc=t.screenX-Ur.screenX,Uc=t.screenY-Ur.screenY):Uc=Dc=0,Ur=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Vh=Ln(jo),A_=y({},jo,{dataTransfer:0}),w_=Ln(A_),R_=y({},Dr,{relatedTarget:0}),Nc=Ln(R_),C_=y({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=Ln(C_),D_=y({},Ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U_=Ln(D_),N_=y({},Ba,{data:0}),kh=Ln(N_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=P_[t])?!!n[t]:!1}function Oc(){return B_}var I_=y({},Dr,{key:function(t){if(t.key){var n=O_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),F_=Ln(I_),G_=y({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=Ln(G_),H_=y({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),V_=Ln(H_),k_=y({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),X_=Ln(k_),W_=y({},jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=Ln(W_),q_=y({},Ba,{newState:0,oldState:0}),Y_=Ln(q_),Z_=[9,13,27,32],zc=zi&&"CompositionEvent"in window,Nr=null;zi&&"documentMode"in document&&(Nr=document.documentMode);var K_=zi&&"TextEvent"in window&&!Nr,Wh=zi&&(!zc||Nr&&8<Nr&&11>=Nr),jh=" ",qh=!1;function Yh(t,n){switch(t){case"keyup":return Z_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function Q_(t,n){switch(t){case"compositionend":return Zh(n);case"keypress":return n.which!==32?null:(qh=!0,jh);case"textInput":return t=n.data,t===jh&&qh?null:t;default:return null}}function J_(t,n){if(ys)return t==="compositionend"||!zc&&Yh(t,n)?(t=Gh(),Vo=Lc=oa=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$_[t.type]:n==="textarea"}function Qh(t,n,a,s){vs?xs?xs.push(s):xs=[s]:vs=s,n=zl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Or=null,zr=null;function tv(t){Nm(t,0)}function qo(t){var n=hn(t);if(Uh(n))return t}function Jh(t,n){if(t==="change")return n}var $h=!1;if(zi){var Pc;if(zi){var Bc="oninput"in document;if(!Bc){var td=document.createElement("div");td.setAttribute("oninput","return;"),Bc=typeof td.oninput=="function"}Pc=Bc}else Pc=!1;$h=Pc&&(!document.documentMode||9<document.documentMode)}function ed(){Or&&(Or.detachEvent("onpropertychange",nd),zr=Or=null)}function nd(t){if(t.propertyName==="value"&&qo(zr)){var n=[];Qh(n,zr,t,wc(t)),Fh(tv,n)}}function ev(t,n,a){t==="focusin"?(ed(),Or=n,zr=a,Or.attachEvent("onpropertychange",nd)):t==="focusout"&&ed()}function nv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qo(zr)}function iv(t,n){if(t==="click")return qo(n)}function av(t,n){if(t==="input"||t==="change")return qo(n)}function sv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Fn=typeof Object.is=="function"?Object.is:sv;function Pr(t,n){if(Fn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!me.call(n,c)||!Fn(t[c],n[c]))return!1}return!0}function id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ad(t,n){var a=id(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=id(a)}}function sd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Go(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Go(t.document)}return n}function Ic(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var rv=zi&&"documentMode"in document&&11>=document.documentMode,Ms=null,Fc=null,Br=null,Gc=!1;function od(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gc||Ms==null||Ms!==Go(s)||(s=Ms,"selectionStart"in s&&Ic(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Br&&Pr(Br,s)||(Br=s,s=zl(Fc,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ms)))}function Ia(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ss={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},Hc={},ld={};zi&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Fa(t){if(Hc[t])return Hc[t];if(!Ss[t])return t;var n=Ss[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ld)return Hc[t]=n[a];return t}var cd=Fa("animationend"),ud=Fa("animationiteration"),fd=Fa("animationstart"),ov=Fa("transitionrun"),lv=Fa("transitionstart"),cv=Fa("transitioncancel"),hd=Fa("transitionend"),dd=new Map,Vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vc.push("scrollEnd");function fi(t,n){dd.set(t,n),Oe(n,[t])}var Yo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ti=[],Es=0,kc=0;function Zo(){for(var t=Es,n=kc=Es=0;n<t;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}f!==0&&pd(a,c,f)}}function Ko(t,n,a,s){ti[Es++]=t,ti[Es++]=n,ti[Es++]=a,ti[Es++]=s,kc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Xc(t,n,a,s){return Ko(t,n,a,s),Qo(t)}function Ga(t,n){return Ko(t,null,null,n),Qo(t)}function pd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Et(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Qo(t){if(50<so)throw so=0,$u=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var bs={};function uv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,a,s){return new uv(t,n,a,s)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pi(t,n){var a=t.alternate;return a===null?(a=Gn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function md(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Jo(t,n,a,s,c,f){var v=0;if(s=t,typeof t=="function")Wc(t)&&(v=1);else if(typeof t=="string")v=mx(t,a,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=Gn(31,a,n,c),t.elementType=R,t.lanes=f,t;case w:return Ha(a.children,c,f,n);case E:v=8,c|=24;break;case g:return t=Gn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case N:return t=Gn(13,a,n,c),t.elementType=N,t.lanes=f,t;case G:return t=Gn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:v=10;break t;case I:v=9;break t;case B:v=11;break t;case X:v=14;break t;case ot:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Gn(v,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ha(t,n,a,s){return t=Gn(7,t,s,n),t.lanes=a,t}function jc(t,n,a){return t=Gn(6,t,null,n),t.lanes=a,t}function gd(t){var n=Gn(18,null,null,0);return n.stateNode=t,n}function qc(t,n,a){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var _d=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=_d.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Pe(n)},_d.set(t,n),n)}return{value:t,source:n,stack:Pe(n)}}var Ts=[],As=0,$o=null,Ir=0,ni=[],ii=0,la=null,Ei=1,bi="";function Bi(t,n){Ts[As++]=Ir,Ts[As++]=$o,$o=t,Ir=n}function vd(t,n,a){ni[ii++]=Ei,ni[ii++]=bi,ni[ii++]=la,la=t;var s=Ei;t=bi;var c=32-Et(s)-1;s&=~(1<<c),a+=1;var f=32-Et(n)+c;if(30<f){var v=c-c%5;f=(s&(1<<v)-1).toString(32),s>>=v,c-=v,Ei=1<<32-Et(n)+c|a<<c|s,bi=f+t}else Ei=1<<f|a<<c|s,bi=t}function Yc(t){t.return!==null&&(Bi(t,1),vd(t,1,0))}function Zc(t){for(;t===$o;)$o=Ts[--As],Ts[As]=null,Ir=Ts[--As],Ts[As]=null;for(;t===la;)la=ni[--ii],ni[ii]=null,bi=ni[--ii],ni[ii]=null,Ei=ni[--ii],ni[ii]=null}function xd(t,n){ni[ii++]=Ei,ni[ii++]=bi,ni[ii++]=la,Ei=n.id,bi=n.overflow,la=t}var pn=null,Be=null,xe=!1,ca=null,ai=!1,Kc=Error(r(519));function ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fr(ei(n,t)),Kc}function yd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[J]=t,n[mt]=s,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<oo.length;a++)pe(oo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Nh(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),zh(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Bm(n.textContent,a)?(s.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),s.onScroll!=null&&pe("scroll",n),s.onScrollEnd!=null&&pe("scrollend",n),s.onClick!=null&&(n.onclick=Oi),n=!0):n=!1,n||ua(t,!0)}function Md(t){for(pn=t.return;pn;)switch(pn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:pn=pn.return}}function ws(t){if(t!==pn)return!1;if(!xe)return Md(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||mf(t.type,t.memoizedProps)),a=!a),a&&Be&&ua(t),Md(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=jm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=jm(t)}else n===27?(n=Be,ba(t.type)?(t=yf,yf=null,Be=t):Be=n):Be=pn?ri(t.stateNode.nextSibling):null;return!0}function Va(){Be=pn=null,xe=!1}function Qc(){var t=ca;return t!==null&&(On===null?On=t:On.push.apply(On,t),ca=null),t}function Fr(t){ca===null?ca=[t]:ca.push(t)}var Jc=D(null),ka=null,Ii=null;function fa(t,n,a){W(Jc,n._currentValue),n._currentValue=a}function Fi(t){t._currentValue=Jc.current,Y(Jc)}function $c(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function tu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),$c(f.return,a,t),s||(v=null);break t}f=b.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),$c(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Rs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var b=c.type;Fn(c.pendingProps.value,v.value)||(t!==null?t.push(b):t=[b])}}else if(c===z.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(ho):t=[ho])}c=c.return}t!==null&&tu(n,t,a,s),n.flags|=262144}function tl(t){for(t=t.firstContext;t!==null;){if(!Fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xa(t){ka=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function mn(t){return Sd(ka,t)}function el(t,n){return ka===null&&Xa(t),Sd(t,n)}function Sd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(r(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return a}var fv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},hv=o.unstable_scheduleCallback,dv=o.unstable_NormalPriority,Qe={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new fv,data:new Map,refCount:0}}function Gr(t){t.refCount--,t.refCount===0&&hv(dv,function(){t.controller.abort()})}var Hr=null,nu=0,Cs=0,Ls=null;function pv(t,n){if(Hr===null){var a=Hr=[];nu=0,Cs=rf(),Ls={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Ed,Ed),n}function Ed(){if(--nu===0&&Hr!==null){Ls!==null&&(Ls.status="fulfilled");var t=Hr;Hr=null,Cs=0,Ls=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var bd=U.S;U.S=function(t,n){om=H(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&pv(t,n),bd!==null&&bd(t,n)};var Wa=D(null);function iu(){var t=Wa.current;return t!==null?t:Ne.pooledCache}function nl(t,n){n===null?W(Wa,Wa.current):W(Wa,n.pool)}function Td(){var t=iu();return t===null?null:{parent:Qe._currentValue,pool:t}}var Ds=Error(r(460)),au=Error(r(474)),il=Error(r(542)),al={then:function(){}};function Ad(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Oi,Oi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cd(t),t;default:if(typeof n.status=="string")n.then(Oi,Oi);else{if(t=Ne,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cd(t),t}throw qa=n,Ds}}function ja(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qa=a,Ds):a}}var qa=null;function Rd(){if(qa===null)throw Error(r(459));var t=qa;return qa=null,t}function Cd(t){if(t===Ds||t===il)throw Error(r(483))}var Us=null,Vr=0;function sl(t){var n=Vr;return Vr+=1,Us===null&&(Us=[]),wd(Us,t,n)}function kr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function rl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ld(t){function n(Q,j){if(t){var et=Q.deletions;et===null?(Q.deletions=[j],Q.flags|=16):et.push(j)}}function a(Q,j){if(!t)return null;for(;j!==null;)n(Q,j),j=j.sibling;return null}function s(Q){for(var j=new Map;Q!==null;)Q.key!==null?j.set(Q.key,Q):j.set(Q.index,Q),Q=Q.sibling;return j}function c(Q,j){return Q=Pi(Q,j),Q.index=0,Q.sibling=null,Q}function f(Q,j,et){return Q.index=et,t?(et=Q.alternate,et!==null?(et=et.index,et<j?(Q.flags|=67108866,j):et):(Q.flags|=67108866,j)):(Q.flags|=1048576,j)}function v(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function b(Q,j,et,xt){return j===null||j.tag!==6?(j=jc(et,Q.mode,xt),j.return=Q,j):(j=c(j,et),j.return=Q,j)}function F(Q,j,et,xt){var jt=et.type;return jt===w?_t(Q,j,et.props.children,xt,et.key):j!==null&&(j.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===ot&&ja(jt)===j.type)?(j=c(j,et.props),kr(j,et),j.return=Q,j):(j=Jo(et.type,et.key,et.props,null,Q.mode,xt),kr(j,et),j.return=Q,j)}function nt(Q,j,et,xt){return j===null||j.tag!==4||j.stateNode.containerInfo!==et.containerInfo||j.stateNode.implementation!==et.implementation?(j=qc(et,Q.mode,xt),j.return=Q,j):(j=c(j,et.children||[]),j.return=Q,j)}function _t(Q,j,et,xt,jt){return j===null||j.tag!==7?(j=Ha(et,Q.mode,xt,jt),j.return=Q,j):(j=c(j,et),j.return=Q,j)}function Mt(Q,j,et){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=jc(""+j,Q.mode,et),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return et=Jo(j.type,j.key,j.props,null,Q.mode,et),kr(et,j),et.return=Q,et;case A:return j=qc(j,Q.mode,et),j.return=Q,j;case ot:return j=ja(j),Mt(Q,j,et)}if(P(j)||ut(j))return j=Ha(j,Q.mode,et,null),j.return=Q,j;if(typeof j.then=="function")return Mt(Q,sl(j),et);if(j.$$typeof===L)return Mt(Q,el(Q,j),et);rl(Q,j)}return null}function st(Q,j,et,xt){var jt=j!==null?j.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return jt!==null?null:b(Q,j,""+et,xt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===jt?F(Q,j,et,xt):null;case A:return et.key===jt?nt(Q,j,et,xt):null;case ot:return et=ja(et),st(Q,j,et,xt)}if(P(et)||ut(et))return jt!==null?null:_t(Q,j,et,xt,null);if(typeof et.then=="function")return st(Q,j,sl(et),xt);if(et.$$typeof===L)return st(Q,j,el(Q,et),xt);rl(Q,et)}return null}function ct(Q,j,et,xt,jt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Q=Q.get(et)||null,b(j,Q,""+xt,jt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case M:return Q=Q.get(xt.key===null?et:xt.key)||null,F(j,Q,xt,jt);case A:return Q=Q.get(xt.key===null?et:xt.key)||null,nt(j,Q,xt,jt);case ot:return xt=ja(xt),ct(Q,j,et,xt,jt)}if(P(xt)||ut(xt))return Q=Q.get(et)||null,_t(j,Q,xt,jt,null);if(typeof xt.then=="function")return ct(Q,j,et,sl(xt),jt);if(xt.$$typeof===L)return ct(Q,j,et,el(j,xt),jt);rl(j,xt)}return null}function It(Q,j,et,xt){for(var jt=null,Me=null,Ht=j,ie=j=0,_e=null;Ht!==null&&ie<et.length;ie++){Ht.index>ie?(_e=Ht,Ht=null):_e=Ht.sibling;var Se=st(Q,Ht,et[ie],xt);if(Se===null){Ht===null&&(Ht=_e);break}t&&Ht&&Se.alternate===null&&n(Q,Ht),j=f(Se,j,ie),Me===null?jt=Se:Me.sibling=Se,Me=Se,Ht=_e}if(ie===et.length)return a(Q,Ht),xe&&Bi(Q,ie),jt;if(Ht===null){for(;ie<et.length;ie++)Ht=Mt(Q,et[ie],xt),Ht!==null&&(j=f(Ht,j,ie),Me===null?jt=Ht:Me.sibling=Ht,Me=Ht);return xe&&Bi(Q,ie),jt}for(Ht=s(Ht);ie<et.length;ie++)_e=ct(Ht,Q,ie,et[ie],xt),_e!==null&&(t&&_e.alternate!==null&&Ht.delete(_e.key===null?ie:_e.key),j=f(_e,j,ie),Me===null?jt=_e:Me.sibling=_e,Me=_e);return t&&Ht.forEach(function(Ca){return n(Q,Ca)}),xe&&Bi(Q,ie),jt}function Yt(Q,j,et,xt){if(et==null)throw Error(r(151));for(var jt=null,Me=null,Ht=j,ie=j=0,_e=null,Se=et.next();Ht!==null&&!Se.done;ie++,Se=et.next()){Ht.index>ie?(_e=Ht,Ht=null):_e=Ht.sibling;var Ca=st(Q,Ht,Se.value,xt);if(Ca===null){Ht===null&&(Ht=_e);break}t&&Ht&&Ca.alternate===null&&n(Q,Ht),j=f(Ca,j,ie),Me===null?jt=Ca:Me.sibling=Ca,Me=Ca,Ht=_e}if(Se.done)return a(Q,Ht),xe&&Bi(Q,ie),jt;if(Ht===null){for(;!Se.done;ie++,Se=et.next())Se=Mt(Q,Se.value,xt),Se!==null&&(j=f(Se,j,ie),Me===null?jt=Se:Me.sibling=Se,Me=Se);return xe&&Bi(Q,ie),jt}for(Ht=s(Ht);!Se.done;ie++,Se=et.next())Se=ct(Ht,Q,ie,Se.value,xt),Se!==null&&(t&&Se.alternate!==null&&Ht.delete(Se.key===null?ie:Se.key),j=f(Se,j,ie),Me===null?jt=Se:Me.sibling=Se,Me=Se);return t&&Ht.forEach(function(Ax){return n(Q,Ax)}),xe&&Bi(Q,ie),jt}function Ue(Q,j,et,xt){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var jt=et.key;j!==null;){if(j.key===jt){if(jt=et.type,jt===w){if(j.tag===7){a(Q,j.sibling),xt=c(j,et.props.children),xt.return=Q,Q=xt;break t}}else if(j.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===ot&&ja(jt)===j.type){a(Q,j.sibling),xt=c(j,et.props),kr(xt,et),xt.return=Q,Q=xt;break t}a(Q,j);break}else n(Q,j);j=j.sibling}et.type===w?(xt=Ha(et.props.children,Q.mode,xt,et.key),xt.return=Q,Q=xt):(xt=Jo(et.type,et.key,et.props,null,Q.mode,xt),kr(xt,et),xt.return=Q,Q=xt)}return v(Q);case A:t:{for(jt=et.key;j!==null;){if(j.key===jt)if(j.tag===4&&j.stateNode.containerInfo===et.containerInfo&&j.stateNode.implementation===et.implementation){a(Q,j.sibling),xt=c(j,et.children||[]),xt.return=Q,Q=xt;break t}else{a(Q,j);break}else n(Q,j);j=j.sibling}xt=qc(et,Q.mode,xt),xt.return=Q,Q=xt}return v(Q);case ot:return et=ja(et),Ue(Q,j,et,xt)}if(P(et))return It(Q,j,et,xt);if(ut(et)){if(jt=ut(et),typeof jt!="function")throw Error(r(150));return et=jt.call(et),Yt(Q,j,et,xt)}if(typeof et.then=="function")return Ue(Q,j,sl(et),xt);if(et.$$typeof===L)return Ue(Q,j,el(Q,et),xt);rl(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,j!==null&&j.tag===6?(a(Q,j.sibling),xt=c(j,et),xt.return=Q,Q=xt):(a(Q,j),xt=jc(et,Q.mode,xt),xt.return=Q,Q=xt),v(Q)):a(Q,j)}return function(Q,j,et,xt){try{Vr=0;var jt=Ue(Q,j,et,xt);return Us=null,jt}catch(Ht){if(Ht===Ds||Ht===il)throw Ht;var Me=Gn(29,Ht,null,Q.mode);return Me.lanes=xt,Me.return=Q,Me}finally{}}}var Ya=Ld(!0),Dd=Ld(!1),ha=!1;function su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ru(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(be&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Qo(t),pd(t,null,a),n}return Ko(t,s,n,a),Qo(t)}function Xr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ar(t,a)}}function ou(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var lu=!1;function Wr(){if(lu){var t=Ls;if(t!==null)throw t}}function jr(t,n,a,s){lu=!1;var c=t.updateQueue;ha=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var F=b,nt=F.next;F.next=null,v===null?f=nt:v.next=nt,v=F;var _t=t.alternate;_t!==null&&(_t=_t.updateQueue,b=_t.lastBaseUpdate,b!==v&&(b===null?_t.firstBaseUpdate=nt:b.next=nt,_t.lastBaseUpdate=F))}if(f!==null){var Mt=c.baseState;v=0,_t=nt=F=null,b=f;do{var st=b.lane&-536870913,ct=st!==b.lane;if(ct?(ge&st)===st:(s&st)===st){st!==0&&st===Cs&&(lu=!0),_t!==null&&(_t=_t.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var It=t,Yt=b;st=n;var Ue=a;switch(Yt.tag){case 1:if(It=Yt.payload,typeof It=="function"){Mt=It.call(Ue,Mt,st);break t}Mt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Yt.payload,st=typeof It=="function"?It.call(Ue,Mt,st):It,st==null)break t;Mt=y({},Mt,st);break t;case 2:ha=!0}}st=b.callback,st!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[st]:ct.push(st))}else ct={lane:st,tag:b.tag,payload:b.payload,callback:b.callback,next:null},_t===null?(nt=_t=ct,F=Mt):_t=_t.next=ct,v|=st;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ct=b,b=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);_t===null&&(F=Mt),c.baseState=F,c.firstBaseUpdate=nt,c.lastBaseUpdate=_t,f===null&&(c.shared.lanes=0),xa|=v,t.lanes=v,t.memoizedState=Mt}}function Ud(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Nd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ud(a[t],n)}var Ns=D(null),ol=D(0);function Od(t,n){t=Yi,W(ol,t),W(Ns,n),Yi=t|n.baseLanes}function cu(){W(ol,Yi),W(Ns,Ns.current)}function uu(){Yi=ol.current,Y(Ns),Y(ol)}var Hn=D(null),si=null;function ma(t){var n=t.alternate;W(Ze,Ze.current&1),W(Hn,t),si===null&&(n===null||Ns.current!==null||n.memoizedState!==null)&&(si=t)}function fu(t){W(Ze,Ze.current),W(Hn,t),si===null&&(si=t)}function zd(t){t.tag===22?(W(Ze,Ze.current),W(Hn,t),si===null&&(si=t)):ga()}function ga(){W(Ze,Ze.current),W(Hn,Hn.current)}function Vn(t){Y(Hn),si===t&&(si=null),Y(Ze)}var Ze=D(0);function ll(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vf(a)||xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,te=null,Le=null,Je=null,cl=!1,Os=!1,Za=!1,ul=0,qr=0,zs=null,gv=0;function je(){throw Error(r(321))}function hu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Fn(t[a],n[a]))return!1;return!0}function du(t,n,a,s,c,f){return Gi=f,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?vp:Ru,Za=!1,f=a(s,c),Za=!1,Os&&(f=Bd(n,a,s,c)),Pd(t),f}function Pd(t){U.H=Kr;var n=Le!==null&&Le.next!==null;if(Gi=0,Je=Le=te=null,cl=!1,qr=0,zs=null,n)throw Error(r(300));t===null||$e||(t=t.dependencies,t!==null&&tl(t)&&($e=!0))}function Bd(t,n,a,s){te=t;var c=0;do{if(Os&&(zs=null),qr=0,Os=!1,25<=c)throw Error(r(301));if(c+=1,Je=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=xp,f=n(a,s)}while(Os);return f}function _v(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?Yr(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(te.flags|=1024),n}function pu(){var t=ul!==0;return ul=0,t}function mu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function gu(t){if(cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}cl=!1}Gi=0,Je=Le=te=null,Os=!1,qr=ul=0,zs=null}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?te.memoizedState=Je=t:Je=Je.next=t,Je}function Ke(){if(Le===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=Je===null?te.memoizedState:Je.next;if(n!==null)Je=n,Le=t;else{if(t===null)throw te.alternate===null?Error(r(467)):Error(r(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Je===null?te.memoizedState=Je=t:Je=Je.next=t}return Je}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yr(t){var n=qr;return qr+=1,zs===null&&(zs=[]),t=wd(zs,t,n),n=te,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?vp:Ru),t}function hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Yr(t);if(t.$$typeof===L)return mn(t)}throw Error(r(438,String(t)))}function _u(t){var n=null,a=te.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=te.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fl(),te.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=O;return n.index++,a}function Hi(t,n){return typeof n=="function"?n(t):n}function dl(t){var n=Ke();return vu(n,Le,t)}function vu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=v=null,F=null,nt=n,_t=!1;do{var Mt=nt.lane&-536870913;if(Mt!==nt.lane?(ge&Mt)===Mt:(Gi&Mt)===Mt){var st=nt.revertLane;if(st===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),Mt===Cs&&(_t=!0);else if((Gi&st)===st){nt=nt.next,st===Cs&&(_t=!0);continue}else Mt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(b=F=Mt,v=f):F=F.next=Mt,te.lanes|=st,xa|=st;Mt=nt.action,Za&&a(f,Mt),f=nt.hasEagerState?nt.eagerState:a(f,Mt)}else st={lane:Mt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(b=F=st,v=f):F=F.next=st,te.lanes|=Mt,xa|=Mt;nt=nt.next}while(nt!==null&&nt!==n);if(F===null?v=f:F.next=b,!Fn(f,t.memoizedState)&&($e=!0,_t&&(a=Ls,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=F,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function xu(t){var n=Ke(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);Fn(f,n.memoizedState)||($e=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Id(t,n,a){var s=te,c=Ke(),f=xe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Fn((Le||c).memoizedState,a);if(v&&(c.memoizedState=a,$e=!0),c=c.queue,Su(Hd.bind(null,s,c,t),[t]),c.getSnapshot!==n||v||Je!==null&&Je.memoizedState.tag&1){if(s.flags|=2048,Ps(9,{destroy:void 0},Gd.bind(null,s,c,a,n),null),Ne===null)throw Error(r(349));f||(Gi&127)!==0||Fd(s,n,a)}return a}function Fd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=te.updateQueue,n===null?(n=fl(),te.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Gd(t,n,a,s){n.value=a,n.getSnapshot=s,Vd(n)&&kd(t)}function Hd(t,n,a){return a(function(){Vd(n)&&kd(t)})}function Vd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Fn(t,a)}catch{return!0}}function kd(t){var n=Ga(t,2);n!==null&&zn(n,t,2)}function yu(t){var n=bn();if(typeof t=="function"){var a=t;if(t=a(),Za){Tt(!0);try{a()}finally{Tt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},n}function Xd(t,n,a,s){return t.baseState=a,vu(t,Le,typeof s=="function"?s:Hi)}function vv(t,n,a,s,c){if(gl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};U.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Wd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wd(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=U.T,v={};U.T=v;try{var b=a(c,s),F=U.S;F!==null&&F(v,b),jd(t,n,b)}catch(nt){Mu(t,n,nt)}finally{f!==null&&v.types!==null&&(f.types=v.types),U.T=f}}else try{f=a(c,s),jd(t,n,f)}catch(nt){Mu(t,n,nt)}}function jd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){qd(t,n,s)},function(s){return Mu(t,n,s)}):qd(t,n,a)}function qd(t,n,a){n.status="fulfilled",n.value=a,Yd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Wd(t,a)))}function Mu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Yd(n),n=n.next;while(n!==s)}t.action=null}function Yd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zd(t,n){return n}function Kd(t,n){if(xe){var a=Ne.formState;if(a!==null){t:{var s=te;if(xe){if(Be){e:{for(var c=Be,f=ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=ri(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Be=ri(c.nextSibling),s=c.data==="F!";break t}}ua(s)}s=!1}s&&(n=a[0])}}return a=bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zd,lastRenderedState:n},a.queue=s,a=mp.bind(null,te,s),s.dispatch=a,s=yu(!1),f=wu.bind(null,te,!1,s.queue),s=bn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=vv.bind(null,te,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Qd(t){var n=Ke();return Jd(n,Le,t)}function Jd(t,n,a){if(n=vu(t,n,Zd)[0],t=dl(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Yr(n)}catch(v){throw v===Ds?il:v}else s=n;n=Ke();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(te.flags|=2048,Ps(9,{destroy:void 0},xv.bind(null,c,a),null)),[s,f,t]}function xv(t,n){t.action=n}function $d(t){var n=Ke(),a=Le;if(a!==null)return Jd(n,a,t);Ke(),n=n.memoizedState,a=Ke();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Ps(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=te.updateQueue,n===null&&(n=fl(),te.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function tp(){return Ke().memoizedState}function pl(t,n,a,s){var c=bn();te.flags|=t,c.memoizedState=Ps(1|n,{destroy:void 0},a,s===void 0?null:s)}function ml(t,n,a,s){var c=Ke();s=s===void 0?null:s;var f=c.memoizedState.inst;Le!==null&&s!==null&&hu(s,Le.memoizedState.deps)?c.memoizedState=Ps(n,f,a,s):(te.flags|=t,c.memoizedState=Ps(1|n,f,a,s))}function ep(t,n){pl(8390656,8,t,n)}function Su(t,n){ml(2048,8,t,n)}function yv(t){te.flags|=4;var n=te.updateQueue;if(n===null)n=fl(),te.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function np(t){var n=Ke().memoizedState;return yv({ref:n,nextImpl:t}),function(){if((be&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ip(t,n){return ml(4,2,t,n)}function ap(t,n){return ml(4,4,t,n)}function sp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function rp(t,n,a){a=a!=null?a.concat([t]):null,ml(4,4,sp.bind(null,n,t),a)}function Eu(){}function op(t,n){var a=Ke();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&hu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function lp(t,n){var a=Ke();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&hu(n,s[1]))return s[0];if(s=t(),Za){Tt(!0);try{t()}finally{Tt(!1)}}return a.memoizedState=[s,n],s}function bu(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=cm(),te.lanes|=t,xa|=t,a)}function cp(t,n,a,s){return Fn(a,n)?a:Ns.current!==null?(t=bu(t,a,s),Fn(t,n)||($e=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(ge&261930)===0?($e=!0,t.memoizedState=a):(t=cm(),te.lanes|=t,xa|=t,n)}function up(t,n,a,s,c){var f=V.p;V.p=f!==0&&8>f?f:8;var v=U.T,b={};U.T=b,wu(t,!1,n,a);try{var F=c(),nt=U.S;if(nt!==null&&nt(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var _t=mv(F,s);Zr(t,n,_t,Wn(t))}else Zr(t,n,s,Wn(t))}catch(Mt){Zr(t,n,{then:function(){},status:"rejected",reason:Mt},Wn())}finally{V.p=f,v!==null&&b.types!==null&&(v.types=b.types),U.T=v}}function Mv(){}function Tu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=fp(t).queue;up(t,c,n,k,a===null?Mv:function(){return hp(t),a(s)})}function fp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function hp(t){var n=fp(t);n.next===null&&(n=t.alternate.memoizedState),Zr(t,n.next.queue,{},Wn())}function Au(){return mn(ho)}function dp(){return Ke().memoizedState}function pp(){return Ke().memoizedState}function Sv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();t=da(a);var s=pa(n,t,a);s!==null&&(zn(s,n,a),Xr(s,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function Ev(t,n,a){var s=Wn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gl(t)?gp(n,a):(a=Xc(t,n,a,s),a!==null&&(zn(a,t,s),_p(a,n,s)))}function mp(t,n,a){var s=Wn();Zr(t,n,a,s)}function Zr(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(t))gp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(c.hasEagerState=!0,c.eagerState=b,Fn(b,v))return Ko(t,n,c,0),Ne===null&&Zo(),!1}catch{}finally{}if(a=Xc(t,n,c,s),a!==null)return zn(a,t,s),_p(a,n,s),!0}return!1}function wu(t,n,a,s){if(s={lane:2,revertLane:rf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},gl(t)){if(n)throw Error(r(479))}else n=Xc(t,a,s,2),n!==null&&zn(n,t,2)}function gl(t){var n=t.alternate;return t===te||n!==null&&n===te}function gp(t,n){Os=cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function _p(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ar(t,a)}}var Kr={readContext:mn,use:hl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};Kr.useEffectEvent=je;var vp={readContext:mn,use:hl,useCallback:function(t,n){return bn().memoizedState=[t,n===void 0?null:n],t},useContext:mn,useEffect:ep,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,pl(4194308,4,sp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return pl(4194308,4,t,n)},useInsertionEffect:function(t,n){pl(4,2,t,n)},useMemo:function(t,n){var a=bn();n=n===void 0?null:n;var s=t();if(Za){Tt(!0);try{t()}finally{Tt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=bn();if(a!==void 0){var c=a(n);if(Za){Tt(!0);try{a(n)}finally{Tt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Ev.bind(null,te,t),[s.memoizedState,t]},useRef:function(t){var n=bn();return t={current:t},n.memoizedState=t},useState:function(t){t=yu(t);var n=t.queue,a=mp.bind(null,te,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Eu,useDeferredValue:function(t,n){var a=bn();return bu(a,t,n)},useTransition:function(){var t=yu(!1);return t=up.bind(null,te,t.queue,!0,!1),bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=te,c=bn();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ne===null)throw Error(r(349));(ge&127)!==0||Fd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,ep(Hd.bind(null,s,f,t),[t]),s.flags|=2048,Ps(9,{destroy:void 0},Gd.bind(null,s,f,a,n),null),a},useId:function(){var t=bn(),n=Ne.identifierPrefix;if(xe){var a=bi,s=Ei;a=(s&~(1<<32-Et(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Au,useFormState:Kd,useActionState:Kd,useOptimistic:function(t){var n=bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wu.bind(null,te,!0,a),a.dispatch=n,[t,n]},useMemoCache:_u,useCacheRefresh:function(){return bn().memoizedState=Sv.bind(null,te)},useEffectEvent:function(t){var n=bn(),a={impl:t};return n.memoizedState=a,function(){if((be&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ru={readContext:mn,use:hl,useCallback:op,useContext:mn,useEffect:Su,useImperativeHandle:rp,useInsertionEffect:ip,useLayoutEffect:ap,useMemo:lp,useReducer:dl,useRef:tp,useState:function(){return dl(Hi)},useDebugValue:Eu,useDeferredValue:function(t,n){var a=Ke();return cp(a,Le.memoizedState,t,n)},useTransition:function(){var t=dl(Hi)[0],n=Ke().memoizedState;return[typeof t=="boolean"?t:Yr(t),n]},useSyncExternalStore:Id,useId:dp,useHostTransitionStatus:Au,useFormState:Qd,useActionState:Qd,useOptimistic:function(t,n){var a=Ke();return Xd(a,Le,t,n)},useMemoCache:_u,useCacheRefresh:pp};Ru.useEffectEvent=np;var xp={readContext:mn,use:hl,useCallback:op,useContext:mn,useEffect:Su,useImperativeHandle:rp,useInsertionEffect:ip,useLayoutEffect:ap,useMemo:lp,useReducer:xu,useRef:tp,useState:function(){return xu(Hi)},useDebugValue:Eu,useDeferredValue:function(t,n){var a=Ke();return Le===null?bu(a,t,n):cp(a,Le.memoizedState,t,n)},useTransition:function(){var t=xu(Hi)[0],n=Ke().memoizedState;return[typeof t=="boolean"?t:Yr(t),n]},useSyncExternalStore:Id,useId:dp,useHostTransitionStatus:Au,useFormState:$d,useActionState:$d,useOptimistic:function(t,n){var a=Ke();return Le!==null?Xd(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:_u,useCacheRefresh:pp};xp.useEffectEvent=np;function Cu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Wn(),c=da(s);c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(zn(n,t,s),Xr(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Wn(),c=da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(zn(n,t,s),Xr(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Wn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(t,s,a),n!==null&&(zn(n,t,a),Xr(n,t,a))}};function yp(t,n,a,s,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!Pr(a,s)||!Pr(c,f):!0}function Mp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Lu.enqueueReplaceState(n,n.state,null)}function Ka(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Sp(t){Yo(t)}function Ep(t){console.error(t)}function bp(t){Yo(t)}function _l(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Du(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(t,n)},a}function Ap(t){return t=da(t),t.tag=3,t}function wp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Tp(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Tp(n,a,s),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function bv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Rs(n,a,c,!0),a=Hn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Cl():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),nf(t,s,c)),!1;case 22:return a.flags|=65536,s===al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),nf(t,s,c)),!1}throw Error(r(435,a.tag))}return nf(t,s,c),Cl(),!1}if(xe)return n=Hn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Kc&&(t=Error(r(422),{cause:s}),Fr(ei(t,a)))):(s!==Kc&&(n=Error(r(423),{cause:s}),Fr(ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ei(s,a),c=Du(t.stateNode,s,c),ou(t,c),qe!==4&&(qe=2)),!1;var f=Error(r(520),{cause:s});if(f=ei(f,a),ao===null?ao=[f]:ao.push(f),qe!==4&&(qe=2),n===null)return!0;s=ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Du(a.stateNode,s,t),ou(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ap(c),wp(c,t,a,s),ou(a,c),!1}a=a.return}while(a!==null);return!1}var Uu=Error(r(461)),$e=!1;function gn(t,n,a,s){n.child=t===null?Dd(n,null,a,s):Ya(n,t.child,a,s)}function Rp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var b in s)b!=="ref"&&(v[b]=s[b])}else v=s;return Xa(n),s=du(t,n,a,v,f,c),b=pu(),t!==null&&!$e?(mu(t,n,c),Vi(t,n,c)):(xe&&b&&Yc(n),n.flags|=1,gn(t,n,s,c),n.child)}function Cp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Wc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Lp(t,n,f,s,c)):(t=Jo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Gu(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Pr,a(v,s)&&t.ref===n.ref)return Vi(t,n,c)}return n.flags|=1,t=Pi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Lp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Pr(f,s)&&t.ref===n.ref)if($e=!1,n.pendingProps=s=f,Gu(t,c))(t.flags&131072)!==0&&($e=!0);else return n.lanes=t.lanes,Vi(t,n,c)}return Nu(t,n,a,s,c)}function Dp(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Up(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&nl(n,f!==null?f.cachePool:null),f!==null?Od(n,f):cu(),zd(n);else return s=n.lanes=536870912,Up(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(nl(n,f.cachePool),Od(n,f),ga(),n.memoizedState=null):(t!==null&&nl(n,null),cu(),ga());return gn(t,n,c,a),n.child}function Qr(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Up(t,n,a,s,c){var f=iu();return f=f===null?null:{parent:Qe._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&nl(n,null),cu(),zd(n),t!==null&&Rs(t,n,s,!0),n.childLanes=c,null}function vl(t,n){return n=yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Np(t,n,a){return Ya(n,t.child,null,a),t=vl(n,n.pendingProps),t.flags|=2,Vn(n),n.memoizedState=null,t}function Tv(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=vl(n,s),n.lanes=536870912,Qr(null,t);if(fu(n),(t=Be)?(t=Wm(t,ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:Ei,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=gd(t),a.return=n,n.child=a,pn=n,Be=null)):t=null,t===null)throw ua(n);return n.lanes=536870912,null}return vl(n,s)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(fu(n),c)if(n.flags&256)n.flags&=-257,n=Np(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if($e||Rs(t,n,a,!1),c=(a&t.childLanes)!==0,$e||c){if(s=Ne,s!==null&&(v=Po(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ga(t,v),zn(s,t,v),Uu;Cl(),n=Np(t,n,a)}else t=f.treeContext,Be=ri(v.nextSibling),pn=n,xe=!0,ca=null,ai=!1,t!==null&&xd(n,t),n=vl(n,s),n.flags|=4096;return n}return t=Pi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Nu(t,n,a,s,c){return Xa(n),a=du(t,n,a,s,void 0,c),s=pu(),t!==null&&!$e?(mu(t,n,c),Vi(t,n,c)):(xe&&s&&Yc(n),n.flags|=1,gn(t,n,a,c),n.child)}function Op(t,n,a,s,c,f){return Xa(n),n.updateQueue=null,a=Bd(n,s,a,c),Pd(t),s=pu(),t!==null&&!$e?(mu(t,n,f),Vi(t,n,f)):(xe&&s&&Yc(n),n.flags|=1,gn(t,n,a,f),n.child)}function zp(t,n,a,s,c){if(Xa(n),n.stateNode===null){var f=bs,v=a.contextType;typeof v=="object"&&v!==null&&(f=mn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Lu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},su(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?mn(v):bs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Cu(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Lu.enqueueReplaceState(f,f.state,null),jr(n,s,f,c),Wr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,F=Ka(a,b);f.props=F;var nt=f.context,_t=a.contextType;v=bs,typeof _t=="object"&&_t!==null&&(v=mn(_t));var Mt=a.getDerivedStateFromProps;_t=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,_t||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||nt!==v)&&Mp(n,f,s,v),ha=!1;var st=n.memoizedState;f.state=st,jr(n,s,f,c),Wr(),nt=n.memoizedState,b||st!==nt||ha?(typeof Mt=="function"&&(Cu(n,a,Mt,s),nt=n.memoizedState),(F=ha||yp(n,a,F,s,st,nt,v))?(_t||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=v,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ru(t,n),v=n.memoizedProps,_t=Ka(a,v),f.props=_t,Mt=n.pendingProps,st=f.context,nt=a.contextType,F=bs,typeof nt=="object"&&nt!==null&&(F=mn(nt)),b=a.getDerivedStateFromProps,(nt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Mt||st!==F)&&Mp(n,f,s,F),ha=!1,st=n.memoizedState,f.state=st,jr(n,s,f,c),Wr();var ct=n.memoizedState;v!==Mt||st!==ct||ha||t!==null&&t.dependencies!==null&&tl(t.dependencies)?(typeof b=="function"&&(Cu(n,a,b,s),ct=n.memoizedState),(_t=ha||yp(n,a,_t,s,st,ct,F)||t!==null&&t.dependencies!==null&&tl(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=F,s=_t):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,xl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ya(n,t.child,null,c),n.child=Ya(n,null,a,c)):gn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Vi(t,n,c),t}function Pp(t,n,a,s){return Va(),n.flags|=256,gn(t,n,a,s),n.child}var Ou={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zu(t){return{baseLanes:t,cachePool:Td()}}function Pu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Xn),t}function Bp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(Ze.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?ma(n):ga(),(t=Be)?(t=Wm(t,ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:Ei,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=gd(t),a.return=n,n.child=a,pn=n,Be=null)):t=null,t===null)throw ua(n);return xf(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,c?(ga(),c=n.mode,b=yl({mode:"hidden",children:b},c),s=Ha(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=zu(a),s.childLanes=Pu(t,v,a),n.memoizedState=Ou,Qr(null,s)):(ma(n),Bu(n,b))}var F=t.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Iu(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),b=s.fallback,c=n.mode,s=yl({mode:"visible",children:s.children},c),b=Ha(b,c,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,Ya(n,t.child,null,a),s=n.child,s.memoizedState=zu(a),s.childLanes=Pu(t,v,a),n.memoizedState=Ou,n=Qr(null,s));else if(ma(n),xf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var nt=v.dgst;v=nt,s=Error(r(419)),s.stack="",s.digest=v,Fr({value:s,source:null,stack:null}),n=Iu(t,n,a)}else if($e||Rs(t,n,a,!1),v=(a&t.childLanes)!==0,$e||v){if(v=Ne,v!==null&&(s=Po(v,a),s!==0&&s!==F.retryLane))throw F.retryLane=s,Ga(t,s),zn(v,t,s),Uu;vf(b)||Cl(),n=Iu(t,n,a)}else vf(b)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Be=ri(b.nextSibling),pn=n,xe=!0,ca=null,ai=!1,t!==null&&xd(n,t),n=Bu(n,s.children),n.flags|=4096);return n}return c?(ga(),b=s.fallback,c=n.mode,F=t.child,nt=F.sibling,s=Pi(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,nt!==null?b=Pi(nt,b):(b=Ha(b,c,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,Qr(null,s),s=n.child,b=t.child.memoizedState,b===null?b=zu(a):(c=b.cachePool,c!==null?(F=Qe._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Td(),b={baseLanes:b.baseLanes|a,cachePool:c}),s.memoizedState=b,s.childLanes=Pu(t,v,a),n.memoizedState=Ou,Qr(t.child,s)):(ma(n),a=t.child,t=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Bu(t,n){return n=yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yl(t,n){return t=Gn(22,t,null,n),t.lanes=0,t}function Iu(t,n,a){return Ya(n,t.child,null,a),t=Bu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ip(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),$c(t.return,n,a)}function Fu(t,n,a,s,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function Fp(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var v=Ze.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,W(Ze,v),gn(t,n,s,a),s=xe?Ir:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ip(t,a,n);else if(t.tag===19)Ip(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ll(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Fu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ll(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Fu(n,!0,a,null,f,s);break;case"together":Fu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Vi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Rs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Pi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Pi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Gu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tl(t)))}function Av(t,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),fa(n,Qe,t.memoizedState.cache),Va();break;case 27:case 5:wt(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,fu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Bp(t,n,a):(ma(n),t=Vi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Rs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Fp(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),W(Ze,Ze.current),s)break;return null;case 22:return n.lanes=0,Dp(t,n,a,n.pendingProps);case 24:fa(n,Qe,t.memoizedState.cache)}return Vi(t,n,a)}function Gp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)$e=!0;else{if(!Gu(t,a)&&(n.flags&128)===0)return $e=!1,Av(t,n,a);$e=(t.flags&131072)!==0}else $e=!1,xe&&(n.flags&1048576)!==0&&vd(n,Ir,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=ja(n.elementType),n.type=t,typeof t=="function")Wc(t)?(s=Ka(t,s),n.tag=1,n=zp(null,n,t,s,a)):(n.tag=0,n=Nu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===B){n.tag=11,n=Rp(null,n,t,s,a);break t}else if(c===X){n.tag=14,n=Cp(null,n,t,s,a);break t}}throw n=it(t)||t,Error(r(306,n,""))}}return n;case 0:return Nu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ka(s,n.pendingProps),zp(t,n,s,c,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,ru(t,n),jr(n,s,null,a);var v=n.memoizedState;if(s=v.cache,fa(n,Qe,s),s!==f.cache&&tu(n,[Qe],a,!0),Wr(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Pp(t,n,s,a);break t}else if(s!==c){c=ei(Error(r(424)),n),Fr(c),n=Pp(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Be=ri(t.firstChild),pn=n,xe=!0,ca=null,ai=!0,a=Dd(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Va(),s===c){n=Vi(t,n,a);break t}gn(t,n,s,a)}n=n.child}return n;case 26:return xl(t,n),t===null?(a=Qm(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,s=Pl(bt.current).createElement(a),s[J]=n,s[mt]=t,_n(s,a,t),ce(s),n.stateNode=s):n.memoizedState=Qm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return wt(n),t===null&&xe&&(s=n.stateNode=Ym(n.type,n.pendingProps,bt.current),pn=n,ai=!0,c=Be,ba(n.type)?(yf=c,Be=ri(s.firstChild)):Be=c),gn(t,n,n.pendingProps.children,a),xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=s=Be)&&(s=nx(s,n.type,n.pendingProps,ai),s!==null?(n.stateNode=s,pn=n,Be=ri(s.firstChild),ai=!1,c=!0):c=!1),c||ua(n)),wt(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,mf(c,f)?s=null:v!==null&&mf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=du(t,n,_v,null,null,a),ho._currentValue=c),xl(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=Be)&&(a=ix(a,n.pendingProps,ai),a!==null?(n.stateNode=a,pn=n,Be=null,t=!0):t=!1),t||ua(n)),null;case 13:return Bp(t,n,a);case 4:return Pt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ya(n,null,s,a):gn(t,n,s,a),n.child;case 11:return Rp(t,n,n.type,n.pendingProps,a);case 7:return gn(t,n,n.pendingProps,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),gn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Xa(n),c=mn(c),s=s(c),n.flags|=1,gn(t,n,s,a),n.child;case 14:return Cp(t,n,n.type,n.pendingProps,a);case 15:return Lp(t,n,n.type,n.pendingProps,a);case 19:return Fp(t,n,a);case 31:return Tv(t,n,a);case 22:return Dp(t,n,a,n.pendingProps);case 24:return Xa(n),s=mn(Qe),t===null?(c=iu(),c===null&&(c=Ne,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},su(n),fa(n,Qe,c)):((t.lanes&a)!==0&&(ru(t,n),jr(n,null,null,a),Wr()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,Qe,s)):(s=f.cache,fa(n,Qe,s),s!==c.cache&&tu(n,[Qe],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(t){t.flags|=4}function Hu(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(dm())t.flags|=8192;else throw qa=al,au}else t.flags&=-16777217}function Hp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ng(n))if(dm())t.flags|=8192;else throw qa=al,au}function Ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?In():536870912,t.lanes|=n,Gs|=n)}function Jr(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ie(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function wv(t,n,a){var s=n.pendingProps;switch(Zc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(n),null;case 1:return Ie(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(Qe),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ws(n)?ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qc())),Ie(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ki(n),f!==null?(Ie(n),Hp(n,f)):(Ie(n),Hu(n,c,null,s,a))):f?f!==t.memoizedState?(ki(n),Ie(n),Hp(n,f)):(Ie(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ki(n),Ie(n),Hu(n,c,t,s,a)),null;case 27:if(Wt(n),a=bt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ie(n),null}t=Z.current,ws(n)?yd(n):(t=Ym(c,s,a),n.stateNode=t,ki(n))}return Ie(n),null;case 5:if(Wt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ie(n),null}if(f=Z.current,ws(n))yd(n);else{var v=Pl(bt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(c,{is:s.is}):v.createElement(c)}}f[J]=n,f[mt]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(_n(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ki(n)}}return Ie(n),Hu(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=bt.current,ws(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=pn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[J]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Bm(t.nodeValue,a)),t||ua(n,!0)}else t=Pl(t).createTextNode(s),t[J]=n,n.stateNode=t}return Ie(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=ws(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[J]=n}else Va(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),t=!1}else a=Qc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Vn(n),n):(Vn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ie(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ws(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[J]=n}else Va(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),c=!1}else c=Qc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vn(n),n):(Vn(n),null)}return Vn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),Ie(n),null);case 4:return Ut(),t===null&&uf(n.stateNode.containerInfo),Ie(n),null;case 10:return Fi(n.type),Ie(n),null;case 19:if(Y(Ze),s=n.memoizedState,s===null)return Ie(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)Jr(s,!1);else{if(qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ll(t),f!==null){for(n.flags|=128,Jr(s,!1),t=f.updateQueue,n.updateQueue=t,Ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)md(a,t),a=a.sibling;return W(Ze,Ze.current&1|2),xe&&Bi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&H()>Al&&(n.flags|=128,c=!0,Jr(s,!1),n.lanes=4194304)}else{if(!c)if(t=ll(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ml(n,t),Jr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xe)return Ie(n),null}else 2*H()-s.renderingStartTime>Al&&a!==536870912&&(n.flags|=128,c=!0,Jr(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=H(),t.sibling=null,a=Ze.current,W(Ze,c?a&1|2:a&1),xe&&Bi(n,s.treeForkCount),t):(Ie(n),null);case 22:case 23:return Vn(n),uu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ie(n),n.subtreeFlags&6&&(n.flags|=8192)):Ie(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Y(Wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(Qe),Ie(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Rv(t,n){switch(Zc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fi(Qe),Ut(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 31:if(n.memoizedState!==null){if(Vn(n),n.alternate===null)throw Error(r(340));Va()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Vn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Va()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(Ze),null;case 4:return Ut(),null;case 10:return Fi(n.type),null;case 22:case 23:return Vn(n),uu(),t!==null&&Y(Wa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fi(Qe),null;case 25:return null;default:return null}}function Vp(t,n){switch(Zc(n),n.tag){case 3:Fi(Qe),Ut();break;case 26:case 27:case 5:Wt(n);break;case 4:Ut();break;case 31:n.memoizedState!==null&&Vn(n);break;case 13:Vn(n);break;case 19:Y(Ze);break;case 10:Fi(n.type);break;case 22:case 23:Vn(n),uu(),t!==null&&Y(Wa);break;case 24:Fi(Qe)}}function $r(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==c)}}catch(b){Ce(n,n.return,b)}}function _a(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var v=s.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,c=n;var F=a,nt=b;try{nt()}catch(_t){Ce(c,F,_t)}}}s=s.next}while(s!==f)}}catch(_t){Ce(n,n.return,_t)}}function kp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Nd(n,a)}catch(s){Ce(t,t.return,s)}}}function Xp(t,n,a){a.props=Ka(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ce(t,n,s)}}function to(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ce(t,n,c)}}function Ti(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ce(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ce(t,n,c)}else a.current=null}function Wp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ce(t,t.return,c)}}function Vu(t,n,a){try{var s=t.stateNode;Kv(s,t.type,a,n),s[mt]=n}catch(c){Ce(t,t.return,c)}}function jp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ba(t.type)||t.tag===4}function ku(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||jp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Oi));else if(s!==4&&(s===27&&ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Xu(t,n,a),t=t.sibling;t!==null;)Xu(t,n,a),t=t.sibling}function Sl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,n,a),t=t.sibling;t!==null;)Sl(t,n,a),t=t.sibling}function qp(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);_n(n,s,a),n[J]=t,n[mt]=a}catch(f){Ce(t,t.return,f)}}var Xi=!1,tn=!1,Wu=!1,Yp=typeof WeakSet=="function"?WeakSet:Set,cn=null;function Cv(t,n){if(t=t.containerInfo,df=kl,t=rd(t),Ic(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,F=-1,nt=0,_t=0,Mt=t,st=null;e:for(;;){for(var ct;Mt!==a||c!==0&&Mt.nodeType!==3||(b=v+c),Mt!==f||s!==0&&Mt.nodeType!==3||(F=v+s),Mt.nodeType===3&&(v+=Mt.nodeValue.length),(ct=Mt.firstChild)!==null;)st=Mt,Mt=ct;for(;;){if(Mt===t)break e;if(st===a&&++nt===c&&(b=v),st===f&&++_t===s&&(F=v),(ct=Mt.nextSibling)!==null)break;Mt=st,st=Mt.parentNode}Mt=ct}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(pf={focusedElem:t,selectionRange:a},kl=!1,cn=n;cn!==null;)if(n=cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,cn=t;else for(;cn!==null;){switch(n=cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var It=Ka(a.type,c);t=s.getSnapshotBeforeUpdate(It,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Yt){Ce(a,a.return,Yt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)_f(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":_f(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,cn=t;break}cn=n.return}}function Zp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),s&4&&$r(5,a);break;case 1:if(ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ce(a,a.return,v)}else{var c=Ka(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ce(a,a.return,v)}}s&64&&kp(a),s&512&&to(a,a.return);break;case 3:if(ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Nd(t,n)}catch(v){Ce(a,a.return,v)}}break;case 27:n===null&&s&4&&qp(a);case 26:case 5:ji(t,a),n===null&&s&4&&Wp(a),s&512&&to(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),s&4&&Jp(t,a);break;case 13:ji(t,a),s&4&&$p(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Iv.bind(null,a),ax(t,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||tn,c=Xi;var f=tn;Xi=s,(tn=n)&&!f?qi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),Xi=c,tn=f}break;case 30:break;default:ji(t,a)}}function Kp(t){var n=t.alternate;n!==null&&(t.alternate=null,Kp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&le(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ge=null,Dn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Qp(t,n,a),a=a.sibling}function Qp(t,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Gt,a)}catch{}switch(a.tag){case 26:tn||Ti(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Ti(a,n);var s=Ge,c=Dn;ba(a.type)&&(Ge=a.stateNode,Dn=!1),Wi(t,n,a),co(a.stateNode),Ge=s,Dn=c;break;case 5:tn||Ti(a,n);case 6:if(s=Ge,c=Dn,Ge=null,Wi(t,n,a),Ge=s,Dn=c,Ge!==null)if(Dn)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode)}catch(f){Ce(a,n,f)}else try{Ge.removeChild(a.stateNode)}catch(f){Ce(a,n,f)}break;case 18:Ge!==null&&(Dn?(t=Ge,km(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ys(t)):km(Ge,a.stateNode));break;case 4:s=Ge,c=Dn,Ge=a.stateNode.containerInfo,Dn=!0,Wi(t,n,a),Ge=s,Dn=c;break;case 0:case 11:case 14:case 15:_a(2,a,n),tn||_a(4,a,n),Wi(t,n,a);break;case 1:tn||(Ti(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Xp(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:tn=(s=tn)||a.memoizedState!==null,Wi(t,n,a),tn=s;break;default:Wi(t,n,a)}}function Jp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ys(t)}catch(a){Ce(n,n.return,a)}}}function $p(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ys(t)}catch(a){Ce(n,n.return,a)}}function Lv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Yp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Yp),n;default:throw Error(r(435,t.tag))}}function El(t,n){var a=Lv(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Fv.bind(null,t,s);s.then(c,c)}})}function Un(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(ba(b.type)){Ge=b.stateNode,Dn=!1;break t}break;case 5:Ge=b.stateNode,Dn=!1;break t;case 3:case 4:Ge=b.stateNode.containerInfo,Dn=!0;break t}b=b.return}if(Ge===null)throw Error(r(160));Qp(f,v,c),Ge=null,Dn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)tm(n,t),n=n.sibling}var hi=null;function tm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Un(n,t),Nn(t),s&4&&(_a(3,t,t.return),$r(3,t),_a(5,t,t.return));break;case 1:Un(n,t),Nn(t),s&512&&(tn||a===null||Ti(a,a.return)),s&64&&Xi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=hi;if(Un(n,t),Nn(t),s&512&&(tn||a===null||Ti(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Jt]||f[J]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),_n(f,s,a),f[J]=t,ce(f),s=f;break t;case"link":var v=tg("link","href",c).get(s+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=c.createElement(s),_n(f,s,a),c.head.appendChild(f);break;case"meta":if(v=tg("meta","content",c).get(s+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=c.createElement(s),_n(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[J]=t,ce(f),s=f}t.stateNode=s}else eg(c,t.type,t.stateNode);else t.stateNode=$m(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?eg(c,t.type,t.stateNode):$m(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Vu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Un(n,t),Nn(t),s&512&&(tn||a===null||Ti(a,a.return)),a!==null&&s&4&&Vu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Un(n,t),Nn(t),s&512&&(tn||a===null||Ti(a,a.return)),t.flags&32){c=t.stateNode;try{_s(c,"")}catch(It){Ce(t,t.return,It)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Vu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Wu=!0);break;case 6:if(Un(n,t),Nn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(It){Ce(t,t.return,It)}}break;case 3:if(Fl=null,c=hi,hi=Bl(n.containerInfo),Un(n,t),hi=c,Nn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ys(n.containerInfo)}catch(It){Ce(t,t.return,It)}Wu&&(Wu=!1,em(t));break;case 4:s=hi,hi=Bl(t.stateNode.containerInfo),Un(n,t),Nn(t),hi=s;break;case 12:Un(n,t),Nn(t);break;case 31:Un(n,t),Nn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 13:Un(n,t),Nn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tl=H()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,nt=Xi,_t=tn;if(Xi=nt||c,tn=_t||F,Un(n,t),tn=_t,Xi=nt,Nn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||Xi||tn||Qa(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=F.stateNode;var Mt=F.memoizedProps.style,st=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;b.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(It){Ce(F,F.return,It)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(It){Ce(F,F.return,It)}}}else if(n.tag===18){if(a===null){F=n;try{var ct=F.stateNode;c?Xm(ct,!0):Xm(F.stateNode,!1)}catch(It){Ce(F,F.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,El(t,a))));break;case 19:Un(n,t),Nn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 30:break;case 21:break;default:Un(n,t),Nn(t)}}function Nn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(jp(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=ku(t);Sl(t,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(_s(v,""),a.flags&=-33);var b=ku(t);Sl(t,b,v);break;case 3:case 4:var F=a.stateNode.containerInfo,nt=ku(t);Xu(t,nt,F);break;default:throw Error(r(161))}}catch(_t){Ce(t,t.return,_t)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function em(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;em(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zp(t,n.alternate,n),n=n.sibling}function Qa(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),Qa(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xp(n,n.return,a),Qa(n);break;case 27:co(n.stateNode);case 26:case 5:Ti(n,n.return),Qa(n);break;case 22:n.memoizedState===null&&Qa(n);break;case 30:Qa(n);break;default:Qa(n)}t=t.sibling}}function qi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:qi(c,f,a),$r(4,f);break;case 1:if(qi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Ce(s,s.return,nt)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Ud(F[c],b)}catch(nt){Ce(s,s.return,nt)}}a&&v&64&&kp(f),to(f,f.return);break;case 27:qp(f);case 26:case 5:qi(c,f,a),a&&s===null&&v&4&&Wp(f),to(f,f.return);break;case 12:qi(c,f,a);break;case 31:qi(c,f,a),a&&v&4&&Jp(c,f);break;case 13:qi(c,f,a),a&&v&4&&$p(c,f);break;case 22:f.memoizedState===null&&qi(c,f,a),to(f,f.return);break;case 30:break;default:qi(c,f,a)}n=n.sibling}}function ju(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Gr(a))}function qu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Gr(t))}function di(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)nm(t,n,a,s),n=n.sibling}function nm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:di(t,n,a,s),c&2048&&$r(9,n);break;case 1:di(t,n,a,s);break;case 3:di(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Gr(t)));break;case 12:if(c&2048){di(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Ce(n,n.return,F)}}else di(t,n,a,s);break;case 31:di(t,n,a,s);break;case 13:di(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?di(t,n,a,s):eo(t,n):f._visibility&2?di(t,n,a,s):(f._visibility|=2,Bs(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ju(v,n);break;case 24:di(t,n,a,s),c&2048&&qu(n.alternate,n);break;default:di(t,n,a,s)}}function Bs(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,b=a,F=s,nt=v.flags;switch(v.tag){case 0:case 11:case 15:Bs(f,v,b,F,c),$r(8,v);break;case 23:break;case 22:var _t=v.stateNode;v.memoizedState!==null?_t._visibility&2?Bs(f,v,b,F,c):eo(f,v):(_t._visibility|=2,Bs(f,v,b,F,c)),c&&nt&2048&&ju(v.alternate,v);break;case 24:Bs(f,v,b,F,c),c&&nt&2048&&qu(v.alternate,v);break;default:Bs(f,v,b,F,c)}n=n.sibling}}function eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:eo(a,s),c&2048&&ju(s.alternate,s);break;case 24:eo(a,s),c&2048&&qu(s.alternate,s);break;default:eo(a,s)}n=n.sibling}}var no=8192;function Is(t,n,a){if(t.subtreeFlags&no)for(t=t.child;t!==null;)im(t,n,a),t=t.sibling}function im(t,n,a){switch(t.tag){case 26:Is(t,n,a),t.flags&no&&t.memoizedState!==null&&gx(a,hi,t.memoizedState,t.memoizedProps);break;case 5:Is(t,n,a);break;case 3:case 4:var s=hi;hi=Bl(t.stateNode.containerInfo),Is(t,n,a),hi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=no,no=16777216,Is(t,n,a),no=s):Is(t,n,a));break;default:Is(t,n,a)}}function am(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];cn=s,rm(s,t)}am(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sm(t),t=t.sibling}function sm(t){switch(t.tag){case 0:case 11:case 15:io(t),t.flags&2048&&_a(9,t,t.return);break;case 3:io(t);break;case 12:io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bl(t)):io(t);break;default:io(t)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];cn=s,rm(s,t)}am(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}t=t.sibling}}function rm(t,n){for(;cn!==null;){var a=cn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Gr(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,cn=s;else t:for(a=t;cn!==null;){s=cn;var c=s.sibling,f=s.return;if(Kp(s),s===a){cn=null;break t}if(c!==null){c.return=f,cn=c;break t}cn=f}}}var Dv={getCacheForType:function(t){var n=mn(Qe),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return mn(Qe).controller.signal}},Uv=typeof WeakMap=="function"?WeakMap:Map,be=0,Ne=null,de=null,ge=0,Re=0,kn=null,va=!1,Fs=!1,Yu=!1,Yi=0,qe=0,xa=0,Ja=0,Zu=0,Xn=0,Gs=0,ao=null,On=null,Ku=!1,Tl=0,om=0,Al=1/0,wl=null,ya=null,rn=0,Ma=null,Hs=null,Zi=0,Qu=0,Ju=null,lm=null,so=0,$u=null;function Wn(){return(be&2)!==0&&ge!==0?ge&-ge:U.T!==null?rf():C()}function cm(){if(Xn===0)if((ge&536870912)===0||xe){var t=St;St<<=1,(St&3932160)===0&&(St=262144),Xn=t}else Xn=536870912;return t=Hn.current,t!==null&&(t.flags|=32),Xn}function zn(t,n,a){(t===Ne&&(Re===2||Re===9)||t.cancelPendingCommit!==null)&&(Vs(t,0),Sa(t,ge,Xn,!1)),ke(t,a),((be&2)===0||t!==Ne)&&(t===Ne&&((be&2)===0&&(Ja|=a),qe===4&&Sa(t,ge,Xn,!1)),Ai(t))}function um(t,n,a){if((be&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||ee(t,n),c=s?zv(t,n):ef(t,n,!0),f=s;do{if(c===0){Fs&&!s&&Sa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Nv(a)){c=ef(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=t;c=ao;var F=b.current.memoizedState.isDehydrated;if(F&&(Vs(b,v).flags|=256),v=ef(b,v,!1),v!==2){if(Yu&&!F){b.errorRecoveryDisabledLanes|=f,Ja|=f,c=4;break t}f=On,On=c,f!==null&&(On===null?On=f:On.push.apply(On,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){Vs(t,0),Sa(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Sa(s,n,Xn,!va);break t;case 2:On=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Tl+300-H(),10<c)){if(Sa(s,n,Xn,!va),$t(s,0,!0)!==0)break t;Zi=n,s.timeoutHandle=Hm(fm.bind(null,s,a,On,wl,Ku,n,Xn,Ja,Gs,va,f,"Throttled",-0,0),c);break t}fm(s,a,On,wl,Ku,n,Xn,Ja,Gs,va,f,null,-0,0)}}break}while(!0);Ai(t)}function fm(t,n,a,s,c,f,v,b,F,nt,_t,Mt,st,ct){if(t.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},im(n,f,Mt);var It=(f&62914560)===f?Tl-H():(f&4194048)===f?om-H():0;if(It=_x(Mt,It),It!==null){Zi=f,t.cancelPendingCommit=It(xm.bind(null,t,n,f,a,s,c,v,b,F,_t,Mt,null,st,ct)),Sa(t,f,v,!nt);return}}xm(t,n,f,a,s,c,v,b,F)}function Nv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Fn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sa(t,n,a,s){n&=~Zu,n&=~Ja,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Et(c),v=1<<f;s[f]=-1,c&=~v}a!==0&&Pa(t,a,n)}function Rl(){return(be&6)===0?(ro(0),!1):!0}function tf(){if(de!==null){if(Re===0)var t=de.return;else t=de,Ii=ka=null,gu(t),Us=null,Vr=0,t=de;for(;t!==null;)Vp(t.alternate,t),t=t.return;de=null}}function Vs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$v(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Zi=0,tf(),Ne=t,de=a=Pi(t.current,null),ge=n,Re=0,kn=null,va=!1,Fs=ee(t,n),Yu=!1,Gs=Xn=Zu=Ja=xa=qe=0,On=ao=null,Ku=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Et(s),f=1<<c;n|=t[c],s&=~f}return Yi=n,Zo(),a}function hm(t,n){te=null,U.H=Kr,n===Ds||n===il?(n=Rd(),Re=3):n===au?(n=Rd(),Re=4):Re=n===Uu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,de===null&&(qe=1,_l(t,ei(n,t.current)))}function dm(){var t=Hn.current;return t===null?!0:(ge&4194048)===ge?si===null:(ge&62914560)===ge||(ge&536870912)!==0?t===si:!1}function pm(){var t=U.H;return U.H=Kr,t===null?Kr:t}function mm(){var t=U.A;return U.A=Dv,t}function Cl(){qe=4,va||(ge&4194048)!==ge&&Hn.current!==null||(Fs=!0),(xa&134217727)===0&&(Ja&134217727)===0||Ne===null||Sa(Ne,ge,Xn,!1)}function ef(t,n,a){var s=be;be|=2;var c=pm(),f=mm();(Ne!==t||ge!==n)&&(wl=null,Vs(t,n)),n=!1;var v=qe;t:do try{if(Re!==0&&de!==null){var b=de,F=kn;switch(Re){case 8:tf(),v=6;break t;case 3:case 2:case 9:case 6:Hn.current===null&&(n=!0);var nt=Re;if(Re=0,kn=null,ks(t,b,F,nt),a&&Fs){v=0;break t}break;default:nt=Re,Re=0,kn=null,ks(t,b,F,nt)}}Ov(),v=qe;break}catch(_t){hm(t,_t)}while(!0);return n&&t.shellSuspendCounter++,Ii=ka=null,be=s,U.H=c,U.A=f,de===null&&(Ne=null,ge=0,Zo()),v}function Ov(){for(;de!==null;)gm(de)}function zv(t,n){var a=be;be|=2;var s=pm(),c=mm();Ne!==t||ge!==n?(wl=null,Al=H()+500,Vs(t,n)):Fs=ee(t,n);t:do try{if(Re!==0&&de!==null){n=de;var f=kn;e:switch(Re){case 1:Re=0,kn=null,ks(t,n,f,1);break;case 2:case 9:if(Ad(f)){Re=0,kn=null,_m(n);break}n=function(){Re!==2&&Re!==9||Ne!==t||(Re=7),Ai(t)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:Ad(f)?(Re=0,kn=null,_m(n)):(Re=0,kn=null,ks(t,n,f,7));break;case 5:var v=null;switch(de.tag){case 26:v=de.memoizedState;case 5:case 27:var b=de;if(v?ng(v):b.stateNode.complete){Re=0,kn=null;var F=b.sibling;if(F!==null)de=F;else{var nt=b.return;nt!==null?(de=nt,Ll(nt)):de=null}break e}}Re=0,kn=null,ks(t,n,f,5);break;case 6:Re=0,kn=null,ks(t,n,f,6);break;case 8:tf(),qe=6;break t;default:throw Error(r(462))}}Pv();break}catch(_t){hm(t,_t)}while(!0);return Ii=ka=null,U.H=s,U.A=c,be=a,de!==null?0:(Ne=null,ge=0,Zo(),qe)}function Pv(){for(;de!==null&&!T();)gm(de)}function gm(t){var n=Gp(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,n===null?Ll(t):de=n}function _m(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Op(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Op(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:gu(n);default:Vp(a,n),n=de=md(n,Yi),n=Gp(a,n,Yi)}t.memoizedProps=t.pendingProps,n===null?Ll(t):de=n}function ks(t,n,a,s){Ii=ka=null,gu(n),Us=null,Vr=0;var c=n.return;try{if(bv(t,c,n,a,ge)){qe=1,_l(t,ei(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;qe=1,_l(t,ei(a,t.current)),de=null;return}n.flags&32768?(xe||s===1?t=!0:Fs||(ge&536870912)!==0?t=!1:(va=t=!0,(s===2||s===9||s===3||s===6)&&(s=Hn.current,s!==null&&s.tag===13&&(s.flags|=16384))),vm(n,t)):Ll(n)}function Ll(t){var n=t;do{if((n.flags&32768)!==0){vm(n,va);return}t=n.return;var a=wv(n.alternate,n,Yi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);qe===0&&(qe=5)}function vm(t,n){do{var a=Rv(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);qe=6,de=null}function xm(t,n,a,s,c,f,v,b,F){t.cancelPendingCommit=null;do Dl();while(rn!==0);if((be&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=kc,Qn(t,a,f,v,b,F),t===Ne&&(de=Ne=null,ge=0),Hs=n,Ma=t,Zi=a,Qu=f,Ju=c,lm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Gv(Ft,function(){return bm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,c=V.p,V.p=2,v=be,be|=4;try{Cv(t,n,a)}finally{be=v,V.p=c,U.T=s}}rn=1,ym(),Mm(),Sm()}}function ym(){if(rn===1){rn=0;var t=Ma,n=Hs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var s=V.p;V.p=2;var c=be;be|=4;try{tm(n,t);var f=pf,v=rd(t.containerInfo),b=f.focusedElem,F=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&sd(b.ownerDocument.documentElement,b)){if(F!==null&&Ic(b)){var nt=F.start,_t=F.end;if(_t===void 0&&(_t=nt),"selectionStart"in b)b.selectionStart=nt,b.selectionEnd=Math.min(_t,b.value.length);else{var Mt=b.ownerDocument||document,st=Mt&&Mt.defaultView||window;if(st.getSelection){var ct=st.getSelection(),It=b.textContent.length,Yt=Math.min(F.start,It),Ue=F.end===void 0?Yt:Math.min(F.end,It);!ct.extend&&Yt>Ue&&(v=Ue,Ue=Yt,Yt=v);var Q=ad(b,Yt),j=ad(b,Ue);if(Q&&j&&(ct.rangeCount!==1||ct.anchorNode!==Q.node||ct.anchorOffset!==Q.offset||ct.focusNode!==j.node||ct.focusOffset!==j.offset)){var et=Mt.createRange();et.setStart(Q.node,Q.offset),ct.removeAllRanges(),Yt>Ue?(ct.addRange(et),ct.extend(j.node,j.offset)):(et.setEnd(j.node,j.offset),ct.addRange(et))}}}}for(Mt=[],ct=b;ct=ct.parentNode;)ct.nodeType===1&&Mt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Mt.length;b++){var xt=Mt[b];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}kl=!!df,pf=df=null}finally{be=c,V.p=s,U.T=a}}t.current=n,rn=2}}function Mm(){if(rn===2){rn=0;var t=Ma,n=Hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var s=V.p;V.p=2;var c=be;be|=4;try{Zp(t,n.alternate,n)}finally{be=c,V.p=s,U.T=a}}rn=3}}function Sm(){if(rn===4||rn===3){rn=0,S();var t=Ma,n=Hs,a=Zi,s=lm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rn=5:(rn=0,Hs=Ma=null,Em(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ya=null),Rr(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Gt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=U.T,c=V.p,V.p=2,U.T=null;try{for(var f=t.onRecoverableError,v=0;v<s.length;v++){var b=s[v];f(b.value,{componentStack:b.stack})}}finally{U.T=n,V.p=c}}(Zi&3)!==0&&Dl(),Ai(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===$u?so++:(so=0,$u=t):so=0,ro(0)}}function Em(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Gr(n)))}function Dl(){return ym(),Mm(),Sm(),bm()}function bm(){if(rn!==5)return!1;var t=Ma,n=Qu;Qu=0;var a=Rr(Zi),s=U.T,c=V.p;try{V.p=32>a?32:a,U.T=null,a=Ju,Ju=null;var f=Ma,v=Zi;if(rn=0,Hs=Ma=null,Zi=0,(be&6)!==0)throw Error(r(331));var b=be;if(be|=4,sm(f.current),nm(f,f.current,v,a),be=b,ro(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Gt,f)}catch{}return!0}finally{V.p=c,U.T=s,Em(t,n)}}function Tm(t,n,a){n=ei(a,n),n=Du(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(ke(t,2),Ai(t))}function Ce(t,n,a){if(t.tag===3)Tm(t,t,a);else for(;n!==null;){if(n.tag===3){Tm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ya===null||!ya.has(s))){t=ei(a,t),a=Ap(2),s=pa(n,a,2),s!==null&&(wp(a,s,n,t),ke(s,2),Ai(s));break}}n=n.return}}function nf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Uv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Yu=!0,c.add(a),t=Bv.bind(null,t,n,a),n.then(t,t))}function Bv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ne===t&&(ge&a)===a&&(qe===4||qe===3&&(ge&62914560)===ge&&300>H()-Tl?(be&2)===0&&Vs(t,0):Zu|=a,Gs===ge&&(Gs=0)),Ai(t)}function Am(t,n){n===0&&(n=In()),t=Ga(t,n),t!==null&&(ke(t,n),Ai(t))}function Iv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Am(t,a)}function Fv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Am(t,a)}function Gv(t,n){return Ae(t,n)}var Ul=null,Xs=null,af=!1,Nl=!1,sf=!1,Ea=0;function Ai(t){t!==Xs&&t.next===null&&(Xs===null?Ul=Xs=t:Xs=Xs.next=t),Nl=!0,af||(af=!0,Vv())}function ro(t,n){if(!sf&&Nl){sf=!0;do for(var a=!1,s=Ul;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var v=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Et(42|t)+1)-1,f&=c&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Lm(s,f))}else f=ge,f=$t(s,s===Ne?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ee(s,f)||(a=!0,Lm(s,f));s=s.next}while(a);sf=!1}}function Hv(){wm()}function wm(){Nl=af=!1;var t=0;Ea!==0&&Jv()&&(t=Ea);for(var n=H(),a=null,s=Ul;s!==null;){var c=s.next,f=Rm(s,n);f===0?(s.next=null,a===null?Ul=c:a.next=c,c===null&&(Xs=a)):(a=s,(t!==0||(f&3)!==0)&&(Nl=!0)),s=c}rn!==0&&rn!==5||ro(t),Ea!==0&&(Ea=0)}function Rm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Et(f),b=1<<v,F=c[v];F===-1?((b&a)===0||(b&s)!==0)&&(c[v]=Ye(b,n)):F<=n&&(t.expiredLanes|=b),f&=~b}if(n=Ne,a=ge,a=$t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Re===2||Re===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Nt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ee(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Nt(s),Rr(a)){case 2:case 8:a=At;break;case 32:a=Ft;break;case 268435456:a=ft;break;default:a=Ft}return s=Cm.bind(null,t),a=Ae(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Nt(s),t.callbackPriority=2,t.callbackNode=null,2}function Cm(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dl()&&t.callbackNode!==a)return null;var s=ge;return s=$t(t,t===Ne?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(um(t,s,n),Rm(t,H()),t.callbackNode!=null&&t.callbackNode===a?Cm.bind(null,t):null)}function Lm(t,n){if(Dl())return null;um(t,n,!0)}function Vv(){tx(function(){(be&6)!==0?Ae(vt,Hv):wm()})}function rf(){if(Ea===0){var t=Cs;t===0&&(t=lt,lt<<=1,(lt&261888)===0&&(lt=256)),Ea=t}return Ea}function Dm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ho(""+t)}function Um(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function kv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Dm((c[mt]||null).action),v=s.submitter;v&&(n=(n=v[mt]||null)?Dm(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new Wo("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ea!==0){var F=v?Um(c,v):new FormData(c);Tu(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=v?Um(c,v):new FormData(c),Tu(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var of=0;of<Vc.length;of++){var lf=Vc[of],Xv=lf.toLowerCase(),Wv=lf[0].toUpperCase()+lf.slice(1);fi(Xv,"on"+Wv)}fi(cd,"onAnimationEnd"),fi(ud,"onAnimationIteration"),fi(fd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(ov,"onTransitionRun"),fi(lv,"onTransitionStart"),fi(cv,"onTransitionCancel"),fi(hd,"onTransitionEnd"),Cn("onMouseEnter",["mouseout","mouseover"]),Cn("onMouseLeave",["mouseout","mouseover"]),Cn("onPointerEnter",["pointerout","pointerover"]),Cn("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oo));function Nm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var b=s[v],F=b.instance,nt=b.currentTarget;if(b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=nt;try{f(c)}catch(_t){Yo(_t)}c.currentTarget=null,f=F}else for(v=0;v<s.length;v++){if(b=s[v],F=b.instance,nt=b.currentTarget,b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=nt;try{f(c)}catch(_t){Yo(_t)}c.currentTarget=null,f=F}}}}function pe(t,n){var a=n[qt];a===void 0&&(a=n[qt]=new Set);var s=t+"__bubble";a.has(s)||(Om(n,t,2,!1),a.add(s))}function cf(t,n,a){var s=0;n&&(s|=4),Om(a,t,s,n)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function uf(t){if(!t[Ol]){t[Ol]=!0,he.forEach(function(a){a!=="selectionchange"&&(jv.has(a)||cf(a,!1,t),cf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ol]||(n[Ol]=!0,cf("selectionchange",!1,n))}}function Om(t,n,a,s){switch(cg(n)){case 2:var c=yx;break;case 8:c=Mx;break;default:c=Tf}a=c.bind(null,n,a,t),c=void 0,!Cc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function ff(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var b=s.stateNode.containerInfo;if(b===c)break;if(v===4)for(v=s.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;b!==null;){if(v=ve(b),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){s=f=v;continue t}b=b.parentNode}}s=s.return}Fh(function(){var nt=f,_t=wc(a),Mt=[];t:{var st=dd.get(t);if(st!==void 0){var ct=Wo,It=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":ct=F_;break;case"focusin":It="focus",ct=Nc;break;case"focusout":It="blur",ct=Nc;break;case"beforeblur":case"afterblur":ct=Nc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=w_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=V_;break;case cd:case ud:case fd:ct=L_;break;case hd:ct=X_;break;case"scroll":case"scrollend":ct=T_;break;case"wheel":ct=j_;break;case"copy":case"cut":case"paste":ct=U_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Xh;break;case"toggle":case"beforetoggle":ct=Y_}var Yt=(n&4)!==0,Ue=!Yt&&(t==="scroll"||t==="scrollend"),Q=Yt?st!==null?st+"Capture":null:st;Yt=[];for(var j=nt,et;j!==null;){var xt=j;if(et=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||et===null||Q===null||(xt=Cr(j,Q),xt!=null&&Yt.push(lo(j,xt,et))),Ue)break;j=j.return}0<Yt.length&&(st=new ct(st,It,null,a,_t),Mt.push({event:st,listeners:Yt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",st&&a!==Ac&&(It=a.relatedTarget||a.fromElement)&&(ve(It)||It[Vt]))break t;if((ct||st)&&(st=_t.window===_t?_t:(st=_t.ownerDocument)?st.defaultView||st.parentWindow:window,ct?(It=a.relatedTarget||a.toElement,ct=nt,It=It?ve(It):null,It!==null&&(Ue=u(It),Yt=It.tag,It!==Ue||Yt!==5&&Yt!==27&&Yt!==6)&&(It=null)):(ct=null,It=nt),ct!==It)){if(Yt=Vh,xt="onMouseLeave",Q="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=Xh,xt="onPointerLeave",Q="onPointerEnter",j="pointer"),Ue=ct==null?st:hn(ct),et=It==null?st:hn(It),st=new Yt(xt,j+"leave",ct,a,_t),st.target=Ue,st.relatedTarget=et,xt=null,ve(_t)===nt&&(Yt=new Yt(Q,j+"enter",It,a,_t),Yt.target=et,Yt.relatedTarget=Ue,xt=Yt),Ue=xt,ct&&It)e:{for(Yt=qv,Q=ct,j=It,et=0,xt=Q;xt;xt=Yt(xt))et++;xt=0;for(var jt=j;jt;jt=Yt(jt))xt++;for(;0<et-xt;)Q=Yt(Q),et--;for(;0<xt-et;)j=Yt(j),xt--;for(;et--;){if(Q===j||j!==null&&Q===j.alternate){Yt=Q;break e}Q=Yt(Q),j=Yt(j)}Yt=null}else Yt=null;ct!==null&&zm(Mt,st,ct,Yt,!1),It!==null&&Ue!==null&&zm(Mt,Ue,It,Yt,!0)}}t:{if(st=nt?hn(nt):window,ct=st.nodeName&&st.nodeName.toLowerCase(),ct==="select"||ct==="input"&&st.type==="file")var Me=Jh;else if(Kh(st))if($h)Me=av;else{Me=nv;var Ht=ev}else ct=st.nodeName,!ct||ct.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&Tc(nt.elementType)&&(Me=Jh):Me=iv;if(Me&&(Me=Me(t,nt))){Qh(Mt,Me,a,_t);break t}Ht&&Ht(t,st,nt),t==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&bc(st,"number",st.value)}switch(Ht=nt?hn(nt):window,t){case"focusin":(Kh(Ht)||Ht.contentEditable==="true")&&(Ms=Ht,Fc=nt,Br=null);break;case"focusout":Br=Fc=Ms=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,od(Mt,a,_t);break;case"selectionchange":if(rv)break;case"keydown":case"keyup":od(Mt,a,_t)}var ie;if(zc)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else ys?Yh(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Wh&&a.locale!=="ko"&&(ys||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ys&&(ie=Gh()):(oa=_t,Lc="value"in oa?oa.value:oa.textContent,ys=!0)),Ht=zl(nt,_e),0<Ht.length&&(_e=new kh(_e,t,null,a,_t),Mt.push({event:_e,listeners:Ht}),ie?_e.data=ie:(ie=Zh(a),ie!==null&&(_e.data=ie)))),(ie=K_?Q_(t,a):J_(t,a))&&(_e=zl(nt,"onBeforeInput"),0<_e.length&&(Ht=new kh("onBeforeInput","beforeinput",null,a,_t),Mt.push({event:Ht,listeners:_e}),Ht.data=ie)),kv(Mt,t,nt,a,_t)}Nm(Mt,n)})}function lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Cr(t,a),c!=null&&s.unshift(lo(t,c,f)),c=Cr(t,n),c!=null&&s.push(lo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function qv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zm(t,n,a,s,c){for(var f=n._reactName,v=[];a!==null&&a!==s;){var b=a,F=b.alternate,nt=b.stateNode;if(b=b.tag,F!==null&&F===s)break;b!==5&&b!==26&&b!==27||nt===null||(F=nt,c?(nt=Cr(a,f),nt!=null&&v.unshift(lo(a,nt,F))):c||(nt=Cr(a,f),nt!=null&&v.push(lo(a,nt,F)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Yv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function Pm(t){return(typeof t=="string"?t:""+t).replace(Yv,`
`).replace(Zv,"")}function Bm(t,n){return n=Pm(n),Pm(t)===n}function De(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||_s(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&_s(t,""+s);break;case"className":ra(t,"class",s);break;case"tabIndex":ra(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ra(t,a,s);break;case"style":Bh(t,s,f);break;case"data":if(n!=="object"){ra(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ho(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&De(t,n,"name",c.name,c,null),De(t,n,"formEncType",c.formEncType,c,null),De(t,n,"formMethod",c.formMethod,c,null),De(t,n,"formTarget",c.formTarget,c,null)):(De(t,n,"encType",c.encType,c,null),De(t,n,"method",c.method,c,null),De(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ho(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Oi);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ho(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":pe("beforetoggle",t),pe("toggle",t),Jn(t,"popover",s);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Jn(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=E_.get(a)||a,Jn(t,a,s))}}function hf(t,n,a,s,c,f){switch(a){case"style":Bh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?_s(t,s):(typeof s=="number"||typeof s=="bigint")&&_s(t,""+s);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Oi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ps.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[mt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Jn(t,a,s)}}}function _n(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,f,v,a,null)}}c&&De(t,n,"srcSet",a.srcSet,a,null),s&&De(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var b=f=v=c=null,F=null,nt=null;for(s in a)if(a.hasOwnProperty(s)){var _t=a[s];if(_t!=null)switch(s){case"name":c=_t;break;case"type":v=_t;break;case"checked":F=_t;break;case"defaultChecked":nt=_t;break;case"value":f=_t;break;case"defaultValue":b=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(r(137,n));break;default:De(t,n,s,_t,a,null)}}Nh(t,f,b,F,nt,v,c,!1);return;case"select":pe("invalid",t),s=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":s=b;default:De(t,n,c,b,a,null)}n=f,a=v,t.multiple=!!s,n!=null?gs(t,!!s,n,!1):a!=null&&gs(t,!!s,a,!0);return;case"textarea":pe("invalid",t),f=c=s=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:De(t,n,v,b,a,null)}zh(t,s,c,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:De(t,n,F,s,a,null)}return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(s=0;s<oo.length;s++)pe(oo[s],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(s=a[nt],s!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,nt,s,a,null)}return;default:if(Tc(n)){for(_t in a)a.hasOwnProperty(_t)&&(s=a[_t],s!==void 0&&hf(t,n,_t,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&De(t,n,b,s,a,null))}function Kv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,b=null,F=null,nt=null,_t=null;for(ct in a){var Mt=a[ct];if(a.hasOwnProperty(ct)&&Mt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":F=Mt;default:s.hasOwnProperty(ct)||De(t,n,ct,null,s,Mt)}}for(var st in s){var ct=s[st];if(Mt=a[st],s.hasOwnProperty(st)&&(ct!=null||Mt!=null))switch(st){case"type":f=ct;break;case"name":c=ct;break;case"checked":nt=ct;break;case"defaultChecked":_t=ct;break;case"value":v=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==Mt&&De(t,n,st,ct,s,Mt)}}Ec(t,v,b,F,nt,_t,f,c);return;case"select":ct=v=b=st=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ct=F;default:s.hasOwnProperty(f)||De(t,n,f,null,s,F)}for(c in s)if(f=s[c],F=a[c],s.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":st=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==F&&De(t,n,c,f,s,F)}n=b,a=v,s=ct,st!=null?gs(t,!!a,st,!1):!!s!=!!a&&(n!=null?gs(t,!!a,n,!0):gs(t,!!a,a?[]:"",!1));return;case"textarea":ct=st=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:De(t,n,b,null,s,c)}for(v in s)if(c=s[v],f=a[v],s.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":st=c;break;case"defaultValue":ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&De(t,n,v,c,s,f)}Oh(t,st,ct);return;case"option":for(var It in a)if(st=a[It],a.hasOwnProperty(It)&&st!=null&&!s.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:De(t,n,It,null,s,st)}for(F in s)if(st=s[F],ct=a[F],s.hasOwnProperty(F)&&st!==ct&&(st!=null||ct!=null))switch(F){case"selected":t.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:De(t,n,F,st,s,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)st=a[Yt],a.hasOwnProperty(Yt)&&st!=null&&!s.hasOwnProperty(Yt)&&De(t,n,Yt,null,s,st);for(nt in s)if(st=s[nt],ct=a[nt],s.hasOwnProperty(nt)&&st!==ct&&(st!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:De(t,n,nt,st,s,ct)}return;default:if(Tc(n)){for(var Ue in a)st=a[Ue],a.hasOwnProperty(Ue)&&st!==void 0&&!s.hasOwnProperty(Ue)&&hf(t,n,Ue,void 0,s,st);for(_t in s)st=s[_t],ct=a[_t],!s.hasOwnProperty(_t)||st===ct||st===void 0&&ct===void 0||hf(t,n,_t,st,s,ct);return}}for(var Q in a)st=a[Q],a.hasOwnProperty(Q)&&st!=null&&!s.hasOwnProperty(Q)&&De(t,n,Q,null,s,st);for(Mt in s)st=s[Mt],ct=a[Mt],!s.hasOwnProperty(Mt)||st===ct||st==null&&ct==null||De(t,n,Mt,st,s,ct)}function Im(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,v=c.initiatorType,b=c.duration;if(f&&b&&Im(v)){for(v=0,b=c.responseEnd,s+=1;s<a.length;s++){var F=a[s],nt=F.startTime;if(nt>b)break;var _t=F.transferSize,Mt=F.initiatorType;_t&&Im(Mt)&&(F=F.responseEnd,v+=_t*(F<b?1:(b-nt)/(F-nt)))}if(--s,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var df=null,pf=null;function Pl(t){return t.nodeType===9?t:t.ownerDocument}function Fm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function mf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gf=null;function Jv(){var t=window.event;return t&&t.type==="popstate"?t===gf?!1:(gf=t,!0):(gf=null,!1)}var Hm=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(t){return Vm.resolve(null).then(t).catch(ex)}:Hm;function ex(t){setTimeout(function(){throw t})}function ba(t){return t==="head"}function km(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),Ys(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")co(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,co(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[Jt]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&co(t.ownerDocument.body);a=c}while(a);Ys(n)}function Xm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function _f(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_f(a),le(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Jt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ri(t.nextSibling),t===null)break}return null}function ix(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ri(t.nextSibling),t===null))return null;return t}function Wm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ri(t.nextSibling),t===null))return null;return t}function vf(t){return t.data==="$?"||t.data==="$~"}function xf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ax(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var yf=null;function jm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function qm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Ym(t,n,a){switch(n=Pl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);le(t)}var oi=new Map,Zm=new Set;function Bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=V.d;V.d={f:sx,r:rx,D:ox,C:lx,L:cx,m:ux,X:hx,S:fx,M:dx};function sx(){var t=Ki.f(),n=Rl();return t||n}function rx(t){var n=We(t);n!==null&&n.tag===5&&n.type==="form"?hp(n):Ki.r(t)}var Ws=typeof document>"u"?null:document;function Km(t,n,a){var s=Ws;if(s&&typeof n=="string"&&n){var c=$n(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Zm.has(c)||(Zm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),_n(n,"link",t),ce(n),s.head.appendChild(n)))}}function ox(t){Ki.D(t),Km("dns-prefetch",t,null)}function lx(t,n){Ki.C(t,n),Km("preconnect",t,n)}function cx(t,n,a){Ki.L(t,n,a);var s=Ws;if(s&&t&&n){var c='link[rel="preload"][as="'+$n(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+$n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+$n(a.imageSizes)+'"]')):c+='[href="'+$n(t)+'"]';var f=c;switch(n){case"style":f=js(t);break;case"script":f=qs(t)}oi.has(f)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(uo(f))||n==="script"&&s.querySelector(fo(f))||(n=s.createElement("link"),_n(n,"link",t),ce(n),s.head.appendChild(n)))}}function ux(t,n){Ki.m(t,n);var a=Ws;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+$n(s)+'"][href="'+$n(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=qs(t)}if(!oi.has(f)&&(t=y({rel:"modulepreload",href:t},n),oi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fo(f)))return}s=a.createElement("link"),_n(s,"link",t),ce(s),a.head.appendChild(s)}}}function fx(t,n,a){Ki.S(t,n,a);var s=Ws;if(s&&t){var c=Rn(s).hoistableStyles,f=js(t);n=n||"default";var v=c.get(f);if(!v){var b={loading:0,preload:null};if(v=s.querySelector(uo(f)))b.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(f))&&Mf(t,a);var F=v=s.createElement("link");ce(F),_n(F,"link",t),F._p=new Promise(function(nt,_t){F.onload=nt,F.onerror=_t}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Il(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:b},c.set(f,v)}}}function hx(t,n){Ki.X(t,n);var a=Ws;if(a&&t){var s=Rn(a).hoistableScripts,c=qs(t),f=s.get(c);f||(f=a.querySelector(fo(c)),f||(t=y({src:t,async:!0},n),(n=oi.get(c))&&Sf(t,n),f=a.createElement("script"),ce(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function dx(t,n){Ki.M(t,n);var a=Ws;if(a&&t){var s=Rn(a).hoistableScripts,c=qs(t),f=s.get(c);f||(f=a.querySelector(fo(c)),f||(t=y({src:t,async:!0,type:"module"},n),(n=oi.get(c))&&Sf(t,n),f=a.createElement("script"),ce(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Qm(t,n,a,s){var c=(c=bt.current)?Bl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=js(a.href),a=Rn(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=js(a.href);var f=Rn(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(uo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),f||px(c,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qs(a),a=Rn(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function js(t){return'href="'+$n(t)+'"'}function uo(t){return'link[rel="stylesheet"]['+t+"]"}function Jm(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function px(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),_n(n,"link",a),ce(n),t.head.appendChild(n))}function qs(t){return'[src="'+$n(t)+'"]'}function fo(t){return"script[async]"+t}function $m(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+$n(a.href)+'"]');if(s)return n.instance=s,ce(s),s;var c=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),ce(s),_n(s,"style",c),Il(s,a.precedence,t),n.instance=s;case"stylesheet":c=js(a.href);var f=t.querySelector(uo(c));if(f)return n.state.loading|=4,n.instance=f,ce(f),f;s=Jm(a),(c=oi.get(c))&&Mf(s,c),f=(t.ownerDocument||t).createElement("link"),ce(f);var v=f;return v._p=new Promise(function(b,F){v.onload=b,v.onerror=F}),_n(f,"link",s),n.state.loading|=4,Il(f,a.precedence,t),n.instance=f;case"script":return f=qs(a.src),(c=t.querySelector(fo(f)))?(n.instance=c,ce(c),c):(s=a,(c=oi.get(f))&&(s=y({},a),Sf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),ce(c),_n(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Il(s,a.precedence,t));return n.instance}function Il(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,v=0;v<s.length;v++){var b=s[v];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Sf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fl=null;function tg(t,n,a){if(Fl===null){var s=new Map,c=Fl=new Map;c.set(a,s)}else c=Fl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Jt]||f[J]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var b=s.get(v);b?b.push(f):s.set(v,[f])}}return s}function eg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function mx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ng(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=js(s.href),f=n.querySelector(uo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Gl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,ce(f);return}f=n.ownerDocument||n,s=Jm(s),(c=oi.get(c))&&Mf(s,c),f=f.createElement("link"),ce(f);var v=f;v._p=new Promise(function(b,F){v.onload=b,v.onerror=F}),_n(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Gl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ef=0;function _x(t,n){return t.stylesheets&&t.count===0&&Vl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Vl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ef===0&&(Ef=62500*Qv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ef?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hl=null;function Vl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hl=new Map,n.forEach(vx,t),Hl=null,Gl.call(t))}function vx(t,n){if(!(n.state.loading&4)){var a=Hl.get(t);if(a)var s=a.get(null);else{a=new Map,Hl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,c),a.set(v,c),this.count++,s=Gl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var ho={$$typeof:L,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function xx(t,n,a,s,c,f,v,b,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function ig(t,n,a,s,c,f,v,b,F,nt,_t,Mt){return t=new xx(t,n,a,v,F,nt,_t,Mt,b),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},su(f),t}function ag(t){return t?(t=bs,t):bs}function sg(t,n,a,s,c,f){c=ag(c),s.context===null?s.context=c:s.pendingContext=c,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(t,s,n),a!==null&&(zn(a,t,n),Xr(a,t,n))}function rg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bf(t,n){rg(t,n),(t=t.alternate)&&rg(t,n)}function og(t){if(t.tag===13||t.tag===31){var n=Ga(t,67108864);n!==null&&zn(n,t,67108864),bf(t,67108864)}}function lg(t){if(t.tag===13||t.tag===31){var n=Wn();n=wr(n);var a=Ga(t,n);a!==null&&zn(a,t,n),bf(t,n)}}var kl=!0;function yx(t,n,a,s){var c=U.T;U.T=null;var f=V.p;try{V.p=2,Tf(t,n,a,s)}finally{V.p=f,U.T=c}}function Mx(t,n,a,s){var c=U.T;U.T=null;var f=V.p;try{V.p=8,Tf(t,n,a,s)}finally{V.p=f,U.T=c}}function Tf(t,n,a,s){if(kl){var c=Af(s);if(c===null)ff(t,n,s,Xl,a),ug(t,s);else if(Ex(c,t,n,a,s))s.stopPropagation();else if(ug(t,s),n&4&&-1<Sx.indexOf(t)){for(;c!==null;){var f=We(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ot(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var F=1<<31-Et(v);b.entanglements[1]|=F,v&=~F}Ai(f),(be&6)===0&&(Al=H()+500,ro(0))}}break;case 31:case 13:b=Ga(f,2),b!==null&&zn(b,f,2),Rl(),bf(f,2)}if(f=Af(s),f===null&&ff(t,n,s,Xl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else ff(t,n,s,null,a)}}function Af(t){return t=wc(t),wf(t)}var Xl=null;function wf(t){if(Xl=null,t=ve(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Xl=t,null}function cg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case vt:return 2;case At:return 8;case Ft:case Lt:return 32;case ft:return 268435456;default:return 32}default:return 32}}var Rf=!1,Ta=null,Aa=null,wa=null,po=new Map,mo=new Map,Ra=[],Sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ug(t,n){switch(t){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(n.pointerId)}}function go(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=We(n),n!==null&&og(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Ex(t,n,a,s,c){switch(n){case"focusin":return Ta=go(Ta,t,n,a,s,c),!0;case"dragenter":return Aa=go(Aa,t,n,a,s,c),!0;case"mouseover":return wa=go(wa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return po.set(f,go(po.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,mo.set(f,go(mo.get(f)||null,t,n,a,s,c)),!0}return!1}function fg(t){var n=ve(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,rt(t.priority,function(){lg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,rt(t.priority,function(){lg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Af(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Ac=s,a.target.dispatchEvent(s),Ac=null}else return n=We(a),n!==null&&og(n),t.blockedOn=a,!1;n.shift()}return!0}function hg(t,n,a){Wl(t)&&a.delete(n)}function bx(){Rf=!1,Ta!==null&&Wl(Ta)&&(Ta=null),Aa!==null&&Wl(Aa)&&(Aa=null),wa!==null&&Wl(wa)&&(wa=null),po.forEach(hg),mo.forEach(hg)}function jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Rf||(Rf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,bx)))}var ql=null;function dg(t){ql!==t&&(ql=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ql===t&&(ql=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(wf(s||a)===null)continue;break}var f=We(a);f!==null&&(t.splice(n,3),n-=3,Tu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ys(t){function n(F){return jl(F,t)}Ta!==null&&jl(Ta,t),Aa!==null&&jl(Aa,t),wa!==null&&jl(wa,t),po.forEach(n),mo.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)fg(a),a.blockedOn===null&&Ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],v=c[mt]||null;if(typeof f=="function")v||dg(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[mt]||null)b=v.formAction;else if(wf(c)!==null)continue}else b=v.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),dg(a)}}}function pg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Cf(t){this._internalRoot=t}Yl.prototype.render=Cf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();sg(a,s,t,n,null,null)},Yl.prototype.unmount=Cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;sg(t.current,2,null,t,null,null),Rl(),n[Vt]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var n=C();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,t),a===0&&fg(t)}};var mg=e.version;if(mg!=="19.2.3")throw Error(r(527,mg,"19.2.3"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Tx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Gt=Zl.inject(Tx),Rt=Zl}catch{}}return vo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Sp,f=Ep,v=bp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=ig(t,1,!1,null,null,a,s,null,c,f,v,pg),t[Vt]=n.current,uf(t),new Cf(n)},vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Sp,v=Ep,b=bp,F=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=ig(t,1,!0,n,a??null,s,c,F,f,v,b,pg),n.context=ag(null),a=n.current,s=Wn(),s=wr(s),c=da(s),c.callback=null,pa(a,c,s),a=s,n.current.lanes=a,ke(n,a),Ai(n),t[Vt]=n.current,uf(t),new Yl(n)},vo.version="19.2.3",vo}var Tg;function Px(){if(Tg)return Df.exports;Tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Df.exports=zx(),Df.exports}var Bx=Px();const Ix=wx(Bx);var fn=Mh(),nn=(o=>(o[o.START=0]="START",o[o.PLAYING=1]="PLAYING",o[o.PAUSED=2]="PAUSED",o[o.GAMEOVER=3]="GAMEOVER",o))(nn||{}),fr=(o=>(o.RIFLE="rifle",o.SHOTGUN="shotgun",o.SNIPER="sniper",o.PISTOL="pistol",o.SMG="smg",o))(fr||{});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="152",Fx=0,Ag=1,Gx=2,Y0=1,Hx=2,ia=3,za=0,Bn=1,Li=2,Oa=0,mr=1,wg=2,Rg=3,Cg=4,Vx=5,hr=100,kx=101,Xx=102,Lg=103,Dg=104,Wx=200,jx=201,qx=202,Yx=203,Z0=204,K0=205,Zx=206,Kx=207,Qx=208,Jx=209,$x=210,ty=0,ey=1,ny=2,hh=3,iy=4,ay=5,sy=6,ry=7,Eh=0,oy=1,ly=2,Di=0,cy=1,uy=2,fy=3,hy=4,dy=5,Q0=300,vr=301,xr=302,dh=303,ph=304,xc=306,mh=1e3,Mi=1001,gh=1002,An=1003,Ug=1004,Pf=1005,ui=1006,py=1007,Lo=1008,fs=1009,my=1010,gy=1011,J0=1012,_y=1013,rs=1014,os=1015,Do=1016,vy=1017,xy=1018,gr=1020,yy=1021,Si=1023,My=1024,Sy=1025,ls=1026,yr=1027,Ey=1028,by=1029,Ty=1030,Ay=1031,wy=1033,Bf=33776,If=33777,Ff=33778,Gf=33779,Ng=35840,Og=35841,zg=35842,Pg=35843,Ry=36196,Bg=37492,Ig=37496,Fg=37808,Gg=37809,Hg=37810,Vg=37811,kg=37812,Xg=37813,Wg=37814,jg=37815,qg=37816,Yg=37817,Zg=37818,Kg=37819,Qg=37820,Jg=37821,Hf=36492,Cy=36283,$g=36284,t0=36285,e0=36286,$0=3e3,cs=3001,Ly=3200,Dy=3201,bh=0,Uy=1,us="",se="srgb",Ni="srgb-linear",t_="display-p3",Vf=7680,Ny=519,n0=35044,i0="300 es",_h=1035;class Sr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let a0=1234567;const Ao=Math.PI/180,Uo=180/Math.PI;function Er(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function wn(o,e,i){return Math.max(e,Math.min(i,o))}function Th(o,e){return(o%e+e)%e}function Oy(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function zy(o,e,i){return o!==e?(i-o)/(e-o):0}function wo(o,e,i){return(1-i)*o+i*e}function Py(o,e,i,r){return wo(o,e,1-Math.exp(-i*r))}function By(o,e=1){return e-Math.abs(Th(o,e*2)-e)}function Iy(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function Fy(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function Gy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Hy(o,e){return o+Math.random()*(e-o)}function Vy(o){return o*(.5-Math.random())}function ky(o){o!==void 0&&(a0=o);let e=a0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xy(o){return o*Ao}function Wy(o){return o*Uo}function vh(o){return(o&o-1)===0&&o!==0}function jy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function e_(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function qy(o,e,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),m=d(i/2),p=u((e+r)/2),_=d((e+r)/2),y=u((e-r)/2),x=d((e-r)/2),M=u((r-e)/2),A=d((r-e)/2);switch(l){case"XYX":o.set(h*_,m*y,m*x,h*p);break;case"YZY":o.set(m*x,h*_,m*y,h*p);break;case"ZXZ":o.set(m*y,m*x,h*_,h*p);break;case"XZX":o.set(h*_,m*A,m*M,h*p);break;case"YXY":o.set(m*M,h*_,m*A,h*p);break;case"ZYZ":o.set(m*A,m*M,h*_,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Yy={DEG2RAD:Ao,RAD2DEG:Uo,generateUUID:Er,clamp:wn,euclideanModulo:Th,mapLinear:Oy,inverseLerp:zy,lerp:wo,damp:Py,pingpong:By,smoothstep:Iy,smootherstep:Fy,randInt:Gy,randFloat:Hy,randFloatSpread:Vy,seededRandom:ky,degToRad:Xy,radToDeg:Wy,isPowerOfTwo:vh,ceilPowerOfTwo:jy,floorPowerOfTwo:e_,setQuaternionFromProperEuler:qy,normalize:Pn,denormalize:bo};class Ee{constructor(e=0,i=0){Ee.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ye{constructor(){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],y=r[7],x=r[2],M=r[5],A=r[8],w=l[0],E=l[3],g=l[6],I=l[1],L=l[4],B=l[7],N=l[2],G=l[5],X=l[8];return u[0]=d*w+h*I+m*N,u[3]=d*E+h*L+m*G,u[6]=d*g+h*B+m*X,u[1]=p*w+_*I+y*N,u[4]=p*E+_*L+y*G,u[7]=p*g+_*B+y*X,u[2]=x*w+M*I+A*N,u[5]=x*E+M*L+A*G,u[8]=x*g+M*B+A*X,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],y=_*d-h*p,x=h*m-_*u,M=p*u-d*m,A=i*y+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(l*p-_*r)*w,e[2]=(h*r-l*d)*w,e[3]=x*w,e[4]=(_*i-l*m)*w,e[5]=(l*u-h*i)*w,e[6]=M*w,e[7]=(r*m-p*i)*w,e[8]=(d*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new ye;function n_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function vc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}const s0={};function Ro(o){o in s0||(s0[o]=!0,console.warn(o))}function _r(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Xf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Zy=new ye().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ky=new ye().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Qy(o){return o.convertSRGBToLinear().applyMatrix3(Ky)}function Jy(o){return o.applyMatrix3(Zy).convertLinearToSRGB()}const $y={[Ni]:o=>o,[se]:o=>o.convertSRGBToLinear(),[t_]:Qy},tM={[Ni]:o=>o,[se]:o=>o.convertLinearToSRGB(),[t_]:Jy},pi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Ni},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=$y[e],l=tM[i];if(r===void 0||l===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${i}".`);return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let Zs;class i_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zs===void 0&&(Zs=vc("canvas")),Zs.width=e.width,Zs.height=e.height;const r=Zs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=vc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=_r(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(_r(i[r]/255)*255):i[r]=_r(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class a_{constructor(e=null){this.isSource=!0,this.uuid=Er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Wf(l[d].image)):u.push(Wf(l[d]))}else u=Wf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Wf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?i_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eM=0;class Zn extends Sr{constructor(e=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,r=Mi,l=Mi,u=ui,d=Lo,h=Si,m=fs,p=Zn.DEFAULT_ANISOTROPY,_=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Er(),this.name="",this.source=new a_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===cs?se:us),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===se?cs:$0}set encoding(e){Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cs?se:us}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Q0;Zn.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,i=0,r=0,l=1){He.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],y=m[8],x=m[1],M=m[5],A=m[9],w=m[2],E=m[6],g=m[10];if(Math.abs(_-x)<.01&&Math.abs(y-w)<.01&&Math.abs(A-E)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+w)<.1&&Math.abs(A+E)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,B=(M+1)/2,N=(g+1)/2,G=(_+x)/4,X=(y+w)/4,ot=(A+E)/4;return L>B&&L>N?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=G/r,u=X/r):B>N?B<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),r=G/l,u=ot/l):N<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(N),r=X/u,l=ot/u),this.set(r,l,u,i),this}let I=Math.sqrt((E-A)*(E-A)+(y-w)*(y-w)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(E-A)/I,this.y=(y-w)/I,this.z=(x-_)/I,this.w=Math.acos((p+M+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hs extends Sr{constructor(e=1,i=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new He(0,0,e,i),this.scissorTest=!1,this.viewport=new He(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(Ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===cs?se:us),this.texture=new Zn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:ui,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new a_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class s_ extends Zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nM extends Zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],y=r[l+3];const x=u[d+0],M=u[d+1],A=u[d+2],w=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=y;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=A,e[i+3]=w;return}if(y!==w||m!==x||p!==M||_!==A){let E=1-h;const g=m*x+p*M+_*A+y*w,I=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const N=Math.sqrt(L),G=Math.atan2(N,g*I);E=Math.sin(E*G)/N,h=Math.sin(h*G)/N}const B=h*I;if(m=m*E+x*B,p=p*E+M*B,_=_*E+A*B,y=y*E+w*B,E===1-h){const N=1/Math.sqrt(m*m+p*p+_*_+y*y);m*=N,p*=N,_*=N,y*=N}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],y=u[d],x=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+_*y+m*M-p*x,e[i+1]=m*A+_*x+p*y-h*M,e[i+2]=p*A+_*M+h*x-m*y,e[i+3]=_*A-h*y-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),y=h(u/2),x=m(r/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=x*_*y+p*M*A,this._y=p*M*y-x*_*A,this._z=p*_*A+x*M*y,this._w=p*_*y-x*M*A;break;case"YXZ":this._x=x*_*y+p*M*A,this._y=p*M*y-x*_*A,this._z=p*_*A-x*M*y,this._w=p*_*y+x*M*A;break;case"ZXY":this._x=x*_*y-p*M*A,this._y=p*M*y+x*_*A,this._z=p*_*A+x*M*y,this._w=p*_*y-x*M*A;break;case"ZYX":this._x=x*_*y-p*M*A,this._y=p*M*y+x*_*A,this._z=p*_*A-x*M*y,this._w=p*_*y+x*M*A;break;case"YZX":this._x=x*_*y+p*M*A,this._y=p*M*y+x*_*A,this._z=p*_*A-x*M*y,this._w=p*_*y-x*M*A;break;case"XZY":this._x=x*_*y-p*M*A,this._y=p*M*y-x*_*A,this._z=p*_*A+x*M*y,this._w=p*_*y+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],y=i[10],x=r+h+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>y){const M=2*Math.sqrt(1+r-h-y);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>y){const M=2*Math.sqrt(1+h-r-y);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+y-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),y=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=l*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,i=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(r0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(r0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=m*i+d*l-h*r,_=m*r+h*i-u*l,y=m*l+u*r-d*i,x=-u*i-d*r-h*l;return this.x=p*m+x*-u+_*-h-y*-d,this.y=_*m+x*-d+y*-u-p*-h,this.z=y*m+x*-h+p*-d-_*-u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return jf.copy(this).projectOnVector(e),this.sub(jf)}reflect(e){return this.sub(jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new $,r0=new Oo;class zo{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ji.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ji.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ji.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox),Ks.applyMatrix4(e.matrixWorld),this.union(Ks);else{const l=e.geometry;if(l!==void 0)if(i&&l.attributes!==void 0&&l.attributes.position!==void 0){const u=l.attributes.position;for(let d=0,h=u.count;d<h;d++)Ji.fromBufferAttribute(u,d).applyMatrix4(e.matrixWorld),this.expandByPoint(Ji)}else l.boundingBox===null&&l.computeBoundingBox(),Ks.copy(l.boundingBox),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const r=e.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Kl.subVectors(this.max,xo),Qs.subVectors(e.a,xo),Js.subVectors(e.b,xo),$s.subVectors(e.c,xo),La.subVectors(Js,Qs),Da.subVectors($s,Js),$a.subVectors(Qs,$s);let i=[0,-La.z,La.y,0,-Da.z,Da.y,0,-$a.z,$a.y,La.z,0,-La.x,Da.z,0,-Da.x,$a.z,0,-$a.x,-La.y,La.x,0,-Da.y,Da.x,0,-$a.y,$a.x,0];return!qf(i,Qs,Js,$s,Kl)||(i=[1,0,0,0,1,0,0,0,1],!qf(i,Qs,Js,$s,Kl))?!1:(Ql.crossVectors(La,Da),i=[Ql.x,Ql.y,Ql.z],qf(i,Qs,Js,$s,Kl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new $,new $,new $,new $,new $,new $,new $,new $],Ji=new $,Ks=new zo,Qs=new $,Js=new $,$s=new $,La=new $,Da=new $,$a=new $,xo=new $,Kl=new $,Ql=new $,ts=new $;function qf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ts.fromArray(o,u);const h=l.x*Math.abs(ts.x)+l.y*Math.abs(ts.y)+l.z*Math.abs(ts.z),m=e.dot(ts),p=i.dot(ts),_=r.dot(ts);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const iM=new zo,yo=new $,Yf=new $;class Ah{constructor(e=new $,i=-1){this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):iM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const i=yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(yo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Yf)),this.expandByPoint(yo.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new $,Zf=new $,Jl=new $,Ua=new $,Kf=new $,$l=new $,Qf=new $;class r_{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),Jl.copy(i).sub(e).normalize(),Ua.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Jl),h=Ua.dot(this.direction),m=-Ua.dot(Jl),p=Ua.lengthSq(),_=Math.abs(1-d*d);let y,x,M,A;if(_>0)if(y=d*m-h,x=d*h-m,A=u*_,y>=0)if(x>=-A)if(x<=A){const w=1/_;y*=w,x*=w,M=y*(y+d*x+2*h)+x*(d*y+x+2*m)+p}else x=u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*m)+p;else x=-u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*m)+p;else x<=-A?(y=Math.max(0,-(-d*u+h)),x=y>0?-u:Math.min(Math.max(-u,-m),u),M=-y*y+x*(x+2*m)+p):x<=A?(y=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(y=Math.max(0,-(d*u+h)),x=y>0?u:Math.min(Math.max(-u,-m),u),M=-y*y+x*(x+2*m)+p);else x=d>0?-u:u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Zf).addScaledVector(Jl,x),M}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(u=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),y>=0?(h=(e.min.z-x.z)*y,m=(e.max.z-x.z)*y):(h=(e.max.z-x.z)*y,m=(e.min.z-x.z)*y),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),$l.subVectors(r,e),Qf.crossVectors(Kf,$l);let d=this.direction.dot(Qf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ua.subVectors(this.origin,e);const m=h*this.direction.dot($l.crossVectors(Ua,$l));if(m<0)return null;const p=h*this.direction.dot(Kf.cross(Ua));if(p<0||m+p>d)return null;const _=-h*Ua.dot(Qf);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,i,r,l,u,d,h,m,p,_,y,x,M,A,w,E){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=d,g[9]=h,g[13]=m,g[2]=p,g[6]=_,g[10]=y,g[14]=x,g[3]=M,g[7]=A,g[11]=w,g[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/tr.setFromMatrixColumn(e,0).length(),u=1/tr.setFromMatrixColumn(e,1).length(),d=1/tr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=d*_,M=d*y,A=h*_,w=h*y;i[0]=m*_,i[4]=-m*y,i[8]=p,i[1]=M+A*p,i[5]=x-w*p,i[9]=-h*m,i[2]=w-x*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const x=m*_,M=m*y,A=p*_,w=p*y;i[0]=x+w*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*y,i[5]=d*_,i[9]=-h,i[2]=M*h-A,i[6]=w+x*h,i[10]=d*m}else if(e.order==="ZXY"){const x=m*_,M=m*y,A=p*_,w=p*y;i[0]=x-w*h,i[4]=-d*y,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*_,i[9]=w-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const x=d*_,M=d*y,A=h*_,w=h*y;i[0]=m*_,i[4]=A*p-M,i[8]=x*p+w,i[1]=m*y,i[5]=w*p+x,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const x=d*m,M=d*p,A=h*m,w=h*p;i[0]=m*_,i[4]=w-x*y,i[8]=A*y+M,i[1]=y,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*y+A,i[10]=x-w*y}else if(e.order==="XZY"){const x=d*m,M=d*p,A=h*m,w=h*p;i[0]=m*_,i[4]=-y,i[8]=p*_,i[1]=x*y+w,i[5]=d*_,i[9]=M*y-A,i[2]=A*y-M,i[6]=h*_,i[10]=w*y+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,sM)}lookAt(e,i,r){const l=this.elements;return jn.subVectors(e,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Na.crossVectors(r,jn),Na.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Na.crossVectors(r,jn)),Na.normalize(),tc.crossVectors(jn,Na),l[0]=Na.x,l[4]=tc.x,l[8]=jn.x,l[1]=Na.y,l[5]=tc.y,l[9]=jn.y,l[2]=Na.z,l[6]=tc.z,l[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],y=r[5],x=r[9],M=r[13],A=r[2],w=r[6],E=r[10],g=r[14],I=r[3],L=r[7],B=r[11],N=r[15],G=l[0],X=l[4],ot=l[8],R=l[12],O=l[1],yt=l[5],ut=l[9],K=l[13],it=l[2],P=l[6],U=l[10],V=l[14],k=l[3],dt=l[7],ht=l[11],D=l[15];return u[0]=d*G+h*O+m*it+p*k,u[4]=d*X+h*yt+m*P+p*dt,u[8]=d*ot+h*ut+m*U+p*ht,u[12]=d*R+h*K+m*V+p*D,u[1]=_*G+y*O+x*it+M*k,u[5]=_*X+y*yt+x*P+M*dt,u[9]=_*ot+y*ut+x*U+M*ht,u[13]=_*R+y*K+x*V+M*D,u[2]=A*G+w*O+E*it+g*k,u[6]=A*X+w*yt+E*P+g*dt,u[10]=A*ot+w*ut+E*U+g*ht,u[14]=A*R+w*K+E*V+g*D,u[3]=I*G+L*O+B*it+N*k,u[7]=I*X+L*yt+B*P+N*dt,u[11]=I*ot+L*ut+B*U+N*ht,u[15]=I*R+L*K+B*V+N*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],_=e[2],y=e[6],x=e[10],M=e[14],A=e[3],w=e[7],E=e[11],g=e[15];return A*(+u*m*y-l*p*y-u*h*x+r*p*x+l*h*M-r*m*M)+w*(+i*m*M-i*p*x+u*d*x-l*d*M+l*p*_-u*m*_)+E*(+i*p*y-i*h*M-u*d*y+r*d*M+u*h*_-r*p*_)+g*(-l*h*_-i*m*y+i*h*x+l*d*y-r*d*x+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],y=e[9],x=e[10],M=e[11],A=e[12],w=e[13],E=e[14],g=e[15],I=y*E*p-w*x*p+w*m*M-h*E*M-y*m*g+h*x*g,L=A*x*p-_*E*p-A*m*M+d*E*M+_*m*g-d*x*g,B=_*w*p-A*y*p+A*h*M-d*w*M-_*h*g+d*y*g,N=A*y*m-_*w*m-A*h*x+d*w*x+_*h*E-d*y*E,G=i*I+r*L+l*B+u*N;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/G;return e[0]=I*X,e[1]=(w*x*u-y*E*u-w*l*M+r*E*M+y*l*g-r*x*g)*X,e[2]=(h*E*u-w*m*u+w*l*p-r*E*p-h*l*g+r*m*g)*X,e[3]=(y*m*u-h*x*u-y*l*p+r*x*p+h*l*M-r*m*M)*X,e[4]=L*X,e[5]=(_*E*u-A*x*u+A*l*M-i*E*M-_*l*g+i*x*g)*X,e[6]=(A*m*u-d*E*u-A*l*p+i*E*p+d*l*g-i*m*g)*X,e[7]=(d*x*u-_*m*u+_*l*p-i*x*p-d*l*M+i*m*M)*X,e[8]=B*X,e[9]=(A*y*u-_*w*u-A*r*M+i*w*M+_*r*g-i*y*g)*X,e[10]=(d*w*u-A*h*u+A*r*p-i*w*p-d*r*g+i*h*g)*X,e[11]=(_*h*u-d*y*u-_*r*p+i*y*p+d*r*M-i*h*M)*X,e[12]=N*X,e[13]=(_*w*l-A*y*l+A*r*x-i*w*x-_*r*E+i*y*E)*X,e[14]=(A*h*l-d*w*l-A*r*m+i*w*m+d*r*E-i*h*E)*X,e[15]=(d*y*l-_*h*l+_*r*m-i*y*m-d*r*x+i*h*x)*X,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,y=h+h,x=u*p,M=u*_,A=u*y,w=d*_,E=d*y,g=h*y,I=m*p,L=m*_,B=m*y,N=r.x,G=r.y,X=r.z;return l[0]=(1-(w+g))*N,l[1]=(M+B)*N,l[2]=(A-L)*N,l[3]=0,l[4]=(M-B)*G,l[5]=(1-(x+g))*G,l[6]=(E+I)*G,l[7]=0,l[8]=(A+L)*X,l[9]=(E-I)*X,l[10]=(1-(x+w))*X,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=tr.set(l[0],l[1],l[2]).length();const d=tr.set(l[4],l[5],l[6]).length(),h=tr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/u,_=1/d,y=1/h;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=_,mi.elements[5]*=_,mi.elements[6]*=_,mi.elements[8]*=y,mi.elements[9]*=y,mi.elements[10]*=y,i.setFromRotationMatrix(mi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d){const h=this.elements,m=2*u/(i-e),p=2*u/(r-l),_=(i+e)/(i-e),y=(r+l)/(r-l),x=-(d+u)/(d-u),M=-2*d*u/(d-u);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,u,d){const h=this.elements,m=1/(i-e),p=1/(r-l),_=1/(d-u),y=(i+e)*m,x=(r+l)*p,M=(d+u)*_;return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=-2*_,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const tr=new $,mi=new sn,aM=new $(0,0,0),sM=new $(1,1,1),Na=new $,tc=new $,jn=new $,o0=new sn,l0=new Oo;class yc{constructor(e=0,i=0,r=0,l=yc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],y=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(wn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-wn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(wn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return o0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return l0.setFromEuler(this),this.setFromQuaternion(l0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yc.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rM=0;const c0=new $,er=new Oo,ta=new sn,ec=new $,Mo=new $,oM=new $,lM=new Oo,u0=new $(1,0,0),f0=new $(0,1,0),h0=new $(0,0,1),cM={type:"added"},d0={type:"removed"};class En extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new $,i=new yc,r=new Oo,l=new $(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new ye}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return er.setFromAxisAngle(e,i),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,i){return er.setFromAxisAngle(e,i),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(u0,e)}rotateY(e){return this.rotateOnAxis(f0,e)}rotateZ(e){return this.rotateOnAxis(h0,e)}translateOnAxis(e,i){return c0.copy(e).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(u0,e)}translateY(e){return this.translateOnAxis(f0,e)}translateZ(e){return this.translateOnAxis(h0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ec.copy(e):ec.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Mo,ec,this.up):ta.lookAt(ec,Mo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),er.setFromRotationMatrix(ta),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(d0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const i=this.children[e];i.parent=null,i.dispatchEvent(d0)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i){let r=[];this[e]===i&&r.push(this);for(let l=0,u=this.children.length;l<u;l++){const d=this.children[l].getObjectsByProperty(e,i);d.length>0&&(r=r.concat(d))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const y=m[p];u(e.shapes,y)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),_=d(e.images),y=d(e.shapes),x=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}En.DEFAULT_UP=new $(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new $,ea=new $,Jf=new $,na=new $,nr=new $,ir=new $,p0=new $,$f=new $,th=new $,eh=new $;let nc=!1;class yi{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),gi.subVectors(e,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){gi.subVectors(l,i),ea.subVectors(r,i),Jf.subVectors(e,i);const d=gi.dot(gi),h=gi.dot(ea),m=gi.dot(Jf),p=ea.dot(ea),_=ea.dot(Jf),y=d*p-h*h;if(y===0)return u.set(-2,-1,-1);const x=1/y,M=(p*m-h*_)*x,A=(d*_-h*m)*x;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,na),na.x>=0&&na.y>=0&&na.x+na.y<=1}static getUV(e,i,r,l,u,d,h,m){return nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nc=!0),this.getInterpolation(e,i,r,l,u,d,h,m)}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,na),m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(d,na.y),m.addScaledVector(h,na.z),m}static isFrontFacing(e,i,r,l){return gi.subVectors(r,i),ea.subVectors(e,i),gi.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),gi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,r,l,u){return nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nc=!0),yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}getInterpolation(e,i,r,l,u){return yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;nr.subVectors(l,r),ir.subVectors(u,r),$f.subVectors(e,r);const m=nr.dot($f),p=ir.dot($f);if(m<=0&&p<=0)return i.copy(r);th.subVectors(e,l);const _=nr.dot(th),y=ir.dot(th);if(_>=0&&y<=_)return i.copy(l);const x=m*y-_*p;if(x<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(nr,d);eh.subVectors(e,u);const M=nr.dot(eh),A=ir.dot(eh);if(A>=0&&M<=A)return i.copy(u);const w=M*p-m*A;if(w<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ir,h);const E=_*A-M*y;if(E<=0&&y-_>=0&&M-A>=0)return p0.subVectors(u,l),h=(y-_)/(y-_+(M-A)),i.copy(l).addScaledVector(p0,h);const g=1/(E+w+x);return d=w*g,h=x*g,i.copy(r).addScaledVector(nr,d).addScaledVector(ir,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let uM=0;class br extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=mr,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Z0,this.blendDst=K0,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=hh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ny,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vf,this.stencilZFail=Vf,this.stencilZPass=Vf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(r.blending=this.blending),this.side!==za&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ic={h:0,s:0,l:0};function nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,i===void 0&&r===void 0?this.set(e):this.setRGB(e,i,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=se){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pi.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=pi.workingColorSpace){return this.r=e,this.g=i,this.b=r,pi.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=pi.workingColorSpace){if(e=Th(e,1),i=wn(i,0,1),r=wn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=nh(d,u,e+1/3),this.g=nh(d,u,e),this.b=nh(d,u,e-1/3)}return pi.toWorkingColorSpace(this,l),this}setStyle(e,i=se){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=se){const r=o_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=Xf(e.r),this.g=Xf(e.g),this.b=Xf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=se){return pi.fromWorkingColorSpace(Mn.copy(this),e),Math.round(wn(Mn.r*255,0,255))*65536+Math.round(wn(Mn.g*255,0,255))*256+Math.round(wn(Mn.b*255,0,255))}getHexString(e=se){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=pi.workingColorSpace){pi.fromWorkingColorSpace(Mn.copy(this),i);const r=Mn.r,l=Mn.g,u=Mn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const y=d-h;switch(p=_<=.5?y/(d+h):y/(2-d-h),d){case r:m=(l-u)/y+(l<u?6:0);break;case l:m=(u-r)/y+2;break;case u:m=(r-l)/y+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=pi.workingColorSpace){return pi.fromWorkingColorSpace(Mn.copy(this),i),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=se){pi.fromWorkingColorSpace(Mn.copy(this),e);const i=Mn.r,r=Mn.g,l=Mn.b;return e!==se?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(_i),_i.h+=e,_i.s+=i,_i.l+=r,this.setHSL(_i.h,_i.s,_i.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(_i),e.getHSL(ic);const r=wo(_i.h,ic.h,i),l=wo(_i.s,ic.s,i),u=wo(_i.l,ic.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Te;Te.NAMES=o_;class Ri extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new $,ac=new Ee;class Ui{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=n0,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ac.fromBufferAttribute(this,i),ac.applyMatrix3(e),this.setXY(i,ac.x,ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyMatrix3(e),this.setXYZ(i,en.x,en.y,en.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyMatrix4(e),this.setXYZ(i,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyNormalMatrix(e),this.setXYZ(i,en.x,en.y,en.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.transformDirection(e),this.setXYZ(i,en.x,en.y,en.z);return this}set(e,i=0){return this.array.set(e,i),this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array),u=Pn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==n0&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class l_ extends Ui{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class c_ extends Ui{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Kn extends Ui{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fM=0;const li=new sn,ih=new En,ar=new $,qn=new zo,So=new zo,un=new $;class aa extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n_(e)?c_:l_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ye().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,r){return li.makeTranslation(e,i,r),this.applyMatrix4(li),this}scale(e,i,r){return li.makeScale(e,i,r),this.applyMatrix4(li),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Kn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];qn.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ah);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];So.setFromBufferAttribute(h),this.morphTargetsRelative?(un.addVectors(qn.min,So.min),qn.expandByPoint(un),un.addVectors(qn.max,So.max),qn.expandByPoint(un)):(qn.expandByPoint(So.min),qn.expandByPoint(So.max))}qn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)un.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(un));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)un.fromBufferAttribute(h,p),m&&(ar.fromBufferAttribute(e,p),un.add(ar)),l=Math.max(l,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*h),4));const m=this.getAttribute("tangent").array,p=[],_=[];for(let O=0;O<h;O++)p[O]=new $,_[O]=new $;const y=new $,x=new $,M=new $,A=new Ee,w=new Ee,E=new Ee,g=new $,I=new $;function L(O,yt,ut){y.fromArray(l,O*3),x.fromArray(l,yt*3),M.fromArray(l,ut*3),A.fromArray(d,O*2),w.fromArray(d,yt*2),E.fromArray(d,ut*2),x.sub(y),M.sub(y),w.sub(A),E.sub(A);const K=1/(w.x*E.y-E.x*w.y);isFinite(K)&&(g.copy(x).multiplyScalar(E.y).addScaledVector(M,-w.y).multiplyScalar(K),I.copy(M).multiplyScalar(w.x).addScaledVector(x,-E.x).multiplyScalar(K),p[O].add(g),p[yt].add(g),p[ut].add(g),_[O].add(I),_[yt].add(I),_[ut].add(I))}let B=this.groups;B.length===0&&(B=[{start:0,count:r.length}]);for(let O=0,yt=B.length;O<yt;++O){const ut=B[O],K=ut.start,it=ut.count;for(let P=K,U=K+it;P<U;P+=3)L(r[P+0],r[P+1],r[P+2])}const N=new $,G=new $,X=new $,ot=new $;function R(O){X.fromArray(u,O*3),ot.copy(X);const yt=p[O];N.copy(yt),N.sub(X.multiplyScalar(X.dot(yt))).normalize(),G.crossVectors(ot,yt);const K=G.dot(_[O])<0?-1:1;m[O*4]=N.x,m[O*4+1]=N.y,m[O*4+2]=N.z,m[O*4+3]=K}for(let O=0,yt=B.length;O<yt;++O){const ut=B[O],K=ut.start,it=ut.count;for(let P=K,U=K+it;P<U;P+=3)R(r[P+0]),R(r[P+1]),R(r[P+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new $,u=new $,d=new $,h=new $,m=new $,p=new $,_=new $,y=new $;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),w=e.getX(x+1),E=e.getX(x+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),_.subVectors(d,u),y.subVectors(l,u),_.cross(y),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,E),h.add(_),m.add(_),p.add(_),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(E,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),_.subVectors(d,u),y.subVectors(l,u),_.cross(y),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)un.fromBufferAttribute(e,i),un.normalize(),e.setXYZ(i,un.x,un.y,un.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,y=h.normalized,x=new p.constructor(m.length*_);let M=0,A=0;for(let w=0,E=m.length;w<E;w++){h.isInterleavedBufferAttribute?M=m[w]*h.data.stride+h.offset:M=m[w]*_;for(let g=0;g<_;g++)x[A++]=p[M++]}return new Ui(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new aa,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,y=p.length;_<y;_++){const x=p[_],M=e(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let y=0,x=p.length;y<x;y++){const M=p[y];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],y=u[p];for(let x=0,M=y.length;x<M;x++)_.push(y[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const y=d[p];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m0=new sn,wi=new r_,sc=new Ah,g0=new $,sr=new $,rr=new $,or=new $,ah=new $,rc=new $,oc=new Ee,lc=new Ee,cc=new Ee,_0=new $,v0=new $,x0=new $,uc=new $,fc=new $;class ae extends En{constructor(e=new aa,i=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){rc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],y=u[m];_!==0&&(ah.fromBufferAttribute(y,e),d?rc.addScaledVector(ah,_):rc.addScaledVector(ah.sub(i),_))}i.add(rc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sc.copy(r.boundingSphere),sc.applyMatrix4(u),wi.copy(e.ray).recast(e.near),!(sc.containsPoint(wi.origin)===!1&&(wi.intersectSphere(sc,g0)===null||wi.origin.distanceToSquared(g0)>(e.far-e.near)**2))&&(m0.copy(u).invert(),wi.copy(e.ray).applyMatrix4(m0),!(r.boundingBox!==null&&wi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i)))}_computeIntersections(e,i){let r;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,p=l.attributes.uv1,_=l.attributes.normal,y=l.groups,x=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,A=y.length;M<A;M++){const w=y[M],E=u[w.materialIndex],g=Math.max(w.start,x.start),I=Math.min(d.count,Math.min(w.start+w.count,x.start+x.count));for(let L=g,B=I;L<B;L+=3){const N=d.getX(L),G=d.getX(L+1),X=d.getX(L+2);r=hc(this,E,e,wi,m,p,_,N,G,X),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=w.materialIndex,i.push(r))}}else{const M=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let w=M,E=A;w<E;w+=3){const g=d.getX(w),I=d.getX(w+1),L=d.getX(w+2);r=hc(this,u,e,wi,m,p,_,g,I,L),r&&(r.faceIndex=Math.floor(w/3),i.push(r))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,A=y.length;M<A;M++){const w=y[M],E=u[w.materialIndex],g=Math.max(w.start,x.start),I=Math.min(h.count,Math.min(w.start+w.count,x.start+x.count));for(let L=g,B=I;L<B;L+=3){const N=L,G=L+1,X=L+2;r=hc(this,E,e,wi,m,p,_,N,G,X),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=w.materialIndex,i.push(r))}}else{const M=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let w=M,E=A;w<E;w+=3){const g=w,I=w+1,L=w+2;r=hc(this,u,e,wi,m,p,_,g,I,L),r&&(r.faceIndex=Math.floor(w/3),i.push(r))}}}}function hM(o,e,i,r,l,u,d,h){let m;if(e.side===Bn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===za,h),m===null)return null;fc.copy(h),fc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(fc);return p<i.near||p>i.far?null:{distance:p,point:fc.clone(),object:o}}function hc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,sr),o.getVertexPosition(m,rr),o.getVertexPosition(p,or);const _=hM(o,e,i,r,sr,rr,or,uc);if(_){l&&(oc.fromBufferAttribute(l,h),lc.fromBufferAttribute(l,m),cc.fromBufferAttribute(l,p),_.uv=yi.getInterpolation(uc,sr,rr,or,oc,lc,cc,new Ee)),u&&(oc.fromBufferAttribute(u,h),lc.fromBufferAttribute(u,m),cc.fromBufferAttribute(u,p),_.uv1=yi.getInterpolation(uc,sr,rr,or,oc,lc,cc,new Ee),_.uv2=_.uv1),d&&(_0.fromBufferAttribute(d,h),v0.fromBufferAttribute(d,m),x0.fromBufferAttribute(d,p),_.normal=yi.getInterpolation(uc,sr,rr,or,_0,v0,x0,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new $,materialIndex:0};yi.getNormal(sr,rr,or,y.normal),_.face=y}return _}class an extends aa{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],y=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Kn(p,3)),this.setAttribute("normal",new Kn(_,3)),this.setAttribute("uv",new Kn(y,2));function A(w,E,g,I,L,B,N,G,X,ot,R){const O=B/X,yt=N/ot,ut=B/2,K=N/2,it=G/2,P=X+1,U=ot+1;let V=0,k=0;const dt=new $;for(let ht=0;ht<U;ht++){const D=ht*yt-K;for(let Y=0;Y<P;Y++){const W=Y*O-ut;dt[w]=W*I,dt[E]=D*L,dt[g]=it,p.push(dt.x,dt.y,dt.z),dt[w]=0,dt[E]=0,dt[g]=G>0?1:-1,_.push(dt.x,dt.y,dt.z),y.push(Y/X),y.push(1-ht/ot),V+=1}}for(let ht=0;ht<ot;ht++)for(let D=0;D<X;D++){const Y=x+D+P*ht,W=x+D+P*(ht+1),Z=x+(D+1)+P*(ht+1),gt=x+(D+1)+P*ht;m.push(Y,W,gt),m.push(W,Z,gt),k+=6}h.addGroup(M,k,R),M+=k,x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Tn(o){const e={};for(let i=0;i<o.length;i++){const r=Mr(o[i]);for(const l in r)e[l]=r[l]}return e}function dM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function u_(o){return o.getRenderTarget()===null?o.outputColorSpace:Ni}const pM={clone:Mr,merge:Tn};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ds extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class f_ extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(-i[8],-i[9],-i[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yn extends f_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ao*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const lr=-90,cr=1;class _M extends En{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r;const l=new Yn(lr,cr,e,i);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(1,0,0),this.add(l);const u=new Yn(lr,cr,e,i);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(-1,0,0),this.add(u);const d=new Yn(lr,cr,e,i);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const h=new Yn(lr,cr,e,i);h.layers=this.layers,h.up.set(0,0,1),h.lookAt(0,-1,0),this.add(h);const m=new Yn(lr,cr,e,i);m.layers=this.layers,m.up.set(0,1,0),m.lookAt(0,0,1),this.add(m);const p=new Yn(lr,cr,e,i);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,-1),this.add(p)}update(e,i){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[l,u,d,h,m,p]=this.children,_=e.getRenderTarget(),y=e.toneMapping,x=e.xr.enabled;e.toneMapping=Di,e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(i,l),e.setRenderTarget(r,1),e.render(i,u),e.setRenderTarget(r,2),e.render(i,d),e.setRenderTarget(r,3),e.render(i,h),e.setRenderTarget(r,4),e.render(i,m),r.texture.generateMipmaps=M,e.setRenderTarget(r,5),e.render(i,p),e.setRenderTarget(_),e.toneMapping=y,e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class h_ extends Zn{constructor(e,i,r,l,u,d,h,m,p,_){e=e!==void 0?e:[],i=i!==void 0?i:vr,super(e,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vM extends hs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===cs?se:us),this.texture=new h_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ui}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new an(5,5,5),u=new ds({name:"CubemapFromEquirect",uniforms:Mr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Oa});u.uniforms.tEquirect.value=i;const d=new ae(l,u),h=i.minFilter;return i.minFilter===Lo&&(i.minFilter=ui),new _M(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const sh=new $,xM=new $,yM=new ye;class is{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=sh.subVectors(r,i).cross(xM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(sh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||yM.getNormalMatrix(e),l=this.coplanarPoint(sh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Ah,dc=new $;class Rh{constructor(e=new is,i=new is,r=new is,l=new is,u=new is,d=new is){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const i=this.planes,r=e.elements,l=r[0],u=r[1],d=r[2],h=r[3],m=r[4],p=r[5],_=r[6],y=r[7],x=r[8],M=r[9],A=r[10],w=r[11],E=r[12],g=r[13],I=r[14],L=r[15];return i[0].setComponents(h-l,y-m,w-x,L-E).normalize(),i[1].setComponents(h+l,y+m,w+x,L+E).normalize(),i[2].setComponents(h+u,y+p,w+M,L+g).normalize(),i[3].setComponents(h-u,y-p,w-M,L-g).normalize(),i[4].setComponents(h-d,y-_,w-A,L-I).normalize(),i[5].setComponents(h+d,y+_,w+A,L+I).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(dc.x=l.normal.x>0?e.max.x:e.min.x,dc.y=l.normal.y>0?e.max.y:e.min.y,dc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function d_(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function MM(o,e){const i=e.isWebGL2,r=new WeakMap;function l(p,_){const y=p.array,x=p.usage,M=o.createBuffer();o.bindBuffer(_,M),o.bufferData(_,y,x),p.onUploadCallback();let A;if(y instanceof Float32Array)A=o.FLOAT;else if(y instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)A=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=o.UNSIGNED_SHORT;else if(y instanceof Int16Array)A=o.SHORT;else if(y instanceof Uint32Array)A=o.UNSIGNED_INT;else if(y instanceof Int32Array)A=o.INT;else if(y instanceof Int8Array)A=o.BYTE;else if(y instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:M,type:A,bytesPerElement:y.BYTES_PER_ELEMENT,version:p.version}}function u(p,_,y){const x=_.array,M=_.updateRange;o.bindBuffer(y,p),M.count===-1?o.bufferSubData(y,0,x):(i?o.bufferSubData(y,M.offset*x.BYTES_PER_ELEMENT,x,M.offset,M.count):o.bufferSubData(y,M.offset*x.BYTES_PER_ELEMENT,x.subarray(M.offset,M.offset+M.count)),M.count=-1),_.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function h(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);_&&(o.deleteBuffer(_.buffer),r.delete(p))}function m(p,_){if(p.isGLBufferAttribute){const x=r.get(p);(!x||x.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const y=r.get(p);y===void 0?r.set(p,l(p,_)):y.version<p.version&&(u(y.buffer,p,_),y.version=p.version)}return{get:d,remove:h,update:m}}class ci extends aa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,y=e/h,x=i/m,M=[],A=[],w=[],E=[];for(let g=0;g<_;g++){const I=g*x-d;for(let L=0;L<p;L++){const B=L*y-u;A.push(B,-I,0),w.push(0,0,1),E.push(L/h),E.push(1-g/m)}}for(let g=0;g<m;g++)for(let I=0;I<h;I++){const L=I+p*g,B=I+p*(g+1),N=I+1+p*(g+1),G=I+1+p*g;M.push(L,B,G),M.push(B,N,G)}this.setIndex(M),this.setAttribute("position",new Kn(A,3)),this.setAttribute("normal",new Kn(w,3)),this.setAttribute("uv",new Kn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.widthSegments,e.heightSegments)}}var SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,TM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RM="vec3 transformed = vec3( position );",CM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,HM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,hS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,_S=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,MS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ES=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TS=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,AS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,US=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,NS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,OS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,PS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,VS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,hE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,dE=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,EE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DE=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ZE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ue={alphamap_fragment:SM,alphamap_pars_fragment:EM,alphatest_fragment:bM,alphatest_pars_fragment:TM,aomap_fragment:AM,aomap_pars_fragment:wM,begin_vertex:RM,beginnormal_vertex:CM,bsdfs:LM,iridescence_fragment:DM,bumpmap_pars_fragment:UM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:zM,clipping_planes_vertex:PM,color_fragment:BM,color_pars_fragment:IM,color_pars_vertex:FM,color_vertex:GM,common:HM,cube_uv_reflection_fragment:VM,defaultnormal_vertex:kM,displacementmap_pars_vertex:XM,displacementmap_vertex:WM,emissivemap_fragment:jM,emissivemap_pars_fragment:qM,encodings_fragment:YM,encodings_pars_fragment:ZM,envmap_fragment:KM,envmap_common_pars_fragment:QM,envmap_pars_fragment:JM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:fS,envmap_vertex:tS,fog_vertex:eS,fog_pars_vertex:nS,fog_fragment:iS,fog_pars_fragment:aS,gradientmap_pars_fragment:sS,lightmap_fragment:rS,lightmap_pars_fragment:oS,lights_lambert_fragment:lS,lights_lambert_pars_fragment:cS,lights_pars_begin:uS,lights_toon_fragment:hS,lights_toon_pars_fragment:dS,lights_phong_fragment:pS,lights_phong_pars_fragment:mS,lights_physical_fragment:gS,lights_physical_pars_fragment:_S,lights_fragment_begin:vS,lights_fragment_maps:xS,lights_fragment_end:yS,logdepthbuf_fragment:MS,logdepthbuf_pars_fragment:SS,logdepthbuf_pars_vertex:ES,logdepthbuf_vertex:bS,map_fragment:TS,map_pars_fragment:AS,map_particle_fragment:wS,map_particle_pars_fragment:RS,metalnessmap_fragment:CS,metalnessmap_pars_fragment:LS,morphcolor_vertex:DS,morphnormal_vertex:US,morphtarget_pars_vertex:NS,morphtarget_vertex:OS,normal_fragment_begin:zS,normal_fragment_maps:PS,normal_pars_fragment:BS,normal_pars_vertex:IS,normal_vertex:FS,normalmap_pars_fragment:GS,clearcoat_normal_fragment_begin:HS,clearcoat_normal_fragment_maps:VS,clearcoat_pars_fragment:kS,iridescence_pars_fragment:XS,output_fragment:WS,packing:jS,premultiplied_alpha_fragment:qS,project_vertex:YS,dithering_fragment:ZS,dithering_pars_fragment:KS,roughnessmap_fragment:QS,roughnessmap_pars_fragment:JS,shadowmap_pars_fragment:$S,shadowmap_pars_vertex:tE,shadowmap_vertex:eE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:aE,skinning_vertex:sE,skinnormal_vertex:rE,specularmap_fragment:oE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:fE,transmission_pars_fragment:hE,uv_pars_fragment:dE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:gE,background_vert:_E,background_frag:vE,backgroundCube_vert:xE,backgroundCube_frag:yE,cube_vert:ME,cube_frag:SE,depth_vert:EE,depth_frag:bE,distanceRGBA_vert:TE,distanceRGBA_frag:AE,equirect_vert:wE,equirect_frag:RE,linedashed_vert:CE,linedashed_frag:LE,meshbasic_vert:DE,meshbasic_frag:UE,meshlambert_vert:NE,meshlambert_frag:OE,meshmatcap_vert:zE,meshmatcap_frag:PE,meshnormal_vert:BE,meshnormal_frag:IE,meshphong_vert:FE,meshphong_frag:GE,meshphysical_vert:HE,meshphysical_frag:VE,meshtoon_vert:kE,meshtoon_frag:XE,points_vert:WE,points_frag:jE,shadow_vert:qE,shadow_frag:YE,sprite_vert:ZE,sprite_frag:KE},Dt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaTest:{value:0}}},Ci={basic:{uniforms:Tn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Tn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Tn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Tn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Tn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Tn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Tn([Dt.points,Dt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Tn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Tn([Dt.common,Dt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Tn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Tn([Dt.sprite,Dt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Tn([Dt.common,Dt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Tn([Dt.lights,Dt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ci.physical={uniforms:Tn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const pc={r:0,b:0,g:0};function QE(o,e,i,r,l,u,d){const h=new Te(0);let m=u===!0?0:1,p,_,y=null,x=0,M=null;function A(E,g){let I=!1,L=g.isScene===!0?g.background:null;switch(L&&L.isTexture&&(L=(g.backgroundBlurriness>0?i:e).get(L)),L===null?w(h,m):L&&L.isColor&&(w(L,1),I=!0),o.xr.getEnvironmentBlendMode()){case"opaque":I=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,d),I=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,d),I=!0;break}(o.autoClear||I)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),L&&(L.isCubeTexture||L.mapping===xc)?(_===void 0&&(_=new ae(new an(1,1,1),new ds({name:"BackgroundCubeMaterial",uniforms:Mr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,X,ot){this.matrixWorld.copyPosition(ot.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,_.material.toneMapped=L.colorSpace!==se,(y!==L||x!==L.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,y=L,x=L.version,M=o.toneMapping),_.layers.enableAll(),E.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new ae(new ci(2,2),new ds({name:"BackgroundMaterial",uniforms:Mr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.toneMapped=L.colorSpace!==se,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(y!==L||x!==L.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,y=L,x=L.version,M=o.toneMapping),p.layers.enableAll(),E.unshift(p,p.geometry,p.material,0,0,null))}function w(E,g){E.getRGB(pc,u_(o)),r.buffers.color.setClear(pc.r,pc.g,pc.b,g,d)}return{getClearColor:function(){return h},setClearColor:function(E,g=1){h.set(E),m=g,w(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(E){m=E,w(h,m)},render:A}}function JE(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,h={},m=E(null);let p=m,_=!1;function y(it,P,U,V,k){let dt=!1;if(d){const ht=w(V,U,P);p!==ht&&(p=ht,M(p.object)),dt=g(it,V,U,k),dt&&I(it,V,U,k)}else{const ht=P.wireframe===!0;(p.geometry!==V.id||p.program!==U.id||p.wireframe!==ht)&&(p.geometry=V.id,p.program=U.id,p.wireframe=ht,dt=!0)}k!==null&&i.update(k,o.ELEMENT_ARRAY_BUFFER),(dt||_)&&(_=!1,ot(it,P,U,V),k!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(k).buffer))}function x(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(it){return r.isWebGL2?o.bindVertexArray(it):u.bindVertexArrayOES(it)}function A(it){return r.isWebGL2?o.deleteVertexArray(it):u.deleteVertexArrayOES(it)}function w(it,P,U){const V=U.wireframe===!0;let k=h[it.id];k===void 0&&(k={},h[it.id]=k);let dt=k[P.id];dt===void 0&&(dt={},k[P.id]=dt);let ht=dt[V];return ht===void 0&&(ht=E(x()),dt[V]=ht),ht}function E(it){const P=[],U=[],V=[];for(let k=0;k<l;k++)P[k]=0,U[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:V,object:it,attributes:{},index:null}}function g(it,P,U,V){const k=p.attributes,dt=P.attributes;let ht=0;const D=U.getAttributes();for(const Y in D)if(D[Y].location>=0){const Z=k[Y];let gt=dt[Y];if(gt===void 0&&(Y==="instanceMatrix"&&it.instanceMatrix&&(gt=it.instanceMatrix),Y==="instanceColor"&&it.instanceColor&&(gt=it.instanceColor)),Z===void 0||Z.attribute!==gt||gt&&Z.data!==gt.data)return!0;ht++}return p.attributesNum!==ht||p.index!==V}function I(it,P,U,V){const k={},dt=P.attributes;let ht=0;const D=U.getAttributes();for(const Y in D)if(D[Y].location>=0){let Z=dt[Y];Z===void 0&&(Y==="instanceMatrix"&&it.instanceMatrix&&(Z=it.instanceMatrix),Y==="instanceColor"&&it.instanceColor&&(Z=it.instanceColor));const gt={};gt.attribute=Z,Z&&Z.data&&(gt.data=Z.data),k[Y]=gt,ht++}p.attributes=k,p.attributesNum=ht,p.index=V}function L(){const it=p.newAttributes;for(let P=0,U=it.length;P<U;P++)it[P]=0}function B(it){N(it,0)}function N(it,P){const U=p.newAttributes,V=p.enabledAttributes,k=p.attributeDivisors;U[it]=1,V[it]===0&&(o.enableVertexAttribArray(it),V[it]=1),k[it]!==P&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](it,P),k[it]=P)}function G(){const it=p.newAttributes,P=p.enabledAttributes;for(let U=0,V=P.length;U<V;U++)P[U]!==it[U]&&(o.disableVertexAttribArray(U),P[U]=0)}function X(it,P,U,V,k,dt){r.isWebGL2===!0&&(U===o.INT||U===o.UNSIGNED_INT)?o.vertexAttribIPointer(it,P,U,k,dt):o.vertexAttribPointer(it,P,U,V,k,dt)}function ot(it,P,U,V){if(r.isWebGL2===!1&&(it.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const k=V.attributes,dt=U.getAttributes(),ht=P.defaultAttributeValues;for(const D in dt){const Y=dt[D];if(Y.location>=0){let W=k[D];if(W===void 0&&(D==="instanceMatrix"&&it.instanceMatrix&&(W=it.instanceMatrix),D==="instanceColor"&&it.instanceColor&&(W=it.instanceColor)),W!==void 0){const Z=W.normalized,gt=W.itemSize,bt=i.get(W);if(bt===void 0)continue;const z=bt.buffer,Pt=bt.type,Ut=bt.bytesPerElement;if(W.isInterleavedBufferAttribute){const wt=W.data,Wt=wt.stride,fe=W.offset;if(wt.isInstancedInterleavedBuffer){for(let kt=0;kt<Y.locationSize;kt++)N(Y.location+kt,wt.meshPerAttribute);it.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let kt=0;kt<Y.locationSize;kt++)B(Y.location+kt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let kt=0;kt<Y.locationSize;kt++)X(Y.location+kt,gt/Y.locationSize,Pt,Z,Wt*Ut,(fe+gt/Y.locationSize*kt)*Ut)}else{if(W.isInstancedBufferAttribute){for(let wt=0;wt<Y.locationSize;wt++)N(Y.location+wt,W.meshPerAttribute);it.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let wt=0;wt<Y.locationSize;wt++)B(Y.location+wt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let wt=0;wt<Y.locationSize;wt++)X(Y.location+wt,gt/Y.locationSize,Pt,Z,gt*Ut,gt/Y.locationSize*wt*Ut)}}else if(ht!==void 0){const Z=ht[D];if(Z!==void 0)switch(Z.length){case 2:o.vertexAttrib2fv(Y.location,Z);break;case 3:o.vertexAttrib3fv(Y.location,Z);break;case 4:o.vertexAttrib4fv(Y.location,Z);break;default:o.vertexAttrib1fv(Y.location,Z)}}}}G()}function R(){ut();for(const it in h){const P=h[it];for(const U in P){const V=P[U];for(const k in V)A(V[k].object),delete V[k];delete P[U]}delete h[it]}}function O(it){if(h[it.id]===void 0)return;const P=h[it.id];for(const U in P){const V=P[U];for(const k in V)A(V[k].object),delete V[k];delete P[U]}delete h[it.id]}function yt(it){for(const P in h){const U=h[P];if(U[it.id]===void 0)continue;const V=U[it.id];for(const k in V)A(V[k].object),delete V[k];delete U[it.id]}}function ut(){K(),_=!0,p!==m&&(p=m,M(p.object))}function K(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:y,reset:ut,resetDefaultState:K,dispose:R,releaseStatesOfGeometry:O,releaseStatesOfProgram:yt,initAttributes:L,enableAttribute:B,disableUnusedAttributes:G}}function $E(o,e,i,r){const l=r.isWebGL2;let u;function d(p){u=p}function h(p,_){o.drawArrays(u,p,_),i.update(_,u,1)}function m(p,_,y){if(y===0)return;let x,M;if(l)x=o,M="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[M](u,p,_,y),i.update(_,u,y)}this.setMode=d,this.render=h,this.renderInstances=m}function tb(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(X){if(X==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";X="mediump"}return X==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const m=u(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=d||e.has("WEBGL_draw_buffers"),_=i.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),w=o.getParameter(o.MAX_VERTEX_ATTRIBS),E=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),g=o.getParameter(o.MAX_VARYING_VECTORS),I=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,B=d||e.has("OES_texture_float"),N=L&&B,G=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:_,maxTextures:y,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:A,maxAttributes:w,maxVertexUniforms:E,maxVaryings:g,maxFragmentUniforms:I,vertexTextures:L,floatFragmentTextures:B,floatVertexTextures:N,maxSamples:G}}function eb(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new is,h=new ye,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||l;return l=x,r=y.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){i=_(y,x,0)},this.setState=function(y,x,M){const A=y.clippingPlanes,w=y.clipIntersection,E=y.clipShadows,g=o.get(y);if(!l||A===null||A.length===0||u&&!E)u?_(null):p();else{const I=u?0:r,L=I*4;let B=g.clippingState||null;m.value=B,B=_(A,x,L,M);for(let N=0;N!==L;++N)B[N]=i[N];g.clippingState=B,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,x,M,A){const w=y!==null?y.length:0;let E=null;if(w!==0){if(E=m.value,A!==!0||E===null){const g=M+w*4,I=x.matrixWorldInverse;h.getNormalMatrix(I),(E===null||E.length<g)&&(E=new Float32Array(g));for(let L=0,B=M;L!==w;++L,B+=4)d.copy(y[L]).applyMatrix4(I,h),d.normal.toArray(E,B),E[B+3]=d.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,E}}function nb(o){let e=new WeakMap;function i(d,h){return h===dh?d.mapping=vr:h===ph&&(d.mapping=xr),d}function r(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const h=d.mapping;if(h===dh||h===ph)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new vM(m.height/2);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class p_ extends f_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const dr=4,y0=[.125,.215,.35,.446,.526,.582],ss=20,rh=new p_,M0=new Te;let oh=null;const as=(1+Math.sqrt(5))/2,ur=1/as,S0=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,as,ur),new $(0,as,-ur),new $(ur,0,as),new $(-ur,0,as),new $(as,ur,0),new $(-as,ur,0)];class E0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){oh=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oh),e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===vr||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Do,format:Si,colorSpace:Ni,depthBuffer:!1},l=b0(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b0(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ib(u)),this._blurMaterial=ab(u,e,i)}return l}_compileMaterial(e){const i=new ae(this._lodPlanes[0],e);this._renderer.compile(i,rh)}_sceneToCubeUV(e,i,r,l){const h=new Yn(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(M0),_.toneMapping=Di,_.autoClear=!1;const M=new Ri({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),A=new ae(new an,M);let w=!1;const E=e.background;E?E.isColor&&(M.color.copy(E),e.background=null,w=!0):(M.color.copy(M0),w=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(h.up.set(0,m[g],0),h.lookAt(p[g],0,0)):I===1?(h.up.set(0,0,m[g]),h.lookAt(0,p[g],0)):(h.up.set(0,m[g],0),h.lookAt(0,0,p[g]));const L=this._cubeSize;mc(l,I*L,g>2?L:0,L,L),_.setRenderTarget(l),w&&_.render(A,h),_.render(e,h)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=E}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===vr||e.mapping===xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=A0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T0());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new ae(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;mc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,rh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=S0[(l-1)%S0.length];this._blur(e,l-1,l,u,d)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new ae(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*ss-1),w=u/A,E=isFinite(u)?1+Math.floor(_*w):ss;E>ss&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${ss}`);const g=[];let I=0;for(let X=0;X<ss;++X){const ot=X/w,R=Math.exp(-ot*ot/2);g.push(R),X===0?I+=R:X<E&&(I+=2*R)}for(let X=0;X<g.length;X++)g[X]=g[X]/I;x.envMap.value=e.texture,x.samples.value=E,x.weights.value=g,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=A,x.mipInt.value=L-r;const B=this._sizeLods[l],N=3*B*(l>L-dr?l-L+dr:0),G=4*(this._cubeSize-B);mc(i,N,G,3*B,2*B),m.setRenderTarget(i),m.render(y,rh)}}function ib(o){const e=[],i=[],r=[];let l=o;const u=o-dr+1+y0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-dr?m=y0[d-o+dr-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),_=-p,y=1+p,x=[_,_,y,_,y,y,_,_,y,y,_,y],M=6,A=6,w=3,E=2,g=1,I=new Float32Array(w*A*M),L=new Float32Array(E*A*M),B=new Float32Array(g*A*M);for(let G=0;G<M;G++){const X=G%3*2/3-1,ot=G>2?0:-1,R=[X,ot,0,X+2/3,ot,0,X+2/3,ot+1,0,X,ot,0,X+2/3,ot+1,0,X,ot+1,0];I.set(R,w*A*G),L.set(x,E*A*G);const O=[G,G,G,G,G,G];B.set(O,g*A*G)}const N=new aa;N.setAttribute("position",new Ui(I,w)),N.setAttribute("uv",new Ui(L,E)),N.setAttribute("faceIndex",new Ui(B,g)),e.push(N),l>dr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function b0(o,e,i){const r=new hs(o,e,i);return r.texture.mapping=xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function ab(o,e,i){const r=new Float32Array(ss),l=new $(0,1,0);return new ds({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function T0(){return new ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function A0(){return new ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sb(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===dh||m===ph,_=m===vr||m===xr;if(p||_)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let y=e.get(h);return i===null&&(i=new E0(o)),y=p?i.fromEquirectangular(h,y):i.fromCubemap(h,y),e.set(h,y),y.texture}else{if(e.has(h))return e.get(h).texture;{const y=h.image;if(p&&y&&y.height>0||_&&y&&l(y)){i===null&&(i=new E0(o));const x=p?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,x),h.addEventListener("dispose",u),x.texture}else return null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function rb(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ob(o,e,i,r){const l={},u=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",d),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(y,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(y){const x=y.attributes;for(const A in x)e.update(x[A],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const A in M){const w=M[A];for(let E=0,g=w.length;E<g;E++)e.update(w[E],o.ARRAY_BUFFER)}}function p(y){const x=[],M=y.index,A=y.attributes.position;let w=0;if(M!==null){const I=M.array;w=M.version;for(let L=0,B=I.length;L<B;L+=3){const N=I[L+0],G=I[L+1],X=I[L+2];x.push(N,G,G,X,X,N)}}else{const I=A.array;w=A.version;for(let L=0,B=I.length/3-1;L<B;L+=3){const N=L+0,G=L+1,X=L+2;x.push(N,G,G,X,X,N)}}const E=new(n_(x)?c_:l_)(x,1);E.version=w;const g=u.get(y);g&&e.remove(g),u.set(y,E)}function _(y){const x=u.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&p(y)}else p(y);return u.get(y)}return{get:h,update:m,getWireframeAttribute:_}}function lb(o,e,i,r){const l=r.isWebGL2;let u;function d(x){u=x}let h,m;function p(x){h=x.type,m=x.bytesPerElement}function _(x,M){o.drawElements(u,M,h,x*m),i.update(M,u,1)}function y(x,M,A){if(A===0)return;let w,E;if(l)w=o,E="drawElementsInstanced";else if(w=e.get("ANGLE_instanced_arrays"),E="drawElementsInstancedANGLE",w===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[E](u,M,h,x*m,A),i.update(M,u,A)}this.setMode=d,this.setIndex=p,this.render=_,this.renderInstances=y}function cb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.frame++,i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function ub(o,e){return o[0]-e[0]}function fb(o,e){return Math.abs(e[1])-Math.abs(o[1])}function hb(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,d=new He,h=[];for(let p=0;p<8;p++)h[p]=[p,0];function m(p,_,y){const x=p.morphTargetInfluences;if(e.isWebGL2===!0){const A=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=A!==void 0?A.length:0;let E=u.get(_);if(E===void 0||E.count!==w){let P=function(){K.dispose(),u.delete(_),_.removeEventListener("dispose",P)};var M=P;E!==void 0&&E.texture.dispose();const L=_.morphAttributes.position!==void 0,B=_.morphAttributes.normal!==void 0,N=_.morphAttributes.color!==void 0,G=_.morphAttributes.position||[],X=_.morphAttributes.normal||[],ot=_.morphAttributes.color||[];let R=0;L===!0&&(R=1),B===!0&&(R=2),N===!0&&(R=3);let O=_.attributes.position.count*R,yt=1;O>e.maxTextureSize&&(yt=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const ut=new Float32Array(O*yt*4*w),K=new s_(ut,O,yt,w);K.type=os,K.needsUpdate=!0;const it=R*4;for(let U=0;U<w;U++){const V=G[U],k=X[U],dt=ot[U],ht=O*yt*4*U;for(let D=0;D<V.count;D++){const Y=D*it;L===!0&&(d.fromBufferAttribute(V,D),ut[ht+Y+0]=d.x,ut[ht+Y+1]=d.y,ut[ht+Y+2]=d.z,ut[ht+Y+3]=0),B===!0&&(d.fromBufferAttribute(k,D),ut[ht+Y+4]=d.x,ut[ht+Y+5]=d.y,ut[ht+Y+6]=d.z,ut[ht+Y+7]=0),N===!0&&(d.fromBufferAttribute(dt,D),ut[ht+Y+8]=d.x,ut[ht+Y+9]=d.y,ut[ht+Y+10]=d.z,ut[ht+Y+11]=dt.itemSize===4?d.w:1)}}E={count:w,texture:K,size:new Ee(O,yt)},u.set(_,E),_.addEventListener("dispose",P)}let g=0;for(let L=0;L<x.length;L++)g+=x[L];const I=_.morphTargetsRelative?1:1-g;y.getUniforms().setValue(o,"morphTargetBaseInfluence",I),y.getUniforms().setValue(o,"morphTargetInfluences",x),y.getUniforms().setValue(o,"morphTargetsTexture",E.texture,i),y.getUniforms().setValue(o,"morphTargetsTextureSize",E.size)}else{const A=x===void 0?0:x.length;let w=r[_.id];if(w===void 0||w.length!==A){w=[];for(let B=0;B<A;B++)w[B]=[B,0];r[_.id]=w}for(let B=0;B<A;B++){const N=w[B];N[0]=B,N[1]=x[B]}w.sort(fb);for(let B=0;B<8;B++)B<A&&w[B][1]?(h[B][0]=w[B][0],h[B][1]=w[B][1]):(h[B][0]=Number.MAX_SAFE_INTEGER,h[B][1]=0);h.sort(ub);const E=_.morphAttributes.position,g=_.morphAttributes.normal;let I=0;for(let B=0;B<8;B++){const N=h[B],G=N[0],X=N[1];G!==Number.MAX_SAFE_INTEGER&&X?(E&&_.getAttribute("morphTarget"+B)!==E[G]&&_.setAttribute("morphTarget"+B,E[G]),g&&_.getAttribute("morphNormal"+B)!==g[G]&&_.setAttribute("morphNormal"+B,g[G]),l[B]=X,I+=X):(E&&_.hasAttribute("morphTarget"+B)===!0&&_.deleteAttribute("morphTarget"+B),g&&_.hasAttribute("morphNormal"+B)===!0&&_.deleteAttribute("morphNormal"+B),l[B]=0)}const L=_.morphTargetsRelative?1:1-I;y.getUniforms().setValue(o,"morphTargetBaseInfluence",L),y.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:m}}function db(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,y=e.get(m,_);return l.get(y)!==p&&(e.update(y),l.set(y,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER)),y}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const m_=new Zn,g_=new s_,__=new nM,v_=new h_,w0=[],R0=[],C0=new Float32Array(16),L0=new Float32Array(9),D0=new Float32Array(4);function Tr(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=w0[l];if(u===void 0&&(u=new Float32Array(l),w0[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function on(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function ln(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Mc(o,e){let i=R0[e];i===void 0&&(i=new Int32Array(e),R0[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function pb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function mb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2fv(this.addr,e),ln(i,e)}}function gb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;o.uniform3fv(this.addr,e),ln(i,e)}}function _b(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4fv(this.addr,e),ln(i,e)}}function vb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;D0.set(r),o.uniformMatrix2fv(this.addr,!1,D0),ln(i,r)}}function xb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;L0.set(r),o.uniformMatrix3fv(this.addr,!1,L0),ln(i,r)}}function yb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;C0.set(r),o.uniformMatrix4fv(this.addr,!1,C0),ln(i,r)}}function Mb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2iv(this.addr,e),ln(i,e)}}function Eb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3iv(this.addr,e),ln(i,e)}}function bb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4iv(this.addr,e),ln(i,e)}}function Tb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2uiv(this.addr,e),ln(i,e)}}function wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3uiv(this.addr,e),ln(i,e)}}function Rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4uiv(this.addr,e),ln(i,e)}}function Cb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2D(e||m_,l)}function Lb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||__,l)}function Db(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||v_,l)}function Ub(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||g_,l)}function Nb(o){switch(o){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return _b;case 35674:return vb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Mb;case 35667:case 35671:return Sb;case 35668:case 35672:return Eb;case 35669:case 35673:return bb;case 5125:return Tb;case 36294:return Ab;case 36295:return wb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Ub}}function Ob(o,e){o.uniform1fv(this.addr,e)}function zb(o,e){const i=Tr(e,this.size,2);o.uniform2fv(this.addr,i)}function Pb(o,e){const i=Tr(e,this.size,3);o.uniform3fv(this.addr,i)}function Bb(o,e){const i=Tr(e,this.size,4);o.uniform4fv(this.addr,i)}function Ib(o,e){const i=Tr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Fb(o,e){const i=Tr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Gb(o,e){const i=Tr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Hb(o,e){o.uniform1iv(this.addr,e)}function Vb(o,e){o.uniform2iv(this.addr,e)}function kb(o,e){o.uniform3iv(this.addr,e)}function Xb(o,e){o.uniform4iv(this.addr,e)}function Wb(o,e){o.uniform1uiv(this.addr,e)}function jb(o,e){o.uniform2uiv(this.addr,e)}function qb(o,e){o.uniform3uiv(this.addr,e)}function Yb(o,e){o.uniform4uiv(this.addr,e)}function Zb(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||m_,u[d])}function Kb(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||__,u[d])}function Qb(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||v_,u[d])}function Jb(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||g_,u[d])}function $b(o){switch(o){case 5126:return Ob;case 35664:return zb;case 35665:return Pb;case 35666:return Bb;case 35674:return Ib;case 35675:return Fb;case 35676:return Gb;case 5124:case 35670:return Hb;case 35667:case 35671:return Vb;case 35668:case 35672:return kb;case 35669:case 35673:return Xb;case 5125:return Wb;case 36294:return jb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return Jb}}class tT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Nb(i.type)}}class eT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.size=i.size,this.setValue=$b(i.type)}}class nT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function U0(o,e){o.seq.push(e),o.map[e.id]=e}function iT(o,e,i){const r=o.name,l=r.length;for(lh.lastIndex=0;;){const u=lh.exec(r),d=lh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){U0(i,p===void 0?new tT(h,o,e):new eT(h,o,e));break}else{let y=i.map[h];y===void 0&&(y=new nT(h),U0(i,y)),i=y}}}class _c{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);iT(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function N0(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}let aT=0;function sT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function rT(o){switch(o){case Ni:return["Linear","( value )"];case se:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),["Linear","( value )"]}}function O0(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+sT(o.getShaderSource(e),d)}else return l}function oT(o,e){const i=rT(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function lT(o,e){let i;switch(e){case cy:i="Linear";break;case uy:i="Reinhard";break;case fy:i="OptimizedCineon";break;case hy:i="ACESFilmic";break;case dy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function cT(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(To).join(`
`)}function uT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function fT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function To(o){return o!==""}function z0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function P0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(o){return o.replace(hT,dT)}function dT(o,e){const i=ue[e];if(i===void 0)throw new Error("Can not resolve #include <"+e+">");return xh(i)}const pT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(o){return o.replace(pT,mT)}function mT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function I0(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Hx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function _T(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vr:case xr:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xr:e="ENVMAP_MODE_REFRACTION";break}return e}function xT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Eh:e="ENVMAP_BLENDING_MULTIPLY";break;case oy:e="ENVMAP_BLENDING_MIX";break;case ly:e="ENVMAP_BLENDING_ADD";break}return e}function yT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function MT(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=gT(i),p=_T(i),_=vT(i),y=xT(i),x=yT(i),M=i.isWebGL2?"":cT(i),A=uT(u),w=l.createProgram();let E,g,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=[A].filter(To).join(`
`),E.length>0&&(E+=`
`),g=[M,A].filter(To).join(`
`),g.length>0&&(g+=`
`)):(E=[I0(i),"#define SHADER_NAME "+i.shaderName,A,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),g=[M,I0(i),"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Di?"#define TONE_MAPPING":"",i.toneMapping!==Di?ue.tonemapping_pars_fragment:"",i.toneMapping!==Di?lT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.encodings_pars_fragment,oT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(To).join(`
`)),d=xh(d),d=z0(d,i),d=P0(d,i),h=xh(h),h=z0(h,i),h=P0(h,i),d=B0(d),h=B0(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,E=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,g=["#define varying in",i.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=I+E+d,B=I+g+h,N=N0(l,l.VERTEX_SHADER,L),G=N0(l,l.FRAGMENT_SHADER,B);if(l.attachShader(w,N),l.attachShader(w,G),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w),o.debug.checkShaderErrors){const R=l.getProgramInfoLog(w).trim(),O=l.getShaderInfoLog(N).trim(),yt=l.getShaderInfoLog(G).trim();let ut=!0,K=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,N,G);else{const it=O0(l,N,"vertex"),P=O0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+it+`
`+P)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(O===""||yt==="")&&(K=!1);K&&(this.diagnostics={runnable:ut,programLog:R,vertexShader:{log:O,prefix:E},fragmentShader:{log:yt,prefix:g}})}l.deleteShader(N),l.deleteShader(G);let X;this.getUniforms=function(){return X===void 0&&(X=new _c(l,w)),X};let ot;return this.getAttributes=function(){return ot===void 0&&(ot=fT(l,w)),ot},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.name=i.shaderName,this.id=aT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=G,this}let ST=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new bT(e),i.set(e,r)),r}}class bT{constructor(e){this.id=ST++,this.code=e,this.usedTimes=0}}function TT(o,e,i,r,l,u,d){const h=new wh,m=new ET,p=[],_=l.isWebGL2,y=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return R===1?"uv1":R===2?"uv2":R===3?"uv3":"uv"}function E(R,O,yt,ut,K){const it=ut.fog,P=K.geometry,U=R.isMeshStandardMaterial?ut.environment:null,V=(R.isMeshStandardMaterial?i:e).get(R.envMap||U),k=V&&V.mapping===xc?V.image.height:null,dt=A[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const ht=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,D=ht!==void 0?ht.length:0;let Y=0;P.morphAttributes.position!==void 0&&(Y=1),P.morphAttributes.normal!==void 0&&(Y=2),P.morphAttributes.color!==void 0&&(Y=3);let W,Z,gt,bt;if(dt){const $t=Ci[dt];W=$t.vertexShader,Z=$t.fragmentShader}else W=R.vertexShader,Z=R.fragmentShader,m.update(R),gt=m.getVertexShaderID(R),bt=m.getFragmentShaderID(R);const z=o.getRenderTarget(),Pt=K.isInstancedMesh===!0,Ut=!!R.map,wt=!!R.matcap,Wt=!!V,fe=!!R.aoMap,kt=!!R.lightMap,Zt=!!R.bumpMap,ze=!!R.normalMap,Fe=!!R.displacementMap,Ve=!!R.emissiveMap,Pe=!!R.metalnessMap,me=!!R.roughnessMap,Ae=R.clearcoat>0,Nt=R.iridescence>0,T=R.sheen>0,S=R.transmission>0,H=Ae&&!!R.clearcoatMap,at=Ae&&!!R.clearcoatNormalMap,vt=Ae&&!!R.clearcoatRoughnessMap,At=Nt&&!!R.iridescenceMap,Ft=Nt&&!!R.iridescenceThicknessMap,Lt=T&&!!R.sheenColorMap,ft=T&&!!R.sheenRoughnessMap,Bt=!!R.specularMap,zt=!!R.specularColorMap,Gt=!!R.specularIntensityMap,Rt=S&&!!R.transmissionMap,Tt=S&&!!R.thicknessMap,Et=!!R.gradientMap,Xt=!!R.alphaMap,re=R.alphaTest>0,q=!!R.extensions,lt=!!P.attributes.uv1,St=!!P.attributes.uv2,Ct=!!P.attributes.uv3;return{isWebGL2:_,shaderID:dt,shaderName:R.type,vertexShader:W,fragmentShader:Z,defines:R.defines,customVertexShaderID:gt,customFragmentShaderID:bt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,instancing:Pt,instancingColor:Pt&&K.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:z===null?o.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ni,map:Ut,matcap:wt,envMap:Wt,envMapMode:Wt&&V.mapping,envMapCubeUVHeight:k,aoMap:fe,lightMap:kt,bumpMap:Zt,normalMap:ze,displacementMap:x&&Fe,emissiveMap:Ve,normalMapObjectSpace:ze&&R.normalMapType===Uy,normalMapTangentSpace:ze&&R.normalMapType===bh,metalnessMap:Pe,roughnessMap:me,clearcoat:Ae,clearcoatMap:H,clearcoatNormalMap:at,clearcoatRoughnessMap:vt,iridescence:Nt,iridescenceMap:At,iridescenceThicknessMap:Ft,sheen:T,sheenColorMap:Lt,sheenRoughnessMap:ft,specularMap:Bt,specularColorMap:zt,specularIntensityMap:Gt,transmission:S,transmissionMap:Rt,thicknessMap:Tt,gradientMap:Et,opaque:R.transparent===!1&&R.blending===mr,alphaMap:Xt,alphaTest:re,combine:R.combine,mapUv:Ut&&w(R.map.channel),aoMapUv:fe&&w(R.aoMap.channel),lightMapUv:kt&&w(R.lightMap.channel),bumpMapUv:Zt&&w(R.bumpMap.channel),normalMapUv:ze&&w(R.normalMap.channel),displacementMapUv:Fe&&w(R.displacementMap.channel),emissiveMapUv:Ve&&w(R.emissiveMap.channel),metalnessMapUv:Pe&&w(R.metalnessMap.channel),roughnessMapUv:me&&w(R.roughnessMap.channel),clearcoatMapUv:H&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:at&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:ft&&w(R.sheenRoughnessMap.channel),specularMapUv:Bt&&w(R.specularMap.channel),specularColorMapUv:zt&&w(R.specularColorMap.channel),specularIntensityMapUv:Gt&&w(R.specularIntensityMap.channel),transmissionMapUv:Rt&&w(R.transmissionMap.channel),thicknessMapUv:Tt&&w(R.thicknessMap.channel),alphaMapUv:Xt&&w(R.alphaMap.channel),vertexTangents:ze&&!!P.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:lt,vertexUv2s:St,vertexUv3s:Ct,pointsUvs:K.isPoints===!0&&!!P.attributes.uv&&(Ut||Xt),fog:!!it,useFog:R.fog===!0,fogExp2:it&&it.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:K.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:Y,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&yt.length>0,shadowMapType:o.shadowMap.type,toneMapping:R.toneMapped?o.toneMapping:Di,useLegacyLights:o.useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Li,flipSided:R.side===Bn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:q&&R.extensions.derivatives===!0,extensionFragDepth:q&&R.extensions.fragDepth===!0,extensionDrawBuffers:q&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:q&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:_||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||r.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function g(R){const O=[];if(R.shaderID?O.push(R.shaderID):(O.push(R.customVertexShaderID),O.push(R.customFragmentShaderID)),R.defines!==void 0)for(const yt in R.defines)O.push(yt),O.push(R.defines[yt]);return R.isRawShaderMaterial===!1&&(I(O,R),L(O,R),O.push(o.outputColorSpace)),O.push(R.customProgramCacheKey),O.join()}function I(R,O){R.push(O.precision),R.push(O.outputColorSpace),R.push(O.envMapMode),R.push(O.envMapCubeUVHeight),R.push(O.mapUv),R.push(O.alphaMapUv),R.push(O.lightMapUv),R.push(O.aoMapUv),R.push(O.bumpMapUv),R.push(O.normalMapUv),R.push(O.displacementMapUv),R.push(O.emissiveMapUv),R.push(O.metalnessMapUv),R.push(O.roughnessMapUv),R.push(O.clearcoatMapUv),R.push(O.clearcoatNormalMapUv),R.push(O.clearcoatRoughnessMapUv),R.push(O.iridescenceMapUv),R.push(O.iridescenceThicknessMapUv),R.push(O.sheenColorMapUv),R.push(O.sheenRoughnessMapUv),R.push(O.specularMapUv),R.push(O.specularColorMapUv),R.push(O.specularIntensityMapUv),R.push(O.transmissionMapUv),R.push(O.thicknessMapUv),R.push(O.combine),R.push(O.fogExp2),R.push(O.sizeAttenuation),R.push(O.morphTargetsCount),R.push(O.morphAttributeCount),R.push(O.numDirLights),R.push(O.numPointLights),R.push(O.numSpotLights),R.push(O.numSpotLightMaps),R.push(O.numHemiLights),R.push(O.numRectAreaLights),R.push(O.numDirLightShadows),R.push(O.numPointLightShadows),R.push(O.numSpotLightShadows),R.push(O.numSpotLightShadowsWithMaps),R.push(O.shadowMapType),R.push(O.toneMapping),R.push(O.numClippingPlanes),R.push(O.numClipIntersection),R.push(O.depthPacking)}function L(R,O){h.disableAll(),O.isWebGL2&&h.enable(0),O.supportsVertexTextures&&h.enable(1),O.instancing&&h.enable(2),O.instancingColor&&h.enable(3),O.matcap&&h.enable(4),O.envMap&&h.enable(5),O.normalMapObjectSpace&&h.enable(6),O.normalMapTangentSpace&&h.enable(7),O.clearcoat&&h.enable(8),O.iridescence&&h.enable(9),O.alphaTest&&h.enable(10),O.vertexColors&&h.enable(11),O.vertexAlphas&&h.enable(12),O.vertexUv1s&&h.enable(13),O.vertexUv2s&&h.enable(14),O.vertexUv3s&&h.enable(15),O.vertexTangents&&h.enable(16),R.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.skinning&&h.enable(4),O.morphTargets&&h.enable(5),O.morphNormals&&h.enable(6),O.morphColors&&h.enable(7),O.premultipliedAlpha&&h.enable(8),O.shadowMapEnabled&&h.enable(9),O.useLegacyLights&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),R.push(h.mask)}function B(R){const O=A[R.type];let yt;if(O){const ut=Ci[O];yt=pM.clone(ut.uniforms)}else yt=R.uniforms;return yt}function N(R,O){let yt;for(let ut=0,K=p.length;ut<K;ut++){const it=p[ut];if(it.cacheKey===O){yt=it,++yt.usedTimes;break}}return yt===void 0&&(yt=new MT(o,O,R,u),p.push(yt)),yt}function G(R){if(--R.usedTimes===0){const O=p.indexOf(R);p[O]=p[p.length-1],p.pop(),R.destroy()}}function X(R){m.remove(R)}function ot(){m.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:B,acquireProgram:N,releaseProgram:G,releaseShaderCache:X,programs:p,dispose:ot}}function AT(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function wT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function F0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function G0(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(y,x,M,A,w,E){let g=o[e];return g===void 0?(g={id:y.id,object:y,geometry:x,material:M,groupOrder:A,renderOrder:y.renderOrder,z:w,group:E},o[e]=g):(g.id=y.id,g.object=y,g.geometry=x,g.material=M,g.groupOrder=A,g.renderOrder=y.renderOrder,g.z=w,g.group=E),e++,g}function h(y,x,M,A,w,E){const g=d(y,x,M,A,w,E);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(y,x,M,A,w,E){const g=d(y,x,M,A,w,E);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(y,x){i.length>1&&i.sort(y||wT),r.length>1&&r.sort(x||F0),l.length>1&&l.sort(x||F0)}function _(){for(let y=e,x=o.length;y<x;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function RT(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new G0,o.set(r,[d])):l>=u.length?(d=new G0,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function CT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Te};break;case"SpotLight":i={position:new $,direction:new $,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function LT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let DT=0;function UT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function NT(o,e){const i=new CT,r=LT(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let _=0;_<9;_++)l.probe.push(new $);const u=new $,d=new sn,h=new sn;function m(_,y){let x=0,M=0,A=0;for(let yt=0;yt<9;yt++)l.probe[yt].set(0,0,0);let w=0,E=0,g=0,I=0,L=0,B=0,N=0,G=0,X=0,ot=0;_.sort(UT);const R=y===!0?Math.PI:1;for(let yt=0,ut=_.length;yt<ut;yt++){const K=_[yt],it=K.color,P=K.intensity,U=K.distance,V=K.shadow&&K.shadow.map?K.shadow.map.texture:null;if(K.isAmbientLight)x+=it.r*P*R,M+=it.g*P*R,A+=it.b*P*R;else if(K.isLightProbe)for(let k=0;k<9;k++)l.probe[k].addScaledVector(K.sh.coefficients[k],P);else if(K.isDirectionalLight){const k=i.get(K);if(k.color.copy(K.color).multiplyScalar(K.intensity*R),K.castShadow){const dt=K.shadow,ht=r.get(K);ht.shadowBias=dt.bias,ht.shadowNormalBias=dt.normalBias,ht.shadowRadius=dt.radius,ht.shadowMapSize=dt.mapSize,l.directionalShadow[w]=ht,l.directionalShadowMap[w]=V,l.directionalShadowMatrix[w]=K.shadow.matrix,B++}l.directional[w]=k,w++}else if(K.isSpotLight){const k=i.get(K);k.position.setFromMatrixPosition(K.matrixWorld),k.color.copy(it).multiplyScalar(P*R),k.distance=U,k.coneCos=Math.cos(K.angle),k.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),k.decay=K.decay,l.spot[g]=k;const dt=K.shadow;if(K.map&&(l.spotLightMap[X]=K.map,X++,dt.updateMatrices(K),K.castShadow&&ot++),l.spotLightMatrix[g]=dt.matrix,K.castShadow){const ht=r.get(K);ht.shadowBias=dt.bias,ht.shadowNormalBias=dt.normalBias,ht.shadowRadius=dt.radius,ht.shadowMapSize=dt.mapSize,l.spotShadow[g]=ht,l.spotShadowMap[g]=V,G++}g++}else if(K.isRectAreaLight){const k=i.get(K);k.color.copy(it).multiplyScalar(P),k.halfWidth.set(K.width*.5,0,0),k.halfHeight.set(0,K.height*.5,0),l.rectArea[I]=k,I++}else if(K.isPointLight){const k=i.get(K);if(k.color.copy(K.color).multiplyScalar(K.intensity*R),k.distance=K.distance,k.decay=K.decay,K.castShadow){const dt=K.shadow,ht=r.get(K);ht.shadowBias=dt.bias,ht.shadowNormalBias=dt.normalBias,ht.shadowRadius=dt.radius,ht.shadowMapSize=dt.mapSize,ht.shadowCameraNear=dt.camera.near,ht.shadowCameraFar=dt.camera.far,l.pointShadow[E]=ht,l.pointShadowMap[E]=V,l.pointShadowMatrix[E]=K.shadow.matrix,N++}l.point[E]=k,E++}else if(K.isHemisphereLight){const k=i.get(K);k.skyColor.copy(K.color).multiplyScalar(P*R),k.groundColor.copy(K.groundColor).multiplyScalar(P*R),l.hemi[L]=k,L++}}I>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Dt.LTC_FLOAT_1,l.rectAreaLTC2=Dt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Dt.LTC_HALF_1,l.rectAreaLTC2=Dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=x,l.ambient[1]=M,l.ambient[2]=A;const O=l.hash;(O.directionalLength!==w||O.pointLength!==E||O.spotLength!==g||O.rectAreaLength!==I||O.hemiLength!==L||O.numDirectionalShadows!==B||O.numPointShadows!==N||O.numSpotShadows!==G||O.numSpotMaps!==X)&&(l.directional.length=w,l.spot.length=g,l.rectArea.length=I,l.point.length=E,l.hemi.length=L,l.directionalShadow.length=B,l.directionalShadowMap.length=B,l.pointShadow.length=N,l.pointShadowMap.length=N,l.spotShadow.length=G,l.spotShadowMap.length=G,l.directionalShadowMatrix.length=B,l.pointShadowMatrix.length=N,l.spotLightMatrix.length=G+X-ot,l.spotLightMap.length=X,l.numSpotLightShadowsWithMaps=ot,O.directionalLength=w,O.pointLength=E,O.spotLength=g,O.rectAreaLength=I,O.hemiLength=L,O.numDirectionalShadows=B,O.numPointShadows=N,O.numSpotShadows=G,O.numSpotMaps=X,l.version=DT++)}function p(_,y){let x=0,M=0,A=0,w=0,E=0;const g=y.matrixWorldInverse;for(let I=0,L=_.length;I<L;I++){const B=_[I];if(B.isDirectionalLight){const N=l.directional[x];N.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(g),x++}else if(B.isSpotLight){const N=l.spot[A];N.position.setFromMatrixPosition(B.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(g),A++}else if(B.isRectAreaLight){const N=l.rectArea[w];N.position.setFromMatrixPosition(B.matrixWorld),N.position.applyMatrix4(g),h.identity(),d.copy(B.matrixWorld),d.premultiply(g),h.extractRotation(d),N.halfWidth.set(B.width*.5,0,0),N.halfHeight.set(0,B.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),w++}else if(B.isPointLight){const N=l.point[M];N.position.setFromMatrixPosition(B.matrixWorld),N.position.applyMatrix4(g),M++}else if(B.isHemisphereLight){const N=l.hemi[E];N.direction.setFromMatrixPosition(B.matrixWorld),N.direction.transformDirection(g),E++}}}return{setup:m,setupView:p,state:l}}function H0(o,e){const i=new NT(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function d(y){r.push(y)}function h(y){l.push(y)}function m(y){i.setup(r,y)}function p(y){i.setupView(r,y)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:d,pushShadow:h}}function OT(o,e){let i=new WeakMap;function r(u,d=0){const h=i.get(u);let m;return h===void 0?(m=new H0(o,e),i.set(u,[m])):d>=h.length?(m=new H0(o,e),h.push(m)):m=h[d],m}function l(){i=new WeakMap}return{get:r,dispose:l}}class zT extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ly,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PT extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const BT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function FT(o,e,i){let r=new Rh;const l=new Ee,u=new Ee,d=new He,h=new zT({depthPacking:Dy}),m=new PT,p={},_=i.maxTextureSize,y={[za]:Bn,[Bn]:za,[Li]:Li},x=new ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:BT,fragmentShader:IT}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new aa;A.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ae(A,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let g=this.type;this.render=function(N,G,X){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||N.length===0)return;const ot=o.getRenderTarget(),R=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),yt=o.state;yt.setBlending(Oa),yt.buffers.color.setClear(1,1,1,1),yt.buffers.depth.setTest(!0),yt.setScissorTest(!1);const ut=g!==ia&&this.type===ia,K=g===ia&&this.type!==ia;for(let it=0,P=N.length;it<P;it++){const U=N[it],V=U.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const k=V.getFrameExtents();if(l.multiply(k),u.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/k.x),l.x=u.x*k.x,V.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/k.y),l.y=u.y*k.y,V.mapSize.y=u.y)),V.map===null||ut===!0||K===!0){const ht=this.type!==ia?{minFilter:An,magFilter:An}:{};V.map!==null&&V.map.dispose(),V.map=new hs(l.x,l.y,ht),V.map.texture.name=U.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const dt=V.getViewportCount();for(let ht=0;ht<dt;ht++){const D=V.getViewport(ht);d.set(u.x*D.x,u.y*D.y,u.x*D.z,u.y*D.w),yt.viewport(d),V.updateMatrices(U,ht),r=V.getFrustum(),B(G,X,V.camera,U,this.type)}V.isPointLightShadow!==!0&&this.type===ia&&I(V,X),V.needsUpdate=!1}g=this.type,E.needsUpdate=!1,o.setRenderTarget(ot,R,O)};function I(N,G){const X=e.update(w);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new hs(l.x,l.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(G,null,X,x,w,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(G,null,X,M,w,null)}function L(N,G,X,ot){let R=null;const O=X.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(O!==void 0)R=O;else if(R=X.isPointLight===!0?m:h,o.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0){const yt=R.uuid,ut=G.uuid;let K=p[yt];K===void 0&&(K={},p[yt]=K);let it=K[ut];it===void 0&&(it=R.clone(),K[ut]=it),R=it}if(R.visible=G.visible,R.wireframe=G.wireframe,ot===ia?R.side=G.shadowSide!==null?G.shadowSide:G.side:R.side=G.shadowSide!==null?G.shadowSide:y[G.side],R.alphaMap=G.alphaMap,R.alphaTest=G.alphaTest,R.map=G.map,R.clipShadows=G.clipShadows,R.clippingPlanes=G.clippingPlanes,R.clipIntersection=G.clipIntersection,R.displacementMap=G.displacementMap,R.displacementScale=G.displacementScale,R.displacementBias=G.displacementBias,R.wireframeLinewidth=G.wireframeLinewidth,R.linewidth=G.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const yt=o.properties.get(R);yt.light=X}return R}function B(N,G,X,ot,R){if(N.visible===!1)return;if(N.layers.test(G.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===ia)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,N.matrixWorld);const ut=e.update(N),K=N.material;if(Array.isArray(K)){const it=ut.groups;for(let P=0,U=it.length;P<U;P++){const V=it[P],k=K[V.materialIndex];if(k&&k.visible){const dt=L(N,k,ot,R);o.renderBufferDirect(X,null,ut,dt,N,V)}}}else if(K.visible){const it=L(N,K,ot,R);o.renderBufferDirect(X,null,ut,it,N,null)}}const yt=N.children;for(let ut=0,K=yt.length;ut<K;ut++)B(yt[ut],G,X,ot,R)}}function GT(o,e,i){const r=i.isWebGL2;function l(){let q=!1;const lt=new He;let St=null;const Ct=new He(0,0,0,0);return{setMask:function(Ot){St!==Ot&&!q&&(o.colorMask(Ot,Ot,Ot,Ot),St=Ot)},setLocked:function(Ot){q=Ot},setClear:function(Ot,$t,ee,Ye,In){In===!0&&(Ot*=Ye,$t*=Ye,ee*=Ye),lt.set(Ot,$t,ee,Ye),Ct.equals(lt)===!1&&(o.clearColor(Ot,$t,ee,Ye),Ct.copy(lt))},reset:function(){q=!1,St=null,Ct.set(-1,0,0,0)}}}function u(){let q=!1,lt=null,St=null,Ct=null;return{setTest:function(Ot){Ot?z(o.DEPTH_TEST):Pt(o.DEPTH_TEST)},setMask:function(Ot){lt!==Ot&&!q&&(o.depthMask(Ot),lt=Ot)},setFunc:function(Ot){if(St!==Ot){switch(Ot){case ty:o.depthFunc(o.NEVER);break;case ey:o.depthFunc(o.ALWAYS);break;case ny:o.depthFunc(o.LESS);break;case hh:o.depthFunc(o.LEQUAL);break;case iy:o.depthFunc(o.EQUAL);break;case ay:o.depthFunc(o.GEQUAL);break;case sy:o.depthFunc(o.GREATER);break;case ry:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}St=Ot}},setLocked:function(Ot){q=Ot},setClear:function(Ot){Ct!==Ot&&(o.clearDepth(Ot),Ct=Ot)},reset:function(){q=!1,lt=null,St=null,Ct=null}}}function d(){let q=!1,lt=null,St=null,Ct=null,Ot=null,$t=null,ee=null,Ye=null,In=null;return{setTest:function(we){q||(we?z(o.STENCIL_TEST):Pt(o.STENCIL_TEST))},setMask:function(we){lt!==we&&!q&&(o.stencilMask(we),lt=we)},setFunc:function(we,ke,Qn){(St!==we||Ct!==ke||Ot!==Qn)&&(o.stencilFunc(we,ke,Qn),St=we,Ct=ke,Ot=Qn)},setOp:function(we,ke,Qn){($t!==we||ee!==ke||Ye!==Qn)&&(o.stencilOp(we,ke,Qn),$t=we,ee=ke,Ye=Qn)},setLocked:function(we){q=we},setClear:function(we){In!==we&&(o.clearStencil(we),In=we)},reset:function(){q=!1,lt=null,St=null,Ct=null,Ot=null,$t=null,ee=null,Ye=null,In=null}}}const h=new l,m=new u,p=new d,_=new WeakMap,y=new WeakMap;let x={},M={},A=new WeakMap,w=[],E=null,g=!1,I=null,L=null,B=null,N=null,G=null,X=null,ot=null,R=!1,O=null,yt=null,ut=null,K=null,it=null;const P=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,V=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=V>=2);let dt=null,ht={};const D=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),W=new He().fromArray(D),Z=new He().fromArray(Y);function gt(q,lt,St,Ct){const Ot=new Uint8Array(4),$t=o.createTexture();o.bindTexture(q,$t),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ee=0;ee<St;ee++)r&&(q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY)?o.texImage3D(lt,0,o.RGBA,1,1,Ct,0,o.RGBA,o.UNSIGNED_BYTE,Ot):o.texImage2D(lt+ee,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ot);return $t}const bt={};bt[o.TEXTURE_2D]=gt(o.TEXTURE_2D,o.TEXTURE_2D,1),bt[o.TEXTURE_CUBE_MAP]=gt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(bt[o.TEXTURE_2D_ARRAY]=gt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),bt[o.TEXTURE_3D]=gt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),m.setClear(1),p.setClear(0),z(o.DEPTH_TEST),m.setFunc(hh),Fe(!1),Ve(Ag),z(o.CULL_FACE),Zt(Oa);function z(q){x[q]!==!0&&(o.enable(q),x[q]=!0)}function Pt(q){x[q]!==!1&&(o.disable(q),x[q]=!1)}function Ut(q,lt){return M[q]!==lt?(o.bindFramebuffer(q,lt),M[q]=lt,r&&(q===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=lt),q===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=lt)),!0):!1}function wt(q,lt){let St=w,Ct=!1;if(q)if(St=A.get(lt),St===void 0&&(St=[],A.set(lt,St)),q.isWebGLMultipleRenderTargets){const Ot=q.texture;if(St.length!==Ot.length||St[0]!==o.COLOR_ATTACHMENT0){for(let $t=0,ee=Ot.length;$t<ee;$t++)St[$t]=o.COLOR_ATTACHMENT0+$t;St.length=Ot.length,Ct=!0}}else St[0]!==o.COLOR_ATTACHMENT0&&(St[0]=o.COLOR_ATTACHMENT0,Ct=!0);else St[0]!==o.BACK&&(St[0]=o.BACK,Ct=!0);Ct&&(i.isWebGL2?o.drawBuffers(St):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(St))}function Wt(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const fe={[hr]:o.FUNC_ADD,[kx]:o.FUNC_SUBTRACT,[Xx]:o.FUNC_REVERSE_SUBTRACT};if(r)fe[Lg]=o.MIN,fe[Dg]=o.MAX;else{const q=e.get("EXT_blend_minmax");q!==null&&(fe[Lg]=q.MIN_EXT,fe[Dg]=q.MAX_EXT)}const kt={[Wx]:o.ZERO,[jx]:o.ONE,[qx]:o.SRC_COLOR,[Z0]:o.SRC_ALPHA,[$x]:o.SRC_ALPHA_SATURATE,[Qx]:o.DST_COLOR,[Zx]:o.DST_ALPHA,[Yx]:o.ONE_MINUS_SRC_COLOR,[K0]:o.ONE_MINUS_SRC_ALPHA,[Jx]:o.ONE_MINUS_DST_COLOR,[Kx]:o.ONE_MINUS_DST_ALPHA};function Zt(q,lt,St,Ct,Ot,$t,ee,Ye){if(q===Oa){g===!0&&(Pt(o.BLEND),g=!1);return}if(g===!1&&(z(o.BLEND),g=!0),q!==Vx){if(q!==I||Ye!==R){if((L!==hr||G!==hr)&&(o.blendEquation(o.FUNC_ADD),L=hr,G=hr),Ye)switch(q){case mr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wg:o.blendFunc(o.ONE,o.ONE);break;case Rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Cg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case mr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Cg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}B=null,N=null,X=null,ot=null,I=q,R=Ye}return}Ot=Ot||lt,$t=$t||St,ee=ee||Ct,(lt!==L||Ot!==G)&&(o.blendEquationSeparate(fe[lt],fe[Ot]),L=lt,G=Ot),(St!==B||Ct!==N||$t!==X||ee!==ot)&&(o.blendFuncSeparate(kt[St],kt[Ct],kt[$t],kt[ee]),B=St,N=Ct,X=$t,ot=ee),I=q,R=!1}function ze(q,lt){q.side===Li?Pt(o.CULL_FACE):z(o.CULL_FACE);let St=q.side===Bn;lt&&(St=!St),Fe(St),q.blending===mr&&q.transparent===!1?Zt(Oa):Zt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),m.setFunc(q.depthFunc),m.setTest(q.depthTest),m.setMask(q.depthWrite),h.setMask(q.colorWrite);const Ct=q.stencilWrite;p.setTest(Ct),Ct&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),me(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?z(o.SAMPLE_ALPHA_TO_COVERAGE):Pt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(q){O!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),O=q)}function Ve(q){q!==Fx?(z(o.CULL_FACE),q!==yt&&(q===Ag?o.cullFace(o.BACK):q===Gx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pt(o.CULL_FACE),yt=q}function Pe(q){q!==ut&&(U&&o.lineWidth(q),ut=q)}function me(q,lt,St){q?(z(o.POLYGON_OFFSET_FILL),(K!==lt||it!==St)&&(o.polygonOffset(lt,St),K=lt,it=St)):Pt(o.POLYGON_OFFSET_FILL)}function Ae(q){q?z(o.SCISSOR_TEST):Pt(o.SCISSOR_TEST)}function Nt(q){q===void 0&&(q=o.TEXTURE0+P-1),dt!==q&&(o.activeTexture(q),dt=q)}function T(q,lt,St){St===void 0&&(dt===null?St=o.TEXTURE0+P-1:St=dt);let Ct=ht[St];Ct===void 0&&(Ct={type:void 0,texture:void 0},ht[St]=Ct),(Ct.type!==q||Ct.texture!==lt)&&(dt!==St&&(o.activeTexture(St),dt=St),o.bindTexture(q,lt||bt[q]),Ct.type=q,Ct.texture=lt)}function S(){const q=ht[dt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function at(){try{o.compressedTexImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(){try{o.texSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{o.texSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{o.texStorage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Bt(){try{o.texStorage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function zt(){try{o.texImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(){try{o.texImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(q){W.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),W.copy(q))}function Tt(q){Z.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Z.copy(q))}function Et(q,lt){let St=y.get(lt);St===void 0&&(St=new WeakMap,y.set(lt,St));let Ct=St.get(q);Ct===void 0&&(Ct=o.getUniformBlockIndex(lt,q.name),St.set(q,Ct))}function Xt(q,lt){const Ct=y.get(lt).get(q);_.get(lt)!==Ct&&(o.uniformBlockBinding(lt,Ct,q.__bindingPointIndex),_.set(lt,Ct))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},dt=null,ht={},M={},A=new WeakMap,w=[],E=null,g=!1,I=null,L=null,B=null,N=null,G=null,X=null,ot=null,R=!1,O=null,yt=null,ut=null,K=null,it=null,W.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),h.reset(),m.reset(),p.reset()}return{buffers:{color:h,depth:m,stencil:p},enable:z,disable:Pt,bindFramebuffer:Ut,drawBuffers:wt,useProgram:Wt,setBlending:Zt,setMaterial:ze,setFlipSided:Fe,setCullFace:Ve,setLineWidth:Pe,setPolygonOffset:me,setScissorTest:Ae,activeTexture:Nt,bindTexture:T,unbindTexture:S,compressedTexImage2D:H,compressedTexImage3D:at,texImage2D:zt,texImage3D:Gt,updateUBOMapping:Et,uniformBlockBinding:Xt,texStorage2D:ft,texStorage3D:Bt,texSubImage2D:vt,texSubImage3D:At,compressedTexSubImage2D:Ft,compressedTexSubImage3D:Lt,scissor:Rt,viewport:Tt,reset:re}}function HT(o,e,i,r,l,u,d){const h=l.isWebGL2,m=l.maxTextures,p=l.maxCubemapSize,_=l.maxTextureSize,y=l.maxSamples,x=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new WeakMap;let w;const E=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(T,S){return g?new OffscreenCanvas(T,S):vc("canvas")}function L(T,S,H,at){let vt=1;if((T.width>at||T.height>at)&&(vt=at/Math.max(T.width,T.height)),vt<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const At=S?e_:Math.floor,Ft=At(vt*T.width),Lt=At(vt*T.height);w===void 0&&(w=I(Ft,Lt));const ft=H?I(Ft,Lt):w;return ft.width=Ft,ft.height=Lt,ft.getContext("2d").drawImage(T,0,0,Ft,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Ft+"x"+Lt+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function B(T){return vh(T.width)&&vh(T.height)}function N(T){return h?!1:T.wrapS!==Mi||T.wrapT!==Mi||T.minFilter!==An&&T.minFilter!==ui}function G(T,S){return T.generateMipmaps&&S&&T.minFilter!==An&&T.minFilter!==ui}function X(T){o.generateMipmap(T)}function ot(T,S,H,at,vt=!1){if(h===!1)return S;if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let At=S;return S===o.RED&&(H===o.FLOAT&&(At=o.R32F),H===o.HALF_FLOAT&&(At=o.R16F),H===o.UNSIGNED_BYTE&&(At=o.R8)),S===o.RG&&(H===o.FLOAT&&(At=o.RG32F),H===o.HALF_FLOAT&&(At=o.RG16F),H===o.UNSIGNED_BYTE&&(At=o.RG8)),S===o.RGBA&&(H===o.FLOAT&&(At=o.RGBA32F),H===o.HALF_FLOAT&&(At=o.RGBA16F),H===o.UNSIGNED_BYTE&&(At=at===se&&vt===!1?o.SRGB8_ALPHA8:o.RGBA8),H===o.UNSIGNED_SHORT_4_4_4_4&&(At=o.RGBA4),H===o.UNSIGNED_SHORT_5_5_5_1&&(At=o.RGB5_A1)),(At===o.R16F||At===o.R32F||At===o.RG16F||At===o.RG32F||At===o.RGBA16F||At===o.RGBA32F)&&e.get("EXT_color_buffer_float"),At}function R(T,S,H){return G(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==An&&T.minFilter!==ui?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function O(T){return T===An||T===Ug||T===Pf?o.NEAREST:o.LINEAR}function yt(T){const S=T.target;S.removeEventListener("dispose",yt),K(S),S.isVideoTexture&&A.delete(S)}function ut(T){const S=T.target;S.removeEventListener("dispose",ut),P(S)}function K(T){const S=r.get(T);if(S.__webglInit===void 0)return;const H=T.source,at=E.get(H);if(at){const vt=at[S.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&it(T),Object.keys(at).length===0&&E.delete(H)}r.remove(T)}function it(T){const S=r.get(T);o.deleteTexture(S.__webglTexture);const H=T.source,at=E.get(H);delete at[S.__cacheKey],d.memory.textures--}function P(T){const S=T.texture,H=r.get(T),at=r.get(S);if(at.__webglTexture!==void 0&&(o.deleteTexture(at.__webglTexture),d.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++)o.deleteFramebuffer(H.__webglFramebuffer[vt]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[vt]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let vt=0;vt<H.__webglColorRenderbuffer.length;vt++)H.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[vt]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let vt=0,At=S.length;vt<At;vt++){const Ft=r.get(S[vt]);Ft.__webglTexture&&(o.deleteTexture(Ft.__webglTexture),d.memory.textures--),r.remove(S[vt])}r.remove(S),r.remove(T)}let U=0;function V(){U=0}function k(){const T=U;return T>=m&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+m),U+=1,T}function dt(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function ht(T,S){const H=r.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const at=T.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(H,T,S);return}}i.bindTexture(o.TEXTURE_2D,H.__webglTexture,o.TEXTURE0+S)}function D(T,S){const H=r.get(T);if(T.version>0&&H.__version!==T.version){Pt(H,T,S);return}i.bindTexture(o.TEXTURE_2D_ARRAY,H.__webglTexture,o.TEXTURE0+S)}function Y(T,S){const H=r.get(T);if(T.version>0&&H.__version!==T.version){Pt(H,T,S);return}i.bindTexture(o.TEXTURE_3D,H.__webglTexture,o.TEXTURE0+S)}function W(T,S){const H=r.get(T);if(T.version>0&&H.__version!==T.version){Ut(H,T,S);return}i.bindTexture(o.TEXTURE_CUBE_MAP,H.__webglTexture,o.TEXTURE0+S)}const Z={[mh]:o.REPEAT,[Mi]:o.CLAMP_TO_EDGE,[gh]:o.MIRRORED_REPEAT},gt={[An]:o.NEAREST,[Ug]:o.NEAREST_MIPMAP_NEAREST,[Pf]:o.NEAREST_MIPMAP_LINEAR,[ui]:o.LINEAR,[py]:o.LINEAR_MIPMAP_NEAREST,[Lo]:o.LINEAR_MIPMAP_LINEAR};function bt(T,S,H){if(H?(o.texParameteri(T,o.TEXTURE_WRAP_S,Z[S.wrapS]),o.texParameteri(T,o.TEXTURE_WRAP_T,Z[S.wrapT]),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,Z[S.wrapR]),o.texParameteri(T,o.TEXTURE_MAG_FILTER,gt[S.magFilter]),o.texParameteri(T,o.TEXTURE_MIN_FILTER,gt[S.minFilter])):(o.texParameteri(T,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(T,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(S.wrapS!==Mi||S.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(T,o.TEXTURE_MAG_FILTER,O(S.magFilter)),o.texParameteri(T,o.TEXTURE_MIN_FILTER,O(S.minFilter)),S.minFilter!==An&&S.minFilter!==ui&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const at=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===An||S.minFilter!==Pf&&S.minFilter!==Lo||S.type===os&&e.has("OES_texture_float_linear")===!1||h===!1&&S.type===Do&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||r.get(S).__currentAnisotropy)&&(o.texParameterf(T,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy)}}function z(T,S){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",yt));const at=S.source;let vt=E.get(at);vt===void 0&&(vt={},E.set(at,vt));const At=dt(S);if(At!==T.__cacheKey){vt[At]===void 0&&(vt[At]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,H=!0),vt[At].usedTimes++;const Ft=vt[T.__cacheKey];Ft!==void 0&&(vt[T.__cacheKey].usedTimes--,Ft.usedTimes===0&&it(S)),T.__cacheKey=At,T.__webglTexture=vt[At].texture}return H}function Pt(T,S,H){let at=o.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=o.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=o.TEXTURE_3D);const vt=z(T,S),At=S.source;i.bindTexture(at,T.__webglTexture,o.TEXTURE0+H);const Ft=r.get(At);if(At.version!==Ft.__version||vt===!0){i.activeTexture(o.TEXTURE0+H),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const Lt=N(S)&&B(S.image)===!1;let ft=L(S.image,Lt,!1,_);ft=Nt(S,ft);const Bt=B(ft)||h,zt=u.convert(S.format,S.colorSpace);let Gt=u.convert(S.type),Rt=ot(S.internalFormat,zt,Gt,S.colorSpace);bt(at,S,Bt);let Tt;const Et=S.mipmaps,Xt=h&&S.isVideoTexture!==!0,re=Ft.__version===void 0||vt===!0,q=R(S,ft,Bt);if(S.isDepthTexture)Rt=o.DEPTH_COMPONENT,h?S.type===os?Rt=o.DEPTH_COMPONENT32F:S.type===rs?Rt=o.DEPTH_COMPONENT24:S.type===gr?Rt=o.DEPTH24_STENCIL8:Rt=o.DEPTH_COMPONENT16:S.type===os&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ls&&Rt===o.DEPTH_COMPONENT&&S.type!==J0&&S.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=rs,Gt=u.convert(S.type)),S.format===yr&&Rt===o.DEPTH_COMPONENT&&(Rt=o.DEPTH_STENCIL,S.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=gr,Gt=u.convert(S.type))),re&&(Xt?i.texStorage2D(o.TEXTURE_2D,1,Rt,ft.width,ft.height):i.texImage2D(o.TEXTURE_2D,0,Rt,ft.width,ft.height,0,zt,Gt,null));else if(S.isDataTexture)if(Et.length>0&&Bt){Xt&&re&&i.texStorage2D(o.TEXTURE_2D,q,Rt,Et[0].width,Et[0].height);for(let lt=0,St=Et.length;lt<St;lt++)Tt=Et[lt],Xt?i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Tt.width,Tt.height,zt,Gt,Tt.data):i.texImage2D(o.TEXTURE_2D,lt,Rt,Tt.width,Tt.height,0,zt,Gt,Tt.data);S.generateMipmaps=!1}else Xt?(re&&i.texStorage2D(o.TEXTURE_2D,q,Rt,ft.width,ft.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,ft.width,ft.height,zt,Gt,ft.data)):i.texImage2D(o.TEXTURE_2D,0,Rt,ft.width,ft.height,0,zt,Gt,ft.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,q,Rt,Et[0].width,Et[0].height,ft.depth);for(let lt=0,St=Et.length;lt<St;lt++)Tt=Et[lt],S.format!==Si?zt!==null?Xt?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Tt.width,Tt.height,ft.depth,zt,Tt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,Rt,Tt.width,Tt.height,ft.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Tt.width,Tt.height,ft.depth,zt,Gt,Tt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,Rt,Tt.width,Tt.height,ft.depth,0,zt,Gt,Tt.data)}else{Xt&&re&&i.texStorage2D(o.TEXTURE_2D,q,Rt,Et[0].width,Et[0].height);for(let lt=0,St=Et.length;lt<St;lt++)Tt=Et[lt],S.format!==Si?zt!==null?Xt?i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Tt.width,Tt.height,zt,Tt.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,Rt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Tt.width,Tt.height,zt,Gt,Tt.data):i.texImage2D(o.TEXTURE_2D,lt,Rt,Tt.width,Tt.height,0,zt,Gt,Tt.data)}else if(S.isDataArrayTexture)Xt?(re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,q,Rt,ft.width,ft.height,ft.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,zt,Gt,ft.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Rt,ft.width,ft.height,ft.depth,0,zt,Gt,ft.data);else if(S.isData3DTexture)Xt?(re&&i.texStorage3D(o.TEXTURE_3D,q,Rt,ft.width,ft.height,ft.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,zt,Gt,ft.data)):i.texImage3D(o.TEXTURE_3D,0,Rt,ft.width,ft.height,ft.depth,0,zt,Gt,ft.data);else if(S.isFramebufferTexture){if(re)if(Xt)i.texStorage2D(o.TEXTURE_2D,q,Rt,ft.width,ft.height);else{let lt=ft.width,St=ft.height;for(let Ct=0;Ct<q;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Rt,lt,St,0,zt,Gt,null),lt>>=1,St>>=1}}else if(Et.length>0&&Bt){Xt&&re&&i.texStorage2D(o.TEXTURE_2D,q,Rt,Et[0].width,Et[0].height);for(let lt=0,St=Et.length;lt<St;lt++)Tt=Et[lt],Xt?i.texSubImage2D(o.TEXTURE_2D,lt,0,0,zt,Gt,Tt):i.texImage2D(o.TEXTURE_2D,lt,Rt,zt,Gt,Tt);S.generateMipmaps=!1}else Xt?(re&&i.texStorage2D(o.TEXTURE_2D,q,Rt,ft.width,ft.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,Gt,ft)):i.texImage2D(o.TEXTURE_2D,0,Rt,zt,Gt,ft);G(S,Bt)&&X(at),Ft.__version=At.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ut(T,S,H){if(S.image.length!==6)return;const at=z(T,S),vt=S.source;i.bindTexture(o.TEXTURE_CUBE_MAP,T.__webglTexture,o.TEXTURE0+H);const At=r.get(vt);if(vt.version!==At.__version||at===!0){i.activeTexture(o.TEXTURE0+H),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const Ft=S.isCompressedTexture||S.image[0].isCompressedTexture,Lt=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let lt=0;lt<6;lt++)!Ft&&!Lt?ft[lt]=L(S.image[lt],!1,!0,p):ft[lt]=Lt?S.image[lt].image:S.image[lt],ft[lt]=Nt(S,ft[lt]);const Bt=ft[0],zt=B(Bt)||h,Gt=u.convert(S.format,S.colorSpace),Rt=u.convert(S.type),Tt=ot(S.internalFormat,Gt,Rt,S.colorSpace),Et=h&&S.isVideoTexture!==!0,Xt=At.__version===void 0||at===!0;let re=R(S,Bt,zt);bt(o.TEXTURE_CUBE_MAP,S,zt);let q;if(Ft){Et&&Xt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,re,Tt,Bt.width,Bt.height);for(let lt=0;lt<6;lt++){q=ft[lt].mipmaps;for(let St=0;St<q.length;St++){const Ct=q[St];S.format!==Si?Gt!==null?Et?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Ct.width,Ct.height,Gt,Ct.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,Tt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Ct.width,Ct.height,Gt,Rt,Ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,Tt,Ct.width,Ct.height,0,Gt,Rt,Ct.data)}}}else{q=S.mipmaps,Et&&Xt&&(q.length>0&&re++,i.texStorage2D(o.TEXTURE_CUBE_MAP,re,Tt,ft[0].width,ft[0].height));for(let lt=0;lt<6;lt++)if(Lt){Et?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,ft[lt].width,ft[lt].height,Gt,Rt,ft[lt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Tt,ft[lt].width,ft[lt].height,0,Gt,Rt,ft[lt].data);for(let St=0;St<q.length;St++){const Ot=q[St].image[lt].image;Et?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,Ot.width,Ot.height,Gt,Rt,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,Tt,Ot.width,Ot.height,0,Gt,Rt,Ot.data)}}else{Et?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Gt,Rt,ft[lt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Tt,Gt,Rt,ft[lt]);for(let St=0;St<q.length;St++){const Ct=q[St];Et?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,Gt,Rt,Ct.image[lt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,Tt,Gt,Rt,Ct.image[lt])}}}G(S,zt)&&X(o.TEXTURE_CUBE_MAP),At.__version=vt.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function wt(T,S,H,at,vt){const At=u.convert(H.format,H.colorSpace),Ft=u.convert(H.type),Lt=ot(H.internalFormat,At,Ft,H.colorSpace);r.get(S).__hasExternalTextures||(vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,Lt,S.width,S.height,S.depth,0,At,Ft,null):i.texImage2D(vt,0,Lt,S.width,S.height,0,At,Ft,null)),i.bindFramebuffer(o.FRAMEBUFFER,T),me(S)?x.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,at,vt,r.get(H).__webglTexture,0,Pe(S)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,at,vt,r.get(H).__webglTexture,0),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Wt(T,S,H){if(o.bindRenderbuffer(o.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let at=o.DEPTH_COMPONENT16;if(H||me(S)){const vt=S.depthTexture;vt&&vt.isDepthTexture&&(vt.type===os?at=o.DEPTH_COMPONENT32F:vt.type===rs&&(at=o.DEPTH_COMPONENT24));const At=Pe(S);me(S)?x.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,at,S.width,S.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,At,at,S.width,S.height)}else o.renderbufferStorage(o.RENDERBUFFER,at,S.width,S.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const at=Pe(S);H&&me(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,at,o.DEPTH24_STENCIL8,S.width,S.height):me(S)?x.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,at,o.DEPTH24_STENCIL8,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,S.width,S.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,T)}else{const at=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let vt=0;vt<at.length;vt++){const At=at[vt],Ft=u.convert(At.format,At.colorSpace),Lt=u.convert(At.type),ft=ot(At.internalFormat,Ft,Lt,At.colorSpace),Bt=Pe(S);H&&me(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,ft,S.width,S.height):me(S)?x.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Bt,ft,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,ft,S.width,S.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function fe(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ht(S.depthTexture,0);const at=r.get(S.depthTexture).__webglTexture,vt=Pe(S);if(S.depthTexture.format===ls)me(S)?x.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,at,0,vt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,at,0);else if(S.depthTexture.format===yr)me(S)?x.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,at,0,vt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function kt(T){const S=r.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");fe(S.__webglFramebuffer,T)}else if(H){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)i.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]=o.createRenderbuffer(),Wt(S.__webglDepthbuffer[at],T,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Wt(S.__webglDepthbuffer,T,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(T,S,H){const at=r.get(T);S!==void 0&&wt(at.__webglFramebuffer,T,T.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D),H!==void 0&&kt(T)}function ze(T){const S=T.texture,H=r.get(T),at=r.get(S);T.addEventListener("dispose",ut),T.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture()),at.__version=S.version,d.memory.textures++);const vt=T.isWebGLCubeRenderTarget===!0,At=T.isWebGLMultipleRenderTargets===!0,Ft=B(T)||h;if(vt){H.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)H.__webglFramebuffer[Lt]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),At)if(l.drawBuffers){const Lt=T.texture;for(let ft=0,Bt=Lt.length;ft<Bt;ft++){const zt=r.get(Lt[ft]);zt.__webglTexture===void 0&&(zt.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&T.samples>0&&me(T)===!1){const Lt=At?S:[S];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ft=0;ft<Lt.length;ft++){const Bt=Lt[ft];H.__webglColorRenderbuffer[ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,H.__webglColorRenderbuffer[ft]);const zt=u.convert(Bt.format,Bt.colorSpace),Gt=u.convert(Bt.type),Rt=ot(Bt.internalFormat,zt,Gt,Bt.colorSpace,T.isXRRenderTarget===!0),Tt=Pe(T);o.renderbufferStorageMultisample(o.RENDERBUFFER,Tt,Rt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,H.__webglColorRenderbuffer[ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Wt(H.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(vt){i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture),bt(o.TEXTURE_CUBE_MAP,S,Ft);for(let Lt=0;Lt<6;Lt++)wt(H.__webglFramebuffer[Lt],T,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt);G(S,Ft)&&X(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(At){const Lt=T.texture;for(let ft=0,Bt=Lt.length;ft<Bt;ft++){const zt=Lt[ft],Gt=r.get(zt);i.bindTexture(o.TEXTURE_2D,Gt.__webglTexture),bt(o.TEXTURE_2D,zt,Ft),wt(H.__webglFramebuffer,T,zt,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D),G(zt,Ft)&&X(o.TEXTURE_2D)}i.unbindTexture()}else{let Lt=o.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(h?Lt=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Lt,at.__webglTexture),bt(Lt,S,Ft),wt(H.__webglFramebuffer,T,S,o.COLOR_ATTACHMENT0,Lt),G(S,Ft)&&X(Lt),i.unbindTexture()}T.depthBuffer&&kt(T)}function Fe(T){const S=B(T)||h,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let at=0,vt=H.length;at<vt;at++){const At=H[at];if(G(At,S)){const Ft=T.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Lt=r.get(At).__webglTexture;i.bindTexture(Ft,Lt),X(Ft),i.unbindTexture()}}}function Ve(T){if(h&&T.samples>0&&me(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,at=T.height;let vt=o.COLOR_BUFFER_BIT;const At=[],Ft=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=r.get(T),ft=T.isWebGLMultipleRenderTargets===!0;if(ft)for(let Bt=0;Bt<S.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Bt=0;Bt<S.length;Bt++){At.push(o.COLOR_ATTACHMENT0+Bt),T.depthBuffer&&At.push(Ft);const zt=Lt.__ignoreDepthValues!==void 0?Lt.__ignoreDepthValues:!1;if(zt===!1&&(T.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),T.stencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),ft&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Bt]),zt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ft]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ft])),ft){const Gt=r.get(S[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Gt,0)}o.blitFramebuffer(0,0,H,at,0,0,H,at,vt,o.NEAREST),M&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,At)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ft)for(let Bt=0;Bt<S.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Bt]);const zt=r.get(S[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,zt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}}function Pe(T){return Math.min(y,T.samples)}function me(T){const S=r.get(T);return h&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(T){const S=d.render.frame;A.get(T)!==S&&(A.set(T,S),T.update())}function Nt(T,S){const H=T.colorSpace,at=T.format,vt=T.type;return T.isCompressedTexture===!0||T.format===_h||H!==Ni&&H!==us&&(H===se?h===!1?e.has("EXT_sRGB")===!0&&at===Si?(T.format=_h,T.minFilter=ui,T.generateMipmaps=!1):S=i_.sRGBToLinear(S):(at!==Si||vt!==fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=ht,this.setTexture2DArray=D,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=me}function VT(o,e,i){const r=i.isWebGL2;function l(u,d=us){let h;if(u===fs)return o.UNSIGNED_BYTE;if(u===vy)return o.UNSIGNED_SHORT_4_4_4_4;if(u===xy)return o.UNSIGNED_SHORT_5_5_5_1;if(u===my)return o.BYTE;if(u===gy)return o.SHORT;if(u===J0)return o.UNSIGNED_SHORT;if(u===_y)return o.INT;if(u===rs)return o.UNSIGNED_INT;if(u===os)return o.FLOAT;if(u===Do)return r?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===yy)return o.ALPHA;if(u===Si)return o.RGBA;if(u===My)return o.LUMINANCE;if(u===Sy)return o.LUMINANCE_ALPHA;if(u===ls)return o.DEPTH_COMPONENT;if(u===yr)return o.DEPTH_STENCIL;if(u===_h)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===Ey)return o.RED;if(u===by)return o.RED_INTEGER;if(u===Ty)return o.RG;if(u===Ay)return o.RG_INTEGER;if(u===wy)return o.RGBA_INTEGER;if(u===Bf||u===If||u===Ff||u===Gf)if(d===se)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===Bf)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Ff)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===Bf)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Ff)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===Ng||u===Og||u===zg||u===Pg)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===Ng)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Og)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===zg)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Pg)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===Ry)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Bg||u===Ig)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===Bg)return d===se?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===Ig)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Fg||u===Gg||u===Hg||u===Vg||u===kg||u===Xg||u===Wg||u===jg||u===qg||u===Yg||u===Zg||u===Kg||u===Qg||u===Jg)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===Fg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Gg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Hg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Vg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===kg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Xg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Wg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===jg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===qg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Yg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Zg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Kg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Qg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Jg)return d===se?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Hf)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===Hf)return d===se?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(u===Cy||u===$g||u===t0||u===e0)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===Hf)return h.COMPRESSED_RED_RGTC1_EXT;if(u===$g)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===t0)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===e0)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===gr?r?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class kT extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xi extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XT={type:"move"};class ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const w of e.hand.values()){const E=i.getJointPose(w,r),g=this._getHandJoint(p,w);E!==null&&(g.matrix.fromArray(E.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=E.radius),g.visible=E!==null}const _=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],x=_.position.distanceTo(y.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(XT)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new xi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class WT extends Zn{constructor(e,i,r,l,u,d,h,m,p,_){if(_=_!==void 0?_:ls,_!==ls&&_!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===ls&&(r=rs),r===void 0&&_===yr&&(r=gr),super(null,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:An,this.minFilter=m!==void 0?m:An,this.flipY=!1,this.generateMipmaps=!1}}class jT extends Sr{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,y=null,x=null,M=null,A=null;const w=i.getContextAttributes();let E=null,g=null;const I=[],L=[],B=new Set,N=new Map,G=new Yn;G.layers.enable(1),G.viewport=new He;const X=new Yn;X.layers.enable(2),X.viewport=new He;const ot=[G,X],R=new kT;R.layers.enable(1),R.layers.enable(2);let O=null,yt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=I[W];return Z===void 0&&(Z=new ch,I[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=I[W];return Z===void 0&&(Z=new ch,I[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=I[W];return Z===void 0&&(Z=new ch,I[W]=Z),Z.getHandSpace()};function ut(W){const Z=L.indexOf(W.inputSource);if(Z===-1)return;const gt=I[Z];gt!==void 0&&(gt.update(W.inputSource,W.frame,p||d),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",K),l.removeEventListener("inputsourceschange",it);for(let W=0;W<I.length;W++){const Z=L[W];Z!==null&&(L[W]=null,I[W].disconnect(Z))}O=null,yt=null,e.setRenderTarget(E),M=null,x=null,y=null,l=null,g=null,Y.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(E=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",K),l.addEventListener("inputsourceschange",it),w.xrCompatible!==!0&&await i.makeXRCompatible(),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:l.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Z),l.updateRenderState({baseLayer:M}),g=new hs(M.framebufferWidth,M.framebufferHeight,{format:Si,type:fs,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let Z=null,gt=null,bt=null;w.depth&&(bt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Z=w.stencil?yr:ls,gt=w.stencil?gr:rs);const z={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:u};y=new XRWebGLBinding(l,i),x=y.createProjectionLayer(z),l.updateRenderState({layers:[x]}),g=new hs(x.textureWidth,x.textureHeight,{format:Si,type:fs,depthTexture:new WT(x.textureWidth,x.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0});const Pt=e.properties.get(g);Pt.__ignoreDepthValues=x.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Y.setContext(l),Y.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function it(W){for(let Z=0;Z<W.removed.length;Z++){const gt=W.removed[Z],bt=L.indexOf(gt);bt>=0&&(L[bt]=null,I[bt].disconnect(gt))}for(let Z=0;Z<W.added.length;Z++){const gt=W.added[Z];let bt=L.indexOf(gt);if(bt===-1){for(let Pt=0;Pt<I.length;Pt++)if(Pt>=L.length){L.push(gt),bt=Pt;break}else if(L[Pt]===null){L[Pt]=gt,bt=Pt;break}if(bt===-1)break}const z=I[bt];z&&z.connect(gt)}}const P=new $,U=new $;function V(W,Z,gt){P.setFromMatrixPosition(Z.matrixWorld),U.setFromMatrixPosition(gt.matrixWorld);const bt=P.distanceTo(U),z=Z.projectionMatrix.elements,Pt=gt.projectionMatrix.elements,Ut=z[14]/(z[10]-1),wt=z[14]/(z[10]+1),Wt=(z[9]+1)/z[5],fe=(z[9]-1)/z[5],kt=(z[8]-1)/z[0],Zt=(Pt[8]+1)/Pt[0],ze=Ut*kt,Fe=Ut*Zt,Ve=bt/(-kt+Zt),Pe=Ve*-kt;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Pe),W.translateZ(Ve),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const me=Ut+Ve,Ae=wt+Ve,Nt=ze-Pe,T=Fe+(bt-Pe),S=Wt*wt/Ae*me,H=fe*wt/Ae*me;W.projectionMatrix.makePerspective(Nt,T,S,H,me,Ae),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function k(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;R.near=X.near=G.near=W.near,R.far=X.far=G.far=W.far,(O!==R.near||yt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,yt=R.far);const Z=W.parent,gt=R.cameras;k(R,Z);for(let bt=0;bt<gt.length;bt++)k(gt[bt],Z);gt.length===2?V(R,G,X):R.projectionMatrix.copy(G.projectionMatrix),dt(W,R,Z)};function dt(W,Z,gt){gt===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const bt=W.children;for(let z=0,Pt=bt.length;z<Pt;z++)bt[z].updateMatrixWorld(!0);W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Uo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(W){m=W,x!==null&&(x.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.getPlanes=function(){return B};let ht=null;function D(W,Z){if(_=Z.getViewerPose(p||d),A=Z,_!==null){const gt=_.views;M!==null&&(e.setRenderTargetFramebuffer(g,M.framebuffer),e.setRenderTarget(g));let bt=!1;gt.length!==R.cameras.length&&(R.cameras.length=0,bt=!0);for(let z=0;z<gt.length;z++){const Pt=gt[z];let Ut=null;if(M!==null)Ut=M.getViewport(Pt);else{const Wt=y.getViewSubImage(x,Pt);Ut=Wt.viewport,z===0&&(e.setRenderTargetTextures(g,Wt.colorTexture,x.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(g))}let wt=ot[z];wt===void 0&&(wt=new Yn,wt.layers.enable(z),wt.viewport=new He,ot[z]=wt),wt.matrix.fromArray(Pt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Pt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),z===0&&(R.matrix.copy(wt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),bt===!0&&R.cameras.push(wt)}}for(let gt=0;gt<I.length;gt++){const bt=L[gt],z=I[gt];bt!==null&&z!==void 0&&z.update(bt,Z,p||d)}if(ht&&ht(W,Z),Z.detectedPlanes){r.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let gt=null;for(const bt of B)Z.detectedPlanes.has(bt)||(gt===null&&(gt=[]),gt.push(bt));if(gt!==null)for(const bt of gt)B.delete(bt),N.delete(bt),r.dispatchEvent({type:"planeremoved",data:bt});for(const bt of Z.detectedPlanes)if(!B.has(bt))B.add(bt),N.set(bt,Z.lastChangedTime),r.dispatchEvent({type:"planeadded",data:bt});else{const z=N.get(bt);bt.lastChangedTime>z&&(N.set(bt,bt.lastChangedTime),r.dispatchEvent({type:"planechanged",data:bt}))}}A=null}const Y=new d_;Y.setAnimationLoop(D),this.setAnimationLoop=function(W){ht=W},this.dispose=function(){}}}function qT(o,e){function i(E,g){E.matrixAutoUpdate===!0&&E.updateMatrix(),g.value.copy(E.matrix)}function r(E,g){g.color.getRGB(E.fogColor.value,u_(o)),g.isFog?(E.fogNear.value=g.near,E.fogFar.value=g.far):g.isFogExp2&&(E.fogDensity.value=g.density)}function l(E,g,I,L,B){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(E,g):g.isMeshToonMaterial?(u(E,g),y(E,g)):g.isMeshPhongMaterial?(u(E,g),_(E,g)):g.isMeshStandardMaterial?(u(E,g),x(E,g),g.isMeshPhysicalMaterial&&M(E,g,B)):g.isMeshMatcapMaterial?(u(E,g),A(E,g)):g.isMeshDepthMaterial?u(E,g):g.isMeshDistanceMaterial?(u(E,g),w(E,g)):g.isMeshNormalMaterial?u(E,g):g.isLineBasicMaterial?(d(E,g),g.isLineDashedMaterial&&h(E,g)):g.isPointsMaterial?m(E,g,I,L):g.isSpriteMaterial?p(E,g):g.isShadowMaterial?(E.color.value.copy(g.color),E.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(E,g){E.opacity.value=g.opacity,g.color&&E.diffuse.value.copy(g.color),g.emissive&&E.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(E.map.value=g.map,i(g.map,E.mapTransform)),g.alphaMap&&(E.alphaMap.value=g.alphaMap,i(g.alphaMap,E.alphaMapTransform)),g.bumpMap&&(E.bumpMap.value=g.bumpMap,i(g.bumpMap,E.bumpMapTransform),E.bumpScale.value=g.bumpScale,g.side===Bn&&(E.bumpScale.value*=-1)),g.normalMap&&(E.normalMap.value=g.normalMap,i(g.normalMap,E.normalMapTransform),E.normalScale.value.copy(g.normalScale),g.side===Bn&&E.normalScale.value.negate()),g.displacementMap&&(E.displacementMap.value=g.displacementMap,i(g.displacementMap,E.displacementMapTransform),E.displacementScale.value=g.displacementScale,E.displacementBias.value=g.displacementBias),g.emissiveMap&&(E.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,E.emissiveMapTransform)),g.specularMap&&(E.specularMap.value=g.specularMap,i(g.specularMap,E.specularMapTransform)),g.alphaTest>0&&(E.alphaTest.value=g.alphaTest);const I=e.get(g).envMap;if(I&&(E.envMap.value=I,E.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=g.reflectivity,E.ior.value=g.ior,E.refractionRatio.value=g.refractionRatio),g.lightMap){E.lightMap.value=g.lightMap;const L=o.useLegacyLights===!0?Math.PI:1;E.lightMapIntensity.value=g.lightMapIntensity*L,i(g.lightMap,E.lightMapTransform)}g.aoMap&&(E.aoMap.value=g.aoMap,E.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,E.aoMapTransform))}function d(E,g){E.diffuse.value.copy(g.color),E.opacity.value=g.opacity,g.map&&(E.map.value=g.map,i(g.map,E.mapTransform))}function h(E,g){E.dashSize.value=g.dashSize,E.totalSize.value=g.dashSize+g.gapSize,E.scale.value=g.scale}function m(E,g,I,L){E.diffuse.value.copy(g.color),E.opacity.value=g.opacity,E.size.value=g.size*I,E.scale.value=L*.5,g.map&&(E.map.value=g.map,i(g.map,E.uvTransform)),g.alphaMap&&(E.alphaMap.value=g.alphaMap),g.alphaTest>0&&(E.alphaTest.value=g.alphaTest)}function p(E,g){E.diffuse.value.copy(g.color),E.opacity.value=g.opacity,E.rotation.value=g.rotation,g.map&&(E.map.value=g.map,i(g.map,E.mapTransform)),g.alphaMap&&(E.alphaMap.value=g.alphaMap),g.alphaTest>0&&(E.alphaTest.value=g.alphaTest)}function _(E,g){E.specular.value.copy(g.specular),E.shininess.value=Math.max(g.shininess,1e-4)}function y(E,g){g.gradientMap&&(E.gradientMap.value=g.gradientMap)}function x(E,g){E.metalness.value=g.metalness,g.metalnessMap&&(E.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,E.metalnessMapTransform)),E.roughness.value=g.roughness,g.roughnessMap&&(E.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,E.roughnessMapTransform)),e.get(g).envMap&&(E.envMapIntensity.value=g.envMapIntensity)}function M(E,g,I){E.ior.value=g.ior,g.sheen>0&&(E.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),E.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(E.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,E.sheenColorMapTransform)),g.sheenRoughnessMap&&(E.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,E.sheenRoughnessMapTransform))),g.clearcoat>0&&(E.clearcoat.value=g.clearcoat,E.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(E.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,E.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(E.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&E.clearcoatNormalScale.value.negate())),g.iridescence>0&&(E.iridescence.value=g.iridescence,E.iridescenceIOR.value=g.iridescenceIOR,E.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(E.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,E.iridescenceMapTransform)),g.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),g.transmission>0&&(E.transmission.value=g.transmission,E.transmissionSamplerMap.value=I.texture,E.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(E.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,E.transmissionMapTransform)),E.thickness.value=g.thickness,g.thicknessMap&&(E.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=g.attenuationDistance,E.attenuationColor.value.copy(g.attenuationColor)),E.specularIntensity.value=g.specularIntensity,E.specularColor.value.copy(g.specularColor),g.specularColorMap&&(E.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,E.specularColorMapTransform)),g.specularIntensityMap&&(E.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,E.specularIntensityMapTransform))}function A(E,g){g.matcap&&(E.matcap.value=g.matcap)}function w(E,g){const I=e.get(g).light;E.referencePosition.value.setFromMatrixPosition(I.matrixWorld),E.nearDistance.value=I.shadow.camera.near,E.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function YT(o,e,i,r){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(I,L){const B=L.program;r.uniformBlockBinding(I,B)}function p(I,L){let B=l[I.id];B===void 0&&(A(I),B=_(I),l[I.id]=B,I.addEventListener("dispose",E));const N=L.program;r.updateUBOMapping(I,N);const G=e.render.frame;u[I.id]!==G&&(x(I),u[I.id]=G)}function _(I){const L=y();I.__bindingPointIndex=L;const B=o.createBuffer(),N=I.__size,G=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,N,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,B),B}function y(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const L=l[I.id],B=I.uniforms,N=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let G=0,X=B.length;G<X;G++){const ot=B[G];if(M(ot,G,N)===!0){const R=ot.__offset,O=Array.isArray(ot.value)?ot.value:[ot.value];let yt=0;for(let ut=0;ut<O.length;ut++){const K=O[ut],it=w(K);typeof K=="number"?(ot.__data[0]=K,o.bufferSubData(o.UNIFORM_BUFFER,R+yt,ot.__data)):K.isMatrix3?(ot.__data[0]=K.elements[0],ot.__data[1]=K.elements[1],ot.__data[2]=K.elements[2],ot.__data[3]=K.elements[0],ot.__data[4]=K.elements[3],ot.__data[5]=K.elements[4],ot.__data[6]=K.elements[5],ot.__data[7]=K.elements[0],ot.__data[8]=K.elements[6],ot.__data[9]=K.elements[7],ot.__data[10]=K.elements[8],ot.__data[11]=K.elements[0]):(K.toArray(ot.__data,yt),yt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,R,ot.__data)}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,L,B){const N=I.value;if(B[L]===void 0){if(typeof N=="number")B[L]=N;else{const G=Array.isArray(N)?N:[N],X=[];for(let ot=0;ot<G.length;ot++)X.push(G[ot].clone());B[L]=X}return!0}else if(typeof N=="number"){if(B[L]!==N)return B[L]=N,!0}else{const G=Array.isArray(B[L])?B[L]:[B[L]],X=Array.isArray(N)?N:[N];for(let ot=0;ot<G.length;ot++){const R=G[ot];if(R.equals(X[ot])===!1)return R.copy(X[ot]),!0}}return!1}function A(I){const L=I.uniforms;let B=0;const N=16;let G=0;for(let X=0,ot=L.length;X<ot;X++){const R=L[X],O={boundary:0,storage:0},yt=Array.isArray(R.value)?R.value:[R.value];for(let ut=0,K=yt.length;ut<K;ut++){const it=yt[ut],P=w(it);O.boundary+=P.boundary,O.storage+=P.storage}if(R.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=B,X>0){G=B%N;const ut=N-G;G!==0&&ut-O.boundary<0&&(B+=N-G,R.__offset=B)}B+=O.storage}return G=B%N,G>0&&(B+=N-G),I.__size=B,I.__cache={},this}function w(I){const L={boundary:0,storage:0};return typeof I=="number"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function E(I){const L=I.target;L.removeEventListener("dispose",E);const B=d.indexOf(L.__bindingPointIndex);d.splice(B,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function g(){for(const I in l)o.deleteBuffer(l[I]);d=[],l={},u={}}return{bind:m,update:p,dispose:g}}function ZT(){const o=vc("canvas");return o.style.display="block",o}class x_{constructor(e={}){const{canvas:i=ZT(),context:r=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;r!==null?x=r.getContextAttributes().alpha:x=d;let M=null,A=null;const w=[],E=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=se,this.useLegacyLights=!0,this.toneMapping=Di,this.toneMappingExposure=1;const g=this;let I=!1,L=0,B=0,N=null,G=-1,X=null;const ot=new He,R=new He;let O=null,yt=i.width,ut=i.height,K=1,it=null,P=null;const U=new He(0,0,yt,ut),V=new He(0,0,yt,ut);let k=!1;const dt=new Rh;let ht=!1,D=!1,Y=null;const W=new sn,Z=new $,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return N===null?K:1}let z=r;function Pt(C,rt){for(let pt=0;pt<C.length;pt++){const J=C[pt],mt=i.getContext(J,rt);if(mt!==null)return mt}return null}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Sh}`),i.addEventListener("webglcontextlost",Tt,!1),i.addEventListener("webglcontextrestored",Et,!1),i.addEventListener("webglcontextcreationerror",Xt,!1),z===null){const rt=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&rt.shift(),z=Pt(rt,C),z===null)throw Pt(rt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ut,wt,Wt,fe,kt,Zt,ze,Fe,Ve,Pe,me,Ae,Nt,T,S,H,at,vt,At,Ft,Lt,ft,Bt,zt;function Gt(){Ut=new rb(z),wt=new tb(z,Ut,e),Ut.init(wt),ft=new VT(z,Ut,wt),Wt=new GT(z,Ut,wt),fe=new cb(z),kt=new AT,Zt=new HT(z,Ut,Wt,kt,wt,ft,fe),ze=new nb(g),Fe=new sb(g),Ve=new MM(z,wt),Bt=new JE(z,Ut,Ve,wt),Pe=new ob(z,Ve,fe,Bt),me=new db(z,Pe,Ve,fe),At=new hb(z,wt,Zt),H=new eb(kt),Ae=new TT(g,ze,Fe,Ut,wt,Bt,H),Nt=new qT(g,kt),T=new RT,S=new OT(Ut,wt),vt=new QE(g,ze,Fe,Wt,me,x,m),at=new FT(g,me,wt),zt=new YT(z,fe,wt,Wt),Ft=new $E(z,Ut,fe,wt),Lt=new lb(z,Ut,fe,wt),fe.programs=Ae.programs,g.capabilities=wt,g.extensions=Ut,g.properties=kt,g.renderLists=T,g.shadowMap=at,g.state=Wt,g.info=fe}Gt();const Rt=new jT(g,z);this.xr=Rt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(yt,ut,!1))},this.getSize=function(C){return C.set(yt,ut)},this.setSize=function(C,rt,pt=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}yt=C,ut=rt,i.width=Math.floor(C*K),i.height=Math.floor(rt*K),pt===!0&&(i.style.width=C+"px",i.style.height=rt+"px"),this.setViewport(0,0,C,rt)},this.getDrawingBufferSize=function(C){return C.set(yt*K,ut*K).floor()},this.setDrawingBufferSize=function(C,rt,pt){yt=C,ut=rt,K=pt,i.width=Math.floor(C*pt),i.height=Math.floor(rt*pt),this.setViewport(0,0,C,rt)},this.getCurrentViewport=function(C){return C.copy(ot)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,rt,pt,J){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,rt,pt,J),Wt.viewport(ot.copy(U).multiplyScalar(K).floor())},this.getScissor=function(C){return C.copy(V)},this.setScissor=function(C,rt,pt,J){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,rt,pt,J),Wt.scissor(R.copy(V).multiplyScalar(K).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(C){Wt.setScissorTest(k=C)},this.setOpaqueSort=function(C){it=C},this.setTransparentSort=function(C){P=C},this.getClearColor=function(C){return C.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(C=!0,rt=!0,pt=!0){let J=0;C&&(J|=z.COLOR_BUFFER_BIT),rt&&(J|=z.DEPTH_BUFFER_BIT),pt&&(J|=z.STENCIL_BUFFER_BIT),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Tt,!1),i.removeEventListener("webglcontextrestored",Et,!1),i.removeEventListener("webglcontextcreationerror",Xt,!1),T.dispose(),S.dispose(),kt.dispose(),ze.dispose(),Fe.dispose(),me.dispose(),Bt.dispose(),zt.dispose(),Ae.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Ot),Rt.removeEventListener("sessionend",$t),Y&&(Y.dispose(),Y=null),ee.stop()};function Tt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=fe.autoReset,rt=at.enabled,pt=at.autoUpdate,J=at.needsUpdate,mt=at.type;Gt(),fe.autoReset=C,at.enabled=rt,at.autoUpdate=pt,at.needsUpdate=J,at.type=mt}function Xt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function re(C){const rt=C.target;rt.removeEventListener("dispose",re),q(rt)}function q(C){lt(C),kt.remove(C)}function lt(C){const rt=kt.get(C).programs;rt!==void 0&&(rt.forEach(function(pt){Ae.releaseProgram(pt)}),C.isShaderMaterial&&Ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,rt,pt,J,mt,Vt){rt===null&&(rt=gt);const qt=mt.isMesh&&mt.matrixWorld.determinant()<0,Kt=Po(C,rt,pt,J,mt);Wt.setMaterial(J,qt);let ne=pt.index,oe=1;J.wireframe===!0&&(ne=Pe.getWireframeAttribute(pt),oe=2);const Jt=pt.drawRange,le=pt.attributes.position;let ve=Jt.start*oe,We=(Jt.start+Jt.count)*oe;Vt!==null&&(ve=Math.max(ve,Vt.start*oe),We=Math.min(We,(Vt.start+Vt.count)*oe)),ne!==null?(ve=Math.max(ve,0),We=Math.min(We,ne.count)):le!=null&&(ve=Math.max(ve,0),We=Math.min(We,le.count));const hn=We-ve;if(hn<0||hn===1/0)return;Bt.setup(mt,J,Kt,pt,ne);let Rn,ce=Ft;if(ne!==null&&(Rn=Ve.get(ne),ce=Lt,ce.setIndex(Rn)),mt.isMesh)J.wireframe===!0?(Wt.setLineWidth(J.wireframeLinewidth*bt()),ce.setMode(z.LINES)):ce.setMode(z.TRIANGLES);else if(mt.isLine){let he=J.linewidth;he===void 0&&(he=1),Wt.setLineWidth(he*bt()),mt.isLineSegments?ce.setMode(z.LINES):mt.isLineLoop?ce.setMode(z.LINE_LOOP):ce.setMode(z.LINE_STRIP)}else mt.isPoints?ce.setMode(z.POINTS):mt.isSprite&&ce.setMode(z.TRIANGLES);if(mt.isInstancedMesh)ce.renderInstances(ve,hn,mt.count);else if(pt.isInstancedBufferGeometry){const he=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,ps=Math.min(pt.instanceCount,he);ce.renderInstances(ve,hn,ps)}else ce.render(ve,hn)},this.compile=function(C,rt){function pt(J,mt,Vt){J.transparent===!0&&J.side===Li&&J.forceSinglePass===!1?(J.side=Bn,J.needsUpdate=!0,Pa(J,mt,Vt),J.side=za,J.needsUpdate=!0,Pa(J,mt,Vt),J.side=Li):Pa(J,mt,Vt)}A=S.get(C),A.init(),E.push(A),C.traverseVisible(function(J){J.isLight&&J.layers.test(rt.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),A.setupLights(g.useLegacyLights),C.traverse(function(J){const mt=J.material;if(mt)if(Array.isArray(mt))for(let Vt=0;Vt<mt.length;Vt++){const qt=mt[Vt];pt(qt,C,J)}else pt(mt,C,J)}),E.pop(),A=null};let St=null;function Ct(C){St&&St(C)}function Ot(){ee.stop()}function $t(){ee.start()}const ee=new d_;ee.setAnimationLoop(Ct),typeof self<"u"&&ee.setContext(self),this.setAnimationLoop=function(C){St=C,Rt.setAnimationLoop(C),C===null?ee.stop():ee.start()},Rt.addEventListener("sessionstart",Ot),Rt.addEventListener("sessionend",$t),this.render=function(C,rt){if(rt!==void 0&&rt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(rt),rt=Rt.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,rt,N),A=S.get(C,E.length),A.init(),E.push(A),W.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),dt.setFromProjectionMatrix(W),D=this.localClippingEnabled,ht=H.init(this.clippingPlanes,D),M=T.get(C,w.length),M.init(),w.push(M),Ye(C,rt,0,g.sortObjects),M.finish(),g.sortObjects===!0&&M.sort(it,P),ht===!0&&H.beginShadows();const pt=A.state.shadowsArray;if(at.render(pt,C,rt),ht===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),vt.render(M,C),A.setupLights(g.useLegacyLights),rt.isArrayCamera){const J=rt.cameras;for(let mt=0,Vt=J.length;mt<Vt;mt++){const qt=J[mt];In(M,C,qt,qt.viewport)}}else In(M,C,rt);N!==null&&(Zt.updateMultisampleRenderTarget(N),Zt.updateRenderTargetMipmap(N)),C.isScene===!0&&C.onAfterRender(g,C,rt),Bt.resetDefaultState(),G=-1,X=null,E.pop(),E.length>0?A=E[E.length-1]:A=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function Ye(C,rt,pt,J){if(C.visible===!1)return;if(C.layers.test(rt.layers)){if(C.isGroup)pt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(rt);else if(C.isLight)A.pushLight(C),C.castShadow&&A.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||dt.intersectsSprite(C)){J&&Z.setFromMatrixPosition(C.matrixWorld).applyMatrix4(W);const qt=me.update(C),Kt=C.material;Kt.visible&&M.push(C,qt,Kt,pt,Z.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||dt.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==fe.render.frame&&(C.skeleton.update(),C.skeleton.frame=fe.render.frame);const qt=me.update(C),Kt=C.material;if(J&&(qt.boundingSphere===null&&qt.computeBoundingSphere(),Z.copy(qt.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(W)),Array.isArray(Kt)){const ne=qt.groups;for(let oe=0,Jt=ne.length;oe<Jt;oe++){const le=ne[oe],ve=Kt[le.materialIndex];ve&&ve.visible&&M.push(C,qt,ve,pt,Z.z,le)}}else Kt.visible&&M.push(C,qt,Kt,pt,Z.z,null)}}const Vt=C.children;for(let qt=0,Kt=Vt.length;qt<Kt;qt++)Ye(Vt[qt],rt,pt,J)}function In(C,rt,pt,J){const mt=C.opaque,Vt=C.transmissive,qt=C.transparent;A.setupLightsView(pt),ht===!0&&H.setGlobalState(g.clippingPlanes,pt),Vt.length>0&&we(mt,Vt,rt,pt),J&&Wt.viewport(ot.copy(J)),mt.length>0&&ke(mt,rt,pt),Vt.length>0&&ke(Vt,rt,pt),qt.length>0&&ke(qt,rt,pt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function we(C,rt,pt,J){if(Y===null){const Kt=wt.isWebGL2;Y=new hs(1024,1024,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")?Do:fs,minFilter:Lo,samples:Kt&&h===!0?4:0})}const mt=g.getRenderTarget();g.setRenderTarget(Y),g.clear();const Vt=g.toneMapping;g.toneMapping=Di,ke(C,pt,J),Zt.updateMultisampleRenderTarget(Y),Zt.updateRenderTargetMipmap(Y);let qt=!1;for(let Kt=0,ne=rt.length;Kt<ne;Kt++){const oe=rt[Kt],Jt=oe.object,le=oe.geometry,ve=oe.material,We=oe.group;if(ve.side===Li&&Jt.layers.test(J.layers)){const hn=ve.side;ve.side=Bn,ve.needsUpdate=!0,Qn(Jt,pt,J,le,ve,We),ve.side=hn,ve.needsUpdate=!0,qt=!0}}qt===!0&&(Zt.updateMultisampleRenderTarget(Y),Zt.updateRenderTargetMipmap(Y)),g.setRenderTarget(mt),g.toneMapping=Vt}function ke(C,rt,pt){const J=rt.isScene===!0?rt.overrideMaterial:null;for(let mt=0,Vt=C.length;mt<Vt;mt++){const qt=C[mt],Kt=qt.object,ne=qt.geometry,oe=J===null?qt.material:J,Jt=qt.group;Kt.layers.test(pt.layers)&&Qn(Kt,rt,pt,ne,oe,Jt)}}function Qn(C,rt,pt,J,mt,Vt){C.onBeforeRender(g,rt,pt,J,mt,Vt),C.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),mt.onBeforeRender(g,rt,pt,J,C,Vt),mt.transparent===!0&&mt.side===Li&&mt.forceSinglePass===!1?(mt.side=Bn,mt.needsUpdate=!0,g.renderBufferDirect(pt,rt,J,mt,C,Vt),mt.side=za,mt.needsUpdate=!0,g.renderBufferDirect(pt,rt,J,mt,C,Vt),mt.side=Li):g.renderBufferDirect(pt,rt,J,mt,C,Vt),C.onAfterRender(g,rt,pt,J,mt,Vt)}function Pa(C,rt,pt){rt.isScene!==!0&&(rt=gt);const J=kt.get(C),mt=A.state.lights,Vt=A.state.shadowsArray,qt=mt.state.version,Kt=Ae.getParameters(C,mt.state,Vt,rt,pt),ne=Ae.getProgramCacheKey(Kt);let oe=J.programs;J.environment=C.isMeshStandardMaterial?rt.environment:null,J.fog=rt.fog,J.envMap=(C.isMeshStandardMaterial?Fe:ze).get(C.envMap||J.environment),oe===void 0&&(C.addEventListener("dispose",re),oe=new Map,J.programs=oe);let Jt=oe.get(ne);if(Jt!==void 0){if(J.currentProgram===Jt&&J.lightsStateVersion===qt)return Ar(C,Kt),Jt}else Kt.uniforms=Ae.getUniforms(C),C.onBuild(pt,Kt,g),C.onBeforeCompile(Kt,g),Jt=Ae.acquireProgram(Kt,ne),oe.set(ne,Jt),J.uniforms=Kt.uniforms;const le=J.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(le.clippingPlanes=H.uniform),Ar(C,Kt),J.needsLights=Rr(C),J.lightsStateVersion=qt,J.needsLights&&(le.ambientLightColor.value=mt.state.ambient,le.lightProbe.value=mt.state.probe,le.directionalLights.value=mt.state.directional,le.directionalLightShadows.value=mt.state.directionalShadow,le.spotLights.value=mt.state.spot,le.spotLightShadows.value=mt.state.spotShadow,le.rectAreaLights.value=mt.state.rectArea,le.ltc_1.value=mt.state.rectAreaLTC1,le.ltc_2.value=mt.state.rectAreaLTC2,le.pointLights.value=mt.state.point,le.pointLightShadows.value=mt.state.pointShadow,le.hemisphereLights.value=mt.state.hemi,le.directionalShadowMap.value=mt.state.directionalShadowMap,le.directionalShadowMatrix.value=mt.state.directionalShadowMatrix,le.spotShadowMap.value=mt.state.spotShadowMap,le.spotLightMatrix.value=mt.state.spotLightMatrix,le.spotLightMap.value=mt.state.spotLightMap,le.pointShadowMap.value=mt.state.pointShadowMap,le.pointShadowMatrix.value=mt.state.pointShadowMatrix);const ve=Jt.getUniforms(),We=_c.seqWithValue(ve.seq,le);return J.currentProgram=Jt,J.uniformsList=We,Jt}function Ar(C,rt){const pt=kt.get(C);pt.outputColorSpace=rt.outputColorSpace,pt.instancing=rt.instancing,pt.skinning=rt.skinning,pt.morphTargets=rt.morphTargets,pt.morphNormals=rt.morphNormals,pt.morphColors=rt.morphColors,pt.morphTargetsCount=rt.morphTargetsCount,pt.numClippingPlanes=rt.numClippingPlanes,pt.numIntersection=rt.numClipIntersection,pt.vertexAlphas=rt.vertexAlphas,pt.vertexTangents=rt.vertexTangents,pt.toneMapping=rt.toneMapping}function Po(C,rt,pt,J,mt){rt.isScene!==!0&&(rt=gt),Zt.resetTextureUnits();const Vt=rt.fog,qt=J.isMeshStandardMaterial?rt.environment:null,Kt=N===null?g.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ni,ne=(J.isMeshStandardMaterial?Fe:ze).get(J.envMap||qt),oe=J.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,Jt=!!J.normalMap&&!!pt.attributes.tangent,le=!!pt.morphAttributes.position,ve=!!pt.morphAttributes.normal,We=!!pt.morphAttributes.color,hn=J.toneMapped?g.toneMapping:Di,Rn=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,ce=Rn!==void 0?Rn.length:0,he=kt.get(J),ps=A.state.lights;if(ht===!0&&(D===!0||C!==X)){const Xe=C===X&&J.id===G;H.setState(J,C,Xe)}let Oe=!1;J.version===he.__version?(he.needsLights&&he.lightsStateVersion!==ps.state.version||he.outputColorSpace!==Kt||mt.isInstancedMesh&&he.instancing===!1||!mt.isInstancedMesh&&he.instancing===!0||mt.isSkinnedMesh&&he.skinning===!1||!mt.isSkinnedMesh&&he.skinning===!0||he.envMap!==ne||J.fog===!0&&he.fog!==Vt||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==H.numPlanes||he.numIntersection!==H.numIntersection)||he.vertexAlphas!==oe||he.vertexTangents!==Jt||he.morphTargets!==le||he.morphNormals!==ve||he.morphColors!==We||he.toneMapping!==hn||wt.isWebGL2===!0&&he.morphTargetsCount!==ce)&&(Oe=!0):(Oe=!0,he.__version=J.version);let Cn=he.currentProgram;Oe===!0&&(Cn=Pa(J,rt,mt));let Bo=!1,sa=!1,ms=!1;const dn=Cn.getUniforms(),Jn=he.uniforms;if(Wt.useProgram(Cn.program)&&(Bo=!0,sa=!0,ms=!0),J.id!==G&&(G=J.id,sa=!0),Bo||X!==C){if(dn.setValue(z,"projectionMatrix",C.projectionMatrix),wt.logarithmicDepthBuffer&&dn.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),X!==C&&(X=C,sa=!0,ms=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){const Xe=dn.map.cameraPosition;Xe!==void 0&&Xe.setValue(z,Z.setFromMatrixPosition(C.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&dn.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||mt.isSkinnedMesh)&&dn.setValue(z,"viewMatrix",C.matrixWorldInverse)}if(mt.isSkinnedMesh){dn.setOptional(z,mt,"bindMatrix"),dn.setOptional(z,mt,"bindMatrixInverse");const Xe=mt.skeleton;Xe&&(wt.floatVertexTextures?(Xe.boneTexture===null&&Xe.computeBoneTexture(),dn.setValue(z,"boneTexture",Xe.boneTexture,Zt),dn.setValue(z,"boneTextureSize",Xe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ra=pt.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&wt.isWebGL2===!0)&&At.update(mt,pt,Cn),(sa||he.receiveShadow!==mt.receiveShadow)&&(he.receiveShadow=mt.receiveShadow,dn.setValue(z,"receiveShadow",mt.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Jn.envMap.value=ne,Jn.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),sa&&(dn.setValue(z,"toneMappingExposure",g.toneMappingExposure),he.needsLights&&wr(Jn,ms),Vt&&J.fog===!0&&Nt.refreshFogUniforms(Jn,Vt),Nt.refreshMaterialUniforms(Jn,J,K,ut,Y),_c.upload(z,he.uniformsList,Jn,Zt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(_c.upload(z,he.uniformsList,Jn,Zt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&dn.setValue(z,"center",mt.center),dn.setValue(z,"modelViewMatrix",mt.modelViewMatrix),dn.setValue(z,"normalMatrix",mt.normalMatrix),dn.setValue(z,"modelMatrix",mt.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Xe=J.uniformsGroups;for(let vn=0,Io=Xe.length;vn<Io;vn++)if(wt.isWebGL2){const Fo=Xe[vn];zt.update(Fo,Cn),zt.bind(Fo,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function wr(C,rt){C.ambientLightColor.needsUpdate=rt,C.lightProbe.needsUpdate=rt,C.directionalLights.needsUpdate=rt,C.directionalLightShadows.needsUpdate=rt,C.pointLights.needsUpdate=rt,C.pointLightShadows.needsUpdate=rt,C.spotLights.needsUpdate=rt,C.spotLightShadows.needsUpdate=rt,C.rectAreaLights.needsUpdate=rt,C.hemisphereLights.needsUpdate=rt}function Rr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,rt,pt){kt.get(C.texture).__webglTexture=rt,kt.get(C.depthTexture).__webglTexture=pt;const J=kt.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=pt===void 0,J.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,rt){const pt=kt.get(C);pt.__webglFramebuffer=rt,pt.__useDefaultFramebuffer=rt===void 0},this.setRenderTarget=function(C,rt=0,pt=0){N=C,L=rt,B=pt;let J=!0,mt=null,Vt=!1,qt=!1;if(C){const ne=kt.get(C);ne.__useDefaultFramebuffer!==void 0?(Wt.bindFramebuffer(z.FRAMEBUFFER,null),J=!1):ne.__webglFramebuffer===void 0?Zt.setupRenderTarget(C):ne.__hasExternalTextures&&Zt.rebindTextures(C,kt.get(C.texture).__webglTexture,kt.get(C.depthTexture).__webglTexture);const oe=C.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(qt=!0);const Jt=kt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(mt=Jt[rt],Vt=!0):wt.isWebGL2&&C.samples>0&&Zt.useMultisampledRTT(C)===!1?mt=kt.get(C).__webglMultisampledFramebuffer:mt=Jt,ot.copy(C.viewport),R.copy(C.scissor),O=C.scissorTest}else ot.copy(U).multiplyScalar(K).floor(),R.copy(V).multiplyScalar(K).floor(),O=k;if(Wt.bindFramebuffer(z.FRAMEBUFFER,mt)&&wt.drawBuffers&&J&&Wt.drawBuffers(C,mt),Wt.viewport(ot),Wt.scissor(R),Wt.setScissorTest(O),Vt){const ne=kt.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ne.__webglTexture,pt)}else if(qt){const ne=kt.get(C.texture),oe=rt||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ne.__webglTexture,pt||0,oe)}G=-1},this.readRenderTargetPixels=function(C,rt,pt,J,mt,Vt,qt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt){Wt.bindFramebuffer(z.FRAMEBUFFER,Kt);try{const ne=C.texture,oe=ne.format,Jt=ne.type;if(oe!==Si&&ft.convert(oe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const le=Jt===Do&&(Ut.has("EXT_color_buffer_half_float")||wt.isWebGL2&&Ut.has("EXT_color_buffer_float"));if(Jt!==fs&&ft.convert(Jt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Jt===os&&(wt.isWebGL2||Ut.has("OES_texture_float")||Ut.has("WEBGL_color_buffer_float")))&&!le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=C.width-J&&pt>=0&&pt<=C.height-mt&&z.readPixels(rt,pt,J,mt,ft.convert(oe),ft.convert(Jt),Vt)}finally{const ne=N!==null?kt.get(N).__webglFramebuffer:null;Wt.bindFramebuffer(z.FRAMEBUFFER,ne)}}},this.copyFramebufferToTexture=function(C,rt,pt=0){const J=Math.pow(2,-pt),mt=Math.floor(rt.image.width*J),Vt=Math.floor(rt.image.height*J);Zt.setTexture2D(rt,0),z.copyTexSubImage2D(z.TEXTURE_2D,pt,0,0,C.x,C.y,mt,Vt),Wt.unbindTexture()},this.copyTextureToTexture=function(C,rt,pt,J=0){const mt=rt.image.width,Vt=rt.image.height,qt=ft.convert(pt.format),Kt=ft.convert(pt.type);Zt.setTexture2D(pt,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,pt.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pt.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,pt.unpackAlignment),rt.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,J,C.x,C.y,mt,Vt,qt,Kt,rt.image.data):rt.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,J,C.x,C.y,rt.mipmaps[0].width,rt.mipmaps[0].height,qt,rt.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,J,C.x,C.y,qt,Kt,rt.image),J===0&&pt.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Wt.unbindTexture()},this.copyTextureToTexture3D=function(C,rt,pt,J,mt=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Vt=C.max.x-C.min.x+1,qt=C.max.y-C.min.y+1,Kt=C.max.z-C.min.z+1,ne=ft.convert(J.format),oe=ft.convert(J.type);let Jt;if(J.isData3DTexture)Zt.setTexture3D(J,0),Jt=z.TEXTURE_3D;else if(J.isDataArrayTexture)Zt.setTexture2DArray(J,0),Jt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,J.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,J.unpackAlignment);const le=z.getParameter(z.UNPACK_ROW_LENGTH),ve=z.getParameter(z.UNPACK_IMAGE_HEIGHT),We=z.getParameter(z.UNPACK_SKIP_PIXELS),hn=z.getParameter(z.UNPACK_SKIP_ROWS),Rn=z.getParameter(z.UNPACK_SKIP_IMAGES),ce=pt.isCompressedTexture?pt.mipmaps[0]:pt.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ce.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,C.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,C.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,C.min.z),pt.isDataTexture||pt.isData3DTexture?z.texSubImage3D(Jt,mt,rt.x,rt.y,rt.z,Vt,qt,Kt,ne,oe,ce.data):pt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Jt,mt,rt.x,rt.y,rt.z,Vt,qt,Kt,ne,ce.data)):z.texSubImage3D(Jt,mt,rt.x,rt.y,rt.z,Vt,qt,Kt,ne,oe,ce),z.pixelStorei(z.UNPACK_ROW_LENGTH,le),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ve),z.pixelStorei(z.UNPACK_SKIP_PIXELS,We),z.pixelStorei(z.UNPACK_SKIP_ROWS,hn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Rn),mt===0&&J.generateMipmaps&&z.generateMipmap(Jt),Wt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Zt.setTextureCube(C,0):C.isData3DTexture?Zt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Zt.setTexture2DArray(C,0):Zt.setTexture2D(C,0),Wt.unbindTexture()},this.resetState=function(){L=0,B=0,N=null,Wt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===se?cs:$0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cs?se:Ni}}class KT extends x_{}KT.prototype.isWebGL1Renderer=!0;class Lh{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=i}clone(){return new Lh(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class QT extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class No extends aa{constructor(e=1,i=1,r=1,l=32,u=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const _=[],y=[],x=[],M=[];let A=0;const w=[],E=r/2;let g=0;I(),d===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new Kn(y,3)),this.setAttribute("normal",new Kn(x,3)),this.setAttribute("uv",new Kn(M,2));function I(){const B=new $,N=new $;let G=0;const X=(i-e)/r;for(let ot=0;ot<=u;ot++){const R=[],O=ot/u,yt=O*(i-e)+e;for(let ut=0;ut<=l;ut++){const K=ut/l,it=K*m+h,P=Math.sin(it),U=Math.cos(it);N.x=yt*P,N.y=-O*r+E,N.z=yt*U,y.push(N.x,N.y,N.z),B.set(P,X,U).normalize(),x.push(B.x,B.y,B.z),M.push(K,1-O),R.push(A++)}w.push(R)}for(let ot=0;ot<l;ot++)for(let R=0;R<u;R++){const O=w[R][ot],yt=w[R+1][ot],ut=w[R+1][ot+1],K=w[R][ot+1];_.push(O,yt,K),_.push(yt,ut,K),G+=6}p.addGroup(g,G,0),g+=G}function L(B){const N=A,G=new Ee,X=new $;let ot=0;const R=B===!0?e:i,O=B===!0?1:-1;for(let ut=1;ut<=l;ut++)y.push(0,E*O,0),x.push(0,O,0),M.push(.5,.5),A++;const yt=A;for(let ut=0;ut<=l;ut++){const it=ut/l*m+h,P=Math.cos(it),U=Math.sin(it);X.x=R*U,X.y=E*O,X.z=R*P,y.push(X.x,X.y,X.z),x.push(0,O,0),G.x=P*.5+.5,G.y=U*.5*O+.5,M.push(G.x,G.y),A++}for(let ut=0;ut<l;ut++){const K=N+ut,it=yt+ut;B===!0?_.push(it,it+1,K):_.push(it+1,it,K),ot+=3}p.addGroup(g,ot,B===!0?1:2),g+=ot}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Co extends No{constructor(e=1,i=1,r=32,l=1,u=!1,d=0,h=Math.PI*2){super(0,e,i,r,l,u,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h}}static fromJSON(e){return new Co(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pr extends aa{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const _=[],y=new $,x=new $,M=[],A=[],w=[],E=[];for(let g=0;g<=r;g++){const I=[],L=g/r;let B=0;g===0&&d===0?B=.5/i:g===r&&m===Math.PI&&(B=-.5/i);for(let N=0;N<=i;N++){const G=N/i;y.x=-e*Math.cos(l+G*u)*Math.sin(d+L*h),y.y=e*Math.cos(d+L*h),y.z=e*Math.sin(l+G*u)*Math.sin(d+L*h),A.push(y.x,y.y,y.z),x.copy(y).normalize(),w.push(x.x,x.y,x.z),E.push(G+B,1-L),I.push(p++)}_.push(I)}for(let g=0;g<r;g++)for(let I=0;I<i;I++){const L=_[g][I+1],B=_[g][I],N=_[g+1][I],G=_[g+1][I+1];(g!==0||d>0)&&M.push(L,B,G),(g!==r-1||m<Math.PI)&&M.push(B,N,G)}this.setIndex(M),this.setAttribute("position",new Kn(A,3)),this.setAttribute("normal",new Kn(w,3)),this.setAttribute("uv",new Kn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vi extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ns extends br{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dh extends En{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const uh=new sn,V0=new $,k0=new $;class y_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;V0.setFromMatrixPosition(e.matrixWorld),i.position.copy(V0),k0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(k0),i.updateMatrixWorld(),uh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const X0=new sn,Eo=new $,fh=new $;class JT extends y_{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Eo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Eo),fh.copy(r.position),fh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(fh),r.updateMatrixWorld(),l.makeTranslation(-Eo.x,-Eo.y,-Eo.z),X0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(X0)}}class gc extends Dh{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new JT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $T extends y_{constructor(){super(new p_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class t1 extends Dh{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new $T}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class e1 extends Dh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class n1{constructor(e,i,r=0,l=1/0){this.ray=new r_(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}intersectObject(e,i=!0,r=[]){return yh(e,this,r,i),r.sort(W0),r}intersectObjects(e,i=!0,r=[]){for(let l=0,u=e.length;l<u;l++)yh(e[l],this,r,i);return r.sort(W0),r}}function W0(o,e){return o.distance-e.distance}function yh(o,e,i,r){if(o.layers.test(e.layers)&&o.raycast(e,i),r===!0){const l=o.children;for(let u=0,d=l.length;u<d;u++)yh(l[u],e,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);const Sn=180,j0=100,i1=({gameState:o,settings:e,onUpdateStats:i,onGameOver:r,inputRef:l})=>{const u=fn.useRef(null),d=fn.useRef({health:100,kills:0,alive:0,zoneRadius:Sn,zoneTimer:60,verticalVelocity:0,fireCooldown:0,nadeCooldown:0,gameTime:0,vel:new $,currentYaw:0,smoothFov:e.fov,shake:0,currentGrenadeType:"explosive"});return fn.useEffect(()=>{if(!u.current)return;const h=new QT;h.background=new Te(8900331),h.fog=new Lh(8900331,.0015);const m=new Yn(e.fov,window.innerWidth/window.innerHeight,.1,5e3),p=new x_({antialias:!1,powerPreference:"high-performance",alpha:!1});p.setSize(window.innerWidth,window.innerHeight),p.setPixelRatio(1),p.shadowMap.enabled=!1,p.toneMapping=Di,p.outputColorSpace=se,u.current.appendChild(p.domElement);const _=new e1(16777215,1.2);h.add(_);const y=new t1(16777215,.8);y.position.set(250,450,150),y.castShadow=!1,h.add(y);const x=[],M=[],A=[],w=[],E=[],g=[],I=[],L=new ci(Sn*20,Sn*20),B=new ns({color:3898683,emissive:333061}),N=new ae(L,B);N.rotation.x=-Math.PI/2,N.receiveShadow=!0,h.add(N);const G=new ns({color:4545124});for(let Nt=0;Nt<20;Nt++){const T=Nt/20*Math.PI*2,S=Sn*5+Math.random()*200,H=100+Math.random()*200,at=new ae(new Co(H,H*1.5,4),G);at.position.set(Math.cos(T)*S,H*.5,Math.sin(T)*S),at.rotation.y=Math.random()*Math.PI,h.add(at)}const X=(Nt,T)=>{const S=new xi,H=new ae(new No(.5,.8,5,4),new ns({color:5125166}));H.position.y=2.5;const at=new ae(new Co(3,5,4),new ns({color:3046706}));at.position.y=6,S.add(H,at),S.position.set(Nt,0,T),S.castShadow=!1,S.receiveShadow=!1,h.add(S),x.push(H)},ot=(Nt,T,S=1)=>{const H=new xi;H.position.set(Nt,0,T);const at=7*S,vt=15,At=15,Ft=new vi({color:15658734}),Lt=[new ae(new an(vt,at,1),Ft),new ae(new an(1,at,At),Ft),new ae(new an(1,at,At),Ft)];Lt[0].position.set(0,at/2,-At/2),Lt[1].position.set(-vt/2,at/2,0),Lt[2].position.set(vt/2,at/2,0),Lt.forEach(zt=>{zt.castShadow=!0,zt.receiveShadow=!0,H.add(zt),x.push(zt)});const ft=new ae(new Co(12.5,6,4),new vi({color:7162945}));ft.position.y=at+3,ft.rotation.y=Math.PI/4,ft.castShadow=!0,H.add(ft),x.push(ft);const Bt=new ae(new an(vt+2,1,At+2),new Ri({visible:!1}));if(Bt.position.y=at,H.add(Bt),M.push(Bt),S>1){const zt=new ae(new an(5,.8,18),new vi({color:4073251}));zt.position.set(vt/2+2,3.5,0),zt.rotation.x=-.42,H.add(zt),M.push(zt)}h.add(H),I.push({x:Nt,z:T})},R=(Nt,T)=>{const S=new xi,H=new ae(new an(1.2,.7,.5),new vi({color:16777215})),at=new ae(new an(.3,.5,.52),new Ri({color:5025616}));S.add(H,at),S.position.set(Nt,.6,T),h.add(S),w.push(S)},O=(Nt,T,S,H,at="explosive")=>{const vt=at==="smoke"?10066329:16724736,At=new xi,Ft=new ae(new pr(.5,12,12),new vi({color:vt,emissive:vt,emissiveIntensity:at==="smoke"?.5:3,metalness:.8,roughness:.2}));At.add(Ft);const Lt=new gc(vt,at==="smoke"?5:15,12);At.add(Lt),At.position.set(Nt,T,S),h.add(At);const ft=new pr(.2,4,4),Bt=new Ri({color:vt,transparent:!0,opacity:.4}),zt=new ae(ft,Bt);At.add(zt),E.push({mesh:At,velocity:H,timer:3,type:at})},yt=Nt=>{const T=new xi;for(let S=0;S<15;S++){const H=new ae(new pr(1.5,8,8),new ns({color:15658734,transparent:!0,opacity:.6}));H.position.set((Math.random()-.5)*5,.5+Math.random()*3,(Math.random()-.5)*5),H.scale.setScalar(1+Math.random()*2),T.add(H)}T.position.copy(Nt),h.add(T),setTimeout(()=>{let S=.6;const H=setInterval(()=>{S-=.05,T.children.forEach(at=>{at.material&&(at.material.opacity=S)}),S<=0&&(clearInterval(H),h.remove(T))},200)},8e3)},ut=(Nt,T)=>{const H=new pr(.2,8,8),at=new Ri({color:16776960,transparent:!0,opacity:1}),vt=new ae(H,at);vt.position.copy(Nt);const At=new gc(16776960,20,3);vt.add(At),h.add(vt),new $().subVectors(T,Nt).length(),g.push({mesh:vt,start:Nt.clone(),end:T.clone(),progress:0,timer:60})},K=14,it=60,P=new ns({color:3355443}),U=new ns({color:10066329});for(let Nt=-4;Nt<=4;Nt++){const T=Nt*it,S=new ae(new ci(K,Sn*4),P);S.rotation.x=-Math.PI/2,S.position.set(T,.05,0),S.receiveShadow=!0,h.add(S);const H=new ae(new ci(2,Sn*4),U);H.rotation.x=-Math.PI/2,H.position.set(T-K/2-1,.06,0),h.add(H);const at=new ae(new ci(2,Sn*4),U);at.rotation.x=-Math.PI/2,at.position.set(T+K/2+1,.06,0),h.add(at)}for(let Nt=-4;Nt<=4;Nt++){const T=Nt*it,S=new ae(new ci(Sn*4,K),P);S.rotation.x=-Math.PI/2,S.position.set(0,.05,T),S.receiveShadow=!0,h.add(S);const H=new ae(new ci(Sn*4,2),U);H.rotation.x=-Math.PI/2,H.position.set(0,.06,T-K/2-1),h.add(H);const at=new ae(new ci(Sn*4,2),U);at.rotation.x=-Math.PI/2,at.position.set(0,.06,T+K/2+1),h.add(at)}for(let Nt=-4;Nt<4;Nt++)for(let T=-4;T<4;T++){const S=Nt*it+it/2,H=T*it+it/2;if(Math.random()>.3){const at=S+(Math.random()-.5)*10,vt=H+(Math.random()-.5)*10;ot(at,vt,Math.random()>.8?2:1)}if(Math.random()>.6){const at=S+(Math.random()-.5)*30,vt=H+(Math.random()-.5)*30;Math.abs(at%it)>K&&Math.abs(vt%it)>K&&X(at,vt)}if(Math.random()>.5){const at=Nt*it+K/2+2,vt=T*it+K/2+2;R(at,vt)}}const V=(Nt,T=!1)=>{const S=new xi,H=new ae(new an(.8,1,.5),new vi({color:Nt,metalness:.3}));H.position.y=1.3,H.castShadow=!0;const at=new ae(new an(.6,.6,.6),new vi({color:16767916}));at.position.y=.85,H.add(at),at.castShadow=!0;const vt=new ae(new an(.3,.9,.3),new vi({color:Nt}));vt.position.set(-.6,.05,0),H.add(vt);const At=new ae(new an(.3,.9,.3),new vi({color:Nt}));At.position.set(.6,.05,0),H.add(At);const Ft=new vi({color:2236962}),Lt=new ae(new an(.35,1,.35),Ft);Lt.position.set(-.22,-.5,0),H.add(Lt);const ft=new ae(new an(.35,1,.35),Ft);ft.position.set(.22,-.5,0),H.add(ft);const Bt=new ae(new an(.2,.3,1.1),new vi({color:1118481,metalness:.9}));Bt.position.set(.3,.2,.6),H.add(Bt);const zt=new gc(16755200,0,8);zt.position.set(0,0,.8),Bt.add(zt),S.add(H);const Gt=new ae(new an(2,4,2),new Ri({visible:!1}));Gt.position.y=2,S.add(Gt);const Rt=new ae(new ci(1.2,.15),new Ri({color:0,transparent:!0,opacity:.5})),Tt=new ae(new ci(1.2,.15),new Ri({color:2600544})),Et=new xi;return Et.add(Rt,Tt),Et.position.set(0,4.5,0),S.add(Et),S.userData={hp:100,isPlayer:T,flash:zt,hb:Gt,hpBar:Tt,fireTimer:Math.random()*2,limbs:{body:H,head:at,armL:vt,armR:At,legL:Lt,legR:ft}},S},k=V(16761095,!0);k.position.set((Math.random()-.5)*Sn*.8,2,(Math.random()-.5)*Sn*.8),h.add(k);const dt=Math.min(e.botCount,I.length),ht=I.sort(()=>.5-Math.random());let D=0;for(let Nt=0;Nt<ht.length&&D<dt;Nt++){const T=ht[Nt];if(Math.sqrt(Math.pow(T.x-k.position.x,2)+Math.pow(T.z-k.position.z,2))>80){const H=V(Math.random()*16777215);H.position.set(T.x,2,T.z),A.push(H),h.add(H),D++}}i({alive:A.length+1});const Y=new ae(new No(Sn,Sn,300,64,1,!0),new Ri({color:58879,opacity:.15,transparent:!0,side:Li}));Y.position.y=150,h.add(Y);let W;const Z=new n1;let gt=null,bt=performance.now();const z=new $,Pt=new $,Ut=new $,wt=new $,Wt=new $,fe=(Nt,T,S,H)=>Yy.lerp(Nt,T,1-Math.exp(-S*H)),kt=(Nt,T,S,H)=>{Nt.lerp(T,1-Math.exp(-S*H))},Zt=()=>{if(o===nn.GAMEOVER)return;const Nt=performance.now(),T=Math.min((Nt-bt)/1e3,.1);bt=Nt;const S=d.current,H=l.current;if(S.gameTime+=T,o===nn.PLAYING){const at=T*60;S.currentYaw=fe(S.currentYaw||0,H.yaw||0,15,T);let vt=H.isSprinting?1.2:.7;z.set(H.x,0,H.y);const At=z.lengthSq()>0;if(Pt.set(0,0,0),At&&(z.applyAxisAngle(Ut.set(0,1,0),H.yaw||0).normalize(),Pt.copy(z).multiplyScalar(vt)),kt(S.vel,Pt,At?10:15,T),S.vel.lengthSq()>1e-4){z.copy(k.position).add(Ut.set(0,.5,0)),wt.copy(S.vel).normalize(),Z.set(z,wt);const Tt=Z.intersectObjects(x,!0);(Tt.length===0||Tt[0].distance>1.8)&&k.position.addScaledVector(S.vel,at);const Et=Math.atan2(S.vel.x,S.vel.z);k.rotation.y=fe(k.rotation.y,Et,12,T);const Xt=Math.sin(S.gameTime*12)*.15,re=Math.sin(S.gameTime*12);k.userData.limbs.legL.rotation.x=re*.6,k.userData.limbs.legR.rotation.x=-re*.6,k.userData.limbs.armL.rotation.x=-re*.4,k.userData.limbs.armR.rotation.x=re*.4,k.userData.limbs.body.position.y=1.3+Xt}else k.userData.limbs.legL.rotation.x=0,k.userData.limbs.legR.rotation.x=0,k.userData.limbs.armL.rotation.x=0,k.userData.limbs.armR.rotation.x=0,k.userData.limbs.body.position.y=fe(k.userData.limbs.body.position.y,1.3,8,T);z.copy(k.position).add(Ut.set(0,2,0)),Z.set(z,wt.set(0,-1,0));const Ft=Z.intersectObjects([...M,N],!0),Lt=Ft.length>0?Ft[0].point.y:0;H.jump&&k.position.y<=Lt+.1&&(S.verticalVelocity=.6,H.jump=!1),S.verticalVelocity-=.024*at,k.position.y+=S.verticalVelocity*at,k.position.y<Lt&&(k.position.y=Lt,S.verticalVelocity=0);const ft=S.currentYaw||H.yaw||0,Bt=Math.max(-.8,Math.min(.6,H.pitch||-.2)),zt=H.isADS?4:8.5,Gt=H.isADS?40:H.isSprinting?e.fov+12:e.fov;S.smoothFov=fe(S.smoothFov||e.fov,Gt,8,T),m.fov=S.smoothFov,m.updateProjectionMatrix(),Pt.copy(k.position).add(Ut.set(0,3,0));const Rt=H.isADS?.8:2;if(wt.set(Math.cos(ft),0,-Math.sin(ft)),z.set(Pt.x+Math.sin(ft)*Math.cos(Bt)*zt,Pt.y+Math.sin(Bt)*zt,Pt.z+Math.cos(ft)*Math.cos(Bt)*zt).addScaledVector(wt,Rt),S.shake>0&&(z.x+=(Math.random()-.5)*S.shake,z.y+=(Math.random()-.5)*S.shake,S.shake*=.8,S.shake<.01&&(S.shake=0)),m.position.lerp(z,1-Math.exp(-15*T)),Wt.copy(Pt).addScaledVector(wt,Rt),m.lookAt(Wt),H.grenade){H.grenade=!1;const Tt=H.grenadeType||"explosive";z.set(0,0,-1).applyQuaternion(m.quaternion),Pt.copy(k.position).add(Ut.set(0,1.8,0)).addScaledVector(z,1.5),O(Pt.x,Pt.y,Pt.z,z.multiplyScalar(1.2),Tt)}if(H.firing&&S.fireCooldown<=0){S.fireCooldown=10,S.shake=.2,k.userData.flash.intensity=10,setTimeout(()=>{k.userData.flash&&(k.userData.flash.intensity=0)},50),Z.setFromCamera(new Ee(0,0),m);const Tt=Z.intersectObjects([...A.map(St=>St.userData.hb),...x,N,...M],!0);let Et=Z.ray.direction.clone().multiplyScalar(500).add(Z.ray.origin);Tt.length>0&&(Et=Tt[0].point);const Xt=k.position.clone().add(new $(0,1.6,0)),re=Et.clone().sub(Xt).normalize();let q=Xt.clone().add(re.clone().multiplyScalar(500));Z.set(Xt,re);const lt=Z.intersectObjects([...A.map(St=>St.userData.hb),...x],!0);if(lt.length>0){const St=lt[0];q=St.point;const Ct=A.findIndex(Ot=>Ot.userData.hb===St.object);if(Ct!==-1){const Ot=document.getElementById("hit-marker");Ot&&(Ot.style.opacity="1",setTimeout(()=>{Ot&&(Ot.style.opacity="0")},80));const $t=A[Ct];if($t.userData.hp-=35,$t.userData.hpBar){const ee=Math.max(0,$t.userData.hp/100);$t.userData.hpBar.scale.x=ee,$t.userData.hpBar.position.x=(ee-1)*.6}$t.userData.hp<=0&&(h.remove($t),A.splice(Ct,1),S.kills++,i({kills:S.kills,alive:A.length+1}),A.length===0&&r(!0))}}ut(Xt,q)}S.fireCooldown>0&&S.fireCooldown--;for(let Tt=g.length-1;Tt>=0;Tt--){const Et=g[Tt];Et.progress+=.15*at,Et.progress>=1||Et.timer<=0?(h.remove(Et.mesh),g.splice(Tt,1)):(Et.mesh.position.lerpVectors(Et.start,Et.end,Et.progress),Et.timer--)}for(let Tt=w.length-1;Tt>=0;Tt--){const Et=w[Tt];Et.rotation.y+=.08*at,Et.position.distanceToSquared(k.position)<9&&(S.health=Math.min(100,S.health+40),i({health:S.health}),h.remove(Et),w.splice(Tt,1))}for(let Tt=E.length-1;Tt>=0;Tt--){const Et=E[Tt];if(Et.timer-=T,Et.velocity.y-=.02*at,Et.mesh.position.addScaledVector(Et.velocity,at),Et.mesh.position.y<.3&&(Et.mesh.position.y=.3,Et.velocity.y*=-.5,Et.velocity.x*=.8,Et.velocity.z*=.8),Et.timer<=0){if(z.copy(Et.mesh.position),Et.type==="smoke")yt(z);else{const Xt=k.position.distanceToSquared(z);if(Xt<1600){const q=Math.sqrt(Xt);S.shake=Math.max(S.shake,5*(1-q/40)),Xt<225&&(S.health-=50*(1-q/15),i({health:S.health}),S.health<=0&&r(!1))}const re=new gc(16755200,20,15);re.position.copy(z),h.add(re),setTimeout(()=>h.remove(re),100);for(let q=A.length-1;q>=0;q--){const lt=A[q],St=lt.position.distanceToSquared(z);if(St<225){const Ct=100*(1-Math.sqrt(St)/15);if(lt.userData.hp-=Ct,lt.userData.hpBar){const Ot=Math.max(0,lt.userData.hp/100);lt.userData.hpBar.scale.x=Ot,lt.userData.hpBar.position.x=(Ot-1)*.6}lt.userData.hp<=0&&(h.remove(lt),A.splice(q,1),S.kills++,i({kills:S.kills,alive:A.length+1}),A.length===0&&r(!0))}}}h.remove(Et.mesh),E.splice(Tt,1)}}for(let Tt=A.length-1;Tt>=0;Tt--){const Et=A[Tt];if(!Et||!Et.position)continue;const Xt=Et.userData,re=Et.position.distanceToSquared(k.position);if(!Xt.limbs)continue;const lt=Et.position.x*Et.position.x+Et.position.z*Et.position.z>S.zoneRadius*S.zoneRadius,St=re<1600;Xt.isCamping=Xt.isCamping!==void 0?Xt.isCamping:!0;const Ct=S.zoneTimer>0,Ot=Ct?225:1600;if(lt)Xt.isCamping=!1,Et.lookAt(0,Et.position.y,0),Et.translateZ(.95*at);else if(Xt.isCamping&&(!St||re>Ot)){if(Ct){Et.userData.limbs.legL.rotation.x=0,Et.userData.limbs.legR.rotation.x=0;continue}Ct||(Xt.isCamping=!1)}else{if(Xt.isCamping=!1,Et.lookAt(k.position.x,Et.position.y,k.position.z),re<j0*j0){re>625&&Et.translateZ(.65*at);const ee=Math.sin(S.gameTime*10+Tt);Et.userData.limbs.legL.rotation.x=ee*.5,Et.userData.limbs.legR.rotation.x=-ee*.5}else Et.userData.limbs.legL.rotation.x=0,Et.userData.limbs.legR.rotation.x=0;Xt.fireTimer+=T;const $t=e.difficulty==="hard"?1:1.6;if(Xt.fireTimer>=$t){Xt.fireTimer=0;const ee=[Ut.set(0,1.7,0),Ut.set(0,1,0),Ut.set(0,.3,0)];let Ye=!1;const In=Et.position.distanceTo(k.position);for(const we of ee){z.copy(Et.position).add(Ut.set(0,1.5,0)),Pt.copy(k.position).add(we),wt.copy(Pt).sub(z).normalize(),Z.set(z,wt);const ke=Z.intersectObjects([...x,N],!0);if(ke.length===0||ke[0].distance>In-1){Ye=!0;break}}if(Ye){Xt.flash.intensity=8,setTimeout(()=>{Xt.flash&&(Xt.flash.intensity=0)},50);const we=e.difficulty==="hard"?.9:.7;if(Math.random()<we){const ke=e.difficulty==="hard"?3:2;S.health-=ke,i({health:S.health}),gt||(gt=document.getElementById("damage-flash")),gt&&(gt.style.opacity="1",setTimeout(()=>{gt&&(gt.style.opacity="0")},100)),S.health<=0&&r(!1)}}}}Et.children[2]&&Et.children[2].lookAt(m.position)}S.zoneTimer>0?(S.zoneTimer-=T,i({zoneTimer:Math.ceil(S.zoneTimer)})):(S.zoneRadius>80&&(S.zoneRadius-=.1*at),Y.scale.set(S.zoneRadius/Sn,1,S.zoneRadius/Sn),k.position.distanceTo(new $(0,0,0))>S.zoneRadius&&(S.health-=.2,i({health:S.health}),S.health<=0&&r(!1)))}p.render(h,m),W=requestAnimationFrame(Zt)};Zt();const ze=()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",ze);const Fe=Nt=>{const T=Nt.code;(T==="KeyW"||T==="ArrowUp")&&(l.current.y=-1),(T==="KeyS"||T==="ArrowDown")&&(l.current.y=1),(T==="KeyA"||T==="ArrowLeft")&&(l.current.x=-1),(T==="KeyD"||T==="ArrowRight")&&(l.current.x=1),T==="ShiftLeft"&&(l.current.isSprinting=!0),T==="Space"&&(l.current.jump=!0),T==="KeyG"&&(l.current.grenade=!0)},Ve=Nt=>{const T=Nt.code;(T==="KeyW"||T==="ArrowUp")&&l.current.y===-1&&(l.current.y=0),(T==="KeyS"||T==="ArrowDown")&&l.current.y===1&&(l.current.y=0),(T==="KeyA"||T==="ArrowLeft")&&l.current.x===-1&&(l.current.x=0),(T==="KeyD"||T==="ArrowRight")&&l.current.x===1&&(l.current.x=0),T==="ShiftLeft"&&(l.current.isSprinting=!1)},Pe=()=>{if(l.current.firing=!0,document.body.requestPointerLock){const Nt=document.body.requestPointerLock();Nt&&Nt.catch&&Nt.catch(()=>{})}},me=()=>{l.current.firing=!1},Ae=Nt=>{if(document.pointerLockElement===document.body){l.current.yaw=(l.current.yaw||0)-Nt.movementX*.002*e.sens;const T=(l.current.pitch||0)+Nt.movementY*.002*e.sens;l.current.pitch=Math.max(-1.5,Math.min(1.5,T))}};return window.addEventListener("keydown",Fe),window.addEventListener("keyup",Ve),window.addEventListener("mousedown",Pe),window.addEventListener("mouseup",me),window.addEventListener("mousemove",Ae),()=>{for(window.removeEventListener("resize",ze),window.removeEventListener("keydown",Fe),window.removeEventListener("keyup",Ve),window.removeEventListener("mousedown",Pe),window.removeEventListener("mouseup",me),window.removeEventListener("mousemove",Ae),document.pointerLockElement&&document.exitPointerLock(),cancelAnimationFrame(W),p.dispose(),u.current&&p.domElement&&u.current.removeChild(p.domElement);h.children.length>0;)h.remove(h.children[0])}},[o]),tt.jsx("div",{ref:u,className:"w-full h-full bg-black"})},a1=({gameState:o,stats:e,settings:i,setSettings:r,onTogglePause:l,inputRef:u,isEditingHUD:d,setIsEditingHUD:h})=>{const[m,p]=fn.useState({x:0,y:0}),[_,y]=fn.useState(!1),[x,M]=fn.useState(null),A=fn.useRef(null),w=fn.useRef(null),E=fn.useRef(null),g=o===nn.PAUSED,I={joystick:{x:32,y:32},sprint:{x:74,y:190},fire:{x:40,y:40},ads:{x:40,y:150},jump:{x:150,y:40},grenade:{x:150,y:140},reload:{x:150,y:220},radar:{x:16,y:16}},L=i.hudPositions||I,B=P=>{const U=P.touches[0],V=P.currentTarget.getBoundingClientRect(),k=V.left+V.width/2,dt=V.top+V.height/2;U.clientX<window.innerWidth/2&&U.clientY>window.innerHeight/2&&(y(!0),w.current={x:U.clientX,y:U.clientY},G(U.clientX,U.clientY,k,dt,V.width/2))},N=P=>{if(!_||!w.current)return;const U=P.touches[0],V=P.currentTarget.getBoundingClientRect(),k=V.left+V.width/2,dt=V.top+V.height/2;G(U.clientX,U.clientY,k,dt,V.width/2)},G=(P,U,V,k,dt)=>{const ht=P-V,D=U-k,Y=Math.min(Math.sqrt(ht*ht+D*D),dt),W=Math.atan2(D,ht),Z=Math.cos(W)*Y,gt=Math.sin(W)*Y;p({x:Z,y:gt}),u.current.x=Z/dt,u.current.y=gt/dt},X=()=>{y(!1),p({x:0,y:0}),u.current.x=0,u.current.y=0},ot=fn.useRef(null),R=P=>{if(d){P.touches[0];return}for(let U=0;U<P.touches.length;U++){const V=P.touches[U];if(V.clientX>window.innerWidth/2&&ot.current===null){ot.current=V.identifier,E.current={x:V.clientX,y:V.clientY};break}}},O=P=>{if(d&&x){const V={x:["joystick","radar","sprint"].includes(x)?P.clientX-40:window.innerWidth-P.clientX-40,y:window.innerHeight-P.clientY-40};V.x=Math.max(0,Math.min(V.x,window.innerWidth-80)),V.y=Math.max(0,Math.min(V.y,window.innerHeight-80)),r({...i,hudPositions:{...L,[x]:V}})}},yt=P=>{var U,V;if(d){P.cancelable&&P.preventDefault();return}if(ot.current!==null)for(let k=0;k<P.touches.length;k++){const dt=P.touches[k];if(dt.identifier===ot.current){const ht=dt.clientX-(((U=E.current)==null?void 0:U.x)||dt.clientX),D=dt.clientY-(((V=E.current)==null?void 0:V.y)||dt.clientY);u.current.yaw=(u.current.yaw||0)-ht*.005*(i.sens||1),u.current.pitch=(u.current.pitch||0)+D*.005*(i.sens||1),E.current={x:dt.clientX,y:dt.clientY};break}}},ut=P=>{if(d){M(null);return}for(let U=0;U<P.changedTouches.length;U++)if(P.changedTouches[U].identifier===ot.current){ot.current=null,E.current=null;break}},K=e.weapons&&e.weapons[e.currentWeapon||0],it={[fr.RIFLE]:"fa-gun",[fr.SHOTGUN]:"fa-bullseye",[fr.SNIPER]:"fa-crosshairs",[fr.PISTOL]:"fa-circle-dot",[fr.SMG]:"fa-burst"};return e.armor.level===3||e.armor.level,tt.jsxs("div",{className:"absolute inset-0 pointer-events-none text-white select-none overflow-hidden",children:[tt.jsx("div",{className:`absolute inset-0 z-0 touch-none ${d?"pointer-events-auto bg-black/20 backdrop-blur-[2px]":"pointer-events-auto"}`,onTouchStart:R,onTouchMove:yt,onTouchEnd:ut,children:d&&tt.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 bg-cyan-500/80 px-4 py-2 rounded-full text-xs font-bold animate-bounce flex items-center gap-2",children:[tt.jsx("i",{className:"fas fa-hand-pointer"})," MODO EDIÇÃO: ARRASTE OS BOTÕES"]})}),tt.jsx("div",{id:"damage-flash",className:"fixed inset-0 bg-red-600/40 opacity-0 pointer-events-none transition-opacity duration-75 z-[60]"}),tt.jsx("div",{className:`pointer-events-auto absolute z-10 ${d&&x==="joystick"?"border-2 border-cyan-400 p-2 scale-110":""}`,style:{transform:`scale(${(i.btnScale||1)*.9})`,bottom:`${L.joystick.y}px`,left:`${L.joystick.x}px`,touchAction:"none"},onPointerDown:P=>{d&&(P.currentTarget.setPointerCapture(P.pointerId),M("joystick"))},onPointerMove:O,onPointerUp:P=>{d&&(P.currentTarget.releasePointerCapture(P.pointerId),M(null))},onTouchStart:P=>{d||B(P)},onTouchMove:P=>{d||N(P)},onTouchEnd:()=>{d||X()},children:tt.jsx("div",{className:`w-36 h-36 bg-black/20 rounded-full border-2 border-white/10 backdrop-blur-sm relative flex items-center justify-center ${d&&x==="joystick"?"animate-pulse":""}`,ref:A,children:tt.jsx("div",{className:"absolute w-14 h-14 bg-white/40 border-2 border-white/60 rounded-full shadow-2xl",style:{left:"50%",top:"50%",transform:`translate(calc(-50% + ${m.x}px), calc(-50% + ${m.y}px))`}})})}),tt.jsx("button",{className:`pointer-events-auto absolute z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all ${d&&x==="sprint"?"border-2 border-yellow-400 animate-pulse scale-125":""} ${u.current.isSprinting?"bg-yellow-400 scale-110 shadow-[0_0_20px_#facc15]":"bg-yellow-500/80 border-2 border-black/20"}`,style:{bottom:`${L.sprint.y}px`,left:`${L.sprint.x}px`,transform:`scale(${i.btnScale||1})`,touchAction:"none"},onPointerDown:P=>{d&&(P.currentTarget.setPointerCapture(P.pointerId),M("sprint"))},onPointerMove:O,onPointerUp:P=>{d&&(P.currentTarget.releasePointerCapture(P.pointerId),M(null))},onTouchStart:P=>{d||(u.current.isSprinting=!0)},onTouchEnd:P=>{d||(u.current.isSprinting=!1)},children:tt.jsx("i",{className:"fas fa-person-running text-black text-xl"})}),tt.jsx("button",{className:`pointer-events-auto absolute z-10 w-24 h-24 bg-red-600 rounded-full border-4 border-white/30 flex items-center justify-center active:scale-90 active:bg-red-700 transition-all shadow-[0_0_30px_rgba(220,38,38,0.5)] ${d&&x==="fire"?"border-dashed border-white animate-pulse scale-110":""}`,style:{bottom:`${L.fire.y}px`,right:`${L.fire.x}px`,transform:`scale(${i.btnScale||1})`,touchAction:"none"},onPointerDown:P=>{d&&(P.currentTarget.setPointerCapture(P.pointerId),M("fire"))},onPointerMove:O,onPointerUp:P=>{d&&(P.currentTarget.releasePointerCapture(P.pointerId),M(null))},onTouchStart:P=>{d||(u.current.firing=!0)},onTouchEnd:P=>{d||(u.current.firing=!1)},children:tt.jsx("i",{className:"fas fa-fire text-white text-4xl"})}),tt.jsx("button",{className:`pointer-events-auto absolute z-10 w-16 h-16 bg-cyan-500/80 rounded-full border border-white/30 flex items-center justify-center active:scale-95 transition-all ${d&&x==="ads"?"border-dashed border-white animate-pulse scale-110":""}`,style:{bottom:`${L.ads.y}px`,right:`${L.ads.x}px`,transform:`scale(${i.btnScale||1})`,touchAction:"none"},onPointerDown:P=>{d&&(P.currentTarget.setPointerCapture(P.pointerId),M("ads"))},onPointerMove:O,onPointerUp:P=>{d&&(P.currentTarget.releasePointerCapture(P.pointerId),M(null))},onTouchStart:P=>{d||(u.current.isADS=!0)},onTouchEnd:P=>{d||(u.current.isADS=!1)},children:tt.jsx("i",{className:"fas fa-bullseye text-white text-2xl"})}),tt.jsx("button",{className:`pointer-events-auto absolute z-10 w-16 h-16 bg-blue-600/80 rounded-full border border-white/30 flex items-center justify-center active:scale-90 active:bg-blue-700 transition-all ${d&&x==="jump"?"border-dashed border-white animate-pulse scale-110":""}`,style:{bottom:`${L.jump.y}px`,right:`${L.jump.x}px`,transform:`scale(${i.btnScale||1})`,touchAction:"none"},onPointerDown:P=>{d&&(P.currentTarget.setPointerCapture(P.pointerId),M("jump"))},onPointerMove:O,onPointerUp:P=>{d&&(P.currentTarget.releasePointerCapture(P.pointerId),M(null))},onTouchStart:P=>{d||(u.current.jump=!0)},children:tt.jsx("i",{className:"fas fa-arrow-up text-white text-xl"})}),tt.jsx("button",{className:`pointer-events-auto absolute z-10 w-14 h-14 bg-black/60 rounded-full border border-white/20 flex items-center justify-center active:bg-cyan-500 transition-all font-black text-xs ${d&&x==="reload"?"border-dashed border-white animate-pulse scale-125":""}`,style:{bottom:`${L.reload.y}px`,right:`${L.reload.x}px`,transform:`scale(${i.btnScale||1})`,touchAction:"none"},onPointerDown:P=>{d&&(P.currentTarget.setPointerCapture(P.pointerId),M("reload"))},onPointerMove:O,onPointerUp:P=>{d&&(P.currentTarget.releasePointerCapture(P.pointerId),M(null))},onClick:()=>{},children:tt.jsx("i",{className:"fas fa-rotate text-white text-xl"})}),tt.jsx("button",{className:`pointer-events-auto absolute z-10 w-14 h-14 rounded-full border flex items-center justify-center transition-all ${d&&x==="grenade"?"border-dashed border-white animate-pulse scale-125":""} ${u.current.grenadeType==="smoke"?"bg-gray-600 border-white text-white":"bg-black/60 border-white/20 text-white shadow-[0_0_15px_rgba(234,88,12,0.3)]"}`,style:{bottom:`${L.grenade.y}px`,right:`${L.grenade.x}px`,transform:`scale(${i.btnScale||1})`,touchAction:"none"},onPointerDown:P=>{d&&(P.currentTarget.setPointerCapture(P.pointerId),M("grenade"))},onPointerMove:O,onPointerUp:P=>{d&&(P.currentTarget.releasePointerCapture(P.pointerId),M(null))},onTouchStart:P=>{d||(u.current.grenade=!0)},onClick:()=>{d||(u.current.grenadeType=u.current.grenadeType==="smoke"?"explosive":"smoke")},children:tt.jsx("i",{className:`fas ${u.current.grenadeType==="smoke"?"fa-smog":"fa-bomb"} text-white text-xl`})}),tt.jsxs("div",{className:"absolute top-0 inset-x-0 p-4 flex justify-between items-start z-[50]",children:[tt.jsxs("div",{className:"flex flex-col gap-2 items-start h-full",children:[tt.jsx("button",{className:"pointer-events-auto w-10 h-10 bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 active:scale-90 transition-transform mb-1",onClick:l,children:tt.jsx("i",{className:"fas fa-cog text-white/70"})}),tt.jsx("button",{className:"pointer-events-auto w-10 h-10 bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 active:scale-90 transition-transform mb-1",onClick:()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(P=>console.error(P))},children:tt.jsx("i",{className:"fas fa-expand text-white/70"})}),tt.jsxs("div",{className:`pointer-events-auto w-24 h-24 rounded-full border-2 border-white/20 bg-black/60 backdrop-blur-xl relative overflow-hidden shadow-2xl ${d&&x==="radar"?"border-dashed border-cyan-400 animate-pulse":""}`,style:{position:d?"absolute":"relative",top:d?`${L.radar.y}px`:"auto",left:d?`${L.radar.x}px`:"auto",touchAction:"none"},onPointerDown:P=>{d&&(P.currentTarget.setPointerCapture(P.pointerId),M("radar"))},onPointerMove:O,onPointerUp:P=>{d&&(P.currentTarget.releasePointerCapture(P.pointerId),M(null))},children:[tt.jsxs("div",{className:"absolute inset-0 flex items-center justify-center opacity-20",children:[tt.jsx("div",{className:"w-full h-[1px] bg-white"}),tt.jsx("div",{className:"w-[1px] h-full bg-white"})]}),tt.jsx("div",{className:"absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_5px_red]"}),tt.jsx("div",{className:"absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_5px_red]"}),tt.jsx("div",{className:"absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_5px_red]"}),tt.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] z-10 border border-white/40"})]})]}),tt.jsx("div",{className:"bg-black/40 backdrop-blur-md px-6 py-1.5 rounded-md border border-white/10 mt-2",children:tt.jsxs("span",{className:"text-cyan-400 text-sm font-black italic tracking-widest uppercase",children:["ZONA EM: ",e.zoneTimer,"s"]})}),tt.jsxs("div",{className:"flex gap-4 p-2 bg-black/20 backdrop-blur-sm rounded-lg",children:[tt.jsxs("div",{className:"text-right",children:[tt.jsx("span",{className:"text-[10px] font-black uppercase text-white/40 tracking-tighter",children:"Vivos: "}),tt.jsx("span",{className:"text-sm font-black text-rose-500",children:e.alive})]}),tt.jsxs("div",{className:"text-right",children:[tt.jsx("span",{className:"text-[10px] font-black uppercase text-white/40 tracking-tighter",children:"Abates: "}),tt.jsx("span",{className:"text-sm font-black text-yellow-400",children:e.kills})]})]})]}),tt.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",children:tt.jsx("div",{className:"w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_8px_#ff0000] border border-white/20"})}),tt.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] max-w-sm h-1.5 bg-black/40 rounded-full border border-white/10 overflow-hidden z-20",children:tt.jsx("div",{className:"h-full bg-green-500 transition-all duration-300 shadow-[0_0_10px_#22c55e]",style:{width:`${e.health}%`}})}),K&&tt.jsxs("div",{className:"absolute bottom-12 right-8 bg-black/70 backdrop-blur-xl px-6 py-4 rounded-3xl border-2 border-white/20 shadow-2xl",children:[tt.jsxs("div",{className:"flex items-center gap-4",children:[tt.jsx("i",{className:`fas ${it[K.type]} text-4xl text-yellow-400`}),tt.jsxs("div",{children:[tt.jsx("div",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:K.name}),tt.jsxs("div",{className:"text-4xl font-black italic tracking-tight",children:[K.currentAmmo," ",tt.jsxs("span",{className:"text-xl text-white/40",children:["/ ",K.reserveAmmo]})]})]})]}),e.weapons.length>1&&tt.jsx("div",{className:"text-[10px] text-white/30 uppercase text-center mt-2 tracking-widest",children:"Arraste para trocar"})]}),g&&!d&&tt.jsx("div",{className:"absolute inset-0 pointer-events-auto bg-black/90 backdrop-blur-2xl z-[100] flex items-center justify-center p-4",children:tt.jsxs("div",{className:"w-full max-w-lg max-h-[90vh] overflow-y-auto space-y-6 p-6 md:p-8 bg-slate-900/80 border border-white/10 rounded-3xl shadow-2xl relative scrollbar-hide",children:[tt.jsx("h2",{className:"text-3xl font-black italic text-orange-500 uppercase tracking-tighter text-center",children:"CONFIGURAÇÕES"}),tt.jsxs("div",{className:"space-y-6",children:[tt.jsxs("div",{className:"space-y-2",children:[tt.jsxs("div",{className:"flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest",children:["Sensibilidade ",tt.jsx("span",{children:i.sens.toFixed(1)})]}),tt.jsx("input",{type:"range",min:"0.1",max:"5",step:"0.1",value:i.sens,onChange:P=>r({...i,sens:parseFloat(P.target.value)}),className:"w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"})]}),tt.jsxs("div",{className:"space-y-2",children:[tt.jsxs("div",{className:"flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest",children:["Volume ",tt.jsx("span",{children:i.volume.toFixed(1)})]}),tt.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:i.volume,onChange:P=>r({...i,volume:parseFloat(P.target.value)}),className:"w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"})]}),tt.jsxs("div",{className:"space-y-2",children:[tt.jsxs("div",{className:"flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest",children:["FOV ",tt.jsx("span",{children:i.fov})]}),tt.jsx("input",{type:"range",min:"60",max:"120",step:"1",value:i.fov,onChange:P=>r({...i,fov:parseInt(P.target.value)}),className:"w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"})]}),tt.jsxs("div",{className:"space-y-2",children:[tt.jsxs("div",{className:"flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest",children:["Tamanho Botões ",tt.jsx("span",{children:i.btnScale.toFixed(1)})]}),tt.jsx("input",{type:"range",min:"0.5",max:"2",step:"0.1",value:i.btnScale,onChange:P=>r({...i,btnScale:parseFloat(P.target.value)}),className:"w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"})]})]}),tt.jsx("div",{className:"h-px bg-white/10 my-4"}),tt.jsxs("div",{className:"space-y-4",children:[tt.jsx("h3",{className:"text-xl font-black italic text-white uppercase tracking-tighter text-center",children:"Nova Partida"}),tt.jsxs("div",{className:"space-y-2",children:[tt.jsx("label",{className:"text-[10px] font-black text-white/40 uppercase tracking-widest block",children:"Qtd. Bots"}),tt.jsx("input",{type:"number",value:i.botCount,onChange:P=>r({...i,botCount:Math.max(1,parseInt(P.target.value)||1)}),className:"w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-bold"})]}),tt.jsxs("div",{className:"space-y-2",children:[tt.jsx("label",{className:"text-[10px] font-black text-white/40 uppercase tracking-widest block",children:"Dificuldade"}),tt.jsxs("select",{value:i.difficulty,onChange:P=>r({...i,difficulty:P.target.value}),className:"w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-bold appearance-none",children:[tt.jsx("option",{value:"easy",children:"Easy"}),tt.jsx("option",{value:"normal",children:"Normal"}),tt.jsx("option",{value:"hard",children:"Hard"})]})]})]}),tt.jsxs("div",{className:"flex flex-col gap-3 pt-2",children:[tt.jsxs("button",{className:"w-full py-4 bg-indigo-600 text-white font-black rounded-xl uppercase italic text-sm active:scale-95 transition-all shadow-lg shadow-indigo-600/20",onClick:()=>{h(!0)},children:[tt.jsx("i",{className:"fas fa-up-down-left-right mr-2"}),"MOVER BOTÕES"]}),tt.jsxs("button",{className:"w-full py-4 bg-rose-600 text-white font-black rounded-xl uppercase italic text-sm active:scale-95 transition-transform shadow-lg shadow-rose-600/20",onClick:()=>{r({...i,hudPositions:I})},children:[tt.jsx("i",{className:"fas fa-undo mr-2"}),"RESETAR HUD"]}),tt.jsx("button",{className:"w-full py-4 bg-orange-500 text-slate-950 font-black rounded-xl uppercase italic text-xl active:scale-95 transition-transform shadow-lg shadow-orange-500/20",onClick:l,children:"CONTINUAR"})]}),tt.jsx("button",{className:"w-full pt-4 text-white/30 text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-500 transition-colors",onClick:()=>window.location.reload(),children:"Desistir da Partida"})]})}),d&&tt.jsx("div",{className:"absolute inset-x-0 top-1/4 pointer-events-none z-[110] flex flex-col items-center",children:tt.jsxs("div",{className:"bg-black/80 backdrop-blur-xl border-2 border-cyan-500 p-6 rounded-3xl pointer-events-auto flex flex-col items-center gap-4 shadow-2xl animate-pulse",children:[tt.jsx("h2",{className:"text-2xl font-black italic uppercase text-cyan-400 tracking-widest",children:"Modo Edição"}),tt.jsx("p",{className:"text-[10px] text-white/60 uppercase font-bold text-center",children:"Arraste os grupos destacados para mudar sua posição"}),tt.jsxs("div",{className:"flex gap-4 w-full",children:[tt.jsx("button",{className:"flex-1 py-3 bg-red-500/20 border border-red-500 text-red-400 rounded-xl font-black uppercase text-[10px] hover:bg-red-500 hover:text-white transition-all",onClick:()=>{r({...i,hudPositions:I})},children:"Resetar"}),tt.jsx("button",{className:"flex-1 py-3 bg-cyan-500 text-slate-950 rounded-xl font-black uppercase text-[10px] hover:scale-105 transition-all",onClick:()=>h(!1),children:"Concluir"})]})]})})]})},s1=({onStart:o,settings:e,setSettings:i,isEditingHUD:r,setIsEditingHUD:l})=>tt.jsxs("div",{className:`absolute inset-0 z-[200] flex flex-col items-center justify-center bg-slate-950 overflow-y-auto p-4 ${r?"opacity-0 pointer-events-none":"opacity-100"}`,children:[tt.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[tt.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"}),tt.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"})]}),tt.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-500/30 shadow-[0_0_15px_cyan] animate-[scan_4s_linear_infinite]"}),tt.jsxs("div",{className:"text-center mb-12 relative z-10",children:[tt.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[tt.jsx("div",{className:"w-8 h-1 bg-cyan-500 rounded-full animate-pulse"}),tt.jsx("span",{className:"text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]",children:"Cyborg Link Active"}),tt.jsx("div",{className:"w-8 h-1 bg-cyan-500 rounded-full animate-pulse"})]}),tt.jsxs("h1",{className:"text-7xl md:text-8xl font-black italic tracking-tighter text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]",children:["BATALHA ",tt.jsx("span",{className:"text-cyan-500",children:"CANAÃ"})]}),tt.jsx("p",{className:"text-slate-500 text-xs uppercase tracking-[0.5em] font-bold mt-2",children:"Cybernetic Warfare v2.5"})]}),tt.jsxs("div",{className:"w-full max-w-md bg-slate-900/60 backdrop-blur-3xl p-8 rounded-3xl border border-cyan-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-12 space-y-8 relative overflow-hidden group",children:[tt.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors"}),tt.jsxs("div",{className:"flex items-center justify-between text-cyan-400 border-b border-cyan-500/10 pb-4",children:[tt.jsxs("div",{className:"flex items-center gap-3",children:[tt.jsx("i",{className:"fas fa-terminal text-xs"}),tt.jsx("span",{className:"font-black text-xs uppercase tracking-widest",children:"Configurações de Missão"})]}),tt.jsx("span",{className:"text-[10px] font-mono opacity-40",children:"SYSTEM_READY"})]}),tt.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[tt.jsxs("div",{className:"space-y-3",children:[tt.jsxs("label",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest flex justify-between items-center",children:["População Hostil",tt.jsx("input",{type:"number",value:e.botCount,onChange:u=>i({...e,botCount:Math.max(0,Math.min(30,parseInt(u.target.value)||0))}),className:"w-12 bg-slate-800 border border-cyan-500/20 rounded text-cyan-400 text-center text-xs font-black p-1 focus:outline-none focus:border-cyan-400"})]}),tt.jsx("input",{type:"range",min:"0",max:"30",step:"1",value:e.botCount,onChange:u=>i({...e,botCount:parseInt(u.target.value)}),className:"w-full h-1 bg-slate-800 rounded-full appearance-none accent-cyan-500 cursor-pointer"})]}),tt.jsxs("div",{className:"space-y-3",children:[tt.jsx("label",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Interface"}),tt.jsxs("button",{onClick:()=>l(!0),className:"w-full py-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 text-xs font-black uppercase hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-2",children:[tt.jsx("i",{className:"fas fa-hand-pointer animate-bounce"}),"Customizar HUD"]})]})]})]}),tt.jsxs("button",{onClick:o,className:"group relative px-20 py-8 bg-cyan-600 hover:bg-cyan-500 text-white font-black text-3xl rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(6,182,212,0.4)] overflow-hidden",children:[tt.jsx("div",{className:"absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"}),tt.jsxs("span",{className:"flex items-center gap-4 italic uppercase relative z-10",children:[tt.jsx("i",{className:"fas fa-plug-circle-bolt animate-pulse"})," Iniciar Upload"]})]}),tt.jsxs("div",{className:"mt-12 flex gap-8 text-slate-700 text-[9px] font-black uppercase tracking-[0.3em]",children:[tt.jsxs("span",{className:"flex items-center gap-2",children:[tt.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-500 animate-pulse"})," Servidor Canaã"]}),tt.jsx("span",{children:"Secure Protocol 4.1"}),tt.jsx("span",{children:"Neural Engine Built"})]}),tt.jsx("style",{children:`
        @keyframes scan {
          from { top: 0; }
          to { top: 100%; }
        }
      `})]}),r1=({stats:o,onRestart:e})=>{const i=o.alive===1;return tt.jsx("div",{className:"absolute inset-0 z-[300] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md overflow-y-auto p-4 md:p-10",children:tt.jsxs("div",{className:"max-w-2xl w-full flex flex-col items-center justify-center min-h-min py-10",children:[tt.jsxs("div",{className:"text-center mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom duration-1000",children:[tt.jsx("h1",{className:`text-5xl md:text-8xl font-black italic uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] ${i?"text-yellow-500":"text-red-600"}`,children:i?"BOOYAH!":"ELIMINADO"}),tt.jsx("p",{className:"text-white/40 font-bold uppercase tracking-[0.2em] md:tracking-[0.5em] mt-2 md:mt-4 text-xs md:text-base",children:"A partida terminou"})]}),tt.jsxs("div",{className:"grid grid-cols-2 gap-4 md:gap-6 w-full max-w-sm mb-10 md:mb-16",children:[tt.jsxs("div",{className:"bg-white/5 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 text-center shadow-2xl",children:[tt.jsx("div",{className:"text-[10px] text-white/30 uppercase font-black tracking-widest mb-1",children:"Abates"}),tt.jsx("div",{className:"text-3xl md:text-5xl font-black italic",children:o.kills})]}),tt.jsxs("div",{className:"bg-white/5 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 text-center shadow-2xl",children:[tt.jsx("div",{className:"text-[10px] text-white/30 uppercase font-black tracking-widest mb-1",children:"Rank"}),tt.jsxs("div",{className:"text-3xl md:text-5xl font-black italic text-yellow-500",children:["#",o.alive]})]})]}),tt.jsx("button",{onClick:e,className:"w-full max-w-xs md:max-w-none md:px-16 py-4 md:py-6 bg-white text-slate-950 font-black rounded-2xl md:rounded-3xl hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 text-xl md:text-2xl uppercase italic tracking-tighter",children:"Tentar Novamente"})]})})},o1=()=>{const[o,e]=fn.useState(nn.START),[i,r]=fn.useState(!1),[l,u]=fn.useState(()=>{const x={sens:1,volume:.5,fov:75,btnScale:1,botCount:20,difficulty:"normal",graphicsQuality:"medium",hudPositions:{joystick:{x:32,y:32},sprint:{x:74,y:190},fire:{x:40,y:40},ads:{x:40,y:150},jump:{x:150,y:40},grenade:{x:150,y:140},reload:{x:150,y:220},radar:{x:16,y:16}}};try{const M=localStorage.getItem("batalha-canaa-settings_v2");if(M){const A=JSON.parse(M);return{...x,...A,hudPositions:{...x.hudPositions,...A.hudPositions||{}}}}}catch(M){console.error("Erro ao carregar configurações:",M)}return x}),[d,h]=fn.useState({health:100,armor:{level:1,durability:50,maxDurability:50},kills:0,alive:16,zoneTimer:60,isGasActive:!1,currentWeapon:0,weapons:[],grenades:new Map([["explosive",{type:"explosive",damage:80,radius:15,count:3}],["smoke",{type:"smoke",damage:0,radius:10,count:2}]]),activePowerUps:[]}),m=fn.useRef({x:0,y:0,yaw:0,pitch:0,firing:!1,isSprinting:!1,isADS:!1,jump:!1,grenade:!1}),p=fn.useRef(o);p.current=o,fn.useEffect(()=>{localStorage.setItem("batalha-canaa-settings_v2",JSON.stringify(l))},[l]),fn.useEffect(()=>{const x=M=>{if(M.code==="F4"){M.preventDefault();const A=p.current;(A===nn.PLAYING||A===nn.PAUSED)&&e(w=>w===nn.PAUSED?nn.PLAYING:nn.PAUSED)}};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[]);const _=x=>{h(M=>({...M,...x}))},y=x=>{e(nn.GAMEOVER)};return tt.jsxs("div",{className:"relative w-full h-full bg-slate-950 overflow-hidden",children:[tt.jsx(i1,{gameState:o,settings:l,onUpdateStats:_,onGameOver:y,inputRef:m}),o===nn.START&&tt.jsx(s1,{onStart:()=>e(nn.PLAYING),settings:l,setSettings:u,isEditingHUD:i,setIsEditingHUD:r}),(o===nn.PLAYING||o===nn.PAUSED||o===nn.START&&i)&&tt.jsx(a1,{gameState:o,stats:d,settings:l,setSettings:u,onTogglePause:()=>e(x=>x===nn.PAUSED?nn.PLAYING:nn.PAUSED),inputRef:m,isEditingHUD:i,setIsEditingHUD:r}),o===nn.GAMEOVER&&tt.jsx(r1,{stats:d,onRestart:()=>window.location.reload()})]})},q0=document.getElementById("root");q0&&Ix.createRoot(q0).render(tt.jsx(o1,{}));

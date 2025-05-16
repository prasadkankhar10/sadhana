(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Uv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cd={exports:{}},Lo={},Ad={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki=Symbol.for("react.element"),Fv=Symbol.for("react.portal"),jv=Symbol.for("react.fragment"),zv=Symbol.for("react.strict_mode"),$v=Symbol.for("react.profiler"),Bv=Symbol.for("react.provider"),Vv=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),Hv=Symbol.for("react.suspense"),Wv=Symbol.for("react.memo"),Kv=Symbol.for("react.lazy"),Af=Symbol.iterator;function Gv(e){return e===null||typeof e!="object"?null:(e=Af&&e[Af]||e["@@iterator"],typeof e=="function"?e:null)}var Pd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rd=Object.assign,Nd={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=Nd,this.updater=n||Pd}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Od(){}Od.prototype=Ur.prototype;function hu(e,t,n){this.props=e,this.context=t,this.refs=Nd,this.updater=n||Pd}var du=hu.prototype=new Od;du.constructor=hu;Rd(du,Ur.prototype);du.isPureReactComponent=!0;var Pf=Array.isArray,Dd=Object.prototype.hasOwnProperty,pu={current:null},Ld={key:!0,ref:!0,__self:!0,__source:!0};function xd(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Dd.call(t,r)&&!Ld.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var f=Array(u),p=0;p<u;p++)f[p]=arguments[p+2];i.children=f}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Ki,type:e,key:o,ref:l,props:i,_owner:pu.current}}function qv(e,t){return{$$typeof:Ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ki}function Xv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rf=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xv(""+e.key):t.toString(36)}function Us(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ki:case Fv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Cl(l,0):r,Pf(i)?(n="",e!=null&&(n=e.replace(Rf,"$&/")+"/"),Us(i,t,n,"",function(p){return p})):i!=null&&(gu(i)&&(i=qv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Rf,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Pf(e))for(var u=0;u<e.length;u++){o=e[u];var f=r+Cl(o,u);l+=Us(o,t,n,f,i)}else if(f=Gv(e),typeof f=="function")for(e=f.call(e),u=0;!(o=e.next()).done;)o=o.value,f=r+Cl(o,u++),l+=Us(o,t,n,f,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function vs(e,t,n){if(e==null)return e;var r=[],i=0;return Us(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Qv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Fs={transition:null},Yv={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Fs,ReactCurrentOwner:pu};function Md(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:vs,forEach:function(e,t,n){vs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vs(e,function(){t++}),t},toArray:function(e){return vs(e,function(t){return t})||[]},only:function(e){if(!gu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=Ur;b.Fragment=jv;b.Profiler=$v;b.PureComponent=hu;b.StrictMode=zv;b.Suspense=Hv;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yv;b.act=Md;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=pu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in t)Dd.call(t,f)&&!Ld.hasOwnProperty(f)&&(r[f]=t[f]===void 0&&u!==void 0?u[f]:t[f])}var f=arguments.length-2;if(f===1)r.children=n;else if(1<f){u=Array(f);for(var p=0;p<f;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:Ki,type:e.type,key:i,ref:o,props:r,_owner:l}};b.createContext=function(e){return e={$$typeof:Vv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bv,_context:e},e.Consumer=e};b.createElement=xd;b.createFactory=function(e){var t=xd.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:bv,render:e}};b.isValidElement=gu;b.lazy=function(e){return{$$typeof:Kv,_payload:{_status:-1,_result:e},_init:Qv}};b.memo=function(e,t){return{$$typeof:Wv,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=Fs.transition;Fs.transition={};try{e()}finally{Fs.transition=t}};b.unstable_act=Md;b.useCallback=function(e,t){return Le.current.useCallback(e,t)};b.useContext=function(e){return Le.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};b.useEffect=function(e,t){return Le.current.useEffect(e,t)};b.useId=function(){return Le.current.useId()};b.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return Le.current.useMemo(e,t)};b.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};b.useRef=function(e){return Le.current.useRef(e)};b.useState=function(e){return Le.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return Le.current.useTransition()};b.version="18.3.1";Ad.exports=b;var _t=Ad.exports;const Jv=Uv(_t);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=_t,ey=Symbol.for("react.element"),ty=Symbol.for("react.fragment"),ny=Object.prototype.hasOwnProperty,ry=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iy={key:!0,ref:!0,__self:!0,__source:!0};function Ud(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ny.call(t,r)&&!iy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ey,type:e,key:o,ref:l,props:i,_owner:ry.current}}Lo.Fragment=ty;Lo.jsx=Ud;Lo.jsxs=Ud;Cd.exports=Lo;var fe=Cd.exports,ca={},Fd={exports:{}},qe={},jd={exports:{}},zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,B){var V=F.length;F.push(B);e:for(;0<V;){var ne=V-1>>>1,X=F[ne];if(0<i(X,B))F[ne]=B,F[V]=X,V=ne;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var B=F[0],V=F.pop();if(V!==B){F[0]=V;e:for(var ne=0,X=F.length,le=X>>>1;ne<le;){var Pt=2*(ne+1)-1,Rt=F[Pt],Nt=Pt+1,Ot=F[Nt];if(0>i(Rt,V))Nt<X&&0>i(Ot,Rt)?(F[ne]=Ot,F[Nt]=V,ne=Nt):(F[ne]=Rt,F[Pt]=V,ne=Pt);else if(Nt<X&&0>i(Ot,V))F[ne]=Ot,F[Nt]=V,ne=Nt;else break e}}return B}function i(F,B){var V=F.sortIndex-B.sortIndex;return V!==0?V:F.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var f=[],p=[],C=1,A=null,k=3,O=!1,R=!1,L=!1,z=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(F){for(var B=n(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=F)r(p),B.sortIndex=B.expirationTime,t(f,B);else break;B=n(p)}}function N(F){if(L=!1,S(F),!R)if(n(f)!==null)R=!0,Br(M);else{var B=n(p);B!==null&&At(N,B.startTime-F)}}function M(F,B){R=!1,L&&(L=!1,E(d),d=-1),O=!0;var V=k;try{for(S(B),A=n(f);A!==null&&(!(A.expirationTime>B)||F&&!_());){var ne=A.callback;if(typeof ne=="function"){A.callback=null,k=A.priorityLevel;var X=ne(A.expirationTime<=B);B=e.unstable_now(),typeof X=="function"?A.callback=X:A===n(f)&&r(f),S(B)}else r(f);A=n(f)}if(A!==null)var le=!0;else{var Pt=n(p);Pt!==null&&At(N,Pt.startTime-B),le=!1}return le}finally{A=null,k=V,O=!1}}var U=!1,m=null,d=-1,g=5,y=-1;function _(){return!(e.unstable_now()-y<g)}function T(){if(m!==null){var F=e.unstable_now();y=F;var B=!0;try{B=m(!0,F)}finally{B?v():(U=!1,m=null)}}else U=!1}var v;if(typeof w=="function")v=function(){w(T)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,An=Qe.port2;Qe.port1.onmessage=T,v=function(){An.postMessage(null)}}else v=function(){z(T,0)};function Br(F){m=F,U||(U=!0,v())}function At(F,B){d=z(function(){F(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){R||O||(R=!0,Br(M))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return n(f)},e.unstable_next=function(F){switch(k){case 1:case 2:case 3:var B=3;break;default:B=k}var V=k;k=B;try{return F()}finally{k=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var V=k;k=F;try{return B()}finally{k=V}},e.unstable_scheduleCallback=function(F,B,V){var ne=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ne+V:ne):V=ne,F){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=V+X,F={id:C++,callback:B,priorityLevel:F,startTime:V,expirationTime:X,sortIndex:-1},V>ne?(F.sortIndex=V,t(p,F),n(f)===null&&F===n(p)&&(L?(E(d),d=-1):L=!0,At(N,V-ne))):(F.sortIndex=X,t(f,F),R||O||(R=!0,Br(M))),F},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(F){var B=k;return function(){var V=k;k=B;try{return F.apply(this,arguments)}finally{k=V}}}})(zd);jd.exports=zd;var sy=jd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy=_t,Ge=sy;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $d=new Set,Ci={};function Qn(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(Ci[e]=t,e=0;e<t.length;e++)$d.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=Object.prototype.hasOwnProperty,ly=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nf={},Of={};function ay(e){return fa.call(Of,e)?!0:fa.call(Nf,e)?!1:ly.test(e)?Of[e]=!0:(Nf[e]=!0,!1)}function uy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cy(e,t,n,r){if(t===null||typeof t>"u"||uy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var mu=/[\-:]([a-z])/g;function vu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mu,vu);we[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mu,vu);we[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mu,vu);we[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function yu(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cy(t,n,i,r)&&(n=null),r||i===null?ay(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),ha=Symbol.for("react.profiler"),Bd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),_u=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),Eu=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),bd=Symbol.for("react.offscreen"),Df=Symbol.iterator;function ti(e){return e===null||typeof e!="object"?null:(e=Df&&e[Df]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Al;function ui(e){if(Al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Al=t&&t[1]||""}return`
`+Al+e}var Pl=!1;function Rl(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var f=`
`+i[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=l&&0<=u);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ui(e):""}function fy(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=Rl(e.type,!1),e;case 11:return e=Rl(e.type.render,!1),e;case 1:return e=Rl(e.type,!0),e;default:return""}}function ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case or:return"Portal";case ha:return"Profiler";case wu:return"StrictMode";case da:return"Suspense";case pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vd:return(e.displayName||"Context")+".Consumer";case Bd:return(e._context.displayName||"Context")+".Provider";case _u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Eu:return t=e.displayName||null,t!==null?t:ga(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return ga(e(t))}catch{}}return null}function hy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ga(t);case 8:return t===wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dy(e){var t=Hd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ws(e){e._valueTracker||(e._valueTracker=dy(e))}function Wd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ma(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kd(e,t){t=t.checked,t!=null&&yu(e,"checked",t,!1)}function va(e,t){Kd(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&ya(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ya(e,t,n){(t!=="number"||Js(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ci=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(ci(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function Gd(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _s,Xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},py=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){py.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),di[t]=di[e]})});function Qd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||di.hasOwnProperty(e)&&di[e]?(""+t).trim():t+"px"}function Yd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gy=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(e,t){if(t){if(gy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Sa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ia=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ta=null,wr=null,_r=null;function Ff(e){if(e=Xi(e)){if(typeof Ta!="function")throw Error(D(280));var t=e.stateNode;t&&(t=jo(t),Ta(e.stateNode,e.type,t))}}function Jd(e){wr?_r?_r.push(e):_r=[e]:wr=e}function Zd(){if(wr){var e=wr,t=_r;if(_r=wr=null,Ff(e),t)for(e=0;e<t.length;e++)Ff(t[e])}}function ep(e,t){return e(t)}function tp(){}var Nl=!1;function np(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return ep(e,t,n)}finally{Nl=!1,(wr!==null||_r!==null)&&(tp(),Zd())}}function Pi(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var ka=!1;if(Ht)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){ka=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{ka=!1}function my(e,t,n,r,i,o,l,u,f){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(C){this.onError(C)}}var pi=!1,Zs=null,eo=!1,Ca=null,vy={onError:function(e){pi=!0,Zs=e}};function yy(e,t,n,r,i,o,l,u,f){pi=!1,Zs=null,my.apply(vy,arguments)}function wy(e,t,n,r,i,o,l,u,f){if(yy.apply(this,arguments),pi){if(pi){var p=Zs;pi=!1,Zs=null}else throw Error(D(198));eo||(eo=!0,Ca=p)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jf(e){if(Yn(e)!==e)throw Error(D(188))}function _y(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return jf(i),e;if(o===r)return jf(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function ip(e){return e=_y(e),e!==null?sp(e):null}function sp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sp(e);if(t!==null)return t;e=e.sibling}return null}var op=Ge.unstable_scheduleCallback,zf=Ge.unstable_cancelCallback,Ey=Ge.unstable_shouldYield,Sy=Ge.unstable_requestPaint,ue=Ge.unstable_now,Iy=Ge.unstable_getCurrentPriorityLevel,Iu=Ge.unstable_ImmediatePriority,lp=Ge.unstable_UserBlockingPriority,to=Ge.unstable_NormalPriority,Ty=Ge.unstable_LowPriority,ap=Ge.unstable_IdlePriority,xo=null,Et=null;function ky(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Py,Cy=Math.log,Ay=Math.LN2;function Py(e){return e>>>=0,e===0?32:31-(Cy(e)/Ay|0)|0}var Es=64,Ss=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=fi(u):(o&=l,o!==0&&(r=fi(o)))}else l=n&~i,l!==0?r=fi(l):o!==0&&(r=fi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function Ry(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ny(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-ft(o),u=1<<l,f=i[l];f===-1?(!(u&n)||u&r)&&(i[l]=Ry(u,t)):f<=t&&(e.expiredLanes|=u),o&=~u}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function up(){var e=Es;return Es<<=1,!(Es&4194240)&&(Es=64),e}function Ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function Oy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Tu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function cp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fp,ku,hp,dp,pp,Pa=!1,Is=[],hn=null,dn=null,pn=null,Ri=new Map,Ni=new Map,sn=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function ri(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Xi(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ly(e,t,n,r,i){switch(t){case"focusin":return hn=ri(hn,e,t,n,r,i),!0;case"dragenter":return dn=ri(dn,e,t,n,r,i),!0;case"mouseover":return pn=ri(pn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ri.set(o,ri(Ri.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ni.set(o,ri(Ni.get(o)||null,e,t,n,r,i)),!0}return!1}function gp(e){var t=xn(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=rp(n),t!==null){e.blockedOn=t,pp(e.priority,function(){hp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ia=r,n.target.dispatchEvent(r),Ia=null}else return t=Xi(n),t!==null&&ku(t),e.blockedOn=n,!1;t.shift()}return!0}function Bf(e,t,n){js(e)&&n.delete(t)}function xy(){Pa=!1,hn!==null&&js(hn)&&(hn=null),dn!==null&&js(dn)&&(dn=null),pn!==null&&js(pn)&&(pn=null),Ri.forEach(Bf),Ni.forEach(Bf)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Pa||(Pa=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,xy)))}function Oi(e){function t(i){return ii(i,e)}if(0<Is.length){ii(Is[0],e);for(var n=1;n<Is.length;n++){var r=Is[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&ii(hn,e),dn!==null&&ii(dn,e),pn!==null&&ii(pn,e),Ri.forEach(t),Ni.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)gp(n),n.blockedOn===null&&sn.shift()}var Er=Qt.ReactCurrentBatchConfig,ro=!0;function My(e,t,n,r){var i=q,o=Er.transition;Er.transition=null;try{q=1,Cu(e,t,n,r)}finally{q=i,Er.transition=o}}function Uy(e,t,n,r){var i=q,o=Er.transition;Er.transition=null;try{q=4,Cu(e,t,n,r)}finally{q=i,Er.transition=o}}function Cu(e,t,n,r){if(ro){var i=Ra(e,t,n,r);if(i===null)Bl(e,t,r,io,n),$f(e,r);else if(Ly(i,e,t,n,r))r.stopPropagation();else if($f(e,r),t&4&&-1<Dy.indexOf(e)){for(;i!==null;){var o=Xi(i);if(o!==null&&fp(o),o=Ra(e,t,n,r),o===null&&Bl(e,t,r,io,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Bl(e,t,r,null,n)}}var io=null;function Ra(e,t,n,r){if(io=null,e=Su(r),e=xn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function mp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iy()){case Iu:return 1;case lp:return 4;case to:case Ty:return 16;case ap:return 536870912;default:return 16}default:return 16}}var cn=null,Au=null,zs=null;function vp(){if(zs)return zs;var e,t=Au,n=t.length,r,i="value"in cn?cn.value:cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return zs=i.slice(e,1<r?1-r:void 0)}function $s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ts(){return!0}function Vf(){return!1}function Xe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ts:Vf,this.isPropagationStopped=Vf,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ts)},persist:function(){},isPersistent:Ts}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=Xe(Fr),qi=se({},Fr,{view:0,detail:0}),Fy=Xe(qi),Dl,Ll,si,Mo=se({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(Dl=e.screenX-si.screenX,Ll=e.screenY-si.screenY):Ll=Dl=0,si=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),bf=Xe(Mo),jy=se({},Mo,{dataTransfer:0}),zy=Xe(jy),$y=se({},qi,{relatedTarget:0}),xl=Xe($y),By=se({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vy=Xe(By),by=se({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hy=Xe(by),Wy=se({},Fr,{data:0}),Hf=Xe(Wy),Ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qy[e])?!!t[e]:!1}function Ru(){return Xy}var Qy=se({},qi,{key:function(e){if(e.key){var t=Ky[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?$s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yy=Xe(Qy),Jy=se({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=Xe(Jy),Zy=se({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),e0=Xe(Zy),t0=se({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=Xe(t0),r0=se({},Mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i0=Xe(r0),s0=[9,13,27,32],Nu=Ht&&"CompositionEvent"in window,gi=null;Ht&&"documentMode"in document&&(gi=document.documentMode);var o0=Ht&&"TextEvent"in window&&!gi,yp=Ht&&(!Nu||gi&&8<gi&&11>=gi),Kf=" ",Gf=!1;function wp(e,t){switch(e){case"keyup":return s0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function l0(e,t){switch(e){case"compositionend":return _p(t);case"keypress":return t.which!==32?null:(Gf=!0,Kf);case"textInput":return e=t.data,e===Kf&&Gf?null:e;default:return null}}function a0(e,t){if(ar)return e==="compositionend"||!Nu&&wp(e,t)?(e=vp(),zs=Au=cn=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yp&&t.locale!=="ko"?null:t.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!u0[e.type]:t==="textarea"}function Ep(e,t,n,r){Jd(r),t=so(t,"onChange"),0<t.length&&(n=new Pu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,Di=null;function c0(e){Dp(e,0)}function Uo(e){var t=fr(e);if(Wd(t))return e}function f0(e,t){if(e==="change")return t}var Sp=!1;if(Ht){var Ml;if(Ht){var Ul="oninput"in document;if(!Ul){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),Ul=typeof Xf.oninput=="function"}Ml=Ul}else Ml=!1;Sp=Ml&&(!document.documentMode||9<document.documentMode)}function Qf(){mi&&(mi.detachEvent("onpropertychange",Ip),Di=mi=null)}function Ip(e){if(e.propertyName==="value"&&Uo(Di)){var t=[];Ep(t,Di,e,Su(e)),np(c0,t)}}function h0(e,t,n){e==="focusin"?(Qf(),mi=t,Di=n,mi.attachEvent("onpropertychange",Ip)):e==="focusout"&&Qf()}function d0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Uo(Di)}function p0(e,t){if(e==="click")return Uo(t)}function g0(e,t){if(e==="input"||e==="change")return Uo(t)}function m0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:m0;function Li(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fa.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function Yf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jf(e,t){var n=Yf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yf(n)}}function Tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kp(){for(var e=window,t=Js();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Js(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function v0(e){var t=kp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tp(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Jf(n,o);var l=Jf(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var y0=Ht&&"documentMode"in document&&11>=document.documentMode,ur=null,Na=null,vi=null,Oa=!1;function Zf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oa||ur==null||ur!==Js(r)||(r=ur,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vi&&Li(vi,r)||(vi=r,r=so(Na,"onSelect"),0<r.length&&(t=new Pu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function ks(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionend:ks("Transition","TransitionEnd")},Fl={},Cp={};Ht&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Fo(e){if(Fl[e])return Fl[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cp)return Fl[e]=t[n];return e}var Ap=Fo("animationend"),Pp=Fo("animationiteration"),Rp=Fo("animationstart"),Np=Fo("transitionend"),Op=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){Op.set(e,t),Qn(t,[e])}for(var jl=0;jl<eh.length;jl++){var zl=eh[jl],w0=zl.toLowerCase(),_0=zl[0].toUpperCase()+zl.slice(1);Tn(w0,"on"+_0)}Tn(Ap,"onAnimationEnd");Tn(Pp,"onAnimationIteration");Tn(Rp,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Np,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function th(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wy(r,t,void 0,e),e.currentTarget=null}function Dp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],f=u.instance,p=u.currentTarget;if(u=u.listener,f!==o&&i.isPropagationStopped())break e;th(i,u,p),o=f}else for(l=0;l<r.length;l++){if(u=r[l],f=u.instance,p=u.currentTarget,u=u.listener,f!==o&&i.isPropagationStopped())break e;th(i,u,p),o=f}}}if(eo)throw e=Ca,eo=!1,Ca=null,e}function Z(e,t){var n=t[Ua];n===void 0&&(n=t[Ua]=new Set);var r=e+"__bubble";n.has(r)||(Lp(t,e,2,!1),n.add(r))}function $l(e,t,n){var r=0;t&&(r|=4),Lp(n,e,r,t)}var Cs="_reactListening"+Math.random().toString(36).slice(2);function xi(e){if(!e[Cs]){e[Cs]=!0,$d.forEach(function(n){n!=="selectionchange"&&(E0.has(n)||$l(n,!1,e),$l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cs]||(t[Cs]=!0,$l("selectionchange",!1,t))}}function Lp(e,t,n,r){switch(mp(t)){case 1:var i=My;break;case 4:i=Uy;break;default:i=Cu}n=i.bind(null,t,n,e),i=void 0,!ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;l=l.return}for(;u!==null;){if(l=xn(u),l===null)return;if(f=l.tag,f===5||f===6){r=o=l;continue e}u=u.parentNode}}r=r.return}np(function(){var p=o,C=Su(n),A=[];e:{var k=Op.get(e);if(k!==void 0){var O=Pu,R=e;switch(e){case"keypress":if($s(n)===0)break e;case"keydown":case"keyup":O=Yy;break;case"focusin":R="focus",O=xl;break;case"focusout":R="blur",O=xl;break;case"beforeblur":case"afterblur":O=xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=e0;break;case Ap:case Pp:case Rp:O=Vy;break;case Np:O=n0;break;case"scroll":O=Fy;break;case"wheel":O=i0;break;case"copy":case"cut":case"paste":O=Hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Wf}var L=(t&4)!==0,z=!L&&e==="scroll",E=L?k!==null?k+"Capture":null:k;L=[];for(var w=p,S;w!==null;){S=w;var N=S.stateNode;if(S.tag===5&&N!==null&&(S=N,E!==null&&(N=Pi(w,E),N!=null&&L.push(Mi(w,N,S)))),z)break;w=w.return}0<L.length&&(k=new O(k,R,null,n,C),A.push({event:k,listeners:L}))}}if(!(t&7)){e:{if(k=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",k&&n!==Ia&&(R=n.relatedTarget||n.fromElement)&&(xn(R)||R[Wt]))break e;if((O||k)&&(k=C.window===C?C:(k=C.ownerDocument)?k.defaultView||k.parentWindow:window,O?(R=n.relatedTarget||n.toElement,O=p,R=R?xn(R):null,R!==null&&(z=Yn(R),R!==z||R.tag!==5&&R.tag!==6)&&(R=null)):(O=null,R=p),O!==R)){if(L=bf,N="onMouseLeave",E="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(L=Wf,N="onPointerLeave",E="onPointerEnter",w="pointer"),z=O==null?k:fr(O),S=R==null?k:fr(R),k=new L(N,w+"leave",O,n,C),k.target=z,k.relatedTarget=S,N=null,xn(C)===p&&(L=new L(E,w+"enter",R,n,C),L.target=S,L.relatedTarget=z,N=L),z=N,O&&R)t:{for(L=O,E=R,w=0,S=L;S;S=sr(S))w++;for(S=0,N=E;N;N=sr(N))S++;for(;0<w-S;)L=sr(L),w--;for(;0<S-w;)E=sr(E),S--;for(;w--;){if(L===E||E!==null&&L===E.alternate)break t;L=sr(L),E=sr(E)}L=null}else L=null;O!==null&&nh(A,k,O,L,!1),R!==null&&z!==null&&nh(A,z,R,L,!0)}}e:{if(k=p?fr(p):window,O=k.nodeName&&k.nodeName.toLowerCase(),O==="select"||O==="input"&&k.type==="file")var M=f0;else if(qf(k))if(Sp)M=g0;else{M=d0;var U=h0}else(O=k.nodeName)&&O.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(M=p0);if(M&&(M=M(e,p))){Ep(A,M,n,C);break e}U&&U(e,k,p),e==="focusout"&&(U=k._wrapperState)&&U.controlled&&k.type==="number"&&ya(k,"number",k.value)}switch(U=p?fr(p):window,e){case"focusin":(qf(U)||U.contentEditable==="true")&&(ur=U,Na=p,vi=null);break;case"focusout":vi=Na=ur=null;break;case"mousedown":Oa=!0;break;case"contextmenu":case"mouseup":case"dragend":Oa=!1,Zf(A,n,C);break;case"selectionchange":if(y0)break;case"keydown":case"keyup":Zf(A,n,C)}var m;if(Nu)e:{switch(e){case"compositionstart":var d="onCompositionStart";break e;case"compositionend":d="onCompositionEnd";break e;case"compositionupdate":d="onCompositionUpdate";break e}d=void 0}else ar?wp(e,n)&&(d="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(d="onCompositionStart");d&&(yp&&n.locale!=="ko"&&(ar||d!=="onCompositionStart"?d==="onCompositionEnd"&&ar&&(m=vp()):(cn=C,Au="value"in cn?cn.value:cn.textContent,ar=!0)),U=so(p,d),0<U.length&&(d=new Hf(d,e,null,n,C),A.push({event:d,listeners:U}),m?d.data=m:(m=_p(n),m!==null&&(d.data=m)))),(m=o0?l0(e,n):a0(e,n))&&(p=so(p,"onBeforeInput"),0<p.length&&(C=new Hf("onBeforeInput","beforeinput",null,n,C),A.push({event:C,listeners:p}),C.data=m))}Dp(A,t)})}function Mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function so(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pi(e,n),o!=null&&r.unshift(Mi(e,o,i)),o=Pi(e,t),o!=null&&r.push(Mi(e,o,i))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nh(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,f=u.alternate,p=u.stateNode;if(f!==null&&f===r)break;u.tag===5&&p!==null&&(u=p,i?(f=Pi(n,o),f!=null&&l.unshift(Mi(n,f,u))):i||(f=Pi(n,o),f!=null&&l.push(Mi(n,f,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var S0=/\r\n?/g,I0=/\u0000|\uFFFD/g;function rh(e){return(typeof e=="string"?e:""+e).replace(S0,`
`).replace(I0,"")}function As(e,t,n){if(t=rh(t),rh(e)!==t&&n)throw Error(D(425))}function oo(){}var Da=null,La=null;function xa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(e){return ih.resolve(null).then(e).catch(C0)}:Ma;function C0(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oi(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),wt="__reactFiber$"+jr,Ui="__reactProps$"+jr,Wt="__reactContainer$"+jr,Ua="__reactEvents$"+jr,A0="__reactListeners$"+jr,P0="__reactHandles$"+jr;function xn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sh(e);e!==null;){if(n=e[wt])return n;e=sh(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){return e=e[wt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function jo(e){return e[Ui]||null}var Fa=[],hr=-1;function kn(e){return{current:e}}function ee(e){0>hr||(e.current=Fa[hr],Fa[hr]=null,hr--)}function Y(e,t){hr++,Fa[hr]=e.current,e.current=t}var In={},Ce=kn(In),ze=kn(!1),Vn=In;function Pr(e,t){var n=e.type.contextTypes;if(!n)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function lo(){ee(ze),ee(Ce)}function oh(e,t,n){if(Ce.current!==In)throw Error(D(168));Y(Ce,t),Y(ze,n)}function xp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,hy(e)||"Unknown",i));return se({},n,r)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Vn=Ce.current,Y(Ce,e),Y(ze,ze.current),!0}function lh(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=xp(e,t,Vn),r.__reactInternalMemoizedMergedChildContext=e,ee(ze),ee(Ce),Y(Ce,e)):ee(ze),Y(ze,n)}var Mt=null,zo=!1,bl=!1;function Mp(e){Mt===null?Mt=[e]:Mt.push(e)}function R0(e){zo=!0,Mp(e)}function Cn(){if(!bl&&Mt!==null){bl=!0;var e=0,t=q;try{var n=Mt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,zo=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(e+1)),op(Iu,Cn),i}finally{q=t,bl=!1}}return null}var dr=[],pr=0,uo=null,co=0,Je=[],Ze=0,bn=null,Ft=1,jt="";function On(e,t){dr[pr++]=co,dr[pr++]=uo,uo=e,co=t}function Up(e,t,n){Je[Ze++]=Ft,Je[Ze++]=jt,Je[Ze++]=bn,bn=e;var r=Ft;e=jt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var o=32-ft(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ft=1<<32-ft(t)+i|n<<i|r,jt=o+e}else Ft=1<<o|n<<i|r,jt=e}function Du(e){e.return!==null&&(On(e,1),Up(e,1,0))}function Lu(e){for(;e===uo;)uo=dr[--pr],dr[pr]=null,co=dr[--pr],dr[pr]=null;for(;e===bn;)bn=Je[--Ze],Je[Ze]=null,jt=Je[--Ze],Je[Ze]=null,Ft=Je[--Ze],Je[Ze]=null}var We=null,He=null,te=!1,ut=null;function Fp(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ah(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,He=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:Ft,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,He=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function za(e){if(te){var t=He;if(t){var n=t;if(!ah(e,t)){if(ja(e))throw Error(D(418));t=gn(n.nextSibling);var r=We;t&&ah(e,t)?Fp(r,n):(e.flags=e.flags&-4097|2,te=!1,We=e)}}else{if(ja(e))throw Error(D(418));e.flags=e.flags&-4097|2,te=!1,We=e}}}function uh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function Ps(e){if(e!==We)return!1;if(!te)return uh(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xa(e.type,e.memoizedProps)),t&&(t=He)){if(ja(e))throw jp(),Error(D(418));for(;t;)Fp(e,t),t=gn(t.nextSibling)}if(uh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=We?gn(e.stateNode.nextSibling):null;return!0}function jp(){for(var e=He;e;)e=gn(e.nextSibling)}function Rr(){He=We=null,te=!1}function xu(e){ut===null?ut=[e]:ut.push(e)}var N0=Qt.ReactCurrentBatchConfig;function oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Rs(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ch(e){var t=e._init;return t(e._payload)}function zp(e){function t(E,w){if(e){var S=E.deletions;S===null?(E.deletions=[w],E.flags|=16):S.push(w)}}function n(E,w){if(!e)return null;for(;w!==null;)t(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=wn(E,w),E.index=0,E.sibling=null,E}function o(E,w,S){return E.index=S,e?(S=E.alternate,S!==null?(S=S.index,S<w?(E.flags|=2,w):S):(E.flags|=2,w)):(E.flags|=1048576,w)}function l(E){return e&&E.alternate===null&&(E.flags|=2),E}function u(E,w,S,N){return w===null||w.tag!==6?(w=Ql(S,E.mode,N),w.return=E,w):(w=i(w,S),w.return=E,w)}function f(E,w,S,N){var M=S.type;return M===lr?C(E,w,S.props.children,N,S.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===nn&&ch(M)===w.type)?(N=i(w,S.props),N.ref=oi(E,w,S),N.return=E,N):(N=Gs(S.type,S.key,S.props,null,E.mode,N),N.ref=oi(E,w,S),N.return=E,N)}function p(E,w,S,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=Yl(S,E.mode,N),w.return=E,w):(w=i(w,S.children||[]),w.return=E,w)}function C(E,w,S,N,M){return w===null||w.tag!==7?(w=$n(S,E.mode,N,M),w.return=E,w):(w=i(w,S),w.return=E,w)}function A(E,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Ql(""+w,E.mode,S),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ys:return S=Gs(w.type,w.key,w.props,null,E.mode,S),S.ref=oi(E,null,w),S.return=E,S;case or:return w=Yl(w,E.mode,S),w.return=E,w;case nn:var N=w._init;return A(E,N(w._payload),S)}if(ci(w)||ti(w))return w=$n(w,E.mode,S,null),w.return=E,w;Rs(E,w)}return null}function k(E,w,S,N){var M=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:u(E,w,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ys:return S.key===M?f(E,w,S,N):null;case or:return S.key===M?p(E,w,S,N):null;case nn:return M=S._init,k(E,w,M(S._payload),N)}if(ci(S)||ti(S))return M!==null?null:C(E,w,S,N,null);Rs(E,S)}return null}function O(E,w,S,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(S)||null,u(w,E,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ys:return E=E.get(N.key===null?S:N.key)||null,f(w,E,N,M);case or:return E=E.get(N.key===null?S:N.key)||null,p(w,E,N,M);case nn:var U=N._init;return O(E,w,S,U(N._payload),M)}if(ci(N)||ti(N))return E=E.get(S)||null,C(w,E,N,M,null);Rs(w,N)}return null}function R(E,w,S,N){for(var M=null,U=null,m=w,d=w=0,g=null;m!==null&&d<S.length;d++){m.index>d?(g=m,m=null):g=m.sibling;var y=k(E,m,S[d],N);if(y===null){m===null&&(m=g);break}e&&m&&y.alternate===null&&t(E,m),w=o(y,w,d),U===null?M=y:U.sibling=y,U=y,m=g}if(d===S.length)return n(E,m),te&&On(E,d),M;if(m===null){for(;d<S.length;d++)m=A(E,S[d],N),m!==null&&(w=o(m,w,d),U===null?M=m:U.sibling=m,U=m);return te&&On(E,d),M}for(m=r(E,m);d<S.length;d++)g=O(m,E,d,S[d],N),g!==null&&(e&&g.alternate!==null&&m.delete(g.key===null?d:g.key),w=o(g,w,d),U===null?M=g:U.sibling=g,U=g);return e&&m.forEach(function(_){return t(E,_)}),te&&On(E,d),M}function L(E,w,S,N){var M=ti(S);if(typeof M!="function")throw Error(D(150));if(S=M.call(S),S==null)throw Error(D(151));for(var U=M=null,m=w,d=w=0,g=null,y=S.next();m!==null&&!y.done;d++,y=S.next()){m.index>d?(g=m,m=null):g=m.sibling;var _=k(E,m,y.value,N);if(_===null){m===null&&(m=g);break}e&&m&&_.alternate===null&&t(E,m),w=o(_,w,d),U===null?M=_:U.sibling=_,U=_,m=g}if(y.done)return n(E,m),te&&On(E,d),M;if(m===null){for(;!y.done;d++,y=S.next())y=A(E,y.value,N),y!==null&&(w=o(y,w,d),U===null?M=y:U.sibling=y,U=y);return te&&On(E,d),M}for(m=r(E,m);!y.done;d++,y=S.next())y=O(m,E,d,y.value,N),y!==null&&(e&&y.alternate!==null&&m.delete(y.key===null?d:y.key),w=o(y,w,d),U===null?M=y:U.sibling=y,U=y);return e&&m.forEach(function(T){return t(E,T)}),te&&On(E,d),M}function z(E,w,S,N){if(typeof S=="object"&&S!==null&&S.type===lr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ys:e:{for(var M=S.key,U=w;U!==null;){if(U.key===M){if(M=S.type,M===lr){if(U.tag===7){n(E,U.sibling),w=i(U,S.props.children),w.return=E,E=w;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===nn&&ch(M)===U.type){n(E,U.sibling),w=i(U,S.props),w.ref=oi(E,U,S),w.return=E,E=w;break e}n(E,U);break}else t(E,U);U=U.sibling}S.type===lr?(w=$n(S.props.children,E.mode,N,S.key),w.return=E,E=w):(N=Gs(S.type,S.key,S.props,null,E.mode,N),N.ref=oi(E,w,S),N.return=E,E=N)}return l(E);case or:e:{for(U=S.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(E,w.sibling),w=i(w,S.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else t(E,w);w=w.sibling}w=Yl(S,E.mode,N),w.return=E,E=w}return l(E);case nn:return U=S._init,z(E,w,U(S._payload),N)}if(ci(S))return R(E,w,S,N);if(ti(S))return L(E,w,S,N);Rs(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,S),w.return=E,E=w):(n(E,w),w=Ql(S,E.mode,N),w.return=E,E=w),l(E)):n(E,w)}return z}var Nr=zp(!0),$p=zp(!1),fo=kn(null),ho=null,gr=null,Mu=null;function Uu(){Mu=gr=ho=null}function Fu(e){var t=fo.current;ee(fo),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){ho=e,Mu=gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(Mu!==e)if(e={context:e,memoizedValue:t,next:null},gr===null){if(ho===null)throw Error(D(308));gr=e,ho.dependencies={lanes:0,firstContext:e}}else gr=gr.next=e;return t}var Mn=null;function ju(e){Mn===null?Mn=[e]:Mn.push(e)}function Bp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ju(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rn=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kt(e,n)}return i=r.interleaved,i===null?(t.next=t,ju(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kt(e,n)}function Bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}function fh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function po(e,t,n,r){var i=e.updateQueue;rn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var f=u,p=f.next;f.next=null,l===null?o=p:l.next=p,l=f;var C=e.alternate;C!==null&&(C=C.updateQueue,u=C.lastBaseUpdate,u!==l&&(u===null?C.firstBaseUpdate=p:u.next=p,C.lastBaseUpdate=f))}if(o!==null){var A=i.baseState;l=0,C=p=f=null,u=o;do{var k=u.lane,O=u.eventTime;if((r&k)===k){C!==null&&(C=C.next={eventTime:O,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var R=e,L=u;switch(k=t,O=n,L.tag){case 1:if(R=L.payload,typeof R=="function"){A=R.call(O,A,k);break e}A=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=L.payload,k=typeof R=="function"?R.call(O,A,k):R,k==null)break e;A=se({},A,k);break e;case 2:rn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[u]:k.push(u))}else O={eventTime:O,lane:k,tag:u.tag,payload:u.payload,callback:u.callback,next:null},C===null?(p=C=O,f=A):C=C.next=O,l|=k;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;k=u,u=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(C===null&&(f=A),i.baseState=f,i.firstBaseUpdate=p,i.lastBaseUpdate=C,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Wn|=l,e.lanes=l,e.memoizedState=A}}function hh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var Qi={},St=kn(Qi),Fi=kn(Qi),ji=kn(Qi);function Un(e){if(e===Qi)throw Error(D(174));return e}function $u(e,t){switch(Y(ji,t),Y(Fi,e),Y(St,Qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_a(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_a(t,e)}ee(St),Y(St,t)}function Or(){ee(St),ee(Fi),ee(ji)}function bp(e){Un(ji.current);var t=Un(St.current),n=_a(t,e.type);t!==n&&(Y(Fi,e),Y(St,n))}function Bu(e){Fi.current===e&&(ee(St),ee(Fi))}var re=kn(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function Vu(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var Vs=Qt.ReactCurrentDispatcher,Wl=Qt.ReactCurrentBatchConfig,Hn=0,ie=null,he=null,pe=null,mo=!1,yi=!1,zi=0,O0=0;function Ie(){throw Error(D(321))}function bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Hu(e,t,n,r,i,o){if(Hn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vs.current=e===null||e.memoizedState===null?M0:U0,e=n(r,i),yi){o=0;do{if(yi=!1,zi=0,25<=o)throw Error(D(301));o+=1,pe=he=null,t.updateQueue=null,Vs.current=F0,e=n(r,i)}while(yi)}if(Vs.current=vo,t=he!==null&&he.next!==null,Hn=0,pe=he=ie=null,mo=!1,t)throw Error(D(300));return e}function Wu(){var e=zi!==0;return zi=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ie.memoizedState=pe=e:pe=pe.next=e,pe}function it(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=pe===null?ie.memoizedState:pe.next;if(t!==null)pe=t,he=e;else{if(e===null)throw Error(D(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},pe===null?ie.memoizedState=pe=e:pe=pe.next=e}return pe}function $i(e,t){return typeof t=="function"?t(e):t}function Kl(e){var t=it(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,f=null,p=o;do{var C=p.lane;if((Hn&C)===C)f!==null&&(f=f.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var A={lane:C,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};f===null?(u=f=A,l=r):f=f.next=A,ie.lanes|=C,Wn|=C}p=p.next}while(p!==null&&p!==o);f===null?l=r:f.next=u,pt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,Wn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=it(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);pt(o,t.memoizedState)||(je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hp(){}function Wp(e,t){var n=ie,r=it(),i=t(),o=!pt(r.memoizedState,i);if(o&&(r.memoizedState=i,je=!0),r=r.queue,Ku(qp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Bi(9,Gp.bind(null,n,r,i,t),void 0,null),ge===null)throw Error(D(349));Hn&30||Kp(n,t,i)}return i}function Kp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gp(e,t,n,r){t.value=n,t.getSnapshot=r,Xp(t)&&Qp(e)}function qp(e,t,n){return n(function(){Xp(t)&&Qp(e)})}function Xp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Qp(e){var t=Kt(e,1);t!==null&&ht(t,e,1,-1)}function dh(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=x0.bind(null,ie,e),[t.memoizedState,e]}function Bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yp(){return it().memoizedState}function bs(e,t,n,r){var i=yt();ie.flags|=e,i.memoizedState=Bi(1|t,n,void 0,r===void 0?null:r)}function $o(e,t,n,r){var i=it();r=r===void 0?null:r;var o=void 0;if(he!==null){var l=he.memoizedState;if(o=l.destroy,r!==null&&bu(r,l.deps)){i.memoizedState=Bi(t,n,o,r);return}}ie.flags|=e,i.memoizedState=Bi(1|t,n,o,r)}function ph(e,t){return bs(8390656,8,e,t)}function Ku(e,t){return $o(2048,8,e,t)}function Jp(e,t){return $o(4,2,e,t)}function Zp(e,t){return $o(4,4,e,t)}function eg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tg(e,t,n){return n=n!=null?n.concat([e]):null,$o(4,4,eg.bind(null,t,e),n)}function Gu(){}function ng(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rg(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ig(e,t,n){return Hn&21?(pt(n,t)||(n=up(),ie.lanes|=n,Wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function D0(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{q=n,Wl.transition=r}}function sg(){return it().memoizedState}function L0(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},og(e))lg(t,n);else if(n=Bp(e,t,n,r),n!==null){var i=Oe();ht(n,e,r,i),ag(n,t,r)}}function x0(e,t,n){var r=yn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(og(e))lg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,pt(u,l)){var f=t.interleaved;f===null?(i.next=i,ju(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}n=Bp(e,t,i,r),n!==null&&(i=Oe(),ht(n,e,r,i),ag(n,t,r))}}function og(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function lg(e,t){yi=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ag(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}var vo={readContext:rt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},M0={readContext:rt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:ph,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bs(4194308,4,eg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bs(4194308,4,e,t)},useInsertionEffect:function(e,t){return bs(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=L0.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:dh,useDebugValue:Gu,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=dh(!1),t=e[0];return e=D0.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=yt();if(te){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),ge===null)throw Error(D(349));Hn&30||Kp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ph(qp.bind(null,r,o,e),[e]),r.flags|=2048,Bi(9,Gp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=ge.identifierPrefix;if(te){var n=jt,r=Ft;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=O0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},U0={readContext:rt,useCallback:ng,useContext:rt,useEffect:Ku,useImperativeHandle:tg,useInsertionEffect:Jp,useLayoutEffect:Zp,useMemo:rg,useReducer:Kl,useRef:Yp,useState:function(){return Kl($i)},useDebugValue:Gu,useDeferredValue:function(e){var t=it();return ig(t,he.memoizedState,e)},useTransition:function(){var e=Kl($i)[0],t=it().memoizedState;return[e,t]},useMutableSource:Hp,useSyncExternalStore:Wp,useId:sg,unstable_isNewReconciler:!1},F0={readContext:rt,useCallback:ng,useContext:rt,useEffect:Ku,useImperativeHandle:tg,useInsertionEffect:Jp,useLayoutEffect:Zp,useMemo:rg,useReducer:Gl,useRef:Yp,useState:function(){return Gl($i)},useDebugValue:Gu,useDeferredValue:function(e){var t=it();return he===null?t.memoizedState=e:ig(t,he.memoizedState,e)},useTransition:function(){var e=Gl($i)[0],t=it().memoizedState;return[e,t]},useMutableSource:Hp,useSyncExternalStore:Wp,useId:sg,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ba(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bo={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=yn(e),o=bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,i),t!==null&&(ht(t,e,i,r),Bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=yn(e),o=bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,i),t!==null&&(ht(t,e,i,r),Bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=yn(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=mn(e,i,r),t!==null&&(ht(t,e,r,n),Bs(t,e,r))}};function gh(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Li(n,r)||!Li(i,o):!0}function ug(e,t,n){var r=!1,i=In,o=t.contextType;return typeof o=="object"&&o!==null?o=rt(o):(i=$e(t)?Vn:Ce.current,r=t.contextTypes,o=(r=r!=null)?Pr(e,i):In),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function mh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bo.enqueueReplaceState(t,t.state,null)}function Va(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},zu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=rt(o):(o=$e(t)?Vn:Ce.current,i.context=Pr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ba(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bo.enqueueReplaceState(i,i.state,null),po(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",r=t;do n+=fy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ba(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var j0=typeof WeakMap=="function"?WeakMap:Map;function cg(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wo||(wo=!0,Za=r),ba(e,t)},n}function fg(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ba(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ba(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function vh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new j0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=J0.bind(null,e,t,n),t.then(e,e))}function yh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e)}var z0=Qt.ReactCurrentOwner,je=!1;function Re(e,t,n,r){t.child=e===null?$p(t,null,n,r):Nr(t,e.child,n,r)}function _h(e,t,n,r,i){n=n.render;var o=t.ref;return Sr(t,i),r=Hu(e,t,n,r,o,i),n=Wu(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(te&&n&&Du(t),t.flags|=1,Re(e,t,r,i),t.child)}function Eh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!tc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,hg(e,t,o,r,i)):(e=Gs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Li,n(l,r)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=wn(o,r),e.ref=t.ref,e.return=t,t.child=e}function hg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Li(o,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return Ha(e,t,n,r,i)}function dg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(vr,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(vr,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(vr,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(vr,be),be|=r;return Re(e,t,i,n),t.child}function pg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ha(e,t,n,r,i){var o=$e(n)?Vn:Ce.current;return o=Pr(t,o),Sr(t,i),n=Hu(e,t,n,r,o,i),r=Wu(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(te&&r&&Du(t),t.flags|=1,Re(e,t,n,i),t.child)}function Sh(e,t,n,r,i){if($e(n)){var o=!0;ao(t)}else o=!1;if(Sr(t,i),t.stateNode===null)Hs(e,t),ug(t,n,r),Va(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var f=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=rt(p):(p=$e(n)?Vn:Ce.current,p=Pr(t,p));var C=n.getDerivedStateFromProps,A=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function";A||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||f!==p)&&mh(t,l,r,p),rn=!1;var k=t.memoizedState;l.state=k,po(t,r,l,i),f=t.memoizedState,u!==r||k!==f||ze.current||rn?(typeof C=="function"&&(Ba(t,n,C,r),f=t.memoizedState),(u=rn||gh(t,n,u,r,k,f,p))?(A||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),l.props=r,l.state=f,l.context=p,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Vp(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:lt(t.type,u),l.props=p,A=t.pendingProps,k=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=rt(f):(f=$e(n)?Vn:Ce.current,f=Pr(t,f));var O=n.getDerivedStateFromProps;(C=typeof O=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==A||k!==f)&&mh(t,l,r,f),rn=!1,k=t.memoizedState,l.state=k,po(t,r,l,i);var R=t.memoizedState;u!==A||k!==R||ze.current||rn?(typeof O=="function"&&(Ba(t,n,O,r),R=t.memoizedState),(p=rn||gh(t,n,p,r,k,R,f)||!1)?(C||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,R,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,R,f)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=R),l.props=r,l.state=R,l.context=f,r=p):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),r=!1)}return Wa(e,t,n,r,o,i)}function Wa(e,t,n,r,i,o){pg(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&lh(t,n,!1),Gt(e,t,o);r=t.stateNode,z0.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Nr(t,e.child,null,o),t.child=Nr(t,null,u,o)):Re(e,t,u,o),t.memoizedState=r.state,i&&lh(t,n,!0),t.child}function gg(e){var t=e.stateNode;t.pendingContext?oh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oh(e,t.context,!1),$u(e,t.containerInfo)}function Ih(e,t,n,r,i){return Rr(),xu(i),t.flags|=256,Re(e,t,n,r),t.child}var Ka={dehydrated:null,treeContext:null,retryLane:0};function Ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function mg(e,t,n){var r=t.pendingProps,i=re.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(re,i&1),e===null)return za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ho(l,r,0,null),e=$n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ga(n),t.memoizedState=Ka,e):qu(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return $0(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var f={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=wn(i,f),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=wn(u,o):(o=$n(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ga(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ka,r}return o=e.child,e=o.sibling,r=wn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qu(e,t){return t=Ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ns(e,t,n,r){return r!==null&&xu(r),Nr(t,e.child,null,n),e=qu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ql(Error(D(422))),Ns(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ho({mode:"visible",children:r.children},i,0,null),o=$n(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Nr(t,e.child,null,l),t.child.memoizedState=Ga(l),t.memoizedState=Ka,o);if(!(t.mode&1))return Ns(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(D(419)),r=ql(o,r,void 0),Ns(e,t,l,r)}if(u=(l&e.childLanes)!==0,je||u){if(r=ge,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kt(e,i),ht(r,e,i,-1))}return ec(),r=ql(Error(D(421))),Ns(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Z0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=gn(i.nextSibling),We=t,te=!0,ut=null,e!==null&&(Je[Ze++]=Ft,Je[Ze++]=jt,Je[Ze++]=bn,Ft=e.id,jt=e.overflow,bn=t),t=qu(t,r.children),t.flags|=4096,t)}function Th(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$a(e.return,t,n)}function Xl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Re(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Th(e,n,t);else if(e.tag===19)Th(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xl(t,!0,n,null,o);break;case"together":Xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function B0(e,t,n){switch(t.tag){case 3:gg(t),Rr();break;case 5:bp(t);break;case 1:$e(t.type)&&ao(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?mg(e,t,n):(Y(re,re.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,dg(e,t,n)}return Gt(e,t,n)}var yg,qa,wg,_g;yg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qa=function(){};wg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Un(St.current);var o=null;switch(n){case"input":i=ma(e,i),r=ma(e,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=wa(e,i),r=wa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}Ea(n,r);var l;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var u=i[p];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Ci.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var f=r[p];if(u=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&f!==u&&(f!=null||u!=null))if(p==="style")if(u){for(l in u)!u.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&u[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(o||(o=[]),o.push(p,n)),n=f;else p==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,u=u?u.__html:void 0,f!=null&&u!==f&&(o=o||[]).push(p,f)):p==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(p,""+f):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(p)?(f!=null&&p==="onScroll"&&Z("scroll",e),o||u===f||(o=[])):(o=o||[]).push(p,f))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}};_g=function(e,t,n,r){n!==r&&(t.flags|=4)};function li(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function V0(e,t,n){var r=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return $e(t.type)&&lo(),Te(t),null;case 3:return r=t.stateNode,Or(),ee(ze),ee(Ce),Vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(nu(ut),ut=null))),qa(e,t),Te(t),null;case 5:Bu(t);var i=Un(ji.current);if(n=t.type,e!==null&&t.stateNode!=null)wg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Te(t),null}if(e=Un(St.current),Ps(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wt]=t,r[Ui]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)Z(hi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Lf(r,o),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Z("invalid",r);break;case"textarea":Mf(r,o),Z("invalid",r)}Ea(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&As(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&As(r.textContent,u,e),i=["children",""+u]):Ci.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&Z("scroll",r)}switch(n){case"input":ws(r),xf(r,o,!0);break;case"textarea":ws(r),Uf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[wt]=t,e[Ui]=r,yg(e,t,!1,!1),t.stateNode=e;e:{switch(l=Sa(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)Z(hi[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":Lf(e,r),i=ma(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Z("invalid",e);break;case"textarea":Mf(e,r),i=wa(e,r),Z("invalid",e);break;default:i=r}Ea(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var f=u[o];o==="style"?Yd(e,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Xd(e,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Ai(e,f):typeof f=="number"&&Ai(e,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ci.hasOwnProperty(o)?f!=null&&o==="onScroll"&&Z("scroll",e):f!=null&&yu(e,o,f,l))}switch(n){case"input":ws(e),xf(e,r,!1);break;case"textarea":ws(e),Uf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?yr(e,!!r.multiple,o,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)_g(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Un(ji.current),Un(St.current),Ps(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(o=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:As(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&As(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Te(t),null;case 13:if(ee(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&He!==null&&t.mode&1&&!(t.flags&128))jp(),Rr(),t.flags|=98560,o=!1;else if(o=Ps(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[wt]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else ut!==null&&(nu(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?de===0&&(de=3):ec())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Or(),qa(e,t),e===null&&xi(t.stateNode.containerInfo),Te(t),null;case 10:return Fu(t.type._context),Te(t),null;case 17:return $e(t.type)&&lo(),Te(t),null;case 19:if(ee(re),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)li(o,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=go(e),l!==null){for(t.flags|=128,li(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>Lr&&(t.flags|=128,r=!0,li(o,!1),t.lanes=4194304)}else{if(!r)if(e=go(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),li(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return Te(t),null}else 2*ue()-o.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,li(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Zu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function b0(e,t){switch(Lu(t),t.tag){case 1:return $e(t.type)&&lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),ee(ze),ee(Ce),Vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bu(t),null;case 13:if(ee(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(re),null;case 4:return Or(),null;case 10:return Fu(t.type._context),null;case 22:case 23:return Zu(),null;case 24:return null;default:return null}}var Os=!1,ke=!1,H0=typeof WeakSet=="function"?WeakSet:Set,j=null;function mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Xa(e,t,n){try{n()}catch(r){oe(e,t,r)}}var kh=!1;function W0(e,t){if(Da=ro,e=kp(),Ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,f=-1,p=0,C=0,A=e,k=null;t:for(;;){for(var O;A!==n||i!==0&&A.nodeType!==3||(u=l+i),A!==o||r!==0&&A.nodeType!==3||(f=l+r),A.nodeType===3&&(l+=A.nodeValue.length),(O=A.firstChild)!==null;)k=A,A=O;for(;;){if(A===e)break t;if(k===n&&++p===i&&(u=l),k===o&&++C===r&&(f=l),(O=A.nextSibling)!==null)break;A=k,k=A.parentNode}A=O}n=u===-1||f===-1?null:{start:u,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(La={focusedElem:e,selectionRange:n},ro=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var R=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var L=R.memoizedProps,z=R.memoizedState,E=t.stateNode,w=E.getSnapshotBeforeUpdate(t.elementType===t.type?L:lt(t.type,L),z);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(N){oe(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return R=kh,kh=!1,R}function wi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Xa(t,n,o)}i=i.next}while(i!==r)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Eg(e){var t=e.alternate;t!==null&&(e.alternate=null,Eg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[Ui],delete t[Ua],delete t[A0],delete t[P0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sg(e){return e.tag===5||e.tag===3||e.tag===4}function Ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(Ya(e,t,n),e=e.sibling;e!==null;)Ya(e,t,n),e=e.sibling}function Ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ja(e,t,n),e=e.sibling;e!==null;)Ja(e,t,n),e=e.sibling}var ve=null,at=!1;function en(e,t,n){for(n=n.child;n!==null;)Ig(e,t,n),n=n.sibling}function Ig(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(xo,n)}catch{}switch(n.tag){case 5:ke||mr(n,t);case 6:var r=ve,i=at;ve=null,en(e,t,n),ve=r,at=i,ve!==null&&(at?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(at?(e=ve,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),Oi(e)):Vl(ve,n.stateNode));break;case 4:r=ve,i=at,ve=n.stateNode.containerInfo,at=!0,en(e,t,n),ve=r,at=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Xa(n,t,l),i=i.next}while(i!==r)}en(e,t,n);break;case 1:if(!ke&&(mr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){oe(n,t,u)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,en(e,t,n),ke=r):en(e,t,n);break;default:en(e,t,n)}}function Ah(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new H0),t.forEach(function(r){var i=ew.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,at=!1;break e;case 3:ve=u.stateNode.containerInfo,at=!0;break e;case 4:ve=u.stateNode.containerInfo,at=!0;break e}u=u.return}if(ve===null)throw Error(D(160));Ig(o,l,i),ve=null,at=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(p){oe(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tg(t,e),t=t.sibling}function Tg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),vt(e),r&4){try{wi(3,e,e.return),Vo(3,e)}catch(L){oe(e,e.return,L)}try{wi(5,e,e.return)}catch(L){oe(e,e.return,L)}}break;case 1:ot(t,e),vt(e),r&512&&n!==null&&mr(n,n.return);break;case 5:if(ot(t,e),vt(e),r&512&&n!==null&&mr(n,n.return),e.flags&32){var i=e.stateNode;try{Ai(i,"")}catch(L){oe(e,e.return,L)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Kd(i,o),Sa(u,l);var p=Sa(u,o);for(l=0;l<f.length;l+=2){var C=f[l],A=f[l+1];C==="style"?Yd(i,A):C==="dangerouslySetInnerHTML"?Xd(i,A):C==="children"?Ai(i,A):yu(i,C,A,p)}switch(u){case"input":va(i,o);break;case"textarea":Gd(i,o);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var O=o.value;O!=null?yr(i,!!o.multiple,O,!1):k!==!!o.multiple&&(o.defaultValue!=null?yr(i,!!o.multiple,o.defaultValue,!0):yr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ui]=o}catch(L){oe(e,e.return,L)}}break;case 6:if(ot(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(L){oe(e,e.return,L)}}break;case 3:if(ot(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(t.containerInfo)}catch(L){oe(e,e.return,L)}break;case 4:ot(t,e),vt(e);break;case 13:ot(t,e),vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yu=ue())),r&4&&Ah(e);break;case 22:if(C=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(p=ke)||C,ot(t,e),ke=p):ot(t,e),vt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!C&&e.mode&1)for(j=e,C=e.child;C!==null;){for(A=j=C;j!==null;){switch(k=j,O=k.child,k.tag){case 0:case 11:case 14:case 15:wi(4,k,k.return);break;case 1:mr(k,k.return);var R=k.stateNode;if(typeof R.componentWillUnmount=="function"){r=k,n=k.return;try{t=r,R.props=t.memoizedProps,R.state=t.memoizedState,R.componentWillUnmount()}catch(L){oe(r,n,L)}}break;case 5:mr(k,k.return);break;case 22:if(k.memoizedState!==null){Rh(A);continue}}O!==null?(O.return=k,j=O):Rh(A)}C=C.sibling}e:for(C=null,A=e;;){if(A.tag===5){if(C===null){C=A;try{i=A.stateNode,p?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=A.stateNode,f=A.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,u.style.display=Qd("display",l))}catch(L){oe(e,e.return,L)}}}else if(A.tag===6){if(C===null)try{A.stateNode.nodeValue=p?"":A.memoizedProps}catch(L){oe(e,e.return,L)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;C===A&&(C=null),A=A.return}C===A&&(C=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:ot(t,e),vt(e),r&4&&Ah(e);break;case 21:break;default:ot(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sg(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ai(i,""),r.flags&=-33);var o=Ch(e);Ja(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Ch(e);Ya(e,u,l);break;default:throw Error(D(161))}}catch(f){oe(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K0(e,t,n){j=e,kg(e)}function kg(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Os;if(!l){var u=i.alternate,f=u!==null&&u.memoizedState!==null||ke;u=Os;var p=ke;if(Os=l,(ke=f)&&!p)for(j=i;j!==null;)l=j,f=l.child,l.tag===22&&l.memoizedState!==null?Nh(i):f!==null?(f.return=l,j=f):Nh(i);for(;o!==null;)j=o,kg(o),o=o.sibling;j=i,Os=u,ke=p}Ph(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):Ph(e)}}function Ph(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||Vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hh(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hh(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var C=p.memoizedState;if(C!==null){var A=C.dehydrated;A!==null&&Oi(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}ke||t.flags&512&&Qa(t)}catch(k){oe(t,t.return,k)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Rh(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Nh(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vo(4,t)}catch(f){oe(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(f){oe(t,i,f)}}var o=t.return;try{Qa(t)}catch(f){oe(t,o,f)}break;case 5:var l=t.return;try{Qa(t)}catch(f){oe(t,l,f)}}}catch(f){oe(t,t.return,f)}if(t===e){j=null;break}var u=t.sibling;if(u!==null){u.return=t.return,j=u;break}j=t.return}}var G0=Math.ceil,yo=Qt.ReactCurrentDispatcher,Xu=Qt.ReactCurrentOwner,tt=Qt.ReactCurrentBatchConfig,W=0,ge=null,ce=null,ye=0,be=0,vr=kn(0),de=0,Vi=null,Wn=0,bo=0,Qu=0,_i=null,Me=null,Yu=0,Lr=1/0,xt=null,wo=!1,Za=null,vn=null,Ds=!1,fn=null,_o=0,Ei=0,eu=null,Ws=-1,Ks=0;function Oe(){return W&6?ue():Ws!==-1?Ws:Ws=ue()}function yn(e){return e.mode&1?W&2&&ye!==0?ye&-ye:N0.transition!==null?(Ks===0&&(Ks=up()),Ks):(e=q,e!==0||(e=window.event,e=e===void 0?16:mp(e.type)),e):1}function ht(e,t,n,r){if(50<Ei)throw Ei=0,eu=null,Error(D(185));Gi(e,n,r),(!(W&2)||e!==ge)&&(e===ge&&(!(W&2)&&(bo|=n),de===4&&on(e,ye)),Be(e,r),n===1&&W===0&&!(t.mode&1)&&(Lr=ue()+500,zo&&Cn()))}function Be(e,t){var n=e.callbackNode;Ny(e,t);var r=no(e,e===ge?ye:0);if(r===0)n!==null&&zf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zf(n),t===1)e.tag===0?R0(Oh.bind(null,e)):Mp(Oh.bind(null,e)),k0(function(){!(W&6)&&Cn()}),n=null;else{switch(cp(r)){case 1:n=Iu;break;case 4:n=lp;break;case 16:n=to;break;case 536870912:n=ap;break;default:n=to}n=Lg(n,Cg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cg(e,t){if(Ws=-1,Ks=0,W&6)throw Error(D(327));var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var r=no(e,e===ge?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Eo(e,r);else{t=r;var i=W;W|=2;var o=Pg();(ge!==e||ye!==t)&&(xt=null,Lr=ue()+500,zn(e,t));do try{Q0();break}catch(u){Ag(e,u)}while(!0);Uu(),yo.current=o,W=i,ce!==null?t=0:(ge=null,ye=0,t=de)}if(t!==0){if(t===2&&(i=Aa(e),i!==0&&(r=i,t=tu(e,i))),t===1)throw n=Vi,zn(e,0),on(e,r),Be(e,ue()),n;if(t===6)on(e,r);else{if(i=e.current.alternate,!(r&30)&&!q0(i)&&(t=Eo(e,r),t===2&&(o=Aa(e),o!==0&&(r=o,t=tu(e,o))),t===1))throw n=Vi,zn(e,0),on(e,r),Be(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Dn(e,Me,xt);break;case 3:if(on(e,r),(r&130023424)===r&&(t=Yu+500-ue(),10<t)){if(no(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ma(Dn.bind(null,e,Me,xt),t);break}Dn(e,Me,xt);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ft(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*G0(r/1960))-r,10<r){e.timeoutHandle=Ma(Dn.bind(null,e,Me,xt),r);break}Dn(e,Me,xt);break;case 5:Dn(e,Me,xt);break;default:throw Error(D(329))}}}return Be(e,ue()),e.callbackNode===n?Cg.bind(null,e):null}function tu(e,t){var n=_i;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=Eo(e,t),e!==2&&(t=Me,Me=n,t!==null&&nu(t)),e}function nu(e){Me===null?Me=e:Me.push.apply(Me,e)}function q0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!pt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~Qu,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function Oh(e){if(W&6)throw Error(D(327));Ir();var t=no(e,0);if(!(t&1))return Be(e,ue()),null;var n=Eo(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=tu(e,r))}if(n===1)throw n=Vi,zn(e,0),on(e,t),Be(e,ue()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Me,xt),Be(e,ue()),null}function Ju(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Lr=ue()+500,zo&&Cn())}}function Kn(e){fn!==null&&fn.tag===0&&!(W&6)&&Ir();var t=W;W|=1;var n=tt.transition,r=q;try{if(tt.transition=null,q=1,e)return e()}finally{q=r,tt.transition=n,W=t,!(W&6)&&Cn()}}function Zu(){be=vr.current,ee(vr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,T0(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:Or(),ee(ze),ee(Ce),Vu();break;case 5:Bu(r);break;case 4:Or();break;case 13:ee(re);break;case 19:ee(re);break;case 10:Fu(r.type._context);break;case 22:case 23:Zu()}n=n.return}if(ge=e,ce=e=wn(e.current,null),ye=be=t,de=0,Vi=null,Qu=bo=Wn=0,Me=_i=null,Mn!==null){for(t=0;t<Mn.length;t++)if(n=Mn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Mn=null}return e}function Ag(e,t){do{var n=ce;try{if(Uu(),Vs.current=vo,mo){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mo=!1}if(Hn=0,pe=he=ie=null,yi=!1,zi=0,Xu.current=null,n===null||n.return===null){de=1,Vi=t,ce=null;break}e:{var o=e,l=n.return,u=n,f=t;if(t=ye,u.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var p=f,C=u,A=C.tag;if(!(C.mode&1)&&(A===0||A===11||A===15)){var k=C.alternate;k?(C.updateQueue=k.updateQueue,C.memoizedState=k.memoizedState,C.lanes=k.lanes):(C.updateQueue=null,C.memoizedState=null)}var O=yh(l);if(O!==null){O.flags&=-257,wh(O,l,u,o,t),O.mode&1&&vh(o,p,t),t=O,f=p;var R=t.updateQueue;if(R===null){var L=new Set;L.add(f),t.updateQueue=L}else R.add(f);break e}else{if(!(t&1)){vh(o,p,t),ec();break e}f=Error(D(426))}}else if(te&&u.mode&1){var z=yh(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),wh(z,l,u,o,t),xu(Dr(f,u));break e}}o=f=Dr(f,u),de!==4&&(de=2),_i===null?_i=[o]:_i.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var E=cg(o,f,t);fh(o,E);break e;case 1:u=f;var w=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(vn===null||!vn.has(S)))){o.flags|=65536,t&=-t,o.lanes|=t;var N=fg(o,u,t);fh(o,N);break e}}o=o.return}while(o!==null)}Ng(n)}catch(M){t=M,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function Pg(){var e=yo.current;return yo.current=vo,e===null?vo:e}function ec(){(de===0||de===3||de===2)&&(de=4),ge===null||!(Wn&268435455)&&!(bo&268435455)||on(ge,ye)}function Eo(e,t){var n=W;W|=2;var r=Pg();(ge!==e||ye!==t)&&(xt=null,zn(e,t));do try{X0();break}catch(i){Ag(e,i)}while(!0);if(Uu(),W=n,yo.current=r,ce!==null)throw Error(D(261));return ge=null,ye=0,de}function X0(){for(;ce!==null;)Rg(ce)}function Q0(){for(;ce!==null&&!Ey();)Rg(ce)}function Rg(e){var t=Dg(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Ng(e):ce=t,Xu.current=null}function Ng(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=b0(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ce=null;return}}else if(n=V0(n,t,be),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);de===0&&(de=5)}function Dn(e,t,n){var r=q,i=tt.transition;try{tt.transition=null,q=1,Y0(e,t,n,r)}finally{tt.transition=i,q=r}return null}function Y0(e,t,n,r){do Ir();while(fn!==null);if(W&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Oy(e,o),e===ge&&(ce=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ds||(Ds=!0,Lg(to,function(){return Ir(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var l=q;q=1;var u=W;W|=4,Xu.current=null,W0(e,n),Tg(n,e),v0(La),ro=!!Da,La=Da=null,e.current=n,K0(n),Sy(),W=u,q=l,tt.transition=o}else e.current=n;if(Ds&&(Ds=!1,fn=e,_o=i),o=e.pendingLanes,o===0&&(vn=null),ky(n.stateNode),Be(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wo)throw wo=!1,e=Za,Za=null,e;return _o&1&&e.tag!==0&&Ir(),o=e.pendingLanes,o&1?e===eu?Ei++:(Ei=0,eu=e):Ei=0,Cn(),null}function Ir(){if(fn!==null){var e=cp(_o),t=tt.transition,n=q;try{if(tt.transition=null,q=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,_o=0,W&6)throw Error(D(331));var i=W;for(W|=4,j=e.current;j!==null;){var o=j,l=o.child;if(j.flags&16){var u=o.deletions;if(u!==null){for(var f=0;f<u.length;f++){var p=u[f];for(j=p;j!==null;){var C=j;switch(C.tag){case 0:case 11:case 15:wi(8,C,o)}var A=C.child;if(A!==null)A.return=C,j=A;else for(;j!==null;){C=j;var k=C.sibling,O=C.return;if(Eg(C),C===p){j=null;break}if(k!==null){k.return=O,j=k;break}j=O}}}var R=o.alternate;if(R!==null){var L=R.child;if(L!==null){R.child=null;do{var z=L.sibling;L.sibling=null,L=z}while(L!==null)}}j=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,j=l;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wi(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,j=E;break e}j=o.return}}var w=e.current;for(j=w;j!==null;){l=j;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,j=S;else e:for(l=w;j!==null;){if(u=j,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Vo(9,u)}}catch(M){oe(u,u.return,M)}if(u===l){j=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,j=N;break e}j=u.return}}if(W=i,Cn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(xo,e)}catch{}r=!0}return r}finally{q=n,tt.transition=t}}return!1}function Dh(e,t,n){t=Dr(n,t),t=cg(e,t,1),e=mn(e,t,1),t=Oe(),e!==null&&(Gi(e,1,t),Be(e,t))}function oe(e,t,n){if(e.tag===3)Dh(e,e,n);else for(;t!==null;){if(t.tag===3){Dh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=Dr(n,e),e=fg(t,e,1),t=mn(t,e,1),e=Oe(),t!==null&&(Gi(t,1,e),Be(t,e));break}}t=t.return}}function J0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ye&n)===n&&(de===4||de===3&&(ye&130023424)===ye&&500>ue()-Yu?zn(e,0):Qu|=n),Be(e,t)}function Og(e,t){t===0&&(e.mode&1?(t=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):t=1);var n=Oe();e=Kt(e,t),e!==null&&(Gi(e,t,n),Be(e,n))}function Z0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Og(e,n)}function ew(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Og(e,n)}var Dg;Dg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,B0(e,t,n);je=!!(e.flags&131072)}else je=!1,te&&t.flags&1048576&&Up(t,co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var i=Pr(t,Ce.current);Sr(t,n),i=Hu(null,t,r,e,i,n);var o=Wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(o=!0,ao(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zu(t),i.updater=Bo,t.stateNode=i,i._reactInternals=t,Va(t,r,e,n),t=Wa(null,t,r,!0,o,n)):(t.tag=0,te&&o&&Du(t),Re(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=nw(r),e=lt(r,e),i){case 0:t=Ha(null,t,r,e,n);break e;case 1:t=Sh(null,t,r,e,n);break e;case 11:t=_h(null,t,r,e,n);break e;case 14:t=Eh(null,t,r,lt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Ha(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Sh(e,t,r,i,n);case 3:e:{if(gg(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vp(e,t),po(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Dr(Error(D(423)),t),t=Ih(e,t,r,n,i);break e}else if(r!==i){i=Dr(Error(D(424)),t),t=Ih(e,t,r,n,i);break e}else for(He=gn(t.stateNode.containerInfo.firstChild),We=t,te=!0,ut=null,n=$p(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===i){t=Gt(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return bp(t),e===null&&za(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,xa(r,i)?l=null:o!==null&&xa(r,o)&&(t.flags|=32),pg(e,t),Re(e,t,l,n),t.child;case 6:return e===null&&za(t),null;case 13:return mg(e,t,n);case 4:return $u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nr(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),_h(e,t,r,i,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Y(fo,r._currentValue),r._currentValue=l,o!==null)if(pt(o.value,l)){if(o.children===i.children&&!ze.current){t=Gt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var f=u.firstContext;f!==null;){if(f.context===r){if(o.tag===1){f=bt(-1,n&-n),f.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var C=p.pending;C===null?f.next=f:(f.next=C.next,C.next=f),p.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),$a(o.return,n,t),u.lanes|=n;break}f=f.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(D(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),$a(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Re(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sr(t,n),i=rt(i),r=r(i),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),Eh(e,t,r,i,n);case 15:return hg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Hs(e,t),t.tag=1,$e(r)?(e=!0,ao(t)):e=!1,Sr(t,n),ug(t,r,i),Va(t,r,i,n),Wa(null,t,r,!0,e,n);case 19:return vg(e,t,n);case 22:return dg(e,t,n)}throw Error(D(156,t.tag))};function Lg(e,t){return op(e,t)}function tw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new tw(e,t,n,r)}function tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nw(e){if(typeof e=="function")return tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_u)return 11;if(e===Eu)return 14}return 2}function wn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gs(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")tc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case lr:return $n(n.children,i,o,t);case wu:l=8,i|=8;break;case ha:return e=et(12,n,t,i|2),e.elementType=ha,e.lanes=o,e;case da:return e=et(13,n,t,i),e.elementType=da,e.lanes=o,e;case pa:return e=et(19,n,t,i),e.elementType=pa,e.lanes=o,e;case bd:return Ho(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bd:l=10;break e;case Vd:l=9;break e;case _u:l=11;break e;case Eu:l=14;break e;case nn:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=et(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function $n(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Ho(e,t,n,r){return e=et(22,e,r,t),e.elementType=bd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nc(e,t,n,r,i,o,l,u,f){return e=new rw(e,t,n,u,f),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(o),e}function iw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xg(e){if(!e)return In;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if($e(n))return xp(e,n,t)}return t}function Mg(e,t,n,r,i,o,l,u,f){return e=nc(n,r,!0,e,i,o,l,u,f),e.context=xg(null),n=e.current,r=Oe(),i=yn(n),o=bt(r,i),o.callback=t??null,mn(n,o,i),e.current.lanes=i,Gi(e,i,r),Be(e,r),e}function Wo(e,t,n,r){var i=t.current,o=Oe(),l=yn(i);return n=xg(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(i,t,l),e!==null&&(ht(e,i,l,o),Bs(e,i,l)),l}function So(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rc(e,t){Lh(e,t),(e=e.alternate)&&Lh(e,t)}function sw(){return null}var Ug=typeof reportError=="function"?reportError:function(e){console.error(e)};function ic(e){this._internalRoot=e}Ko.prototype.render=ic.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Wo(e,t,null,null)};Ko.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kn(function(){Wo(null,e,null,null)}),t[Wt]=null}};function Ko(e){this._internalRoot=e}Ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=dp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&gp(e)}};function sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xh(){}function ow(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var p=So(l);o.call(p)}}var l=Mg(t,r,e,0,null,!1,!1,"",xh);return e._reactRootContainer=l,e[Wt]=l.current,xi(e.nodeType===8?e.parentNode:e),Kn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var p=So(f);u.call(p)}}var f=nc(e,0,!1,null,null,!1,!1,"",xh);return e._reactRootContainer=f,e[Wt]=f.current,xi(e.nodeType===8?e.parentNode:e),Kn(function(){Wo(t,f,n,r)}),f}function qo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var f=So(l);u.call(f)}}Wo(t,l,e,i)}else l=ow(n,t,e,i,r);return So(l)}fp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fi(t.pendingLanes);n!==0&&(Tu(t,n|1),Be(t,ue()),!(W&6)&&(Lr=ue()+500,Cn()))}break;case 13:Kn(function(){var r=Kt(e,1);if(r!==null){var i=Oe();ht(r,e,1,i)}}),rc(e,1)}};ku=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Oe();ht(t,e,134217728,n)}rc(e,134217728)}};hp=function(e){if(e.tag===13){var t=yn(e),n=Kt(e,t);if(n!==null){var r=Oe();ht(n,e,t,r)}rc(e,t)}};dp=function(){return q};pp=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ta=function(e,t,n){switch(t){case"input":if(va(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jo(r);if(!i)throw Error(D(90));Wd(r),va(r,i)}}}break;case"textarea":Gd(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};ep=Ju;tp=Kn;var lw={usingClientEntryPoint:!1,Events:[Xi,fr,jo,Jd,Zd,Ju]},ai={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aw={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ip(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||sw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{xo=Ls.inject(aw),Et=Ls}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lw;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(t))throw Error(D(200));return iw(e,t,null,n)};qe.createRoot=function(e,t){if(!sc(e))throw Error(D(299));var n=!1,r="",i=Ug;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nc(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,xi(e.nodeType===8?e.parentNode:e),new ic(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=ip(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Kn(e)};qe.hydrate=function(e,t,n){if(!Go(t))throw Error(D(200));return qo(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!sc(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Ug;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Mg(t,null,e,1,n??null,i,!1,o,l),e[Wt]=t.current,xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ko(t)};qe.render=function(e,t,n){if(!Go(t))throw Error(D(200));return qo(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Go(e))throw Error(D(40));return e._reactRootContainer?(Kn(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};qe.unstable_batchedUpdates=Ju;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return qo(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function Fg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fg)}catch(e){console.error(e)}}Fg(),Fd.exports=qe;var uw=Fd.exports,Mh=uw;ca.createRoot=Mh.createRoot,ca.hydrateRoot=Mh.hydrateRoot;var Uh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},cw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],l=e[n++],u=e[n++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=e[n++],l=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},zg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],l=i+1<e.length,u=l?e[i+1]:0,f=i+2<e.length,p=f?e[i+2]:0,C=o>>2,A=(o&3)<<4|u>>4;let k=(u&15)<<2|p>>6,O=p&63;f||(O=64,l||(k=64)),r.push(n[C],n[A],n[k],n[O])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):cw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],u=i<e.length?n[e.charAt(i)]:0;++i;const p=i<e.length?n[e.charAt(i)]:64;++i;const A=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||u==null||p==null||A==null)throw new fw;const k=o<<2|u>>4;if(r.push(k),p!==64){const O=u<<4&240|p>>2;if(r.push(O),A!==64){const R=p<<6&192|A;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class fw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hw=function(e){const t=jg(e);return zg.encodeByteArray(t,!0)},Io=function(e){return hw(e).replace(/\./g,"")},$g=function(e){try{return zg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=()=>dw().__FIREBASE_DEFAULTS__,gw=()=>{if(typeof process>"u"||typeof Uh>"u")return;const e=Uh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},mw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$g(e[1]);return t&&JSON.parse(t)},oc=()=>{try{return pw()||gw()||mw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Bg=e=>{var t,n;return(n=(t=oc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},vw=e=>{const t=Bg(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Vg=()=>{var e;return(e=oc())===null||e===void 0?void 0:e.config},bg=e=>{var t;return(t=oc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Io(JSON.stringify(n)),Io(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Ew(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Sw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iw(){const e=De();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Wg(){try{return typeof indexedDB=="object"}catch{return!1}}function Kg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Tw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="FirebaseError";class mt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=kw,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?Cw(o,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new mt(i,u,r)}}function Cw(e,t){return e.replace(Aw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Aw=/\{\$([^}]+)}/g;function Pw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function bi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],l=t[i];if(Fh(o)&&Fh(l)){if(!bi(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Rw(e,t){const n=new Nw(e,t);return n.subscribe.bind(n)}class Nw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ow(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Jl),i.error===void 0&&(i.error=Jl),i.complete===void 0&&(i.complete=Jl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ow(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Jl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=1e3,Lw=2,xw=4*60*60*1e3,Mw=.5;function jh(e,t=Dw,n=Lw){const r=t*Math.pow(n,e),i=Math.round(Mw*r*(Math.random()-.5)*2);return Math.min(xw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return e&&e._delegate?e._delegate:e}class gt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new yw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jw(t))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Ln){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ln){return this.instances.has(t)}getOptions(t=Ln){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ln){return this.component?this.component.multipleInstances?t:Ln:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fw(e){return e===Ln?void 0:e}function jw(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Uw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(G||(G={}));const $w={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Bw=G.INFO,Vw={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},bw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Vw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xo{constructor(t){this.name=t,this._logLevel=Bw,this._logHandler=bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$w[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const Hw=(e,t)=>t.some(n=>e instanceof n);let zh,$h;function Ww(){return zh||(zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kw(){return $h||($h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gg=new WeakMap,ru=new WeakMap,qg=new WeakMap,Zl=new WeakMap,lc=new WeakMap;function Gw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",l)},o=()=>{n(_n(e.result)),i()},l=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&Gg.set(n,e)}).catch(()=>{}),lc.set(t,e),t}function qw(e){if(ru.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",l),e.removeEventListener("abort",l)},o=()=>{n(),i()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",l),e.addEventListener("abort",l)});ru.set(e,t)}let iu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ru.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Xw(e){iu=e(iu)}function Qw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ea(this),t,...n);return qg.set(r,t.sort?t.sort():[t]),_n(r)}:Kw().includes(e)?function(...t){return e.apply(ea(this),t),_n(Gg.get(this))}:function(...t){return _n(e.apply(ea(this),t))}}function Yw(e){return typeof e=="function"?Qw(e):(e instanceof IDBTransaction&&qw(e),Hw(e,Ww())?new Proxy(e,iu):e)}function _n(e){if(e instanceof IDBRequest)return Gw(e);if(Zl.has(e))return Zl.get(e);const t=Yw(e);return t!==e&&(Zl.set(e,t),lc.set(t,e)),t}const ea=e=>lc.get(e);function Xg(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(e,t),u=_n(l);return r&&l.addEventListener("upgradeneeded",f=>{r(_n(l.result),f.oldVersion,f.newVersion,_n(l.transaction),f)}),n&&l.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),u.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),u}const Jw=["get","getKey","getAll","getAllKeys","count"],Zw=["put","add","delete","clear"],ta=new Map;function Bh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ta.get(t))return ta.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Zw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jw.includes(n)))return;const o=async function(l,...u){const f=this.transaction(l,i?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(u.shift())),(await Promise.all([p[n](...u),i&&f.done]))[0]};return ta.set(t,o),o}Xw(e=>({...e,get:(t,n,r)=>Bh(t,n)||e.get(t,n,r),has:(t,n)=>!!Bh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function t_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const su="@firebase/app",Vh="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Xo("@firebase/app"),n_="@firebase/app-compat",r_="@firebase/analytics-compat",i_="@firebase/analytics",s_="@firebase/app-check-compat",o_="@firebase/app-check",l_="@firebase/auth",a_="@firebase/auth-compat",u_="@firebase/database",c_="@firebase/data-connect",f_="@firebase/database-compat",h_="@firebase/functions",d_="@firebase/functions-compat",p_="@firebase/installations",g_="@firebase/installations-compat",m_="@firebase/messaging",v_="@firebase/messaging-compat",y_="@firebase/performance",w_="@firebase/performance-compat",__="@firebase/remote-config",E_="@firebase/remote-config-compat",S_="@firebase/storage",I_="@firebase/storage-compat",T_="@firebase/firestore",k_="@firebase/vertexai-preview",C_="@firebase/firestore-compat",A_="firebase",P_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="[DEFAULT]",R_={[su]:"fire-core",[n_]:"fire-core-compat",[i_]:"fire-analytics",[r_]:"fire-analytics-compat",[o_]:"fire-app-check",[s_]:"fire-app-check-compat",[l_]:"fire-auth",[a_]:"fire-auth-compat",[u_]:"fire-rtdb",[c_]:"fire-data-connect",[f_]:"fire-rtdb-compat",[h_]:"fire-fn",[d_]:"fire-fn-compat",[p_]:"fire-iid",[g_]:"fire-iid-compat",[m_]:"fire-fcm",[v_]:"fire-fcm-compat",[y_]:"fire-perf",[w_]:"fire-perf-compat",[__]:"fire-rc",[E_]:"fire-rc-compat",[S_]:"fire-gcs",[I_]:"fire-gcs-compat",[T_]:"fire-fst",[C_]:"fire-fst-compat",[k_]:"fire-vertex","fire-js":"fire-js",[A_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map,N_=new Map,lu=new Map;function bh(e,t){try{e.container.addComponent(t)}catch(n){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tt(e){const t=e.name;if(lu.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;lu.set(t,e);for(const n of To.values())bh(n,e);for(const n of N_.values())bh(n,e);return!0}function Zn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function zt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new Jn("app","Firebase",O_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=P_;function Qg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ou,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw En.create("bad-app-name",{appName:String(i)});if(n||(n=Vg()),!n)throw En.create("no-options");const o=To.get(i);if(o){if(bi(n,o.options)&&bi(r,o.config))return o;throw En.create("duplicate-app",{appName:i})}const l=new zw(i);for(const f of lu.values())l.addComponent(f);const u=new D_(n,r,l);return To.set(i,u),u}function ac(e=ou){const t=To.get(e);if(!t&&e===ou&&Vg())return Qg();if(!t)throw En.create("no-app",{appName:e});return t}function nt(e,t,n){var r;let i=(r=R_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(u.join(" "));return}Tt(new gt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="firebase-heartbeat-database",x_=1,Hi="firebase-heartbeat-store";let na=null;function Yg(){return na||(na=Xg(L_,x_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(e=>{throw En.create("idb-open",{originalErrorMessage:e.message})})),na}async function M_(e){try{const n=(await Yg()).transaction(Hi),r=await n.objectStore(Hi).get(Jg(e));return await n.done,r}catch(t){if(t instanceof mt)qt.warn(t.message);else{const n=En.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(n.message)}}}async function Hh(e,t){try{const r=(await Yg()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(t,Jg(e)),await r.done}catch(n){if(n instanceof mt)qt.warn(n.message);else{const r=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function Jg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=1024,F_=30*24*60*60*1e3;class j_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Wh();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=F_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wh(),{heartbeatsToSend:r,unsentEntries:i}=z_(this._heartbeatsCache.heartbeats),o=Io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return qt.warn(n),""}}}function Wh(){return new Date().toISOString().substring(0,10)}function z_(e,t=U_){const n=[];let r=e.slice();for(const i of e){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Kh(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wg()?Kg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Kh(e){return Io(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(e){Tt(new gt("platform-logger",t=>new e_(t),"PRIVATE")),Tt(new gt("heartbeat",t=>new j_(t),"PRIVATE")),nt(su,Vh,e),nt(su,Vh,"esm2017"),nt("fire-js","")}B_("");var V_="firebase",b_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(V_,b_,"app");function uc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Zg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H_=Zg,em=new Jn("auth","Firebase",Zg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Xo("@firebase/auth");function W_(e,...t){ko.logLevel<=G.WARN&&ko.warn(`Auth (${zr}): ${e}`,...t)}function qs(e,...t){ko.logLevel<=G.ERROR&&ko.error(`Auth (${zr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e,...t){throw fc(e,...t)}function dt(e,...t){return fc(e,...t)}function cc(e,t,n){const r=Object.assign(Object.assign({},H_()),{[t]:n});return new Jn("auth","Firebase",r).create(t,{appName:e.name})}function Bn(e){return cc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function K_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&kt(e,"argument-error"),cc(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return em.create(e,...t)}function $(e,t,...n){if(!e)throw fc(t,...n)}function $t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw qs(t),new Error(t)}function Xt(e,t){e||$t(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function G_(){return Gh()==="http:"||Gh()==="https:"}function Gh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G_()||Hg()||"connection"in navigator)?navigator.onLine:!0}function X_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,n){this.shortDelay=t,this.longDelay=n,Xt(n>t,"Short delay should be less than long delay!"),this.isMobile=_w()||Sw()}get(){return q_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e,t){Xt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new Ji(3e4,6e4);function dc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $r(e,t,n,r,i={}){return nm(e,i,async()=>{let o={},l={};r&&(t==="GET"?l=r:o={body:JSON.stringify(r)});const u=Yi(Object.assign({key:e.config.apiKey},l)).slice(1),f=await e._getAdditionalHeaders();f["Content-Type"]="application/json",e.languageCode&&(f["X-Firebase-Locale"]=e.languageCode);const p=Object.assign({method:t,headers:f},o);return Ew()||(p.referrerPolicy="no-referrer"),tm.fetch()(rm(e,e.config.apiHost,n,u),p)})}async function nm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q_),t);try{const i=new Z_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw xs(e,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[f,p]=u.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw xs(e,"credential-already-in-use",l);if(f==="EMAIL_EXISTS")throw xs(e,"email-already-in-use",l);if(f==="USER_DISABLED")throw xs(e,"user-disabled",l);const C=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw cc(e,C,p);kt(e,C)}}catch(i){if(i instanceof mt)throw i;kt(e,"network-request-failed",{message:String(i)})}}async function J_(e,t,n,r,i={}){const o=await $r(e,t,n,r,i);return"mfaPendingCredential"in o&&kt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function rm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?hc(e.config,i):`${e.config.apiScheme}://${i}`}class Z_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),Y_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(e,t){return $r(e,"POST","/v1/accounts:delete",t)}async function im(e,t){return $r(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function t1(e,t=!1){const n=Ct(e),r=await n.getIdToken(t),i=pc(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Si(ra(i.auth_time)),issuedAtTime:Si(ra(i.iat)),expirationTime:Si(ra(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ra(e){return Number(e)*1e3}function pc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return qs("JWT malformed, contained fewer than 3 sections"),null;try{const i=$g(n);return i?JSON.parse(i):(qs("Failed to decode base64 JWT payload"),null)}catch(i){return qs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qh(e){const t=pc(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof mt&&n1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function n1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Wi(e,im(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?sm(o.providerUserInfo):[],u=s1(e.providerData,l),f=e.isAnonymous,p=!(e.email&&o.passwordHash)&&!(u!=null&&u.length),C=f?p:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new uu(o.createdAt,o.lastLoginAt),isAnonymous:C};Object.assign(e,A)}async function i1(e){const t=Ct(e);await Co(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function s1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function sm(e){return e.map(t=>{var{providerId:n}=t,r=uc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(e,t){const n=await nm(e,{},async()=>{const r=Yi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,l=rm(e,i,"/v1/token",`key=${o}`),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",tm.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l1(e,t){return $r(e,"POST","/v2/accounts:revokeToken",dc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):qh(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=qh(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await o1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,l=new Tr;return r&&($(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:t}),l.accessToken=i),o&&($(typeof o=="number","internal-error",{appName:t}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Bt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=uc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new uu(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return t1(this,t)}reload(){return i1(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(Bn(this.auth));const t=await this.getIdToken();return await Wi(this,e1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,l,u,f,p,C;const A=(r=n.displayName)!==null&&r!==void 0?r:void 0,k=(i=n.email)!==null&&i!==void 0?i:void 0,O=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,R=(l=n.photoURL)!==null&&l!==void 0?l:void 0,L=(u=n.tenantId)!==null&&u!==void 0?u:void 0,z=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,E=(p=n.createdAt)!==null&&p!==void 0?p:void 0,w=(C=n.lastLoginAt)!==null&&C!==void 0?C:void 0,{uid:S,emailVerified:N,isAnonymous:M,providerData:U,stsTokenManager:m}=n;$(S&&m,t,"internal-error");const d=Tr.fromJSON(this.name,m);$(typeof S=="string",t,"internal-error"),tn(A,t.name),tn(k,t.name),$(typeof N=="boolean",t,"internal-error"),$(typeof M=="boolean",t,"internal-error"),tn(O,t.name),tn(R,t.name),tn(L,t.name),tn(z,t.name),tn(E,t.name),tn(w,t.name);const g=new Bt({uid:S,auth:t,email:k,emailVerified:N,displayName:A,isAnonymous:M,photoURL:R,phoneNumber:O,tenantId:L,stsTokenManager:d,createdAt:E,lastLoginAt:w});return U&&Array.isArray(U)&&(g.providerData=U.map(y=>Object.assign({},y))),z&&(g._redirectEventId=z),g}static async _fromIdTokenResponse(t,n,r=!1){const i=new Tr;i.updateFromServerResponse(n);const o=new Bt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Co(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?sm(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Tr;u.updateFromIdToken(r);const f=new Bt({uid:i.localId,auth:t,stsTokenManager:u,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new uu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(f,p),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new Map;function Vt(e){Xt(e instanceof Function,"Expected a class definition");let t=Xh.get(e);return t?(Xt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Xh.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}om.type="NONE";const Qh=om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e,t,n){return`firebase:${e}:${t}:${n}`}class kr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Xs(this.userKey,i.apiKey,o),this.fullPersistenceKey=Xs("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Bt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new kr(Vt(Qh),t,r);const i=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=i[0]||Vt(Qh);const l=Xs(r,t.config.apiKey,t.name);let u=null;for(const p of n)try{const C=await p._get(l);if(C){const A=Bt._fromJSON(t,C);p!==o&&(u=A),o=p;break}}catch{}const f=i.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!f.length?new kr(o,t,r):(o=f[0],u&&await o._set(l,u.toJSON()),await Promise.all(n.map(async p=>{if(p!==o)try{await p._remove(l)}catch{}})),new kr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(cm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(hm(t))return"Blackberry";if(dm(t))return"Webos";if(am(t))return"Safari";if((t.includes("chrome/")||um(t))&&!t.includes("edge/"))return"Chrome";if(fm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lm(e=De()){return/firefox\//i.test(e)}function am(e=De()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function um(e=De()){return/crios\//i.test(e)}function cm(e=De()){return/iemobile/i.test(e)}function fm(e=De()){return/android/i.test(e)}function hm(e=De()){return/blackberry/i.test(e)}function dm(e=De()){return/webos/i.test(e)}function gc(e=De()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function a1(e=De()){var t;return gc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function u1(){return Iw()&&document.documentMode===10}function pm(e=De()){return gc(e)||fm(e)||dm(e)||hm(e)||/windows phone/i.test(e)||cm(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(e,t=[]){let n;switch(e){case"Browser":n=Yh(De());break;case"Worker":n=`${Yh(De())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((l,u)=>{try{const f=t(o);l(f)}catch(f){u(f)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(e,t={}){return $r(e,"GET","/v2/passwordPolicy",dc(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=6;class d1{constructor(t){var n,r,i,o;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:h1,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,l,u;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,f),this.validatePasswordCharacterOptions(t,f),f.isValid&&(f.isValid=(n=f.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(i=f.containsLowercaseLetter)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(o=f.containsUppercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(l=f.containsNumericCharacter)!==null&&l!==void 0?l:!0),f.isValid&&(f.isValid=(u=f.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),f}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jh(this),this.idTokenSubscription=new Jh(this),this.beforeStateQueue=new c1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=em,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await kr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await im(this,{idToken:t}),r=await Bt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(zt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&(f!=null&&f.user)&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Co(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=X_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(zt(this.app))return Promise.reject(Bn(this));const n=t?Ct(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(Bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return zt(this.app)?Promise.reject(Bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await f1(this),n=new d1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Jn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await l1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Vt(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if($(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const f=t.addObserver(n,r,i);return()=>{l=!0,f()}}else{const f=t.addObserver(n);return()=>{l=!0,f()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&W_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qo(e){return Ct(e)}class Jh{constructor(t){this.auth=t,this.observer=null,this.addObserver=Rw(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g1(e){mc=e}function m1(e){return mc.loadJS(e)}function v1(){return mc.gapiScript}function y1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(e,t){const n=Zn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(bi(o,t??{}))return i;kt(i,"already-initialized")}return n.initialize({options:t})}function _1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function E1(e,t,n){const r=Qo(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=mm(t),{host:l,port:u}=S1(t),f=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${l}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),I1()}function mm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function S1(e){const t=mm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Zh(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:Zh(l)}}}function Zh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function I1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(t){return $t("not implemented")}_linkToIdToken(t,n){return $t("not implemented")}_getReauthenticationResolver(t){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(e,t){return J_(e,"POST","/v1/accounts:signInWithIdp",dc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1="http://localhost";class Gn extends vm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Gn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=uc(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new Gn(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return Cr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Cr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Cr(t,n)}buildRequest(){const t={requestUri:T1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Yi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends vc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Zi{constructor(){super("facebook.com")}static credential(t){return Gn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ln.credentialFromTaggedObject(t)}static credentialFromError(t){return ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ln.credential(t.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Gn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Zi{constructor(){super("github.com")}static credential(t){return Gn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return an.credentialFromTaggedObject(t)}static credentialFromError(t){return an.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return an.credential(t.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Zi{constructor(){super("twitter.com")}static credential(t,n){return Gn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return un.credentialFromTaggedObject(t)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return un.credential(n,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Bt._fromIdTokenResponse(t,r,i),l=ed(r);return new xr({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ed(r);return new xr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function ed(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends mt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ao.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ao(t,n,r,i)}}function ym(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ao._fromErrorAndOperation(e,o,t,r):o})}async function k1(e,t,n=!1){const r=await Wi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(e,t,n=!1){const{auth:r}=e;if(zt(r.app))return Promise.reject(Bn(r));const i="reauthenticate";try{const o=await Wi(e,ym(r,i,t,e),n);$(o.idToken,r,"internal-error");const l=pc(o.idToken);$(l,r,"internal-error");const{sub:u}=l;return $(e.uid===u,r,"user-mismatch"),xr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(e,t,n=!1){if(zt(e.app))return Promise.reject(Bn(e));const r="signIn",i=await ym(e,r,t),o=await xr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function P1(e,t,n,r){return Ct(e).onIdTokenChanged(t,n,r)}function R1(e,t,n){return Ct(e).beforeAuthStateChanged(t,n)}function N1(e,t,n,r){return Ct(e).onAuthStateChanged(t,n,r)}function O1(e){return Ct(e).signOut()}const Po="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Po,"1"),this.storage.removeItem(Po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=1e3,L1=10;class _m extends wm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,u,f)=>{this.notifyListeners(l,f)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);u1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,L1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},D1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}_m.type="LOCAL";const x1=_m;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends wm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Em.type="SESSION";const Sm=Em;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Yo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(l).map(async p=>p(n.origin,o)),f=await M1(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:f})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((u,f)=>{const p=yc("",20);i.port1.start();const C=setTimeout(()=>{f(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(A){const k=A;if(k.data.eventId===p)switch(k.data.status){case"ack":clearTimeout(C),o=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(k.data.response);break;default:clearTimeout(C),clearTimeout(o),f(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function F1(e){It().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function j1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function $1(){return Im()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="firebaseLocalStorageDb",B1=1,Ro="firebaseLocalStorage",km="fbase_key";class es{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(e,t){return e.transaction([Ro],t?"readwrite":"readonly").objectStore(Ro)}function V1(){const e=indexedDB.deleteDatabase(Tm);return new es(e).toPromise()}function cu(){const e=indexedDB.open(Tm,B1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ro,{keyPath:km})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ro)?t(r):(r.close(),await V1(),t(await cu()))})})}async function td(e,t,n){const r=Jo(e,!0).put({[km]:t,value:n});return new es(r).toPromise()}async function b1(e,t){const n=Jo(e,!1).get(t),r=await new es(n).toPromise();return r===void 0?null:r.value}function nd(e,t){const n=Jo(e,!0).delete(t);return new es(n).toPromise()}const H1=800,W1=3;class Cm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>W1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Im()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance($1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await j1(),!this.activeServiceWorker)return;this.sender=new U1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||z1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await cu();return await td(t,Po,"1"),await nd(t,Po),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>td(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>b1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>nd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Jo(i,!1).getAll();return new es(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cm.type="LOCAL";const K1=Cm;new Ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(e,t){return t?Vt(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends vm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Cr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Cr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Cr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function G1(e){return A1(e.auth,new wc(e),e.bypassAuthState)}function q1(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),C1(n,new wc(e),e.bypassAuthState)}async function X1(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),k1(n,new wc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:l,type:u}=t;if(l){this.reject(l);return}const f={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(f))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return G1;case"linkViaPopup":case"linkViaRedirect":return X1;case"reauthViaPopup":case"reauthViaRedirect":return q1;default:kt(this.auth,"internal-error")}}resolve(t){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=new Ji(2e3,1e4);async function Y1(e,t,n){if(zt(e.app))return Promise.reject(dt(e,"operation-not-supported-in-this-environment"));const r=Qo(e);K_(e,t,vc);const i=Am(r,n);return new Fn(r,"signInViaPopup",t,i).executeNotNull()}class Fn extends Pm{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const t=yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Q1.get())};t()}}Fn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="pendingRedirect",Qs=new Map;class Z1 extends Pm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Qs.get(this.auth._key());if(!t){try{const r=await eE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Qs.set(this.auth._key(),t)}return this.bypassAuthState||Qs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eE(e,t){const n=rE(t),r=nE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tE(e,t){Qs.set(e._key(),t)}function nE(e){return Vt(e._redirectPersistence)}function rE(e){return Xs(J1,e.config.apiKey,e.name)}async function iE(e,t,n=!1){if(zt(e.app))return Promise.reject(Bn(e));const r=Qo(e),i=Am(r,t),l=await new Z1(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=10*60*1e3;class oE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!lE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Rm(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=sE&&this.cachedEventUids.clear(),this.cachedEventUids.has(rd(t))}saveEventToCache(t){this.cachedEventUids.add(rd(t)),this.lastProcessedEventTime=Date.now()}}function rd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Rm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function lE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rm(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(e,t={}){return $r(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cE=/^https?/;async function fE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await aE(e);for(const n of t)try{if(hE(n))return}catch{}kt(e,"unauthorized-domain")}function hE(e){const t=au(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!cE.test(n))return!1;if(uE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Ji(3e4,6e4);function id(){const e=It().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function pE(e){return new Promise((t,n)=>{var r,i,o;function l(){id(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{id(),n(dt(e,"network-request-failed"))},timeout:dE.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=It().gapi)===null||o===void 0)&&o.load)l();else{const u=y1("iframefcb");return It()[u]=()=>{gapi.load?l():n(dt(e,"network-request-failed"))},m1(`${v1()}?onload=${u}`).catch(f=>n(f))}}).catch(t=>{throw Ys=null,t})}let Ys=null;function gE(e){return Ys=Ys||pE(e),Ys}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=new Ji(5e3,15e3),vE="__/auth/iframe",yE="emulator/auth/iframe",wE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_E=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EE(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?hc(t,yE):`https://${e.config.authDomain}/${vE}`,r={apiKey:t.apiKey,appName:e.name,v:zr},i=_E.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Yi(r).slice(1)}`}async function SE(e){const t=await gE(e),n=It().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:EE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=dt(e,"network-request-failed"),u=It().setTimeout(()=>{o(l)},mE.get());function f(){It().clearTimeout(u),i(r)}r.ping(f).then(f,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TE=500,kE=600,CE="_blank",AE="http://localhost";class sd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PE(e,t,n,r=TE,i=kE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const f=Object.assign(Object.assign({},IE),{width:r.toString(),height:i.toString(),top:o,left:l}),p=De().toLowerCase();n&&(u=um(p)?CE:n),lm(p)&&(t=t||AE,f.scrollbars="yes");const C=Object.entries(f).reduce((k,[O,R])=>`${k}${O}=${R},`,"");if(a1(p)&&u!=="_self")return RE(t||"",u),new sd(null);const A=window.open(t||"",u,C);$(A,e,"popup-blocked");try{A.focus()}catch{}return new sd(A)}function RE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="__/auth/handler",OE="emulator/auth/handler",DE=encodeURIComponent("fac");async function od(e,t,n,r,i,o){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zr,eventId:i};if(t instanceof vc){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",Pw(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[C,A]of Object.entries({}))l[C]=A}if(t instanceof Zi){const C=t.getScopes().filter(A=>A!=="");C.length>0&&(l.scopes=C.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const C of Object.keys(u))u[C]===void 0&&delete u[C];const f=await e._getAppCheckToken(),p=f?`#${DE}=${encodeURIComponent(f)}`:"";return`${LE(e)}?${Yi(u).slice(1)}${p}`}function LE({config:e}){return e.emulator?hc(e,OE):`https://${e.authDomain}/${NE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="webStorageSupport";class xE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sm,this._completeRedirectFn=iE,this._overrideRedirectResult=tE}async _openPopup(t,n,r,i){var o;Xt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await od(t,n,r,au(),i);return PE(t,l,yc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await od(t,n,r,au(),i);return F1(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Xt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await SE(t),r=new oE(t);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ia,{type:ia},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ia];l!==void 0&&n(!!l),kt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return pm()||am()||gc()}}const ME=xE;var ld="@firebase/auth",ad="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jE(e){Tt(new gt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;$(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:l,authDomain:u,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gm(e)},p=new p1(r,i,o,f);return _1(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Tt(new gt("auth-internal",t=>{const n=Qo(t.getProvider("auth").getImmediate());return(r=>new UE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(ld,ad,FE(e)),nt(ld,ad,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=5*60,$E=bg("authIdTokenMaxAge")||zE;let ud=null;const BE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$E)return;const i=n==null?void 0:n.token;ud!==i&&(ud=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VE(e=ac()){const t=Zn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=w1(e,{popupRedirectResolver:ME,persistence:[K1,x1,Sm]}),r=bg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=BE(o.toString());R1(n,l,()=>l(n.currentUser)),P1(n,u=>l(u))}}const i=Bg("auth");return i&&E1(n,`http://${i}`),n}function bE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}g1({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=dt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",bE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jE("Browser");var cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nm;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(m,d){function g(){}g.prototype=d.prototype,m.D=d.prototype,m.prototype=new g,m.prototype.constructor=m,m.C=function(y,_,T){for(var v=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)v[Qe-2]=arguments[Qe];return d.prototype[_].apply(y,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(m,d,g){g||(g=0);var y=Array(16);if(typeof d=="string")for(var _=0;16>_;++_)y[_]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(_=0;16>_;++_)y[_]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=m.g[0],g=m.g[1],_=m.g[2];var T=m.g[3],v=d+(T^g&(_^T))+y[0]+3614090360&4294967295;d=g+(v<<7&4294967295|v>>>25),v=T+(_^d&(g^_))+y[1]+3905402710&4294967295,T=d+(v<<12&4294967295|v>>>20),v=_+(g^T&(d^g))+y[2]+606105819&4294967295,_=T+(v<<17&4294967295|v>>>15),v=g+(d^_&(T^d))+y[3]+3250441966&4294967295,g=_+(v<<22&4294967295|v>>>10),v=d+(T^g&(_^T))+y[4]+4118548399&4294967295,d=g+(v<<7&4294967295|v>>>25),v=T+(_^d&(g^_))+y[5]+1200080426&4294967295,T=d+(v<<12&4294967295|v>>>20),v=_+(g^T&(d^g))+y[6]+2821735955&4294967295,_=T+(v<<17&4294967295|v>>>15),v=g+(d^_&(T^d))+y[7]+4249261313&4294967295,g=_+(v<<22&4294967295|v>>>10),v=d+(T^g&(_^T))+y[8]+1770035416&4294967295,d=g+(v<<7&4294967295|v>>>25),v=T+(_^d&(g^_))+y[9]+2336552879&4294967295,T=d+(v<<12&4294967295|v>>>20),v=_+(g^T&(d^g))+y[10]+4294925233&4294967295,_=T+(v<<17&4294967295|v>>>15),v=g+(d^_&(T^d))+y[11]+2304563134&4294967295,g=_+(v<<22&4294967295|v>>>10),v=d+(T^g&(_^T))+y[12]+1804603682&4294967295,d=g+(v<<7&4294967295|v>>>25),v=T+(_^d&(g^_))+y[13]+4254626195&4294967295,T=d+(v<<12&4294967295|v>>>20),v=_+(g^T&(d^g))+y[14]+2792965006&4294967295,_=T+(v<<17&4294967295|v>>>15),v=g+(d^_&(T^d))+y[15]+1236535329&4294967295,g=_+(v<<22&4294967295|v>>>10),v=d+(_^T&(g^_))+y[1]+4129170786&4294967295,d=g+(v<<5&4294967295|v>>>27),v=T+(g^_&(d^g))+y[6]+3225465664&4294967295,T=d+(v<<9&4294967295|v>>>23),v=_+(d^g&(T^d))+y[11]+643717713&4294967295,_=T+(v<<14&4294967295|v>>>18),v=g+(T^d&(_^T))+y[0]+3921069994&4294967295,g=_+(v<<20&4294967295|v>>>12),v=d+(_^T&(g^_))+y[5]+3593408605&4294967295,d=g+(v<<5&4294967295|v>>>27),v=T+(g^_&(d^g))+y[10]+38016083&4294967295,T=d+(v<<9&4294967295|v>>>23),v=_+(d^g&(T^d))+y[15]+3634488961&4294967295,_=T+(v<<14&4294967295|v>>>18),v=g+(T^d&(_^T))+y[4]+3889429448&4294967295,g=_+(v<<20&4294967295|v>>>12),v=d+(_^T&(g^_))+y[9]+568446438&4294967295,d=g+(v<<5&4294967295|v>>>27),v=T+(g^_&(d^g))+y[14]+3275163606&4294967295,T=d+(v<<9&4294967295|v>>>23),v=_+(d^g&(T^d))+y[3]+4107603335&4294967295,_=T+(v<<14&4294967295|v>>>18),v=g+(T^d&(_^T))+y[8]+1163531501&4294967295,g=_+(v<<20&4294967295|v>>>12),v=d+(_^T&(g^_))+y[13]+2850285829&4294967295,d=g+(v<<5&4294967295|v>>>27),v=T+(g^_&(d^g))+y[2]+4243563512&4294967295,T=d+(v<<9&4294967295|v>>>23),v=_+(d^g&(T^d))+y[7]+1735328473&4294967295,_=T+(v<<14&4294967295|v>>>18),v=g+(T^d&(_^T))+y[12]+2368359562&4294967295,g=_+(v<<20&4294967295|v>>>12),v=d+(g^_^T)+y[5]+4294588738&4294967295,d=g+(v<<4&4294967295|v>>>28),v=T+(d^g^_)+y[8]+2272392833&4294967295,T=d+(v<<11&4294967295|v>>>21),v=_+(T^d^g)+y[11]+1839030562&4294967295,_=T+(v<<16&4294967295|v>>>16),v=g+(_^T^d)+y[14]+4259657740&4294967295,g=_+(v<<23&4294967295|v>>>9),v=d+(g^_^T)+y[1]+2763975236&4294967295,d=g+(v<<4&4294967295|v>>>28),v=T+(d^g^_)+y[4]+1272893353&4294967295,T=d+(v<<11&4294967295|v>>>21),v=_+(T^d^g)+y[7]+4139469664&4294967295,_=T+(v<<16&4294967295|v>>>16),v=g+(_^T^d)+y[10]+3200236656&4294967295,g=_+(v<<23&4294967295|v>>>9),v=d+(g^_^T)+y[13]+681279174&4294967295,d=g+(v<<4&4294967295|v>>>28),v=T+(d^g^_)+y[0]+3936430074&4294967295,T=d+(v<<11&4294967295|v>>>21),v=_+(T^d^g)+y[3]+3572445317&4294967295,_=T+(v<<16&4294967295|v>>>16),v=g+(_^T^d)+y[6]+76029189&4294967295,g=_+(v<<23&4294967295|v>>>9),v=d+(g^_^T)+y[9]+3654602809&4294967295,d=g+(v<<4&4294967295|v>>>28),v=T+(d^g^_)+y[12]+3873151461&4294967295,T=d+(v<<11&4294967295|v>>>21),v=_+(T^d^g)+y[15]+530742520&4294967295,_=T+(v<<16&4294967295|v>>>16),v=g+(_^T^d)+y[2]+3299628645&4294967295,g=_+(v<<23&4294967295|v>>>9),v=d+(_^(g|~T))+y[0]+4096336452&4294967295,d=g+(v<<6&4294967295|v>>>26),v=T+(g^(d|~_))+y[7]+1126891415&4294967295,T=d+(v<<10&4294967295|v>>>22),v=_+(d^(T|~g))+y[14]+2878612391&4294967295,_=T+(v<<15&4294967295|v>>>17),v=g+(T^(_|~d))+y[5]+4237533241&4294967295,g=_+(v<<21&4294967295|v>>>11),v=d+(_^(g|~T))+y[12]+1700485571&4294967295,d=g+(v<<6&4294967295|v>>>26),v=T+(g^(d|~_))+y[3]+2399980690&4294967295,T=d+(v<<10&4294967295|v>>>22),v=_+(d^(T|~g))+y[10]+4293915773&4294967295,_=T+(v<<15&4294967295|v>>>17),v=g+(T^(_|~d))+y[1]+2240044497&4294967295,g=_+(v<<21&4294967295|v>>>11),v=d+(_^(g|~T))+y[8]+1873313359&4294967295,d=g+(v<<6&4294967295|v>>>26),v=T+(g^(d|~_))+y[15]+4264355552&4294967295,T=d+(v<<10&4294967295|v>>>22),v=_+(d^(T|~g))+y[6]+2734768916&4294967295,_=T+(v<<15&4294967295|v>>>17),v=g+(T^(_|~d))+y[13]+1309151649&4294967295,g=_+(v<<21&4294967295|v>>>11),v=d+(_^(g|~T))+y[4]+4149444226&4294967295,d=g+(v<<6&4294967295|v>>>26),v=T+(g^(d|~_))+y[11]+3174756917&4294967295,T=d+(v<<10&4294967295|v>>>22),v=_+(d^(T|~g))+y[2]+718787259&4294967295,_=T+(v<<15&4294967295|v>>>17),v=g+(T^(_|~d))+y[9]+3951481745&4294967295,m.g[0]=m.g[0]+d&4294967295,m.g[1]=m.g[1]+(_+(v<<21&4294967295|v>>>11))&4294967295,m.g[2]=m.g[2]+_&4294967295,m.g[3]=m.g[3]+T&4294967295}r.prototype.u=function(m,d){d===void 0&&(d=m.length);for(var g=d-this.blockSize,y=this.B,_=this.h,T=0;T<d;){if(_==0)for(;T<=g;)i(this,m,T),T+=this.blockSize;if(typeof m=="string"){for(;T<d;)if(y[_++]=m.charCodeAt(T++),_==this.blockSize){i(this,y),_=0;break}}else for(;T<d;)if(y[_++]=m[T++],_==this.blockSize){i(this,y),_=0;break}}this.h=_,this.o+=d},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var d=1;d<m.length-8;++d)m[d]=0;var g=8*this.o;for(d=m.length-8;d<m.length;++d)m[d]=g&255,g/=256;for(this.u(m),m=Array(16),d=g=0;4>d;++d)for(var y=0;32>y;y+=8)m[g++]=this.g[d]>>>y&255;return m};function o(m,d){var g=u;return Object.prototype.hasOwnProperty.call(g,m)?g[m]:g[m]=d(m)}function l(m,d){this.h=d;for(var g=[],y=!0,_=m.length-1;0<=_;_--){var T=m[_]|0;y&&T==d||(g[_]=T,y=!1)}this.g=g}var u={};function f(m){return-128<=m&&128>m?o(m,function(d){return new l([d|0],0>d?-1:0)}):new l([m|0],0>m?-1:0)}function p(m){if(isNaN(m)||!isFinite(m))return A;if(0>m)return z(p(-m));for(var d=[],g=1,y=0;m>=g;y++)d[y]=m/g|0,g*=4294967296;return new l(d,0)}function C(m,d){if(m.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(m.charAt(0)=="-")return z(C(m.substring(1),d));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=p(Math.pow(d,8)),y=A,_=0;_<m.length;_+=8){var T=Math.min(8,m.length-_),v=parseInt(m.substring(_,_+T),d);8>T?(T=p(Math.pow(d,T)),y=y.j(T).add(p(v))):(y=y.j(g),y=y.add(p(v)))}return y}var A=f(0),k=f(1),O=f(16777216);e=l.prototype,e.m=function(){if(L(this))return-z(this).m();for(var m=0,d=1,g=0;g<this.g.length;g++){var y=this.i(g);m+=(0<=y?y:4294967296+y)*d,d*=4294967296}return m},e.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(R(this))return"0";if(L(this))return"-"+z(this).toString(m);for(var d=p(Math.pow(m,6)),g=this,y="";;){var _=N(g,d).g;g=E(g,_.j(d));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(m);if(g=_,R(g))return T+y;for(;6>T.length;)T="0"+T;y=T+y}},e.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function R(m){if(m.h!=0)return!1;for(var d=0;d<m.g.length;d++)if(m.g[d]!=0)return!1;return!0}function L(m){return m.h==-1}e.l=function(m){return m=E(this,m),L(m)?-1:R(m)?0:1};function z(m){for(var d=m.g.length,g=[],y=0;y<d;y++)g[y]=~m.g[y];return new l(g,~m.h).add(k)}e.abs=function(){return L(this)?z(this):this},e.add=function(m){for(var d=Math.max(this.g.length,m.g.length),g=[],y=0,_=0;_<=d;_++){var T=y+(this.i(_)&65535)+(m.i(_)&65535),v=(T>>>16)+(this.i(_)>>>16)+(m.i(_)>>>16);y=v>>>16,T&=65535,v&=65535,g[_]=v<<16|T}return new l(g,g[g.length-1]&-2147483648?-1:0)};function E(m,d){return m.add(z(d))}e.j=function(m){if(R(this)||R(m))return A;if(L(this))return L(m)?z(this).j(z(m)):z(z(this).j(m));if(L(m))return z(this.j(z(m)));if(0>this.l(O)&&0>m.l(O))return p(this.m()*m.m());for(var d=this.g.length+m.g.length,g=[],y=0;y<2*d;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var _=0;_<m.g.length;_++){var T=this.i(y)>>>16,v=this.i(y)&65535,Qe=m.i(_)>>>16,An=m.i(_)&65535;g[2*y+2*_]+=v*An,w(g,2*y+2*_),g[2*y+2*_+1]+=T*An,w(g,2*y+2*_+1),g[2*y+2*_+1]+=v*Qe,w(g,2*y+2*_+1),g[2*y+2*_+2]+=T*Qe,w(g,2*y+2*_+2)}for(y=0;y<d;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=d;y<2*d;y++)g[y]=0;return new l(g,0)};function w(m,d){for(;(m[d]&65535)!=m[d];)m[d+1]+=m[d]>>>16,m[d]&=65535,d++}function S(m,d){this.g=m,this.h=d}function N(m,d){if(R(d))throw Error("division by zero");if(R(m))return new S(A,A);if(L(m))return d=N(z(m),d),new S(z(d.g),z(d.h));if(L(d))return d=N(m,z(d)),new S(z(d.g),d.h);if(30<m.g.length){if(L(m)||L(d))throw Error("slowDivide_ only works with positive integers.");for(var g=k,y=d;0>=y.l(m);)g=M(g),y=M(y);var _=U(g,1),T=U(y,1);for(y=U(y,2),g=U(g,2);!R(y);){var v=T.add(y);0>=v.l(m)&&(_=_.add(g),T=v),y=U(y,1),g=U(g,1)}return d=E(m,_.j(d)),new S(_,d)}for(_=A;0<=m.l(d);){for(g=Math.max(1,Math.floor(m.m()/d.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),T=p(g),v=T.j(d);L(v)||0<v.l(m);)g-=y,T=p(g),v=T.j(d);R(T)&&(T=k),_=_.add(T),m=E(m,v)}return new S(_,m)}e.A=function(m){return N(this,m).h},e.and=function(m){for(var d=Math.max(this.g.length,m.g.length),g=[],y=0;y<d;y++)g[y]=this.i(y)&m.i(y);return new l(g,this.h&m.h)},e.or=function(m){for(var d=Math.max(this.g.length,m.g.length),g=[],y=0;y<d;y++)g[y]=this.i(y)|m.i(y);return new l(g,this.h|m.h)},e.xor=function(m){for(var d=Math.max(this.g.length,m.g.length),g=[],y=0;y<d;y++)g[y]=this.i(y)^m.i(y);return new l(g,this.h^m.h)};function M(m){for(var d=m.g.length+1,g=[],y=0;y<d;y++)g[y]=m.i(y)<<1|m.i(y-1)>>>31;return new l(g,m.h)}function U(m,d){var g=d>>5;d%=32;for(var y=m.g.length-g,_=[],T=0;T<y;T++)_[T]=0<d?m.i(T+g)>>>d|m.i(T+g+1)<<32-d:m.i(T+g);return new l(_,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=C,Nm=l}).apply(typeof cd<"u"?cd:typeof self<"u"?self:typeof window<"u"?window:{});var Ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ms=="object"&&Ms];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=n(this);function i(s,a){if(a)e:{var c=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var I=s[h];if(!(I in c))break e;c=c[I]}s=s[s.length-1],h=c[s],a=a(h),a!=h&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,h=!1,I={next:function(){if(!h&&c<s.length){var P=c++;return{value:a(P,s[P]),done:!1}}return h=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function f(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function p(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function C(s,a,c){return s.call.apply(s.bind,arguments)}function A(s,a,c){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,h),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function k(s,a,c){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:A,k.apply(null,arguments)}function O(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function R(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(h,I,P){for(var x=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)x[Q-2]=arguments[Q];return a.prototype[I].apply(h,x)}}function L(s){const a=s.length;if(0<a){const c=Array(a);for(let h=0;h<a;h++)c[h]=s[h];return c}return[]}function z(s,a){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(f(h)){const I=s.length||0,P=h.length||0;s.length=I+P;for(let x=0;x<P;x++)s[I+x]=h[x]}else s.push(h)}}class E{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function w(s){return/^[\s\xa0]*$/.test(s)}function S(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function N(s){return N[" "](s),s}N[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(s,a,c){for(const h in s)a.call(c,s[h],h,s)}function m(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function d(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,h;for(let I=1;I<arguments.length;I++){h=arguments[I];for(c in h)s[c]=h[c];for(let P=0;P<g.length;P++)c=g[P],Object.prototype.hasOwnProperty.call(h,c)&&(s[c]=h[c])}}function _(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function T(s){u.setTimeout(()=>{throw s},0)}function v(){var s=B;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Qe{constructor(){this.h=this.g=null}add(a,c){const h=An.get();h.set(a,c),this.h?this.h.next=h:this.g=h,this.h=h}}var An=new E(()=>new Br,s=>s.reset());class Br{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let At,F=!1,B=new Qe,V=()=>{const s=u.Promise.resolve(void 0);At=()=>{s.then(ne)}};var ne=()=>{for(var s;s=v();){try{s.h.call(s.g)}catch(c){T(c)}var a=An;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}F=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Pt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function Rt(s,a){if(le.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(M){e:{try{N(a.nodeName);var I=!0;break e}catch{}I=!1}I||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Nt[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Rt.aa.h.call(this)}}R(Rt,le);var Nt={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),rv=0;function iv(s,a,c,h,I){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!h,this.ha=I,this.key=++rv,this.da=this.fa=!1}function ns(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function rs(s){this.src=s,this.g={},this.h=0}rs.prototype.add=function(s,a,c,h,I){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var x=nl(s,a,h,I);return-1<x?(a=s[x],c||(a.fa=!1)):(a=new iv(a,this.src,P,!!h,I),a.fa=c,s.push(a)),a};function tl(s,a){var c=a.type;if(c in s.g){var h=s.g[c],I=Array.prototype.indexOf.call(h,a,void 0),P;(P=0<=I)&&Array.prototype.splice.call(h,I,1),P&&(ns(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function nl(s,a,c,h){for(var I=0;I<s.length;++I){var P=s[I];if(!P.da&&P.listener==a&&P.capture==!!c&&P.ha==h)return I}return-1}var rl="closure_lm_"+(1e6*Math.random()|0),il={};function Rc(s,a,c,h,I){if(Array.isArray(a)){for(var P=0;P<a.length;P++)Rc(s,a[P],c,h,I);return null}return c=Dc(c),s&&s[Ot]?s.K(a,c,p(h)?!!h.capture:!1,I):sv(s,a,c,!1,h,I)}function sv(s,a,c,h,I,P){if(!a)throw Error("Invalid event type");var x=p(I)?!!I.capture:!!I,Q=ol(s);if(Q||(s[rl]=Q=new rs(s)),c=Q.add(a,c,h,x,P),c.proxy)return c;if(h=ov(),c.proxy=h,h.src=s,h.listener=c,s.addEventListener)Pt||(I=x),I===void 0&&(I=!1),s.addEventListener(a.toString(),h,I);else if(s.attachEvent)s.attachEvent(Oc(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function ov(){function s(c){return a.call(s.src,s.listener,c)}const a=lv;return s}function Nc(s,a,c,h,I){if(Array.isArray(a))for(var P=0;P<a.length;P++)Nc(s,a[P],c,h,I);else h=p(h)?!!h.capture:!!h,c=Dc(c),s&&s[Ot]?(s=s.i,a=String(a).toString(),a in s.g&&(P=s.g[a],c=nl(P,c,h,I),-1<c&&(ns(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete s.g[a],s.h--)))):s&&(s=ol(s))&&(a=s.g[a.toString()],s=-1,a&&(s=nl(a,c,h,I)),(c=-1<s?a[s]:null)&&sl(c))}function sl(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Ot])tl(a.i,s);else{var c=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(c,h,s.capture):a.detachEvent?a.detachEvent(Oc(c),h):a.addListener&&a.removeListener&&a.removeListener(h),(c=ol(a))?(tl(c,s),c.h==0&&(c.src=null,a[rl]=null)):ns(s)}}}function Oc(s){return s in il?il[s]:il[s]="on"+s}function lv(s,a){if(s.da)s=!0;else{a=new Rt(a,this);var c=s.listener,h=s.ha||s.src;s.fa&&sl(s),s=c.call(h,a)}return s}function ol(s){return s=s[rl],s instanceof rs?s:null}var ll="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dc(s){return typeof s=="function"?s:(s[ll]||(s[ll]=function(a){return s.handleEvent(a)}),s[ll])}function _e(){X.call(this),this.i=new rs(this),this.M=this,this.F=null}R(_e,X),_e.prototype[Ot]=!0,_e.prototype.removeEventListener=function(s,a,c,h){Nc(this,s,a,c,h)};function Ae(s,a){var c,h=s.F;if(h)for(c=[];h;h=h.F)c.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new le(a,s);else if(a instanceof le)a.target=a.target||s;else{var I=a;a=new le(h,s),y(a,I)}if(I=!0,c)for(var P=c.length-1;0<=P;P--){var x=a.g=c[P];I=is(x,h,!0,a)&&I}if(x=a.g=s,I=is(x,h,!0,a)&&I,I=is(x,h,!1,a)&&I,c)for(P=0;P<c.length;P++)x=a.g=c[P],I=is(x,h,!1,a)&&I}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],h=0;h<c.length;h++)ns(c[h]);delete s.g[a],s.h--}}this.F=null},_e.prototype.K=function(s,a,c,h){return this.i.add(String(s),a,!1,c,h)},_e.prototype.L=function(s,a,c,h){return this.i.add(String(s),a,!0,c,h)};function is(s,a,c,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,P=0;P<a.length;++P){var x=a[P];if(x&&!x.da&&x.capture==c){var Q=x.listener,me=x.ha||x.src;x.fa&&tl(s.i,x),I=Q.call(me,h)!==!1&&I}}return I&&!h.defaultPrevented}function Lc(s,a,c){if(typeof s=="function")c&&(s=k(s,c));else if(s&&typeof s.handleEvent=="function")s=k(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function xc(s){s.g=Lc(()=>{s.g=null,s.i&&(s.i=!1,xc(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class av extends X{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:xc(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vr(s){X.call(this),this.h=s,this.g={}}R(Vr,X);var Mc=[];function Uc(s){U(s.g,function(a,c){this.g.hasOwnProperty(c)&&sl(a)},s),s.g={}}Vr.prototype.N=function(){Vr.aa.N.call(this),Uc(this)},Vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var al=u.JSON.stringify,uv=u.JSON.parse,cv=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function ul(){}ul.prototype.h=null;function Fc(s){return s.h||(s.h=s.i())}function fv(){}var br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cl(){le.call(this,"d")}R(cl,le);function fl(){le.call(this,"c")}R(fl,le);var er={},jc=null;function hl(){return jc=jc||new _e}er.La="serverreachability";function zc(s){le.call(this,er.La,s)}R(zc,le);function Hr(s){const a=hl();Ae(a,new zc(a))}er.STAT_EVENT="statevent";function $c(s,a){le.call(this,er.STAT_EVENT,s),this.stat=a}R($c,le);function Pe(s){const a=hl();Ae(a,new $c(a,s))}er.Ma="timingevent";function Bc(s,a){le.call(this,er.Ma,s),this.size=a}R(Bc,le);function Wr(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function Kr(){this.g=!0}Kr.prototype.xa=function(){this.g=!1};function hv(s,a,c,h,I,P){s.info(function(){if(s.g)if(P)for(var x="",Q=P.split("&"),me=0;me<Q.length;me++){var K=Q[me].split("=");if(1<K.length){var Ee=K[0];K=K[1];var Se=Ee.split("_");x=2<=Se.length&&Se[1]=="type"?x+(Ee+"="+K+"&"):x+(Ee+"=redacted&")}}else x=null;else x=P;return"XMLHTTP REQ ("+h+") [attempt "+I+"]: "+a+`
`+c+`
`+x})}function dv(s,a,c,h,I,P,x){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+I+"]: "+a+`
`+c+`
`+P+" "+x})}function tr(s,a,c,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+gv(s,c)+(h?" "+h:"")})}function pv(s,a){s.info(function(){return"TIMEOUT: "+a})}Kr.prototype.info=function(){};function gv(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var h=c[s];if(!(2>h.length)){var I=h[1];if(Array.isArray(I)&&!(1>I.length)){var P=I[0];if(P!="noop"&&P!="stop"&&P!="close")for(var x=1;x<I.length;x++)I[x]=""}}}}return al(c)}catch{return a}}var dl={NO_ERROR:0,TIMEOUT:8},mv={},pl;function ss(){}R(ss,ul),ss.prototype.g=function(){return new XMLHttpRequest},ss.prototype.i=function(){return{}},pl=new ss;function Yt(s,a,c,h){this.j=s,this.i=a,this.l=c,this.R=h||1,this.U=new Vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vc}function Vc(){this.i=null,this.g="",this.h=!1}var bc={},gl={};function ml(s,a,c){s.L=1,s.v=us(Dt(a)),s.m=c,s.P=!0,Hc(s,null)}function Hc(s,a){s.F=Date.now(),os(s),s.A=Dt(s.v);var c=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),sf(c.i,"t",h),s.C=0,c=s.j.J,s.h=new Vc,s.g=If(s.j,c?a:null,!s.m),0<s.O&&(s.M=new av(k(s.Y,s,s.g),s.O)),a=s.U,c=s.g,h=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Mc[0]=I.toString()),I=Mc);for(var P=0;P<I.length;P++){var x=Rc(c,I[P],h||a.handleEvent,!1,a.h||a);if(!x)break;a.g[x.key]=x}a=s.H?d(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Hr(),hv(s.i,s.u,s.A,s.l,s.R,s.m)}Yt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Lt(s)==3?a.j():this.Y(s)},Yt.prototype.Y=function(s){try{if(s==this.g)e:{const Se=Lt(this.g);var a=this.g.Ba();const ir=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||hf(this.g)))){this.J||Se!=4||a==7||(a==8||0>=ir?Hr(3):Hr(2)),vl(this);var c=this.g.Z();this.X=c;t:if(Wc(this)){var h=hf(this.g);s="";var I=h.length,P=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),Gr(this);var x="";break t}this.h.i=new u.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(P&&a==I-1)});h.length=0,this.h.g+=s,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=c==200,dv(this.i,this.u,this.A,this.l,this.R,Se,c),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,me=this.g;if((Q=me.g?me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Q)){var K=Q;break t}}K=null}if(c=K)tr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yl(this,c);else{this.o=!1,this.s=3,Pe(12),Pn(this),Gr(this);break e}}if(this.P){c=!0;let st;for(;!this.J&&this.C<x.length;)if(st=vv(this,x),st==gl){Se==4&&(this.s=4,Pe(14),c=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(st==bc){this.s=4,Pe(15),tr(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else tr(this.i,this.l,st,null),yl(this,st);if(Wc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||x.length!=0||this.h.h||(this.s=1,Pe(16),c=!1),this.o=this.o&&c,!c)tr(this.i,this.l,x,"[Invalid Chunked Response]"),Pn(this),Gr(this);else if(0<x.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Tl(Ee),Ee.M=!0,Pe(11))}}else tr(this.i,this.l,x,null),yl(this,x);Se==4&&Pn(this),this.o&&!this.J&&(Se==4?wf(this.j,this):(this.o=!1,os(this)))}else xv(this.g),c==400&&0<x.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),Pn(this),Gr(this)}}}catch{}finally{}};function Wc(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function vv(s,a){var c=s.C,h=a.indexOf(`
`,c);return h==-1?gl:(c=Number(a.substring(c,h)),isNaN(c)?bc:(h+=1,h+c>a.length?gl:(a=a.slice(h,h+c),s.C=h+c,a)))}Yt.prototype.cancel=function(){this.J=!0,Pn(this)};function os(s){s.S=Date.now()+s.I,Kc(s,s.I)}function Kc(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Wr(k(s.ba,s),a)}function vl(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Yt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(pv(this.i,this.A),this.L!=2&&(Hr(),Pe(17)),Pn(this),this.s=2,Gr(this)):Kc(this,this.S-s)};function Gr(s){s.j.G==0||s.J||wf(s.j,s)}function Pn(s){vl(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Uc(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function yl(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||wl(c.h,s))){if(!s.K&&wl(c.h,s)&&c.G==3){try{var h=c.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var I=h;if(I[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)gs(c),ds(c);else break e;Il(c),Pe(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=Wr(k(c.Za,c),6e3));if(1>=Xc(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Nn(c,11)}else if((s.K||c.g==s)&&gs(c),!w(a))for(I=c.Da.g.parse(a),a=0;a<I.length;a++){let K=I[a];if(c.T=K[0],K=K[1],c.G==2)if(K[0]=="c"){c.K=K[1],c.ia=K[2];const Ee=K[3];Ee!=null&&(c.la=Ee,c.j.info("VER="+c.la));const Se=K[4];Se!=null&&(c.Aa=Se,c.j.info("SVER="+c.Aa));const ir=K[5];ir!=null&&typeof ir=="number"&&0<ir&&(h=1.5*ir,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const st=s.g;if(st){const ms=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var P=h.h;P.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(_l(P,P.h),P.h=null))}if(h.D){const kl=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;kl&&(h.ya=kl,J(h.I,h.D,kl))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var x=s;if(h.qa=Sf(h,h.J?h.ia:null,h.W),x.K){Qc(h.h,x);var Q=x,me=h.L;me&&(Q.I=me),Q.B&&(vl(Q),os(Q)),h.g=x}else vf(h);0<c.i.length&&ps(c)}else K[0]!="stop"&&K[0]!="close"||Nn(c,7);else c.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Nn(c,7):Sl(c):K[0]!="noop"&&c.l&&c.l.ta(K),c.v=0)}}Hr(4)}catch{}}var yv=class{constructor(s,a){this.g=s,this.map=a}};function Gc(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qc(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Xc(s){return s.h?1:s.g?s.g.size:0}function wl(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function _l(s,a){s.g?s.g.add(a):s.h=a}function Qc(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Gc.prototype.cancel=function(){if(this.i=Yc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Yc(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return L(s.i)}function wv(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(f(s)){for(var a=[],c=s.length,h=0;h<c;h++)a.push(s[h]);return a}a=[],c=0;for(h in s)a[c++]=s[h];return a}function _v(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(f(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const h in s)a[c++]=h;return a}}}function Jc(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(f(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=_v(s),h=wv(s),I=h.length,P=0;P<I;P++)a.call(void 0,h[P],c&&c[P],s)}var Zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ev(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var h=s[c].indexOf("="),I=null;if(0<=h){var P=s[c].substring(0,h);I=s[c].substring(h+1)}else P=s[c];a(P,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Rn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Rn){this.h=s.h,ls(this,s.j),this.o=s.o,this.g=s.g,as(this,s.s),this.l=s.l;var a=s.i,c=new Qr;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),ef(this,c),this.m=s.m}else s&&(a=String(s).match(Zc))?(this.h=!1,ls(this,a[1]||"",!0),this.o=qr(a[2]||""),this.g=qr(a[3]||"",!0),as(this,a[4]),this.l=qr(a[5]||"",!0),ef(this,a[6]||"",!0),this.m=qr(a[7]||"")):(this.h=!1,this.i=new Qr(null,this.h))}Rn.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Xr(a,tf,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Xr(a,tf,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Xr(c,c.charAt(0)=="/"?Tv:Iv,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Xr(c,Cv)),s.join("")};function Dt(s){return new Rn(s)}function ls(s,a,c){s.j=c?qr(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function as(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ef(s,a,c){a instanceof Qr?(s.i=a,Av(s.i,s.h)):(c||(a=Xr(a,kv)),s.i=new Qr(a,s.h))}function J(s,a,c){s.i.set(a,c)}function us(s){return J(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function qr(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Xr(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Sv),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Sv(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var tf=/[#\/\?@]/g,Iv=/[#\?:]/g,Tv=/[#\?]/g,kv=/[#\?@]/g,Cv=/#/g;function Qr(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Jt(s){s.g||(s.g=new Map,s.h=0,s.i&&Ev(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}e=Qr.prototype,e.add=function(s,a){Jt(this),this.i=null,s=nr(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function nf(s,a){Jt(s),a=nr(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function rf(s,a){return Jt(s),a=nr(s,a),s.g.has(a)}e.forEach=function(s,a){Jt(this),this.g.forEach(function(c,h){c.forEach(function(I){s.call(a,I,h,this)},this)},this)},e.na=function(){Jt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let h=0;h<a.length;h++){const I=s[h];for(let P=0;P<I.length;P++)c.push(a[h])}return c},e.V=function(s){Jt(this);let a=[];if(typeof s=="string")rf(this,s)&&(a=a.concat(this.g.get(nr(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},e.set=function(s,a){return Jt(this),this.i=null,s=nr(this,s),rf(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},e.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function sf(s,a,c){nf(s,a),0<c.length&&(s.i=null,s.g.set(nr(s,a),L(c)),s.h+=c.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var h=a[c];const P=encodeURIComponent(String(h)),x=this.V(h);for(h=0;h<x.length;h++){var I=P;x[h]!==""&&(I+="="+encodeURIComponent(String(x[h]))),s.push(I)}}return this.i=s.join("&")};function nr(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Av(s,a){a&&!s.j&&(Jt(s),s.i=null,s.g.forEach(function(c,h){var I=h.toLowerCase();h!=I&&(nf(this,h),sf(this,I,c))},s)),s.j=a}function Pv(s,a){const c=new Kr;if(u.Image){const h=new Image;h.onload=O(Zt,c,"TestLoadImage: loaded",!0,a,h),h.onerror=O(Zt,c,"TestLoadImage: error",!1,a,h),h.onabort=O(Zt,c,"TestLoadImage: abort",!1,a,h),h.ontimeout=O(Zt,c,"TestLoadImage: timeout",!1,a,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function Rv(s,a){const c=new Kr,h=new AbortController,I=setTimeout(()=>{h.abort(),Zt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(P=>{clearTimeout(I),P.ok?Zt(c,"TestPingServer: ok",!0,a):Zt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Zt(c,"TestPingServer: error",!1,a)})}function Zt(s,a,c,h,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),h(c)}catch{}}function Nv(){this.g=new cv}function Ov(s,a,c){const h=c||"";try{Jc(s,function(I,P){let x=I;p(I)&&(x=al(I)),a.push(h+P+"="+encodeURIComponent(x))})}catch(I){throw a.push(h+"type="+encodeURIComponent("_badmap")),I}}function cs(s){this.l=s.Ub||null,this.j=s.eb||!1}R(cs,ul),cs.prototype.g=function(){return new fs(this.l,this.j)},cs.prototype.i=function(s){return function(){return s}}({});function fs(s,a){_e.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(fs,_e),e=fs.prototype,e.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Jr(this)},e.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},e.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;of(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function of(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}e.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Yr(this):Jr(this),this.readyState==3&&of(this)}},e.Ra=function(s){this.g&&(this.response=this.responseText=s,Yr(this))},e.Qa=function(s){this.g&&(this.response=s,Yr(this))},e.ga=function(){this.g&&Yr(this)};function Yr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Jr(s)}e.setRequestHeader=function(s,a){this.u.append(s,a)},e.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Jr(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function lf(s){let a="";return U(s,function(c,h){a+=h,a+=":",a+=c,a+=`\r
`}),a}function El(s,a,c){e:{for(h in c){var h=!1;break e}h=!0}h||(c=lf(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):J(s,a,c))}function ae(s){_e.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ae,_e);var Dv=/^https?$/i,Lv=["POST","PUT"];e=ae.prototype,e.Ha=function(s){this.J=s},e.ea=function(s,a,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pl.g(),this.v=this.o?Fc(this.o):Fc(pl),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(P){af(this,P);return}if(s=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var I in h)c.set(I,h[I]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const P of h.keys())c.set(P,h.get(P));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),I=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Lv,a,void 0))||h||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of c)this.g.setRequestHeader(P,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ff(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){af(this,P)}};function af(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,uf(s),hs(s)}function uf(s){s.A||(s.A=!0,Ae(s,"complete"),Ae(s,"error"))}e.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ae(this,"complete"),Ae(this,"abort"),hs(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hs(this,!0)),ae.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?cf(this):this.bb())},e.bb=function(){cf(this)};function cf(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Lt(s)!=4||s.Z()!=2)){if(s.u&&Lt(s)==4)Lc(s.Ea,0,s);else if(Ae(s,"readystatechange"),Lt(s)==4){s.h=!1;try{const x=s.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var h;if(h=x===0){var I=String(s.D).match(Zc)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),h=!Dv.test(I?I.toLowerCase():"")}c=h}if(c)Ae(s,"complete"),Ae(s,"success");else{s.m=6;try{var P=2<Lt(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",uf(s)}}finally{hs(s)}}}}function hs(s,a){if(s.g){ff(s);const c=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Ae(s,"ready");try{c.onreadystatechange=h}catch{}}}function ff(s){s.I&&(u.clearTimeout(s.I),s.I=null)}e.isActive=function(){return!!this.g};function Lt(s){return s.g?s.g.readyState:0}e.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),uv(a)}};function hf(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function xv(s){const a={};s=(s.g&&2<=Lt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(w(s[h]))continue;var c=_(s[h]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=a[I]||[];a[I]=P,P.push(c)}m(a,function(h){return h.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zr(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function df(s){this.Aa=0,this.i=[],this.j=new Kr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zr("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zr("baseRetryDelayMs",5e3,s),this.cb=Zr("retryDelaySeedMs",1e4,s),this.Wa=Zr("forwardChannelMaxRetries",2,s),this.wa=Zr("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Gc(s&&s.concurrentRequestLimit),this.Da=new Nv,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=df.prototype,e.la=8,e.G=1,e.connect=function(s,a,c,h){Pe(0),this.W=s,this.H=a||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=Sf(this,null,this.W),ps(this)};function Sl(s){if(pf(s),s.G==3){var a=s.U++,c=Dt(s.I);if(J(c,"SID",s.K),J(c,"RID",a),J(c,"TYPE","terminate"),ei(s,c),a=new Yt(s,s.j,a),a.L=2,a.v=us(Dt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=If(a.j,null),a.g.ea(a.v)),a.F=Date.now(),os(a)}Ef(s)}function ds(s){s.g&&(Tl(s),s.g.cancel(),s.g=null)}function pf(s){ds(s),s.u&&(u.clearTimeout(s.u),s.u=null),gs(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function ps(s){if(!qc(s.h)&&!s.s){s.s=!0;var a=s.Ga;At||V(),F||(At(),F=!0),B.add(a,s),s.B=0}}function Mv(s,a){return Xc(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Wr(k(s.Ga,s,a),_f(s,s.B)),s.B++,!0)}e.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Yt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=d(P),y(P,this.S)):P=this.S),this.m!==null||this.O||(I.H=P,P=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=mf(this,I,a),c=Dt(this.I),J(c,"RID",s),J(c,"CVER",22),this.D&&J(c,"X-HTTP-Session-Id",this.D),ei(this,c),P&&(this.O?a="headers="+encodeURIComponent(String(lf(P)))+"&"+a:this.m&&El(c,this.m,P)),_l(this.h,I),this.Ua&&J(c,"TYPE","init"),this.P?(J(c,"$req",a),J(c,"SID","null"),I.T=!0,ml(I,c,null)):ml(I,c,a),this.G=2}}else this.G==3&&(s?gf(this,s):this.i.length==0||qc(this.h)||gf(this))};function gf(s,a){var c;a?c=a.l:c=s.U++;const h=Dt(s.I);J(h,"SID",s.K),J(h,"RID",c),J(h,"AID",s.T),ei(s,h),s.m&&s.o&&El(h,s.m,s.o),c=new Yt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=mf(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),_l(s.h,c),ml(c,h,a)}function ei(s,a){s.H&&U(s.H,function(c,h){J(a,h,c)}),s.l&&Jc({},function(c,h){J(a,h,c)})}function mf(s,a,c){c=Math.min(s.i.length,c);var h=s.l?k(s.l.Na,s.l,s):null;e:{var I=s.i;let P=-1;for(;;){const x=["count="+c];P==-1?0<c?(P=I[0].g,x.push("ofs="+P)):P=0:x.push("ofs="+P);let Q=!0;for(let me=0;me<c;me++){let K=I[me].g;const Ee=I[me].map;if(K-=P,0>K)P=Math.max(0,I[me].g-100),Q=!1;else try{Ov(Ee,x,"req"+K+"_")}catch{h&&h(Ee)}}if(Q){h=x.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,h}function vf(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;At||V(),F||(At(),F=!0),B.add(a,s),s.v=0}}function Il(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Wr(k(s.Fa,s),_f(s,s.v)),s.v++,!0)}e.Fa=function(){if(this.u=null,yf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Wr(k(this.ab,this),s)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pe(10),ds(this),yf(this))};function Tl(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function yf(s){s.g=new Yt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Dt(s.qa);J(a,"RID","rpc"),J(a,"SID",s.K),J(a,"AID",s.T),J(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&J(a,"TO",s.ja),J(a,"TYPE","xmlhttp"),ei(s,a),s.m&&s.o&&El(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=us(Dt(a)),c.m=null,c.P=!0,Hc(c,s)}e.Za=function(){this.C!=null&&(this.C=null,ds(this),Il(this),Pe(19))};function gs(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function wf(s,a){var c=null;if(s.g==a){gs(s),Tl(s),s.g=null;var h=2}else if(wl(s.h,a))c=a.D,Qc(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;h=hl(),Ae(h,new Bc(h,c)),ps(s)}else vf(s);else if(I=a.s,I==3||I==0&&0<a.X||!(h==1&&Mv(s,a)||h==2&&Il(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),I){case 1:Nn(s,5);break;case 4:Nn(s,10);break;case 3:Nn(s,6);break;default:Nn(s,2)}}}function _f(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function Nn(s,a){if(s.j.info("Error code "+a),a==2){var c=k(s.fb,s),h=s.Xa;const I=!h;h=new Rn(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ls(h,"https"),us(h),I?Pv(h.toString(),c):Rv(h.toString(),c)}else Pe(2);s.G=0,s.l&&s.l.sa(a),Ef(s),pf(s)}e.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function Ef(s){if(s.G=0,s.ka=[],s.l){const a=Yc(s.h);(a.length!=0||s.i.length!=0)&&(z(s.ka,a),z(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function Sf(s,a,c){var h=c instanceof Rn?Dt(c):new Rn(c);if(h.g!="")a&&(h.g=a+"."+h.g),as(h,h.s);else{var I=u.location;h=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var P=new Rn(null);h&&ls(P,h),a&&(P.g=a),I&&as(P,I),c&&(P.l=c),h=P}return c=s.D,a=s.ya,c&&a&&J(h,c,a),J(h,"VER",s.la),ei(s,h),h}function If(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new ae(new cs({eb:c})):new ae(s.pa),a.Ha(s.J),a}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tf(){}e=Tf.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Ye(s,a){_e.call(this),this.g=new df(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!w(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!w(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new rr(this)}R(Ye,_e),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){Sl(this.g)},Ye.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=al(s),s=c);a.i.push(new yv(a.Ya++,s)),a.G==3&&ps(a)},Ye.prototype.N=function(){this.g.l=null,delete this.j,Sl(this.g),delete this.g,Ye.aa.N.call(this)};function kf(s){cl.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}R(kf,cl);function Cf(){fl.call(this),this.status=1}R(Cf,fl);function rr(s){this.g=s}R(rr,Tf),rr.prototype.ua=function(){Ae(this.g,"a")},rr.prototype.ta=function(s){Ae(this.g,new kf(s))},rr.prototype.sa=function(s){Ae(this.g,new Cf)},rr.prototype.ra=function(){Ae(this.g,"b")},Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,dl.NO_ERROR=0,dl.TIMEOUT=8,dl.HTTP_ERROR=6,mv.COMPLETE="complete",fv.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",_e.prototype.listen=_e.prototype.K,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha}).apply(typeof Ms<"u"?Ms:typeof self<"u"?self:typeof window<"u"?window:{});const fd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Xo("@firebase/firestore");function ct(e,...t){if(Mr.logLevel<=G.DEBUG){const n=t.map(_c);Mr.debug(`Firestore (${ts}): ${e}`,...n)}}function Om(e,...t){if(Mr.logLevel<=G.ERROR){const n=t.map(_c);Mr.error(`Firestore (${ts}): ${e}`,...n)}}function HE(e,...t){if(Mr.logLevel<=G.WARN){const n=t.map(_c);Mr.warn(`Firestore (${ts}): ${e}`,...n)}}function _c(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e="Unexpected state"){const t=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+e;throw Om(t),new Error(t)}function Ii(e,t){e||Ec()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Fe extends mt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class WE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class KE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GE{constructor(t){this.t=t,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ii(this.o===void 0);let r=this.i;const i=f=>this.i!==r?(r=this.i,n(f)):Promise.resolve();let o=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ti,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},u=f=>{ct("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>u(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?u(f):(ct("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ti)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ct("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ii(typeof r.accessToken=="string"),new Dm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ii(t===null||typeof t=="string"),new Ne(t)}}class qE{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XE{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new qE(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QE{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YE{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Ii(this.o===void 0);const r=o=>{o.error!=null&&ct("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,ct("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{ct("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):ct("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ii(typeof n.token=="string"),this.R=n.token,new QE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function JE(e){return e.name==="IndexedDbTransactionError"}class No{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new No("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof No&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hd,H;(H=hd||(hd={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Nm([4294967295,4294967295],0);function sa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(t,n,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ct("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const l=Date.now()+r,u=new Sc(t,n,l,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Fe(Ue.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var dd,pd;(pd=dd||(dd={})).ea="default",pd.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new Map;function tS(e,t,n,r){if(t===!0&&r===!0)throw new Fe(Ue.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function nS(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Ec()}function rS(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Fe(Ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nS(e);throw new Fe(Ue.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Fe(Ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Fe(Ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tS("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eS((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Fe(Ue.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Fe(Ue.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Fe(Ue.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Lm{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new md({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Fe(Ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Fe(Ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new md(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WE;switch(r.type){case"firstParty":return new XE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Fe(Ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gd.get(n);r&&(ct("ComponentProvider","Removing Datastore"),gd.delete(n),r.terminate())}(this),Promise.resolve()}}function iS(e,t,n,r={}){var i;const o=(e=rS(e,Lm))._getSettings(),l=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&HE("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=Ne.MOCK_USER;else{u=ww(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Fe(Ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ne(p)}e._authCredentials=new KE(new Dm(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ZE(this,"async_queue_retry"),this.Vu=()=>{const r=sa();r&&ct("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=sa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=sa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ti;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!JE(t))throw t;ct("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw Om("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=Sc.createAndSchedule(this,t,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&Ec()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class sS extends Lm{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new vd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new vd(t),this._firestoreClient=void 0,await t}}}function oS(e,t){const n=typeof e=="object"?e:ac(),r=typeof e=="string"?e:"(default)",i=Zn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=vw("firestore");o&&iS(i,...o)}return i}(function(t,n=!0){(function(i){ts=i})(zr),Tt(new gt("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new sS(new GE(r.getProvider("auth-internal")),new YE(r.getProvider("app-check-internal")),function(p,C){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new Fe(Ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(p.options.projectId,C)}(l,i),l);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),nt(fd,"4.7.3",t),nt(fd,"4.7.3","esm2017")})();const xm="@firebase/installations",Ic="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=1e4,Um=`w:${Ic}`,Fm="FIS_v2",lS="https://firebaseinstallations.googleapis.com/v1",aS=60*60*1e3,uS="installations",cS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qn=new Jn(uS,cS,fS);function jm(e){return e instanceof mt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm({projectId:e}){return`${lS}/projects/${e}/installations`}function $m(e){return{token:e.token,requestStatus:2,expiresIn:dS(e.expiresIn),creationTime:Date.now()}}async function Bm(e,t){const r=(await t.json()).error;return qn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Vm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function hS(e,{refreshToken:t}){const n=Vm(e);return n.append("Authorization",pS(t)),n}async function bm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function dS(e){return Number(e.replace("s","000"))}function pS(e){return`${Fm} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=zm(e),i=Vm(e),o=t.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const l={fid:n,authVersion:Fm,appId:e.appId,sdkVersion:Um},u={method:"POST",headers:i,body:JSON.stringify(l)},f=await bm(()=>fetch(r,u));if(f.ok){const p=await f.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:$m(p.authToken)}}else throw await Bm("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=/^[cdef][\w-]{21}$/,fu="";function yS(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=wS(e);return vS.test(n)?n:fu}catch{return fu}}function wS(e){return mS(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new Map;function Km(e,t){const n=Zo(e);Gm(n,t),_S(n,t)}function Gm(e,t){const n=Wm.get(e);if(n)for(const r of n)r(t)}function _S(e,t){const n=ES();n&&n.postMessage({key:e,fid:t}),SS()}let jn=null;function ES(){return!jn&&"BroadcastChannel"in self&&(jn=new BroadcastChannel("[Firebase] FID Change"),jn.onmessage=e=>{Gm(e.data.key,e.data.fid)}),jn}function SS(){Wm.size===0&&jn&&(jn.close(),jn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="firebase-installations-database",TS=1,Xn="firebase-installations-store";let oa=null;function Tc(){return oa||(oa=Xg(IS,TS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Xn)}}})),oa}async function Oo(e,t){const n=Zo(e),i=(await Tc()).transaction(Xn,"readwrite"),o=i.objectStore(Xn),l=await o.get(n);return await o.put(t,n),await i.done,(!l||l.fid!==t.fid)&&Km(e,t.fid),t}async function qm(e){const t=Zo(e),r=(await Tc()).transaction(Xn,"readwrite");await r.objectStore(Xn).delete(t),await r.done}async function el(e,t){const n=Zo(e),i=(await Tc()).transaction(Xn,"readwrite"),o=i.objectStore(Xn),l=await o.get(n),u=t(l);return u===void 0?await o.delete(n):await o.put(u,n),await i.done,u&&(!l||l.fid!==u.fid)&&Km(e,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(e){let t;const n=await el(e.appConfig,r=>{const i=kS(r),o=CS(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===fu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function kS(e){const t=e||{fid:yS(),registrationStatus:0};return Xm(t)}function CS(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=AS(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:PS(e)}:{installationEntry:t}}async function AS(e,t){try{const n=await gS(e,t);return Oo(e.appConfig,n)}catch(n){throw jm(n)&&n.customData.serverCode===409?await qm(e.appConfig):await Oo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function PS(e){let t=await yd(e.appConfig);for(;t.registrationStatus===1;)await Hm(100),t=await yd(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kc(e);return r||n}return t}function yd(e){return el(e,t=>{if(!t)throw qn.create("installation-not-found");return Xm(t)})}function Xm(e){return RS(e)?{fid:e.fid,registrationStatus:0}:e}function RS(e){return e.registrationStatus===1&&e.registrationTime+Mm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS({appConfig:e,heartbeatServiceProvider:t},n){const r=OS(e,n),i=hS(e,n),o=t.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const l={installation:{sdkVersion:Um,appId:e.appId}},u={method:"POST",headers:i,body:JSON.stringify(l)},f=await bm(()=>fetch(r,u));if(f.ok){const p=await f.json();return $m(p)}else throw await Bm("Generate Auth Token",f)}function OS(e,{fid:t}){return`${zm(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(e,t=!1){let n;const r=await el(e.appConfig,o=>{if(!Qm(o))throw qn.create("not-registered");const l=o.authToken;if(!t&&xS(l))return o;if(l.requestStatus===1)return n=DS(e,t),o;{if(!navigator.onLine)throw qn.create("app-offline");const u=US(o);return n=LS(e,u),u}});return n?await n:r.authToken}async function DS(e,t){let n=await wd(e.appConfig);for(;n.authToken.requestStatus===1;)await Hm(100),n=await wd(e.appConfig);const r=n.authToken;return r.requestStatus===0?Cc(e,t):r}function wd(e){return el(e,t=>{if(!Qm(t))throw qn.create("not-registered");const n=t.authToken;return FS(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function LS(e,t){try{const n=await NS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Oo(e.appConfig,r),n}catch(n){if(jm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Oo(e.appConfig,r)}throw n}}function Qm(e){return e!==void 0&&e.registrationStatus===2}function xS(e){return e.requestStatus===2&&!MS(e)}function MS(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+aS}function US(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function FS(e){return e.requestStatus===1&&e.requestTime+Mm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(e){const t=e,{installationEntry:n,registrationPromise:r}=await kc(t);return r?r.catch(console.error):Cc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(e,t=!1){const n=e;return await $S(n),(await Cc(n,t)).token}async function $S(e){const{registrationPromise:t}=await kc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(e){if(!e||!e.options)throw la("App Configuration");if(!e.name)throw la("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw la(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function la(e){return qn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="installations",VS="installations-internal",bS=e=>{const t=e.getProvider("app").getImmediate(),n=BS(t),r=Zn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},HS=e=>{const t=e.getProvider("app").getImmediate(),n=Zn(t,Ym).getImmediate();return{getId:()=>jS(n),getToken:i=>zS(n,i)}};function WS(){Tt(new gt(Ym,bS,"PUBLIC")),Tt(new gt(VS,HS,"PRIVATE"))}WS();nt(xm,Ic);nt(xm,Ic,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="analytics",KS="firebase_id",GS="origin",qS=60*1e3,XS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ac="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Xo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ke=new Jn("analytics","Analytics",QS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(e){if(!e.startsWith(Ac)){const t=Ke.create("invalid-gtag-resource",{gtagURL:e});return Ve.warn(t.message),""}return e}function Jm(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function JS(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ZS(e,t){const n=JS("firebase-js-sdk-policy",{createScriptURL:YS}),r=document.createElement("script"),i=`${Ac}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function eI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function tI(e,t,n,r,i,o){const l=r[i];try{if(l)await t[l];else{const f=(await Jm(n)).find(p=>p.measurementId===i);f&&await t[f.appId]}}catch(u){Ve.error(u)}e("config",i,o)}async function nI(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let l=i.send_to;Array.isArray(l)||(l=[l]);const u=await Jm(n);for(const f of l){const p=u.find(A=>A.measurementId===f),C=p&&t[p.appId];if(C)o.push(C);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ve.error(o)}}function rI(e,t,n,r){async function i(o,...l){try{if(o==="event"){const[u,f]=l;await nI(e,t,n,u,f)}else if(o==="config"){const[u,f]=l;await tI(e,t,n,r,u,f)}else if(o==="consent"){const[u,f]=l;e("consent",u,f)}else if(o==="get"){const[u,f,p]=l;e("get",u,f,p)}else if(o==="set"){const[u]=l;e("set",u)}else e(o,...l)}catch(u){Ve.error(u)}}return i}function iI(e,t,n,r,i){let o=function(...l){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=rI(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function sI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ac)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=30,lI=1e3;class aI{constructor(t={},n=lI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Zm=new aI;function uI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function cI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:uI(r)},o=XS.replace("{app-id}",n),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let u="";try{const f=await l.json();!((t=f.error)===null||t===void 0)&&t.message&&(u=f.error.message)}catch{}throw Ke.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function fI(e,t=Zm,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ke.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ke.create("no-api-key")}const l=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new pI;return setTimeout(async()=>{u.abort()},qS),ev({appId:r,apiKey:i,measurementId:o},l,u,t)}async function ev(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Zm){var o;const{appId:l,measurementId:u}=e;try{await hI(r,t)}catch(f){if(u)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:u};throw f}try{const f=await cI(e);return i.deleteThrottleMetadata(l),f}catch(f){const p=f;if(!dI(p)){if(i.deleteThrottleMetadata(l),u)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:u};throw f}const C=Number((o=p==null?void 0:p.customData)===null||o===void 0?void 0:o.httpStatus)===503?jh(n,i.intervalMillis,oI):jh(n,i.intervalMillis),A={throttleEndTimeMillis:Date.now()+C,backoffCount:n+1};return i.setThrottleMetadata(l,A),Ve.debug(`Calling attemptFetch again in ${C} millis`),ev(e,A,r,i)}}function hI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ke.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function dI(e){if(!(e instanceof mt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class pI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function gI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,l=Object.assign(Object.assign({},r),{send_to:o});e("event",n,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(){if(Wg())try{await Kg()}catch(e){return Ve.warn(Ke.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ve.warn(Ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vI(e,t,n,r,i,o,l){var u;const f=fI(e);f.then(O=>{n[O.measurementId]=O.appId,e.options.measurementId&&O.measurementId!==e.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>Ve.error(O)),t.push(f);const p=mI().then(O=>{if(O)return r.getId()}),[C,A]=await Promise.all([f,p]);sI(o)||ZS(o,C.measurementId),i("js",new Date);const k=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return k[GS]="firebase",k.update=!0,A!=null&&(k[KS]=A),i("config",C.measurementId,k),C.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(t){this.app=t}_delete(){return delete ki[this.app.options.appId],Promise.resolve()}}let ki={},_d=[];const Ed={};let aa="dataLayer",wI="gtag",Sd,tv,Id=!1;function _I(){const e=[];if(Hg()&&e.push("This is a browser extension environment."),Tw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ke.create("invalid-analytics-context",{errorInfo:t});Ve.warn(n.message)}}function EI(e,t,n){_I();const r=e.options.appId;if(!r)throw Ke.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ke.create("no-api-key");if(ki[r]!=null)throw Ke.create("already-exists",{id:r});if(!Id){eI(aa);const{wrappedGtag:o,gtagCore:l}=iI(ki,_d,Ed,aa,wI);tv=o,Sd=l,Id=!0}return ki[r]=vI(e,_d,Ed,t,Sd,aa,n),new yI(e)}function SI(e=ac()){e=Ct(e);const t=Zn(e,Do);return t.isInitialized()?t.getImmediate():II(e)}function II(e,t={}){const n=Zn(e,Do);if(n.isInitialized()){const i=n.getImmediate();if(bi(t,n.getOptions()))return i;throw Ke.create("already-initialized")}return n.initialize({options:t})}function TI(e,t,n,r){e=Ct(e),gI(tv,ki[e.app.options.appId],t,n,r).catch(i=>Ve.error(i))}const Td="@firebase/analytics",kd="0.10.8";function kI(){Tt(new gt(Do,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return EI(r,i,n)},"PUBLIC")),Tt(new gt("analytics-internal",e,"PRIVATE")),nt(Td,kd),nt(Td,kd,"esm2017");function e(t){try{const n=t.getProvider(Do).getImmediate();return{logEvent:(r,i,o)=>TI(n,r,i,o)}}catch(n){throw Ke.create("interop-component-reg-failed",{reason:n})}}}kI();const CI={apiKey:"AIzaSyCbV3H_HhwK39sgj4A8UghvgK1W1TY1bpw",authDomain:"sadhana-prasad.firebaseapp.com",projectId:"sadhana-prasad",storageBucket:"sadhana-prasad.appspot.com",messagingSenderId:"654502924214",appId:"1:654502924214:web:ba5a346ce6b75ab07abb17",measurementId:"G-HR010HP0RC"},Pc=Qg(CI);SI(Pc);const ua=VE(Pc),AI=new Ut;oS(Pc);const nv=_t.createContext(void 0),PI=({children:e})=>{const[t,n]=_t.useState(null),[r,i]=_t.useState(!0);_t.useEffect(()=>{const u=N1(ua,f=>{n(f),i(!1)});return()=>u()},[]);const o=async()=>{await Y1(ua,AI)},l=async()=>{await O1(ua)};return fe.jsx(nv.Provider,{value:{user:t,loading:r,signInWithGoogle:o,signOutUser:l},children:e})},RI=()=>{const e=_t.useContext(nv);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},NI=()=>{const[e,t]=_t.useState(()=>window.matchMedia("(prefers-color-scheme: dark)").matches);return _t.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]),fe.jsx("button",{"aria-label":"Toggle dark mode",className:"rounded-full p-2 bg-sky-300 dark:bg-gray-700 hover:bg-sky-400 dark:hover:bg-gray-600 transition",onClick:()=>t(n=>!n),children:e?"🌙":"☀️"})},OI=()=>{const{user:e,signInWithGoogle:t,signOutUser:n}=RI();return fe.jsxs("nav",{className:"w-full flex items-center justify-between px-4 py-2 bg-sky-200 dark:bg-gray-800 shadow",children:[fe.jsx("div",{className:"flex items-center gap-2",children:fe.jsx("span",{className:"text-2xl font-bold text-sky-700 dark:text-sky-200",children:"🌟 SADHANA"})}),fe.jsxs("div",{className:"flex items-center gap-4",children:[fe.jsx(NI,{}),e?fe.jsxs(fe.Fragment,{children:[fe.jsx("span",{className:"text-sky-900 dark:text-sky-100 font-medium",children:e.displayName}),fe.jsx("button",{className:"bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition",onClick:n,children:"Sign Out"})]}):fe.jsx("button",{className:"bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded transition",onClick:t,children:"Sign In with Google"})]})]})},DI=({children:e})=>fe.jsxs("div",{className:"min-h-screen flex flex-col bg-sky-50 dark:bg-gray-900 transition-colors",children:[fe.jsx(OI,{}),fe.jsx("main",{className:"flex-1 flex flex-col items-center justify-center p-4",children:e})]});function LI(){return fe.jsx(PI,{children:fe.jsx(DI,{})})}ca.createRoot(document.getElementById("root")).render(fe.jsxs(Jv.StrictMode,{children:[fe.jsx(LI,{}),","]}));

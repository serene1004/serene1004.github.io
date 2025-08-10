(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ot={},Ea=[],Ci=()=>{},Qx=()=>!1,Od=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qp=n=>n.startsWith("onUpdate:"),wn=Object.assign,em=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},eS=Object.prototype.hasOwnProperty,Et=(n,e)=>eS.call(n,e),qe=Array.isArray,Ta=n=>Bd(n)==="[object Map]",Bb=n=>Bd(n)==="[object Set]",Je=n=>typeof n=="function",Xt=n=>typeof n=="string",so=n=>typeof n=="symbol",Ht=n=>n!==null&&typeof n=="object",Ub=n=>(Ht(n)||Je(n))&&Je(n.then)&&Je(n.catch),Nb=Object.prototype.toString,Bd=n=>Nb.call(n),tS=n=>Bd(n).slice(8,-1),Fb=n=>Bd(n)==="[object Object]",tm=n=>Xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ol=Jp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ud=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},nS=/-(\w)/g,Wr=Ud(n=>n.replace(nS,(e,t)=>t?t.toUpperCase():"")),rS=/\B([A-Z])/g,Fs=Ud(n=>n.replace(rS,"-$1").toLowerCase()),Nd=Ud(n=>n.charAt(0).toUpperCase()+n.slice(1)),cf=Ud(n=>n?`on${Nd(n)}`:""),ko=(n,e)=>!Object.is(n,e),uf=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},zb=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},iS=n=>{const e=parseFloat(n);return isNaN(e)?n:e},oS=n=>{const e=Xt(n)?Number(n):NaN;return isNaN(e)?n:e};let mg;const Fd=()=>mg||(mg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hc(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=Xt(r)?cS(r):Hc(r);if(i)for(const o in i)e[o]=i[o]}return e}else if(Xt(n)||Ht(n))return n}const sS=/;(?![^(]*\))/g,aS=/:([^]+)/,lS=/\/\*[^]*?\*\//g;function cS(n){const e={};return n.replace(lS,"").split(sS).forEach(t=>{if(t){const r=t.split(aS);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Uo(n){let e="";if(Xt(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const r=Uo(n[t]);r&&(e+=r+" ")}else if(Ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Xs(n){if(!n)return null;let{class:e,style:t}=n;return e&&!Xt(e)&&(n.class=Uo(e)),t&&(n.style=Hc(t)),n}const uS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dS=Jp(uS);function Hb(n){return!!n||n===""}const Vb=n=>!!(n&&n.__v_isRef===!0),Ps=n=>Xt(n)?n:n==null?"":qe(n)||Ht(n)&&(n.toString===Nb||!Je(n.toString))?Vb(n)?Ps(n.value):JSON.stringify(n,Gb,2):String(n),Gb=(n,e)=>Vb(e)?Gb(n,e.value):Ta(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i],o)=>(t[df(r,o)+" =>"]=i,t),{})}:Bb(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>df(t))}:so(e)?df(e):Ht(e)&&!qe(e)&&!Fb(e)?String(e):e,df=(n,e="")=>{var t;return so(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yn;class $b{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yn,!e&&Yn&&(this.index=(Yn.scopes||(Yn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Yn;try{return Yn=this,e()}finally{Yn=t}}}on(){Yn=this}off(){Yn=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Wb(n){return new $b(n)}function Xb(){return Yn}function fS(n,e=!1){Yn&&Yn.cleanups.push(n)}let Ft;const ff=new WeakSet;class jb{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yn&&Yn.active&&Yn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ff.has(this)&&(ff.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qb(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gg(this),Kb(this);const e=Ft,t=si;Ft=this,si=!0;try{return this.fn()}finally{Zb(this),Ft=e,si=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)im(e);this.deps=this.depsTail=void 0,gg(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ff.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vh(this)&&this.run()}get dirty(){return vh(this)}}let Yb=0,Bl,Ul;function qb(n,e=!1){if(n.flags|=8,e){n.next=Ul,Ul=n;return}n.next=Bl,Bl=n}function nm(){Yb++}function rm(){if(--Yb>0)return;if(Ul){let e=Ul;for(Ul=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Bl;){let e=Bl;for(Bl=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Kb(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zb(n){let e,t=n.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),im(r),hS(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}n.deps=e,n.depsTail=t}function vh(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jb(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Jb(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ac))return;n.globalVersion=ac;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!vh(n)){n.flags&=-3;return}const t=Ft,r=si;Ft=n,si=!0;try{Kb(n);const i=n.fn(n._value);(e.version===0||ko(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ft=t,si=r,Zb(n),n.flags&=-3}}function im(n,e=!1){const{dep:t,prevSub:r,nextSub:i}=n;if(r&&(r.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)im(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function hS(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let si=!0;const Qb=[];function $o(){Qb.push(si),si=!1}function Wo(){const n=Qb.pop();si=n===void 0?!0:n}function gg(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let ac=0;class pS{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class om{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ft||!si||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new pS(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,ev(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=r)}return t}trigger(e){this.version++,ac++,this.notify(e)}notify(e){nm();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{rm()}}}function ev(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ev(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ad=new WeakMap,xs=Symbol(""),yh=Symbol(""),lc=Symbol("");function Ln(n,e,t){if(si&&Ft){let r=ad.get(n);r||ad.set(n,r=new Map);let i=r.get(t);i||(r.set(t,i=new om),i.map=r,i.key=t),i.track()}}function Xi(n,e,t,r,i,o){const s=ad.get(n);if(!s){ac++;return}const a=l=>{l&&l.trigger()};if(nm(),e==="clear")s.forEach(a);else{const l=qe(n),c=l&&tm(t);if(l&&t==="length"){const u=Number(r);s.forEach((d,f)=>{(f==="length"||f===lc||!so(f)&&f>=u)&&a(d)})}else switch((t!==void 0||s.has(void 0))&&a(s.get(t)),c&&a(s.get(lc)),e){case"add":l?c&&a(s.get("length")):(a(s.get(xs)),Ta(n)&&a(s.get(yh)));break;case"delete":l||(a(s.get(xs)),Ta(n)&&a(s.get(yh)));break;case"set":Ta(n)&&a(s.get(xs));break}}rm()}function mS(n,e){const t=ad.get(n);return t&&t.get(e)}function js(n){const e=mt(n);return e===n?e:(Ln(e,"iterate",lc),Gr(n)?e:e.map(In))}function zd(n){return Ln(n=mt(n),"iterate",lc),n}const gS={__proto__:null,[Symbol.iterator](){return hf(this,Symbol.iterator,In)},concat(...n){return js(this).concat(...n.map(e=>qe(e)?js(e):e))},entries(){return hf(this,"entries",n=>(n[1]=In(n[1]),n))},every(n,e){return Li(this,"every",n,e,void 0,arguments)},filter(n,e){return Li(this,"filter",n,e,t=>t.map(In),arguments)},find(n,e){return Li(this,"find",n,e,In,arguments)},findIndex(n,e){return Li(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Li(this,"findLast",n,e,In,arguments)},findLastIndex(n,e){return Li(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Li(this,"forEach",n,e,void 0,arguments)},includes(...n){return pf(this,"includes",n)},indexOf(...n){return pf(this,"indexOf",n)},join(n){return js(this).join(n)},lastIndexOf(...n){return pf(this,"lastIndexOf",n)},map(n,e){return Li(this,"map",n,e,void 0,arguments)},pop(){return dl(this,"pop")},push(...n){return dl(this,"push",n)},reduce(n,...e){return _g(this,"reduce",n,e)},reduceRight(n,...e){return _g(this,"reduceRight",n,e)},shift(){return dl(this,"shift")},some(n,e){return Li(this,"some",n,e,void 0,arguments)},splice(...n){return dl(this,"splice",n)},toReversed(){return js(this).toReversed()},toSorted(n){return js(this).toSorted(n)},toSpliced(...n){return js(this).toSpliced(...n)},unshift(...n){return dl(this,"unshift",n)},values(){return hf(this,"values",In)}};function hf(n,e,t){const r=zd(n),i=r[e]();return r!==n&&!Gr(n)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=t(o.value)),o}),i}const _S=Array.prototype;function Li(n,e,t,r,i,o){const s=zd(n),a=s!==n&&!Gr(n),l=s[e];if(l!==_S[e]){const d=l.apply(n,o);return a?In(d):d}let c=t;s!==n&&(a?c=function(d,f){return t.call(this,In(d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(s,c,r);return a&&i?i(u):u}function _g(n,e,t,r){const i=zd(n);let o=t;return i!==n&&(Gr(n)?t.length>3&&(o=function(s,a,l){return t.call(this,s,a,l,n)}):o=function(s,a,l){return t.call(this,s,In(a),l,n)}),i[e](o,...r)}function pf(n,e,t){const r=mt(n);Ln(r,"iterate",lc);const i=r[e](...t);return(i===-1||i===!1)&&cm(t[0])?(t[0]=mt(t[0]),r[e](...t)):i}function dl(n,e,t=[]){$o(),nm();const r=mt(n)[e].apply(n,t);return rm(),Wo(),r}const bS=Jp("__proto__,__v_isRef,__isVue"),tv=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(so));function vS(n){so(n)||(n=String(n));const e=mt(this);return Ln(e,"has",n),e.hasOwnProperty(n)}class nv{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(i?o?RS:sv:o?ov:iv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=qe(e);if(!i){let l;if(s&&(l=gS[t]))return l;if(t==="hasOwnProperty")return vS}const a=Reflect.get(e,t,qt(e)?e:r);return(so(t)?tv.has(t):bS(t))||(i||Ln(e,"get",t),o)?a:qt(a)?s&&tm(t)?a:a.value:Ht(a)?i?am(a):zs(a):a}}class rv extends nv{constructor(e=!1){super(!1,e)}set(e,t,r,i){let o=e[t];if(!this._isShallow){const l=ks(o);if(!Gr(r)&&!ks(r)&&(o=mt(o),r=mt(r)),!qe(e)&&qt(o)&&!qt(r))return l?!1:(o.value=r,!0)}const s=qe(e)&&tm(t)?Number(t)<e.length:Et(e,t),a=Reflect.set(e,t,r,qt(e)?e:i);return e===mt(i)&&(s?ko(r,o)&&Xi(e,"set",t,r):Xi(e,"add",t,r)),a}deleteProperty(e,t){const r=Et(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&r&&Xi(e,"delete",t,void 0),i}has(e,t){const r=Reflect.has(e,t);return(!so(t)||!tv.has(t))&&Ln(e,"has",t),r}ownKeys(e){return Ln(e,"iterate",qe(e)?"length":xs),Reflect.ownKeys(e)}}class yS extends nv{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const xS=new rv,SS=new yS,wS=new rv(!0);const xh=n=>n,qc=n=>Reflect.getPrototypeOf(n);function MS(n,e,t){return function(...r){const i=this.__v_raw,o=mt(i),s=Ta(o),a=n==="entries"||n===Symbol.iterator&&s,l=n==="keys"&&s,c=i[n](...r),u=t?xh:e?Sh:In;return!e&&Ln(o,"iterate",l?yh:xs),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Kc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function CS(n,e){const t={get(i){const o=this.__v_raw,s=mt(o),a=mt(i);n||(ko(i,a)&&Ln(s,"get",i),Ln(s,"get",a));const{has:l}=qc(s),c=e?xh:n?Sh:In;if(l.call(s,i))return c(o.get(i));if(l.call(s,a))return c(o.get(a));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!n&&Ln(mt(i),"iterate",xs),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,s=mt(o),a=mt(i);return n||(ko(i,a)&&Ln(s,"has",i),Ln(s,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const s=this,a=s.__v_raw,l=mt(a),c=e?xh:n?Sh:In;return!n&&Ln(l,"iterate",xs),a.forEach((u,d)=>i.call(o,c(u),c(d),s))}};return wn(t,n?{add:Kc("add"),set:Kc("set"),delete:Kc("delete"),clear:Kc("clear")}:{add(i){!e&&!Gr(i)&&!ks(i)&&(i=mt(i));const o=mt(this);return qc(o).has.call(o,i)||(o.add(i),Xi(o,"add",i,i)),this},set(i,o){!e&&!Gr(o)&&!ks(o)&&(o=mt(o));const s=mt(this),{has:a,get:l}=qc(s);let c=a.call(s,i);c||(i=mt(i),c=a.call(s,i));const u=l.call(s,i);return s.set(i,o),c?ko(o,u)&&Xi(s,"set",i,o):Xi(s,"add",i,o),this},delete(i){const o=mt(this),{has:s,get:a}=qc(o);let l=s.call(o,i);l||(i=mt(i),l=s.call(o,i)),a&&a.call(o,i);const c=o.delete(i);return l&&Xi(o,"delete",i,void 0),c},clear(){const i=mt(this),o=i.size!==0,s=i.clear();return o&&Xi(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=MS(i,n,e)}),t}function sm(n,e){const t=CS(n,e);return(r,i,o)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(Et(t,i)&&i in r?t:r,i,o)}const ES={get:sm(!1,!1)},TS={get:sm(!1,!0)},AS={get:sm(!0,!1)};const iv=new WeakMap,ov=new WeakMap,sv=new WeakMap,RS=new WeakMap;function PS(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kS(n){return n.__v_skip||!Object.isExtensible(n)?0:PS(tS(n))}function zs(n){return ks(n)?n:lm(n,!1,xS,ES,iv)}function av(n){return lm(n,!1,wS,TS,ov)}function am(n){return lm(n,!0,SS,AS,sv)}function lm(n,e,t,r,i){if(!Ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=i.get(n);if(o)return o;const s=kS(n);if(s===0)return n;const a=new Proxy(n,s===2?r:t);return i.set(n,a),a}function eo(n){return ks(n)?eo(n.__v_raw):!!(n&&n.__v_isReactive)}function ks(n){return!!(n&&n.__v_isReadonly)}function Gr(n){return!!(n&&n.__v_isShallow)}function cm(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function um(n){return!Et(n,"__v_skip")&&Object.isExtensible(n)&&zb(n,"__v_skip",!0),n}const In=n=>Ht(n)?zs(n):n,Sh=n=>Ht(n)?am(n):n;function qt(n){return n?n.__v_isRef===!0:!1}function nr(n){return lv(n,!1)}function wh(n){return lv(n,!0)}function lv(n,e){return qt(n)?n:new DS(n,e)}class DS{constructor(e,t){this.dep=new om,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:In(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Gr(e)||ks(e);e=r?e:mt(e),ko(e,t)&&(this._rawValue=e,this._value=r?e:In(e),this.dep.trigger())}}function Aa(n){return qt(n)?n.value:n}const LS={get:(n,e,t)=>e==="__v_raw"?n:Aa(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return qt(i)&&!qt(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function cv(n){return eo(n)?n:new Proxy(n,LS)}function IS(n){const e=qe(n)?new Array(n.length):{};for(const t in n)e[t]=uv(n,t);return e}class OS{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return mS(mt(this._object),this._key)}}class BS{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function US(n,e,t){return qt(n)?n:Je(n)?new BS(n):Ht(n)&&arguments.length>1?uv(n,e,t):nr(n)}function uv(n,e,t){const r=n[e];return qt(r)?r:new OS(n,e,t)}class NS{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new om(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ac-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return qb(this,!0),!0}get value(){const e=this.dep.track();return Jb(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function FS(n,e,t=!1){let r,i;return Je(n)?r=n:(r=n.get,i=n.set),new NS(r,i,t)}const Zc={},ld=new WeakMap;let ss;function zS(n,e=!1,t=ss){if(t){let r=ld.get(t);r||ld.set(t,r=[]),r.push(n)}}function HS(n,e,t=Ot){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:a,call:l}=t,c=b=>i?b:Gr(b)||i===!1||i===0?ji(b,1):ji(b);let u,d,f,h,g=!1,m=!1;if(qt(n)?(d=()=>n.value,g=Gr(n)):eo(n)?(d=()=>c(n),g=!0):qe(n)?(m=!0,g=n.some(b=>eo(b)||Gr(b)),d=()=>n.map(b=>{if(qt(b))return b.value;if(eo(b))return c(b);if(Je(b))return l?l(b,2):b()})):Je(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){$o();try{f()}finally{Wo()}}const b=ss;ss=u;try{return l?l(n,3,[h]):n(h)}finally{ss=b}}:d=Ci,e&&i){const b=d,T=i===!0?1/0:i;d=()=>ji(b(),T)}const _=Xb(),p=()=>{u.stop(),_&&_.active&&em(_.effects,u)};if(o&&e){const b=e;e=(...T)=>{b(...T),p()}}let S=m?new Array(n.length).fill(Zc):Zc;const v=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const T=u.run();if(i||g||(m?T.some((R,E)=>ko(R,S[E])):ko(T,S))){f&&f();const R=ss;ss=u;try{const E=[T,S===Zc?void 0:m&&S[0]===Zc?[]:S,h];l?l(e,3,E):e(...E),S=T}finally{ss=R}}}else u.run()};return a&&a(v),u=new jb(d),u.scheduler=s?()=>s(v,!1):v,h=b=>zS(b,!1,u),f=u.onStop=()=>{const b=ld.get(u);if(b){if(l)l(b,4);else for(const T of b)T();ld.delete(u)}},e?r?v(!0):S=u.run():s?s(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ji(n,e=1/0,t){if(e<=0||!Ht(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,qt(n))ji(n.value,e,t);else if(qe(n))for(let r=0;r<n.length;r++)ji(n[r],e,t);else if(Bb(n)||Ta(n))n.forEach(r=>{ji(r,e,t)});else if(Fb(n)){for(const r in n)ji(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&ji(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vc(n,e,t,r){try{return r?n(...r):n()}catch(i){Hd(i,e,t)}}function li(n,e,t,r){if(Je(n)){const i=Vc(n,e,t,r);return i&&Ub(i)&&i.catch(o=>{Hd(o,e,t)}),i}if(qe(n)){const i=[];for(let o=0;o<n.length;o++)i.push(li(n[o],e,t,r));return i}}function Hd(n,e,t,r=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Ot;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(o){$o(),Vc(o,null,10,[n,l,c]),Wo();return}}VS(n,t,i,r,s)}function VS(n,e,t,r=!0,i=!1){if(i)throw n;console.error(n)}const Jn=[];let pi=-1;const Ra=[];let yo=null,fa=0;const dv=Promise.resolve();let cd=null;function Vd(n){const e=cd||dv;return n?e.then(this?n.bind(this):n):e}function GS(n){let e=pi+1,t=Jn.length;for(;e<t;){const r=e+t>>>1,i=Jn[r],o=cc(i);o<n||o===n&&i.flags&2?e=r+1:t=r}return e}function dm(n){if(!(n.flags&1)){const e=cc(n),t=Jn[Jn.length-1];!t||!(n.flags&2)&&e>=cc(t)?Jn.push(n):Jn.splice(GS(e),0,n),n.flags|=1,fv()}}function fv(){cd||(cd=dv.then(pv))}function $S(n){qe(n)?Ra.push(...n):yo&&n.id===-1?yo.splice(fa+1,0,n):n.flags&1||(Ra.push(n),n.flags|=1),fv()}function bg(n,e,t=pi+1){for(;t<Jn.length;t++){const r=Jn[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Jn.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function hv(n){if(Ra.length){const e=[...new Set(Ra)].sort((t,r)=>cc(t)-cc(r));if(Ra.length=0,yo){yo.push(...e);return}for(yo=e,fa=0;fa<yo.length;fa++){const t=yo[fa];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}yo=null,fa=0}}const cc=n=>n.id==null?n.flags&2?-1:1/0:n.id;function pv(n){try{for(pi=0;pi<Jn.length;pi++){const e=Jn[pi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pi<Jn.length;pi++){const e=Jn[pi];e&&(e.flags&=-2)}pi=-1,Jn.length=0,hv(),cd=null,(Jn.length||Ra.length)&&pv()}}let gn=null,mv=null;function ud(n){const e=gn;return gn=n,mv=n&&n.type.__scopeId||null,e}function qi(n,e=gn,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&Dg(-1);const o=ud(e);let s;try{s=n(...i)}finally{ud(o),r._d&&Dg(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function fm(n,e){if(gn===null)return n;const t=jd(gn),r=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[o,s,a,l=Ot]=e[i];o&&(Je(o)&&(o={mounted:o,updated:o}),o.deep&&ji(s),r.push({dir:o,instance:t,value:s,oldValue:void 0,arg:a,modifiers:l}))}return n}function Yo(n,e,t,r){const i=n.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&($o(),li(l,t,8,[n.el,a,n,e]),Wo())}}const gv=Symbol("_vte"),_v=n=>n.__isTeleport,Nl=n=>n&&(n.disabled||n.disabled===""),vg=n=>n&&(n.defer||n.defer===""),yg=n=>typeof SVGElement<"u"&&n instanceof SVGElement,xg=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Mh=(n,e)=>{const t=n&&n.to;return Xt(t)?e?e(t):null:t},bv={name:"Teleport",__isTeleport:!0,process(n,e,t,r,i,o,s,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:g,createText:m,createComment:_}}=c,p=Nl(e.props);let{shapeFlag:S,children:v,dynamicChildren:b}=e;if(n==null){const T=e.el=m(""),R=e.anchor=m("");h(T,t,r),h(R,t,r);const E=(y,x)=>{S&16&&(i&&i.isCE&&(i.ce._teleportTarget=y),u(v,y,x,i,o,s,a,l))},D=()=>{const y=e.target=Mh(e.props,g),x=vv(y,e,m,h);y&&(s!=="svg"&&yg(y)?s="svg":s!=="mathml"&&xg(y)&&(s="mathml"),p||(E(y,x),zu(e,!1)))};p&&(E(t,R),zu(e,!0)),vg(e.props)?Xn(()=>{D(),e.el.__isMounted=!0},o):D()}else{if(vg(e.props)&&!n.el.__isMounted){Xn(()=>{bv.process(n,e,t,r,i,o,s,a,l,c),delete n.el.__isMounted},o);return}e.el=n.el,e.targetStart=n.targetStart;const T=e.anchor=n.anchor,R=e.target=n.target,E=e.targetAnchor=n.targetAnchor,D=Nl(n.props),y=D?t:R,x=D?T:E;if(s==="svg"||yg(R)?s="svg":(s==="mathml"||xg(R))&&(s="mathml"),b?(f(n.dynamicChildren,b,y,i,o,s,a),bm(n,e,!0)):l||d(n,e,y,x,i,o,s,a,!1),p)D?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Jc(e,t,T,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const I=e.target=Mh(e.props,g);I&&Jc(e,I,null,c,0)}else D&&Jc(e,R,E,c,1);zu(e,p)}},remove(n,e,t,{um:r,o:{remove:i}},o){const{shapeFlag:s,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=n;if(d&&(i(c),i(u)),o&&i(l),s&16){const h=o||!Nl(f);for(let g=0;g<a.length;g++){const m=a[g];r(m,e,t,h,!!m.dynamicChildren)}}},move:Jc,hydrate:WS};function Jc(n,e,t,{o:{insert:r},m:i},o=2){o===0&&r(n.targetAnchor,e,t);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=n,d=o===2;if(d&&r(s,e,t),(!d||Nl(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,t,2);d&&r(a,e,t)}function WS(n,e,t,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:c,createText:u}},d){const f=e.target=Mh(e.props,l);if(f){const h=Nl(e.props),g=f._lpa||f.firstChild;if(e.shapeFlag&16)if(h)e.anchor=d(s(n),e,a(n),t,r,i,o),e.targetStart=g,e.targetAnchor=g&&s(g);else{e.anchor=s(n);let m=g;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,f._lpa=e.targetAnchor&&s(e.targetAnchor);break}}m=s(m)}e.targetAnchor||vv(f,e,u,c),d(g&&s(g),e,f,t,r,i,o)}zu(e,h)}return e.anchor&&s(e.anchor)}const XS=bv;function zu(n,e){const t=n.ctx;if(t&&t.ut){let r,i;for(e?(r=n.el,i=n.anchor):(r=n.targetStart,i=n.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function vv(n,e,t,r){const i=e.targetStart=t(""),o=e.targetAnchor=t("");return i[gv]=o,n&&(r(i,n),r(o,n)),o}const xo=Symbol("_leaveCb"),Qc=Symbol("_enterCb");function jS(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gc(()=>{n.isMounted=!0}),Av(()=>{n.isUnmounting=!0}),n}const Br=[Function,Array],yv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Br,onEnter:Br,onAfterEnter:Br,onEnterCancelled:Br,onBeforeLeave:Br,onLeave:Br,onAfterLeave:Br,onLeaveCancelled:Br,onBeforeAppear:Br,onAppear:Br,onAfterAppear:Br,onAppearCancelled:Br},xv=n=>{const e=n.subTree;return e.component?xv(e.component):e},YS={name:"BaseTransition",props:yv,setup(n,{slots:e}){const t=Kv(),r=jS();return()=>{const i=e.default&&Mv(e.default(),!0);if(!i||!i.length)return;const o=Sv(i),s=mt(n),{mode:a}=s;if(r.isLeaving)return mf(o);const l=Sg(o);if(!l)return mf(o);let c=Ch(l,s,r,t,d=>c=d);l.type!==Qn&&uc(l,c);let u=t.subTree&&Sg(t.subTree);if(u&&u.type!==Qn&&!fs(l,u)&&xv(t).type!==Qn){let d=Ch(u,s,r,t);if(uc(u,d),a==="out-in"&&l.type!==Qn)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},mf(o);a==="in-out"&&l.type!==Qn?d.delayLeave=(f,h,g)=>{const m=wv(r,u);m[String(u.key)]=u,f[xo]=()=>{h(),f[xo]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function Sv(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Qn){e=t;break}}return e}const qS=YS;function wv(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Ch(n,e,t,r,i){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:_,onAppear:p,onAfterAppear:S,onAppearCancelled:v}=e,b=String(n.key),T=wv(t,n),R=(y,x)=>{y&&li(y,r,9,x)},E=(y,x)=>{const I=x[1];R(y,x),qe(y)?y.every(O=>O.length<=1)&&I():y.length<=1&&I()},D={mode:s,persisted:a,beforeEnter(y){let x=l;if(!t.isMounted)if(o)x=_||l;else return;y[xo]&&y[xo](!0);const I=T[b];I&&fs(n,I)&&I.el[xo]&&I.el[xo](),R(x,[y])},enter(y){let x=c,I=u,O=d;if(!t.isMounted)if(o)x=p||c,I=S||u,O=v||d;else return;let F=!1;const X=y[Qc]=J=>{F||(F=!0,J?R(O,[y]):R(I,[y]),D.delayedLeave&&D.delayedLeave(),y[Qc]=void 0)};x?E(x,[y,X]):X()},leave(y,x){const I=String(n.key);if(y[Qc]&&y[Qc](!0),t.isUnmounting)return x();R(f,[y]);let O=!1;const F=y[xo]=X=>{O||(O=!0,x(),X?R(m,[y]):R(g,[y]),y[xo]=void 0,T[I]===n&&delete T[I])};T[I]=n,h?E(h,[y,F]):F()},clone(y){const x=Ch(y,e,t,r,i);return i&&i(x),x}};return D}function mf(n){if(Gd(n))return n=No(n),n.children=null,n}function Sg(n){if(!Gd(n))return _v(n.type)&&n.children?Sv(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Je(t.default))return t.default()}}function uc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,uc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Mv(n,e=!1,t){let r=[],i=0;for(let o=0;o<n.length;o++){let s=n[o];const a=t==null?s.key:String(t)+String(s.key!=null?s.key:o);s.type===nn?(s.patchFlag&128&&i++,r=r.concat(Mv(s.children,e,a))):(e||s.type!==Qn)&&r.push(a!=null?No(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Cv(n,e){return Je(n)?wn({name:n.name},e,{setup:n}):n}function Ev(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function dd(n,e,t,r,i=!1){if(qe(n)){n.forEach((g,m)=>dd(g,e&&(qe(e)?e[m]:e),t,r,i));return}if(Pa(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&dd(n,e,t,r.component.subTree);return}const o=r.shapeFlag&4?jd(r.component):r.el,s=i?null:o,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ot?a.refs={}:a.refs,d=a.setupState,f=mt(d),h=d===Ot?()=>!1:g=>Et(f,g);if(c!=null&&c!==l&&(Xt(c)?(u[c]=null,h(c)&&(d[c]=null)):qt(c)&&(c.value=null)),Je(l))Vc(l,a,12,[s,u]);else{const g=Xt(l),m=qt(l);if(g||m){const _=()=>{if(n.f){const p=g?h(l)?d[l]:u[l]:l.value;i?qe(p)&&em(p,o):qe(p)?p.includes(o)||p.push(o):g?(u[l]=[o],h(l)&&(d[l]=u[l])):(l.value=[o],n.k&&(u[n.k]=l.value))}else g?(u[l]=s,h(l)&&(d[l]=s)):m&&(l.value=s,n.k&&(u[n.k]=s))};s?(_.id=-1,Xn(_,t)):_()}}}Fd().requestIdleCallback;Fd().cancelIdleCallback;const Pa=n=>!!n.type.__asyncLoader,Gd=n=>n.type.__isKeepAlive;function KS(n,e){Tv(n,"a",e)}function ZS(n,e){Tv(n,"da",e)}function Tv(n,e,t=Sn){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if($d(e,r,t),t){let i=t.parent;for(;i&&i.parent;)Gd(i.parent.vnode)&&JS(r,e,t,i),i=i.parent}}function JS(n,e,t,r){const i=$d(e,n,r,!0);hm(()=>{em(r[e],i)},t)}function $d(n,e,t=Sn,r=!1){if(t){const i=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...s)=>{$o();const a=$c(t),l=li(e,t,n,s);return a(),Wo(),l});return r?i.unshift(o):i.push(o),o}}const ao=n=>(e,t=Sn)=>{(!hc||n==="sp")&&$d(n,(...r)=>e(...r),t)},QS=ao("bm"),Gc=ao("m"),ew=ao("bu"),tw=ao("u"),Av=ao("bum"),hm=ao("um"),nw=ao("sp"),rw=ao("rtg"),iw=ao("rtc");function ow(n,e=Sn){$d("ec",n,e)}const pm="components",sw="directives";function ei(n,e){return gm(pm,n,!0,e)||n}const Rv=Symbol.for("v-ndc");function Va(n){return Xt(n)?gm(pm,n,!1)||n:n||Rv}function mm(n){return gm(sw,n)}function gm(n,e,t=!0,r=!1){const i=gn||Sn;if(i){const o=i.type;if(n===pm){const a=Xw(o,!1);if(a&&(a===e||a===Wr(e)||a===Nd(Wr(e))))return o}const s=wg(i[n]||o[n],e)||wg(i.appContext[n],e);return!s&&r?o:s}}function wg(n,e){return n&&(n[e]||n[Wr(e)]||n[Nd(Wr(e))])}function Fl(n,e,t,r){let i;const o=t,s=qe(n);if(s||Xt(n)){const a=s&&eo(n);let l=!1;a&&(l=!Gr(n),n=zd(n)),i=new Array(n.length);for(let c=0,u=n.length;c<u;c++)i[c]=e(l?In(n[c]):n[c],c,void 0,o)}else if(typeof n=="number"){i=new Array(n);for(let a=0;a<n;a++)i[a]=e(a+1,a,void 0,o)}else if(Ht(n))if(n[Symbol.iterator])i=Array.from(n,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(n);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(n[u],u,l,o)}}else i=[];return i}function Jt(n,e,t={},r,i){if(gn.ce||gn.parent&&Pa(gn.parent)&&gn.parent.ce)return e!=="default"&&(t.name=e),Fe(),un(nn,null,[zt("slot",t,r&&r())],64);let o=n[e];o&&o._c&&(o._d=!1),Fe();const s=o&&Pv(o(t)),a=t.key||s&&s.key,l=un(nn,{key:(a&&!so(a)?a:`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function Pv(n){return n.some(e=>fc(e)?!(e.type===Qn||e.type===nn&&!Pv(e.children)):!0)?n:null}const Eh=n=>n?Zv(n)?jd(n):Eh(n.parent):null,zl=wn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Eh(n.parent),$root:n=>Eh(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Dv(n),$forceUpdate:n=>n.f||(n.f=()=>{dm(n.update)}),$nextTick:n=>n.n||(n.n=Vd.bind(n.proxy)),$watch:n=>Aw.bind(n)}),gf=(n,e)=>n!==Ot&&!n.__isScriptSetup&&Et(n,e),aw={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=s[e];if(h!==void 0)switch(h){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return o[e]}else{if(gf(r,e))return s[e]=1,r[e];if(i!==Ot&&Et(i,e))return s[e]=2,i[e];if((c=n.propsOptions[0])&&Et(c,e))return s[e]=3,o[e];if(t!==Ot&&Et(t,e))return s[e]=4,t[e];Th&&(s[e]=0)}}const u=zl[e];let d,f;if(u)return e==="$attrs"&&Ln(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==Ot&&Et(t,e))return s[e]=4,t[e];if(f=l.config.globalProperties,Et(f,e))return f[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:o}=n;return gf(i,e)?(i[e]=t,!0):r!==Ot&&Et(r,e)?(r[e]=t,!0):Et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!t[s]||n!==Ot&&Et(n,s)||gf(e,s)||(a=o[0])&&Et(a,s)||Et(r,s)||Et(zl,s)||Et(i.config.globalProperties,s)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Mg(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Th=!0;function lw(n){const e=Dv(n),t=n.proxy,r=n.ctx;Th=!1,e.beforeCreate&&Cg(e.beforeCreate,n,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:m,deactivated:_,beforeDestroy:p,beforeUnmount:S,destroyed:v,unmounted:b,render:T,renderTracked:R,renderTriggered:E,errorCaptured:D,serverPrefetch:y,expose:x,inheritAttrs:I,components:O,directives:F,filters:X}=e;if(c&&cw(c,r,null),s)for(const V in s){const H=s[V];Je(H)&&(r[V]=H.bind(t))}if(i){const V=i.call(t,t);Ht(V)&&(n.data=zs(V))}if(Th=!0,o)for(const V in o){const H=o[V],de=Je(H)?H.bind(t,t):Je(H.get)?H.get.bind(t,t):Ci,B=!Je(H)&&Je(H.set)?H.set.bind(t):Ci,me=lr({get:de,set:B});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>me.value,set:Ce=>me.value=Ce})}if(a)for(const V in a)kv(a[V],r,t,V);if(l){const V=Je(l)?l.call(t):l;Reflect.ownKeys(V).forEach(H=>{Hu(H,V[H])})}u&&Cg(u,n,"c");function W(V,H){qe(H)?H.forEach(de=>V(de.bind(t))):H&&V(H.bind(t))}if(W(QS,d),W(Gc,f),W(ew,h),W(tw,g),W(KS,m),W(ZS,_),W(ow,D),W(iw,R),W(rw,E),W(Av,S),W(hm,b),W(nw,y),qe(x))if(x.length){const V=n.exposed||(n.exposed={});x.forEach(H=>{Object.defineProperty(V,H,{get:()=>t[H],set:de=>t[H]=de})})}else n.exposed||(n.exposed={});T&&n.render===Ci&&(n.render=T),I!=null&&(n.inheritAttrs=I),O&&(n.components=O),F&&(n.directives=F),y&&Ev(n)}function cw(n,e,t=Ci){qe(n)&&(n=Ah(n));for(const r in n){const i=n[r];let o;Ht(i)?"default"in i?o=Ei(i.from||r,i.default,!0):o=Ei(i.from||r):o=Ei(i),qt(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[r]=o}}function Cg(n,e,t){li(qe(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function kv(n,e,t,r){let i=r.includes(".")?Wv(t,r):()=>t[r];if(Xt(n)){const o=e[n];Je(o)&&xi(i,o)}else if(Je(n))xi(i,n.bind(t));else if(Ht(n))if(qe(n))n.forEach(o=>kv(o,e,t,r));else{const o=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(o)&&xi(i,o,n)}}function Dv(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=n.appContext,a=o.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>fd(l,c,s,!0)),fd(l,e,s)),Ht(e)&&o.set(e,l),l}function fd(n,e,t,r=!1){const{mixins:i,extends:o}=e;o&&fd(n,o,t,!0),i&&i.forEach(s=>fd(n,s,t,!0));for(const s in e)if(!(r&&s==="expose")){const a=uw[s]||t&&t[s];n[s]=a?a(n[s],e[s]):e[s]}return n}const uw={data:Eg,props:Tg,emits:Tg,methods:Cl,computed:Cl,beforeCreate:Vn,created:Vn,beforeMount:Vn,mounted:Vn,beforeUpdate:Vn,updated:Vn,beforeDestroy:Vn,beforeUnmount:Vn,destroyed:Vn,unmounted:Vn,activated:Vn,deactivated:Vn,errorCaptured:Vn,serverPrefetch:Vn,components:Cl,directives:Cl,watch:fw,provide:Eg,inject:dw};function Eg(n,e){return e?n?function(){return wn(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function dw(n,e){return Cl(Ah(n),Ah(e))}function Ah(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vn(n,e){return n?[...new Set([].concat(n,e))]:e}function Cl(n,e){return n?wn(Object.create(null),n,e):e}function Tg(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:wn(Object.create(null),Mg(n),Mg(e??{})):e}function fw(n,e){if(!n)return e;if(!e)return n;const t=wn(Object.create(null),n);for(const r in e)t[r]=Vn(n[r],e[r]);return t}function Lv(){return{app:null,config:{isNativeTag:Qx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hw=0;function pw(n,e){return function(r,i=null){Je(r)||(r=wn({},r)),i!=null&&!Ht(i)&&(i=null);const o=Lv(),s=new WeakSet,a=[];let l=!1;const c=o.app={_uid:hw++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Yw,get config(){return o.config},set config(u){},use(u,...d){return s.has(u)||(u&&Je(u.install)?(s.add(u),u.install(c,...d)):Je(u)&&(s.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||zt(r,i);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,jd(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(li(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c},runWithContext(u){const d=Ss;Ss=c;try{return u()}finally{Ss=d}}};return c}}let Ss=null;function Hu(n,e){if(Sn){let t=Sn.provides;const r=Sn.parent&&Sn.parent.provides;r===t&&(t=Sn.provides=Object.create(r)),t[n]=e}}function Ei(n,e,t=!1){const r=Sn||gn;if(r||Ss){const i=Ss?Ss._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&Je(e)?e.call(r&&r.proxy):e}}function mw(){return!!(Sn||gn||Ss)}const Iv={},Ov=()=>Object.create(Iv),Bv=n=>Object.getPrototypeOf(n)===Iv;function gw(n,e,t,r=!1){const i={},o=Ov();n.propsDefaults=Object.create(null),Uv(n,e,i,o);for(const s in n.propsOptions[0])s in i||(i[s]=void 0);t?n.props=r?i:av(i):n.type.props?n.props=i:n.props=o,n.attrs=o}function _w(n,e,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=n,a=mt(i),[l]=n.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Wd(n.emitsOptions,f))continue;const h=e[f];if(l)if(Et(o,f))h!==o[f]&&(o[f]=h,c=!0);else{const g=Wr(f);i[g]=Rh(l,a,g,h,n,!1)}else h!==o[f]&&(o[f]=h,c=!0)}}}else{Uv(n,e,i,o)&&(c=!0);let u;for(const d in a)(!e||!Et(e,d)&&((u=Fs(d))===d||!Et(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(i[d]=Rh(l,a,d,void 0,n,!0)):delete i[d]);if(o!==a)for(const d in o)(!e||!Et(e,d))&&(delete o[d],c=!0)}c&&Xi(n.attrs,"set","")}function Uv(n,e,t,r){const[i,o]=n.propsOptions;let s=!1,a;if(e)for(let l in e){if(Ol(l))continue;const c=e[l];let u;i&&Et(i,u=Wr(l))?!o||!o.includes(u)?t[u]=c:(a||(a={}))[u]=c:Wd(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=mt(t),c=a||Ot;for(let u=0;u<o.length;u++){const d=o[u];t[d]=Rh(i,l,d,c[d],n,!Et(c,d))}}return s}function Rh(n,e,t,r,i,o){const s=n[t];if(s!=null){const a=Et(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&Je(l)){const{propsDefaults:c}=i;if(t in c)r=c[t];else{const u=$c(i);r=c[t]=l.call(null,e),u()}}else r=l;i.ce&&i.ce._setProp(t,r)}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===Fs(t))&&(r=!0))}return r}const bw=new WeakMap;function Nv(n,e,t=!1){const r=t?bw:e.propsCache,i=r.get(n);if(i)return i;const o=n.props,s={},a=[];let l=!1;if(!Je(n)){const u=d=>{l=!0;const[f,h]=Nv(d,e,!0);wn(s,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!l)return Ht(n)&&r.set(n,Ea),Ea;if(qe(o))for(let u=0;u<o.length;u++){const d=Wr(o[u]);Ag(d)&&(s[d]=Ot)}else if(o)for(const u in o){const d=Wr(u);if(Ag(d)){const f=o[u],h=s[d]=qe(f)||Je(f)?{type:f}:wn({},f),g=h.type;let m=!1,_=!0;if(qe(g))for(let p=0;p<g.length;++p){const S=g[p],v=Je(S)&&S.name;if(v==="Boolean"){m=!0;break}else v==="String"&&(_=!1)}else m=Je(g)&&g.name==="Boolean";h[0]=m,h[1]=_,(m||Et(h,"default"))&&a.push(d)}}const c=[s,a];return Ht(n)&&r.set(n,c),c}function Ag(n){return n[0]!=="$"&&!Ol(n)}const Fv=n=>n[0]==="_"||n==="$stable",_m=n=>qe(n)?n.map(_i):[_i(n)],vw=(n,e,t)=>{if(e._n)return e;const r=qi((...i)=>_m(e(...i)),t);return r._c=!1,r},zv=(n,e,t)=>{const r=n._ctx;for(const i in n){if(Fv(i))continue;const o=n[i];if(Je(o))e[i]=vw(i,o,r);else if(o!=null){const s=_m(o);e[i]=()=>s}}},Hv=(n,e)=>{const t=_m(e);n.slots.default=()=>t},Vv=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},yw=(n,e,t)=>{const r=n.slots=Ov();if(n.vnode.shapeFlag&32){const i=e._;i?(Vv(r,e,t),t&&zb(r,"_",i,!0)):zv(e,r)}else e&&Hv(n,e)},xw=(n,e,t)=>{const{vnode:r,slots:i}=n;let o=!0,s=Ot;if(r.shapeFlag&32){const a=e._;a?t&&a===1?o=!1:Vv(i,e,t):(o=!e.$stable,zv(e,i)),s=e}else e&&(Hv(n,e),s={default:1});if(o)for(const a in i)!Fv(a)&&s[a]==null&&delete i[a]},Xn=Ow;function Sw(n){return ww(n)}function ww(n,e){const t=Fd();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Ci,insertStaticContent:g}=n,m=(P,k,M,ne=null,Z=null,L=null,oe=void 0,ce=null,se=!!k.dynamicChildren)=>{if(P===k)return;P&&!fs(P,k)&&(ne=z(P),Ce(P,Z,L,!0),P=null),k.patchFlag===-2&&(se=!1,k.dynamicChildren=null);const{type:C,ref:w,shapeFlag:U}=k;switch(C){case Xd:_(P,k,M,ne);break;case Qn:p(P,k,M,ne);break;case Vu:P==null&&S(k,M,ne,oe);break;case nn:O(P,k,M,ne,Z,L,oe,ce,se);break;default:U&1?T(P,k,M,ne,Z,L,oe,ce,se):U&6?F(P,k,M,ne,Z,L,oe,ce,se):(U&64||U&128)&&C.process(P,k,M,ne,Z,L,oe,ce,se,te)}w!=null&&Z&&dd(w,P&&P.ref,L,k||P,!k)},_=(P,k,M,ne)=>{if(P==null)r(k.el=a(k.children),M,ne);else{const Z=k.el=P.el;k.children!==P.children&&c(Z,k.children)}},p=(P,k,M,ne)=>{P==null?r(k.el=l(k.children||""),M,ne):k.el=P.el},S=(P,k,M,ne)=>{[P.el,P.anchor]=g(P.children,k,M,ne,P.el,P.anchor)},v=({el:P,anchor:k},M,ne)=>{let Z;for(;P&&P!==k;)Z=f(P),r(P,M,ne),P=Z;r(k,M,ne)},b=({el:P,anchor:k})=>{let M;for(;P&&P!==k;)M=f(P),i(P),P=M;i(k)},T=(P,k,M,ne,Z,L,oe,ce,se)=>{k.type==="svg"?oe="svg":k.type==="math"&&(oe="mathml"),P==null?R(k,M,ne,Z,L,oe,ce,se):y(P,k,Z,L,oe,ce,se)},R=(P,k,M,ne,Z,L,oe,ce)=>{let se,C;const{props:w,shapeFlag:U,transition:Y,dirs:q}=P;if(se=P.el=s(P.type,L,w&&w.is,w),U&8?u(se,P.children):U&16&&D(P.children,se,null,ne,Z,_f(P,L),oe,ce),q&&Yo(P,null,ne,"created"),E(se,P,P.scopeId,oe,ne),w){for(const pe in w)pe!=="value"&&!Ol(pe)&&o(se,pe,null,w[pe],L,ne);"value"in w&&o(se,"value",null,w.value,L),(C=w.onVnodeBeforeMount)&&di(C,ne,P)}q&&Yo(P,null,ne,"beforeMount");const ee=Mw(Z,Y);ee&&Y.beforeEnter(se),r(se,k,M),((C=w&&w.onVnodeMounted)||ee||q)&&Xn(()=>{C&&di(C,ne,P),ee&&Y.enter(se),q&&Yo(P,null,ne,"mounted")},Z)},E=(P,k,M,ne,Z)=>{if(M&&h(P,M),ne)for(let L=0;L<ne.length;L++)h(P,ne[L]);if(Z){let L=Z.subTree;if(k===L||jv(L.type)&&(L.ssContent===k||L.ssFallback===k)){const oe=Z.vnode;E(P,oe,oe.scopeId,oe.slotScopeIds,Z.parent)}}},D=(P,k,M,ne,Z,L,oe,ce,se=0)=>{for(let C=se;C<P.length;C++){const w=P[C]=ce?So(P[C]):_i(P[C]);m(null,w,k,M,ne,Z,L,oe,ce)}},y=(P,k,M,ne,Z,L,oe)=>{const ce=k.el=P.el;let{patchFlag:se,dynamicChildren:C,dirs:w}=k;se|=P.patchFlag&16;const U=P.props||Ot,Y=k.props||Ot;let q;if(M&&qo(M,!1),(q=Y.onVnodeBeforeUpdate)&&di(q,M,k,P),w&&Yo(k,P,M,"beforeUpdate"),M&&qo(M,!0),(U.innerHTML&&Y.innerHTML==null||U.textContent&&Y.textContent==null)&&u(ce,""),C?x(P.dynamicChildren,C,ce,M,ne,_f(k,Z),L):oe||H(P,k,ce,null,M,ne,_f(k,Z),L,!1),se>0){if(se&16)I(ce,U,Y,M,Z);else if(se&2&&U.class!==Y.class&&o(ce,"class",null,Y.class,Z),se&4&&o(ce,"style",U.style,Y.style,Z),se&8){const ee=k.dynamicProps;for(let pe=0;pe<ee.length;pe++){const fe=ee[pe],xe=U[fe],Ue=Y[fe];(Ue!==xe||fe==="value")&&o(ce,fe,xe,Ue,Z,M)}}se&1&&P.children!==k.children&&u(ce,k.children)}else!oe&&C==null&&I(ce,U,Y,M,Z);((q=Y.onVnodeUpdated)||w)&&Xn(()=>{q&&di(q,M,k,P),w&&Yo(k,P,M,"updated")},ne)},x=(P,k,M,ne,Z,L,oe)=>{for(let ce=0;ce<k.length;ce++){const se=P[ce],C=k[ce],w=se.el&&(se.type===nn||!fs(se,C)||se.shapeFlag&70)?d(se.el):M;m(se,C,w,null,ne,Z,L,oe,!0)}},I=(P,k,M,ne,Z)=>{if(k!==M){if(k!==Ot)for(const L in k)!Ol(L)&&!(L in M)&&o(P,L,k[L],null,Z,ne);for(const L in M){if(Ol(L))continue;const oe=M[L],ce=k[L];oe!==ce&&L!=="value"&&o(P,L,ce,oe,Z,ne)}"value"in M&&o(P,"value",k.value,M.value,Z)}},O=(P,k,M,ne,Z,L,oe,ce,se)=>{const C=k.el=P?P.el:a(""),w=k.anchor=P?P.anchor:a("");let{patchFlag:U,dynamicChildren:Y,slotScopeIds:q}=k;q&&(ce=ce?ce.concat(q):q),P==null?(r(C,M,ne),r(w,M,ne),D(k.children||[],M,w,Z,L,oe,ce,se)):U>0&&U&64&&Y&&P.dynamicChildren?(x(P.dynamicChildren,Y,M,Z,L,oe,ce),(k.key!=null||Z&&k===Z.subTree)&&bm(P,k,!0)):H(P,k,M,w,Z,L,oe,ce,se)},F=(P,k,M,ne,Z,L,oe,ce,se)=>{k.slotScopeIds=ce,P==null?k.shapeFlag&512?Z.ctx.activate(k,M,ne,oe,se):X(k,M,ne,Z,L,oe,se):J(P,k,se)},X=(P,k,M,ne,Z,L,oe)=>{const ce=P.component=Hw(P,ne,Z);if(Gd(P)&&(ce.ctx.renderer=te),Vw(ce,!1,oe),ce.asyncDep){if(Z&&Z.registerDep(ce,W,oe),!P.el){const se=ce.subTree=zt(Qn);p(null,se,k,M)}}else W(ce,P,k,M,Z,L,oe)},J=(P,k,M)=>{const ne=k.component=P.component;if(Lw(P,k,M))if(ne.asyncDep&&!ne.asyncResolved){V(ne,k,M);return}else ne.next=k,ne.update();else k.el=P.el,ne.vnode=k},W=(P,k,M,ne,Z,L,oe)=>{const ce=()=>{if(P.isMounted){let{next:U,bu:Y,u:q,parent:ee,vnode:pe}=P;{const ye=Gv(P);if(ye){U&&(U.el=pe.el,V(P,U,oe)),ye.asyncDep.then(()=>{P.isUnmounted||ce()});return}}let fe=U,xe;qo(P,!1),U?(U.el=pe.el,V(P,U,oe)):U=pe,Y&&uf(Y),(xe=U.props&&U.props.onVnodeBeforeUpdate)&&di(xe,ee,U,pe),qo(P,!0);const Ue=Pg(P),ge=P.subTree;P.subTree=Ue,m(ge,Ue,d(ge.el),z(ge),P,Z,L),U.el=Ue.el,fe===null&&Iw(P,Ue.el),q&&Xn(q,Z),(xe=U.props&&U.props.onVnodeUpdated)&&Xn(()=>di(xe,ee,U,pe),Z)}else{let U;const{el:Y,props:q}=k,{bm:ee,m:pe,parent:fe,root:xe,type:Ue}=P,ge=Pa(k);qo(P,!1),ee&&uf(ee),!ge&&(U=q&&q.onVnodeBeforeMount)&&di(U,fe,k),qo(P,!0);{xe.ce&&xe.ce._injectChildStyle(Ue);const ye=P.subTree=Pg(P);m(null,ye,M,ne,P,Z,L),k.el=ye.el}if(pe&&Xn(pe,Z),!ge&&(U=q&&q.onVnodeMounted)){const ye=k;Xn(()=>di(U,fe,ye),Z)}(k.shapeFlag&256||fe&&Pa(fe.vnode)&&fe.vnode.shapeFlag&256)&&P.a&&Xn(P.a,Z),P.isMounted=!0,k=M=ne=null}};P.scope.on();const se=P.effect=new jb(ce);P.scope.off();const C=P.update=se.run.bind(se),w=P.job=se.runIfDirty.bind(se);w.i=P,w.id=P.uid,se.scheduler=()=>dm(w),qo(P,!0),C()},V=(P,k,M)=>{k.component=P;const ne=P.vnode.props;P.vnode=k,P.next=null,_w(P,k.props,ne,M),xw(P,k.children,M),$o(),bg(P),Wo()},H=(P,k,M,ne,Z,L,oe,ce,se=!1)=>{const C=P&&P.children,w=P?P.shapeFlag:0,U=k.children,{patchFlag:Y,shapeFlag:q}=k;if(Y>0){if(Y&128){B(C,U,M,ne,Z,L,oe,ce,se);return}else if(Y&256){de(C,U,M,ne,Z,L,oe,ce,se);return}}q&8?(w&16&&ve(C,Z,L),U!==C&&u(M,U)):w&16?q&16?B(C,U,M,ne,Z,L,oe,ce,se):ve(C,Z,L,!0):(w&8&&u(M,""),q&16&&D(U,M,ne,Z,L,oe,ce,se))},de=(P,k,M,ne,Z,L,oe,ce,se)=>{P=P||Ea,k=k||Ea;const C=P.length,w=k.length,U=Math.min(C,w);let Y;for(Y=0;Y<U;Y++){const q=k[Y]=se?So(k[Y]):_i(k[Y]);m(P[Y],q,M,null,Z,L,oe,ce,se)}C>w?ve(P,Z,L,!0,!1,U):D(k,M,ne,Z,L,oe,ce,se,U)},B=(P,k,M,ne,Z,L,oe,ce,se)=>{let C=0;const w=k.length;let U=P.length-1,Y=w-1;for(;C<=U&&C<=Y;){const q=P[C],ee=k[C]=se?So(k[C]):_i(k[C]);if(fs(q,ee))m(q,ee,M,null,Z,L,oe,ce,se);else break;C++}for(;C<=U&&C<=Y;){const q=P[U],ee=k[Y]=se?So(k[Y]):_i(k[Y]);if(fs(q,ee))m(q,ee,M,null,Z,L,oe,ce,se);else break;U--,Y--}if(C>U){if(C<=Y){const q=Y+1,ee=q<w?k[q].el:ne;for(;C<=Y;)m(null,k[C]=se?So(k[C]):_i(k[C]),M,ee,Z,L,oe,ce,se),C++}}else if(C>Y)for(;C<=U;)Ce(P[C],Z,L,!0),C++;else{const q=C,ee=C,pe=new Map;for(C=ee;C<=Y;C++){const Se=k[C]=se?So(k[C]):_i(k[C]);Se.key!=null&&pe.set(Se.key,C)}let fe,xe=0;const Ue=Y-ee+1;let ge=!1,ye=0;const Oe=new Array(Ue);for(C=0;C<Ue;C++)Oe[C]=0;for(C=q;C<=U;C++){const Se=P[C];if(xe>=Ue){Ce(Se,Z,L,!0);continue}let $e;if(Se.key!=null)$e=pe.get(Se.key);else for(fe=ee;fe<=Y;fe++)if(Oe[fe-ee]===0&&fs(Se,k[fe])){$e=fe;break}$e===void 0?Ce(Se,Z,L,!0):(Oe[$e-ee]=C+1,$e>=ye?ye=$e:ge=!0,m(Se,k[$e],M,null,Z,L,oe,ce,se),xe++)}const Ne=ge?Cw(Oe):Ea;for(fe=Ne.length-1,C=Ue-1;C>=0;C--){const Se=ee+C,$e=k[Se],We=Se+1<w?k[Se+1].el:ne;Oe[C]===0?m(null,$e,M,We,Z,L,oe,ce,se):ge&&(fe<0||C!==Ne[fe]?me($e,M,We,2):fe--)}}},me=(P,k,M,ne,Z=null)=>{const{el:L,type:oe,transition:ce,children:se,shapeFlag:C}=P;if(C&6){me(P.component.subTree,k,M,ne);return}if(C&128){P.suspense.move(k,M,ne);return}if(C&64){oe.move(P,k,M,te);return}if(oe===nn){r(L,k,M);for(let U=0;U<se.length;U++)me(se[U],k,M,ne);r(P.anchor,k,M);return}if(oe===Vu){v(P,k,M);return}if(ne!==2&&C&1&&ce)if(ne===0)ce.beforeEnter(L),r(L,k,M),Xn(()=>ce.enter(L),Z);else{const{leave:U,delayLeave:Y,afterLeave:q}=ce,ee=()=>r(L,k,M),pe=()=>{U(L,()=>{ee(),q&&q()})};Y?Y(L,ee,pe):pe()}else r(L,k,M)},Ce=(P,k,M,ne=!1,Z=!1)=>{const{type:L,props:oe,ref:ce,children:se,dynamicChildren:C,shapeFlag:w,patchFlag:U,dirs:Y,cacheIndex:q}=P;if(U===-2&&(Z=!1),ce!=null&&dd(ce,null,M,P,!0),q!=null&&(k.renderCache[q]=void 0),w&256){k.ctx.deactivate(P);return}const ee=w&1&&Y,pe=!Pa(P);let fe;if(pe&&(fe=oe&&oe.onVnodeBeforeUnmount)&&di(fe,k,P),w&6)he(P.component,M,ne);else{if(w&128){P.suspense.unmount(M,ne);return}ee&&Yo(P,null,k,"beforeUnmount"),w&64?P.type.remove(P,k,M,te,ne):C&&!C.hasOnce&&(L!==nn||U>0&&U&64)?ve(C,k,M,!1,!0):(L===nn&&U&384||!Z&&w&16)&&ve(se,k,M),ne&&Ge(P)}(pe&&(fe=oe&&oe.onVnodeUnmounted)||ee)&&Xn(()=>{fe&&di(fe,k,P),ee&&Yo(P,null,k,"unmounted")},M)},Ge=P=>{const{type:k,el:M,anchor:ne,transition:Z}=P;if(k===nn){re(M,ne);return}if(k===Vu){b(P);return}const L=()=>{i(M),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(P.shapeFlag&1&&Z&&!Z.persisted){const{leave:oe,delayLeave:ce}=Z,se=()=>oe(M,L);ce?ce(P.el,L,se):se()}else L()},re=(P,k)=>{let M;for(;P!==k;)M=f(P),i(P),P=M;i(k)},he=(P,k,M)=>{const{bum:ne,scope:Z,job:L,subTree:oe,um:ce,m:se,a:C}=P;Rg(se),Rg(C),ne&&uf(ne),Z.stop(),L&&(L.flags|=8,Ce(oe,P,k,M)),ce&&Xn(ce,k),Xn(()=>{P.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},ve=(P,k,M,ne=!1,Z=!1,L=0)=>{for(let oe=L;oe<P.length;oe++)Ce(P[oe],k,M,ne,Z)},z=P=>{if(P.shapeFlag&6)return z(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const k=f(P.anchor||P.el),M=k&&k[gv];return M?f(M):k};let le=!1;const j=(P,k,M)=>{P==null?k._vnode&&Ce(k._vnode,null,null,!0):m(k._vnode||null,P,k,null,null,null,M),k._vnode=P,le||(le=!0,bg(),hv(),le=!1)},te={p:m,um:Ce,m:me,r:Ge,mt:X,mc:D,pc:H,pbc:x,n:z,o:n};return{render:j,hydrate:void 0,createApp:pw(j)}}function _f({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qo({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Mw(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function bm(n,e,t=!1){const r=n.children,i=e.children;if(qe(r)&&qe(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=So(i[o]),a.el=s.el),!t&&a.patchFlag!==-2&&bm(s,a)),a.type===Xd&&(a.el=s.el)}}function Cw(n){const e=n.slice(),t=[0];let r,i,o,s,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(o=0,s=t.length-1;o<s;)a=o+s>>1,n[t[a]]<c?o=a+1:s=a;c<n[t[o]]&&(o>0&&(e[r]=t[o-1]),t[o]=r)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=e[s];return t}function Gv(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gv(e)}function Rg(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Ew=Symbol.for("v-scx"),Tw=()=>Ei(Ew);function xi(n,e,t){return $v(n,e,t)}function $v(n,e,t=Ot){const{immediate:r,deep:i,flush:o,once:s}=t,a=wn({},t),l=e&&r||!e&&o!=="post";let c;if(hc){if(o==="sync"){const h=Tw();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ci,h.resume=Ci,h.pause=Ci,h}}const u=Sn;a.call=(h,g,m)=>li(h,u,g,m);let d=!1;o==="post"?a.scheduler=h=>{Xn(h,u&&u.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():dm(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=HS(n,e,a);return hc&&(c?c.push(f):l&&f()),f}function Aw(n,e,t){const r=this.proxy,i=Xt(n)?n.includes(".")?Wv(r,n):()=>r[n]:n.bind(r,r);let o;Je(e)?o=e:(o=e.handler,t=e);const s=$c(this),a=$v(i,o.bind(r),t);return s(),a}function Wv(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const Rw=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Wr(e)}Modifiers`]||n[`${Fs(e)}Modifiers`];function Pw(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ot;let i=t;const o=e.startsWith("update:"),s=o&&Rw(r,e.slice(7));s&&(s.trim&&(i=t.map(u=>Xt(u)?u.trim():u)),s.number&&(i=t.map(iS)));let a,l=r[a=cf(e)]||r[a=cf(Wr(e))];!l&&o&&(l=r[a=cf(Fs(e))]),l&&li(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,li(c,n,6,i)}}function Xv(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const o=n.emits;let s={},a=!1;if(!Je(n)){const l=c=>{const u=Xv(c,e,!0);u&&(a=!0,wn(s,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!a?(Ht(n)&&r.set(n,null),null):(qe(o)?o.forEach(l=>s[l]=null):wn(s,o),Ht(n)&&r.set(n,s),s)}function Wd(n,e){return!n||!Od(e)?!1:(e=e.slice(2).replace(/Once$/,""),Et(n,e[0].toLowerCase()+e.slice(1))||Et(n,Fs(e))||Et(n,e))}function Pg(n){const{type:e,vnode:t,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:m}=n,_=ud(n);let p,S;try{if(t.shapeFlag&4){const b=i||r,T=b;p=_i(c.call(T,b,u,d,h,f,g)),S=a}else{const b=e;p=_i(b.length>1?b(d,{attrs:a,slots:s,emit:l}):b(d,null)),S=e.props?a:kw(a)}}catch(b){Hl.length=0,Hd(b,n,1),p=zt(Qn)}let v=p;if(S&&m!==!1){const b=Object.keys(S),{shapeFlag:T}=v;b.length&&T&7&&(o&&b.some(Qp)&&(S=Dw(S,o)),v=No(v,S,!1,!0))}return t.dirs&&(v=No(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&uc(v,t.transition),p=v,ud(_),p}const kw=n=>{let e;for(const t in n)(t==="class"||t==="style"||Od(t))&&((e||(e={}))[t]=n[t]);return e},Dw=(n,e)=>{const t={};for(const r in n)(!Qp(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Lw(n,e,t){const{props:r,children:i,component:o}=n,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?kg(r,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==r[f]&&!Wd(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?kg(r,s,c):!0:!!s;return!1}function kg(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==n[o]&&!Wd(t,o))return!0}return!1}function Iw({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const jv=n=>n.__isSuspense;function Ow(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):$S(n)}const nn=Symbol.for("v-fgt"),Xd=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),Vu=Symbol.for("v-stc"),Hl=[];let Ar=null;function Fe(n=!1){Hl.push(Ar=n?null:[])}function Bw(){Hl.pop(),Ar=Hl[Hl.length-1]||null}let dc=1;function Dg(n,e=!1){dc+=n,n<0&&Ar&&e&&(Ar.hasOnce=!0)}function Yv(n){return n.dynamicChildren=dc>0?Ar||Ea:null,Bw(),dc>0&&Ar&&Ar.push(n),n}function lt(n,e,t,r,i,o){return Yv(Tt(n,e,t,r,i,o,!0))}function un(n,e,t,r,i){return Yv(zt(n,e,t,r,i,!0))}function fc(n){return n?n.__v_isVNode===!0:!1}function fs(n,e){return n.type===e.type&&n.key===e.key}const qv=({key:n})=>n??null,Gu=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Xt(n)||qt(n)||Je(n)?{i:gn,r:n,k:e,f:!!t}:n:null);function Tt(n,e=null,t=null,r=0,i=null,o=n===nn?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qv(e),ref:e&&Gu(e),scopeId:mv,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:gn};return a?(vm(l,t),o&128&&n.normalize(l)):t&&(l.shapeFlag|=Xt(t)?8:16),dc>0&&!s&&Ar&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ar.push(l),l}const zt=Uw;function Uw(n,e=null,t=null,r=0,i=null,o=!1){if((!n||n===Rv)&&(n=Qn),fc(n)){const a=No(n,e,!0);return t&&vm(a,t),dc>0&&!o&&Ar&&(a.shapeFlag&6?Ar[Ar.indexOf(n)]=a:Ar.push(a)),a.patchFlag=-2,a}if(jw(n)&&(n=n.__vccOpts),e){e=ha(e);let{class:a,style:l}=e;a&&!Xt(a)&&(e.class=Uo(a)),Ht(l)&&(cm(l)&&!qe(l)&&(l=wn({},l)),e.style=Hc(l))}const s=Xt(n)?1:jv(n)?128:_v(n)?64:Ht(n)?4:Je(n)?2:0;return Tt(n,e,t,r,i,s,o,!0)}function ha(n){return n?cm(n)||Bv(n)?wn({},n):n:null}function No(n,e,t=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:a,transition:l}=n,c=e?Ve(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&qv(c),ref:e&&e.ref?t&&o?qe(o)?o.concat(Gu(e)):[o,Gu(e)]:Gu(e):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==nn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&No(n.ssContent),ssFallback:n.ssFallback&&No(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&uc(u,l.clone(u)),u}function ka(n=" ",e=0){return zt(Xd,null,n,e)}function Nw(n,e){const t=zt(Vu,null,n);return t.staticCount=e,t}function Zn(n="",e=!1){return e?(Fe(),un(Qn,null,n)):zt(Qn,null,n)}function _i(n){return n==null||typeof n=="boolean"?zt(Qn):qe(n)?zt(nn,null,n.slice()):fc(n)?So(n):zt(Xd,null,String(n))}function So(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:No(n)}function vm(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),vm(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!Bv(e)?e._ctx=gn:i===3&&gn&&(gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:gn},t=32):(e=String(e),r&64?(t=16,e=[ka(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ve(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Uo([e.class,r.class]));else if(i==="style")e.style=Hc([e.style,r.style]);else if(Od(i)){const o=e[i],s=r[i];s&&o!==s&&!(qe(o)&&o.includes(s))&&(e[i]=o?[].concat(o,s):s)}else i!==""&&(e[i]=r[i])}return e}function di(n,e,t,r=null){li(n,e,7,[t,r])}const Fw=Lv();let zw=0;function Hw(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||Fw,o={uid:zw++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $b(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nv(r,i),emitsOptions:Xv(r,i),emit:null,emitted:null,propsDefaults:Ot,inheritAttrs:r.inheritAttrs,ctx:Ot,data:Ot,props:Ot,attrs:Ot,slots:Ot,refs:Ot,setupState:Ot,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Pw.bind(null,o),n.ce&&n.ce(o),o}let Sn=null;const Kv=()=>Sn||gn;let hd,Ph;{const n=Fd(),e=(t,r)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};hd=e("__VUE_INSTANCE_SETTERS__",t=>Sn=t),Ph=e("__VUE_SSR_SETTERS__",t=>hc=t)}const $c=n=>{const e=Sn;return hd(n),n.scope.on(),()=>{n.scope.off(),hd(e)}},Lg=()=>{Sn&&Sn.scope.off(),hd(null)};function Zv(n){return n.vnode.shapeFlag&4}let hc=!1;function Vw(n,e=!1,t=!1){e&&Ph(e);const{props:r,children:i}=n.vnode,o=Zv(n);gw(n,r,o,e),yw(n,i,t);const s=o?Gw(n,e):void 0;return e&&Ph(!1),s}function Gw(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,aw);const{setup:r}=t;if(r){$o();const i=n.setupContext=r.length>1?Ww(n):null,o=$c(n),s=Vc(r,n,0,[n.props,i]),a=Ub(s);if(Wo(),o(),(a||n.sp)&&!Pa(n)&&Ev(n),a){if(s.then(Lg,Lg),e)return s.then(l=>{Ig(n,l)}).catch(l=>{Hd(l,n,0)});n.asyncDep=s}else Ig(n,s)}else Jv(n)}function Ig(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ht(e)&&(n.setupState=cv(e)),Jv(n)}function Jv(n,e,t){const r=n.type;n.render||(n.render=r.render||Ci);{const i=$c(n);$o();try{lw(n)}finally{Wo(),i()}}}const $w={get(n,e){return Ln(n,"get",""),n[e]}};function Ww(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,$w),slots:n.slots,emit:n.emit,expose:e}}function jd(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(cv(um(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zl)return zl[t](n)},has(e,t){return t in e||t in zl}})):n.proxy}function Xw(n,e=!0){return Je(n)?n.displayName||n.name:n.name||e&&n.__name}function jw(n){return Je(n)&&"__vccOpts"in n}const lr=(n,e)=>FS(n,e,hc);function ym(n,e,t){const r=arguments.length;return r===2?Ht(e)&&!qe(e)?fc(e)?zt(n,null,[e]):zt(n,e):zt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&fc(t)&&(t=[t]),zt(n,e,t))}const Yw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kh;const Og=typeof window<"u"&&window.trustedTypes;if(Og)try{kh=Og.createPolicy("vue",{createHTML:n=>n})}catch{}const Qv=kh?n=>kh.createHTML(n):n=>n,qw="http://www.w3.org/2000/svg",Kw="http://www.w3.org/1998/Math/MathML",Gi=typeof document<"u"?document:null,Bg=Gi&&Gi.createElement("template"),Zw={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e==="svg"?Gi.createElementNS(qw,n):e==="mathml"?Gi.createElementNS(Kw,n):t?Gi.createElement(n,{is:t}):Gi.createElement(n);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Gi.createTextNode(n),createComment:n=>Gi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,o){const s=t?t.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{Bg.innerHTML=Qv(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=Bg.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},co="transition",fl="animation",pc=Symbol("_vtc"),e1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Jw=wn({},yv,e1),Qw=n=>(n.displayName="Transition",n.props=Jw,n),t1=Qw((n,{slots:e})=>ym(qS,eM(n),e)),Ko=(n,e=[])=>{qe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Ug=n=>n?qe(n)?n.some(e=>e.length>1):n.length>1:!1;function eM(n){const e={};for(const O in n)O in e1||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:r,duration:i,enterFromClass:o=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:c=s,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=tM(i),m=g&&g[0],_=g&&g[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:v,onLeave:b,onLeaveCancelled:T,onBeforeAppear:R=p,onAppear:E=S,onAppearCancelled:D=v}=e,y=(O,F,X,J)=>{O._enterCancelled=J,Zo(O,F?u:a),Zo(O,F?c:s),X&&X()},x=(O,F)=>{O._isLeaving=!1,Zo(O,d),Zo(O,h),Zo(O,f),F&&F()},I=O=>(F,X)=>{const J=O?E:S,W=()=>y(F,O,X);Ko(J,[F,W]),Ng(()=>{Zo(F,O?l:o),Ii(F,O?u:a),Ug(J)||Fg(F,r,m,W)})};return wn(e,{onBeforeEnter(O){Ko(p,[O]),Ii(O,o),Ii(O,s)},onBeforeAppear(O){Ko(R,[O]),Ii(O,l),Ii(O,c)},onEnter:I(!1),onAppear:I(!0),onLeave(O,F){O._isLeaving=!0;const X=()=>x(O,F);Ii(O,d),O._enterCancelled?(Ii(O,f),Vg()):(Vg(),Ii(O,f)),Ng(()=>{O._isLeaving&&(Zo(O,d),Ii(O,h),Ug(b)||Fg(O,r,_,X))}),Ko(b,[O,X])},onEnterCancelled(O){y(O,!1,void 0,!0),Ko(v,[O])},onAppearCancelled(O){y(O,!0,void 0,!0),Ko(D,[O])},onLeaveCancelled(O){x(O),Ko(T,[O])}})}function tM(n){if(n==null)return null;if(Ht(n))return[bf(n.enter),bf(n.leave)];{const e=bf(n);return[e,e]}}function bf(n){return oS(n)}function Ii(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[pc]||(n[pc]=new Set)).add(e)}function Zo(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[pc];t&&(t.delete(e),t.size||(n[pc]=void 0))}function Ng(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let nM=0;function Fg(n,e,t,r){const i=n._endId=++nM,o=()=>{i===n._endId&&r()};if(t!=null)return setTimeout(o,t);const{type:s,timeout:a,propCount:l}=rM(n,e);if(!s)return r();const c=s+"end";let u=0;const d=()=>{n.removeEventListener(c,f),o()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function rM(n,e){const t=window.getComputedStyle(n),r=g=>(t[g]||"").split(", "),i=r(`${co}Delay`),o=r(`${co}Duration`),s=zg(i,o),a=r(`${fl}Delay`),l=r(`${fl}Duration`),c=zg(a,l);let u=null,d=0,f=0;e===co?s>0&&(u=co,d=s,f=o.length):e===fl?c>0&&(u=fl,d=c,f=l.length):(d=Math.max(s,c),u=d>0?s>c?co:fl:null,f=u?u===co?o.length:l.length:0);const h=u===co&&/\b(transform|all)(,|$)/.test(r(`${co}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function zg(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>Hg(t)+Hg(n[r])))}function Hg(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Vg(){return document.body.offsetHeight}function iM(n,e,t){const r=n[pc];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Gg=Symbol("_vod"),oM=Symbol("_vsh"),sM=Symbol(""),aM=/(^|;)\s*display\s*:/;function lM(n,e,t){const r=n.style,i=Xt(t);let o=!1;if(t&&!i){if(e)if(Xt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();t[a]==null&&$u(r,a,"")}else for(const s in e)t[s]==null&&$u(r,s,"");for(const s in t)s==="display"&&(o=!0),$u(r,s,t[s])}else if(i){if(e!==t){const s=r[sM];s&&(t+=";"+s),r.cssText=t,o=aM.test(t)}}else e&&n.removeAttribute("style");Gg in n&&(n[Gg]=o?r.display:"",n[oM]&&(r.display="none"))}const $g=/\s*!important$/;function $u(n,e,t){if(qe(t))t.forEach(r=>$u(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=cM(n,e);$g.test(t)?n.setProperty(Fs(r),t.replace($g,""),"important"):n[r]=t}}const Wg=["Webkit","Moz","ms"],vf={};function cM(n,e){const t=vf[e];if(t)return t;let r=Wr(e);if(r!=="filter"&&r in n)return vf[e]=r;r=Nd(r);for(let i=0;i<Wg.length;i++){const o=Wg[i]+r;if(o in n)return vf[e]=o}return e}const Xg="http://www.w3.org/1999/xlink";function jg(n,e,t,r,i,o=dS(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Xg,e.slice(6,e.length)):n.setAttributeNS(Xg,e,t):t==null||o&&!Hb(t)?n.removeAttribute(e):n.setAttribute(e,o?"":so(t)?String(t):t)}function Yg(n,e,t,r,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Qv(t):t);return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Hb(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(i||e)}function uM(n,e,t,r){n.addEventListener(e,t,r)}function dM(n,e,t,r){n.removeEventListener(e,t,r)}const qg=Symbol("_vei");function fM(n,e,t,r,i=null){const o=n[qg]||(n[qg]={}),s=o[e];if(r&&s)s.value=r;else{const[a,l]=hM(e);if(r){const c=o[e]=gM(r,i);uM(n,a,c,l)}else s&&(dM(n,a,s,l),o[e]=void 0)}}const Kg=/(?:Once|Passive|Capture)$/;function hM(n){let e;if(Kg.test(n)){e={};let r;for(;r=n.match(Kg);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Fs(n.slice(2)),e]}let yf=0;const pM=Promise.resolve(),mM=()=>yf||(pM.then(()=>yf=0),yf=Date.now());function gM(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;li(_M(r,t.value),e,5,[r])};return t.value=n,t.attached=mM(),t}function _M(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Zg=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,bM=(n,e,t,r,i,o)=>{const s=i==="svg";e==="class"?iM(n,r,s):e==="style"?lM(n,t,r):Od(e)?Qp(e)||fM(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vM(n,e,r,s))?(Yg(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jg(n,e,r,s,o,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Xt(r))?Yg(n,Wr(e),r,o,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),jg(n,e,r,s))};function vM(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Zg(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Zg(e)&&Xt(t)?!1:e in n}const yM=wn({patchProp:bM},Zw);let Jg;function xM(){return Jg||(Jg=Sw(yM))}const SM=(...n)=>{const e=xM().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=MM(r);if(!i)return;const o=e._component;!Je(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=t(i,!1,wM(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function wM(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function MM(n){return Xt(n)?document.querySelector(n):n}const CM={__name:"App",setup(n){return Gc(()=>{console.log("App component mounted")}),(e,t)=>{const r=ei("routerView");return Fe(),un(r)}}};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const pa=typeof document<"u";function n1(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function EM(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&n1(n.default)}const Mt=Object.assign;function xf(n,e){const t={};for(const r in e){const i=e[r];t[r]=ci(i)?i.map(n):n(i)}return t}const Vl=()=>{},ci=Array.isArray,r1=/#/g,TM=/&/g,AM=/\//g,RM=/=/g,PM=/\?/g,i1=/\+/g,kM=/%5B/g,DM=/%5D/g,o1=/%5E/g,LM=/%60/g,s1=/%7B/g,IM=/%7C/g,a1=/%7D/g,OM=/%20/g;function xm(n){return encodeURI(""+n).replace(IM,"|").replace(kM,"[").replace(DM,"]")}function BM(n){return xm(n).replace(s1,"{").replace(a1,"}").replace(o1,"^")}function Dh(n){return xm(n).replace(i1,"%2B").replace(OM,"+").replace(r1,"%23").replace(TM,"%26").replace(LM,"`").replace(s1,"{").replace(a1,"}").replace(o1,"^")}function UM(n){return Dh(n).replace(RM,"%3D")}function NM(n){return xm(n).replace(r1,"%23").replace(PM,"%3F")}function FM(n){return n==null?"":NM(n).replace(AM,"%2F")}function mc(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const zM=/\/$/,HM=n=>n.replace(zM,"");function Sf(n,e,t="/"){let r,i={},o="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),i=n(o)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=WM(r??e,t),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:mc(s)}}function VM(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Qg(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function GM(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Ga(e.matched[r],t.matched[i])&&l1(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ga(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function l1(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!$M(n[t],e[t]))return!1;return!0}function $M(n,e){return ci(n)?e0(n,e):ci(e)?e0(e,n):n===e}function e0(n,e){return ci(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function WM(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=t.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(s).join("/")}const uo={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var gc;(function(n){n.pop="pop",n.push="push"})(gc||(gc={}));var Gl;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Gl||(Gl={}));function XM(n){if(!n)if(pa){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),HM(n)}const jM=/^[^#]+#/;function YM(n,e){return n.replace(jM,"#")+e}function qM(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Yd=()=>({left:window.scrollX,top:window.scrollY});function KM(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=qM(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function t0(n,e){return(history.state?history.state.position-e:-1)+n}const Lh=new Map;function ZM(n,e){Lh.set(n,e)}function JM(n){const e=Lh.get(n);return Lh.delete(n),e}let QM=()=>location.protocol+"//"+location.host;function c1(n,e){const{pathname:t,search:r,hash:i}=e,o=n.indexOf("#");if(o>-1){let a=i.includes(n.slice(o))?n.slice(o).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Qg(l,"")}return Qg(t,n)+r+i}function eC(n,e,t,r){let i=[],o=[],s=null;const a=({state:f})=>{const h=c1(n,location),g=t.value,m=e.value;let _=0;if(f){if(t.value=h,e.value=f,s&&s===g){s=null;return}_=m?f.position-m.position:0}else r(h);i.forEach(p=>{p(t.value,g,{delta:_,type:gc.pop,direction:_?_>0?Gl.forward:Gl.back:Gl.unknown})})};function l(){s=t.value}function c(f){i.push(f);const h=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return o.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(Mt({},f.state,{scroll:Yd()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function n0(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?Yd():null}}function tC(n){const{history:e,location:t}=window,r={value:c1(n,t)},i={value:e.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:QM()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(h){console.error(h),t[u?"replace":"assign"](f)}}function s(l,c){const u=Mt({},e.state,n0(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,u,!0),r.value=l}function a(l,c){const u=Mt({},i.value,e.state,{forward:l,scroll:Yd()});o(u.current,u,!0);const d=Mt({},n0(r.value,l,null),{position:u.position+1},c);o(l,d,!1),r.value=l}return{location:r,state:i,push:a,replace:s}}function nC(n){n=XM(n);const e=tC(n),t=eC(n,e.state,e.location,e.replace);function r(o,s=!0){s||t.pauseListeners(),history.go(o)}const i=Mt({location:"",base:n,go:r,createHref:YM.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function rC(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),nC(n)}function iC(n){return typeof n=="string"||n&&typeof n=="object"}function u1(n){return typeof n=="string"||typeof n=="symbol"}const d1=Symbol("");var r0;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(r0||(r0={}));function $a(n,e){return Mt(new Error,{type:n,[d1]:!0},e)}function Oi(n,e){return n instanceof Error&&d1 in n&&(e==null||!!(n.type&e))}const i0="[^/]+?",oC={sensitive:!1,strict:!1,start:!0,end:!0},sC=/[.+*?^${}()[\]/\\]/g;function aC(n,e){const t=Mt({},oC,e),r=[];let i=t.start?"^":"";const o=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(t.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(sC,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:m,optional:_,regexp:p}=f;o.push({name:g,repeatable:m,optional:_});const S=p||i0;if(S!==i0){h+=10;try{new RegExp(`(${S})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+b.message)}}let v=m?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(v=_&&c.length<2?`(?:/${v})`:"/"+v),_&&(v+="?"),i+=v,h+=20,_&&(h+=-8),m&&(h+=-20),S===".*"&&(h+=-50)}u.push(h)}r.push(u)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=o[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:m,optional:_}=h,p=g in c?c[g]:"";if(ci(p)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=ci(p)?p.join("/"):p;if(!S)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:s,score:r,keys:o,parse:a,stringify:l}}function lC(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function f1(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const o=lC(r[t],i[t]);if(o)return o;t++}if(Math.abs(i.length-r.length)===1){if(o0(r))return 1;if(o0(i))return-1}return i.length-r.length}function o0(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const cC={type:0,value:""},uC=/[a-zA-Z0-9_]/;function dC(n){if(!n)return[[]];if(n==="/")return[[cC]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=0,r=t;const i=[];let o;function s(){o&&i.push(o),o=[]}let a=0,l,c="",u="";function d(){c&&(t===0?o.push({type:0,value:c}):t===1||t===2||t===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),s()):l===":"?(d(),t=1):f();break;case 4:f(),t=r;break;case 1:l==="("?t=2:uC.test(l)?f():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),s(),i}function fC(n,e,t){const r=aC(dC(n.path),t),i=Mt(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function hC(n,e){const t=[],r=new Map;e=c0({strict:!1,end:!0,sensitive:!1},e);function i(d){return r.get(d)}function o(d,f,h){const g=!h,m=a0(d);m.aliasOf=h&&h.record;const _=c0(e,d),p=[m];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const T of b)p.push(a0(Mt({},m,{components:h?h.record.components:m.components,path:T,aliasOf:h?h.record:m})))}let S,v;for(const b of p){const{path:T}=b;if(f&&T[0]!=="/"){const R=f.record.path,E=R[R.length-1]==="/"?"":"/";b.path=f.record.path+(T&&E+T)}if(S=fC(b,f,_),h?h.alias.push(S):(v=v||S,v!==S&&v.alias.push(S),g&&d.name&&!l0(S)&&s(d.name)),h1(S)&&l(S),m.children){const R=m.children;for(let E=0;E<R.length;E++)o(R[E],S,h&&h.children[E])}h=h||S}return v?()=>{s(v)}:Vl}function s(d){if(u1(d)){const f=r.get(d);f&&(r.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function a(){return t}function l(d){const f=gC(d,t);t.splice(f,0,d),d.record.name&&!l0(d)&&r.set(d.record.name,d)}function c(d,f){let h,g={},m,_;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw $a(1,{location:d});_=h.record.name,g=Mt(s0(f.params,h.keys.filter(v=>!v.optional).concat(h.parent?h.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),d.params&&s0(d.params,h.keys.map(v=>v.name))),m=h.stringify(g)}else if(d.path!=null)m=d.path,h=t.find(v=>v.re.test(m)),h&&(g=h.parse(m),_=h.record.name);else{if(h=f.name?r.get(f.name):t.find(v=>v.re.test(f.path)),!h)throw $a(1,{location:d,currentLocation:f});_=h.record.name,g=Mt({},f.params,d.params),m=h.stringify(g)}const p=[];let S=h;for(;S;)p.unshift(S.record),S=S.parent;return{name:_,path:m,params:g,matched:p,meta:mC(p)}}n.forEach(d=>o(d));function u(){t.length=0,r.clear()}return{addRoute:o,resolve:c,removeRoute:s,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function s0(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function a0(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:pC(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pC(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function l0(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function mC(n){return n.reduce((e,t)=>Mt(e,t.meta),{})}function c0(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function gC(n,e){let t=0,r=e.length;for(;t!==r;){const o=t+r>>1;f1(n,e[o])<0?r=o:t=o+1}const i=_C(n);return i&&(r=e.lastIndexOf(i,r-1)),r}function _C(n){let e=n;for(;e=e.parent;)if(h1(e)&&f1(n,e)===0)return e}function h1({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function bC(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(i1," "),s=o.indexOf("="),a=mc(s<0?o:o.slice(0,s)),l=s<0?null:mc(o.slice(s+1));if(a in e){let c=e[a];ci(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function u0(n){let e="";for(let t in n){const r=n[t];if(t=UM(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(ci(r)?r.map(o=>o&&Dh(o)):[r&&Dh(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+t,o!=null&&(e+="="+o))})}return e}function vC(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=ci(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const yC=Symbol(""),d0=Symbol(""),Sm=Symbol(""),p1=Symbol(""),Ih=Symbol("");function hl(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function wo(n,e,t,r,i,o=s=>s()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l($a(4,{from:t,to:e})):f instanceof Error?l(f):iC(f)?l($a(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},u=o(()=>n.call(r&&r.instances[i],e,t,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function wf(n,e,t,r,i=o=>o()){const o=[];for(const s of n)for(const a in s.components){let l=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(n1(l)){const u=(l.__vccOpts||l)[e];u&&o.push(wo(u,t,r,s,a,i))}else{let c=l();o.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);const d=EM(u)?u.default:u;s.mods[a]=u,s.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&wo(h,t,r,s,a,i)()}))}}return o}function f0(n){const e=Ei(Sm),t=Ei(p1),r=lr(()=>{const l=Aa(n.to);return e.resolve(l)}),i=lr(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ga.bind(null,u));if(f>-1)return f;const h=h0(l[c-2]);return c>1&&h0(u)===h&&d[d.length-1].path!==h?d.findIndex(Ga.bind(null,l[c-2])):f}),o=lr(()=>i.value>-1&&CC(t.params,r.value.params)),s=lr(()=>i.value>-1&&i.value===t.matched.length-1&&l1(t.params,r.value.params));function a(l={}){if(MC(l)){const c=e[Aa(n.replace)?"replace":"push"](Aa(n.to)).catch(Vl);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:lr(()=>r.value.href),isActive:o,isExactActive:s,navigate:a}}function xC(n){return n.length===1?n[0]:n}const SC=Cv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:f0,setup(n,{slots:e}){const t=zs(f0(n)),{options:r}=Ei(Sm),i=lr(()=>({[p0(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[p0(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&xC(e.default(t));return n.custom?o:ym("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},o)}}}),wC=SC;function MC(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function CC(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!ci(i)||i.length!==r.length||r.some((o,s)=>o!==i[s]))return!1}return!0}function h0(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const p0=(n,e,t)=>n??e??t,EC=Cv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Ei(Ih),i=lr(()=>n.route||r.value),o=Ei(d0,0),s=lr(()=>{let c=Aa(o);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=lr(()=>i.value.matched[s.value]);Hu(d0,lr(()=>s.value+1)),Hu(yC,a),Hu(Ih,i);const l=nr();return xi(()=>[l.value,a.value,n.name],([c,u,d],[f,h,g])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Ga(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return m0(t.default,{Component:f,route:c});const h=d.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,_=ym(f,Mt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return m0(t.default,{Component:_,route:c})||_}}});function m0(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const TC=EC;function AC(n){const e=hC(n.routes,n),t=n.parseQuery||bC,r=n.stringifyQuery||u0,i=n.history,o=hl(),s=hl(),a=hl(),l=wh(uo);let c=uo;pa&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xf.bind(null,z=>""+z),d=xf.bind(null,FM),f=xf.bind(null,mc);function h(z,le){let j,te;return u1(z)?(j=e.getRecordMatcher(z),te=le):te=z,e.addRoute(te,j)}function g(z){const le=e.getRecordMatcher(z);le&&e.removeRoute(le)}function m(){return e.getRoutes().map(z=>z.record)}function _(z){return!!e.getRecordMatcher(z)}function p(z,le){if(le=Mt({},le||l.value),typeof z=="string"){const M=Sf(t,z,le.path),ne=e.resolve({path:M.path},le),Z=i.createHref(M.fullPath);return Mt(M,ne,{params:f(ne.params),hash:mc(M.hash),redirectedFrom:void 0,href:Z})}let j;if(z.path!=null)j=Mt({},z,{path:Sf(t,z.path,le.path).path});else{const M=Mt({},z.params);for(const ne in M)M[ne]==null&&delete M[ne];j=Mt({},z,{params:d(M)}),le.params=d(le.params)}const te=e.resolve(j,le),be=z.hash||"";te.params=u(f(te.params));const P=VM(r,Mt({},z,{hash:BM(be),path:te.path})),k=i.createHref(P);return Mt({fullPath:P,hash:be,query:r===u0?vC(z.query):z.query||{}},te,{redirectedFrom:void 0,href:k})}function S(z){return typeof z=="string"?Sf(t,z,l.value.path):Mt({},z)}function v(z,le){if(c!==z)return $a(8,{from:le,to:z})}function b(z){return E(z)}function T(z){return b(Mt(S(z),{replace:!0}))}function R(z){const le=z.matched[z.matched.length-1];if(le&&le.redirect){const{redirect:j}=le;let te=typeof j=="function"?j(z):j;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=S(te):{path:te},te.params={}),Mt({query:z.query,hash:z.hash,params:te.path!=null?{}:z.params},te)}}function E(z,le){const j=c=p(z),te=l.value,be=z.state,P=z.force,k=z.replace===!0,M=R(j);if(M)return E(Mt(S(M),{state:typeof M=="object"?Mt({},be,M.state):be,force:P,replace:k}),le||j);const ne=j;ne.redirectedFrom=le;let Z;return!P&&GM(r,te,j)&&(Z=$a(16,{to:ne,from:te}),me(te,te,!0,!1)),(Z?Promise.resolve(Z):x(ne,te)).catch(L=>Oi(L)?Oi(L,2)?L:B(L):H(L,ne,te)).then(L=>{if(L){if(Oi(L,2))return E(Mt({replace:k},S(L.to),{state:typeof L.to=="object"?Mt({},be,L.to.state):be,force:P}),le||ne)}else L=O(ne,te,!0,k,be);return I(ne,te,L),L})}function D(z,le){const j=v(z,le);return j?Promise.reject(j):Promise.resolve()}function y(z){const le=re.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(z):z()}function x(z,le){let j;const[te,be,P]=RC(z,le);j=wf(te.reverse(),"beforeRouteLeave",z,le);for(const M of te)M.leaveGuards.forEach(ne=>{j.push(wo(ne,z,le))});const k=D.bind(null,z,le);return j.push(k),ve(j).then(()=>{j=[];for(const M of o.list())j.push(wo(M,z,le));return j.push(k),ve(j)}).then(()=>{j=wf(be,"beforeRouteUpdate",z,le);for(const M of be)M.updateGuards.forEach(ne=>{j.push(wo(ne,z,le))});return j.push(k),ve(j)}).then(()=>{j=[];for(const M of P)if(M.beforeEnter)if(ci(M.beforeEnter))for(const ne of M.beforeEnter)j.push(wo(ne,z,le));else j.push(wo(M.beforeEnter,z,le));return j.push(k),ve(j)}).then(()=>(z.matched.forEach(M=>M.enterCallbacks={}),j=wf(P,"beforeRouteEnter",z,le,y),j.push(k),ve(j))).then(()=>{j=[];for(const M of s.list())j.push(wo(M,z,le));return j.push(k),ve(j)}).catch(M=>Oi(M,8)?M:Promise.reject(M))}function I(z,le,j){a.list().forEach(te=>y(()=>te(z,le,j)))}function O(z,le,j,te,be){const P=v(z,le);if(P)return P;const k=le===uo,M=pa?history.state:{};j&&(te||k?i.replace(z.fullPath,Mt({scroll:k&&M&&M.scroll},be)):i.push(z.fullPath,be)),l.value=z,me(z,le,j,k),B()}let F;function X(){F||(F=i.listen((z,le,j)=>{if(!he.listening)return;const te=p(z),be=R(te);if(be){E(Mt(be,{replace:!0,force:!0}),te).catch(Vl);return}c=te;const P=l.value;pa&&ZM(t0(P.fullPath,j.delta),Yd()),x(te,P).catch(k=>Oi(k,12)?k:Oi(k,2)?(E(Mt(S(k.to),{force:!0}),te).then(M=>{Oi(M,20)&&!j.delta&&j.type===gc.pop&&i.go(-1,!1)}).catch(Vl),Promise.reject()):(j.delta&&i.go(-j.delta,!1),H(k,te,P))).then(k=>{k=k||O(te,P,!1),k&&(j.delta&&!Oi(k,8)?i.go(-j.delta,!1):j.type===gc.pop&&Oi(k,20)&&i.go(-1,!1)),I(te,P,k)}).catch(Vl)}))}let J=hl(),W=hl(),V;function H(z,le,j){B(z);const te=W.list();return te.length?te.forEach(be=>be(z,le,j)):console.error(z),Promise.reject(z)}function de(){return V&&l.value!==uo?Promise.resolve():new Promise((z,le)=>{J.add([z,le])})}function B(z){return V||(V=!z,X(),J.list().forEach(([le,j])=>z?j(z):le()),J.reset()),z}function me(z,le,j,te){const{scrollBehavior:be}=n;if(!pa||!be)return Promise.resolve();const P=!j&&JM(t0(z.fullPath,0))||(te||!j)&&history.state&&history.state.scroll||null;return Vd().then(()=>be(z,le,P)).then(k=>k&&KM(k)).catch(k=>H(k,z,le))}const Ce=z=>i.go(z);let Ge;const re=new Set,he={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:m,resolve:p,options:n,push:b,replace:T,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:W.add,isReady:de,install(z){const le=this;z.component("RouterLink",wC),z.component("RouterView",TC),z.config.globalProperties.$router=le,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>Aa(l)}),pa&&!Ge&&l.value===uo&&(Ge=!0,b(i.location).catch(be=>{}));const j={};for(const be in uo)Object.defineProperty(j,be,{get:()=>l.value[be],enumerable:!0});z.provide(Sm,le),z.provide(p1,av(j)),z.provide(Ih,l);const te=z.unmount;re.add(z),z.unmount=function(){re.delete(z),re.size<1&&(c=uo,F&&F(),F=null,l.value=uo,Ge=!1,V=!1),te()}}};function ve(z){return z.reduce((le,j)=>le.then(()=>y(j)),Promise.resolve())}return he}function RC(n,e){const t=[],r=[],i=[],o=Math.max(e.matched.length,n.matched.length);for(let s=0;s<o;s++){const a=e.matched[s];a&&(n.matched.find(c=>Ga(c,a))?r.push(a):t.push(a));const l=n.matched[s];l&&(e.matched.find(c=>Ga(c,l))||i.push(l))}return[t,r,i]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wm="172",PC=0,g0=1,kC=2,m1=1,DC=2,Vi=3,Fo=0,cr=1,vi=2,Do=0,Da=1,_0=2,b0=3,v0=4,LC=5,hs=100,IC=101,OC=102,BC=103,UC=104,NC=200,FC=201,zC=202,HC=203,Oh=204,Bh=205,VC=206,GC=207,$C=208,WC=209,XC=210,jC=211,YC=212,qC=213,KC=214,Uh=0,Nh=1,Fh=2,Wa=3,zh=4,Hh=5,Vh=6,Gh=7,g1=0,ZC=1,JC=2,Lo=0,QC=1,eE=2,tE=3,nE=4,rE=5,iE=6,oE=7,_1=300,Xa=301,ja=302,pd=303,$h=304,qd=306,md=1e3,ms=1001,Wh=1002,ai=1003,sE=1004,eu=1005,Si=1006,Mf=1007,gs=1008,ro=1009,b1=1010,v1=1011,_c=1012,Mm=1013,Ds=1014,Ki=1015,Wc=1016,Cm=1017,Em=1018,Ya=1020,y1=35902,x1=1021,S1=1022,ii=1023,w1=1024,M1=1025,La=1026,qa=1027,C1=1028,Tm=1029,E1=1030,Am=1031,Rm=1033,Wu=33776,Xu=33777,ju=33778,Yu=33779,Xh=35840,jh=35841,Yh=35842,qh=35843,Kh=36196,Zh=37492,Jh=37496,Qh=37808,ep=37809,tp=37810,np=37811,rp=37812,ip=37813,op=37814,sp=37815,ap=37816,lp=37817,cp=37818,up=37819,dp=37820,fp=37821,qu=36492,hp=36494,pp=36495,T1=36283,mp=36284,gp=36285,_p=36286,aE=3200,lE=3201,A1=0,cE=1,Mo="",Sr="srgb",Ka="srgb-linear",gd="linear",At="srgb",Ys=7680,y0=519,uE=512,dE=513,fE=514,R1=515,hE=516,pE=517,mE=518,gE=519,x0=35044,S0="300 es",Zi=2e3,_d=2001;class ol{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let w0=1234567;const $l=Math.PI/180,bc=180/Math.PI;function sl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Pm(n,e){return(n%e+e)%e}function _E(n,e,t,r,i){return r+(n-e)*(i-r)/(t-e)}function bE(n,e,t){return n!==e?(t-n)/(e-n):0}function Wl(n,e,t){return(1-t)*n+t*e}function vE(n,e,t,r){return Wl(n,e,1-Math.exp(-t*r))}function yE(n,e=1){return e-Math.abs(Pm(n,e*2)-e)}function xE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function SE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ME(n,e){return n+Math.random()*(e-n)}function CE(n){return n*(.5-Math.random())}function EE(n){n!==void 0&&(w0=n);let e=w0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TE(n){return n*$l}function AE(n){return n*bc}function RE(n){return(n&n-1)===0&&n!==0}function PE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function kE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function DE(n,e,t,r,i){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+r)/2),u=s((e+r)/2),d=o((e-r)/2),f=s((e-r)/2),h=o((r-e)/2),g=s((r-e)/2);switch(i){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ma(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fi={DEG2RAD:$l,RAD2DEG:bc,generateUUID:sl,clamp:dt,euclideanModulo:Pm,mapLinear:_E,inverseLerp:bE,lerp:Wl,damp:vE,pingpong:yE,smoothstep:xE,smootherstep:SE,randInt:wE,randFloat:ME,randFloatSpread:CE,seededRandom:EE,degToRad:TE,radToDeg:AE,isPowerOfTwo:RE,ceilPowerOfTwo:PE,floorPowerOfTwo:kE,setQuaternionFromProperEuler:DE,normalize:Gn,denormalize:ma};class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*r-s*i+e.x,this.y=o*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,r,i,o,s,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,o,s,a,l,c)}set(e,t,r,i,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,o=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],u=r[4],d=r[7],f=r[2],h=r[5],g=r[8],m=i[0],_=i[3],p=i[6],S=i[1],v=i[4],b=i[7],T=i[2],R=i[5],E=i[8];return o[0]=s*m+a*S+l*T,o[3]=s*_+a*v+l*R,o[6]=s*p+a*b+l*E,o[1]=c*m+u*S+d*T,o[4]=c*_+u*v+d*R,o[7]=c*p+u*b+d*E,o[2]=f*m+h*S+g*T,o[5]=f*_+h*v+g*R,o[8]=f*p+h*b+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-r*o*u+r*a*l+i*o*c-i*s*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,h=c*o-s*l,g=t*d+r*f+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=d*m,e[1]=(i*c-u*r)*m,e[2]=(a*r-i*s)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*o-a*t)*m,e[6]=h*m,e[7]=(r*l-c*t)*m,e[8]=(s*t-r*o)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cf.makeScale(e,t)),this}rotate(e){return this.premultiply(Cf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cf=new et;function P1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function LE(){const n=vc("canvas");return n.style.display="block",n}const M0={};function ga(n){n in M0||(M0[n]=!0,console.warn(n))}function IE(n,e,t){return new Promise(function(r,i){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}function OE(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function BE(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const C0=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E0=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UE(){const n={enabled:!0,workingColorSpace:Ka,spaces:{},convert:function(i,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===At&&(i.r=to(i.r),i.g=to(i.g),i.b=to(i.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===At&&(i.r=Ia(i.r),i.g=Ia(i.g),i.b=Ia(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mo?gd:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,s){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ka]:{primaries:e,whitePoint:r,transfer:gd,toXYZ:C0,fromXYZ:E0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sr},outputColorSpaceConfig:{drawingBufferColorSpace:Sr}},[Sr]:{primaries:e,whitePoint:r,transfer:At,toXYZ:C0,fromXYZ:E0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sr}}}),n}const yt=UE();function to(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ia(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qs;class NE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=vc("canvas")),qs.width=e.width,qs.height=e.height;const r=qs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=to(o[s]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(to(t[r]/255)*255):t[r]=to(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FE=0;class k1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?o.push(Ef(i[s].image)):o.push(Ef(i[s]))}else o=Ef(i);r.url=o}return t||(e.images[this.uuid]=r),r}}function Ef(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?NE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zE=0;class rr extends ol{constructor(e=rr.DEFAULT_IMAGE,t=rr.DEFAULT_MAPPING,r=ms,i=ms,o=Si,s=gs,a=ii,l=ro,c=rr.DEFAULT_ANISOTROPY,u=Mo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=sl(),this.name="",this.source=new k1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rr.DEFAULT_IMAGE=null;rr.DEFAULT_MAPPING=_1;rr.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,r=0,i=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i+s[12]*o,this.y=s[1]*t+s[5]*r+s[9]*i+s[13]*o,this.z=s[2]*t+s[6]*r+s[10]*i+s[14]*o,this.w=s[3]*t+s[7]*r+s[11]*i+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],m=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-m)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+m)<.1&&Math.abs(g+_)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(h+1)/2,T=(p+1)/2,R=(u+f)/4,E=(d+m)/4,D=(g+_)/4;return v>b&&v>T?v<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(v),i=R/r,o=E/r):b>T?b<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(b),r=R/i,o=D/i):T<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(T),r=E/o,i=D/o),this.set(r,i,o,t),this}let S=Math.sqrt((_-g)*(_-g)+(d-m)*(d-m)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(_-g)/S,this.y=(d-m)/S,this.z=(f-u)/S,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HE extends ol{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const o=new rr(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new k1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends HE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class D1 extends rr{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=ai,this.minFilter=ai,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VE extends rr{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=ai,this.minFilter=ai,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,o,s,a){let l=r[i+0],c=r[i+1],u=r[i+2],d=r[i+3];const f=o[s+0],h=o[s+1],g=o[s+2],m=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=m;return}if(d!==m||l!==f||c!==h||u!==g){let _=1-a;const p=l*f+c*h+u*g+d*m,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),R=Math.atan2(T,p*S);_=Math.sin(_*R)/T,a=Math.sin(a*R)/T}const b=a*S;if(l=l*_+f*b,c=c*_+h*b,u=u*_+g*b,d=d*_+m*b,_===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,i,o,s){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],d=o[s],f=o[s+1],h=o[s+2],g=o[s+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,i=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),d=a(o/2),f=l(r/2),h=l(i/2),g=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=r+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(o-c)*h,this._z=(s-i)*h}else if(r>a&&r>d){const h=2*Math.sqrt(1+r-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(o+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-r-d);this._w=(o-c)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-r-a);this._w=(s-i)/h,this._x=(o+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*a+i*c-o*l,this._y=i*u+s*l+o*a-r*c,this._z=o*u+s*c+r*l-i*a,this._w=s*u-r*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,s=this._w;let a=s*e._w+r*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*r+t*this._x,this._y=h*i+t*this._y,this._z=h*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=r*d+this._x*f,this._y=i*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(T0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(T0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*i,this.y=o[1]*t+o[4]*r+o[7]*i,this.z=o[2]*t+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,o=e.elements,s=1/(o[3]*t+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*i+o[12])*s,this.y=(o[1]*t+o[5]*r+o[9]*i+o[13])*s,this.z=(o[2]*t+o[6]*r+o[10]*i+o[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*i-a*r),u=2*(a*t-o*i),d=2*(o*r-s*t);return this.x=t+l*c+s*d-a*u,this.y=r+l*u+a*c-o*d,this.z=i+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*i,this.y=o[1]*t+o[5]*r+o[9]*i,this.z=o[2]*t+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-o*a,this.y=o*s-r*l,this.z=r*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Tf.copy(this).projectOnVector(e),this.sub(Tf)}reflect(e){return this.sub(Tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tf=new K,T0=new Is;class Xc{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Yr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Yr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Yr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Yr):Yr.fromBufferAttribute(o,s),Yr.applyMatrix4(e.matrixWorld),this.expandByPoint(Yr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tu.copy(r.boundingBox)),tu.applyMatrix4(e.matrixWorld),this.union(tu)}const i=e.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yr),Yr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),nu.subVectors(this.max,pl),Ks.subVectors(e.a,pl),Zs.subVectors(e.b,pl),Js.subVectors(e.c,pl),fo.subVectors(Zs,Ks),ho.subVectors(Js,Zs),Jo.subVectors(Ks,Js);let t=[0,-fo.z,fo.y,0,-ho.z,ho.y,0,-Jo.z,Jo.y,fo.z,0,-fo.x,ho.z,0,-ho.x,Jo.z,0,-Jo.x,-fo.y,fo.x,0,-ho.y,ho.x,0,-Jo.y,Jo.x,0];return!Af(t,Ks,Zs,Js,nu)||(t=[1,0,0,0,1,0,0,0,1],!Af(t,Ks,Zs,Js,nu))?!1:(ru.crossVectors(fo,ho),t=[ru.x,ru.y,ru.z],Af(t,Ks,Zs,Js,nu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new K,new K,new K,new K,new K,new K,new K,new K],Yr=new K,tu=new Xc,Ks=new K,Zs=new K,Js=new K,fo=new K,ho=new K,Jo=new K,pl=new K,nu=new K,ru=new K,Qo=new K;function Af(n,e,t,r,i){for(let o=0,s=n.length-3;o<=s;o+=3){Qo.fromArray(n,o);const a=i.x*Math.abs(Qo.x)+i.y*Math.abs(Qo.y)+i.z*Math.abs(Qo.z),l=e.dot(Qo),c=t.dot(Qo),u=r.dot(Qo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const GE=new Xc,ml=new K,Rf=new K;class Kd{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):GE.setFromPoints(e).getCenter(r);let i=0;for(let o=0,s=e.length;o<s;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const t=ml.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(ml,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(Rf)),this.expandByPoint(ml.copy(e.center).sub(Rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new K,Pf=new K,iu=new K,po=new K,kf=new K,ou=new K,Df=new K;class km{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){Pf.copy(e).add(t).multiplyScalar(.5),iu.copy(t).sub(e).normalize(),po.copy(this.origin).sub(Pf);const o=e.distanceTo(t)*.5,s=-this.direction.dot(iu),a=po.dot(this.direction),l=-po.dot(iu),c=po.lengthSq(),u=Math.abs(1-s*s);let d,f,h,g;if(u>0)if(d=s*l-a,f=s*a-l,g=o*u,d>=0)if(f>=-g)if(f<=g){const m=1/u;d*=m,f*=m,h=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-o,-l),o),h=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Pf).addScaledVector(iu,f),h}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),i=Ui.dot(Ui)-r*r,o=e.radius*e.radius;if(i>o)return null;const s=Math.sqrt(o-i),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||o>i||((o>r||isNaN(r))&&(r=o),(s<i||isNaN(i))&&(i=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,r,i,o){kf.subVectors(t,e),ou.subVectors(r,e),Df.crossVectors(kf,ou);let s=this.direction.dot(Df),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;po.subVectors(this.origin,e);const l=a*this.direction.dot(ou.crossVectors(po,ou));if(l<0)return null;const c=a*this.direction.dot(kf.cross(po));if(c<0||l+c>s)return null;const u=-a*po.dot(Df);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,r,i,o,s,a,l,c,u,d,f,h,g,m,_){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,o,s,a,l,c,u,d,f,h,g,m,_)}set(e,t,r,i,o,s,a,l,c,u,d,f,h,g,m,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=i,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=m,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/Qs.setFromMatrixColumn(e,0).length(),o=1/Qs.setFromMatrixColumn(e,1).length(),s=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,o=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,h=s*d,g=a*u,m=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+h*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,m=c*d;t[0]=f+m*a,t[4]=g*a-h,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=h*a-g,t[6]=m+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,m=c*d;t[0]=f-m*a,t[4]=-s*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*u,t[9]=m-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,h=s*d,g=a*u,m=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+m,t[1]=l*d,t[5]=m*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,h=s*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*d,t[8]=g*d+h,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-m*d}else if(e.order==="XZY"){const f=s*l,h=s*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+m,t[5]=s*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($E,e,WE)}lookAt(e,t,r){const i=this.elements;return br.subVectors(e,t),br.lengthSq()===0&&(br.z=1),br.normalize(),mo.crossVectors(r,br),mo.lengthSq()===0&&(Math.abs(r.z)===1?br.x+=1e-4:br.z+=1e-4,br.normalize(),mo.crossVectors(r,br)),mo.normalize(),su.crossVectors(br,mo),i[0]=mo.x,i[4]=su.x,i[8]=br.x,i[1]=mo.y,i[5]=su.y,i[9]=br.y,i[2]=mo.z,i[6]=su.z,i[10]=br.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,o=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],u=r[1],d=r[5],f=r[9],h=r[13],g=r[2],m=r[6],_=r[10],p=r[14],S=r[3],v=r[7],b=r[11],T=r[15],R=i[0],E=i[4],D=i[8],y=i[12],x=i[1],I=i[5],O=i[9],F=i[13],X=i[2],J=i[6],W=i[10],V=i[14],H=i[3],de=i[7],B=i[11],me=i[15];return o[0]=s*R+a*x+l*X+c*H,o[4]=s*E+a*I+l*J+c*de,o[8]=s*D+a*O+l*W+c*B,o[12]=s*y+a*F+l*V+c*me,o[1]=u*R+d*x+f*X+h*H,o[5]=u*E+d*I+f*J+h*de,o[9]=u*D+d*O+f*W+h*B,o[13]=u*y+d*F+f*V+h*me,o[2]=g*R+m*x+_*X+p*H,o[6]=g*E+m*I+_*J+p*de,o[10]=g*D+m*O+_*W+p*B,o[14]=g*y+m*F+_*V+p*me,o[3]=S*R+v*x+b*X+T*H,o[7]=S*E+v*I+b*J+T*de,o[11]=S*D+v*O+b*W+T*B,o[15]=S*y+v*F+b*V+T*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],m=e[7],_=e[11],p=e[15];return g*(+o*l*d-i*c*d-o*a*f+r*c*f+i*a*h-r*l*h)+m*(+t*l*h-t*c*f+o*s*f-i*s*h+i*c*u-o*l*u)+_*(+t*c*d-t*a*h-o*s*d+r*s*h+o*a*u-r*c*u)+p*(-i*a*u-t*l*d+t*a*f+i*s*d-r*s*f+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],m=e[13],_=e[14],p=e[15],S=d*_*c-m*f*c+m*l*h-a*_*h-d*l*p+a*f*p,v=g*f*c-u*_*c-g*l*h+s*_*h+u*l*p-s*f*p,b=u*m*c-g*d*c+g*a*h-s*m*h-u*a*p+s*d*p,T=g*d*l-u*m*l-g*a*f+s*m*f+u*a*_-s*d*_,R=t*S+r*v+i*b+o*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=S*E,e[1]=(m*f*o-d*_*o-m*i*h+r*_*h+d*i*p-r*f*p)*E,e[2]=(a*_*o-m*l*o+m*i*c-r*_*c-a*i*p+r*l*p)*E,e[3]=(d*l*o-a*f*o-d*i*c+r*f*c+a*i*h-r*l*h)*E,e[4]=v*E,e[5]=(u*_*o-g*f*o+g*i*h-t*_*h-u*i*p+t*f*p)*E,e[6]=(g*l*o-s*_*o-g*i*c+t*_*c+s*i*p-t*l*p)*E,e[7]=(s*f*o-u*l*o+u*i*c-t*f*c-s*i*h+t*l*h)*E,e[8]=b*E,e[9]=(g*d*o-u*m*o-g*r*h+t*m*h+u*r*p-t*d*p)*E,e[10]=(s*m*o-g*a*o+g*r*c-t*m*c-s*r*p+t*a*p)*E,e[11]=(u*a*o-s*d*o-u*r*c+t*d*c+s*r*h-t*a*h)*E,e[12]=T*E,e[13]=(u*m*i-g*d*i+g*r*f-t*m*f-u*r*_+t*d*_)*E,e[14]=(g*a*i-s*m*i-g*r*l+t*m*l+s*r*_-t*a*_)*E,e[15]=(s*d*i-u*a*i+u*r*l-t*d*l-s*r*f+t*a*f)*E,this}scale(e){const t=this.elements,r=e.x,i=e.y,o=e.z;return t[0]*=r,t[4]*=i,t[8]*=o,t[1]*=r,t[5]*=i,t[9]*=o,t[2]*=r,t[6]*=i,t[10]*=o,t[3]*=r,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),o=1-r,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*s,0,c*l-i*a,u*l+i*s,o*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,o,s){return this.set(1,r,o,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,h=o*u,g=o*d,m=s*u,_=s*d,p=a*d,S=l*c,v=l*u,b=l*d,T=r.x,R=r.y,E=r.z;return i[0]=(1-(m+p))*T,i[1]=(h+b)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(h-b)*R,i[5]=(1-(f+p))*R,i[6]=(_+S)*R,i[7]=0,i[8]=(g+v)*E,i[9]=(_-S)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let o=Qs.set(i[0],i[1],i[2]).length();const s=Qs.set(i[4],i[5],i[6]).length(),a=Qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],qr.copy(this);const c=1/o,u=1/s,d=1/a;return qr.elements[0]*=c,qr.elements[1]*=c,qr.elements[2]*=c,qr.elements[4]*=u,qr.elements[5]*=u,qr.elements[6]*=u,qr.elements[8]*=d,qr.elements[9]*=d,qr.elements[10]*=d,t.setFromRotationMatrix(qr),r.x=o,r.y=s,r.z=a,this}makePerspective(e,t,r,i,o,s,a=Zi){const l=this.elements,c=2*o/(t-e),u=2*o/(r-i),d=(t+e)/(t-e),f=(r+i)/(r-i);let h,g;if(a===Zi)h=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===_d)h=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,i,o,s,a=Zi){const l=this.elements,c=1/(t-e),u=1/(r-i),d=1/(s-o),f=(t+e)*c,h=(r+i)*u;let g,m;if(a===Zi)g=(s+o)*d,m=-2*d;else if(a===_d)g=o*d,m=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Qs=new K,qr=new Gt,$E=new K(0,0,0),WE=new K(1,1,1),mo=new K,su=new K,br=new K,A0=new Gt,R0=new Is;class Xr{constructor(e=0,t=0,r=0,i=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,o=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return A0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(A0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return R0.setFromEuler(this),this.setFromQuaternion(R0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class Dm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XE=0;const P0=new K,ea=new Is,Ni=new Gt,au=new K,gl=new K,jE=new K,YE=new Is,k0=new K(1,0,0),D0=new K(0,1,0),L0=new K(0,0,1),I0={type:"added"},qE={type:"removed"},ta={type:"childadded",child:null},Lf={type:"childremoved",child:null};class ir extends ol{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ir.DEFAULT_UP.clone();const e=new K,t=new Xr,r=new Is,i=new K(1,1,1);function o(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new et}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=ir.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ir.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.multiply(ea),this}rotateOnWorldAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.premultiply(ea),this}rotateX(e){return this.rotateOnAxis(k0,e)}rotateY(e){return this.rotateOnAxis(D0,e)}rotateZ(e){return this.rotateOnAxis(L0,e)}translateOnAxis(e,t){return P0.copy(e).applyQuaternion(this.quaternion),this.position.add(P0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(k0,e)}translateY(e){return this.translateOnAxis(D0,e)}translateZ(e){return this.translateOnAxis(L0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?au.copy(e):au.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(gl,au,this.up):Ni.lookAt(au,gl,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),ea.setFromRotationMatrix(Ni),this.quaternion.premultiply(ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I0),ta.child=e,this.dispatchEvent(ta),ta.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qE),Lf.child=e,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I0),ta.child=e,this.dispatchEvent(ta),ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,e,jE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,YE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),h=s(e.animations),g=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),f.length>0&&(r.skeletons=f),h.length>0&&(r.animations=h),g.length>0&&(r.nodes=g)}return r.object=i,r;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}ir.DEFAULT_UP=new K(0,1,0);ir.DEFAULT_MATRIX_AUTO_UPDATE=!0;ir.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kr=new K,Fi=new K,If=new K,zi=new K,na=new K,ra=new K,O0=new K,Of=new K,Bf=new K,Uf=new K,Nf=new kt,Ff=new kt,zf=new kt;class ri{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),Kr.subVectors(e,t),i.cross(Kr);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,r,i,o){Kr.subVectors(i,t),Fi.subVectors(r,t),If.subVectors(e,t);const s=Kr.dot(Kr),a=Kr.dot(Fi),l=Kr.dot(If),c=Fi.dot(Fi),u=Fi.dot(If),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(s*u-a*l)*f;return o.set(1-h-g,g,h)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,r,i,o,s,a,l){return this.getBarycoord(e,t,r,i,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,zi.x),l.addScaledVector(s,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,t,r,i,o,s){return Nf.setScalar(0),Ff.setScalar(0),zf.setScalar(0),Nf.fromBufferAttribute(e,t),Ff.fromBufferAttribute(e,r),zf.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Nf,o.x),s.addScaledVector(Ff,o.y),s.addScaledVector(zf,o.z),s}static isFrontFacing(e,t,r,i){return Kr.subVectors(r,t),Fi.subVectors(e,t),Kr.cross(Fi).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kr.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),Kr.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,i,o){return ri.getInterpolation(e,this.a,this.b,this.c,t,r,i,o)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,o=this.c;let s,a;na.subVectors(i,r),ra.subVectors(o,r),Of.subVectors(e,r);const l=na.dot(Of),c=ra.dot(Of);if(l<=0&&c<=0)return t.copy(r);Bf.subVectors(e,i);const u=na.dot(Bf),d=ra.dot(Bf);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(na,s);Uf.subVectors(e,o);const h=na.dot(Uf),g=ra.dot(Uf);if(g>=0&&h<=g)return t.copy(o);const m=h*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(r).addScaledVector(ra,a);const _=u*g-h*d;if(_<=0&&d-u>=0&&h-g>=0)return O0.subVectors(o,i),a=(d-u)/(d-u+(h-g)),t.copy(i).addScaledVector(O0,a);const p=1/(_+m+f);return s=m*p,a=f*p,t.copy(r).addScaledVector(na,s).addScaledVector(ra,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const L1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},go={h:0,s:0,l:0},lu={h:0,s:0,l:0};function Hf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ft{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,yt.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=yt.workingColorSpace){if(e=Pm(e,1),t=dt(t,0,1),r=dt(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,s=2*r-o;this.r=Hf(s,o,e+1/3),this.g=Hf(s,o,e),this.b=Hf(s,o,e-1/3)}return yt.toWorkingColorSpace(this,i),this}setStyle(e,t=Sr){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sr){const r=L1[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sr){return yt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(dt(Rn.r*255,0,255))*65536+Math.round(dt(Rn.g*255,0,255))*256+Math.round(dt(Rn.b*255,0,255))}getHexString(e=Sr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Rn.copy(this),t);const r=Rn.r,i=Rn.g,o=Rn.b,s=Math.max(r,i,o),a=Math.min(r,i,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case r:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-r)/d+2;break;case o:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Sr){yt.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,r=Rn.g,i=Rn.b;return e!==Sr?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(go),this.setHSL(go.h+e,go.s+t,go.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(go),e.getHSL(lu);const r=Wl(go.h,lu.h,t),i=Wl(go.s,lu.s,t),o=Wl(go.l,lu.l,t);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*i,this.g=o[1]*t+o[4]*r+o[7]*i,this.b=o[2]*t+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new ft;ft.NAMES=L1;let KE=0;class al extends ol{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=Da,this.side=Fo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Bh,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Da&&(r.blending=this.blending),this.side!==Fo&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Oh&&(r.blendSrc=this.blendSrc),this.blendDst!==Bh&&(r.blendDst=this.blendDst),this.blendEquation!==hs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=i(e.textures),s=i(e.images);o.length>0&&(r.textures=o),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class I1 extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=g1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new K,cu=new _t;class Ti{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=x0,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)cu.fromBufferAttribute(this,t),cu.applyMatrix3(e),this.setXY(t,cu.x,cu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ma(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),i=Gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,o){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),i=Gn(i,this.array),o=Gn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x0&&(e.usage=this.usage),e}}class O1 extends Ti{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class B1 extends Ti{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class or extends Ti{constructor(e,t,r){super(new Float32Array(e),t,r)}}let ZE=0;const Ur=new Gt,Vf=new ir,ia=new K,vr=new Xc,_l=new Xc,vn=new K;class ui extends ol{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P1(e)?B1:O1)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new et().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ur.makeRotationFromQuaternion(e),this.applyMatrix4(Ur),this}rotateX(e){return Ur.makeRotationX(e),this.applyMatrix4(Ur),this}rotateY(e){return Ur.makeRotationY(e),this.applyMatrix4(Ur),this}rotateZ(e){return Ur.makeRotationZ(e),this.applyMatrix4(Ur),this}translate(e,t,r){return Ur.makeTranslation(e,t,r),this.applyMatrix4(Ur),this}scale(e,t,r){return Ur.makeScale(e,t,r),this.applyMatrix4(Ur),this}lookAt(e){return Vf.lookAt(e),Vf.updateMatrix(),this.applyMatrix4(Vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let i=0,o=e.length;i<o;i++){const s=e[i];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new or(r,3))}else{const r=Math.min(e.length,t.count);for(let i=0;i<r;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const o=t[r];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,vr.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,vr.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(vr.min),this.boundingBox.expandByPoint(vr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(vr.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];_l.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(vr.min,_l.min),vr.expandByPoint(vn),vn.addVectors(vr.max,_l.max),vr.expandByPoint(vn)):(vr.expandByPoint(_l.min),vr.expandByPoint(_l.max))}vr.getCenter(r);let i=0;for(let o=0,s=e.count;o<s;o++)vn.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(vn));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vn.fromBufferAttribute(a,c),l&&(ia.fromBufferAttribute(e,c),vn.add(ia)),i=Math.max(i,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<r.count;D++)a[D]=new K,l[D]=new K;const c=new K,u=new K,d=new K,f=new _t,h=new _t,g=new _t,m=new K,_=new K;function p(D,y,x){c.fromBufferAttribute(r,D),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,x),f.fromBufferAttribute(o,D),h.fromBufferAttribute(o,y),g.fromBufferAttribute(o,x),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(I),_.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[D].add(m),a[y].add(m),a[x].add(m),l[D].add(_),l[y].add(_),l[x].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,y=S.length;D<y;++D){const x=S[D],I=x.start,O=x.count;for(let F=I,X=I+O;F<X;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new K,b=new K,T=new K,R=new K;function E(D){T.fromBufferAttribute(i,D),R.copy(T);const y=a[D];v.copy(y),v.sub(T.multiplyScalar(T.dot(y))).normalize(),b.crossVectors(R,y);const I=b.dot(l[D])<0?-1:1;s.setXYZW(D,v.x,v.y,v.z,I)}for(let D=0,y=S.length;D<y;++D){const x=S[D],I=x.start,O=x.count;for(let F=I,X=I+O;F<X;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,h=r.count;f<h;f++)r.setXYZ(f,0,0,0);const i=new K,o=new K,s=new K,a=new K,l=new K,c=new K,u=new K,d=new K;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),m=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),a.fromBufferAttribute(r,g),l.fromBufferAttribute(r,m),c.fromBufferAttribute(r,_),a.add(u),l.add(u),c.add(u),r.setXYZ(g,a.x,a.y,a.z),r.setXYZ(m,l.x,l.y,l.z),r.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let m=0,_=l.length;m<_;m++){a.isInterleavedBufferAttribute?h=l[m]*a.data.stride+a.offset:h=l[m]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new Ti(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,r);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const B0=new Gt,es=new km,uu=new Kd,U0=new K,du=new K,fu=new K,hu=new K,Gf=new K,pu=new K,N0=new K,mu=new K;class oi extends ir{constructor(e=new ui,t=new I1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){pu.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Gf.fromBufferAttribute(d,e),s?pu.addScaledVector(Gf,u):pu.addScaledVector(Gf.sub(t),u))}t.add(pu)}return t}raycast(e,t){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(o),es.copy(e.ray).recast(e.near),!(uu.containsPoint(es.origin)===!1&&(es.intersectSphere(uu,U0)===null||es.origin.distanceToSquared(U0)>(e.far-e.near)**2))&&(B0.copy(o).invert(),es.copy(e.ray).applyMatrix4(B0),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,r){let i;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,m=f.length;g<m;g++){const _=f[g],p=s[_.materialIndex],S=Math.max(_.start,h.start),v=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let b=S,T=v;b<T;b+=3){const R=a.getX(b),E=a.getX(b+1),D=a.getX(b+2);i=gu(this,p,e,r,c,u,d,R,E,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),m=Math.min(a.count,h.start+h.count);for(let _=g,p=m;_<p;_+=3){const S=a.getX(_),v=a.getX(_+1),b=a.getX(_+2);i=gu(this,s,e,r,c,u,d,S,v,b),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,m=f.length;g<m;g++){const _=f[g],p=s[_.materialIndex],S=Math.max(_.start,h.start),v=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let b=S,T=v;b<T;b+=3){const R=b,E=b+1,D=b+2;i=gu(this,p,e,r,c,u,d,R,E,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let _=g,p=m;_<p;_+=3){const S=_,v=_+1,b=_+2;i=gu(this,s,e,r,c,u,d,S,v,b),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function JE(n,e,t,r,i,o,s,a){let l;if(e.side===cr?l=r.intersectTriangle(s,o,i,!0,a):l=r.intersectTriangle(i,o,s,e.side===Fo,a),l===null)return null;mu.copy(a),mu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(mu);return c<t.near||c>t.far?null:{distance:c,point:mu.clone(),object:n}}function gu(n,e,t,r,i,o,s,a,l,c){n.getVertexPosition(a,du),n.getVertexPosition(l,fu),n.getVertexPosition(c,hu);const u=JE(n,e,t,r,du,fu,hu,N0);if(u){const d=new K;ri.getBarycoord(N0,du,fu,hu,d),i&&(u.uv=ri.getInterpolatedAttribute(i,a,l,c,d,new _t)),o&&(u.uv1=ri.getInterpolatedAttribute(o,a,l,c,d,new _t)),s&&(u.normal=ri.getInterpolatedAttribute(s,a,l,c,d,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new K,materialIndex:0};ri.getNormal(du,fu,hu,f.normal),u.face=f,u.barycoord=d}return u}class jc extends ui{constructor(e=1,t=1,r=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:o,depthSegments:s};const a=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,r,t,e,s,o,0),g("z","y","x",1,-1,r,t,-e,s,o,1),g("x","z","y",1,1,e,r,t,i,s,2),g("x","z","y",1,-1,e,r,-t,i,s,3),g("x","y","z",1,-1,e,t,r,i,o,4),g("x","y","z",-1,-1,e,t,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new or(c,3)),this.setAttribute("normal",new or(u,3)),this.setAttribute("uv",new or(d,2));function g(m,_,p,S,v,b,T,R,E,D,y){const x=b/E,I=T/D,O=b/2,F=T/2,X=R/2,J=E+1,W=D+1;let V=0,H=0;const de=new K;for(let B=0;B<W;B++){const me=B*I-F;for(let Ce=0;Ce<J;Ce++){const Ge=Ce*x-O;de[m]=Ge*S,de[_]=me*v,de[p]=X,c.push(de.x,de.y,de.z),de[m]=0,de[_]=0,de[p]=R>0?1:-1,u.push(de.x,de.y,de.z),d.push(Ce/E),d.push(1-B/D),V+=1}}for(let B=0;B<D;B++)for(let me=0;me<E;me++){const Ce=f+me+J*B,Ge=f+me+J*(B+1),re=f+(me+1)+J*(B+1),he=f+(me+1)+J*B;l.push(Ce,Ge,he),l.push(Ge,re,he),H+=6}a.addGroup(h,H,y),h+=H,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Za(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function Wn(n){const e={};for(let t=0;t<n.length;t++){const r=Za(n[t]);for(const i in r)e[i]=r[i]}return e}function QE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function U1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const e2={clone:Za,merge:Wn};var t2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zo extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t2,this.fragmentShader=n2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class N1 extends ir{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _o=new K,F0=new _t,z0=new _t;class Mr extends N1{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){_o.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_o.x,_o.y).multiplyScalar(-e/_o.z),_o.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_o.x,_o.y).multiplyScalar(-e/_o.z)}getViewSize(e,t){return this.getViewBounds(e,F0,z0),t.subVectors(z0,F0)}setViewOffset(e,t,r,i,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($l*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,o=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*i/l,t-=s.offsetY*r/c,i*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oa=-90,sa=1;class r2 extends ir{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mr(oa,sa,e,t);i.layers=this.layers,this.add(i);const o=new Mr(oa,sa,e,t);o.layers=this.layers,this.add(o);const s=new Mr(oa,sa,e,t);s.layers=this.layers,this.add(s);const a=new Mr(oa,sa,e,t);a.layers=this.layers,this.add(a);const l=new Mr(oa,sa,e,t);l.layers=this.layers,this.add(l);const c=new Mr(oa,sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===Zi)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_d)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,o),e.setRenderTarget(r,1,i),e.render(t,s),e.setRenderTarget(r,2,i),e.render(t,a),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,c),r.texture.generateMipmaps=m,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class F1 extends rr{constructor(e,t,r,i,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xa,super(e,t,r,i,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i2 extends Ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new F1(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jc(5,5,5),o=new zo({name:"CubemapFromEquirect",uniforms:Za(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:cr,blending:Do});o.uniforms.tEquirect.value=t;const s=new oi(i,o),a=t.minFilter;return t.minFilter===gs&&(t.minFilter=Si),new r2(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(o)}}class o2 extends ir{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $f=new K,s2=new K,a2=new et;class as{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=$f.subVectors(r,t).cross(s2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta($f),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||a2.getNormalMatrix(e),i=this.coplanarPoint($f).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Kd,_u=new K;class Lm{constructor(e=new as,t=new as,r=new as,i=new as,o=new as,s=new as){this.planes=[e,t,r,i,o,s]}set(e,t,r,i,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(i),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Zi){const r=this.planes,i=e.elements,o=i[0],s=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],g=i[9],m=i[10],_=i[11],p=i[12],S=i[13],v=i[14],b=i[15];if(r[0].setComponents(l-o,f-c,_-h,b-p).normalize(),r[1].setComponents(l+o,f+c,_+h,b+p).normalize(),r[2].setComponents(l+s,f+u,_+g,b+S).normalize(),r[3].setComponents(l-s,f-u,_-g,b-S).normalize(),r[4].setComponents(l-a,f-d,_-m,b-v).normalize(),t===Zi)r[5].setComponents(l+a,f+d,_+m,b+v).normalize();else if(t===_d)r[5].setComponents(a,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(_u.x=i.normal.x>0?e.max.x:e.min.x,_u.y=i.normal.y>0?e.max.y:e.min.y,_u.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_u)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class z1 extends al{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bd=new K,vd=new K,H0=new Gt,bl=new km,bu=new Kd,Wf=new K,V0=new K;class l2 extends ir{constructor(e=new ui,t=new z1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let i=1,o=t.count;i<o;i++)bd.fromBufferAttribute(t,i-1),vd.fromBufferAttribute(t,i),r[i]=r[i-1],r[i]+=bd.distanceTo(vd);e.setAttribute("lineDistance",new or(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bu.copy(r.boundingSphere),bu.applyMatrix4(i),bu.radius+=o,e.ray.intersectsSphere(bu)===!1)return;H0.copy(i).invert(),bl.copy(e.ray).applyMatrix4(H0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=r.index,f=r.attributes.position;if(u!==null){const h=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let m=h,_=g-1;m<_;m+=c){const p=u.getX(m),S=u.getX(m+1),v=vu(this,e,bl,l,p,S);v&&t.push(v)}if(this.isLineLoop){const m=u.getX(g-1),_=u.getX(h),p=vu(this,e,bl,l,m,_);p&&t.push(p)}}else{const h=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let m=h,_=g-1;m<_;m+=c){const p=vu(this,e,bl,l,m,m+1);p&&t.push(p)}if(this.isLineLoop){const m=vu(this,e,bl,l,g-1,h);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function vu(n,e,t,r,i,o){const s=n.geometry.attributes.position;if(bd.fromBufferAttribute(s,i),vd.fromBufferAttribute(s,o),t.distanceSqToSegment(bd,vd,Wf,V0)>r)return;Wf.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wf);if(!(l<e.near||l>e.far))return{distance:l,point:V0.clone().applyMatrix4(n.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:n}}class c2 extends l2{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _s extends ir{constructor(){super(),this.isGroup=!0,this.type="Group"}}class H1 extends rr{constructor(e,t,r,i,o,s,a,l,c,u=La){if(u!==La&&u!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===La&&(r=Ds),r===void 0&&u===qa&&(r=Ya),super(null,i,o,s,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zd extends ui{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const o=e/2,s=t/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],m=[],_=[];for(let p=0;p<u;p++){const S=p*f-s;for(let v=0;v<c;v++){const b=v*d-o;g.push(b,-S,0),m.push(0,0,1),_.push(v/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const v=S+c*p,b=S+c*(p+1),T=S+1+c*(p+1),R=S+1+c*p;h.push(v,b,R),h.push(b,T,R)}this.setIndex(h),this.setAttribute("position",new or(g,3)),this.setAttribute("normal",new or(m,3)),this.setAttribute("uv",new or(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.width,e.height,e.widthSegments,e.heightSegments)}}class Im extends ui{constructor(e=.5,t=1,r=32,i=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:i,thetaStart:o,thetaLength:s},r=Math.max(3,r),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let d=e;const f=(t-e)/i,h=new K,g=new _t;for(let m=0;m<=i;m++){for(let _=0;_<=r;_++){const p=o+_/r*s;h.x=d*Math.cos(p),h.y=d*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let m=0;m<i;m++){const _=m*(r+1);for(let p=0;p<r;p++){const S=p+_,v=S,b=S+r+1,T=S+r+2,R=S+1;a.push(v,b,R),a.push(b,T,R)}}this.setIndex(a),this.setAttribute("position",new or(l,3)),this.setAttribute("normal",new or(c,3)),this.setAttribute("uv",new or(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Im(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Om extends ui{constructor(e=1,t=32,r=16,i=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+a,Math.PI);let c=0;const u=[],d=new K,f=new K,h=[],g=[],m=[],_=[];for(let p=0;p<=r;p++){const S=[],v=p/r;let b=0;p===0&&s===0?b=.5/t:p===r&&l===Math.PI&&(b=-.5/t);for(let T=0;T<=t;T++){const R=T/t;d.x=-e*Math.cos(i+R*o)*Math.sin(s+v*a),d.y=e*Math.cos(s+v*a),d.z=e*Math.sin(i+R*o)*Math.sin(s+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),_.push(R+b,1-v),S.push(c++)}u.push(S)}for(let p=0;p<r;p++)for(let S=0;S<t;S++){const v=u[p][S+1],b=u[p][S],T=u[p+1][S],R=u[p+1][S+1];(p!==0||s>0)&&h.push(v,b,R),(p!==r-1||l<Math.PI)&&h.push(b,T,R)}this.setIndex(h),this.setAttribute("position",new or(g,3)),this.setAttribute("normal",new or(m,3)),this.setAttribute("uv",new or(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Om(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class G0 extends al{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A1,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class u2 extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d2 extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $0={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class f2{constructor(e,t,r){const i=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){a++,o===!1&&i.onStart!==void 0&&i.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const h2=new f2;class Bm{constructor(e){this.manager=e!==void 0?e:h2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(i,o){r.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bm.DEFAULT_MATERIAL_NAME="__DEFAULT";class p2 extends Bm{constructor(e){super(e)}load(e,t,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=$0.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=vc("img");function l(){u(),$0.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),i&&i(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class m2 extends Bm{constructor(e){super(e)}load(e,t,r,i){const o=new rr,s=new p2(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},r,i),o}}class V1 extends ir{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xf=new Gt,W0=new K,X0=new K;class g2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lm,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;W0.setFromMatrixPosition(e.matrixWorld),t.position.copy(W0),X0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(X0),t.updateMatrixWorld(),Xf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const j0=new Gt,vl=new K,jf=new K;class _2 extends g2{constructor(){super(new Mr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,i=this.matrix,o=e.distance||r.far;o!==r.far&&(r.far=o,r.updateProjectionMatrix()),vl.setFromMatrixPosition(e.matrixWorld),r.position.copy(vl),jf.copy(r.position),jf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(jf),r.updateMatrixWorld(),i.makeTranslation(-vl.x,-vl.y,-vl.z),j0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(j0)}}class b2 extends V1{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new _2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class v2 extends N1{constructor(e=-1,t=1,r=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,s=r+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class y2 extends V1{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class x2 extends Mr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class S2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Y0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Y0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Y0(){return performance.now()}const q0=new Gt;class w2{constructor(e,t,r=0,i=1/0){this.ray=new km(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new Dm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return q0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(q0),this}intersectObject(e,t=!0,r=[]){return bp(e,this,r,t),r.sort(K0),r}intersectObjects(e,t=!0,r=[]){for(let i=0,o=e.length;i<o;i++)bp(e[i],this,r,t);return r.sort(K0),r}}function K0(n,e){return n.distance-e.distance}function bp(n,e,t,r){let i=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(i=!1),i===!0&&r===!0){const o=n.children;for(let s=0,a=o.length;s<a;s++)bp(o[s],e,t,!0)}}function Z0(n,e,t,r){const i=M2(r);switch(t){case x1:return n*e;case w1:return n*e;case M1:return n*e*2;case C1:return n*e/i.components*i.byteLength;case Tm:return n*e/i.components*i.byteLength;case E1:return n*e*2/i.components*i.byteLength;case Am:return n*e*2/i.components*i.byteLength;case S1:return n*e*3/i.components*i.byteLength;case ii:return n*e*4/i.components*i.byteLength;case Rm:return n*e*4/i.components*i.byteLength;case Wu:case Xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ju:case Yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jh:case qh:return Math.max(n,16)*Math.max(e,8)/4;case Xh:case Yh:return Math.max(n,8)*Math.max(e,8)/2;case Kh:case Zh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case tp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case np:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ip:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case op:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case cp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case up:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qu:case hp:case pp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case T1:case mp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gp:case _p:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M2(n){switch(n){case ro:case b1:return{byteLength:1,components:1};case _c:case v1:case Wc:return{byteLength:2,components:1};case Cm:case Em:return{byteLength:2,components:4};case Ds:case Mm:case Ki:return{byteLength:4,components:1};case y1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G1(){let n=null,e=!1,t=null,r=null;function i(o,s){t(o,s),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function C2(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function r(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],m=d[h];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++f,d[f]=m)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const m=d[h];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:s}}var E2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F2=`#ifdef USE_IRIDESCENCE
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
#endif`,z2=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,H2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,V2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,q2=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,K2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Z2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,J2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nT="gl_FragColor = linearToOutputTexel( gl_FragColor );",rT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,oT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sT=`#ifdef USE_ENVMAP
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
#endif`,aT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
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
#endif`,cT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hT=`#ifdef USE_GRADIENTMAP
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
}`,pT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_T=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,bT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,CT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OT=`#if defined( USE_POINTS_UV )
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
#endif`,BT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,$T=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,tA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pA=`#ifdef USE_SKINNING
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
#endif`,mA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_A=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vA=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yA=`#ifdef USE_TRANSMISSION
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,MA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,DA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,IA=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FA=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zA=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,VA=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,$A=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,XA=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,YA=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,KA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,JA=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QA=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,eR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,nR=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,iR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:E2,alphahash_pars_fragment:T2,alphamap_fragment:A2,alphamap_pars_fragment:R2,alphatest_fragment:P2,alphatest_pars_fragment:k2,aomap_fragment:D2,aomap_pars_fragment:L2,batching_pars_vertex:I2,batching_vertex:O2,begin_vertex:B2,beginnormal_vertex:U2,bsdfs:N2,iridescence_fragment:F2,bumpmap_pars_fragment:z2,clipping_planes_fragment:H2,clipping_planes_pars_fragment:V2,clipping_planes_pars_vertex:G2,clipping_planes_vertex:$2,color_fragment:W2,color_pars_fragment:X2,color_pars_vertex:j2,color_vertex:Y2,common:q2,cube_uv_reflection_fragment:K2,defaultnormal_vertex:Z2,displacementmap_pars_vertex:J2,displacementmap_vertex:Q2,emissivemap_fragment:eT,emissivemap_pars_fragment:tT,colorspace_fragment:nT,colorspace_pars_fragment:rT,envmap_fragment:iT,envmap_common_pars_fragment:oT,envmap_pars_fragment:sT,envmap_pars_vertex:aT,envmap_physical_pars_fragment:bT,envmap_vertex:lT,fog_vertex:cT,fog_pars_vertex:uT,fog_fragment:dT,fog_pars_fragment:fT,gradientmap_pars_fragment:hT,lightmap_pars_fragment:pT,lights_lambert_fragment:mT,lights_lambert_pars_fragment:gT,lights_pars_begin:_T,lights_toon_fragment:vT,lights_toon_pars_fragment:yT,lights_phong_fragment:xT,lights_phong_pars_fragment:ST,lights_physical_fragment:wT,lights_physical_pars_fragment:MT,lights_fragment_begin:CT,lights_fragment_maps:ET,lights_fragment_end:TT,logdepthbuf_fragment:AT,logdepthbuf_pars_fragment:RT,logdepthbuf_pars_vertex:PT,logdepthbuf_vertex:kT,map_fragment:DT,map_pars_fragment:LT,map_particle_fragment:IT,map_particle_pars_fragment:OT,metalnessmap_fragment:BT,metalnessmap_pars_fragment:UT,morphinstance_vertex:NT,morphcolor_vertex:FT,morphnormal_vertex:zT,morphtarget_pars_vertex:HT,morphtarget_vertex:VT,normal_fragment_begin:GT,normal_fragment_maps:$T,normal_pars_fragment:WT,normal_pars_vertex:XT,normal_vertex:jT,normalmap_pars_fragment:YT,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:KT,clearcoat_pars_fragment:ZT,iridescence_pars_fragment:JT,opaque_fragment:QT,packing:eA,premultiplied_alpha_fragment:tA,project_vertex:nA,dithering_fragment:rA,dithering_pars_fragment:iA,roughnessmap_fragment:oA,roughnessmap_pars_fragment:sA,shadowmap_pars_fragment:aA,shadowmap_pars_vertex:lA,shadowmap_vertex:cA,shadowmask_pars_fragment:uA,skinbase_vertex:dA,skinning_pars_vertex:fA,skinning_vertex:hA,skinnormal_vertex:pA,specularmap_fragment:mA,specularmap_pars_fragment:gA,tonemapping_fragment:_A,tonemapping_pars_fragment:bA,transmission_fragment:vA,transmission_pars_fragment:yA,uv_pars_fragment:xA,uv_pars_vertex:SA,uv_vertex:wA,worldpos_vertex:MA,background_vert:CA,background_frag:EA,backgroundCube_vert:TA,backgroundCube_frag:AA,cube_vert:RA,cube_frag:PA,depth_vert:kA,depth_frag:DA,distanceRGBA_vert:LA,distanceRGBA_frag:IA,equirect_vert:OA,equirect_frag:BA,linedashed_vert:UA,linedashed_frag:NA,meshbasic_vert:FA,meshbasic_frag:zA,meshlambert_vert:HA,meshlambert_frag:VA,meshmatcap_vert:GA,meshmatcap_frag:$A,meshnormal_vert:WA,meshnormal_frag:XA,meshphong_vert:jA,meshphong_frag:YA,meshphysical_vert:qA,meshphysical_frag:KA,meshtoon_vert:ZA,meshtoon_frag:JA,points_vert:QA,points_frag:eR,shadow_vert:tR,shadow_frag:nR,sprite_vert:rR,sprite_frag:iR},Re={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},bi={basic:{uniforms:Wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Wn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Wn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Wn([Re.points,Re.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Wn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Wn([Re.common,Re.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Wn([Re.sprite,Re.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Wn([Re.common,Re.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Wn([Re.lights,Re.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};bi.physical={uniforms:Wn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const yu={r:0,b:0,g:0},ns=new Xr,oR=new Gt;function sR(n,e,t,r,i,o,s){const a=new ft(0);let l=o===!0?0:1,c,u,d=null,f=0,h=null;function g(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function m(v){let b=!1;const T=g(v);T===null?p(a,l):T&&T.isColor&&(p(T,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,b){const T=g(b);T&&(T.isCubeTexture||T.mapping===qd)?(u===void 0&&(u=new oi(new jc(1,1,1),new zo({name:"BackgroundCubeMaterial",uniforms:Za(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ns.copy(b.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oR.makeRotationFromEuler(ns)),u.material.toneMapped=yt.getTransfer(T.colorSpace)!==At,(d!==T||f!==T.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new oi(new Zd(2,2),new zo({name:"BackgroundMaterial",uniforms:Za(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Fo,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=yt.getTransfer(T.colorSpace)!==At,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,b){v.getRGB(yu,U1(n)),r.buffers.color.setClear(yu.r,yu.g,yu.b,b,s)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:m,addToRenderList:_,dispose:S}}function aR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},i=f(null);let o=i,s=!1;function a(x,I,O,F,X){let J=!1;const W=d(F,O,I);o!==W&&(o=W,c(o.object)),J=h(x,F,O,X),J&&g(x,F,O,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,b(x,I,O,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,I,O){const F=O.wireframe===!0;let X=r[x.id];X===void 0&&(X={},r[x.id]=X);let J=X[I.id];J===void 0&&(J={},X[I.id]=J);let W=J[F];return W===void 0&&(W=f(l()),J[F]=W),W}function f(x){const I=[],O=[],F=[];for(let X=0;X<t;X++)I[X]=0,O[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:F,object:x,attributes:{},index:null}}function h(x,I,O,F){const X=o.attributes,J=I.attributes;let W=0;const V=O.getAttributes();for(const H in V)if(V[H].location>=0){const B=X[H];let me=J[H];if(me===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),B===void 0||B.attribute!==me||me&&B.data!==me.data)return!0;W++}return o.attributesNum!==W||o.index!==F}function g(x,I,O,F){const X={},J=I.attributes;let W=0;const V=O.getAttributes();for(const H in V)if(V[H].location>=0){let B=J[H];B===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(B=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(B=x.instanceColor));const me={};me.attribute=B,B&&B.data&&(me.data=B.data),X[H]=me,W++}o.attributes=X,o.attributesNum=W,o.index=F}function m(){const x=o.newAttributes;for(let I=0,O=x.length;I<O;I++)x[I]=0}function _(x){p(x,0)}function p(x,I){const O=o.newAttributes,F=o.enabledAttributes,X=o.attributeDivisors;O[x]=1,F[x]===0&&(n.enableVertexAttribArray(x),F[x]=1),X[x]!==I&&(n.vertexAttribDivisor(x,I),X[x]=I)}function S(){const x=o.newAttributes,I=o.enabledAttributes;for(let O=0,F=I.length;O<F;O++)I[O]!==x[O]&&(n.disableVertexAttribArray(O),I[O]=0)}function v(x,I,O,F,X,J,W){W===!0?n.vertexAttribIPointer(x,I,O,X,J):n.vertexAttribPointer(x,I,O,F,X,J)}function b(x,I,O,F){m();const X=F.attributes,J=O.getAttributes(),W=I.defaultAttributeValues;for(const V in J){const H=J[V];if(H.location>=0){let de=X[V];if(de===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(de=x.instanceColor)),de!==void 0){const B=de.normalized,me=de.itemSize,Ce=e.get(de);if(Ce===void 0)continue;const Ge=Ce.buffer,re=Ce.type,he=Ce.bytesPerElement,ve=re===n.INT||re===n.UNSIGNED_INT||de.gpuType===Mm;if(de.isInterleavedBufferAttribute){const z=de.data,le=z.stride,j=de.offset;if(z.isInstancedInterleavedBuffer){for(let te=0;te<H.locationSize;te++)p(H.location+te,z.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let te=0;te<H.locationSize;te++)_(H.location+te);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let te=0;te<H.locationSize;te++)v(H.location+te,me/H.locationSize,re,B,le*he,(j+me/H.locationSize*te)*he,ve)}else{if(de.isInstancedBufferAttribute){for(let z=0;z<H.locationSize;z++)p(H.location+z,de.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let z=0;z<H.locationSize;z++)_(H.location+z);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let z=0;z<H.locationSize;z++)v(H.location+z,me/H.locationSize,re,B,me*he,me/H.locationSize*z*he,ve)}}else if(W!==void 0){const B=W[V];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(H.location,B);break;case 3:n.vertexAttrib3fv(H.location,B);break;case 4:n.vertexAttrib4fv(H.location,B);break;default:n.vertexAttrib1fv(H.location,B)}}}}S()}function T(){D();for(const x in r){const I=r[x];for(const O in I){const F=I[O];for(const X in F)u(F[X].object),delete F[X];delete I[O]}delete r[x]}}function R(x){if(r[x.id]===void 0)return;const I=r[x.id];for(const O in I){const F=I[O];for(const X in F)u(F[X].object),delete F[X];delete I[O]}delete r[x.id]}function E(x){for(const I in r){const O=r[I];if(O[x.id]===void 0)continue;const F=O[x.id];for(const X in F)u(F[X].object),delete F[X];delete O[x.id]}}function D(){y(),s=!0,o!==i&&(o=i,c(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:m,enableAttribute:_,disableUnusedAttributes:S}}function lR(n,e,t){let r;function i(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(r,c,u,d),t.update(u,r,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,r,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)s(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,d);let g=0;for(let m=0;m<d;m++)g+=u[m]*f[m];t.update(g,r,1)}}this.setMode=i,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cR(n,e,t,r){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){return!(E!==ii&&r.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const D=E===Wc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ro&&r.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ki&&!D)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:T,maxSamples:R}}function uR(n){const e=this;let t=null,r=0,i=!1,o=!1;const s=new as,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||r!==0||i;return i=f,r=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,m=d.clipIntersection,_=d.clipShadows,p=n.get(d);if(!i||g===null||g.length===0||o&&!_)o?u(null):c();else{const S=o?0:r,v=S*4;let b=p.clippingState||null;l.value=b,b=u(g,f,v,h);for(let T=0;T!==v;++T)b[T]=t[T];p.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,f,h,g){const m=d!==null?d.length:0;let _=null;if(m!==0){if(_=l.value,g!==!0||_===null){const p=h+m*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(_===null||_.length<p)&&(_=new Float32Array(p));for(let v=0,b=h;v!==m;++v,b+=4)s.copy(d[v]).applyMatrix4(S,a),s.normal.toArray(_,b),_[b+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}function dR(n){let e=new WeakMap;function t(s,a){return a===pd?s.mapping=Xa:a===$h&&(s.mapping=ja),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===pd||a===$h)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new i2(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}const ya=4,J0=[.125,.215,.35,.446,.526,.582],ps=20,Yf=new v2,Q0=new ft;let qf=null,Kf=0,Zf=0,Jf=!1;const ls=(1+Math.sqrt(5))/2,aa=1/ls,e_=[new K(-ls,aa,0),new K(ls,aa,0),new K(-aa,0,ls),new K(aa,0,ls),new K(0,ls,-aa),new K(0,ls,aa),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class t_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){qf=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qf,Kf,Zf),this._renderer.xr.enabled=Jf,e.scissorTest=!1,xu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xa||e.mapping===ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qf=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Wc,format:ii,colorSpace:Ka,depthBuffer:!1},i=n_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n_(e,t,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fR(o)),this._blurMaterial=hR(o,e,t)}return i}_compileMaterial(e){const t=new oi(this._lodPlanes[0],e);this._renderer.compile(t,Yf)}_sceneToCubeUV(e,t,r,i){const a=new Mr(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Q0),u.toneMapping=Lo,u.autoClear=!1;const h=new I1({name:"PMREM.Background",side:cr,depthWrite:!1,depthTest:!1}),g=new oi(new jc,h);let m=!1;const _=e.background;_?_.isColor&&(h.color.copy(_),e.background=null,m=!0):(h.color.copy(Q0),m=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;xu(i,S*v,p>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===Xa||e.mapping===ja;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const o=i?this._cubemapMaterial:this._equirectMaterial,s=new oi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;xu(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Yf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=e_[(i-o-1)%e_.length];this._blur(e,o-1,o,s,a)}t.autoClear=r}_blur(e,t,r,i,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",o),this._halfBlur(s,e,r,r,i,"longitudinal",o)}_halfBlur(e,t,r,i,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new oi(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[r]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*ps-1),m=o/g,_=isFinite(o)?1+Math.floor(u*m):ps;_>ps&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ps}`);const p=[];let S=0;for(let E=0;E<ps;++E){const D=E/m,y=Math.exp(-D*D/2);p.push(y),E===0?S+=y:E<_&&(S+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-r;const b=this._sizeLods[i],T=3*b*(i>v-ya?i-v+ya:0),R=4*(this._cubeSize-b);xu(t,T,R,3*b,2*b),l.setRenderTarget(t),l.render(d,Yf)}}function fR(n){const e=[],t=[],r=[];let i=n;const o=n-ya+1+J0.length;for(let s=0;s<o;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>n-ya?l=J0[s-n+ya-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,m=3,_=2,p=1,S=new Float32Array(m*g*h),v=new Float32Array(_*g*h),b=new Float32Array(p*g*h);for(let R=0;R<h;R++){const E=R%3*2/3-1,D=R>2?0:-1,y=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];S.set(y,m*g*R),v.set(f,_*g*R);const x=[R,R,R,R,R,R];b.set(x,p*g*R)}const T=new ui;T.setAttribute("position",new Ti(S,m)),T.setAttribute("uv",new Ti(v,_)),T.setAttribute("faceIndex",new Ti(b,p)),e.push(T),i>ya&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function n_(n,e,t){const r=new Ls(n,e,t);return r.texture.mapping=qd,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xu(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function hR(n,e,t){const r=new Float32Array(ps),i=new K(0,1,0);return new zo({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Um(),fragmentShader:`

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
		`,blending:Do,depthTest:!1,depthWrite:!1})}function r_(){return new zo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Um(),fragmentShader:`

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
		`,blending:Do,depthTest:!1,depthWrite:!1})}function i_(){return new zo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Do,depthTest:!1,depthWrite:!1})}function Um(){return`

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
	`}function pR(n){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===pd||l===$h,u=l===Xa||l===ja;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new t_(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new t_(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function mR(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const i=t(r);return i===null&&ga("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function gR(n,e,t,r){const i={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];const h=o.get(f);h&&(e.remove(h),o.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let m=0;if(h!==null){const S=h.array;m=h.version;for(let v=0,b=S.length;v<b;v+=3){const T=S[v+0],R=S[v+1],E=S[v+2];f.push(T,R,R,E,E,T)}}else if(g!==void 0){const S=g.array;m=g.version;for(let v=0,b=S.length/3-1;v<b;v+=3){const T=v+0,R=v+1,E=v+2;f.push(T,R,R,E,E,T)}}else return;const _=new(P1(f)?B1:O1)(f,1);_.version=m;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const f=o.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function _R(n,e,t){let r;function i(f){r=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,h){n.drawElements(r,h,o,f*s),t.update(h,r,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(r,h,o,f*s,g),t.update(h,r,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,o,f,0,g);let _=0;for(let p=0;p<g;p++)_+=h[p];t.update(_,r,1)}function d(f,h,g,m){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,h[p],m[p]);else{_.multiDrawElementsInstancedWEBGL(r,h,0,o,f,0,m,0,g);let p=0;for(let S=0;S<g;S++)p+=h[S]*m[S];t.update(p,r,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function bR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function vR(n,e,t){const r=new WeakMap,i=new kt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=r.get(a);if(f===void 0||f.count!==d){let x=function(){D.dispose(),r.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let T=a.attributes.position.count*b,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const E=new Float32Array(T*R*4*d),D=new D1(E,T,R,d);D.type=Ki,D.needsUpdate=!0;const y=b*4;for(let I=0;I<d;I++){const O=p[I],F=S[I],X=v[I],J=T*R*4*I;for(let W=0;W<O.count;W++){const V=W*y;g===!0&&(i.fromBufferAttribute(O,W),E[J+V+0]=i.x,E[J+V+1]=i.y,E[J+V+2]=i.z,E[J+V+3]=0),m===!0&&(i.fromBufferAttribute(F,W),E[J+V+4]=i.x,E[J+V+5]=i.y,E[J+V+6]=i.z,E[J+V+7]=0),_===!0&&(i.fromBufferAttribute(X,W),E[J+V+8]=i.x,E[J+V+9]=i.y,E[J+V+10]=i.z,E[J+V+11]=X.itemSize===4?i.w:1)}}f={count:d,texture:D,size:new _t(T,R)},r.set(a,f),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const m=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function yR(n,e,t,r){let i=new WeakMap;function o(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const $1=new rr,o_=new H1(1,1),W1=new D1,X1=new VE,j1=new F1,s_=[],a_=[],l_=new Float32Array(16),c_=new Float32Array(9),u_=new Float32Array(4);function ll(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let o=s_[i];if(o===void 0&&(o=new Float32Array(i),s_[i]=o),e!==0){r.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function bn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Jd(n,e){let t=a_[e];t===void 0&&(t=new Int32Array(e),a_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function xR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function SR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),bn(t,e)}}function wR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),bn(t,e)}}function MR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),bn(t,e)}}function CR(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(_n(t,r))return;u_.set(r),n.uniformMatrix2fv(this.addr,!1,u_),bn(t,r)}}function ER(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(_n(t,r))return;c_.set(r),n.uniformMatrix3fv(this.addr,!1,c_),bn(t,r)}}function TR(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(_n(t,r))return;l_.set(r),n.uniformMatrix4fv(this.addr,!1,l_),bn(t,r)}}function AR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function RR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),bn(t,e)}}function PR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),bn(t,e)}}function kR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),bn(t,e)}}function DR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function LR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),bn(t,e)}}function IR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),bn(t,e)}}function OR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),bn(t,e)}}function BR(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);let o;this.type===n.SAMPLER_2D_SHADOW?(o_.compareFunction=R1,o=o_):o=$1,t.setTexture2D(e||o,i)}function UR(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||X1,i)}function NR(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||j1,i)}function FR(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||W1,i)}function zR(n){switch(n){case 5126:return xR;case 35664:return SR;case 35665:return wR;case 35666:return MR;case 35674:return CR;case 35675:return ER;case 35676:return TR;case 5124:case 35670:return AR;case 35667:case 35671:return RR;case 35668:case 35672:return PR;case 35669:case 35673:return kR;case 5125:return DR;case 36294:return LR;case 36295:return IR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return UR;case 35680:case 36300:case 36308:case 36293:return NR;case 36289:case 36303:case 36311:case 36292:return FR}}function HR(n,e){n.uniform1fv(this.addr,e)}function VR(n,e){const t=ll(e,this.size,2);n.uniform2fv(this.addr,t)}function GR(n,e){const t=ll(e,this.size,3);n.uniform3fv(this.addr,t)}function $R(n,e){const t=ll(e,this.size,4);n.uniform4fv(this.addr,t)}function WR(n,e){const t=ll(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function XR(n,e){const t=ll(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jR(n,e){const t=ll(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function YR(n,e){n.uniform1iv(this.addr,e)}function qR(n,e){n.uniform2iv(this.addr,e)}function KR(n,e){n.uniform3iv(this.addr,e)}function ZR(n,e){n.uniform4iv(this.addr,e)}function JR(n,e){n.uniform1uiv(this.addr,e)}function QR(n,e){n.uniform2uiv(this.addr,e)}function e3(n,e){n.uniform3uiv(this.addr,e)}function t3(n,e){n.uniform4uiv(this.addr,e)}function n3(n,e,t){const r=this.cache,i=e.length,o=Jd(t,i);_n(r,o)||(n.uniform1iv(this.addr,o),bn(r,o));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||$1,o[s])}function r3(n,e,t){const r=this.cache,i=e.length,o=Jd(t,i);_n(r,o)||(n.uniform1iv(this.addr,o),bn(r,o));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||X1,o[s])}function i3(n,e,t){const r=this.cache,i=e.length,o=Jd(t,i);_n(r,o)||(n.uniform1iv(this.addr,o),bn(r,o));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||j1,o[s])}function o3(n,e,t){const r=this.cache,i=e.length,o=Jd(t,i);_n(r,o)||(n.uniform1iv(this.addr,o),bn(r,o));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||W1,o[s])}function s3(n){switch(n){case 5126:return HR;case 35664:return VR;case 35665:return GR;case 35666:return $R;case 35674:return WR;case 35675:return XR;case 35676:return jR;case 5124:case 35670:return YR;case 35667:case 35671:return qR;case 35668:case 35672:return KR;case 35669:case 35673:return ZR;case 5125:return JR;case 36294:return QR;case 36295:return e3;case 36296:return t3;case 35678:case 36198:case 36298:case 36306:case 35682:return n3;case 35679:case 36299:case 36307:return r3;case 35680:case 36300:case 36308:case 36293:return i3;case 36289:case 36303:case 36311:case 36292:return o3}}class a3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=zR(t.type)}}class l3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s3(t.type)}}class c3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let o=0,s=i.length;o!==s;++o){const a=i[o];a.setValue(e,t[a.id],r)}}}const Qf=/(\w+)(\])?(\[|\.)?/g;function d_(n,e){n.seq.push(e),n.map[e.id]=e}function u3(n,e,t){const r=n.name,i=r.length;for(Qf.lastIndex=0;;){const o=Qf.exec(r),s=Qf.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){d_(t,c===void 0?new a3(a,n,e):new l3(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new c3(a),d_(t,d)),t=d}}}class Ku{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(t,i),s=e.getUniformLocation(t,o.name);u3(o,s,this)}}setValue(e,t,r,i){const o=this.map[t];o!==void 0&&o.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,o=e.length;i!==o;++i){const s=e[i];s.id in t&&r.push(s)}return r}}function f_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const d3=37297;let f3=0;function h3(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=i;s<o;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return r.join(`
`)}const h_=new et;function p3(n){yt._getMatrix(h_,yt.workingColorSpace,n);const e=`mat3( ${h_.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case gd:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function p_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+h3(n.getShaderSource(e),s)}else return i}function m3(n,e){const t=p3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function g3(n,e){let t;switch(e){case QC:t="Linear";break;case eE:t="Reinhard";break;case tE:t="Cineon";break;case nE:t="ACESFilmic";break;case iE:t="AgX";break;case oE:t="Neutral";break;case rE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Su=new K;function _3(){yt.getLuminanceCoefficients(Su);const n=Su.x.toFixed(4),e=Su.y.toFixed(4),t=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(El).join(`
`)}function v3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function y3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=n.getActiveAttrib(e,i),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function El(n){return n!==""}function m_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x3=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(n){return n.replace(x3,w3)}const S3=new Map;function w3(n,e){let t=tt[e];if(t===void 0){const r=S3.get(e);if(r!==void 0)t=tt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return vp(t)}const M3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function __(n){return n.replace(M3,C3)}function C3(n,e,t,r){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function b_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===m1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===DC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function T3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xa:case ja:e="ENVMAP_TYPE_CUBE";break;case qd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ja:e="ENVMAP_MODE_REFRACTION";break}return e}function R3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case g1:e="ENVMAP_BLENDING_MULTIPLY";break;case ZC:e="ENVMAP_BLENDING_MIX";break;case JC:e="ENVMAP_BLENDING_ADD";break}return e}function P3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function k3(n,e,t,r){const i=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=E3(t),c=T3(t),u=A3(t),d=R3(t),f=P3(t),h=b3(t),g=v3(o),m=i.createProgram();let _,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(El).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(El).join(`
`),p.length>0&&(p+=`
`)):(_=[b_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(El).join(`
`),p=[b_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lo?"#define TONE_MAPPING":"",t.toneMapping!==Lo?tt.tonemapping_pars_fragment:"",t.toneMapping!==Lo?g3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,m3("linearToOutputTexel",t.outputColorSpace),_3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(El).join(`
`)),s=vp(s),s=m_(s,t),s=g_(s,t),a=vp(a),a=m_(a,t),a=g_(a,t),s=__(s),a=__(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===S0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===S0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+_+s,b=S+p+a,T=f_(i,i.VERTEX_SHADER,v),R=f_(i,i.FRAGMENT_SHADER,b);i.attachShader(m,T),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(I){if(n.debug.checkShaderErrors){const O=i.getProgramInfoLog(m).trim(),F=i.getShaderInfoLog(T).trim(),X=i.getShaderInfoLog(R).trim();let J=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,T,R);else{const V=p_(i,T,"vertex"),H=p_(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+V+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||X==="")&&(W=!1);W&&(I.diagnostics={runnable:J,programLog:O,vertexShader:{log:F,prefix:_},fragmentShader:{log:X,prefix:p}})}i.deleteShader(T),i.deleteShader(R),D=new Ku(i,m),y=y3(i,m)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(m,d3)),x},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f3++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}let D3=0;class L3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new I3(e),t.set(e,r)),r}}class I3{constructor(e){this.id=D3++,this.code=e,this.usedTimes=0}}function O3(n,e,t,r,i,o,s){const a=new Dm,l=new L3,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,x,I,O,F){const X=O.fog,J=F.geometry,W=y.isMeshStandardMaterial?O.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),H=V&&V.mapping===qd?V.image.height:null,de=g[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const B=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,me=B!==void 0?B.length:0;let Ce=0;J.morphAttributes.position!==void 0&&(Ce=1),J.morphAttributes.normal!==void 0&&(Ce=2),J.morphAttributes.color!==void 0&&(Ce=3);let Ge,re,he,ve;if(de){const Pe=bi[de];Ge=Pe.vertexShader,re=Pe.fragmentShader}else Ge=y.vertexShader,re=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);const z=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),j=F.isInstancedMesh===!0,te=F.isBatchedMesh===!0,be=!!y.map,P=!!y.matcap,k=!!V,M=!!y.aoMap,ne=!!y.lightMap,Z=!!y.bumpMap,L=!!y.normalMap,oe=!!y.displacementMap,ce=!!y.emissiveMap,se=!!y.metalnessMap,C=!!y.roughnessMap,w=y.anisotropy>0,U=y.clearcoat>0,Y=y.dispersion>0,q=y.iridescence>0,ee=y.sheen>0,pe=y.transmission>0,fe=w&&!!y.anisotropyMap,xe=U&&!!y.clearcoatMap,Ue=U&&!!y.clearcoatNormalMap,ge=U&&!!y.clearcoatRoughnessMap,ye=q&&!!y.iridescenceMap,Oe=q&&!!y.iridescenceThicknessMap,Ne=ee&&!!y.sheenColorMap,Se=ee&&!!y.sheenRoughnessMap,$e=!!y.specularMap,We=!!y.specularColorMap,pt=!!y.specularIntensityMap,N=pe&&!!y.transmissionMap,Me=pe&&!!y.thicknessMap,ae=!!y.gradientMap,ue=!!y.alphaMap,we=y.alphaTest>0,Ee=!!y.alphaHash,Ye=!!y.extensions;let bt=Lo;y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(bt=n.toneMapping);const Kt={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:Ge,fragmentShader:re,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:te,batchingColor:te&&F._colorsTexture!==null,instancing:j,instancingColor:j&&F.instanceColor!==null,instancingMorph:j&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ka,alphaToCoverage:!!y.alphaToCoverage,map:be,matcap:P,envMap:k,envMapMode:k&&V.mapping,envMapCubeUVHeight:H,aoMap:M,lightMap:ne,bumpMap:Z,normalMap:L,displacementMap:f&&oe,emissiveMap:ce,normalMapObjectSpace:L&&y.normalMapType===cE,normalMapTangentSpace:L&&y.normalMapType===A1,metalnessMap:se,roughnessMap:C,anisotropy:w,anisotropyMap:fe,clearcoat:U,clearcoatMap:xe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ge,dispersion:Y,iridescence:q,iridescenceMap:ye,iridescenceThicknessMap:Oe,sheen:ee,sheenColorMap:Ne,sheenRoughnessMap:Se,specularMap:$e,specularColorMap:We,specularIntensityMap:pt,transmission:pe,transmissionMap:N,thicknessMap:Me,gradientMap:ae,opaque:y.transparent===!1&&y.blending===Da&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:we,alphaHash:Ee,combine:y.combine,mapUv:be&&m(y.map.channel),aoMapUv:M&&m(y.aoMap.channel),lightMapUv:ne&&m(y.lightMap.channel),bumpMapUv:Z&&m(y.bumpMap.channel),normalMapUv:L&&m(y.normalMap.channel),displacementMapUv:oe&&m(y.displacementMap.channel),emissiveMapUv:ce&&m(y.emissiveMap.channel),metalnessMapUv:se&&m(y.metalnessMap.channel),roughnessMapUv:C&&m(y.roughnessMap.channel),anisotropyMapUv:fe&&m(y.anisotropyMap.channel),clearcoatMapUv:xe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(y.sheenRoughnessMap.channel),specularMapUv:$e&&m(y.specularMap.channel),specularColorMapUv:We&&m(y.specularColorMap.channel),specularIntensityMapUv:pt&&m(y.specularIntensityMap.channel),transmissionMapUv:N&&m(y.transmissionMap.channel),thicknessMapUv:Me&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(L||w),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(be||ue),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:le,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ce,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:be&&y.map.isVideoTexture===!0&&yt.getTransfer(y.map.colorSpace)===At,decodeVideoTextureEmissive:ce&&y.emissiveMap.isVideoTexture===!0&&yt.getTransfer(y.emissiveMap.colorSpace)===At,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===cr,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ye&&y.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&y.extensions.multiDraw===!0||te)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)x.push(I),x.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(S(x,y),v(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function S(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function b(y){const x=g[y.type];let I;if(x){const O=bi[x];I=e2.clone(O.uniforms)}else I=y.uniforms;return I}function T(y,x){let I;for(let O=0,F=u.length;O<F;O++){const X=u[O];if(X.cacheKey===x){I=X,++I.usedTimes;break}}return I===void 0&&(I=new k3(n,x,y,o),u.push(I)),I}function R(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function E(y){l.remove(y)}function D(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:b,acquireProgram:T,releaseProgram:R,releaseShaderCache:E,programs:u,dispose:D}}function B3(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function r(s){n.delete(s)}function i(s,a,l){n.get(s)[a]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:i,dispose:o}}function U3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function v_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function y_(){const n=[];let e=0;const t=[],r=[],i=[];function o(){e=0,t.length=0,r.length=0,i.length=0}function s(d,f,h,g,m,_){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:m,group:_},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=m,p.group=_),e++,p}function a(d,f,h,g,m,_){const p=s(d,f,h,g,m,_);h.transmission>0?r.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(d,f,h,g,m,_){const p=s(d,f,h,g,m,_);h.transmission>0?r.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||U3),r.length>1&&r.sort(f||v_),i.length>1&&i.sort(f||v_)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:r,transparent:i,init:o,push:a,unshift:l,finish:u,sort:c}}function N3(){let n=new WeakMap;function e(r,i){const o=n.get(r);let s;return o===void 0?(s=new y_,n.set(r,[s])):i>=o.length?(s=new y_,o.push(s)):s=o[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function F3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new ft};break;case"SpotLight":t={position:new K,direction:new K,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function z3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let H3=0;function V3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function G3(n){const e=new F3,t=z3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new K);const i=new K,o=new Gt,s=new Gt;function a(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)r.probe[y].set(0,0,0);let h=0,g=0,m=0,_=0,p=0,S=0,v=0,b=0,T=0,R=0,E=0;c.sort(V3);for(let y=0,x=c.length;y<x;y++){const I=c[y],O=I.color,F=I.intensity,X=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=O.r*F,d+=O.g*F,f+=O.b*F;else if(I.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(I.sh.coefficients[W],F);E++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,r.directionalShadow[h]=H,r.directionalShadowMap[h]=J,r.directionalShadowMatrix[h]=I.shadow.matrix,S++}r.directional[h]=W,h++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(O).multiplyScalar(F),W.distance=X,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,r.spot[m]=W;const V=I.shadow;if(I.map&&(r.spotLightMap[T]=I.map,T++,V.updateMatrices(I),I.castShadow&&R++),r.spotLightMatrix[m]=V.matrix,I.castShadow){const H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,r.spotShadow[m]=H,r.spotShadowMap[m]=J,b++}m++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(O).multiplyScalar(F),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),r.rectArea[_]=W,_++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const V=I.shadow,H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,r.pointShadow[g]=H,r.pointShadowMap[g]=J,r.pointShadowMatrix[g]=I.shadow.matrix,v++}r.point[g]=W,g++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(F),W.groundColor.copy(I.groundColor).multiplyScalar(F),r.hemi[p]=W,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=f;const D=r.hash;(D.directionalLength!==h||D.pointLength!==g||D.spotLength!==m||D.rectAreaLength!==_||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==v||D.numSpotShadows!==b||D.numSpotMaps!==T||D.numLightProbes!==E)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=_,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=b+T-R,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=E,D.directionalLength=h,D.pointLength=g,D.spotLength=m,D.rectAreaLength=_,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=v,D.numSpotShadows=b,D.numSpotMaps=T,D.numLightProbes=E,r.version=H3++)}function l(c,u){let d=0,f=0,h=0,g=0,m=0;const _=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const v=c[p];if(v.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),d++}else if(v.isSpotLight){const b=r.spot[h];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),h++}else if(v.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),s.identity(),o.copy(v.matrixWorld),o.premultiply(_),s.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const b=r.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:r}}function x_(n){const e=new G3(n),t=[],r=[];function i(u){c.camera=u,t.length=0,r.length=0}function o(u){t.push(u)}function s(u){r.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function $3(n){let e=new WeakMap;function t(i,o=0){const s=e.get(i);let a;return s===void 0?(a=new x_(n),e.set(i,[a])):o>=s.length?(a=new x_(n),s.push(a)):a=s[o],a}function r(){e=new WeakMap}return{get:t,dispose:r}}const W3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X3=`uniform sampler2D shadow_pass;
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
}`;function j3(n,e,t){let r=new Lm;const i=new _t,o=new _t,s=new kt,a=new u2({depthPacking:lE}),l=new d2,c={},u=t.maxTextureSize,d={[Fo]:cr,[cr]:Fo,[vi]:vi},f=new zo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:W3,fragmentShader:X3}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new ui;g.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new oi(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m1;let p=this.type;this.render=function(R,E,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Do),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==Vi&&this.type===Vi,X=p===Vi&&this.type!==Vi;for(let J=0,W=R.length;J<W;J++){const V=R[J],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const de=H.getFrameExtents();if(i.multiply(de),o.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/de.x),i.x=o.x*de.x,H.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/de.y),i.y=o.y*de.y,H.mapSize.y=o.y)),H.map===null||F===!0||X===!0){const me=this.type!==Vi?{minFilter:ai,magFilter:ai}:{};H.map!==null&&H.map.dispose(),H.map=new Ls(i.x,i.y,me),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const B=H.getViewportCount();for(let me=0;me<B;me++){const Ce=H.getViewport(me);s.set(o.x*Ce.x,o.y*Ce.y,o.x*Ce.z,o.y*Ce.w),O.viewport(s),H.updateMatrices(V,me),r=H.getFrustum(),b(E,D,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===Vi&&S(H,D),H.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(y,x,I)};function S(R,E){const D=e.update(m);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ls(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(E,null,D,f,m,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(E,null,D,h,m,null)}function v(R,E,D,y){let x=null;const I=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)x=I;else if(x=D.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=x.uuid,F=E.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let J=X[F];J===void 0&&(J=x.clone(),X[F]=J,E.addEventListener("dispose",T)),x=J}if(x.visible=E.visible,x.wireframe=E.wireframe,y===Vi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:d[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=n.properties.get(x);O.light=D}return x}function b(R,E,D,y,x){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Vi)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const F=e.update(R),X=R.material;if(Array.isArray(X)){const J=F.groups;for(let W=0,V=J.length;W<V;W++){const H=J[W],de=X[H.materialIndex];if(de&&de.visible){const B=v(R,de,y,x);R.onBeforeShadow(n,R,E,D,F,B,H),n.renderBufferDirect(D,null,F,B,R,H),R.onAfterShadow(n,R,E,D,F,B,H)}}}else if(X.visible){const J=v(R,X,y,x);R.onBeforeShadow(n,R,E,D,F,J,null),n.renderBufferDirect(D,null,F,J,R,null),R.onAfterShadow(n,R,E,D,F,J,null)}}const O=R.children;for(let F=0,X=O.length;F<X;F++)b(O[F],E,D,y,x)}function T(R){R.target.removeEventListener("dispose",T);for(const D in c){const y=c[D],x=R.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Y3={[Uh]:Nh,[Fh]:Vh,[zh]:Gh,[Wa]:Hh,[Nh]:Uh,[Vh]:Fh,[Gh]:zh,[Hh]:Wa};function q3(n,e){function t(){let N=!1;const Me=new kt;let ae=null;const ue=new kt(0,0,0,0);return{setMask:function(we){ae!==we&&!N&&(n.colorMask(we,we,we,we),ae=we)},setLocked:function(we){N=we},setClear:function(we,Ee,Ye,bt,Kt){Kt===!0&&(we*=bt,Ee*=bt,Ye*=bt),Me.set(we,Ee,Ye,bt),ue.equals(Me)===!1&&(n.clearColor(we,Ee,Ye,bt),ue.copy(Me))},reset:function(){N=!1,ae=null,ue.set(-1,0,0,0)}}}function r(){let N=!1,Me=!1,ae=null,ue=null,we=null;return{setReversed:function(Ee){if(Me!==Ee){const Ye=e.get("EXT_clip_control");Me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const bt=we;we=null,this.setClear(bt)}Me=Ee},getReversed:function(){return Me},setTest:function(Ee){Ee?z(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(Ee){ae!==Ee&&!N&&(n.depthMask(Ee),ae=Ee)},setFunc:function(Ee){if(Me&&(Ee=Y3[Ee]),ue!==Ee){switch(Ee){case Uh:n.depthFunc(n.NEVER);break;case Nh:n.depthFunc(n.ALWAYS);break;case Fh:n.depthFunc(n.LESS);break;case Wa:n.depthFunc(n.LEQUAL);break;case zh:n.depthFunc(n.EQUAL);break;case Hh:n.depthFunc(n.GEQUAL);break;case Vh:n.depthFunc(n.GREATER);break;case Gh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ee}},setLocked:function(Ee){N=Ee},setClear:function(Ee){we!==Ee&&(Me&&(Ee=1-Ee),n.clearDepth(Ee),we=Ee)},reset:function(){N=!1,ae=null,ue=null,we=null,Me=!1}}}function i(){let N=!1,Me=null,ae=null,ue=null,we=null,Ee=null,Ye=null,bt=null,Kt=null;return{setTest:function(Pe){N||(Pe?z(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(Pe){Me!==Pe&&!N&&(n.stencilMask(Pe),Me=Pe)},setFunc:function(Pe,Ie,Qe){(ae!==Pe||ue!==Ie||we!==Qe)&&(n.stencilFunc(Pe,Ie,Qe),ae=Pe,ue=Ie,we=Qe)},setOp:function(Pe,Ie,Qe){(Ee!==Pe||Ye!==Ie||bt!==Qe)&&(n.stencilOp(Pe,Ie,Qe),Ee=Pe,Ye=Ie,bt=Qe)},setLocked:function(Pe){N=Pe},setClear:function(Pe){Kt!==Pe&&(n.clearStencil(Pe),Kt=Pe)},reset:function(){N=!1,Me=null,ae=null,ue=null,we=null,Ee=null,Ye=null,bt=null,Kt=null}}}const o=new t,s=new r,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,m=!1,_=null,p=null,S=null,v=null,b=null,T=null,R=null,E=new ft(0,0,0),D=0,y=!1,x=null,I=null,O=null,F=null,X=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,V=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=V>=2);let de=null,B={};const me=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Ge=new kt().fromArray(me),re=new kt().fromArray(Ce);function he(N,Me,ae,ue){const we=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(N,Ee),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<ae;Ye++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Me+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Ee}const ve={};ve[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),z(n.DEPTH_TEST),s.setFunc(Wa),Z(!1),L(g0),z(n.CULL_FACE),M(Do);function z(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function le(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function j(N,Me){return d[N]!==Me?(n.bindFramebuffer(N,Me),d[N]=Me,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Me),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function te(N,Me){let ae=h,ue=!1;if(N){ae=f.get(Me),ae===void 0&&(ae=[],f.set(Me,ae));const we=N.textures;if(ae.length!==we.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Ye=we.length;Ee<Ye;Ee++)ae[Ee]=n.COLOR_ATTACHMENT0+Ee;ae.length=we.length,ue=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ae)}function be(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const P={[hs]:n.FUNC_ADD,[IC]:n.FUNC_SUBTRACT,[OC]:n.FUNC_REVERSE_SUBTRACT};P[BC]=n.MIN,P[UC]=n.MAX;const k={[NC]:n.ZERO,[FC]:n.ONE,[zC]:n.SRC_COLOR,[Oh]:n.SRC_ALPHA,[XC]:n.SRC_ALPHA_SATURATE,[$C]:n.DST_COLOR,[VC]:n.DST_ALPHA,[HC]:n.ONE_MINUS_SRC_COLOR,[Bh]:n.ONE_MINUS_SRC_ALPHA,[WC]:n.ONE_MINUS_DST_COLOR,[GC]:n.ONE_MINUS_DST_ALPHA,[jC]:n.CONSTANT_COLOR,[YC]:n.ONE_MINUS_CONSTANT_COLOR,[qC]:n.CONSTANT_ALPHA,[KC]:n.ONE_MINUS_CONSTANT_ALPHA};function M(N,Me,ae,ue,we,Ee,Ye,bt,Kt,Pe){if(N===Do){m===!0&&(le(n.BLEND),m=!1);return}if(m===!1&&(z(n.BLEND),m=!0),N!==LC){if(N!==_||Pe!==y){if((p!==hs||b!==hs)&&(n.blendEquation(n.FUNC_ADD),p=hs,b=hs),Pe)switch(N){case Da:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _0:n.blendFunc(n.ONE,n.ONE);break;case b0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case v0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case b0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case v0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,v=null,T=null,R=null,E.set(0,0,0),D=0,_=N,y=Pe}return}we=we||Me,Ee=Ee||ae,Ye=Ye||ue,(Me!==p||we!==b)&&(n.blendEquationSeparate(P[Me],P[we]),p=Me,b=we),(ae!==S||ue!==v||Ee!==T||Ye!==R)&&(n.blendFuncSeparate(k[ae],k[ue],k[Ee],k[Ye]),S=ae,v=ue,T=Ee,R=Ye),(bt.equals(E)===!1||Kt!==D)&&(n.blendColor(bt.r,bt.g,bt.b,Kt),E.copy(bt),D=Kt),_=N,y=!1}function ne(N,Me){N.side===vi?le(n.CULL_FACE):z(n.CULL_FACE);let ae=N.side===cr;Me&&(ae=!ae),Z(ae),N.blending===Da&&N.transparent===!1?M(Do):M(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),o.setMask(N.colorWrite);const ue=N.stencilWrite;a.setTest(ue),ue&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(N){x!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),x=N)}function L(N){N!==PC?(z(n.CULL_FACE),N!==I&&(N===g0?n.cullFace(n.BACK):N===kC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),I=N}function oe(N){N!==O&&(W&&n.lineWidth(N),O=N)}function ce(N,Me,ae){N?(z(n.POLYGON_OFFSET_FILL),(F!==Me||X!==ae)&&(n.polygonOffset(Me,ae),F=Me,X=ae)):le(n.POLYGON_OFFSET_FILL)}function se(N){N?z(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function C(N){N===void 0&&(N=n.TEXTURE0+J-1),de!==N&&(n.activeTexture(N),de=N)}function w(N,Me,ae){ae===void 0&&(de===null?ae=n.TEXTURE0+J-1:ae=de);let ue=B[ae];ue===void 0&&(ue={type:void 0,texture:void 0},B[ae]=ue),(ue.type!==N||ue.texture!==Me)&&(de!==ae&&(n.activeTexture(ae),de=ae),n.bindTexture(N,Me||ve[N]),ue.type=N,ue.texture=Me)}function U(){const N=B[de];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){Ge.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ge.copy(N))}function Se(N){re.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),re.copy(N))}function $e(N,Me){let ae=c.get(Me);ae===void 0&&(ae=new WeakMap,c.set(Me,ae));let ue=ae.get(N);ue===void 0&&(ue=n.getUniformBlockIndex(Me,N.name),ae.set(N,ue))}function We(N,Me){const ue=c.get(Me).get(N);l.get(Me)!==ue&&(n.uniformBlockBinding(Me,ue,N.__bindingPointIndex),l.set(Me,ue))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,B={},d={},f=new WeakMap,h=[],g=null,m=!1,_=null,p=null,S=null,v=null,b=null,T=null,R=null,E=new ft(0,0,0),D=0,y=!1,x=null,I=null,O=null,F=null,X=null,Ge.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:z,disable:le,bindFramebuffer:j,drawBuffers:te,useProgram:be,setBlending:M,setMaterial:ne,setFlipSided:Z,setCullFace:L,setLineWidth:oe,setPolygonOffset:ce,setScissorTest:se,activeTexture:C,bindTexture:w,unbindTexture:U,compressedTexImage2D:Y,compressedTexImage3D:q,texImage2D:ye,texImage3D:Oe,updateUBOMapping:$e,uniformBlockBinding:We,texStorage2D:Ue,texStorage3D:ge,texSubImage2D:ee,texSubImage3D:pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:Ne,viewport:Se,reset:pt}}function K3(n,e,t,r,i,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return h?new OffscreenCanvas(C,w):vc("canvas")}function m(C,w,U){let Y=1;const q=se(C);if((q.width>U||q.height>U)&&(Y=U/Math.max(q.width,q.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(Y*q.width),pe=Math.floor(Y*q.height);d===void 0&&(d=g(ee,pe));const fe=w?g(ee,pe):d;return fe.width=ee,fe.height=pe,fe.getContext("2d").drawImage(C,0,0,ee,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ee+"x"+pe+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function _(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,w,U,Y,q=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=w;if(w===n.RED&&(U===n.FLOAT&&(ee=n.R32F),U===n.HALF_FLOAT&&(ee=n.R16F),U===n.UNSIGNED_BYTE&&(ee=n.R8)),w===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.R8UI),U===n.UNSIGNED_SHORT&&(ee=n.R16UI),U===n.UNSIGNED_INT&&(ee=n.R32UI),U===n.BYTE&&(ee=n.R8I),U===n.SHORT&&(ee=n.R16I),U===n.INT&&(ee=n.R32I)),w===n.RG&&(U===n.FLOAT&&(ee=n.RG32F),U===n.HALF_FLOAT&&(ee=n.RG16F),U===n.UNSIGNED_BYTE&&(ee=n.RG8)),w===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RG8UI),U===n.UNSIGNED_SHORT&&(ee=n.RG16UI),U===n.UNSIGNED_INT&&(ee=n.RG32UI),U===n.BYTE&&(ee=n.RG8I),U===n.SHORT&&(ee=n.RG16I),U===n.INT&&(ee=n.RG32I)),w===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),U===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),U===n.UNSIGNED_INT&&(ee=n.RGB32UI),U===n.BYTE&&(ee=n.RGB8I),U===n.SHORT&&(ee=n.RGB16I),U===n.INT&&(ee=n.RGB32I)),w===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),U===n.UNSIGNED_INT&&(ee=n.RGBA32UI),U===n.BYTE&&(ee=n.RGBA8I),U===n.SHORT&&(ee=n.RGBA16I),U===n.INT&&(ee=n.RGBA32I)),w===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),w===n.RGBA){const pe=q?gd:yt.getTransfer(Y);U===n.FLOAT&&(ee=n.RGBA32F),U===n.HALF_FLOAT&&(ee=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ee=pe===At?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(C,w){let U;return C?w===null||w===Ds||w===Ya?U=n.DEPTH24_STENCIL8:w===Ki?U=n.DEPTH32F_STENCIL8:w===_c&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ds||w===Ya?U=n.DEPTH_COMPONENT24:w===Ki?U=n.DEPTH_COMPONENT32F:w===_c&&(U=n.DEPTH_COMPONENT16),U}function T(C,w){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==ai&&C.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){const w=C.target;w.removeEventListener("dispose",R),D(w),w.isVideoTexture&&u.delete(w)}function E(C){const w=C.target;w.removeEventListener("dispose",E),x(w)}function D(C){const w=r.get(C);if(w.__webglInit===void 0)return;const U=C.source,Y=f.get(U);if(Y){const q=Y[w.__cacheKey];q.usedTimes--,q.usedTimes===0&&y(C),Object.keys(Y).length===0&&f.delete(U)}r.remove(C)}function y(C){const w=r.get(C);n.deleteTexture(w.__webglTexture);const U=C.source,Y=f.get(U);delete Y[w.__cacheKey],s.memory.textures--}function x(C){const w=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let q=0;q<w.__webglFramebuffer[Y].length;q++)n.deleteFramebuffer(w.__webglFramebuffer[Y][q]);else n.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)n.deleteFramebuffer(w.__webglFramebuffer[Y]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const U=C.textures;for(let Y=0,q=U.length;Y<q;Y++){const ee=r.get(U[Y]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),s.memory.textures--),r.remove(U[Y])}r.remove(C)}let I=0;function O(){I=0}function F(){const C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function X(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function J(C,w){const U=r.get(C);if(C.isVideoTexture&&oe(C),C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(U,C,w);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+w)}function W(C,w){const U=r.get(C);if(C.version>0&&U.__version!==C.version){re(U,C,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+w)}function V(C,w){const U=r.get(C);if(C.version>0&&U.__version!==C.version){re(U,C,w);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+w)}function H(C,w){const U=r.get(C);if(C.version>0&&U.__version!==C.version){he(U,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+w)}const de={[md]:n.REPEAT,[ms]:n.CLAMP_TO_EDGE,[Wh]:n.MIRRORED_REPEAT},B={[ai]:n.NEAREST,[sE]:n.NEAREST_MIPMAP_NEAREST,[eu]:n.NEAREST_MIPMAP_LINEAR,[Si]:n.LINEAR,[Mf]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},me={[uE]:n.NEVER,[gE]:n.ALWAYS,[dE]:n.LESS,[R1]:n.LEQUAL,[fE]:n.EQUAL,[mE]:n.GEQUAL,[hE]:n.GREATER,[pE]:n.NOTEQUAL};function Ce(C,w){if(w.type===Ki&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===Mf||w.magFilter===eu||w.magFilter===gs||w.minFilter===Si||w.minFilter===Mf||w.minFilter===eu||w.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,de[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,de[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,de[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,B[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,B[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,me[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ai||w.minFilter!==eu&&w.minFilter!==gs||w.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ge(C,w){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",R));const Y=w.source;let q=f.get(Y);q===void 0&&(q={},f.set(Y,q));const ee=X(w);if(ee!==C.__cacheKey){q[ee]===void 0&&(q[ee]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,U=!0),q[ee].usedTimes++;const pe=q[C.__cacheKey];pe!==void 0&&(q[C.__cacheKey].usedTimes--,pe.usedTimes===0&&y(w)),C.__cacheKey=ee,C.__webglTexture=q[ee].texture}return U}function re(C,w,U){let Y=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=n.TEXTURE_3D);const q=Ge(C,w),ee=w.source;t.bindTexture(Y,C.__webglTexture,n.TEXTURE0+U);const pe=r.get(ee);if(ee.version!==pe.__version||q===!0){t.activeTexture(n.TEXTURE0+U);const fe=yt.getPrimaries(yt.workingColorSpace),xe=w.colorSpace===Mo?null:yt.getPrimaries(w.colorSpace),Ue=w.colorSpace===Mo||fe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ge=m(w.image,!1,i.maxTextureSize);ge=ce(w,ge);const ye=o.convert(w.format,w.colorSpace),Oe=o.convert(w.type);let Ne=v(w.internalFormat,ye,Oe,w.colorSpace,w.isVideoTexture);Ce(Y,w);let Se;const $e=w.mipmaps,We=w.isVideoTexture!==!0,pt=pe.__version===void 0||q===!0,N=ee.dataReady,Me=T(w,ge);if(w.isDepthTexture)Ne=b(w.format===qa,w.type),pt&&(We?t.texStorage2D(n.TEXTURE_2D,1,Ne,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ge.width,ge.height,0,ye,Oe,null));else if(w.isDataTexture)if($e.length>0){We&&pt&&t.texStorage2D(n.TEXTURE_2D,Me,Ne,$e[0].width,$e[0].height);for(let ae=0,ue=$e.length;ae<ue;ae++)Se=$e[ae],We?N&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,ye,Oe,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Ne,Se.width,Se.height,0,ye,Oe,Se.data);w.generateMipmaps=!1}else We?(pt&&t.texStorage2D(n.TEXTURE_2D,Me,Ne,ge.width,ge.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge.width,ge.height,ye,Oe,ge.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ge.width,ge.height,0,ye,Oe,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ne,$e[0].width,$e[0].height,ge.depth);for(let ae=0,ue=$e.length;ae<ue;ae++)if(Se=$e[ae],w.format!==ii)if(ye!==null)if(We){if(N)if(w.layerUpdates.size>0){const we=Z0(Se.width,Se.height,w.format,w.type);for(const Ee of w.layerUpdates){const Ye=Se.data.subarray(Ee*we/Se.data.BYTES_PER_ELEMENT,(Ee+1)*we/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Ee,Se.width,Se.height,1,ye,Ye)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,ge.depth,ye,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ne,Se.width,Se.height,ge.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,ge.depth,ye,Oe,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ne,Se.width,Se.height,ge.depth,0,ye,Oe,Se.data)}else{We&&pt&&t.texStorage2D(n.TEXTURE_2D,Me,Ne,$e[0].width,$e[0].height);for(let ae=0,ue=$e.length;ae<ue;ae++)Se=$e[ae],w.format!==ii?ye!==null?We?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,ye,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,ye,Oe,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Ne,Se.width,Se.height,0,ye,Oe,Se.data)}else if(w.isDataArrayTexture)if(We){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ne,ge.width,ge.height,ge.depth),N)if(w.layerUpdates.size>0){const ae=Z0(ge.width,ge.height,w.format,w.type);for(const ue of w.layerUpdates){const we=ge.data.subarray(ue*ae/ge.data.BYTES_PER_ELEMENT,(ue+1)*ae/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,ge.width,ge.height,1,ye,Oe,we)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ye,Oe,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ge.width,ge.height,ge.depth,0,ye,Oe,ge.data);else if(w.isData3DTexture)We?(pt&&t.texStorage3D(n.TEXTURE_3D,Me,Ne,ge.width,ge.height,ge.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ye,Oe,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ge.width,ge.height,ge.depth,0,ye,Oe,ge.data);else if(w.isFramebufferTexture){if(pt)if(We)t.texStorage2D(n.TEXTURE_2D,Me,Ne,ge.width,ge.height);else{let ae=ge.width,ue=ge.height;for(let we=0;we<Me;we++)t.texImage2D(n.TEXTURE_2D,we,Ne,ae,ue,0,ye,Oe,null),ae>>=1,ue>>=1}}else if($e.length>0){if(We&&pt){const ae=se($e[0]);t.texStorage2D(n.TEXTURE_2D,Me,Ne,ae.width,ae.height)}for(let ae=0,ue=$e.length;ae<ue;ae++)Se=$e[ae],We?N&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye,Oe,Se):t.texImage2D(n.TEXTURE_2D,ae,Ne,ye,Oe,Se);w.generateMipmaps=!1}else if(We){if(pt){const ae=se(ge);t.texStorage2D(n.TEXTURE_2D,Me,Ne,ae.width,ae.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Oe,ge)}else t.texImage2D(n.TEXTURE_2D,0,Ne,ye,Oe,ge);_(w)&&p(Y),pe.__version=ee.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function he(C,w,U){if(w.image.length!==6)return;const Y=Ge(C,w),q=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+U);const ee=r.get(q);if(q.version!==ee.__version||Y===!0){t.activeTexture(n.TEXTURE0+U);const pe=yt.getPrimaries(yt.workingColorSpace),fe=w.colorSpace===Mo?null:yt.getPrimaries(w.colorSpace),xe=w.colorSpace===Mo||pe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ue=w.isCompressedTexture||w.image[0].isCompressedTexture,ge=w.image[0]&&w.image[0].isDataTexture,ye=[];for(let ue=0;ue<6;ue++)!Ue&&!ge?ye[ue]=m(w.image[ue],!0,i.maxCubemapSize):ye[ue]=ge?w.image[ue].image:w.image[ue],ye[ue]=ce(w,ye[ue]);const Oe=ye[0],Ne=o.convert(w.format,w.colorSpace),Se=o.convert(w.type),$e=v(w.internalFormat,Ne,Se,w.colorSpace),We=w.isVideoTexture!==!0,pt=ee.__version===void 0||Y===!0,N=q.dataReady;let Me=T(w,Oe);Ce(n.TEXTURE_CUBE_MAP,w);let ae;if(Ue){We&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,$e,Oe.width,Oe.height);for(let ue=0;ue<6;ue++){ae=ye[ue].mipmaps;for(let we=0;we<ae.length;we++){const Ee=ae[we];w.format!==ii?Ne!==null?We?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Ee.width,Ee.height,Ne,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,$e,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Ee.width,Ee.height,Ne,Se,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,$e,Ee.width,Ee.height,0,Ne,Se,Ee.data)}}}else{if(ae=w.mipmaps,We&&pt){ae.length>0&&Me++;const ue=se(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,$e,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ge){We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ye[ue].width,ye[ue].height,Ne,Se,ye[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,ye[ue].width,ye[ue].height,0,Ne,Se,ye[ue].data);for(let we=0;we<ae.length;we++){const Ye=ae[we].image[ue].image;We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,Ye.width,Ye.height,Ne,Se,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,$e,Ye.width,Ye.height,0,Ne,Se,Ye.data)}}else{We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ne,Se,ye[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,Ne,Se,ye[ue]);for(let we=0;we<ae.length;we++){const Ee=ae[we];We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,Ne,Se,Ee.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,$e,Ne,Se,Ee.image[ue])}}}_(w)&&p(n.TEXTURE_CUBE_MAP),ee.__version=q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ve(C,w,U,Y,q,ee){const pe=o.convert(U.format,U.colorSpace),fe=o.convert(U.type),xe=v(U.internalFormat,pe,fe,U.colorSpace),Ue=r.get(w),ge=r.get(U);if(ge.__renderTarget=w,!Ue.__hasExternalTextures){const ye=Math.max(1,w.width>>ee),Oe=Math.max(1,w.height>>ee);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,ee,xe,ye,Oe,w.depth,0,pe,fe,null):t.texImage2D(q,ee,xe,ye,Oe,0,pe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),L(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,q,ge.__webglTexture,0,Z(w)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,q,ge.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function z(C,w,U){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){const Y=w.depthTexture,q=Y&&Y.isDepthTexture?Y.type:null,ee=b(w.stencilBuffer,q),pe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Z(w);L(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,ee,w.width,w.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ee,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,C)}else{const Y=w.textures;for(let q=0;q<Y.length;q++){const ee=Y[q],pe=o.convert(ee.format,ee.colorSpace),fe=o.convert(ee.type),xe=v(ee.internalFormat,pe,fe,ee.colorSpace),Ue=Z(w);U&&L(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,xe,w.width,w.height):L(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,xe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,xe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=r.get(w.depthTexture);Y.__renderTarget=w,(!Y.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const q=Y.__webglTexture,ee=Z(w);if(w.depthTexture.format===La)L(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(w.depthTexture.format===qa)L(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function j(C){const w=r.get(C),U=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){const q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",q)};Y.addEventListener("dispose",q),w.__depthDisposeCallback=q}w.__boundDepthTexture=Y}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,C)}else if(U){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=n.createRenderbuffer(),z(w.__webglDepthbuffer[Y],C,!1);else{const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),z(w.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(C,w,U){const Y=r.get(C);w!==void 0&&ve(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&j(C)}function be(C){const w=C.texture,U=r.get(C),Y=r.get(w);C.addEventListener("dispose",E);const q=C.textures,ee=C.isWebGLCubeRenderTarget===!0,pe=q.length>1;if(pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=w.version,s.memory.textures++),ee){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let xe=0;xe<w.mipmaps.length;xe++)U.__webglFramebuffer[fe][xe]=n.createFramebuffer()}else U.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)U.__webglFramebuffer[fe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(pe)for(let fe=0,xe=q.length;fe<xe;fe++){const Ue=r.get(q[fe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),s.memory.textures++)}if(C.samples>0&&L(C)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let fe=0;fe<q.length;fe++){const xe=q[fe];U.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[fe]);const Ue=o.convert(xe.format,xe.colorSpace),ge=o.convert(xe.type),ye=v(xe.internalFormat,Ue,ge,xe.colorSpace,C.isXRRenderTarget===!0),Oe=Z(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ye,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,U.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),z(U.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)ve(U.__webglFramebuffer[fe][xe],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else ve(U.__webglFramebuffer[fe],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(w)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let fe=0,xe=q.length;fe<xe;fe++){const Ue=q[fe],ge=r.get(Ue);t.bindTexture(n.TEXTURE_2D,ge.__webglTexture),Ce(n.TEXTURE_2D,Ue),ve(U.__webglFramebuffer,C,Ue,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),_(Ue)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),Ce(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)ve(U.__webglFramebuffer[xe],C,w,n.COLOR_ATTACHMENT0,fe,xe);else ve(U.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,fe,0);_(w)&&p(fe),t.unbindTexture()}C.depthBuffer&&j(C)}function P(C){const w=C.textures;for(let U=0,Y=w.length;U<Y;U++){const q=w[U];if(_(q)){const ee=S(C),pe=r.get(q).__webglTexture;t.bindTexture(ee,pe),p(ee),t.unbindTexture()}}}const k=[],M=[];function ne(C){if(C.samples>0){if(L(C)===!1){const w=C.textures,U=C.width,Y=C.height;let q=n.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=r.get(C),fe=w.length>1;if(fe)for(let xe=0;xe<w.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);const Ue=r.get(w[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,U,Y,0,0,U,Y,q,n.NEAREST),l===!0&&(k.length=0,M.length=0,k.push(n.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(k.push(ee),M.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<w.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);const Ue=r.get(w[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Z(C){return Math.min(i.maxSamples,C.samples)}function L(C){const w=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function oe(C){const w=s.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function ce(C,w){const U=C.colorSpace,Y=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==Ka&&U!==Mo&&(yt.getTransfer(U)===At?(Y!==ii||q!==ro)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),w}function se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=te,this.setupRenderTarget=be,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=L}function Z3(n,e){function t(r,i=Mo){let o;const s=yt.getTransfer(i);if(r===ro)return n.UNSIGNED_BYTE;if(r===Cm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Em)return n.UNSIGNED_SHORT_5_5_5_1;if(r===y1)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===b1)return n.BYTE;if(r===v1)return n.SHORT;if(r===_c)return n.UNSIGNED_SHORT;if(r===Mm)return n.INT;if(r===Ds)return n.UNSIGNED_INT;if(r===Ki)return n.FLOAT;if(r===Wc)return n.HALF_FLOAT;if(r===x1)return n.ALPHA;if(r===S1)return n.RGB;if(r===ii)return n.RGBA;if(r===w1)return n.LUMINANCE;if(r===M1)return n.LUMINANCE_ALPHA;if(r===La)return n.DEPTH_COMPONENT;if(r===qa)return n.DEPTH_STENCIL;if(r===C1)return n.RED;if(r===Tm)return n.RED_INTEGER;if(r===E1)return n.RG;if(r===Am)return n.RG_INTEGER;if(r===Rm)return n.RGBA_INTEGER;if(r===Wu||r===Xu||r===ju||r===Yu)if(s===At)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Wu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ju)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Wu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ju)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xh||r===jh||r===Yh||r===qh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Xh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kh||r===Zh||r===Jh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Kh||r===Zh)return s===At?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Jh)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qh||r===ep||r===tp||r===np||r===rp||r===ip||r===op||r===sp||r===ap||r===lp||r===cp||r===up||r===dp||r===fp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Qh)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ep)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tp)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===np)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rp)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ip)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===op)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sp)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ap)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lp)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cp)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===up)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dp)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fp)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qu||r===hp||r===pp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===qu)return s===At?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===T1||r===mp||r===gp||r===_p)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===qu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===mp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_p)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ya?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const J3={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const m of e.hand.values()){const _=t.getJointPose(m,r),p=this._getHandJoint(c,m);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J3)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new _s;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Q3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class t5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const i=new rr,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new zo({vertexShader:Q3,fragmentShader:e5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oi(new Zd(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n5 extends ol{constructor(e,t){super();const r=this;let i=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const m=new t5,_=t.getContextAttributes();let p=null,S=null;const v=[],b=[],T=new _t;let R=null;const E=new Mr;E.viewport=new kt;const D=new Mr;D.viewport=new kt;const y=[E,D],x=new x2;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=v[re];return he===void 0&&(he=new eh,v[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=v[re];return he===void 0&&(he=new eh,v[re]=he),he.getGripSpace()},this.getHand=function(re){let he=v[re];return he===void 0&&(he=new eh,v[re]=he),he.getHandSpace()};function F(re){const he=b.indexOf(re.inputSource);if(he===-1)return;const ve=v[he];ve!==void 0&&(ve.update(re.inputSource,re.frame,c||s),ve.dispatchEvent({type:re.type,data:re.inputSource}))}function X(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",J);for(let re=0;re<v.length;re++){const he=b[re];he!==null&&(b[re]=null,v[re].disconnect(he))}I=null,O=null,m.reset(),e.setRenderTarget(p),h=null,f=null,d=null,i=null,S=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){o=re,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",X),i.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ve=null,z=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=_.stencil?qa:La,z=_.stencil?Ya:Ds);const j={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:o};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(j),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ls(f.textureWidth,f.textureHeight,{format:ii,type:ro,depthTexture:new H1(f.textureWidth,f.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Ls(h.framebufferWidth,h.framebufferHeight,{format:ii,type:ro,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(re){for(let he=0;he<re.removed.length;he++){const ve=re.removed[he],z=b.indexOf(ve);z>=0&&(b[z]=null,v[z].disconnect(ve))}for(let he=0;he<re.added.length;he++){const ve=re.added[he];let z=b.indexOf(ve);if(z===-1){for(let j=0;j<v.length;j++)if(j>=b.length){b.push(ve),z=j;break}else if(b[j]===null){b[j]=ve,z=j;break}if(z===-1)break}const le=v[z];le&&le.connect(ve)}}const W=new K,V=new K;function H(re,he,ve){W.setFromMatrixPosition(he.matrixWorld),V.setFromMatrixPosition(ve.matrixWorld);const z=W.distanceTo(V),le=he.projectionMatrix.elements,j=ve.projectionMatrix.elements,te=le[14]/(le[10]-1),be=le[14]/(le[10]+1),P=(le[9]+1)/le[5],k=(le[9]-1)/le[5],M=(le[8]-1)/le[0],ne=(j[8]+1)/j[0],Z=te*M,L=te*ne,oe=z/(-M+ne),ce=oe*-M;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ce),re.translateZ(oe),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),le[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const se=te+oe,C=be+oe,w=Z-ce,U=L+(z-ce),Y=P*be/C*se,q=k*be/C*se;re.projectionMatrix.makePerspective(w,U,Y,q,se,C),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function de(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;let he=re.near,ve=re.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),x.near=D.near=E.near=he,x.far=D.far=E.far=ve,(I!==x.near||O!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,O=x.far),E.layers.mask=re.layers.mask|2,D.layers.mask=re.layers.mask|4,x.layers.mask=E.layers.mask|D.layers.mask;const z=re.parent,le=x.cameras;de(x,z);for(let j=0;j<le.length;j++)de(le[j],z);le.length===2?H(x,E,D):x.projectionMatrix.copy(E.projectionMatrix),B(re,x,z)};function B(re,he,ve){ve===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(ve.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=bc*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(x)};let me=null;function Ce(re,he){if(u=he.getViewerPose(c||s),g=he,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let z=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,z=!0);for(let j=0;j<ve.length;j++){const te=ve[j];let be=null;if(h!==null)be=h.getViewport(te);else{const k=d.getViewSubImage(f,te);be=k.viewport,j===0&&(e.setRenderTargetTextures(S,k.colorTexture,f.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(S))}let P=y[j];P===void 0&&(P=new Mr,P.layers.enable(j),P.viewport=new kt,y[j]=P),P.matrix.fromArray(te.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(te.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(be.x,be.y,be.width,be.height),j===0&&(x.matrix.copy(P.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),z===!0&&x.cameras.push(P)}const le=i.enabledFeatures;if(le&&le.includes("depth-sensing")){const j=d.getDepthInformation(ve[0]);j&&j.isValid&&j.texture&&m.init(e,j,i.renderState)}}for(let ve=0;ve<v.length;ve++){const z=b[ve],le=v[ve];z!==null&&le!==void 0&&le.update(z,he,c||s)}me&&me(re,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ge=new G1;Ge.setAnimationLoop(Ce),this.setAnimationLoop=function(re){me=re},this.dispose=function(){}}}const rs=new Xr,r5=new Gt;function i5(n,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function r(_,p){p.color.getRGB(_.fogColor.value,U1(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function i(_,p,S,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&h(_,p,b)):p.isMeshMatcapMaterial?(o(_,p),g(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),m(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,S,v):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===cr&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===cr&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const S=e.get(p),v=S.envMap,b=S.envMapRotation;v&&(_.envMap.value=v,rs.copy(b),rs.x*=-1,rs.y*=-1,rs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),_.envMapRotation.value.setFromMatrix4(r5.makeRotationFromEuler(rs)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,S,v){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*S,_.scale.value=v*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function h(_,p,S){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cr&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,p){p.matcap&&(_.matcap.value=p.matcap)}function m(_,p){const S=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function o5(n,e,t,r){let i={},o={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const b=v.program;r.uniformBlockBinding(S,b)}function c(S,v){let b=i[S.id];b===void 0&&(g(S),b=u(S),i[S.id]=b,S.addEventListener("dispose",_));const T=v.program;r.updateUBOMapping(S,T);const R=e.render.frame;o[S.id]!==R&&(f(S),o[S.id]=R)}function u(S){const v=d();S.__bindingPointIndex=v;const b=n.createBuffer(),T=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function d(){for(let S=0;S<a;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=i[S.id],b=S.uniforms,T=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,E=b.length;R<E;R++){const D=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,x=D.length;y<x;y++){const I=D[y];if(h(I,R,y,T)===!0){const O=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let J=0;J<F.length;J++){const W=F[J],V=m(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+X,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,X),X+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,v,b,T){const R=S.value,E=v+"_"+b;if(T[E]===void 0)return typeof R=="number"||typeof R=="boolean"?T[E]=R:T[E]=R.clone(),!0;{const D=T[E];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return T[E]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(S){const v=S.uniforms;let b=0;const T=16;for(let E=0,D=v.length;E<D;E++){const y=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,I=y.length;x<I;x++){const O=y[x],F=Array.isArray(O.value)?O.value:[O.value];for(let X=0,J=F.length;X<J;X++){const W=F[X],V=m(W),H=b%T,de=H%V.boundary,B=H+de;b+=de,B!==0&&T-B<V.storage&&(b+=T-B),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=V.storage}}}const R=b%T;return R>0&&(b+=T-R),S.__size=b,S.__cache={},this}function m(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function _(S){const v=S.target;v.removeEventListener("dispose",_);const b=s.indexOf(v.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(i[v.id]),delete i[v.id],delete o[v.id]}function p(){for(const S in i)n.deleteBuffer(i[S]);s=[],i={},o={}}return{bind:l,update:c,dispose:p}}class s5{constructor(e={}){const{canvas:t=LE(),context:r=null,depth:i=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=r.getContextAttributes().alpha}else h=s;const g=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const S=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sr,this.toneMapping=Lo,this.toneMappingExposure=1;const b=this;let T=!1,R=0,E=0,D=null,y=-1,x=null;const I=new kt,O=new kt;let F=null;const X=new ft(0);let J=0,W=t.width,V=t.height,H=1,de=null,B=null;const me=new kt(0,0,W,V),Ce=new kt(0,0,W,V);let Ge=!1;const re=new Lm;let he=!1,ve=!1;this.transmissionResolutionScale=1;const z=new Gt,le=new Gt,j=new K,te=new kt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function k(){return D===null?H:1}let M=r;function ne(A,$){return t.getContext(A,$)}try{const A={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wm}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),M===null){const $="webgl2";if(M=ne($,A),M===null)throw ne($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,L,oe,ce,se,C,w,U,Y,q,ee,pe,fe,xe,Ue,ge,ye,Oe,Ne,Se,$e,We,pt,N;function Me(){Z=new mR(M),Z.init(),We=new Z3(M,Z),L=new cR(M,Z,e,We),oe=new q3(M,Z),L.reverseDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),ce=new bR(M),se=new B3,C=new K3(M,Z,oe,se,L,We,ce),w=new dR(b),U=new pR(b),Y=new C2(M),pt=new aR(M,Y),q=new gR(M,Y,ce,pt),ee=new yR(M,q,Y,ce),Ne=new vR(M,L,C),ge=new uR(se),pe=new O3(b,w,U,Z,L,pt,ge),fe=new i5(b,se),xe=new N3,Ue=new $3(Z),Oe=new sR(b,w,U,oe,ee,h,l),ye=new j3(b,ee,L),N=new o5(M,ce,L,oe),Se=new lR(M,Z,ce),$e=new _R(M,Z,ce),ce.programs=pe.programs,b.capabilities=L,b.extensions=Z,b.properties=se,b.renderLists=xe,b.shadowMap=ye,b.state=oe,b.info=ce}Me();const ae=new n5(b,M);this.xr=ae,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(W,V,!1))},this.getSize=function(A){return A.set(W,V)},this.setSize=function(A,$,ie=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,V=$,t.width=Math.floor(A*H),t.height=Math.floor($*H),ie===!0&&(t.style.width=A+"px",t.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(W*H,V*H).floor()},this.setDrawingBufferSize=function(A,$,ie){W=A,V=$,H=ie,t.width=Math.floor(A*ie),t.height=Math.floor($*ie),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,$,ie,Q){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,$,ie,Q),oe.viewport(I.copy(me).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(Ce)},this.setScissor=function(A,$,ie,Q){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,$,ie,Q),oe.scissor(O.copy(Ce).multiplyScalar(H).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(A){oe.setScissorTest(Ge=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,$=!0,ie=!0){let Q=0;if(A){let G=!1;if(D!==null){const _e=D.texture.format;G=_e===Rm||_e===Am||_e===Tm}if(G){const _e=D.texture.type,Ae=_e===ro||_e===Ds||_e===_c||_e===Ya||_e===Cm||_e===Em,De=Oe.getClearColor(),ke=Oe.getClearAlpha(),He=De.r,je=De.g,ze=De.b;Ae?(g[0]=He,g[1]=je,g[2]=ze,g[3]=ke,M.clearBufferuiv(M.COLOR,0,g)):(m[0]=He,m[1]=je,m[2]=ze,m[3]=ke,M.clearBufferiv(M.COLOR,0,m))}else Q|=M.COLOR_BUFFER_BIT}$&&(Q|=M.DEPTH_BUFFER_BIT),ie&&(Q|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Oe.dispose(),xe.dispose(),Ue.dispose(),se.dispose(),w.dispose(),U.dispose(),ee.dispose(),pt.dispose(),N.dispose(),pe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Te),ae.removeEventListener("sessionend",Ze),Be.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=ce.autoReset,$=ye.enabled,ie=ye.autoUpdate,Q=ye.needsUpdate,G=ye.type;Me(),ce.autoReset=A,ye.enabled=$,ye.autoUpdate=ie,ye.needsUpdate=Q,ye.type=G}function Ee(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const $=A.target;$.removeEventListener("dispose",Ye),bt($)}function bt(A){Kt(A),se.remove(A)}function Kt(A){const $=se.get(A).programs;$!==void 0&&($.forEach(function(ie){pe.releaseProgram(ie)}),A.isShaderMaterial&&pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,ie,Q,G,_e){$===null&&($=be);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,De=gr(A,$,ie,Q,G);oe.setMaterial(Q,Ae);let ke=ie.index,He=1;if(Q.wireframe===!0){if(ke=q.getWireframeAttribute(ie),ke===void 0)return;He=2}const je=ie.drawRange,ze=ie.attributes.position;let nt=je.start*He,St=(je.start+je.count)*He;_e!==null&&(nt=Math.max(nt,_e.start*He),St=Math.min(St,(_e.start+_e.count)*He)),ke!==null?(nt=Math.max(nt,0),St=Math.min(St,ke.count)):ze!=null&&(nt=Math.max(nt,0),St=Math.min(St,ze.count));const on=St-nt;if(on<0||on===1/0)return;pt.setup(G,Q,De,ie,ke);let Zt,vt=Se;if(ke!==null&&(Zt=Y.get(ke),vt=$e,vt.setIndex(Zt)),G.isMesh)Q.wireframe===!0?(oe.setLineWidth(Q.wireframeLinewidth*k()),vt.setMode(M.LINES)):vt.setMode(M.TRIANGLES);else if(G.isLine){let Xe=Q.linewidth;Xe===void 0&&(Xe=1),oe.setLineWidth(Xe*k()),G.isLineSegments?vt.setMode(M.LINES):G.isLineLoop?vt.setMode(M.LINE_LOOP):vt.setMode(M.LINE_STRIP)}else G.isPoints?vt.setMode(M.POINTS):G.isSprite&&vt.setMode(M.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)vt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xe=G._multiDrawStarts,Cn=G._multiDrawCounts,wt=G._multiDrawCount,jr=ke?Y.get(ke).bytesPerElement:1,Ws=se.get(Q).currentProgram.getUniforms();for(let _r=0;_r<wt;_r++)Ws.setValue(M,"_gl_DrawID",_r),vt.render(Xe[_r]/jr,Cn[_r])}else if(G.isInstancedMesh)vt.renderInstances(nt,on,G.count);else if(ie.isInstancedBufferGeometry){const Xe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Cn=Math.min(ie.instanceCount,Xe);vt.renderInstances(nt,on,Cn)}else vt.render(nt,on)};function Pe(A,$,ie){A.transparent===!0&&A.side===vi&&A.forceSinglePass===!1?(A.side=cr,A.needsUpdate=!0,Dt(A,$,ie),A.side=Fo,A.needsUpdate=!0,Dt(A,$,ie),A.side=vi):Dt(A,$,ie)}this.compile=function(A,$,ie=null){ie===null&&(ie=A),p=Ue.get(ie),p.init($),v.push(p),ie.traverseVisible(function(G){G.isLight&&G.layers.test($.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==ie&&A.traverseVisible(function(G){G.isLight&&G.layers.test($.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const Q=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const De=_e[Ae];Pe(De,ie,G),Q.add(De)}else Pe(_e,ie,G),Q.add(_e)}),v.pop(),p=null,Q},this.compileAsync=function(A,$,ie=null){const Q=this.compile(A,$,ie);return new Promise(G=>{function _e(){if(Q.forEach(function(Ae){se.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){G(A);return}setTimeout(_e,10)}Z.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ie=null;function Qe(A){Ie&&Ie(A)}function Te(){Be.stop()}function Ze(){Be.start()}const Be=new G1;Be.setAnimationLoop(Qe),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(A){Ie=A,ae.setAnimationLoop(A),A===null?Be.stop():Be.start()},ae.addEventListener("sessionstart",Te),ae.addEventListener("sessionend",Ze),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera($),$=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,$,D),p=Ue.get(A,v.length),p.init($),v.push(p),le.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),re.setFromProjectionMatrix(le),ve=this.localClippingEnabled,he=ge.init(this.clippingPlanes,ve),_=xe.get(A,S.length),_.init(),S.push(_),ae.enabled===!0&&ae.isPresenting===!0){const _e=b.xr.getDepthSensingMesh();_e!==null&&Ke(_e,$,-1/0,b.sortObjects)}Ke(A,$,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(de,B),P=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,P&&Oe.addToRenderList(_,A),this.info.render.frame++,he===!0&&ge.beginShadows();const ie=p.state.shadowsArray;ye.render(ie,A,$),he===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=_.opaque,G=_.transmissive;if(p.setupLights(),$.isArrayCamera){const _e=$.cameras;if(G.length>0)for(let Ae=0,De=_e.length;Ae<De;Ae++){const ke=_e[Ae];ot(Q,G,A,ke)}P&&Oe.render(A);for(let Ae=0,De=_e.length;Ae<De;Ae++){const ke=_e[Ae];en(_,A,ke,ke.viewport)}}else G.length>0&&ot(Q,G,A,$),P&&Oe.render(A),en(_,A,$);D!==null&&E===0&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(b,A,$),pt.resetDefaultState(),y=-1,x=null,v.pop(),v.length>0?(p=v[v.length-1],he===!0&&ge.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?_=S[S.length-1]:_=null};function Ke(A,$,ie,Q){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){Q&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const Ae=ee.update(A),De=A.material;De.visible&&_.push(A,Ae,De,ie,te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const Ae=ee.update(A),De=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),te.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),te.copy(Ae.boundingSphere.center)),te.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(De)){const ke=Ae.groups;for(let He=0,je=ke.length;He<je;He++){const ze=ke[He],nt=De[ze.materialIndex];nt&&nt.visible&&_.push(A,Ae,nt,ie,te.z,ze)}}else De.visible&&_.push(A,Ae,De,ie,te.z,null)}}const _e=A.children;for(let Ae=0,De=_e.length;Ae<De;Ae++)Ke(_e[Ae],$,ie,Q)}function en(A,$,ie,Q){const G=A.opaque,_e=A.transmissive,Ae=A.transparent;p.setupLightsView(ie),he===!0&&ge.setGlobalState(b.clippingPlanes,ie),Q&&oe.viewport(I.copy(Q)),G.length>0&&Bt(G,$,ie),_e.length>0&&Bt(_e,$,ie),Ae.length>0&&Bt(Ae,$,ie),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function ot(A,$,ie,Q){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ls(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Wc:ro,minFilter:gs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const _e=p.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||I;_e.setSize(Ae.z*b.transmissionResolutionScale,Ae.w*b.transmissionResolutionScale);const De=b.getRenderTarget();b.setRenderTarget(_e),b.getClearColor(X),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),P&&Oe.render(ie);const ke=b.toneMapping;b.toneMapping=Lo;const He=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),he===!0&&ge.setGlobalState(b.clippingPlanes,Q),Bt(A,ie,Q),C.updateMultisampleRenderTarget(_e),C.updateRenderTargetMipmap(_e),Z.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ze=0,nt=$.length;ze<nt;ze++){const St=$[ze],on=St.object,Zt=St.geometry,vt=St.material,Xe=St.group;if(vt.side===vi&&on.layers.test(Q.layers)){const Cn=vt.side;vt.side=cr,vt.needsUpdate=!0,dn(on,ie,Q,Zt,vt,Xe),vt.side=Cn,vt.needsUpdate=!0,je=!0}}je===!0&&(C.updateMultisampleRenderTarget(_e),C.updateRenderTargetMipmap(_e))}b.setRenderTarget(De),b.setClearColor(X,J),He!==void 0&&(Q.viewport=He),b.toneMapping=ke}function Bt(A,$,ie){const Q=$.isScene===!0?$.overrideMaterial:null;for(let G=0,_e=A.length;G<_e;G++){const Ae=A[G],De=Ae.object,ke=Ae.geometry,He=Q===null?Ae.material:Q,je=Ae.group;De.layers.test(ie.layers)&&dn(De,$,ie,ke,He,je)}}function dn(A,$,ie,Q,G,_e){A.onBeforeRender(b,$,ie,Q,G,_e),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(b,$,ie,Q,A,_e),G.transparent===!0&&G.side===vi&&G.forceSinglePass===!1?(G.side=cr,G.needsUpdate=!0,b.renderBufferDirect(ie,$,Q,G,A,_e),G.side=Fo,G.needsUpdate=!0,b.renderBufferDirect(ie,$,Q,G,A,_e),G.side=vi):b.renderBufferDirect(ie,$,Q,G,A,_e),A.onAfterRender(b,$,ie,Q,G,_e)}function Dt(A,$,ie){$.isScene!==!0&&($=be);const Q=se.get(A),G=p.state.lights,_e=p.state.shadowsArray,Ae=G.state.version,De=pe.getParameters(A,G.state,_e,$,ie),ke=pe.getProgramCacheKey(De);let He=Q.programs;Q.environment=A.isMeshStandardMaterial?$.environment:null,Q.fog=$.fog,Q.envMap=(A.isMeshStandardMaterial?U:w).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",Ye),He=new Map,Q.programs=He);let je=He.get(ke);if(je!==void 0){if(Q.currentProgram===je&&Q.lightsStateVersion===Ae)return xt(A,De),je}else De.uniforms=pe.getUniforms(A),A.onBeforeCompile(De,b),je=pe.acquireProgram(De,ke),He.set(ke,je),Q.uniforms=De.uniforms;const ze=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=ge.uniform),xt(A,De),Q.needsLights=Fn(A),Q.lightsStateVersion=Ae,Q.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),Q.currentProgram=je,Q.uniformsList=null,je}function Lt(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=Ku.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function xt(A,$){const ie=se.get(A);ie.outputColorSpace=$.outputColorSpace,ie.batching=$.batching,ie.batchingColor=$.batchingColor,ie.instancing=$.instancing,ie.instancingColor=$.instancingColor,ie.instancingMorph=$.instancingMorph,ie.skinning=$.skinning,ie.morphTargets=$.morphTargets,ie.morphNormals=$.morphNormals,ie.morphColors=$.morphColors,ie.morphTargetsCount=$.morphTargetsCount,ie.numClippingPlanes=$.numClippingPlanes,ie.numIntersection=$.numClipIntersection,ie.vertexAlphas=$.vertexAlphas,ie.vertexTangents=$.vertexTangents,ie.toneMapping=$.toneMapping}function gr(A,$,ie,Q,G){$.isScene!==!0&&($=be),C.resetTextureUnits();const _e=$.fog,Ae=Q.isMeshStandardMaterial?$.environment:null,De=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ka,ke=(Q.isMeshStandardMaterial?U:w).get(Q.envMap||Ae),He=Q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,je=!!ie.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ze=!!ie.morphAttributes.position,nt=!!ie.morphAttributes.normal,St=!!ie.morphAttributes.color;let on=Lo;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(on=b.toneMapping);const Zt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,vt=Zt!==void 0?Zt.length:0,Xe=se.get(Q),Cn=p.state.lights;if(he===!0&&(ve===!0||A!==x)){const zn=A===x&&Q.id===y;ge.setState(Q,A,zn)}let wt=!1;Q.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Cn.state.version||Xe.outputColorSpace!==De||G.isBatchedMesh&&Xe.batching===!1||!G.isBatchedMesh&&Xe.batching===!0||G.isBatchedMesh&&Xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||G.isInstancedMesh&&Xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Xe.instancingMorph===!1&&G.morphTexture!==null||Xe.envMap!==ke||Q.fog===!0&&Xe.fog!==_e||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ge.numPlanes||Xe.numIntersection!==ge.numIntersection)||Xe.vertexAlphas!==He||Xe.vertexTangents!==je||Xe.morphTargets!==ze||Xe.morphNormals!==nt||Xe.morphColors!==St||Xe.toneMapping!==on||Xe.morphTargetsCount!==vt)&&(wt=!0):(wt=!0,Xe.__version=Q.version);let jr=Xe.currentProgram;wt===!0&&(jr=Dt(Q,$,G));let Ws=!1,_r=!1,ul=!1;const $t=jr.getUniforms(),Ir=Xe.uniforms;if(oe.useProgram(jr.program)&&(Ws=!0,_r=!0,ul=!0),Q.id!==y&&(y=Q.id,_r=!0),Ws||x!==A){oe.buffers.depth.getReversed()?(z.copy(A.projectionMatrix),OE(z),BE(z),$t.setValue(M,"projectionMatrix",z)):$t.setValue(M,"projectionMatrix",A.projectionMatrix),$t.setValue(M,"viewMatrix",A.matrixWorldInverse);const sr=$t.map.cameraPosition;sr!==void 0&&sr.setValue(M,j.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&$t.setValue(M,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&$t.setValue(M,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,_r=!0,ul=!0)}if(G.isSkinnedMesh){$t.setOptional(M,G,"bindMatrix"),$t.setOptional(M,G,"bindMatrixInverse");const zn=G.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),$t.setValue(M,"boneTexture",zn.boneTexture,C))}G.isBatchedMesh&&($t.setOptional(M,G,"batchingTexture"),$t.setValue(M,"batchingTexture",G._matricesTexture,C),$t.setOptional(M,G,"batchingIdTexture"),$t.setValue(M,"batchingIdTexture",G._indirectTexture,C),$t.setOptional(M,G,"batchingColorTexture"),G._colorsTexture!==null&&$t.setValue(M,"batchingColorTexture",G._colorsTexture,C));const Or=ie.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&Ne.update(G,ie,jr),(_r||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,$t.setValue(M,"receiveShadow",G.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ir.envMap.value=ke,Ir.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&$.environment!==null&&(Ir.envMapIntensity.value=$.environmentIntensity),_r&&($t.setValue(M,"toneMappingExposure",b.toneMappingExposure),Xe.needsLights&&Vt(Ir,ul),_e&&Q.fog===!0&&fe.refreshFogUniforms(Ir,_e),fe.refreshMaterialUniforms(Ir,Q,H,V,p.state.transmissionRenderTarget[A.id]),Ku.upload(M,Lt(Xe),Ir,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ku.upload(M,Lt(Xe),Ir,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&$t.setValue(M,"center",G.center),$t.setValue(M,"modelViewMatrix",G.modelViewMatrix),$t.setValue(M,"normalMatrix",G.normalMatrix),$t.setValue(M,"modelMatrix",G.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const zn=Q.uniformsGroups;for(let sr=0,lf=zn.length;sr<lf;sr++){const jo=zn[sr];N.update(jo,jr),N.bind(jo,jr)}}return jr}function Vt(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function Fn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,$,ie){se.get(A.texture).__webglTexture=$,se.get(A.depthTexture).__webglTexture=ie;const Q=se.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=ie===void 0,Q.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,$){const ie=se.get(A);ie.__webglFramebuffer=$,ie.__useDefaultFramebuffer=$===void 0};const Lr=M.createFramebuffer();this.setRenderTarget=function(A,$=0,ie=0){D=A,R=$,E=ie;let Q=!0,G=null,_e=!1,Ae=!1;if(A){const ke=se.get(A);if(ke.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(M.FRAMEBUFFER,null),Q=!1;else if(ke.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(ke.__hasExternalTextures)C.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(ke.__boundDepthTexture!==ze){if(ze!==null&&se.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const je=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[$])?G=je[$][ie]:G=je[$],_e=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?G=se.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?G=je[ie]:G=je,I.copy(A.viewport),O.copy(A.scissor),F=A.scissorTest}else I.copy(me).multiplyScalar(H).floor(),O.copy(Ce).multiplyScalar(H).floor(),F=Ge;if(ie!==0&&(G=Lr),oe.bindFramebuffer(M.FRAMEBUFFER,G)&&Q&&oe.drawBuffers(A,G),oe.viewport(I),oe.scissor(O),oe.setScissorTest(F),_e){const ke=se.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,ie)}else if(Ae){const ke=se.get(A.texture),He=$;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,ke.__webglTexture,ie,He)}else if(A!==null&&ie!==0){const ke=se.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,ke.__webglTexture,ie)}y=-1},this.readRenderTargetPixels=function(A,$,ie,Q,G,_e,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){oe.bindFramebuffer(M.FRAMEBUFFER,De);try{const ke=A.texture,He=ke.format,je=ke.type;if(!L.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-Q&&ie>=0&&ie<=A.height-G&&M.readPixels($,ie,Q,G,We.convert(He),We.convert(je),_e)}finally{const ke=D!==null?se.get(D).__webglFramebuffer:null;oe.bindFramebuffer(M.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,$,ie,Q,G,_e,Ae){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){const ke=A.texture,He=ke.format,je=ke.type;if(!L.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=A.width-Q&&ie>=0&&ie<=A.height-G){oe.bindFramebuffer(M.FRAMEBUFFER,De);const ze=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,ze),M.bufferData(M.PIXEL_PACK_BUFFER,_e.byteLength,M.STREAM_READ),M.readPixels($,ie,Q,G,We.convert(He),We.convert(je),0);const nt=D!==null?se.get(D).__webglFramebuffer:null;oe.bindFramebuffer(M.FRAMEBUFFER,nt);const St=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await IE(M,St,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,ze),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,_e),M.deleteBuffer(ze),M.deleteSync(St),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,$=null,ie=0){A.isTexture!==!0&&(ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-ie),G=Math.floor(A.image.width*Q),_e=Math.floor(A.image.height*Q),Ae=$!==null?$.x:0,De=$!==null?$.y:0;C.setTexture2D(A,0),M.copyTexSubImage2D(M.TEXTURE_2D,ie,0,0,Ae,De,G,_e),oe.unbindTexture()};const fn=M.createFramebuffer(),hn=M.createFramebuffer();this.copyTextureToTexture=function(A,$,ie=null,Q=null,G=0,_e=null){A.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],$=arguments[2],_e=arguments[3]||0,ie=null),_e===null&&(G!==0?(ga("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=G,G=0):_e=0);let Ae,De,ke,He,je,ze,nt,St,on;const Zt=A.isCompressedTexture?A.mipmaps[_e]:A.image;if(ie!==null)Ae=ie.max.x-ie.min.x,De=ie.max.y-ie.min.y,ke=ie.isBox3?ie.max.z-ie.min.z:1,He=ie.min.x,je=ie.min.y,ze=ie.isBox3?ie.min.z:0;else{const Or=Math.pow(2,-G);Ae=Math.floor(Zt.width*Or),De=Math.floor(Zt.height*Or),A.isDataArrayTexture?ke=Zt.depth:A.isData3DTexture?ke=Math.floor(Zt.depth*Or):ke=1,He=0,je=0,ze=0}Q!==null?(nt=Q.x,St=Q.y,on=Q.z):(nt=0,St=0,on=0);const vt=We.convert($.format),Xe=We.convert($.type);let Cn;$.isData3DTexture?(C.setTexture3D($,0),Cn=M.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(C.setTexture2DArray($,0),Cn=M.TEXTURE_2D_ARRAY):(C.setTexture2D($,0),Cn=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,$.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,$.unpackAlignment);const wt=M.getParameter(M.UNPACK_ROW_LENGTH),jr=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Ws=M.getParameter(M.UNPACK_SKIP_PIXELS),_r=M.getParameter(M.UNPACK_SKIP_ROWS),ul=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Zt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Zt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,He),M.pixelStorei(M.UNPACK_SKIP_ROWS,je),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ze);const $t=A.isDataArrayTexture||A.isData3DTexture,Ir=$.isDataArrayTexture||$.isData3DTexture;if(A.isDepthTexture){const Or=se.get(A),zn=se.get($),sr=se.get(Or.__renderTarget),lf=se.get(zn.__renderTarget);oe.bindFramebuffer(M.READ_FRAMEBUFFER,sr.__webglFramebuffer),oe.bindFramebuffer(M.DRAW_FRAMEBUFFER,lf.__webglFramebuffer);for(let jo=0;jo<ke;jo++)$t&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,se.get(A).__webglTexture,G,ze+jo),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,se.get($).__webglTexture,_e,on+jo)),M.blitFramebuffer(He,je,Ae,De,nt,St,Ae,De,M.DEPTH_BUFFER_BIT,M.NEAREST);oe.bindFramebuffer(M.READ_FRAMEBUFFER,null),oe.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||se.has(A)){const Or=se.get(A),zn=se.get($);oe.bindFramebuffer(M.READ_FRAMEBUFFER,fn),oe.bindFramebuffer(M.DRAW_FRAMEBUFFER,hn);for(let sr=0;sr<ke;sr++)$t?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Or.__webglTexture,G,ze+sr):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Or.__webglTexture,G),Ir?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,zn.__webglTexture,_e,on+sr):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,zn.__webglTexture,_e),G!==0?M.blitFramebuffer(He,je,Ae,De,nt,St,Ae,De,M.COLOR_BUFFER_BIT,M.NEAREST):Ir?M.copyTexSubImage3D(Cn,_e,nt,St,on+sr,He,je,Ae,De):M.copyTexSubImage2D(Cn,_e,nt,St,He,je,Ae,De);oe.bindFramebuffer(M.READ_FRAMEBUFFER,null),oe.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Ir?A.isDataTexture||A.isData3DTexture?M.texSubImage3D(Cn,_e,nt,St,on,Ae,De,ke,vt,Xe,Zt.data):$.isCompressedArrayTexture?M.compressedTexSubImage3D(Cn,_e,nt,St,on,Ae,De,ke,vt,Zt.data):M.texSubImage3D(Cn,_e,nt,St,on,Ae,De,ke,vt,Xe,Zt):A.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,_e,nt,St,Ae,De,vt,Xe,Zt.data):A.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,_e,nt,St,Zt.width,Zt.height,vt,Zt.data):M.texSubImage2D(M.TEXTURE_2D,_e,nt,St,Ae,De,vt,Xe,Zt);M.pixelStorei(M.UNPACK_ROW_LENGTH,wt),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,jr),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ws),M.pixelStorei(M.UNPACK_SKIP_ROWS,_r),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ul),_e===0&&$.generateMipmaps&&M.generateMipmap(Cn),oe.unbindTexture()},this.copyTextureToTexture3D=function(A,$,ie=null,Q=null,G=0){return A.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],$=arguments[3],G=arguments[4]||0),ga('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,$,ie,Q,G)},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),oe.unbindTexture()},this.resetState=function(){R=0,E=0,D=null,oe.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}function $i(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Y1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ja={duration:.5,overwrite:!1,delay:0},Nm,Tn,Wt,Ai=1e8,Un=1/Ai,yp=Math.PI*2,a5=yp/4,l5=0,q1=Math.sqrt,c5=Math.cos,u5=Math.sin,Mn=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},io=function(e){return typeof e=="number"},Fm=function(e){return typeof e>"u"},ki=function(e){return typeof e=="object"},ur=function(e){return e!==!1},zm=function(){return typeof window<"u"},wu=function(e){return Qt(e)||Mn(e)},K1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nn=Array.isArray,xp=/(?:-?\.?\d|\.)+/gi,Z1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,th=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,J1=/[+-]=-?[.\d]+/,Q1=/[^,'"\[\]\s]+/gi,d5=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,mi,Sp,Hm,kr={},yd={},ey,ty=function(e){return(yd=Qa(e,kr))&&mr},Vm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},yc=function(e,t){return!t&&console.warn(e)},ny=function(e,t){return e&&(kr[e]=t)&&yd&&(yd[e]=t)||kr},xc=function(){return 0},f5={suppressEvents:!0,isStart:!0,kill:!1},Zu={suppressEvents:!0,kill:!1},h5={suppressEvents:!0},Gm={},Io=[],wp={},ry,wr={},nh={},S_=30,Ju=[],$m="",Wm=function(e){var t=e[0],r,i;if(ki(t)||Qt(t)||(e=[e]),!(r=(t._gsap||{}).harness)){for(i=Ju.length;i--&&!Ju[i].targetTest(t););r=Ju[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ty(e[i],r)))||e.splice(i,1);return e},ws=function(e){return e._gsap||Wm(Hr(e))[0]._gsap},iy=function(e,t,r){return(r=e[t])&&Qt(r)?e[t]():Fm(r)&&e.getAttribute&&e.getAttribute(t)||r},dr=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},cn=function(e){return Math.round(e*1e7)/1e7||0},Oa=function(e,t){var r=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},p5=function(e,t){for(var r=t.length,i=0;e.indexOf(t[i])<0&&++i<r;);return i<r},xd=function(){var e=Io.length,t=Io.slice(0),r,i;for(wp={},Io.length=0,r=0;r<e;r++)i=t[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},oy=function(e,t,r,i){Io.length&&!Tn&&xd(),e.render(t,r,Tn&&t<0&&(e._initted||e._startAt)),Io.length&&!Tn&&xd()},sy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Q1).length<2?t:Mn(e)?e.trim():e},ay=function(e){return e},Dr=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},m5=function(e){return function(t,r){for(var i in r)i in t||i==="duration"&&e||i==="ease"||(t[i]=r[i])}},Qa=function(e,t){for(var r in t)e[r]=t[r];return e},w_=function n(e,t){for(var r in t)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=ki(t[r])?n(e[r]||(e[r]={}),t[r]):t[r]);return e},Sd=function(e,t){var r={},i;for(i in e)i in t||(r[i]=e[i]);return r},Xl=function(e){var t=e.parent||jt,r=e.keyframes?m5(Nn(e.keyframes)):Dr;if(ur(e.inherit))for(;t;)r(e,t.vars.defaults),t=t.parent||t._dp;return e},g5=function(e,t){for(var r=e.length,i=r===t.length;i&&r--&&e[r]===t[r];);return r<0},ly=function(e,t,r,i,o){var s=e[i],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[r],e[r]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},Qd=function(e,t,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=t._prev,s=t._next;o?o._next=s:e[r]===t&&(e[r]=s),s?s._prev=o:e[i]===t&&(e[i]=o),t._next=t._prev=t.parent=null},Ho=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ms=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},_5=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mp=function(e,t,r,i){return e._startAt&&(Tn?e._startAt.revert(Zu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},b5=function n(e){return!e||e._ts&&n(e.parent)},M_=function(e){return e._repeat?el(e._tTime,e=e.duration()+e._rDelay)*e:0},el=function(e,t){var r=Math.floor(e=cn(e/t));return e&&r===e?r-1:r},wd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ef=function(e){return e._end=cn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Un)||0))},tf=function(e,t){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=cn(r._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ef(e),r._dirty||Ms(r,e)),e},cy=function(e,t){var r;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(r=wd(e.rawTime(),t),(!t._dur||Yc(0,t.totalDuration(),r)-t._tTime>Un)&&t.render(r,!0)),Ms(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-1e-8}},yi=function(e,t,r,i){return t.parent&&Ho(t),t._start=cn((io(r)?r:r||e!==jt?Nr(e,r,t):e._time)+t._delay),t._end=cn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ly(e,t,"_first","_last",e._sort?"_start":0),Cp(t)||(e._recent=t),i||cy(e,t),e._ts<0&&tf(e,e._tTime),e},uy=function(e,t){return(kr.ScrollTrigger||Vm("scrollTrigger",t))&&kr.ScrollTrigger.create(t,e)},dy=function(e,t,r,i,o){if(jm(e,t,o),!e._initted)return 1;if(!r&&e._pt&&!Tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ry!==Er.frame)return Io.push(e),e._lazy=[o,i],1},v5=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Cp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},y5=function(e,t,r,i){var o=e.ratio,s=t<0||!t&&(!e._start&&v5(e)&&!(!e._initted&&Cp(e))||(e._ts<0||e._dp._ts<0)&&!Cp(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Yc(0,e._tDur,t),u=el(l,a),e._yoyo&&u&1&&(s=1-s),u!==el(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||Tn||i||e._zTime===Un||!t&&e._zTime){if(!e._initted&&dy(e,t,i,r,l))return;for(d=e._zTime,e._zTime=t||(r?Un:0),r||(r=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Mp(e,t,r,!0),e._onUpdate&&!r&&Rr(e,"onUpdate"),l&&e._repeat&&!r&&e.parent&&Rr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Ho(e,1),!r&&!Tn&&(Rr(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},x5=function(e,t,r){var i;if(r>t)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},tl=function(e,t,r,i){var o=e._repeat,s=cn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:cn(s*(o+1)+e._rDelay*o):s,a>0&&!i&&tf(e,e._tTime=e._tDur*a),e.parent&&ef(e),r||Ms(e.parent,e),e},C_=function(e){return e instanceof er?Ms(e):tl(e,e._dur)},S5={_start:0,endTime:xc,totalDuration:xc},Nr=function n(e,t,r){var i=e.labels,o=e._recent||S5,s=e.duration()>=Ai?o.endTime(!1):e._dur,a,l,c;return Mn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:r).totalDuration()/100:1)):a<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&r&&(l=l/100*(Nn(r)?r[0]:r).totalDuration()),a>1?n(e,t.substr(0,a-1),r)+l:s+l)):t==null?s:+t},jl=function(e,t,r){var i=io(t[1]),o=(i?2:1)+(e<2?0:1),s=t[o],a,l;if(i&&(s.duration=t[1]),s.parent=r,e){for(a=s,l=r;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ur(l.vars.inherit)&&l.parent;s.immediateRender=ur(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new ln(t[0],s,t[o+1])},Xo=function(e,t){return e||e===0?t(e):t},Yc=function(e,t,r){return r<e?e:r>t?t:r},On=function(e,t){return!Mn(e)||!(t=d5.exec(e))?"":t[1]},w5=function(e,t,r){return Xo(r,function(i){return Yc(e,t,i)})},Ep=[].slice,fy=function(e,t){return e&&ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ki(e[0]))&&!e.nodeType&&e!==mi},M5=function(e,t,r){return r===void 0&&(r=[]),e.forEach(function(i){var o;return Mn(i)&&!t||fy(i,1)?(o=r).push.apply(o,Hr(i)):r.push(i)})||r},Hr=function(e,t,r){return Wt&&!t&&Wt.selector?Wt.selector(e):Mn(e)&&!r&&(Sp||!nl())?Ep.call((t||Hm).querySelectorAll(e),0):Nn(e)?M5(e,r):fy(e)?Ep.call(e,0):e?[e]:[]},Tp=function(e){return e=Hr(e)[0]||yc("Invalid scope")||{},function(t){var r=e.current||e.nativeElement||e;return Hr(t,r.querySelectorAll?r:r===e?yc("Invalid scope")||Hm.createElement("div"):e)}},hy=function(e){return e.sort(function(){return .5-Math.random()})},py=function(e){if(Qt(e))return e;var t=ki(e)?e:{each:e},r=Cs(t.ease),i=t.from||0,o=parseFloat(t.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return Mn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(f,h,g){var m=(g||t).length,_=s[m],p,S,v,b,T,R,E,D,y;if(!_){if(y=t.grid==="auto"?0:(t.grid||[1,Ai])[1],!y){for(E=-1e8;E<(E=g[y++].getBoundingClientRect().left)&&y<m;);y<m&&y--}for(_=s[m]=[],p=l?Math.min(y,m)*u-.5:i%y,S=y===Ai?0:l?m*d/y-.5:i/y|0,E=0,D=Ai,R=0;R<m;R++)v=R%y-p,b=S-(R/y|0),_[R]=T=c?Math.abs(c==="y"?b:v):q1(v*v+b*b),T>E&&(E=T),T<D&&(D=T);i==="random"&&hy(_),_.max=E-D,_.min=D,_.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(y>m?m-1:c?c==="y"?m/y:y:Math.max(y,m/y))||0)*(i==="edges"?-1:1),_.b=m<0?o-m:o,_.u=On(t.amount||t.each)||0,r=r&&m<0?My(r):r}return m=(_[f]-_.min)/_.max||0,cn(_.b+(r?r(m):m)*_.v)+_.u}},Ap=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=cn(Math.round(parseFloat(r)/e)*e*t);return(i-i%1)/t+(io(r)?0:On(r))}},my=function(e,t){var r=Nn(e),i,o;return!r&&ki(e)&&(i=r=e.radius||Ai,e.values?(e=Hr(e.values),(o=!io(e[0]))&&(i*=i)):e=Ap(e.increment)),Xo(t,r?Qt(e)?function(s){return o=e(s),Math.abs(o-s)<=i?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=Ai,u=0,d=e.length,f,h;d--;)o?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:s,o||u===s||io(s)?u:u+On(s)}:Ap(e))},gy=function(e,t,r,i){return Xo(Nn(e)?!t:r===!0?!!(r=0):!i,function(){return Nn(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(t-e+r*.99))/r)*r*i)/i})},C5=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(i){return t.reduce(function(o,s){return s(o)},i)}},E5=function(e,t){return function(r){return e(parseFloat(r))+(t||On(r))}},T5=function(e,t,r){return by(e,t,0,1,r)},_y=function(e,t,r){return Xo(r,function(i){return e[~~t(i)]})},A5=function n(e,t,r){var i=t-e;return Nn(e)?_y(e,n(0,e.length),t):Xo(r,function(o){return(i+(o-e)%i)%i+e})},R5=function n(e,t,r){var i=t-e,o=i*2;return Nn(e)?_y(e,n(0,e.length-1),t):Xo(r,function(s){return s=(o+(s-e)%o)%o||0,e+(s>i?o-s:s)})},Sc=function(e){for(var t=0,r="",i,o,s,a;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",o=e.substr(i+7,s-i-7).match(a?Q1:xp),r+=e.substr(t,i-t)+gy(a?o:+o[0],a?0:+o[1],+o[2]||1e-5),t=s+1;return r+e.substr(t,e.length-t)},by=function(e,t,r,i,o){var s=t-e,a=i-r;return Xo(o,function(l){return r+((l-e)/s*a||0)})},P5=function n(e,t,r,i){var o=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!o){var s=Mn(e),a={},l,c,u,d,f;if(r===!0&&(i=1)&&(r=null),s)e={p:e},t={p:t};else if(Nn(e)&&!Nn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,o=function(g){g*=d;var m=Math.min(f,~~g);return u[m](g-m)},r=t}else i||(e=Qa(Nn(e)?[]:{},e));if(!u){for(l in t)Xm.call(a,e,l,"get",t[l]);o=function(g){return Km(g,a)||(s?e.p:e)}}}return Xo(r,o)},E_=function(e,t,r){var i=e.labels,o=Ai,s,a,l;for(s in i)a=i[s]-t,a<0==!!r&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},Rr=function(e,t,r){var i=e.vars,o=i[t],s=Wt,a=e._ctx,l,c,u;if(o)return l=i[t+"Params"],c=i.callbackScope||e,r&&Io.length&&xd(),a&&(Wt=a),u=l?o.apply(c,l):o.call(c),Wt=s,u},Tl=function(e){return Ho(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Tn),e.progress()<1&&Rr(e,"onInterrupt"),e},Sa,vy=[],yy=function(e){if(e)if(e=!e.name&&e.default||e,zm()||e.headless){var t=e.name,r=Qt(e),i=t&&!r&&e.init?function(){this._props=[]}:e,o={init:xc,render:Km,add:Xm,kill:X5,modifier:W5,rawVars:0},s={targetTest:0,get:0,getSetter:qm,aliases:{},register:0};if(nl(),e!==i){if(wr[t])return;Dr(i,Dr(Sd(e,o),s)),Qa(i.prototype,Qa(o,Sd(e,s))),wr[i.prop=t]=i,e.targetTest&&(Ju.push(i),Gm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ny(t,i),e.register&&e.register(mr,i,fr)}else vy.push(e)},It=255,Al={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},rh=function(e,t,r){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(r-t)*e*6:e<.5?r:e*3<2?t+(r-t)*(2/3-e)*6:t)*It+.5|0},xy=function(e,t,r){var i=e?io(e)?[e>>16,e>>8&It,e&It]:0:Al.black,o,s,a,l,c,u,d,f,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Al[e])i=Al[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&It,i&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(xp),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,i.length>3&&(i[3]*=1),i[0]=rh(l+1/3,o,s),i[1]=rh(l,o,s),i[2]=rh(l-1/3,o,s);else if(~e.indexOf("="))return i=e.match(Z1),r&&i.length<4&&(i[3]=1),i}else i=e.match(xp)||Al.transparent;i=i.map(Number)}return t&&!g&&(o=i[0]/It,s=i[1]/It,a=i[2]/It,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===o?(s-a)/h+(s<a?6:0):d===s?(a-o)/h+2:(o-s)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),r&&i.length<4&&(i[3]=1),i},Sy=function(e){var t=[],r=[],i=-1;return e.split(Oo).forEach(function(o){var s=o.match(xa)||[];t.push.apply(t,s),r.push(i+=s.length+1)}),t.c=r,t},T_=function(e,t,r){var i="",o=(e+i).match(Oo),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=xy(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),r&&(u=Sy(e),l=r.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Oo,"1").split(xa),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:r).shift());if(!c)for(c=e.split(Oo),d=c.length-1;a<d;a++)i+=c[a]+o[a];return i+c[d]},Oo=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Al)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),k5=/hsl[a]?\(/,wy=function(e){var t=e.join(" "),r;if(Oo.lastIndex=0,Oo.test(t))return r=k5.test(t),e[1]=T_(e[1],r),e[0]=T_(e[0],r,Sy(e[1])),!0},wc,Er=function(){var n=Date.now,e=500,t=33,r=n(),i=r,o=1e3/240,s=o,a=[],l,c,u,d,f,h,g=function m(_){var p=n()-i,S=_===!0,v,b,T,R;if((p>e||p<0)&&(r+=p-t),i+=p,T=i-r,v=T-s,(v>0||S)&&(R=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,s+=v+(v>=o?4:o-v),b=1),S||(l=c(m)),b)for(h=0;h<a.length;h++)a[h](T,f,R,_)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){ey&&(!Sp&&zm()&&(mi=Sp=window,Hm=mi.document||{},kr.gsap=mr,(mi.gsapVersions||(mi.gsapVersions=[])).push(mr.version),ty(yd||mi.GreenSockGlobals||!mi.gsap&&mi||{}),vy.forEach(yy)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},wc=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),wc=0,c=xc},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,S){var v=p?function(b,T,R,E){_(b,T,R,E),d.remove(v)}:_;return d.remove(_),a[S?"unshift":"push"](v),nl(),v},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),nl=function(){return!wc&&Er.wake()},ht={},D5=/^[\d.\-M][\d.\-,\s]/,L5=/["']/g,I5=function(e){for(var t={},r=e.substr(1,e.length-3).split(":"),i=r[0],o=1,s=r.length,a,l,c;o<s;o++)l=r[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(L5,"").trim():+c,i=l.substr(a+1).trim();return t},O5=function(e){var t=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<r?e.indexOf(")",r+1):r)},B5=function(e){var t=(e+"").split("("),r=ht[t[0]];return r&&t.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[I5(t[1])]:O5(e).split(",").map(sy)):ht._CE&&D5.test(e)?ht._CE("",e):r},My=function(e){return function(t){return 1-e(1-t)}},Cy=function n(e,t){for(var r=e._first,i;r;)r instanceof er?n(r,t):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==t&&(r.timeline?n(r.timeline,t):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=t)),r=r._next},Cs=function(e,t){return e&&(Qt(e)?e:ht[e]||B5(e))||t},Hs=function(e,t,r,i){r===void 0&&(r=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:r,easeInOut:i},s;return dr(e,function(a){ht[a]=kr[a]=o,ht[s=a.toLowerCase()]=r;for(var l in o)ht[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=o[l]}),o},Ey=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ih=function n(e,t,r){var i=t>=1?t:1,o=(r||(e?.3:.45))/(t<1?t:1),s=o/yp*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*u5((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ey(a);return o=yp/o,l.config=function(c,u){return n(e,c,u)},l},oh=function n(e,t){t===void 0&&(t=1.70158);var r=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?r:e==="in"?function(o){return 1-r(1-o)}:Ey(r);return i.config=function(o){return n(e,o)},i};dr("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Hs(n+",Power"+(t-1),e?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(r*2,t)/2:1-Math.pow((1-r)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Hs("Elastic",ih("in"),ih("out"),ih());(function(n,e){var t=1/e,r=2*t,i=2.5*t,o=function(a){return a<t?n*a*a:a<r?n*Math.pow(a-1.5/e,2)+.75:a<i?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Hs("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);Hs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Hs("Circ",function(n){return-(q1(1-n*n)-1)});Hs("Sine",function(n){return n===1?1:-c5(n*a5)+1});Hs("Back",oh("in"),oh("out"),oh());ht.SteppedEase=ht.steps=kr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var r=1/e,i=e+(t?0:1),o=t?1:0,s=1-Un;return function(a){return((i*Yc(0,s,a)|0)+o)*r}}};Ja.ease=ht["quad.out"];dr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return $m+=n+","+n+"Params,"});var Ty=function(e,t){this.id=l5++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:iy,this.set=t?t.getSetter:qm},Mc=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,tl(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),wc||Er.wake()}var e=n.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,tl(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(nl(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(tf(this,r),!o._dp||o.parent||cy(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&yi(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Un||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),oy(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+M_(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+M_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*o,i):this._repeat?el(this._tTime,o)+1:1},e.timeScale=function(r,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var o=this.parent&&this._ts?wd(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(Yc(-Math.abs(this._delay),this._tDur,o),i!==!1),ef(this),_5(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(nl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Un&&(this._tTime-=Un)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&yi(i,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(ur(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wd(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=h5);var i=Tn;return Tn=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Tn=i,this},e.globalTime=function(r){for(var i=this,o=arguments.length?r:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):o},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,C_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,C_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(Nr(this,r),ur(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,ur(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,o;return!!(!r||this._ts&&this._initted&&r.isActive()&&(o=r.rawTime(!0))>=i&&o<this.endTime(!0)-Un)},e.eventCallback=function(r,i,o){var s=this.vars;return arguments.length>1?(i?(s[r]=i,o&&(s[r+"Params"]=o),r==="onUpdate"&&(this._onUpdate=i)):delete s[r],this):s[r]},e.then=function(r){var i=this;return new Promise(function(o){var s=Qt(r)?r:ay,a=function(){var c=i.then;i.then=null,Qt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),o(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Tl(this)},n}();Dr(Mc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var er=function(n){Y1(e,n);function e(r,i){var o;return r===void 0&&(r={}),o=n.call(this,r)||this,o.labels={},o.smoothChildTiming=!!r.smoothChildTiming,o.autoRemoveChildren=!!r.autoRemoveChildren,o._sort=ur(r.sortChildren),jt&&yi(r.parent||jt,$i(o),i),r.reversed&&o.reverse(),r.paused&&o.paused(!0),r.scrollTrigger&&uy($i(o),r.scrollTrigger),o}var t=e.prototype;return t.to=function(i,o,s){return jl(0,arguments,this),this},t.from=function(i,o,s){return jl(1,arguments,this),this},t.fromTo=function(i,o,s,a){return jl(2,arguments,this),this},t.set=function(i,o,s){return o.duration=0,o.parent=this,Xl(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new ln(i,o,Nr(this,s),1),this},t.call=function(i,o,s){return yi(this,ln.delayedCall(0,i,o),s)},t.staggerTo=function(i,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new ln(i,s,Nr(this,l)),this},t.staggerFrom=function(i,o,s,a,l,c,u){return s.runBackwards=1,Xl(s).immediateRender=ur(s.immediateRender),this.staggerTo(i,o,s,a,l,c,u)},t.staggerFromTo=function(i,o,s,a,l,c,u,d){return a.startAt=s,Xl(a).immediateRender=ur(a.immediateRender),this.staggerTo(i,o,a,l,c,u,d)},t.render=function(i,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:cn(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,g,m,_,p,S,v,b,T,R,E;if(this!==jt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,b=this._start,v=this._ts,p=!v,d&&(c||(a=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,o,s);if(f=cn(u%_),u===l?(m=this._repeat,f=c):(T=cn(u/_),m=~~T,m&&m===T&&(f=c,m--),f>c&&(f=c)),T=el(this._tTime,_),!a&&this._tTime&&T!==m&&this._tTime-T*_-this._dur<=0&&(T=m),R&&m&1&&(f=c-f,E=1),m!==T&&!this._lock){var D=R&&T&1,y=D===(R&&m&1);if(m<T&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(E?0:cn(m*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&Rr(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Cy(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=x5(this,cn(a),cn(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!o&&!m&&(Rr(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&S!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,o,s),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-1e-8);break}}h=g}else{h=this._last;for(var x=i<0?i:f;h;){if(g=h._prev,(h._act||x<=h._end)&&h._ts&&S!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(x-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(x-h._start)*h._ts,o,s||Tn&&(h._initted||h._startAt)),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=x?-1e-8:Un);break}}h=g}}if(S&&!o&&(this.pause(),S.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=b,ef(this),this.render(i,o,s);this._onUpdate&&!o&&Rr(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ho(this,1),!o&&!(i<0&&!a)&&(u||a||!l)&&(Rr(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,o){var s=this;if(io(o)||(o=Nr(this,o,i)),!(i instanceof Mc)){if(Nn(i))return i.forEach(function(a){return s.add(a,o)}),this;if(Mn(i))return this.addLabel(i,o);if(Qt(i))i=ln.delayedCall(0,i);else return this}return this!==i?yi(this,i,o):this},t.getChildren=function(i,o,s,a){i===void 0&&(i=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ln?o&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(i){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===i)return o[s]},t.remove=function(i){return Mn(i)?this.removeLabel(i):Qt(i)?this.killTweensOf(i):(i.parent===this&&Qd(this,i),i===this._recent&&(this._recent=this._last),Ms(this))},t.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=cn(Er.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),n.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},t.addLabel=function(i,o){return this.labels[i]=Nr(this,o),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,o,s){var a=ln.delayedCall(0,o||xc,s);return a.data="isPause",this._hasPause=1,yi(this,a,Nr(this,i))},t.removePause=function(i){var o=this._first;for(i=Nr(this,i);o;)o._start===i&&o.data==="isPause"&&Ho(o),o=o._next},t.killTweensOf=function(i,o,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)Eo!==a[l]&&a[l].kill(i,o);return this},t.getTweensOf=function(i,o){for(var s=[],a=Hr(i),l=this._first,c=io(o),u;l;)l instanceof ln?p5(l._targets,a)&&(c?(!Eo||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,o){o=o||{};var s=this,a=Nr(s,i),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=ln.to(s,Dr({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Un,onStart:function(){if(s.pause(),!h){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==_&&tl(g,_,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,d||[])}},o));return f?g.render(0):g},t.tweenFromTo=function(i,o,s){return this.tweenTo(o,Dr({startAt:{time:Nr(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),E_(this,Nr(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),E_(this,Nr(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Un)},t.shiftChildren=function(i,o,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=i);return Ms(this)},t.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return n.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ms(this)},t.totalDuration=function(i){var o=0,s=this,a=s._last,l=Ai,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,yi(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;tl(s,s===jt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(jt._ts&&(oy(jt,wd(i,jt)),ry=Er.frame),Er.frame>=S_){S_+=Pr.autoSleep||120;var o=jt._first;if((!o||!o._ts)&&Pr.autoSleep&&Er._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Er.sleep()}}},e}(Mc);Dr(er.prototype,{_lock:0,_hasPause:0,_forcing:0});var U5=function(e,t,r,i,o,s,a){var l=new fr(this._pt,e,t,0,1,Ly,null,o),c=0,u=0,d,f,h,g,m,_,p,S;for(l.b=r,l.e=i,r+="",i+="",(p=~i.indexOf("random("))&&(i=Sc(i)),s&&(S=[r,i],s(S,e,t),r=S[0],i=S[1]),f=r.match(th)||[];d=th.exec(i);)g=d[0],m=i.substring(c,d.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),g!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:_,c:g.charAt(1)==="="?Oa(_,g)-_:parseFloat(g)-_,m:h&&h<4?Math.round:0},c=th.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(J1.test(i)||p)&&(l.e=0),this._pt=l,l},Xm=function(e,t,r,i,o,s,a,l,c,u){Qt(i)&&(i=i(o||0,e,s));var d=e[t],f=r!=="get"?r:Qt(d)?c?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Qt(d)?c?V5:ky:Ym,g;if(Mn(i)&&(~i.indexOf("random(")&&(i=Sc(i)),i.charAt(1)==="="&&(g=Oa(f,i)+(On(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Rp)return!isNaN(f*i)&&i!==""?(g=new fr(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?$5:Dy,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&Vm(t,i),U5.call(this,e,t,f,i,h,l||Pr.stringFilter,c))},N5=function(e,t,r,i,o){if(Qt(e)&&(e=Yl(e,o,t,r,i)),!ki(e)||e.style&&e.nodeType||Nn(e)||K1(e))return Mn(e)?Yl(e,o,t,r,i):e;var s={},a;for(a in e)s[a]=Yl(e[a],o,t,r,i);return s},Ay=function(e,t,r,i,o,s){var a,l,c,u;if(wr[e]&&(a=new wr[e]).init(o,a.rawVars?t[e]:N5(t[e],i,o,s,r),r,i,s)!==!1&&(r._pt=l=new fr(r._pt,o,e,0,1,a.render,a,0,a.priority),r!==Sa))for(c=r._ptLookup[r._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Eo,Rp,jm=function n(e,t,r){var i=e.vars,o=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,g=e._dur,m=e._startAt,_=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:_,v=e._overwrite==="auto"&&!Nm,b=e.timeline,T,R,E,D,y,x,I,O,F,X,J,W,V;if(b&&(!f||!o)&&(o="none"),e._ease=Cs(o,Ja.ease),e._yEase=d?My(Cs(d===!0?o:d,Ja.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!b&&!!i.runBackwards,!b||f&&!i.stagger){if(O=_[0]?ws(_[0]).harness:0,W=O&&i[O.prop],T=Sd(i,Gm),m&&(m._zTime<0&&m.progress(1),t<0&&u&&a&&!h?m.render(-1,!0):m.revert(u&&g?Zu:f5),m._lazy=0),s){if(Ho(e._startAt=ln.set(_,Dr({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&ur(l),startAt:null,delay:0,onUpdate:c&&function(){return Rr(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Tn||!a&&!h)&&e._startAt.revert(Zu),a&&g&&t<=0&&r<=0){t&&(e._zTime=t);return}}else if(u&&g&&!m){if(t&&(a=!1),E=Dr({overwrite:!1,data:"isFromStart",lazy:a&&!m&&ur(l),immediateRender:a,stagger:0,parent:p},T),W&&(E[O.prop]=W),Ho(e._startAt=ln.set(_,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Tn?e._startAt.revert(Zu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Un,Un);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ur(l)||l&&!g,R=0;R<_.length;R++){if(y=_[R],I=y._gsap||Wm(_)[R]._gsap,e._ptLookup[R]=X={},wp[I.id]&&Io.length&&xd(),J=S===_?R:S.indexOf(y),O&&(F=new O).init(y,W||T,e,J,S)!==!1&&(e._pt=D=new fr(e._pt,y,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(H){X[H]=D}),F.priority&&(x=1)),!O||W)for(E in T)wr[E]&&(F=Ay(E,T,e,J,y,S))?F.priority&&(x=1):X[E]=D=Xm.call(e,y,E,"get",T[E],J,S,0,i.stringFilter);e._op&&e._op[R]&&e.kill(y,e._op[R]),v&&e._pt&&(Eo=e,jt.killTweensOf(y,X,e.globalTime(t)),V=!e.parent,Eo=0),e._pt&&l&&(wp[I.id]=1)}x&&Iy(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,f&&t<=0&&b.render(Ai,!0,!0)},F5=function(e,t,r,i,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Rp=1,e.vars[t]="+=0",jm(e,a),Rp=0,l?yc(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!o?i:u.s+(i||0)+s*u.c,u.c=r-u.s,d.e&&(d.e=tn(r)+On(d.e)),d.b&&(d.b=u.s+On(d.b))},z5=function(e,t){var r=e[0]?ws(e[0]).harness:0,i=r&&r.aliases,o,s,a,l;if(!i)return t;o=Qa({},t);for(s in i)if(s in o)for(l=i[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},H5=function(e,t,r,i){var o=t.ease||i||"power1.inOut",s,a;if(Nn(t))a=r[e]||(r[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=r[s]||(r[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},Yl=function(e,t,r,i,o){return Qt(e)?e.call(t,r,i,o):Mn(e)&&~e.indexOf("random(")?Sc(e):e},Ry=$m+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Py={};dr(Ry+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Py[n]=1});var ln=function(n){Y1(e,n);function e(r,i,o,s){var a;typeof i=="number"&&(o.duration=i,i=o,o=null),a=n.call(this,s?i:Xl(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,m=l.defaults,_=l.scrollTrigger,p=l.yoyoEase,S=i.parent||jt,v=(Nn(r)||K1(r)?io(r[0]):"length"in i)?[r]:Hr(r),b,T,R,E,D,y,x,I;if(a._targets=v.length?Wm(v):yc("GSAP target "+r+" not found. https://gsap.com",!Pr.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||f||wu(c)||wu(u)){if(i=a.vars,b=a.timeline=new er({data:"nested",defaults:m||{},targets:S&&S.data==="nested"?S.vars.targets:v}),b.kill(),b.parent=b._dp=$i(a),b._start=0,f||wu(c)||wu(u)){if(E=v.length,x=f&&py(f),ki(f))for(D in f)~Ry.indexOf(D)&&(I||(I={}),I[D]=f[D]);for(T=0;T<E;T++)R=Sd(i,Py),R.stagger=0,p&&(R.yoyoEase=p),I&&Qa(R,I),y=v[T],R.duration=+Yl(c,$i(a),T,y,v),R.delay=(+Yl(u,$i(a),T,y,v)||0)-a._delay,!f&&E===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),b.to(y,R,x?x(T,y,v):0),b._ease=ht.none;b.duration()?c=u=0:a.timeline=0}else if(g){Xl(Dr(b.vars.defaults,{ease:"none"})),b._ease=Cs(g.ease||i.ease||"none");var O=0,F,X,J;if(Nn(g))g.forEach(function(W){return b.to(v,W,">")}),b.duration();else{R={};for(D in g)D==="ease"||D==="easeEach"||H5(D,g[D],R,g.easeEach);for(D in R)for(F=R[D].sort(function(W,V){return W.t-V.t}),O=0,T=0;T<F.length;T++)X=F[T],J={ease:X.e,duration:(X.t-(T?F[T-1].t:0))/100*c},J[D]=X.v,b.to(v,J,O),O+=J.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return h===!0&&!Nm&&(Eo=$i(a),jt.killTweensOf(v),Eo=0),yi(S,$i(a),o),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===cn(S._time)&&ur(d)&&b5($i(a))&&S.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),_&&uy($i(a),_),a}var t=e.prototype;return t.render=function(i,o,s){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Un&&!u?l:i<Un?0:i,f,h,g,m,_,p,S,v,b;if(!c)y5(this,i,o,s);else if(d!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,o,s);if(f=cn(d%m),d===l?(g=this._repeat,f=c):(_=cn(d/m),g=~~_,g&&g===_?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(b=this._yEase,f=c-f),_=el(this._tTime,m),f===a&&!s&&this._initted&&g===_)return this._tTime=d,this;g!==_&&(v&&this._yEase&&Cy(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==m&&this._initted&&(this._lock=s=1,this.render(cn(m*g),!0).invalidate()._lock=0))}if(!this._initted){if(dy(this,u?i:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(i,o,s)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(b||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!a&&!o&&!g&&(Rr(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(S,h.d),h=h._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(u&&Mp(this,i,o,s),Rr(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!o&&this.parent&&Rr(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Mp(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ho(this,1),!o&&!(u&&!a)&&(d||a||p)&&(Rr(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),n.prototype.invalidate.call(this,i)},t.resetTo=function(i,o,s,a,l){wc||Er.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||jm(this,c),u=this._ease(c/this._dur),F5(this,i,o,s,a,u,c,l)?this.resetTo(i,o,s,a,1):(tf(this,0),this.parent||ly(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Tl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Tn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,Eo&&Eo.vars.overwrite!==!0)._first||Tl(this),this.parent&&s!==this.timeline.totalDuration()&&tl(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Hr(i):a,c=this._ptLookup,u=this._pt,d,f,h,g,m,_,p;if((!o||o==="all")&&g5(a,l))return o==="all"&&(this._pt=0),Tl(this);for(d=this._op=this._op||[],o!=="all"&&(Mn(o)&&(m={},dr(o,function(S){return m[S]=1}),o=m),o=z5(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,g=f,h={}):(h=d[p]=d[p]||{},g=o);for(m in g)_=f&&f[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&Qd(this,_,"_pt"),delete f[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&Tl(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return jl(1,arguments)},e.delayedCall=function(i,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,o,s){return jl(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,s){return jt.killTweensOf(i,o,s)},e}(Mc);Dr(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});dr("staggerTo,staggerFrom,staggerFromTo",function(n){ln[n]=function(){var e=new er,t=Ep.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Ym=function(e,t,r){return e[t]=r},ky=function(e,t,r){return e[t](r)},V5=function(e,t,r,i){return e[t](i.fp,r)},G5=function(e,t,r){return e.setAttribute(t,r)},qm=function(e,t){return Qt(e[t])?ky:Fm(e[t])&&e.setAttribute?G5:Ym},Dy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$5=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ly=function(e,t){var r=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=t.c}t.set(t.t,t.p,i,t)},Km=function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next},W5=function(e,t,r,i){for(var o=this._pt,s;o;)s=o._next,o.p===i&&o.modifier(e,t,r),o=s},X5=function(e){for(var t=this._pt,r,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Qd(this,t,"_pt"):t.dep||(r=1),t=i;return!r},j5=function(e,t,r,i){i.mSet(e,t,i.m.call(i.tween,r,i.mt),i)},Iy=function(e){for(var t=e._pt,r,i,o,s;t;){for(r=t._next,i=o;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:o=t,(t._next=i)?i._prev=t:s=t,t=r}e._pt=o},fr=function(){function n(t,r,i,o,s,a,l,c,u){this.t=r,this.s=o,this.c=s,this.p=i,this.r=a||Dy,this.d=l||this,this.set=c||Ym,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(r,i,o){this.mSet=this.mSet||this.set,this.set=j5,this.m=r,this.mt=o,this.tween=i},n}();dr($m+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Gm[n]=1});kr.TweenMax=kr.TweenLite=ln;kr.TimelineLite=kr.TimelineMax=er;jt=new er({sortChildren:!1,defaults:Ja,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pr.stringFilter=wy;var Es=[],Qu={},Y5=[],A_=0,q5=0,sh=function(e){return(Qu[e]||Y5).map(function(t){return t()})},Pp=function(){var e=Date.now(),t=[];e-A_>2&&(sh("matchMediaInit"),Es.forEach(function(r){var i=r.queries,o=r.conditions,s,a,l,c;for(a in i)s=mi.matchMedia(i[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(r.revert(),l&&t.push(r))}),sh("matchMediaRevert"),t.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),A_=e,sh("matchMedia"))},Oy=function(){function n(t,r){this.selector=r&&Tp(r),this.data=[],this._r=[],this.isReverted=!1,this.id=q5++,t&&this.add(t)}var e=n.prototype;return e.add=function(r,i,o){Qt(r)&&(o=i,i=r,r=Qt);var s=this,a=function(){var c=Wt,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=Tp(o)),Wt=s,d=i.apply(s,arguments),Qt(d)&&s._r.push(d),Wt=c,s.selector=u,s.isReverted=!1,d};return s.last=a,r===Qt?a(s,function(l){return s.add(null,l)}):r?s[r]=a:a},e.ignore=function(r){var i=Wt;Wt=null,r(this),Wt=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof n?r.push.apply(r,i.getTweens()):i instanceof ln&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var o=this;if(r?function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(r)}),l=o.data.length;l--;)c=o.data[l],c instanceof er?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ln)&&c.revert&&c.revert(r);o._r.forEach(function(u){return u(r,o)}),o.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var s=Es.length;s--;)Es[s].id===this.id&&Es.splice(s,1)},e.revert=function(r){this.kill(r||{})},n}(),K5=function(){function n(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=n.prototype;return e.add=function(r,i,o){ki(r)||(r={matches:r});var s=new Oy(0,o||this.scope),a=s.conditions={},l,c,u;Wt&&!s.selector&&(s.selector=Wt.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=r;for(c in r)c==="all"?u=1:(l=mi.matchMedia(r[c]),l&&(Es.indexOf(s)<0&&Es.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Pp):l.addEventListener("change",Pp)));return u&&i(s,function(d){return s.add(null,d)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},n}(),Md={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(i){return yy(i)})},timeline:function(e){return new er(e)},getTweensOf:function(e,t){return jt.getTweensOf(e,t)},getProperty:function(e,t,r,i){Mn(e)&&(e=Hr(e)[0]);var o=ws(e||{}).get,s=r?ay:sy;return r==="native"&&(r=""),e&&(t?s((wr[t]&&wr[t].get||o)(e,t,r,i)):function(a,l,c){return s((wr[a]&&wr[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,r){if(e=Hr(e),e.length>1){var i=e.map(function(u){return mr.quickSetter(u,t,r)}),o=i.length;return function(u){for(var d=o;d--;)i[d](u)}}e=e[0]||{};var s=wr[t],a=ws(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;Sa._pt=0,d.init(e,r?u+r:u,Sa,0,[e]),d.render(1,d),Sa._pt&&Km(1,Sa)}:a.set(e,l);return s?c:function(u){return c(e,l,r?u+r:u,a,1)}},quickTo:function(e,t,r){var i,o=mr.to(e,Dr((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),r||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cs(e.ease,Ja.ease)),w_(Ja,e||{})},config:function(e){return w_(Pr,e||{})},registerEffect:function(e){var t=e.name,r=e.effect,i=e.plugins,o=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!wr[a]&&!kr[a]&&yc(t+" effect requires "+a+" plugin.")}),nh[t]=function(a,l,c){return r(Hr(a),Dr(l||{},o),c)},s&&(er.prototype[t]=function(a,l,c){return this.add(nh[t](a,ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Cs(t)},parseEase:function(e,t){return arguments.length?Cs(e,t):ht},getById:function(e){return jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var r=new er(e),i,o;for(r.smoothChildTiming=ur(e.smoothChildTiming),jt.remove(r),r._dp=0,r._time=r._tTime=jt._time,i=jt._first;i;)o=i._next,(t||!(!i._dur&&i instanceof ln&&i.vars.onComplete===i._targets[0]))&&yi(r,i,i._start-i._delay),i=o;return yi(jt,r,0),r},context:function(e,t){return e?new Oy(e,t):Wt},matchMedia:function(e){return new K5(e)},matchMediaRefresh:function(){return Es.forEach(function(e){var t=e.conditions,r,i;for(i in t)t[i]&&(t[i]=!1,r=1);r&&e.revert()})||Pp()},addEventListener:function(e,t){var r=Qu[e]||(Qu[e]=[]);~r.indexOf(t)||r.push(t)},removeEventListener:function(e,t){var r=Qu[e],i=r&&r.indexOf(t);i>=0&&r.splice(i,1)},utils:{wrap:A5,wrapYoyo:R5,distribute:py,random:gy,snap:my,normalize:T5,getUnit:On,clamp:w5,splitColor:xy,toArray:Hr,selector:Tp,mapRange:by,pipe:C5,unitize:E5,interpolate:P5,shuffle:hy},install:ty,effects:nh,ticker:Er,updateRoot:er.updateRoot,plugins:wr,globalTimeline:jt,core:{PropTween:fr,globals:ny,Tween:ln,Timeline:er,Animation:Mc,getCache:ws,_removeLinkedListItem:Qd,reverting:function(){return Tn},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Nm=e}}};dr("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Md[n]=ln[n]});Er.add(er.updateRoot);Sa=Md.to({},{duration:0});var Z5=function(e,t){for(var r=e._pt;r&&r.p!==t&&r.op!==t&&r.fp!==t;)r=r._next;return r},J5=function(e,t){var r=e._targets,i,o,s;for(i in t)for(o=r.length;o--;)s=e._ptLookup[o][i],s&&(s=s.d)&&(s._pt&&(s=Z5(s,i)),s&&s.modifier&&s.modifier(t[i],e,r[o],i))},ah=function(e,t){return{name:e,rawVars:1,init:function(i,o,s){s._onInit=function(a){var l,c;if(Mn(o)&&(l={},dr(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}J5(a,o)}}}},mr=Md.registerPlugin({name:"attr",init:function(e,t,r,i,o){var s,a,l;this.tween=r;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],i,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var r=t._pt;r;)Tn?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,t){for(var r=t.length;r--;)this.add(e,r,e[r]||0,t[r],0,0,0,0,0,1)}},ah("roundProps",Ap),ah("modifiers"),ah("snap",my))||Md;ln.version=er.version=mr.version="3.12.7";ey=1;zm()&&nl();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var R_,To,Ba,Zm,bs,P_,Jm,Q5=function(){return typeof window<"u"},oo={},cs=180/Math.PI,Ua=Math.PI/180,la=Math.atan2,k_=1e8,Qm=/([A-Z])/g,eP=/(left|right|width|margin|padding|x)/i,tP=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iP=function(e,t){var r=t.s+t.c*e;t.set(t.t,t.p,~~(r+(r<0?-.5:.5))+t.u,t)},By=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Uy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},oP=function(e,t,r){return e.style[t]=r},sP=function(e,t,r){return e.style.setProperty(t,r)},aP=function(e,t,r){return e._gsap[t]=r},lP=function(e,t,r){return e._gsap.scaleX=e._gsap.scaleY=r},cP=function(e,t,r,i,o){var s=e._gsap;s.scaleX=s.scaleY=r,s.renderTransform(o,s)},uP=function(e,t,r,i,o){var s=e._gsap;s[t]=r,s.renderTransform(o,s)},Yt="transform",hr=Yt+"Origin",dP=function n(e,t){var r=this,i=this.target,o=i.style,s=i._gsap;if(e in oo&&o){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return r.tfm[a]=Wi(i,a)}):this.tfm[e]=s.x?s[e]:Wi(i,e),e===hr&&(this.tfm.zOrigin=s.zOrigin);else return wi.transform.split(",").forEach(function(a){return n.call(r,a,t)});if(this.props.indexOf(Yt)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hr,t,"")),e=Yt}(o||t)&&this.props.push(e,t,o[e])},Ny=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fP=function(){var e=this.props,t=this.target,r=t.style,i=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?r[e[o]]=e[o+2]:r.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Qm,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Jm(),(!o||!o.isStart)&&!r[Yt]&&(Ny(r),i.zOrigin&&r[hr]&&(r[hr]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Fy=function(e,t){var r={target:e,props:[],revert:fP,save:dP};return e._gsap||mr.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return r.save(i)}),r},zy,Dp=function(e,t){var r=To.createElementNS?To.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):To.createElement(e);return r&&r.style?r:To.createElement(e)},Ri=function n(e,t,r){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Qm,"-$1").toLowerCase())||i.getPropertyValue(t)||!r&&n(e,rl(t)||t,1)||""},D_="O,Moz,ms,Ms,Webkit".split(","),rl=function(e,t,r){var i=t||bs,o=i.style,s=5;if(e in o&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(D_[s]+e in o););return s<0?null:(s===3?"ms":s>=0?D_[s]:"")+e},Lp=function(){Q5()&&window.document&&(R_=window,To=R_.document,Ba=To.documentElement,bs=Dp("div")||{style:{}},Dp("div"),Yt=rl(Yt),hr=Yt+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zy=!!rl("perspective"),Jm=mr.core.reverting,Zm=1)},L_=function(e){var t=e.ownerSVGElement,r=Dp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),o;i.style.display="block",r.appendChild(i),Ba.appendChild(r);try{o=i.getBBox()}catch{}return r.removeChild(i),Ba.removeChild(r),o},I_=function(e,t){for(var r=t.length;r--;)if(e.hasAttribute(t[r]))return e.getAttribute(t[r])},Hy=function(e){var t,r;try{t=e.getBBox()}catch{t=L_(e),r=1}return t&&(t.width||t.height)||r||(t=L_(e)),t&&!t.width&&!t.x&&!t.y?{x:+I_(e,["x","cx","x1"])||0,y:+I_(e,["y","cy","y1"])||0,width:0,height:0}:t},Vy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Hy(e))},Os=function(e,t){if(t){var r=e.style,i;t in oo&&t!==hr&&(t=Yt),r.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),r.removeProperty(i==="--"?t:t.replace(Qm,"-$1").toLowerCase())):r.removeAttribute(t)}},Ao=function(e,t,r,i,o,s){var a=new fr(e._pt,t,r,0,1,s?Uy:By);return e._pt=a,a.b=i,a.e=o,e._props.push(r),a},O_={deg:1,rad:1,turn:1},hP={grid:1,flex:1},Vo=function n(e,t,r,i){var o=parseFloat(r)||0,s=(r+"").trim().substr((o+"").length)||"px",a=bs.style,l=eP.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",g,m,_,p;if(i===s||!o||O_[i]||O_[s])return o;if(s!=="px"&&!f&&(o=n(e,t,r,"px")),p=e.getCTM&&Vy(e),(h||s==="%")&&(oo[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],tn(h?o/g*d:o/100*g);if(a[l?"width":"height"]=d+(f?s:i),m=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===To||!m.appendChild)&&(m=To.body),_=m._gsap,_&&h&&_.width&&l&&_.time===Er.time&&!_.uncache)return tn(o/_.width*d);if(h&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+i,g=e[u],S?e.style[t]=S:Os(e,t)}else(h||s==="%")&&!hP[Ri(m,"display")]&&(a.position=Ri(e,"position")),m===e&&(a.position="static"),m.appendChild(bs),g=bs[u],m.removeChild(bs),a.position="absolute";return l&&h&&(_=ws(m),_.time=Er.time,_.width=m[u]),tn(f?g*o/d:g&&o?d/g*o:0)},Wi=function(e,t,r,i){var o;return Zm||Lp(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),oo[t]&&t!=="transform"?(o=Ec(e,i),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Ed(Ri(e,hr))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=Cd[t]&&Cd[t](e,t,r)||Ri(e,t)||iy(e,t)||(t==="opacity"?1:0))),r&&!~(o+"").trim().indexOf(" ")?Vo(e,t,o,r)+r:o},pP=function(e,t,r,i){if(!r||r==="none"){var o=rl(t,e,1),s=o&&Ri(e,o,1);s&&s!==r?(t=o,r=s):t==="borderColor"&&(r=Ri(e,"borderTopColor"))}var a=new fr(this._pt,e.style,t,0,1,Ly),l=0,c=0,u,d,f,h,g,m,_,p,S,v,b,T;if(a.b=r,a.e=i,r+="",i+="",i==="auto"&&(m=e.style[t],e.style[t]=i,i=Ri(e,t)||i,m?e.style[t]=m:Os(e,t)),u=[r,i],wy(u),r=u[0],i=u[1],f=r.match(xa)||[],T=i.match(xa)||[],T.length){for(;d=xa.exec(i);)_=d[0],S=i.substring(l,d.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),_!==(m=f[c++]||"")&&(h=parseFloat(m)||0,b=m.substr((h+"").length),_.charAt(1)==="="&&(_=Oa(h,_)+b),p=parseFloat(_),v=_.substr((p+"").length),l=xa.lastIndex-v.length,v||(v=v||Pr.units[t]||b,l===i.length&&(i+=v,a.e+=v)),b!==v&&(h=Vo(e,t,m,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Uy:By;return J1.test(i)&&(a.e=0),this._pt=a,a},B_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mP=function(e){var t=e.split(" "),r=t[0],i=t[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),t[0]=B_[r]||r,t[1]=B_[i]||i,t.join(" ")},gP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var r=t.t,i=r.style,o=t.u,s=r._gsap,a,l,c;if(o==="all"||o===!0)i.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],oo[a]&&(l=1,a=a==="transformOrigin"?hr:Yt),Os(r,a);l&&(Os(r,Yt),s&&(s.svg&&r.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ec(r,1),s.uncache=1,Ny(i)))}},Cd={clearProps:function(e,t,r,i,o){if(o.data!=="isFromStart"){var s=e._pt=new fr(e._pt,t,r,0,0,gP);return s.u=i,s.pr=-10,s.tween=o,e._props.push(r),1}}},Cc=[1,0,0,1,0,0],Gy={},$y=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},U_=function(e){var t=Ri(e,Yt);return $y(t)?Cc:t.substr(7).match(Z1).map(tn)},eg=function(e,t){var r=e._gsap||ws(e),i=e.style,o=U_(e),s,a,l,c;return r.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?Cc:o):(o===Cc&&!e.offsetParent&&e!==Ba&&!r.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ba.appendChild(e)),o=U_(e),l?i.display=l:Os(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):Ba.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Ip=function(e,t,r,i,o,s){var a=e._gsap,l=o||eg(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],g=l[1],m=l[2],_=l[3],p=l[4],S=l[5],v=t.split(" "),b=parseFloat(v[0])||0,T=parseFloat(v[1])||0,R,E,D,y;r?l!==Cc&&(E=h*_-g*m)&&(D=b*(_/E)+T*(-m/E)+(m*S-_*p)/E,y=b*(-g/E)+T*(h/E)-(h*S-g*p)/E,b=D,T=y):(R=Hy(e),b=R.x+(~v[0].indexOf("%")?b/100*R.width:b),T=R.y+(~(v[1]||v[0]).indexOf("%")?T/100*R.height:T)),i||i!==!1&&a.smooth?(p=b-c,S=T-u,a.xOffset=d+(p*h+S*m)-p,a.yOffset=f+(p*g+S*_)-S):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!r,e.style[hr]="0px 0px",s&&(Ao(s,a,"xOrigin",c,b),Ao(s,a,"yOrigin",u,T),Ao(s,a,"xOffset",d,a.xOffset),Ao(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+T)},Ec=function(e,t){var r=e._gsap||new Ty(e);if("x"in r&&!t&&!r.uncache)return r;var i=e.style,o=r.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=Ri(e,hr)||"0",u,d,f,h,g,m,_,p,S,v,b,T,R,E,D,y,x,I,O,F,X,J,W,V,H,de,B,me,Ce,Ge,re,he;return u=d=f=m=_=p=S=v=b=0,h=g=1,r.svg=!!(e.getCTM&&Vy(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),i.scale=i.rotate=i.translate="none"),E=eg(e,r.svg),r.svg&&(r.uncache?(H=e.getBBox(),c=r.xOrigin-H.x+"px "+(r.yOrigin-H.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Ip(e,V||c,!!V||r.originIsAbsolute,r.smooth!==!1,E)),T=r.xOrigin||0,R=r.yOrigin||0,E!==Cc&&(I=E[0],O=E[1],F=E[2],X=E[3],u=J=E[4],d=W=E[5],E.length===6?(h=Math.sqrt(I*I+O*O),g=Math.sqrt(X*X+F*F),m=I||O?la(O,I)*cs:0,S=F||X?la(F,X)*cs+m:0,S&&(g*=Math.abs(Math.cos(S*Ua))),r.svg&&(u-=T-(T*I+R*F),d-=R-(T*O+R*X))):(he=E[6],Ge=E[7],B=E[8],me=E[9],Ce=E[10],re=E[11],u=E[12],d=E[13],f=E[14],D=la(he,Ce),_=D*cs,D&&(y=Math.cos(-D),x=Math.sin(-D),V=J*y+B*x,H=W*y+me*x,de=he*y+Ce*x,B=J*-x+B*y,me=W*-x+me*y,Ce=he*-x+Ce*y,re=Ge*-x+re*y,J=V,W=H,he=de),D=la(-F,Ce),p=D*cs,D&&(y=Math.cos(-D),x=Math.sin(-D),V=I*y-B*x,H=O*y-me*x,de=F*y-Ce*x,re=X*x+re*y,I=V,O=H,F=de),D=la(O,I),m=D*cs,D&&(y=Math.cos(D),x=Math.sin(D),V=I*y+O*x,H=J*y+W*x,O=O*y-I*x,W=W*y-J*x,I=V,J=H),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,p=180-p),h=tn(Math.sqrt(I*I+O*O+F*F)),g=tn(Math.sqrt(W*W+he*he)),D=la(J,W),S=Math.abs(D)>2e-4?D*cs:0,b=re?1/(re<0?-re:re):0),r.svg&&(V=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!$y(Ri(e,Yt)),V&&e.setAttribute("transform",V))),Math.abs(S)>90&&Math.abs(S)<270&&(o?(h*=-1,S+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||r.uncache,r.x=u-((r.xPercent=u&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+s,r.y=d-((r.yPercent=d&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+s,r.z=f+s,r.scaleX=tn(h),r.scaleY=tn(g),r.rotation=tn(m)+a,r.rotationX=tn(_)+a,r.rotationY=tn(p)+a,r.skewX=S+a,r.skewY=v+a,r.transformPerspective=b+s,(r.zOrigin=parseFloat(c.split(" ")[2])||!t&&r.zOrigin||0)&&(i[hr]=Ed(c)),r.xOffset=r.yOffset=0,r.force3D=Pr.force3D,r.renderTransform=r.svg?bP:zy?Wy:_P,r.uncache=0,r},Ed=function(e){return(e=e.split(" "))[0]+" "+e[1]},lh=function(e,t,r){var i=On(t);return tn(parseFloat(t)+parseFloat(Vo(e,"x",r+"px",i)))+i},_P=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Wy(e,t)},is="0deg",yl="0px",os=") ",Wy=function(e,t){var r=t||this,i=r.xPercent,o=r.yPercent,s=r.x,a=r.y,l=r.z,c=r.rotation,u=r.rotationY,d=r.rotationX,f=r.skewX,h=r.skewY,g=r.scaleX,m=r.scaleY,_=r.transformPerspective,p=r.force3D,S=r.target,v=r.zOrigin,b="",T=p==="auto"&&e&&e!==1||p===!0;if(v&&(d!==is||u!==is)){var R=parseFloat(u)*Ua,E=Math.sin(R),D=Math.cos(R),y;R=parseFloat(d)*Ua,y=Math.cos(R),s=lh(S,s,E*y*-v),a=lh(S,a,-Math.sin(R)*-v),l=lh(S,l,D*y*-v+v)}_!==yl&&(b+="perspective("+_+os),(i||o)&&(b+="translate("+i+"%, "+o+"%) "),(T||s!==yl||a!==yl||l!==yl)&&(b+=l!==yl||T?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+os),c!==is&&(b+="rotate("+c+os),u!==is&&(b+="rotateY("+u+os),d!==is&&(b+="rotateX("+d+os),(f!==is||h!==is)&&(b+="skew("+f+", "+h+os),(g!==1||m!==1)&&(b+="scale("+g+", "+m+os),S.style[Yt]=b||"translate(0, 0)"},bP=function(e,t){var r=t||this,i=r.xPercent,o=r.yPercent,s=r.x,a=r.y,l=r.rotation,c=r.skewX,u=r.skewY,d=r.scaleX,f=r.scaleY,h=r.target,g=r.xOrigin,m=r.yOrigin,_=r.xOffset,p=r.yOffset,S=r.forceCSS,v=parseFloat(s),b=parseFloat(a),T,R,E,D,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ua,c*=Ua,T=Math.cos(l)*d,R=Math.sin(l)*d,E=Math.sin(l-c)*-f,D=Math.cos(l-c)*f,c&&(u*=Ua,y=Math.tan(c-u),y=Math.sqrt(1+y*y),E*=y,D*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),T*=y,R*=y)),T=tn(T),R=tn(R),E=tn(E),D=tn(D)):(T=d,D=f,R=E=0),(v&&!~(s+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(v=Vo(h,"x",s,"px"),b=Vo(h,"y",a,"px")),(g||m||_||p)&&(v=tn(v+g-(g*T+m*E)+_),b=tn(b+m-(g*R+m*D)+p)),(i||o)&&(y=h.getBBox(),v=tn(v+i/100*y.width),b=tn(b+o/100*y.height)),y="matrix("+T+","+R+","+E+","+D+","+v+","+b+")",h.setAttribute("transform",y),S&&(h.style[Yt]=y)},vP=function(e,t,r,i,o){var s=360,a=Mn(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?cs:1),c=l-i,u=i+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-360)),d==="cw"&&c<0?c=(c+s*k_)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*k_)%s-~~(c/s)*s)),e._pt=f=new fr(e._pt,t,r,i,c,nP),f.e=u,f.u="deg",e._props.push(r),f},N_=function(e,t){for(var r in t)e[r]=t[r];return e},yP=function(e,t,r){var i=N_({},r._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=r.style,a,l,c,u,d,f,h,g;i.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),s[Yt]=t,a=Ec(r,1),Os(r,Yt),r.setAttribute("transform",c)):(c=getComputedStyle(r)[Yt],s[Yt]=t,a=Ec(r,1),s[Yt]=c);for(l in oo)c=i[l],u=a[l],c!==u&&o.indexOf(l)<0&&(h=On(c),g=On(u),d=h!==g?Vo(r,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new fr(e._pt,a,l,d,f-d,kp),e._pt.u=g||0,e._props.push(l));N_(a,i)};dr("padding,margin,Width,Radius",function(n,e){var t="Top",r="Right",i="Bottom",o="Left",s=(e<3?[t,r,i,o]:[t+o,t+r,i+r,i+o]).map(function(a){return e<2?n+a:"border"+a+n});Cd[e>1?"border"+n:n]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=s.map(function(g){return Wi(a,g,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},s.forEach(function(g,m){return h[g]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(l,h,d)}});var Xy={name:"css",register:Lp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,i,o){var s=this._props,a=e.style,l=r.vars.startAt,c,u,d,f,h,g,m,_,p,S,v,b,T,R,E,D;Zm||Lp(),this.styles=this.styles||Fy(e),D=this.styles.props,this.tween=r;for(m in t)if(m!=="autoRound"&&(u=t[m],!(wr[m]&&Ay(m,t,r,i,e,o)))){if(h=typeof u,g=Cd[m],h==="function"&&(u=u.call(r,i,e,o),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Sc(u)),g)g(this,e,m,u,r)&&(E=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Oo.lastIndex=0,Oo.test(c)||(_=On(c),p=On(u)),p?_!==p&&(c=Vo(e,m,c,p)+p):_&&(u+=_),this.add(a,"setProperty",c,u,i,o,0,0,m),s.push(m),D.push(m,0,a[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(r,i,e,o):l[m],Mn(c)&&~c.indexOf("random(")&&(c=Sc(c)),On(c+"")||c==="auto"||(c+=Pr.units[m]||On(Wi(e,m))||""),(c+"").charAt(1)==="="&&(c=Wi(e,m))):c=Wi(e,m),f=parseFloat(c),S=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),m in wi&&(m==="autoAlpha"&&(f===1&&Wi(e,"visibility")==="hidden"&&d&&(f=0),D.push("visibility",0,a.visibility),Ao(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=wi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in oo,v){if(this.styles.save(m),b||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ec(e,t.parseTransform),R=t.smoothOrigin!==!1&&T.smooth,b=this._pt=new fr(this._pt,a,Yt,0,1,T.renderTransform,T,0,-1),b.dep=1),m==="scale")this._pt=new fr(this._pt,T,"scaleY",T.scaleY,(S?Oa(T.scaleY,S+d):d)-T.scaleY||0,kp),this._pt.u=0,s.push("scaleY",m),m+="X";else if(m==="transformOrigin"){D.push(hr,0,a[hr]),u=mP(u),T.svg?Ip(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&Ao(this,T,"zOrigin",T.zOrigin,p),Ao(this,a,m,Ed(c),Ed(u)));continue}else if(m==="svgOrigin"){Ip(e,u,1,R,0,this);continue}else if(m in Gy){vP(this,T,m,f,S?Oa(f,S+u):u);continue}else if(m==="smoothOrigin"){Ao(this,T,"smooth",T.smooth,u);continue}else if(m==="force3D"){T[m]=u;continue}else if(m==="transform"){yP(this,u,e);continue}}else m in a||(m=rl(m)||m);if(v||(d||d===0)&&(f||f===0)&&!tP.test(u)&&m in a)_=(c+"").substr((f+"").length),d||(d=0),p=On(u)||(m in Pr.units?Pr.units[m]:_),_!==p&&(f=Vo(e,m,c,p)),this._pt=new fr(this._pt,v?T:a,m,f,(S?Oa(f,S+d):d)-f,!v&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?iP:kp),this._pt.u=p||0,_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=rP);else if(m in a)pP.call(this,e,m,c,S?S+u:u);else if(m in e)this.add(e,m,c||e[m],S?S+u:u,i,o);else if(m!=="parseTransform"){Vm(m,u);continue}v||(m in a?D.push(m,0,a[m]):typeof e[m]=="function"?D.push(m,2,e[m]()):D.push(m,1,c||e[m])),s.push(m)}}E&&Iy(this)},render:function(e,t){if(t.tween._time||!Jm())for(var r=t._pt;r;)r.r(e,r.d),r=r._next;else t.styles.revert()},get:Wi,aliases:wi,getSetter:function(e,t,r){var i=wi[t];return i&&i.indexOf(",")<0&&(t=i),t in oo&&t!==hr&&(e._gsap.x||Wi(e,"x"))?r&&P_===r?t==="scale"?lP:aP:(P_=r||{})&&(t==="scale"?cP:uP):e.style&&!Fm(e.style[t])?oP:~t.indexOf("-")?sP:qm(e,t)},core:{_removeProperty:Os,_getMatrix:eg}};mr.utils.checkPrefix=rl;mr.core.getStyleSaver=Fy;(function(n,e,t,r){var i=dr(n+","+e+","+t,function(o){oo[o]=1});dr(e,function(o){Pr.units[o]="deg",Gy[o]=1}),wi[i[13]]=n+","+e,dr(r,function(o){var s=o.split(":");wi[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");dr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Pr.units[n]="px"});mr.registerPlugin(Xy);var Op=mr.registerPlugin(Xy)||mr;Op.core.Tween;/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let jy;const nf=n=>jy=n,Yy=Symbol();function Bp(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var ql;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ql||(ql={}));function xP(){const n=Wb(!0),e=n.run(()=>nr({}));let t=[],r=[];const i=um({install(o){nf(i),i._a=o,o.provide(Yy,i),o.config.globalProperties.$pinia=i,r.forEach(s=>t.push(s)),r=[]},use(o){return this._a?t.push(o):r.push(o),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return i}const qy=()=>{};function F_(n,e,t,r=qy){n.push(e);const i=()=>{const o=n.indexOf(e);o>-1&&(n.splice(o,1),r())};return!t&&Xb()&&fS(i),i}function ca(n,...e){n.slice().forEach(t=>{t(...e)})}const SP=n=>n(),z_=Symbol(),ch=Symbol();function Up(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],i=n[t];Bp(i)&&Bp(r)&&n.hasOwnProperty(t)&&!qt(r)&&!eo(r)?n[t]=Up(i,r):n[t]=r}return n}const wP=Symbol();function MP(n){return!Bp(n)||!Object.prototype.hasOwnProperty.call(n,wP)}const{assign:bo}=Object;function CP(n){return!!(qt(n)&&n.effect)}function EP(n,e,t,r){const{state:i,actions:o,getters:s}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=i?i():{});const u=IS(t.state.value[n]);return bo(u,o,Object.keys(s||{}).reduce((d,f)=>(d[f]=um(lr(()=>{nf(t);const h=t._s.get(n);return s[f].call(h,h)})),d),{}))}return l=Ky(n,c,e,t,r,!0),l}function Ky(n,e,t={},r,i,o){let s;const a=bo({actions:{}},t),l={deep:!0};let c,u,d=[],f=[],h;const g=r.state.value[n];!o&&!g&&(r.state.value[n]={}),nr({});let m;function _(D){let y;c=u=!1,typeof D=="function"?(D(r.state.value[n]),y={type:ql.patchFunction,storeId:n,events:h}):(Up(r.state.value[n],D),y={type:ql.patchObject,payload:D,storeId:n,events:h});const x=m=Symbol();Vd().then(()=>{m===x&&(c=!0)}),u=!0,ca(d,y,r.state.value[n])}const p=o?function(){const{state:y}=t,x=y?y():{};this.$patch(I=>{bo(I,x)})}:qy;function S(){s.stop(),d=[],f=[],r._s.delete(n)}const v=(D,y="")=>{if(z_ in D)return D[ch]=y,D;const x=function(){nf(r);const I=Array.from(arguments),O=[],F=[];function X(V){O.push(V)}function J(V){F.push(V)}ca(f,{args:I,name:x[ch],store:T,after:X,onError:J});let W;try{W=D.apply(this&&this.$id===n?this:T,I)}catch(V){throw ca(F,V),V}return W instanceof Promise?W.then(V=>(ca(O,V),V)).catch(V=>(ca(F,V),Promise.reject(V))):(ca(O,W),W)};return x[z_]=!0,x[ch]=y,x},b={_p:r,$id:n,$onAction:F_.bind(null,f),$patch:_,$reset:p,$subscribe(D,y={}){const x=F_(d,D,y.detached,()=>I()),I=s.run(()=>xi(()=>r.state.value[n],O=>{(y.flush==="sync"?u:c)&&D({storeId:n,type:ql.direct,events:h},O)},bo({},l,y)));return x},$dispose:S},T=zs(b);r._s.set(n,T);const E=(r._a&&r._a.runWithContext||SP)(()=>r._e.run(()=>(s=Wb()).run(()=>e({action:v}))));for(const D in E){const y=E[D];if(qt(y)&&!CP(y)||eo(y))o||(g&&MP(y)&&(qt(y)?y.value=g[D]:Up(y,g[D])),r.state.value[n][D]=y);else if(typeof y=="function"){const x=v(y,D);E[D]=x,a.actions[D]=y}}return bo(T,E),bo(mt(T),E),Object.defineProperty(T,"$state",{get:()=>r.state.value[n],set:D=>{_(y=>{bo(y,D)})}}),r._p.forEach(D=>{bo(T,s.run(()=>D({store:T,app:r._a,pinia:r,options:a})))}),g&&o&&t.hydrate&&t.hydrate(T.$state,g),c=!0,u=!0,T}/*! #__NO_SIDE_EFFECTS__ */function TP(n,e,t){let r;const i=typeof e=="function";r=i?t:e;function o(s,a){const l=mw();return s=s||(l?Ei(Yy,null):null),s&&nf(s),s=jy,s._s.has(n)||(i?Ky(n,e,r,s):EP(n,r,s)),s._s.get(n)}return o.$id=n,o}function AP(n){const e=mt(n),t={};for(const r in e){const i=e[r];i.effect?t[r]=lr({get:()=>n[r],set(o){n[r]=o}}):(qt(i)||eo(i))&&(t[r]=US(n,r))}return t}const RP=TP("controls",()=>{const n=nr(!0),e=nr(!0),t=nr(!0),r=nr(!0);return{isAnimationActive:n,isZoomActive:e,isRotationActive:t,isPanActive:r,toggleAnimation:l=>{n.value=l},toggleZoom:l=>{e.value=l},toggleRotation:l=>{t.value=l},togglePan:l=>{r.value=l}}});function PP(n,e){return n?n.classList?n.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(n.className):!1}function rf(n,e){if(n&&e){const t=r=>{PP(n,r)||(n.classList?n.classList.add(r):n.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function kP(){return window.innerWidth-document.documentElement.offsetWidth}function Zy(n){for(const e of document==null?void 0:document.styleSheets)try{for(const t of e==null?void 0:e.cssRules)for(const r of t==null?void 0:t.style)if(n.test(r))return{name:r,value:t.style.getPropertyValue(r).trim()}}catch{}return null}function Np(n="p-overflow-hidden"){const e=Zy(/-scrollbar-width$/);e!=null&&e.name&&document.body.style.setProperty(e.name,kP()+"px"),rf(document.body,n)}function ed(n,e){if(n&&e){const t=r=>{n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function Td(n="p-overflow-hidden"){const e=Zy(/-scrollbar-width$/);e!=null&&e.name&&document.body.style.removeProperty(e.name),ed(document.body,n)}function DP(){let n=window,e=document,t=e.documentElement,r=e.getElementsByTagName("body")[0],i=n.innerWidth||t.clientWidth||r.clientWidth,o=n.innerHeight||t.clientHeight||r.clientHeight;return{width:i,height:o}}function LP(n,e){n&&(typeof e=="string"?n.style.cssText=e:Object.entries(e).forEach(([t,r])=>n.style[t]=r))}function Jy(n,e){return n instanceof HTMLElement?n.offsetWidth:0}function Vs(n){return typeof HTMLElement=="object"?n instanceof HTMLElement:n&&typeof n=="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}function Ad(n,e={}){if(Vs(n)){const t=(r,i)=>{var o,s;const a=(o=n==null?void 0:n.$attrs)!=null&&o[r]?[(s=n==null?void 0:n.$attrs)==null?void 0:s[r]]:[];return[i].flat().reduce((l,c)=>{if(c!=null){const u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){const d=Array.isArray(c)?t(r,c):Object.entries(c).map(([f,h])=>r==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},a)};Object.entries(e).forEach(([r,i])=>{if(i!=null){const o=r.match(/^on(.+)/);o?n.addEventListener(o[1].toLowerCase(),i):r==="p-bind"||r==="pBind"?Ad(n,i):(i=r==="class"?[...new Set(t("class",i))].join(" ").trim():r==="style"?t("style",i).join(";").trim():i,(n.$attrs=n.$attrs||{})&&(n.$attrs[r]=i),n.setAttribute(r,i))}})}}function Qy(n,e={},...t){{const r=document.createElement(n);return Ad(r,e),r.append(...t),r}}function IP(n,e){return Vs(n)?Array.from(n.querySelectorAll(e)):[]}function OP(n,e){return Vs(n)?n.matches(e)?n:n.querySelector(e):null}function vs(n,e){n&&document.activeElement!==n&&n.focus(e)}function ex(n,e){if(Vs(n)){const t=n.getAttribute(e);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function tx(n,e=""){let t=IP(n,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),r=[];for(let i of t)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&r.push(i);return r}function xl(n,e){const t=tx(n,e);return t.length>0?t[0]:null}function H_(n){if(n){let e=n.offsetHeight,t=getComputedStyle(n);return e-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),e}return 0}function BP(n){if(n){let e=n.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function UP(n,e){const t=tx(n,e);return t.length>0?t[t.length-1]:null}function NP(n){if(n){let e=n.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function nx(n,e){return n?n.offsetHeight:0}function FP(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&BP(n))}function V_(n){if(n){let e=n.offsetWidth,t=getComputedStyle(n);return e-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),e}return 0}function zP(n,e,t){return Vs(n)?ex(n,e)===t:!1}function tg(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function G_(n,e=""){return Vs(n)?n.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}function rx(n,e="",t){Vs(n)&&t!==null&&t!==void 0&&n.setAttribute(e,t)}function HP(){let n=[];const e=(s,a,l=999)=>{const c=i(s,a,l),u=c.value+(c.key===s?0:l)+1;return n.push({key:s,value:u}),u},t=s=>{n=n.filter(a=>a.value!==s)},r=(s,a)=>i(s).value,i=(s,a,l=0)=>[...n].reverse().find(c=>!0)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,a,l)=>{a&&(a.style.zIndex=String(e(s,!0,l)))},clear:s=>{s&&(t(o(s)),s.style.zIndex="")},getCurrent:s=>r(s)}}var Na=HP();function ix(){const n=new Map;return{on(e,t){let r=n.get(e);return r?r.push(t):r=[t],n.set(e,r),this},off(e,t){let r=n.get(e);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(e,t){let r=n.get(e);r&&r.slice().map(i=>{i(t)})},clear(){n.clear()}}}var VP=Object.defineProperty,$_=Object.getOwnPropertySymbols,GP=Object.prototype.hasOwnProperty,$P=Object.prototype.propertyIsEnumerable,W_=(n,e,t)=>e in n?VP(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,WP=(n,e)=>{for(var t in e||(e={}))GP.call(e,t)&&W_(n,t,e[t]);if($_)for(var t of $_(e))$P.call(e,t)&&W_(n,t,e[t]);return n};function Gs(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&typeof n=="object"&&Object.keys(n).length===0}function ng(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Nt(n){return!Gs(n)}function Di(n,e=!0){return n instanceof Object&&n.constructor===Object&&(e||Object.keys(n).length!==0)}function Vr(n,...e){return ng(n)?n(...e):n}function pr(n,e=!0){return typeof n=="string"&&(e||n!=="")}function ti(n){return pr(n)?n.replace(/(-|_)/g,"").toLowerCase():n}function rg(n,e="",t={}){const r=ti(e).split("."),i=r.shift();return i?Di(n)?rg(Vr(n[Object.keys(n).find(o=>ti(o)===i)||""],t),r.join("."),t):void 0:Vr(n,t)}function of(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}function XP(n){return Nt(n)&&!isNaN(n)}function Ji(n,e){if(e){const t=e.test(n);return e.lastIndex=0,t}return!1}function ox(...n){const e=(t={},r={})=>{const i=WP({},t);return Object.keys(r).forEach(o=>{Di(r[o])&&o in t&&Di(t[o])?i[o]=e(t[o],r[o]):i[o]=r[o]}),i};return n.reduce((t,r,i)=>i===0?r:e(t,r),{})}function Kl(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function jP(n){return pr(n,!1)?n[0].toUpperCase()+n.slice(1):n}function sx(n){return pr(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,t)=>t===0?e:"-"+e.toLowerCase()).toLowerCase():n}function X_(n){return pr(n)?n.replace(/[A-Z]/g,(e,t)=>t===0?e:"."+e.toLowerCase()).toLowerCase():n}var Mu={};function ig(n="pui_id_"){return Mu.hasOwnProperty(n)||(Mu[n]=0),Mu[n]++,`${n}${Mu[n]}`}function j_(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return ig(n)}var YP=Object.defineProperty,qP=Object.defineProperties,KP=Object.getOwnPropertyDescriptors,Rd=Object.getOwnPropertySymbols,ax=Object.prototype.hasOwnProperty,lx=Object.prototype.propertyIsEnumerable,Y_=(n,e,t)=>e in n?YP(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ni=(n,e)=>{for(var t in e||(e={}))ax.call(e,t)&&Y_(n,t,e[t]);if(Rd)for(var t of Rd(e))lx.call(e,t)&&Y_(n,t,e[t]);return n},uh=(n,e)=>qP(n,KP(e)),Hi=(n,e)=>{var t={};for(var r in n)ax.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&Rd)for(var r of Rd(n))e.indexOf(r)<0&&lx.call(n,r)&&(t[r]=n[r]);return t};function ZP(...n){return ox(...n)}var JP=ix(),Qr=JP;function q_(n,e){of(n)?n.push(...e||[]):Di(n)&&Object.assign(n,e)}function QP(n){return Di(n)&&n.hasOwnProperty("value")&&n.hasOwnProperty("type")?n.value:n}function ek(n){return n.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Fp(n="",e=""){return ek(`${pr(n,!1)&&pr(e,!1)?`${n}-`:n}${e}`)}function cx(n="",e=""){return`--${Fp(n,e)}`}function tk(n=""){const e=(n.match(/{/g)||[]).length,t=(n.match(/}/g)||[]).length;return(e+t)%2!==0}function ux(n,e="",t="",r=[],i){if(pr(n)){const o=/{([^}]*)}/g,s=n.trim();if(tk(s))return;if(Ji(s,o)){const a=s.replaceAll(o,u=>{const f=u.replace(/{|}/g,"").split(".").filter(h=>!r.some(g=>Ji(h,g)));return`var(${cx(t,sx(f.join("-")))}${Nt(i)?`, ${i}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return Ji(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(XP(n))return n}function nk(n,e,t){pr(e,!1)&&n.push(`${e}:${t};`)}function _a(n,e){return n?`${n}{${e}}`:""}var Zl=(...n)=>rk(Rt.getTheme(),...n),rk=(n={},e,t,r)=>{if(e){const{variable:i,options:o}=Rt.defaults||{},{prefix:s,transform:a}=(n==null?void 0:n.options)||o||{},c=Ji(e,/{([^}]*)}/g)?e:`{${e}}`;return r==="value"||Gs(r)&&a==="strict"?Rt.getTokenValue(e):ux(c,void 0,s,[i.excludedKeyRegex],t)}return""};function ik(n,e={}){const t=Rt.defaults.variable,{prefix:r=t.prefix,selector:i=t.selector,excludedKeyRegex:o=t.excludedKeyRegex}=e,s=(c,u="")=>Object.entries(c).reduce((d,[f,h])=>{const g=Ji(f,o)?Fp(u):Fp(u,sx(f)),m=QP(h);if(Di(m)){const{variables:_,tokens:p}=s(m,g);q_(d.tokens,p),q_(d.variables,_)}else d.tokens.push((r?g.replace(`${r}-`,""):g).replaceAll("-",".")),nk(d.variables,cx(g),ux(m,g,r,[o]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(n,r);return{value:a,tokens:l,declarations:a.join(""),css:_a(i,a.join(""))}}var Zr={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(n){return{type:"class",selector:n,matched:this.pattern.test(n.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(n){return{type:"attr",selector:`:root${n}`,matched:this.pattern.test(n.trim())}}},media:{pattern:/^@media (.*)$/,resolve(n){return{type:"media",selector:`${n}{:root{[CSS]}}`,matched:this.pattern.test(n.trim())}}},system:{pattern:/^system$/,resolve(n){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(n.trim())}}},custom:{resolve(n){return{type:"custom",selector:n,matched:!0}}}},resolve(n){const e=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[n].flat().map(t=>{var r;return(r=e.map(i=>i.resolve(t)).find(i=>i.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(n,e){return ik(n,{prefix:e==null?void 0:e.prefix})},getCommon({name:n="",theme:e={},params:t,set:r,defaults:i}){var o,s,a,l,c,u,d;const{preset:f,options:h}=e;let g,m,_,p,S,v,b;if(Nt(f)&&h.transform!=="strict"){const{primitive:T,semantic:R,extend:E}=f,D=R||{},{colorScheme:y}=D,x=Hi(D,["colorScheme"]),I=E||{},{colorScheme:O}=I,F=Hi(I,["colorScheme"]),X=y||{},{dark:J}=X,W=Hi(X,["dark"]),V=O||{},{dark:H}=V,de=Hi(V,["dark"]),B=Nt(T)?this._toVariables({primitive:T},h):{},me=Nt(x)?this._toVariables({semantic:x},h):{},Ce=Nt(W)?this._toVariables({light:W},h):{},Ge=Nt(J)?this._toVariables({dark:J},h):{},re=Nt(F)?this._toVariables({semantic:F},h):{},he=Nt(de)?this._toVariables({light:de},h):{},ve=Nt(H)?this._toVariables({dark:H},h):{},[z,le]=[(o=B.declarations)!=null?o:"",B.tokens],[j,te]=[(s=me.declarations)!=null?s:"",me.tokens||[]],[be,P]=[(a=Ce.declarations)!=null?a:"",Ce.tokens||[]],[k,M]=[(l=Ge.declarations)!=null?l:"",Ge.tokens||[]],[ne,Z]=[(c=re.declarations)!=null?c:"",re.tokens||[]],[L,oe]=[(u=he.declarations)!=null?u:"",he.tokens||[]],[ce,se]=[(d=ve.declarations)!=null?d:"",ve.tokens||[]];g=this.transformCSS(n,z,"light","variable",h,r,i),m=le;const C=this.transformCSS(n,`${j}${be}`,"light","variable",h,r,i),w=this.transformCSS(n,`${k}`,"dark","variable",h,r,i);_=`${C}${w}`,p=[...new Set([...te,...P,...M])];const U=this.transformCSS(n,`${ne}${L}color-scheme:light`,"light","variable",h,r,i),Y=this.transformCSS(n,`${ce}color-scheme:dark`,"dark","variable",h,r,i);S=`${U}${Y}`,v=[...new Set([...Z,...oe,...se])],b=Vr(f.css,{dt:Zl})}return{primitive:{css:g,tokens:m},semantic:{css:_,tokens:p},global:{css:S,tokens:v},style:b}},getPreset({name:n="",preset:e={},options:t,params:r,set:i,defaults:o,selector:s}){var a,l,c;let u,d,f;if(Nt(e)&&t.transform!=="strict"){const h=n.replace("-directive",""),g=e,{colorScheme:m,extend:_,css:p}=g,S=Hi(g,["colorScheme","extend","css"]),v=_||{},{colorScheme:b}=v,T=Hi(v,["colorScheme"]),R=m||{},{dark:E}=R,D=Hi(R,["dark"]),y=b||{},{dark:x}=y,I=Hi(y,["dark"]),O=Nt(S)?this._toVariables({[h]:ni(ni({},S),T)},t):{},F=Nt(D)?this._toVariables({[h]:ni(ni({},D),I)},t):{},X=Nt(E)?this._toVariables({[h]:ni(ni({},E),x)},t):{},[J,W]=[(a=O.declarations)!=null?a:"",O.tokens||[]],[V,H]=[(l=F.declarations)!=null?l:"",F.tokens||[]],[de,B]=[(c=X.declarations)!=null?c:"",X.tokens||[]],me=this.transformCSS(h,`${J}${V}`,"light","variable",t,i,o,s),Ce=this.transformCSS(h,de,"dark","variable",t,i,o,s);u=`${me}${Ce}`,d=[...new Set([...W,...H,...B])],f=Vr(p,{dt:Zl})}return{css:u,tokens:d,style:f}},getPresetC({name:n="",theme:e={},params:t,set:r,defaults:i}){var o;const{preset:s,options:a}=e,l=(o=s==null?void 0:s.components)==null?void 0:o[n];return this.getPreset({name:n,preset:l,options:a,params:t,set:r,defaults:i})},getPresetD({name:n="",theme:e={},params:t,set:r,defaults:i}){var o;const s=n.replace("-directive",""),{preset:a,options:l}=e,c=(o=a==null?void 0:a.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:r,defaults:i})},applyDarkColorScheme(n){return!(n.darkModeSelector==="none"||n.darkModeSelector===!1)},getColorSchemeOption(n,e){var t;return this.applyDarkColorScheme(n)?this.regex.resolve(n.darkModeSelector===!0?e.options.darkModeSelector:(t=n.darkModeSelector)!=null?t:e.options.darkModeSelector):[]},getLayerOrder(n,e={},t,r){const{cssLayer:i}=e;return i?`@layer ${Vr(i.order||"primeui",t)}`:""},getCommonStyleSheet({name:n="",theme:e={},params:t,props:r={},set:i,defaults:o}){const s=this.getCommon({name:n,theme:e,params:t,set:i,defaults:o}),a=Object.entries(r).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u!=null&&u.css){const d=Kl(u==null?void 0:u.css),f=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:n="",theme:e={},params:t,props:r={},set:i,defaults:o}){var s;const a={name:n,theme:e,params:t,set:i,defaults:o},l=(s=n.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(r).reduce((u,[d,f])=>u.push(`${d}="${f}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${n}-variables" ${c}>${Kl(l)}</style>`:""},createTokens(n={},e,t="",r="",i={}){return Object.entries(n).forEach(([o,s])=>{const a=Ji(o,e.variable.excludedKeyRegex)?t:t?`${t}.${X_(o)}`:X_(o),l=r?`${r}.${o}`:o;Di(s)?this.createTokens(s,e,a,l,i):(i[a]||(i[a]={paths:[],computed(c,u={}){var d,f;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(f=this.paths.find(h=>h.scheme===c))==null?void 0:f.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),i[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){const d=/{([^}]*)}/g;let f=s;if(u.name=this.path,u.binding||(u.binding={}),Ji(s,d)){const g=s.trim().replaceAll(d,p=>{var S;const v=p.replace(/{|}/g,""),b=(S=i[v])==null?void 0:S.computed(c,u);return of(b)&&b.length===2?`light-dark(${b[0].value},${b[1].value})`:b==null?void 0:b.value}),m=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,_=/var\([^)]+\)/g;f=Ji(g.replace(_,"0"),m)?`calc(${g})`:g}return Gs(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:f.includes("undefined")?void 0:f}}}))}),i},getTokenValue(n,e,t){var r;const o=(l=>l.split(".").filter(u=>!Ji(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(r=n[o])==null?void 0:r.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{const u=c,{colorScheme:d}=u,f=Hi(u,["colorScheme"]);return l[d]=f,l},void 0)},getSelectorRule(n,e,t,r){return t==="class"||t==="attr"?_a(Nt(e)?`${n}${e},${n} ${e}`:n,r):_a(n,Nt(e)?_a(e,r):r)},transformCSS(n,e,t,r,i={},o,s,a){if(Nt(e)){const{cssLayer:l}=i;if(r!=="style"){const c=this.getColorSchemeOption(i,s);e=t==="dark"?c.reduce((u,{type:d,selector:f})=>(Nt(f)&&(u+=f.includes("[CSS]")?f.replace("[CSS]",e):this.getSelectorRule(f,a,d,e)),u),""):_a(a??":root",e)}if(l){const c={name:"primeui",order:"primeui"};Di(l)&&(c.name=Vr(l.name,{name:n,type:r})),Nt(c.name)&&(e=_a(`@layer ${c.name}`,e),o==null||o.layerNames(c.name))}return e}return""}},Rt={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(n={}){const{theme:e}=n;e&&(this._theme=uh(ni({},e),{options:ni(ni({},this.defaults.options),e.options)}),this._tokens=Zr.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var n;return((n=this.theme)==null?void 0:n.preset)||{}},get options(){var n;return((n=this.theme)==null?void 0:n.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(n){this.update({theme:n}),Qr.emit("theme:change",n)},getPreset(){return this.preset},setPreset(n){this._theme=uh(ni({},this.theme),{preset:n}),this._tokens=Zr.createTokens(n,this.defaults),this.clearLoadedStyleNames(),Qr.emit("preset:change",n),Qr.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(n){this._theme=uh(ni({},this.theme),{options:n}),this.clearLoadedStyleNames(),Qr.emit("options:change",n),Qr.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(n){this._layerNames.add(n)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(n){return this._loadedStyleNames.has(n)},setLoadedStyleName(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(n){return Zr.getTokenValue(this.tokens,n,this.defaults)},getCommon(n="",e){return Zr.getCommon({name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Zr.getPresetC(t)},getDirective(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Zr.getPresetD(t)},getCustomPreset(n="",e,t,r){const i={name:n,preset:e,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Zr.getPreset(i)},getLayerOrderCSS(n=""){return Zr.getLayerOrder(n,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(n="",e,t="style",r){return Zr.transformCSS(n,e,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(n="",e,t={}){return Zr.getCommonStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(n,e,t={}){return Zr.getStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(n){this._loadingStyles.add(n)},onStyleUpdated(n){this._loadingStyles.add(n)},onStyleLoaded(n,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),Qr.emit(`theme:${e}:load`,n),!this._loadingStyles.size&&Qr.emit("theme:load"))}},Co={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function Tc(n){"@babel/helpers - typeof";return Tc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tc(n)}function K_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Z_(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?K_(Object(t),!0).forEach(function(r){ok(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):K_(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ok(n,e,t){return(e=sk(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function sk(n){var e=ak(n,"string");return Tc(e)=="symbol"?e:e+""}function ak(n,e){if(Tc(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Tc(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function lk(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Kv()?Gc(n):e?n():Vd(n)}var ck=0;function uk(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=nr(!1),r=nr(n),i=nr(null),o=tg()?window.document:void 0,s=e.document,a=s===void 0?o:s,l=e.immediate,c=l===void 0?!0:l,u=e.manual,d=u===void 0?!1:u,f=e.name,h=f===void 0?"style_".concat(++ck):f,g=e.id,m=g===void 0?void 0:g,_=e.media,p=_===void 0?void 0:_,S=e.nonce,v=S===void 0?void 0:S,b=e.first,T=b===void 0?!1:b,R=e.onMounted,E=R===void 0?void 0:R,D=e.onUpdated,y=D===void 0?void 0:D,x=e.onLoad,I=x===void 0?void 0:x,O=e.props,F=O===void 0?{}:O,X=function(){},J=function(H){var de=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var B=Z_(Z_({},F),de),me=B.name||h,Ce=B.id||m,Ge=B.nonce||v;i.value=a.querySelector('style[data-primevue-style-id="'.concat(me,'"]'))||a.getElementById(Ce)||a.createElement("style"),i.value.isConnected||(r.value=H||n,Ad(i.value,{type:"text/css",id:Ce,media:p,nonce:Ge}),T?a.head.prepend(i.value):a.head.appendChild(i.value),rx(i.value,"data-primevue-style-id",me),Ad(i.value,B),i.value.onload=function(re){return I==null?void 0:I(re,{name:me})},E==null||E(me)),!t.value&&(X=xi(r,function(re){i.value.textContent=re,y==null||y(me)},{immediate:!0}),t.value=!0)}},W=function(){!a||!t.value||(X(),FP(i.value)&&a.head.removeChild(i.value),t.value=!1)};return c&&!d&&lk(J),{id:m,name:h,el:i,css:r,unload:W,load:J,isLoaded:am(t)}}function Ac(n){"@babel/helpers - typeof";return Ac=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ac(n)}function J_(n,e){return pk(n)||hk(n,e)||fk(n,e)||dk()}function dk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fk(n,e){if(n){if(typeof n=="string")return Q_(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Q_(n,e):void 0}}function Q_(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function hk(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e!==0)for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function pk(n){if(Array.isArray(n))return n}function eb(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function dh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?eb(Object(t),!0).forEach(function(r){mk(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):eb(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function mk(n,e,t){return(e=gk(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function gk(n){var e=_k(n,"string");return Ac(e)=="symbol"?e:e+""}function _k(n,e){if(Ac(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ac(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var bk=function(e){var t=e.dt;return`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(t("disabled.opacity"),`;
}

.pi {
    font-size: `).concat(t("icon.size"),`;
}

.p-icon {
    width: `).concat(t("icon.size"),`;
    height: `).concat(t("icon.size"),`;
}

.p-overlay-mask {
    background: `).concat(t("mask.background"),`;
    color: `).concat(t("mask.color"),`;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(t("mask.transition.duration"),` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(t("mask.transition.duration"),` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(t("mask.background"),`;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(t("mask.background"),`;
    }
    to {
        background: transparent;
    }
}
`)},vk=function(e){var t=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(t("scrollbar.width"),`;
}
`)},yk={},xk={},Pt={name:"base",css:vk,theme:bk,classes:yk,inlineStyles:xk,load:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(o){return o},i=r(Vr(e,{dt:Zl}));return Nt(i)?uk(Kl(i),dh({name:this.name},t)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.theme,t,function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return Rt.transformCSS(t.name||e.name,"".concat(i).concat(r))})},getCommonTheme:function(e){return Rt.getCommon(this.name,e)},getComponentTheme:function(e){return Rt.getComponent(this.name,e)},getDirectiveTheme:function(e){return Rt.getDirective(this.name,e)},getPresetTheme:function(e,t,r){return Rt.getCustomPreset(this.name,e,t,r)},getLayerOrderThemeCSS:function(){return Rt.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Vr(this.css,{dt:Zl})||"",i=Kl("".concat(r).concat(e)),o=Object.entries(t).reduce(function(s,a){var l=J_(a,2),c=l[0],u=l[1];return s.push("".concat(c,'="').concat(u,'"'))&&s},[]).join(" ");return Nt(i)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(o,">").concat(i,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Rt.getCommonStyleSheet(this.name,e,t)},getThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[Rt.getStyleSheet(this.name,e,t)];if(this.theme){var i=this.name==="base"?"global-style":"".concat(this.name,"-style"),o=Vr(this.theme,{dt:Zl}),s=Kl(Rt.transformCSS(i,o)),a=Object.entries(t).reduce(function(l,c){var u=J_(c,2),d=u[0],f=u[1];return l.push("".concat(d,'="').concat(f,'"'))&&l},[]).join(" ");Nt(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(i,'" ').concat(a,">").concat(s,"</style>"))}return r.join("")},extend:function(e){return dh(dh({},this),{},{css:void 0,theme:void 0},e)}},tb=Pt.extend({name:"common"});function Rc(n){"@babel/helpers - typeof";return Rc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rc(n)}function Sk(n){return hx(n)||wk(n)||fx(n)||dx()}function wk(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Sl(n,e){return hx(n)||Mk(n,e)||fx(n,e)||dx()}function dx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fx(n,e){if(n){if(typeof n=="string")return nb(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?nb(n,e):void 0}}function nb(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function Mk(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function hx(n){if(Array.isArray(n))return n}function rb(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function ut(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?rb(Object(t),!0).forEach(function(r){Rl(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):rb(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Rl(n,e,t){return(e=Ck(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ck(n){var e=Ek(n,"string");return Rc(e)=="symbol"?e:e+""}function Ek(n,e){if(Rc(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Rc(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var cl={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var t=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return t._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var e,t,r,i,o,s,a,l,c,u,d,f=(e=this.pt)===null||e===void 0?void 0:e._usept,h=f?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,g=f?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(i=g||h)===null||i===void 0||(i=i.hooks)===null||i===void 0||(o=i.onBeforeCreate)===null||o===void 0||o.call(i);var m=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,_=m?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,p=m?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=p||_)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(d=u.onBeforeCreate)===null||d===void 0||d.call(u),this.$attrSelector=ig("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=OP(this.$el,'[data-pc-name="'.concat(ti(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=ut({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),r==null||r()}},_mergeProps:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return ng(e)?e.apply(void 0,r):Ve.apply(void 0,r)},_loadStyles:function(){var e=this,t=function(){Co.isStyleNameLoaded("base")||(Pt.loadCSS(e.$styleOptions),e._loadGlobalStyles(),Co.setLoadedStyleName("base")),e._loadThemeStyles()};t(),this._themeChangeListener(t)},_loadCoreStyles:function(){var e,t;!Co.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name&&(tb.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Co.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Nt(e)&&Pt.load(e,ut({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,t;if(!(this.isUnstyled||this.$theme==="none")){if(!Rt.isStyleNameLoaded("common")){var r,i,o=((r=this.$style)===null||r===void 0||(i=r.getCommonTheme)===null||i===void 0?void 0:i.call(r))||{},s=o.primitive,a=o.semantic,l=o.global,c=o.style;Pt.load(s==null?void 0:s.css,ut({name:"primitive-variables"},this.$styleOptions)),Pt.load(a==null?void 0:a.css,ut({name:"semantic-variables"},this.$styleOptions)),Pt.load(l==null?void 0:l.css,ut({name:"global-variables"},this.$styleOptions)),Pt.loadTheme(ut({name:"global-style"},this.$styleOptions),c),Rt.setLoadedStyleName("common")}if(!Rt.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name){var u,d,f,h,g=((u=this.$style)===null||u===void 0||(d=u.getComponentTheme)===null||d===void 0?void 0:d.call(u))||{},m=g.css,_=g.style;(f=this.$style)===null||f===void 0||f.load(m,ut({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadTheme(ut({name:"".concat(this.$style.name,"-style")},this.$styleOptions),_),Rt.setLoadedStyleName(this.$style.name)}if(!Rt.isStyleNameLoaded("layer-order")){var p,S,v=(p=this.$style)===null||p===void 0||(S=p.getLayerOrderThemeCSS)===null||S===void 0?void 0:S.call(p);Pt.load(v,ut({name:"layer-order",first:!0},this.$styleOptions)),Rt.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var t,r,i,o=((t=this.$style)===null||t===void 0||(r=t.getPresetTheme)===null||r===void 0?void 0:r.call(t,e,"[".concat(this.$attrSelector,"]")))||{},s=o.css,a=(i=this.$style)===null||i===void 0?void 0:i.load(s,ut({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Co.clearLoadedStyleNames(),Qr.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return rg(e,t,r)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!i[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,f=o?s?this._useGlobalPT(this._getPTClassValue,r,i):this._useDefaultPT(this._getPTClassValue,r,i):void 0,h=s?void 0:this._getPTSelf(t,this._getPTClassValue,r,ut(ut({},i),{},{global:f||{}})),g=this._getPTDatasets(r);return c||!c&&h?d?this._mergeProps(d,f,h,g):ut(ut(ut({},f),h),g):ut(ut({},h),g)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return Ve(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i="data-pc-",o=r==="root"&&Nt((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&ut(ut({},r==="root"&&ut(ut(Rl({},"".concat(i,"name"),ti(o?(t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]:this.$.type.name)),o&&Rl({},"".concat(i,"extend"),ti(this.$.type.name))),tg()&&Rl({},"".concat(this.$attrSelector),""))),{},Rl({},"".concat(i,"section"),ti(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return pr(e)||of(e)?{class:e}:e},_getPT:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,o=function(a){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i?i(a):a,d=ti(r),f=ti(t.$name);return(l=c?d!==f?u==null?void 0:u[d]:void 0:u==null?void 0:u[d])!==null&&l!==void 0?l:u};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)},_usePT:function(e,t,r,i){var o=function(m){return t(m,r,i)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,f=o(e.originalValue),h=o(e.value);return f===void 0&&h===void 0?void 0:pr(h)?h:pr(f)?f:c||!c&&h?d?this._mergeProps(d,f,h):ut(ut({},f),h):h}return o(e)},_useGlobalPT:function(e,t,r){return this._usePT(this.globalPT,e,t,r)},_useDefaultPT:function(e,t,r){return this._usePT(this.defaultPT,e,t,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,ut(ut({},this.$params),t))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ve(this.$_attrsWithoutPT,this.ptm(e,t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,ut({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,ut(ut({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var i=this._getOptionValue(this.$style.inlineStyles,e,ut(ut({},this.$params),r)),o=this._getOptionValue(tb.inlineStyles,e,ut(ut({},this.$params),r));return[o,i]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return Vr(r,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return t._getOptionValue(r,t.$name,ut({},t.$params))||Vr(r,ut({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$inProps:function(){var e,t=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(r){var i=Sl(r,1),o=i[0];return t==null?void 0:t.includes(o)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return ut(ut({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=Sl(e,1),r=t[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,t){var r=Sl(t,2),i=r[0],o=r[1],s=i.split(":"),a=Sk(s),l=a.slice(1);return l==null||l.reduce(function(c,u,d,f){return!c[u]&&(c[u]=d===f.length-1?o:{}),c[u]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=Sl(e,1),r=t[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,t){var r=Sl(t,2),i=r[0],o=r[1];return e[i]=o,e},{})}}},Tk=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ak=Pt.extend({name:"baseicon",css:Tk});function Pc(n){"@babel/helpers - typeof";return Pc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pc(n)}function ib(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function ob(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ib(Object(t),!0).forEach(function(r){Rk(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ib(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Rk(n,e,t){return(e=Pk(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Pk(n){var e=kk(n,"string");return Pc(e)=="symbol"?e:e+""}function kk(n,e){if(Pc(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Pc(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var lo={name:"BaseIcon",extends:cl,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:Ak,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=Gs(this.label);return ob(ob({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},og={name:"TimesIcon",extends:lo};function Dk(n,e,t,r,i,o){return Fe(),lt("svg",Ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Tt("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1)]),16)}og.render=Dk;var px={name:"WindowMaximizeIcon",extends:lo};function Lk(n,e,t,r,i,o){return Fe(),lt("svg",Ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Tt("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}px.render=Lk;var mx={name:"WindowMinimizeIcon",extends:lo};function Ik(n,e,t,r,i,o){return Fe(),lt("svg",Ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Tt("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}mx.render=Ik;var gx={name:"SpinnerIcon",extends:lo};function Ok(n,e,t,r,i,o){return Fe(),lt("svg",Ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Tt("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}gx.render=Ok;var Bk=function(e){var t=e.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(t("badge.border.radius"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(t("badge.padding"),`;
    background: `).concat(t("badge.primary.background"),`;
    color: `).concat(t("badge.primary.color"),`;
    font-size: `).concat(t("badge.font.size"),`;
    font-weight: `).concat(t("badge.font.weight"),`;
    min-width: `).concat(t("badge.min.width"),`;
    height: `).concat(t("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(t("badge.dot.size"),`;
    min-width: `).concat(t("badge.dot.size"),`;
    height: `).concat(t("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(t("badge.secondary.background"),`;
    color: `).concat(t("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(t("badge.success.background"),`;
    color: `).concat(t("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(t("badge.info.background"),`;
    color: `).concat(t("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(t("badge.warn.background"),`;
    color: `).concat(t("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(t("badge.danger.background"),`;
    color: `).concat(t("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(t("badge.contrast.background"),`;
    color: `).concat(t("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(t("badge.sm.font.size"),`;
    min-width: `).concat(t("badge.sm.min.width"),`;
    height: `).concat(t("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(t("badge.lg.font.size"),`;
    min-width: `).concat(t("badge.lg.min.width"),`;
    height: `).concat(t("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(t("badge.xl.font.size"),`;
    min-width: `).concat(t("badge.xl.min.width"),`;
    height: `).concat(t("badge.xl.height"),`;
}
`)},Uk={root:function(e){var t=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":Nt(t.value)&&String(t.value).length===1,"p-badge-dot":Gs(t.value)&&!r.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]}},Nk=Pt.extend({name:"badge",theme:Bk,classes:Uk}),Fk={name:"BaseBadge",extends:cl,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:Nk,provide:function(){return{$pcBadge:this,$parentInstance:this}}},_x={name:"Badge",extends:Fk,inheritAttrs:!1};function zk(n,e,t,r,i,o){return Fe(),lt("span",Ve({class:n.cx("root")},n.ptmi("root")),[Jt(n.$slots,"default",{},function(){return[ka(Ps(n.value),1)]})],16)}_x.render=zk;var wa=ix();function kc(n){"@babel/helpers - typeof";return kc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kc(n)}function sb(n,e){return $k(n)||Gk(n,e)||Vk(n,e)||Hk()}function Hk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vk(n,e){if(n){if(typeof n=="string")return ab(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ab(n,e):void 0}}function ab(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function Gk(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e!==0)for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function $k(n){if(Array.isArray(n))return n}function lb(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function gt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?lb(Object(t),!0).forEach(function(r){zp(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):lb(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function zp(n,e,t){return(e=Wk(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Wk(n){var e=Xk(n,"string");return kc(e)=="symbol"?e:e+""}function Xk(n,e){if(kc(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(kc(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var rt={_getMeta:function(){return[Di(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],Vr(Di(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,t){var r,i,o;return(r=(e==null||(i=e.instance)===null||i===void 0?void 0:i.$primevue)||(t==null||(o=t.ctx)===null||o===void 0||(o=o.appContext)===null||o===void 0||(o=o.config)===null||o===void 0||(o=o.globalProperties)===null||o===void 0?void 0:o.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:rg,_getPTValue:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var S=rt._getOptionValue.apply(rt,arguments);return pr(S)||of(S)?{class:S}:S},c=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((t=r.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},u=c.mergeSections,d=u===void 0?!0:u,f=c.mergeProps,h=f===void 0?!1:f,g=a?rt._useDefaultPT(r,r.defaultPT(),l,o,s):void 0,m=rt._usePT(r,rt._getPT(i,r.$name),l,o,gt(gt({},s),{},{global:g||{}})),_=rt._getPTDatasets(r,o);return d||!d&&m?h?rt._mergeProps(r,h,g,m,_):gt(gt(gt({},g),m),_):gt(gt({},m),_)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return gt(gt({},t==="root"&&zp({},"".concat(r,"name"),ti(e.$name))),{},zp({},"".concat(r,"section"),ti(t)))},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(s){var a,l=r?r(s):s,c=ti(t);return(a=l==null?void 0:l[c])!==null&&a!==void 0?a:l};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,s=function(_){return r(_,i,o)};if(t!=null&&t.hasOwnProperty("_usept")){var a,l=t._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},c=l.mergeSections,u=c===void 0?!0:c,d=l.mergeProps,f=d===void 0?!1:d,h=s(t.originalValue),g=s(t.value);return h===void 0&&g===void 0?void 0:pr(g)?g:pr(h)?h:u||!u&&g?f?rt._mergeProps(e,f,h,g):gt(gt({},h),g):g}return s(t)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return rt._usePT(e,t,r,i,o)},_loadStyles:function(e,t,r){var i,o=rt._getConfig(t,r),s={nonce:o==null||(i=o.csp)===null||i===void 0?void 0:i.nonce};rt._loadCoreStyles(e.$instance,s),rt._loadThemeStyles(e.$instance,s),rt._loadScopedThemeStyles(e.$instance,s),rt._themeChangeListener(function(){return rt._loadThemeStyles(e.$instance,s)})},_loadCoreStyles:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!Co.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(t=r.$style)!==null&&t!==void 0&&t.name){var o;Pt.loadCSS(i),(o=r.$style)===null||o===void 0||o.loadCSS(i),Co.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,t,r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!(i!=null&&i.isUnstyled()||(i==null||(e=i.theme)===null||e===void 0?void 0:e.call(i))==="none")){if(!Rt.isStyleNameLoaded("common")){var s,a,l=((s=i.$style)===null||s===void 0||(a=s.getCommonTheme)===null||a===void 0?void 0:a.call(s))||{},c=l.primitive,u=l.semantic,d=l.global,f=l.style;Pt.load(c==null?void 0:c.css,gt({name:"primitive-variables"},o)),Pt.load(u==null?void 0:u.css,gt({name:"semantic-variables"},o)),Pt.load(d==null?void 0:d.css,gt({name:"global-variables"},o)),Pt.loadTheme(gt({name:"global-style"},o),f),Rt.setLoadedStyleName("common")}if(!Rt.isStyleNameLoaded((t=i.$style)===null||t===void 0?void 0:t.name)&&(r=i.$style)!==null&&r!==void 0&&r.name){var h,g,m,_,p=((h=i.$style)===null||h===void 0||(g=h.getDirectiveTheme)===null||g===void 0?void 0:g.call(h))||{},S=p.css,v=p.style;(m=i.$style)===null||m===void 0||m.load(S,gt({name:"".concat(i.$style.name,"-variables")},o)),(_=i.$style)===null||_===void 0||_.loadTheme(gt({name:"".concat(i.$style.name,"-style")},o),v),Rt.setLoadedStyleName(i.$style.name)}if(!Rt.isStyleNameLoaded("layer-order")){var b,T,R=(b=i.$style)===null||b===void 0||(T=b.getLayerOrderThemeCSS)===null||T===void 0?void 0:T.call(b);Pt.load(R,gt({name:"layer-order",first:!0},o)),Rt.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var i,o,s,a=((i=e.$style)===null||i===void 0||(o=i.getPresetTheme)===null||o===void 0?void 0:o.call(i,r,"[".concat(e.$attrSelector,"]")))||{},l=a.css,c=(s=e.$style)===null||s===void 0?void 0:s.load(l,gt({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},t));e.scopedStyleEl=c.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Co.clearLoadedStyleNames(),Qr.on("theme:change",e)},_hook:function(e,t,r,i,o,s){var a,l,c="on".concat(jP(t)),u=rt._getConfig(i,o),d=r==null?void 0:r.$instance,f=rt._usePT(d,rt._getPT(i==null||(a=i.value)===null||a===void 0?void 0:a.pt,e),rt._getOptionValue,"hooks.".concat(c)),h=rt._useDefaultPT(d,u==null||(l=u.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],rt._getOptionValue,"hooks.".concat(c)),g={el:r,binding:i,vnode:o,prevVnode:s};f==null||f(d,g),h==null||h(d,g)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,t=arguments.length,r=new Array(t>2?t-2:0),i=2;i<t;i++)r[i-2]=arguments[i];return ng(e)?e.apply(void 0,r):Ve.apply(void 0,r)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(s,a,l,c,u){var d,f,h,g;a._$instances=a._$instances||{};var m=rt._getConfig(l,c),_=a._$instances[e]||{},p=Gs(_)?gt(gt({},t),t==null?void 0:t.methods):{};a._$instances[e]=gt(gt({},_),{},{$name:e,$host:a,$binding:l,$modifiers:l==null?void 0:l.modifiers,$value:l==null?void 0:l.value,$el:_.$el||a||void 0,$style:gt({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},t==null?void 0:t.style),$primevueConfig:m,$attrSelector:(d=a.$pd)===null||d===void 0||(d=d[e])===null||d===void 0?void 0:d.attrSelector,defaultPT:function(){return rt._getPT(m==null?void 0:m.pt,void 0,function(v){var b;return v==null||(b=v.directives)===null||b===void 0?void 0:b[e]})},isUnstyled:function(){var v,b;return((v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.unstyled)!==void 0?(b=a.$instance)===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.unstyled:m==null?void 0:m.unstyled},theme:function(){var v;return(v=a.$instance)===null||v===void 0||(v=v.$primevueConfig)===null||v===void 0?void 0:v.theme},preset:function(){var v;return(v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.dt},ptm:function(){var v,b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return rt._getPTValue(a.$instance,(v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.pt,b,gt({},T))},ptmo:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return rt._getPTValue(a.$instance,v,b,T,!1)},cx:function(){var v,b,T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(v=a.$instance)!==null&&v!==void 0&&v.isUnstyled()?void 0:rt._getOptionValue((b=a.$instance)===null||b===void 0||(b=b.$style)===null||b===void 0?void 0:b.classes,T,gt({},R))},sx:function(){var v,b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return T?rt._getOptionValue((v=a.$instance)===null||v===void 0||(v=v.$style)===null||v===void 0?void 0:v.inlineStyles,b,gt({},R)):void 0}},p),a.$instance=a._$instances[e],(f=(h=a.$instance)[s])===null||f===void 0||f.call(h,a,l,c,u),a["$".concat(e)]=a.$instance,rt._hook(e,s,a,l,c,u),a.$pd||(a.$pd={}),a.$pd[e]=gt(gt({},(g=a.$pd)===null||g===void 0?void 0:g[e]),{},{name:e,instance:a.$instance})},i=function(s){var a,l,c,u,d,f=(a=s.$instance)===null||a===void 0?void 0:a.watch;f==null||(l=f.config)===null||l===void 0||l.call(s.$instance,(c=s.$instance)===null||c===void 0?void 0:c.$primevueConfig),wa.on("config:change",function(h){var g,m=h.newValue,_=h.oldValue;return f==null||(g=f.config)===null||g===void 0?void 0:g.call(s.$instance,m,_)}),f==null||(u=f["config.ripple"])===null||u===void 0||u.call(s.$instance,(d=s.$instance)===null||d===void 0||(d=d.$primevueConfig)===null||d===void 0?void 0:d.ripple),wa.on("config:ripple:change",function(h){var g,m=h.newValue,_=h.oldValue;return f==null||(g=f["config.ripple"])===null||g===void 0?void 0:g.call(s.$instance,m,_)})};return{created:function(s,a,l,c){s.$pd||(s.$pd={}),s.$pd[e]={name:e,attrSelector:ig("pd")},r("created",s,a,l,c)},beforeMount:function(s,a,l,c){rt._loadStyles(s,a,l),r("beforeMount",s,a,l,c),i(s)},mounted:function(s,a,l,c){rt._loadStyles(s,a,l),r("mounted",s,a,l,c)},beforeUpdate:function(s,a,l,c){r("beforeUpdate",s,a,l,c)},updated:function(s,a,l,c){rt._loadStyles(s,a,l),r("updated",s,a,l,c)},beforeUnmount:function(s,a,l,c){r("beforeUnmount",s,a,l,c)},unmounted:function(s,a,l,c){var u;(u=s.$instance)===null||u===void 0||(u=u.scopedStyleEl)===null||u===void 0||(u=u.value)===null||u===void 0||u.remove(),r("unmounted",s,a,l,c)}}},extend:function(){var e=rt._getMeta.apply(rt,arguments),t=sb(e,2),r=t[0],i=t[1];return gt({extend:function(){var s=rt._getMeta.apply(rt,arguments),a=sb(s,2),l=a[0],c=a[1];return rt.extend(l,gt(gt(gt({},i),i==null?void 0:i.methods),c))}},rt._extend(r,i))}},jk=function(e){var t=e.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(t("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},Yk={root:"p-ink"},qk=Pt.extend({name:"ripple-directive",theme:jk,classes:Yk}),Kk=rt.extend({style:qk});function Dc(n){"@babel/helpers - typeof";return Dc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dc(n)}function Zk(n){return t4(n)||e4(n)||Qk(n)||Jk()}function Jk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qk(n,e){if(n){if(typeof n=="string")return Hp(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Hp(n,e):void 0}}function e4(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function t4(n){if(Array.isArray(n))return Hp(n)}function Hp(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function cb(n,e,t){return(e=n4(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function n4(n){var e=r4(n,"string");return Dc(e)=="symbol"?e:e+""}function r4(n,e){if(Dc(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Dc(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var bx=Kk.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var t=Qy("span",cb(cb({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(t),this.$el=t},remove:function(e){var t=this.getInk(e);t&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=this,r=e.currentTarget,i=this.getInk(r);if(!(!i||getComputedStyle(i,null).display==="none")){if(!this.isUnstyled()&&ed(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!H_(i)&&!V_(i)){var o=Math.max(Jy(r),nx(r));i.style.height=o+"px",i.style.width=o+"px"}var s=NP(r),a=e.pageX-s.left+document.body.scrollTop-V_(i)/2,l=e.pageY-s.top+document.body.scrollLeft-H_(i)/2;i.style.top=l+"px",i.style.left=a+"px",!this.isUnstyled()&&rf(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!t.isUnstyled()&&ed(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&ed(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?Zk(e.children).find(function(t){return ex(t,"data-pc-name")==="ripple"}):void 0}}});function Lc(n){"@babel/helpers - typeof";return Lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lc(n)}function hi(n,e,t){return(e=i4(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i4(n){var e=o4(n,"string");return Lc(e)=="symbol"?e:e+""}function o4(n,e){if(Lc(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Lc(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var s4=function(e){var t=e.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("button.primary.color"),`;
    background: `).concat(t("button.primary.background"),`;
    border: 1px solid `).concat(t("button.primary.border.color"),`;
    padding: `).concat(t("button.padding.y")," ").concat(t("button.padding.x"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("button.transition.duration"),", color ").concat(t("button.transition.duration"),", border-color ").concat(t("button.transition.duration"),`,
            outline-color `).concat(t("button.transition.duration"),", box-shadow ").concat(t("button.transition.duration"),`;
    border-radius: `).concat(t("button.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(t("button.gap"),`;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(t("button.icon.only.width"),`;
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(t("button.icon.only.width"),`;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(t("button.sm.font.size"),`;
    padding: `).concat(t("button.sm.padding.y")," ").concat(t("button.sm.padding.x"),`;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(t("button.sm.font.size"),`;
}

.p-button-lg {
    font-size: `).concat(t("button.lg.font.size"),`;
    padding: `).concat(t("button.lg.padding.y")," ").concat(t("button.lg.padding.x"),`;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(t("button.lg.font.size"),`;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(t("button.label.font.weight"),`;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(t("button.icon.only.width"),`;
}

.p-button:not(:disabled):hover {
    background: `).concat(t("button.primary.hover.background"),`;
    border: 1px solid `).concat(t("button.primary.hover.border.color"),`;
    color: `).concat(t("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(t("button.primary.active.background"),`;
    border: 1px solid `).concat(t("button.primary.active.border.color"),`;
    color: `).concat(t("button.primary.active.color"),`;
}

.p-button:focus-visible {
    box-shadow: `).concat(t("button.primary.focus.ring.shadow"),`;
    outline: `).concat(t("button.focus.ring.width")," ").concat(t("button.focus.ring.style")," ").concat(t("button.primary.focus.ring.color"),`;
    outline-offset: `).concat(t("button.focus.ring.offset"),`;
}

.p-button .p-badge {
    min-width: `).concat(t("button.badge.size"),`;
    height: `).concat(t("button.badge.size"),`;
    line-height: `).concat(t("button.badge.size"),`;
}

.p-button-raised {
    box-shadow: `).concat(t("button.raised.shadow"),`;
}

.p-button-rounded {
    border-radius: `).concat(t("button.rounded.border.radius"),`;
}

.p-button-secondary {
    background: `).concat(t("button.secondary.background"),`;
    border: 1px solid `).concat(t("button.secondary.border.color"),`;
    color: `).concat(t("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.secondary.hover.background"),`;
    border: 1px solid `).concat(t("button.secondary.hover.border.color"),`;
    color: `).concat(t("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.secondary.active.background"),`;
    border: 1px solid `).concat(t("button.secondary.active.border.color"),`;
    color: `).concat(t("button.secondary.active.color"),`;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(t("button.secondary.focus.ring.color"),`;
    box-shadow: `).concat(t("button.secondary.focus.ring.shadow"),`;
}

.p-button-success {
    background: `).concat(t("button.success.background"),`;
    border: 1px solid `).concat(t("button.success.border.color"),`;
    color: `).concat(t("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.success.hover.background"),`;
    border: 1px solid `).concat(t("button.success.hover.border.color"),`;
    color: `).concat(t("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(t("button.success.active.background"),`;
    border: 1px solid `).concat(t("button.success.active.border.color"),`;
    color: `).concat(t("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(t("button.success.focus.ring.color"),`;
    box-shadow: `).concat(t("button.success.focus.ring.shadow"),`;
}

.p-button-info {
    background: `).concat(t("button.info.background"),`;
    border: 1px solid `).concat(t("button.info.border.color"),`;
    color: `).concat(t("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.info.hover.background"),`;
    border: 1px solid `).concat(t("button.info.hover.border.color"),`;
    color: `).concat(t("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(t("button.info.active.background"),`;
    border: 1px solid `).concat(t("button.info.active.border.color"),`;
    color: `).concat(t("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(t("button.info.focus.ring.color"),`;
    box-shadow: `).concat(t("button.info.focus.ring.shadow"),`;
}

.p-button-warn {
    background: `).concat(t("button.warn.background"),`;
    border: 1px solid `).concat(t("button.warn.border.color"),`;
    color: `).concat(t("button.warn.color"),`;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.warn.hover.background"),`;
    border: 1px solid `).concat(t("button.warn.hover.border.color"),`;
    color: `).concat(t("button.warn.hover.color"),`;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.warn.active.background"),`;
    border: 1px solid `).concat(t("button.warn.active.border.color"),`;
    color: `).concat(t("button.warn.active.color"),`;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(t("button.warn.focus.ring.color"),`;
    box-shadow: `).concat(t("button.warn.focus.ring.shadow"),`;
}

.p-button-help {
    background: `).concat(t("button.help.background"),`;
    border: 1px solid `).concat(t("button.help.border.color"),`;
    color: `).concat(t("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.help.hover.background"),`;
    border: 1px solid `).concat(t("button.help.hover.border.color"),`;
    color: `).concat(t("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(t("button.help.active.background"),`;
    border: 1px solid `).concat(t("button.help.active.border.color"),`;
    color: `).concat(t("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(t("button.help.focus.ring.color"),`;
    box-shadow: `).concat(t("button.help.focus.ring.shadow"),`;
}

.p-button-danger {
    background: `).concat(t("button.danger.background"),`;
    border: 1px solid `).concat(t("button.danger.border.color"),`;
    color: `).concat(t("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.danger.hover.background"),`;
    border: 1px solid `).concat(t("button.danger.hover.border.color"),`;
    color: `).concat(t("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.danger.active.background"),`;
    border: 1px solid `).concat(t("button.danger.active.border.color"),`;
    color: `).concat(t("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(t("button.danger.focus.ring.color"),`;
    box-shadow: `).concat(t("button.danger.focus.ring.shadow"),`;
}

.p-button-contrast {
    background: `).concat(t("button.contrast.background"),`;
    border: 1px solid `).concat(t("button.contrast.border.color"),`;
    color: `).concat(t("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.contrast.hover.background"),`;
    border: 1px solid `).concat(t("button.contrast.hover.border.color"),`;
    color: `).concat(t("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.contrast.active.background"),`;
    border: 1px solid `).concat(t("button.contrast.active.border.color"),`;
    color: `).concat(t("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(t("button.contrast.focus.ring.color"),`;
    box-shadow: `).concat(t("button.contrast.focus.ring.shadow"),`;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(t("button.outlined.primary.border.color"),`;
    color: `).concat(t("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(t("button.outlined.primary.hover.background"),`;
    border-color: `).concat(t("button.outlined.primary.border.color"),`;
    color: `).concat(t("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(t("button.outlined.primary.active.background"),`;
    border-color: `).concat(t("button.outlined.primary.border.color"),`;
    color: `).concat(t("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(t("button.outlined.secondary.border.color"),`;
    color: `).concat(t("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(t("button.outlined.secondary.border.color"),`;
    color: `).concat(t("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.outlined.secondary.active.background"),`;
    border-color: `).concat(t("button.outlined.secondary.border.color"),`;
    color: `).concat(t("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(t("button.outlined.success.border.color"),`;
    color: `).concat(t("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.outlined.success.hover.background"),`;
    border-color: `).concat(t("button.outlined.success.border.color"),`;
    color: `).concat(t("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(t("button.outlined.success.active.background"),`;
    border-color: `).concat(t("button.outlined.success.border.color"),`;
    color: `).concat(t("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(t("button.outlined.info.border.color"),`;
    color: `).concat(t("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.outlined.info.hover.background"),`;
    border-color: `).concat(t("button.outlined.info.border.color"),`;
    color: `).concat(t("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(t("button.outlined.info.active.background"),`;
    border-color: `).concat(t("button.outlined.info.border.color"),`;
    color: `).concat(t("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(t("button.outlined.warn.border.color"),`;
    color: `).concat(t("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.outlined.warn.hover.background"),`;
    border-color: `).concat(t("button.outlined.warn.border.color"),`;
    color: `).concat(t("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.outlined.warn.active.background"),`;
    border-color: `).concat(t("button.outlined.warn.border.color"),`;
    color: `).concat(t("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(t("button.outlined.help.border.color"),`;
    color: `).concat(t("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.outlined.help.hover.background"),`;
    border-color: `).concat(t("button.outlined.help.border.color"),`;
    color: `).concat(t("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(t("button.outlined.help.active.background"),`;
    border-color: `).concat(t("button.outlined.help.border.color"),`;
    color: `).concat(t("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(t("button.outlined.danger.border.color"),`;
    color: `).concat(t("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.outlined.danger.hover.background"),`;
    border-color: `).concat(t("button.outlined.danger.border.color"),`;
    color: `).concat(t("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.outlined.danger.active.background"),`;
    border-color: `).concat(t("button.outlined.danger.border.color"),`;
    color: `).concat(t("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(t("button.outlined.contrast.border.color"),`;
    color: `).concat(t("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(t("button.outlined.contrast.border.color"),`;
    color: `).concat(t("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.outlined.contrast.active.background"),`;
    border-color: `).concat(t("button.outlined.contrast.border.color"),`;
    color: `).concat(t("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(t("button.outlined.plain.border.color"),`;
    color: `).concat(t("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(t("button.outlined.plain.hover.background"),`;
    border-color: `).concat(t("button.outlined.plain.border.color"),`;
    color: `).concat(t("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(t("button.outlined.plain.active.background"),`;
    border-color: `).concat(t("button.outlined.plain.border.color"),`;
    color: `).concat(t("button.outlined.plain.color"),`;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(t("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(t("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(t("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(t("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"),`;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(t("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"),`;
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.contrast.color"),`;
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.text.contrast.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.contrast.color"),`;
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.text.contrast.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.contrast.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(t("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(t("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"),`;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.active.color"),`;
}
`)},a4={root:function(e){var t=e.instance,r=e.props;return["p-button p-component",hi(hi(hi(hi(hi(hi(hi(hi(hi({"p-button-icon-only":t.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link||r.variant==="link"},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text||r.variant==="text"),"p-button-outlined",r.outlined||r.variant==="outlined"),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",t.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var t=e.props;return["p-button-icon",hi({},"p-button-icon-".concat(t.iconPos),t.label)]},label:"p-button-label"},l4=Pt.extend({name:"button",theme:s4,classes:a4}),c4={name:"BaseButton",extends:cl,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:l4,provide:function(){return{$pcButton:this,$parentInstance:this}}},sf={name:"Button",extends:c4,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return Ve(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Gs(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:gx,Badge:_x},directives:{ripple:bx}};function u4(n,e,t,r,i,o){var s=ei("SpinnerIcon"),a=ei("Badge"),l=mm("ripple");return n.asChild?Jt(n.$slots,"default",{key:1,class:Uo(n.cx("root")),a11yAttrs:o.a11yAttrs}):fm((Fe(),un(Va(n.as),Ve({key:0,class:n.cx("root")},o.attrs),{default:qi(function(){return[Jt(n.$slots,"default",{},function(){return[n.loading?Jt(n.$slots,"loadingicon",Ve({key:0,class:[n.cx("loadingIcon"),n.cx("icon")]},n.ptm("loadingIcon")),function(){return[n.loadingIcon?(Fe(),lt("span",Ve({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(Fe(),un(s,Ve({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):Jt(n.$slots,"icon",Ve({key:1,class:[n.cx("icon")]},n.ptm("icon")),function(){return[n.icon?(Fe(),lt("span",Ve({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):Zn("",!0)]}),Tt("span",Ve({class:n.cx("label")},n.ptm("label")),Ps(n.label||" "),17),n.badge?(Fe(),un(a,{key:2,value:n.badge,class:Uo(n.badgeClass),severity:n.badgeSeverity,unstyled:n.unstyled,pt:n.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):Zn("",!0)]})]}),_:3},16,["class"])),[[l]])}sf.render=u4;var d4=Pt.extend({name:"focustrap-directive"}),f4=rt.extend({style:d4});function Ic(n){"@babel/helpers - typeof";return Ic=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ic(n)}function ub(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function db(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ub(Object(t),!0).forEach(function(r){h4(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ub(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function h4(n,e,t){return(e=p4(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p4(n){var e=m4(n,"string");return Ic(e)=="symbol"?e:e+""}function m4(n,e){if(Ic(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ic(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var vx=f4.extend("focustrap",{mounted:function(e,t){var r=t.value||{},i=r.disabled;i||(this.createHiddenFocusableElements(e,t),this.bind(e,t),this.autoElementFocus(e,t)),e.setAttribute("data-pd-focustrap",!0),this.$el=e},updated:function(e,t){var r=t.value||{},i=r.disabled;i&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(e??"")},bind:function(e,t){var r=this,i=t.value||{},o=i.onFocusIn,s=i.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(a){a.forEach(function(l){if(l.type==="childList"&&!e.contains(document.activeElement)){var c=function(d){var f=G_(d)?G_(d,r.getComputedSelector(e.$_pfocustrap_focusableselector))?d:xl(e,r.getComputedSelector(e.$_pfocustrap_focusableselector)):xl(d);return Nt(f)?f:d.nextSibling&&c(d.nextSibling)};vs(c(l.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(a){return o&&o(a)},e.$_pfocustrap_focusoutlistener=function(a){return s&&s(a)},e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e){this.autoElementFocus(this.$el,{value:db(db({},e),{},{autoFocus:!0})})},autoElementFocus:function(e,t){var r=t.value||{},i=r.autoFocusSelector,o=i===void 0?"":i,s=r.firstFocusableSelector,a=s===void 0?"":s,l=r.autoFocus,c=l===void 0?!1:l,u=xl(e,"[autofocus]".concat(this.getComputedSelector(o)));c&&!u&&(u=xl(e,this.getComputedSelector(a))),vs(u)},onFirstHiddenElementFocus:function(e){var t,r=e.currentTarget,i=e.relatedTarget,o=i===r.$_pfocustrap_lasthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(i))?xl(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_lasthiddenfocusableelement;vs(o)},onLastHiddenElementFocus:function(e){var t,r=e.currentTarget,i=e.relatedTarget,o=i===r.$_pfocustrap_firsthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(i))?UP(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_firsthiddenfocusableelement;vs(o)},createHiddenFocusableElements:function(e,t){var r=this,i=t.value||{},o=i.tabIndex,s=o===void 0?0:o,a=i.firstFocusableSelector,l=a===void 0?"":a,c=i.lastFocusableSelector,u=c===void 0?"":c,d=function(m){return Qy("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:s,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:m==null?void 0:m.bind(r)})},f=d(this.onFirstHiddenElementFocus),h=d(this.onLastHiddenElementFocus);f.$_pfocustrap_lasthiddenfocusableelement=h,f.$_pfocustrap_focusableselector=l,f.setAttribute("data-pc-section","firstfocusableelement"),h.$_pfocustrap_firsthiddenfocusableelement=f,h.$_pfocustrap_focusableselector=u,h.setAttribute("data-pc-section","lastfocusableelement"),e.prepend(f),e.append(h)}}}),sg={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=tg()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function g4(n,e,t,r,i,o){return o.inline?Jt(n.$slots,"default",{key:0}):i.mounted?(Fe(),un(XS,{key:1,to:t.appendTo},[Jt(n.$slots,"default")],8,["to"])):Zn("",!0)}sg.render=g4;var _4=function(e){var t=e.dt;return`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: `.concat(t("dialog.border.radius"),`;
    box-shadow: `).concat(t("dialog.shadow"),`;
    background: `).concat(t("dialog.background"),`;
    border: 1px solid `).concat(t("dialog.border.color"),`;
    color: `).concat(t("dialog.color"),`;
}

.p-dialog-content {
    overflow-y: auto;
    padding: `).concat(t("dialog.content.padding"),`;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(t("dialog.header.padding"),`;
}

.p-dialog-title {
    font-weight: `).concat(t("dialog.title.font.weight"),`;
    font-size: `).concat(t("dialog.title.font.size"),`;
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: `).concat(t("dialog.footer.padding"),`;
    display: flex;
    justify-content: flex-end;
    gap: `).concat(t("dialog.footer.gap"),`;
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: `).concat(t("dialog.header.gap"),`;
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-left:dir(rtl) .p-dialog-enter-from,
.p-dialog-left:dir(rtl) .p-dialog-leave-to,
.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-right:dir(rtl) .p-dialog-enter-from,
.p-dialog-right:dir(rtl) .p-dialog-leave-to,
.p-dialog-topright:dir(rtl) .p-dialog-enter-from,
.p-dialog-topright:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}
`)},b4={mask:function(e){var t=e.position,r=e.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"||t==="topleft"||t==="bottomleft"?"flex-start":t==="right"||t==="topright"||t==="bottomright"?"flex-end":"center",alignItems:t==="top"||t==="topleft"||t==="topright"?"flex-start":t==="bottom"||t==="bottomleft"||t==="bottomright"?"flex-end":"center",pointerEvents:r?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},v4={mask:function(e){var t=e.props,r=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],i=r.find(function(o){return o===t.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},i?"p-dialog-".concat(i):""]},root:function(e){var t=e.props,r=e.instance;return["p-dialog p-component",{"p-dialog-maximized":t.maximizable&&r.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},y4=Pt.extend({name:"dialog",theme:_4,classes:v4,inlineStyles:b4}),x4={name:"BaseDialog",extends:cl,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:y4,provide:function(){return{$pcDialog:this,$parentInstance:this}}},yx={name:"Dialog",extends:x4,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var e=this;return{dialogRef:lr(function(){return e._instance})}},data:function(){return{id:this.$attrs.id,containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},watch:{"$attrs.id":function(e){this.id=e||j_()}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&Na.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.id=this.id||j_(),this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&Na.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&rf(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),vs(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&Na.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(e){this.maskMouseDownTarget=e.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var e=function(i){return i&&i.querySelector("[autofocus]")},t=this.$slots.footer&&e(this.footerContainer);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=this.$slots.default&&e(this.content),t||(this.maximizable?(this.focusableMax=!0,t=this.maximizableButton):(this.focusableClose=!0,t=this.closeButton)))),t&&vs(t,{focusVisible:!0})},maximize:function(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?Np():Td())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&Np()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&Td()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},maximizableRef:function(e){this.maximizableButton=e?e.$el:void 0},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",rx(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var t="";for(var r in this.breakpoints)t+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[r],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=t}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(e){e.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&LP(document.body,{"user-select":"none"}),this.$emit("dragstart",e))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var e=this;this.documentDragListener=function(t){if(e.dragging){var r=Jy(e.container),i=nx(e.container),o=t.pageX-e.lastPageX,s=t.pageY-e.lastPageY,a=e.container.getBoundingClientRect(),l=a.left+o,c=a.top+s,u=DP(),d=getComputedStyle(e.container),f=parseFloat(d.marginLeft),h=parseFloat(d.marginTop);e.container.style.position="fixed",e.keepInViewport?(l>=e.minX&&l+r<u.width&&(e.lastPageX=t.pageX,e.container.style.left=l-f+"px"),c>=e.minY&&c+i<u.height&&(e.lastPageY=t.pageY,e.container.style.top=c-h+"px")):(e.lastPageX=t.pageX,e.container.style.left=l-f+"px",e.lastPageY=t.pageY,e.container.style.top=c-h+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var e=this;this.documentDragEndListener=function(t){e.dragging&&(e.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!e.isUnstyled&&(document.body.style["user-select"]=""),e.$emit("dragend",t))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:bx,focustrap:vx},components:{Button:sf,Portal:sg,WindowMinimizeIcon:mx,WindowMaximizeIcon:px,TimesIcon:og}};function Oc(n){"@babel/helpers - typeof";return Oc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oc(n)}function fb(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function hb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fb(Object(t),!0).forEach(function(r){S4(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):fb(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function S4(n,e,t){return(e=w4(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w4(n){var e=M4(n,"string");return Oc(e)=="symbol"?e:e+""}function M4(n,e){if(Oc(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Oc(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var C4=["aria-labelledby","aria-modal"],E4=["id"];function T4(n,e,t,r,i,o){var s=ei("Button"),a=ei("Portal"),l=mm("focustrap");return Fe(),un(a,{appendTo:n.appendTo},{default:qi(function(){return[i.containerVisible?(Fe(),lt("div",Ve({key:0,ref:o.maskRef,class:n.cx("mask"),style:n.sx("mask",!0,{position:n.position,modal:n.modal}),onMousedown:e[1]||(e[1]=function(){return o.onMaskMouseDown&&o.onMaskMouseDown.apply(o,arguments)}),onMouseup:e[2]||(e[2]=function(){return o.onMaskMouseUp&&o.onMaskMouseUp.apply(o,arguments)})},n.ptm("mask")),[zt(t1,Ve({name:"p-dialog",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},n.ptm("transition")),{default:qi(function(){return[n.visible?fm((Fe(),lt("div",Ve({key:0,ref:o.containerRef,class:n.cx("root"),style:n.sx("root"),role:"dialog","aria-labelledby":o.ariaLabelledById,"aria-modal":n.modal},n.ptmi("root")),[n.$slots.container?Jt(n.$slots,"container",{key:0,closeCallback:o.close,maximizeCallback:function(u){return o.maximize(u)}}):(Fe(),lt(nn,{key:1},[n.showHeader?(Fe(),lt("div",Ve({key:0,ref:o.headerContainerRef,class:n.cx("header"),onMousedown:e[0]||(e[0]=function(){return o.initDrag&&o.initDrag.apply(o,arguments)})},n.ptm("header")),[Jt(n.$slots,"header",{class:Uo(n.cx("title"))},function(){return[n.header?(Fe(),lt("span",Ve({key:0,id:o.ariaLabelledById,class:n.cx("title")},n.ptm("title")),Ps(n.header),17,E4)):Zn("",!0)]}),Tt("div",Ve({class:n.cx("headerActions")},n.ptm("headerActions")),[n.maximizable?(Fe(),un(s,Ve({key:0,ref:o.maximizableRef,autofocus:i.focusableMax,class:n.cx("pcMaximizeButton"),onClick:o.maximize,tabindex:n.maximizable?"0":"-1",unstyled:n.unstyled},n.maximizeButtonProps,{pt:n.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:qi(function(c){return[Jt(n.$slots,"maximizeicon",{maximized:i.maximized},function(){return[(Fe(),un(Va(o.maximizeIconComponent),Ve({class:[c.class,i.maximized?n.minimizeIcon:n.maximizeIcon]},n.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])):Zn("",!0),n.closable?(Fe(),un(s,Ve({key:1,ref:o.closeButtonRef,autofocus:i.focusableClose,class:n.cx("pcCloseButton"),onClick:o.close,"aria-label":o.closeAriaLabel,unstyled:n.unstyled},n.closeButtonProps,{pt:n.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:qi(function(c){return[Jt(n.$slots,"closeicon",{},function(){return[(Fe(),un(Va(n.closeIcon?"span":"TimesIcon"),Ve({class:[n.closeIcon,c.class]},n.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])):Zn("",!0)],16)],16)):Zn("",!0),Tt("div",Ve({ref:o.contentRef,class:[n.cx("content"),n.contentClass],style:n.contentStyle},hb(hb({},n.contentProps),n.ptm("content"))),[Jt(n.$slots,"default")],16),n.footer||n.$slots.footer?(Fe(),lt("div",Ve({key:1,ref:o.footerContainerRef,class:n.cx("footer")},n.ptm("footer")),[Jt(n.$slots,"footer",{},function(){return[ka(Ps(n.footer),1)]})],16)):Zn("",!0)],64))],16,C4)),[[l,{disabled:!n.modal}]]):Zn("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):Zn("",!0)]}),_:3},8,["appendTo"])}yx.render=T4;var xx={name:"EyeIcon",extends:lo};function A4(n,e,t,r,i,o){return Fe(),lt("svg",Ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Tt("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1)]),16)}xx.render=A4;var Sx={name:"RefreshIcon",extends:lo};function R4(n,e,t,r,i,o){return Fe(),lt("svg",Ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Tt("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z",fill:"currentColor"},null,-1)]),16)}Sx.render=R4;var wx={name:"SearchMinusIcon",extends:lo};function P4(n,e,t,r,i,o){return Fe(),lt("svg",Ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Tt("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z",fill:"currentColor"},null,-1)]),16)}wx.render=P4;var Mx={name:"SearchPlusIcon",extends:lo};function k4(n,e,t,r,i,o){return Fe(),lt("svg",Ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Tt("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z",fill:"currentColor"},null,-1)]),16)}Mx.render=k4;var Cx={name:"UndoIcon",extends:lo};function D4(n,e,t,r,i,o){return Fe(),lt("svg",Ve({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Tt("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z",fill:"currentColor"},null,-1)]),16)}Cx.render=D4;var L4=function(e){var t=e.dt;return`
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-image-preview {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-mask {
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: `.concat(t("image.preview.mask.color"),`;
    transition: background `).concat(t("image.transition.duration"),`;
}

.p-image-preview:hover > .p-image-preview-mask {
    opacity: 1;
    cursor: pointer;
    background: `).concat(t("image.preview.mask.background"),`;
}

.p-image-preview-icon {
    font-size: `).concat(t("image.preview.icon.size"),`;
    width: `).concat(t("image.preview.icon.size"),`;
    height: `).concat(t("image.preview.icon.size"),`;
}

.p-image-toolbar {
    position: absolute;
    inset-block-start: `).concat(t("image.toolbar.position.top"),`;
    inset-inline-end: `).concat(t("image.toolbar.position.right"),`;
    inset-inline-start: `).concat(t("image.toolbar.position.left"),`;
    inset-block-end: `).concat(t("image.toolbar.position.bottom"),`;
    display: flex;
    z-index: 1;
    padding: `).concat(t("image.toolbar.padding"),`;
    background: `).concat(t("image.toolbar.background"),`;
    backdrop-filter: blur(`).concat(t("image.toolbar.blur"),`);
    border-color: `).concat(t("image.toolbar.border.color"),`;
    border-style: solid;
    border-width: `).concat(t("image.toolbar.border.width"),`;
    border-radius: `).concat(t("image.toolbar.border.radius"),`;
    gap: `).concat(t("image.toolbar.gap"),`;
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: `).concat(t("image.action.color"),`;
    background: transparent;
    width: `).concat(t("image.action.size"),`;
    height: `).concat(t("image.action.size"),`;
    margin: 0;
    padding: 0;
    border: 0 none;
    cursor: pointer;
    user-select: none;
    border-radius: `).concat(t("image.action.border.radius"),`;
    outline-color: transparent;
    transition: background `).concat(t("image.transition.duration"),", color ").concat(t("image.transition.duration"),", outline-color ").concat(t("image.transition.duration"),", box-shadow ").concat(t("image.transition.duration"),`;
}

.p-image-action:hover {
    color: `).concat(t("image.action.hover.color"),`;
    background: `).concat(t("image.action.hover.background"),`;
}

.p-image-action:focus-visible {
    box-shadow: `).concat(t("image.action.focus.ring.shadow"),`;
    outline: `).concat(t("image.action.focus.ring.width")," ").concat(t("image.action.focus.ring.style")," ").concat(t("image.action.focus.ring.color"),`;
    outline-offset: `).concat(t("image.action.focus.ring.offset"),`;
}

.p-image-action .p-icon {
    font-size: `).concat(t("image.action.icon.size"),`;
    width: `).concat(t("image.action.icon.size"),`;
    height: `).concat(t("image.action.icon.size"),`;
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-original {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-original-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-original-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-original-enter-from,
.p-image-original-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`)},I4={root:function(e){var t=e.props;return["p-image p-component",{"p-image-preview":t.preview}]},previewMask:"p-image-preview-mask",previewIcon:"p-image-preview-icon",mask:"p-image-mask p-overlay-mask p-overlay-mask-enter",toolbar:"p-image-toolbar",rotateRightButton:"p-image-action p-image-rotate-right-button",rotateLeftButton:"p-image-action p-image-rotate-left-button",zoomOutButton:function(e){var t=e.instance;return["p-image-action p-image-zoom-out-button",{"p-disabled":t.isZoomOutDisabled}]},zoomInButton:function(e){var t=e.instance;return["p-image-action p-image-zoom-in-button",{"p-disabled":t.isZoomInDisabled}]},closeButton:"p-image-action p-image-close-button",original:"p-image-original"},O4=Pt.extend({name:"image",theme:L4,classes:I4}),B4={name:"BaseImage",extends:cl,props:{preview:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},imageStyle:{type:null,default:null},imageClass:{type:null,default:null},previewButtonProps:{type:null,default:null},indicatorIcon:{type:String,default:void 0},previewIcon:{type:String,default:void 0},zoomInDisabled:{type:Boolean,default:!1},zoomOutDisabled:{type:Boolean,default:!1}},style:O4,provide:function(){return{$pcImage:this,$parentInstance:this}}},Ex={name:"Image",extends:B4,inheritAttrs:!1,emits:["show","hide","error"],mask:null,data:function(){return{maskVisible:!1,previewVisible:!1,rotate:0,scale:1}},beforeUnmount:function(){this.mask&&Na.clear(this.container)},methods:{maskRef:function(e){this.mask=e},toolbarRef:function(e){this.toolbarRef=e},onImageClick:function(){var e=this;this.preview&&(Np(),this.maskVisible=!0,setTimeout(function(){e.previewVisible=!0},25))},onPreviewImageClick:function(){this.previewClick=!0},onMaskClick:function(e){var t=zP(e.target,"data-pc-section-group","action")||e.target.closest('[data-pc-section-group="action"]');!this.previewClick&&!t&&(this.previewVisible=!1,this.rotate=0,this.scale=1),this.previewClick=!1},onMaskKeydown:function(e){var t=this;switch(e.code){case"Escape":this.hidePreview(),setTimeout(function(){vs(t.$refs.previewButton)},200),e.preventDefault();break}},onError:function(){this.$emit("error")},rotateRight:function(){this.rotate+=90,this.previewClick=!0},rotateLeft:function(){this.rotate-=90,this.previewClick=!0},zoomIn:function(){this.scale=this.scale+.1,this.previewClick=!0},zoomOut:function(){this.scale=this.scale-.1,this.previewClick=!0},onBeforeEnter:function(){Na.set("modal",this.mask,this.$primevue.config.zIndex.modal)},onEnter:function(){this.focus(),this.$emit("show")},onBeforeLeave:function(){!this.isUnstyled&&rf(this.mask,"p-overlay-mask-leave")},onLeave:function(){Td(),this.$emit("hide")},onAfterLeave:function(e){Na.clear(e),this.maskVisible=!1},focus:function(){var e=this.mask.querySelector("[autofocus]");e&&e.focus()},hidePreview:function(){this.previewVisible=!1,this.rotate=0,this.scale=1,Td()}},computed:{containerClass:function(){return[this.cx("root"),this.class]},rotateClass:function(){return"p-image-preview-rotate-"+this.rotate},imagePreviewStyle:function(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}},isZoomInDisabled:function(){return this.zoomInDisabled||this.scale>=1.5},isZoomOutDisabled:function(){return this.zoomOutDisabled||this.scale<=.5},rightAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateRight:void 0},leftAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateLeft:void 0},zoomInAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomIn:void 0},zoomOutAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomOut:void 0},zoomImageAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomImage:void 0},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{Portal:sg,EyeIcon:xx,RefreshIcon:Sx,UndoIcon:Cx,SearchMinusIcon:wx,SearchPlusIcon:Mx,TimesIcon:og},directives:{focustrap:vx}};function Bc(n){"@babel/helpers - typeof";return Bc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bc(n)}function pb(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Cu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pb(Object(t),!0).forEach(function(r){U4(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):pb(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function U4(n,e,t){return(e=N4(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function N4(n){var e=F4(n,"string");return Bc(e)=="symbol"?e:e+""}function F4(n,e){if(Bc(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Bc(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var z4=["aria-label"],H4=["aria-modal"],V4=["aria-label"],G4=["aria-label"],$4=["disabled","aria-label"],W4=["disabled","aria-label"],X4=["aria-label"],j4=["src"];function Y4(n,e,t,r,i,o){var s=ei("RefreshIcon"),a=ei("UndoIcon"),l=ei("SearchMinusIcon"),c=ei("SearchPlusIcon"),u=ei("TimesIcon"),d=ei("Portal"),f=mm("focustrap");return Fe(),lt("span",Ve({class:o.containerClass,style:n.style},n.ptmi("root")),[Jt(n.$slots,"image",{errorCallback:o.onError},function(){return[Tt("img",Ve({style:n.imageStyle,class:n.imageClass,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},Cu(Cu({},n.$attrs),n.ptm("image"))),null,16)]}),n.preview?(Fe(),lt("button",Ve({key:0,ref:"previewButton","aria-label":o.zoomImageAriaLabel,type:"button",class:n.cx("previewMask"),onClick:e[1]||(e[1]=function(){return o.onImageClick&&o.onImageClick.apply(o,arguments)})},Cu(Cu({},n.previewButtonProps),n.ptm("previewMask"))),[Jt(n.$slots,n.$slots.previewicon?"previewicon":"indicatoricon",{},function(){return[(Fe(),un(Va(n.previewIcon||n.indicatorIcon?"i":"EyeIcon"),Ve({class:n.cx("previewIcon")},n.ptm("previewIcon")),null,16,["class"]))]})],16,z4)):Zn("",!0),zt(d,null,{default:qi(function(){return[i.maskVisible?fm((Fe(),lt("div",Ve({key:0,ref:o.maskRef,role:"dialog",class:n.cx("mask"),"aria-modal":i.maskVisible,onClick:e[8]||(e[8]=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)}),onKeydown:e[9]||(e[9]=function(){return o.onMaskKeydown&&o.onMaskKeydown.apply(o,arguments)})},n.ptm("mask")),[Tt("div",Ve({class:n.cx("toolbar")},n.ptm("toolbar")),[Tt("button",Ve({class:n.cx("rotateRightButton"),onClick:e[2]||(e[2]=function(){return o.rotateRight&&o.rotateRight.apply(o,arguments)}),type:"button","aria-label":o.rightAriaLabel},n.ptm("rotateRightButton"),{"data-pc-group-section":"action"}),[Jt(n.$slots,"refresh",{},function(){return[zt(s,Xs(ha(n.ptm("rotateRightIcon"))),null,16)]})],16,V4),Tt("button",Ve({class:n.cx("rotateLeftButton"),onClick:e[3]||(e[3]=function(){return o.rotateLeft&&o.rotateLeft.apply(o,arguments)}),type:"button","aria-label":o.leftAriaLabel},n.ptm("rotateLeftButton"),{"data-pc-group-section":"action"}),[Jt(n.$slots,"undo",{},function(){return[zt(a,Xs(ha(n.ptm("rotateLeftIcon"))),null,16)]})],16,G4),Tt("button",Ve({class:n.cx("zoomOutButton"),onClick:e[4]||(e[4]=function(){return o.zoomOut&&o.zoomOut.apply(o,arguments)}),type:"button",disabled:o.isZoomOutDisabled,"aria-label":o.zoomOutAriaLabel},n.ptm("zoomOutButton"),{"data-pc-group-section":"action"}),[Jt(n.$slots,"zoomout",{},function(){return[zt(l,Xs(ha(n.ptm("zoomOutIcon"))),null,16)]})],16,$4),Tt("button",Ve({class:n.cx("zoomInButton"),onClick:e[5]||(e[5]=function(){return o.zoomIn&&o.zoomIn.apply(o,arguments)}),type:"button",disabled:o.isZoomInDisabled,"aria-label":o.zoomInAriaLabel},n.ptm("zoomInButton"),{"data-pc-group-section":"action"}),[Jt(n.$slots,"zoomin",{},function(){return[zt(c,Xs(ha(n.ptm("zoomInIcon"))),null,16)]})],16,W4),Tt("button",Ve({class:n.cx("closeButton"),type:"button",onClick:e[6]||(e[6]=function(){return o.hidePreview&&o.hidePreview.apply(o,arguments)}),"aria-label":o.closeAriaLabel,autofocus:""},n.ptm("closeButton"),{"data-pc-group-section":"action"}),[Jt(n.$slots,"close",{},function(){return[zt(u,Xs(ha(n.ptm("closeIcon"))),null,16)]})],16,X4)],16),zt(t1,Ve({name:"p-image-original",onBeforeEnter:o.onBeforeEnter,onEnter:o.onEnter,onLeave:o.onLeave,onBeforeLeave:o.onBeforeLeave,onAfterLeave:o.onAfterLeave},n.ptm("transition")),{default:qi(function(){return[i.previewVisible?(Fe(),lt("div",Xs(Ve({key:0},n.ptm("originalContainer"))),[Jt(n.$slots,n.$slots.original?"original":"preview",{class:Uo(n.cx("original")),style:Hc(o.imagePreviewStyle),previewCallback:o.onPreviewImageClick},function(){return[Tt("img",Ve({src:n.$attrs.src,class:n.cx("original"),style:o.imagePreviewStyle,onClick:e[7]||(e[7]=function(){return o.onPreviewImageClick&&o.onPreviewImageClick.apply(o,arguments)})},n.ptm("original")),null,16,j4)]})],16)):Zn("",!0)]}),_:3},16,["onBeforeEnter","onEnter","onLeave","onBeforeLeave","onAfterLeave"])],16,H4)),[[f]]):Zn("",!0)]}),_:3})],16)}Ex.render=Y4;const $s=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},q4={},K4={class:"aboutme"};function Z4(n,e){const t=Ex;return Fe(),lt("div",K4,[Tt("div",null,[zt(t,{src:"/serene1004.png",alt:"포트폴리오 프로필 이미지",width:"160",class:"aboutme-img"}),e[0]||(e[0]=ka(" 웹 퍼블리셔로 웹 개발을 시작하여 현재 프론트엔드 개발을 하고 있는 4년차 퍼블리셔/프론트엔드 개발자입니다.")),e[1]||(e[1]=Tt("br",null,null,-1)),e[2]||(e[2]=ka(" 이곳 저곳 마우스를 움직이며 클릭하고 스크롤을 하게 만드는 인터랙션이 가득한 사이트를 만드는 것을 좋아하며, 3D와 애니메이션 등에 관심이 많습니다.")),e[3]||(e[3]=Tt("br",null,null,-1)),e[4]||(e[4]=ka(" 현재 방송통신대학교 컴퓨터과학과에 재학중이며, 학업과 업무를 병행하고 있습니다. "))]),e[5]||(e[5]=Nw('<div class="contact-list" data-v-9bc4d870><div class="contact-item" data-v-9bc4d870><i class="pi pi-envelope" data-v-9bc4d870></i> vcbxnzn@gmail.com </div><div class="contact-item" data-v-9bc4d870><i class="pi pi-github" data-v-9bc4d870></i><a href="https://github.com/serene1004" target="_blank" data-v-9bc4d870>https://github.com/serene1004</a></div></div>',1))])}const J4=$s(q4,[["render",Z4],["__scopeId","data-v-9bc4d870"]]);var Q4=function(e){var t=e.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(t("tag.primary.background"),`;
    color: `).concat(t("tag.primary.color"),`;
    font-size: `).concat(t("tag.font.size"),`;
    font-weight: `).concat(t("tag.font.weight"),`;
    padding: `).concat(t("tag.padding"),`;
    border-radius: `).concat(t("tag.border.radius"),`;
    gap: `).concat(t("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(t("tag.icon.size"),`;
    width: `).concat(t("tag.icon.size"),`;
    height:`).concat(t("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(t("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(t("tag.success.background"),`;
    color: `).concat(t("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(t("tag.info.background"),`;
    color: `).concat(t("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(t("tag.warn.background"),`;
    color: `).concat(t("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(t("tag.danger.background"),`;
    color: `).concat(t("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(t("tag.secondary.background"),`;
    color: `).concat(t("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(t("tag.contrast.background"),`;
    color: `).concat(t("tag.contrast.color"),`;
}
`)},eD={root:function(e){var t=e.props;return["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},tD=Pt.extend({name:"tag",theme:Q4,classes:eD}),nD={name:"BaseTag",extends:cl,props:{value:null,severity:null,rounded:Boolean,icon:String},style:tD,provide:function(){return{$pcTag:this,$parentInstance:this}}},Tx={name:"Tag",extends:nD,inheritAttrs:!1};function rD(n,e,t,r,i,o){return Fe(),lt("span",Ve({class:n.cx("root")},n.ptmi("root")),[n.$slots.icon?(Fe(),un(Va(n.$slots.icon),Ve({key:0,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(Fe(),lt("span",Ve({key:1,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):Zn("",!0),n.value!=null||n.$slots.default?Jt(n.$slots,"default",{key:2},function(){return[Tt("span",Ve({class:n.cx("label")},n.ptm("label")),Ps(n.value),17)]}):Zn("",!0)],16)}Tx.render=rD;const iD={class:"skills"},oD={class:"skills-header"},sD={__name:"Skills",setup(n){const e=nr({html:{html:{title:"HTML",description:"시맨틱 태그를 활용하여 웹 접근성 및 검색 엔진 최적화(SEO)를 고려한 마크업을 작성합니다.",severity:"primary"}},style:{css:{title:"CSS",description:"디자인 가이드를 기반으로 CSS 프레임워크 없이 순수 CSS 및 SCSS를 활용해 UI를 구현할 수 있으며, 반응형 웹과 다크 모드, 다양한 브라우저 환경에서도 일관된 디자인을 유지할 수 있도록 스타일을 작성합니다.",severity:"info"},scss:{title:"SCSS",description:"",severity:"danger"},tailwind:{title:"Tailwind CSS",description:"Tailwind CSS를 활용하여 클래스 네이밍에 대한 부담없이 빠르게 UI 개발이 가능합니다.",severity:"success"},quasar:{title:"Quasar",description:"Quasar 프레임워크를 활용해 Vue 기반의 반응형 웹 및 데스크톱 애플리케이션을 빠르게 구축할 수 있습니다.",severity:"info"}},js:{js:{title:"JavaScript",description:"JavaScript의 호출 스택과 이벤트 루프의 동작 원리를 이해하고 있으며, ES6+ 문법을 활용하여 가독성과 유지보수성을 높인 코드를 작성합니다.",severity:"warn"},vue:{title:"Vue.js",description:"Vue.js를 활용한 컴포넌트 기반 개발에 익숙하며, Composition API를 사용하여 모듈화된 코드를 작성합니다.",severity:"success"},pinia:{title:"Pinia",description:"Pinia를 상태 관리 라이브러리를 사용하여 전역 상태를 관리하며, Composition API를 사용하여 코드를 더 간결하고 가독성 좋게 작성합니다.",severity:"warn"},vite:{title:"Vite",description:"Vite를 번들링 도구로 활용하여 빠른 개발 환경 구축 및 빌드 속도를 최적화합니다.",severity:"info"},gulp:{title:"Gulp",description:"Gulp를 활용한 자동화된 빌드 프로세스와 태스크 관리 경험도 있습니다.",severity:"danger"},electron:{title:"Electron",description:"Electron 기반의 사내 메신저 개발 및 유지보수 경험이 있습니다.",severity:"secondary"}},git:{git:{title:"Git",description:"Git을 활용한 협업 및 버전 관리가 가능합니다.",severity:"contrast"}},communication:{communication:{title:"Communication",description:"기획자, 디자이너, 백엔드 개발자와 커뮤니케이션을 통해 요구사항을 정확하게 파악하고, 이를 반영한 UI/UX 구현 및 프론트엔드 개발을 진행합니다.",severity:"info"},tools:{title:"tools",description:"Figma, Sketch와 같은 디자인 툴을 통한 기획자, 디자이너와의 협업 또한 가능합니다.",severity:"secondary"}}});return(t,r)=>{const i=Tx;return Fe(),lt("div",iD,[(Fe(!0),lt(nn,null,Fl(e.value,(o,s)=>(Fe(),lt("div",{key:s,class:"skills-list"},[Tt("div",oD,[(Fe(!0),lt(nn,null,Fl(o,(a,l)=>(Fe(),un(i,{key:l,value:a.title,severity:a.severity},null,8,["value","severity"]))),128))]),(Fe(!0),lt(nn,null,Fl(o,(a,l)=>(Fe(),lt("p",{key:l,class:"skills-item"},Ps(a.description),1))),128))]))),128))])}}},aD=$s(sD,[["__scopeId","data-v-412a8359"]]),lD={class:"actions"},cD={__name:"ControlDialog",emits:["moveToPlanet"],setup(n,{emit:e}){const t=zs({aboutMe:{visible:!1,position:"topright",title:"AboutMe",component:wh(J4),planet:"earth"},skill:{visible:!1,position:"right",title:"Skills",component:wh(aD),planet:"jupiter"}}),r=s=>{s.visible?s.visible=!1:(i(),s.visible=!0)},i=()=>{Object.values(t).forEach(s=>s.visible=!1)},o=nr({root:{style:{maxHeight:"50vh"}},header:{style:{padding:"8px 8px 8px 16px"}},content:{style:{padding:"0px 16px 16px",fontSize:"16px",overflowX:"hidden"}}});return(s,a)=>{const l=sf,c=yx;return Fe(),lt(nn,null,[Tt("div",lD,[(Fe(!0),lt(nn,null,Fl(t,u=>(Fe(),un(l,{key:u.title,label:u.title,size:"small",onClick:d=>r(u)},null,8,["label","onClick"]))),128))]),(Fe(!0),lt(nn,null,Fl(t,u=>(Fe(),un(c,{key:u.title,visible:u.visible,"onUpdate:visible":d=>u.visible=d,position:u.position,draggable:!1,header:u.title,pt:o.value},{default:qi(()=>[(Fe(),un(Va(u.component)))]),_:2},1032,["visible","onUpdate:visible","position","header","pt"]))),128))],64)}}},uD=$s(cD,[["__scopeId","data-v-dd9b8bce"]]);function dD(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function fD(n,e,t){return dD(n.prototype,e),n}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var En,td,Tr,Ro,Po,Fa,Ax,us,Jl,Rx,Qi,Jr,Px,kx=function(){return En||typeof window<"u"&&(En=window.gsap)&&En.registerPlugin&&En},Dx=1,Ma=[],at=[],Pi=[],Ql=Date.now,Vp=function(e,t){return t},hD=function(){var e=Jl.core,t=e.bridge||{},r=e._scrollers,i=e._proxies;r.push.apply(r,at),i.push.apply(i,Pi),at=r,Pi=i,Vp=function(s,a){return t[s](a)}},Bo=function(e,t){return~Pi.indexOf(e)&&Pi[Pi.indexOf(e)+1][t]},ec=function(e){return!!~Rx.indexOf(e)},$n=function(e,t,r,i,o){return e.addEventListener(t,r,{passive:i!==!1,capture:!!o})},Hn=function(e,t,r,i){return e.removeEventListener(t,r,!!i)},Eu="scrollLeft",Tu="scrollTop",Gp=function(){return Qi&&Qi.isPressed||at.cache++},Pd=function(e,t){var r=function i(o){if(o||o===0){Dx&&(Tr.history.scrollRestoration="manual");var s=Qi&&Qi.isPressed;o=i.v=Math.round(o)||(Qi&&Qi.iOS?1:0),e(o),i.cacheID=at.cache,s&&Vp("ss",o)}else(t||at.cache!==i.cacheID||Vp("ref"))&&(i.cacheID=at.cache,i.v=e());return i.v+i.offset};return r.offset=0,e&&r},tr={s:Eu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pd(function(n){return arguments.length?Tr.scrollTo(n,mn.sc()):Tr.pageXOffset||Ro[Eu]||Po[Eu]||Fa[Eu]||0})},mn={s:Tu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:tr,sc:Pd(function(n){return arguments.length?Tr.scrollTo(tr.sc(),n):Tr.pageYOffset||Ro[Tu]||Po[Tu]||Fa[Tu]||0})},ar=function(e,t){return(t&&t._ctx&&t._ctx.selector||En.utils.toArray)(e)[0]||(typeof e=="string"&&En.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Go=function(e,t){var r=t.s,i=t.sc;ec(e)&&(e=Ro.scrollingElement||Po);var o=at.indexOf(e),s=i===mn.sc?1:2;!~o&&(o=at.push(e)-1),at[o+s]||$n(e,"scroll",Gp);var a=at[o+s],l=a||(at[o+s]=Pd(Bo(e,r),!0)||(ec(e)?i:Pd(function(c){return arguments.length?e[r]=c:e[r]})));return l.target=e,a||(l.smooth=En.getProperty(e,"scrollBehavior")==="smooth"),l},$p=function(e,t,r){var i=e,o=e,s=Ql(),a=s,l=t||50,c=Math.max(500,l*3),u=function(g,m){var _=Ql();m||_-s>l?(o=i,i=g,a=s,s=_):r?i+=g:i=o+(g-o)/(_-a)*(s-a)},d=function(){o=i=r?0:i,a=s=0},f=function(g){var m=a,_=o,p=Ql();return(g||g===0)&&g!==i&&u(g),s===a||p-a>c?0:(i+(r?_:-_))/((r?p:s)-m)*1e3};return{update:u,reset:d,getVelocity:f}},wl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},mb=function(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r},Lx=function(){Jl=En.core.globals().ScrollTrigger,Jl&&Jl.core&&hD()},Ix=function(e){return En=e||kx(),!td&&En&&typeof document<"u"&&document.body&&(Tr=window,Ro=document,Po=Ro.documentElement,Fa=Ro.body,Rx=[Tr,Ro,Po,Fa],En.utils.clamp,Px=En.core.context||function(){},us="onpointerenter"in Fa?"pointer":"mouse",Ax=rn.isTouch=Tr.matchMedia&&Tr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Tr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Jr=rn.eventTypes=("ontouchstart"in Po?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Po?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Dx=0},500),Lx(),td=1),td};tr.op=mn;at.cache=0;var rn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(r){td||Ix(En)||console.warn("Please gsap.registerPlugin(Observer)"),Jl||Lx();var i=r.tolerance,o=r.dragMinimum,s=r.type,a=r.target,l=r.lineHeight,c=r.debounce,u=r.preventDefault,d=r.onStop,f=r.onStopDelay,h=r.ignore,g=r.wheelSpeed,m=r.event,_=r.onDragStart,p=r.onDragEnd,S=r.onDrag,v=r.onPress,b=r.onRelease,T=r.onRight,R=r.onLeft,E=r.onUp,D=r.onDown,y=r.onChangeX,x=r.onChangeY,I=r.onChange,O=r.onToggleX,F=r.onToggleY,X=r.onHover,J=r.onHoverEnd,W=r.onMove,V=r.ignoreCheck,H=r.isNormalizer,de=r.onGestureStart,B=r.onGestureEnd,me=r.onWheel,Ce=r.onEnable,Ge=r.onDisable,re=r.onClick,he=r.scrollSpeed,ve=r.capture,z=r.allowClicks,le=r.lockAxis,j=r.onLockAxis;this.target=a=ar(a)||Po,this.vars=r,h&&(h=En.utils.toArray(h)),i=i||1e-9,o=o||0,g=g||1,he=he||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Tr.getComputedStyle(Fa).lineHeight)||22);var te,be,P,k,M,ne,Z,L=this,oe=0,ce=0,se=r.passive||!u&&r.passive!==!1,C=Go(a,tr),w=Go(a,mn),U=C(),Y=w(),q=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Jr[0]==="pointerdown",ee=ec(a),pe=a.ownerDocument||Ro,fe=[0,0,0],xe=[0,0,0],Ue=0,ge=function(){return Ue=Ql()},ye=function(Ie,Qe){return(L.event=Ie)&&h&&~h.indexOf(Ie.target)||Qe&&q&&Ie.pointerType!=="touch"||V&&V(Ie,Qe)},Oe=function(){L._vx.reset(),L._vy.reset(),be.pause(),d&&d(L)},Ne=function(){var Ie=L.deltaX=mb(fe),Qe=L.deltaY=mb(xe),Te=Math.abs(Ie)>=i,Ze=Math.abs(Qe)>=i;I&&(Te||Ze)&&I(L,Ie,Qe,fe,xe),Te&&(T&&L.deltaX>0&&T(L),R&&L.deltaX<0&&R(L),y&&y(L),O&&L.deltaX<0!=oe<0&&O(L),oe=L.deltaX,fe[0]=fe[1]=fe[2]=0),Ze&&(D&&L.deltaY>0&&D(L),E&&L.deltaY<0&&E(L),x&&x(L),F&&L.deltaY<0!=ce<0&&F(L),ce=L.deltaY,xe[0]=xe[1]=xe[2]=0),(k||P)&&(W&&W(L),P&&(_&&P===1&&_(L),S&&S(L),P=0),k=!1),ne&&!(ne=!1)&&j&&j(L),M&&(me(L),M=!1),te=0},Se=function(Ie,Qe,Te){fe[Te]+=Ie,xe[Te]+=Qe,L._vx.update(Ie),L._vy.update(Qe),c?te||(te=requestAnimationFrame(Ne)):Ne()},$e=function(Ie,Qe){le&&!Z&&(L.axis=Z=Math.abs(Ie)>Math.abs(Qe)?"x":"y",ne=!0),Z!=="y"&&(fe[2]+=Ie,L._vx.update(Ie,!0)),Z!=="x"&&(xe[2]+=Qe,L._vy.update(Qe,!0)),c?te||(te=requestAnimationFrame(Ne)):Ne()},We=function(Ie){if(!ye(Ie,1)){Ie=wl(Ie,u);var Qe=Ie.clientX,Te=Ie.clientY,Ze=Qe-L.x,Be=Te-L.y,Ke=L.isDragging;L.x=Qe,L.y=Te,(Ke||(Ze||Be)&&(Math.abs(L.startX-Qe)>=o||Math.abs(L.startY-Te)>=o))&&(P=Ke?2:1,Ke||(L.isDragging=!0),$e(Ze,Be))}},pt=L.onPress=function(Pe){ye(Pe,1)||Pe&&Pe.button||(L.axis=Z=null,be.pause(),L.isPressed=!0,Pe=wl(Pe),oe=ce=0,L.startX=L.x=Pe.clientX,L.startY=L.y=Pe.clientY,L._vx.reset(),L._vy.reset(),$n(H?a:pe,Jr[1],We,se,!0),L.deltaX=L.deltaY=0,v&&v(L))},N=L.onRelease=function(Pe){if(!ye(Pe,1)){Hn(H?a:pe,Jr[1],We,!0);var Ie=!isNaN(L.y-L.startY),Qe=L.isDragging,Te=Qe&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),Ze=wl(Pe);!Te&&Ie&&(L._vx.reset(),L._vy.reset(),u&&z&&En.delayedCall(.08,function(){if(Ql()-Ue>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(pe.createEvent){var Be=pe.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,Tr,1,Ze.screenX,Ze.screenY,Ze.clientX,Ze.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(Be)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,d&&Qe&&!H&&be.restart(!0),P&&Ne(),p&&Qe&&p(L),b&&b(L,Te)}},Me=function(Ie){return Ie.touches&&Ie.touches.length>1&&(L.isGesturing=!0)&&de(Ie,L.isDragging)},ae=function(){return(L.isGesturing=!1)||B(L)},ue=function(Ie){if(!ye(Ie)){var Qe=C(),Te=w();Se((Qe-U)*he,(Te-Y)*he,1),U=Qe,Y=Te,d&&be.restart(!0)}},we=function(Ie){if(!ye(Ie)){Ie=wl(Ie,u),me&&(M=!0);var Qe=(Ie.deltaMode===1?l:Ie.deltaMode===2?Tr.innerHeight:1)*g;Se(Ie.deltaX*Qe,Ie.deltaY*Qe,0),d&&!H&&be.restart(!0)}},Ee=function(Ie){if(!ye(Ie)){var Qe=Ie.clientX,Te=Ie.clientY,Ze=Qe-L.x,Be=Te-L.y;L.x=Qe,L.y=Te,k=!0,d&&be.restart(!0),(Ze||Be)&&$e(Ze,Be)}},Ye=function(Ie){L.event=Ie,X(L)},bt=function(Ie){L.event=Ie,J(L)},Kt=function(Ie){return ye(Ie)||wl(Ie,u)&&re(L)};be=L._dc=En.delayedCall(f||.25,Oe).pause(),L.deltaX=L.deltaY=0,L._vx=$p(0,50,!0),L._vy=$p(0,50,!0),L.scrollX=C,L.scrollY=w,L.isDragging=L.isGesturing=L.isPressed=!1,Px(this),L.enable=function(Pe){return L.isEnabled||($n(ee?pe:a,"scroll",Gp),s.indexOf("scroll")>=0&&$n(ee?pe:a,"scroll",ue,se,ve),s.indexOf("wheel")>=0&&$n(a,"wheel",we,se,ve),(s.indexOf("touch")>=0&&Ax||s.indexOf("pointer")>=0)&&($n(a,Jr[0],pt,se,ve),$n(pe,Jr[2],N),$n(pe,Jr[3],N),z&&$n(a,"click",ge,!0,!0),re&&$n(a,"click",Kt),de&&$n(pe,"gesturestart",Me),B&&$n(pe,"gestureend",ae),X&&$n(a,us+"enter",Ye),J&&$n(a,us+"leave",bt),W&&$n(a,us+"move",Ee)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=k=P=!1,L._vx.reset(),L._vy.reset(),U=C(),Y=w(),Pe&&Pe.type&&pt(Pe),Ce&&Ce(L)),L},L.disable=function(){L.isEnabled&&(Ma.filter(function(Pe){return Pe!==L&&ec(Pe.target)}).length||Hn(ee?pe:a,"scroll",Gp),L.isPressed&&(L._vx.reset(),L._vy.reset(),Hn(H?a:pe,Jr[1],We,!0)),Hn(ee?pe:a,"scroll",ue,ve),Hn(a,"wheel",we,ve),Hn(a,Jr[0],pt,ve),Hn(pe,Jr[2],N),Hn(pe,Jr[3],N),Hn(a,"click",ge,!0),Hn(a,"click",Kt),Hn(pe,"gesturestart",Me),Hn(pe,"gestureend",ae),Hn(a,us+"enter",Ye),Hn(a,us+"leave",bt),Hn(a,us+"move",Ee),L.isEnabled=L.isPressed=L.isDragging=!1,Ge&&Ge(L))},L.kill=L.revert=function(){L.disable();var Pe=Ma.indexOf(L);Pe>=0&&Ma.splice(Pe,1),Qi===L&&(Qi=0)},Ma.push(L),H&&ec(a)&&(Qi=L),L.enable(m)},fD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();rn.version="3.12.7";rn.create=function(n){return new rn(n)};rn.register=Ix;rn.getAll=function(){return Ma.slice()};rn.getById=function(n){return Ma.filter(function(e){return e.vars.id===n})[0]};kx()&&En.registerPlugin(rn);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Le,ba,st,Ut,Cr,Ct,ag,kd,Uc,tc,Pl,Au,kn,af,Wp,qn,gb,_b,va,Ox,fh,Bx,jn,Xp,Ux,Nx,vo,jp,lg,za,cg,Dd,Yp,hh,Ru=1,Dn=Date.now,ph=Dn(),$r=0,kl=0,bb=function(e,t,r){var i=xr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return r["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},vb=function(e,t){return t&&(!xr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},pD=function n(){return kl&&requestAnimationFrame(n)},yb=function(){return af=1},xb=function(){return af=0},gi=function(e){return e},Dl=function(e){return Math.round(e*1e5)/1e5||0},Fx=function(){return typeof window<"u"},zx=function(){return Le||Fx()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Bs=function(e){return!!~ag.indexOf(e)},Hx=function(e){return(e==="Height"?cg:st["inner"+e])||Cr["client"+e]||Ct["client"+e]},Vx=function(e){return Bo(e,"getBoundingClientRect")||(Bs(e)?function(){return sd.width=st.innerWidth,sd.height=cg,sd}:function(){return Yi(e)})},mD=function(e,t,r){var i=r.d,o=r.d2,s=r.a;return(s=Bo(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?Hx(o):e["client"+o])||0}},gD=function(e,t){return!t||~Pi.indexOf(e)?Vx(e):function(){return sd}},Mi=function(e,t){var r=t.s,i=t.d2,o=t.d,s=t.a;return Math.max(0,(r="scroll"+i)&&(s=Bo(e,r))?s()-Vx(e)()[o]:Bs(e)?(Cr[r]||Ct[r])-Hx(i):e[r]-e["offset"+i])},Pu=function(e,t){for(var r=0;r<va.length;r+=3)(!t||~t.indexOf(va[r+1]))&&e(va[r],va[r+1],va[r+2])},xr=function(e){return typeof e=="string"},Bn=function(e){return typeof e=="function"},Ll=function(e){return typeof e=="number"},ds=function(e){return typeof e=="object"},Ml=function(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()},mh=function(e,t){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e)}):t(e);r&&r.totalTime&&(e.callbackAnimation=r)}},ua=Math.abs,Gx="left",$x="top",ug="right",dg="bottom",Ts="width",As="height",nc="Right",rc="Left",ic="Top",oc="Bottom",an="padding",Fr="margin",il="Width",fg="Height",pn="px",zr=function(e){return st.getComputedStyle(e)},_D=function(e){var t=zr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Sb=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},Yi=function(e,t){var r=t&&zr(e)[Wp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return r&&r.progress(0).kill(),i},Ld=function(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0},Wx=function(e){var t=[],r=e.labels,i=e.duration(),o;for(o in r)t.push(r[o]/i);return t},bD=function(e){return function(t){return Le.utils.snap(Wx(e),t)}},hg=function(e){var t=Le.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(i,o){return i-o});return r?function(i,o,s){s===void 0&&(s=.001);var a;if(!o)return t(i);if(o>0){for(i-=s,a=0;a<r.length;a++)if(r[a]>=i)return r[a];return r[a-1]}else for(a=r.length,i+=s;a--;)if(r[a]<=i)return r[a];return r[0]}:function(i,o,s){s===void 0&&(s=.001);var a=t(i);return!o||Math.abs(a-i)<s||a-i<0==o<0?a:t(o<0?i-e:i+e)}},vD=function(e){return function(t,r){return hg(Wx(e))(t,r.direction)}},ku=function(e,t,r,i){return r.split(",").forEach(function(o){return e(t,o,i)})},xn=function(e,t,r,i,o){return e.addEventListener(t,r,{passive:!i,capture:!!o})},yn=function(e,t,r,i){return e.removeEventListener(t,r,!!i)},Du=function(e,t,r){r=r&&r.wheelHandler,r&&(e(t,"wheel",r),e(t,"touchmove",r))},wb={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Lu={toggleActions:"play",anticipatePin:0},Id={top:0,left:0,center:.5,bottom:1,right:1},nd=function(e,t){if(xr(e)){var r=e.indexOf("="),i=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(i*=t/100),e=e.substr(0,r-1)),e=i+(e in Id?Id[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Iu=function(e,t,r,i,o,s,a,l){var c=o.startColor,u=o.endColor,d=o.fontSize,f=o.indent,h=o.fontWeight,g=Ut.createElement("div"),m=Bs(r)||Bo(r,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,p=m?Ct:r,S=e.indexOf("start")!==-1,v=S?c:u,b="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((_||l)&&m?"fixed;":"absolute;"),(_||l||!m)&&(b+=(i===mn?ug:dg)+":"+(s+parseFloat(f))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],rd(g,0,i,S),g},rd=function(e,t,r,i){var o={display:"block"},s=r[i?"os2":"p2"],a=r[i?"p2":"os2"];e._isFlipped=i,o[r.a+"Percent"]=i?-100:0,o[r.a]=i?"1px":0,o["border"+s+il]=1,o["border"+a+il]=0,o[r.p]=t+"px",Le.set(e,o)},it=[],qp={},Nc,Mb=function(){return Dn()-$r>34&&(Nc||(Nc=requestAnimationFrame(no)))},da=function(){(!jn||!jn.isPressed||jn.startX>Ct.clientWidth)&&(at.cache++,jn?Nc||(Nc=requestAnimationFrame(no)):no(),$r||Ns("scrollStart"),$r=Dn())},gh=function(){Nx=st.innerWidth,Ux=st.innerHeight},Il=function(e){at.cache++,(e===!0||!kn&&!Bx&&!Ut.fullscreenElement&&!Ut.webkitFullscreenElement&&(!Xp||Nx!==st.innerWidth||Math.abs(st.innerHeight-Ux)>st.innerHeight*.25))&&kd.restart(!0)},Us={},yD=[],Xx=function n(){return yn(ct,"scrollEnd",n)||ys(!0)},Ns=function(e){return Us[e]&&Us[e].map(function(t){return t()})||yD},yr=[],jx=function(e){for(var t=0;t<yr.length;t+=5)(!e||yr[t+4]&&yr[t+4].query===e)&&(yr[t].style.cssText=yr[t+1],yr[t].getBBox&&yr[t].setAttribute("transform",yr[t+2]||""),yr[t+3].uncache=1)},pg=function(e,t){var r;for(qn=0;qn<it.length;qn++)r=it[qn],r&&(!t||r._ctx===t)&&(e?r.kill(1):r.revert(!0,!0));Dd=!0,t&&jx(t),t||Ns("revert")},Yx=function(e,t){at.cache++,(t||!Kn)&&at.forEach(function(r){return Bn(r)&&r.cacheID++&&(r.rec=0)}),xr(e)&&(st.history.scrollRestoration=lg=e)},Kn,Rs=0,Cb,xD=function(){if(Cb!==Rs){var e=Cb=Rs;requestAnimationFrame(function(){return e===Rs&&ys(!0)})}},qx=function(){Ct.appendChild(za),cg=!jn&&za.offsetHeight||st.innerHeight,Ct.removeChild(za)},Eb=function(e){return Uc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ys=function(e,t){if(Cr=Ut.documentElement,Ct=Ut.body,ag=[st,Ut,Cr,Ct],$r&&!e&&!Dd){xn(ct,"scrollEnd",Xx);return}qx(),Kn=ct.isRefreshing=!0,at.forEach(function(i){return Bn(i)&&++i.cacheID&&(i.rec=i())});var r=Ns("refreshInit");Ox&&ct.sort(),t||pg(),at.forEach(function(i){Bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),Dd=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-s),i.refresh()}}),Yp=1,Eb(!0),it.forEach(function(i){var o=Mi(i.scroller,i._dir),s=i.vars.end==="max"||i._endClamp&&i.end>o,a=i._startClamp&&i.start>=o;(s||a)&&i.setPositions(a?o-1:i.start,s?Math.max(a?o:i.start+1,o):i.end,!0)}),Eb(!1),Yp=0,r.forEach(function(i){return i&&i.render&&i.render(-1)}),at.forEach(function(i){Bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Yx(lg,1),kd.pause(),Rs++,Kn=2,no(2),it.forEach(function(i){return Bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Kn=ct.isRefreshing=!1,Ns("refresh")},Kp=0,id=1,sc,no=function(e){if(e===2||!Kn&&!Dd){ct.isUpdating=!0,sc&&sc.update(0);var t=it.length,r=Dn(),i=r-ph>=50,o=t&&it[0].scroll();if(id=Kp>o?-1:1,Kn||(Kp=o),i&&($r&&!af&&r-$r>200&&($r=0,Ns("scrollEnd")),Pl=ph,ph=r),id<0){for(qn=t;qn-- >0;)it[qn]&&it[qn].update(0,i);id=1}else for(qn=0;qn<t;qn++)it[qn]&&it[qn].update(0,i);ct.isUpdating=!1}Nc=0},Zp=[Gx,$x,dg,ug,Fr+oc,Fr+nc,Fr+ic,Fr+rc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],od=Zp.concat([Ts,As,"boxSizing","max"+il,"max"+fg,"position",Fr,an,an+ic,an+nc,an+oc,an+rc]),SD=function(e,t,r){Ha(r);var i=e._gsap;if(i.spacerIsNative)Ha(i.spacerState);else if(e._gsap.swappedIn){var o=t.parentNode;o&&(o.insertBefore(e,t),o.removeChild(t))}e._gsap.swappedIn=!1},_h=function(e,t,r,i){if(!e._gsap.swappedIn){for(var o=Zp.length,s=t.style,a=e.style,l;o--;)l=Zp[o],s[l]=r[l];s.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(s.display="inline-block"),a[dg]=a[ug]="auto",s.flexBasis=r.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Ts]=Ld(e,tr)+pn,s[As]=Ld(e,mn)+pn,s[an]=a[Fr]=a[$x]=a[Gx]="0",Ha(i),a[Ts]=a["max"+il]=r[Ts],a[As]=a["max"+fg]=r[As],a[an]=r[an],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},wD=/([A-Z])/g,Ha=function(e){if(e){var t=e.t.style,r=e.length,i=0,o,s;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<r;i+=2)s=e[i+1],o=e[i],s?t[o]=s:t[o]&&t.removeProperty(o.replace(wD,"-$1").toLowerCase())}},Ou=function(e){for(var t=od.length,r=e.style,i=[],o=0;o<t;o++)i.push(od[o],r[od[o]]);return i.t=e,i},MD=function(e,t,r){for(var i=[],o=e.length,s=r?8:0,a;s<o;s+=2)a=e[s],i.push(a,a in t?t[a]:e[s+1]);return i.t=e.t,i},sd={left:0,top:0},Tb=function(e,t,r,i,o,s,a,l,c,u,d,f,h,g){Bn(e)&&(e=e(l)),xr(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?nd("0"+e.substr(3),r):0));var m=h?h.time():0,_,p,S;if(h&&h.seek(0),isNaN(e)||(e=+e),Ll(e))h&&(e=Le.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&rd(a,r,i,!0);else{Bn(t)&&(t=t(l));var v=(e||"0").split(" "),b,T,R,E;S=ar(t,l)||Ct,b=Yi(S)||{},(!b||!b.left&&!b.top)&&zr(S).display==="none"&&(E=S.style.display,S.style.display="block",b=Yi(S),E?S.style.display=E:S.style.removeProperty("display")),T=nd(v[0],b[i.d]),R=nd(v[1]||"0",r),e=b[i.p]-c[i.p]-u+T+o-R,a&&rd(a,R,i,r-R<20||a._isStart&&R>20),r-=r-R}if(g&&(l[g]=e||-.001,e<0&&(e=0)),s){var D=e+r,y=s._isStart;_="scroll"+i.d2,rd(s,D,i,y&&D>20||!y&&(d?Math.max(Ct[_],Cr[_]):s.parentNode[_])<=D+1),d&&(c=Yi(a),d&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+pn))}return h&&S&&(_=Yi(S),h.seek(f),p=Yi(S),h._caScrollDist=_[i.p]-p[i.p],e=e/h._caScrollDist*f),h&&h.seek(m),h?e:Math.round(e)},CD=/(webkit|moz|length|cssText|inset)/i,Ab=function(e,t,r,i){if(e.parentNode!==t){var o=e.style,s,a;if(t===Ct){e._stOrig=o.cssText,a=zr(e);for(s in a)!+s&&!CD.test(s)&&a[s]&&typeof o[s]=="string"&&s!=="0"&&(o[s]=a[s]);o.top=r,o.left=i}else o.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},Kx=function(e,t,r){var i=t,o=i;return function(s){var a=Math.round(e());return a!==i&&a!==o&&Math.abs(a-i)>3&&Math.abs(a-o)>3&&(s=a,r&&r()),o=i,i=Math.round(s),i}},Bu=function(e,t,r){var i={};i[t.p]="+="+r,Le.set(e,i)},Rb=function(e,t){var r=Go(e,t),i="_scroll"+t.p2,o=function s(a,l,c,u,d){var f=s.tween,h=l.onComplete,g={};c=c||r();var m=Kx(r,c,function(){f.kill(),s.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return m(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){at.cache++,s.tween&&no()},l.onComplete=function(){s.tween=0,h&&h.call(f)},f=s.tween=Le.to(e,l),f};return e[i]=r,r.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},xn(e,"wheel",r.wheelHandler),ct.isTouch&&xn(e,"touchmove",r.wheelHandler),o},ct=function(){function n(t,r){ba||n.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),jp(this),this.init(t,r)}var e=n.prototype;return e.init=function(r,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!kl){this.update=this.refresh=this.kill=gi;return}r=Sb(xr(r)||Ll(r)||r.nodeType?{trigger:r}:r,Lu);var o=r,s=o.onUpdate,a=o.toggleClass,l=o.id,c=o.onToggle,u=o.onRefresh,d=o.scrub,f=o.trigger,h=o.pin,g=o.pinSpacing,m=o.invalidateOnRefresh,_=o.anticipatePin,p=o.onScrubComplete,S=o.onSnapComplete,v=o.once,b=o.snap,T=o.pinReparent,R=o.pinSpacer,E=o.containerAnimation,D=o.fastScrollEnd,y=o.preventOverlaps,x=r.horizontal||r.containerAnimation&&r.horizontal!==!1?tr:mn,I=!d&&d!==0,O=ar(r.scroller||st),F=Le.core.getCache(O),X=Bs(O),J=("pinType"in r?r.pinType:Bo(O,"pinType")||X&&"fixed")==="fixed",W=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],V=I&&r.toggleActions.split(" "),H="markers"in r?r.markers:Lu.markers,de=X?0:parseFloat(zr(O)["border"+x.p2+il])||0,B=this,me=r.onRefreshInit&&function(){return r.onRefreshInit(B)},Ce=mD(O,X,x),Ge=gD(O,X),re=0,he=0,ve=0,z=Go(O,x),le,j,te,be,P,k,M,ne,Z,L,oe,ce,se,C,w,U,Y,q,ee,pe,fe,xe,Ue,ge,ye,Oe,Ne,Se,$e,We,pt,N,Me,ae,ue,we,Ee,Ye,bt;if(B._startClamp=B._endClamp=!1,B._dir=x,_*=45,B.scroller=O,B.scroll=E?E.time.bind(E):z,be=z(),B.vars=r,i=i||r.animation,"refreshPriority"in r&&(Ox=1,r.refreshPriority===-9999&&(sc=B)),F.tweenScroll=F.tweenScroll||{top:Rb(O,mn),left:Rb(O,tr)},B.tweenTo=le=F.tweenScroll[x.p],B.scrubDuration=function(Te){Me=Ll(Te)&&Te,Me?N?N.duration(Te):N=Le.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Me,paused:!0,onComplete:function(){return p&&p(B)}}):(N&&N.progress(1).kill(),N=0)},i&&(i.vars.lazy=!1,i._initted&&!B.isReverted||i.vars.immediateRender!==!1&&r.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),B.animation=i.pause(),i.scrollTrigger=B,B.scrubDuration(d),We=0,l||(l=i.vars.id)),b&&((!ds(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in Ct.style&&Le.set(X?[Ct,Cr]:O,{scrollBehavior:"auto"}),at.forEach(function(Te){return Bn(Te)&&Te.target===(X?Ut.scrollingElement||Cr:O)&&(Te.smooth=!1)}),te=Bn(b.snapTo)?b.snapTo:b.snapTo==="labels"?bD(i):b.snapTo==="labelsDirectional"?vD(i):b.directional!==!1?function(Te,Ze){return hg(b.snapTo)(Te,Dn()-he<500?0:Ze.direction)}:Le.utils.snap(b.snapTo),ae=b.duration||{min:.1,max:2},ae=ds(ae)?tc(ae.min,ae.max):tc(ae,ae),ue=Le.delayedCall(b.delay||Me/2||.1,function(){var Te=z(),Ze=Dn()-he<500,Be=le.tween;if((Ze||Math.abs(B.getVelocity())<10)&&!Be&&!af&&re!==Te){var Ke=(Te-k)/C,en=i&&!I?i.totalProgress():Ke,ot=Ze?0:(en-pt)/(Dn()-Pl)*1e3||0,Bt=Le.utils.clamp(-Ke,1-Ke,ua(ot/2)*ot/.185),dn=Ke+(b.inertia===!1?0:Bt),Dt,Lt,xt=b,gr=xt.onStart,Vt=xt.onInterrupt,Fn=xt.onComplete;if(Dt=te(dn,B),Ll(Dt)||(Dt=dn),Lt=Math.max(0,Math.round(k+Dt*C)),Te<=M&&Te>=k&&Lt!==Te){if(Be&&!Be._initted&&Be.data<=ua(Lt-Te))return;b.inertia===!1&&(Bt=Dt-Ke),le(Lt,{duration:ae(ua(Math.max(ua(dn-en),ua(Dt-en))*.185/ot/.05||0)),ease:b.ease||"power3",data:ua(Lt-Te),onInterrupt:function(){return ue.restart(!0)&&Vt&&Vt(B)},onComplete:function(){B.update(),re=z(),i&&!I&&(N?N.resetTo("totalProgress",Dt,i._tTime/i._tDur):i.progress(Dt)),We=pt=i&&!I?i.totalProgress():B.progress,S&&S(B),Fn&&Fn(B)}},Te,Bt*C,Lt-Te-Bt*C),gr&&gr(B,le.tween)}}else B.isActive&&re!==Te&&ue.restart(!0)}).pause()),l&&(qp[l]=B),f=B.trigger=ar(f||h!==!0&&h),bt=f&&f._gsap&&f._gsap.stRevert,bt&&(bt=bt(B)),h=h===!0?f:ar(h),xr(a)&&(a={targets:f,className:a}),h&&(g===!1||g===Fr||(g=!g&&h.parentNode&&h.parentNode.style&&zr(h.parentNode).display==="flex"?!1:an),B.pin=h,j=Le.core.getCache(h),j.spacer?w=j.pinState:(R&&(R=ar(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),j.spacerIsNative=!!R,R&&(j.spacerState=Ou(R))),j.spacer=q=R||Ut.createElement("div"),q.classList.add("pin-spacer"),l&&q.classList.add("pin-spacer-"+l),j.pinState=w=Ou(h)),r.force3D!==!1&&Le.set(h,{force3D:!0}),B.spacer=q=j.spacer,$e=zr(h),ge=$e[g+x.os2],pe=Le.getProperty(h),fe=Le.quickSetter(h,x.a,pn),_h(h,q,$e),Y=Ou(h)),H){ce=ds(H)?Sb(H,wb):wb,L=Iu("scroller-start",l,O,x,ce,0),oe=Iu("scroller-end",l,O,x,ce,0,L),ee=L["offset"+x.op.d2];var Kt=ar(Bo(O,"content")||O);ne=this.markerStart=Iu("start",l,Kt,x,ce,ee,0,E),Z=this.markerEnd=Iu("end",l,Kt,x,ce,ee,0,E),E&&(Ye=Le.quickSetter([ne,Z],x.a,pn)),!J&&!(Pi.length&&Bo(O,"fixedMarkers")===!0)&&(_D(X?Ct:O),Le.set([L,oe],{force3D:!0}),Oe=Le.quickSetter(L,x.a,pn),Se=Le.quickSetter(oe,x.a,pn))}if(E){var Pe=E.vars.onUpdate,Ie=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){B.update(0,0,1),Pe&&Pe.apply(E,Ie||[])})}if(B.previous=function(){return it[it.indexOf(B)-1]},B.next=function(){return it[it.indexOf(B)+1]},B.revert=function(Te,Ze){if(!Ze)return B.kill(!0);var Be=Te!==!1||!B.enabled,Ke=kn;Be!==B.isReverted&&(Be&&(we=Math.max(z(),B.scroll.rec||0),ve=B.progress,Ee=i&&i.progress()),ne&&[ne,Z,L,oe].forEach(function(en){return en.style.display=Be?"none":"block"}),Be&&(kn=B,B.update(Be)),h&&(!T||!B.isActive)&&(Be?SD(h,q,w):_h(h,q,zr(h),ye)),Be||B.update(Be),kn=Ke,B.isReverted=Be)},B.refresh=function(Te,Ze,Be,Ke){if(!((kn||!B.enabled)&&!Ze)){if(h&&Te&&$r){xn(n,"scrollEnd",Xx);return}!Kn&&me&&me(B),kn=B,le.tween&&!Be&&(le.tween.kill(),le.tween=0),N&&N.pause(),m&&i&&i.revert({kill:!1}).invalidate(),B.isReverted||B.revert(!0,!0),B._subPinOffset=!1;var en=Ce(),ot=Ge(),Bt=E?E.duration():Mi(O,x),dn=C<=.01,Dt=0,Lt=Ke||0,xt=ds(Be)?Be.end:r.end,gr=r.endTrigger||f,Vt=ds(Be)?Be.start:r.start||(r.start===0||!f?0:h?"0 0":"0 100%"),Fn=B.pinnedContainer=r.pinnedContainer&&ar(r.pinnedContainer,B),Lr=f&&Math.max(0,it.indexOf(B))||0,fn=Lr,hn,A,$,ie,Q,G,_e,Ae,De,ke,He,je,ze;for(H&&ds(Be)&&(je=Le.getProperty(L,x.p),ze=Le.getProperty(oe,x.p));fn-- >0;)G=it[fn],G.end||G.refresh(0,1)||(kn=B),_e=G.pin,_e&&(_e===f||_e===h||_e===Fn)&&!G.isReverted&&(ke||(ke=[]),ke.unshift(G),G.revert(!0,!0)),G!==it[fn]&&(Lr--,fn--);for(Bn(Vt)&&(Vt=Vt(B)),Vt=bb(Vt,"start",B),k=Tb(Vt,f,en,x,z(),ne,L,B,ot,de,J,Bt,E,B._startClamp&&"_startClamp")||(h?-.001:0),Bn(xt)&&(xt=xt(B)),xr(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(xr(Vt)?Vt.split(" ")[0]:"")+xt:(Dt=nd(xt.substr(2),en),xt=xr(Vt)?Vt:(E?Le.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,k):k)+Dt,gr=f)),xt=bb(xt,"end",B),M=Math.max(k,Tb(xt||(gr?"100% 0":Bt),gr,en,x,z()+Dt,Z,oe,B,ot,de,J,Bt,E,B._endClamp&&"_endClamp"))||-.001,Dt=0,fn=Lr;fn--;)G=it[fn],_e=G.pin,_e&&G.start-G._pinPush<=k&&!E&&G.end>0&&(hn=G.end-(B._startClamp?Math.max(0,G.start):G.start),(_e===f&&G.start-G._pinPush<k||_e===Fn)&&isNaN(Vt)&&(Dt+=hn*(1-G.progress)),_e===h&&(Lt+=hn));if(k+=Dt,M+=Dt,B._startClamp&&(B._startClamp+=Dt),B._endClamp&&!Kn&&(B._endClamp=M||-.001,M=Math.min(M,Mi(O,x))),C=M-k||(k-=.01)&&.001,dn&&(ve=Le.utils.clamp(0,1,Le.utils.normalize(k,M,we))),B._pinPush=Lt,ne&&Dt&&(hn={},hn[x.a]="+="+Dt,Fn&&(hn[x.p]="-="+z()),Le.set([ne,Z],hn)),h&&!(Yp&&B.end>=Mi(O,x)))hn=zr(h),ie=x===mn,$=z(),xe=parseFloat(pe(x.a))+Lt,!Bt&&M>1&&(He=(X?Ut.scrollingElement||Cr:O).style,He={style:He,value:He["overflow"+x.a.toUpperCase()]},X&&zr(Ct)["overflow"+x.a.toUpperCase()]!=="scroll"&&(He.style["overflow"+x.a.toUpperCase()]="scroll")),_h(h,q,hn),Y=Ou(h),A=Yi(h,!0),Ae=J&&Go(O,ie?tr:mn)(),g?(ye=[g+x.os2,C+Lt+pn],ye.t=q,fn=g===an?Ld(h,x)+C+Lt:0,fn&&(ye.push(x.d,fn+pn),q.style.flexBasis!=="auto"&&(q.style.flexBasis=fn+pn)),Ha(ye),Fn&&it.forEach(function(nt){nt.pin===Fn&&nt.vars.pinSpacing!==!1&&(nt._subPinOffset=!0)}),J&&z(we)):(fn=Ld(h,x),fn&&q.style.flexBasis!=="auto"&&(q.style.flexBasis=fn+pn)),J&&(Q={top:A.top+(ie?$-k:Ae)+pn,left:A.left+(ie?Ae:$-k)+pn,boxSizing:"border-box",position:"fixed"},Q[Ts]=Q["max"+il]=Math.ceil(A.width)+pn,Q[As]=Q["max"+fg]=Math.ceil(A.height)+pn,Q[Fr]=Q[Fr+ic]=Q[Fr+nc]=Q[Fr+oc]=Q[Fr+rc]="0",Q[an]=hn[an],Q[an+ic]=hn[an+ic],Q[an+nc]=hn[an+nc],Q[an+oc]=hn[an+oc],Q[an+rc]=hn[an+rc],U=MD(w,Q,T),Kn&&z(0)),i?(De=i._initted,fh(1),i.render(i.duration(),!0,!0),Ue=pe(x.a)-xe+C+Lt,Ne=Math.abs(C-Ue)>1,J&&Ne&&U.splice(U.length-2,2),i.render(0,!0,!0),De||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),fh(0)):Ue=C,He&&(He.value?He.style["overflow"+x.a.toUpperCase()]=He.value:He.style.removeProperty("overflow-"+x.a));else if(f&&z()&&!E)for(A=f.parentNode;A&&A!==Ct;)A._pinOffset&&(k-=A._pinOffset,M-=A._pinOffset),A=A.parentNode;ke&&ke.forEach(function(nt){return nt.revert(!1,!0)}),B.start=k,B.end=M,be=P=Kn?we:z(),!E&&!Kn&&(be<we&&z(we),B.scroll.rec=0),B.revert(!1,!0),he=Dn(),ue&&(re=-1,ue.restart(!0)),kn=0,i&&I&&(i._initted||Ee)&&i.progress()!==Ee&&i.progress(Ee||0,!0).render(i.time(),!0,!0),(dn||ve!==B.progress||E||m||i&&!i._initted)&&(i&&!I&&i.totalProgress(E&&k<-.001&&!ve?Le.utils.normalize(k,M,0):ve,!0),B.progress=dn||(be-k)/C===ve?0:ve),h&&g&&(q._pinOffset=Math.round(B.progress*Ue)),N&&N.invalidate(),isNaN(je)||(je-=Le.getProperty(L,x.p),ze-=Le.getProperty(oe,x.p),Bu(L,x,je),Bu(ne,x,je-(Ke||0)),Bu(oe,x,ze),Bu(Z,x,ze-(Ke||0))),dn&&!Kn&&B.update(),u&&!Kn&&!se&&(se=!0,u(B),se=!1)}},B.getVelocity=function(){return(z()-P)/(Dn()-Pl)*1e3||0},B.endAnimation=function(){Ml(B.callbackAnimation),i&&(N?N.progress(1):i.paused()?I||Ml(i,B.direction<0,1):Ml(i,i.reversed()))},B.labelToScroll=function(Te){return i&&i.labels&&(k||B.refresh()||k)+i.labels[Te]/i.duration()*C||0},B.getTrailing=function(Te){var Ze=it.indexOf(B),Be=B.direction>0?it.slice(0,Ze).reverse():it.slice(Ze+1);return(xr(Te)?Be.filter(function(Ke){return Ke.vars.preventOverlaps===Te}):Be).filter(function(Ke){return B.direction>0?Ke.end<=k:Ke.start>=M})},B.update=function(Te,Ze,Be){if(!(E&&!Be&&!Te)){var Ke=Kn===!0?we:B.scroll(),en=Te?0:(Ke-k)/C,ot=en<0?0:en>1?1:en||0,Bt=B.progress,dn,Dt,Lt,xt,gr,Vt,Fn,Lr;if(Ze&&(P=be,be=E?z():Ke,b&&(pt=We,We=i&&!I?i.totalProgress():ot)),_&&h&&!kn&&!Ru&&$r&&(!ot&&k<Ke+(Ke-P)/(Dn()-Pl)*_?ot=1e-4:ot===1&&M>Ke+(Ke-P)/(Dn()-Pl)*_&&(ot=.9999)),ot!==Bt&&B.enabled){if(dn=B.isActive=!!ot&&ot<1,Dt=!!Bt&&Bt<1,Vt=dn!==Dt,gr=Vt||!!ot!=!!Bt,B.direction=ot>Bt?1:-1,B.progress=ot,gr&&!kn&&(Lt=ot&&!Bt?0:ot===1?1:Bt===1?2:3,I&&(xt=!Vt&&V[Lt+1]!=="none"&&V[Lt+1]||V[Lt],Lr=i&&(xt==="complete"||xt==="reset"||xt in i))),y&&(Vt||Lr)&&(Lr||d||!i)&&(Bn(y)?y(B):B.getTrailing(y).forEach(function($){return $.endAnimation()})),I||(N&&!kn&&!Ru?(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",ot,i._tTime/i._tDur):(N.vars.totalProgress=ot,N.invalidate().restart())):i&&i.totalProgress(ot,!!(kn&&(he||Te)))),h){if(Te&&g&&(q.style[g+x.os2]=ge),!J)fe(Dl(xe+Ue*ot));else if(gr){if(Fn=!Te&&ot>Bt&&M+1>Ke&&Ke+1>=Mi(O,x),T)if(!Te&&(dn||Fn)){var fn=Yi(h,!0),hn=Ke-k;Ab(h,Ct,fn.top+(x===mn?hn:0)+pn,fn.left+(x===mn?0:hn)+pn)}else Ab(h,q);Ha(dn||Fn?U:Y),Ne&&ot<1&&dn||fe(xe+(ot===1&&!Fn?Ue:0))}}b&&!le.tween&&!kn&&!Ru&&ue.restart(!0),a&&(Vt||v&&ot&&(ot<1||!hh))&&Uc(a.targets).forEach(function($){return $.classList[dn||v?"add":"remove"](a.className)}),s&&!I&&!Te&&s(B),gr&&!kn?(I&&(Lr&&(xt==="complete"?i.pause().totalProgress(1):xt==="reset"?i.restart(!0).pause():xt==="restart"?i.restart(!0):i[xt]()),s&&s(B)),(Vt||!hh)&&(c&&Vt&&mh(B,c),W[Lt]&&mh(B,W[Lt]),v&&(ot===1?B.kill(!1,1):W[Lt]=0),Vt||(Lt=ot===1?1:3,W[Lt]&&mh(B,W[Lt]))),D&&!dn&&Math.abs(B.getVelocity())>(Ll(D)?D:2500)&&(Ml(B.callbackAnimation),N?N.progress(1):Ml(i,xt==="reverse"?1:!ot,1))):I&&s&&!kn&&s(B)}if(Se){var A=E?Ke/E.duration()*(E._caScrollDist||0):Ke;Oe(A+(L._isFlipped?1:0)),Se(A)}Ye&&Ye(-Ke/E.duration()*(E._caScrollDist||0))}},B.enable=function(Te,Ze){B.enabled||(B.enabled=!0,xn(O,"resize",Il),X||xn(O,"scroll",da),me&&xn(n,"refreshInit",me),Te!==!1&&(B.progress=ve=0,be=P=re=z()),Ze!==!1&&B.refresh())},B.getTween=function(Te){return Te&&le?le.tween:N},B.setPositions=function(Te,Ze,Be,Ke){if(E){var en=E.scrollTrigger,ot=E.duration(),Bt=en.end-en.start;Te=en.start+Bt*Te/ot,Ze=en.start+Bt*Ze/ot}B.refresh(!1,!1,{start:vb(Te,Be&&!!B._startClamp),end:vb(Ze,Be&&!!B._endClamp)},Ke),B.update()},B.adjustPinSpacing=function(Te){if(ye&&Te){var Ze=ye.indexOf(x.d)+1;ye[Ze]=parseFloat(ye[Ze])+Te+pn,ye[1]=parseFloat(ye[1])+Te+pn,Ha(ye)}},B.disable=function(Te,Ze){if(B.enabled&&(Te!==!1&&B.revert(!0,!0),B.enabled=B.isActive=!1,Ze||N&&N.pause(),we=0,j&&(j.uncache=1),me&&yn(n,"refreshInit",me),ue&&(ue.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!X)){for(var Be=it.length;Be--;)if(it[Be].scroller===O&&it[Be]!==B)return;yn(O,"resize",Il),X||yn(O,"scroll",da)}},B.kill=function(Te,Ze){B.disable(Te,Ze),N&&!Ze&&N.kill(),l&&delete qp[l];var Be=it.indexOf(B);Be>=0&&it.splice(Be,1),Be===qn&&id>0&&qn--,Be=0,it.forEach(function(Ke){return Ke.scroller===B.scroller&&(Be=1)}),Be||Kn||(B.scroll.rec=0),i&&(i.scrollTrigger=null,Te&&i.revert({kill:!1}),Ze||i.kill()),ne&&[ne,Z,L,oe].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),sc===B&&(sc=0),h&&(j&&(j.uncache=1),Be=0,it.forEach(function(Ke){return Ke.pin===h&&Be++}),Be||(j.spacer=0)),r.onKill&&r.onKill(B)},it.push(B),B.enable(!1,!1),bt&&bt(B),i&&i.add&&!C){var Qe=B.update;B.update=function(){B.update=Qe,at.cache++,k||M||B.refresh()},Le.delayedCall(.01,B.update),C=.01,k=M=0}else B.refresh();h&&xD()},n.register=function(r){return ba||(Le=r||zx(),Fx()&&window.document&&n.enable(),ba=kl),ba},n.defaults=function(r){if(r)for(var i in r)Lu[i]=r[i];return Lu},n.disable=function(r,i){kl=0,it.forEach(function(s){return s[i?"kill":"disable"](r)}),yn(st,"wheel",da),yn(Ut,"scroll",da),clearInterval(Au),yn(Ut,"touchcancel",gi),yn(Ct,"touchstart",gi),ku(yn,Ut,"pointerdown,touchstart,mousedown",yb),ku(yn,Ut,"pointerup,touchend,mouseup",xb),kd.kill(),Pu(yn);for(var o=0;o<at.length;o+=3)Du(yn,at[o],at[o+1]),Du(yn,at[o],at[o+2])},n.enable=function(){if(st=window,Ut=document,Cr=Ut.documentElement,Ct=Ut.body,Le&&(Uc=Le.utils.toArray,tc=Le.utils.clamp,jp=Le.core.context||gi,fh=Le.core.suppressOverwrites||gi,lg=st.history.scrollRestoration||"auto",Kp=st.pageYOffset||0,Le.core.globals("ScrollTrigger",n),Ct)){kl=1,za=document.createElement("div"),za.style.height="100vh",za.style.position="absolute",qx(),pD(),rn.register(Le),n.isTouch=rn.isTouch,vo=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Xp=rn.isTouch===1,xn(st,"wheel",da),ag=[st,Ut,Cr,Ct],Le.matchMedia?(n.matchMedia=function(c){var u=Le.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},Le.addEventListener("matchMediaInit",function(){return pg()}),Le.addEventListener("matchMediaRevert",function(){return jx()}),Le.addEventListener("matchMedia",function(){ys(0,1),Ns("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return gh(),gh})):console.warn("Requires GSAP 3.11.0 or later"),gh(),xn(Ut,"scroll",da);var r=Ct.hasAttribute("style"),i=Ct.style,o=i.borderTopStyle,s=Le.core.Animation.prototype,a,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Yi(Ct),mn.m=Math.round(a.top+mn.sc())||0,tr.m=Math.round(a.left+tr.sc())||0,o?i.borderTopStyle=o:i.removeProperty("border-top-style"),r||(Ct.setAttribute("style",""),Ct.removeAttribute("style")),Au=setInterval(Mb,250),Le.delayedCall(.5,function(){return Ru=0}),xn(Ut,"touchcancel",gi),xn(Ct,"touchstart",gi),ku(xn,Ut,"pointerdown,touchstart,mousedown",yb),ku(xn,Ut,"pointerup,touchend,mouseup",xb),Wp=Le.utils.checkPrefix("transform"),od.push(Wp),ba=Dn(),kd=Le.delayedCall(.2,ys).pause(),va=[Ut,"visibilitychange",function(){var c=st.innerWidth,u=st.innerHeight;Ut.hidden?(gb=c,_b=u):(gb!==c||_b!==u)&&Il()},Ut,"DOMContentLoaded",ys,st,"load",ys,st,"resize",Il],Pu(xn),it.forEach(function(c){return c.enable(0,1)}),l=0;l<at.length;l+=3)Du(yn,at[l],at[l+1]),Du(yn,at[l],at[l+2])}},n.config=function(r){"limitCallbacks"in r&&(hh=!!r.limitCallbacks);var i=r.syncInterval;i&&clearInterval(Au)||(Au=i)&&setInterval(Mb,i),"ignoreMobileResize"in r&&(Xp=n.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(Pu(yn)||Pu(xn,r.autoRefreshEvents||"none"),Bx=(r.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(r,i){var o=ar(r),s=at.indexOf(o),a=Bs(o);~s&&at.splice(s,a?6:2),i&&(a?Pi.unshift(st,i,Ct,i,Cr,i):Pi.unshift(o,i))},n.clearMatchMedia=function(r){it.forEach(function(i){return i._ctx&&i._ctx.query===r&&i._ctx.kill(!0,!0)})},n.isInViewport=function(r,i,o){var s=(xr(r)?ar(r):r).getBoundingClientRect(),a=s[o?Ts:As]*i||0;return o?s.right-a>0&&s.left+a<st.innerWidth:s.bottom-a>0&&s.top+a<st.innerHeight},n.positionInViewport=function(r,i,o){xr(r)&&(r=ar(r));var s=r.getBoundingClientRect(),a=s[o?Ts:As],l=i==null?a/2:i in Id?Id[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return o?(s.left+l)/st.innerWidth:(s.top+l)/st.innerHeight},n.killAll=function(r){if(it.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),r!==!0){var i=Us.killAll||[];Us={},i.forEach(function(o){return o()})}},n}();ct.version="3.12.7";ct.saveStyles=function(n){return n?Uc(n).forEach(function(e){if(e&&e.style){var t=yr.indexOf(e);t>=0&&yr.splice(t,5),yr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),jp())}}):yr};ct.revert=function(n,e){return pg(!n,e)};ct.create=function(n,e){return new ct(n,e)};ct.refresh=function(n){return n?Il(!0):(ba||ct.register())&&ys(!0)};ct.update=function(n){return++at.cache&&no(n===!0?2:0)};ct.clearScrollMemory=Yx;ct.maxScroll=function(n,e){return Mi(n,e?tr:mn)};ct.getScrollFunc=function(n,e){return Go(ar(n),e?tr:mn)};ct.getById=function(n){return qp[n]};ct.getAll=function(){return it.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!$r};ct.snapDirectional=hg;ct.addEventListener=function(n,e){var t=Us[n]||(Us[n]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(n,e){var t=Us[n],r=t&&t.indexOf(e);r>=0&&t.splice(r,1)};ct.batch=function(n,e){var t=[],r={},i=e.interval||.016,o=e.batchMax||1e9,s=function(c,u){var d=[],f=[],h=Le.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),f.push(g),o<=d.length&&h.progress(1)}},a;for(a in e)r[a]=a.substr(0,2)==="on"&&Bn(e[a])&&a!=="onRefreshInit"?s(a,e[a]):e[a];return Bn(o)&&(o=o(),xn(ct,"refresh",function(){return o=e.batchMax()})),Uc(n).forEach(function(l){var c={};for(a in r)c[a]=r[a];c.trigger=l,t.push(ct.create(c))}),t};var Pb=function(e,t,r,i){return t>i?e(i):t<0&&e(0),r>i?(i-t)/(r-t):r<0?t/(t-r):1},bh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===Cr&&n(Ct,t)},Uu={auto:1,scroll:1},ED=function(e){var t=e.event,r=e.target,i=e.axis,o=(t.changedTouches?t.changedTouches[0]:t).target,s=o._gsap||Le.core.getCache(o),a=Dn(),l;if(!s._isScrollT||a-s._isScrollT>2e3){for(;o&&o!==Ct&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(Uu[(l=zr(o)).overflowY]||Uu[l.overflowX]));)o=o.parentNode;s._isScroll=o&&o!==r&&!Bs(o)&&(Uu[(l=zr(o)).overflowY]||Uu[l.overflowX]),s._isScrollT=a}(s._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Zx=function(e,t,r,i){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ED,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return r&&xn(Ut,rn.eventTypes[0],Db,!1,!0)},onDisable:function(){return yn(Ut,rn.eventTypes[0],Db,!0)}})},TD=/(input|label|select|textarea)/i,kb,Db=function(e){var t=TD.test(e.target.tagName);(t||kb)&&(e._gsapAllow=!0,kb=t)},AD=function(e){ds(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,r=t.normalizeScrollX,i=t.momentum,o=t.allowNestedScroll,s=t.onRelease,a,l,c=ar(e.target)||Cr,u=Le.core.globals().ScrollSmoother,d=u&&u.get(),f=vo&&(e.content&&ar(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Go(c,mn),g=Go(c,tr),m=1,_=(rn.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,p=0,S=Bn(i)?function(){return i(a)}:function(){return i||2.8},v,b,T=Zx(c,e.type,!0,o),R=function(){return b=!1},E=gi,D=gi,y=function(){l=Mi(c,mn),D=tc(vo?1:0,l),r&&(E=tc(0,Mi(c,tr))),v=Rs},x=function(){f._gsap.y=Dl(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},I=function(){if(b){requestAnimationFrame(R);var H=Dl(a.deltaY/2),de=D(h.v-H);if(f&&de!==h.v+h.offset){h.offset=de-h.v;var B=Dl((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+B+", 0, 1)",f._gsap.y=B+"px",h.cacheID=at.cache,no()}return!0}h.offset&&x(),b=!0},O,F,X,J,W=function(){y(),O.isActive()&&O.vars.scrollY>l&&(h()>l?O.progress(1)&&h(l):O.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(V){return vo&&V.type==="touchmove"&&I()||m>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){b=!1;var V=m;m=Dl((st.visualViewport&&st.visualViewport.scale||1)/_),O.pause(),V!==m&&bh(c,m>1.01?!0:r?!1:"x"),F=g(),X=h(),y(),v=Rs},e.onRelease=e.onGestureStart=function(V,H){if(h.offset&&x(),!H)J.restart(!0);else{at.cache++;var de=S(),B,me;r&&(B=g(),me=B+de*.05*-V.velocityX/.227,de*=Pb(g,B,me,Mi(c,tr)),O.vars.scrollX=E(me)),B=h(),me=B+de*.05*-V.velocityY/.227,de*=Pb(h,B,me,Mi(c,mn)),O.vars.scrollY=D(me),O.invalidate().duration(de).play(.01),(vo&&O.vars.scrollY>=l||B>=l-1)&&Le.to({},{onUpdate:W,duration:de})}s&&s(V)},e.onWheel=function(){O._ts&&O.pause(),Dn()-p>1e3&&(v=0,p=Dn())},e.onChange=function(V,H,de,B,me){if(Rs!==v&&y(),H&&r&&g(E(B[2]===H?F+(V.startX-V.x):g()+H-B[1])),de){h.offset&&x();var Ce=me[2]===de,Ge=Ce?X+V.startY-V.y:h()+de-me[1],re=D(Ge);Ce&&Ge!==re&&(X+=re-Ge),h(re)}(de||H)&&no()},e.onEnable=function(){bh(c,r?!1:"x"),ct.addEventListener("refresh",W),xn(st,"resize",W),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){bh(c,!0),yn(st,"resize",W),ct.removeEventListener("refresh",W),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=vo,vo&&!h()&&h(1),vo&&Le.ticker.add(gi),J=a._dc,O=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Kx(h,h(),function(){return O.pause()})},onUpdate:no,onComplete:J.vars.onComplete}),a};ct.sort=function(n){if(Bn(n))return it.sort(n);var e=st.pageYOffset||0;return ct.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),it.sort(n||function(t,r){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})};ct.observe=function(n){return new rn(n)};ct.normalizeScroll=function(n){if(typeof n>"u")return jn;if(n===!0&&jn)return jn.enable();if(n===!1){jn&&jn.kill(),jn=n;return}var e=n instanceof rn?n:AD(n);return jn&&jn.target===e.target&&jn.kill(),Bs(e.target)&&(jn=e),e};ct.core={_getVelocityProp:$p,_inputObserver:Zx,_scrollers:at,_proxies:Pi,bridge:{ss:function(){$r||Ns("scrollStart"),$r=Dn()},ref:function(){return kn}}};zx()&&Le.registerPlugin(ct);const RD={class:"canvas-warpper"},Nu=128,PD={__name:"SolarSystem",setup(n){Op.registerPlugin(ct);const{isAnimationActive:e}=AP(RP()),t=nr(null);let r,i,o,s;return Gc(()=>{r=new o2,i=new S2,s=new m2;const a=j=>{const te=s.load(j);return te.wrapS=te.wrapT=md,te.mapping=pd,te.colorSpace=Sr,te},l={sun:a("/textures/space/2k_sun.jpg"),mercury:a("/textures/space/2k_mercury.jpg"),venus:a("/textures/space/2k_venus_surface.jpg"),earth:a("/textures/space/2k_earth_daymap.jpg"),moon:a("/textures/space/2k_moon.jpg"),star:a("/textures/space/2k_eris_fictional.jpg"),mars:a("/textures/space/2k_mars.jpg"),jupiter:a("/textures/space/2k_jupiter.jpg"),saturn:a("/textures/space/2k_saturn.jpg"),saturnRing:a("/textures/space/2k_saturn_ring_alpha.png"),uranus:a("/textures/space/2k_uranus.jpg"),neptune:a("/textures/space/2k_neptune.jpg")},c=new s5({canvas:t.value,antialias:!0});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(window.devicePixelRatio>1?2:1),c.shadowMap.enabled=!0,o=new Mr(75,window.innerWidth/window.innerHeight,1,1e3),o.position.set(Nu/4,Nu/4,Nu/4),o.lookAt(0,0,0),r.add(o),r.add(new y2("white",.1));const u=new b2("white",2048,2048);u.position.set(0,0,0),u.castShadow=!0,u.shadow.mapSize.set(128,128),u.shadow.camera.near=1,u.shadow.camera.far=256,r.add(u);const d=(j,te,be)=>{const P=te?{map:te}:{},k=new oi(new Om(j,32,32),new G0(P));return be&&(k.name=be),k},f=d(6,l.sun,"sun");f.material.emissive=new ft("white"),f.material.emissiveMap=l.sun,f.material.emissiveIntensity=.75;const h=d(.4,l.mercury,"mercury"),g=d(.9,l.venus,"venus"),m=d(1,l.earth,"earth"),_=d(.25,l.moon,"moon"),p=d(.55,l.mars,"mars"),S=d(2.5,l.jupiter,"jupiter"),v=d(2.1,l.saturn,"saturn"),b=d(.9,l.uranus,"uranus"),T=d(.9,l.neptune,"neptune");r.add(f),m.add(_),m.rotation.x=fi.degToRad(23.5),v.rotation.x=fi.degToRad(27);const R=()=>{const j=new Im(3.5,4.5,32),te=new G0({side:vi,opacity:.75,transparent:!0,emissive:new ft("white"),emissiveMap:l.saturnRing,emissiveIntensity:.75}),be=new oi(j,te);return be.rotation.x=Math.PI/2,be};v.add(R());const E=new _s;E.add(h,g,m,p,S,v,b,T),r.add(E);const D=new _s,y=[];for(let j=0;j<1024;j++){const te=d(Math.random()*.1+.2,null);te.material.emissive=new ft("white"),te.material.emissiveMap=l.star,te.material.emissiveIntensity=.75,te.position.set(Math.random()*384-192,Math.random()*384-192,Math.random()*384-192),D.add(te),y.push(te)}r.add(D);function x(j){const te=j*.025;y.forEach((be,P)=>{be.material.emissiveIntensity=(Math.sin(te+P*.5)+1)*.375}),requestAnimationFrame(x)}requestAnimationFrame(x);const I=[{object:f,speed:16},{object:m,speed:1},{object:_,speed:.25},{object:h,speed:1.5},{object:g,speed:.5},{object:p,speed:1.2},{object:S,speed:.3},{object:v,speed:.4},{object:b,speed:.6},{object:T,speed:.5},{object:D,speed:32}],O=[{name:"mercury",object:h,speed:.32,radius:10,incDeg:27,nodeDeg:10,phaseDeg:270},{name:"venus",object:g,speed:.17,radius:11,incDeg:-18,nodeDeg:75,phaseDeg:225},{name:"earth",object:m,speed:.12,radius:13,incDeg:0,nodeDeg:45,phaseDeg:135},{name:"mars",object:p,speed:.07,radius:15,incDeg:-36,nodeDeg:25,phaseDeg:270},{name:"jupiter",object:S,speed:.048,radius:19,incDeg:18,nodeDeg:55,phaseDeg:90},{name:"saturn",object:v,speed:.027,radius:24,incDeg:-27,nodeDeg:90,phaseDeg:225},{name:"uranus",object:b,speed:.022,radius:30,incDeg:36,nodeDeg:75,phaseDeg:180},{name:"neptune",object:T,speed:.012,radius:36,incDeg:-18,nodeDeg:15,phaseDeg:135}],F=new _s;O.forEach(({name:j,radius:te,incDeg:be,nodeDeg:P})=>{const k=(()=>{const M=[];for(let oe=0;oe<=256;oe++){const ce=oe/256*Math.PI*2;M.push(Math.cos(ce)*te,0,Math.sin(ce)*te)}const ne=new ui;ne.setAttribute("position",new or(M,3));const Z=new z1({color:"white",transparent:!0,opacity:.12}),L=new c2(ne,Z);return L.renderOrder=1,L})();k.name=`orbit-${j}`,k.rotation.set(fi.degToRad(be),fi.degToRad(P),0),F.add(k)}),r.add(F);const X={};O.forEach(({object:j,phaseDeg:te=0})=>{X[j.uuid]=fi.degToRad(te)});const J=j=>{I.forEach(({object:te,speed:be})=>{te.rotation.y+=j/be}),O.forEach(({object:te,speed:be,radius:P,incDeg:k,nodeDeg:M})=>{X[te.uuid]-=j*be;const ne=X[te.uuid],Z=new K(Math.cos(ne)*P,0,Math.sin(ne)*P),L=new Is().setFromEuler(new Xr(fi.degToRad(k),fi.degToRad(M),0,"XYZ"));Z.applyQuaternion(L),te.position.copy(Z)})},W=j=>{let te=Math.atan2(j.z,j.x);return te<0?te+Math.PI*2:te},V=Nu/3,H=.33,de=.4,B=(j,te=V)=>{const be=Math.atan2(j.z,j.x),P=Math.cos(be)*te,k=Math.sin(be)*te,M=te*H,ne=j.y*de;return new K(P,M+ne,k)},me=({radius:j,incDeg:te,nodeDeg:be,phaseDeg:P=0})=>{const k=fi.degToRad(P),M=new K(Math.cos(k)*j,0,Math.sin(k)*j),ne=new Is().setFromEuler(new Xr(fi.degToRad(te),fi.degToRad(be),0,"XYZ"));return M.applyQuaternion(ne)},Ce=()=>{const te=O.map(P=>{const k=me(P);return{label:P.name,target:k,yaw:W(k)}}).sort((P,k)=>P.yaw-k.yaw);return[...te,{...te[0],label:`${te[0].label}-loop`}].map(P=>{const k=B(P.target);return{label:P.label,target:P.target,camPos:k}})};(()=>{const j=Ce(),te=Op.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:document.querySelector(".canvas-warpper"),start:"top top",end:"+=10000",scrub:2.5,pin:!0}});j.forEach(({camPos:be,target:P},k)=>{te.to(o.position,{x:be.x,y:be.y,z:be.z,duration:1,onUpdate:()=>o.lookAt(P)},k)})})();const re=()=>{const j=i.getDelta();e.value&&J(j),o.lookAt(0,0,0),c.render(r,o),c.setAnimationLoop(re)},he=new w2,ve=new _t,z=j=>{ve.x=j.clientX/window.innerWidth*2-1,ve.y=-(j.clientY/window.innerHeight)*2+1,he.setFromCamera(ve,o);const te=[f,h,g,m,p,S,v,b,T],be=he.intersectObjects(te,!1);if(be.length>0){const P=be[0].object;console.log(P.name)}};c.domElement.addEventListener("click",z);const le=()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",le),re(),hm(()=>{window.removeEventListener("resize",le),c.setAnimationLoop(null)})}),(a,l)=>(Fe(),lt("div",RD,[Tt("canvas",{id:"canvas",ref_key:"canvas",ref:t},null,512),zt(uD)]))}},kD=$s(PD,[["__scopeId","data-v-0696b680"]]),DD={__name:"Home",setup(n){return(e,t)=>(Fe(),un(kD))}},LD={};function ID(n,e){return Fe(),lt("div",null,"노트에용")}const OD=$s(LD,[["render",ID]]),BD={};function UD(n,e){const t=sf;return Fe(),lt(nn,null,[e[0]||(e[0]=Tt("div",null,"갤러리에요",-1)),zt(t,{label:"버튼"})],64)}const ND=$s(BD,[["render",UD]]),FD={};function zD(n,e){return Fe(),lt("div",null,"Serene1004")}const HD=$s(FD,[["render",zD]]),VD=[{path:"/",name:"Home",component:DD},{path:"/notes",name:"Notes",component:OD},{path:"/gallery",name:"Gallery",component:ND},{path:"/contact",name:"Contact",component:HD}],GD=AC({history:rC(),routes:VD}),$D=xP();var Pn={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Fc(n){"@babel/helpers - typeof";return Fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fc(n)}function Lb(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Fu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Lb(Object(t),!0).forEach(function(r){WD(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Lb(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function WD(n,e,t){return(e=XD(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function XD(n){var e=jD(n,"string");return Fc(e)=="symbol"?e:e+""}function jD(n,e){if(Fc(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Fc(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var YD={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Pn.STARTS_WITH,Pn.CONTAINS,Pn.NOT_CONTAINS,Pn.ENDS_WITH,Pn.EQUALS,Pn.NOT_EQUALS],numeric:[Pn.EQUALS,Pn.NOT_EQUALS,Pn.LESS_THAN,Pn.LESS_THAN_OR_EQUAL_TO,Pn.GREATER_THAN,Pn.GREATER_THAN_OR_EQUAL_TO],date:[Pn.DATE_IS,Pn.DATE_IS_NOT,Pn.DATE_BEFORE,Pn.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},qD=Symbol();function KD(n,e){var t={config:zs(e)};return n.config.globalProperties.$primevue=t,n.provide(qD,t),ZD(),JD(n,t),t}var Ca=[];function ZD(){Qr.clear(),Ca.forEach(function(n){return n==null?void 0:n()}),Ca=[]}function JD(n,e){var t=nr(!1),r=function(){var c;if(((c=e.config)===null||c===void 0?void 0:c.theme)!=="none"&&!Rt.isStyleNameLoaded("common")){var u,d,f=((u=Pt.getCommonTheme)===null||u===void 0?void 0:u.call(Pt))||{},h=f.primitive,g=f.semantic,m=f.global,_=f.style,p={nonce:(d=e.config)===null||d===void 0||(d=d.csp)===null||d===void 0?void 0:d.nonce};Pt.load(h==null?void 0:h.css,Fu({name:"primitive-variables"},p)),Pt.load(g==null?void 0:g.css,Fu({name:"semantic-variables"},p)),Pt.load(m==null?void 0:m.css,Fu({name:"global-variables"},p)),Pt.loadTheme(Fu({name:"global-style"},p),_),Rt.setLoadedStyleName("common")}};Qr.on("theme:change",function(l){t.value||(n.config.globalProperties.$primevue.config.theme=l,t.value=!0)});var i=xi(e.config,function(l,c){wa.emit("config:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),o=xi(function(){return e.config.ripple},function(l,c){wa.emit("config:ripple:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),s=xi(function(){return e.config.theme},function(l,c){t.value||Rt.setTheme(l),e.config.unstyled||r(),t.value=!1,wa.emit("config:theme:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!1}),a=xi(function(){return e.config.unstyled},function(l,c){!l&&e.config.theme&&r(),wa.emit("config:unstyled:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0});Ca.push(i),Ca.push(o),Ca.push(s),Ca.push(a)}var QD={install:function(e,t){var r=ox(YD,t);KD(e,r)}},eL={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}},tL={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},nL={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}},rL={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},iL={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},oL={root:{borderRadius:"{content.border.radius}"}},sL={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}},aL={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},lL={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}},cL={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},uL={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"}},dL={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}}},fL={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}},hL={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},pL={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}},mL={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}},gL={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},_L={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},bL={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}},vL={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.375rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.375rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}},yL={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}},xL={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}},SL={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},wL={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}},ML={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}},CL={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}},EL={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}},TL={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}},AL={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}},RL={icon:{color:"{form.field.icon.color}"}},PL={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"}},kL={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},DL={handle:{size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},LL={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},IL={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}},OL={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}},BL={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"}},UL={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},NL={root:{gap:"0.5rem"},input:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}}},FL={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},zL={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}},HL={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}},VL={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},GL={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}},$L={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},WL={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}},XL={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}},jL={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}},YL={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},qL={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}},KL={root:{outline:{width:"2px",color:"{content.background}"}}},ZL={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}},JL={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}},QL={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}},eI={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}},tI={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},nI={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}},rI={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}},iI={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}},oI={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}}},sI={root:{gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},aI={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}},lI={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},cI={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}},uI={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},dI={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},fI={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}},hI={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}},pI={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}},mI={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},gI={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"}},_I={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},bI={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}},vI={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},yI={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},xI={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},SI={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}},wI={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},MI={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},CI={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}},EI={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},TI={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.375rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.625rem 1.25rem"}},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}},AI={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}}},RI={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}},PI={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},kI={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.5rem 0"}},DI={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}},LI={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},II={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};function zc(n){"@babel/helpers - typeof";return zc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zc(n)}function Ib(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Ob(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ib(Object(t),!0).forEach(function(r){OI(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ib(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function OI(n,e,t){return(e=BI(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function BI(n){var e=UI(n,"string");return zc(e)=="symbol"?e:e+""}function UI(n,e){if(zc(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(zc(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var NI=Ob(Ob({},iL),{},{components:{accordion:eL,autocomplete:tL,avatar:nL,badge:rL,blockui:oL,breadcrumb:sL,button:aL,datepicker:vL,card:lL,carousel:cL,cascadeselect:uL,checkbox:dL,chip:fL,colorpicker:hL,confirmdialog:pL,confirmpopup:mL,contextmenu:gL,dataview:bL,datatable:_L,dialog:yL,divider:xL,dock:SL,drawer:wL,editor:ML,fieldset:CL,fileupload:EL,iftalabel:PL,floatlabel:TL,galleria:AL,iconfield:RL,image:kL,imagecompare:DL,inlinemessage:LL,inplace:IL,inputchips:OL,inputgroup:BL,inputnumber:UL,inputotp:NL,inputtext:FL,knob:zL,listbox:HL,megamenu:VL,menu:GL,menubar:$L,message:WL,metergroup:XL,multiselect:jL,orderlist:YL,organizationchart:qL,overlaybadge:KL,popover:nI,paginator:ZL,password:eI,panel:JL,panelmenu:QL,picklist:tI,progressbar:rI,progressspinner:iI,radiobutton:oI,rating:sI,scrollpanel:lI,select:cI,selectbutton:uI,skeleton:dI,slider:fI,speeddial:hI,splitter:mI,splitbutton:pI,stepper:gI,steps:_I,tabmenu:bI,tabs:vI,tabview:yI,textarea:wI,tieredmenu:MI,tag:xI,terminal:SI,timeline:CI,togglebutton:TI,toggleswitch:AI,tree:kI,treeselect:DI,treetable:LI,toast:EI,toolbar:RI,virtualscroller:II},directives:{tooltip:PI,ripple:aI}});const FI={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1em",anchorGutter:"2px",primary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"},formField:{paddingX:"0.75em",paddingY:"0.5em",sm:{fontSize:"0.875em",paddingX:"0.625em",paddingY:"0.375em"},lg:{fontSize:"1.125em",paddingX:"0.875em",paddingY:"0.625em"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25em 0.25em",gap:"2px",header:{padding:"0.5em 1em 0.25em 1em"},option:{padding:"0.5em 0.75em",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5em 0.75em",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25em 0.25em",gap:"2px"},item:{padding:"0.5em 0.75em",borderRadius:"{border.radius.sm}",gap:"0.5em"},submenuLabel:{padding:"0.5em 0.75em",fontWeight:"600"},submenuIcon:{size:"0.875em"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75em",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25em",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},zI=ZP(NI,FI),Jx=SM(CM).use(GD).use($D);Jx.use(QD,{theme:{preset:zI,options:{prefix:"p",darkModeSelector:".dark",cssLayer:!1}},ripple:!0});const HI=Jx;HI.mount("#app");

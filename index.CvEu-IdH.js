(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Tf(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const vt={},fs=[],Ar=()=>{},Kv=()=>!1,Ac=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Af=n=>n.startsWith("onUpdate:"),qt=Object.assign,Rf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zv=Object.prototype.hasOwnProperty,ct=(n,e)=>Zv.call(n,e),Ne=Array.isArray,hs=n=>Rc(n)==="[object Map]",Kg=n=>Rc(n)==="[object Set]",Ve=n=>typeof n=="function",Tt=n=>typeof n=="string",ai=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",Zg=n=>(Mt(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),Jg=Object.prototype.toString,Rc=n=>Jg.call(n),Jv=n=>Rc(n).slice(8,-1),Qg=n=>Rc(n)==="[object Object]",Pf=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,aa=Tf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pc=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Qv=/-(\w)/g,tr=Pc(n=>n.replace(Qv,(e,t)=>t?t.toUpperCase():"")),ey=/\B([A-Z])/g,Ao=Pc(n=>n.replace(ey,"-$1").toLowerCase()),kc=Pc(n=>n.charAt(0).toUpperCase()+n.slice(1)),tu=Pc(n=>n?`on${kc(n)}`:""),ki=(n,e)=>!Object.is(n,e),nu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},e0=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},ty=n=>{const e=parseFloat(n);return isNaN(e)?n:e},ny=n=>{const e=Tt(n)?Number(n):NaN;return isNaN(e)?n:e};let Wh;const Dc=()=>Wh||(Wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rl(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=Tt(r)?sy(r):rl(r);if(i)for(const o in i)e[o]=i[o]}return e}else if(Tt(n)||Mt(n))return n}const ry=/;(?![^(]*\))/g,iy=/:([^]+)/,oy=/\/\*[^]*?\*\//g;function sy(n){const e={};return n.replace(oy,"").split(ry).forEach(t=>{if(t){const r=t.split(iy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ui(n){let e="";if(Tt(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const r=Ui(n[t]);r&&(e+=r+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Oo(n){if(!n)return null;let{class:e,style:t}=n;return e&&!Tt(e)&&(n.class=Ui(e)),t&&(n.style=rl(t)),n}const ay="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ly=Tf(ay);function t0(n){return!!n||n===""}const n0=n=>!!(n&&n.__v_isRef===!0),So=n=>Tt(n)?n:n==null?"":Ne(n)||Mt(n)&&(n.toString===Jg||!Ve(n.toString))?n0(n)?So(n.value):JSON.stringify(n,r0,2):String(n),r0=(n,e)=>n0(e)?r0(n,e.value):hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i],o)=>(t[ru(r,o)+" =>"]=i,t),{})}:Kg(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ru(t))}:ai(e)?ru(e):Mt(e)&&!Ne(e)&&!Qg(e)?String(e):e,ru=(n,e="")=>{var t;return ai(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pn;class i0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pn,!e&&pn&&(this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=pn;try{return pn=this,e()}finally{pn=t}}}on(){pn=this}off(){pn=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function o0(n){return new i0(n)}function s0(){return pn}function cy(n,e=!1){pn&&pn.cleanups.push(n)}let St;const iu=new WeakSet;class a0{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pn&&pn.active&&pn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,iu.has(this)&&(iu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||c0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jh(this),u0(this);const e=St,t=pr;St=this,pr=!0;try{return this.fn()}finally{d0(this),St=e,pr=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lf(e);this.deps=this.depsTail=void 0,jh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?iu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){id(this)&&this.run()}get dirty(){return id(this)}}let l0=0,la,ca;function c0(n,e=!1){if(n.flags|=8,e){n.next=ca,ca=n;return}n.next=la,la=n}function kf(){l0++}function Df(){if(--l0>0)return;if(ca){let e=ca;for(ca=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;la;){let e=la;for(la=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function u0(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function d0(n){let e,t=n.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),Lf(r),uy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}n.deps=e,n.depsTail=t}function id(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(f0(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function f0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===wa))return;n.globalVersion=wa;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!id(n)){n.flags&=-3;return}const t=St,r=pr;St=n,pr=!0;try{u0(n);const i=n.fn(n._value);(e.version===0||ki(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{St=t,pr=r,d0(n),n.flags&=-3}}function Lf(n,e=!1){const{dep:t,prevSub:r,nextSub:i}=n;if(r&&(r.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Lf(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function uy(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let pr=!0;const h0=[];function Vi(){h0.push(pr),pr=!1}function Gi(){const n=h0.pop();pr=n===void 0?!0:n}function jh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=St;St=void 0;try{e()}finally{St=t}}}let wa=0;class dy{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class If{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!St||!pr||St===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==St)t=this.activeLink=new dy(St,this),St.deps?(t.prevDep=St.depsTail,St.depsTail.nextDep=t,St.depsTail=t):St.deps=St.depsTail=t,p0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=St.depsTail,t.nextDep=void 0,St.depsTail.nextDep=t,St.depsTail=t,St.deps===t&&(St.deps=r)}return t}trigger(e){this.version++,wa++,this.notify(e)}notify(e){kf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Df()}}}function p0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)p0(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ac=new WeakMap,go=Symbol(""),od=Symbol(""),Ca=Symbol("");function rn(n,e,t){if(pr&&St){let r=ac.get(n);r||ac.set(n,r=new Map);let i=r.get(t);i||(r.set(t,i=new If),i.map=r,i.key=t),i.track()}}function Kr(n,e,t,r,i,o){const s=ac.get(n);if(!s){wa++;return}const a=l=>{l&&l.trigger()};if(kf(),e==="clear")s.forEach(a);else{const l=Ne(n),c=l&&Pf(t);if(l&&t==="length"){const u=Number(r);s.forEach((d,f)=>{(f==="length"||f===Ca||!ai(f)&&f>=u)&&a(d)})}else switch((t!==void 0||s.has(void 0))&&a(s.get(t)),c&&a(s.get(Ca)),e){case"add":l?c&&a(s.get("length")):(a(s.get(go)),hs(n)&&a(s.get(od)));break;case"delete":l||(a(s.get(go)),hs(n)&&a(s.get(od)));break;case"set":hs(n)&&a(s.get(go));break}}Df()}function fy(n,e){const t=ac.get(n);return t&&t.get(e)}function Uo(n){const e=et(n);return e===n?e:(rn(e,"iterate",Ca),er(n)?e:e.map(on))}function Lc(n){return rn(n=et(n),"iterate",Ca),n}const hy={__proto__:null,[Symbol.iterator](){return ou(this,Symbol.iterator,on)},concat(...n){return Uo(this).concat(...n.map(e=>Ne(e)?Uo(e):e))},entries(){return ou(this,"entries",n=>(n[1]=on(n[1]),n))},every(n,e){return Br(this,"every",n,e,void 0,arguments)},filter(n,e){return Br(this,"filter",n,e,t=>t.map(on),arguments)},find(n,e){return Br(this,"find",n,e,on,arguments)},findIndex(n,e){return Br(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Br(this,"findLast",n,e,on,arguments)},findLastIndex(n,e){return Br(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Br(this,"forEach",n,e,void 0,arguments)},includes(...n){return su(this,"includes",n)},indexOf(...n){return su(this,"indexOf",n)},join(n){return Uo(this).join(n)},lastIndexOf(...n){return su(this,"lastIndexOf",n)},map(n,e){return Br(this,"map",n,e,void 0,arguments)},pop(){return Ws(this,"pop")},push(...n){return Ws(this,"push",n)},reduce(n,...e){return Xh(this,"reduce",n,e)},reduceRight(n,...e){return Xh(this,"reduceRight",n,e)},shift(){return Ws(this,"shift")},some(n,e){return Br(this,"some",n,e,void 0,arguments)},splice(...n){return Ws(this,"splice",n)},toReversed(){return Uo(this).toReversed()},toSorted(n){return Uo(this).toSorted(n)},toSpliced(...n){return Uo(this).toSpliced(...n)},unshift(...n){return Ws(this,"unshift",n)},values(){return ou(this,"values",on)}};function ou(n,e,t){const r=Lc(n),i=r[e]();return r!==n&&!er(n)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=t(o.value)),o}),i}const py=Array.prototype;function Br(n,e,t,r,i,o){const s=Lc(n),a=s!==n&&!er(n),l=s[e];if(l!==py[e]){const d=l.apply(n,o);return a?on(d):d}let c=t;s!==n&&(a?c=function(d,f){return t.call(this,on(d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(s,c,r);return a&&i?i(u):u}function Xh(n,e,t,r){const i=Lc(n);let o=t;return i!==n&&(er(n)?t.length>3&&(o=function(s,a,l){return t.call(this,s,a,l,n)}):o=function(s,a,l){return t.call(this,s,on(a),l,n)}),i[e](o,...r)}function su(n,e,t){const r=et(n);rn(r,"iterate",Ca);const i=r[e](...t);return(i===-1||i===!1)&&Nf(t[0])?(t[0]=et(t[0]),r[e](...t)):i}function Ws(n,e,t=[]){Vi(),kf();const r=et(n)[e].apply(n,t);return Df(),Gi(),r}const my=Tf("__proto__,__v_isRef,__isVue"),m0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ai));function gy(n){ai(n)||(n=String(n));const e=et(this);return rn(e,"has",n),e.hasOwnProperty(n)}class g0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(i?o?Ey:y0:o?v0:b0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=Ne(e);if(!i){let l;if(s&&(l=hy[t]))return l;if(t==="hasOwnProperty")return gy}const a=Reflect.get(e,t,kt(e)?e:r);return(ai(t)?m0.has(t):my(t))||(i||rn(e,"get",t),o)?a:kt(a)?s&&Pf(t)?a:a.value:Mt(a)?i?Uf(a):Ro(a):a}}class _0 extends g0{constructor(e=!1){super(!1,e)}set(e,t,r,i){let o=e[t];if(!this._isShallow){const l=Mo(o);if(!er(r)&&!Mo(r)&&(o=et(o),r=et(r)),!Ne(e)&&kt(o)&&!kt(r))return l?!1:(o.value=r,!0)}const s=Ne(e)&&Pf(t)?Number(t)<e.length:ct(e,t),a=Reflect.set(e,t,r,kt(e)?e:i);return e===et(i)&&(s?ki(r,o)&&Kr(e,"set",t,r):Kr(e,"add",t,r)),a}deleteProperty(e,t){const r=ct(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&r&&Kr(e,"delete",t,void 0),i}has(e,t){const r=Reflect.has(e,t);return(!ai(t)||!m0.has(t))&&rn(e,"has",t),r}ownKeys(e){return rn(e,"iterate",Ne(e)?"length":go),Reflect.ownKeys(e)}}class _y extends g0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const by=new _0,vy=new _y,yy=new _0(!0);const sd=n=>n,pl=n=>Reflect.getPrototypeOf(n);function xy(n,e,t){return function(...r){const i=this.__v_raw,o=et(i),s=hs(o),a=n==="entries"||n===Symbol.iterator&&s,l=n==="keys"&&s,c=i[n](...r),u=t?sd:e?ad:on;return!e&&rn(o,"iterate",l?od:go),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function ml(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Sy(n,e){const t={get(i){const o=this.__v_raw,s=et(o),a=et(i);n||(ki(i,a)&&rn(s,"get",i),rn(s,"get",a));const{has:l}=pl(s),c=e?sd:n?ad:on;if(l.call(s,i))return c(o.get(i));if(l.call(s,a))return c(o.get(a));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!n&&rn(et(i),"iterate",go),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,s=et(o),a=et(i);return n||(ki(i,a)&&rn(s,"has",i),rn(s,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const s=this,a=s.__v_raw,l=et(a),c=e?sd:n?ad:on;return!n&&rn(l,"iterate",go),a.forEach((u,d)=>i.call(o,c(u),c(d),s))}};return qt(t,n?{add:ml("add"),set:ml("set"),delete:ml("delete"),clear:ml("clear")}:{add(i){!e&&!er(i)&&!Mo(i)&&(i=et(i));const o=et(this);return pl(o).has.call(o,i)||(o.add(i),Kr(o,"add",i,i)),this},set(i,o){!e&&!er(o)&&!Mo(o)&&(o=et(o));const s=et(this),{has:a,get:l}=pl(s);let c=a.call(s,i);c||(i=et(i),c=a.call(s,i));const u=l.call(s,i);return s.set(i,o),c?ki(o,u)&&Kr(s,"set",i,o):Kr(s,"add",i,o),this},delete(i){const o=et(this),{has:s,get:a}=pl(o);let l=s.call(o,i);l||(i=et(i),l=s.call(o,i)),a&&a.call(o,i);const c=o.delete(i);return l&&Kr(o,"delete",i,void 0),c},clear(){const i=et(this),o=i.size!==0,s=i.clear();return o&&Kr(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xy(i,n,e)}),t}function Of(n,e){const t=Sy(n,e);return(r,i,o)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(ct(t,i)&&i in r?t:r,i,o)}const My={get:Of(!1,!1)},wy={get:Of(!1,!0)},Cy={get:Of(!0,!1)};const b0=new WeakMap,v0=new WeakMap,y0=new WeakMap,Ey=new WeakMap;function Ty(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ay(n){return n.__v_skip||!Object.isExtensible(n)?0:Ty(Jv(n))}function Ro(n){return Mo(n)?n:Bf(n,!1,by,My,b0)}function x0(n){return Bf(n,!1,yy,wy,v0)}function Uf(n){return Bf(n,!0,vy,Cy,y0)}function Bf(n,e,t,r,i){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=i.get(n);if(o)return o;const s=Ay(n);if(s===0)return n;const a=new Proxy(n,s===2?r:t);return i.set(n,a),a}function ni(n){return Mo(n)?ni(n.__v_raw):!!(n&&n.__v_isReactive)}function Mo(n){return!!(n&&n.__v_isReadonly)}function er(n){return!!(n&&n.__v_isShallow)}function Nf(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function Ff(n){return!ct(n,"__v_skip")&&Object.isExtensible(n)&&e0(n,"__v_skip",!0),n}const on=n=>Mt(n)?Ro(n):n,ad=n=>Mt(n)?Uf(n):n;function kt(n){return n?n.__v_isRef===!0:!1}function vn(n){return S0(n,!1)}function Wl(n){return S0(n,!0)}function S0(n,e){return kt(n)?n:new Ry(n,e)}class Ry{constructor(e,t){this.dep=new If,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:on(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||er(e)||Mo(e);e=r?e:et(e),ki(e,t)&&(this._rawValue=e,this._value=r?e:on(e),this.dep.trigger())}}function At(n){return kt(n)?n.value:n}const Py={get:(n,e,t)=>e==="__v_raw"?n:At(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return kt(i)&&!kt(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function M0(n){return ni(n)?n:new Proxy(n,Py)}function ky(n){const e=Ne(n)?new Array(n.length):{};for(const t in n)e[t]=w0(n,t);return e}class Dy{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fy(et(this._object),this._key)}}class Ly{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Iy(n,e,t){return kt(n)?n:Ve(n)?new Ly(n):Mt(n)&&arguments.length>1?w0(n,e,t):vn(n)}function w0(n,e,t){const r=n[e];return kt(r)?r:new Dy(n,e,t)}class Oy{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new If(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&St!==this)return c0(this,!0),!0}get value(){const e=this.dep.track();return f0(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uy(n,e,t=!1){let r,i;return Ve(n)?r=n:(r=n.get,i=n.set),new Oy(r,i,t)}const gl={},lc=new WeakMap;let oo;function By(n,e=!1,t=oo){if(t){let r=lc.get(t);r||lc.set(t,r=[]),r.push(n)}}function Ny(n,e,t=vt){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:a,call:l}=t,c=b=>i?b:er(b)||i===!1||i===0?Zr(b,1):Zr(b);let u,d,f,h,_=!1,m=!1;if(kt(n)?(d=()=>n.value,_=er(n)):ni(n)?(d=()=>c(n),_=!0):Ne(n)?(m=!0,_=n.some(b=>ni(b)||er(b)),d=()=>n.map(b=>{if(kt(b))return b.value;if(ni(b))return c(b);if(Ve(b))return l?l(b,2):b()})):Ve(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){Vi();try{f()}finally{Gi()}}const b=oo;oo=u;try{return l?l(n,3,[h]):n(h)}finally{oo=b}}:d=Ar,e&&i){const b=d,E=i===!0?1/0:i;d=()=>Zr(b(),E)}const g=s0(),p=()=>{u.stop(),g&&g.active&&Rf(g.effects,u)};if(o&&e){const b=e;e=(...E)=>{b(...E),p()}}let x=m?new Array(n.length).fill(gl):gl;const v=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const E=u.run();if(i||_||(m?E.some((R,A)=>ki(R,x[A])):ki(E,x))){f&&f();const R=oo;oo=u;try{const A=[E,x===gl?void 0:m&&x[0]===gl?[]:x,h];l?l(e,3,A):e(...A),x=E}finally{oo=R}}}else u.run()};return a&&a(v),u=new a0(d),u.scheduler=s?()=>s(v,!1):v,h=b=>By(b,!1,u),f=u.onStop=()=>{const b=lc.get(u);if(b){if(l)l(b,4);else for(const E of b)E();lc.delete(u)}},e?r?v(!0):x=u.run():s?s(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Zr(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,kt(n))Zr(n.value,e,t);else if(Ne(n))for(let r=0;r<n.length;r++)Zr(n[r],e,t);else if(Kg(n)||hs(n))n.forEach(r=>{Zr(r,e,t)});else if(Qg(n)){for(const r in n)Zr(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Zr(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function il(n,e,t,r){try{return r?n(...r):n()}catch(i){Ic(i,e,t)}}function gr(n,e,t,r){if(Ve(n)){const i=il(n,e,t,r);return i&&Zg(i)&&i.catch(o=>{Ic(o,e,t)}),i}if(Ne(n)){const i=[];for(let o=0;o<n.length;o++)i.push(gr(n[o],e,t,r));return i}}function Ic(n,e,t,r=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(o){Vi(),il(o,null,10,[n,l,c]),Gi();return}}Fy(n,t,i,r,s)}function Fy(n,e,t,r=!0,i=!1){if(i)throw n;console.error(n)}const gn=[];let yr=-1;const ps=[];let xi=null,Qo=0;const C0=Promise.resolve();let cc=null;function Oc(n){const e=cc||C0;return n?e.then(this?n.bind(this):n):e}function zy(n){let e=yr+1,t=gn.length;for(;e<t;){const r=e+t>>>1,i=gn[r],o=Ea(i);o<n||o===n&&i.flags&2?e=r+1:t=r}return e}function zf(n){if(!(n.flags&1)){const e=Ea(n),t=gn[gn.length-1];!t||!(n.flags&2)&&e>=Ea(t)?gn.push(n):gn.splice(zy(e),0,n),n.flags|=1,E0()}}function E0(){cc||(cc=C0.then(A0))}function Hy(n){Ne(n)?ps.push(...n):xi&&n.id===-1?xi.splice(Qo+1,0,n):n.flags&1||(ps.push(n),n.flags|=1),E0()}function Yh(n,e,t=yr+1){for(;t<gn.length;t++){const r=gn[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;gn.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function T0(n){if(ps.length){const e=[...new Set(ps)].sort((t,r)=>Ea(t)-Ea(r));if(ps.length=0,xi){xi.push(...e);return}for(xi=e,Qo=0;Qo<xi.length;Qo++){const t=xi[Qo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}xi=null,Qo=0}}const Ea=n=>n.id==null?n.flags&2?-1:1/0:n.id;function A0(n){try{for(yr=0;yr<gn.length;yr++){const e=gn[yr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),il(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yr<gn.length;yr++){const e=gn[yr];e&&(e.flags&=-2)}yr=-1,gn.length=0,T0(),cc=null,(gn.length||ps.length)&&A0()}}let $t=null,R0=null;function uc(n){const e=$t;return $t=n,R0=n&&n.type.__scopeId||null,e}function Jr(n,e=$t,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&lp(-1);const o=uc(e);let s;try{s=n(...i)}finally{uc(o),r._d&&lp(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Hf(n,e){if($t===null)return n;const t=Hc($t),r=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[o,s,a,l=vt]=e[i];o&&(Ve(o)&&(o={mounted:o,updated:o}),o.deep&&Zr(s),r.push({dir:o,instance:t,value:s,oldValue:void 0,arg:a,modifiers:l}))}return n}function Xi(n,e,t,r){const i=n.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(Vi(),gr(l,t,8,[n.el,a,n,e]),Gi())}}const P0=Symbol("_vte"),k0=n=>n.__isTeleport,ua=n=>n&&(n.disabled||n.disabled===""),qh=n=>n&&(n.defer||n.defer===""),Kh=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Zh=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,ld=(n,e)=>{const t=n&&n.to;return Tt(t)?e?e(t):null:t},D0={name:"Teleport",__isTeleport:!0,process(n,e,t,r,i,o,s,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:_,createText:m,createComment:g}}=c,p=ua(e.props);let{shapeFlag:x,children:v,dynamicChildren:b}=e;if(n==null){const E=e.el=m(""),R=e.anchor=m("");h(E,t,r),h(R,t,r);const A=(y,M)=>{x&16&&(i&&i.isCE&&(i.ce._teleportTarget=y),u(v,y,M,i,o,s,a,l))},P=()=>{const y=e.target=ld(e.props,_),M=L0(y,e,m,h);y&&(s!=="svg"&&Kh(y)?s="svg":s!=="mathml"&&Zh(y)&&(s="mathml"),p||(A(y,M),jl(e,!1)))};p&&(A(t,R),jl(e,!0)),qh(e.props)?hn(()=>{P(),e.el.__isMounted=!0},o):P()}else{if(qh(e.props)&&!n.el.__isMounted){hn(()=>{D0.process(n,e,t,r,i,o,s,a,l,c),delete n.el.__isMounted},o);return}e.el=n.el,e.targetStart=n.targetStart;const E=e.anchor=n.anchor,R=e.target=n.target,A=e.targetAnchor=n.targetAnchor,P=ua(n.props),y=P?t:R,M=P?E:A;if(s==="svg"||Kh(R)?s="svg":(s==="mathml"||Zh(R))&&(s="mathml"),b?(f(n.dynamicChildren,b,y,i,o,s,a),Xf(n,e,!0)):l||d(n,e,y,M,i,o,s,a,!1),p)P?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):_l(e,t,E,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const D=e.target=ld(e.props,_);D&&_l(e,D,null,c,0)}else P&&_l(e,R,A,c,1);jl(e,p)}},remove(n,e,t,{um:r,o:{remove:i}},o){const{shapeFlag:s,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=n;if(d&&(i(c),i(u)),o&&i(l),s&16){const h=o||!ua(f);for(let _=0;_<a.length;_++){const m=a[_];r(m,e,t,h,!!m.dynamicChildren)}}},move:_l,hydrate:Vy};function _l(n,e,t,{o:{insert:r},m:i},o=2){o===0&&r(n.targetAnchor,e,t);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=n,d=o===2;if(d&&r(s,e,t),(!d||ua(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,t,2);d&&r(a,e,t)}function Vy(n,e,t,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:c,createText:u}},d){const f=e.target=ld(e.props,l);if(f){const h=ua(e.props),_=f._lpa||f.firstChild;if(e.shapeFlag&16)if(h)e.anchor=d(s(n),e,a(n),t,r,i,o),e.targetStart=_,e.targetAnchor=_&&s(_);else{e.anchor=s(n);let m=_;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,f._lpa=e.targetAnchor&&s(e.targetAnchor);break}}m=s(m)}e.targetAnchor||L0(f,e,u,c),d(_&&s(_),e,f,t,r,i,o)}jl(e,h)}return e.anchor&&s(e.anchor)}const Gy=D0;function jl(n,e){const t=n.ctx;if(t&&t.ut){let r,i;for(e?(r=n.el,i=n.anchor):(r=n.targetStart,i=n.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function L0(n,e,t,r){const i=e.targetStart=t(""),o=e.targetAnchor=t("");return i[P0]=o,n&&(r(i,n),r(o,n)),o}const Si=Symbol("_leaveCb"),bl=Symbol("_enterCb");function $y(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nc(()=>{n.isMounted=!0}),V0(()=>{n.isUnmounting=!0}),n}const Yn=[Function,Array],I0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yn,onEnter:Yn,onAfterEnter:Yn,onEnterCancelled:Yn,onBeforeLeave:Yn,onLeave:Yn,onAfterLeave:Yn,onLeaveCancelled:Yn,onBeforeAppear:Yn,onAppear:Yn,onAfterAppear:Yn,onAppearCancelled:Yn},O0=n=>{const e=n.subTree;return e.component?O0(e.component):e},Wy={name:"BaseTransition",props:I0,setup(n,{slots:e}){const t=u_(),r=$y();return()=>{const i=e.default&&N0(e.default(),!0);if(!i||!i.length)return;const o=U0(i),s=et(n),{mode:a}=s;if(r.isLeaving)return au(o);const l=Jh(o);if(!l)return au(o);let c=cd(l,s,r,t,d=>c=d);l.type!==_n&&Ta(l,c);let u=t.subTree&&Jh(t.subTree);if(u&&u.type!==_n&&!lo(l,u)&&O0(t).type!==_n){let d=cd(u,s,r,t);if(Ta(u,d),a==="out-in"&&l.type!==_n)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},au(o);a==="in-out"&&l.type!==_n?d.delayLeave=(f,h,_)=>{const m=B0(r,u);m[String(u.key)]=u,f[Si]=()=>{h(),f[Si]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function U0(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==_n){e=t;break}}return e}const jy=Wy;function B0(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function cd(n,e,t,r,i){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:g,onAppear:p,onAfterAppear:x,onAppearCancelled:v}=e,b=String(n.key),E=B0(t,n),R=(y,M)=>{y&&gr(y,r,9,M)},A=(y,M)=>{const D=M[1];R(y,M),Ne(y)?y.every(O=>O.length<=1)&&D():y.length<=1&&D()},P={mode:s,persisted:a,beforeEnter(y){let M=l;if(!t.isMounted)if(o)M=g||l;else return;y[Si]&&y[Si](!0);const D=E[b];D&&lo(n,D)&&D.el[Si]&&D.el[Si](),R(M,[y])},enter(y){let M=c,D=u,O=d;if(!t.isMounted)if(o)M=p||c,D=x||u,O=v||d;else return;let U=!1;const Y=y[bl]=J=>{U||(U=!0,J?R(O,[y]):R(D,[y]),P.delayedLeave&&P.delayedLeave(),y[bl]=void 0)};M?A(M,[y,Y]):Y()},leave(y,M){const D=String(n.key);if(y[bl]&&y[bl](!0),t.isUnmounting)return M();R(f,[y]);let O=!1;const U=y[Si]=Y=>{O||(O=!0,M(),Y?R(m,[y]):R(_,[y]),y[Si]=void 0,E[D]===n&&delete E[D])};E[D]=n,h?A(h,[y,U]):U()},clone(y){const M=cd(y,e,t,r,i);return i&&i(M),M}};return P}function au(n){if(Uc(n))return n=Bi(n),n.children=null,n}function Jh(n){if(!Uc(n))return k0(n.type)&&n.children?U0(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ve(t.default))return t.default()}}function Ta(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ta(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function N0(n,e=!1,t){let r=[],i=0;for(let o=0;o<n.length;o++){let s=n[o];const a=t==null?s.key:String(t)+String(s.key!=null?s.key:o);s.type===Bt?(s.patchFlag&128&&i++,r=r.concat(N0(s.children,e,a))):(e||s.type!==_n)&&r.push(a!=null?Bi(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function F0(n,e){return Ve(n)?qt({name:n.name},e,{setup:n}):n}function z0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function dc(n,e,t,r,i=!1){if(Ne(n)){n.forEach((_,m)=>dc(_,e&&(Ne(e)?e[m]:e),t,r,i));return}if(ms(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&dc(n,e,t,r.component.subTree);return}const o=r.shapeFlag&4?Hc(r.component):r.el,s=i?null:o,{i:a,r:l}=n,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,d=a.setupState,f=et(d),h=d===vt?()=>!1:_=>ct(f,_);if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,h(c)&&(d[c]=null)):kt(c)&&(c.value=null)),Ve(l))il(l,a,12,[s,u]);else{const _=Tt(l),m=kt(l);if(_||m){const g=()=>{if(n.f){const p=_?h(l)?d[l]:u[l]:l.value;i?Ne(p)&&Rf(p,o):Ne(p)?p.includes(o)||p.push(o):_?(u[l]=[o],h(l)&&(d[l]=u[l])):(l.value=[o],n.k&&(u[n.k]=l.value))}else _?(u[l]=s,h(l)&&(d[l]=s)):m&&(l.value=s,n.k&&(u[n.k]=s))};s?(g.id=-1,hn(g,t)):g()}}}Dc().requestIdleCallback;Dc().cancelIdleCallback;const ms=n=>!!n.type.__asyncLoader,Uc=n=>n.type.__isKeepAlive;function Xy(n,e){H0(n,"a",e)}function Yy(n,e){H0(n,"da",e)}function H0(n,e,t=Yt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Bc(e,r,t),t){let i=t.parent;for(;i&&i.parent;)Uc(i.parent.vnode)&&qy(r,e,t,i),i=i.parent}}function qy(n,e,t,r){const i=Bc(e,n,r,!0);Vf(()=>{Rf(r[e],i)},t)}function Bc(n,e,t=Yt,r=!1){if(t){const i=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...s)=>{Vi();const a=ol(t),l=gr(e,t,n,s);return a(),Gi(),l});return r?i.unshift(o):i.push(o),o}}const li=n=>(e,t=Yt)=>{(!Pa||n==="sp")&&Bc(n,(...r)=>e(...r),t)},Ky=li("bm"),Nc=li("m"),Zy=li("bu"),Jy=li("u"),V0=li("bum"),Vf=li("um"),Qy=li("sp"),e1=li("rtg"),t1=li("rtc");function n1(n,e=Yt){Bc("ec",n,e)}const Gf="components",r1="directives";function cr(n,e){return Wf(Gf,n,!0,e)||n}const G0=Symbol.for("v-ndc");function Cs(n){return Tt(n)?Wf(Gf,n,!1)||n:n||G0}function $f(n){return Wf(r1,n)}function Wf(n,e,t=!0,r=!1){const i=$t||Yt;if(i){const o=i.type;if(n===Gf){const a=G1(o,!1);if(a&&(a===e||a===tr(e)||a===kc(tr(e))))return o}const s=Qh(i[n]||o[n],e)||Qh(i.appContext[n],e);return!s&&r?o:s}}function Qh(n,e){return n&&(n[e]||n[tr(e)]||n[kc(tr(e))])}function da(n,e,t,r){let i;const o=t,s=Ne(n);if(s||Tt(n)){const a=s&&ni(n);let l=!1;a&&(l=!er(n),n=Lc(n)),i=new Array(n.length);for(let c=0,u=n.length;c<u;c++)i[c]=e(l?on(n[c]):n[c],c,void 0,o)}else if(typeof n=="number"){i=new Array(n);for(let a=0;a<n;a++)i[a]=e(a+1,a,void 0,o)}else if(Mt(n))if(n[Symbol.iterator])i=Array.from(n,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(n);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(n[u],u,l,o)}}else i=[];return i}function It(n,e,t={},r,i){if($t.ce||$t.parent&&ms($t.parent)&&$t.parent.ce)return e!=="default"&&(t.name=e),Pe(),Vt(Bt,null,[dt("slot",t,r&&r())],64);let o=n[e];o&&o._c&&(o._d=!1),Pe();const s=o&&$0(o(t)),a=t.key||s&&s.key,l=Vt(Bt,{key:(a&&!ai(a)?a:`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function $0(n){return n.some(e=>Ra(e)?!(e.type===_n||e.type===Bt&&!$0(e.children)):!0)?n:null}const ud=n=>n?d_(n)?Hc(n):ud(n.parent):null,fa=qt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ud(n.parent),$root:n=>ud(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>j0(n),$forceUpdate:n=>n.f||(n.f=()=>{zf(n.update)}),$nextTick:n=>n.n||(n.n=Oc.bind(n.proxy)),$watch:n=>C1.bind(n)}),lu=(n,e)=>n!==vt&&!n.__isScriptSetup&&ct(n,e),i1={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=s[e];if(h!==void 0)switch(h){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return o[e]}else{if(lu(r,e))return s[e]=1,r[e];if(i!==vt&&ct(i,e))return s[e]=2,i[e];if((c=n.propsOptions[0])&&ct(c,e))return s[e]=3,o[e];if(t!==vt&&ct(t,e))return s[e]=4,t[e];dd&&(s[e]=0)}}const u=fa[e];let d,f;if(u)return e==="$attrs"&&rn(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==vt&&ct(t,e))return s[e]=4,t[e];if(f=l.config.globalProperties,ct(f,e))return f[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:o}=n;return lu(i,e)?(i[e]=t,!0):r!==vt&&ct(r,e)?(r[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!t[s]||n!==vt&&ct(n,s)||lu(e,s)||(a=o[0])&&ct(a,s)||ct(r,s)||ct(fa,s)||ct(i.config.globalProperties,s)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ep(n){return Ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let dd=!0;function o1(n){const e=j0(n),t=n.proxy,r=n.ctx;dd=!1,e.beforeCreate&&tp(e.beforeCreate,n,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:m,deactivated:g,beforeDestroy:p,beforeUnmount:x,destroyed:v,unmounted:b,render:E,renderTracked:R,renderTriggered:A,errorCaptured:P,serverPrefetch:y,expose:M,inheritAttrs:D,components:O,directives:U,filters:Y}=e;if(c&&s1(c,r,null),s)for(const $ in s){const z=s[$];Ve(z)&&(r[$]=z.bind(t))}if(i){const $=i.call(t,t);Mt($)&&(n.data=Ro($))}if(dd=!0,o)for(const $ in o){const z=o[$],he=Ve(z)?z.bind(t,t):Ve(z.get)?z.get.bind(t,t):Ar,pe=!Ve(z)&&Ve(z.set)?z.set.bind(t):Ar,_e=wn({get:he,set:pe});Object.defineProperty(r,$,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Me=>_e.value=Me})}if(a)for(const $ in a)W0(a[$],r,t,$);if(l){const $=Ve(l)?l.call(t):l;Reflect.ownKeys($).forEach(z=>{Xl(z,$[z])})}u&&tp(u,n,"c");function V($,z){Ne(z)?z.forEach(he=>$(he.bind(t))):z&&$(z.bind(t))}if(V(Ky,d),V(Nc,f),V(Zy,h),V(Jy,_),V(Xy,m),V(Yy,g),V(n1,P),V(t1,R),V(e1,A),V(V0,x),V(Vf,b),V(Qy,y),Ne(M))if(M.length){const $=n.exposed||(n.exposed={});M.forEach(z=>{Object.defineProperty($,z,{get:()=>t[z],set:he=>t[z]=he})})}else n.exposed||(n.exposed={});E&&n.render===Ar&&(n.render=E),D!=null&&(n.inheritAttrs=D),O&&(n.components=O),U&&(n.directives=U),y&&z0(n)}function s1(n,e,t=Ar){Ne(n)&&(n=fd(n));for(const r in n){const i=n[r];let o;Mt(i)?"default"in i?o=Rr(i.from||r,i.default,!0):o=Rr(i.from||r):o=Rr(i),kt(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[r]=o}}function tp(n,e,t){gr(Ne(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function W0(n,e,t,r){let i=r.includes(".")?o_(t,r):()=>t[r];if(Tt(n)){const o=e[n];Ve(o)&&Fn(i,o)}else if(Ve(n))Fn(i,n.bind(t));else if(Mt(n))if(Ne(n))n.forEach(o=>W0(o,e,t,r));else{const o=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(o)&&Fn(i,o,n)}}function j0(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=n.appContext,a=o.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>fc(l,c,s,!0)),fc(l,e,s)),Mt(e)&&o.set(e,l),l}function fc(n,e,t,r=!1){const{mixins:i,extends:o}=e;o&&fc(n,o,t,!0),i&&i.forEach(s=>fc(n,s,t,!0));for(const s in e)if(!(r&&s==="expose")){const a=a1[s]||t&&t[s];n[s]=a?a(n[s],e[s]):e[s]}return n}const a1={data:np,props:rp,emits:rp,methods:na,computed:na,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:na,directives:na,watch:c1,provide:np,inject:l1};function np(n,e){return e?n?function(){return qt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function l1(n,e){return na(fd(n),fd(e))}function fd(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function un(n,e){return n?[...new Set([].concat(n,e))]:e}function na(n,e){return n?qt(Object.create(null),n,e):e}function rp(n,e){return n?Ne(n)&&Ne(e)?[...new Set([...n,...e])]:qt(Object.create(null),ep(n),ep(e??{})):e}function c1(n,e){if(!n)return e;if(!e)return n;const t=qt(Object.create(null),n);for(const r in e)t[r]=un(n[r],e[r]);return t}function X0(){return{app:null,config:{isNativeTag:Kv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let u1=0;function d1(n,e){return function(r,i=null){Ve(r)||(r=qt({},r)),i!=null&&!Mt(i)&&(i=null);const o=X0(),s=new WeakSet,a=[];let l=!1;const c=o.app={_uid:u1++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:W1,get config(){return o.config},set config(u){},use(u,...d){return s.has(u)||(u&&Ve(u.install)?(s.add(u),u.install(c,...d)):Ve(u)&&(s.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||dt(r,i);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Hc(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(gr(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c},runWithContext(u){const d=_o;_o=c;try{return u()}finally{_o=d}}};return c}}let _o=null;function Xl(n,e){if(Yt){let t=Yt.provides;const r=Yt.parent&&Yt.parent.provides;r===t&&(t=Yt.provides=Object.create(r)),t[n]=e}}function Rr(n,e,t=!1){const r=Yt||$t;if(r||_o){const i=_o?_o._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&Ve(e)?e.call(r&&r.proxy):e}}function f1(){return!!(Yt||$t||_o)}const Y0={},q0=()=>Object.create(Y0),K0=n=>Object.getPrototypeOf(n)===Y0;function h1(n,e,t,r=!1){const i={},o=q0();n.propsDefaults=Object.create(null),Z0(n,e,i,o);for(const s in n.propsOptions[0])s in i||(i[s]=void 0);t?n.props=r?i:x0(i):n.type.props?n.props=i:n.props=o,n.attrs=o}function p1(n,e,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=n,a=et(i),[l]=n.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Fc(n.emitsOptions,f))continue;const h=e[f];if(l)if(ct(o,f))h!==o[f]&&(o[f]=h,c=!0);else{const _=tr(f);i[_]=hd(l,a,_,h,n,!1)}else h!==o[f]&&(o[f]=h,c=!0)}}}else{Z0(n,e,i,o)&&(c=!0);let u;for(const d in a)(!e||!ct(e,d)&&((u=Ao(d))===d||!ct(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(i[d]=hd(l,a,d,void 0,n,!0)):delete i[d]);if(o!==a)for(const d in o)(!e||!ct(e,d))&&(delete o[d],c=!0)}c&&Kr(n.attrs,"set","")}function Z0(n,e,t,r){const[i,o]=n.propsOptions;let s=!1,a;if(e)for(let l in e){if(aa(l))continue;const c=e[l];let u;i&&ct(i,u=tr(l))?!o||!o.includes(u)?t[u]=c:(a||(a={}))[u]=c:Fc(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=et(t),c=a||vt;for(let u=0;u<o.length;u++){const d=o[u];t[d]=hd(i,l,d,c[d],n,!ct(c,d))}}return s}function hd(n,e,t,r,i,o){const s=n[t];if(s!=null){const a=ct(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&Ve(l)){const{propsDefaults:c}=i;if(t in c)r=c[t];else{const u=ol(i);r=c[t]=l.call(null,e),u()}}else r=l;i.ce&&i.ce._setProp(t,r)}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===Ao(t))&&(r=!0))}return r}const m1=new WeakMap;function J0(n,e,t=!1){const r=t?m1:e.propsCache,i=r.get(n);if(i)return i;const o=n.props,s={},a=[];let l=!1;if(!Ve(n)){const u=d=>{l=!0;const[f,h]=J0(d,e,!0);qt(s,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!l)return Mt(n)&&r.set(n,fs),fs;if(Ne(o))for(let u=0;u<o.length;u++){const d=tr(o[u]);ip(d)&&(s[d]=vt)}else if(o)for(const u in o){const d=tr(u);if(ip(d)){const f=o[u],h=s[d]=Ne(f)||Ve(f)?{type:f}:qt({},f),_=h.type;let m=!1,g=!0;if(Ne(_))for(let p=0;p<_.length;++p){const x=_[p],v=Ve(x)&&x.name;if(v==="Boolean"){m=!0;break}else v==="String"&&(g=!1)}else m=Ve(_)&&_.name==="Boolean";h[0]=m,h[1]=g,(m||ct(h,"default"))&&a.push(d)}}const c=[s,a];return Mt(n)&&r.set(n,c),c}function ip(n){return n[0]!=="$"&&!aa(n)}const Q0=n=>n[0]==="_"||n==="$stable",jf=n=>Ne(n)?n.map(Sr):[Sr(n)],g1=(n,e,t)=>{if(e._n)return e;const r=Jr((...i)=>jf(e(...i)),t);return r._c=!1,r},e_=(n,e,t)=>{const r=n._ctx;for(const i in n){if(Q0(i))continue;const o=n[i];if(Ve(o))e[i]=g1(i,o,r);else if(o!=null){const s=jf(o);e[i]=()=>s}}},t_=(n,e)=>{const t=jf(e);n.slots.default=()=>t},n_=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},_1=(n,e,t)=>{const r=n.slots=q0();if(n.vnode.shapeFlag&32){const i=e._;i?(n_(r,e,t),t&&e0(r,"_",i,!0)):e_(e,r)}else e&&t_(n,e)},b1=(n,e,t)=>{const{vnode:r,slots:i}=n;let o=!0,s=vt;if(r.shapeFlag&32){const a=e._;a?t&&a===1?o=!1:n_(i,e,t):(o=!e.$stable,e_(e,i)),s=e}else e&&(t_(n,e),s={default:1});if(o)for(const a in i)!Q0(a)&&s[a]==null&&delete i[a]},hn=D1;function v1(n){return y1(n)}function y1(n,e){const t=Dc();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Ar,insertStaticContent:_}=n,m=(k,L,w,re=null,K=null,q=null,ne=void 0,ce=null,te=!!L.dynamicChildren)=>{if(k===L)return;k&&!lo(k,L)&&(re=B(k),Me(k,K,q,!0),k=null),L.patchFlag===-2&&(te=!1,L.dynamicChildren=null);const{type:C,ref:S,shapeFlag:I}=L;switch(C){case zc:g(k,L,w,re);break;case _n:p(k,L,w,re);break;case Yl:k==null&&x(L,w,re,ne);break;case Bt:O(k,L,w,re,K,q,ne,ce,te);break;default:I&1?E(k,L,w,re,K,q,ne,ce,te):I&6?U(k,L,w,re,K,q,ne,ce,te):(I&64||I&128)&&C.process(k,L,w,re,K,q,ne,ce,te,de)}S!=null&&K&&dc(S,k&&k.ref,q,L||k,!L)},g=(k,L,w,re)=>{if(k==null)r(L.el=a(L.children),w,re);else{const K=L.el=k.el;L.children!==k.children&&c(K,L.children)}},p=(k,L,w,re)=>{k==null?r(L.el=l(L.children||""),w,re):L.el=k.el},x=(k,L,w,re)=>{[k.el,k.anchor]=_(k.children,L,w,re,k.el,k.anchor)},v=({el:k,anchor:L},w,re)=>{let K;for(;k&&k!==L;)K=f(k),r(k,w,re),k=K;r(L,w,re)},b=({el:k,anchor:L})=>{let w;for(;k&&k!==L;)w=f(k),i(k),k=w;i(L)},E=(k,L,w,re,K,q,ne,ce,te)=>{L.type==="svg"?ne="svg":L.type==="math"&&(ne="mathml"),k==null?R(L,w,re,K,q,ne,ce,te):y(k,L,K,q,ne,ce,te)},R=(k,L,w,re,K,q,ne,ce)=>{let te,C;const{props:S,shapeFlag:I,transition:X,dirs:N}=k;if(te=k.el=s(k.type,q,S&&S.is,S),I&8?u(te,k.children):I&16&&P(k.children,te,null,re,K,cu(k,q),ne,ce),N&&Xi(k,null,re,"created"),A(te,k,k.scopeId,ne,re),S){for(const ae in S)ae!=="value"&&!aa(ae)&&o(te,ae,null,S[ae],q,re);"value"in S&&o(te,"value",null,S.value,q),(C=S.onVnodeBeforeMount)&&br(C,re,k)}N&&Xi(k,null,re,"beforeMount");const G=x1(K,X);G&&X.beforeEnter(te),r(te,L,w),((C=S&&S.onVnodeMounted)||G||N)&&hn(()=>{C&&br(C,re,k),G&&X.enter(te),N&&Xi(k,null,re,"mounted")},K)},A=(k,L,w,re,K)=>{if(w&&h(k,w),re)for(let q=0;q<re.length;q++)h(k,re[q]);if(K){let q=K.subTree;if(L===q||a_(q.type)&&(q.ssContent===L||q.ssFallback===L)){const ne=K.vnode;A(k,ne,ne.scopeId,ne.slotScopeIds,K.parent)}}},P=(k,L,w,re,K,q,ne,ce,te=0)=>{for(let C=te;C<k.length;C++){const S=k[C]=ce?Mi(k[C]):Sr(k[C]);m(null,S,L,w,re,K,q,ne,ce)}},y=(k,L,w,re,K,q,ne)=>{const ce=L.el=k.el;let{patchFlag:te,dynamicChildren:C,dirs:S}=L;te|=k.patchFlag&16;const I=k.props||vt,X=L.props||vt;let N;if(w&&Yi(w,!1),(N=X.onVnodeBeforeUpdate)&&br(N,w,L,k),S&&Xi(L,k,w,"beforeUpdate"),w&&Yi(w,!0),(I.innerHTML&&X.innerHTML==null||I.textContent&&X.textContent==null)&&u(ce,""),C?M(k.dynamicChildren,C,ce,w,re,cu(L,K),q):ne||z(k,L,ce,null,w,re,cu(L,K),q,!1),te>0){if(te&16)D(ce,I,X,w,K);else if(te&2&&I.class!==X.class&&o(ce,"class",null,X.class,K),te&4&&o(ce,"style",I.style,X.style,K),te&8){const G=L.dynamicProps;for(let ae=0;ae<G.length;ae++){const le=G[ae],be=I[le],Oe=X[le];(Oe!==be||le==="value")&&o(ce,le,be,Oe,K,w)}}te&1&&k.children!==L.children&&u(ce,L.children)}else!ne&&C==null&&D(ce,I,X,w,K);((N=X.onVnodeUpdated)||S)&&hn(()=>{N&&br(N,w,L,k),S&&Xi(L,k,w,"updated")},re)},M=(k,L,w,re,K,q,ne)=>{for(let ce=0;ce<L.length;ce++){const te=k[ce],C=L[ce],S=te.el&&(te.type===Bt||!lo(te,C)||te.shapeFlag&70)?d(te.el):w;m(te,C,S,null,re,K,q,ne,!0)}},D=(k,L,w,re,K)=>{if(L!==w){if(L!==vt)for(const q in L)!aa(q)&&!(q in w)&&o(k,q,L[q],null,K,re);for(const q in w){if(aa(q))continue;const ne=w[q],ce=L[q];ne!==ce&&q!=="value"&&o(k,q,ce,ne,K,re)}"value"in w&&o(k,"value",L.value,w.value,K)}},O=(k,L,w,re,K,q,ne,ce,te)=>{const C=L.el=k?k.el:a(""),S=L.anchor=k?k.anchor:a("");let{patchFlag:I,dynamicChildren:X,slotScopeIds:N}=L;N&&(ce=ce?ce.concat(N):N),k==null?(r(C,w,re),r(S,w,re),P(L.children||[],w,S,K,q,ne,ce,te)):I>0&&I&64&&X&&k.dynamicChildren?(M(k.dynamicChildren,X,w,K,q,ne,ce),(L.key!=null||K&&L===K.subTree)&&Xf(k,L,!0)):z(k,L,w,S,K,q,ne,ce,te)},U=(k,L,w,re,K,q,ne,ce,te)=>{L.slotScopeIds=ce,k==null?L.shapeFlag&512?K.ctx.activate(L,w,re,ne,te):Y(L,w,re,K,q,ne,te):J(k,L,te)},Y=(k,L,w,re,K,q,ne)=>{const ce=k.component=N1(k,re,K);if(Uc(k)&&(ce.ctx.renderer=de),F1(ce,!1,ne),ce.asyncDep){if(K&&K.registerDep(ce,V,ne),!k.el){const te=ce.subTree=dt(_n);p(null,te,L,w)}}else V(ce,k,L,w,K,q,ne)},J=(k,L,w)=>{const re=L.component=k.component;if(P1(k,L,w))if(re.asyncDep&&!re.asyncResolved){$(re,L,w);return}else re.next=L,re.update();else L.el=k.el,re.vnode=L},V=(k,L,w,re,K,q,ne)=>{const ce=()=>{if(k.isMounted){let{next:I,bu:X,u:N,parent:G,vnode:ae}=k;{const Se=r_(k);if(Se){I&&(I.el=ae.el,$(k,I,ne)),Se.asyncDep.then(()=>{k.isUnmounted||ce()});return}}let le=I,be;Yi(k,!1),I?(I.el=ae.el,$(k,I,ne)):I=ae,X&&nu(X),(be=I.props&&I.props.onVnodeBeforeUpdate)&&br(be,G,I,ae),Yi(k,!0);const Oe=sp(k),me=k.subTree;k.subTree=Oe,m(me,Oe,d(me.el),B(me),k,K,q),I.el=Oe.el,le===null&&k1(k,Oe.el),N&&hn(N,K),(be=I.props&&I.props.onVnodeUpdated)&&hn(()=>br(be,G,I,ae),K)}else{let I;const{el:X,props:N}=L,{bm:G,m:ae,parent:le,root:be,type:Oe}=k,me=ms(L);Yi(k,!1),G&&nu(G),!me&&(I=N&&N.onVnodeBeforeMount)&&br(I,le,L),Yi(k,!0);{be.ce&&be.ce._injectChildStyle(Oe);const Se=k.subTree=sp(k);m(null,Se,w,re,k,K,q),L.el=Se.el}if(ae&&hn(ae,K),!me&&(I=N&&N.onVnodeMounted)){const Se=L;hn(()=>br(I,le,Se),K)}(L.shapeFlag&256||le&&ms(le.vnode)&&le.vnode.shapeFlag&256)&&k.a&&hn(k.a,K),k.isMounted=!0,L=w=re=null}};k.scope.on();const te=k.effect=new a0(ce);k.scope.off();const C=k.update=te.run.bind(te),S=k.job=te.runIfDirty.bind(te);S.i=k,S.id=k.uid,te.scheduler=()=>zf(S),Yi(k,!0),C()},$=(k,L,w)=>{L.component=k;const re=k.vnode.props;k.vnode=L,k.next=null,p1(k,L.props,re,w),b1(k,L.children,w),Vi(),Yh(k),Gi()},z=(k,L,w,re,K,q,ne,ce,te=!1)=>{const C=k&&k.children,S=k?k.shapeFlag:0,I=L.children,{patchFlag:X,shapeFlag:N}=L;if(X>0){if(X&128){pe(C,I,w,re,K,q,ne,ce,te);return}else if(X&256){he(C,I,w,re,K,q,ne,ce,te);return}}N&8?(S&16&&ve(C,K,q),I!==C&&u(w,I)):S&16?N&16?pe(C,I,w,re,K,q,ne,ce,te):ve(C,K,q,!0):(S&8&&u(w,""),N&16&&P(I,w,re,K,q,ne,ce,te))},he=(k,L,w,re,K,q,ne,ce,te)=>{k=k||fs,L=L||fs;const C=k.length,S=L.length,I=Math.min(C,S);let X;for(X=0;X<I;X++){const N=L[X]=te?Mi(L[X]):Sr(L[X]);m(k[X],N,w,null,K,q,ne,ce,te)}C>S?ve(k,K,q,!0,!1,I):P(L,w,re,K,q,ne,ce,te,I)},pe=(k,L,w,re,K,q,ne,ce,te)=>{let C=0;const S=L.length;let I=k.length-1,X=S-1;for(;C<=I&&C<=X;){const N=k[C],G=L[C]=te?Mi(L[C]):Sr(L[C]);if(lo(N,G))m(N,G,w,null,K,q,ne,ce,te);else break;C++}for(;C<=I&&C<=X;){const N=k[I],G=L[X]=te?Mi(L[X]):Sr(L[X]);if(lo(N,G))m(N,G,w,null,K,q,ne,ce,te);else break;I--,X--}if(C>I){if(C<=X){const N=X+1,G=N<S?L[N].el:re;for(;C<=X;)m(null,L[C]=te?Mi(L[C]):Sr(L[C]),w,G,K,q,ne,ce,te),C++}}else if(C>X)for(;C<=I;)Me(k[C],K,q,!0),C++;else{const N=C,G=C,ae=new Map;for(C=G;C<=X;C++){const ye=L[C]=te?Mi(L[C]):Sr(L[C]);ye.key!=null&&ae.set(ye.key,C)}let le,be=0;const Oe=X-G+1;let me=!1,Se=0;const De=new Array(Oe);for(C=0;C<Oe;C++)De[C]=0;for(C=N;C<=I;C++){const ye=k[C];if(be>=Oe){Me(ye,K,q,!0);continue}let ze;if(ye.key!=null)ze=ae.get(ye.key);else for(le=G;le<=X;le++)if(De[le-G]===0&&lo(ye,L[le])){ze=le;break}ze===void 0?Me(ye,K,q,!0):(De[ze-G]=C+1,ze>=Se?Se=ze:me=!0,m(ye,L[ze],w,null,K,q,ne,ce,te),be++)}const Be=me?S1(De):fs;for(le=Be.length-1,C=Oe-1;C>=0;C--){const ye=G+C,ze=L[ye],We=ye+1<S?L[ye+1].el:re;De[C]===0?m(null,ze,w,We,K,q,ne,ce,te):me&&(le<0||C!==Be[le]?_e(ze,w,We,2):le--)}}},_e=(k,L,w,re,K=null)=>{const{el:q,type:ne,transition:ce,children:te,shapeFlag:C}=k;if(C&6){_e(k.component.subTree,L,w,re);return}if(C&128){k.suspense.move(L,w,re);return}if(C&64){ne.move(k,L,w,de);return}if(ne===Bt){r(q,L,w);for(let I=0;I<te.length;I++)_e(te[I],L,w,re);r(k.anchor,L,w);return}if(ne===Yl){v(k,L,w);return}if(re!==2&&C&1&&ce)if(re===0)ce.beforeEnter(q),r(q,L,w),hn(()=>ce.enter(q),K);else{const{leave:I,delayLeave:X,afterLeave:N}=ce,G=()=>r(q,L,w),ae=()=>{I(q,()=>{G(),N&&N()})};X?X(q,G,ae):ae()}else r(q,L,w)},Me=(k,L,w,re=!1,K=!1)=>{const{type:q,props:ne,ref:ce,children:te,dynamicChildren:C,shapeFlag:S,patchFlag:I,dirs:X,cacheIndex:N}=k;if(I===-2&&(K=!1),ce!=null&&dc(ce,null,w,k,!0),N!=null&&(L.renderCache[N]=void 0),S&256){L.ctx.deactivate(k);return}const G=S&1&&X,ae=!ms(k);let le;if(ae&&(le=ne&&ne.onVnodeBeforeUnmount)&&br(le,L,k),S&6)fe(k.component,w,re);else{if(S&128){k.suspense.unmount(w,re);return}G&&Xi(k,null,L,"beforeUnmount"),S&64?k.type.remove(k,L,w,de,re):C&&!C.hasOnce&&(q!==Bt||I>0&&I&64)?ve(C,L,w,!1,!0):(q===Bt&&I&384||!K&&S&16)&&ve(te,L,w),re&&Fe(k)}(ae&&(le=ne&&ne.onVnodeUnmounted)||G)&&hn(()=>{le&&br(le,L,k),G&&Xi(k,null,L,"unmounted")},w)},Fe=k=>{const{type:L,el:w,anchor:re,transition:K}=k;if(L===Bt){Q(w,re);return}if(L===Yl){b(k);return}const q=()=>{i(w),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(k.shapeFlag&1&&K&&!K.persisted){const{leave:ne,delayLeave:ce}=K,te=()=>ne(w,q);ce?ce(k.el,q,te):te()}else q()},Q=(k,L)=>{let w;for(;k!==L;)w=f(k),i(k),k=w;i(L)},fe=(k,L,w)=>{const{bum:re,scope:K,job:q,subTree:ne,um:ce,m:te,a:C}=k;op(te),op(C),re&&nu(re),K.stop(),q&&(q.flags|=8,Me(ne,k,L,w)),ce&&hn(ce,L),hn(()=>{k.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},ve=(k,L,w,re=!1,K=!1,q=0)=>{for(let ne=q;ne<k.length;ne++)Me(k[ne],L,w,re,K)},B=k=>{if(k.shapeFlag&6)return B(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const L=f(k.anchor||k.el),w=L&&L[P0];return w?f(w):L};let se=!1;const oe=(k,L,w)=>{k==null?L._vnode&&Me(L._vnode,null,null,!0):m(L._vnode||null,k,L,null,null,null,w),L._vnode=k,se||(se=!0,Yh(),T0(),se=!1)},de={p:m,um:Me,m:_e,r:Fe,mt:Y,mc:P,pc:z,pbc:M,n:B,o:n};return{render:oe,hydrate:void 0,createApp:d1(oe)}}function cu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Yi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function x1(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Xf(n,e,t=!1){const r=n.children,i=e.children;if(Ne(r)&&Ne(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Mi(i[o]),a.el=s.el),!t&&a.patchFlag!==-2&&Xf(s,a)),a.type===zc&&(a.el=s.el)}}function S1(n){const e=n.slice(),t=[0];let r,i,o,s,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(o=0,s=t.length-1;o<s;)a=o+s>>1,n[t[a]]<c?o=a+1:s=a;c<n[t[o]]&&(o>0&&(e[r]=t[o-1]),t[o]=r)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=e[s];return t}function r_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:r_(e)}function op(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const M1=Symbol.for("v-scx"),w1=()=>Rr(M1);function Fn(n,e,t){return i_(n,e,t)}function i_(n,e,t=vt){const{immediate:r,deep:i,flush:o,once:s}=t,a=qt({},t),l=e&&r||!e&&o!=="post";let c;if(Pa){if(o==="sync"){const h=w1();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ar,h.resume=Ar,h.pause=Ar,h}}const u=Yt;a.call=(h,_,m)=>gr(h,u,_,m);let d=!1;o==="post"?a.scheduler=h=>{hn(h,u&&u.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(h,_)=>{_?h():zf(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Ny(n,e,a);return Pa&&(c?c.push(f):l&&f()),f}function C1(n,e,t){const r=this.proxy,i=Tt(n)?n.includes(".")?o_(r,n):()=>r[n]:n.bind(r,r);let o;Ve(e)?o=e:(o=e.handler,t=e);const s=ol(this),a=i_(i,o.bind(r),t);return s(),a}function o_(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const E1=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${tr(e)}Modifiers`]||n[`${Ao(e)}Modifiers`];function T1(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||vt;let i=t;const o=e.startsWith("update:"),s=o&&E1(r,e.slice(7));s&&(s.trim&&(i=t.map(u=>Tt(u)?u.trim():u)),s.number&&(i=t.map(ty)));let a,l=r[a=tu(e)]||r[a=tu(tr(e))];!l&&o&&(l=r[a=tu(Ao(e))]),l&&gr(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,gr(c,n,6,i)}}function s_(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const o=n.emits;let s={},a=!1;if(!Ve(n)){const l=c=>{const u=s_(c,e,!0);u&&(a=!0,qt(s,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!a?(Mt(n)&&r.set(n,null),null):(Ne(o)?o.forEach(l=>s[l]=null):qt(s,o),Mt(n)&&r.set(n,s),s)}function Fc(n,e){return!n||!Ac(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,Ao(e))||ct(n,e))}function sp(n){const{type:e,vnode:t,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:_,inheritAttrs:m}=n,g=uc(n);let p,x;try{if(t.shapeFlag&4){const b=i||r,E=b;p=Sr(c.call(E,b,u,d,h,f,_)),x=a}else{const b=e;p=Sr(b.length>1?b(d,{attrs:a,slots:s,emit:l}):b(d,null)),x=e.props?a:A1(a)}}catch(b){ha.length=0,Ic(b,n,1),p=dt(_n)}let v=p;if(x&&m!==!1){const b=Object.keys(x),{shapeFlag:E}=v;b.length&&E&7&&(o&&b.some(Af)&&(x=R1(x,o)),v=Bi(v,x,!1,!0))}return t.dirs&&(v=Bi(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&Ta(v,t.transition),p=v,uc(g),p}const A1=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ac(t))&&((e||(e={}))[t]=n[t]);return e},R1=(n,e)=>{const t={};for(const r in n)(!Af(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function P1(n,e,t){const{props:r,children:i,component:o}=n,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?ap(r,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==r[f]&&!Fc(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?ap(r,s,c):!0:!!s;return!1}function ap(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==n[o]&&!Fc(t,o))return!0}return!1}function k1({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const a_=n=>n.__isSuspense;function D1(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):Hy(n)}const Bt=Symbol.for("v-fgt"),zc=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),Yl=Symbol.for("v-stc"),ha=[];let zn=null;function Pe(n=!1){ha.push(zn=n?null:[])}function L1(){ha.pop(),zn=ha[ha.length-1]||null}let Aa=1;function lp(n,e=!1){Aa+=n,n<0&&zn&&e&&(zn.hasOnce=!0)}function l_(n){return n.dynamicChildren=Aa>0?zn||fs:null,L1(),Aa>0&&zn&&zn.push(n),n}function Ke(n,e,t,r,i,o){return l_(ut(n,e,t,r,i,o,!0))}function Vt(n,e,t,r,i){return l_(dt(n,e,t,r,i,!0))}function Ra(n){return n?n.__v_isVNode===!0:!1}function lo(n,e){return n.type===e.type&&n.key===e.key}const c_=({key:n})=>n??null,ql=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||kt(n)||Ve(n)?{i:$t,r:n,k:e,f:!!t}:n:null);function ut(n,e=null,t=null,r=0,i=null,o=n===Bt?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&c_(e),ref:e&&ql(e),scopeId:R0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$t};return a?(Yf(l,t),o&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),Aa>0&&!s&&zn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&zn.push(l),l}const dt=I1;function I1(n,e=null,t=null,r=0,i=null,o=!1){if((!n||n===G0)&&(n=_n),Ra(n)){const a=Bi(n,e,!0);return t&&Yf(a,t),Aa>0&&!o&&zn&&(a.shapeFlag&6?zn[zn.indexOf(n)]=a:zn.push(a)),a.patchFlag=-2,a}if($1(n)&&(n=n.__vccOpts),e){e=es(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=Ui(a)),Mt(l)&&(Nf(l)&&!Ne(l)&&(l=qt({},l)),e.style=rl(l))}const s=Tt(n)?1:a_(n)?128:k0(n)?64:Mt(n)?4:Ve(n)?2:0;return ut(n,e,t,r,i,s,o,!0)}function es(n){return n?Nf(n)||K0(n)?qt({},n):n:null}function Bi(n,e,t=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:a,transition:l}=n,c=e?Le(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&c_(c),ref:e&&e.ref?t&&o?Ne(o)?o.concat(ql(e)):[o,ql(e)]:ql(e):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Bt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bi(n.ssContent),ssFallback:n.ssFallback&&Bi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Ta(u,l.clone(u)),u}function gs(n=" ",e=0){return dt(zc,null,n,e)}function O1(n,e){const t=dt(Yl,null,n);return t.staticCount=e,t}function mn(n="",e=!1){return e?(Pe(),Vt(_n,null,n)):dt(_n,null,n)}function Sr(n){return n==null||typeof n=="boolean"?dt(_n):Ne(n)?dt(Bt,null,n.slice()):Ra(n)?Mi(n):dt(zc,null,String(n))}function Mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bi(n)}function Yf(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Yf(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!K0(e)?e._ctx=$t:i===3&&$t&&($t.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:$t},t=32):(e=String(e),r&64?(t=16,e=[gs(e)]):t=8);n.children=e,n.shapeFlag|=t}function Le(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Ui([e.class,r.class]));else if(i==="style")e.style=rl([e.style,r.style]);else if(Ac(i)){const o=e[i],s=r[i];s&&o!==s&&!(Ne(o)&&o.includes(s))&&(e[i]=o?[].concat(o,s):s)}else i!==""&&(e[i]=r[i])}return e}function br(n,e,t,r=null){gr(n,e,7,[t,r])}const U1=X0();let B1=0;function N1(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||U1,o={uid:B1++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new i0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:J0(r,i),emitsOptions:s_(r,i),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:r.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=T1.bind(null,o),n.ce&&n.ce(o),o}let Yt=null;const u_=()=>Yt||$t;let hc,pd;{const n=Dc(),e=(t,r)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};hc=e("__VUE_INSTANCE_SETTERS__",t=>Yt=t),pd=e("__VUE_SSR_SETTERS__",t=>Pa=t)}const ol=n=>{const e=Yt;return hc(n),n.scope.on(),()=>{n.scope.off(),hc(e)}},cp=()=>{Yt&&Yt.scope.off(),hc(null)};function d_(n){return n.vnode.shapeFlag&4}let Pa=!1;function F1(n,e=!1,t=!1){e&&pd(e);const{props:r,children:i}=n.vnode,o=d_(n);h1(n,r,o,e),_1(n,i,t);const s=o?z1(n,e):void 0;return e&&pd(!1),s}function z1(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,i1);const{setup:r}=t;if(r){Vi();const i=n.setupContext=r.length>1?V1(n):null,o=ol(n),s=il(r,n,0,[n.props,i]),a=Zg(s);if(Gi(),o(),(a||n.sp)&&!ms(n)&&z0(n),a){if(s.then(cp,cp),e)return s.then(l=>{up(n,l)}).catch(l=>{Ic(l,n,0)});n.asyncDep=s}else up(n,s)}else f_(n)}function up(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=M0(e)),f_(n)}function f_(n,e,t){const r=n.type;n.render||(n.render=r.render||Ar);{const i=ol(n);Vi();try{o1(n)}finally{Gi(),i()}}}const H1={get(n,e){return rn(n,"get",""),n[e]}};function V1(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,H1),slots:n.slots,emit:n.emit,expose:e}}function Hc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(M0(Ff(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in fa)return fa[t](n)},has(e,t){return t in e||t in fa}})):n.proxy}function G1(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function $1(n){return Ve(n)&&"__vccOpts"in n}const wn=(n,e)=>Uy(n,e,Pa);function qf(n,e,t){const r=arguments.length;return r===2?Mt(e)&&!Ne(e)?Ra(e)?dt(n,null,[e]):dt(n,e):dt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Ra(t)&&(t=[t]),dt(n,e,t))}const W1="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let md;const dp=typeof window<"u"&&window.trustedTypes;if(dp)try{md=dp.createPolicy("vue",{createHTML:n=>n})}catch{}const h_=md?n=>md.createHTML(n):n=>n,j1="http://www.w3.org/2000/svg",X1="http://www.w3.org/1998/Math/MathML",Xr=typeof document<"u"?document:null,fp=Xr&&Xr.createElement("template"),Y1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e==="svg"?Xr.createElementNS(j1,n):e==="mathml"?Xr.createElementNS(X1,n):t?Xr.createElement(n,{is:t}):Xr.createElement(n);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Xr.createTextNode(n),createComment:n=>Xr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Xr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,o){const s=t?t.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{fp.innerHTML=h_(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=fp.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},fi="transition",js="animation",ka=Symbol("_vtc"),p_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},q1=qt({},I0,p_),K1=n=>(n.displayName="Transition",n.props=q1,n),m_=K1((n,{slots:e})=>qf(jy,Z1(n),e)),qi=(n,e=[])=>{Ne(n)?n.forEach(t=>t(...e)):n&&n(...e)},hp=n=>n?Ne(n)?n.some(e=>e.length>1):n.length>1:!1;function Z1(n){const e={};for(const O in n)O in p_||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:r,duration:i,enterFromClass:o=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:c=s,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,_=J1(i),m=_&&_[0],g=_&&_[1],{onBeforeEnter:p,onEnter:x,onEnterCancelled:v,onLeave:b,onLeaveCancelled:E,onBeforeAppear:R=p,onAppear:A=x,onAppearCancelled:P=v}=e,y=(O,U,Y,J)=>{O._enterCancelled=J,Ki(O,U?u:a),Ki(O,U?c:s),Y&&Y()},M=(O,U)=>{O._isLeaving=!1,Ki(O,d),Ki(O,h),Ki(O,f),U&&U()},D=O=>(U,Y)=>{const J=O?A:x,V=()=>y(U,O,Y);qi(J,[U,V]),pp(()=>{Ki(U,O?l:o),Nr(U,O?u:a),hp(J)||mp(U,r,m,V)})};return qt(e,{onBeforeEnter(O){qi(p,[O]),Nr(O,o),Nr(O,s)},onBeforeAppear(O){qi(R,[O]),Nr(O,l),Nr(O,c)},onEnter:D(!1),onAppear:D(!0),onLeave(O,U){O._isLeaving=!0;const Y=()=>M(O,U);Nr(O,d),O._enterCancelled?(Nr(O,f),bp()):(bp(),Nr(O,f)),pp(()=>{O._isLeaving&&(Ki(O,d),Nr(O,h),hp(b)||mp(O,r,g,Y))}),qi(b,[O,Y])},onEnterCancelled(O){y(O,!1,void 0,!0),qi(v,[O])},onAppearCancelled(O){y(O,!0,void 0,!0),qi(P,[O])},onLeaveCancelled(O){M(O),qi(E,[O])}})}function J1(n){if(n==null)return null;if(Mt(n))return[uu(n.enter),uu(n.leave)];{const e=uu(n);return[e,e]}}function uu(n){return ny(n)}function Nr(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ka]||(n[ka]=new Set)).add(e)}function Ki(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[ka];t&&(t.delete(e),t.size||(n[ka]=void 0))}function pp(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Q1=0;function mp(n,e,t,r){const i=n._endId=++Q1,o=()=>{i===n._endId&&r()};if(t!=null)return setTimeout(o,t);const{type:s,timeout:a,propCount:l}=ex(n,e);if(!s)return r();const c=s+"end";let u=0;const d=()=>{n.removeEventListener(c,f),o()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function ex(n,e){const t=window.getComputedStyle(n),r=_=>(t[_]||"").split(", "),i=r(`${fi}Delay`),o=r(`${fi}Duration`),s=gp(i,o),a=r(`${js}Delay`),l=r(`${js}Duration`),c=gp(a,l);let u=null,d=0,f=0;e===fi?s>0&&(u=fi,d=s,f=o.length):e===js?c>0&&(u=js,d=c,f=l.length):(d=Math.max(s,c),u=d>0?s>c?fi:js:null,f=u?u===fi?o.length:l.length:0);const h=u===fi&&/\b(transform|all)(,|$)/.test(r(`${fi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function gp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>_p(t)+_p(n[r])))}function _p(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function bp(){return document.body.offsetHeight}function tx(n,e,t){const r=n[ka];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const vp=Symbol("_vod"),nx=Symbol("_vsh"),rx=Symbol(""),ix=/(^|;)\s*display\s*:/;function ox(n,e,t){const r=n.style,i=Tt(t);let o=!1;if(t&&!i){if(e)if(Tt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();t[a]==null&&Kl(r,a,"")}else for(const s in e)t[s]==null&&Kl(r,s,"");for(const s in t)s==="display"&&(o=!0),Kl(r,s,t[s])}else if(i){if(e!==t){const s=r[rx];s&&(t+=";"+s),r.cssText=t,o=ix.test(t)}}else e&&n.removeAttribute("style");vp in n&&(n[vp]=o?r.display:"",n[nx]&&(r.display="none"))}const yp=/\s*!important$/;function Kl(n,e,t){if(Ne(t))t.forEach(r=>Kl(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=sx(n,e);yp.test(t)?n.setProperty(Ao(r),t.replace(yp,""),"important"):n[r]=t}}const xp=["Webkit","Moz","ms"],du={};function sx(n,e){const t=du[e];if(t)return t;let r=tr(e);if(r!=="filter"&&r in n)return du[e]=r;r=kc(r);for(let i=0;i<xp.length;i++){const o=xp[i]+r;if(o in n)return du[e]=o}return e}const Sp="http://www.w3.org/1999/xlink";function Mp(n,e,t,r,i,o=ly(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Sp,e.slice(6,e.length)):n.setAttributeNS(Sp,e,t):t==null||o&&!t0(t)?n.removeAttribute(e):n.setAttribute(e,o?"":ai(t)?String(t):t)}function wp(n,e,t,r,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?h_(t):t);return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=t0(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(i||e)}function ax(n,e,t,r){n.addEventListener(e,t,r)}function lx(n,e,t,r){n.removeEventListener(e,t,r)}const Cp=Symbol("_vei");function cx(n,e,t,r,i=null){const o=n[Cp]||(n[Cp]={}),s=o[e];if(r&&s)s.value=r;else{const[a,l]=ux(e);if(r){const c=o[e]=hx(r,i);ax(n,a,c,l)}else s&&(lx(n,a,s,l),o[e]=void 0)}}const Ep=/(?:Once|Passive|Capture)$/;function ux(n){let e;if(Ep.test(n)){e={};let r;for(;r=n.match(Ep);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ao(n.slice(2)),e]}let fu=0;const dx=Promise.resolve(),fx=()=>fu||(dx.then(()=>fu=0),fu=Date.now());function hx(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;gr(px(r,t.value),e,5,[r])};return t.value=n,t.attached=fx(),t}function px(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Tp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,mx=(n,e,t,r,i,o)=>{const s=i==="svg";e==="class"?tx(n,r,s):e==="style"?ox(n,t,r):Ac(e)?Af(e)||cx(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gx(n,e,r,s))?(wp(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mp(n,e,r,s,o,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Tt(r))?wp(n,tr(e),r,o,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Mp(n,e,r,s))};function gx(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Tp(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Tp(e)&&Tt(t)?!1:e in n}const _x=qt({patchProp:mx},Y1);let Ap;function bx(){return Ap||(Ap=v1(_x))}const vx=(...n)=>{const e=bx().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=xx(r);if(!i)return;const o=e._component;!Ve(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=t(i,!1,yx(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function yx(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function xx(n){return Tt(n)?document.querySelector(n):n}const ci=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},Sx={};function Mx(n,e){const t=cr("routerView");return Pe(),Vt(t)}const wx=ci(Sx,[["render",Mx]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof document<"u";function g_(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Cx(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&g_(n.default)}const lt=Object.assign;function hu(n,e){const t={};for(const r in e){const i=e[r];t[r]=_r(i)?i.map(n):n(i)}return t}const pa=()=>{},_r=Array.isArray,__=/#/g,Ex=/&/g,Tx=/\//g,Ax=/=/g,Rx=/\?/g,b_=/\+/g,Px=/%5B/g,kx=/%5D/g,v_=/%5E/g,Dx=/%60/g,y_=/%7B/g,Lx=/%7C/g,x_=/%7D/g,Ix=/%20/g;function Kf(n){return encodeURI(""+n).replace(Lx,"|").replace(Px,"[").replace(kx,"]")}function Ox(n){return Kf(n).replace(y_,"{").replace(x_,"}").replace(v_,"^")}function gd(n){return Kf(n).replace(b_,"%2B").replace(Ix,"+").replace(__,"%23").replace(Ex,"%26").replace(Dx,"`").replace(y_,"{").replace(x_,"}").replace(v_,"^")}function Ux(n){return gd(n).replace(Ax,"%3D")}function Bx(n){return Kf(n).replace(__,"%23").replace(Rx,"%3F")}function Nx(n){return n==null?"":Bx(n).replace(Tx,"%2F")}function Da(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Fx=/\/$/,zx=n=>n.replace(Fx,"");function pu(n,e,t="/"){let r,i={},o="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),i=n(o)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=$x(r??e,t),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:Da(s)}}function Hx(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Rp(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Vx(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Es(e.matched[r],t.matched[i])&&S_(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Es(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function S_(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Gx(n[t],e[t]))return!1;return!0}function Gx(n,e){return _r(n)?Pp(n,e):_r(e)?Pp(e,n):n===e}function Pp(n,e){return _r(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function $x(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=t.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(s).join("/")}const hi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var La;(function(n){n.pop="pop",n.push="push"})(La||(La={}));var ma;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ma||(ma={}));function Wx(n){if(!n)if(ts){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),zx(n)}const jx=/^[^#]+#/;function Xx(n,e){return n.replace(jx,"#")+e}function Yx(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Vc=()=>({left:window.scrollX,top:window.scrollY});function qx(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=Yx(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function kp(n,e){return(history.state?history.state.position-e:-1)+n}const _d=new Map;function Kx(n,e){_d.set(n,e)}function Zx(n){const e=_d.get(n);return _d.delete(n),e}let Jx=()=>location.protocol+"//"+location.host;function M_(n,e){const{pathname:t,search:r,hash:i}=e,o=n.indexOf("#");if(o>-1){let a=i.includes(n.slice(o))?n.slice(o).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Rp(l,"")}return Rp(t,n)+r+i}function Qx(n,e,t,r){let i=[],o=[],s=null;const a=({state:f})=>{const h=M_(n,location),_=t.value,m=e.value;let g=0;if(f){if(t.value=h,e.value=f,s&&s===_){s=null;return}g=m?f.position-m.position:0}else r(h);i.forEach(p=>{p(t.value,_,{delta:g,type:La.pop,direction:g?g>0?ma.forward:ma.back:ma.unknown})})};function l(){s=t.value}function c(f){i.push(f);const h=()=>{const _=i.indexOf(f);_>-1&&i.splice(_,1)};return o.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(lt({},f.state,{scroll:Vc()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Dp(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?Vc():null}}function eS(n){const{history:e,location:t}=window,r={value:M_(n,t)},i={value:e.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:Jx()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(h){console.error(h),t[u?"replace":"assign"](f)}}function s(l,c){const u=lt({},e.state,Dp(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,u,!0),r.value=l}function a(l,c){const u=lt({},i.value,e.state,{forward:l,scroll:Vc()});o(u.current,u,!0);const d=lt({},Dp(r.value,l,null),{position:u.position+1},c);o(l,d,!1),r.value=l}return{location:r,state:i,push:a,replace:s}}function tS(n){n=Wx(n);const e=eS(n),t=Qx(n,e.state,e.location,e.replace);function r(o,s=!0){s||t.pauseListeners(),history.go(o)}const i=lt({location:"",base:n,go:r,createHref:Xx.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function nS(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),tS(n)}function rS(n){return typeof n=="string"||n&&typeof n=="object"}function w_(n){return typeof n=="string"||typeof n=="symbol"}const C_=Symbol("");var Lp;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Lp||(Lp={}));function Ts(n,e){return lt(new Error,{type:n,[C_]:!0},e)}function Fr(n,e){return n instanceof Error&&C_ in n&&(e==null||!!(n.type&e))}const Ip="[^/]+?",iS={sensitive:!1,strict:!1,start:!0,end:!0},oS=/[.+*?^${}()[\]/\\]/g;function sS(n,e){const t=lt({},iS,e),r=[];let i=t.start?"^":"";const o=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(t.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(oS,"\\$&"),h+=40;else if(f.type===1){const{value:_,repeatable:m,optional:g,regexp:p}=f;o.push({name:_,repeatable:m,optional:g});const x=p||Ip;if(x!==Ip){h+=10;try{new RegExp(`(${x})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+b.message)}}let v=m?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(v=g&&c.length<2?`(?:/${v})`:"/"+v),g&&(v+="?"),i+=v,h+=20,g&&(h+=-8),m&&(h+=-20),x===".*"&&(h+=-50)}u.push(h)}r.push(u)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",_=o[f-1];d[_.name]=h&&_.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:_,repeatable:m,optional:g}=h,p=_ in c?c[_]:"";if(_r(p)&&!m)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=_r(p)?p.join("/"):p;if(!x)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:s,score:r,keys:o,parse:a,stringify:l}}function aS(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function E_(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const o=aS(r[t],i[t]);if(o)return o;t++}if(Math.abs(i.length-r.length)===1){if(Op(r))return 1;if(Op(i))return-1}return i.length-r.length}function Op(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const lS={type:0,value:""},cS=/[a-zA-Z0-9_]/;function uS(n){if(!n)return[[]];if(n==="/")return[[lS]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=0,r=t;const i=[];let o;function s(){o&&i.push(o),o=[]}let a=0,l,c="",u="";function d(){c&&(t===0?o.push({type:0,value:c}):t===1||t===2||t===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),s()):l===":"?(d(),t=1):f();break;case 4:f(),t=r;break;case 1:l==="("?t=2:cS.test(l)?f():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),s(),i}function dS(n,e,t){const r=sS(uS(n.path),t),i=lt(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function fS(n,e){const t=[],r=new Map;e=Fp({strict:!1,end:!0,sensitive:!1},e);function i(d){return r.get(d)}function o(d,f,h){const _=!h,m=Bp(d);m.aliasOf=h&&h.record;const g=Fp(e,d),p=[m];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const E of b)p.push(Bp(lt({},m,{components:h?h.record.components:m.components,path:E,aliasOf:h?h.record:m})))}let x,v;for(const b of p){const{path:E}=b;if(f&&E[0]!=="/"){const R=f.record.path,A=R[R.length-1]==="/"?"":"/";b.path=f.record.path+(E&&A+E)}if(x=dS(b,f,g),h?h.alias.push(x):(v=v||x,v!==x&&v.alias.push(x),_&&d.name&&!Np(x)&&s(d.name)),T_(x)&&l(x),m.children){const R=m.children;for(let A=0;A<R.length;A++)o(R[A],x,h&&h.children[A])}h=h||x}return v?()=>{s(v)}:pa}function s(d){if(w_(d)){const f=r.get(d);f&&(r.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function a(){return t}function l(d){const f=mS(d,t);t.splice(f,0,d),d.record.name&&!Np(d)&&r.set(d.record.name,d)}function c(d,f){let h,_={},m,g;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw Ts(1,{location:d});g=h.record.name,_=lt(Up(f.params,h.keys.filter(v=>!v.optional).concat(h.parent?h.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),d.params&&Up(d.params,h.keys.map(v=>v.name))),m=h.stringify(_)}else if(d.path!=null)m=d.path,h=t.find(v=>v.re.test(m)),h&&(_=h.parse(m),g=h.record.name);else{if(h=f.name?r.get(f.name):t.find(v=>v.re.test(f.path)),!h)throw Ts(1,{location:d,currentLocation:f});g=h.record.name,_=lt({},f.params,d.params),m=h.stringify(_)}const p=[];let x=h;for(;x;)p.unshift(x.record),x=x.parent;return{name:g,path:m,params:_,matched:p,meta:pS(p)}}n.forEach(d=>o(d));function u(){t.length=0,r.clear()}return{addRoute:o,resolve:c,removeRoute:s,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Up(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function Bp(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:hS(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function hS(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function Np(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function pS(n){return n.reduce((e,t)=>lt(e,t.meta),{})}function Fp(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function mS(n,e){let t=0,r=e.length;for(;t!==r;){const o=t+r>>1;E_(n,e[o])<0?r=o:t=o+1}const i=gS(n);return i&&(r=e.lastIndexOf(i,r-1)),r}function gS(n){let e=n;for(;e=e.parent;)if(T_(e)&&E_(n,e)===0)return e}function T_({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function _S(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(b_," "),s=o.indexOf("="),a=Da(s<0?o:o.slice(0,s)),l=s<0?null:Da(o.slice(s+1));if(a in e){let c=e[a];_r(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function zp(n){let e="";for(let t in n){const r=n[t];if(t=Ux(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(_r(r)?r.map(o=>o&&gd(o)):[r&&gd(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+t,o!=null&&(e+="="+o))})}return e}function bS(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=_r(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const vS=Symbol(""),Hp=Symbol(""),Zf=Symbol(""),A_=Symbol(""),bd=Symbol("");function Xs(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function wi(n,e,t,r,i,o=s=>s()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Ts(4,{from:t,to:e})):f instanceof Error?l(f):rS(f)?l(Ts(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},u=o(()=>n.call(r&&r.instances[i],e,t,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function mu(n,e,t,r,i=o=>o()){const o=[];for(const s of n)for(const a in s.components){let l=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(g_(l)){const u=(l.__vccOpts||l)[e];u&&o.push(wi(u,t,r,s,a,i))}else{let c=l();o.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);const d=Cx(u)?u.default:u;s.mods[a]=u,s.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&wi(h,t,r,s,a,i)()}))}}return o}function Vp(n){const e=Rr(Zf),t=Rr(A_),r=wn(()=>{const l=At(n.to);return e.resolve(l)}),i=wn(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(Es.bind(null,u));if(f>-1)return f;const h=Gp(l[c-2]);return c>1&&Gp(u)===h&&d[d.length-1].path!==h?d.findIndex(Es.bind(null,l[c-2])):f}),o=wn(()=>i.value>-1&&wS(t.params,r.value.params)),s=wn(()=>i.value>-1&&i.value===t.matched.length-1&&S_(t.params,r.value.params));function a(l={}){if(MS(l)){const c=e[At(n.replace)?"replace":"push"](At(n.to)).catch(pa);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:wn(()=>r.value.href),isActive:o,isExactActive:s,navigate:a}}function yS(n){return n.length===1?n[0]:n}const xS=F0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vp,setup(n,{slots:e}){const t=Ro(Vp(n)),{options:r}=Rr(Zf),i=wn(()=>({[$p(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[$p(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&yS(e.default(t));return n.custom?o:qf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},o)}}}),SS=xS;function MS(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function wS(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!_r(i)||i.length!==r.length||r.some((o,s)=>o!==i[s]))return!1}return!0}function Gp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const $p=(n,e,t)=>n??e??t,CS=F0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Rr(bd),i=wn(()=>n.route||r.value),o=Rr(Hp,0),s=wn(()=>{let c=At(o);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=wn(()=>i.value.matched[s.value]);Xl(Hp,wn(()=>s.value+1)),Xl(vS,a),Xl(bd,i);const l=vn();return Fn(()=>[l.value,a.value,n.name],([c,u,d],[f,h,_])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Es(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Wp(t.default,{Component:f,route:c});const h=d.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,g=qf(f,lt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Wp(t.default,{Component:g,route:c})||g}}});function Wp(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ES=CS;function TS(n){const e=fS(n.routes,n),t=n.parseQuery||_S,r=n.stringifyQuery||zp,i=n.history,o=Xs(),s=Xs(),a=Xs(),l=Wl(hi);let c=hi;ts&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hu.bind(null,B=>""+B),d=hu.bind(null,Nx),f=hu.bind(null,Da);function h(B,se){let oe,de;return w_(B)?(oe=e.getRecordMatcher(B),de=se):de=B,e.addRoute(de,oe)}function _(B){const se=e.getRecordMatcher(B);se&&e.removeRoute(se)}function m(){return e.getRoutes().map(B=>B.record)}function g(B){return!!e.getRecordMatcher(B)}function p(B,se){if(se=lt({},se||l.value),typeof B=="string"){const w=pu(t,B,se.path),re=e.resolve({path:w.path},se),K=i.createHref(w.fullPath);return lt(w,re,{params:f(re.params),hash:Da(w.hash),redirectedFrom:void 0,href:K})}let oe;if(B.path!=null)oe=lt({},B,{path:pu(t,B.path,se.path).path});else{const w=lt({},B.params);for(const re in w)w[re]==null&&delete w[re];oe=lt({},B,{params:d(w)}),se.params=d(se.params)}const de=e.resolve(oe,se),ke=B.hash||"";de.params=u(f(de.params));const k=Hx(r,lt({},B,{hash:Ox(ke),path:de.path})),L=i.createHref(k);return lt({fullPath:k,hash:ke,query:r===zp?bS(B.query):B.query||{}},de,{redirectedFrom:void 0,href:L})}function x(B){return typeof B=="string"?pu(t,B,l.value.path):lt({},B)}function v(B,se){if(c!==B)return Ts(8,{from:se,to:B})}function b(B){return A(B)}function E(B){return b(lt(x(B),{replace:!0}))}function R(B){const se=B.matched[B.matched.length-1];if(se&&se.redirect){const{redirect:oe}=se;let de=typeof oe=="function"?oe(B):oe;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=x(de):{path:de},de.params={}),lt({query:B.query,hash:B.hash,params:de.path!=null?{}:B.params},de)}}function A(B,se){const oe=c=p(B),de=l.value,ke=B.state,k=B.force,L=B.replace===!0,w=R(oe);if(w)return A(lt(x(w),{state:typeof w=="object"?lt({},ke,w.state):ke,force:k,replace:L}),se||oe);const re=oe;re.redirectedFrom=se;let K;return!k&&Vx(r,de,oe)&&(K=Ts(16,{to:re,from:de}),_e(de,de,!0,!1)),(K?Promise.resolve(K):M(re,de)).catch(q=>Fr(q)?Fr(q,2)?q:pe(q):z(q,re,de)).then(q=>{if(q){if(Fr(q,2))return A(lt({replace:L},x(q.to),{state:typeof q.to=="object"?lt({},ke,q.to.state):ke,force:k}),se||re)}else q=O(re,de,!0,L,ke);return D(re,de,q),q})}function P(B,se){const oe=v(B,se);return oe?Promise.reject(oe):Promise.resolve()}function y(B){const se=Q.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(B):B()}function M(B,se){let oe;const[de,ke,k]=AS(B,se);oe=mu(de.reverse(),"beforeRouteLeave",B,se);for(const w of de)w.leaveGuards.forEach(re=>{oe.push(wi(re,B,se))});const L=P.bind(null,B,se);return oe.push(L),ve(oe).then(()=>{oe=[];for(const w of o.list())oe.push(wi(w,B,se));return oe.push(L),ve(oe)}).then(()=>{oe=mu(ke,"beforeRouteUpdate",B,se);for(const w of ke)w.updateGuards.forEach(re=>{oe.push(wi(re,B,se))});return oe.push(L),ve(oe)}).then(()=>{oe=[];for(const w of k)if(w.beforeEnter)if(_r(w.beforeEnter))for(const re of w.beforeEnter)oe.push(wi(re,B,se));else oe.push(wi(w.beforeEnter,B,se));return oe.push(L),ve(oe)}).then(()=>(B.matched.forEach(w=>w.enterCallbacks={}),oe=mu(k,"beforeRouteEnter",B,se,y),oe.push(L),ve(oe))).then(()=>{oe=[];for(const w of s.list())oe.push(wi(w,B,se));return oe.push(L),ve(oe)}).catch(w=>Fr(w,8)?w:Promise.reject(w))}function D(B,se,oe){a.list().forEach(de=>y(()=>de(B,se,oe)))}function O(B,se,oe,de,ke){const k=v(B,se);if(k)return k;const L=se===hi,w=ts?history.state:{};oe&&(de||L?i.replace(B.fullPath,lt({scroll:L&&w&&w.scroll},ke)):i.push(B.fullPath,ke)),l.value=B,_e(B,se,oe,L),pe()}let U;function Y(){U||(U=i.listen((B,se,oe)=>{if(!fe.listening)return;const de=p(B),ke=R(de);if(ke){A(lt(ke,{replace:!0,force:!0}),de).catch(pa);return}c=de;const k=l.value;ts&&Kx(kp(k.fullPath,oe.delta),Vc()),M(de,k).catch(L=>Fr(L,12)?L:Fr(L,2)?(A(lt(x(L.to),{force:!0}),de).then(w=>{Fr(w,20)&&!oe.delta&&oe.type===La.pop&&i.go(-1,!1)}).catch(pa),Promise.reject()):(oe.delta&&i.go(-oe.delta,!1),z(L,de,k))).then(L=>{L=L||O(de,k,!1),L&&(oe.delta&&!Fr(L,8)?i.go(-oe.delta,!1):oe.type===La.pop&&Fr(L,20)&&i.go(-1,!1)),D(de,k,L)}).catch(pa)}))}let J=Xs(),V=Xs(),$;function z(B,se,oe){pe(B);const de=V.list();return de.length?de.forEach(ke=>ke(B,se,oe)):console.error(B),Promise.reject(B)}function he(){return $&&l.value!==hi?Promise.resolve():new Promise((B,se)=>{J.add([B,se])})}function pe(B){return $||($=!B,Y(),J.list().forEach(([se,oe])=>B?oe(B):se()),J.reset()),B}function _e(B,se,oe,de){const{scrollBehavior:ke}=n;if(!ts||!ke)return Promise.resolve();const k=!oe&&Zx(kp(B.fullPath,0))||(de||!oe)&&history.state&&history.state.scroll||null;return Oc().then(()=>ke(B,se,k)).then(L=>L&&qx(L)).catch(L=>z(L,B,se))}const Me=B=>i.go(B);let Fe;const Q=new Set,fe={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:m,resolve:p,options:n,push:b,replace:E,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:V.add,isReady:he,install(B){const se=this;B.component("RouterLink",SS),B.component("RouterView",ES),B.config.globalProperties.$router=se,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>At(l)}),ts&&!Fe&&l.value===hi&&(Fe=!0,b(i.location).catch(ke=>{}));const oe={};for(const ke in hi)Object.defineProperty(oe,ke,{get:()=>l.value[ke],enumerable:!0});B.provide(Zf,se),B.provide(A_,x0(oe)),B.provide(bd,l);const de=B.unmount;Q.add(B),B.unmount=function(){Q.delete(B),Q.size<1&&(c=hi,U&&U(),U=null,l.value=hi,Fe=!1,$=!1),de()}}};function ve(B){return B.reduce((se,oe)=>se.then(()=>y(oe)),Promise.resolve())}return fe}function AS(n,e){const t=[],r=[],i=[],o=Math.max(e.matched.length,n.matched.length);for(let s=0;s<o;s++){const a=e.matched[s];a&&(n.matched.find(c=>Es(c,a))?r.push(a):t.push(a));const l=n.matched[s];l&&(e.matched.find(c=>Es(c,l))||i.push(l))}return[t,r,i]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="172",_s={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RS=0,jp=1,PS=2,R_=1,kS=2,jr=3,Ni=0,yn=1,wr=2,Di=0,bs=1,Xp=2,Yp=3,qp=4,DS=5,co=100,LS=101,IS=102,OS=103,US=104,BS=200,NS=201,FS=202,zS=203,vd=204,yd=205,HS=206,VS=207,GS=208,$S=209,WS=210,jS=211,XS=212,YS=213,qS=214,xd=0,Sd=1,Md=2,As=3,wd=4,Cd=5,Ed=6,Td=7,P_=0,KS=1,ZS=2,Li=0,JS=1,QS=2,eM=3,tM=4,nM=5,rM=6,iM=7,k_=300,Rs=301,Ps=302,pc=303,Ad=304,Gc=306,Ia=1e3,fo=1001,Rd=1002,mr=1003,oM=1004,vl=1005,Er=1006,gu=1007,ho=1008,ii=1009,D_=1010,L_=1011,Oa=1012,Qf=1013,wo=1014,Qr=1015,sl=1016,eh=1017,th=1018,ks=1020,I_=35902,O_=1021,U_=1022,hr=1023,B_=1024,N_=1025,vs=1026,Ds=1027,F_=1028,nh=1029,z_=1030,rh=1031,ih=1033,Zl=33776,Jl=33777,Ql=33778,ec=33779,Pd=35840,kd=35841,Dd=35842,Ld=35843,Id=36196,Od=37492,Ud=37496,Bd=37808,Nd=37809,Fd=37810,zd=37811,Hd=37812,Vd=37813,Gd=37814,$d=37815,Wd=37816,jd=37817,Xd=37818,Yd=37819,qd=37820,Kd=37821,tc=36492,Zd=36494,Jd=36495,H_=36283,Qd=36284,ef=36285,tf=36286,sM=3200,aM=3201,V_=0,lM=1,Ei="",On="srgb",Ls="srgb-linear",mc="linear",ht="srgb",Bo=7680,Kp=519,cM=512,uM=513,dM=514,G_=515,fM=516,hM=517,pM=518,mM=519,Zp=35044,Jp="300 es",ei=2e3,gc=2001;class Po{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qp=1234567;const ga=Math.PI/180,Ua=180/Math.PI;function Hs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function oh(n,e){return(n%e+e)%e}function gM(n,e,t,r,i){return r+(n-e)*(i-r)/(t-e)}function _M(n,e,t){return n!==e?(t-n)/(e-n):0}function _a(n,e,t){return(1-t)*n+t*e}function bM(n,e,t,r){return _a(n,e,1-Math.exp(-t*r))}function vM(n,e=1){return e-Math.abs(oh(n,e*2)-e)}function yM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function xM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function SM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function MM(n,e){return n+Math.random()*(e-n)}function wM(n){return n*(.5-Math.random())}function CM(n){n!==void 0&&(Qp=n);let e=Qp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EM(n){return n*ga}function TM(n){return n*Ua}function AM(n){return(n&n-1)===0&&n!==0}function RM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function PM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kM(n,e,t,r,i){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+r)/2),u=s((e+r)/2),d=o((e-r)/2),f=s((e-r)/2),h=o((r-e)/2),_=s((r-e)/2);switch(i){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nf={DEG2RAD:ga,RAD2DEG:Ua,generateUUID:Hs,clamp:Ze,euclideanModulo:oh,mapLinear:gM,inverseLerp:_M,lerp:_a,damp:bM,pingpong:vM,smoothstep:yM,smootherstep:xM,randInt:SM,randFloat:MM,randFloatSpread:wM,seededRandom:CM,degToRad:EM,radToDeg:TM,isPowerOfTwo:AM,ceilPowerOfTwo:RM,floorPowerOfTwo:PM,setQuaternionFromProperEuler:kM,normalize:dn,denormalize:ns};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*r-s*i+e.x,this.y=o*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,r,i,o,s,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,o,s,a,l,c)}set(e,t,r,i,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,o=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],u=r[4],d=r[7],f=r[2],h=r[5],_=r[8],m=i[0],g=i[3],p=i[6],x=i[1],v=i[4],b=i[7],E=i[2],R=i[5],A=i[8];return o[0]=s*m+a*x+l*E,o[3]=s*g+a*v+l*R,o[6]=s*p+a*b+l*A,o[1]=c*m+u*x+d*E,o[4]=c*g+u*v+d*R,o[7]=c*p+u*b+d*A,o[2]=f*m+h*x+_*E,o[5]=f*g+h*v+_*R,o[8]=f*p+h*b+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-r*o*u+r*a*l+i*o*c-i*s*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,h=c*o-s*l,_=t*d+r*f+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=d*m,e[1]=(i*c-u*r)*m,e[2]=(a*r-i*s)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*o-a*t)*m,e[6]=h*m,e[7]=(r*l-c*t)*m,e[8]=(s*t-r*o)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_u.makeScale(e,t)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,t){return this.premultiply(_u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new Xe;function $_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DM(){const n=Ba("canvas");return n.style.display="block",n}const em={};function rs(n){n in em||(em[n]=!0,console.warn(n))}function LM(n,e,t){return new Promise(function(r,i){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}function IM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function OM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tm=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nm=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UM(){const n={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(i,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ht&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ht&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?mc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,s){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ls]:{primaries:e,whitePoint:r,transfer:mc,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:r,transfer:ht,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),n}const ot=UM();function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let No;class BM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{No===void 0&&(No=Ba("canvas")),No.width=e.width,No.height=e.height;const r=No.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=No}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=ri(o[s]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ri(t[r]/255)*255):t[r]=ri(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NM=0;class W_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?o.push(bu(i[s].image)):o.push(bu(i[s]))}else o=bu(i);r.url=o}return t||(e.images[this.uuid]=r),r}}function bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?BM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FM=0;class xn extends Po{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,r=fo,i=fo,o=Er,s=ho,a=hr,l=ii,c=xn.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Hs(),this.name="",this.source=new W_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case fo:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case fo:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=k_;xn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,r=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i+s[12]*o,this.y=s[1]*t+s[5]*r+s[9]*i+s[13]*o,this.z=s[2]*t+s[6]*r+s[10]*i+s[14]*o,this.w=s[3]*t+s[7]*r+s[11]*i+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+m)<.1&&Math.abs(_+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(h+1)/2,E=(p+1)/2,R=(u+f)/4,A=(d+m)/4,P=(_+g)/4;return v>b&&v>E?v<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(v),i=R/r,o=A/r):b>E?b<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(b),r=R/i,o=P/i):E<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(E),r=A/o,i=P/o),this.set(r,i,o,t),this}let x=Math.sqrt((g-_)*(g-_)+(d-m)*(d-m)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(d-m)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends Po{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Er,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const o=new xn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new W_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Co extends zM{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class j_ extends xn{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=mr,this.minFilter=mr,this.wrapR=fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends xn{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=mr,this.minFilter=mr,this.wrapR=fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eo{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,o,s,a){let l=r[i+0],c=r[i+1],u=r[i+2],d=r[i+3];const f=o[s+0],h=o[s+1],_=o[s+2],m=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=_,e[t+3]=m;return}if(d!==m||l!==f||c!==h||u!==_){let g=1-a;const p=l*f+c*h+u*_+d*m,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),R=Math.atan2(E,p*x);g=Math.sin(g*R)/E,a=Math.sin(a*R)/E}const b=a*x;if(l=l*g+f*b,c=c*g+h*b,u=u*g+_*b,d=d*g+m*b,g===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,i,o,s){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],d=o[s],f=o[s+1],h=o[s+2],_=o[s+3];return e[t]=a*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-a*h,e[t+2]=c*_+u*h+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,i=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),d=a(o/2),f=l(r/2),h=l(i/2),_=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=r+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(o-c)*h,this._z=(s-i)*h}else if(r>a&&r>d){const h=2*Math.sqrt(1+r-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(o+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-r-d);this._w=(o-c)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-r-a);this._w=(s-i)/h,this._x=(o+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*a+i*c-o*l,this._y=i*u+s*l+o*a-r*c,this._z=o*u+s*c+r*l-i*a,this._w=s*u-r*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,s=this._w;let a=s*e._w+r*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*r+t*this._x,this._y=h*i+t*this._y,this._z=h*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=r*d+this._x*f,this._y=i*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*i,this.y=o[1]*t+o[4]*r+o[7]*i,this.z=o[2]*t+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,o=e.elements,s=1/(o[3]*t+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*i+o[12])*s,this.y=(o[1]*t+o[5]*r+o[9]*i+o[13])*s,this.z=(o[2]*t+o[6]*r+o[10]*i+o[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*i-a*r),u=2*(a*t-o*i),d=2*(o*r-s*t);return this.x=t+l*c+s*d-a*u,this.y=r+l*u+a*c-o*d,this.z=i+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*i,this.y=o[1]*t+o[5]*r+o[9]*i,this.z=o[2]*t+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-o*a,this.y=o*s-r*l,this.z=r*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vu=new j,rm=new Eo;class al{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ir.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ir.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ir.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,ir):ir.fromBufferAttribute(o,s),ir.applyMatrix4(e.matrixWorld),this.expandByPoint(ir);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yl.copy(r.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const i=e.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ir),ir.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),xl.subVectors(this.max,Ys),Fo.subVectors(e.a,Ys),zo.subVectors(e.b,Ys),Ho.subVectors(e.c,Ys),pi.subVectors(zo,Fo),mi.subVectors(Ho,zo),Zi.subVectors(Fo,Ho);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Zi.z,Zi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Zi.z,0,-Zi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Zi.y,Zi.x,0];return!yu(t,Fo,zo,Ho,xl)||(t=[1,0,0,0,1,0,0,0,1],!yu(t,Fo,zo,Ho,xl))?!1:(Sl.crossVectors(pi,mi),t=[Sl.x,Sl.y,Sl.z],yu(t,Fo,zo,Ho,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ir).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ir).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zr=[new j,new j,new j,new j,new j,new j,new j,new j],ir=new j,yl=new al,Fo=new j,zo=new j,Ho=new j,pi=new j,mi=new j,Zi=new j,Ys=new j,xl=new j,Sl=new j,Ji=new j;function yu(n,e,t,r,i){for(let o=0,s=n.length-3;o<=s;o+=3){Ji.fromArray(n,o);const a=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),u=r.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const VM=new al,qs=new j,xu=new j;class sh{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):VM.setFromPoints(e).getCenter(r);let i=0;for(let o=0,s=e.length;o<s;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(qs,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(xu)),this.expandByPoint(qs.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hr=new j,Su=new j,Ml=new j,gi=new j,Mu=new j,wl=new j,wu=new j;class ah{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,t),Hr.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){Su.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Su);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Ml),a=gi.dot(this.direction),l=-gi.dot(Ml),c=gi.lengthSq(),u=Math.abs(1-s*s);let d,f,h,_;if(u>0)if(d=s*l-a,f=s*a-l,_=o*u,d>=0)if(f>=-_)if(f<=_){const m=1/u;d*=m,f*=m,h=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-o,-l),o),h=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Su).addScaledVector(Ml,f),h}intersectSphere(e,t){Hr.subVectors(e.center,this.origin);const r=Hr.dot(this.direction),i=Hr.dot(Hr)-r*r,o=e.radius*e.radius;if(i>o)return null;const s=Math.sqrt(o-i),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||o>i||((o>r||isNaN(r))&&(r=o),(s<i||isNaN(i))&&(i=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,t,r,i,o){Mu.subVectors(t,e),wl.subVectors(r,e),wu.crossVectors(Mu,wl);let s=this.direction.dot(wu),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(wl.crossVectors(gi,wl));if(l<0)return null;const c=a*this.direction.dot(Mu.cross(gi));if(c<0||l+c>s)return null;const u=-a*gi.dot(wu);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,r,i,o,s,a,l,c,u,d,f,h,_,m,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,o,s,a,l,c,u,d,f,h,_,m,g)}set(e,t,r,i,o,s,a,l,c,u,d,f,h,_,m,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=i,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/Vo.setFromMatrixColumn(e,0).length(),o=1/Vo.setFromMatrixColumn(e,1).length(),s=1/Vo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,o=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,h=s*d,_=a*u,m=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=_+h*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,m=c*d;t[0]=f+m*a,t[4]=_*a-h,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=h*a-_,t[6]=m+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,m=c*d;t[0]=f-m*a,t[4]=-s*d,t[8]=_+h*a,t[1]=h+_*a,t[5]=s*u,t[9]=m-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,h=s*d,_=a*u,m=a*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+m,t[1]=l*d,t[5]=m*c+f,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,h=s*c,_=a*l,m=a*c;t[0]=l*u,t[4]=m-f*d,t[8]=_*d+h,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-m*d}else if(e.order==="XZY"){const f=s*l,h=s*c,_=a*l,m=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+m,t[5]=s*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=a*u,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GM,e,$M)}lookAt(e,t,r){const i=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),_i.crossVectors(r,Ln),_i.lengthSq()===0&&(Math.abs(r.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),_i.crossVectors(r,Ln)),_i.normalize(),Cl.crossVectors(Ln,_i),i[0]=_i.x,i[4]=Cl.x,i[8]=Ln.x,i[1]=_i.y,i[5]=Cl.y,i[9]=Ln.y,i[2]=_i.z,i[6]=Cl.z,i[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,o=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],u=r[1],d=r[5],f=r[9],h=r[13],_=r[2],m=r[6],g=r[10],p=r[14],x=r[3],v=r[7],b=r[11],E=r[15],R=i[0],A=i[4],P=i[8],y=i[12],M=i[1],D=i[5],O=i[9],U=i[13],Y=i[2],J=i[6],V=i[10],$=i[14],z=i[3],he=i[7],pe=i[11],_e=i[15];return o[0]=s*R+a*M+l*Y+c*z,o[4]=s*A+a*D+l*J+c*he,o[8]=s*P+a*O+l*V+c*pe,o[12]=s*y+a*U+l*$+c*_e,o[1]=u*R+d*M+f*Y+h*z,o[5]=u*A+d*D+f*J+h*he,o[9]=u*P+d*O+f*V+h*pe,o[13]=u*y+d*U+f*$+h*_e,o[2]=_*R+m*M+g*Y+p*z,o[6]=_*A+m*D+g*J+p*he,o[10]=_*P+m*O+g*V+p*pe,o[14]=_*y+m*U+g*$+p*_e,o[3]=x*R+v*M+b*Y+E*z,o[7]=x*A+v*D+b*J+E*he,o[11]=x*P+v*O+b*V+E*pe,o[15]=x*y+v*U+b*$+E*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],m=e[7],g=e[11],p=e[15];return _*(+o*l*d-i*c*d-o*a*f+r*c*f+i*a*h-r*l*h)+m*(+t*l*h-t*c*f+o*s*f-i*s*h+i*c*u-o*l*u)+g*(+t*c*d-t*a*h-o*s*d+r*s*h+o*a*u-r*c*u)+p*(-i*a*u-t*l*d+t*a*f+i*s*d-r*s*f+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],m=e[13],g=e[14],p=e[15],x=d*g*c-m*f*c+m*l*h-a*g*h-d*l*p+a*f*p,v=_*f*c-u*g*c-_*l*h+s*g*h+u*l*p-s*f*p,b=u*m*c-_*d*c+_*a*h-s*m*h-u*a*p+s*d*p,E=_*d*l-u*m*l-_*a*f+s*m*f+u*a*g-s*d*g,R=t*x+r*v+i*b+o*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=x*A,e[1]=(m*f*o-d*g*o-m*i*h+r*g*h+d*i*p-r*f*p)*A,e[2]=(a*g*o-m*l*o+m*i*c-r*g*c-a*i*p+r*l*p)*A,e[3]=(d*l*o-a*f*o-d*i*c+r*f*c+a*i*h-r*l*h)*A,e[4]=v*A,e[5]=(u*g*o-_*f*o+_*i*h-t*g*h-u*i*p+t*f*p)*A,e[6]=(_*l*o-s*g*o-_*i*c+t*g*c+s*i*p-t*l*p)*A,e[7]=(s*f*o-u*l*o+u*i*c-t*f*c-s*i*h+t*l*h)*A,e[8]=b*A,e[9]=(_*d*o-u*m*o-_*r*h+t*m*h+u*r*p-t*d*p)*A,e[10]=(s*m*o-_*a*o+_*r*c-t*m*c-s*r*p+t*a*p)*A,e[11]=(u*a*o-s*d*o-u*r*c+t*d*c+s*r*h-t*a*h)*A,e[12]=E*A,e[13]=(u*m*i-_*d*i+_*r*f-t*m*f-u*r*g+t*d*g)*A,e[14]=(_*a*i-s*m*i-_*r*l+t*m*l+s*r*g-t*a*g)*A,e[15]=(s*d*i-u*a*i+u*r*l-t*d*l-s*r*f+t*a*f)*A,this}scale(e){const t=this.elements,r=e.x,i=e.y,o=e.z;return t[0]*=r,t[4]*=i,t[8]*=o,t[1]*=r,t[5]*=i,t[9]*=o,t[2]*=r,t[6]*=i,t[10]*=o,t[3]*=r,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),o=1-r,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*s,0,c*l-i*a,u*l+i*s,o*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,o,s){return this.set(1,r,o,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,h=o*u,_=o*d,m=s*u,g=s*d,p=a*d,x=l*c,v=l*u,b=l*d,E=r.x,R=r.y,A=r.z;return i[0]=(1-(m+p))*E,i[1]=(h+b)*E,i[2]=(_-v)*E,i[3]=0,i[4]=(h-b)*R,i[5]=(1-(f+p))*R,i[6]=(g+x)*R,i[7]=0,i[8]=(_+v)*A,i[9]=(g-x)*A,i[10]=(1-(f+m))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let o=Vo.set(i[0],i[1],i[2]).length();const s=Vo.set(i[4],i[5],i[6]).length(),a=Vo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],or.copy(this);const c=1/o,u=1/s,d=1/a;return or.elements[0]*=c,or.elements[1]*=c,or.elements[2]*=c,or.elements[4]*=u,or.elements[5]*=u,or.elements[6]*=u,or.elements[8]*=d,or.elements[9]*=d,or.elements[10]*=d,t.setFromRotationMatrix(or),r.x=o,r.y=s,r.z=a,this}makePerspective(e,t,r,i,o,s,a=ei){const l=this.elements,c=2*o/(t-e),u=2*o/(r-i),d=(t+e)/(t-e),f=(r+i)/(r-i);let h,_;if(a===ei)h=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===gc)h=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,i,o,s,a=ei){const l=this.elements,c=1/(t-e),u=1/(r-i),d=1/(s-o),f=(t+e)*c,h=(r+i)*u;let _,m;if(a===ei)_=(s+o)*d,m=-2*d;else if(a===gc)_=o*d,m=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Vo=new j,or=new Et,GM=new j(0,0,0),$M=new j(1,1,1),_i=new j,Cl=new j,Ln=new j,im=new Et,om=new Eo;class Lr{constructor(e=0,t=0,r=0,i=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,o=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WM=0;const sm=new j,Go=new Eo,Vr=new Et,El=new j,Ks=new j,jM=new j,XM=new Eo,am=new j(1,0,0),lm=new j(0,1,0),cm=new j(0,0,1),um={type:"added"},YM={type:"removed"},$o={type:"childadded",child:null},Cu={type:"childremoved",child:null};class Cn extends Po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new j,t=new Lr,r=new Eo,i=new j(1,1,1);function o(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new Xe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.multiply(Go),this}rotateOnWorldAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.premultiply(Go),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,t){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?El.copy(e):El.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vr.lookAt(Ks,El,this.up):Vr.lookAt(El,Ks,this.up),this.quaternion.setFromRotationMatrix(Vr),i&&(Vr.extractRotation(i.matrixWorld),Go.setFromRotationMatrix(Vr),this.quaternion.premultiply(Go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),$o.child=e,this.dispatchEvent($o),$o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YM),Cu.child=e,this.dispatchEvent(Cu),Cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),$o.child=e,this.dispatchEvent($o),$o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,jM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,XM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),h=s(e.animations),_=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),f.length>0&&(r.skeletons=f),h.length>0&&(r.animations=h),_.length>0&&(r.nodes=_)}return r.object=i,r;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Cn.DEFAULT_UP=new j(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sr=new j,Gr=new j,Eu=new j,$r=new j,Wo=new j,jo=new j,dm=new j,Tu=new j,Au=new j,Ru=new j,Pu=new _t,ku=new _t,Du=new _t;class fr{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),sr.subVectors(e,t),i.cross(sr);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,r,i,o){sr.subVectors(i,t),Gr.subVectors(r,t),Eu.subVectors(e,t);const s=sr.dot(sr),a=sr.dot(Gr),l=sr.dot(Eu),c=Gr.dot(Gr),u=Gr.dot(Eu),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,_=(s*u-a*l)*f;return o.set(1-h-_,_,h)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,$r)===null?!1:$r.x>=0&&$r.y>=0&&$r.x+$r.y<=1}static getInterpolation(e,t,r,i,o,s,a,l){return this.getBarycoord(e,t,r,i,$r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,$r.x),l.addScaledVector(s,$r.y),l.addScaledVector(a,$r.z),l)}static getInterpolatedAttribute(e,t,r,i,o,s){return Pu.setScalar(0),ku.setScalar(0),Du.setScalar(0),Pu.fromBufferAttribute(e,t),ku.fromBufferAttribute(e,r),Du.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Pu,o.x),s.addScaledVector(ku,o.y),s.addScaledVector(Du,o.z),s}static isFrontFacing(e,t,r,i){return sr.subVectors(r,t),Gr.subVectors(e,t),sr.cross(Gr).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),Gr.subVectors(this.a,this.b),sr.cross(Gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,i,o){return fr.getInterpolation(e,this.a,this.b,this.c,t,r,i,o)}containsPoint(e){return fr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,o=this.c;let s,a;Wo.subVectors(i,r),jo.subVectors(o,r),Tu.subVectors(e,r);const l=Wo.dot(Tu),c=jo.dot(Tu);if(l<=0&&c<=0)return t.copy(r);Au.subVectors(e,i);const u=Wo.dot(Au),d=jo.dot(Au);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(Wo,s);Ru.subVectors(e,o);const h=Wo.dot(Ru),_=jo.dot(Ru);if(_>=0&&h<=_)return t.copy(o);const m=h*c-l*_;if(m<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(r).addScaledVector(jo,a);const g=u*_-h*d;if(g<=0&&d-u>=0&&h-_>=0)return dm.subVectors(o,i),a=(d-u)/(d-u+(h-_)),t.copy(i).addScaledVector(dm,a);const p=1/(g+m+f);return s=m*p,a=f*p,t.copy(r).addScaledVector(Wo,s).addScaledVector(jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Lu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=r,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=ot.workingColorSpace){if(e=oh(e,1),t=Ze(t,0,1),r=Ze(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,s=2*r-o;this.r=Lu(s,o,e+1/3),this.g=Lu(s,o,e),this.b=Lu(s,o,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=On){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const r=X_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return ot.fromWorkingColorSpace(tn.copy(this),e),Math.round(Ze(tn.r*255,0,255))*65536+Math.round(Ze(tn.g*255,0,255))*256+Math.round(Ze(tn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(tn.copy(this),t);const r=tn.r,i=tn.g,o=tn.b,s=Math.max(r,i,o),a=Math.min(r,i,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case r:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-r)/d+2;break;case o:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=On){ot.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,r=tn.g,i=tn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Tl);const r=_a(bi.h,Tl.h,t),i=_a(bi.s,Tl.s,t),o=_a(bi.l,Tl.l,t);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*i,this.g=o[1]*t+o[4]*r+o[7]*i,this.b=o[2]*t+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new tt;tt.NAMES=X_;let qM=0;class ll extends Po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=bs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=yd,this.blendEquation=co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(r.blending=this.blending),this.side!==Ni&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vd&&(r.blendSrc=this.blendSrc),this.blendDst!==yd&&(r.blendDst=this.blendDst),this.blendEquation!==co&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Bo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Bo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=i(e.textures),s=i(e.images);o.length>0&&(r.textures=o),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ch extends ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new j,Al=new $e;class Pr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Zp,this.updateRanges=[],this.gpuType=Qr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ns(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=dn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),r=dn(r,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,o){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),r=dn(r,this.array),i=dn(i,this.array),o=dn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zp&&(e.usage=this.usage),e}}class Y_ extends Pr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class q_ extends Pr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Vn extends Pr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let KM=0;const qn=new Et,Iu=new Cn,Xo=new j,In=new al,Zs=new al,Xt=new j;class ui extends Po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($_(e)?q_:Y_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new Xe().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,r){return qn.makeTranslation(e,t,r),this.applyMatrix4(qn),this}scale(e,t,r){return qn.makeScale(e,t,r),this.applyMatrix4(qn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xo).negate(),this.translate(Xo.x,Xo.y,Xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let i=0,o=e.length;i<o;i++){const s=e[i];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(e.length,t.count);for(let i=0;i<r;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const o=t[r];In.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(In.min,Zs.min),In.expandByPoint(Xt),Xt.addVectors(In.max,Zs.max),In.expandByPoint(Xt)):(In.expandByPoint(Zs.min),In.expandByPoint(Zs.max))}In.getCenter(r);let i=0;for(let o=0,s=e.count;o<s;o++)Xt.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(Xt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(Xo.fromBufferAttribute(e,c),Xt.add(Xo)),i=Math.max(i,r.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pr(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<r.count;P++)a[P]=new j,l[P]=new j;const c=new j,u=new j,d=new j,f=new $e,h=new $e,_=new $e,m=new j,g=new j;function p(P,y,M){c.fromBufferAttribute(r,P),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,M),f.fromBufferAttribute(o,P),h.fromBufferAttribute(o,y),_.fromBufferAttribute(o,M),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const D=1/(h.x*_.y-_.x*h.y);isFinite(D)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(D),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(D),a[P].add(m),a[y].add(m),a[M].add(m),l[P].add(g),l[y].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,y=x.length;P<y;++P){const M=x[P],D=M.start,O=M.count;for(let U=D,Y=D+O;U<Y;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new j,b=new j,E=new j,R=new j;function A(P){E.fromBufferAttribute(i,P),R.copy(E);const y=a[P];v.copy(y),v.sub(E.multiplyScalar(E.dot(y))).normalize(),b.crossVectors(R,y);const D=b.dot(l[P])<0?-1:1;s.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,y=x.length;P<y;++P){const M=x[P],D=M.start,O=M.count;for(let U=D,Y=D+O;U<Y;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,h=r.count;f<h;f++)r.setXYZ(f,0,0,0);const i=new j,o=new j,s=new j,a=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),m=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),a.fromBufferAttribute(r,_),l.fromBufferAttribute(r,m),c.fromBufferAttribute(r,g),a.add(u),l.add(u),c.add(u),r.setXYZ(_,a.x,a.y,a.z),r.setXYZ(m,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?h=l[m]*a.data.stride+a.offset:h=l[m]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new Pr(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,r);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new Et,Qi=new ah,Rl=new sh,hm=new j,Pl=new j,kl=new j,Dl=new j,Ou=new j,Ll=new j,pm=new j,Il=new j;class Zn extends Cn{constructor(e=new ui,t=new ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){Ll.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Ou.fromBufferAttribute(d,e),s?Ll.addScaledVector(Ou,u):Ll.addScaledVector(Ou.sub(t),u))}t.add(Ll)}return t}raycast(e,t){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(o),Qi.copy(e.ray).recast(e.near),!(Rl.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Rl,hm)===null||Qi.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(fm.copy(o).invert(),Qi.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&Qi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,r){let i;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,m=f.length;_<m;_++){const g=f[_],p=s[g.materialIndex],x=Math.max(g.start,h.start),v=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let b=x,E=v;b<E;b+=3){const R=a.getX(b),A=a.getX(b+1),P=a.getX(b+2);i=Ol(this,p,e,r,c,u,d,R,A,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),m=Math.min(a.count,h.start+h.count);for(let g=_,p=m;g<p;g+=3){const x=a.getX(g),v=a.getX(g+1),b=a.getX(g+2);i=Ol(this,s,e,r,c,u,d,x,v,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,m=f.length;_<m;_++){const g=f[_],p=s[g.materialIndex],x=Math.max(g.start,h.start),v=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let b=x,E=v;b<E;b+=3){const R=b,A=b+1,P=b+2;i=Ol(this,p,e,r,c,u,d,R,A,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let g=_,p=m;g<p;g+=3){const x=g,v=g+1,b=g+2;i=Ol(this,s,e,r,c,u,d,x,v,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function ZM(n,e,t,r,i,o,s,a){let l;if(e.side===yn?l=r.intersectTriangle(s,o,i,!0,a):l=r.intersectTriangle(i,o,s,e.side===Ni,a),l===null)return null;Il.copy(a),Il.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Il);return c<t.near||c>t.far?null:{distance:c,point:Il.clone(),object:n}}function Ol(n,e,t,r,i,o,s,a,l,c){n.getVertexPosition(a,Pl),n.getVertexPosition(l,kl),n.getVertexPosition(c,Dl);const u=ZM(n,e,t,r,Pl,kl,Dl,pm);if(u){const d=new j;fr.getBarycoord(pm,Pl,kl,Dl,d),i&&(u.uv=fr.getInterpolatedAttribute(i,a,l,c,d,new $e)),o&&(u.uv1=fr.getInterpolatedAttribute(o,a,l,c,d,new $e)),s&&(u.normal=fr.getInterpolatedAttribute(s,a,l,c,d,new j),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new j,materialIndex:0};fr.getNormal(Pl,kl,Dl,f.normal),u.face=f,u.barycoord=d}return u}class cl extends ui{constructor(e=1,t=1,r=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:o,depthSegments:s};const a=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,r,t,e,s,o,0),_("z","y","x",1,-1,r,t,-e,s,o,1),_("x","z","y",1,1,e,r,t,i,s,2),_("x","z","y",1,-1,e,r,-t,i,s,3),_("x","y","z",1,-1,e,t,r,i,o,4),_("x","y","z",-1,-1,e,t,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(d,2));function _(m,g,p,x,v,b,E,R,A,P,y){const M=b/A,D=E/P,O=b/2,U=E/2,Y=R/2,J=A+1,V=P+1;let $=0,z=0;const he=new j;for(let pe=0;pe<V;pe++){const _e=pe*D-U;for(let Me=0;Me<J;Me++){const Fe=Me*M-O;he[m]=Fe*x,he[g]=_e*v,he[p]=Y,c.push(he.x,he.y,he.z),he[m]=0,he[g]=0,he[p]=R>0?1:-1,u.push(he.x,he.y,he.z),d.push(Me/A),d.push(1-pe/P),$+=1}}for(let pe=0;pe<P;pe++)for(let _e=0;_e<A;_e++){const Me=f+_e+J*pe,Fe=f+_e+J*(pe+1),Q=f+(_e+1)+J*(pe+1),fe=f+(_e+1)+J*pe;l.push(Me,Fe,fe),l.push(Fe,Q,fe),z+=6}a.addGroup(h,z,y),h+=z,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const r=Is(n[t]);for(const i in r)e[i]=r[i]}return e}function JM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function K_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const QM={clone:Is,merge:fn};var ew=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ew,this.fragmentShader=tw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=JM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Z_ extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new j,mm=new $e,gm=new $e;class Bn extends Z_{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,mm,gm),t.subVectors(gm,mm)}setViewOffset(e,t,r,i,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ga*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,o=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*i/l,t-=s.offsetY*r/c,i*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yo=-90,qo=1;class nw extends Cn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bn(Yo,qo,e,t);i.layers=this.layers,this.add(i);const o=new Bn(Yo,qo,e,t);o.layers=this.layers,this.add(o);const s=new Bn(Yo,qo,e,t);s.layers=this.layers,this.add(s);const a=new Bn(Yo,qo,e,t);a.layers=this.layers,this.add(a);const l=new Bn(Yo,qo,e,t);l.layers=this.layers,this.add(l);const c=new Bn(Yo,qo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===ei)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,o),e.setRenderTarget(r,1,i),e.render(t,s),e.setRenderTarget(r,2,i),e.render(t,a),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,c),r.texture.generateMipmaps=m,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class J_ extends xn{constructor(e,t,r,i,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,r,i,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rw extends Co{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new J_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Er}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new cl(5,5,5),o=new Fi({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:yn,blending:Di});o.uniforms.tEquirect.value=t;const s=new Zn(i,o),a=t.minFilter;return t.minFilter===ho&&(t.minFilter=Er),new nw(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(o)}}class iw extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Uu=new j,ow=new j,sw=new Xe;class Ci{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=Uu.subVectors(r,t).cross(ow.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Uu),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||sw.getNormalMatrix(e),i=this.coplanarPoint(Uu).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const eo=new sh,Ul=new j;class uh{constructor(e=new Ci,t=new Ci,r=new Ci,i=new Ci,o=new Ci,s=new Ci){this.planes=[e,t,r,i,o,s]}set(e,t,r,i,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(i),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ei){const r=this.planes,i=e.elements,o=i[0],s=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],_=i[9],m=i[10],g=i[11],p=i[12],x=i[13],v=i[14],b=i[15];if(r[0].setComponents(l-o,f-c,g-h,b-p).normalize(),r[1].setComponents(l+o,f+c,g+h,b+p).normalize(),r[2].setComponents(l+s,f+u,g+_,b+x).normalize(),r[3].setComponents(l-s,f-u,g-_,b-x).normalize(),r[4].setComponents(l-a,f-d,g-m,b-v).normalize(),t===ei)r[5].setComponents(l+a,f+d,g+m,b+v).normalize();else if(t===gc)r[5].setComponents(a,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),eo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),eo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(eo)}intersectsSprite(e){return eo.center.set(0,0,0),eo.radius=.7071067811865476,eo.applyMatrix4(e.matrixWorld),this.intersectsSphere(eo)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(Ul.x=i.normal.x>0?e.max.x:e.min.x,Ul.y=i.normal.y>0?e.max.y:e.min.y,Ul.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ss extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Q_ extends xn{constructor(e,t,r,i,o,s,a,l,c,u=vs){if(u!==vs&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===vs&&(r=wo),r===void 0&&u===Ds&&(r=ks),super(null,i,o,s,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mr,this.minFilter=l!==void 0?l:mr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $c extends ui{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const o=e/2,s=t/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,h=[],_=[],m=[],g=[];for(let p=0;p<u;p++){const x=p*f-s;for(let v=0;v<c;v++){const b=v*d-o;_.push(b,-x,0),m.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,b=x+c*(p+1),E=x+1+c*(p+1),R=x+1+c*p;h.push(v,b,R),h.push(b,E,R)}this.setIndex(h),this.setAttribute("position",new Vn(_,3)),this.setAttribute("normal",new Vn(m,3)),this.setAttribute("uv",new Vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.width,e.height,e.widthSegments,e.heightSegments)}}class dh extends ui{constructor(e=.5,t=1,r=32,i=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:i,thetaStart:o,thetaLength:s},r=Math.max(3,r),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let d=e;const f=(t-e)/i,h=new j,_=new $e;for(let m=0;m<=i;m++){for(let g=0;g<=r;g++){const p=o+g/r*s;h.x=d*Math.cos(p),h.y=d*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let m=0;m<i;m++){const g=m*(r+1);for(let p=0;p<r;p++){const x=p+g,v=x,b=x+r+1,E=x+r+2,R=x+1;a.push(v,b,R),a.push(b,E,R)}}this.setIndex(a),this.setAttribute("position",new Vn(l,3)),this.setAttribute("normal",new Vn(c,3)),this.setAttribute("uv",new Vn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _c extends ui{constructor(e=1,t=32,r=16,i=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+a,Math.PI);let c=0;const u=[],d=new j,f=new j,h=[],_=[],m=[],g=[];for(let p=0;p<=r;p++){const x=[],v=p/r;let b=0;p===0&&s===0?b=.5/t:p===r&&l===Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const R=E/t;d.x=-e*Math.cos(i+R*o)*Math.sin(s+v*a),d.y=e*Math.cos(s+v*a),d.z=e*Math.sin(i+R*o)*Math.sin(s+v*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),g.push(R+b,1-v),x.push(c++)}u.push(x)}for(let p=0;p<r;p++)for(let x=0;x<t;x++){const v=u[p][x+1],b=u[p][x],E=u[p+1][x],R=u[p+1][x+1];(p!==0||s>0)&&h.push(v,b,R),(p!==r-1||l<Math.PI)&&h.push(b,E,R)}this.setIndex(h),this.setAttribute("position",new Vn(_,3)),this.setAttribute("normal",new Vn(m,3)),this.setAttribute("uv",new Vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _m extends ll{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V_,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aw extends ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lw extends ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bm={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class cw{constructor(e,t,r){const i=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){a++,o===!1&&i.onStart!==void 0&&i.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],_=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null}}}const uw=new cw;class fh{constructor(e){this.manager=e!==void 0?e:uw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(i,o){r.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fh.DEFAULT_MATERIAL_NAME="__DEFAULT";class dw extends fh{constructor(e){super(e)}load(e,t,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=bm.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=Ba("img");function l(){u(),bm.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),i&&i(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class fw extends fh{constructor(e){super(e)}load(e,t,r,i){const o=new xn,s=new dw(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},r,i),o}}class eb extends Cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Bu=new Et,vm=new j,ym=new j;class hw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;vm.setFromMatrixPosition(e.matrixWorld),t.position.copy(vm),ym.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ym),t.updateMatrixWorld(),Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xm=new Et,Js=new j,Nu=new j;class pw extends hw{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,i=this.matrix,o=e.distance||r.far;o!==r.far&&(r.far=o,r.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),r.position.copy(Js),Nu.copy(r.position),Nu.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Nu),r.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),xm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xm)}}class mw extends eb{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new pw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gw extends Z_{constructor(e=-1,t=1,r=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,s=r+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _w extends eb{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bw extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Sm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sm(){return performance.now()}const Mm=new Et;class yw{constructor(e,t,r=0,i=1/0){this.ray=new ah(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mm),this}intersectObject(e,t=!0,r=[]){return rf(e,this,r,t),r.sort(wm),r}intersectObjects(e,t=!0,r=[]){for(let i=0,o=e.length;i<o;i++)rf(e[i],this,r,t);return r.sort(wm),r}}function wm(n,e){return n.distance-e.distance}function rf(n,e,t,r){let i=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(i=!1),i===!0&&r===!0){const o=n.children;for(let s=0,a=o.length;s<a;s++)rf(o[s],e,t,!0)}}class Cm{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xw extends Po{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Em(n,e,t,r){const i=Sw(r);switch(t){case O_:return n*e;case B_:return n*e;case N_:return n*e*2;case F_:return n*e/i.components*i.byteLength;case nh:return n*e/i.components*i.byteLength;case z_:return n*e*2/i.components*i.byteLength;case rh:return n*e*2/i.components*i.byteLength;case U_:return n*e*3/i.components*i.byteLength;case hr:return n*e*4/i.components*i.byteLength;case ih:return n*e*4/i.components*i.byteLength;case Zl:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ql:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kd:case Ld:return Math.max(n,16)*Math.max(e,8)/4;case Pd:case Dd:return Math.max(n,8)*Math.max(e,8)/2;case Id:case Od:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ud:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tc:case Zd:case Jd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case H_:case Qd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ef:case tf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sw(n){switch(n){case ii:case D_:return{byteLength:1,components:1};case Oa:case L_:case sl:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case wo:case Qf:case Qr:return{byteLength:4,components:1};case I_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tb(){let n=null,e=!1,t=null,r=null;function i(o,s){t(o,s),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Mw(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function r(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],m=d[h];m.start<=_.start+_.count+1?_.count=Math.max(_.count,m.start+m.count-_.start):(++f,d[f]=m)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const m=d[h];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:s}}var ww=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cw=`#ifdef USE_ALPHAHASH
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
#endif`,Ew=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Aw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pw=`#ifdef USE_AOMAP
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
#endif`,kw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dw=`#ifdef USE_BATCHING
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
#endif`,Lw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ow=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bw=`#ifdef USE_IRIDESCENCE
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
#endif`,Nw=`#ifdef USE_BUMPMAP
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
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xw=`#define PI 3.141592653589793
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
} // validated`,Yw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qw=`vec3 transformedNormal = objectNormal;
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
#endif`,Kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eC="gl_FragColor = linearToOutputTexel( gl_FragColor );",tC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nC=`#ifdef USE_ENVMAP
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
#endif`,rC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iC=`#ifdef USE_ENVMAP
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
#endif`,oC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sC=`#ifdef USE_ENVMAP
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
#endif`,aC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dC=`#ifdef USE_GRADIENTMAP
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
}`,fC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mC=`uniform bool receiveShadow;
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
#endif`,gC=`#ifdef USE_ENVMAP
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
#endif`,_C=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xC=`PhysicalMaterial material;
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
#endif`,SC=`struct PhysicalMaterial {
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
}`,MC=`
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
#endif`,wC=`#if defined( RE_IndirectDiffuse )
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
#endif`,CC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LC=`#if defined( USE_POINTS_UV )
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
#endif`,IC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FC=`#ifdef USE_MORPHTARGETS
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
#endif`,zC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$C=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jC=`#ifdef USE_NORMALMAP
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
#endif`,XC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lE=`float getShadowMask() {
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
}`,cE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,dE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,bE=`#ifdef USE_TRANSMISSION
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
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
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
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
}`,PE=`#if DEPTH_PACKING == 3200
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
}`,kE=`#define DISTANCE
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
}`,DE=`#define DISTANCE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`uniform float scale;
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
}`,UE=`uniform vec3 diffuse;
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
}`,BE=`#include <common>
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
}`,NE=`uniform vec3 diffuse;
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
}`,FE=`#define LAMBERT
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
}`,zE=`#define LAMBERT
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
}`,HE=`#define MATCAP
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
}`,VE=`#define MATCAP
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
}`,GE=`#define NORMAL
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
}`,$E=`#define NORMAL
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
}`,WE=`#define PHONG
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
}`,jE=`#define PHONG
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
}`,XE=`#define STANDARD
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
}`,YE=`#define STANDARD
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
}`,qE=`#define TOON
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
}`,KE=`#define TOON
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
}`,ZE=`uniform float size;
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
}`,JE=`uniform vec3 diffuse;
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
}`,QE=`#include <common>
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
}`,eT=`uniform vec3 color;
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
}`,tT=`uniform float rotation;
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
}`,nT=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:ww,alphahash_pars_fragment:Cw,alphamap_fragment:Ew,alphamap_pars_fragment:Tw,alphatest_fragment:Aw,alphatest_pars_fragment:Rw,aomap_fragment:Pw,aomap_pars_fragment:kw,batching_pars_vertex:Dw,batching_vertex:Lw,begin_vertex:Iw,beginnormal_vertex:Ow,bsdfs:Uw,iridescence_fragment:Bw,bumpmap_pars_fragment:Nw,clipping_planes_fragment:Fw,clipping_planes_pars_fragment:zw,clipping_planes_pars_vertex:Hw,clipping_planes_vertex:Vw,color_fragment:Gw,color_pars_fragment:$w,color_pars_vertex:Ww,color_vertex:jw,common:Xw,cube_uv_reflection_fragment:Yw,defaultnormal_vertex:qw,displacementmap_pars_vertex:Kw,displacementmap_vertex:Zw,emissivemap_fragment:Jw,emissivemap_pars_fragment:Qw,colorspace_fragment:eC,colorspace_pars_fragment:tC,envmap_fragment:nC,envmap_common_pars_fragment:rC,envmap_pars_fragment:iC,envmap_pars_vertex:oC,envmap_physical_pars_fragment:gC,envmap_vertex:sC,fog_vertex:aC,fog_pars_vertex:lC,fog_fragment:cC,fog_pars_fragment:uC,gradientmap_pars_fragment:dC,lightmap_pars_fragment:fC,lights_lambert_fragment:hC,lights_lambert_pars_fragment:pC,lights_pars_begin:mC,lights_toon_fragment:_C,lights_toon_pars_fragment:bC,lights_phong_fragment:vC,lights_phong_pars_fragment:yC,lights_physical_fragment:xC,lights_physical_pars_fragment:SC,lights_fragment_begin:MC,lights_fragment_maps:wC,lights_fragment_end:CC,logdepthbuf_fragment:EC,logdepthbuf_pars_fragment:TC,logdepthbuf_pars_vertex:AC,logdepthbuf_vertex:RC,map_fragment:PC,map_pars_fragment:kC,map_particle_fragment:DC,map_particle_pars_fragment:LC,metalnessmap_fragment:IC,metalnessmap_pars_fragment:OC,morphinstance_vertex:UC,morphcolor_vertex:BC,morphnormal_vertex:NC,morphtarget_pars_vertex:FC,morphtarget_vertex:zC,normal_fragment_begin:HC,normal_fragment_maps:VC,normal_pars_fragment:GC,normal_pars_vertex:$C,normal_vertex:WC,normalmap_pars_fragment:jC,clearcoat_normal_fragment_begin:XC,clearcoat_normal_fragment_maps:YC,clearcoat_pars_fragment:qC,iridescence_pars_fragment:KC,opaque_fragment:ZC,packing:JC,premultiplied_alpha_fragment:QC,project_vertex:eE,dithering_fragment:tE,dithering_pars_fragment:nE,roughnessmap_fragment:rE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:oE,shadowmap_pars_vertex:sE,shadowmap_vertex:aE,shadowmask_pars_fragment:lE,skinbase_vertex:cE,skinning_pars_vertex:uE,skinning_vertex:dE,skinnormal_vertex:fE,specularmap_fragment:hE,specularmap_pars_fragment:pE,tonemapping_fragment:mE,tonemapping_pars_fragment:gE,transmission_fragment:_E,transmission_pars_fragment:bE,uv_pars_fragment:vE,uv_pars_vertex:yE,uv_vertex:xE,worldpos_vertex:SE,background_vert:ME,background_frag:wE,backgroundCube_vert:CE,backgroundCube_frag:EE,cube_vert:TE,cube_frag:AE,depth_vert:RE,depth_frag:PE,distanceRGBA_vert:kE,distanceRGBA_frag:DE,equirect_vert:LE,equirect_frag:IE,linedashed_vert:OE,linedashed_frag:UE,meshbasic_vert:BE,meshbasic_frag:NE,meshlambert_vert:FE,meshlambert_frag:zE,meshmatcap_vert:HE,meshmatcap_frag:VE,meshnormal_vert:GE,meshnormal_frag:$E,meshphong_vert:WE,meshphong_frag:jE,meshphysical_vert:XE,meshphysical_frag:YE,meshtoon_vert:qE,meshtoon_frag:KE,points_vert:ZE,points_frag:JE,shadow_vert:QE,shadow_frag:eT,sprite_vert:tT,sprite_frag:nT},xe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Mr={basic:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:fn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:fn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:fn([xe.points,xe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:fn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:fn([xe.common,xe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:fn([xe.sprite,xe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:fn([xe.common,xe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:fn([xe.lights,xe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Mr.physical={uniforms:fn([Mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Bl={r:0,b:0,g:0},to=new Lr,rT=new Et;function iT(n,e,t,r,i,o,s){const a=new tt(0);let l=o===!0?0:1,c,u,d=null,f=0,h=null;function _(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function m(v){let b=!1;const E=_(v);E===null?p(a,l):E&&E.isColor&&(p(E,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,b){const E=_(b);E&&(E.isCubeTexture||E.mapping===Gc)?(u===void 0&&(u=new Zn(new cl(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Is(Mr.backgroundCube.uniforms),vertexShader:Mr.backgroundCube.vertexShader,fragmentShader:Mr.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),to.copy(b.backgroundRotation),to.x*=-1,to.y*=-1,to.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(to)),u.material.toneMapped=ot.getTransfer(E.colorSpace)!==ht,(d!==E||f!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Zn(new $c(2,2),new Fi({name:"BackgroundMaterial",uniforms:Is(Mr.background.uniforms),vertexShader:Mr.background.vertexShader,fragmentShader:Mr.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ot.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,b){v.getRGB(Bl,K_(n)),r.buffers.color.setClear(Bl.r,Bl.g,Bl.b,b,s)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:m,addToRenderList:g,dispose:x}}function oT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},i=f(null);let o=i,s=!1;function a(M,D,O,U,Y){let J=!1;const V=d(U,O,D);o!==V&&(o=V,c(o.object)),J=h(M,U,O,Y),J&&_(M,U,O,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,b(M,D,O,U),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,D,O){const U=O.wireframe===!0;let Y=r[M.id];Y===void 0&&(Y={},r[M.id]=Y);let J=Y[D.id];J===void 0&&(J={},Y[D.id]=J);let V=J[U];return V===void 0&&(V=f(l()),J[U]=V),V}function f(M){const D=[],O=[],U=[];for(let Y=0;Y<t;Y++)D[Y]=0,O[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:U,object:M,attributes:{},index:null}}function h(M,D,O,U){const Y=o.attributes,J=D.attributes;let V=0;const $=O.getAttributes();for(const z in $)if($[z].location>=0){const pe=Y[z];let _e=J[z];if(_e===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;V++}return o.attributesNum!==V||o.index!==U}function _(M,D,O,U){const Y={},J=D.attributes;let V=0;const $=O.getAttributes();for(const z in $)if($[z].location>=0){let pe=J[z];pe===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),Y[z]=_e,V++}o.attributes=Y,o.attributesNum=V,o.index=U}function m(){const M=o.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function g(M){p(M,0)}function p(M,D){const O=o.newAttributes,U=o.enabledAttributes,Y=o.attributeDivisors;O[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),Y[M]!==D&&(n.vertexAttribDivisor(M,D),Y[M]=D)}function x(){const M=o.newAttributes,D=o.enabledAttributes;for(let O=0,U=D.length;O<U;O++)D[O]!==M[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function v(M,D,O,U,Y,J,V){V===!0?n.vertexAttribIPointer(M,D,O,Y,J):n.vertexAttribPointer(M,D,O,U,Y,J)}function b(M,D,O,U){m();const Y=U.attributes,J=O.getAttributes(),V=D.defaultAttributeValues;for(const $ in J){const z=J[$];if(z.location>=0){let he=Y[$];if(he===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const pe=he.normalized,_e=he.itemSize,Me=e.get(he);if(Me===void 0)continue;const Fe=Me.buffer,Q=Me.type,fe=Me.bytesPerElement,ve=Q===n.INT||Q===n.UNSIGNED_INT||he.gpuType===Qf;if(he.isInterleavedBufferAttribute){const B=he.data,se=B.stride,oe=he.offset;if(B.isInstancedInterleavedBuffer){for(let de=0;de<z.locationSize;de++)p(z.location+de,B.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let de=0;de<z.locationSize;de++)g(z.location+de);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let de=0;de<z.locationSize;de++)v(z.location+de,_e/z.locationSize,Q,pe,se*fe,(oe+_e/z.locationSize*de)*fe,ve)}else{if(he.isInstancedBufferAttribute){for(let B=0;B<z.locationSize;B++)p(z.location+B,he.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let B=0;B<z.locationSize;B++)g(z.location+B);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let B=0;B<z.locationSize;B++)v(z.location+B,_e/z.locationSize,Q,pe,_e*fe,_e/z.locationSize*B*fe,ve)}}else if(V!==void 0){const pe=V[$];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(z.location,pe);break;case 3:n.vertexAttrib3fv(z.location,pe);break;case 4:n.vertexAttrib4fv(z.location,pe);break;default:n.vertexAttrib1fv(z.location,pe)}}}}x()}function E(){P();for(const M in r){const D=r[M];for(const O in D){const U=D[O];for(const Y in U)u(U[Y].object),delete U[Y];delete D[O]}delete r[M]}}function R(M){if(r[M.id]===void 0)return;const D=r[M.id];for(const O in D){const U=D[O];for(const Y in U)u(U[Y].object),delete U[Y];delete D[O]}delete r[M.id]}function A(M){for(const D in r){const O=r[D];if(O[M.id]===void 0)continue;const U=O[M.id];for(const Y in U)u(U[Y].object),delete U[Y];delete O[M.id]}}function P(){y(),s=!0,o!==i&&(o=i,c(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:g,disableUnusedAttributes:x}}function sT(n,e,t){let r;function i(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(r,c,u,d),t.update(u,r,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];t.update(h,r,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)s(c[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,d);let _=0;for(let m=0;m<d;m++)_+=u[m]*f[m];t.update(_,r,1)}}this.setMode=i,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aT(n,e,t,r){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){return!(A!==hr&&r.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===sl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ii&&r.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Qr&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:E,maxSamples:R}}function lT(n){const e=this;let t=null,r=0,i=!1,o=!1;const s=new Ci,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||r!==0||i;return i=f,r=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,m=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!i||_===null||_.length===0||o&&!g)o?u(null):c();else{const x=o?0:r,v=x*4;let b=p.clippingState||null;l.value=b,b=u(_,f,v,h);for(let E=0;E!==v;++E)b[E]=t[E];p.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,f,h,_){const m=d!==null?d.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const p=h+m*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,b=h;v!==m;++v,b+=4)s.copy(d[v]).applyMatrix4(x,a),s.normal.toArray(g,b),g[b+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function cT(n){let e=new WeakMap;function t(s,a){return a===pc?s.mapping=Rs:a===Ad&&(s.mapping=Ps),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===pc||a===Ad)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new rw(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}const as=4,Tm=[.125,.215,.35,.446,.526,.582],uo=20,Fu=new gw,Am=new tt;let zu=null,Hu=0,Vu=0,Gu=!1;const so=(1+Math.sqrt(5))/2,Ko=1/so,Rm=[new j(-so,Ko,0),new j(so,Ko,0),new j(-Ko,0,so),new j(Ko,0,so),new j(0,so,-Ko),new j(0,so,Ko),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){zu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Hu,Vu),this._renderer.xr.enabled=Gu,e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Er,minFilter:Er,generateMipmaps:!1,type:sl,format:hr,colorSpace:Ls,depthBuffer:!1},i=km(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,t,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uT(o)),this._blurMaterial=dT(o,e,t)}return i}_compileMaterial(e){const t=new Zn(this._lodPlanes[0],e);this._renderer.compile(t,Fu)}_sceneToCubeUV(e,t,r,i){const a=new Bn(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Am),u.toneMapping=Li,u.autoClear=!1;const h=new ch({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),_=new Zn(new cl,h);let m=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,m=!0):(h.color.copy(Am),m=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Nl(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===Rs||e.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const o=i?this._cubemapMaterial:this._equirectMaterial,s=new Zn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Nl(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Fu)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Rm[(i-o-1)%Rm.length];this._blur(e,o-1,o,s,a)}t.autoClear=r}_blur(e,t,r,i,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",o),this._halfBlur(s,e,r,r,i,"longitudinal",o)}_halfBlur(e,t,r,i,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Zn(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[r]-1,_=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*uo-1),m=o/_,g=isFinite(o)?1+Math.floor(u*m):uo;g>uo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${uo}`);const p=[];let x=0;for(let A=0;A<uo;++A){const P=A/m,y=Math.exp(-P*P/2);p.push(y),A===0?x+=y:A<g&&(x+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-r;const b=this._sizeLods[i],E=3*b*(i>v-as?i-v+as:0),R=4*(this._cubeSize-b);Nl(t,E,R,3*b,2*b),l.setRenderTarget(t),l.render(d,Fu)}}function uT(n){const e=[],t=[],r=[];let i=n;const o=n-as+1+Tm.length;for(let s=0;s<o;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>n-as?l=Tm[s-n+as-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,m=3,g=2,p=1,x=new Float32Array(m*_*h),v=new Float32Array(g*_*h),b=new Float32Array(p*_*h);for(let R=0;R<h;R++){const A=R%3*2/3-1,P=R>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(y,m*_*R),v.set(f,g*_*R);const M=[R,R,R,R,R,R];b.set(M,p*_*R)}const E=new ui;E.setAttribute("position",new Pr(x,m)),E.setAttribute("uv",new Pr(v,g)),E.setAttribute("faceIndex",new Pr(b,p)),e.push(E),i>as&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function km(n,e,t){const r=new Co(n,e,t);return r.texture.mapping=Gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nl(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function dT(n,e,t){const r=new Float32Array(uo),i=new j(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Dm(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Lm(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function hh(){return`

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
	`}function fT(n){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===pc||l===Ad,u=l===Rs||l===Ps;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Pm(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new Pm(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function hT(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const i=t(r);return i===null&&rs("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function pT(n,e,t,r){const i={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete i[f.id];const h=o.get(f);h&&(e.remove(h),o.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let m=0;if(h!==null){const x=h.array;m=h.version;for(let v=0,b=x.length;v<b;v+=3){const E=x[v+0],R=x[v+1],A=x[v+2];f.push(E,R,R,A,A,E)}}else if(_!==void 0){const x=_.array;m=_.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const E=v+0,R=v+1,A=v+2;f.push(E,R,R,A,A,E)}}else return;const g=new($_(f)?q_:Y_)(f,1);g.version=m;const p=o.get(d);p&&e.remove(p),o.set(d,g)}function u(d){const f=o.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function mT(n,e,t){let r;function i(f){r=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,h){n.drawElements(r,h,o,f*s),t.update(h,r,1)}function c(f,h,_){_!==0&&(n.drawElementsInstanced(r,h,o,f*s,_),t.update(h,r,_))}function u(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,o,f,0,_);let g=0;for(let p=0;p<_;p++)g+=h[p];t.update(g,r,1)}function d(f,h,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/s,h[p],m[p]);else{g.multiDrawElementsInstancedWEBGL(r,h,0,o,f,0,m,0,_);let p=0;for(let x=0;x<_;x++)p+=h[x]*m[x];t.update(p,r,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function gT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function _T(n,e,t){const r=new WeakMap,i=new _t;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=r.get(a);if(f===void 0||f.count!==d){let M=function(){P.dispose(),r.delete(a),a.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),m===!0&&(b=2),g===!0&&(b=3);let E=a.attributes.position.count*b,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*R*4*d),P=new j_(A,E,R,d);P.type=Qr,P.needsUpdate=!0;const y=b*4;for(let D=0;D<d;D++){const O=p[D],U=x[D],Y=v[D],J=E*R*4*D;for(let V=0;V<O.count;V++){const $=V*y;_===!0&&(i.fromBufferAttribute(O,V),A[J+$+0]=i.x,A[J+$+1]=i.y,A[J+$+2]=i.z,A[J+$+3]=0),m===!0&&(i.fromBufferAttribute(U,V),A[J+$+4]=i.x,A[J+$+5]=i.y,A[J+$+6]=i.z,A[J+$+7]=0),g===!0&&(i.fromBufferAttribute(Y,V),A[J+$+8]=i.x,A[J+$+9]=i.y,A[J+$+10]=i.z,A[J+$+11]=Y.itemSize===4?i.w:1)}}f={count:d,texture:P,size:new $e(E,R)},r.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const m=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function bT(n,e,t,r){let i=new WeakMap;function o(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const nb=new xn,Im=new Q_(1,1),rb=new j_,ib=new HM,ob=new J_,Om=[],Um=[],Bm=new Float32Array(16),Nm=new Float32Array(9),Fm=new Float32Array(4);function Vs(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let o=Om[i];if(o===void 0&&(o=new Float32Array(i),Om[i]=o),e!==0){r.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Wc(n,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function vT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function ST(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function MT(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,r))return;Fm.set(r),n.uniformMatrix2fv(this.addr,!1,Fm),jt(t,r)}}function wT(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,r))return;Nm.set(r),n.uniformMatrix3fv(this.addr,!1,Nm),jt(t,r)}}function CT(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,r))return;Bm.set(r),n.uniformMatrix4fv(this.addr,!1,Bm),jt(t,r)}}function ET(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function TT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function PT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function DT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function LT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function IT(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);let o;this.type===n.SAMPLER_2D_SHADOW?(Im.compareFunction=G_,o=Im):o=nb,t.setTexture2D(e||o,i)}function OT(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||ib,i)}function UT(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||ob,i)}function BT(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||rb,i)}function NT(n){switch(n){case 5126:return vT;case 35664:return yT;case 35665:return xT;case 35666:return ST;case 35674:return MT;case 35675:return wT;case 35676:return CT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return PT;case 36294:return kT;case 36295:return DT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return BT}}function FT(n,e){n.uniform1fv(this.addr,e)}function zT(n,e){const t=Vs(e,this.size,2);n.uniform2fv(this.addr,t)}function HT(n,e){const t=Vs(e,this.size,3);n.uniform3fv(this.addr,t)}function VT(n,e){const t=Vs(e,this.size,4);n.uniform4fv(this.addr,t)}function GT(n,e){const t=Vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $T(n,e){const t=Vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function WT(n,e){const t=Vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jT(n,e){n.uniform1iv(this.addr,e)}function XT(n,e){n.uniform2iv(this.addr,e)}function YT(n,e){n.uniform3iv(this.addr,e)}function qT(n,e){n.uniform4iv(this.addr,e)}function KT(n,e){n.uniform1uiv(this.addr,e)}function ZT(n,e){n.uniform2uiv(this.addr,e)}function JT(n,e){n.uniform3uiv(this.addr,e)}function QT(n,e){n.uniform4uiv(this.addr,e)}function e2(n,e,t){const r=this.cache,i=e.length,o=Wc(t,i);Wt(r,o)||(n.uniform1iv(this.addr,o),jt(r,o));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||nb,o[s])}function t2(n,e,t){const r=this.cache,i=e.length,o=Wc(t,i);Wt(r,o)||(n.uniform1iv(this.addr,o),jt(r,o));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||ib,o[s])}function n2(n,e,t){const r=this.cache,i=e.length,o=Wc(t,i);Wt(r,o)||(n.uniform1iv(this.addr,o),jt(r,o));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||ob,o[s])}function r2(n,e,t){const r=this.cache,i=e.length,o=Wc(t,i);Wt(r,o)||(n.uniform1iv(this.addr,o),jt(r,o));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||rb,o[s])}function i2(n){switch(n){case 5126:return FT;case 35664:return zT;case 35665:return HT;case 35666:return VT;case 35674:return GT;case 35675:return $T;case 35676:return WT;case 5124:case 35670:return jT;case 35667:case 35671:return XT;case 35668:case 35672:return YT;case 35669:case 35673:return qT;case 5125:return KT;case 36294:return ZT;case 36295:return JT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return r2}}class o2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=NT(t.type)}}class s2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i2(t.type)}}class a2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let o=0,s=i.length;o!==s;++o){const a=i[o];a.setValue(e,t[a.id],r)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function zm(n,e){n.seq.push(e),n.map[e.id]=e}function l2(n,e,t){const r=n.name,i=r.length;for($u.lastIndex=0;;){const o=$u.exec(r),s=$u.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){zm(t,c===void 0?new o2(a,n,e):new s2(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new a2(a),zm(t,d)),t=d}}}class nc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(t,i),s=e.getUniformLocation(t,o.name);l2(o,s,this)}}setValue(e,t,r,i){const o=this.map[t];o!==void 0&&o.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,o=e.length;i!==o;++i){const s=e[i];s.id in t&&r.push(s)}return r}}function Hm(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const c2=37297;let u2=0;function d2(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=i;s<o;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return r.join(`
`)}const Vm=new Xe;function f2(n){ot._getMatrix(Vm,ot.workingColorSpace,n);const e=`mat3( ${Vm.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case mc:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gm(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+d2(n.getShaderSource(e),s)}else return i}function h2(n,e){const t=f2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function p2(n,e){let t;switch(e){case JS:t="Linear";break;case QS:t="Reinhard";break;case eM:t="Cineon";break;case tM:t="ACESFilmic";break;case rM:t="AgX";break;case iM:t="Neutral";break;case nM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fl=new j;function m2(){ot.getLuminanceCoefficients(Fl);const n=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function _2(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function b2(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=n.getActiveAttrib(e,i),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function ra(n){return n!==""}function $m(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v2=/^[ \t]*#include +<([\w\d./]+)>/gm;function of(n){return n.replace(v2,x2)}const y2=new Map;function x2(n,e){let t=Ye[e];if(t===void 0){const r=y2.get(e);if(r!==void 0)t=Ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return of(t)}const S2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(n){return n.replace(S2,M2)}function M2(n,e,t,r){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Xm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function w2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jr&&(e="SHADOWMAP_TYPE_VSM"),e}function C2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function T2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case P_:e="ENVMAP_BLENDING_MULTIPLY";break;case KS:e="ENVMAP_BLENDING_MIX";break;case ZS:e="ENVMAP_BLENDING_ADD";break}return e}function A2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function R2(n,e,t,r){const i=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=w2(t),c=C2(t),u=E2(t),d=T2(t),f=A2(t),h=g2(t),_=_2(o),m=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ra).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(g=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Li?p2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,h2("linearToOutputTexel",t.outputColorSpace),m2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),s=of(s),s=$m(s,t),s=Wm(s,t),a=of(a),a=$m(a,t),a=Wm(a,t),s=jm(s),a=jm(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+s,b=x+p+a,E=Hm(i,i.VERTEX_SHADER,v),R=Hm(i,i.FRAGMENT_SHADER,b);i.attachShader(m,E),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function A(D){if(n.debug.checkShaderErrors){const O=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(E).trim(),Y=i.getShaderInfoLog(R).trim();let J=!0,V=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,E,R);else{const $=Gm(i,E,"vertex"),z=Gm(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+$+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||Y==="")&&(V=!1);V&&(D.diagnostics={runnable:J,programLog:O,vertexShader:{log:U,prefix:g},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(E),i.deleteShader(R),P=new nc(i,m),y=b2(i,m)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(m,c2)),M},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=R,this}let P2=0;class k2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new D2(e),t.set(e,r)),r}}class D2{constructor(e){this.id=P2++,this.code=e,this.usedTimes=0}}function L2(n,e,t,r,i,o,s){const a=new lh,l=new k2,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,M,D,O,U){const Y=O.fog,J=U.geometry,V=y.isMeshStandardMaterial?O.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),z=$&&$.mapping===Gc?$.image.height:null,he=_[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_e=pe!==void 0?pe.length:0;let Me=0;J.morphAttributes.position!==void 0&&(Me=1),J.morphAttributes.normal!==void 0&&(Me=2),J.morphAttributes.color!==void 0&&(Me=3);let Fe,Q,fe,ve;if(he){const ft=Mr[he];Fe=ft.vertexShader,Q=ft.fragmentShader}else Fe=y.vertexShader,Q=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);const B=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),oe=U.isInstancedMesh===!0,de=U.isBatchedMesh===!0,ke=!!y.map,k=!!y.matcap,L=!!$,w=!!y.aoMap,re=!!y.lightMap,K=!!y.bumpMap,q=!!y.normalMap,ne=!!y.displacementMap,ce=!!y.emissiveMap,te=!!y.metalnessMap,C=!!y.roughnessMap,S=y.anisotropy>0,I=y.clearcoat>0,X=y.dispersion>0,N=y.iridescence>0,G=y.sheen>0,ae=y.transmission>0,le=S&&!!y.anisotropyMap,be=I&&!!y.clearcoatMap,Oe=I&&!!y.clearcoatNormalMap,me=I&&!!y.clearcoatRoughnessMap,Se=N&&!!y.iridescenceMap,De=N&&!!y.iridescenceThicknessMap,Be=G&&!!y.sheenColorMap,ye=G&&!!y.sheenRoughnessMap,ze=!!y.specularMap,We=!!y.specularColorMap,yt=!!y.specularIntensityMap,F=ae&&!!y.transmissionMap,we=ae&&!!y.thicknessMap,ie=!!y.gradientMap,ue=!!y.alphaMap,Te=y.alphaTest>0,Ee=!!y.alphaHash,je=!!y.extensions;let Dt=Li;y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const Qt={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:Fe,fragmentShader:Q,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:de,batchingColor:de&&U._colorsTexture!==null,instancing:oe,instancingColor:oe&&U.instanceColor!==null,instancingMorph:oe&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ls,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:k,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:z,aoMap:w,lightMap:re,bumpMap:K,normalMap:q,displacementMap:f&&ne,emissiveMap:ce,normalMapObjectSpace:q&&y.normalMapType===lM,normalMapTangentSpace:q&&y.normalMapType===V_,metalnessMap:te,roughnessMap:C,anisotropy:S,anisotropyMap:le,clearcoat:I,clearcoatMap:be,clearcoatNormalMap:Oe,clearcoatRoughnessMap:me,dispersion:X,iridescence:N,iridescenceMap:Se,iridescenceThicknessMap:De,sheen:G,sheenColorMap:Be,sheenRoughnessMap:ye,specularMap:ze,specularColorMap:We,specularIntensityMap:yt,transmission:ae,transmissionMap:F,thicknessMap:we,gradientMap:ie,opaque:y.transparent===!1&&y.blending===bs&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Te,alphaHash:Ee,combine:y.combine,mapUv:ke&&m(y.map.channel),aoMapUv:w&&m(y.aoMap.channel),lightMapUv:re&&m(y.lightMap.channel),bumpMapUv:K&&m(y.bumpMap.channel),normalMapUv:q&&m(y.normalMap.channel),displacementMapUv:ne&&m(y.displacementMap.channel),emissiveMapUv:ce&&m(y.emissiveMap.channel),metalnessMapUv:te&&m(y.metalnessMap.channel),roughnessMapUv:C&&m(y.roughnessMap.channel),anisotropyMapUv:le&&m(y.anisotropyMap.channel),clearcoatMapUv:be&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(y.sheenRoughnessMap.channel),specularMapUv:ze&&m(y.specularMap.channel),specularColorMapUv:We&&m(y.specularColorMap.channel),specularIntensityMapUv:yt&&m(y.specularIntensityMap.channel),transmissionMapUv:F&&m(y.transmissionMap.channel),thicknessMapUv:we&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(q||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!J.attributes.uv&&(ke||ue),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:se,skinning:U.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===ht,decodeVideoTextureEmissive:ce&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wr,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:je&&y.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&y.extensions.multiDraw===!0||de)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(x(M,y),v(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function x(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function b(y){const M=_[y.type];let D;if(M){const O=Mr[M];D=QM.clone(O.uniforms)}else D=y.uniforms;return D}function E(y,M){let D;for(let O=0,U=u.length;O<U;O++){const Y=u[O];if(Y.cacheKey===M){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new R2(n,M,y,o),u.push(D)),D}function R(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:E,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:P}}function I2(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function r(s){n.delete(s)}function i(s,a,l){n.get(s)[a]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:i,dispose:o}}function O2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ym(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qm(){const n=[];let e=0;const t=[],r=[],i=[];function o(){e=0,t.length=0,r.length=0,i.length=0}function s(d,f,h,_,m,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=m,p.group=g),e++,p}function a(d,f,h,_,m,g){const p=s(d,f,h,_,m,g);h.transmission>0?r.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(d,f,h,_,m,g){const p=s(d,f,h,_,m,g);h.transmission>0?r.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||O2),r.length>1&&r.sort(f||Ym),i.length>1&&i.sort(f||Ym)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:r,transparent:i,init:o,push:a,unshift:l,finish:u,sort:c}}function U2(){let n=new WeakMap;function e(r,i){const o=n.get(r);let s;return o===void 0?(s=new qm,n.set(r,[s])):i>=o.length?(s=new qm,o.push(s)):s=o[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function B2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new tt};break;case"SpotLight":t={position:new j,direction:new j,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function N2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let F2=0;function z2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function H2(n){const e=new B2,t=N2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new j);const i=new j,o=new Et,s=new Et;function a(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)r.probe[y].set(0,0,0);let h=0,_=0,m=0,g=0,p=0,x=0,v=0,b=0,E=0,R=0,A=0;c.sort(z2);for(let y=0,M=c.length;y<M;y++){const D=c[y],O=D.color,U=D.intensity,Y=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*U,d+=O.g*U,f+=O.b*U;else if(D.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(D.sh.coefficients[V],U);A++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,z=t.get(D);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,r.directionalShadow[h]=z,r.directionalShadowMap[h]=J,r.directionalShadowMatrix[h]=D.shadow.matrix,x++}r.directional[h]=V,h++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(O).multiplyScalar(U),V.distance=Y,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,r.spot[m]=V;const $=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,$.updateMatrices(D),D.castShadow&&R++),r.spotLightMatrix[m]=$.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,r.spotShadow[m]=z,r.spotShadowMap[m]=J,b++}m++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(O).multiplyScalar(U),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=V,g++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const $=D.shadow,z=t.get(D);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,z.shadowCameraNear=$.camera.near,z.shadowCameraFar=$.camera.far,r.pointShadow[_]=z,r.pointShadowMap[_]=J,r.pointShadowMatrix[_]=D.shadow.matrix,v++}r.point[_]=V,_++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(U),V.groundColor.copy(D.groundColor).multiplyScalar(U),r.hemi[p]=V,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=f;const P=r.hash;(P.directionalLength!==h||P.pointLength!==_||P.spotLength!==m||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==b||P.numSpotMaps!==E||P.numLightProbes!==A)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=g,r.point.length=_,r.hemi.length=p,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=b+E-R,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=A,P.directionalLength=h,P.pointLength=_,P.spotLength=m,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=b,P.numSpotMaps=E,P.numLightProbes=A,r.version=F2++)}function l(c,u){let d=0,f=0,h=0,_=0,m=0;const g=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(v.isSpotLight){const b=r.spot[h];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),h++}else if(v.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),s.identity(),o.copy(v.matrixWorld),o.premultiply(g),s.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),_++}else if(v.isPointLight){const b=r.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:r}}function Km(n){const e=new H2(n),t=[],r=[];function i(u){c.camera=u,t.length=0,r.length=0}function o(u){t.push(u)}function s(u){r.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function V2(n){let e=new WeakMap;function t(i,o=0){const s=e.get(i);let a;return s===void 0?(a=new Km(n),e.set(i,[a])):o>=s.length?(a=new Km(n),s.push(a)):a=s[o],a}function r(){e=new WeakMap}return{get:t,dispose:r}}const G2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$2=`uniform sampler2D shadow_pass;
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
}`;function W2(n,e,t){let r=new uh;const i=new $e,o=new $e,s=new _t,a=new aw({depthPacking:aM}),l=new lw,c={},u=t.maxTextureSize,d={[Ni]:yn,[yn]:Ni,[wr]:wr},f=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:G2,fragmentShader:$2}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new ui;_.setAttribute("position",new Pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Zn(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R_;let p=this.type;this.render=function(R,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Di),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==jr&&this.type===jr,Y=p===jr&&this.type!==jr;for(let J=0,V=R.length;J<V;J++){const $=R[J],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const he=z.getFrameExtents();if(i.multiply(he),o.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/he.x),i.x=o.x*he.x,z.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/he.y),i.y=o.y*he.y,z.mapSize.y=o.y)),z.map===null||U===!0||Y===!0){const _e=this.type!==jr?{minFilter:mr,magFilter:mr}:{};z.map!==null&&z.map.dispose(),z.map=new Co(i.x,i.y,_e),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const pe=z.getViewportCount();for(let _e=0;_e<pe;_e++){const Me=z.getViewport(_e);s.set(o.x*Me.x,o.y*Me.y,o.x*Me.z,o.y*Me.w),O.viewport(s),z.updateMatrices($,_e),r=z.getFrustum(),b(A,P,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===jr&&x(z,P),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(y,M,D)};function x(R,A){const P=e.update(m);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Co(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,P,f,m,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,P,h,m,null)}function v(R,A,P,y){let M=null;const D=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=M.uuid,U=A.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let J=Y[U];J===void 0&&(J=M.clone(),Y[U]=J,A.addEventListener("dispose",E)),M=J}if(M.visible=A.visible,M.wireframe=A.wireframe,y===jr?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=P}return M}function b(R,A,P,y,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===jr)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const U=e.update(R),Y=R.material;if(Array.isArray(Y)){const J=U.groups;for(let V=0,$=J.length;V<$;V++){const z=J[V],he=Y[z.materialIndex];if(he&&he.visible){const pe=v(R,he,y,M);R.onBeforeShadow(n,R,A,P,U,pe,z),n.renderBufferDirect(P,null,U,pe,R,z),R.onAfterShadow(n,R,A,P,U,pe,z)}}}else if(Y.visible){const J=v(R,Y,y,M);R.onBeforeShadow(n,R,A,P,U,J,null),n.renderBufferDirect(P,null,U,J,R,null),R.onAfterShadow(n,R,A,P,U,J,null)}}const O=R.children;for(let U=0,Y=O.length;U<Y;U++)b(O[U],A,P,y,M)}function E(R){R.target.removeEventListener("dispose",E);for(const P in c){const y=c[P],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const j2={[xd]:Sd,[Md]:Ed,[wd]:Td,[As]:Cd,[Sd]:xd,[Ed]:Md,[Td]:wd,[Cd]:As};function X2(n,e){function t(){let F=!1;const we=new _t;let ie=null;const ue=new _t(0,0,0,0);return{setMask:function(Te){ie!==Te&&!F&&(n.colorMask(Te,Te,Te,Te),ie=Te)},setLocked:function(Te){F=Te},setClear:function(Te,Ee,je,Dt,Qt){Qt===!0&&(Te*=Dt,Ee*=Dt,je*=Dt),we.set(Te,Ee,je,Dt),ue.equals(we)===!1&&(n.clearColor(Te,Ee,je,Dt),ue.copy(we))},reset:function(){F=!1,ie=null,ue.set(-1,0,0,0)}}}function r(){let F=!1,we=!1,ie=null,ue=null,Te=null;return{setReversed:function(Ee){if(we!==Ee){const je=e.get("EXT_clip_control");we?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Te;Te=null,this.setClear(Dt)}we=Ee},getReversed:function(){return we},setTest:function(Ee){Ee?B(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(Ee){ie!==Ee&&!F&&(n.depthMask(Ee),ie=Ee)},setFunc:function(Ee){if(we&&(Ee=j2[Ee]),ue!==Ee){switch(Ee){case xd:n.depthFunc(n.NEVER);break;case Sd:n.depthFunc(n.ALWAYS);break;case Md:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case wd:n.depthFunc(n.EQUAL);break;case Cd:n.depthFunc(n.GEQUAL);break;case Ed:n.depthFunc(n.GREATER);break;case Td:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ee}},setLocked:function(Ee){F=Ee},setClear:function(Ee){Te!==Ee&&(we&&(Ee=1-Ee),n.clearDepth(Ee),Te=Ee)},reset:function(){F=!1,ie=null,ue=null,Te=null,we=!1}}}function i(){let F=!1,we=null,ie=null,ue=null,Te=null,Ee=null,je=null,Dt=null,Qt=null;return{setTest:function(ft){F||(ft?B(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(ft){we!==ft&&!F&&(n.stencilMask(ft),we=ft)},setFunc:function(ft,nr,Ur){(ie!==ft||ue!==nr||Te!==Ur)&&(n.stencilFunc(ft,nr,Ur),ie=ft,ue=nr,Te=Ur)},setOp:function(ft,nr,Ur){(Ee!==ft||je!==nr||Dt!==Ur)&&(n.stencilOp(ft,nr,Ur),Ee=ft,je=nr,Dt=Ur)},setLocked:function(ft){F=ft},setClear:function(ft){Qt!==ft&&(n.clearStencil(ft),Qt=ft)},reset:function(){F=!1,we=null,ie=null,ue=null,Te=null,Ee=null,je=null,Dt=null,Qt=null}}}const o=new t,s=new r,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],_=null,m=!1,g=null,p=null,x=null,v=null,b=null,E=null,R=null,A=new tt(0,0,0),P=0,y=!1,M=null,D=null,O=null,U=null,Y=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=$>=2);let he=null,pe={};const _e=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),Fe=new _t().fromArray(_e),Q=new _t().fromArray(Me);function fe(F,we,ie,ue){const Te=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(F,Ee),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<ie;je++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(we+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Ee}const ve={};ve[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),B(n.DEPTH_TEST),s.setFunc(As),K(!1),q(jp),B(n.CULL_FACE),w(Di);function B(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function se(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function oe(F,we){return d[F]!==we?(n.bindFramebuffer(F,we),d[F]=we,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=we),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=we),!0):!1}function de(F,we){let ie=h,ue=!1;if(F){ie=f.get(we),ie===void 0&&(ie=[],f.set(we,ie));const Te=F.textures;if(ie.length!==Te.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,je=Te.length;Ee<je;Ee++)ie[Ee]=n.COLOR_ATTACHMENT0+Ee;ie.length=Te.length,ue=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ie)}function ke(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const k={[co]:n.FUNC_ADD,[LS]:n.FUNC_SUBTRACT,[IS]:n.FUNC_REVERSE_SUBTRACT};k[OS]=n.MIN,k[US]=n.MAX;const L={[BS]:n.ZERO,[NS]:n.ONE,[FS]:n.SRC_COLOR,[vd]:n.SRC_ALPHA,[WS]:n.SRC_ALPHA_SATURATE,[GS]:n.DST_COLOR,[HS]:n.DST_ALPHA,[zS]:n.ONE_MINUS_SRC_COLOR,[yd]:n.ONE_MINUS_SRC_ALPHA,[$S]:n.ONE_MINUS_DST_COLOR,[VS]:n.ONE_MINUS_DST_ALPHA,[jS]:n.CONSTANT_COLOR,[XS]:n.ONE_MINUS_CONSTANT_COLOR,[YS]:n.CONSTANT_ALPHA,[qS]:n.ONE_MINUS_CONSTANT_ALPHA};function w(F,we,ie,ue,Te,Ee,je,Dt,Qt,ft){if(F===Di){m===!0&&(se(n.BLEND),m=!1);return}if(m===!1&&(B(n.BLEND),m=!0),F!==DS){if(F!==g||ft!==y){if((p!==co||b!==co)&&(n.blendEquation(n.FUNC_ADD),p=co,b=co),ft)switch(F){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xp:n.blendFunc(n.ONE,n.ONE);break;case Yp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,v=null,E=null,R=null,A.set(0,0,0),P=0,g=F,y=ft}return}Te=Te||we,Ee=Ee||ie,je=je||ue,(we!==p||Te!==b)&&(n.blendEquationSeparate(k[we],k[Te]),p=we,b=Te),(ie!==x||ue!==v||Ee!==E||je!==R)&&(n.blendFuncSeparate(L[ie],L[ue],L[Ee],L[je]),x=ie,v=ue,E=Ee,R=je),(Dt.equals(A)===!1||Qt!==P)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Qt),A.copy(Dt),P=Qt),g=F,y=!1}function re(F,we){F.side===wr?se(n.CULL_FACE):B(n.CULL_FACE);let ie=F.side===yn;we&&(ie=!ie),K(ie),F.blending===bs&&F.transparent===!1?w(Di):w(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),o.setMask(F.colorWrite);const ue=F.stencilWrite;a.setTest(ue),ue&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function q(F){F!==RS?(B(n.CULL_FACE),F!==D&&(F===jp?n.cullFace(n.BACK):F===PS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),D=F}function ne(F){F!==O&&(V&&n.lineWidth(F),O=F)}function ce(F,we,ie){F?(B(n.POLYGON_OFFSET_FILL),(U!==we||Y!==ie)&&(n.polygonOffset(we,ie),U=we,Y=ie)):se(n.POLYGON_OFFSET_FILL)}function te(F){F?B(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function C(F){F===void 0&&(F=n.TEXTURE0+J-1),he!==F&&(n.activeTexture(F),he=F)}function S(F,we,ie){ie===void 0&&(he===null?ie=n.TEXTURE0+J-1:ie=he);let ue=pe[ie];ue===void 0&&(ue={type:void 0,texture:void 0},pe[ie]=ue),(ue.type!==F||ue.texture!==we)&&(he!==ie&&(n.activeTexture(ie),he=ie),n.bindTexture(F,we||ve[F]),ue.type=F,ue.texture=we)}function I(){const F=pe[he];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(F){Fe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Fe.copy(F))}function ye(F){Q.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Q.copy(F))}function ze(F,we){let ie=c.get(we);ie===void 0&&(ie=new WeakMap,c.set(we,ie));let ue=ie.get(F);ue===void 0&&(ue=n.getUniformBlockIndex(we,F.name),ie.set(F,ue))}function We(F,we){const ue=c.get(we).get(F);l.get(we)!==ue&&(n.uniformBlockBinding(we,ue,F.__bindingPointIndex),l.set(we,ue))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,pe={},d={},f=new WeakMap,h=[],_=null,m=!1,g=null,p=null,x=null,v=null,b=null,E=null,R=null,A=new tt(0,0,0),P=0,y=!1,M=null,D=null,O=null,U=null,Y=null,Fe.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:B,disable:se,bindFramebuffer:oe,drawBuffers:de,useProgram:ke,setBlending:w,setMaterial:re,setFlipSided:K,setCullFace:q,setLineWidth:ne,setPolygonOffset:ce,setScissorTest:te,activeTexture:C,bindTexture:S,unbindTexture:I,compressedTexImage2D:X,compressedTexImage3D:N,texImage2D:Se,texImage3D:De,updateUBOMapping:ze,uniformBlockBinding:We,texStorage2D:Oe,texStorage3D:me,texSubImage2D:G,texSubImage3D:ae,compressedTexSubImage2D:le,compressedTexSubImage3D:be,scissor:Be,viewport:ye,reset:yt}}function Y2(n,e,t,r,i,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return h?new OffscreenCanvas(C,S):Ba("canvas")}function m(C,S,I){let X=1;const N=te(C);if((N.width>I||N.height>I)&&(X=I/Math.max(N.width,N.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const G=Math.floor(X*N.width),ae=Math.floor(X*N.height);d===void 0&&(d=_(G,ae));const le=S?_(G,ae):d;return le.width=G,le.height=ae,le.getContext("2d").drawImage(C,0,0,G,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+G+"x"+ae+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,S,I,X,N=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let G=S;if(S===n.RED&&(I===n.FLOAT&&(G=n.R32F),I===n.HALF_FLOAT&&(G=n.R16F),I===n.UNSIGNED_BYTE&&(G=n.R8)),S===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.R8UI),I===n.UNSIGNED_SHORT&&(G=n.R16UI),I===n.UNSIGNED_INT&&(G=n.R32UI),I===n.BYTE&&(G=n.R8I),I===n.SHORT&&(G=n.R16I),I===n.INT&&(G=n.R32I)),S===n.RG&&(I===n.FLOAT&&(G=n.RG32F),I===n.HALF_FLOAT&&(G=n.RG16F),I===n.UNSIGNED_BYTE&&(G=n.RG8)),S===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RG8UI),I===n.UNSIGNED_SHORT&&(G=n.RG16UI),I===n.UNSIGNED_INT&&(G=n.RG32UI),I===n.BYTE&&(G=n.RG8I),I===n.SHORT&&(G=n.RG16I),I===n.INT&&(G=n.RG32I)),S===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RGB8UI),I===n.UNSIGNED_SHORT&&(G=n.RGB16UI),I===n.UNSIGNED_INT&&(G=n.RGB32UI),I===n.BYTE&&(G=n.RGB8I),I===n.SHORT&&(G=n.RGB16I),I===n.INT&&(G=n.RGB32I)),S===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),I===n.UNSIGNED_INT&&(G=n.RGBA32UI),I===n.BYTE&&(G=n.RGBA8I),I===n.SHORT&&(G=n.RGBA16I),I===n.INT&&(G=n.RGBA32I)),S===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),S===n.RGBA){const ae=N?mc:ot.getTransfer(X);I===n.FLOAT&&(G=n.RGBA32F),I===n.HALF_FLOAT&&(G=n.RGBA16F),I===n.UNSIGNED_BYTE&&(G=ae===ht?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function b(C,S){let I;return C?S===null||S===wo||S===ks?I=n.DEPTH24_STENCIL8:S===Qr?I=n.DEPTH32F_STENCIL8:S===Oa&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wo||S===ks?I=n.DEPTH_COMPONENT24:S===Qr?I=n.DEPTH_COMPONENT32F:S===Oa&&(I=n.DEPTH_COMPONENT16),I}function E(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==mr&&C.minFilter!==Er?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),P(S),S.isVideoTexture&&u.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),M(S)}function P(C){const S=r.get(C);if(S.__webglInit===void 0)return;const I=C.source,X=f.get(I);if(X){const N=X[S.__cacheKey];N.usedTimes--,N.usedTimes===0&&y(C),Object.keys(X).length===0&&f.delete(I)}r.remove(C)}function y(C){const S=r.get(C);n.deleteTexture(S.__webglTexture);const I=C.source,X=f.get(I);delete X[S.__cacheKey],s.memory.textures--}function M(C){const S=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let N=0;N<S.__webglFramebuffer[X].length;N++)n.deleteFramebuffer(S.__webglFramebuffer[X][N]);else n.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)n.deleteFramebuffer(S.__webglFramebuffer[X]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=C.textures;for(let X=0,N=I.length;X<N;X++){const G=r.get(I[X]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),s.memory.textures--),r.remove(I[X])}r.remove(C)}let D=0;function O(){D=0}function U(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function Y(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function J(C,S){const I=r.get(C);if(C.isVideoTexture&&ne(C),C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){const X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(I,C,S);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+S)}function V(C,S){const I=r.get(C);if(C.version>0&&I.__version!==C.version){Q(I,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+S)}function $(C,S){const I=r.get(C);if(C.version>0&&I.__version!==C.version){Q(I,C,S);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+S)}function z(C,S){const I=r.get(C);if(C.version>0&&I.__version!==C.version){fe(I,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+S)}const he={[Ia]:n.REPEAT,[fo]:n.CLAMP_TO_EDGE,[Rd]:n.MIRRORED_REPEAT},pe={[mr]:n.NEAREST,[oM]:n.NEAREST_MIPMAP_NEAREST,[vl]:n.NEAREST_MIPMAP_LINEAR,[Er]:n.LINEAR,[gu]:n.LINEAR_MIPMAP_NEAREST,[ho]:n.LINEAR_MIPMAP_LINEAR},_e={[cM]:n.NEVER,[mM]:n.ALWAYS,[uM]:n.LESS,[G_]:n.LEQUAL,[dM]:n.EQUAL,[pM]:n.GEQUAL,[fM]:n.GREATER,[hM]:n.NOTEQUAL};function Me(C,S){if(S.type===Qr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Er||S.magFilter===gu||S.magFilter===vl||S.magFilter===ho||S.minFilter===Er||S.minFilter===gu||S.minFilter===vl||S.minFilter===ho)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,he[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,he[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,he[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,pe[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===mr||S.minFilter!==vl&&S.minFilter!==ho||S.type===Qr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function Fe(C,S){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const X=S.source;let N=f.get(X);N===void 0&&(N={},f.set(X,N));const G=Y(S);if(G!==C.__cacheKey){N[G]===void 0&&(N[G]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,I=!0),N[G].usedTimes++;const ae=N[C.__cacheKey];ae!==void 0&&(N[C.__cacheKey].usedTimes--,ae.usedTimes===0&&y(S)),C.__cacheKey=G,C.__webglTexture=N[G].texture}return I}function Q(C,S,I){let X=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=n.TEXTURE_3D);const N=Fe(C,S),G=S.source;t.bindTexture(X,C.__webglTexture,n.TEXTURE0+I);const ae=r.get(G);if(G.version!==ae.__version||N===!0){t.activeTexture(n.TEXTURE0+I);const le=ot.getPrimaries(ot.workingColorSpace),be=S.colorSpace===Ei?null:ot.getPrimaries(S.colorSpace),Oe=S.colorSpace===Ei||le===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let me=m(S.image,!1,i.maxTextureSize);me=ce(S,me);const Se=o.convert(S.format,S.colorSpace),De=o.convert(S.type);let Be=v(S.internalFormat,Se,De,S.colorSpace,S.isVideoTexture);Me(X,S);let ye;const ze=S.mipmaps,We=S.isVideoTexture!==!0,yt=ae.__version===void 0||N===!0,F=G.dataReady,we=E(S,me);if(S.isDepthTexture)Be=b(S.format===Ds,S.type),yt&&(We?t.texStorage2D(n.TEXTURE_2D,1,Be,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Be,me.width,me.height,0,Se,De,null));else if(S.isDataTexture)if(ze.length>0){We&&yt&&t.texStorage2D(n.TEXTURE_2D,we,Be,ze[0].width,ze[0].height);for(let ie=0,ue=ze.length;ie<ue;ie++)ye=ze[ie],We?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,Se,De,ye.data):t.texImage2D(n.TEXTURE_2D,ie,Be,ye.width,ye.height,0,Se,De,ye.data);S.generateMipmaps=!1}else We?(yt&&t.texStorage2D(n.TEXTURE_2D,we,Be,me.width,me.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,Se,De,me.data)):t.texImage2D(n.TEXTURE_2D,0,Be,me.width,me.height,0,Se,De,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Be,ze[0].width,ze[0].height,me.depth);for(let ie=0,ue=ze.length;ie<ue;ie++)if(ye=ze[ie],S.format!==hr)if(Se!==null)if(We){if(F)if(S.layerUpdates.size>0){const Te=Em(ye.width,ye.height,S.format,S.type);for(const Ee of S.layerUpdates){const je=ye.data.subarray(Ee*Te/ye.data.BYTES_PER_ELEMENT,(Ee+1)*Te/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Ee,ye.width,ye.height,1,Se,je)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,me.depth,Se,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Be,ye.width,ye.height,me.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,me.depth,Se,De,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Be,ye.width,ye.height,me.depth,0,Se,De,ye.data)}else{We&&yt&&t.texStorage2D(n.TEXTURE_2D,we,Be,ze[0].width,ze[0].height);for(let ie=0,ue=ze.length;ie<ue;ie++)ye=ze[ie],S.format!==hr?Se!==null?We?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,Se,De,ye.data):t.texImage2D(n.TEXTURE_2D,ie,Be,ye.width,ye.height,0,Se,De,ye.data)}else if(S.isDataArrayTexture)if(We){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Be,me.width,me.height,me.depth),F)if(S.layerUpdates.size>0){const ie=Em(me.width,me.height,S.format,S.type);for(const ue of S.layerUpdates){const Te=me.data.subarray(ue*ie/me.data.BYTES_PER_ELEMENT,(ue+1)*ie/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,me.width,me.height,1,Se,De,Te)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Se,De,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,me.width,me.height,me.depth,0,Se,De,me.data);else if(S.isData3DTexture)We?(yt&&t.texStorage3D(n.TEXTURE_3D,we,Be,me.width,me.height,me.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Se,De,me.data)):t.texImage3D(n.TEXTURE_3D,0,Be,me.width,me.height,me.depth,0,Se,De,me.data);else if(S.isFramebufferTexture){if(yt)if(We)t.texStorage2D(n.TEXTURE_2D,we,Be,me.width,me.height);else{let ie=me.width,ue=me.height;for(let Te=0;Te<we;Te++)t.texImage2D(n.TEXTURE_2D,Te,Be,ie,ue,0,Se,De,null),ie>>=1,ue>>=1}}else if(ze.length>0){if(We&&yt){const ie=te(ze[0]);t.texStorage2D(n.TEXTURE_2D,we,Be,ie.width,ie.height)}for(let ie=0,ue=ze.length;ie<ue;ie++)ye=ze[ie],We?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Se,De,ye):t.texImage2D(n.TEXTURE_2D,ie,Be,Se,De,ye);S.generateMipmaps=!1}else if(We){if(yt){const ie=te(me);t.texStorage2D(n.TEXTURE_2D,we,Be,ie.width,ie.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,De,me)}else t.texImage2D(n.TEXTURE_2D,0,Be,Se,De,me);g(S)&&p(X),ae.__version=G.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function fe(C,S,I){if(S.image.length!==6)return;const X=Fe(C,S),N=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+I);const G=r.get(N);if(N.version!==G.__version||X===!0){t.activeTexture(n.TEXTURE0+I);const ae=ot.getPrimaries(ot.workingColorSpace),le=S.colorSpace===Ei?null:ot.getPrimaries(S.colorSpace),be=S.colorSpace===Ei||ae===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Oe&&!me?Se[ue]=m(S.image[ue],!0,i.maxCubemapSize):Se[ue]=me?S.image[ue].image:S.image[ue],Se[ue]=ce(S,Se[ue]);const De=Se[0],Be=o.convert(S.format,S.colorSpace),ye=o.convert(S.type),ze=v(S.internalFormat,Be,ye,S.colorSpace),We=S.isVideoTexture!==!0,yt=G.__version===void 0||X===!0,F=N.dataReady;let we=E(S,De);Me(n.TEXTURE_CUBE_MAP,S);let ie;if(Oe){We&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,ze,De.width,De.height);for(let ue=0;ue<6;ue++){ie=Se[ue].mipmaps;for(let Te=0;Te<ie.length;Te++){const Ee=ie[Te];S.format!==hr?Be!==null?We?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,0,0,Ee.width,Ee.height,Be,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,ze,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,0,0,Ee.width,Ee.height,Be,ye,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,ze,Ee.width,Ee.height,0,Be,ye,Ee.data)}}}else{if(ie=S.mipmaps,We&&yt){ie.length>0&&we++;const ue=te(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,ze,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(me){We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Be,ye,Se[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Se[ue].width,Se[ue].height,0,Be,ye,Se[ue].data);for(let Te=0;Te<ie.length;Te++){const je=ie[Te].image[ue].image;We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,0,0,je.width,je.height,Be,ye,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,ze,je.width,je.height,0,Be,ye,je.data)}}else{We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Be,ye,Se[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Be,ye,Se[ue]);for(let Te=0;Te<ie.length;Te++){const Ee=ie[Te];We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,0,0,Be,ye,Ee.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,ze,Be,ye,Ee.image[ue])}}}g(S)&&p(n.TEXTURE_CUBE_MAP),G.__version=N.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ve(C,S,I,X,N,G){const ae=o.convert(I.format,I.colorSpace),le=o.convert(I.type),be=v(I.internalFormat,ae,le,I.colorSpace),Oe=r.get(S),me=r.get(I);if(me.__renderTarget=S,!Oe.__hasExternalTextures){const Se=Math.max(1,S.width>>G),De=Math.max(1,S.height>>G);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,G,be,Se,De,S.depth,0,ae,le,null):t.texImage2D(N,G,be,Se,De,0,ae,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),q(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,N,me.__webglTexture,0,K(S)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,N,me.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(C,S,I){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const X=S.depthTexture,N=X&&X.isDepthTexture?X.type:null,G=b(S.stencilBuffer,N),ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=K(S);q(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,G,S.width,S.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,G,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,G,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,C)}else{const X=S.textures;for(let N=0;N<X.length;N++){const G=X[N],ae=o.convert(G.format,G.colorSpace),le=o.convert(G.type),be=v(G.internalFormat,ae,le,G.colorSpace),Oe=K(S);I&&q(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,be,S.width,S.height):q(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,be,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,be,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=r.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const N=X.__webglTexture,G=K(S);if(S.depthTexture.format===vs)q(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(S.depthTexture.format===Ds)q(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function oe(C){const S=r.get(C),I=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const N=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",N)};X.addEventListener("dispose",N),S.__depthDisposeCallback=N}S.__boundDepthTexture=X}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");se(S.__webglFramebuffer,C)}else if(I){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=n.createRenderbuffer(),B(S.__webglDepthbuffer[X],C,!1);else{const N=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),B(S.__webglDepthbuffer,C,!1);else{const X=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,N),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,N)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(C,S,I){const X=r.get(C);S!==void 0&&ve(X.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&oe(C)}function ke(C){const S=C.texture,I=r.get(C),X=r.get(S);C.addEventListener("dispose",A);const N=C.textures,G=C.isWebGLCubeRenderTarget===!0,ae=N.length>1;if(ae||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=S.version,s.memory.textures++),G){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let be=0;be<S.mipmaps.length;be++)I.__webglFramebuffer[le][be]=n.createFramebuffer()}else I.__webglFramebuffer[le]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)I.__webglFramebuffer[le]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ae)for(let le=0,be=N.length;le<be;le++){const Oe=r.get(N[le]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),s.memory.textures++)}if(C.samples>0&&q(C)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let le=0;le<N.length;le++){const be=N[le];I.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[le]);const Oe=o.convert(be.format,be.colorSpace),me=o.convert(be.type),Se=v(be.internalFormat,Oe,me,be.colorSpace,C.isXRRenderTarget===!0),De=K(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Se,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,I.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),B(I.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Me(n.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)ve(I.__webglFramebuffer[le][be],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be);else ve(I.__webglFramebuffer[le],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let le=0,be=N.length;le<be;le++){const Oe=N[le],me=r.get(Oe);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),Me(n.TEXTURE_2D,Oe),ve(I.__webglFramebuffer,C,Oe,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),g(Oe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,X.__webglTexture),Me(le,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)ve(I.__webglFramebuffer[be],C,S,n.COLOR_ATTACHMENT0,le,be);else ve(I.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,le,0);g(S)&&p(le),t.unbindTexture()}C.depthBuffer&&oe(C)}function k(C){const S=C.textures;for(let I=0,X=S.length;I<X;I++){const N=S[I];if(g(N)){const G=x(C),ae=r.get(N).__webglTexture;t.bindTexture(G,ae),p(G),t.unbindTexture()}}}const L=[],w=[];function re(C){if(C.samples>0){if(q(C)===!1){const S=C.textures,I=C.width,X=C.height;let N=n.COLOR_BUFFER_BIT;const G=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=r.get(C),le=S.length>1;if(le)for(let be=0;be<S.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let be=0;be<S.length;be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[be]);const Oe=r.get(S[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,I,X,0,0,I,X,N,n.NEAREST),l===!0&&(L.length=0,w.length=0,L.push(n.COLOR_ATTACHMENT0+be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(L.push(G),w.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<S.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ae.__webglColorRenderbuffer[be]);const Oe=r.get(S[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function K(C){return Math.min(i.maxSamples,C.samples)}function q(C){const S=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ne(C){const S=s.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ce(C,S){const I=C.colorSpace,X=C.format,N=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==Ls&&I!==Ei&&(ot.getTransfer(I)===ht?(X!==hr||N!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=z,this.rebindTextures=de,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=q}function q2(n,e){function t(r,i=Ei){let o;const s=ot.getTransfer(i);if(r===ii)return n.UNSIGNED_BYTE;if(r===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===th)return n.UNSIGNED_SHORT_5_5_5_1;if(r===I_)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===D_)return n.BYTE;if(r===L_)return n.SHORT;if(r===Oa)return n.UNSIGNED_SHORT;if(r===Qf)return n.INT;if(r===wo)return n.UNSIGNED_INT;if(r===Qr)return n.FLOAT;if(r===sl)return n.HALF_FLOAT;if(r===O_)return n.ALPHA;if(r===U_)return n.RGB;if(r===hr)return n.RGBA;if(r===B_)return n.LUMINANCE;if(r===N_)return n.LUMINANCE_ALPHA;if(r===vs)return n.DEPTH_COMPONENT;if(r===Ds)return n.DEPTH_STENCIL;if(r===F_)return n.RED;if(r===nh)return n.RED_INTEGER;if(r===z_)return n.RG;if(r===rh)return n.RG_INTEGER;if(r===ih)return n.RGBA_INTEGER;if(r===Zl||r===Jl||r===Ql||r===ec)if(s===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Zl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ql)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Zl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ql)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ec)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pd||r===kd||r===Dd||r===Ld)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Pd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ld)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Id||r===Od||r===Ud)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Id||r===Od)return s===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ud)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bd||r===Nd||r===Fd||r===zd||r===Hd||r===Vd||r===Gd||r===$d||r===Wd||r===jd||r===Xd||r===Yd||r===qd||r===Kd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Bd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$d)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tc||r===Zd||r===Jd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===tc)return s===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===H_||r===Qd||r===ef||r===tf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===tc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Qd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ef)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ks?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const K2={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,r),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K2)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ss;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Z2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J2=`
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

}`;class Q2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const i=new xn,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Fi({vertexShader:Z2,fragmentShader:J2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new $c(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends Po{constructor(e,t){super();const r=this;let i=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const m=new Q2,g=t.getContextAttributes();let p=null,x=null;const v=[],b=[],E=new $e;let R=null;const A=new Bn;A.viewport=new _t;const P=new Bn;P.viewport=new _t;const y=[A,P],M=new bw;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=v[Q];return fe===void 0&&(fe=new Wu,v[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=v[Q];return fe===void 0&&(fe=new Wu,v[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=v[Q];return fe===void 0&&(fe=new Wu,v[Q]=fe),fe.getHandSpace()};function U(Q){const fe=b.indexOf(Q.inputSource);if(fe===-1)return;const ve=v[fe];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,c||s),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",J);for(let Q=0;Q<v.length;Q++){const fe=b[Q];fe!==null&&(b[Q]=null,v[Q].disconnect(fe))}D=null,O=null,m.reset(),e.setRenderTarget(p),h=null,f=null,d=null,i=null,x=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ve=null,B=null,se=null;g.depth&&(se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=g.stencil?Ds:vs,B=g.stencil?ks:wo);const oe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Co(f.textureWidth,f.textureHeight,{format:hr,type:ii,depthTexture:new Q_(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Co(h.framebufferWidth,h.framebufferHeight,{format:hr,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),Fe.setContext(i),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Q){for(let fe=0;fe<Q.removed.length;fe++){const ve=Q.removed[fe],B=b.indexOf(ve);B>=0&&(b[B]=null,v[B].disconnect(ve))}for(let fe=0;fe<Q.added.length;fe++){const ve=Q.added[fe];let B=b.indexOf(ve);if(B===-1){for(let oe=0;oe<v.length;oe++)if(oe>=b.length){b.push(ve),B=oe;break}else if(b[oe]===null){b[oe]=ve,B=oe;break}if(B===-1)break}const se=v[B];se&&se.connect(ve)}}const V=new j,$=new j;function z(Q,fe,ve){V.setFromMatrixPosition(fe.matrixWorld),$.setFromMatrixPosition(ve.matrixWorld);const B=V.distanceTo($),se=fe.projectionMatrix.elements,oe=ve.projectionMatrix.elements,de=se[14]/(se[10]-1),ke=se[14]/(se[10]+1),k=(se[9]+1)/se[5],L=(se[9]-1)/se[5],w=(se[8]-1)/se[0],re=(oe[8]+1)/oe[0],K=de*w,q=de*re,ne=B/(-w+re),ce=ne*-w;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ce),Q.translateZ(ne),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),se[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const te=de+ne,C=ke+ne,S=K-ce,I=q+(B-ce),X=k*ke/C*te,N=L*ke/C*te;Q.projectionMatrix.makePerspective(S,I,X,N,te,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let fe=Q.near,ve=Q.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),M.near=P.near=A.near=fe,M.far=P.far=A.far=ve,(D!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,O=M.far),A.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const B=Q.parent,se=M.cameras;he(M,B);for(let oe=0;oe<se.length;oe++)he(se[oe],B);se.length===2?z(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),pe(Q,M,B)};function pe(Q,fe,ve){ve===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ua*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(M)};let _e=null;function Me(Q,fe){if(u=fe.getViewerPose(c||s),_=fe,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let B=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,B=!0);for(let oe=0;oe<ve.length;oe++){const de=ve[oe];let ke=null;if(h!==null)ke=h.getViewport(de);else{const L=d.getViewSubImage(f,de);ke=L.viewport,oe===0&&(e.setRenderTargetTextures(x,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let k=y[oe];k===void 0&&(k=new Bn,k.layers.enable(oe),k.viewport=new _t,y[oe]=k),k.matrix.fromArray(de.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(de.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(ke.x,ke.y,ke.width,ke.height),oe===0&&(M.matrix.copy(k.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),B===!0&&M.cameras.push(k)}const se=i.enabledFeatures;if(se&&se.includes("depth-sensing")){const oe=d.getDepthInformation(ve[0]);oe&&oe.isValid&&oe.texture&&m.init(e,oe,i.renderState)}}for(let ve=0;ve<v.length;ve++){const B=b[ve],se=v[ve];B!==null&&se!==void 0&&se.update(B,fe,c||s)}_e&&_e(Q,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Fe=new tb;Fe.setAnimationLoop(Me),this.setAnimationLoop=function(Q){_e=Q},this.dispose=function(){}}}const no=new Lr,tA=new Et;function nA(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function r(g,p){p.color.getRGB(g.fogColor.value,K_(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),d(g,p)):p.isMeshPhongMaterial?(o(g,p),u(g,p)):p.isMeshStandardMaterial?(o(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,b)):p.isMeshMatcapMaterial?(o(g,p),_(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),m(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,b=x.envMapRotation;v&&(g.envMap.value=v,no.copy(b),no.x*=-1,no.y*=-1,no.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(no.y*=-1,no.z*=-1),g.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(no)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function rA(n,e,t,r){let i={},o={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const b=v.program;r.uniformBlockBinding(x,b)}function c(x,v){let b=i[x.id];b===void 0&&(_(x),b=u(x),i[x.id]=b,x.addEventListener("dispose",g));const E=v.program;r.updateUBOMapping(x,E);const R=e.render.frame;o[x.id]!==R&&(f(x),o[x.id]=R)}function u(x){const v=d();x.__bindingPointIndex=v;const b=n.createBuffer(),E=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function d(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],b=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,A=b.length;R<A;R++){const P=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,M=P.length;y<M;y++){const D=P[y];if(h(D,R,y,E)===!0){const O=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let J=0;J<U.length;J++){const V=U[J],$=m(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,O+Y,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,v,b,E){const R=x.value,A=v+"_"+b;if(E[A]===void 0)return typeof R=="number"||typeof R=="boolean"?E[A]=R:E[A]=R.clone(),!0;{const P=E[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return E[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(x){const v=x.uniforms;let b=0;const E=16;for(let A=0,P=v.length;A<P;A++){const y=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,D=y.length;M<D;M++){const O=y[M],U=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,J=U.length;Y<J;Y++){const V=U[Y],$=m(V),z=b%E,he=z%$.boundary,pe=z+he;b+=he,pe!==0&&E-pe<$.storage&&(b+=E-pe),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=$.storage}}}const R=b%E;return R>0&&(b+=E-R),x.__size=b,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const b=s.indexOf(v.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(i[v.id]),delete i[v.id],delete o[v.id]}function p(){for(const x in i)n.deleteBuffer(i[x]);s=[],i={},o={}}return{bind:l,update:c,dispose:p}}class iA{constructor(e={}){const{canvas:t=DM(),context:r=null,depth:i=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=r.getContextAttributes().alpha}else h=s;const _=new Uint32Array(4),m=new Int32Array(4);let g=null,p=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this.toneMapping=Li,this.toneMappingExposure=1;const b=this;let E=!1,R=0,A=0,P=null,y=-1,M=null;const D=new _t,O=new _t;let U=null;const Y=new tt(0);let J=0,V=t.width,$=t.height,z=1,he=null,pe=null;const _e=new _t(0,0,V,$),Me=new _t(0,0,V,$);let Fe=!1;const Q=new uh;let fe=!1,ve=!1;this.transmissionResolutionScale=1;const B=new Et,se=new Et,oe=new j,de=new _t,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let k=!1;function L(){return P===null?z:1}let w=r;function re(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jf}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),w===null){const H="webgl2";if(w=re(H,T),w===null)throw re(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,q,ne,ce,te,C,S,I,X,N,G,ae,le,be,Oe,me,Se,De,Be,ye,ze,We,yt,F;function we(){K=new hT(w),K.init(),We=new q2(w,K),q=new aT(w,K,e,We),ne=new X2(w,K),q.reverseDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),ce=new gT(w),te=new I2,C=new Y2(w,K,ne,te,q,We,ce),S=new cT(b),I=new fT(b),X=new Mw(w),yt=new oT(w,X),N=new pT(w,X,ce,yt),G=new bT(w,N,X,ce),Be=new _T(w,q,C),me=new lT(te),ae=new L2(b,S,I,K,q,yt,me),le=new nA(b,te),be=new U2,Oe=new V2(K),De=new iT(b,S,I,ne,G,h,l),Se=new W2(b,G,q),F=new rA(w,ce,q,ne),ye=new sT(w,K,ce),ze=new mT(w,K,ce),ce.programs=ae.programs,b.capabilities=q,b.extensions=K,b.properties=te,b.renderLists=be,b.shadowMap=Se,b.state=ne,b.info=ce}we();const ie=new eA(b,w);this.xr=ie,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(V,$,!1))},this.getSize=function(T){return T.set(V,$)},this.setSize=function(T,H,Z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,$=H,t.width=Math.floor(T*z),t.height=Math.floor(H*z),Z===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(V*z,$*z).floor()},this.setDrawingBufferSize=function(T,H,Z){V=T,$=H,z=Z,t.width=Math.floor(T*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,H,Z,ee){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,H,Z,ee),ne.viewport(D.copy(_e).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,H,Z,ee){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,H,Z,ee),ne.scissor(O.copy(Me).multiplyScalar(z).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(T){ne.setScissorTest(Fe=T)},this.setOpaqueSort=function(T){he=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,H=!0,Z=!0){let ee=0;if(T){let W=!1;if(P!==null){const ge=P.texture.format;W=ge===ih||ge===rh||ge===nh}if(W){const ge=P.texture.type,Ce=ge===ii||ge===wo||ge===Oa||ge===ks||ge===eh||ge===th,Ae=De.getClearColor(),Re=De.getClearAlpha(),He=Ae.r,Ge=Ae.g,Ie=Ae.b;Ce?(_[0]=He,_[1]=Ge,_[2]=Ie,_[3]=Re,w.clearBufferuiv(w.COLOR,0,_)):(m[0]=He,m[1]=Ge,m[2]=Ie,m[3]=Re,w.clearBufferiv(w.COLOR,0,m))}else ee|=w.COLOR_BUFFER_BIT}H&&(ee|=w.DEPTH_BUFFER_BIT),Z&&(ee|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),De.dispose(),be.dispose(),Oe.dispose(),te.dispose(),S.dispose(),I.dispose(),G.dispose(),yt.dispose(),F.dispose(),ae.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Nh),ie.removeEventListener("sessionend",Fh),Wi.stop()};function ue(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=ce.autoReset,H=Se.enabled,Z=Se.autoUpdate,ee=Se.needsUpdate,W=Se.type;we(),ce.autoReset=T,Se.enabled=H,Se.autoUpdate=Z,Se.needsUpdate=ee,Se.type=W}function Ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function je(T){const H=T.target;H.removeEventListener("dispose",je),Dt(H)}function Dt(T){Qt(T),te.remove(T)}function Qt(T){const H=te.get(T).programs;H!==void 0&&(H.forEach(function(Z){ae.releaseProgram(Z)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,ee,W,ge){H===null&&(H=ke);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,Ae=$v(T,H,Z,ee,W);ne.setMaterial(ee,Ce);let Re=Z.index,He=1;if(ee.wireframe===!0){if(Re=N.getWireframeAttribute(Z),Re===void 0)return;He=2}const Ge=Z.drawRange,Ie=Z.attributes.position;let nt=Ge.start*He,st=(Ge.start+Ge.count)*He;ge!==null&&(nt=Math.max(nt,ge.start*He),st=Math.min(st,(ge.start+ge.count)*He)),Re!==null?(nt=Math.max(nt,0),st=Math.min(st,Re.count)):Ie!=null&&(nt=Math.max(nt,0),st=Math.min(st,Ie.count));const Nt=st-nt;if(Nt<0||Nt===1/0)return;yt.setup(W,ee,Ae,Z,Re);let Lt,it=ye;if(Re!==null&&(Lt=X.get(Re),it=ze,it.setIndex(Lt)),W.isMesh)ee.wireframe===!0?(ne.setLineWidth(ee.wireframeLinewidth*L()),it.setMode(w.LINES)):it.setMode(w.TRIANGLES);else if(W.isLine){let Ue=ee.linewidth;Ue===void 0&&(Ue=1),ne.setLineWidth(Ue*L()),W.isLineSegments?it.setMode(w.LINES):W.isLineLoop?it.setMode(w.LINE_LOOP):it.setMode(w.LINE_STRIP)}else W.isPoints?it.setMode(w.POINTS):W.isSprite&&it.setMode(w.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)it.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))it.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ue=W._multiDrawStarts,Zt=W._multiDrawCounts,at=W._multiDrawCount,rr=Re?X.get(Re).bytesPerElement:1,Io=te.get(ee).currentProgram.getUniforms();for(let Dn=0;Dn<at;Dn++)Io.setValue(w,"_gl_DrawID",Dn),it.render(Ue[Dn]/rr,Zt[Dn])}else if(W.isInstancedMesh)it.renderInstances(nt,Nt,W.count);else if(Z.isInstancedBufferGeometry){const Ue=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Zt=Math.min(Z.instanceCount,Ue);it.renderInstances(nt,Nt,Zt)}else it.render(nt,Nt)};function ft(T,H,Z){T.transparent===!0&&T.side===wr&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,hl(T,H,Z),T.side=Ni,T.needsUpdate=!0,hl(T,H,Z),T.side=wr):hl(T,H,Z)}this.compile=function(T,H,Z=null){Z===null&&(Z=T),p=Oe.get(Z),p.init(H),v.push(p),Z.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),T!==Z&&T.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const ee=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ge=W.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){const Ae=ge[Ce];ft(Ae,Z,W),ee.add(Ae)}else ft(ge,Z,W),ee.add(ge)}),v.pop(),p=null,ee},this.compileAsync=function(T,H,Z=null){const ee=this.compile(T,H,Z);return new Promise(W=>{function ge(){if(ee.forEach(function(Ce){te.get(Ce).currentProgram.isReady()&&ee.delete(Ce)}),ee.size===0){W(T);return}setTimeout(ge,10)}K.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let nr=null;function Ur(T){nr&&nr(T)}function Nh(){Wi.stop()}function Fh(){Wi.start()}const Wi=new tb;Wi.setAnimationLoop(Ur),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(T){nr=T,ie.setAnimationLoop(T),T===null?Wi.stop():Wi.start()},ie.addEventListener("sessionstart",Nh),ie.addEventListener("sessionend",Fh),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(H),H=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,H,P),p=Oe.get(T,v.length),p.init(H),v.push(p),se.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(se),ve=this.localClippingEnabled,fe=me.init(this.clippingPlanes,ve),g=be.get(T,x.length),g.init(),x.push(g),ie.enabled===!0&&ie.isPresenting===!0){const ge=b.xr.getDepthSensingMesh();ge!==null&&Qc(ge,H,-1/0,b.sortObjects)}Qc(T,H,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(he,pe),k=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,k&&De.addToRenderList(g,T),this.info.render.frame++,fe===!0&&me.beginShadows();const Z=p.state.shadowsArray;Se.render(Z,T,H),fe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=g.opaque,W=g.transmissive;if(p.setupLights(),H.isArrayCamera){const ge=H.cameras;if(W.length>0)for(let Ce=0,Ae=ge.length;Ce<Ae;Ce++){const Re=ge[Ce];Hh(ee,W,T,Re)}k&&De.render(T);for(let Ce=0,Ae=ge.length;Ce<Ae;Ce++){const Re=ge[Ce];zh(g,T,Re,Re.viewport)}}else W.length>0&&Hh(ee,W,T,H),k&&De.render(T),zh(g,T,H);P!==null&&A===0&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(b,T,H),yt.resetDefaultState(),y=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],fe===!0&&me.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Qc(T,H,Z,ee){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){ee&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Ce=G.update(T),Ae=T.material;Ae.visible&&g.push(T,Ce,Ae,Z,de.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const Ce=G.update(T),Ae=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),de.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),de.copy(Ce.boundingSphere.center)),de.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Ae)){const Re=Ce.groups;for(let He=0,Ge=Re.length;He<Ge;He++){const Ie=Re[He],nt=Ae[Ie.materialIndex];nt&&nt.visible&&g.push(T,Ce,nt,Z,de.z,Ie)}}else Ae.visible&&g.push(T,Ce,Ae,Z,de.z,null)}}const ge=T.children;for(let Ce=0,Ae=ge.length;Ce<Ae;Ce++)Qc(ge[Ce],H,Z,ee)}function zh(T,H,Z,ee){const W=T.opaque,ge=T.transmissive,Ce=T.transparent;p.setupLightsView(Z),fe===!0&&me.setGlobalState(b.clippingPlanes,Z),ee&&ne.viewport(D.copy(ee)),W.length>0&&fl(W,H,Z),ge.length>0&&fl(ge,H,Z),Ce.length>0&&fl(Ce,H,Z),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Hh(T,H,Z,ee){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new Co(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?sl:ii,minFilter:ho,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ge=p.state.transmissionRenderTarget[ee.id],Ce=ee.viewport||D;ge.setSize(Ce.z*b.transmissionResolutionScale,Ce.w*b.transmissionResolutionScale);const Ae=b.getRenderTarget();b.setRenderTarget(ge),b.getClearColor(Y),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),k&&De.render(Z);const Re=b.toneMapping;b.toneMapping=Li;const He=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),fe===!0&&me.setGlobalState(b.clippingPlanes,ee),fl(T,Z,ee),C.updateMultisampleRenderTarget(ge),C.updateRenderTargetMipmap(ge),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ie=0,nt=H.length;Ie<nt;Ie++){const st=H[Ie],Nt=st.object,Lt=st.geometry,it=st.material,Ue=st.group;if(it.side===wr&&Nt.layers.test(ee.layers)){const Zt=it.side;it.side=yn,it.needsUpdate=!0,Vh(Nt,Z,ee,Lt,it,Ue),it.side=Zt,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(C.updateMultisampleRenderTarget(ge),C.updateRenderTargetMipmap(ge))}b.setRenderTarget(Ae),b.setClearColor(Y,J),He!==void 0&&(ee.viewport=He),b.toneMapping=Re}function fl(T,H,Z){const ee=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ge=T.length;W<ge;W++){const Ce=T[W],Ae=Ce.object,Re=Ce.geometry,He=ee===null?Ce.material:ee,Ge=Ce.group;Ae.layers.test(Z.layers)&&Vh(Ae,H,Z,Re,He,Ge)}}function Vh(T,H,Z,ee,W,ge){T.onBeforeRender(b,H,Z,ee,W,ge),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(b,H,Z,ee,T,ge),W.transparent===!0&&W.side===wr&&W.forceSinglePass===!1?(W.side=yn,W.needsUpdate=!0,b.renderBufferDirect(Z,H,ee,W,T,ge),W.side=Ni,W.needsUpdate=!0,b.renderBufferDirect(Z,H,ee,W,T,ge),W.side=wr):b.renderBufferDirect(Z,H,ee,W,T,ge),T.onAfterRender(b,H,Z,ee,W,ge)}function hl(T,H,Z){H.isScene!==!0&&(H=ke);const ee=te.get(T),W=p.state.lights,ge=p.state.shadowsArray,Ce=W.state.version,Ae=ae.getParameters(T,W.state,ge,H,Z),Re=ae.getProgramCacheKey(Ae);let He=ee.programs;ee.environment=T.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(T.isMeshStandardMaterial?I:S).get(T.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",je),He=new Map,ee.programs=He);let Ge=He.get(Re);if(Ge!==void 0){if(ee.currentProgram===Ge&&ee.lightsStateVersion===Ce)return $h(T,Ae),Ge}else Ae.uniforms=ae.getUniforms(T),T.onBeforeCompile(Ae,b),Ge=ae.acquireProgram(Ae,Re),He.set(Re,Ge),ee.uniforms=Ae.uniforms;const Ie=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=me.uniform),$h(T,Ae),ee.needsLights=jv(T),ee.lightsStateVersion=Ce,ee.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.directionalShadowMap.value=W.state.directionalShadowMap,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotShadowMap.value=W.state.spotShadowMap,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMap.value=W.state.pointShadowMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=Ge,ee.uniformsList=null,Ge}function Gh(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=nc.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function $h(T,H){const Z=te.get(T);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function $v(T,H,Z,ee,W){H.isScene!==!0&&(H=ke),C.resetTextureUnits();const ge=H.fog,Ce=ee.isMeshStandardMaterial?H.environment:null,Ae=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ls,Re=(ee.isMeshStandardMaterial?I:S).get(ee.envMap||Ce),He=ee.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!Z.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ie=!!Z.morphAttributes.position,nt=!!Z.morphAttributes.normal,st=!!Z.morphAttributes.color;let Nt=Li;ee.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Nt=b.toneMapping);const Lt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,it=Lt!==void 0?Lt.length:0,Ue=te.get(ee),Zt=p.state.lights;if(fe===!0&&(ve===!0||T!==M)){const cn=T===M&&ee.id===y;me.setState(ee,T,cn)}let at=!1;ee.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Zt.state.version||Ue.outputColorSpace!==Ae||W.isBatchedMesh&&Ue.batching===!1||!W.isBatchedMesh&&Ue.batching===!0||W.isBatchedMesh&&Ue.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ue.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ue.instancing===!1||!W.isInstancedMesh&&Ue.instancing===!0||W.isSkinnedMesh&&Ue.skinning===!1||!W.isSkinnedMesh&&Ue.skinning===!0||W.isInstancedMesh&&Ue.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ue.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ue.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ue.instancingMorph===!1&&W.morphTexture!==null||Ue.envMap!==Re||ee.fog===!0&&Ue.fog!==ge||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==me.numPlanes||Ue.numIntersection!==me.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==Ge||Ue.morphTargets!==Ie||Ue.morphNormals!==nt||Ue.morphColors!==st||Ue.toneMapping!==Nt||Ue.morphTargetsCount!==it)&&(at=!0):(at=!0,Ue.__version=ee.version);let rr=Ue.currentProgram;at===!0&&(rr=hl(ee,H,W));let Io=!1,Dn=!1,$s=!1;const wt=rr.getUniforms(),jn=Ue.uniforms;if(ne.useProgram(rr.program)&&(Io=!0,Dn=!0,$s=!0),ee.id!==y&&(y=ee.id,Dn=!0),Io||M!==T){ne.buffers.depth.getReversed()?(B.copy(T.projectionMatrix),IM(B),OM(B),wt.setValue(w,"projectionMatrix",B)):wt.setValue(w,"projectionMatrix",T.projectionMatrix),wt.setValue(w,"viewMatrix",T.matrixWorldInverse);const Sn=wt.map.cameraPosition;Sn!==void 0&&Sn.setValue(w,oe.setFromMatrixPosition(T.matrixWorld)),q.logarithmicDepthBuffer&&wt.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&wt.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Dn=!0,$s=!0)}if(W.isSkinnedMesh){wt.setOptional(w,W,"bindMatrix"),wt.setOptional(w,W,"bindMatrixInverse");const cn=W.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),wt.setValue(w,"boneTexture",cn.boneTexture,C))}W.isBatchedMesh&&(wt.setOptional(w,W,"batchingTexture"),wt.setValue(w,"batchingTexture",W._matricesTexture,C),wt.setOptional(w,W,"batchingIdTexture"),wt.setValue(w,"batchingIdTexture",W._indirectTexture,C),wt.setOptional(w,W,"batchingColorTexture"),W._colorsTexture!==null&&wt.setValue(w,"batchingColorTexture",W._colorsTexture,C));const Xn=Z.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&Be.update(W,Z,rr),(Dn||Ue.receiveShadow!==W.receiveShadow)&&(Ue.receiveShadow=W.receiveShadow,wt.setValue(w,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(jn.envMap.value=Re,jn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&H.environment!==null&&(jn.envMapIntensity.value=H.environmentIntensity),Dn&&(wt.setValue(w,"toneMappingExposure",b.toneMappingExposure),Ue.needsLights&&Wv(jn,$s),ge&&ee.fog===!0&&le.refreshFogUniforms(jn,ge),le.refreshMaterialUniforms(jn,ee,z,$,p.state.transmissionRenderTarget[T.id]),nc.upload(w,Gh(Ue),jn,C)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(nc.upload(w,Gh(Ue),jn,C),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&wt.setValue(w,"center",W.center),wt.setValue(w,"modelViewMatrix",W.modelViewMatrix),wt.setValue(w,"normalMatrix",W.normalMatrix),wt.setValue(w,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const cn=ee.uniformsGroups;for(let Sn=0,eu=cn.length;Sn<eu;Sn++){const ji=cn[Sn];F.update(ji,rr),F.bind(ji,rr)}}return rr}function Wv(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function jv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,H,Z){te.get(T.texture).__webglTexture=H,te.get(T.depthTexture).__webglTexture=Z;const ee=te.get(T);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Z===void 0,ee.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const Z=te.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const Xv=w.createFramebuffer();this.setRenderTarget=function(T,H=0,Z=0){P=T,R=H,A=Z;let ee=!0,W=null,ge=!1,Ce=!1;if(T){const Re=te.get(T);if(Re.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(w.FRAMEBUFFER,null),ee=!1;else if(Re.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Re.__hasExternalTextures)C.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ie=T.depthTexture;if(Re.__boundDepthTexture!==Ie){if(Ie!==null&&te.has(Ie)&&(T.width!==Ie.image.width||T.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ce=!0);const Ge=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[H])?W=Ge[H][Z]:W=Ge[H],ge=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?W=te.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?W=Ge[Z]:W=Ge,D.copy(T.viewport),O.copy(T.scissor),U=T.scissorTest}else D.copy(_e).multiplyScalar(z).floor(),O.copy(Me).multiplyScalar(z).floor(),U=Fe;if(Z!==0&&(W=Xv),ne.bindFramebuffer(w.FRAMEBUFFER,W)&&ee&&ne.drawBuffers(T,W),ne.viewport(D),ne.scissor(O),ne.setScissorTest(U),ge){const Re=te.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,Z)}else if(Ce){const Re=te.get(T.texture),He=H;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Re.__webglTexture,Z,He)}else if(T!==null&&Z!==0){const Re=te.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Re.__webglTexture,Z)}y=-1},this.readRenderTargetPixels=function(T,H,Z,ee,W,ge,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ae=Ae[Ce]),Ae){ne.bindFramebuffer(w.FRAMEBUFFER,Ae);try{const Re=T.texture,He=Re.format,Ge=Re.type;if(!q.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-ee&&Z>=0&&Z<=T.height-W&&w.readPixels(H,Z,ee,W,We.convert(He),We.convert(Ge),ge)}finally{const Re=P!==null?te.get(P).__webglFramebuffer:null;ne.bindFramebuffer(w.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,H,Z,ee,W,ge,Ce){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ae=Ae[Ce]),Ae){const Re=T.texture,He=Re.format,Ge=Re.type;if(!q.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-ee&&Z>=0&&Z<=T.height-W){ne.bindFramebuffer(w.FRAMEBUFFER,Ae);const Ie=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ie),w.bufferData(w.PIXEL_PACK_BUFFER,ge.byteLength,w.STREAM_READ),w.readPixels(H,Z,ee,W,We.convert(He),We.convert(Ge),0);const nt=P!==null?te.get(P).__webglFramebuffer:null;ne.bindFramebuffer(w.FRAMEBUFFER,nt);const st=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await LM(w,st,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ie),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ge),w.deleteBuffer(Ie),w.deleteSync(st),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,Z=0){T.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);const ee=Math.pow(2,-Z),W=Math.floor(T.image.width*ee),ge=Math.floor(T.image.height*ee),Ce=H!==null?H.x:0,Ae=H!==null?H.y:0;C.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,Z,0,0,Ce,Ae,W,ge),ne.unbindTexture()};const Yv=w.createFramebuffer(),qv=w.createFramebuffer();this.copyTextureToTexture=function(T,H,Z=null,ee=null,W=0,ge=null){T.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,T=arguments[1],H=arguments[2],ge=arguments[3]||0,Z=null),ge===null&&(W!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=W,W=0):ge=0);let Ce,Ae,Re,He,Ge,Ie,nt,st,Nt;const Lt=T.isCompressedTexture?T.mipmaps[ge]:T.image;if(Z!==null)Ce=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Re=Z.isBox3?Z.max.z-Z.min.z:1,He=Z.min.x,Ge=Z.min.y,Ie=Z.isBox3?Z.min.z:0;else{const Xn=Math.pow(2,-W);Ce=Math.floor(Lt.width*Xn),Ae=Math.floor(Lt.height*Xn),T.isDataArrayTexture?Re=Lt.depth:T.isData3DTexture?Re=Math.floor(Lt.depth*Xn):Re=1,He=0,Ge=0,Ie=0}ee!==null?(nt=ee.x,st=ee.y,Nt=ee.z):(nt=0,st=0,Nt=0);const it=We.convert(H.format),Ue=We.convert(H.type);let Zt;H.isData3DTexture?(C.setTexture3D(H,0),Zt=w.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(C.setTexture2DArray(H,0),Zt=w.TEXTURE_2D_ARRAY):(C.setTexture2D(H,0),Zt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,H.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,H.unpackAlignment);const at=w.getParameter(w.UNPACK_ROW_LENGTH),rr=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Io=w.getParameter(w.UNPACK_SKIP_PIXELS),Dn=w.getParameter(w.UNPACK_SKIP_ROWS),$s=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Lt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Lt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,He),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ge),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ie);const wt=T.isDataArrayTexture||T.isData3DTexture,jn=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const Xn=te.get(T),cn=te.get(H),Sn=te.get(Xn.__renderTarget),eu=te.get(cn.__renderTarget);ne.bindFramebuffer(w.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ne.bindFramebuffer(w.DRAW_FRAMEBUFFER,eu.__webglFramebuffer);for(let ji=0;ji<Re;ji++)wt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,te.get(T).__webglTexture,W,Ie+ji),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,te.get(H).__webglTexture,ge,Nt+ji)),w.blitFramebuffer(He,Ge,Ce,Ae,nt,st,Ce,Ae,w.DEPTH_BUFFER_BIT,w.NEAREST);ne.bindFramebuffer(w.READ_FRAMEBUFFER,null),ne.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||te.has(T)){const Xn=te.get(T),cn=te.get(H);ne.bindFramebuffer(w.READ_FRAMEBUFFER,Yv),ne.bindFramebuffer(w.DRAW_FRAMEBUFFER,qv);for(let Sn=0;Sn<Re;Sn++)wt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Xn.__webglTexture,W,Ie+Sn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Xn.__webglTexture,W),jn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,cn.__webglTexture,ge,Nt+Sn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,cn.__webglTexture,ge),W!==0?w.blitFramebuffer(He,Ge,Ce,Ae,nt,st,Ce,Ae,w.COLOR_BUFFER_BIT,w.NEAREST):jn?w.copyTexSubImage3D(Zt,ge,nt,st,Nt+Sn,He,Ge,Ce,Ae):w.copyTexSubImage2D(Zt,ge,nt,st,He,Ge,Ce,Ae);ne.bindFramebuffer(w.READ_FRAMEBUFFER,null),ne.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else jn?T.isDataTexture||T.isData3DTexture?w.texSubImage3D(Zt,ge,nt,st,Nt,Ce,Ae,Re,it,Ue,Lt.data):H.isCompressedArrayTexture?w.compressedTexSubImage3D(Zt,ge,nt,st,Nt,Ce,Ae,Re,it,Lt.data):w.texSubImage3D(Zt,ge,nt,st,Nt,Ce,Ae,Re,it,Ue,Lt):T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ge,nt,st,Ce,Ae,it,Ue,Lt.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ge,nt,st,Lt.width,Lt.height,it,Lt.data):w.texSubImage2D(w.TEXTURE_2D,ge,nt,st,Ce,Ae,it,Ue,Lt);w.pixelStorei(w.UNPACK_ROW_LENGTH,at),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,rr),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Io),w.pixelStorei(w.UNPACK_SKIP_ROWS,Dn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,$s),ge===0&&H.generateMipmaps&&w.generateMipmap(Zt),ne.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Z=null,ee=null,W=0){return T.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,ee=arguments[1]||null,T=arguments[2],H=arguments[3],W=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,H,Z,ee,W)},this.initRenderTarget=function(T){te.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ne.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,ne.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const Zm={type:"change"},ph={type:"start"},sb={type:"end"},zl=new ah,Jm=new Ci,oA=Math.cos(70*nf.DEG2RAD),Gt=new j,Mn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ju=1e-6;class sA extends xw{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Eo,this._lastTargetPosition=new j,this._quat=new Eo().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cm,this._sphericalDelta=new Cm,this._scale=1,this._panOffset=new j,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new j,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lA.bind(this),this._onPointerDown=aA.bind(this),this._onPointerUp=cA.bind(this),this._onContextMenu=gA.bind(this),this._onMouseWheel=fA.bind(this),this._onKeyDown=hA.bind(this),this._onTouchStart=pA.bind(this),this._onTouchMove=mA.bind(this),this._onMouseDown=uA.bind(this),this._onMouseMove=dA.bind(this),this._interceptControlDown=_A.bind(this),this._interceptControlUp=bA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zm),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(r)&&isFinite(i)&&(r<-Math.PI?r+=Mn:r>Math.PI&&(r-=Mn),i<-Math.PI?i+=Mn:i>Math.PI&&(i-=Mn),r<=i?this._spherical.theta=Math.max(r,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+i)/2?Math.max(r,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=Gt.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new j(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(zl.origin.copy(this.object.position),zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zl.direction))<oA?this.object.lookAt(this.target):(Jm.setFromNormalAndCoplanarPoint(this.object.up,this.target),zl.intersectPlane(Jm,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ju||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ju||this._lastTargetPosition.distanceToSquared(this.target)>ju?(this.dispatchEvent(Zm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Gt.copy(i).sub(this.target);let o=Gt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/r.clientHeight,this.object.matrix),this._panUp(2*t*o/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),i=e-r.left,o=t-r.top,s=r.width,a=r.height;this._mouse.x=i/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(r,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(r,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,i=e.pageY-t.y,o=Math.sqrt(r*r+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),o=.5*(e.pageY+r.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(r,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,i=e.pageY-t.y,o=Math.sqrt(r*r+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function aA(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function lA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function cA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sb),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uA(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case _s.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case _s.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(ph)}function dA(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fA(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(ph),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(sb))}function hA(n){this.enabled!==!1&&this._handleKeyDown(n)}function pA(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(ph)}function mA(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function gA(n){this.enabled!==!1&&n.preventDefault()}function _A(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bA(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ab(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Os={duration:.5,overwrite:!1,delay:0},mh,Jt,Ct,kr=1e8,an=1/kr,sf=Math.PI*2,vA=sf/4,yA=0,lb=Math.sqrt,xA=Math.cos,SA=Math.sin,Kt=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},oi=function(e){return typeof e=="number"},gh=function(e){return typeof e>"u"},Ir=function(e){return typeof e=="object"},En=function(e){return e!==!1},_h=function(){return typeof window<"u"},Hl=function(e){return Ot(e)||Kt(e)},cb=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,af=/(?:-?\.?\d|\.)+/gi,ub=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,db=/[+-]=-?[.\d]+/,fb=/[^,'"\[\]\s]+/gi,MA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,xr,lf,bh,$n={},bc={},hb,pb=function(e){return(bc=Us(e,$n))&&kn},vh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Na=function(e,t){return!t&&console.warn(e)},mb=function(e,t){return e&&($n[e]=t)&&bc&&(bc[e]=t)||$n},Fa=function(){return 0},wA={suppressEvents:!0,isStart:!0,kill:!1},rc={suppressEvents:!0,kill:!1},CA={suppressEvents:!0},yh={},Ii=[],cf={},gb,Un={},Yu={},Qm=30,ic=[],xh="",Sh=function(e){var t=e[0],r,i;if(Ir(t)||Ot(t)||(e=[e]),!(r=(t._gsap||{}).harness)){for(i=ic.length;i--&&!ic[i].targetTest(t););r=ic[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zb(e[i],r)))||e.splice(i,1);return e},bo=function(e){return e._gsap||Sh(Jn(e))[0]._gsap},_b=function(e,t,r){return(r=e[t])&&Ot(r)?e[t]():gh(r)&&e.getAttribute&&e.getAttribute(t)||r},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},xs=function(e,t){var r=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},EA=function(e,t){for(var r=t.length,i=0;e.indexOf(t[i])<0&&++i<r;);return i<r},vc=function(){var e=Ii.length,t=Ii.slice(0),r,i;for(cf={},Ii.length=0,r=0;r<e;r++)i=t[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bb=function(e,t,r,i){Ii.length&&!Jt&&vc(),e.render(t,r,Jt&&t<0&&(e._initted||e._startAt)),Ii.length&&!Jt&&vc()},vb=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fb).length<2?t:Kt(e)?e.trim():e},yb=function(e){return e},Wn=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},TA=function(e){return function(t,r){for(var i in r)i in t||i==="duration"&&e||i==="ease"||(t[i]=r[i])}},Us=function(e,t){for(var r in t)e[r]=t[r];return e},eg=function n(e,t){for(var r in t)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=Ir(t[r])?n(e[r]||(e[r]={}),t[r]):t[r]);return e},yc=function(e,t){var r={},i;for(i in e)i in t||(r[i]=e[i]);return r},ba=function(e){var t=e.parent||Rt,r=e.keyframes?TA(ln(e.keyframes)):Wn;if(En(e.inherit))for(;t;)r(e,t.vars.defaults),t=t.parent||t._dp;return e},AA=function(e,t){for(var r=e.length,i=r===t.length;i&&r--&&e[r]===t[r];);return r<0},xb=function(e,t,r,i,o){var s=e[i],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[r],e[r]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},jc=function(e,t,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=t._prev,s=t._next;o?o._next=s:e[r]===t&&(e[r]=s),s?s._prev=o:e[i]===t&&(e[i]=o),t._next=t._prev=t.parent=null},zi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},RA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},uf=function(e,t,r,i){return e._startAt&&(Jt?e._startAt.revert(rc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},PA=function n(e){return!e||e._ts&&n(e.parent)},tg=function(e){return e._repeat?Bs(e._tTime,e=e.duration()+e._rDelay)*e:0},Bs=function(e,t){var r=Math.floor(e=Ht(e/t));return e&&r===e?r-1:r},xc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xc=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||an)||0))},Yc=function(e,t){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=Ht(r._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xc(e),r._dirty||vo(r,e)),e},Sb=function(e,t){var r;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(r=xc(e.rawTime(),t),(!t._dur||ul(0,t.totalDuration(),r)-t._tTime>an)&&t.render(r,!0)),vo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-1e-8}},Cr=function(e,t,r,i){return t.parent&&zi(t),t._start=Ht((oi(r)?r:r||e!==Rt?Kn(e,r,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),xb(e,t,"_first","_last",e._sort?"_start":0),df(t)||(e._recent=t),i||Sb(e,t),e._ts<0&&Yc(e,e._tTime),e},Mb=function(e,t){return($n.ScrollTrigger||vh("scrollTrigger",t))&&$n.ScrollTrigger.create(t,e)},wb=function(e,t,r,i,o){if(wh(e,t,o),!e._initted)return 1;if(!r&&e._pt&&!Jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gb!==Nn.frame)return Ii.push(e),e._lazy=[o,i],1},kA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},df=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},DA=function(e,t,r,i){var o=e.ratio,s=t<0||!t&&(!e._start&&kA(e)&&!(!e._initted&&df(e))||(e._ts<0||e._dp._ts<0)&&!df(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=ul(0,e._tDur,t),u=Bs(l,a),e._yoyo&&u&1&&(s=1-s),u!==Bs(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||Jt||i||e._zTime===an||!t&&e._zTime){if(!e._initted&&wb(e,t,i,r,l))return;for(d=e._zTime,e._zTime=t||(r?an:0),r||(r=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&uf(e,t,r,!0),e._onUpdate&&!r&&Hn(e,"onUpdate"),l&&e._repeat&&!r&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&zi(e,1),!r&&!Jt&&(Hn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},LA=function(e,t,r){var i;if(r>t)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ns=function(e,t,r,i){var o=e._repeat,s=Ht(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Ht(s*(o+1)+e._rDelay*o):s,a>0&&!i&&Yc(e,e._tTime=e._tDur*a),e.parent&&Xc(e),r||vo(e.parent,e),e},ng=function(e){return e instanceof bn?vo(e):Ns(e,e._dur)},IA={_start:0,endTime:Fa,totalDuration:Fa},Kn=function n(e,t,r){var i=e.labels,o=e._recent||IA,s=e.duration()>=kr?o.endTime(!1):e._dur,a,l,c;return Kt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:r).totalDuration()/100:1)):a<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&r&&(l=l/100*(ln(r)?r[0]:r).totalDuration()),a>1?n(e,t.substr(0,a-1),r)+l:s+l)):t==null?s:+t},va=function(e,t,r){var i=oi(t[1]),o=(i?2:1)+(e<2?0:1),s=t[o],a,l;if(i&&(s.duration=t[1]),s.parent=r,e){for(a=s,l=r;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;s.immediateRender=En(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new zt(t[0],s,t[o+1])},$i=function(e,t){return e||e===0?t(e):t},ul=function(e,t,r){return r<e?e:r>t?t:r},sn=function(e,t){return!Kt(e)||!(t=MA.exec(e))?"":t[1]},OA=function(e,t,r){return $i(r,function(i){return ul(e,t,i)})},ff=[].slice,Cb=function(e,t){return e&&Ir(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ir(e[0]))&&!e.nodeType&&e!==xr},UA=function(e,t,r){return r===void 0&&(r=[]),e.forEach(function(i){var o;return Kt(i)&&!t||Cb(i,1)?(o=r).push.apply(o,Jn(i)):r.push(i)})||r},Jn=function(e,t,r){return Ct&&!t&&Ct.selector?Ct.selector(e):Kt(e)&&!r&&(lf||!Fs())?ff.call((t||bh).querySelectorAll(e),0):ln(e)?UA(e,r):Cb(e)?ff.call(e,0):e?[e]:[]},hf=function(e){return e=Jn(e)[0]||Na("Invalid scope")||{},function(t){var r=e.current||e.nativeElement||e;return Jn(t,r.querySelectorAll?r:r===e?Na("Invalid scope")||bh.createElement("div"):e)}},Eb=function(e){return e.sort(function(){return .5-Math.random()})},Tb=function(e){if(Ot(e))return e;var t=Ir(e)?e:{each:e},r=yo(t.ease),i=t.from||0,o=parseFloat(t.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return Kt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(f,h,_){var m=(_||t).length,g=s[m],p,x,v,b,E,R,A,P,y;if(!g){if(y=t.grid==="auto"?0:(t.grid||[1,kr])[1],!y){for(A=-1e8;A<(A=_[y++].getBoundingClientRect().left)&&y<m;);y<m&&y--}for(g=s[m]=[],p=l?Math.min(y,m)*u-.5:i%y,x=y===kr?0:l?m*d/y-.5:i/y|0,A=0,P=kr,R=0;R<m;R++)v=R%y-p,b=x-(R/y|0),g[R]=E=c?Math.abs(c==="y"?b:v):lb(v*v+b*b),E>A&&(A=E),E<P&&(P=E);i==="random"&&Eb(g),g.max=A-P,g.min=P,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(y>m?m-1:c?c==="y"?m/y:y:Math.max(y,m/y))||0)*(i==="edges"?-1:1),g.b=m<0?o-m:o,g.u=sn(t.amount||t.each)||0,r=r&&m<0?Bb(r):r}return m=(g[f]-g.min)/g.max||0,Ht(g.b+(r?r(m):m)*g.v)+g.u}},pf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=Ht(Math.round(parseFloat(r)/e)*e*t);return(i-i%1)/t+(oi(r)?0:sn(r))}},Ab=function(e,t){var r=ln(e),i,o;return!r&&Ir(e)&&(i=r=e.radius||kr,e.values?(e=Jn(e.values),(o=!oi(e[0]))&&(i*=i)):e=pf(e.increment)),$i(t,r?Ot(e)?function(s){return o=e(s),Math.abs(o-s)<=i?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=kr,u=0,d=e.length,f,h;d--;)o?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:s,o||u===s||oi(s)?u:u+sn(s)}:pf(e))},Rb=function(e,t,r,i){return $i(ln(e)?!t:r===!0?!!(r=0):!i,function(){return ln(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(t-e+r*.99))/r)*r*i)/i})},BA=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(i){return t.reduce(function(o,s){return s(o)},i)}},NA=function(e,t){return function(r){return e(parseFloat(r))+(t||sn(r))}},FA=function(e,t,r){return kb(e,t,0,1,r)},Pb=function(e,t,r){return $i(r,function(i){return e[~~t(i)]})},zA=function n(e,t,r){var i=t-e;return ln(e)?Pb(e,n(0,e.length),t):$i(r,function(o){return(i+(o-e)%i)%i+e})},HA=function n(e,t,r){var i=t-e,o=i*2;return ln(e)?Pb(e,n(0,e.length-1),t):$i(r,function(s){return s=(o+(s-e)%o)%o||0,e+(s>i?o-s:s)})},za=function(e){for(var t=0,r="",i,o,s,a;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",o=e.substr(i+7,s-i-7).match(a?fb:af),r+=e.substr(t,i-t)+Rb(a?o:+o[0],a?0:+o[1],+o[2]||1e-5),t=s+1;return r+e.substr(t,e.length-t)},kb=function(e,t,r,i,o){var s=t-e,a=i-r;return $i(o,function(l){return r+((l-e)/s*a||0)})},VA=function n(e,t,r,i){var o=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!o){var s=Kt(e),a={},l,c,u,d,f;if(r===!0&&(i=1)&&(r=null),s)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,o=function(_){_*=d;var m=Math.min(f,~~_);return u[m](_-m)},r=t}else i||(e=Us(ln(e)?[]:{},e));if(!u){for(l in t)Mh.call(a,e,l,"get",t[l]);o=function(_){return Th(_,a)||(s?e.p:e)}}}return $i(r,o)},rg=function(e,t,r){var i=e.labels,o=kr,s,a,l;for(s in i)a=i[s]-t,a<0==!!r&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},Hn=function(e,t,r){var i=e.vars,o=i[t],s=Ct,a=e._ctx,l,c,u;if(o)return l=i[t+"Params"],c=i.callbackScope||e,r&&Ii.length&&vc(),a&&(Ct=a),u=l?o.apply(c,l):o.call(c),Ct=s,u},ia=function(e){return zi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Jt),e.progress()<1&&Hn(e,"onInterrupt"),e},cs,Db=[],Lb=function(e){if(e)if(e=!e.name&&e.default||e,_h()||e.headless){var t=e.name,r=Ot(e),i=t&&!r&&e.init?function(){this._props=[]}:e,o={init:Fa,render:Th,add:Mh,kill:iR,modifier:rR,rawVars:0},s={targetTest:0,get:0,getSetter:Eh,aliases:{},register:0};if(Fs(),e!==i){if(Un[t])return;Wn(i,Wn(yc(e,o),s)),Us(i.prototype,Us(o,yc(e,s))),Un[i.prop=t]=i,e.targetTest&&(ic.push(i),yh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mb(t,i),e.register&&e.register(kn,i,An)}else Db.push(e)},bt=255,oa={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},qu=function(e,t,r){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(r-t)*e*6:e<.5?r:e*3<2?t+(r-t)*(2/3-e)*6:t)*bt+.5|0},Ib=function(e,t,r){var i=e?oi(e)?[e>>16,e>>8&bt,e&bt]:0:oa.black,o,s,a,l,c,u,d,f,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oa[e])i=oa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(af),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,i.length>3&&(i[3]*=1),i[0]=qu(l+1/3,o,s),i[1]=qu(l,o,s),i[2]=qu(l-1/3,o,s);else if(~e.indexOf("="))return i=e.match(ub),r&&i.length<4&&(i[3]=1),i}else i=e.match(af)||oa.transparent;i=i.map(Number)}return t&&!_&&(o=i[0]/bt,s=i[1]/bt,a=i[2]/bt,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===o?(s-a)/h+(s<a?6:0):d===s?(a-o)/h+2:(o-s)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),r&&i.length<4&&(i[3]=1),i},Ob=function(e){var t=[],r=[],i=-1;return e.split(Oi).forEach(function(o){var s=o.match(ls)||[];t.push.apply(t,s),r.push(i+=s.length+1)}),t.c=r,t},ig=function(e,t,r){var i="",o=(e+i).match(Oi),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=Ib(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),r&&(u=Ob(e),l=r.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Oi,"1").split(ls),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:r).shift());if(!c)for(c=e.split(Oi),d=c.length-1;a<d;a++)i+=c[a]+o[a];return i+c[d]},Oi=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in oa)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),GA=/hsl[a]?\(/,Ub=function(e){var t=e.join(" "),r;if(Oi.lastIndex=0,Oi.test(t))return r=GA.test(t),e[1]=ig(e[1],r),e[0]=ig(e[0],r,Ob(e[1])),!0},Ha,Nn=function(){var n=Date.now,e=500,t=33,r=n(),i=r,o=1e3/240,s=o,a=[],l,c,u,d,f,h,_=function m(g){var p=n()-i,x=g===!0,v,b,E,R;if((p>e||p<0)&&(r+=p-t),i+=p,E=i-r,v=E-s,(v>0||x)&&(R=++d.frame,f=E-d.time*1e3,d.time=E=E/1e3,s+=v+(v>=o?4:o-v),b=1),x||(l=c(m)),b)for(h=0;h<a.length;h++)a[h](E,f,R,g)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){hb&&(!lf&&_h()&&(xr=lf=window,bh=xr.document||{},$n.gsap=kn,(xr.gsapVersions||(xr.gsapVersions=[])).push(kn.version),pb(bc||xr.GreenSockGlobals||!xr.gsap&&xr||{}),Db.forEach(Lb)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(g){return setTimeout(g,s-d.time*1e3+1|0)},Ha=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ha=0,c=Fa},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){o=1e3/(g||240),s=d.time*1e3+o},add:function(g,p,x){var v=p?function(b,E,R,A){g(b,E,R,A),d.remove(v)}:g;return d.remove(g),a[x?"unshift":"push"](v),Fs(),v},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),Fs=function(){return!Ha&&Nn.wake()},Qe={},$A=/^[\d.\-M][\d.\-,\s]/,WA=/["']/g,jA=function(e){for(var t={},r=e.substr(1,e.length-3).split(":"),i=r[0],o=1,s=r.length,a,l,c;o<s;o++)l=r[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(WA,"").trim():+c,i=l.substr(a+1).trim();return t},XA=function(e){var t=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<r?e.indexOf(")",r+1):r)},YA=function(e){var t=(e+"").split("("),r=Qe[t[0]];return r&&t.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[jA(t[1])]:XA(e).split(",").map(vb)):Qe._CE&&$A.test(e)?Qe._CE("",e):r},Bb=function(e){return function(t){return 1-e(1-t)}},Nb=function n(e,t){for(var r=e._first,i;r;)r instanceof bn?n(r,t):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==t&&(r.timeline?n(r.timeline,t):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=t)),r=r._next},yo=function(e,t){return e&&(Ot(e)?e:Qe[e]||YA(e))||t},ko=function(e,t,r,i){r===void 0&&(r=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:r,easeInOut:i},s;return Tn(e,function(a){Qe[a]=$n[a]=o,Qe[s=a.toLowerCase()]=r;for(var l in o)Qe[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Qe[a+"."+l]=o[l]}),o},Fb=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ku=function n(e,t,r){var i=t>=1?t:1,o=(r||(e?.3:.45))/(t<1?t:1),s=o/sf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*SA((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Fb(a);return o=sf/o,l.config=function(c,u){return n(e,c,u)},l},Zu=function n(e,t){t===void 0&&(t=1.70158);var r=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?r:e==="in"?function(o){return 1-r(1-o)}:Fb(r);return i.config=function(o){return n(e,o)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ko(n+",Power"+(t-1),e?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(r*2,t)/2:1-Math.pow((1-r)*2,t)/2})});Qe.Linear.easeNone=Qe.none=Qe.Linear.easeIn;ko("Elastic",Ku("in"),Ku("out"),Ku());(function(n,e){var t=1/e,r=2*t,i=2.5*t,o=function(a){return a<t?n*a*a:a<r?n*Math.pow(a-1.5/e,2)+.75:a<i?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ko("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);ko("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ko("Circ",function(n){return-(lb(1-n*n)-1)});ko("Sine",function(n){return n===1?1:-xA(n*vA)+1});ko("Back",Zu("in"),Zu("out"),Zu());Qe.SteppedEase=Qe.steps=$n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var r=1/e,i=e+(t?0:1),o=t?1:0,s=1-an;return function(a){return((i*ul(0,s,a)|0)+o)*r}}};Os.ease=Qe["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return xh+=n+","+n+"Params,"});var zb=function(e,t){this.id=yA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_b,this.set=t?t.getSetter:Eh},Va=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ns(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Ha||Nn.wake()}var e=n.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,Ns(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(Fs(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Yc(this,r),!o._dp||o.parent||Sb(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Cr(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===an||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),bb(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+tg(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+tg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*o,i):this._repeat?Bs(this._tTime,o)+1:1},e.timeScale=function(r,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var o=this.parent&&this._ts?xc(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(ul(-Math.abs(this._delay),this._tDur,o),i!==!1),Xc(this),RA(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==an&&(this._tTime-=an)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Cr(i,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(En(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xc(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=CA);var i=Jt;return Jt=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Jt=i,this},e.globalTime=function(r){for(var i=this,o=arguments.length?r:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):o},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,ng(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,ng(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(Kn(this,r),En(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,En(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,o;return!!(!r||this._ts&&this._initted&&r.isActive()&&(o=r.rawTime(!0))>=i&&o<this.endTime(!0)-an)},e.eventCallback=function(r,i,o){var s=this.vars;return arguments.length>1?(i?(s[r]=i,o&&(s[r+"Params"]=o),r==="onUpdate"&&(this._onUpdate=i)):delete s[r],this):s[r]},e.then=function(r){var i=this;return new Promise(function(o){var s=Ot(r)?r:yb,a=function(){var c=i.then;i.then=null,Ot(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),o(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ia(this)},n}();Wn(Va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var bn=function(n){ab(e,n);function e(r,i){var o;return r===void 0&&(r={}),o=n.call(this,r)||this,o.labels={},o.smoothChildTiming=!!r.smoothChildTiming,o.autoRemoveChildren=!!r.autoRemoveChildren,o._sort=En(r.sortChildren),Rt&&Cr(r.parent||Rt,Yr(o),i),r.reversed&&o.reverse(),r.paused&&o.paused(!0),r.scrollTrigger&&Mb(Yr(o),r.scrollTrigger),o}var t=e.prototype;return t.to=function(i,o,s){return va(0,arguments,this),this},t.from=function(i,o,s){return va(1,arguments,this),this},t.fromTo=function(i,o,s,a){return va(2,arguments,this),this},t.set=function(i,o,s){return o.duration=0,o.parent=this,ba(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new zt(i,o,Kn(this,s),1),this},t.call=function(i,o,s){return Cr(this,zt.delayedCall(0,i,o),s)},t.staggerTo=function(i,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new zt(i,s,Kn(this,l)),this},t.staggerFrom=function(i,o,s,a,l,c,u){return s.runBackwards=1,ba(s).immediateRender=En(s.immediateRender),this.staggerTo(i,o,s,a,l,c,u)},t.staggerFromTo=function(i,o,s,a,l,c,u,d){return a.startAt=s,ba(a).immediateRender=En(a.immediateRender),this.staggerTo(i,o,a,l,c,u,d)},t.render=function(i,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ht(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,_,m,g,p,x,v,b,E,R,A;if(this!==Rt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,b=this._start,v=this._ts,p=!v,d&&(c||(a=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,o,s);if(f=Ht(u%g),u===l?(m=this._repeat,f=c):(E=Ht(u/g),m=~~E,m&&m===E&&(f=c,m--),f>c&&(f=c)),E=Bs(this._tTime,g),!a&&this._tTime&&E!==m&&this._tTime-E*g-this._dur<=0&&(E=m),R&&m&1&&(f=c-f,A=1),m!==E&&!this._lock){var P=R&&E&1,y=P===(R&&m&1);if(m<E&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ht(m*g)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Nb(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=LA(this,Ht(a),Ht(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!o&&!m&&(Hn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,o,s),f!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=-1e-8);break}}h=_}else{h=this._last;for(var M=i<0?i:f;h;){if(_=h._prev,(h._act||M<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(M-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(M-h._start)*h._ts,o,s||Jt&&(h._initted||h._startAt)),f!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=M?-1e-8:an);break}}h=_}}if(x&&!o&&(this.pause(),x.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=b,Xc(this),this.render(i,o,s);this._onUpdate&&!o&&Hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zi(this,1),!o&&!(i<0&&!a)&&(u||a||!l)&&(Hn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,o){var s=this;if(oi(o)||(o=Kn(this,o,i)),!(i instanceof Va)){if(ln(i))return i.forEach(function(a){return s.add(a,o)}),this;if(Kt(i))return this.addLabel(i,o);if(Ot(i))i=zt.delayedCall(0,i);else return this}return this!==i?Cr(this,i,o):this},t.getChildren=function(i,o,s,a){i===void 0&&(i=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?o&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(i){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===i)return o[s]},t.remove=function(i){return Kt(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(i.parent===this&&jc(this,i),i===this._recent&&(this._recent=this._last),vo(this))},t.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),n.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},t.addLabel=function(i,o){return this.labels[i]=Kn(this,o),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,o,s){var a=zt.delayedCall(0,o||Fa,s);return a.data="isPause",this._hasPause=1,Cr(this,a,Kn(this,i))},t.removePause=function(i){var o=this._first;for(i=Kn(this,i);o;)o._start===i&&o.data==="isPause"&&zi(o),o=o._next},t.killTweensOf=function(i,o,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)Ai!==a[l]&&a[l].kill(i,o);return this},t.getTweensOf=function(i,o){for(var s=[],a=Jn(i),l=this._first,c=oi(o),u;l;)l instanceof zt?EA(l._targets,a)&&(c?(!Ai||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,o){o=o||{};var s=this,a=Kn(s,i),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=zt.to(s,Wn({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||an,onStart:function(){if(s.pause(),!h){var g=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==g&&Ns(_,g,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},o));return f?_.render(0):_},t.tweenFromTo=function(i,o,s){return this.tweenTo(o,Wn({startAt:{time:Kn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),rg(this,Kn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),rg(this,Kn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+an)},t.shiftChildren=function(i,o,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=i);return vo(this)},t.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return n.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vo(this)},t.totalDuration=function(i){var o=0,s=this,a=s._last,l=kr,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Cr(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;Ns(s,s===Rt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(Rt._ts&&(bb(Rt,xc(i,Rt)),gb=Nn.frame),Nn.frame>=Qm){Qm+=Gn.autoSleep||120;var o=Rt._first;if((!o||!o._ts)&&Gn.autoSleep&&Nn._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Nn.sleep()}}},e}(Va);Wn(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var qA=function(e,t,r,i,o,s,a){var l=new An(this._pt,e,t,0,1,jb,null,o),c=0,u=0,d,f,h,_,m,g,p,x;for(l.b=r,l.e=i,r+="",i+="",(p=~i.indexOf("random("))&&(i=za(i)),s&&(x=[r,i],s(x,e,t),r=x[0],i=x[1]),f=r.match(Xu)||[];d=Xu.exec(i);)_=d[0],m=i.substring(c,d.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:_.charAt(1)==="="?xs(g,_)-g:parseFloat(_)-g,m:h&&h<4?Math.round:0},c=Xu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(db.test(i)||p)&&(l.e=0),this._pt=l,l},Mh=function(e,t,r,i,o,s,a,l,c,u){Ot(i)&&(i=i(o||0,e,s));var d=e[t],f=r!=="get"?r:Ot(d)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Ot(d)?c?eR:$b:Ch,_;if(Kt(i)&&(~i.indexOf("random(")&&(i=za(i)),i.charAt(1)==="="&&(_=xs(f,i)+(sn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||mf)return!isNaN(f*i)&&i!==""?(_=new An(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?nR:Wb,0,h),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&vh(t,i),qA.call(this,e,t,f,i,h,l||Gn.stringFilter,c))},KA=function(e,t,r,i,o){if(Ot(e)&&(e=ya(e,o,t,r,i)),!Ir(e)||e.style&&e.nodeType||ln(e)||cb(e))return Kt(e)?ya(e,o,t,r,i):e;var s={},a;for(a in e)s[a]=ya(e[a],o,t,r,i);return s},Hb=function(e,t,r,i,o,s){var a,l,c,u;if(Un[e]&&(a=new Un[e]).init(o,a.rawVars?t[e]:KA(t[e],i,o,s,r),r,i,s)!==!1&&(r._pt=l=new An(r._pt,o,e,0,1,a.render,a,0,a.priority),r!==cs))for(c=r._ptLookup[r._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ai,mf,wh=function n(e,t,r){var i=e.vars,o=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,_=e._dur,m=e._startAt,g=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:g,v=e._overwrite==="auto"&&!mh,b=e.timeline,E,R,A,P,y,M,D,O,U,Y,J,V,$;if(b&&(!f||!o)&&(o="none"),e._ease=yo(o,Os.ease),e._yEase=d?Bb(yo(d===!0?o:d,Os.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!b&&!!i.runBackwards,!b||f&&!i.stagger){if(O=g[0]?bo(g[0]).harness:0,V=O&&i[O.prop],E=yc(i,yh),m&&(m._zTime<0&&m.progress(1),t<0&&u&&a&&!h?m.render(-1,!0):m.revert(u&&_?rc:wA),m._lazy=0),s){if(zi(e._startAt=zt.set(g,Wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&En(l),startAt:null,delay:0,onUpdate:c&&function(){return Hn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt||!a&&!h)&&e._startAt.revert(rc),a&&_&&t<=0&&r<=0){t&&(e._zTime=t);return}}else if(u&&_&&!m){if(t&&(a=!1),A=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&En(l),immediateRender:a,stagger:0,parent:p},E),V&&(A[O.prop]=V),zi(e._startAt=zt.set(g,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt?e._startAt.revert(rc):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,an,an);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&En(l)||l&&!_,R=0;R<g.length;R++){if(y=g[R],D=y._gsap||Sh(g)[R]._gsap,e._ptLookup[R]=Y={},cf[D.id]&&Ii.length&&vc(),J=x===g?R:x.indexOf(y),O&&(U=new O).init(y,V||E,e,J,x)!==!1&&(e._pt=P=new An(e._pt,y,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(z){Y[z]=P}),U.priority&&(M=1)),!O||V)for(A in E)Un[A]&&(U=Hb(A,E,e,J,y,x))?U.priority&&(M=1):Y[A]=P=Mh.call(e,y,A,"get",E[A],J,x,0,i.stringFilter);e._op&&e._op[R]&&e.kill(y,e._op[R]),v&&e._pt&&(Ai=e,Rt.killTweensOf(y,Y,e.globalTime(t)),$=!e.parent,Ai=0),e._pt&&l&&(cf[D.id]=1)}M&&Xb(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&b.render(kr,!0,!0)},ZA=function(e,t,r,i,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return mf=1,e.vars[t]="+=0",wh(e,a),mf=0,l?Na(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!o?i:u.s+(i||0)+s*u.c,u.c=r-u.s,d.e&&(d.e=Ut(r)+sn(d.e)),d.b&&(d.b=u.s+sn(d.b))},JA=function(e,t){var r=e[0]?bo(e[0]).harness:0,i=r&&r.aliases,o,s,a,l;if(!i)return t;o=Us({},t);for(s in i)if(s in o)for(l=i[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},QA=function(e,t,r,i){var o=t.ease||i||"power1.inOut",s,a;if(ln(t))a=r[e]||(r[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=r[s]||(r[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},ya=function(e,t,r,i,o){return Ot(e)?e.call(t,r,i,o):Kt(e)&&~e.indexOf("random(")?za(e):e},Vb=xh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Gb={};Tn(Vb+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Gb[n]=1});var zt=function(n){ab(e,n);function e(r,i,o,s){var a;typeof i=="number"&&(o.duration=i,i=o,o=null),a=n.call(this,s?i:ba(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,x=i.parent||Rt,v=(ln(r)||cb(r)?oi(r[0]):"length"in i)?[r]:Jn(r),b,E,R,A,P,y,M,D;if(a._targets=v.length?Sh(v):Na("GSAP target "+r+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,_||f||Hl(c)||Hl(u)){if(i=a.vars,b=a.timeline=new bn({data:"nested",defaults:m||{},targets:x&&x.data==="nested"?x.vars.targets:v}),b.kill(),b.parent=b._dp=Yr(a),b._start=0,f||Hl(c)||Hl(u)){if(A=v.length,M=f&&Tb(f),Ir(f))for(P in f)~Vb.indexOf(P)&&(D||(D={}),D[P]=f[P]);for(E=0;E<A;E++)R=yc(i,Gb),R.stagger=0,p&&(R.yoyoEase=p),D&&Us(R,D),y=v[E],R.duration=+ya(c,Yr(a),E,y,v),R.delay=(+ya(u,Yr(a),E,y,v)||0)-a._delay,!f&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),b.to(y,R,M?M(E,y,v):0),b._ease=Qe.none;b.duration()?c=u=0:a.timeline=0}else if(_){ba(Wn(b.vars.defaults,{ease:"none"})),b._ease=yo(_.ease||i.ease||"none");var O=0,U,Y,J;if(ln(_))_.forEach(function(V){return b.to(v,V,">")}),b.duration();else{R={};for(P in _)P==="ease"||P==="easeEach"||QA(P,_[P],R,_.easeEach);for(P in R)for(U=R[P].sort(function(V,$){return V.t-$.t}),O=0,E=0;E<U.length;E++)Y=U[E],J={ease:Y.e,duration:(Y.t-(E?U[E-1].t:0))/100*c},J[P]=Y.v,b.to(v,J,O),O+=J.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return h===!0&&!mh&&(Ai=Yr(a),Rt.killTweensOf(v),Ai=0),Cr(x,Yr(a),o),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!_&&a._start===Ht(x._time)&&En(d)&&PA(Yr(a))&&x.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),g&&Mb(Yr(a),g),a}var t=e.prototype;return t.render=function(i,o,s){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-an&&!u?l:i<an?0:i,f,h,_,m,g,p,x,v,b;if(!c)DA(this,i,o,s);else if(d!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,o,s);if(f=Ht(d%m),d===l?(_=this._repeat,f=c):(g=Ht(d/m),_=~~g,_&&_===g?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(b=this._yEase,f=c-f),g=Bs(this._tTime,m),f===a&&!s&&this._initted&&_===g)return this._tTime=d,this;_!==g&&(v&&this._yEase&&Nb(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==m&&this._initted&&(this._lock=s=1,this.render(Ht(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(wb(this,u?i:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(i,o,s)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(b||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!a&&!o&&!_&&(Hn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(u&&uf(this,i,o,s),Hn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!o&&this.parent&&Hn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&uf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&zi(this,1),!o&&!(u&&!a)&&(d||a||p)&&(Hn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),n.prototype.invalidate.call(this,i)},t.resetTo=function(i,o,s,a,l){Ha||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||wh(this,c),u=this._ease(c/this._dur),ZA(this,i,o,s,a,u,c,l)?this.resetTo(i,o,s,a,1):(Yc(this,0),this.parent||xb(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Jt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,Ai&&Ai.vars.overwrite!==!0)._first||ia(this),this.parent&&s!==this.timeline.totalDuration()&&Ns(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Jn(i):a,c=this._ptLookup,u=this._pt,d,f,h,_,m,g,p;if((!o||o==="all")&&AA(a,l))return o==="all"&&(this._pt=0),ia(this);for(d=this._op=this._op||[],o!=="all"&&(Kt(o)&&(m={},Tn(o,function(x){return m[x]=1}),o=m),o=JA(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,_=f,h={}):(h=d[p]=d[p]||{},_=o);for(m in _)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&jc(this,g,"_pt"),delete f[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&ia(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return va(1,arguments)},e.delayedCall=function(i,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,o,s){return va(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,s){return Rt.killTweensOf(i,o,s)},e}(Va);Wn(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(n){zt[n]=function(){var e=new bn,t=ff.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Ch=function(e,t,r){return e[t]=r},$b=function(e,t,r){return e[t](r)},eR=function(e,t,r,i){return e[t](i.fp,r)},tR=function(e,t,r){return e.setAttribute(t,r)},Eh=function(e,t){return Ot(e[t])?$b:gh(e[t])&&e.setAttribute?tR:Ch},Wb=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},nR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jb=function(e,t){var r=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=t.c}t.set(t.t,t.p,i,t)},Th=function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next},rR=function(e,t,r,i){for(var o=this._pt,s;o;)s=o._next,o.p===i&&o.modifier(e,t,r),o=s},iR=function(e){for(var t=this._pt,r,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?jc(this,t,"_pt"):t.dep||(r=1),t=i;return!r},oR=function(e,t,r,i){i.mSet(e,t,i.m.call(i.tween,r,i.mt),i)},Xb=function(e){for(var t=e._pt,r,i,o,s;t;){for(r=t._next,i=o;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:o=t,(t._next=i)?i._prev=t:s=t,t=r}e._pt=o},An=function(){function n(t,r,i,o,s,a,l,c,u){this.t=r,this.s=o,this.c=s,this.p=i,this.r=a||Wb,this.d=l||this,this.set=c||Ch,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(r,i,o){this.mSet=this.mSet||this.set,this.set=oR,this.m=r,this.mt=o,this.tween=i},n}();Tn(xh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return yh[n]=1});$n.TweenMax=$n.TweenLite=zt;$n.TimelineLite=$n.TimelineMax=bn;Rt=new bn({sortChildren:!1,defaults:Os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=Ub;var xo=[],oc={},sR=[],og=0,aR=0,Ju=function(e){return(oc[e]||sR).map(function(t){return t()})},gf=function(){var e=Date.now(),t=[];e-og>2&&(Ju("matchMediaInit"),xo.forEach(function(r){var i=r.queries,o=r.conditions,s,a,l,c;for(a in i)s=xr.matchMedia(i[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(r.revert(),l&&t.push(r))}),Ju("matchMediaRevert"),t.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),og=e,Ju("matchMedia"))},Yb=function(){function n(t,r){this.selector=r&&hf(r),this.data=[],this._r=[],this.isReverted=!1,this.id=aR++,t&&this.add(t)}var e=n.prototype;return e.add=function(r,i,o){Ot(r)&&(o=i,i=r,r=Ot);var s=this,a=function(){var c=Ct,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=hf(o)),Ct=s,d=i.apply(s,arguments),Ot(d)&&s._r.push(d),Ct=c,s.selector=u,s.isReverted=!1,d};return s.last=a,r===Ot?a(s,function(l){return s.add(null,l)}):r?s[r]=a:a},e.ignore=function(r){var i=Ct;Ct=null,r(this),Ct=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof n?r.push.apply(r,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var o=this;if(r?function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(r)}),l=o.data.length;l--;)c=o.data[l],c instanceof bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(r);o._r.forEach(function(u){return u(r,o)}),o.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var s=xo.length;s--;)xo[s].id===this.id&&xo.splice(s,1)},e.revert=function(r){this.kill(r||{})},n}(),lR=function(){function n(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=n.prototype;return e.add=function(r,i,o){Ir(r)||(r={matches:r});var s=new Yb(0,o||this.scope),a=s.conditions={},l,c,u;Ct&&!s.selector&&(s.selector=Ct.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=r;for(c in r)c==="all"?u=1:(l=xr.matchMedia(r[c]),l&&(xo.indexOf(s)<0&&xo.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(gf):l.addEventListener("change",gf)));return u&&i(s,function(d){return s.add(null,d)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},n}(),Sc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(i){return Lb(i)})},timeline:function(e){return new bn(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,r,i){Kt(e)&&(e=Jn(e)[0]);var o=bo(e||{}).get,s=r?yb:vb;return r==="native"&&(r=""),e&&(t?s((Un[t]&&Un[t].get||o)(e,t,r,i)):function(a,l,c){return s((Un[a]&&Un[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,r){if(e=Jn(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,r)}),o=i.length;return function(u){for(var d=o;d--;)i[d](u)}}e=e[0]||{};var s=Un[t],a=bo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;cs._pt=0,d.init(e,r?u+r:u,cs,0,[e]),d.render(1,d),cs._pt&&Th(1,cs)}:a.set(e,l);return s?c:function(u){return c(e,l,r?u+r:u,a,1)}},quickTo:function(e,t,r){var i,o=kn.to(e,Wn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),r||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yo(e.ease,Os.ease)),eg(Os,e||{})},config:function(e){return eg(Gn,e||{})},registerEffect:function(e){var t=e.name,r=e.effect,i=e.plugins,o=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Un[a]&&!$n[a]&&Na(t+" effect requires "+a+" plugin.")}),Yu[t]=function(a,l,c){return r(Jn(a),Wn(l||{},o),c)},s&&(bn.prototype[t]=function(a,l,c){return this.add(Yu[t](a,Ir(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Qe[e]=yo(t)},parseEase:function(e,t){return arguments.length?yo(e,t):Qe},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var r=new bn(e),i,o;for(r.smoothChildTiming=En(e.smoothChildTiming),Rt.remove(r),r._dp=0,r._time=r._tTime=Rt._time,i=Rt._first;i;)o=i._next,(t||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&Cr(r,i,i._start-i._delay),i=o;return Cr(Rt,r,0),r},context:function(e,t){return e?new Yb(e,t):Ct},matchMedia:function(e){return new lR(e)},matchMediaRefresh:function(){return xo.forEach(function(e){var t=e.conditions,r,i;for(i in t)t[i]&&(t[i]=!1,r=1);r&&e.revert()})||gf()},addEventListener:function(e,t){var r=oc[e]||(oc[e]=[]);~r.indexOf(t)||r.push(t)},removeEventListener:function(e,t){var r=oc[e],i=r&&r.indexOf(t);i>=0&&r.splice(i,1)},utils:{wrap:zA,wrapYoyo:HA,distribute:Tb,random:Rb,snap:Ab,normalize:FA,getUnit:sn,clamp:OA,splitColor:Ib,toArray:Jn,selector:hf,mapRange:kb,pipe:BA,unitize:NA,interpolate:VA,shuffle:Eb},install:pb,effects:Yu,ticker:Nn,updateRoot:bn.updateRoot,plugins:Un,globalTimeline:Rt,core:{PropTween:An,globals:mb,Tween:zt,Timeline:bn,Animation:Va,getCache:bo,_removeLinkedListItem:jc,reverting:function(){return Jt},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return mh=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Sc[n]=zt[n]});Nn.add(bn.updateRoot);cs=Sc.to({},{duration:0});var cR=function(e,t){for(var r=e._pt;r&&r.p!==t&&r.op!==t&&r.fp!==t;)r=r._next;return r},uR=function(e,t){var r=e._targets,i,o,s;for(i in t)for(o=r.length;o--;)s=e._ptLookup[o][i],s&&(s=s.d)&&(s._pt&&(s=cR(s,i)),s&&s.modifier&&s.modifier(t[i],e,r[o],i))},Qu=function(e,t){return{name:e,rawVars:1,init:function(i,o,s){s._onInit=function(a){var l,c;if(Kt(o)&&(l={},Tn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}uR(a,o)}}}},kn=Sc.registerPlugin({name:"attr",init:function(e,t,r,i,o){var s,a,l;this.tween=r;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],i,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var r=t._pt;r;)Jt?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,t){for(var r=t.length;r--;)this.add(e,r,e[r]||0,t[r],0,0,0,0,0,1)}},Qu("roundProps",pf),Qu("modifiers"),Qu("snap",Ab))||Sc;zt.version=bn.version=kn.version="3.12.7";hb=1;_h()&&Fs();Qe.Power0;Qe.Power1;Qe.Power2;Qe.Power3;Qe.Power4;Qe.Linear;Qe.Quad;Qe.Cubic;Qe.Quart;Qe.Quint;Qe.Strong;Qe.Elastic;Qe.Back;Qe.SteppedEase;Qe.Bounce;Qe.Sine;Qe.Expo;Qe.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sg,Ri,Ss,Ah,po,ag,Rh,dR=function(){return typeof window<"u"},si={},ao=180/Math.PI,Ms=Math.PI/180,Zo=Math.atan2,lg=1e8,Ph=/([A-Z])/g,fR=/(left|right|width|margin|padding|x)/i,hR=/[\s,\(]\S/,Tr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_f=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gR=function(e,t){var r=t.s+t.c*e;t.set(t.t,t.p,~~(r+(r<0?-.5:.5))+t.u,t)},qb=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Kb=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_R=function(e,t,r){return e.style[t]=r},bR=function(e,t,r){return e.style.setProperty(t,r)},vR=function(e,t,r){return e._gsap[t]=r},yR=function(e,t,r){return e._gsap.scaleX=e._gsap.scaleY=r},xR=function(e,t,r,i,o){var s=e._gsap;s.scaleX=s.scaleY=r,s.renderTransform(o,s)},SR=function(e,t,r,i,o){var s=e._gsap;s[t]=r,s.renderTransform(o,s)},Pt="transform",Rn=Pt+"Origin",MR=function n(e,t){var r=this,i=this.target,o=i.style,s=i._gsap;if(e in si&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Tr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return r.tfm[a]=qr(i,a)}):this.tfm[e]=s.x?s[e]:qr(i,e),e===Rn&&(this.tfm.zOrigin=s.zOrigin);else return Tr.transform.split(",").forEach(function(a){return n.call(r,a,t)});if(this.props.indexOf(Pt)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=Pt}(o||t)&&this.props.push(e,t,o[e])},Zb=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},wR=function(){var e=this.props,t=this.target,r=t.style,i=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?r[e[o]]=e[o+2]:r.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Ph,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Rh(),(!o||!o.isStart)&&!r[Pt]&&(Zb(r),i.zOrigin&&r[Rn]&&(r[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jb=function(e,t){var r={target:e,props:[],revert:wR,save:MR};return e._gsap||kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return r.save(i)}),r},Qb,bf=function(e,t){var r=Ri.createElementNS?Ri.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ri.createElement(e);return r&&r.style?r:Ri.createElement(e)},Dr=function n(e,t,r){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ph,"-$1").toLowerCase())||i.getPropertyValue(t)||!r&&n(e,zs(t)||t,1)||""},cg="O,Moz,ms,Ms,Webkit".split(","),zs=function(e,t,r){var i=t||po,o=i.style,s=5;if(e in o&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(cg[s]+e in o););return s<0?null:(s===3?"ms":s>=0?cg[s]:"")+e},vf=function(){dR()&&window.document&&(sg=window,Ri=sg.document,Ss=Ri.documentElement,po=bf("div")||{style:{}},bf("div"),Pt=zs(Pt),Rn=Pt+"Origin",po.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qb=!!zs("perspective"),Rh=kn.core.reverting,Ah=1)},ug=function(e){var t=e.ownerSVGElement,r=bf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),o;i.style.display="block",r.appendChild(i),Ss.appendChild(r);try{o=i.getBBox()}catch{}return r.removeChild(i),Ss.removeChild(r),o},dg=function(e,t){for(var r=t.length;r--;)if(e.hasAttribute(t[r]))return e.getAttribute(t[r])},ev=function(e){var t,r;try{t=e.getBBox()}catch{t=ug(e),r=1}return t&&(t.width||t.height)||r||(t=ug(e)),t&&!t.width&&!t.x&&!t.y?{x:+dg(e,["x","cx","x1"])||0,y:+dg(e,["y","cy","y1"])||0,width:0,height:0}:t},tv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ev(e))},To=function(e,t){if(t){var r=e.style,i;t in si&&t!==Rn&&(t=Pt),r.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),r.removeProperty(i==="--"?t:t.replace(Ph,"-$1").toLowerCase())):r.removeAttribute(t)}},Pi=function(e,t,r,i,o,s){var a=new An(e._pt,t,r,0,1,s?Kb:qb);return e._pt=a,a.b=i,a.e=o,e._props.push(r),a},fg={deg:1,rad:1,turn:1},CR={grid:1,flex:1},Hi=function n(e,t,r,i){var o=parseFloat(r)||0,s=(r+"").trim().substr((o+"").length)||"px",a=po.style,l=fR.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",_,m,g,p;if(i===s||!o||fg[i]||fg[s])return o;if(s!=="px"&&!f&&(o=n(e,t,r,"px")),p=e.getCTM&&tv(e),(h||s==="%")&&(si[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Ut(h?o/_*d:o/100*_);if(a[l?"width":"height"]=d+(f?s:i),m=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ri||!m.appendChild)&&(m=Ri.body),g=m._gsap,g&&h&&g.width&&l&&g.time===Nn.time&&!g.uncache)return Ut(o/g.width*d);if(h&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+i,_=e[u],x?e.style[t]=x:To(e,t)}else(h||s==="%")&&!CR[Dr(m,"display")]&&(a.position=Dr(e,"position")),m===e&&(a.position="static"),m.appendChild(po),_=po[u],m.removeChild(po),a.position="absolute";return l&&h&&(g=bo(m),g.time=Nn.time,g.width=m[u]),Ut(f?_*o/d:_&&o?d/_*o:0)},qr=function(e,t,r,i){var o;return Ah||vf(),t in Tr&&t!=="transform"&&(t=Tr[t],~t.indexOf(",")&&(t=t.split(",")[0])),si[t]&&t!=="transform"?(o=$a(e,i),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:wc(Dr(e,Rn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=Mc[t]&&Mc[t](e,t,r)||Dr(e,t)||_b(e,t)||(t==="opacity"?1:0))),r&&!~(o+"").trim().indexOf(" ")?Hi(e,t,o,r)+r:o},ER=function(e,t,r,i){if(!r||r==="none"){var o=zs(t,e,1),s=o&&Dr(e,o,1);s&&s!==r?(t=o,r=s):t==="borderColor"&&(r=Dr(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,jb),l=0,c=0,u,d,f,h,_,m,g,p,x,v,b,E;if(a.b=r,a.e=i,r+="",i+="",i==="auto"&&(m=e.style[t],e.style[t]=i,i=Dr(e,t)||i,m?e.style[t]=m:To(e,t)),u=[r,i],Ub(u),r=u[0],i=u[1],f=r.match(ls)||[],E=i.match(ls)||[],E.length){for(;d=ls.exec(i);)g=d[0],x=i.substring(l,d.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(m=f[c++]||"")&&(h=parseFloat(m)||0,b=m.substr((h+"").length),g.charAt(1)==="="&&(g=xs(h,g)+b),p=parseFloat(g),v=g.substr((p+"").length),l=ls.lastIndex-v.length,v||(v=v||Gn.units[t]||b,l===i.length&&(i+=v,a.e+=v)),b!==v&&(h=Hi(e,t,m,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:h,c:p-h,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Kb:qb;return db.test(i)&&(a.e=0),this._pt=a,a},hg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},TR=function(e){var t=e.split(" "),r=t[0],i=t[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),t[0]=hg[r]||r,t[1]=hg[i]||i,t.join(" ")},AR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var r=t.t,i=r.style,o=t.u,s=r._gsap,a,l,c;if(o==="all"||o===!0)i.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],si[a]&&(l=1,a=a==="transformOrigin"?Rn:Pt),To(r,a);l&&(To(r,Pt),s&&(s.svg&&r.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",$a(r,1),s.uncache=1,Zb(i)))}},Mc={clearProps:function(e,t,r,i,o){if(o.data!=="isFromStart"){var s=e._pt=new An(e._pt,t,r,0,0,AR);return s.u=i,s.pr=-10,s.tween=o,e._props.push(r),1}}},Ga=[1,0,0,1,0,0],nv={},rv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pg=function(e){var t=Dr(e,Pt);return rv(t)?Ga:t.substr(7).match(ub).map(Ut)},kh=function(e,t){var r=e._gsap||bo(e),i=e.style,o=pg(e),s,a,l,c;return r.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?Ga:o):(o===Ga&&!e.offsetParent&&e!==Ss&&!r.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ss.appendChild(e)),o=pg(e),l?i.display=l:To(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):Ss.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},yf=function(e,t,r,i,o,s){var a=e._gsap,l=o||kh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],_=l[1],m=l[2],g=l[3],p=l[4],x=l[5],v=t.split(" "),b=parseFloat(v[0])||0,E=parseFloat(v[1])||0,R,A,P,y;r?l!==Ga&&(A=h*g-_*m)&&(P=b*(g/A)+E*(-m/A)+(m*x-g*p)/A,y=b*(-_/A)+E*(h/A)-(h*x-_*p)/A,b=P,E=y):(R=ev(e),b=R.x+(~v[0].indexOf("%")?b/100*R.width:b),E=R.y+(~(v[1]||v[0]).indexOf("%")?E/100*R.height:E)),i||i!==!1&&a.smooth?(p=b-c,x=E-u,a.xOffset=d+(p*h+x*m)-p,a.yOffset=f+(p*_+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!r,e.style[Rn]="0px 0px",s&&(Pi(s,a,"xOrigin",c,b),Pi(s,a,"yOrigin",u,E),Pi(s,a,"xOffset",d,a.xOffset),Pi(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+E)},$a=function(e,t){var r=e._gsap||new zb(e);if("x"in r&&!t&&!r.uncache)return r;var i=e.style,o=r.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=Dr(e,Rn)||"0",u,d,f,h,_,m,g,p,x,v,b,E,R,A,P,y,M,D,O,U,Y,J,V,$,z,he,pe,_e,Me,Fe,Q,fe;return u=d=f=m=g=p=x=v=b=0,h=_=1,r.svg=!!(e.getCTM&&tv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),i.scale=i.rotate=i.translate="none"),A=kh(e,r.svg),r.svg&&(r.uncache?(z=e.getBBox(),c=r.xOrigin-z.x+"px "+(r.yOrigin-z.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),yf(e,$||c,!!$||r.originIsAbsolute,r.smooth!==!1,A)),E=r.xOrigin||0,R=r.yOrigin||0,A!==Ga&&(D=A[0],O=A[1],U=A[2],Y=A[3],u=J=A[4],d=V=A[5],A.length===6?(h=Math.sqrt(D*D+O*O),_=Math.sqrt(Y*Y+U*U),m=D||O?Zo(O,D)*ao:0,x=U||Y?Zo(U,Y)*ao+m:0,x&&(_*=Math.abs(Math.cos(x*Ms))),r.svg&&(u-=E-(E*D+R*U),d-=R-(E*O+R*Y))):(fe=A[6],Fe=A[7],pe=A[8],_e=A[9],Me=A[10],Q=A[11],u=A[12],d=A[13],f=A[14],P=Zo(fe,Me),g=P*ao,P&&(y=Math.cos(-P),M=Math.sin(-P),$=J*y+pe*M,z=V*y+_e*M,he=fe*y+Me*M,pe=J*-M+pe*y,_e=V*-M+_e*y,Me=fe*-M+Me*y,Q=Fe*-M+Q*y,J=$,V=z,fe=he),P=Zo(-U,Me),p=P*ao,P&&(y=Math.cos(-P),M=Math.sin(-P),$=D*y-pe*M,z=O*y-_e*M,he=U*y-Me*M,Q=Y*M+Q*y,D=$,O=z,U=he),P=Zo(O,D),m=P*ao,P&&(y=Math.cos(P),M=Math.sin(P),$=D*y+O*M,z=J*y+V*M,O=O*y-D*M,V=V*y-J*M,D=$,J=z),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),h=Ut(Math.sqrt(D*D+O*O+U*U)),_=Ut(Math.sqrt(V*V+fe*fe)),P=Zo(J,V),x=Math.abs(P)>2e-4?P*ao:0,b=Q?1/(Q<0?-Q:Q):0),r.svg&&($=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!rv(Dr(e,Pt)),$&&e.setAttribute("transform",$))),Math.abs(x)>90&&Math.abs(x)<270&&(o?(h*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||r.uncache,r.x=u-((r.xPercent=u&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+s,r.y=d-((r.yPercent=d&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+s,r.z=f+s,r.scaleX=Ut(h),r.scaleY=Ut(_),r.rotation=Ut(m)+a,r.rotationX=Ut(g)+a,r.rotationY=Ut(p)+a,r.skewX=x+a,r.skewY=v+a,r.transformPerspective=b+s,(r.zOrigin=parseFloat(c.split(" ")[2])||!t&&r.zOrigin||0)&&(i[Rn]=wc(c)),r.xOffset=r.yOffset=0,r.force3D=Gn.force3D,r.renderTransform=r.svg?PR:Qb?iv:RR,r.uncache=0,r},wc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ed=function(e,t,r){var i=sn(t);return Ut(parseFloat(t)+parseFloat(Hi(e,"x",r+"px",i)))+i},RR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,iv(e,t)},ro="0deg",Qs="0px",io=") ",iv=function(e,t){var r=t||this,i=r.xPercent,o=r.yPercent,s=r.x,a=r.y,l=r.z,c=r.rotation,u=r.rotationY,d=r.rotationX,f=r.skewX,h=r.skewY,_=r.scaleX,m=r.scaleY,g=r.transformPerspective,p=r.force3D,x=r.target,v=r.zOrigin,b="",E=p==="auto"&&e&&e!==1||p===!0;if(v&&(d!==ro||u!==ro)){var R=parseFloat(u)*Ms,A=Math.sin(R),P=Math.cos(R),y;R=parseFloat(d)*Ms,y=Math.cos(R),s=ed(x,s,A*y*-v),a=ed(x,a,-Math.sin(R)*-v),l=ed(x,l,P*y*-v+v)}g!==Qs&&(b+="perspective("+g+io),(i||o)&&(b+="translate("+i+"%, "+o+"%) "),(E||s!==Qs||a!==Qs||l!==Qs)&&(b+=l!==Qs||E?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+io),c!==ro&&(b+="rotate("+c+io),u!==ro&&(b+="rotateY("+u+io),d!==ro&&(b+="rotateX("+d+io),(f!==ro||h!==ro)&&(b+="skew("+f+", "+h+io),(_!==1||m!==1)&&(b+="scale("+_+", "+m+io),x.style[Pt]=b||"translate(0, 0)"},PR=function(e,t){var r=t||this,i=r.xPercent,o=r.yPercent,s=r.x,a=r.y,l=r.rotation,c=r.skewX,u=r.skewY,d=r.scaleX,f=r.scaleY,h=r.target,_=r.xOrigin,m=r.yOrigin,g=r.xOffset,p=r.yOffset,x=r.forceCSS,v=parseFloat(s),b=parseFloat(a),E,R,A,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ms,c*=Ms,E=Math.cos(l)*d,R=Math.sin(l)*d,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Ms,y=Math.tan(c-u),y=Math.sqrt(1+y*y),A*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),E*=y,R*=y)),E=Ut(E),R=Ut(R),A=Ut(A),P=Ut(P)):(E=d,P=f,R=A=0),(v&&!~(s+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(v=Hi(h,"x",s,"px"),b=Hi(h,"y",a,"px")),(_||m||g||p)&&(v=Ut(v+_-(_*E+m*A)+g),b=Ut(b+m-(_*R+m*P)+p)),(i||o)&&(y=h.getBBox(),v=Ut(v+i/100*y.width),b=Ut(b+o/100*y.height)),y="matrix("+E+","+R+","+A+","+P+","+v+","+b+")",h.setAttribute("transform",y),x&&(h.style[Pt]=y)},kR=function(e,t,r,i,o){var s=360,a=Kt(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?ao:1),c=l-i,u=i+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-360)),d==="cw"&&c<0?c=(c+s*lg)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*lg)%s-~~(c/s)*s)),e._pt=f=new An(e._pt,t,r,i,c,pR),f.e=u,f.u="deg",e._props.push(r),f},mg=function(e,t){for(var r in t)e[r]=t[r];return e},DR=function(e,t,r){var i=mg({},r._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=r.style,a,l,c,u,d,f,h,_;i.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),s[Pt]=t,a=$a(r,1),To(r,Pt),r.setAttribute("transform",c)):(c=getComputedStyle(r)[Pt],s[Pt]=t,a=$a(r,1),s[Pt]=c);for(l in si)c=i[l],u=a[l],c!==u&&o.indexOf(l)<0&&(h=sn(c),_=sn(u),d=h!==_?Hi(r,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new An(e._pt,a,l,d,f-d,_f),e._pt.u=_||0,e._props.push(l));mg(a,i)};Tn("padding,margin,Width,Radius",function(n,e){var t="Top",r="Right",i="Bottom",o="Left",s=(e<3?[t,r,i,o]:[t+o,t+r,i+r,i+o]).map(function(a){return e<2?n+a:"border"+a+n});Mc[e>1?"border"+n:n]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=s.map(function(_){return qr(a,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},s.forEach(function(_,m){return h[_]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(l,h,d)}});var ov={name:"css",register:vf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,i,o){var s=this._props,a=e.style,l=r.vars.startAt,c,u,d,f,h,_,m,g,p,x,v,b,E,R,A,P;Ah||vf(),this.styles=this.styles||Jb(e),P=this.styles.props,this.tween=r;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Un[m]&&Hb(m,t,r,i,e,o)))){if(h=typeof u,_=Mc[m],h==="function"&&(u=u.call(r,i,e,o),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=za(u)),_)_(this,e,m,u,r)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Oi.lastIndex=0,Oi.test(c)||(g=sn(c),p=sn(u)),p?g!==p&&(c=Hi(e,m,c,p)+p):g&&(u+=g),this.add(a,"setProperty",c,u,i,o,0,0,m),s.push(m),P.push(m,0,a[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(r,i,e,o):l[m],Kt(c)&&~c.indexOf("random(")&&(c=za(c)),sn(c+"")||c==="auto"||(c+=Gn.units[m]||sn(qr(e,m))||""),(c+"").charAt(1)==="="&&(c=qr(e,m))):c=qr(e,m),f=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),m in Tr&&(m==="autoAlpha"&&(f===1&&qr(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),Pi(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=Tr[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in si,v){if(this.styles.save(m),b||(E=e._gsap,E.renderTransform&&!t.parseTransform||$a(e,t.parseTransform),R=t.smoothOrigin!==!1&&E.smooth,b=this._pt=new An(this._pt,a,Pt,0,1,E.renderTransform,E,0,-1),b.dep=1),m==="scale")this._pt=new An(this._pt,E,"scaleY",E.scaleY,(x?xs(E.scaleY,x+d):d)-E.scaleY||0,_f),this._pt.u=0,s.push("scaleY",m),m+="X";else if(m==="transformOrigin"){P.push(Rn,0,a[Rn]),u=TR(u),E.svg?yf(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Pi(this,E,"zOrigin",E.zOrigin,p),Pi(this,a,m,wc(c),wc(u)));continue}else if(m==="svgOrigin"){yf(e,u,1,R,0,this);continue}else if(m in nv){kR(this,E,m,f,x?xs(f,x+u):u);continue}else if(m==="smoothOrigin"){Pi(this,E,"smooth",E.smooth,u);continue}else if(m==="force3D"){E[m]=u;continue}else if(m==="transform"){DR(this,u,e);continue}}else m in a||(m=zs(m)||m);if(v||(d||d===0)&&(f||f===0)&&!hR.test(u)&&m in a)g=(c+"").substr((f+"").length),d||(d=0),p=sn(u)||(m in Gn.units?Gn.units[m]:g),g!==p&&(f=Hi(e,m,c,p)),this._pt=new An(this._pt,v?E:a,m,f,(x?xs(f,x+d):d)-f,!v&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?gR:_f),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=mR);else if(m in a)ER.call(this,e,m,c,x?x+u:u);else if(m in e)this.add(e,m,c||e[m],x?x+u:u,i,o);else if(m!=="parseTransform"){vh(m,u);continue}v||(m in a?P.push(m,0,a[m]):typeof e[m]=="function"?P.push(m,2,e[m]()):P.push(m,1,c||e[m])),s.push(m)}}A&&Xb(this)},render:function(e,t){if(t.tween._time||!Rh())for(var r=t._pt;r;)r.r(e,r.d),r=r._next;else t.styles.revert()},get:qr,aliases:Tr,getSetter:function(e,t,r){var i=Tr[t];return i&&i.indexOf(",")<0&&(t=i),t in si&&t!==Rn&&(e._gsap.x||qr(e,"x"))?r&&ag===r?t==="scale"?yR:vR:(ag=r||{})&&(t==="scale"?xR:SR):e.style&&!gh(e.style[t])?_R:~t.indexOf("-")?bR:Eh(e,t)},core:{_removeProperty:To,_getMatrix:kh}};kn.utils.checkPrefix=zs;kn.core.getStyleSaver=Jb;(function(n,e,t,r){var i=Tn(n+","+e+","+t,function(o){si[o]=1});Tn(e,function(o){Gn.units[o]="deg",nv[o]=1}),Tr[i[13]]=n+","+e,Tn(r,function(o){var s=o.split(":");Tr[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Gn.units[n]="px"});kn.registerPlugin(ov);var sv=kn.registerPlugin(ov)||kn;sv.core.Tween;/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let av;const qc=n=>av=n,lv=Symbol();function xf(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var xa;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(xa||(xa={}));function LR(){const n=o0(!0),e=n.run(()=>vn({}));let t=[],r=[];const i=Ff({install(o){qc(i),i._a=o,o.provide(lv,i),o.config.globalProperties.$pinia=i,r.forEach(s=>t.push(s)),r=[]},use(o){return this._a?t.push(o):r.push(o),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return i}const cv=()=>{};function gg(n,e,t,r=cv){n.push(e);const i=()=>{const o=n.indexOf(e);o>-1&&(n.splice(o,1),r())};return!t&&s0()&&cy(i),i}function Jo(n,...e){n.slice().forEach(t=>{t(...e)})}const IR=n=>n(),_g=Symbol(),td=Symbol();function Sf(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],i=n[t];xf(i)&&xf(r)&&n.hasOwnProperty(t)&&!kt(r)&&!ni(r)?n[t]=Sf(i,r):n[t]=r}return n}const OR=Symbol();function UR(n){return!xf(n)||!Object.prototype.hasOwnProperty.call(n,OR)}const{assign:yi}=Object;function BR(n){return!!(kt(n)&&n.effect)}function NR(n,e,t,r){const{state:i,actions:o,getters:s}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=i?i():{});const u=ky(t.state.value[n]);return yi(u,o,Object.keys(s||{}).reduce((d,f)=>(d[f]=Ff(wn(()=>{qc(t);const h=t._s.get(n);return s[f].call(h,h)})),d),{}))}return l=uv(n,c,e,t,r,!0),l}function uv(n,e,t={},r,i,o){let s;const a=yi({actions:{}},t),l={deep:!0};let c,u,d=[],f=[],h;const _=r.state.value[n];!o&&!_&&(r.state.value[n]={}),vn({});let m;function g(P){let y;c=u=!1,typeof P=="function"?(P(r.state.value[n]),y={type:xa.patchFunction,storeId:n,events:h}):(Sf(r.state.value[n],P),y={type:xa.patchObject,payload:P,storeId:n,events:h});const M=m=Symbol();Oc().then(()=>{m===M&&(c=!0)}),u=!0,Jo(d,y,r.state.value[n])}const p=o?function(){const{state:y}=t,M=y?y():{};this.$patch(D=>{yi(D,M)})}:cv;function x(){s.stop(),d=[],f=[],r._s.delete(n)}const v=(P,y="")=>{if(_g in P)return P[td]=y,P;const M=function(){qc(r);const D=Array.from(arguments),O=[],U=[];function Y($){O.push($)}function J($){U.push($)}Jo(f,{args:D,name:M[td],store:E,after:Y,onError:J});let V;try{V=P.apply(this&&this.$id===n?this:E,D)}catch($){throw Jo(U,$),$}return V instanceof Promise?V.then($=>(Jo(O,$),$)).catch($=>(Jo(U,$),Promise.reject($))):(Jo(O,V),V)};return M[_g]=!0,M[td]=y,M},b={_p:r,$id:n,$onAction:gg.bind(null,f),$patch:g,$reset:p,$subscribe(P,y={}){const M=gg(d,P,y.detached,()=>D()),D=s.run(()=>Fn(()=>r.state.value[n],O=>{(y.flush==="sync"?u:c)&&P({storeId:n,type:xa.direct,events:h},O)},yi({},l,y)));return M},$dispose:x},E=Ro(b);r._s.set(n,E);const A=(r._a&&r._a.runWithContext||IR)(()=>r._e.run(()=>(s=o0()).run(()=>e({action:v}))));for(const P in A){const y=A[P];if(kt(y)&&!BR(y)||ni(y))o||(_&&UR(y)&&(kt(y)?y.value=_[P]:Sf(y,_[P])),r.state.value[n][P]=y);else if(typeof y=="function"){const M=v(y,P);A[P]=M,a.actions[P]=y}}return yi(E,A),yi(et(E),A),Object.defineProperty(E,"$state",{get:()=>r.state.value[n],set:P=>{g(y=>{yi(y,P)})}}),r._p.forEach(P=>{yi(E,s.run(()=>P({store:E,app:r._a,pinia:r,options:a})))}),_&&o&&t.hydrate&&t.hydrate(E.$state,_),c=!0,u=!0,E}/*! #__NO_SIDE_EFFECTS__ */function FR(n,e,t){let r;const i=typeof e=="function";r=i?t:e;function o(s,a){const l=f1();return s=s||(l?Rr(lv,null):null),s&&qc(s),s=av,s._s.has(n)||(i?uv(n,e,r,s):NR(n,r,s)),s._s.get(n)}return o.$id=n,o}function dv(n){const e=et(n),t={};for(const r in e){const i=e[r];i.effect?t[r]=wn({get:()=>n[r],set(o){n[r]=o}}):(kt(i)||ni(i))&&(t[r]=Iy(n,r))}return t}const fv=FR("controls",()=>{const n=vn(!0),e=vn(!0),t=vn(!0),r=vn(!0);return{isAnimationActive:n,isZoomActive:e,isRotationActive:t,isPanActive:r,toggleAnimation:l=>{n.value=l},toggleZoom:l=>{e.value=l},toggleRotation:l=>{t.value=l},togglePan:l=>{r.value=l}}});function zR(n,e){return n?n.classList?n.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(n.className):!1}function Kc(n,e){if(n&&e){const t=r=>{zR(n,r)||(n.classList?n.classList.add(r):n.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function HR(){return window.innerWidth-document.documentElement.offsetWidth}function hv(n){for(const e of document==null?void 0:document.styleSheets)try{for(const t of e==null?void 0:e.cssRules)for(const r of t==null?void 0:t.style)if(n.test(r))return{name:r,value:t.style.getPropertyValue(r).trim()}}catch{}return null}function Mf(n="p-overflow-hidden"){const e=hv(/-scrollbar-width$/);e!=null&&e.name&&document.body.style.setProperty(e.name,HR()+"px"),Kc(document.body,n)}function sc(n,e){if(n&&e){const t=r=>{n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function Cc(n="p-overflow-hidden"){const e=hv(/-scrollbar-width$/);e!=null&&e.name&&document.body.style.removeProperty(e.name),sc(document.body,n)}function VR(){let n=window,e=document,t=e.documentElement,r=e.getElementsByTagName("body")[0],i=n.innerWidth||t.clientWidth||r.clientWidth,o=n.innerHeight||t.clientHeight||r.clientHeight;return{width:i,height:o}}function GR(n,e){n&&(typeof e=="string"?n.style.cssText=e:Object.entries(e).forEach(([t,r])=>n.style[t]=r))}function pv(n,e){return n instanceof HTMLElement?n.offsetWidth:0}function Do(n){return typeof HTMLElement=="object"?n instanceof HTMLElement:n&&typeof n=="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}function Ec(n,e={}){if(Do(n)){const t=(r,i)=>{var o,s;const a=(o=n==null?void 0:n.$attrs)!=null&&o[r]?[(s=n==null?void 0:n.$attrs)==null?void 0:s[r]]:[];return[i].flat().reduce((l,c)=>{if(c!=null){const u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){const d=Array.isArray(c)?t(r,c):Object.entries(c).map(([f,h])=>r==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},a)};Object.entries(e).forEach(([r,i])=>{if(i!=null){const o=r.match(/^on(.+)/);o?n.addEventListener(o[1].toLowerCase(),i):r==="p-bind"||r==="pBind"?Ec(n,i):(i=r==="class"?[...new Set(t("class",i))].join(" ").trim():r==="style"?t("style",i).join(";").trim():i,(n.$attrs=n.$attrs||{})&&(n.$attrs[r]=i),n.setAttribute(r,i))}})}}function mv(n,e={},...t){{const r=document.createElement(n);return Ec(r,e),r.append(...t),r}}function $R(n,e){return Do(n)?Array.from(n.querySelectorAll(e)):[]}function WR(n,e){return Do(n)?n.matches(e)?n:n.querySelector(e):null}function mo(n,e){n&&document.activeElement!==n&&n.focus(e)}function gv(n,e){if(Do(n)){const t=n.getAttribute(e);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function _v(n,e=""){let t=$R(n,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),r=[];for(let i of t)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&r.push(i);return r}function ea(n,e){const t=_v(n,e);return t.length>0?t[0]:null}function bg(n){if(n){let e=n.offsetHeight,t=getComputedStyle(n);return e-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),e}return 0}function jR(n){if(n){let e=n.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function XR(n,e){const t=_v(n,e);return t.length>0?t[t.length-1]:null}function YR(n){if(n){let e=n.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function bv(n,e){return n?n.offsetHeight:0}function qR(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&jR(n))}function vg(n){if(n){let e=n.offsetWidth,t=getComputedStyle(n);return e-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),e}return 0}function KR(n,e,t){return Do(n)?gv(n,e)===t:!1}function Dh(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function yg(n,e=""){return Do(n)?n.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}function vv(n,e="",t){Do(n)&&t!==null&&t!==void 0&&n.setAttribute(e,t)}function ZR(){let n=[];const e=(s,a,l=999)=>{const c=i(s,a,l),u=c.value+(c.key===s?0:l)+1;return n.push({key:s,value:u}),u},t=s=>{n=n.filter(a=>a.value!==s)},r=(s,a)=>i(s).value,i=(s,a,l=0)=>[...n].reverse().find(c=>!0)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,a,l)=>{a&&(a.style.zIndex=String(e(s,!0,l)))},clear:s=>{s&&(t(o(s)),s.style.zIndex="")},getCurrent:s=>r(s)}}var ws=ZR();function yv(){const n=new Map;return{on(e,t){let r=n.get(e);return r?r.push(t):r=[t],n.set(e,r),this},off(e,t){let r=n.get(e);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(e,t){let r=n.get(e);r&&r.slice().map(i=>{i(t)})},clear(){n.clear()}}}var JR=Object.defineProperty,xg=Object.getOwnPropertySymbols,QR=Object.prototype.hasOwnProperty,e3=Object.prototype.propertyIsEnumerable,Sg=(n,e,t)=>e in n?JR(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,t3=(n,e)=>{for(var t in e||(e={}))QR.call(e,t)&&Sg(n,t,e[t]);if(xg)for(var t of xg(e))e3.call(e,t)&&Sg(n,t,e[t]);return n};function Lo(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&typeof n=="object"&&Object.keys(n).length===0}function Lh(n){return!!(n&&n.constructor&&n.call&&n.apply)}function xt(n){return!Lo(n)}function Or(n,e=!0){return n instanceof Object&&n.constructor===Object&&(e||Object.keys(n).length!==0)}function Qn(n,...e){return Lh(n)?n(...e):n}function Pn(n,e=!0){return typeof n=="string"&&(e||n!=="")}function ur(n){return Pn(n)?n.replace(/(-|_)/g,"").toLowerCase():n}function Ih(n,e="",t={}){const r=ur(e).split("."),i=r.shift();return i?Or(n)?Ih(Qn(n[Object.keys(n).find(o=>ur(o)===i)||""],t),r.join("."),t):void 0:Qn(n,t)}function Zc(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}function n3(n){return xt(n)&&!isNaN(n)}function ti(n,e){if(e){const t=e.test(n);return e.lastIndex=0,t}return!1}function xv(...n){const e=(t={},r={})=>{const i=t3({},t);return Object.keys(r).forEach(o=>{Or(r[o])&&o in t&&Or(t[o])?i[o]=e(t[o],r[o]):i[o]=r[o]}),i};return n.reduce((t,r,i)=>i===0?r:e(t,r),{})}function Sa(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function r3(n){return Pn(n,!1)?n[0].toUpperCase()+n.slice(1):n}function Sv(n){return Pn(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,t)=>t===0?e:"-"+e.toLowerCase()).toLowerCase():n}function Mg(n){return Pn(n)?n.replace(/[A-Z]/g,(e,t)=>t===0?e:"."+e.toLowerCase()).toLowerCase():n}var Vl={};function Oh(n="pui_id_"){return Vl.hasOwnProperty(n)||(Vl[n]=0),Vl[n]++,`${n}${Vl[n]}`}function wg(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return Oh(n)}var i3=Object.defineProperty,o3=Object.defineProperties,s3=Object.getOwnPropertyDescriptors,Tc=Object.getOwnPropertySymbols,Mv=Object.prototype.hasOwnProperty,wv=Object.prototype.propertyIsEnumerable,Cg=(n,e,t)=>e in n?i3(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,dr=(n,e)=>{for(var t in e||(e={}))Mv.call(e,t)&&Cg(n,t,e[t]);if(Tc)for(var t of Tc(e))wv.call(e,t)&&Cg(n,t,e[t]);return n},nd=(n,e)=>o3(n,s3(e)),Wr=(n,e)=>{var t={};for(var r in n)Mv.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&Tc)for(var r of Tc(n))e.indexOf(r)<0&&wv.call(n,r)&&(t[r]=n[r]);return t};function a3(...n){return xv(...n)}var l3=yv(),lr=l3;function Eg(n,e){Zc(n)?n.push(...e||[]):Or(n)&&Object.assign(n,e)}function c3(n){return Or(n)&&n.hasOwnProperty("value")&&n.hasOwnProperty("type")?n.value:n}function u3(n){return n.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function wf(n="",e=""){return u3(`${Pn(n,!1)&&Pn(e,!1)?`${n}-`:n}${e}`)}function Cv(n="",e=""){return`--${wf(n,e)}`}function d3(n=""){const e=(n.match(/{/g)||[]).length,t=(n.match(/}/g)||[]).length;return(e+t)%2!==0}function Ev(n,e="",t="",r=[],i){if(Pn(n)){const o=/{([^}]*)}/g,s=n.trim();if(d3(s))return;if(ti(s,o)){const a=s.replaceAll(o,u=>{const f=u.replace(/{|}/g,"").split(".").filter(h=>!r.some(_=>ti(h,_)));return`var(${Cv(t,Sv(f.join("-")))}${xt(i)?`, ${i}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return ti(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(n3(n))return n}function f3(n,e,t){Pn(e,!1)&&n.push(`${e}:${t};`)}function is(n,e){return n?`${n}{${e}}`:""}var Ma=(...n)=>h3(pt.getTheme(),...n),h3=(n={},e,t,r)=>{if(e){const{variable:i,options:o}=pt.defaults||{},{prefix:s,transform:a}=(n==null?void 0:n.options)||o||{},c=ti(e,/{([^}]*)}/g)?e:`{${e}}`;return r==="value"||Lo(r)&&a==="strict"?pt.getTokenValue(e):Ev(c,void 0,s,[i.excludedKeyRegex],t)}return""};function p3(n,e={}){const t=pt.defaults.variable,{prefix:r=t.prefix,selector:i=t.selector,excludedKeyRegex:o=t.excludedKeyRegex}=e,s=(c,u="")=>Object.entries(c).reduce((d,[f,h])=>{const _=ti(f,o)?wf(u):wf(u,Sv(f)),m=c3(h);if(Or(m)){const{variables:g,tokens:p}=s(m,_);Eg(d.tokens,p),Eg(d.variables,g)}else d.tokens.push((r?_.replace(`${r}-`,""):_).replaceAll("-",".")),f3(d.variables,Cv(_),Ev(m,_,r,[o]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(n,r);return{value:a,tokens:l,declarations:a.join(""),css:is(i,a.join(""))}}var ar={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(n){return{type:"class",selector:n,matched:this.pattern.test(n.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(n){return{type:"attr",selector:`:root${n}`,matched:this.pattern.test(n.trim())}}},media:{pattern:/^@media (.*)$/,resolve(n){return{type:"media",selector:`${n}{:root{[CSS]}}`,matched:this.pattern.test(n.trim())}}},system:{pattern:/^system$/,resolve(n){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(n.trim())}}},custom:{resolve(n){return{type:"custom",selector:n,matched:!0}}}},resolve(n){const e=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[n].flat().map(t=>{var r;return(r=e.map(i=>i.resolve(t)).find(i=>i.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(n,e){return p3(n,{prefix:e==null?void 0:e.prefix})},getCommon({name:n="",theme:e={},params:t,set:r,defaults:i}){var o,s,a,l,c,u,d;const{preset:f,options:h}=e;let _,m,g,p,x,v,b;if(xt(f)&&h.transform!=="strict"){const{primitive:E,semantic:R,extend:A}=f,P=R||{},{colorScheme:y}=P,M=Wr(P,["colorScheme"]),D=A||{},{colorScheme:O}=D,U=Wr(D,["colorScheme"]),Y=y||{},{dark:J}=Y,V=Wr(Y,["dark"]),$=O||{},{dark:z}=$,he=Wr($,["dark"]),pe=xt(E)?this._toVariables({primitive:E},h):{},_e=xt(M)?this._toVariables({semantic:M},h):{},Me=xt(V)?this._toVariables({light:V},h):{},Fe=xt(J)?this._toVariables({dark:J},h):{},Q=xt(U)?this._toVariables({semantic:U},h):{},fe=xt(he)?this._toVariables({light:he},h):{},ve=xt(z)?this._toVariables({dark:z},h):{},[B,se]=[(o=pe.declarations)!=null?o:"",pe.tokens],[oe,de]=[(s=_e.declarations)!=null?s:"",_e.tokens||[]],[ke,k]=[(a=Me.declarations)!=null?a:"",Me.tokens||[]],[L,w]=[(l=Fe.declarations)!=null?l:"",Fe.tokens||[]],[re,K]=[(c=Q.declarations)!=null?c:"",Q.tokens||[]],[q,ne]=[(u=fe.declarations)!=null?u:"",fe.tokens||[]],[ce,te]=[(d=ve.declarations)!=null?d:"",ve.tokens||[]];_=this.transformCSS(n,B,"light","variable",h,r,i),m=se;const C=this.transformCSS(n,`${oe}${ke}`,"light","variable",h,r,i),S=this.transformCSS(n,`${L}`,"dark","variable",h,r,i);g=`${C}${S}`,p=[...new Set([...de,...k,...w])];const I=this.transformCSS(n,`${re}${q}color-scheme:light`,"light","variable",h,r,i),X=this.transformCSS(n,`${ce}color-scheme:dark`,"dark","variable",h,r,i);x=`${I}${X}`,v=[...new Set([...K,...ne,...te])],b=Qn(f.css,{dt:Ma})}return{primitive:{css:_,tokens:m},semantic:{css:g,tokens:p},global:{css:x,tokens:v},style:b}},getPreset({name:n="",preset:e={},options:t,params:r,set:i,defaults:o,selector:s}){var a,l,c;let u,d,f;if(xt(e)&&t.transform!=="strict"){const h=n.replace("-directive",""),_=e,{colorScheme:m,extend:g,css:p}=_,x=Wr(_,["colorScheme","extend","css"]),v=g||{},{colorScheme:b}=v,E=Wr(v,["colorScheme"]),R=m||{},{dark:A}=R,P=Wr(R,["dark"]),y=b||{},{dark:M}=y,D=Wr(y,["dark"]),O=xt(x)?this._toVariables({[h]:dr(dr({},x),E)},t):{},U=xt(P)?this._toVariables({[h]:dr(dr({},P),D)},t):{},Y=xt(A)?this._toVariables({[h]:dr(dr({},A),M)},t):{},[J,V]=[(a=O.declarations)!=null?a:"",O.tokens||[]],[$,z]=[(l=U.declarations)!=null?l:"",U.tokens||[]],[he,pe]=[(c=Y.declarations)!=null?c:"",Y.tokens||[]],_e=this.transformCSS(h,`${J}${$}`,"light","variable",t,i,o,s),Me=this.transformCSS(h,he,"dark","variable",t,i,o,s);u=`${_e}${Me}`,d=[...new Set([...V,...z,...pe])],f=Qn(p,{dt:Ma})}return{css:u,tokens:d,style:f}},getPresetC({name:n="",theme:e={},params:t,set:r,defaults:i}){var o;const{preset:s,options:a}=e,l=(o=s==null?void 0:s.components)==null?void 0:o[n];return this.getPreset({name:n,preset:l,options:a,params:t,set:r,defaults:i})},getPresetD({name:n="",theme:e={},params:t,set:r,defaults:i}){var o;const s=n.replace("-directive",""),{preset:a,options:l}=e,c=(o=a==null?void 0:a.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:r,defaults:i})},applyDarkColorScheme(n){return!(n.darkModeSelector==="none"||n.darkModeSelector===!1)},getColorSchemeOption(n,e){var t;return this.applyDarkColorScheme(n)?this.regex.resolve(n.darkModeSelector===!0?e.options.darkModeSelector:(t=n.darkModeSelector)!=null?t:e.options.darkModeSelector):[]},getLayerOrder(n,e={},t,r){const{cssLayer:i}=e;return i?`@layer ${Qn(i.order||"primeui",t)}`:""},getCommonStyleSheet({name:n="",theme:e={},params:t,props:r={},set:i,defaults:o}){const s=this.getCommon({name:n,theme:e,params:t,set:i,defaults:o}),a=Object.entries(r).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u!=null&&u.css){const d=Sa(u==null?void 0:u.css),f=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:n="",theme:e={},params:t,props:r={},set:i,defaults:o}){var s;const a={name:n,theme:e,params:t,set:i,defaults:o},l=(s=n.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(r).reduce((u,[d,f])=>u.push(`${d}="${f}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${n}-variables" ${c}>${Sa(l)}</style>`:""},createTokens(n={},e,t="",r="",i={}){return Object.entries(n).forEach(([o,s])=>{const a=ti(o,e.variable.excludedKeyRegex)?t:t?`${t}.${Mg(o)}`:Mg(o),l=r?`${r}.${o}`:o;Or(s)?this.createTokens(s,e,a,l,i):(i[a]||(i[a]={paths:[],computed(c,u={}){var d,f;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(f=this.paths.find(h=>h.scheme===c))==null?void 0:f.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),i[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){const d=/{([^}]*)}/g;let f=s;if(u.name=this.path,u.binding||(u.binding={}),ti(s,d)){const _=s.trim().replaceAll(d,p=>{var x;const v=p.replace(/{|}/g,""),b=(x=i[v])==null?void 0:x.computed(c,u);return Zc(b)&&b.length===2?`light-dark(${b[0].value},${b[1].value})`:b==null?void 0:b.value}),m=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,g=/var\([^)]+\)/g;f=ti(_.replace(g,"0"),m)?`calc(${_})`:_}return Lo(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:f.includes("undefined")?void 0:f}}}))}),i},getTokenValue(n,e,t){var r;const o=(l=>l.split(".").filter(u=>!ti(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(r=n[o])==null?void 0:r.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{const u=c,{colorScheme:d}=u,f=Wr(u,["colorScheme"]);return l[d]=f,l},void 0)},getSelectorRule(n,e,t,r){return t==="class"||t==="attr"?is(xt(e)?`${n}${e},${n} ${e}`:n,r):is(n,xt(e)?is(e,r):r)},transformCSS(n,e,t,r,i={},o,s,a){if(xt(e)){const{cssLayer:l}=i;if(r!=="style"){const c=this.getColorSchemeOption(i,s);e=t==="dark"?c.reduce((u,{type:d,selector:f})=>(xt(f)&&(u+=f.includes("[CSS]")?f.replace("[CSS]",e):this.getSelectorRule(f,a,d,e)),u),""):is(a??":root",e)}if(l){const c={name:"primeui",order:"primeui"};Or(l)&&(c.name=Qn(l.name,{name:n,type:r})),xt(c.name)&&(e=is(`@layer ${c.name}`,e),o==null||o.layerNames(c.name))}return e}return""}},pt={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(n={}){const{theme:e}=n;e&&(this._theme=nd(dr({},e),{options:dr(dr({},this.defaults.options),e.options)}),this._tokens=ar.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var n;return((n=this.theme)==null?void 0:n.preset)||{}},get options(){var n;return((n=this.theme)==null?void 0:n.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(n){this.update({theme:n}),lr.emit("theme:change",n)},getPreset(){return this.preset},setPreset(n){this._theme=nd(dr({},this.theme),{preset:n}),this._tokens=ar.createTokens(n,this.defaults),this.clearLoadedStyleNames(),lr.emit("preset:change",n),lr.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(n){this._theme=nd(dr({},this.theme),{options:n}),this.clearLoadedStyleNames(),lr.emit("options:change",n),lr.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(n){this._layerNames.add(n)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(n){return this._loadedStyleNames.has(n)},setLoadedStyleName(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(n){return ar.getTokenValue(this.tokens,n,this.defaults)},getCommon(n="",e){return ar.getCommon({name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ar.getPresetC(t)},getDirective(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ar.getPresetD(t)},getCustomPreset(n="",e,t,r){const i={name:n,preset:e,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ar.getPreset(i)},getLayerOrderCSS(n=""){return ar.getLayerOrder(n,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(n="",e,t="style",r){return ar.transformCSS(n,e,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(n="",e,t={}){return ar.getCommonStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(n,e,t={}){return ar.getStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(n){this._loadingStyles.add(n)},onStyleUpdated(n){this._loadingStyles.add(n)},onStyleLoaded(n,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),lr.emit(`theme:${e}:load`,n),!this._loadingStyles.size&&lr.emit("theme:load"))}},Ti={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function Wa(n){"@babel/helpers - typeof";return Wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wa(n)}function Tg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Ag(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Tg(Object(t),!0).forEach(function(r){m3(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Tg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function m3(n,e,t){return(e=g3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function g3(n){var e=_3(n,"string");return Wa(e)=="symbol"?e:e+""}function _3(n,e){if(Wa(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Wa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function b3(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;u_()?Nc(n):e?n():Oc(n)}var v3=0;function y3(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=vn(!1),r=vn(n),i=vn(null),o=Dh()?window.document:void 0,s=e.document,a=s===void 0?o:s,l=e.immediate,c=l===void 0?!0:l,u=e.manual,d=u===void 0?!1:u,f=e.name,h=f===void 0?"style_".concat(++v3):f,_=e.id,m=_===void 0?void 0:_,g=e.media,p=g===void 0?void 0:g,x=e.nonce,v=x===void 0?void 0:x,b=e.first,E=b===void 0?!1:b,R=e.onMounted,A=R===void 0?void 0:R,P=e.onUpdated,y=P===void 0?void 0:P,M=e.onLoad,D=M===void 0?void 0:M,O=e.props,U=O===void 0?{}:O,Y=function(){},J=function(z){var he=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var pe=Ag(Ag({},U),he),_e=pe.name||h,Me=pe.id||m,Fe=pe.nonce||v;i.value=a.querySelector('style[data-primevue-style-id="'.concat(_e,'"]'))||a.getElementById(Me)||a.createElement("style"),i.value.isConnected||(r.value=z||n,Ec(i.value,{type:"text/css",id:Me,media:p,nonce:Fe}),E?a.head.prepend(i.value):a.head.appendChild(i.value),vv(i.value,"data-primevue-style-id",_e),Ec(i.value,pe),i.value.onload=function(Q){return D==null?void 0:D(Q,{name:_e})},A==null||A(_e)),!t.value&&(Y=Fn(r,function(Q){i.value.textContent=Q,y==null||y(_e)},{immediate:!0}),t.value=!0)}},V=function(){!a||!t.value||(Y(),qR(i.value)&&a.head.removeChild(i.value),t.value=!1)};return c&&!d&&b3(J),{id:m,name:h,el:i,css:r,unload:V,load:J,isLoaded:Uf(t)}}function ja(n){"@babel/helpers - typeof";return ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ja(n)}function Rg(n,e){return w3(n)||M3(n,e)||S3(n,e)||x3()}function x3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S3(n,e){if(n){if(typeof n=="string")return Pg(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Pg(n,e):void 0}}function Pg(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function M3(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e!==0)for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function w3(n){if(Array.isArray(n))return n}function kg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function rd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?kg(Object(t),!0).forEach(function(r){C3(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function C3(n,e,t){return(e=E3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function E3(n){var e=T3(n,"string");return ja(e)=="symbol"?e:e+""}function T3(n,e){if(ja(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(ja(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var A3=function(e){var t=e.dt;return`
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
`)},R3=function(e){var t=e.dt;return`
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
`)},P3={},k3={},gt={name:"base",css:R3,theme:A3,classes:P3,inlineStyles:k3,load:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(o){return o},i=r(Qn(e,{dt:Ma}));return xt(i)?y3(Sa(i),rd({name:this.name},t)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.theme,t,function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return pt.transformCSS(t.name||e.name,"".concat(i).concat(r))})},getCommonTheme:function(e){return pt.getCommon(this.name,e)},getComponentTheme:function(e){return pt.getComponent(this.name,e)},getDirectiveTheme:function(e){return pt.getDirective(this.name,e)},getPresetTheme:function(e,t,r){return pt.getCustomPreset(this.name,e,t,r)},getLayerOrderThemeCSS:function(){return pt.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Qn(this.css,{dt:Ma})||"",i=Sa("".concat(r).concat(e)),o=Object.entries(t).reduce(function(s,a){var l=Rg(a,2),c=l[0],u=l[1];return s.push("".concat(c,'="').concat(u,'"'))&&s},[]).join(" ");return xt(i)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(o,">").concat(i,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return pt.getCommonStyleSheet(this.name,e,t)},getThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[pt.getStyleSheet(this.name,e,t)];if(this.theme){var i=this.name==="base"?"global-style":"".concat(this.name,"-style"),o=Qn(this.theme,{dt:Ma}),s=Sa(pt.transformCSS(i,o)),a=Object.entries(t).reduce(function(l,c){var u=Rg(c,2),d=u[0],f=u[1];return l.push("".concat(d,'="').concat(f,'"'))&&l},[]).join(" ");xt(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(i,'" ').concat(a,">").concat(s,"</style>"))}return r.join("")},extend:function(e){return rd(rd({},this),{},{css:void 0,theme:void 0},e)}},Dg=gt.extend({name:"common"});function Xa(n){"@babel/helpers - typeof";return Xa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xa(n)}function D3(n){return Rv(n)||L3(n)||Av(n)||Tv()}function L3(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ta(n,e){return Rv(n)||I3(n,e)||Av(n,e)||Tv()}function Tv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Av(n,e){if(n){if(typeof n=="string")return Lg(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Lg(n,e):void 0}}function Lg(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function I3(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function Rv(n){if(Array.isArray(n))return n}function Ig(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Je(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ig(Object(t),!0).forEach(function(r){sa(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ig(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function sa(n,e,t){return(e=O3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function O3(n){var e=U3(n,"string");return Xa(e)=="symbol"?e:e+""}function U3(n,e){if(Xa(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Xa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Gs={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var t=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return t._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var e,t,r,i,o,s,a,l,c,u,d,f=(e=this.pt)===null||e===void 0?void 0:e._usept,h=f?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,_=f?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(i=_||h)===null||i===void 0||(i=i.hooks)===null||i===void 0||(o=i.onBeforeCreate)===null||o===void 0||o.call(i);var m=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,g=m?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,p=m?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=p||g)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(d=u.onBeforeCreate)===null||d===void 0||d.call(u),this.$attrSelector=Oh("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=WR(this.$el,'[data-pc-name="'.concat(ur(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=Je({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),r==null||r()}},_mergeProps:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return Lh(e)?e.apply(void 0,r):Le.apply(void 0,r)},_loadStyles:function(){var e=this,t=function(){Ti.isStyleNameLoaded("base")||(gt.loadCSS(e.$styleOptions),e._loadGlobalStyles(),Ti.setLoadedStyleName("base")),e._loadThemeStyles()};t(),this._themeChangeListener(t)},_loadCoreStyles:function(){var e,t;!Ti.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name&&(Dg.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Ti.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);xt(e)&&gt.load(e,Je({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,t;if(!(this.isUnstyled||this.$theme==="none")){if(!pt.isStyleNameLoaded("common")){var r,i,o=((r=this.$style)===null||r===void 0||(i=r.getCommonTheme)===null||i===void 0?void 0:i.call(r))||{},s=o.primitive,a=o.semantic,l=o.global,c=o.style;gt.load(s==null?void 0:s.css,Je({name:"primitive-variables"},this.$styleOptions)),gt.load(a==null?void 0:a.css,Je({name:"semantic-variables"},this.$styleOptions)),gt.load(l==null?void 0:l.css,Je({name:"global-variables"},this.$styleOptions)),gt.loadTheme(Je({name:"global-style"},this.$styleOptions),c),pt.setLoadedStyleName("common")}if(!pt.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name){var u,d,f,h,_=((u=this.$style)===null||u===void 0||(d=u.getComponentTheme)===null||d===void 0?void 0:d.call(u))||{},m=_.css,g=_.style;(f=this.$style)===null||f===void 0||f.load(m,Je({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadTheme(Je({name:"".concat(this.$style.name,"-style")},this.$styleOptions),g),pt.setLoadedStyleName(this.$style.name)}if(!pt.isStyleNameLoaded("layer-order")){var p,x,v=(p=this.$style)===null||p===void 0||(x=p.getLayerOrderThemeCSS)===null||x===void 0?void 0:x.call(p);gt.load(v,Je({name:"layer-order",first:!0},this.$styleOptions)),pt.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var t,r,i,o=((t=this.$style)===null||t===void 0||(r=t.getPresetTheme)===null||r===void 0?void 0:r.call(t,e,"[".concat(this.$attrSelector,"]")))||{},s=o.css,a=(i=this.$style)===null||i===void 0?void 0:i.load(s,Je({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Ti.clearLoadedStyleNames(),lr.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ih(e,t,r)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!i[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,f=o?s?this._useGlobalPT(this._getPTClassValue,r,i):this._useDefaultPT(this._getPTClassValue,r,i):void 0,h=s?void 0:this._getPTSelf(t,this._getPTClassValue,r,Je(Je({},i),{},{global:f||{}})),_=this._getPTDatasets(r);return c||!c&&h?d?this._mergeProps(d,f,h,_):Je(Je(Je({},f),h),_):Je(Je({},h),_)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return Le(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i="data-pc-",o=r==="root"&&xt((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&Je(Je({},r==="root"&&Je(Je(sa({},"".concat(i,"name"),ur(o?(t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]:this.$.type.name)),o&&sa({},"".concat(i,"extend"),ur(this.$.type.name))),Dh()&&sa({},"".concat(this.$attrSelector),""))),{},sa({},"".concat(i,"section"),ur(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return Pn(e)||Zc(e)?{class:e}:e},_getPT:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,o=function(a){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i?i(a):a,d=ur(r),f=ur(t.$name);return(l=c?d!==f?u==null?void 0:u[d]:void 0:u==null?void 0:u[d])!==null&&l!==void 0?l:u};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)},_usePT:function(e,t,r,i){var o=function(m){return t(m,r,i)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,f=o(e.originalValue),h=o(e.value);return f===void 0&&h===void 0?void 0:Pn(h)?h:Pn(f)?f:c||!c&&h?d?this._mergeProps(d,f,h):Je(Je({},f),h):h}return o(e)},_useGlobalPT:function(e,t,r){return this._usePT(this.globalPT,e,t,r)},_useDefaultPT:function(e,t,r){return this._usePT(this.defaultPT,e,t,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,Je(Je({},this.$params),t))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Le(this.$_attrsWithoutPT,this.ptm(e,t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,Je({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,Je(Je({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var i=this._getOptionValue(this.$style.inlineStyles,e,Je(Je({},this.$params),r)),o=this._getOptionValue(Dg.inlineStyles,e,Je(Je({},this.$params),r));return[o,i]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return Qn(r,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return t._getOptionValue(r,t.$name,Je({},t.$params))||Qn(r,Je({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$inProps:function(){var e,t=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(r){var i=ta(r,1),o=i[0];return t==null?void 0:t.includes(o)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return Je(Je({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=ta(e,1),r=t[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,t){var r=ta(t,2),i=r[0],o=r[1],s=i.split(":"),a=D3(s),l=a.slice(1);return l==null||l.reduce(function(c,u,d,f){return!c[u]&&(c[u]=d===f.length-1?o:{}),c[u]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=ta(e,1),r=t[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,t){var r=ta(t,2),i=r[0],o=r[1];return e[i]=o,e},{})}}},B3=`
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
`,N3=gt.extend({name:"baseicon",css:B3});function Ya(n){"@babel/helpers - typeof";return Ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ya(n)}function Og(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Ug(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Og(Object(t),!0).forEach(function(r){F3(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Og(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function F3(n,e,t){return(e=z3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function z3(n){var e=H3(n,"string");return Ya(e)=="symbol"?e:e+""}function H3(n,e){if(Ya(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ya(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var di={name:"BaseIcon",extends:Gs,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:N3,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=Lo(this.label);return Ug(Ug({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},Uh={name:"TimesIcon",extends:di};function V3(n,e,t,r,i,o){return Pe(),Ke("svg",Le({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[ut("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1)]),16)}Uh.render=V3;var Pv={name:"WindowMaximizeIcon",extends:di};function G3(n,e,t,r,i,o){return Pe(),Ke("svg",Le({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[ut("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}Pv.render=G3;var kv={name:"WindowMinimizeIcon",extends:di};function $3(n,e,t,r,i,o){return Pe(),Ke("svg",Le({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[ut("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}kv.render=$3;var Dv={name:"SpinnerIcon",extends:di};function W3(n,e,t,r,i,o){return Pe(),Ke("svg",Le({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[ut("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}Dv.render=W3;var j3=function(e){var t=e.dt;return`
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
`)},X3={root:function(e){var t=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":xt(t.value)&&String(t.value).length===1,"p-badge-dot":Lo(t.value)&&!r.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]}},Y3=gt.extend({name:"badge",theme:j3,classes:X3}),q3={name:"BaseBadge",extends:Gs,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:Y3,provide:function(){return{$pcBadge:this,$parentInstance:this}}},Lv={name:"Badge",extends:q3,inheritAttrs:!1};function K3(n,e,t,r,i,o){return Pe(),Ke("span",Le({class:n.cx("root")},n.ptmi("root")),[It(n.$slots,"default",{},function(){return[gs(So(n.value),1)]})],16)}Lv.render=K3;var us=yv();function qa(n){"@babel/helpers - typeof";return qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qa(n)}function Bg(n,e){return e5(n)||Q3(n,e)||J3(n,e)||Z3()}function Z3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J3(n,e){if(n){if(typeof n=="string")return Ng(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ng(n,e):void 0}}function Ng(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function Q3(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e!==0)for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function e5(n){if(Array.isArray(n))return n}function Fg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function rt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Fg(Object(t),!0).forEach(function(r){Cf(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Fg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Cf(n,e,t){return(e=t5(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function t5(n){var e=n5(n,"string");return qa(e)=="symbol"?e:e+""}function n5(n,e){if(qa(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(qa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var qe={_getMeta:function(){return[Or(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],Qn(Or(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,t){var r,i,o;return(r=(e==null||(i=e.instance)===null||i===void 0?void 0:i.$primevue)||(t==null||(o=t.ctx)===null||o===void 0||(o=o.appContext)===null||o===void 0||(o=o.config)===null||o===void 0||(o=o.globalProperties)===null||o===void 0?void 0:o.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:Ih,_getPTValue:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var x=qe._getOptionValue.apply(qe,arguments);return Pn(x)||Zc(x)?{class:x}:x},c=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((t=r.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},u=c.mergeSections,d=u===void 0?!0:u,f=c.mergeProps,h=f===void 0?!1:f,_=a?qe._useDefaultPT(r,r.defaultPT(),l,o,s):void 0,m=qe._usePT(r,qe._getPT(i,r.$name),l,o,rt(rt({},s),{},{global:_||{}})),g=qe._getPTDatasets(r,o);return d||!d&&m?h?qe._mergeProps(r,h,_,m,g):rt(rt(rt({},_),m),g):rt(rt({},m),g)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return rt(rt({},t==="root"&&Cf({},"".concat(r,"name"),ur(e.$name))),{},Cf({},"".concat(r,"section"),ur(t)))},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(s){var a,l=r?r(s):s,c=ur(t);return(a=l==null?void 0:l[c])!==null&&a!==void 0?a:l};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,s=function(g){return r(g,i,o)};if(t!=null&&t.hasOwnProperty("_usept")){var a,l=t._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},c=l.mergeSections,u=c===void 0?!0:c,d=l.mergeProps,f=d===void 0?!1:d,h=s(t.originalValue),_=s(t.value);return h===void 0&&_===void 0?void 0:Pn(_)?_:Pn(h)?h:u||!u&&_?f?qe._mergeProps(e,f,h,_):rt(rt({},h),_):_}return s(t)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return qe._usePT(e,t,r,i,o)},_loadStyles:function(e,t,r){var i,o=qe._getConfig(t,r),s={nonce:o==null||(i=o.csp)===null||i===void 0?void 0:i.nonce};qe._loadCoreStyles(e.$instance,s),qe._loadThemeStyles(e.$instance,s),qe._loadScopedThemeStyles(e.$instance,s),qe._themeChangeListener(function(){return qe._loadThemeStyles(e.$instance,s)})},_loadCoreStyles:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!Ti.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(t=r.$style)!==null&&t!==void 0&&t.name){var o;gt.loadCSS(i),(o=r.$style)===null||o===void 0||o.loadCSS(i),Ti.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,t,r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!(i!=null&&i.isUnstyled()||(i==null||(e=i.theme)===null||e===void 0?void 0:e.call(i))==="none")){if(!pt.isStyleNameLoaded("common")){var s,a,l=((s=i.$style)===null||s===void 0||(a=s.getCommonTheme)===null||a===void 0?void 0:a.call(s))||{},c=l.primitive,u=l.semantic,d=l.global,f=l.style;gt.load(c==null?void 0:c.css,rt({name:"primitive-variables"},o)),gt.load(u==null?void 0:u.css,rt({name:"semantic-variables"},o)),gt.load(d==null?void 0:d.css,rt({name:"global-variables"},o)),gt.loadTheme(rt({name:"global-style"},o),f),pt.setLoadedStyleName("common")}if(!pt.isStyleNameLoaded((t=i.$style)===null||t===void 0?void 0:t.name)&&(r=i.$style)!==null&&r!==void 0&&r.name){var h,_,m,g,p=((h=i.$style)===null||h===void 0||(_=h.getDirectiveTheme)===null||_===void 0?void 0:_.call(h))||{},x=p.css,v=p.style;(m=i.$style)===null||m===void 0||m.load(x,rt({name:"".concat(i.$style.name,"-variables")},o)),(g=i.$style)===null||g===void 0||g.loadTheme(rt({name:"".concat(i.$style.name,"-style")},o),v),pt.setLoadedStyleName(i.$style.name)}if(!pt.isStyleNameLoaded("layer-order")){var b,E,R=(b=i.$style)===null||b===void 0||(E=b.getLayerOrderThemeCSS)===null||E===void 0?void 0:E.call(b);gt.load(R,rt({name:"layer-order",first:!0},o)),pt.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var i,o,s,a=((i=e.$style)===null||i===void 0||(o=i.getPresetTheme)===null||o===void 0?void 0:o.call(i,r,"[".concat(e.$attrSelector,"]")))||{},l=a.css,c=(s=e.$style)===null||s===void 0?void 0:s.load(l,rt({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},t));e.scopedStyleEl=c.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Ti.clearLoadedStyleNames(),lr.on("theme:change",e)},_hook:function(e,t,r,i,o,s){var a,l,c="on".concat(r3(t)),u=qe._getConfig(i,o),d=r==null?void 0:r.$instance,f=qe._usePT(d,qe._getPT(i==null||(a=i.value)===null||a===void 0?void 0:a.pt,e),qe._getOptionValue,"hooks.".concat(c)),h=qe._useDefaultPT(d,u==null||(l=u.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],qe._getOptionValue,"hooks.".concat(c)),_={el:r,binding:i,vnode:o,prevVnode:s};f==null||f(d,_),h==null||h(d,_)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,t=arguments.length,r=new Array(t>2?t-2:0),i=2;i<t;i++)r[i-2]=arguments[i];return Lh(e)?e.apply(void 0,r):Le.apply(void 0,r)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(s,a,l,c,u){var d,f,h,_;a._$instances=a._$instances||{};var m=qe._getConfig(l,c),g=a._$instances[e]||{},p=Lo(g)?rt(rt({},t),t==null?void 0:t.methods):{};a._$instances[e]=rt(rt({},g),{},{$name:e,$host:a,$binding:l,$modifiers:l==null?void 0:l.modifiers,$value:l==null?void 0:l.value,$el:g.$el||a||void 0,$style:rt({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},t==null?void 0:t.style),$primevueConfig:m,$attrSelector:(d=a.$pd)===null||d===void 0||(d=d[e])===null||d===void 0?void 0:d.attrSelector,defaultPT:function(){return qe._getPT(m==null?void 0:m.pt,void 0,function(v){var b;return v==null||(b=v.directives)===null||b===void 0?void 0:b[e]})},isUnstyled:function(){var v,b;return((v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.unstyled)!==void 0?(b=a.$instance)===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.unstyled:m==null?void 0:m.unstyled},theme:function(){var v;return(v=a.$instance)===null||v===void 0||(v=v.$primevueConfig)===null||v===void 0?void 0:v.theme},preset:function(){var v;return(v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.dt},ptm:function(){var v,b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return qe._getPTValue(a.$instance,(v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.pt,b,rt({},E))},ptmo:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return qe._getPTValue(a.$instance,v,b,E,!1)},cx:function(){var v,b,E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(v=a.$instance)!==null&&v!==void 0&&v.isUnstyled()?void 0:qe._getOptionValue((b=a.$instance)===null||b===void 0||(b=b.$style)===null||b===void 0?void 0:b.classes,E,rt({},R))},sx:function(){var v,b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E?qe._getOptionValue((v=a.$instance)===null||v===void 0||(v=v.$style)===null||v===void 0?void 0:v.inlineStyles,b,rt({},R)):void 0}},p),a.$instance=a._$instances[e],(f=(h=a.$instance)[s])===null||f===void 0||f.call(h,a,l,c,u),a["$".concat(e)]=a.$instance,qe._hook(e,s,a,l,c,u),a.$pd||(a.$pd={}),a.$pd[e]=rt(rt({},(_=a.$pd)===null||_===void 0?void 0:_[e]),{},{name:e,instance:a.$instance})},i=function(s){var a,l,c,u,d,f=(a=s.$instance)===null||a===void 0?void 0:a.watch;f==null||(l=f.config)===null||l===void 0||l.call(s.$instance,(c=s.$instance)===null||c===void 0?void 0:c.$primevueConfig),us.on("config:change",function(h){var _,m=h.newValue,g=h.oldValue;return f==null||(_=f.config)===null||_===void 0?void 0:_.call(s.$instance,m,g)}),f==null||(u=f["config.ripple"])===null||u===void 0||u.call(s.$instance,(d=s.$instance)===null||d===void 0||(d=d.$primevueConfig)===null||d===void 0?void 0:d.ripple),us.on("config:ripple:change",function(h){var _,m=h.newValue,g=h.oldValue;return f==null||(_=f["config.ripple"])===null||_===void 0?void 0:_.call(s.$instance,m,g)})};return{created:function(s,a,l,c){s.$pd||(s.$pd={}),s.$pd[e]={name:e,attrSelector:Oh("pd")},r("created",s,a,l,c)},beforeMount:function(s,a,l,c){qe._loadStyles(s,a,l),r("beforeMount",s,a,l,c),i(s)},mounted:function(s,a,l,c){qe._loadStyles(s,a,l),r("mounted",s,a,l,c)},beforeUpdate:function(s,a,l,c){r("beforeUpdate",s,a,l,c)},updated:function(s,a,l,c){qe._loadStyles(s,a,l),r("updated",s,a,l,c)},beforeUnmount:function(s,a,l,c){r("beforeUnmount",s,a,l,c)},unmounted:function(s,a,l,c){var u;(u=s.$instance)===null||u===void 0||(u=u.scopedStyleEl)===null||u===void 0||(u=u.value)===null||u===void 0||u.remove(),r("unmounted",s,a,l,c)}}},extend:function(){var e=qe._getMeta.apply(qe,arguments),t=Bg(e,2),r=t[0],i=t[1];return rt({extend:function(){var s=qe._getMeta.apply(qe,arguments),a=Bg(s,2),l=a[0],c=a[1];return qe.extend(l,rt(rt(rt({},i),i==null?void 0:i.methods),c))}},qe._extend(r,i))}},r5=function(e){var t=e.dt;return`
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
`)},i5={root:"p-ink"},o5=gt.extend({name:"ripple-directive",theme:r5,classes:i5}),s5=qe.extend({style:o5});function Ka(n){"@babel/helpers - typeof";return Ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ka(n)}function a5(n){return d5(n)||u5(n)||c5(n)||l5()}function l5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c5(n,e){if(n){if(typeof n=="string")return Ef(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ef(n,e):void 0}}function u5(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function d5(n){if(Array.isArray(n))return Ef(n)}function Ef(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function zg(n,e,t){return(e=f5(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function f5(n){var e=h5(n,"string");return Ka(e)=="symbol"?e:e+""}function h5(n,e){if(Ka(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ka(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Iv=s5.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var t=mv("span",zg(zg({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(t),this.$el=t},remove:function(e){var t=this.getInk(e);t&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=this,r=e.currentTarget,i=this.getInk(r);if(!(!i||getComputedStyle(i,null).display==="none")){if(!this.isUnstyled()&&sc(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!bg(i)&&!vg(i)){var o=Math.max(pv(r),bv(r));i.style.height=o+"px",i.style.width=o+"px"}var s=YR(r),a=e.pageX-s.left+document.body.scrollTop-vg(i)/2,l=e.pageY-s.top+document.body.scrollLeft-bg(i)/2;i.style.top=l+"px",i.style.left=a+"px",!this.isUnstyled()&&Kc(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!t.isUnstyled()&&sc(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&sc(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?a5(e.children).find(function(t){return gv(t,"data-pc-name")==="ripple"}):void 0}}});function Za(n){"@babel/helpers - typeof";return Za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Za(n)}function vr(n,e,t){return(e=p5(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p5(n){var e=m5(n,"string");return Za(e)=="symbol"?e:e+""}function m5(n,e){if(Za(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Za(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var g5=function(e){var t=e.dt;return`
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
`)},_5={root:function(e){var t=e.instance,r=e.props;return["p-button p-component",vr(vr(vr(vr(vr(vr(vr(vr(vr({"p-button-icon-only":t.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link||r.variant==="link"},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text||r.variant==="text"),"p-button-outlined",r.outlined||r.variant==="outlined"),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",t.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var t=e.props;return["p-button-icon",vr({},"p-button-icon-".concat(t.iconPos),t.label)]},label:"p-button-label"},b5=gt.extend({name:"button",theme:g5,classes:_5}),v5={name:"BaseButton",extends:Gs,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:b5,provide:function(){return{$pcButton:this,$parentInstance:this}}},dl={name:"Button",extends:v5,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return Le(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Lo(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:Dv,Badge:Lv},directives:{ripple:Iv}};function y5(n,e,t,r,i,o){var s=cr("SpinnerIcon"),a=cr("Badge"),l=$f("ripple");return n.asChild?It(n.$slots,"default",{key:1,class:Ui(n.cx("root")),a11yAttrs:o.a11yAttrs}):Hf((Pe(),Vt(Cs(n.as),Le({key:0,class:n.cx("root")},o.attrs),{default:Jr(function(){return[It(n.$slots,"default",{},function(){return[n.loading?It(n.$slots,"loadingicon",Le({key:0,class:[n.cx("loadingIcon"),n.cx("icon")]},n.ptm("loadingIcon")),function(){return[n.loadingIcon?(Pe(),Ke("span",Le({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(Pe(),Vt(s,Le({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):It(n.$slots,"icon",Le({key:1,class:[n.cx("icon")]},n.ptm("icon")),function(){return[n.icon?(Pe(),Ke("span",Le({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):mn("",!0)]}),ut("span",Le({class:n.cx("label")},n.ptm("label")),So(n.label||" "),17),n.badge?(Pe(),Vt(a,{key:2,value:n.badge,class:Ui(n.badgeClass),severity:n.badgeSeverity,unstyled:n.unstyled,pt:n.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):mn("",!0)]})]}),_:3},16,["class"])),[[l]])}dl.render=y5;var x5=gt.extend({name:"focustrap-directive"}),S5=qe.extend({style:x5});function Ja(n){"@babel/helpers - typeof";return Ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ja(n)}function Hg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Vg(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Hg(Object(t),!0).forEach(function(r){M5(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Hg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function M5(n,e,t){return(e=w5(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w5(n){var e=C5(n,"string");return Ja(e)=="symbol"?e:e+""}function C5(n,e){if(Ja(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ja(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Ov=S5.extend("focustrap",{mounted:function(e,t){var r=t.value||{},i=r.disabled;i||(this.createHiddenFocusableElements(e,t),this.bind(e,t),this.autoElementFocus(e,t)),e.setAttribute("data-pd-focustrap",!0),this.$el=e},updated:function(e,t){var r=t.value||{},i=r.disabled;i&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(e??"")},bind:function(e,t){var r=this,i=t.value||{},o=i.onFocusIn,s=i.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(a){a.forEach(function(l){if(l.type==="childList"&&!e.contains(document.activeElement)){var c=function(d){var f=yg(d)?yg(d,r.getComputedSelector(e.$_pfocustrap_focusableselector))?d:ea(e,r.getComputedSelector(e.$_pfocustrap_focusableselector)):ea(d);return xt(f)?f:d.nextSibling&&c(d.nextSibling)};mo(c(l.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(a){return o&&o(a)},e.$_pfocustrap_focusoutlistener=function(a){return s&&s(a)},e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e){this.autoElementFocus(this.$el,{value:Vg(Vg({},e),{},{autoFocus:!0})})},autoElementFocus:function(e,t){var r=t.value||{},i=r.autoFocusSelector,o=i===void 0?"":i,s=r.firstFocusableSelector,a=s===void 0?"":s,l=r.autoFocus,c=l===void 0?!1:l,u=ea(e,"[autofocus]".concat(this.getComputedSelector(o)));c&&!u&&(u=ea(e,this.getComputedSelector(a))),mo(u)},onFirstHiddenElementFocus:function(e){var t,r=e.currentTarget,i=e.relatedTarget,o=i===r.$_pfocustrap_lasthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(i))?ea(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_lasthiddenfocusableelement;mo(o)},onLastHiddenElementFocus:function(e){var t,r=e.currentTarget,i=e.relatedTarget,o=i===r.$_pfocustrap_firsthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(i))?XR(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_firsthiddenfocusableelement;mo(o)},createHiddenFocusableElements:function(e,t){var r=this,i=t.value||{},o=i.tabIndex,s=o===void 0?0:o,a=i.firstFocusableSelector,l=a===void 0?"":a,c=i.lastFocusableSelector,u=c===void 0?"":c,d=function(m){return mv("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:s,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:m==null?void 0:m.bind(r)})},f=d(this.onFirstHiddenElementFocus),h=d(this.onLastHiddenElementFocus);f.$_pfocustrap_lasthiddenfocusableelement=h,f.$_pfocustrap_focusableselector=l,f.setAttribute("data-pc-section","firstfocusableelement"),h.$_pfocustrap_firsthiddenfocusableelement=f,h.$_pfocustrap_focusableselector=u,h.setAttribute("data-pc-section","lastfocusableelement"),e.prepend(f),e.append(h)}}}),Bh={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=Dh()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function E5(n,e,t,r,i,o){return o.inline?It(n.$slots,"default",{key:0}):i.mounted?(Pe(),Vt(Gy,{key:1,to:t.appendTo},[It(n.$slots,"default")],8,["to"])):mn("",!0)}Bh.render=E5;var T5=function(e){var t=e.dt;return`
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
`)},A5={mask:function(e){var t=e.position,r=e.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"||t==="topleft"||t==="bottomleft"?"flex-start":t==="right"||t==="topright"||t==="bottomright"?"flex-end":"center",alignItems:t==="top"||t==="topleft"||t==="topright"?"flex-start":t==="bottom"||t==="bottomleft"||t==="bottomright"?"flex-end":"center",pointerEvents:r?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},R5={mask:function(e){var t=e.props,r=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],i=r.find(function(o){return o===t.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},i?"p-dialog-".concat(i):""]},root:function(e){var t=e.props,r=e.instance;return["p-dialog p-component",{"p-dialog-maximized":t.maximizable&&r.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},P5=gt.extend({name:"dialog",theme:T5,classes:R5,inlineStyles:A5}),k5={name:"BaseDialog",extends:Gs,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:P5,provide:function(){return{$pcDialog:this,$parentInstance:this}}},Uv={name:"Dialog",extends:k5,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var e=this;return{dialogRef:wn(function(){return e._instance})}},data:function(){return{id:this.$attrs.id,containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},watch:{"$attrs.id":function(e){this.id=e||wg()}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&ws.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.id=this.id||wg(),this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&ws.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Kc(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),mo(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&ws.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(e){this.maskMouseDownTarget=e.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var e=function(i){return i&&i.querySelector("[autofocus]")},t=this.$slots.footer&&e(this.footerContainer);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=this.$slots.default&&e(this.content),t||(this.maximizable?(this.focusableMax=!0,t=this.maximizableButton):(this.focusableClose=!0,t=this.closeButton)))),t&&mo(t,{focusVisible:!0})},maximize:function(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?Mf():Cc())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&Mf()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&Cc()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},maximizableRef:function(e){this.maximizableButton=e?e.$el:void 0},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",vv(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var t="";for(var r in this.breakpoints)t+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[r],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=t}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(e){e.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&GR(document.body,{"user-select":"none"}),this.$emit("dragstart",e))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var e=this;this.documentDragListener=function(t){if(e.dragging){var r=pv(e.container),i=bv(e.container),o=t.pageX-e.lastPageX,s=t.pageY-e.lastPageY,a=e.container.getBoundingClientRect(),l=a.left+o,c=a.top+s,u=VR(),d=getComputedStyle(e.container),f=parseFloat(d.marginLeft),h=parseFloat(d.marginTop);e.container.style.position="fixed",e.keepInViewport?(l>=e.minX&&l+r<u.width&&(e.lastPageX=t.pageX,e.container.style.left=l-f+"px"),c>=e.minY&&c+i<u.height&&(e.lastPageY=t.pageY,e.container.style.top=c-h+"px")):(e.lastPageX=t.pageX,e.container.style.left=l-f+"px",e.lastPageY=t.pageY,e.container.style.top=c-h+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var e=this;this.documentDragEndListener=function(t){e.dragging&&(e.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!e.isUnstyled&&(document.body.style["user-select"]=""),e.$emit("dragend",t))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:Iv,focustrap:Ov},components:{Button:dl,Portal:Bh,WindowMinimizeIcon:kv,WindowMaximizeIcon:Pv,TimesIcon:Uh}};function Qa(n){"@babel/helpers - typeof";return Qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qa(n)}function Gg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function $g(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Gg(Object(t),!0).forEach(function(r){D5(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Gg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function D5(n,e,t){return(e=L5(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function L5(n){var e=I5(n,"string");return Qa(e)=="symbol"?e:e+""}function I5(n,e){if(Qa(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Qa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var O5=["aria-labelledby","aria-modal"],U5=["id"];function B5(n,e,t,r,i,o){var s=cr("Button"),a=cr("Portal"),l=$f("focustrap");return Pe(),Vt(a,{appendTo:n.appendTo},{default:Jr(function(){return[i.containerVisible?(Pe(),Ke("div",Le({key:0,ref:o.maskRef,class:n.cx("mask"),style:n.sx("mask",!0,{position:n.position,modal:n.modal}),onMousedown:e[1]||(e[1]=function(){return o.onMaskMouseDown&&o.onMaskMouseDown.apply(o,arguments)}),onMouseup:e[2]||(e[2]=function(){return o.onMaskMouseUp&&o.onMaskMouseUp.apply(o,arguments)})},n.ptm("mask")),[dt(m_,Le({name:"p-dialog",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},n.ptm("transition")),{default:Jr(function(){return[n.visible?Hf((Pe(),Ke("div",Le({key:0,ref:o.containerRef,class:n.cx("root"),style:n.sx("root"),role:"dialog","aria-labelledby":o.ariaLabelledById,"aria-modal":n.modal},n.ptmi("root")),[n.$slots.container?It(n.$slots,"container",{key:0,closeCallback:o.close,maximizeCallback:function(u){return o.maximize(u)}}):(Pe(),Ke(Bt,{key:1},[n.showHeader?(Pe(),Ke("div",Le({key:0,ref:o.headerContainerRef,class:n.cx("header"),onMousedown:e[0]||(e[0]=function(){return o.initDrag&&o.initDrag.apply(o,arguments)})},n.ptm("header")),[It(n.$slots,"header",{class:Ui(n.cx("title"))},function(){return[n.header?(Pe(),Ke("span",Le({key:0,id:o.ariaLabelledById,class:n.cx("title")},n.ptm("title")),So(n.header),17,U5)):mn("",!0)]}),ut("div",Le({class:n.cx("headerActions")},n.ptm("headerActions")),[n.maximizable?(Pe(),Vt(s,Le({key:0,ref:o.maximizableRef,autofocus:i.focusableMax,class:n.cx("pcMaximizeButton"),onClick:o.maximize,tabindex:n.maximizable?"0":"-1",unstyled:n.unstyled},n.maximizeButtonProps,{pt:n.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:Jr(function(c){return[It(n.$slots,"maximizeicon",{maximized:i.maximized},function(){return[(Pe(),Vt(Cs(o.maximizeIconComponent),Le({class:[c.class,i.maximized?n.minimizeIcon:n.maximizeIcon]},n.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])):mn("",!0),n.closable?(Pe(),Vt(s,Le({key:1,ref:o.closeButtonRef,autofocus:i.focusableClose,class:n.cx("pcCloseButton"),onClick:o.close,"aria-label":o.closeAriaLabel,unstyled:n.unstyled},n.closeButtonProps,{pt:n.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:Jr(function(c){return[It(n.$slots,"closeicon",{},function(){return[(Pe(),Vt(Cs(n.closeIcon?"span":"TimesIcon"),Le({class:[n.closeIcon,c.class]},n.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])):mn("",!0)],16)],16)):mn("",!0),ut("div",Le({ref:o.contentRef,class:[n.cx("content"),n.contentClass],style:n.contentStyle},$g($g({},n.contentProps),n.ptm("content"))),[It(n.$slots,"default")],16),n.footer||n.$slots.footer?(Pe(),Ke("div",Le({key:1,ref:o.footerContainerRef,class:n.cx("footer")},n.ptm("footer")),[It(n.$slots,"footer",{},function(){return[gs(So(n.footer),1)]})],16)):mn("",!0)],64))],16,O5)),[[l,{disabled:!n.modal}]]):mn("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):mn("",!0)]}),_:3},8,["appendTo"])}Uv.render=B5;var Bv={name:"EyeIcon",extends:di};function N5(n,e,t,r,i,o){return Pe(),Ke("svg",Le({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[ut("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1)]),16)}Bv.render=N5;var Nv={name:"RefreshIcon",extends:di};function F5(n,e,t,r,i,o){return Pe(),Ke("svg",Le({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[ut("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z",fill:"currentColor"},null,-1)]),16)}Nv.render=F5;var Fv={name:"SearchMinusIcon",extends:di};function z5(n,e,t,r,i,o){return Pe(),Ke("svg",Le({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[ut("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z",fill:"currentColor"},null,-1)]),16)}Fv.render=z5;var zv={name:"SearchPlusIcon",extends:di};function H5(n,e,t,r,i,o){return Pe(),Ke("svg",Le({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[ut("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z",fill:"currentColor"},null,-1)]),16)}zv.render=H5;var Hv={name:"UndoIcon",extends:di};function V5(n,e,t,r,i,o){return Pe(),Ke("svg",Le({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[ut("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z",fill:"currentColor"},null,-1)]),16)}Hv.render=V5;var G5=function(e){var t=e.dt;return`
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
`)},$5={root:function(e){var t=e.props;return["p-image p-component",{"p-image-preview":t.preview}]},previewMask:"p-image-preview-mask",previewIcon:"p-image-preview-icon",mask:"p-image-mask p-overlay-mask p-overlay-mask-enter",toolbar:"p-image-toolbar",rotateRightButton:"p-image-action p-image-rotate-right-button",rotateLeftButton:"p-image-action p-image-rotate-left-button",zoomOutButton:function(e){var t=e.instance;return["p-image-action p-image-zoom-out-button",{"p-disabled":t.isZoomOutDisabled}]},zoomInButton:function(e){var t=e.instance;return["p-image-action p-image-zoom-in-button",{"p-disabled":t.isZoomInDisabled}]},closeButton:"p-image-action p-image-close-button",original:"p-image-original"},W5=gt.extend({name:"image",theme:G5,classes:$5}),j5={name:"BaseImage",extends:Gs,props:{preview:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},imageStyle:{type:null,default:null},imageClass:{type:null,default:null},previewButtonProps:{type:null,default:null},indicatorIcon:{type:String,default:void 0},previewIcon:{type:String,default:void 0},zoomInDisabled:{type:Boolean,default:!1},zoomOutDisabled:{type:Boolean,default:!1}},style:W5,provide:function(){return{$pcImage:this,$parentInstance:this}}},Vv={name:"Image",extends:j5,inheritAttrs:!1,emits:["show","hide","error"],mask:null,data:function(){return{maskVisible:!1,previewVisible:!1,rotate:0,scale:1}},beforeUnmount:function(){this.mask&&ws.clear(this.container)},methods:{maskRef:function(e){this.mask=e},toolbarRef:function(e){this.toolbarRef=e},onImageClick:function(){var e=this;this.preview&&(Mf(),this.maskVisible=!0,setTimeout(function(){e.previewVisible=!0},25))},onPreviewImageClick:function(){this.previewClick=!0},onMaskClick:function(e){var t=KR(e.target,"data-pc-section-group","action")||e.target.closest('[data-pc-section-group="action"]');!this.previewClick&&!t&&(this.previewVisible=!1,this.rotate=0,this.scale=1),this.previewClick=!1},onMaskKeydown:function(e){var t=this;switch(e.code){case"Escape":this.hidePreview(),setTimeout(function(){mo(t.$refs.previewButton)},200),e.preventDefault();break}},onError:function(){this.$emit("error")},rotateRight:function(){this.rotate+=90,this.previewClick=!0},rotateLeft:function(){this.rotate-=90,this.previewClick=!0},zoomIn:function(){this.scale=this.scale+.1,this.previewClick=!0},zoomOut:function(){this.scale=this.scale-.1,this.previewClick=!0},onBeforeEnter:function(){ws.set("modal",this.mask,this.$primevue.config.zIndex.modal)},onEnter:function(){this.focus(),this.$emit("show")},onBeforeLeave:function(){!this.isUnstyled&&Kc(this.mask,"p-overlay-mask-leave")},onLeave:function(){Cc(),this.$emit("hide")},onAfterLeave:function(e){ws.clear(e),this.maskVisible=!1},focus:function(){var e=this.mask.querySelector("[autofocus]");e&&e.focus()},hidePreview:function(){this.previewVisible=!1,this.rotate=0,this.scale=1,Cc()}},computed:{containerClass:function(){return[this.cx("root"),this.class]},rotateClass:function(){return"p-image-preview-rotate-"+this.rotate},imagePreviewStyle:function(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}},isZoomInDisabled:function(){return this.zoomInDisabled||this.scale>=1.5},isZoomOutDisabled:function(){return this.zoomOutDisabled||this.scale<=.5},rightAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateRight:void 0},leftAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateLeft:void 0},zoomInAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomIn:void 0},zoomOutAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomOut:void 0},zoomImageAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomImage:void 0},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{Portal:Bh,EyeIcon:Bv,RefreshIcon:Nv,UndoIcon:Hv,SearchMinusIcon:Fv,SearchPlusIcon:zv,TimesIcon:Uh},directives:{focustrap:Ov}};function el(n){"@babel/helpers - typeof";return el=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},el(n)}function Wg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Gl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Wg(Object(t),!0).forEach(function(r){X5(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Wg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function X5(n,e,t){return(e=Y5(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Y5(n){var e=q5(n,"string");return el(e)=="symbol"?e:e+""}function q5(n,e){if(el(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(el(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var K5=["aria-label"],Z5=["aria-modal"],J5=["aria-label"],Q5=["aria-label"],eP=["disabled","aria-label"],tP=["disabled","aria-label"],nP=["aria-label"],rP=["src"];function iP(n,e,t,r,i,o){var s=cr("RefreshIcon"),a=cr("UndoIcon"),l=cr("SearchMinusIcon"),c=cr("SearchPlusIcon"),u=cr("TimesIcon"),d=cr("Portal"),f=$f("focustrap");return Pe(),Ke("span",Le({class:o.containerClass,style:n.style},n.ptmi("root")),[It(n.$slots,"image",{errorCallback:o.onError},function(){return[ut("img",Le({style:n.imageStyle,class:n.imageClass,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},Gl(Gl({},n.$attrs),n.ptm("image"))),null,16)]}),n.preview?(Pe(),Ke("button",Le({key:0,ref:"previewButton","aria-label":o.zoomImageAriaLabel,type:"button",class:n.cx("previewMask"),onClick:e[1]||(e[1]=function(){return o.onImageClick&&o.onImageClick.apply(o,arguments)})},Gl(Gl({},n.previewButtonProps),n.ptm("previewMask"))),[It(n.$slots,n.$slots.previewicon?"previewicon":"indicatoricon",{},function(){return[(Pe(),Vt(Cs(n.previewIcon||n.indicatorIcon?"i":"EyeIcon"),Le({class:n.cx("previewIcon")},n.ptm("previewIcon")),null,16,["class"]))]})],16,K5)):mn("",!0),dt(d,null,{default:Jr(function(){return[i.maskVisible?Hf((Pe(),Ke("div",Le({key:0,ref:o.maskRef,role:"dialog",class:n.cx("mask"),"aria-modal":i.maskVisible,onClick:e[8]||(e[8]=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)}),onKeydown:e[9]||(e[9]=function(){return o.onMaskKeydown&&o.onMaskKeydown.apply(o,arguments)})},n.ptm("mask")),[ut("div",Le({class:n.cx("toolbar")},n.ptm("toolbar")),[ut("button",Le({class:n.cx("rotateRightButton"),onClick:e[2]||(e[2]=function(){return o.rotateRight&&o.rotateRight.apply(o,arguments)}),type:"button","aria-label":o.rightAriaLabel},n.ptm("rotateRightButton"),{"data-pc-group-section":"action"}),[It(n.$slots,"refresh",{},function(){return[dt(s,Oo(es(n.ptm("rotateRightIcon"))),null,16)]})],16,J5),ut("button",Le({class:n.cx("rotateLeftButton"),onClick:e[3]||(e[3]=function(){return o.rotateLeft&&o.rotateLeft.apply(o,arguments)}),type:"button","aria-label":o.leftAriaLabel},n.ptm("rotateLeftButton"),{"data-pc-group-section":"action"}),[It(n.$slots,"undo",{},function(){return[dt(a,Oo(es(n.ptm("rotateLeftIcon"))),null,16)]})],16,Q5),ut("button",Le({class:n.cx("zoomOutButton"),onClick:e[4]||(e[4]=function(){return o.zoomOut&&o.zoomOut.apply(o,arguments)}),type:"button",disabled:o.isZoomOutDisabled,"aria-label":o.zoomOutAriaLabel},n.ptm("zoomOutButton"),{"data-pc-group-section":"action"}),[It(n.$slots,"zoomout",{},function(){return[dt(l,Oo(es(n.ptm("zoomOutIcon"))),null,16)]})],16,eP),ut("button",Le({class:n.cx("zoomInButton"),onClick:e[5]||(e[5]=function(){return o.zoomIn&&o.zoomIn.apply(o,arguments)}),type:"button",disabled:o.isZoomInDisabled,"aria-label":o.zoomInAriaLabel},n.ptm("zoomInButton"),{"data-pc-group-section":"action"}),[It(n.$slots,"zoomin",{},function(){return[dt(c,Oo(es(n.ptm("zoomInIcon"))),null,16)]})],16,tP),ut("button",Le({class:n.cx("closeButton"),type:"button",onClick:e[6]||(e[6]=function(){return o.hidePreview&&o.hidePreview.apply(o,arguments)}),"aria-label":o.closeAriaLabel,autofocus:""},n.ptm("closeButton"),{"data-pc-group-section":"action"}),[It(n.$slots,"close",{},function(){return[dt(u,Oo(es(n.ptm("closeIcon"))),null,16)]})],16,nP)],16),dt(m_,Le({name:"p-image-original",onBeforeEnter:o.onBeforeEnter,onEnter:o.onEnter,onLeave:o.onLeave,onBeforeLeave:o.onBeforeLeave,onAfterLeave:o.onAfterLeave},n.ptm("transition")),{default:Jr(function(){return[i.previewVisible?(Pe(),Ke("div",Oo(Le({key:0},n.ptm("originalContainer"))),[It(n.$slots,n.$slots.original?"original":"preview",{class:Ui(n.cx("original")),style:rl(o.imagePreviewStyle),previewCallback:o.onPreviewImageClick},function(){return[ut("img",Le({src:n.$attrs.src,class:n.cx("original"),style:o.imagePreviewStyle,onClick:e[7]||(e[7]=function(){return o.onPreviewImageClick&&o.onPreviewImageClick.apply(o,arguments)})},n.ptm("original")),null,16,rP)]})],16)):mn("",!0)]}),_:3},16,["onBeforeEnter","onEnter","onLeave","onBeforeLeave","onAfterLeave"])],16,Z5)),[[f]]):mn("",!0)]}),_:3})],16)}Vv.render=iP;const oP={},sP={class:"aboutme"};function aP(n,e){const t=Vv;return Pe(),Ke("div",sP,[ut("div",null,[dt(t,{src:"/serene1004.png",alt:"포트폴리오 프로필 이미지",width:"160",class:"aboutme-img"}),e[0]||(e[0]=gs(" 웹 퍼블리셔로 웹 개발을 시작하여 현재 프론트엔드 개발을 하고 있는 4년차 퍼블리셔/프론트엔드 개발자입니다.")),e[1]||(e[1]=ut("br",null,null,-1)),e[2]||(e[2]=gs(" 이곳 저곳 마우스를 움직이며 클릭하고 스크롤을 하게 만드는 인터랙션이 가득한 사이트를 만드는 것을 좋아하며, 3D와 애니메이션 등에 관심이 많습니다.")),e[3]||(e[3]=ut("br",null,null,-1)),e[4]||(e[4]=gs(" 현재 방송통신대학교 컴퓨터과학과에 재학중이며, 학업과 업무를 병행하고 있습니다. "))]),e[5]||(e[5]=O1('<div class="contact-list" data-v-9bc4d870><div class="contact-item" data-v-9bc4d870><i class="pi pi-envelope" data-v-9bc4d870></i> vcbxnzn@gmail.com </div><div class="contact-item" data-v-9bc4d870><i class="pi pi-github" data-v-9bc4d870></i><a href="https://github.com/serene1004" target="_blank" data-v-9bc4d870>https://github.com/serene1004</a></div></div>',1))])}const lP=ci(oP,[["render",aP],["__scopeId","data-v-9bc4d870"]]);var cP=function(e){var t=e.dt;return`
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
`)},uP={root:function(e){var t=e.props;return["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},dP=gt.extend({name:"tag",theme:cP,classes:uP}),fP={name:"BaseTag",extends:Gs,props:{value:null,severity:null,rounded:Boolean,icon:String},style:dP,provide:function(){return{$pcTag:this,$parentInstance:this}}},Gv={name:"Tag",extends:fP,inheritAttrs:!1};function hP(n,e,t,r,i,o){return Pe(),Ke("span",Le({class:n.cx("root")},n.ptmi("root")),[n.$slots.icon?(Pe(),Vt(Cs(n.$slots.icon),Le({key:0,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(Pe(),Ke("span",Le({key:1,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):mn("",!0),n.value!=null||n.$slots.default?It(n.$slots,"default",{key:2},function(){return[ut("span",Le({class:n.cx("label")},n.ptm("label")),So(n.value),17)]}):mn("",!0)],16)}Gv.render=hP;const pP={class:"skills"},mP={class:"skills-header"},gP={__name:"Skills",setup(n){const e=vn({html:{html:{title:"HTML",description:"시맨틱 태그를 활용하여 웹 접근성 및 검색 엔진 최적화(SEO)를 고려한 마크업을 작성합니다.",severity:"primary"}},style:{css:{title:"CSS",description:"디자인 가이드를 기반으로 CSS 프레임워크 없이 순수 CSS 및 SCSS를 활용해 UI를 구현할 수 있으며, 반응형 웹과 다크 모드, 다양한 브라우저 환경에서도 일관된 디자인을 유지할 수 있도록 스타일을 작성합니다.",severity:"info"},scss:{title:"SCSS",description:"",severity:"danger"},tailwind:{title:"Tailwind CSS",description:"Tailwind CSS를 활용하여 클래스 네이밍에 대한 부담없이 빠르게 UI 개발이 가능합니다.",severity:"success"},quasar:{title:"Quasar",description:"Quasar 프레임워크를 활용해 Vue 기반의 반응형 웹 및 데스크톱 애플리케이션을 빠르게 구축할 수 있습니다.",severity:"info"}},js:{js:{title:"JavaScript",description:"JavaScript의 호출 스택과 이벤트 루프의 동작 원리를 이해하고 있으며, ES6+ 문법을 활용하여 가독성과 유지보수성을 높인 코드를 작성합니다.",severity:"warn"},vue:{title:"Vue.js",description:"Vue.js를 활용한 컴포넌트 기반 개발에 익숙하며, Composition API를 사용하여 모듈화된 코드를 작성합니다.",severity:"success"},pinia:{title:"Pinia",description:"Pinia를 상태 관리 라이브러리를 사용하여 전역 상태를 관리하며, Composition API를 사용하여 코드를 더 간결하고 가독성 좋게 작성합니다.",severity:"warn"},vite:{title:"Vite",description:"Vite를 번들링 도구로 활용하여 빠른 개발 환경 구축 및 빌드 속도를 최적화합니다.",severity:"info"},gulp:{title:"Gulp",description:"Gulp를 활용한 자동화된 빌드 프로세스와 태스크 관리 경험도 있습니다.",severity:"danger"},electron:{title:"Electron",description:"Electron 기반의 사내 메신저 개발 및 유지보수 경험이 있습니다.",severity:"secondary"}},git:{git:{title:"Git",description:"Git을 활용한 협업 및 버전 관리가 가능합니다.",severity:"contrast"}},communication:{communication:{title:"Communication",description:"기획자, 디자이너, 백엔드 개발자와 커뮤니케이션을 통해 요구사항을 정확하게 파악하고, 이를 반영한 UI/UX 구현 및 프론트엔드 개발을 진행합니다.",severity:"info"},tools:{title:"tools",description:"Figma, Sketch와 같은 디자인 툴을 통한 기획자, 디자이너와의 협업 또한 가능합니다.",severity:"secondary"}}});return(t,r)=>{const i=Gv;return Pe(),Ke("div",pP,[(Pe(!0),Ke(Bt,null,da(e.value,(o,s)=>(Pe(),Ke("div",{key:s,class:"skills-list"},[ut("div",mP,[(Pe(!0),Ke(Bt,null,da(o,(a,l)=>(Pe(),Vt(i,{key:l,value:a.title,severity:a.severity},null,8,["value","severity"]))),128))]),(Pe(!0),Ke(Bt,null,da(o,(a,l)=>(Pe(),Ke("p",{key:l,class:"skills-item"},So(a.description),1))),128))]))),128))])}}},_P=ci(gP,[["__scopeId","data-v-412a8359"]]),bP={class:"controls"},vP={__name:"ControlPanel",setup(n){const e=fv(),{isAnimationActive:t,isZoomActive:r,isRotationActive:i,isPanActive:o}=dv(e);return(s,a)=>{const l=dl;return Pe(),Ke("div",bP,[dt(l,{icon:At(t)?"pi pi-pause":"pi pi-caret-right",severity:At(t)?"primary":"secondary",text:!At(t),onClick:a[0]||(a[0]=c=>At(e).toggleAnimation(!At(t)))},null,8,["icon","severity","text"]),dt(l,{icon:"pi pi-arrows-v",severity:At(r)?"primary":"secondary",text:!At(r),onClick:a[1]||(a[1]=c=>At(e).toggleZoom(!At(r)))},null,8,["severity","text"]),dt(l,{icon:"pi pi-undo",severity:At(i)?"primary":"secondary",text:!At(i),onClick:a[2]||(a[2]=c=>At(e).toggleRotation(!At(i)))},null,8,["severity","text"]),dt(l,{icon:"pi pi-arrows-alt",severity:At(o)?"primary":"secondary",text:!At(o),onClick:a[3]||(a[3]=c=>At(e).togglePan(!At(o)))},null,8,["severity","text"])])}}},yP=ci(vP,[["__scopeId","data-v-8309a113"]]),xP={class:"actions"},SP={__name:"ControlDialog",emits:["moveToPlanet"],setup(n,{emit:e}){const t=Ro({aboutMe:{visible:!1,position:"topright",title:"AboutMe",component:Wl(lP),planet:"earth"},skill:{visible:!1,position:"right",title:"Skills",component:Wl(_P),planet:"jupiter"},controller:{visible:!1,position:"bottomright",title:"Controller",component:Wl(yP),planet:"sun"}}),r=s=>{s.visible?s.visible=!1:(i(),s.visible=!0)},i=()=>{Object.values(t).forEach(s=>s.visible=!1)},o=vn({root:{style:{maxHeight:"50vh"}},header:{style:{padding:"8px 8px 8px 16px"}},content:{style:{padding:"0px 16px 16px",fontSize:"16px",overflowX:"hidden"}}});return(s,a)=>{const l=dl,c=Uv;return Pe(),Ke(Bt,null,[ut("div",xP,[(Pe(!0),Ke(Bt,null,da(t,u=>(Pe(),Vt(l,{key:u.title,label:u.title,size:"small",onClick:d=>r(u)},null,8,["label","onClick"]))),128))]),(Pe(!0),Ke(Bt,null,da(t,u=>(Pe(),Vt(c,{key:u.title,visible:u.visible,"onUpdate:visible":d=>u.visible=d,position:u.position,draggable:!1,header:u.title,pt:o.value},{default:Jr(()=>[(Pe(),Vt(Cs(u.component)))]),_:2},1032,["visible","onUpdate:visible","position","header","pt"]))),128))],64)}}},MP=ci(SP,[["__scopeId","data-v-ff709482"]]),wP={class:"canvas-warpper"},CP=192,jg=8,EP={__name:"ThreeCanvas",setup(n){const e=fv(),{isAnimationActive:t,isZoomActive:r,isRotationActive:i,isPanActive:o}=dv(e),s=vn(null);let a=null,l=null,c=null,u=null,d=null;const f=h=>{const _=l.getObjectByName(h);if(!_)return;a.enableZoom=!1,a.enableRotate=!1,a.enablePan=!1;const g={sun:32,jupiter:16}[h]??jg,p=new j;u.getWorldDirection(p),p.normalize();const x={x:_.position.x-p.x*g,y:_.position.y-p.y*g,z:_.position.z-p.z*g};sv.to(u.position,{x:x.x,y:x.y,z:x.z,duration:1.2,ease:"power2.inOut",onComplete:()=>{u.lookAt(_.position),a.target.set(_.position.x,_.position.y,_.position.z),a.update(),a.enableZoom=r.value,a.enableRotate=i.value,a.enablePan=o.value}})};return Nc(()=>{l=new iw,c=new vw,d=new fw;const h=N=>{const G=d.load(N);return G.wrapS=Ia,G.wrapT=Ia,G.mapping=pc,G.colorSpace=On,G},_=h("/textures/space/2k_stars_milky_way.jpg"),m=h("/textures/space/2k_sun.jpg"),g=h("/textures/space/2k_mercury.jpg"),p=h("/textures/space/2k_venus_surface.jpg"),x=h("/textures/space/2k_earth_daymap.jpg"),v=h("/textures/space/2k_moon.jpg"),b=h("/textures/space/2k_eris_fictional.jpg"),E=h("/textures/space/2k_mars.jpg"),R=h("/textures/space/2k_jupiter.jpg"),A=h("/textures/space/2k_saturn.jpg"),P=h("/textures/space/2k_saturn_ring_alpha.png"),y=h("/textures/space/2k_uranus.jpg"),M=h("/textures/space/2k_neptune.jpg"),D=new _c(256,64,64),O=new ch({map:_,side:yn}),U=new Zn(D,O);l.add(U);const Y=new iA({canvas:s.value,antialias:!0});Y.setSize(window.innerWidth,window.innerHeight),Y.setPixelRatio(window.devicePixelRatio>1?2:1),Y.shadowMap.enabled=!0,u=new Bn(75,window.innerWidth/window.innerHeight,.1,1e3),u.position.set(-64,32,32),l.add(u),(()=>{l.add(new _w("white",.1));const N=new mw("white",2048,2048);N.position.set(0,0,0),N.castShadow=!0,N.shadow.mapSize.set(256,256),N.shadow.camera.near=1,N.shadow.camera.far=256,l.add(N)})();const V=(N,G,ae)=>{const le=new Zn(new _c(N,32,32),new _m({map:G}));return ae&&(le.name=ae),le},$=V(12,m,"sun");$.material.emissive=new tt("white"),$.material.emissiveMap=m,$.material.emissiveIntensity=.75;const z=V(.8,g,"mercury"),he=V(2,p,"venus"),pe=V(2,x,"earth"),_e=V(.5,v,"moon"),Me=V(1.1,E,"mars"),Fe=V(5,R,"jupiter"),Q=V(4.2,A,"saturn"),fe=V(1.8,y,"uranus"),ve=V(1.8,M,"neptune");l.add($),pe.add(_e),pe.rotation.x=nf.degToRad(23.5),Q.rotation.x=nf.degToRad(27);const se=(()=>{const N=new dh(7,9,64),G=new _m({side:wr,opacity:.75,transparent:!0,emissive:new tt("white"),emissiveMap:P,emissiveIntensity:.75}),ae=new Zn(N,G);return ae.rotation.x=Math.PI/2,ae})();Q.add(se);const oe=new ss;z.position.set(20,1.2,-3),he.position.set(25,-1.5,4),pe.position.set(40,0,0),_e.position.set(4,0,0),Me.position.set(50,-3,5),Fe.position.set(90,4,-3),Q.position.set(130,-3,7),fe.position.set(160,4,-5),ve.position.set(190,-4.5,4),oe.add(z,he,pe,Me,Fe,Q,fe,ve),l.add(oe);const de=new ss,ke=1024,k=[];for(let N=0;N<ke;N++){const G=Math.random()*.1+.2,ae=V(G,null);ae.material.emissive=new tt("white"),ae.material.emissiveMap=b,ae.material.emissiveIntensity=.75,ae.position.set(Math.random()*384-192,Math.random()*384-192,Math.random()*384-192),de.add(ae),k.push(ae)}l.add(de);function L(N){const G=N*.025;k.forEach((ae,le)=>{const be=(Math.sin(G+le*.5)+1)*.375;ae.material.emissiveIntensity=be}),requestAnimationFrame(L)}requestAnimationFrame(L),a=new sA(u,Y.domElement),a.maxDistance=CP,a.minDistance=jg,a.enableZoom=r.value,a.enableRotate=i.value,a.enablePan=o.value;const w=96,re=()=>{const N=a.target;N.length()>w&&(N.normalize().multiplyScalar(w),a.update())};a.addEventListener("change",re);const K=new yw,q=new $e,ne=N=>{q.x=N.clientX/window.innerWidth*2-1,q.y=-(N.clientY/window.innerHeight)*2+1,K.setFromCamera(q,u);const G=K.intersectObjects([$,pe,_e]);if(G.length>0){const ae=G[0].object;ae===$?console.log("Sun clicked",ae):ae===pe?console.log("Earth clicked",ae):ae===_e&&console.log("Moon clicked",ae)}};window.addEventListener("click",ne);const ce=[{object:$,speed:16},{object:oe,speed:4},{object:pe,speed:1},{object:_e,speed:.25},{object:z,speed:1.5},{object:he,speed:.5},{object:Me,speed:1.2},{object:Fe,speed:.3},{object:Q,speed:.4},{object:fe,speed:.6},{object:ve,speed:.5},{object:de,speed:32}],te=[{object:z,speed:.6,radius:20,yOffset:1.2},{object:he,speed:.3,radius:25,yOffset:-1.5},{object:pe,speed:.2,radius:40,yOffset:0},{object:Me,speed:.1,radius:50,yOffset:-3},{object:Fe,speed:.04,radius:90,yOffset:4},{object:Q,speed:.02,radius:130,yOffset:-3},{object:fe,speed:.02,radius:160,yOffset:4},{object:ve,speed:.01,radius:190,yOffset:-4.5}],C={};te.forEach(({object:N})=>{C[N.uuid]=Math.random()*Math.PI*2});const S=N=>{ce.forEach(({object:G,speed:ae})=>{G.rotation.y+=N/ae}),te.forEach(({object:G,speed:ae,radius:le,yOffset:be})=>{C[G.uuid]+=N*ae;const Oe=C[G.uuid];G.position.set(Math.cos(Oe)*le,be,Math.sin(Oe)*le)})},I=()=>{const N=c.getDelta();t.value&&S(N),Y.render(l,u),Y.setAnimationLoop(I)},X=()=>{const{innerWidth:N,innerHeight:G}=window;u.aspect=N/G,u.updateProjectionMatrix(),Y.setSize(N,G)};window.addEventListener("resize",X),I(),Fn(r,N=>{a.enableZoom=N}),Fn(i,N=>{a.enableRotate=N}),Fn(o,N=>{a.enablePan=N}),Vf(()=>{window.removeEventListener("resize",X),window.removeEventListener("click",ne),Y.setAnimationLoop(null)})}),(h,_)=>(Pe(),Ke("div",wP,[ut("canvas",{id:"canvas",ref_key:"canvas",ref:s},null,512),dt(MP,{onMoveToPlanet:f})]))}},TP=ci(EP,[["__scopeId","data-v-5a68f402"]]),AP={__name:"Home",setup(n){return(e,t)=>(Pe(),Vt(TP))}},RP={};function PP(n,e){return Pe(),Ke("div",null,"노트에용")}const kP=ci(RP,[["render",PP]]),DP={};function LP(n,e){const t=dl;return Pe(),Ke(Bt,null,[e[0]||(e[0]=ut("div",null,"갤러리에요",-1)),dt(t,{label:"버튼"})],64)}const IP=ci(DP,[["render",LP]]),OP={};function UP(n,e){return Pe(),Ke("div",null,"Serene1004")}const BP=ci(OP,[["render",UP]]),NP=[{path:"/",name:"Home",component:AP},{path:"/notes",name:"Notes",component:kP},{path:"/gallery",name:"Gallery",component:IP},{path:"/contact",name:"Contact",component:BP}],FP=TS({history:nS(),routes:NP});var nn={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function tl(n){"@babel/helpers - typeof";return tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tl(n)}function Xg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function $l(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xg(Object(t),!0).forEach(function(r){zP(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Xg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function zP(n,e,t){return(e=HP(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function HP(n){var e=VP(n,"string");return tl(e)=="symbol"?e:e+""}function VP(n,e){if(tl(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(tl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var GP={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[nn.STARTS_WITH,nn.CONTAINS,nn.NOT_CONTAINS,nn.ENDS_WITH,nn.EQUALS,nn.NOT_EQUALS],numeric:[nn.EQUALS,nn.NOT_EQUALS,nn.LESS_THAN,nn.LESS_THAN_OR_EQUAL_TO,nn.GREATER_THAN,nn.GREATER_THAN_OR_EQUAL_TO],date:[nn.DATE_IS,nn.DATE_IS_NOT,nn.DATE_BEFORE,nn.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},$P=Symbol();function WP(n,e){var t={config:Ro(e)};return n.config.globalProperties.$primevue=t,n.provide($P,t),jP(),XP(n,t),t}var ds=[];function jP(){lr.clear(),ds.forEach(function(n){return n==null?void 0:n()}),ds=[]}function XP(n,e){var t=vn(!1),r=function(){var c;if(((c=e.config)===null||c===void 0?void 0:c.theme)!=="none"&&!pt.isStyleNameLoaded("common")){var u,d,f=((u=gt.getCommonTheme)===null||u===void 0?void 0:u.call(gt))||{},h=f.primitive,_=f.semantic,m=f.global,g=f.style,p={nonce:(d=e.config)===null||d===void 0||(d=d.csp)===null||d===void 0?void 0:d.nonce};gt.load(h==null?void 0:h.css,$l({name:"primitive-variables"},p)),gt.load(_==null?void 0:_.css,$l({name:"semantic-variables"},p)),gt.load(m==null?void 0:m.css,$l({name:"global-variables"},p)),gt.loadTheme($l({name:"global-style"},p),g),pt.setLoadedStyleName("common")}};lr.on("theme:change",function(l){t.value||(n.config.globalProperties.$primevue.config.theme=l,t.value=!0)});var i=Fn(e.config,function(l,c){us.emit("config:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),o=Fn(function(){return e.config.ripple},function(l,c){us.emit("config:ripple:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),s=Fn(function(){return e.config.theme},function(l,c){t.value||pt.setTheme(l),e.config.unstyled||r(),t.value=!1,us.emit("config:theme:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!1}),a=Fn(function(){return e.config.unstyled},function(l,c){!l&&e.config.theme&&r(),us.emit("config:unstyled:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0});ds.push(i),ds.push(o),ds.push(s),ds.push(a)}var YP={install:function(e,t){var r=xv(GP,t);WP(e,r)}},qP={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}},KP={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},ZP={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}},JP={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},QP={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},e4={root:{borderRadius:"{content.border.radius}"}},t4={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}},n4={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},r4={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}},i4={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},o4={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"}},s4={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}}},a4={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}},l4={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},c4={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}},u4={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}},d4={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},f4={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},h4={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}},p4={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.375rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.375rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}},m4={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}},g4={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}},_4={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},b4={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}},v4={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}},y4={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}},x4={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}},S4={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}},M4={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}},w4={icon:{color:"{form.field.icon.color}"}},C4={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"}},E4={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},T4={handle:{size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},A4={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},R4={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}},P4={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}},k4={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"}},D4={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},L4={root:{gap:"0.5rem"},input:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}}},I4={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},O4={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}},U4={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}},B4={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},N4={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}},F4={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},z4={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}},H4={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}},V4={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}},G4={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},$4={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}},W4={root:{outline:{width:"2px",color:"{content.background}"}}},j4={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}},X4={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}},Y4={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}},q4={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}},K4={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},Z4={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}},J4={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}},Q4={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}},ek={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}}},tk={root:{gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},nk={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}},rk={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},ik={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}},ok={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},sk={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},ak={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}},lk={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}},ck={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}},uk={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},dk={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"}},fk={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},hk={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}},pk={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},mk={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},gk={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},_k={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}},bk={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},vk={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},yk={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}},xk={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},Sk={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.375rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.625rem 1.25rem"}},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}},Mk={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}}},wk={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}},Ck={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},Ek={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.5rem 0"}},Tk={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}},Ak={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},Rk={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};function nl(n){"@babel/helpers - typeof";return nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nl(n)}function Yg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function qg(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Yg(Object(t),!0).forEach(function(r){Pk(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Yg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Pk(n,e,t){return(e=kk(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function kk(n){var e=Dk(n,"string");return nl(e)=="symbol"?e:e+""}function Dk(n,e){if(nl(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(nl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Lk=qg(qg({},QP),{},{components:{accordion:qP,autocomplete:KP,avatar:ZP,badge:JP,blockui:e4,breadcrumb:t4,button:n4,datepicker:p4,card:r4,carousel:i4,cascadeselect:o4,checkbox:s4,chip:a4,colorpicker:l4,confirmdialog:c4,confirmpopup:u4,contextmenu:d4,dataview:h4,datatable:f4,dialog:m4,divider:g4,dock:_4,drawer:b4,editor:v4,fieldset:y4,fileupload:x4,iftalabel:C4,floatlabel:S4,galleria:M4,iconfield:w4,image:E4,imagecompare:T4,inlinemessage:A4,inplace:R4,inputchips:P4,inputgroup:k4,inputnumber:D4,inputotp:L4,inputtext:I4,knob:O4,listbox:U4,megamenu:B4,menu:N4,menubar:F4,message:z4,metergroup:H4,multiselect:V4,orderlist:G4,organizationchart:$4,overlaybadge:W4,popover:Z4,paginator:j4,password:q4,panel:X4,panelmenu:Y4,picklist:K4,progressbar:J4,progressspinner:Q4,radiobutton:ek,rating:tk,scrollpanel:rk,select:ik,selectbutton:ok,skeleton:sk,slider:ak,speeddial:lk,splitter:uk,splitbutton:ck,stepper:dk,steps:fk,tabmenu:hk,tabs:pk,tabview:mk,textarea:bk,tieredmenu:vk,tag:gk,terminal:_k,timeline:yk,togglebutton:Sk,toggleswitch:Mk,tree:Ek,treeselect:Tk,treetable:Ak,toast:xk,toolbar:wk,virtualscroller:Rk},directives:{tooltip:Ck,ripple:nk}});const Ik={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1em",anchorGutter:"2px",primary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"},formField:{paddingX:"0.75em",paddingY:"0.5em",sm:{fontSize:"0.875em",paddingX:"0.625em",paddingY:"0.375em"},lg:{fontSize:"1.125em",paddingX:"0.875em",paddingY:"0.625em"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25em 0.25em",gap:"2px",header:{padding:"0.5em 1em 0.25em 1em"},option:{padding:"0.5em 0.75em",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5em 0.75em",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25em 0.25em",gap:"2px"},item:{padding:"0.5em 0.75em",borderRadius:"{border.radius.sm}",gap:"0.5em"},submenuLabel:{padding:"0.5em 0.75em",fontWeight:"600"},submenuIcon:{size:"0.875em"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75em",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25em",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},Jc=vx(wx),Ok=a3(Lk,Ik);Jc.use(YP,{theme:{preset:Ok,options:{prefix:"p",darkModeSelector:".dark",cssLayer:!1}},ripple:!0});Jc.use(LR());Jc.use(FP);Jc.mount("#app");

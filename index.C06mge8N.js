(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function bl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},Io=[],zn=()=>{},am=()=>!1,na=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vl=n=>n.startsWith("onUpdate:"),Ft=Object.assign,_l=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},cm=Object.prototype.hasOwnProperty,it=(n,e)=>cm.call(n,e),Ge=Array.isArray,Uo=n=>ra(n)==="[object Map]",Vf=n=>ra(n)==="[object Set]",Ve=n=>typeof n=="function",Mt=n=>typeof n=="string",fr=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Gf=n=>(vt(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),Wf=Object.prototype.toString,ra=n=>Wf.call(n),lm=n=>ra(n).slice(8,-1),$f=n=>ra(n)==="[object Object]",xl=n=>Mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,vi=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},dm=/-(\w)/g,gn=oa(n=>n.replace(dm,(e,t)=>t?t.toUpperCase():"")),um=/\B([A-Z])/g,oo=oa(n=>n.replace(um,"-$1").toLowerCase()),ia=oa(n=>n.charAt(0).toUpperCase()+n.slice(1)),xa=oa(n=>n?`on${ia(n)}`:""),Ar=(n,e)=>!Object.is(n,e),ya=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Xf=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},fm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let vd;const sa=()=>vd||(vd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yl(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],o=Mt(r)?gm(r):yl(r);if(o)for(const i in o)e[i]=o[i]}return e}else if(Mt(n)||vt(n))return n}const hm=/;(?![^(]*\))/g,pm=/:([^]+)/,mm=/\/\*[^]*?\*\//g;function gm(n){const e={};return n.replace(mm,"").split(hm).forEach(t=>{if(t){const r=t.split(pm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pi(n){let e="";if(Mt(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const r=Pi(n[t]);r&&(e+=r+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const bm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vm=bl(bm);function jf(n){return!!n||n===""}const Yf=n=>!!(n&&n.__v_isRef===!0),Sl=n=>Mt(n)?n:n==null?"":Ge(n)||vt(n)&&(n.toString===Wf||!Ve(n.toString))?Yf(n)?Sl(n.value):JSON.stringify(n,qf,2):String(n),qf=(n,e)=>Yf(e)?qf(n,e.value):Uo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,o],i)=>(t[Sa(r,i)+" =>"]=o,t),{})}:Vf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Sa(t))}:fr(e)?Sa(e):vt(e)&&!Ge(e)&&!$f(e)?String(e):e,Sa=(n,e="")=>{var t;return fr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class _m{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=on;try{return on=this,e()}finally{on=t}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function xm(){return on}let ht;const Ma=new WeakSet;class Kf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ma.has(this)&&(Ma.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_d(this),Qf(this);const e=ht,t=Rn;ht=this,Rn=!0;try{return this.fn()}finally{eh(this),ht=e,Rn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wl(e);this.deps=this.depsTail=void 0,_d(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ma.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pc(this)&&this.run()}get dirty(){return pc(this)}}let Zf=0,_i,xi;function Jf(n,e=!1){if(n.flags|=8,e){n.next=xi,xi=n;return}n.next=_i,_i=n}function Ml(){Zf++}function El(){if(--Zf>0)return;if(xi){let e=xi;for(xi=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;_i;){let e=_i;for(_i=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Qf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function eh(n){let e,t=n.depsTail,r=t;for(;r;){const o=r.prevDep;r.version===-1?(r===t&&(t=o),wl(r),ym(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}n.deps=e,n.depsTail=t}function pc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(th(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function th(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Di))return;n.globalVersion=Di;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!pc(n)){n.flags&=-3;return}const t=ht,r=Rn;ht=n,Rn=!0;try{Qf(n);const o=n.fn(n._value);(e.version===0||Ar(o,n._value))&&(n._value=o,e.version++)}catch(o){throw e.version++,o}finally{ht=t,Rn=r,eh(n),n.flags&=-3}}function wl(n,e=!1){const{dep:t,prevSub:r,nextSub:o}=n;if(r&&(r.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)wl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ym(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Rn=!0;const nh=[];function Ur(){nh.push(Rn),Rn=!1}function Or(){const n=nh.pop();Rn=n===void 0?!0:n}function _d(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let Di=0;class Sm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ht||!Rn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new Sm(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,rh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=r)}return t}trigger(e){this.version++,Di++,this.notify(e)}notify(e){Ml();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{El()}}}function rh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)rh(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const mc=new WeakMap,Qr=Symbol(""),gc=Symbol(""),Li=Symbol("");function Nt(n,e,t){if(Rn&&ht){let r=mc.get(n);r||mc.set(n,r=new Map);let o=r.get(t);o||(r.set(t,o=new Tl),o.map=r,o.key=t),o.track()}}function nr(n,e,t,r,o,i){const s=mc.get(n);if(!s){Di++;return}const a=c=>{c&&c.trigger()};if(Ml(),e==="clear")s.forEach(a);else{const c=Ge(n),l=c&&xl(t);if(c&&t==="length"){const d=Number(r);s.forEach((u,f)=>{(f==="length"||f===Li||!fr(f)&&f>=d)&&a(u)})}else switch((t!==void 0||s.has(void 0))&&a(s.get(t)),l&&a(s.get(Li)),e){case"add":c?l&&a(s.get("length")):(a(s.get(Qr)),Uo(n)&&a(s.get(gc)));break;case"delete":c||(a(s.get(Qr)),Uo(n)&&a(s.get(gc)));break;case"set":Uo(n)&&a(s.get(Qr));break}}El()}function co(n){const e=ot(n);return e===n?e:(Nt(e,"iterate",Li),Pn(n)?e:e.map($t))}function Cl(n){return Nt(n=ot(n),"iterate",Li),n}const Mm={__proto__:null,[Symbol.iterator](){return Ea(this,Symbol.iterator,$t)},concat(...n){return co(this).concat(...n.map(e=>Ge(e)?co(e):e))},entries(){return Ea(this,"entries",n=>(n[1]=$t(n[1]),n))},every(n,e){return Xn(this,"every",n,e,void 0,arguments)},filter(n,e){return Xn(this,"filter",n,e,t=>t.map($t),arguments)},find(n,e){return Xn(this,"find",n,e,$t,arguments)},findIndex(n,e){return Xn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Xn(this,"findLast",n,e,$t,arguments)},findLastIndex(n,e){return Xn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Xn(this,"forEach",n,e,void 0,arguments)},includes(...n){return wa(this,"includes",n)},indexOf(...n){return wa(this,"indexOf",n)},join(n){return co(this).join(n)},lastIndexOf(...n){return wa(this,"lastIndexOf",n)},map(n,e){return Xn(this,"map",n,e,void 0,arguments)},pop(){return ii(this,"pop")},push(...n){return ii(this,"push",n)},reduce(n,...e){return xd(this,"reduce",n,e)},reduceRight(n,...e){return xd(this,"reduceRight",n,e)},shift(){return ii(this,"shift")},some(n,e){return Xn(this,"some",n,e,void 0,arguments)},splice(...n){return ii(this,"splice",n)},toReversed(){return co(this).toReversed()},toSorted(n){return co(this).toSorted(n)},toSpliced(...n){return co(this).toSpliced(...n)},unshift(...n){return ii(this,"unshift",n)},values(){return Ea(this,"values",$t)}};function Ea(n,e,t){const r=Cl(n),o=r[e]();return r!==n&&!Pn(n)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=t(i.value)),i}),o}const Em=Array.prototype;function Xn(n,e,t,r,o,i){const s=Cl(n),a=s!==n&&!Pn(n),c=s[e];if(c!==Em[e]){const u=c.apply(n,i);return a?$t(u):u}let l=t;s!==n&&(a?l=function(u,f){return t.call(this,$t(u),f,n)}:t.length>2&&(l=function(u,f){return t.call(this,u,f,n)}));const d=c.call(s,l,r);return a&&o?o(d):d}function xd(n,e,t,r){const o=Cl(n);let i=t;return o!==n&&(Pn(n)?t.length>3&&(i=function(s,a,c){return t.call(this,s,a,c,n)}):i=function(s,a,c){return t.call(this,s,$t(a),c,n)}),o[e](i,...r)}function wa(n,e,t){const r=ot(n);Nt(r,"iterate",Li);const o=r[e](...t);return(o===-1||o===!1)&&Dl(t[0])?(t[0]=ot(t[0]),r[e](...t)):o}function ii(n,e,t=[]){Ur(),Ml();const r=ot(n)[e].apply(n,t);return El(),Or(),r}const wm=bl("__proto__,__v_isRef,__isVue"),oh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(fr));function Tm(n){fr(n)||(n=String(n));const e=ot(this);return Nt(e,"has",n),e.hasOwnProperty(n)}class ih{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const o=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!o;if(t==="__v_isReadonly")return o;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(o?i?Om:lh:i?ch:ah).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=Ge(e);if(!o){let c;if(s&&(c=Mm[t]))return c;if(t==="hasOwnProperty")return Tm}const a=Reflect.get(e,t,Bt(e)?e:r);return(fr(t)?oh.has(t):wm(t))||(o||Nt(e,"get",t),i)?a:Bt(a)?s&&xl(t)?a:a.value:vt(a)?o?Rl(a):Ji(a):a}}class sh extends ih{constructor(e=!1){super(!1,e)}set(e,t,r,o){let i=e[t];if(!this._isShallow){const c=eo(i);if(!Pn(r)&&!eo(r)&&(i=ot(i),r=ot(r)),!Ge(e)&&Bt(i)&&!Bt(r))return c?!1:(i.value=r,!0)}const s=Ge(e)&&xl(t)?Number(t)<e.length:it(e,t),a=Reflect.set(e,t,r,Bt(e)?e:o);return e===ot(o)&&(s?Ar(r,i)&&nr(e,"set",t,r):nr(e,"add",t,r)),a}deleteProperty(e,t){const r=it(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&r&&nr(e,"delete",t,void 0),o}has(e,t){const r=Reflect.has(e,t);return(!fr(t)||!oh.has(t))&&Nt(e,"has",t),r}ownKeys(e){return Nt(e,"iterate",Ge(e)?"length":Qr),Reflect.ownKeys(e)}}class Cm extends ih{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Am=new sh,Rm=new Cm,Pm=new sh(!0);const bc=n=>n,as=n=>Reflect.getPrototypeOf(n);function Dm(n,e,t){return function(...r){const o=this.__v_raw,i=ot(o),s=Uo(i),a=n==="entries"||n===Symbol.iterator&&s,c=n==="keys"&&s,l=o[n](...r),d=t?bc:e?vc:$t;return!e&&Nt(i,"iterate",c?gc:Qr),{next(){const{value:u,done:f}=l.next();return f?{value:u,done:f}:{value:a?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function cs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Lm(n,e){const t={get(o){const i=this.__v_raw,s=ot(i),a=ot(o);n||(Ar(o,a)&&Nt(s,"get",o),Nt(s,"get",a));const{has:c}=as(s),l=e?bc:n?vc:$t;if(c.call(s,o))return l(i.get(o));if(c.call(s,a))return l(i.get(a));i!==s&&i.get(o)},get size(){const o=this.__v_raw;return!n&&Nt(ot(o),"iterate",Qr),Reflect.get(o,"size",o)},has(o){const i=this.__v_raw,s=ot(i),a=ot(o);return n||(Ar(o,a)&&Nt(s,"has",o),Nt(s,"has",a)),o===a?i.has(o):i.has(o)||i.has(a)},forEach(o,i){const s=this,a=s.__v_raw,c=ot(a),l=e?bc:n?vc:$t;return!n&&Nt(c,"iterate",Qr),a.forEach((d,u)=>o.call(i,l(d),l(u),s))}};return Ft(t,n?{add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear")}:{add(o){!e&&!Pn(o)&&!eo(o)&&(o=ot(o));const i=ot(this);return as(i).has.call(i,o)||(i.add(o),nr(i,"add",o,o)),this},set(o,i){!e&&!Pn(i)&&!eo(i)&&(i=ot(i));const s=ot(this),{has:a,get:c}=as(s);let l=a.call(s,o);l||(o=ot(o),l=a.call(s,o));const d=c.call(s,o);return s.set(o,i),l?Ar(i,d)&&nr(s,"set",o,i):nr(s,"add",o,i),this},delete(o){const i=ot(this),{has:s,get:a}=as(i);let c=s.call(i,o);c||(o=ot(o),c=s.call(i,o)),a&&a.call(i,o);const l=i.delete(o);return c&&nr(i,"delete",o,void 0),l},clear(){const o=ot(this),i=o.size!==0,s=o.clear();return i&&nr(o,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Dm(o,n,e)}),t}function Al(n,e){const t=Lm(n,e);return(r,o,i)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?r:Reflect.get(it(t,o)&&o in r?t:r,o,i)}const km={get:Al(!1,!1)},Im={get:Al(!1,!0)},Um={get:Al(!0,!1)};const ah=new WeakMap,ch=new WeakMap,lh=new WeakMap,Om=new WeakMap;function Nm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bm(n){return n.__v_skip||!Object.isExtensible(n)?0:Nm(lm(n))}function Ji(n){return eo(n)?n:Pl(n,!1,Am,km,ah)}function dh(n){return Pl(n,!1,Pm,Im,ch)}function Rl(n){return Pl(n,!0,Rm,Um,lh)}function Pl(n,e,t,r,o){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=o.get(n);if(i)return i;const s=Bm(n);if(s===0)return n;const a=new Proxy(n,s===2?r:t);return o.set(n,a),a}function yi(n){return eo(n)?yi(n.__v_raw):!!(n&&n.__v_isReactive)}function eo(n){return!!(n&&n.__v_isReadonly)}function Pn(n){return!!(n&&n.__v_isShallow)}function Dl(n){return n?!!n.__v_raw:!1}function ot(n){const e=n&&n.__v_raw;return e?ot(e):n}function Fm(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&Xf(n,"__v_skip",!0),n}const $t=n=>vt(n)?Ji(n):n,vc=n=>vt(n)?Rl(n):n;function Bt(n){return n?n.__v_isRef===!0:!1}function Zt(n){return uh(n,!1)}function zm(n){return uh(n,!0)}function uh(n,e){return Bt(n)?n:new Hm(n,e)}class Hm{constructor(e,t){this.dep=new Tl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ot(e),this._value=t?e:$t(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Pn(e)||eo(e);e=r?e:ot(e),Ar(e,t)&&(this._rawValue=e,this._value=r?e:$t(e),this.dep.trigger())}}function Oo(n){return Bt(n)?n.value:n}const Vm={get:(n,e,t)=>e==="__v_raw"?n:Oo(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const o=n[e];return Bt(o)&&!Bt(t)?(o.value=t,!0):Reflect.set(n,e,t,r)}};function fh(n){return yi(n)?n:new Proxy(n,Vm)}class Gm{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Di-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return Jf(this,!0),!0}get value(){const e=this.dep.track();return th(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wm(n,e,t=!1){let r,o;return Ve(n)?r=n:(r=n.get,o=n.set),new Gm(r,o,t)}const ls={},Ws=new WeakMap;let jr;function $m(n,e=!1,t=jr){if(t){let r=Ws.get(t);r||Ws.set(t,r=[]),r.push(n)}}function Xm(n,e,t=ut){const{immediate:r,deep:o,once:i,scheduler:s,augmentJob:a,call:c}=t,l=x=>o?x:Pn(x)||o===!1||o===0?rr(x,1):rr(x);let d,u,f,h,g=!1,v=!1;if(Bt(n)?(u=()=>n.value,g=Pn(n)):yi(n)?(u=()=>l(n),g=!0):Ge(n)?(v=!0,g=n.some(x=>yi(x)||Pn(x)),u=()=>n.map(x=>{if(Bt(x))return x.value;if(yi(x))return l(x);if(Ve(x))return c?c(x,2):x()})):Ve(n)?e?u=c?()=>c(n,2):n:u=()=>{if(f){Ur();try{f()}finally{Or()}}const x=jr;jr=d;try{return c?c(n,3,[h]):n(h)}finally{jr=x}}:u=zn,e&&o){const x=u,L=o===!0?1/0:o;u=()=>rr(x(),L)}const m=xm(),p=()=>{d.stop(),m&&m.active&&_l(m.effects,d)};if(i&&e){const x=e;e=(...L)=>{x(...L),p()}}let w=v?new Array(n.length).fill(ls):ls;const S=x=>{if(!(!(d.flags&1)||!d.dirty&&!x))if(e){const L=d.run();if(o||g||(v?L.some((D,R)=>Ar(D,w[R])):Ar(L,w))){f&&f();const D=jr;jr=d;try{const R=[L,w===ls?void 0:v&&w[0]===ls?[]:w,h];c?c(e,3,R):e(...R),w=L}finally{jr=D}}}else d.run()};return a&&a(S),d=new Kf(u),d.scheduler=s?()=>s(S,!1):S,h=x=>$m(x,!1,d),f=d.onStop=()=>{const x=Ws.get(d);if(x){if(c)c(x,4);else for(const L of x)L();Ws.delete(d)}},e?r?S(!0):w=d.run():s?s(S.bind(null,!0),!0):d.run(),p.pause=d.pause.bind(d),p.resume=d.resume.bind(d),p.stop=p,p}function rr(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Bt(n))rr(n.value,e,t);else if(Ge(n))for(let r=0;r<n.length;r++)rr(n[r],e,t);else if(Vf(n)||Uo(n))n.forEach(r=>{rr(r,e,t)});else if($f(n)){for(const r in n)rr(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&rr(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qi(n,e,t,r){try{return r?n(...r):n()}catch(o){aa(o,e,t)}}function Vn(n,e,t,r){if(Ve(n)){const o=Qi(n,e,t,r);return o&&Gf(o)&&o.catch(i=>{aa(i,e,t)}),o}if(Ge(n)){const o=[];for(let i=0;i<n.length;i++)o.push(Vn(n[i],e,t,r));return o}}function aa(n,e,t,r=!0){const o=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||ut;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](n,c,l)===!1)return}a=a.parent}if(i){Ur(),Qi(i,null,10,[n,c,l]),Or();return}}jm(n,t,o,r,s)}function jm(n,e,t,r=!0,o=!1){if(o)throw n;console.error(n)}const Xt=[];let Un=-1;const No=[];let Sr=null,Eo=0;const hh=Promise.resolve();let $s=null;function Ll(n){const e=$s||hh;return n?e.then(this?n.bind(this):n):e}function Ym(n){let e=Un+1,t=Xt.length;for(;e<t;){const r=e+t>>>1,o=Xt[r],i=ki(o);i<n||i===n&&o.flags&2?e=r+1:t=r}return e}function kl(n){if(!(n.flags&1)){const e=ki(n),t=Xt[Xt.length-1];!t||!(n.flags&2)&&e>=ki(t)?Xt.push(n):Xt.splice(Ym(e),0,n),n.flags|=1,ph()}}function ph(){$s||($s=hh.then(gh))}function qm(n){Ge(n)?No.push(...n):Sr&&n.id===-1?Sr.splice(Eo+1,0,n):n.flags&1||(No.push(n),n.flags|=1),ph()}function yd(n,e,t=Un+1){for(;t<Xt.length;t++){const r=Xt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Xt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function mh(n){if(No.length){const e=[...new Set(No)].sort((t,r)=>ki(t)-ki(r));if(No.length=0,Sr){Sr.push(...e);return}for(Sr=e,Eo=0;Eo<Sr.length;Eo++){const t=Sr[Eo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Sr=null,Eo=0}}const ki=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gh(n){try{for(Un=0;Un<Xt.length;Un++){const e=Xt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<Xt.length;Un++){const e=Xt[Un];e&&(e.flags&=-2)}Un=-1,Xt.length=0,mh(),$s=null,(Xt.length||No.length)&&gh()}}let Rt=null,bh=null;function Xs(n){const e=Rt;return Rt=n,bh=n&&n.type.__scopeId||null,e}function vh(n,e=Rt,t){if(!e||n._n)return n;const r=(...o)=>{r._d&&Dd(-1);const i=Xs(e);let s;try{s=n(...o)}finally{Xs(i),r._d&&Dd(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Km(n,e){if(Rt===null)return n;const t=ua(Rt),r=n.dirs||(n.dirs=[]);for(let o=0;o<e.length;o++){let[i,s,a,c=ut]=e[o];i&&(Ve(i)&&(i={mounted:i,updated:i}),i.deep&&rr(s),r.push({dir:i,instance:t,value:s,oldValue:void 0,arg:a,modifiers:c}))}return n}function Fr(n,e,t,r){const o=n.dirs,i=e&&e.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let c=a.dir[r];c&&(Ur(),Vn(c,t,8,[n.el,a,n,e]),Or())}}const Zm=Symbol("_vte"),Jm=n=>n.__isTeleport;function Il(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Il(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _h(n,e){return Ve(n)?Ft({name:n.name},e,{setup:n}):n}function xh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function js(n,e,t,r,o=!1){if(Ge(n)){n.forEach((g,v)=>js(g,e&&(Ge(e)?e[v]:e),t,r,o));return}if(Bo(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&js(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ua(r.component):r.el,s=o?null:i,{i:a,r:c}=n,l=e&&e.r,d=a.refs===ut?a.refs={}:a.refs,u=a.setupState,f=ot(u),h=u===ut?()=>!1:g=>it(f,g);if(l!=null&&l!==c&&(Mt(l)?(d[l]=null,h(l)&&(u[l]=null)):Bt(l)&&(l.value=null)),Ve(c))Qi(c,a,12,[s,d]);else{const g=Mt(c),v=Bt(c);if(g||v){const m=()=>{if(n.f){const p=g?h(c)?u[c]:d[c]:c.value;o?Ge(p)&&_l(p,i):Ge(p)?p.includes(i)||p.push(i):g?(d[c]=[i],h(c)&&(u[c]=d[c])):(c.value=[i],n.k&&(d[n.k]=c.value))}else g?(d[c]=s,h(c)&&(u[c]=s)):v&&(c.value=s,n.k&&(d[n.k]=s))};s?(m.id=-1,rn(m,t)):m()}}}sa().requestIdleCallback;sa().cancelIdleCallback;const Bo=n=>!!n.type.__asyncLoader,yh=n=>n.type.__isKeepAlive;function Qm(n,e){Sh(n,"a",e)}function eg(n,e){Sh(n,"da",e)}function Sh(n,e,t=Lt){const r=n.__wdc||(n.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(ca(e,r,t),t){let o=t.parent;for(;o&&o.parent;)yh(o.parent.vnode)&&tg(r,e,t,o),o=o.parent}}function tg(n,e,t,r){const o=ca(e,n,r,!0);Ol(()=>{_l(r[e],o)},t)}function ca(n,e,t=Lt,r=!1){if(t){const o=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...s)=>{Ur();const a=es(t),c=Vn(e,t,n,s);return a(),Or(),c});return r?o.unshift(i):o.push(i),i}}const hr=n=>(e,t=Lt)=>{(!Oi||n==="sp")&&ca(n,(...r)=>e(...r),t)},ng=hr("bm"),Ul=hr("m"),rg=hr("bu"),og=hr("u"),ig=hr("bum"),Ol=hr("um"),sg=hr("sp"),ag=hr("rtg"),cg=hr("rtc");function lg(n,e=Lt){ca("ec",n,e)}const Nl="components",dg="directives";function _c(n,e){return Bl(Nl,n,!0,e)||n}const Mh=Symbol.for("v-ndc");function ug(n){return Mt(n)?Bl(Nl,n,!1)||n:n||Mh}function fg(n){return Bl(dg,n)}function Bl(n,e,t=!0,r=!1){const o=Rt||Lt;if(o){const i=o.type;if(n===Nl){const a=Jg(i,!1);if(a&&(a===e||a===gn(e)||a===ia(gn(e))))return i}const s=Sd(o[n]||i[n],e)||Sd(o.appContext[n],e);return!s&&r?i:s}}function Sd(n,e){return n&&(n[e]||n[gn(e)]||n[ia(gn(e))])}function pi(n,e,t={},r,o){if(Rt.ce||Rt.parent&&Bo(Rt.parent)&&Rt.parent.ce)return e!=="default"&&(t.name=e),Dt(),Rr(an,null,[wt("slot",t,r&&r())],64);let i=n[e];i&&i._c&&(i._d=!1),Dt();const s=i&&Eh(i(t)),a=t.key||s&&s.key,c=Rr(an,{key:(a&&!fr(a)?a:`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&n._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Eh(n){return n.some(e=>Ui(e)?!(e.type===Lr||e.type===an&&!Eh(e.children)):!0)?n:null}const xc=n=>n?Xh(n)?ua(n):xc(n.parent):null,Si=Ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xc(n.parent),$root:n=>xc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Th(n),$forceUpdate:n=>n.f||(n.f=()=>{kl(n.update)}),$nextTick:n=>n.n||(n.n=Ll.bind(n.proxy)),$watch:n=>kg.bind(n)}),Ta=(n,e)=>n!==ut&&!n.__isScriptSetup&&it(n,e),hg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:o,props:i,accessCache:s,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const h=s[e];if(h!==void 0)switch(h){case 1:return r[e];case 2:return o[e];case 4:return t[e];case 3:return i[e]}else{if(Ta(r,e))return s[e]=1,r[e];if(o!==ut&&it(o,e))return s[e]=2,o[e];if((l=n.propsOptions[0])&&it(l,e))return s[e]=3,i[e];if(t!==ut&&it(t,e))return s[e]=4,t[e];yc&&(s[e]=0)}}const d=Si[e];let u,f;if(d)return e==="$attrs"&&Nt(n.attrs,"get",""),d(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ut&&it(t,e))return s[e]=4,t[e];if(f=c.config.globalProperties,it(f,e))return f[e]},set({_:n},e,t){const{data:r,setupState:o,ctx:i}=n;return Ta(o,e)?(o[e]=t,!0):r!==ut&&it(r,e)?(r[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:o,propsOptions:i}},s){let a;return!!t[s]||n!==ut&&it(n,s)||Ta(e,s)||(a=i[0])&&it(a,s)||it(r,s)||it(Si,s)||it(o.config.globalProperties,s)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Md(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let yc=!0;function pg(n){const e=Th(n),t=n.proxy,r=n.ctx;yc=!1,e.beforeCreate&&Ed(e.beforeCreate,n,"bc");const{data:o,computed:i,methods:s,watch:a,provide:c,inject:l,created:d,beforeMount:u,mounted:f,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:S,unmounted:x,render:L,renderTracked:D,renderTriggered:R,errorCaptured:O,serverPrefetch:T,expose:E,inheritAttrs:k,components:te,directives:W,filters:se}=e;if(l&&mg(l,r,null),s)for(const Z in s){const F=s[Z];Ve(F)&&(r[Z]=F.bind(t))}if(o){const Z=o.call(t,t);vt(Z)&&(n.data=Ji(Z))}if(yc=!0,i)for(const Z in i){const F=i[Z],he=Ve(F)?F.bind(t,t):Ve(F.get)?F.get.bind(t,t):zn,ge=!Ve(F)&&Ve(F.set)?F.set.bind(t):zn,_e=Tn({get:he,set:ge});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Te=>_e.value=Te})}if(a)for(const Z in a)wh(a[Z],r,t,Z);if(c){const Z=Ve(c)?c.call(t):c;Reflect.ownKeys(Z).forEach(F=>{Is(F,Z[F])})}d&&Ed(d,n,"c");function Y(Z,F){Ge(F)?F.forEach(he=>Z(he.bind(t))):F&&Z(F.bind(t))}if(Y(ng,u),Y(Ul,f),Y(rg,h),Y(og,g),Y(Qm,v),Y(eg,m),Y(lg,O),Y(cg,D),Y(ag,R),Y(ig,w),Y(Ol,x),Y(sg,T),Ge(E))if(E.length){const Z=n.exposed||(n.exposed={});E.forEach(F=>{Object.defineProperty(Z,F,{get:()=>t[F],set:he=>t[F]=he})})}else n.exposed||(n.exposed={});L&&n.render===zn&&(n.render=L),k!=null&&(n.inheritAttrs=k),te&&(n.components=te),W&&(n.directives=W),T&&xh(n)}function mg(n,e,t=zn){Ge(n)&&(n=Sc(n));for(const r in n){const o=n[r];let i;vt(o)?"default"in o?i=cr(o.from||r,o.default,!0):i=cr(o.from||r):i=cr(o),Bt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[r]=i}}function Ed(n,e,t){Vn(Ge(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function wh(n,e,t,r){let o=r.includes(".")?zh(t,r):()=>t[r];if(Mt(n)){const i=e[n];Ve(i)&&or(o,i)}else if(Ve(n))or(o,n.bind(t));else if(vt(n))if(Ge(n))n.forEach(i=>wh(i,e,t,r));else{const i=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(i)&&or(o,i,n)}}function Th(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=n.appContext,a=i.get(e);let c;return a?c=a:!o.length&&!t&&!r?c=e:(c={},o.length&&o.forEach(l=>Ys(c,l,s,!0)),Ys(c,e,s)),vt(e)&&i.set(e,c),c}function Ys(n,e,t,r=!1){const{mixins:o,extends:i}=e;i&&Ys(n,i,t,!0),o&&o.forEach(s=>Ys(n,s,t,!0));for(const s in e)if(!(r&&s==="expose")){const a=gg[s]||t&&t[s];n[s]=a?a(n[s],e[s]):e[s]}return n}const gg={data:wd,props:Td,emits:Td,methods:mi,computed:mi,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:mi,directives:mi,watch:vg,provide:wd,inject:bg};function wd(n,e){return e?n?function(){return Ft(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function bg(n,e){return mi(Sc(n),Sc(e))}function Sc(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ht(n,e){return n?[...new Set([].concat(n,e))]:e}function mi(n,e){return n?Ft(Object.create(null),n,e):e}function Td(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:Ft(Object.create(null),Md(n),Md(e??{})):e}function vg(n,e){if(!n)return e;if(!e)return n;const t=Ft(Object.create(null),n);for(const r in e)t[r]=Ht(n[r],e[r]);return t}function Ch(){return{app:null,config:{isNativeTag:am,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _g=0;function xg(n,e){return function(r,o=null){Ve(r)||(r=Ft({},r)),o!=null&&!vt(o)&&(o=null);const i=Ch(),s=new WeakSet,a=[];let c=!1;const l=i.app={_uid:_g++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:e0,get config(){return i.config},set config(d){},use(d,...u){return s.has(d)||(d&&Ve(d.install)?(s.add(d),d.install(l,...u)):Ve(d)&&(s.add(d),d(l,...u))),l},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),l},component(d,u){return u?(i.components[d]=u,l):i.components[d]},directive(d,u){return u?(i.directives[d]=u,l):i.directives[d]},mount(d,u,f){if(!c){const h=l._ceVNode||wt(r,o);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),n(h,d,f),c=!0,l._container=d,d.__vue_app__=l,ua(h.component)}},onUnmount(d){a.push(d)},unmount(){c&&(Vn(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(d,u){return i.provides[d]=u,l},runWithContext(d){const u=Fo;Fo=l;try{return d()}finally{Fo=u}}};return l}}let Fo=null;function Is(n,e){if(Lt){let t=Lt.provides;const r=Lt.parent&&Lt.parent.provides;r===t&&(t=Lt.provides=Object.create(r)),t[n]=e}}function cr(n,e,t=!1){const r=Lt||Rt;if(r||Fo){const o=Fo?Fo._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return t&&Ve(e)?e.call(r&&r.proxy):e}}const Ah={},Rh=()=>Object.create(Ah),Ph=n=>Object.getPrototypeOf(n)===Ah;function yg(n,e,t,r=!1){const o={},i=Rh();n.propsDefaults=Object.create(null),Dh(n,e,o,i);for(const s in n.propsOptions[0])s in o||(o[s]=void 0);t?n.props=r?o:dh(o):n.type.props?n.props=o:n.props=i,n.attrs=i}function Sg(n,e,t,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=n,a=ot(o),[c]=n.propsOptions;let l=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(la(n.emitsOptions,f))continue;const h=e[f];if(c)if(it(i,f))h!==i[f]&&(i[f]=h,l=!0);else{const g=gn(f);o[g]=Mc(c,a,g,h,n,!1)}else h!==i[f]&&(i[f]=h,l=!0)}}}else{Dh(n,e,o,i)&&(l=!0);let d;for(const u in a)(!e||!it(e,u)&&((d=oo(u))===u||!it(e,d)))&&(c?t&&(t[u]!==void 0||t[d]!==void 0)&&(o[u]=Mc(c,a,u,void 0,n,!0)):delete o[u]);if(i!==a)for(const u in i)(!e||!it(e,u))&&(delete i[u],l=!0)}l&&nr(n.attrs,"set","")}function Dh(n,e,t,r){const[o,i]=n.propsOptions;let s=!1,a;if(e)for(let c in e){if(vi(c))continue;const l=e[c];let d;o&&it(o,d=gn(c))?!i||!i.includes(d)?t[d]=l:(a||(a={}))[d]=l:la(n.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,s=!0)}if(i){const c=ot(t),l=a||ut;for(let d=0;d<i.length;d++){const u=i[d];t[u]=Mc(o,c,u,l[u],n,!it(l,u))}}return s}function Mc(n,e,t,r,o,i){const s=n[t];if(s!=null){const a=it(s,"default");if(a&&r===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Ve(c)){const{propsDefaults:l}=o;if(t in l)r=l[t];else{const d=es(o);r=l[t]=c.call(null,e),d()}}else r=c;o.ce&&o.ce._setProp(t,r)}s[0]&&(i&&!a?r=!1:s[1]&&(r===""||r===oo(t))&&(r=!0))}return r}const Mg=new WeakMap;function Lh(n,e,t=!1){const r=t?Mg:e.propsCache,o=r.get(n);if(o)return o;const i=n.props,s={},a=[];let c=!1;if(!Ve(n)){const d=u=>{c=!0;const[f,h]=Lh(u,e,!0);Ft(s,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return vt(n)&&r.set(n,Io),Io;if(Ge(i))for(let d=0;d<i.length;d++){const u=gn(i[d]);Cd(u)&&(s[u]=ut)}else if(i)for(const d in i){const u=gn(d);if(Cd(u)){const f=i[d],h=s[u]=Ge(f)||Ve(f)?{type:f}:Ft({},f),g=h.type;let v=!1,m=!0;if(Ge(g))for(let p=0;p<g.length;++p){const w=g[p],S=Ve(w)&&w.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(m=!1)}else v=Ve(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||it(h,"default"))&&a.push(u)}}const l=[s,a];return vt(n)&&r.set(n,l),l}function Cd(n){return n[0]!=="$"&&!vi(n)}const kh=n=>n[0]==="_"||n==="$stable",Fl=n=>Ge(n)?n.map(On):[On(n)],Eg=(n,e,t)=>{if(e._n)return e;const r=vh((...o)=>Fl(e(...o)),t);return r._c=!1,r},Ih=(n,e,t)=>{const r=n._ctx;for(const o in n){if(kh(o))continue;const i=n[o];if(Ve(i))e[o]=Eg(o,i,r);else if(i!=null){const s=Fl(i);e[o]=()=>s}}},Uh=(n,e)=>{const t=Fl(e);n.slots.default=()=>t},Oh=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},wg=(n,e,t)=>{const r=n.slots=Rh();if(n.vnode.shapeFlag&32){const o=e._;o?(Oh(r,e,t),t&&Xf(r,"_",o,!0)):Ih(e,r)}else e&&Uh(n,e)},Tg=(n,e,t)=>{const{vnode:r,slots:o}=n;let i=!0,s=ut;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:Oh(o,e,t):(i=!e.$stable,Ih(e,o)),s=e}else e&&(Uh(n,e),s={default:1});if(i)for(const a in o)!kh(a)&&s[a]==null&&delete o[a]},rn=zg;function Cg(n){return Ag(n)}function Ag(n,e){const t=sa();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:a,createComment:c,setText:l,setElementText:d,parentNode:u,nextSibling:f,setScopeId:h=zn,insertStaticContent:g}=n,v=(C,A,_,ee=null,X=null,$=null,J=void 0,ae=null,K=!!A.dynamicChildren)=>{if(C===A)return;C&&!si(C,A)&&(ee=I(C),Te(C,X,$,!0),C=null),A.patchFlag===-2&&(K=!1,A.dynamicChildren=null);const{type:y,ref:b,shapeFlag:P}=A;switch(y){case da:m(C,A,_,ee);break;case Lr:p(C,A,_,ee);break;case Aa:C==null&&w(A,_,ee,J);break;case an:te(C,A,_,ee,X,$,J,ae,K);break;default:P&1?L(C,A,_,ee,X,$,J,ae,K):P&6?W(C,A,_,ee,X,$,J,ae,K):(P&64||P&128)&&y.process(C,A,_,ee,X,$,J,ae,K,ue)}b!=null&&X&&js(b,C&&C.ref,$,A||C,!A)},m=(C,A,_,ee)=>{if(C==null)r(A.el=a(A.children),_,ee);else{const X=A.el=C.el;A.children!==C.children&&l(X,A.children)}},p=(C,A,_,ee)=>{C==null?r(A.el=c(A.children||""),_,ee):A.el=C.el},w=(C,A,_,ee)=>{[C.el,C.anchor]=g(C.children,A,_,ee,C.el,C.anchor)},S=({el:C,anchor:A},_,ee)=>{let X;for(;C&&C!==A;)X=f(C),r(C,_,ee),C=X;r(A,_,ee)},x=({el:C,anchor:A})=>{let _;for(;C&&C!==A;)_=f(C),o(C),C=_;o(A)},L=(C,A,_,ee,X,$,J,ae,K)=>{A.type==="svg"?J="svg":A.type==="math"&&(J="mathml"),C==null?D(A,_,ee,X,$,J,ae,K):T(C,A,X,$,J,ae,K)},D=(C,A,_,ee,X,$,J,ae)=>{let K,y;const{props:b,shapeFlag:P,transition:G,dirs:B}=C;if(K=C.el=s(C.type,$,b&&b.is,b),P&8?d(K,C.children):P&16&&O(C.children,K,null,ee,X,Ca(C,$),J,ae),B&&Fr(C,null,ee,"created"),R(K,C,C.scopeId,J,ee),b){for(const ce in b)ce!=="value"&&!vi(ce)&&i(K,ce,null,b[ce],$,ee);"value"in b&&i(K,"value",null,b.value,$),(y=b.onVnodeBeforeMount)&&kn(y,ee,C)}B&&Fr(C,null,ee,"beforeMount");const z=Rg(X,G);z&&G.beforeEnter(K),r(K,A,_),((y=b&&b.onVnodeMounted)||z||B)&&rn(()=>{y&&kn(y,ee,C),z&&G.enter(K),B&&Fr(C,null,ee,"mounted")},X)},R=(C,A,_,ee,X)=>{if(_&&h(C,_),ee)for(let $=0;$<ee.length;$++)h(C,ee[$]);if(X){let $=X.subTree;if(A===$||Vh($.type)&&($.ssContent===A||$.ssFallback===A)){const J=X.vnode;R(C,J,J.scopeId,J.slotScopeIds,X.parent)}}},O=(C,A,_,ee,X,$,J,ae,K=0)=>{for(let y=K;y<C.length;y++){const b=C[y]=ae?Mr(C[y]):On(C[y]);v(null,b,A,_,ee,X,$,J,ae)}},T=(C,A,_,ee,X,$,J)=>{const ae=A.el=C.el;let{patchFlag:K,dynamicChildren:y,dirs:b}=A;K|=C.patchFlag&16;const P=C.props||ut,G=A.props||ut;let B;if(_&&zr(_,!1),(B=G.onVnodeBeforeUpdate)&&kn(B,_,A,C),b&&Fr(A,C,_,"beforeUpdate"),_&&zr(_,!0),(P.innerHTML&&G.innerHTML==null||P.textContent&&G.textContent==null)&&d(ae,""),y?E(C.dynamicChildren,y,ae,_,ee,Ca(A,X),$):J||F(C,A,ae,null,_,ee,Ca(A,X),$,!1),K>0){if(K&16)k(ae,P,G,_,X);else if(K&2&&P.class!==G.class&&i(ae,"class",null,G.class,X),K&4&&i(ae,"style",P.style,G.style,X),K&8){const z=A.dynamicProps;for(let ce=0;ce<z.length;ce++){const le=z[ce],ve=P[le],ke=G[le];(ke!==ve||le==="value")&&i(ae,le,ve,ke,X,_)}}K&1&&C.children!==A.children&&d(ae,A.children)}else!J&&y==null&&k(ae,P,G,_,X);((B=G.onVnodeUpdated)||b)&&rn(()=>{B&&kn(B,_,A,C),b&&Fr(A,C,_,"updated")},ee)},E=(C,A,_,ee,X,$,J)=>{for(let ae=0;ae<A.length;ae++){const K=C[ae],y=A[ae],b=K.el&&(K.type===an||!si(K,y)||K.shapeFlag&70)?u(K.el):_;v(K,y,b,null,ee,X,$,J,!0)}},k=(C,A,_,ee,X)=>{if(A!==_){if(A!==ut)for(const $ in A)!vi($)&&!($ in _)&&i(C,$,A[$],null,X,ee);for(const $ in _){if(vi($))continue;const J=_[$],ae=A[$];J!==ae&&$!=="value"&&i(C,$,ae,J,X,ee)}"value"in _&&i(C,"value",A.value,_.value,X)}},te=(C,A,_,ee,X,$,J,ae,K)=>{const y=A.el=C?C.el:a(""),b=A.anchor=C?C.anchor:a("");let{patchFlag:P,dynamicChildren:G,slotScopeIds:B}=A;B&&(ae=ae?ae.concat(B):B),C==null?(r(y,_,ee),r(b,_,ee),O(A.children||[],_,b,X,$,J,ae,K)):P>0&&P&64&&G&&C.dynamicChildren?(E(C.dynamicChildren,G,_,X,$,J,ae),(A.key!=null||X&&A===X.subTree)&&Nh(C,A,!0)):F(C,A,_,b,X,$,J,ae,K)},W=(C,A,_,ee,X,$,J,ae,K)=>{A.slotScopeIds=ae,C==null?A.shapeFlag&512?X.ctx.activate(A,_,ee,J,K):se(A,_,ee,X,$,J,K):re(C,A,K)},se=(C,A,_,ee,X,$,J)=>{const ae=C.component=Xg(C,ee,X);if(yh(C)&&(ae.ctx.renderer=ue),Yg(ae,!1,J),ae.asyncDep){if(X&&X.registerDep(ae,Y,J),!C.el){const K=ae.subTree=wt(Lr);p(null,K,A,_)}}else Y(ae,C,A,_,X,$,J)},re=(C,A,_)=>{const ee=A.component=C.component;if(Bg(C,A,_))if(ee.asyncDep&&!ee.asyncResolved){Z(ee,A,_);return}else ee.next=A,ee.update();else A.el=C.el,ee.vnode=A},Y=(C,A,_,ee,X,$,J)=>{const ae=()=>{if(C.isMounted){let{next:P,bu:G,u:B,parent:z,vnode:ce}=C;{const Se=Bh(C);if(Se){P&&(P.el=ce.el,Z(C,P,J)),Se.asyncDep.then(()=>{C.isUnmounted||ae()});return}}let le=P,ve;zr(C,!1),P?(P.el=ce.el,Z(C,P,J)):P=ce,G&&ya(G),(ve=P.props&&P.props.onVnodeBeforeUpdate)&&kn(ve,z,P,ce),zr(C,!0);const ke=Rd(C),fe=C.subTree;C.subTree=ke,v(fe,ke,u(fe.el),I(fe),C,X,$),P.el=ke.el,le===null&&Fg(C,ke.el),B&&rn(B,X),(ve=P.props&&P.props.onVnodeUpdated)&&rn(()=>kn(ve,z,P,ce),X)}else{let P;const{el:G,props:B}=A,{bm:z,m:ce,parent:le,root:ve,type:ke}=C,fe=Bo(A);zr(C,!1),z&&ya(z),!fe&&(P=B&&B.onVnodeBeforeMount)&&kn(P,le,A),zr(C,!0);{ve.ce&&ve.ce._injectChildStyle(ke);const Se=C.subTree=Rd(C);v(null,Se,_,ee,C,X,$),A.el=Se.el}if(ce&&rn(ce,X),!fe&&(P=B&&B.onVnodeMounted)){const Se=A;rn(()=>kn(P,le,Se),X)}(A.shapeFlag&256||le&&Bo(le.vnode)&&le.vnode.shapeFlag&256)&&C.a&&rn(C.a,X),C.isMounted=!0,A=_=ee=null}};C.scope.on();const K=C.effect=new Kf(ae);C.scope.off();const y=C.update=K.run.bind(K),b=C.job=K.runIfDirty.bind(K);b.i=C,b.id=C.uid,K.scheduler=()=>kl(b),zr(C,!0),y()},Z=(C,A,_)=>{A.component=C;const ee=C.vnode.props;C.vnode=A,C.next=null,Sg(C,A.props,ee,_),Tg(C,A.children,_),Ur(),yd(C),Or()},F=(C,A,_,ee,X,$,J,ae,K=!1)=>{const y=C&&C.children,b=C?C.shapeFlag:0,P=A.children,{patchFlag:G,shapeFlag:B}=A;if(G>0){if(G&128){ge(y,P,_,ee,X,$,J,ae,K);return}else if(G&256){he(y,P,_,ee,X,$,J,ae,K);return}}B&8?(b&16&&be(y,X,$),P!==y&&d(_,P)):b&16?B&16?ge(y,P,_,ee,X,$,J,ae,K):be(y,X,$,!0):(b&8&&d(_,""),B&16&&O(P,_,ee,X,$,J,ae,K))},he=(C,A,_,ee,X,$,J,ae,K)=>{C=C||Io,A=A||Io;const y=C.length,b=A.length,P=Math.min(y,b);let G;for(G=0;G<P;G++){const B=A[G]=K?Mr(A[G]):On(A[G]);v(C[G],B,_,null,X,$,J,ae,K)}y>b?be(C,X,$,!0,!1,P):O(A,_,ee,X,$,J,ae,K,P)},ge=(C,A,_,ee,X,$,J,ae,K)=>{let y=0;const b=A.length;let P=C.length-1,G=b-1;for(;y<=P&&y<=G;){const B=C[y],z=A[y]=K?Mr(A[y]):On(A[y]);if(si(B,z))v(B,z,_,null,X,$,J,ae,K);else break;y++}for(;y<=P&&y<=G;){const B=C[P],z=A[G]=K?Mr(A[G]):On(A[G]);if(si(B,z))v(B,z,_,null,X,$,J,ae,K);else break;P--,G--}if(y>P){if(y<=G){const B=G+1,z=B<b?A[B].el:ee;for(;y<=G;)v(null,A[y]=K?Mr(A[y]):On(A[y]),_,z,X,$,J,ae,K),y++}}else if(y>G)for(;y<=P;)Te(C[y],X,$,!0),y++;else{const B=y,z=y,ce=new Map;for(y=z;y<=G;y++){const xe=A[y]=K?Mr(A[y]):On(A[y]);xe.key!=null&&ce.set(xe.key,y)}let le,ve=0;const ke=G-z+1;let fe=!1,Se=0;const De=new Array(ke);for(y=0;y<ke;y++)De[y]=0;for(y=B;y<=P;y++){const xe=C[y];if(ve>=ke){Te(xe,X,$,!0);continue}let Ne;if(xe.key!=null)Ne=ce.get(xe.key);else for(le=z;le<=G;le++)if(De[le-z]===0&&si(xe,A[le])){Ne=le;break}Ne===void 0?Te(xe,X,$,!0):(De[Ne-z]=y+1,Ne>=Se?Se=Ne:fe=!0,v(xe,A[Ne],_,null,X,$,J,ae,K),ve++)}const Ue=fe?Pg(De):Io;for(le=Ue.length-1,y=ke-1;y>=0;y--){const xe=z+y,Ne=A[xe],He=xe+1<b?A[xe+1].el:ee;De[y]===0?v(null,Ne,_,He,X,$,J,ae,K):fe&&(le<0||y!==Ue[le]?_e(Ne,_,He,2):le--)}}},_e=(C,A,_,ee,X=null)=>{const{el:$,type:J,transition:ae,children:K,shapeFlag:y}=C;if(y&6){_e(C.component.subTree,A,_,ee);return}if(y&128){C.suspense.move(A,_,ee);return}if(y&64){J.move(C,A,_,ue);return}if(J===an){r($,A,_);for(let P=0;P<K.length;P++)_e(K[P],A,_,ee);r(C.anchor,A,_);return}if(J===Aa){S(C,A,_);return}if(ee!==2&&y&1&&ae)if(ee===0)ae.beforeEnter($),r($,A,_),rn(()=>ae.enter($),X);else{const{leave:P,delayLeave:G,afterLeave:B}=ae,z=()=>r($,A,_),ce=()=>{P($,()=>{z(),B&&B()})};G?G($,z,ce):ce()}else r($,A,_)},Te=(C,A,_,ee=!1,X=!1)=>{const{type:$,props:J,ref:ae,children:K,dynamicChildren:y,shapeFlag:b,patchFlag:P,dirs:G,cacheIndex:B}=C;if(P===-2&&(X=!1),ae!=null&&js(ae,null,_,C,!0),B!=null&&(A.renderCache[B]=void 0),b&256){A.ctx.deactivate(C);return}const z=b&1&&G,ce=!Bo(C);let le;if(ce&&(le=J&&J.onVnodeBeforeUnmount)&&kn(le,A,C),b&6)pe(C.component,_,ee);else{if(b&128){C.suspense.unmount(_,ee);return}z&&Fr(C,null,A,"beforeUnmount"),b&64?C.type.remove(C,A,_,ue,ee):y&&!y.hasOnce&&($!==an||P>0&&P&64)?be(y,A,_,!1,!0):($===an&&P&384||!X&&b&16)&&be(K,A,_),ee&&Oe(C)}(ce&&(le=J&&J.onVnodeUnmounted)||z)&&rn(()=>{le&&kn(le,A,C),z&&Fr(C,null,A,"unmounted")},_)},Oe=C=>{const{type:A,el:_,anchor:ee,transition:X}=C;if(A===an){Q(_,ee);return}if(A===Aa){x(C);return}const $=()=>{o(_),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(C.shapeFlag&1&&X&&!X.persisted){const{leave:J,delayLeave:ae}=X,K=()=>J(_,$);ae?ae(C.el,$,K):K()}else $()},Q=(C,A)=>{let _;for(;C!==A;)_=f(C),o(C),C=_;o(A)},pe=(C,A,_)=>{const{bum:ee,scope:X,job:$,subTree:J,um:ae,m:K,a:y}=C;Ad(K),Ad(y),ee&&ya(ee),X.stop(),$&&($.flags|=8,Te(J,C,A,_)),ae&&rn(ae,A),rn(()=>{C.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},be=(C,A,_,ee=!1,X=!1,$=0)=>{for(let J=$;J<C.length;J++)Te(C[J],A,_,ee,X)},I=C=>{if(C.shapeFlag&6)return I(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const A=f(C.anchor||C.el),_=A&&A[Zm];return _?f(_):A};let oe=!1;const ie=(C,A,_)=>{C==null?A._vnode&&Te(A._vnode,null,null,!0):v(A._vnode||null,C,A,null,null,null,_),A._vnode=C,oe||(oe=!0,yd(),mh(),oe=!1)},ue={p:v,um:Te,m:_e,r:Oe,mt:se,mc:O,pc:F,pbc:E,n:I,o:n};return{render:ie,hydrate:void 0,createApp:xg(ie)}}function Ca({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function zr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Rg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Nh(n,e,t=!1){const r=n.children,o=e.children;if(Ge(r)&&Ge(o))for(let i=0;i<r.length;i++){const s=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=Mr(o[i]),a.el=s.el),!t&&a.patchFlag!==-2&&Nh(s,a)),a.type===da&&(a.el=s.el)}}function Pg(n){const e=n.slice(),t=[0];let r,o,i,s,a;const c=n.length;for(r=0;r<c;r++){const l=n[r];if(l!==0){if(o=t[t.length-1],n[o]<l){e[r]=o,t.push(r);continue}for(i=0,s=t.length-1;i<s;)a=i+s>>1,n[t[a]]<l?i=a+1:s=a;l<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,s=t[i-1];i-- >0;)t[i]=s,s=e[s];return t}function Bh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bh(e)}function Ad(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Dg=Symbol.for("v-scx"),Lg=()=>cr(Dg);function or(n,e,t){return Fh(n,e,t)}function Fh(n,e,t=ut){const{immediate:r,deep:o,flush:i,once:s}=t,a=Ft({},t),c=e&&r||!e&&i!=="post";let l;if(Oi){if(i==="sync"){const h=Lg();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=zn,h.resume=zn,h.pause=zn,h}}const d=Lt;a.call=(h,g,v)=>Vn(h,d,g,v);let u=!1;i==="post"?a.scheduler=h=>{rn(h,d&&d.suspense)}:i!=="sync"&&(u=!0,a.scheduler=(h,g)=>{g?h():kl(h)}),a.augmentJob=h=>{e&&(h.flags|=4),u&&(h.flags|=2,d&&(h.id=d.uid,h.i=d))};const f=Xm(n,e,a);return Oi&&(l?l.push(f):c&&f()),f}function kg(n,e,t){const r=this.proxy,o=Mt(n)?n.includes(".")?zh(r,n):()=>r[n]:n.bind(r,r);let i;Ve(e)?i=e:(i=e.handler,t=e);const s=es(this),a=Fh(o,i.bind(r),t);return s(),a}function zh(n,e){const t=e.split(".");return()=>{let r=n;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}const Ig=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${gn(e)}Modifiers`]||n[`${oo(e)}Modifiers`];function Ug(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||ut;let o=t;const i=e.startsWith("update:"),s=i&&Ig(r,e.slice(7));s&&(s.trim&&(o=t.map(d=>Mt(d)?d.trim():d)),s.number&&(o=t.map(fm)));let a,c=r[a=xa(e)]||r[a=xa(gn(e))];!c&&i&&(c=r[a=xa(oo(e))]),c&&Vn(c,n,6,o);const l=r[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Vn(l,n,6,o)}}function Hh(n,e,t=!1){const r=e.emitsCache,o=r.get(n);if(o!==void 0)return o;const i=n.emits;let s={},a=!1;if(!Ve(n)){const c=l=>{const d=Hh(l,e,!0);d&&(a=!0,Ft(s,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(vt(n)&&r.set(n,null),null):(Ge(i)?i.forEach(c=>s[c]=null):Ft(s,i),vt(n)&&r.set(n,s),s)}function la(n,e){return!n||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,oo(e))||it(n,e))}function Rd(n){const{type:e,vnode:t,proxy:r,withProxy:o,propsOptions:[i],slots:s,attrs:a,emit:c,render:l,renderCache:d,props:u,data:f,setupState:h,ctx:g,inheritAttrs:v}=n,m=Xs(n);let p,w;try{if(t.shapeFlag&4){const x=o||r,L=x;p=On(l.call(L,x,d,u,h,f,g)),w=a}else{const x=e;p=On(x.length>1?x(u,{attrs:a,slots:s,emit:c}):x(u,null)),w=e.props?a:Og(a)}}catch(x){Mi.length=0,aa(x,n,1),p=wt(Lr)}let S=p;if(w&&v!==!1){const x=Object.keys(w),{shapeFlag:L}=S;x.length&&L&7&&(i&&x.some(vl)&&(w=Ng(w,i)),S=Wo(S,w,!1,!0))}return t.dirs&&(S=Wo(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Il(S,t.transition),p=S,Xs(m),p}const Og=n=>{let e;for(const t in n)(t==="class"||t==="style"||na(t))&&((e||(e={}))[t]=n[t]);return e},Ng=(n,e)=>{const t={};for(const r in n)(!vl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Bg(n,e,t){const{props:r,children:o,component:i}=n,{props:s,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Pd(r,s,l):!!s;if(c&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(s[f]!==r[f]&&!la(l,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?Pd(r,s,l):!0:!!s;return!1}function Pd(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(e[i]!==n[i]&&!la(t,i))return!0}return!1}function Fg({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Vh=n=>n.__isSuspense;function zg(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):qm(n)}const an=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),Lr=Symbol.for("v-cmt"),Aa=Symbol.for("v-stc"),Mi=[];let ln=null;function Dt(n=!1){Mi.push(ln=n?null:[])}function Hg(){Mi.pop(),ln=Mi[Mi.length-1]||null}let Ii=1;function Dd(n,e=!1){Ii+=n,n<0&&ln&&e&&(ln.hasOnce=!0)}function Gh(n){return n.dynamicChildren=Ii>0?ln||Io:null,Hg(),Ii>0&&ln&&ln.push(n),n}function dr(n,e,t,r,o,i){return Gh(ei(n,e,t,r,o,i,!0))}function Rr(n,e,t,r,o){return Gh(wt(n,e,t,r,o,!0))}function Ui(n){return n?n.__v_isVNode===!0:!1}function si(n,e){return n.type===e.type&&n.key===e.key}const Wh=({key:n})=>n??null,Us=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mt(n)||Bt(n)||Ve(n)?{i:Rt,r:n,k:e,f:!!t}:n:null);function ei(n,e=null,t=null,r=0,o=null,i=n===an?0:1,s=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wh(e),ref:e&&Us(e),scopeId:bh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Rt};return a?(zl(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Mt(t)?8:16),Ii>0&&!s&&ln&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ln.push(c),c}const wt=Vg;function Vg(n,e=null,t=null,r=0,o=null,i=!1){if((!n||n===Mh)&&(n=Lr),Ui(n)){const a=Wo(n,e,!0);return t&&zl(a,t),Ii>0&&!i&&ln&&(a.shapeFlag&6?ln[ln.indexOf(n)]=a:ln.push(a)),a.patchFlag=-2,a}if(Qg(n)&&(n=n.__vccOpts),e){e=Gg(e);let{class:a,style:c}=e;a&&!Mt(a)&&(e.class=Pi(a)),vt(c)&&(Dl(c)&&!Ge(c)&&(c=Ft({},c)),e.style=yl(c))}const s=Mt(n)?1:Vh(n)?128:Jm(n)?64:vt(n)?4:Ve(n)?2:0;return ei(n,e,t,r,o,s,i,!0)}function Gg(n){return n?Dl(n)||Ph(n)?Ft({},n):n:null}function Wo(n,e,t=!1,r=!1){const{props:o,ref:i,patchFlag:s,children:a,transition:c}=n,l=e?Wt(o||{},e):o,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Wh(l),ref:e&&e.ref?t&&i?Ge(i)?i.concat(Us(e)):[i,Us(e)]:Us(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==an?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Wo(n.ssContent),ssFallback:n.ssFallback&&Wo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Il(d,c.clone(d)),d}function $h(n=" ",e=0){return wt(da,null,n,e)}function Ld(n="",e=!1){return e?(Dt(),Rr(Lr,null,n)):wt(Lr,null,n)}function On(n){return n==null||typeof n=="boolean"?wt(Lr):Ge(n)?wt(an,null,n.slice()):Ui(n)?Mr(n):wt(da,null,String(n))}function Mr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Wo(n)}function zl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(r&65){const o=e.default;o&&(o._c&&(o._d=!1),zl(n,o()),o._c&&(o._d=!0));return}else{t=32;const o=e._;!o&&!Ph(e)?e._ctx=Rt:o===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Rt},t=32):(e=String(e),r&64?(t=16,e=[$h(e)]):t=8);n.children=e,n.shapeFlag|=t}function Wt(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const o in r)if(o==="class")e.class!==r.class&&(e.class=Pi([e.class,r.class]));else if(o==="style")e.style=yl([e.style,r.style]);else if(na(o)){const i=e[o],s=r[o];s&&i!==s&&!(Ge(i)&&i.includes(s))&&(e[o]=i?[].concat(i,s):s)}else o!==""&&(e[o]=r[o])}return e}function kn(n,e,t,r=null){Vn(n,e,7,[t,r])}const Wg=Ch();let $g=0;function Xg(n,e,t){const r=n.type,o=(e?e.appContext:n.appContext)||Wg,i={uid:$g++,vnode:n,type:r,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _m(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lh(r,o),emitsOptions:Hh(r,o),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:r.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ug.bind(null,i),n.ce&&n.ce(i),i}let Lt=null;const jg=()=>Lt||Rt;let qs,Ec;{const n=sa(),e=(t,r)=>{let o;return(o=n[t])||(o=n[t]=[]),o.push(r),i=>{o.length>1?o.forEach(s=>s(i)):o[0](i)}};qs=e("__VUE_INSTANCE_SETTERS__",t=>Lt=t),Ec=e("__VUE_SSR_SETTERS__",t=>Oi=t)}const es=n=>{const e=Lt;return qs(n),n.scope.on(),()=>{n.scope.off(),qs(e)}},kd=()=>{Lt&&Lt.scope.off(),qs(null)};function Xh(n){return n.vnode.shapeFlag&4}let Oi=!1;function Yg(n,e=!1,t=!1){e&&Ec(e);const{props:r,children:o}=n.vnode,i=Xh(n);yg(n,r,i,e),wg(n,o,t);const s=i?qg(n,e):void 0;return e&&Ec(!1),s}function qg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,hg);const{setup:r}=t;if(r){Ur();const o=n.setupContext=r.length>1?Zg(n):null,i=es(n),s=Qi(r,n,0,[n.props,o]),a=Gf(s);if(Or(),i(),(a||n.sp)&&!Bo(n)&&xh(n),a){if(s.then(kd,kd),e)return s.then(c=>{Id(n,c)}).catch(c=>{aa(c,n,0)});n.asyncDep=s}else Id(n,s)}else jh(n)}function Id(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=fh(e)),jh(n)}function jh(n,e,t){const r=n.type;n.render||(n.render=r.render||zn);{const o=es(n);Ur();try{pg(n)}finally{Or(),o()}}}const Kg={get(n,e){return Nt(n,"get",""),n[e]}};function Zg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Kg),slots:n.slots,emit:n.emit,expose:e}}function ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(fh(Fm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Si)return Si[t](n)},has(e,t){return t in e||t in Si}})):n.proxy}function Jg(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function Qg(n){return Ve(n)&&"__vccOpts"in n}const Tn=(n,e)=>Wm(n,e,Oi);function Yh(n,e,t){const r=arguments.length;return r===2?vt(e)&&!Ge(e)?Ui(e)?wt(n,null,[e]):wt(n,e):wt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Ui(t)&&(t=[t]),wt(n,e,t))}const e0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wc;const Ud=typeof window<"u"&&window.trustedTypes;if(Ud)try{wc=Ud.createPolicy("vue",{createHTML:n=>n})}catch{}const qh=wc?n=>wc.createHTML(n):n=>n,t0="http://www.w3.org/2000/svg",n0="http://www.w3.org/1998/Math/MathML",tr=typeof document<"u"?document:null,Od=tr&&tr.createElement("template"),r0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const o=e==="svg"?tr.createElementNS(t0,n):e==="mathml"?tr.createElementNS(n0,n):t?tr.createElement(n,{is:t}):tr.createElement(n);return n==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:n=>tr.createTextNode(n),createComment:n=>tr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>tr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,o,i){const s=t?t.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{Od.innerHTML=qh(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=Od.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},o0=Symbol("_vtc");function i0(n,e,t){const r=n[o0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Nd=Symbol("_vod"),s0=Symbol("_vsh"),a0=Symbol(""),c0=/(^|;)\s*display\s*:/;function l0(n,e,t){const r=n.style,o=Mt(t);let i=!1;if(t&&!o){if(e)if(Mt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();t[a]==null&&Os(r,a,"")}else for(const s in e)t[s]==null&&Os(r,s,"");for(const s in t)s==="display"&&(i=!0),Os(r,s,t[s])}else if(o){if(e!==t){const s=r[a0];s&&(t+=";"+s),r.cssText=t,i=c0.test(t)}}else e&&n.removeAttribute("style");Nd in n&&(n[Nd]=i?r.display:"",n[s0]&&(r.display="none"))}const Bd=/\s*!important$/;function Os(n,e,t){if(Ge(t))t.forEach(r=>Os(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=d0(n,e);Bd.test(t)?n.setProperty(oo(r),t.replace(Bd,""),"important"):n[r]=t}}const Fd=["Webkit","Moz","ms"],Ra={};function d0(n,e){const t=Ra[e];if(t)return t;let r=gn(e);if(r!=="filter"&&r in n)return Ra[e]=r;r=ia(r);for(let o=0;o<Fd.length;o++){const i=Fd[o]+r;if(i in n)return Ra[e]=i}return e}const zd="http://www.w3.org/1999/xlink";function Hd(n,e,t,r,o,i=vm(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(zd,e.slice(6,e.length)):n.setAttributeNS(zd,e,t):t==null||i&&!jf(t)?n.removeAttribute(e):n.setAttribute(e,i?"":fr(t)?String(t):t)}function Vd(n,e,t,r,o){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?qh(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=jf(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(o||e)}function u0(n,e,t,r){n.addEventListener(e,t,r)}function f0(n,e,t,r){n.removeEventListener(e,t,r)}const Gd=Symbol("_vei");function h0(n,e,t,r,o=null){const i=n[Gd]||(n[Gd]={}),s=i[e];if(r&&s)s.value=r;else{const[a,c]=p0(e);if(r){const l=i[e]=b0(r,o);u0(n,a,l,c)}else s&&(f0(n,a,s,c),i[e]=void 0)}}const Wd=/(?:Once|Passive|Capture)$/;function p0(n){let e;if(Wd.test(n)){e={};let r;for(;r=n.match(Wd);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):oo(n.slice(2)),e]}let Pa=0;const m0=Promise.resolve(),g0=()=>Pa||(m0.then(()=>Pa=0),Pa=Date.now());function b0(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Vn(v0(r,t.value),e,5,[r])};return t.value=n,t.attached=g0(),t}function v0(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>o=>!o._stopped&&r&&r(o))}else return e}const $d=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_0=(n,e,t,r,o,i)=>{const s=o==="svg";e==="class"?i0(n,r,s):e==="style"?l0(n,t,r):na(e)?vl(e)||h0(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):x0(n,e,r,s))?(Vd(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hd(n,e,r,s,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Mt(r))?Vd(n,gn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Hd(n,e,r,s))};function x0(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&$d(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return $d(e)&&Mt(t)?!1:e in n}const y0=Ft({patchProp:_0},r0);let Xd;function S0(){return Xd||(Xd=Cg(y0))}const M0=(...n)=>{const e=S0().createApp(...n),{mount:t}=e;return e.mount=r=>{const o=w0(r);if(!o)return;const i=e._component;!Ve(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const s=t(o,!1,E0(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function E0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function w0(n){return Mt(n)?document.querySelector(n):n}const ti=(n,e)=>{const t=n.__vccOpts||n;for(const[r,o]of e)t[r]=o;return t},T0={};function C0(n,e){const t=_c("routerView");return Dt(),Rr(t)}const A0=ti(T0,[["render",C0]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const wo=typeof document<"u";function Kh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function R0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Kh(n.default)}const rt=Object.assign;function Da(n,e){const t={};for(const r in e){const o=e[r];t[r]=Ln(o)?o.map(n):n(o)}return t}const Ei=()=>{},Ln=Array.isArray,Zh=/#/g,P0=/&/g,D0=/\//g,L0=/=/g,k0=/\?/g,Jh=/\+/g,I0=/%5B/g,U0=/%5D/g,Qh=/%5E/g,O0=/%60/g,ep=/%7B/g,N0=/%7C/g,tp=/%7D/g,B0=/%20/g;function Hl(n){return encodeURI(""+n).replace(N0,"|").replace(I0,"[").replace(U0,"]")}function F0(n){return Hl(n).replace(ep,"{").replace(tp,"}").replace(Qh,"^")}function Tc(n){return Hl(n).replace(Jh,"%2B").replace(B0,"+").replace(Zh,"%23").replace(P0,"%26").replace(O0,"`").replace(ep,"{").replace(tp,"}").replace(Qh,"^")}function z0(n){return Tc(n).replace(L0,"%3D")}function H0(n){return Hl(n).replace(Zh,"%23").replace(k0,"%3F")}function V0(n){return n==null?"":H0(n).replace(D0,"%2F")}function Ni(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const G0=/\/$/,W0=n=>n.replace(G0,"");function La(n,e,t="/"){let r,o={},i="",s="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),o=n(i)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=Y0(r??e,t),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:Ni(s)}}function $0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function jd(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function X0(n,e,t){const r=e.matched.length-1,o=t.matched.length-1;return r>-1&&r===o&&$o(e.matched[r],t.matched[o])&&np(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function $o(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function np(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!j0(n[t],e[t]))return!1;return!0}function j0(n,e){return Ln(n)?Yd(n,e):Ln(e)?Yd(e,n):n===e}function Yd(n,e){return Ln(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function Y0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=t.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(s).join("/")}const mr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bi;(function(n){n.pop="pop",n.push="push"})(Bi||(Bi={}));var wi;(function(n){n.back="back",n.forward="forward",n.unknown=""})(wi||(wi={}));function q0(n){if(!n)if(wo){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),W0(n)}const K0=/^[^#]+#/;function Z0(n,e){return n.replace(K0,"#")+e}function J0(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const fa=()=>({left:window.scrollX,top:window.scrollY});function Q0(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;e=J0(o,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qd(n,e){return(history.state?history.state.position-e:-1)+n}const Cc=new Map;function eb(n,e){Cc.set(n,e)}function tb(n){const e=Cc.get(n);return Cc.delete(n),e}let nb=()=>location.protocol+"//"+location.host;function rp(n,e){const{pathname:t,search:r,hash:o}=e,i=n.indexOf("#");if(i>-1){let a=o.includes(n.slice(i))?n.slice(i).length:1,c=o.slice(a);return c[0]!=="/"&&(c="/"+c),jd(c,"")}return jd(t,n)+r+o}function rb(n,e,t,r){let o=[],i=[],s=null;const a=({state:f})=>{const h=rp(n,location),g=t.value,v=e.value;let m=0;if(f){if(t.value=h,e.value=f,s&&s===g){s=null;return}m=v?f.position-v.position:0}else r(h);o.forEach(p=>{p(t.value,g,{delta:m,type:Bi.pop,direction:m?m>0?wi.forward:wi.back:wi.unknown})})};function c(){s=t.value}function l(f){o.push(f);const h=()=>{const g=o.indexOf(f);g>-1&&o.splice(g,1)};return i.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(rt({},f.state,{scroll:fa()}),"")}function u(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function Kd(n,e,t,r=!1,o=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:o?fa():null}}function ob(n){const{history:e,location:t}=window,r={value:rp(n,t)},o={value:e.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,d){const u=n.indexOf("#"),f=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+c:nb()+n+c;try{e[d?"replaceState":"pushState"](l,"",f),o.value=l}catch(h){console.error(h),t[d?"replace":"assign"](f)}}function s(c,l){const d=rt({},e.state,Kd(o.value.back,c,o.value.forward,!0),l,{position:o.value.position});i(c,d,!0),r.value=c}function a(c,l){const d=rt({},o.value,e.state,{forward:c,scroll:fa()});i(d.current,d,!0);const u=rt({},Kd(r.value,c,null),{position:d.position+1},l);i(c,u,!1),r.value=c}return{location:r,state:o,push:a,replace:s}}function ib(n){n=q0(n);const e=ob(n),t=rb(n,e.state,e.location,e.replace);function r(i,s=!0){s||t.pauseListeners(),history.go(i)}const o=rt({location:"",base:n,go:r,createHref:Z0.bind(null,n)},e,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function sb(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),ib(n)}function ab(n){return typeof n=="string"||n&&typeof n=="object"}function op(n){return typeof n=="string"||typeof n=="symbol"}const ip=Symbol("");var Zd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Zd||(Zd={}));function Xo(n,e){return rt(new Error,{type:n,[ip]:!0},e)}function jn(n,e){return n instanceof Error&&ip in n&&(e==null||!!(n.type&e))}const Jd="[^/]+?",cb={sensitive:!1,strict:!1,start:!0,end:!0},lb=/[.+*?^${}()[\]/\\]/g;function db(n,e){const t=rt({},cb,e),r=[];let o=t.start?"^":"";const i=[];for(const l of n){const d=l.length?[]:[90];t.strict&&!l.length&&(o+="/");for(let u=0;u<l.length;u++){const f=l[u];let h=40+(t.sensitive?.25:0);if(f.type===0)u||(o+="/"),o+=f.value.replace(lb,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=f;i.push({name:g,repeatable:v,optional:m});const w=p||Jd;if(w!==Jd){h+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+x.message)}}let S=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;u||(S=m&&l.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),o+=S,h+=20,m&&(h+=-8),v&&(h+=-20),w===".*"&&(h+=-50)}d.push(h)}r.push(d)}if(t.strict&&t.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}t.strict||(o+="/?"),t.end?o+="$":t.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const s=new RegExp(o,t.sensitive?"":"i");function a(l){const d=l.match(s),u={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",g=i[f-1];u[g.name]=h&&g.repeatable?h.split("/"):h}return u}function c(l){let d="",u=!1;for(const f of n){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:g,repeatable:v,optional:m}=h,p=g in l?l[g]:"";if(Ln(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Ln(p)?p.join("/"):p;if(!w)if(m)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);d+=w}}return d||"/"}return{re:s,score:r,keys:i,parse:a,stringify:c}}function ub(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function sp(n,e){let t=0;const r=n.score,o=e.score;for(;t<r.length&&t<o.length;){const i=ub(r[t],o[t]);if(i)return i;t++}if(Math.abs(o.length-r.length)===1){if(Qd(r))return 1;if(Qd(o))return-1}return o.length-r.length}function Qd(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const fb={type:0,value:""},hb=/[a-zA-Z0-9_]/;function pb(n){if(!n)return[[]];if(n==="/")return[[fb]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${l}": ${h}`)}let t=0,r=t;const o=[];let i;function s(){i&&o.push(i),i=[]}let a=0,c,l="",d="";function u(){l&&(t===0?i.push({type:0,value:l}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(l&&u(),s()):c===":"?(u(),t=1):f();break;case 4:f(),t=r;break;case 1:c==="("?t=2:hb.test(c)?f():(u(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:t=3:d+=c;break;case 3:u(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),s(),o}function mb(n,e,t){const r=db(pb(n.path),t),o=rt(r,{record:n,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function gb(n,e){const t=[],r=new Map;e=ru({strict:!1,end:!0,sensitive:!1},e);function o(u){return r.get(u)}function i(u,f,h){const g=!h,v=tu(u);v.aliasOf=h&&h.record;const m=ru(e,u),p=[v];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of x)p.push(tu(rt({},v,{components:h?h.record.components:v.components,path:L,aliasOf:h?h.record:v})))}let w,S;for(const x of p){const{path:L}=x;if(f&&L[0]!=="/"){const D=f.record.path,R=D[D.length-1]==="/"?"":"/";x.path=f.record.path+(L&&R+L)}if(w=mb(x,f,m),h?h.alias.push(w):(S=S||w,S!==w&&S.alias.push(w),g&&u.name&&!nu(w)&&s(u.name)),ap(w)&&c(w),v.children){const D=v.children;for(let R=0;R<D.length;R++)i(D[R],w,h&&h.children[R])}h=h||w}return S?()=>{s(S)}:Ei}function s(u){if(op(u)){const f=r.get(u);f&&(r.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function a(){return t}function c(u){const f=_b(u,t);t.splice(f,0,u),u.record.name&&!nu(u)&&r.set(u.record.name,u)}function l(u,f){let h,g={},v,m;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Xo(1,{location:u});m=h.record.name,g=rt(eu(f.params,h.keys.filter(S=>!S.optional).concat(h.parent?h.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),u.params&&eu(u.params,h.keys.map(S=>S.name))),v=h.stringify(g)}else if(u.path!=null)v=u.path,h=t.find(S=>S.re.test(v)),h&&(g=h.parse(v),m=h.record.name);else{if(h=f.name?r.get(f.name):t.find(S=>S.re.test(f.path)),!h)throw Xo(1,{location:u,currentLocation:f});m=h.record.name,g=rt({},f.params,u.params),v=h.stringify(g)}const p=[];let w=h;for(;w;)p.unshift(w.record),w=w.parent;return{name:m,path:v,params:g,matched:p,meta:vb(p)}}n.forEach(u=>i(u));function d(){t.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:s,clearRoutes:d,getRoutes:a,getRecordMatcher:o}}function eu(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function tu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:bb(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function bb(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function nu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function vb(n){return n.reduce((e,t)=>rt(e,t.meta),{})}function ru(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function _b(n,e){let t=0,r=e.length;for(;t!==r;){const i=t+r>>1;sp(n,e[i])<0?r=i:t=i+1}const o=xb(n);return o&&(r=e.lastIndexOf(o,r-1)),r}function xb(n){let e=n;for(;e=e.parent;)if(ap(e)&&sp(n,e)===0)return e}function ap({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function yb(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Jh," "),s=i.indexOf("="),a=Ni(s<0?i:i.slice(0,s)),c=s<0?null:Ni(i.slice(s+1));if(a in e){let l=e[a];Ln(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ou(n){let e="";for(let t in n){const r=n[t];if(t=z0(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Ln(r)?r.map(i=>i&&Tc(i)):[r&&Tc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function Sb(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Ln(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return e}const Mb=Symbol(""),iu=Symbol(""),Vl=Symbol(""),cp=Symbol(""),Ac=Symbol("");function ai(){let n=[];function e(r){return n.push(r),()=>{const o=n.indexOf(r);o>-1&&n.splice(o,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Er(n,e,t,r,o,i=s=>s()){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(Xo(4,{from:t,to:e})):f instanceof Error?c(f):ab(f)?c(Xo(2,{from:e,to:f})):(s&&r.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),a())},d=i(()=>n.call(r&&r.instances[o],e,t,l));let u=Promise.resolve(d);n.length<3&&(u=u.then(l)),u.catch(f=>c(f))})}function ka(n,e,t,r,o=i=>i()){const i=[];for(const s of n)for(const a in s.components){let c=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(Kh(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Er(d,t,r,s,a,o))}else{let l=c();i.push(()=>l.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);const u=R0(d)?d.default:d;s.mods[a]=d,s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&Er(h,t,r,s,a,o)()}))}}return i}function su(n){const e=cr(Vl),t=cr(cp),r=Tn(()=>{const c=Oo(n.to);return e.resolve(c)}),o=Tn(()=>{const{matched:c}=r.value,{length:l}=c,d=c[l-1],u=t.matched;if(!d||!u.length)return-1;const f=u.findIndex($o.bind(null,d));if(f>-1)return f;const h=au(c[l-2]);return l>1&&au(d)===h&&u[u.length-1].path!==h?u.findIndex($o.bind(null,c[l-2])):f}),i=Tn(()=>o.value>-1&&Ab(t.params,r.value.params)),s=Tn(()=>o.value>-1&&o.value===t.matched.length-1&&np(t.params,r.value.params));function a(c={}){if(Cb(c)){const l=e[Oo(n.replace)?"replace":"push"](Oo(n.to)).catch(Ei);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Tn(()=>r.value.href),isActive:i,isExactActive:s,navigate:a}}function Eb(n){return n.length===1?n[0]:n}const wb=_h({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:su,setup(n,{slots:e}){const t=Ji(su(n)),{options:r}=cr(Vl),o=Tn(()=>({[cu(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[cu(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&Eb(e.default(t));return n.custom?i:Yh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},i)}}}),Tb=wb;function Cb(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Ab(n,e){for(const t in e){const r=e[t],o=n[t];if(typeof r=="string"){if(r!==o)return!1}else if(!Ln(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function au(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const cu=(n,e,t)=>n??e??t,Rb=_h({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=cr(Ac),o=Tn(()=>n.route||r.value),i=cr(iu,0),s=Tn(()=>{let l=Oo(i);const{matched:d}=o.value;let u;for(;(u=d[l])&&!u.components;)l++;return l}),a=Tn(()=>o.value.matched[s.value]);Is(iu,Tn(()=>s.value+1)),Is(Mb,a),Is(Ac,o);const c=Zt();return or(()=>[c.value,a.value,n.name],([l,d,u],[f,h,g])=>{d&&(d.instances[u]=l,h&&h!==d&&l&&l===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),l&&d&&(!h||!$o(d,h)||!f)&&(d.enterCallbacks[u]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=o.value,d=n.name,u=a.value,f=u&&u.components[d];if(!f)return lu(t.default,{Component:f,route:l});const h=u.props[d],g=h?h===!0?l.params:typeof h=="function"?h(l):h:null,m=Yh(f,rt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[d]=null)},ref:c}));return lu(t.default,{Component:m,route:l})||m}}});function lu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Pb=Rb;function Db(n){const e=gb(n.routes,n),t=n.parseQuery||yb,r=n.stringifyQuery||ou,o=n.history,i=ai(),s=ai(),a=ai(),c=zm(mr);let l=mr;wo&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Da.bind(null,I=>""+I),u=Da.bind(null,V0),f=Da.bind(null,Ni);function h(I,oe){let ie,ue;return op(I)?(ie=e.getRecordMatcher(I),ue=oe):ue=I,e.addRoute(ue,ie)}function g(I){const oe=e.getRecordMatcher(I);oe&&e.removeRoute(oe)}function v(){return e.getRoutes().map(I=>I.record)}function m(I){return!!e.getRecordMatcher(I)}function p(I,oe){if(oe=rt({},oe||c.value),typeof I=="string"){const _=La(t,I,oe.path),ee=e.resolve({path:_.path},oe),X=o.createHref(_.fullPath);return rt(_,ee,{params:f(ee.params),hash:Ni(_.hash),redirectedFrom:void 0,href:X})}let ie;if(I.path!=null)ie=rt({},I,{path:La(t,I.path,oe.path).path});else{const _=rt({},I.params);for(const ee in _)_[ee]==null&&delete _[ee];ie=rt({},I,{params:u(_)}),oe.params=u(oe.params)}const ue=e.resolve(ie,oe),Pe=I.hash||"";ue.params=d(f(ue.params));const C=$0(r,rt({},I,{hash:F0(Pe),path:ue.path})),A=o.createHref(C);return rt({fullPath:C,hash:Pe,query:r===ou?Sb(I.query):I.query||{}},ue,{redirectedFrom:void 0,href:A})}function w(I){return typeof I=="string"?La(t,I,c.value.path):rt({},I)}function S(I,oe){if(l!==I)return Xo(8,{from:oe,to:I})}function x(I){return R(I)}function L(I){return x(rt(w(I),{replace:!0}))}function D(I){const oe=I.matched[I.matched.length-1];if(oe&&oe.redirect){const{redirect:ie}=oe;let ue=typeof ie=="function"?ie(I):ie;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=w(ue):{path:ue},ue.params={}),rt({query:I.query,hash:I.hash,params:ue.path!=null?{}:I.params},ue)}}function R(I,oe){const ie=l=p(I),ue=c.value,Pe=I.state,C=I.force,A=I.replace===!0,_=D(ie);if(_)return R(rt(w(_),{state:typeof _=="object"?rt({},Pe,_.state):Pe,force:C,replace:A}),oe||ie);const ee=ie;ee.redirectedFrom=oe;let X;return!C&&X0(r,ue,ie)&&(X=Xo(16,{to:ee,from:ue}),_e(ue,ue,!0,!1)),(X?Promise.resolve(X):E(ee,ue)).catch($=>jn($)?jn($,2)?$:ge($):F($,ee,ue)).then($=>{if($){if(jn($,2))return R(rt({replace:A},w($.to),{state:typeof $.to=="object"?rt({},Pe,$.to.state):Pe,force:C}),oe||ee)}else $=te(ee,ue,!0,A,Pe);return k(ee,ue,$),$})}function O(I,oe){const ie=S(I,oe);return ie?Promise.reject(ie):Promise.resolve()}function T(I){const oe=Q.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(I):I()}function E(I,oe){let ie;const[ue,Pe,C]=Lb(I,oe);ie=ka(ue.reverse(),"beforeRouteLeave",I,oe);for(const _ of ue)_.leaveGuards.forEach(ee=>{ie.push(Er(ee,I,oe))});const A=O.bind(null,I,oe);return ie.push(A),be(ie).then(()=>{ie=[];for(const _ of i.list())ie.push(Er(_,I,oe));return ie.push(A),be(ie)}).then(()=>{ie=ka(Pe,"beforeRouteUpdate",I,oe);for(const _ of Pe)_.updateGuards.forEach(ee=>{ie.push(Er(ee,I,oe))});return ie.push(A),be(ie)}).then(()=>{ie=[];for(const _ of C)if(_.beforeEnter)if(Ln(_.beforeEnter))for(const ee of _.beforeEnter)ie.push(Er(ee,I,oe));else ie.push(Er(_.beforeEnter,I,oe));return ie.push(A),be(ie)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),ie=ka(C,"beforeRouteEnter",I,oe,T),ie.push(A),be(ie))).then(()=>{ie=[];for(const _ of s.list())ie.push(Er(_,I,oe));return ie.push(A),be(ie)}).catch(_=>jn(_,8)?_:Promise.reject(_))}function k(I,oe,ie){a.list().forEach(ue=>T(()=>ue(I,oe,ie)))}function te(I,oe,ie,ue,Pe){const C=S(I,oe);if(C)return C;const A=oe===mr,_=wo?history.state:{};ie&&(ue||A?o.replace(I.fullPath,rt({scroll:A&&_&&_.scroll},Pe)):o.push(I.fullPath,Pe)),c.value=I,_e(I,oe,ie,A),ge()}let W;function se(){W||(W=o.listen((I,oe,ie)=>{if(!pe.listening)return;const ue=p(I),Pe=D(ue);if(Pe){R(rt(Pe,{replace:!0,force:!0}),ue).catch(Ei);return}l=ue;const C=c.value;wo&&eb(qd(C.fullPath,ie.delta),fa()),E(ue,C).catch(A=>jn(A,12)?A:jn(A,2)?(R(rt(w(A.to),{force:!0}),ue).then(_=>{jn(_,20)&&!ie.delta&&ie.type===Bi.pop&&o.go(-1,!1)}).catch(Ei),Promise.reject()):(ie.delta&&o.go(-ie.delta,!1),F(A,ue,C))).then(A=>{A=A||te(ue,C,!1),A&&(ie.delta&&!jn(A,8)?o.go(-ie.delta,!1):ie.type===Bi.pop&&jn(A,20)&&o.go(-1,!1)),k(ue,C,A)}).catch(Ei)}))}let re=ai(),Y=ai(),Z;function F(I,oe,ie){ge(I);const ue=Y.list();return ue.length?ue.forEach(Pe=>Pe(I,oe,ie)):console.error(I),Promise.reject(I)}function he(){return Z&&c.value!==mr?Promise.resolve():new Promise((I,oe)=>{re.add([I,oe])})}function ge(I){return Z||(Z=!I,se(),re.list().forEach(([oe,ie])=>I?ie(I):oe()),re.reset()),I}function _e(I,oe,ie,ue){const{scrollBehavior:Pe}=n;if(!wo||!Pe)return Promise.resolve();const C=!ie&&tb(qd(I.fullPath,0))||(ue||!ie)&&history.state&&history.state.scroll||null;return Ll().then(()=>Pe(I,oe,C)).then(A=>A&&Q0(A)).catch(A=>F(A,I,oe))}const Te=I=>o.go(I);let Oe;const Q=new Set,pe={currentRoute:c,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:x,replace:L,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:Y.add,isReady:he,install(I){const oe=this;I.component("RouterLink",Tb),I.component("RouterView",Pb),I.config.globalProperties.$router=oe,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Oo(c)}),wo&&!Oe&&c.value===mr&&(Oe=!0,x(o.location).catch(Pe=>{}));const ie={};for(const Pe in mr)Object.defineProperty(ie,Pe,{get:()=>c.value[Pe],enumerable:!0});I.provide(Vl,oe),I.provide(cp,dh(ie)),I.provide(Ac,c);const ue=I.unmount;Q.add(I),I.unmount=function(){Q.delete(I),Q.size<1&&(l=mr,W&&W(),W=null,c.value=mr,Oe=!1,Z=!1),ue()}}};function be(I){return I.reduce((oe,ie)=>oe.then(()=>T(ie)),Promise.resolve())}return pe}function Lb(n,e){const t=[],r=[],o=[],i=Math.max(e.matched.length,n.matched.length);for(let s=0;s<i;s++){const a=e.matched[s];a&&(n.matched.find(l=>$o(l,a))?r.push(a):t.push(a));const c=n.matched[s];c&&(e.matched.find(l=>$o(l,c))||o.push(c))}return[t,r,o]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gl="172",zo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kb=0,du=1,Ib=2,lp=1,Ub=2,er=3,kr=0,jt=1,Bn=2,Pr=0,Ho=1,uu=2,fu=3,hu=4,Ob=5,qr=100,Nb=101,Bb=102,Fb=103,zb=104,Hb=200,Vb=201,Gb=202,Wb=203,Rc=204,Pc=205,$b=206,Xb=207,jb=208,Yb=209,qb=210,Kb=211,Zb=212,Jb=213,Qb=214,Dc=0,Lc=1,kc=2,jo=3,Ic=4,Uc=5,Oc=6,Nc=7,dp=0,ev=1,tv=2,Dr=0,nv=1,rv=2,ov=3,iv=4,sv=5,av=6,cv=7,up=300,Yo=301,qo=302,Ks=303,Bc=304,ha=306,Fi=1e3,Zr=1001,Fc=1002,Dn=1003,lv=1004,ds=1005,Fn=1006,Ia=1007,Jr=1008,ur=1009,fp=1010,hp=1011,zi=1012,Wl=1013,to=1014,ir=1015,ts=1016,$l=1017,Xl=1018,Ko=1020,pp=35902,mp=1021,gp=1022,An=1023,bp=1024,vp=1025,Vo=1026,Zo=1027,_p=1028,jl=1029,xp=1030,Yl=1031,ql=1033,Ns=33776,Bs=33777,Fs=33778,zs=33779,zc=35840,Hc=35841,Vc=35842,Gc=35843,Wc=36196,$c=37492,Xc=37496,jc=37808,Yc=37809,qc=37810,Kc=37811,Zc=37812,Jc=37813,Qc=37814,el=37815,tl=37816,nl=37817,rl=37818,ol=37819,il=37820,sl=37821,Hs=36492,al=36494,cl=36495,yp=36283,ll=36284,dl=36285,ul=36286,dv=3200,uv=3201,Sp=0,fv=1,Tr="",sn="srgb",Jo="srgb-linear",Zs="linear",at="srgb",lo=7680,pu=519,hv=512,pv=513,mv=514,Mp=515,gv=516,bv=517,vv=518,_v=519,mu=35044,gu="300 es",sr=2e3,Js=2001;class io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const i=o.indexOf(t);i!==-1&&o.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let i=0,s=o.length;i<s;i++)o[i].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bu=1234567;const Ti=Math.PI/180,Hi=180/Math.PI;function ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function Kl(n,e){return(n%e+e)%e}function xv(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function yv(n,e,t){return n!==e?(t-n)/(e-n):0}function Ci(n,e,t){return(1-t)*n+t*e}function Sv(n,e,t,r){return Ci(n,e,1-Math.exp(-t*r))}function Mv(n,e=1){return e-Math.abs(Kl(n,e*2)-e)}function Ev(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Tv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Cv(n,e){return n+Math.random()*(e-n)}function Av(n){return n*(.5-Math.random())}function Rv(n){n!==void 0&&(bu=n);let e=bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pv(n){return n*Ti}function Dv(n){return n*Hi}function Lv(n){return(n&n-1)===0&&n!==0}function kv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Iv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Uv(n,e,t,r,o){const i=Math.cos,s=Math.sin,a=i(t/2),c=s(t/2),l=i((e+r)/2),d=s((e+r)/2),u=i((e-r)/2),f=s((e-r)/2),h=i((r-e)/2),g=s((r-e)/2);switch(o){case"XYX":n.set(a*d,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*d,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*d,a*l);break;case"XZX":n.set(a*d,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*d,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function To(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Vs={DEG2RAD:Ti,RAD2DEG:Hi,generateUUID:ni,clamp:Ye,euclideanModulo:Kl,mapLinear:xv,inverseLerp:yv,lerp:Ci,damp:Sv,pingpong:Mv,smoothstep:Ev,smootherstep:wv,randInt:Tv,randFloat:Cv,randFloatSpread:Av,seededRandom:Rv,degToRad:Pv,radToDeg:Dv,isPowerOfTwo:Lv,ceilPowerOfTwo:kv,floorPowerOfTwo:Iv,setQuaternionFromProperEuler:Uv,normalize:Vt,denormalize:To};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ye(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*o+e.x,this.y=i*o+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,r,o,i,s,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,i,s,a,c,l)}set(e,t,r,o,i,s,a,c,l){const d=this.elements;return d[0]=e,d[1]=o,d[2]=a,d[3]=t,d[4]=i,d[5]=c,d[6]=r,d[7]=s,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,i=this.elements,s=r[0],a=r[3],c=r[6],l=r[1],d=r[4],u=r[7],f=r[2],h=r[5],g=r[8],v=o[0],m=o[3],p=o[6],w=o[1],S=o[4],x=o[7],L=o[2],D=o[5],R=o[8];return i[0]=s*v+a*w+c*L,i[3]=s*m+a*S+c*D,i[6]=s*p+a*x+c*R,i[1]=l*v+d*w+u*L,i[4]=l*m+d*S+u*D,i[7]=l*p+d*x+u*R,i[2]=f*v+h*w+g*L,i[5]=f*m+h*S+g*D,i[8]=f*p+h*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*s*d-t*a*l-r*i*d+r*a*c+o*i*l-o*s*c}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=d*s-a*l,f=a*c-d*i,h=l*i-s*c,g=t*u+r*f+o*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(o*l-d*r)*v,e[2]=(a*r-o*s)*v,e[3]=f*v,e[4]=(d*t-o*c)*v,e[5]=(o*i-a*t)*v,e[6]=h*v,e[7]=(r*c-l*t)*v,e[8]=(s*t-r*i)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,i,s,a){const c=Math.cos(i),l=Math.sin(i);return this.set(r*c,r*l,-r*(c*s+l*a)+s+e,-o*l,o*c,-o*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new $e;function Ep(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ov(){const n=Vi("canvas");return n.style.display="block",n}const vu={};function Co(n){n in vu||(vu[n]=!0,console.warn(n))}function Nv(n,e,t){return new Promise(function(r,o){function i(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}function Bv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _u=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zv(){const n={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(o,i,s){return this.enabled===!1||i===s||!i||!s||(this.spaces[i].transfer===at&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[i].primaries!==this.spaces[s].primaries&&(o.applyMatrix3(this.spaces[i].toXYZ),o.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===at&&(o.r=Go(o.r),o.g=Go(o.g),o.b=Go(o.b))),o},fromWorkingColorSpace:function(o,i){return this.convert(o,this.workingColorSpace,i)},toWorkingColorSpace:function(o,i){return this.convert(o,i,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Tr?Zs:this.spaces[o].transfer},getLuminanceCoefficients:function(o,i=this.workingColorSpace){return o.fromArray(this.spaces[i].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,i,s){return o.copy(this.spaces[i].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Jo]:{primaries:e,whitePoint:r,transfer:Zs,toXYZ:_u,fromXYZ:xu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:r,transfer:at,toXYZ:_u,fromXYZ:xu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}const et=zv();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let uo;class Hv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{uo===void 0&&(uo=Vi("canvas")),uo.width=e.width,uo.height=e.height;const r=uo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=uo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vi("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),i=o.data;for(let s=0;s<i.length;s++)i[s]=lr(i[s]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let i;if(Array.isArray(o)){i=[];for(let s=0,a=o.length;s<a;s++)o[s].isDataTexture?i.push(Oa(o[s].image)):i.push(Oa(o[s]))}else i=Oa(o);r.url=i}return t||(e.images[this.uuid]=r),r}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gv=0;class Yt extends io{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,r=Zr,o=Zr,i=Fn,s=Jr,a=An,c=ur,l=Yt.DEFAULT_ANISOTROPY,d=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=ni(),this.name="",this.source=new wp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=i,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=up;Yt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,r=0,o=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*o+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*o+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*o+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*o+s[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,i;const c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,x=(h+1)/2,L=(p+1)/2,D=(d+f)/4,R=(u+v)/4,O=(g+m)/4;return S>x&&S>L?S<.01?(r=0,o=.707106781,i=.707106781):(r=Math.sqrt(S),o=D/r,i=R/r):x>L?x<.01?(r=.707106781,o=0,i=.707106781):(o=Math.sqrt(x),r=D/o,i=O/o):L<.01?(r=.707106781,o=.707106781,i=0):(i=Math.sqrt(L),r=R/i,o=O/i),this.set(r,o,i,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(f-d)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ye(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wv extends io{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const i=new Yt(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=i.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,i=this.textures.length;o<i;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new wp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class no extends Wv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Tp extends Yt{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $v extends Yt{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,i,s,a){let c=r[o+0],l=r[o+1],d=r[o+2],u=r[o+3];const f=i[s+0],h=i[s+1],g=i[s+2],v=i[s+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==h||d!==g){let m=1-a;const p=c*f+l*h+d*g+u*v,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),D=Math.atan2(L,p*w);m=Math.sin(m*D)/L,a=Math.sin(a*D)/L}const x=a*w;if(c=c*m+f*x,l=l*m+h*x,d=d*m+g*x,u=u*m+v*x,m===1-a){const L=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=L,l*=L,d*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,o,i,s){const a=r[o],c=r[o+1],l=r[o+2],d=r[o+3],u=i[s],f=i[s+1],h=i[s+2],g=i[s+3];return e[t]=a*g+d*u+c*h-l*f,e[t+1]=c*g+d*f+l*u-a*h,e[t+2]=l*g+d*h+a*f-c*u,e[t+3]=d*g-a*u-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,i=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(r/2),d=a(o/2),u=a(i/2),f=c(r/2),h=c(o/2),g=c(i/2);switch(s){case"XYZ":this._x=f*d*u+l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u-f*h*g;break;case"YXZ":this._x=f*d*u+l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u+f*h*g;break;case"ZXY":this._x=f*d*u-l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u-f*h*g;break;case"ZYX":this._x=f*d*u-l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u+f*h*g;break;case"YZX":this._x=f*d*u+l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u-f*h*g;break;case"XZY":this._x=f*d*u-l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],i=t[8],s=t[1],a=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=r+a+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-c)*h,this._y=(i-l)*h,this._z=(s-o)*h}else if(r>a&&r>u){const h=2*Math.sqrt(1+r-a-u);this._w=(d-c)/h,this._x=.25*h,this._y=(o+s)/h,this._z=(i+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-r-u);this._w=(i-l)/h,this._x=(o+s)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+u-r-a);this._w=(s-o)/h,this._x=(i+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,i=e._z,s=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=r*d+s*a+o*l-i*c,this._y=o*d+s*c+i*a-r*l,this._z=i*d+s*l+r*c-o*a,this._w=s*d-r*a-o*c-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,i=this._z,s=this._w;let a=s*e._w+r*e._x+o*e._y+i*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=o,this._z=i,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*r+t*this._x,this._y=h*o+t*this._y,this._z=h*i+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=s*u+this._w*f,this._x=r*u+this._x*f,this._y=o*u+this._y*f,this._z=i*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*o,this.y=i[1]*t+i[4]*r+i[7]*o,this.z=i[2]*t+i[5]*r+i[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*o+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*o+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*o+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*o+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,i=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*o-a*r),d=2*(a*t-i*o),u=2*(i*r-s*t);return this.x=t+c*l+s*u-a*d,this.y=r+c*d+a*l-i*u,this.z=o+c*u+i*d-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*o,this.y=i[1]*t+i[5]*r+i[9]*o,this.z=i[2]*t+i[6]*r+i[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ye(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,i=e.z,s=t.x,a=t.y,c=t.z;return this.x=o*c-i*a,this.y=i*s-r*c,this.z=r*a-o*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new V,yu=new ro;class ns{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=i.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,_n):_n.fromBufferAttribute(i,s),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),us.copy(r.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const o=e.children;for(let i=0,s=o.length;i<s;i++)this.expandByObject(o[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ci),fs.subVectors(this.max,ci),fo.subVectors(e.a,ci),ho.subVectors(e.b,ci),po.subVectors(e.c,ci),gr.subVectors(ho,fo),br.subVectors(po,ho),Hr.subVectors(fo,po);let t=[0,-gr.z,gr.y,0,-br.z,br.y,0,-Hr.z,Hr.y,gr.z,0,-gr.x,br.z,0,-br.x,Hr.z,0,-Hr.x,-gr.y,gr.x,0,-br.y,br.x,0,-Hr.y,Hr.x,0];return!Ba(t,fo,ho,po,fs)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,fo,ho,po,fs))?!1:(hs.crossVectors(gr,br),t=[hs.x,hs.y,hs.z],Ba(t,fo,ho,po,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new V,new V,new V,new V,new V,new V,new V,new V],_n=new V,us=new ns,fo=new V,ho=new V,po=new V,gr=new V,br=new V,Hr=new V,ci=new V,fs=new V,hs=new V,Vr=new V;function Ba(n,e,t,r,o){for(let i=0,s=n.length-3;i<=s;i+=3){Vr.fromArray(n,i);const a=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),c=e.dot(Vr),l=t.dot(Vr),d=r.dot(Vr);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Xv=new ns,li=new V,Fa=new V;class Zl{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Xv.setFromPoints(e).getCenter(r);let o=0;for(let i=0,s=e.length;i<s;i++)o=Math.max(o,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;li.subVectors(e,this.center);const t=li.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(li,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(li.copy(e.center).add(Fa)),this.expandByPoint(li.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new V,za=new V,ps=new V,vr=new V,Ha=new V,ms=new V,Va=new V;class Jl{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){za.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(za);const i=e.distanceTo(t)*.5,s=-this.direction.dot(ps),a=vr.dot(this.direction),c=-vr.dot(ps),l=vr.lengthSq(),d=Math.abs(1-s*s);let u,f,h,g;if(d>0)if(u=s*c-a,f=s*a-c,g=i*d,u>=0)if(f>=-g)if(f<=g){const v=1/d;u*=v,f*=v,h=u*(u+s*f+2*a)+f*(s*u+f+2*c)+l}else f=i,u=Math.max(0,-(s*f+a)),h=-u*u+f*(f+2*c)+l;else f=-i,u=Math.max(0,-(s*f+a)),h=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-s*i+a)),f=u>0?-i:Math.min(Math.max(-i,-c),i),h=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-i,-c),i),h=f*(f+2*c)+l):(u=Math.max(0,-(s*i+a)),f=u>0?i:Math.min(Math.max(-i,-c),i),h=-u*u+f*(f+2*c)+l);else f=s>0?-i:i,u=Math.max(0,-(s*f+a)),h=-u*u+f*(f+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,u),o&&o.copy(za).addScaledVector(ps,f),h}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const r=qn.dot(this.direction),o=qn.dot(qn)-r*r,i=e.radius*e.radius;if(o>i)return null;const s=Math.sqrt(i-o),a=r-s,c=r+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,i,s,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(r=(e.min.x-f.x)*l,o=(e.max.x-f.x)*l):(r=(e.max.x-f.x)*l,o=(e.min.x-f.x)*l),d>=0?(i=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(i=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),r>s||i>o||((i>r||isNaN(r))&&(r=i),(s<o||isNaN(o))&&(o=s),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),r>c||a>o)||((a>r||r!==r)&&(r=a),(c<o||o!==o)&&(o=c),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,r,o,i){Ha.subVectors(t,e),ms.subVectors(r,e),Va.crossVectors(Ha,ms);let s=this.direction.dot(Va),a;if(s>0){if(o)return null;a=1}else if(s<0)a=-1,s=-s;else return null;vr.subVectors(this.origin,e);const c=a*this.direction.dot(ms.crossVectors(vr,ms));if(c<0)return null;const l=a*this.direction.dot(Ha.cross(vr));if(l<0||c+l>s)return null;const d=-a*vr.dot(Va);return d<0?null:this.at(d/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,r,o,i,s,a,c,l,d,u,f,h,g,v,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,i,s,a,c,l,d,u,f,h,g,v,m)}set(e,t,r,o,i,s,a,c,l,d,u,f,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=o,p[1]=i,p[5]=s,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/mo.setFromMatrixColumn(e,0).length(),i=1/mo.setFromMatrixColumn(e,1).length(),s=1/mo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,i=e.z,s=Math.cos(r),a=Math.sin(r),c=Math.cos(o),l=Math.sin(o),d=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const f=s*d,h=s*u,g=a*d,v=a*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+h*l,t[10]=s*c}else if(e.order==="YXZ"){const f=c*d,h=c*u,g=l*d,v=l*u;t[0]=f+v*a,t[4]=g*a-h,t[8]=s*l,t[1]=s*u,t[5]=s*d,t[9]=-a,t[2]=h*a-g,t[6]=v+f*a,t[10]=s*c}else if(e.order==="ZXY"){const f=c*d,h=c*u,g=l*d,v=l*u;t[0]=f-v*a,t[4]=-s*u,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*d,t[9]=v-f*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const f=s*d,h=s*u,g=a*d,v=a*u;t[0]=c*d,t[4]=g*l-h,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const f=s*c,h=s*l,g=a*c,v=a*l;t[0]=c*d,t[4]=v-f*u,t[8]=g*u+h,t[1]=u,t[5]=s*d,t[9]=-a*d,t[2]=-l*d,t[6]=h*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=s*c,h=s*l,g=a*c,v=a*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+v,t[5]=s*d,t[9]=h*u-g,t[2]=g*u-h,t[6]=a*d,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,Yv)}lookAt(e,t,r){const o=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),_r.crossVectors(r,tn),_r.lengthSq()===0&&(Math.abs(r.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),_r.crossVectors(r,tn)),_r.normalize(),gs.crossVectors(tn,_r),o[0]=_r.x,o[4]=gs.x,o[8]=tn.x,o[1]=_r.y,o[5]=gs.y,o[9]=tn.y,o[2]=_r.z,o[6]=gs.z,o[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,i=this.elements,s=r[0],a=r[4],c=r[8],l=r[12],d=r[1],u=r[5],f=r[9],h=r[13],g=r[2],v=r[6],m=r[10],p=r[14],w=r[3],S=r[7],x=r[11],L=r[15],D=o[0],R=o[4],O=o[8],T=o[12],E=o[1],k=o[5],te=o[9],W=o[13],se=o[2],re=o[6],Y=o[10],Z=o[14],F=o[3],he=o[7],ge=o[11],_e=o[15];return i[0]=s*D+a*E+c*se+l*F,i[4]=s*R+a*k+c*re+l*he,i[8]=s*O+a*te+c*Y+l*ge,i[12]=s*T+a*W+c*Z+l*_e,i[1]=d*D+u*E+f*se+h*F,i[5]=d*R+u*k+f*re+h*he,i[9]=d*O+u*te+f*Y+h*ge,i[13]=d*T+u*W+f*Z+h*_e,i[2]=g*D+v*E+m*se+p*F,i[6]=g*R+v*k+m*re+p*he,i[10]=g*O+v*te+m*Y+p*ge,i[14]=g*T+v*W+m*Z+p*_e,i[3]=w*D+S*E+x*se+L*F,i[7]=w*R+S*k+x*re+L*he,i[11]=w*O+S*te+x*Y+L*ge,i[15]=w*T+S*W+x*Z+L*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],i=e[12],s=e[1],a=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+i*c*u-o*l*u-i*a*f+r*l*f+o*a*h-r*c*h)+v*(+t*c*h-t*l*f+i*s*f-o*s*h+o*l*d-i*c*d)+m*(+t*l*u-t*a*h-i*s*u+r*s*h+i*a*d-r*l*d)+p*(-o*a*d-t*c*u+t*a*f+o*s*u-r*s*f+r*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=u*m*l-v*f*l+v*c*h-a*m*h-u*c*p+a*f*p,S=g*f*l-d*m*l-g*c*h+s*m*h+d*c*p-s*f*p,x=d*v*l-g*u*l+g*a*h-s*v*h-d*a*p+s*u*p,L=g*u*c-d*v*c-g*a*f+s*v*f+d*a*m-s*u*m,D=t*w+r*S+o*x+i*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=w*R,e[1]=(v*f*i-u*m*i-v*o*h+r*m*h+u*o*p-r*f*p)*R,e[2]=(a*m*i-v*c*i+v*o*l-r*m*l-a*o*p+r*c*p)*R,e[3]=(u*c*i-a*f*i-u*o*l+r*f*l+a*o*h-r*c*h)*R,e[4]=S*R,e[5]=(d*m*i-g*f*i+g*o*h-t*m*h-d*o*p+t*f*p)*R,e[6]=(g*c*i-s*m*i-g*o*l+t*m*l+s*o*p-t*c*p)*R,e[7]=(s*f*i-d*c*i+d*o*l-t*f*l-s*o*h+t*c*h)*R,e[8]=x*R,e[9]=(g*u*i-d*v*i-g*r*h+t*v*h+d*r*p-t*u*p)*R,e[10]=(s*v*i-g*a*i+g*r*l-t*v*l-s*r*p+t*a*p)*R,e[11]=(d*a*i-s*u*i-d*r*l+t*u*l+s*r*h-t*a*h)*R,e[12]=L*R,e[13]=(d*v*o-g*u*o+g*r*f-t*v*f-d*r*m+t*u*m)*R,e[14]=(g*a*o-s*v*o-g*r*c+t*v*c+s*r*m-t*a*m)*R,e[15]=(s*u*o-d*a*o+d*r*c-t*u*c-s*r*f+t*a*f)*R,this}scale(e){const t=this.elements,r=e.x,o=e.y,i=e.z;return t[0]*=r,t[4]*=o,t[8]*=i,t[1]*=r,t[5]*=o,t[9]*=i,t[2]*=r,t[6]*=o,t[10]*=i,t[3]*=r,t[7]*=o,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),i=1-r,s=e.x,a=e.y,c=e.z,l=i*s,d=i*a;return this.set(l*s+r,l*a-o*c,l*c+o*a,0,l*a+o*c,d*a+r,d*c-o*s,0,l*c-o*a,d*c+o*s,i*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,i,s){return this.set(1,r,i,0,e,1,s,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,i=t._x,s=t._y,a=t._z,c=t._w,l=i+i,d=s+s,u=a+a,f=i*l,h=i*d,g=i*u,v=s*d,m=s*u,p=a*u,w=c*l,S=c*d,x=c*u,L=r.x,D=r.y,R=r.z;return o[0]=(1-(v+p))*L,o[1]=(h+x)*L,o[2]=(g-S)*L,o[3]=0,o[4]=(h-x)*D,o[5]=(1-(f+p))*D,o[6]=(m+w)*D,o[7]=0,o[8]=(g+S)*R,o[9]=(m-w)*R,o[10]=(1-(f+v))*R,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let i=mo.set(o[0],o[1],o[2]).length();const s=mo.set(o[4],o[5],o[6]).length(),a=mo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(i=-i),e.x=o[12],e.y=o[13],e.z=o[14],xn.copy(this);const l=1/i,d=1/s,u=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=d,xn.elements[5]*=d,xn.elements[6]*=d,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),r.x=i,r.y=s,r.z=a,this}makePerspective(e,t,r,o,i,s,a=sr){const c=this.elements,l=2*i/(t-e),d=2*i/(r-o),u=(t+e)/(t-e),f=(r+o)/(r-o);let h,g;if(a===sr)h=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(a===Js)h=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,o,i,s,a=sr){const c=this.elements,l=1/(t-e),d=1/(r-o),u=1/(s-i),f=(t+e)*l,h=(r+o)*d;let g,v;if(a===sr)g=(s+i)*u,v=-2*u;else if(a===Js)g=i*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const mo=new V,xn=new bt,jv=new V(0,0,0),Yv=new V(1,1,1),_r=new V,gs=new V,tn=new V,Su=new bt,Mu=new ro;class Gn{constructor(e=0,t=0,r=0,o=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,i=o[0],s=o[4],a=o[8],c=o[1],l=o[5],d=o[9],u=o[2],f=o[6],h=o[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ye(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,i)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qv=0;const Eu=new V,go=new ro,Kn=new bt,bs=new V,di=new V,Kv=new V,Zv=new ro,wu=new V(1,0,0),Tu=new V(0,1,0),Cu=new V(0,0,1),Au={type:"added"},Jv={type:"removed"},bo={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Jt extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new V,t=new Gn,r=new ro,o=new V(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new bt},normalMatrix:{value:new $e}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Eu.copy(e).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bs.copy(e):bs.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(di,bs,this.up):Kn.lookAt(bs,di,this.up),this.quaternion.setFromRotationMatrix(Kn),o&&(Kn.extractRotation(o.matrixWorld),go.setFromRotationMatrix(Kn),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),bo.child=e,this.dispatchEvent(bo),bo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jv),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let i=0,s=o.length;i<s;i++)o[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,e,Kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let i=0,s=o.length;i<s;i++)o[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function i(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=i(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];i(e.shapes,u)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(i(e.materials,this.material[c]));o.material=a}else o.material=i(e.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];o.animations.push(i(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),l=s(e.textures),d=s(e.images),u=s(e.shapes),f=s(e.skeletons),h=s(e.animations),g=s(e.nodes);a.length>0&&(r.geometries=a),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),d.length>0&&(r.images=d),u.length>0&&(r.shapes=u),f.length>0&&(r.skeletons=f),h.length>0&&(r.animations=h),g.length>0&&(r.nodes=g)}return r.object=o,r;function s(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Jt.DEFAULT_UP=new V(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new V,Zn=new V,Wa=new V,Jn=new V,vo=new V,_o=new V,Ru=new V,$a=new V,Xa=new V,ja=new V,Ya=new dt,qa=new dt,Ka=new dt;class Cn{constructor(e=new V,t=new V,r=new V){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),yn.subVectors(e,t),o.cross(yn);const i=o.lengthSq();return i>0?o.multiplyScalar(1/Math.sqrt(i)):o.set(0,0,0)}static getBarycoord(e,t,r,o,i){yn.subVectors(o,t),Zn.subVectors(r,t),Wa.subVectors(e,t);const s=yn.dot(yn),a=yn.dot(Zn),c=yn.dot(Wa),l=Zn.dot(Zn),d=Zn.dot(Wa),u=s*l-a*a;if(u===0)return i.set(0,0,0),null;const f=1/u,h=(l*c-a*d)*f,g=(s*d-a*c)*f;return i.set(1-h-g,g,h)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,r,o,i,s,a,c){return this.getBarycoord(e,t,r,o,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(i,Jn.x),c.addScaledVector(s,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(e,t,r,o,i,s){return Ya.setScalar(0),qa.setScalar(0),Ka.setScalar(0),Ya.fromBufferAttribute(e,t),qa.fromBufferAttribute(e,r),Ka.fromBufferAttribute(e,o),s.setScalar(0),s.addScaledVector(Ya,i.x),s.addScaledVector(qa,i.y),s.addScaledVector(Ka,i.z),s}static isFrontFacing(e,t,r,o){return yn.subVectors(r,t),Zn.subVectors(e,t),yn.cross(Zn).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),yn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,i){return Cn.getInterpolation(e,this.a,this.b,this.c,t,r,o,i)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,i=this.c;let s,a;vo.subVectors(o,r),_o.subVectors(i,r),$a.subVectors(e,r);const c=vo.dot($a),l=_o.dot($a);if(c<=0&&l<=0)return t.copy(r);Xa.subVectors(e,o);const d=vo.dot(Xa),u=_o.dot(Xa);if(d>=0&&u<=d)return t.copy(o);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return s=c/(c-d),t.copy(r).addScaledVector(vo,s);ja.subVectors(e,i);const h=vo.dot(ja),g=_o.dot(ja);if(g>=0&&h<=g)return t.copy(i);const v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(r).addScaledVector(_o,a);const m=d*g-h*u;if(m<=0&&u-d>=0&&h-g>=0)return Ru.subVectors(i,o),a=(u-d)/(u-d+(h-g)),t.copy(o).addScaledVector(Ru,a);const p=1/(m+v+f);return s=v*p,a=f*p,t.copy(r).addScaledVector(vo,s).addScaledVector(_o,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Za(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=et.workingColorSpace){return this.r=e,this.g=t,this.b=r,et.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=et.workingColorSpace){if(e=Kl(e,1),t=Ye(t,0,1),r=Ye(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=Za(s,i,e+1/3),this.g=Za(s,i,e),this.b=Za(s,i,e-1/3)}return et.toWorkingColorSpace(this,o),this}setStyle(e,t=sn){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=o[1],a=o[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=o[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const r=Cp[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return et.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ye(Ut.r*255,0,255))*65536+Math.round(Ye(Ut.g*255,0,255))*256+Math.round(Ye(Ut.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ut.copy(this),t);const r=Ut.r,o=Ut.g,i=Ut.b,s=Math.max(r,o,i),a=Math.min(r,o,i);let c,l;const d=(a+s)/2;if(a===s)c=0,l=0;else{const u=s-a;switch(l=d<=.5?u/(s+a):u/(2-s-a),s){case r:c=(o-i)/u+(o<i?6:0);break;case o:c=(i-r)/u+2;break;case i:c=(r-o)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=sn){et.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,r=Ut.g,o=Ut.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(vs);const r=Ci(xr.h,vs.h,t),o=Ci(xr.s,vs.s,t),i=Ci(xr.l,vs.l,t);return this.setHSL(r,o,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*o,this.g=i[1]*t+i[4]*r+i[7]*o,this.b=i[2]*t+i[5]*r+i[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ke;Ke.NAMES=Cp;let Qv=0;class rs extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Ho,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Pc,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(r.blending=this.blending),this.side!==kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rc&&(r.blendSrc=this.blendSrc),this.blendDst!==Pc&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==jo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pu&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(i){const s=[];for(const a in i){const c=i[a];delete c.metadata,s.push(c)}return s}if(t){const i=o(e.textures),s=o(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let i=0;i!==o;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ed extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new V,_s=new ze;class Hn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=mu,this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,i=this.itemSize;o<i;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=To(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=To(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=To(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=To(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mu&&(e.usage=this.usage),e}}class Ap extends Hn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Rp extends Hn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class dn extends Hn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let e_=0;const hn=new bt,Ja=new Jt,xo=new V,nn=new ns,ui=new ns,At=new V;class pr extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?Rp:Ap)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new $e().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,r){return hn.makeTranslation(e,t,r),this.applyMatrix4(hn),this}scale(e,t,r){return hn.makeScale(e,t,r),this.applyMatrix4(hn),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,i=e.length;o<i;o++){const s=e[o];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new dn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const i=e[o];t.setXYZ(o,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const i=t[r];nn.setFromBufferAttribute(i),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ui.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(nn.min,ui.min),nn.expandByPoint(At),At.addVectors(nn.max,ui.max),nn.expandByPoint(At)):(nn.expandByPoint(ui.min),nn.expandByPoint(ui.max))}nn.getCenter(r);let o=0;for(let i=0,s=e.count;i<s;i++)At.fromBufferAttribute(e,i),o=Math.max(o,r.distanceToSquared(At));if(t)for(let i=0,s=t.length;i<s;i++){const a=t[i],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)At.fromBufferAttribute(a,l),c&&(xo.fromBufferAttribute(e,l),At.add(xo)),o=Math.max(o,r.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<r.count;O++)a[O]=new V,c[O]=new V;const l=new V,d=new V,u=new V,f=new ze,h=new ze,g=new ze,v=new V,m=new V;function p(O,T,E){l.fromBufferAttribute(r,O),d.fromBufferAttribute(r,T),u.fromBufferAttribute(r,E),f.fromBufferAttribute(i,O),h.fromBufferAttribute(i,T),g.fromBufferAttribute(i,E),d.sub(l),u.sub(l),h.sub(f),g.sub(f);const k=1/(h.x*g.y-g.x*h.y);isFinite(k)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-h.y).multiplyScalar(k),m.copy(u).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(k),a[O].add(v),a[T].add(v),a[E].add(v),c[O].add(m),c[T].add(m),c[E].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,T=w.length;O<T;++O){const E=w[O],k=E.start,te=E.count;for(let W=k,se=k+te;W<se;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const S=new V,x=new V,L=new V,D=new V;function R(O){L.fromBufferAttribute(o,O),D.copy(L);const T=a[O];S.copy(T),S.sub(L.multiplyScalar(L.dot(T))).normalize(),x.crossVectors(D,T);const k=x.dot(c[O])<0?-1:1;s.setXYZW(O,S.x,S.y,S.z,k)}for(let O=0,T=w.length;O<T;++O){const E=w[O],k=E.start,te=E.count;for(let W=k,se=k+te;W<se;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,h=r.count;f<h;f++)r.setXYZ(f,0,0,0);const o=new V,i=new V,s=new V,a=new V,c=new V,l=new V,d=new V,u=new V;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);o.fromBufferAttribute(t,g),i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),d.subVectors(s,i),u.subVectors(o,i),d.cross(u),a.fromBufferAttribute(r,g),c.fromBufferAttribute(r,v),l.fromBufferAttribute(r,m),a.add(d),c.add(d),l.add(d),r.setXYZ(g,a.x,a.y,a.z),r.setXYZ(v,c.x,c.y,c.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)o.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,i),u.subVectors(o,i),d.cross(u),r.setXYZ(f+0,d.x,d.y,d.z),r.setXYZ(f+1,d.x,d.y,d.z),r.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,u=a.normalized,f=new l.constructor(c.length*d);let h=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*d;for(let p=0;p<d;p++)f[g++]=l[h++]}return new Hn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pr,r=this.index.array,o=this.attributes;for(const a in o){const c=o[a],l=e(c,r);t.setAttribute(a,l)}const i=this.morphAttributes;for(const a in i){const c=[],l=i[a];for(let d=0,u=l.length;d<u;d++){const f=l[d],h=e(f,r);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const l=r[c];e.data.attributes[c]=l.toJSON(e.data)}const o={};let i=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const h=l[u];d.push(h.toJSON(e.data))}d.length>0&&(o[c]=d,i=!0)}i&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const l in o){const d=o[l];this.setAttribute(l,d.clone(t))}const i=e.morphAttributes;for(const l in i){const d=[],u=i[l];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,d=s.length;l<d;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new bt,Gr=new Jl,xs=new Zl,Du=new V,ys=new V,Ss=new V,Ms=new V,Qa=new V,Es=new V,Lu=new V,ws=new V;class pn extends Jt{constructor(e=new pr,t=new ed){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=o.length;i<s;i++){const a=o[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const a=this.morphTargetInfluences;if(i&&a){Es.set(0,0,0);for(let c=0,l=i.length;c<l;c++){const d=a[c],u=i[c];d!==0&&(Qa.fromBufferAttribute(u,e),s?Es.addScaledVector(Qa,d):Es.addScaledVector(Qa.sub(t),d))}t.add(Es)}return t}raycast(e,t){const r=this.geometry,o=this.material,i=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xs.copy(r.boundingSphere),xs.applyMatrix4(i),Gr.copy(e.ray).recast(e.near),!(xs.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(xs,Du)===null||Gr.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Pu.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Pu),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,r){let o;const i=this.geometry,s=this.material,a=i.index,c=i.attributes.position,l=i.attributes.uv,d=i.attributes.uv1,u=i.attributes.normal,f=i.groups,h=i.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=s[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=w,L=S;x<L;x+=3){const D=a.getX(x),R=a.getX(x+1),O=a.getX(x+2);o=Ts(this,p,e,r,l,d,u,D,R,O),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const w=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);o=Ts(this,s,e,r,l,d,u,w,S,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=s[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let x=w,L=S;x<L;x+=3){const D=x,R=x+1,O=x+2;o=Ts(this,p,e,r,l,d,u,D,R,O),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const w=m,S=m+1,x=m+2;o=Ts(this,s,e,r,l,d,u,w,S,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function t_(n,e,t,r,o,i,s,a){let c;if(e.side===jt?c=r.intersectTriangle(s,i,o,!0,a):c=r.intersectTriangle(o,i,s,e.side===kr,a),c===null)return null;ws.copy(a),ws.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ws);return l<t.near||l>t.far?null:{distance:l,point:ws.clone(),object:n}}function Ts(n,e,t,r,o,i,s,a,c,l){n.getVertexPosition(a,ys),n.getVertexPosition(c,Ss),n.getVertexPosition(l,Ms);const d=t_(n,e,t,r,ys,Ss,Ms,Lu);if(d){const u=new V;Cn.getBarycoord(Lu,ys,Ss,Ms,u),o&&(d.uv=Cn.getInterpolatedAttribute(o,a,c,l,u,new ze)),i&&(d.uv1=Cn.getInterpolatedAttribute(i,a,c,l,u,new ze)),s&&(d.normal=Cn.getInterpolatedAttribute(s,a,c,l,u,new V),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new V,materialIndex:0};Cn.getNormal(ys,Ss,Ms,f.normal),d.face=f,d.barycoord=u}return d}class os extends pr{constructor(e=1,t=1,r=1,o=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:i,depthSegments:s};const a=this;o=Math.floor(o),i=Math.floor(i),s=Math.floor(s);const c=[],l=[],d=[],u=[];let f=0,h=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,o,s,2),g("x","z","y",1,-1,e,r,-t,o,s,3),g("x","y","z",1,-1,e,t,r,o,i,4),g("x","y","z",-1,-1,e,t,-r,o,i,5),this.setIndex(c),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(d,3)),this.setAttribute("uv",new dn(u,2));function g(v,m,p,w,S,x,L,D,R,O,T){const E=x/R,k=L/O,te=x/2,W=L/2,se=D/2,re=R+1,Y=O+1;let Z=0,F=0;const he=new V;for(let ge=0;ge<Y;ge++){const _e=ge*k-W;for(let Te=0;Te<re;Te++){const Oe=Te*E-te;he[v]=Oe*w,he[m]=_e*S,he[p]=se,l.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[p]=D>0?1:-1,d.push(he.x,he.y,he.z),u.push(Te/R),u.push(1-ge/O),Z+=1}}for(let ge=0;ge<O;ge++)for(let _e=0;_e<R;_e++){const Te=f+_e+re*ge,Oe=f+_e+re*(ge+1),Q=f+(_e+1)+re*(ge+1),pe=f+(_e+1)+re*ge;c.push(Te,Oe,pe),c.push(Oe,Q,pe),F+=6}a.addGroup(h,F,T),h+=F,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const r=Qo(n[t]);for(const o in r)e[o]=r[o]}return e}function n_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const r_={clone:Qo,merge:Gt};var o_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qo(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const s=this.uniforms[o].value;s&&s.isTexture?t.uniforms[o]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[o]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[o]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[o]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[o]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[o]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[o]={type:"m4",value:s.toArray()}:t.uniforms[o]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Dp extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new V,ku=new ze,Iu=new ze;class cn extends Dp{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ti*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(Ti*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,ku,Iu),t.subVectors(Iu,ku)}setViewOffset(e,t,r,o,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ti*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,i=-.5*o;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;i+=s.offsetX*o/c,t-=s.offsetY*r/l,o*=s.width/c,r*=s.height/l}const a=this.filmOffset;a!==0&&(i+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yo=-90,So=1;class s_ extends Jt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new cn(yo,So,e,t);o.layers=this.layers,this.add(o);const i=new cn(yo,So,e,t);i.layers=this.layers,this.add(i);const s=new cn(yo,So,e,t);s.layers=this.layers,this.add(s);const a=new cn(yo,So,e,t);a.layers=this.layers,this.add(a);const c=new cn(yo,So,e,t);c.layers=this.layers,this.add(c);const l=new cn(yo,So,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,i,s,a,c]=t;for(const l of t)this.remove(l);if(e===sr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Js)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,i),e.setRenderTarget(r,1,o),e.render(t,s),e.setRenderTarget(r,2,o),e.render(t,a),e.setRenderTarget(r,3,o),e.render(t,c),e.setRenderTarget(r,4,o),e.render(t,l),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,o),e.render(t,d),e.setRenderTarget(u,f,h),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Lp extends Yt{constructor(e,t,r,o,i,s,a,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Yo,super(e,t,r,o,i,s,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a_ extends no{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Lp(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new os(5,5,5),i=new Ir({name:"CubemapFromEquirect",uniforms:Qo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jt,blending:Pr});i.uniforms.tEquirect.value=t;const s=new pn(o,i),a=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Fn),new s_(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,o){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,o);e.setRenderTarget(i)}}class c_ extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ec=new V,l_=new V,d_=new $e;class wr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ec.subVectors(r,t).cross(l_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ec),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/o;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||d_.getNormalMatrix(e),o=this.coplanarPoint(ec).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Zl,Cs=new V;class td{constructor(e=new wr,t=new wr,r=new wr,o=new wr,i=new wr,s=new wr){this.planes=[e,t,r,o,i,s]}set(e,t,r,o,i,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(o),a[4].copy(i),a[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=sr){const r=this.planes,o=e.elements,i=o[0],s=o[1],a=o[2],c=o[3],l=o[4],d=o[5],u=o[6],f=o[7],h=o[8],g=o[9],v=o[10],m=o[11],p=o[12],w=o[13],S=o[14],x=o[15];if(r[0].setComponents(c-i,f-l,m-h,x-p).normalize(),r[1].setComponents(c+i,f+l,m+h,x+p).normalize(),r[2].setComponents(c+s,f+d,m+g,x+w).normalize(),r[3].setComponents(c-s,f-d,m-g,x-w).normalize(),r[4].setComponents(c-a,f-u,m-v,x-S).normalize(),t===sr)r[5].setComponents(c+a,f+u,m+v,x+S).normalize();else if(t===Js)r[5].setComponents(a,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Cs.x=o.normal.x>0?e.max.x:e.min.x,Cs.y=o.normal.y>0?e.max.y:e.min.y,Cs.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Po extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class kp extends Yt{constructor(e,t,r,o,i,s,a,c,l,d=Vo){if(d!==Vo&&d!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&d===Vo&&(r=to),r===void 0&&d===Zo&&(r=Ko),super(null,o,i,s,a,c,d,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dn,this.minFilter=c!==void 0?c:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pa extends pr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const i=e/2,s=t/2,a=Math.floor(r),c=Math.floor(o),l=a+1,d=c+1,u=e/a,f=t/c,h=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const w=p*f-s;for(let S=0;S<l;S++){const x=S*u-i;g.push(x,-w,0),v.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const S=w+l*p,x=w+l*(p+1),L=w+1+l*(p+1),D=w+1+l*p;h.push(S,x,D),h.push(x,L,D)}this.setIndex(h),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class nd extends pr{constructor(e=.5,t=1,r=32,o=1,i=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:i,thetaLength:s},r=Math.max(3,r),o=Math.max(1,o);const a=[],c=[],l=[],d=[];let u=e;const f=(t-e)/o,h=new V,g=new ze;for(let v=0;v<=o;v++){for(let m=0;m<=r;m++){const p=i+m/r*s;h.x=u*Math.cos(p),h.y=u*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,d.push(g.x,g.y)}u+=f}for(let v=0;v<o;v++){const m=v*(r+1);for(let p=0;p<r;p++){const w=p+m,S=w,x=w+r+1,L=w+r+2,D=w+1;a.push(S,x,D),a.push(x,L,D)}}this.setIndex(a),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(l,3)),this.setAttribute("uv",new dn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qs extends pr{constructor(e=1,t=32,r=16,o=0,i=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:i,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const c=Math.min(s+a,Math.PI);let l=0;const d=[],u=new V,f=new V,h=[],g=[],v=[],m=[];for(let p=0;p<=r;p++){const w=[],S=p/r;let x=0;p===0&&s===0?x=.5/t:p===r&&c===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const D=L/t;u.x=-e*Math.cos(o+D*i)*Math.sin(s+S*a),u.y=e*Math.cos(s+S*a),u.z=e*Math.sin(o+D*i)*Math.sin(s+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(D+x,1-S),w.push(l++)}d.push(w)}for(let p=0;p<r;p++)for(let w=0;w<t;w++){const S=d[p][w+1],x=d[p][w],L=d[p+1][w],D=d[p+1][w+1];(p!==0||s>0)&&h.push(S,x,D),(p!==r-1||c<Math.PI)&&h.push(x,L,D)}this.setIndex(h),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uu extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sp,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class u_ extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f_ extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ou={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class h_{constructor(e,t,r){const o=this;let i=!1,s=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(d){a++,i===!1&&o.onStart!==void 0&&o.onStart(d,s,a),i=!0},this.itemEnd=function(d){s++,o.onProgress!==void 0&&o.onProgress(d,s,a),s===a&&(i=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(d){o.onError!==void 0&&o.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=l.length;u<f;u+=2){const h=l[u],g=l[u+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null}}}const p_=new h_;class rd{constructor(e){this.manager=e!==void 0?e:p_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,i){r.load(e,o,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rd.DEFAULT_MATERIAL_NAME="__DEFAULT";class m_ extends rd{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=Ou.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const a=Vi("img");function c(){d(),Ou.add(e,this),t&&t(this),i.manager.itemEnd(e)}function l(u){d(),o&&o(u),i.manager.itemError(e),i.manager.itemEnd(e)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),i.manager.itemStart(e),a.src=e,a}}class g_ extends rd{constructor(e){super(e)}load(e,t,r,o){const i=new Yt,s=new m_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){i.image=a,i.needsUpdate=!0,t!==void 0&&t(i)},r,o),i}}class Ip extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const tc=new bt,Nu=new V,Bu=new V;class b_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new td,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fu=new bt,fi=new V,nc=new V;class v_ extends b_{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),fi.setFromMatrixPosition(e.matrixWorld),r.position.copy(fi),nc.copy(r.position),nc.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(nc),r.updateMatrixWorld(),o.makeTranslation(-fi.x,-fi.y,-fi.z),Fu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}}class __ extends Ip{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new v_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class x_ extends Dp{constructor(e=-1,t=1,r=1,o=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let i=r-e,s=r+e,a=o+t,c=o-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,s=i+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(i,s,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class y_ extends Ip{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class S_ extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class M_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zu(){return performance.now()}const Hu=new bt;class E_{constructor(e,t,r=0,o=1/0){this.ray=new Jl(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hu),this}intersectObject(e,t=!0,r=[]){return fl(e,this,r,t),r.sort(Vu),r}intersectObjects(e,t=!0,r=[]){for(let o=0,i=e.length;o<i;o++)fl(e[o],this,r,t);return r.sort(Vu),r}}function Vu(n,e){return n.distance-e.distance}function fl(n,e,t,r){let o=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const i=n.children;for(let s=0,a=i.length;s<a;s++)fl(i[s],e,t,!0)}}class Gu{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class w_ extends io{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Wu(n,e,t,r){const o=T_(r);switch(t){case mp:return n*e;case bp:return n*e;case vp:return n*e*2;case _p:return n*e/o.components*o.byteLength;case jl:return n*e/o.components*o.byteLength;case xp:return n*e*2/o.components*o.byteLength;case Yl:return n*e*2/o.components*o.byteLength;case gp:return n*e*3/o.components*o.byteLength;case An:return n*e*4/o.components*o.byteLength;case ql:return n*e*4/o.components*o.byteLength;case Ns:case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fs:case zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hc:case Gc:return Math.max(n,16)*Math.max(e,8)/4;case zc:case Vc:return Math.max(n,8)*Math.max(e,8)/2;case Wc:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hs:case al:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yp:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T_(n){switch(n){case ur:case fp:return{byteLength:1,components:1};case zi:case hp:case ts:return{byteLength:2,components:1};case $l:case Xl:return{byteLength:2,components:4};case to:case Wl:case ir:return{byteLength:4,components:1};case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Up(){let n=null,e=!1,t=null,r=null;function o(i,s){t(i,s),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){n=i}}}function C_(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,d),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function r(a,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,d);else{u.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<u.length;h++){const g=u[f],v=u[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let h=0,g=u.length;h<g;h++){const v=u[h];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function i(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,a,c),l.version=a.version}}return{get:o,remove:i,update:s}}var A_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R_=`#ifdef USE_ALPHAHASH
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
#endif`,P_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I_=`#ifdef USE_AOMAP
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
#endif`,U_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O_=`#ifdef USE_BATCHING
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
#endif`,N_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H_=`#ifdef USE_IRIDESCENCE
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
#endif`,V_=`#ifdef USE_BUMPMAP
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
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Z_=`#define PI 3.141592653589793
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
} // validated`,J_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q_=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
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
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
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
#endif`,Tx=`struct PhysicalMaterial {
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
}`,Cx=`
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
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
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
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
#endif`,Zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fy=`float getShadowMask() {
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
}`,hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,py=`#ifdef USE_SKINNING
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
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,by=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yy=`#ifdef USE_TRANSMISSION
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
#endif`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ay=`uniform sampler2D t2D;
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`#include <common>
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
}`,Iy=`#if DEPTH_PACKING == 3200
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
}`,Uy=`#define DISTANCE
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
}`,Oy=`#define DISTANCE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,By=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`uniform float scale;
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
}`,zy=`uniform vec3 diffuse;
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
}`,Hy=`#include <common>
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Gy=`#define LAMBERT
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
}`,Wy=`#define LAMBERT
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
}`,$y=`#define MATCAP
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
}`,Xy=`#define MATCAP
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
}`,jy=`#define NORMAL
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
}`,Yy=`#define NORMAL
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
}`,qy=`#define PHONG
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
}`,Ky=`#define PHONG
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
}`,Zy=`#define STANDARD
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
}`,Jy=`#define STANDARD
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
}`,Qy=`#define TOON
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
}`,eS=`#define TOON
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
}`,tS=`uniform float size;
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
}`,nS=`uniform vec3 diffuse;
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
}`,rS=`#include <common>
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
}`,oS=`uniform vec3 color;
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
}`,iS=`uniform float rotation;
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
}`,sS=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:A_,alphahash_pars_fragment:R_,alphamap_fragment:P_,alphamap_pars_fragment:D_,alphatest_fragment:L_,alphatest_pars_fragment:k_,aomap_fragment:I_,aomap_pars_fragment:U_,batching_pars_vertex:O_,batching_vertex:N_,begin_vertex:B_,beginnormal_vertex:F_,bsdfs:z_,iridescence_fragment:H_,bumpmap_pars_fragment:V_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:W_,clipping_planes_pars_vertex:$_,clipping_planes_vertex:X_,color_fragment:j_,color_pars_fragment:Y_,color_pars_vertex:q_,color_vertex:K_,common:Z_,cube_uv_reflection_fragment:J_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:ex,displacementmap_vertex:tx,emissivemap_fragment:nx,emissivemap_pars_fragment:rx,colorspace_fragment:ox,colorspace_pars_fragment:ix,envmap_fragment:sx,envmap_common_pars_fragment:ax,envmap_pars_fragment:cx,envmap_pars_vertex:lx,envmap_physical_pars_fragment:xx,envmap_vertex:dx,fog_vertex:ux,fog_pars_vertex:fx,fog_fragment:hx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:bx,lights_lambert_pars_fragment:vx,lights_pars_begin:_x,lights_toon_fragment:yx,lights_toon_pars_fragment:Sx,lights_phong_fragment:Mx,lights_phong_pars_fragment:Ex,lights_physical_fragment:wx,lights_physical_pars_fragment:Tx,lights_fragment_begin:Cx,lights_fragment_maps:Ax,lights_fragment_end:Rx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:kx,map_fragment:Ix,map_pars_fragment:Ux,map_particle_fragment:Ox,map_particle_pars_fragment:Nx,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:Fx,morphinstance_vertex:zx,morphcolor_vertex:Hx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Gx,morphtarget_vertex:Wx,normal_fragment_begin:$x,normal_fragment_maps:Xx,normal_pars_fragment:jx,normal_pars_vertex:Yx,normal_vertex:qx,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:Zx,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:ey,opaque_fragment:ty,packing:ny,premultiplied_alpha_fragment:ry,project_vertex:oy,dithering_fragment:iy,dithering_pars_fragment:sy,roughnessmap_fragment:ay,roughnessmap_pars_fragment:cy,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:dy,shadowmap_vertex:uy,shadowmask_pars_fragment:fy,skinbase_vertex:hy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:gy,specularmap_fragment:by,specularmap_pars_fragment:vy,tonemapping_fragment:_y,tonemapping_pars_fragment:xy,transmission_fragment:yy,transmission_pars_fragment:Sy,uv_pars_fragment:My,uv_pars_vertex:Ey,uv_vertex:wy,worldpos_vertex:Ty,background_vert:Cy,background_frag:Ay,backgroundCube_vert:Ry,backgroundCube_frag:Py,cube_vert:Dy,cube_frag:Ly,depth_vert:ky,depth_frag:Iy,distanceRGBA_vert:Uy,distanceRGBA_frag:Oy,equirect_vert:Ny,equirect_frag:By,linedashed_vert:Fy,linedashed_frag:zy,meshbasic_vert:Hy,meshbasic_frag:Vy,meshlambert_vert:Gy,meshlambert_frag:Wy,meshmatcap_vert:$y,meshmatcap_frag:Xy,meshnormal_vert:jy,meshnormal_frag:Yy,meshphong_vert:qy,meshphong_frag:Ky,meshphysical_vert:Zy,meshphysical_frag:Jy,meshtoon_vert:Qy,meshtoon_frag:eS,points_vert:tS,points_frag:nS,shadow_vert:rS,shadow_frag:oS,sprite_vert:iS,sprite_frag:sS},ye={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Nn={basic:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Gt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Gt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Gt([ye.points,ye.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Gt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Gt([ye.common,ye.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Gt([ye.sprite,ye.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Gt([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Gt([ye.lights,ye.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Nn.physical={uniforms:Gt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const As={r:0,b:0,g:0},$r=new Gn,aS=new bt;function cS(n,e,t,r,o,i,s){const a=new Ke(0);let c=i===!0?0:1,l,d,u=null,f=0,h=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function v(S){let x=!1;const L=g(S);L===null?p(a,c):L&&L.isColor&&(p(L,1),x=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const L=g(x);L&&(L.isCubeTexture||L.mapping===ha)?(d===void 0&&(d=new pn(new os(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:Qo(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),$r.copy(x.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(aS.makeRotationFromEuler($r)),d.material.toneMapped=et.getTransfer(L.colorSpace)!==at,(u!==L||f!==L.version||h!==n.toneMapping)&&(d.material.needsUpdate=!0,u=L,f=L.version,h=n.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new pn(new pa(2,2),new Ir({name:"BackgroundMaterial",uniforms:Qo(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=et.getTransfer(L.colorSpace)!==at,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||f!==L.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=L,f=L.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,x){S.getRGB(As,Pp(n)),r.buffers.color.setClear(As.r,As.g,As.b,x,s)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:v,addToRenderList:m,dispose:w}}function lS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=f(null);let i=o,s=!1;function a(E,k,te,W,se){let re=!1;const Y=u(W,te,k);i!==Y&&(i=Y,l(i.object)),re=h(E,W,te,se),re&&g(E,W,te,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(re||s)&&(s=!1,x(E,k,te,W),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function d(E){return n.deleteVertexArray(E)}function u(E,k,te){const W=te.wireframe===!0;let se=r[E.id];se===void 0&&(se={},r[E.id]=se);let re=se[k.id];re===void 0&&(re={},se[k.id]=re);let Y=re[W];return Y===void 0&&(Y=f(c()),re[W]=Y),Y}function f(E){const k=[],te=[],W=[];for(let se=0;se<t;se++)k[se]=0,te[se]=0,W[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:W,object:E,attributes:{},index:null}}function h(E,k,te,W){const se=i.attributes,re=k.attributes;let Y=0;const Z=te.getAttributes();for(const F in Z)if(Z[F].location>=0){const ge=se[F];let _e=re[F];if(_e===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor)),ge===void 0||ge.attribute!==_e||_e&&ge.data!==_e.data)return!0;Y++}return i.attributesNum!==Y||i.index!==W}function g(E,k,te,W){const se={},re=k.attributes;let Y=0;const Z=te.getAttributes();for(const F in Z)if(Z[F].location>=0){let ge=re[F];ge===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor));const _e={};_e.attribute=ge,ge&&ge.data&&(_e.data=ge.data),se[F]=_e,Y++}i.attributes=se,i.attributesNum=Y,i.index=W}function v(){const E=i.newAttributes;for(let k=0,te=E.length;k<te;k++)E[k]=0}function m(E){p(E,0)}function p(E,k){const te=i.newAttributes,W=i.enabledAttributes,se=i.attributeDivisors;te[E]=1,W[E]===0&&(n.enableVertexAttribArray(E),W[E]=1),se[E]!==k&&(n.vertexAttribDivisor(E,k),se[E]=k)}function w(){const E=i.newAttributes,k=i.enabledAttributes;for(let te=0,W=k.length;te<W;te++)k[te]!==E[te]&&(n.disableVertexAttribArray(te),k[te]=0)}function S(E,k,te,W,se,re,Y){Y===!0?n.vertexAttribIPointer(E,k,te,se,re):n.vertexAttribPointer(E,k,te,W,se,re)}function x(E,k,te,W){v();const se=W.attributes,re=te.getAttributes(),Y=k.defaultAttributeValues;for(const Z in re){const F=re[Z];if(F.location>=0){let he=se[Z];if(he===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),he!==void 0){const ge=he.normalized,_e=he.itemSize,Te=e.get(he);if(Te===void 0)continue;const Oe=Te.buffer,Q=Te.type,pe=Te.bytesPerElement,be=Q===n.INT||Q===n.UNSIGNED_INT||he.gpuType===Wl;if(he.isInterleavedBufferAttribute){const I=he.data,oe=I.stride,ie=he.offset;if(I.isInstancedInterleavedBuffer){for(let ue=0;ue<F.locationSize;ue++)p(F.location+ue,I.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ue=0;ue<F.locationSize;ue++)m(F.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ue=0;ue<F.locationSize;ue++)S(F.location+ue,_e/F.locationSize,Q,ge,oe*pe,(ie+_e/F.locationSize*ue)*pe,be)}else{if(he.isInstancedBufferAttribute){for(let I=0;I<F.locationSize;I++)p(F.location+I,he.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let I=0;I<F.locationSize;I++)m(F.location+I);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let I=0;I<F.locationSize;I++)S(F.location+I,_e/F.locationSize,Q,ge,_e*pe,_e/F.locationSize*I*pe,be)}}else if(Y!==void 0){const ge=Y[Z];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(F.location,ge);break;case 3:n.vertexAttrib3fv(F.location,ge);break;case 4:n.vertexAttrib4fv(F.location,ge);break;default:n.vertexAttrib1fv(F.location,ge)}}}}w()}function L(){O();for(const E in r){const k=r[E];for(const te in k){const W=k[te];for(const se in W)d(W[se].object),delete W[se];delete k[te]}delete r[E]}}function D(E){if(r[E.id]===void 0)return;const k=r[E.id];for(const te in k){const W=k[te];for(const se in W)d(W[se].object),delete W[se];delete k[te]}delete r[E.id]}function R(E){for(const k in r){const te=r[k];if(te[E.id]===void 0)continue;const W=te[E.id];for(const se in W)d(W[se].object),delete W[se];delete te[E.id]}}function O(){T(),s=!0,i!==o&&(i=o,l(i.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function dS(n,e,t){let r;function o(l){r=l}function i(l,d){n.drawArrays(r,l,d),t.update(d,r,1)}function s(l,d,u){u!==0&&(n.drawArraysInstanced(r,l,d,u),t.update(d,r,u))}function a(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,d,0,u);let h=0;for(let g=0;g<u;g++)h+=d[g];t.update(h,r,1)}function c(l,d,u,f){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)s(l[g],d[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(r,l,0,d,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*f[v];t.update(g,r,1)}}this.setMode=o,this.render=i,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function uS(n,e,t,r){let o;function i(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function s(R){return!(R!==An&&r.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const O=R===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ur&&r.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ir&&!O)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:L,maxSamples:D}}function fS(n){const e=this;let t=null,r=0,o=!1,i=!1;const s=new wr,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||r!==0||o;return o=f,r=u.length,h},this.beginShadows=function(){i=!0,d(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,h){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!o||g===null||g.length===0||i&&!m)i?d(null):l();else{const w=i?0:r,S=w*4;let x=p.clippingState||null;c.value=x,x=d(g,f,S,h);for(let L=0;L!==S;++L)x[L]=t[L];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function d(u,f,h,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=h+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=h;S!==v;++S,x+=4)s.copy(u[S]).applyMatrix4(w,a),s.normal.toArray(m,x),m[x+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function hS(n){let e=new WeakMap;function t(s,a){return a===Ks?s.mapping=Yo:a===Bc&&(s.mapping=qo),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===Ks||a===Bc)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new a_(c.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",o),t(l.texture,s.mapping)}else return null}}return s}function o(s){const a=s.target;a.removeEventListener("dispose",o);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}const Do=4,$u=[.125,.215,.35,.446,.526,.582],Kr=20,rc=new x_,Xu=new Ke;let oc=null,ic=0,sc=0,ac=!1;const Yr=(1+Math.sqrt(5))/2,Mo=1/Yr,ju=[new V(-Yr,Mo,0),new V(Yr,Mo,0),new V(-Mo,0,Yr),new V(Mo,0,Yr),new V(0,Yr,-Mo),new V(0,Yr,Mo),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){oc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,o,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,ic,sc),this._renderer.xr.enabled=ac,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yo||e.mapping===qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ts,format:An,colorSpace:Jo,depthBuffer:!1},o=qu(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qu(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pS(i)),this._blurMaterial=mS(i,e,t)}return o}_compileMaterial(e){const t=new pn(this._lodPlanes[0],e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,r,o){const a=new cn(90,1,t,r),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Xu),d.toneMapping=Dr,d.autoClear=!1;const h=new ed({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new pn(new os,h);let v=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(Xu),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Rs(o,w*S,p>2?S:0,S,S),d.setRenderTarget(o),v&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Yo||e.mapping===qo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const i=o?this._cubemapMaterial:this._equirectMaterial,s=new pn(this._lodPlanes[0],i),a=i.uniforms;a.envMap.value=e;const c=this._cubeSize;Rs(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(s,rc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let i=1;i<o;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ju[(o-i-1)%ju.length];this._blur(e,i-1,i,s,a)}t.autoClear=r}_blur(e,t,r,o,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,o,"latitudinal",i),this._halfBlur(s,e,r,r,o,"longitudinal",i)}_halfBlur(e,t,r,o,i,s,a){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new pn(this._lodPlanes[o],l),f=l.uniforms,h=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*h):2*Math.PI/(2*Kr-1),v=i/g,m=isFinite(i)?1+Math.floor(d*v):Kr;m>Kr&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);const p=[];let w=0;for(let R=0;R<Kr;++R){const O=R/v,T=Math.exp(-O*O/2);p.push(T),R===0?w+=T:R<m&&(w+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-r;const x=this._sizeLods[o],L=3*x*(o>S-Do?o-S+Do:0),D=4*(this._cubeSize-x);Rs(t,L,D,3*x,2*x),c.setRenderTarget(t),c.render(u,rc)}}function pS(n){const e=[],t=[],r=[];let o=n;const i=n-Do+1+$u.length;for(let s=0;s<i;s++){const a=Math.pow(2,o);t.push(a);let c=1/a;s>n-Do?c=$u[s-n+Do-1]:s===0&&(c=0),r.push(c);const l=1/(a-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],h=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*h),S=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let D=0;D<h;D++){const R=D%3*2/3-1,O=D>2?0:-1,T=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];w.set(T,v*g*D),S.set(f,m*g*D);const E=[D,D,D,D,D,D];x.set(E,p*g*D)}const L=new pr;L.setAttribute("position",new Hn(w,v)),L.setAttribute("uv",new Hn(S,m)),L.setAttribute("faceIndex",new Hn(x,p)),e.push(L),o>Do&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function qu(n,e,t){const r=new no(n,e,t);return r.texture.mapping=ha,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rs(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function mS(n,e,t){const r=new Float32Array(Kr),o=new V(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:od(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Ku(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Zu(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function od(){return`

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
	`}function gS(n){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ks||c===Bc,d=c===Yo||c===qo;if(l||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Yu(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const h=a.image;return l&&h&&h.height>0||d&&h&&o(h)?(t===null&&(t=new Yu(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",i),u.texture):null}}}return a}function o(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function i(a){const c=a.target;c.removeEventListener("dispose",i);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function bS(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Co("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function vS(n,e,t,r){const o={},i=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete o[f.id];const h=i.get(f);h&&(e.remove(h),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return o[f.id]===!0||(f.addEventListener("dispose",s),o[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(u){const f=[],h=u.index,g=u.attributes.position;let v=0;if(h!==null){const w=h.array;v=h.version;for(let S=0,x=w.length;S<x;S+=3){const L=w[S+0],D=w[S+1],R=w[S+2];f.push(L,D,D,R,R,L)}}else if(g!==void 0){const w=g.array;v=g.version;for(let S=0,x=w.length/3-1;S<x;S+=3){const L=S+0,D=S+1,R=S+2;f.push(L,D,D,R,R,L)}}else return;const m=new(Ep(f)?Rp:Ap)(f,1);m.version=v;const p=i.get(u);p&&e.remove(p),i.set(u,m)}function d(u){const f=i.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&l(u)}else l(u);return i.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function _S(n,e,t){let r;function o(f){r=f}let i,s;function a(f){i=f.type,s=f.bytesPerElement}function c(f,h){n.drawElements(r,h,i,f*s),t.update(h,r,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(r,h,i,f*s,g),t.update(h,r,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,i,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,r,1)}function u(f,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/s,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(r,h,0,i,f,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*v[w];t.update(p,r,1)}}this.setMode=o,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function xS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(i/3);break;case n.LINES:t.lines+=a*(i/2);break;case n.LINE_STRIP:t.lines+=a*(i-1);break;case n.LINE_LOOP:t.lines+=a*i;break;case n.POINTS:t.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function yS(n,e,t){const r=new WeakMap,o=new dt;function i(s,a,c){const l=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=r.get(a);if(f===void 0||f.count!==u){let E=function(){O.dispose(),r.delete(a),a.removeEventListener("dispose",E)};var h=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*D*4*u),O=new Tp(R,L,D,u);O.type=ir,O.needsUpdate=!0;const T=x*4;for(let k=0;k<u;k++){const te=p[k],W=w[k],se=S[k],re=L*D*4*k;for(let Y=0;Y<te.count;Y++){const Z=Y*T;g===!0&&(o.fromBufferAttribute(te,Y),R[re+Z+0]=o.x,R[re+Z+1]=o.y,R[re+Z+2]=o.z,R[re+Z+3]=0),v===!0&&(o.fromBufferAttribute(W,Y),R[re+Z+4]=o.x,R[re+Z+5]=o.y,R[re+Z+6]=o.z,R[re+Z+7]=0),m===!0&&(o.fromBufferAttribute(se,Y),R[re+Z+8]=o.x,R[re+Z+9]=o.y,R[re+Z+10]=o.z,R[re+Z+11]=se.itemSize===4?o.w:1)}}f={count:u,texture:O,size:new ze(L,D)},r.set(a,f),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:i}}function SS(n,e,t,r){let o=new WeakMap;function i(c){const l=r.render.frame,d=c.geometry,u=e.get(c,d);if(o.get(u)!==l&&(e.update(u),o.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),o.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),o.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;o.get(f)!==l&&(f.update(),o.set(f,l))}return u}function s(){o=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:i,dispose:s}}const Op=new Yt,Ju=new kp(1,1),Np=new Tp,Bp=new $v,Fp=new Lp,Qu=[],ef=[],tf=new Float32Array(16),nf=new Float32Array(9),rf=new Float32Array(4);function ri(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let i=Qu[o];if(i===void 0&&(i=new Float32Array(o),Qu[o]=i),e!==0){r.toArray(i,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(i,a)}return i}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function ma(n,e){let t=ef[e];t===void 0&&(t=new Int32Array(e),ef[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function MS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function wS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function CS(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Tt(t,r))return;rf.set(r),n.uniformMatrix2fv(this.addr,!1,rf),Ct(t,r)}}function AS(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Tt(t,r))return;nf.set(r),n.uniformMatrix3fv(this.addr,!1,nf),Ct(t,r)}}function RS(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Tt(t,r))return;tf.set(r),n.uniformMatrix4fv(this.addr,!1,tf),Ct(t,r)}}function PS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function LS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function kS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function IS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function US(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function NS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function BS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let i;this.type===n.SAMPLER_2D_SHADOW?(Ju.compareFunction=Mp,i=Ju):i=Op,t.setTexture2D(e||i,o)}function FS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Bp,o)}function zS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Fp,o)}function HS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Np,o)}function VS(n){switch(n){case 5126:return MS;case 35664:return ES;case 35665:return wS;case 35666:return TS;case 35674:return CS;case 35675:return AS;case 35676:return RS;case 5124:case 35670:return PS;case 35667:case 35671:return DS;case 35668:case 35672:return LS;case 35669:case 35673:return kS;case 5125:return IS;case 36294:return US;case 36295:return OS;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return FS;case 35680:case 36300:case 36308:case 36293:return zS;case 36289:case 36303:case 36311:case 36292:return HS}}function GS(n,e){n.uniform1fv(this.addr,e)}function WS(n,e){const t=ri(e,this.size,2);n.uniform2fv(this.addr,t)}function $S(n,e){const t=ri(e,this.size,3);n.uniform3fv(this.addr,t)}function XS(n,e){const t=ri(e,this.size,4);n.uniform4fv(this.addr,t)}function jS(n,e){const t=ri(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YS(n,e){const t=ri(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qS(n,e){const t=ri(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KS(n,e){n.uniform1iv(this.addr,e)}function ZS(n,e){n.uniform2iv(this.addr,e)}function JS(n,e){n.uniform3iv(this.addr,e)}function QS(n,e){n.uniform4iv(this.addr,e)}function eM(n,e){n.uniform1uiv(this.addr,e)}function tM(n,e){n.uniform2uiv(this.addr,e)}function nM(n,e){n.uniform3uiv(this.addr,e)}function rM(n,e){n.uniform4uiv(this.addr,e)}function oM(n,e,t){const r=this.cache,o=e.length,i=ma(t,o);Tt(r,i)||(n.uniform1iv(this.addr,i),Ct(r,i));for(let s=0;s!==o;++s)t.setTexture2D(e[s]||Op,i[s])}function iM(n,e,t){const r=this.cache,o=e.length,i=ma(t,o);Tt(r,i)||(n.uniform1iv(this.addr,i),Ct(r,i));for(let s=0;s!==o;++s)t.setTexture3D(e[s]||Bp,i[s])}function sM(n,e,t){const r=this.cache,o=e.length,i=ma(t,o);Tt(r,i)||(n.uniform1iv(this.addr,i),Ct(r,i));for(let s=0;s!==o;++s)t.setTextureCube(e[s]||Fp,i[s])}function aM(n,e,t){const r=this.cache,o=e.length,i=ma(t,o);Tt(r,i)||(n.uniform1iv(this.addr,i),Ct(r,i));for(let s=0;s!==o;++s)t.setTexture2DArray(e[s]||Np,i[s])}function cM(n){switch(n){case 5126:return GS;case 35664:return WS;case 35665:return $S;case 35666:return XS;case 35674:return jS;case 35675:return YS;case 35676:return qS;case 5124:case 35670:return KS;case 35667:case 35671:return ZS;case 35668:case 35672:return JS;case 35669:case 35673:return QS;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return aM}}class lM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=VS(t.type)}}class dM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cM(t.type)}}class uM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let i=0,s=o.length;i!==s;++i){const a=o[i];a.setValue(e,t[a.id],r)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function of(n,e){n.seq.push(e),n.map[e.id]=e}function fM(n,e,t){const r=n.name,o=r.length;for(cc.lastIndex=0;;){const i=cc.exec(r),s=cc.lastIndex;let a=i[1];const c=i[2]==="]",l=i[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===o){of(t,l===void 0?new lM(a,n,e):new dM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new uM(a),of(t,u)),t=u}}}class Gs{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const i=e.getActiveUniform(t,o),s=e.getUniformLocation(t,i.name);fM(i,s,this)}}setValue(e,t,r,o){const i=this.map[t];i!==void 0&&i.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let i=0,s=t.length;i!==s;++i){const a=t[i],c=r[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,i=e.length;o!==i;++o){const s=e[o];s.id in t&&r.push(s)}return r}}function sf(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const hM=37297;let pM=0;function mM(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=o;s<i;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return r.join(`
`)}const af=new $e;function gM(n){et._getMatrix(af,et.workingColorSpace,n);const e=`mat3( ${af.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Zs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cf(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const i=/ERROR: 0:(\d+)/.exec(o);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+o+`

`+mM(n.getShaderSource(e),s)}else return o}function bM(n,e){const t=gM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vM(n,e){let t;switch(e){case nv:t="Linear";break;case rv:t="Reinhard";break;case ov:t="Cineon";break;case iv:t="ACESFilmic";break;case av:t="AgX";break;case cv:t="Neutral";break;case sv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new V;function _M(){et.getLuminanceCoefficients(Ps);const n=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gi).join(`
`)}function yM(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function SM(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const i=n.getActiveAttrib(e,o),s=i.name;let a=1;i.type===n.FLOAT_MAT2&&(a=2),i.type===n.FLOAT_MAT3&&(a=3),i.type===n.FLOAT_MAT4&&(a=4),t[s]={type:i.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function gi(n){return n!==""}function lf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function df(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(n){return n.replace(MM,wM)}const EM=new Map;function wM(n,e){let t=Xe[e];if(t===void 0){const r=EM.get(e);if(r!==void 0)t=Xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return hl(t)}const TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(n){return n.replace(TM,CM)}function CM(n,e,t,r){let o="";for(let i=parseInt(e);i<parseInt(t);i++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return o}function ff(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function AM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ub?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function RM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yo:case qo:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qo:e="ENVMAP_MODE_REFRACTION";break}return e}function DM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dp:e="ENVMAP_BLENDING_MULTIPLY";break;case ev:e="ENVMAP_BLENDING_MIX";break;case tv:e="ENVMAP_BLENDING_ADD";break}return e}function LM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function kM(n,e,t,r){const o=n.getContext(),i=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=AM(t),l=RM(t),d=PM(t),u=DM(t),f=LM(t),h=xM(t),g=yM(i),v=o.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gi).join(`
`),p.length>0&&(p+=`
`)):(m=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),p=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Dr?vM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,bM("linearToOutputTexel",t.outputColorSpace),_M(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gi).join(`
`)),s=hl(s),s=lf(s,t),s=df(s,t),a=hl(a),a=lf(a,t),a=df(a,t),s=uf(s),a=uf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+m+s,x=w+p+a,L=sf(o,o.VERTEX_SHADER,S),D=sf(o,o.FRAGMENT_SHADER,x);o.attachShader(v,L),o.attachShader(v,D),t.index0AttributeName!==void 0?o.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(v,0,"position"),o.linkProgram(v);function R(k){if(n.debug.checkShaderErrors){const te=o.getProgramInfoLog(v).trim(),W=o.getShaderInfoLog(L).trim(),se=o.getShaderInfoLog(D).trim();let re=!0,Y=!0;if(o.getProgramParameter(v,o.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,v,L,D);else{const Z=cf(o,L,"vertex"),F=cf(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(v,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+te+`
`+Z+`
`+F)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(W===""||se==="")&&(Y=!1);Y&&(k.diagnostics={runnable:re,programLog:te,vertexShader:{log:W,prefix:m},fragmentShader:{log:se,prefix:p}})}o.deleteShader(L),o.deleteShader(D),O=new Gs(o,v),T=SM(o,v)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=o.getProgramParameter(v,hM)),E},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=D,this}let IM=0;class UM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(o)===!1&&(s.add(o),o.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new OM(e),t.set(e,r)),r}}class OM{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}}function NM(n,e,t,r,o,i,s){const a=new Ql,c=new UM,l=new Set,d=[],u=o.logarithmicDepthBuffer,f=o.vertexTextures;let h=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,E,k,te,W){const se=te.fog,re=W.geometry,Y=T.isMeshStandardMaterial?te.environment:null,Z=(T.isMeshStandardMaterial?t:e).get(T.envMap||Y),F=Z&&Z.mapping===ha?Z.image.height:null,he=g[T.type];T.precision!==null&&(h=o.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));const ge=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,_e=ge!==void 0?ge.length:0;let Te=0;re.morphAttributes.position!==void 0&&(Te=1),re.morphAttributes.normal!==void 0&&(Te=2),re.morphAttributes.color!==void 0&&(Te=3);let Oe,Q,pe,be;if(he){const st=Nn[he];Oe=st.vertexShader,Q=st.fragmentShader}else Oe=T.vertexShader,Q=T.fragmentShader,c.update(T),pe=c.getVertexShaderID(T),be=c.getFragmentShaderID(T);const I=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),ie=W.isInstancedMesh===!0,ue=W.isBatchedMesh===!0,Pe=!!T.map,C=!!T.matcap,A=!!Z,_=!!T.aoMap,ee=!!T.lightMap,X=!!T.bumpMap,$=!!T.normalMap,J=!!T.displacementMap,ae=!!T.emissiveMap,K=!!T.metalnessMap,y=!!T.roughnessMap,b=T.anisotropy>0,P=T.clearcoat>0,G=T.dispersion>0,B=T.iridescence>0,z=T.sheen>0,ce=T.transmission>0,le=b&&!!T.anisotropyMap,ve=P&&!!T.clearcoatMap,ke=P&&!!T.clearcoatNormalMap,fe=P&&!!T.clearcoatRoughnessMap,Se=B&&!!T.iridescenceMap,De=B&&!!T.iridescenceThicknessMap,Ue=z&&!!T.sheenColorMap,xe=z&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,He=!!T.specularColorMap,ft=!!T.specularIntensityMap,U=ce&&!!T.transmissionMap,Me=ce&&!!T.thicknessMap,ne=!!T.gradientMap,de=!!T.alphaMap,Ce=T.alphaTest>0,we=!!T.alphaHash,We=!!T.extensions;let _t=Dr;T.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_t=n.toneMapping);const kt={shaderID:he,shaderType:T.type,shaderName:T.name,vertexShader:Oe,fragmentShader:Q,defines:T.defines,customVertexShaderID:pe,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:ue,batchingColor:ue&&W._colorsTexture!==null,instancing:ie,instancingColor:ie&&W.instanceColor!==null,instancingMorph:ie&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:I===null?n.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Jo,alphaToCoverage:!!T.alphaToCoverage,map:Pe,matcap:C,envMap:A,envMapMode:A&&Z.mapping,envMapCubeUVHeight:F,aoMap:_,lightMap:ee,bumpMap:X,normalMap:$,displacementMap:f&&J,emissiveMap:ae,normalMapObjectSpace:$&&T.normalMapType===fv,normalMapTangentSpace:$&&T.normalMapType===Sp,metalnessMap:K,roughnessMap:y,anisotropy:b,anisotropyMap:le,clearcoat:P,clearcoatMap:ve,clearcoatNormalMap:ke,clearcoatRoughnessMap:fe,dispersion:G,iridescence:B,iridescenceMap:Se,iridescenceThicknessMap:De,sheen:z,sheenColorMap:Ue,sheenRoughnessMap:xe,specularMap:Ne,specularColorMap:He,specularIntensityMap:ft,transmission:ce,transmissionMap:U,thicknessMap:Me,gradientMap:ne,opaque:T.transparent===!1&&T.blending===Ho&&T.alphaToCoverage===!1,alphaMap:de,alphaTest:Ce,alphaHash:we,combine:T.combine,mapUv:Pe&&v(T.map.channel),aoMapUv:_&&v(T.aoMap.channel),lightMapUv:ee&&v(T.lightMap.channel),bumpMapUv:X&&v(T.bumpMap.channel),normalMapUv:$&&v(T.normalMap.channel),displacementMapUv:J&&v(T.displacementMap.channel),emissiveMapUv:ae&&v(T.emissiveMap.channel),metalnessMapUv:K&&v(T.metalnessMap.channel),roughnessMapUv:y&&v(T.roughnessMap.channel),anisotropyMapUv:le&&v(T.anisotropyMap.channel),clearcoatMapUv:ve&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:ke&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(T.sheenRoughnessMap.channel),specularMapUv:Ne&&v(T.specularMap.channel),specularColorMapUv:He&&v(T.specularColorMap.channel),specularIntensityMapUv:ft&&v(T.specularIntensityMap.channel),transmissionMapUv:U&&v(T.transmissionMap.channel),thicknessMapUv:Me&&v(T.thicknessMap.channel),alphaMapUv:de&&v(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&($||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!re.attributes.uv&&(Pe||de),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:oe,skinning:W.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:Pe&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===at,decodeVideoTextureEmissive:ae&&T.emissiveMap.isVideoTexture===!0&&et.getTransfer(T.emissiveMap.colorSpace)===at,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bn,flipSided:T.side===jt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:We&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&T.extensions.multiDraw===!0||ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function p(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)E.push(k),E.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(w(E,T),S(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function w(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function S(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const E=g[T.type];let k;if(E){const te=Nn[E];k=r_.clone(te.uniforms)}else k=T.uniforms;return k}function L(T,E){let k;for(let te=0,W=d.length;te<W;te++){const se=d[te];if(se.cacheKey===E){k=se,++k.usedTimes;break}}return k===void 0&&(k=new kM(n,E,T,i),d.push(k)),k}function D(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function R(T){c.remove(T)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:D,releaseShaderCache:R,programs:d,dispose:O}}function BM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function r(s){n.delete(s)}function o(s,a,c){n.get(s)[a]=c}function i(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:i}}function FM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pf(){const n=[];let e=0;const t=[],r=[],o=[];function i(){e=0,t.length=0,r.length=0,o.length=0}function s(u,f,h,g,v,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:h,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,f,h,g,v,m){const p=s(u,f,h,g,v,m);h.transmission>0?r.push(p):h.transparent===!0?o.push(p):t.push(p)}function c(u,f,h,g,v,m){const p=s(u,f,h,g,v,m);h.transmission>0?r.unshift(p):h.transparent===!0?o.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||FM),r.length>1&&r.sort(f||hf),o.length>1&&o.sort(f||hf)}function d(){for(let u=e,f=n.length;u<f;u++){const h=n[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:r,transparent:o,init:i,push:a,unshift:c,finish:d,sort:l}}function zM(){let n=new WeakMap;function e(r,o){const i=n.get(r);let s;return i===void 0?(s=new pf,n.set(r,[s])):o>=i.length?(s=new pf,i.push(s)):s=i[o],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function HM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ke};break;case"SpotLight":t={position:new V,direction:new V,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function VM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let GM=0;function WM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $M(n){const e=new HM,t=VM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new V);const o=new V,i=new bt,s=new bt;function a(l){let d=0,u=0,f=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,w=0,S=0,x=0,L=0,D=0,R=0;l.sort(WM);for(let T=0,E=l.length;T<E;T++){const k=l[T],te=k.color,W=k.intensity,se=k.distance,re=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=te.r*W,u+=te.g*W,f+=te.b*W;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(k.sh.coefficients[Y],W);R++}else if(k.isDirectionalLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,F=t.get(k);F.shadowIntensity=Z.intensity,F.shadowBias=Z.bias,F.shadowNormalBias=Z.normalBias,F.shadowRadius=Z.radius,F.shadowMapSize=Z.mapSize,r.directionalShadow[h]=F,r.directionalShadowMap[h]=re,r.directionalShadowMatrix[h]=k.shadow.matrix,w++}r.directional[h]=Y,h++}else if(k.isSpotLight){const Y=e.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(te).multiplyScalar(W),Y.distance=se,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,r.spot[v]=Y;const Z=k.shadow;if(k.map&&(r.spotLightMap[L]=k.map,L++,Z.updateMatrices(k),k.castShadow&&D++),r.spotLightMatrix[v]=Z.matrix,k.castShadow){const F=t.get(k);F.shadowIntensity=Z.intensity,F.shadowBias=Z.bias,F.shadowNormalBias=Z.normalBias,F.shadowRadius=Z.radius,F.shadowMapSize=Z.mapSize,r.spotShadow[v]=F,r.spotShadowMap[v]=re,x++}v++}else if(k.isRectAreaLight){const Y=e.get(k);Y.color.copy(te).multiplyScalar(W),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),r.rectArea[m]=Y,m++}else if(k.isPointLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){const Z=k.shadow,F=t.get(k);F.shadowIntensity=Z.intensity,F.shadowBias=Z.bias,F.shadowNormalBias=Z.normalBias,F.shadowRadius=Z.radius,F.shadowMapSize=Z.mapSize,F.shadowCameraNear=Z.camera.near,F.shadowCameraFar=Z.camera.far,r.pointShadow[g]=F,r.pointShadowMap[g]=re,r.pointShadowMatrix[g]=k.shadow.matrix,S++}r.point[g]=Y,g++}else if(k.isHemisphereLight){const Y=e.get(k);Y.skyColor.copy(k.color).multiplyScalar(W),Y.groundColor.copy(k.groundColor).multiplyScalar(W),r.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2)),r.ambient[0]=d,r.ambient[1]=u,r.ambient[2]=f;const O=r.hash;(O.directionalLength!==h||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==w||O.numPointShadows!==S||O.numSpotShadows!==x||O.numSpotMaps!==L||O.numLightProbes!==R)&&(r.directional.length=h,r.spot.length=v,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=x+L-D,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=R,O.directionalLength=h,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=w,O.numPointShadows=S,O.numSpotShadows=x,O.numSpotMaps=L,O.numLightProbes=R,r.version=GM++)}function c(l,d){let u=0,f=0,h=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const S=l[p];if(S.isDirectionalLight){const x=r.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(o),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=r.spot[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(o),x.direction.transformDirection(m),h++}else if(S.isRectAreaLight){const x=r.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),s.identity(),i.copy(S.matrixWorld),i.premultiply(m),s.extractRotation(i),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){const x=r.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=r.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:r}}function mf(n){const e=new $M(n),t=[],r=[];function o(d){l.camera=d,t.length=0,r.length=0}function i(d){t.push(d)}function s(d){r.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:l,setupLights:a,setupLightsView:c,pushLight:i,pushShadow:s}}function XM(n){let e=new WeakMap;function t(o,i=0){const s=e.get(o);let a;return s===void 0?(a=new mf(n),e.set(o,[a])):i>=s.length?(a=new mf(n),s.push(a)):a=s[i],a}function r(){e=new WeakMap}return{get:t,dispose:r}}const jM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`;function qM(n,e,t){let r=new td;const o=new ze,i=new ze,s=new dt,a=new u_({depthPacking:uv}),c=new f_,l={},d=t.maxTextureSize,u={[kr]:jt,[jt]:kr,[Bn]:Bn},f=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:jM,fragmentShader:YM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new pr;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lp;let p=this.type;this.render=function(D,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),te=n.state;te.setBlending(Pr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const W=p!==er&&this.type===er,se=p===er&&this.type!==er;for(let re=0,Y=D.length;re<Y;re++){const Z=D[re],F=Z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const he=F.getFrameExtents();if(o.multiply(he),i.copy(F.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(i.x=Math.floor(d/he.x),o.x=i.x*he.x,F.mapSize.x=i.x),o.y>d&&(i.y=Math.floor(d/he.y),o.y=i.y*he.y,F.mapSize.y=i.y)),F.map===null||W===!0||se===!0){const _e=this.type!==er?{minFilter:Dn,magFilter:Dn}:{};F.map!==null&&F.map.dispose(),F.map=new no(o.x,o.y,_e),F.map.texture.name=Z.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const ge=F.getViewportCount();for(let _e=0;_e<ge;_e++){const Te=F.getViewport(_e);s.set(i.x*Te.x,i.y*Te.y,i.x*Te.z,i.y*Te.w),te.viewport(s),F.updateMatrices(Z,_e),r=F.getFrustum(),x(R,O,F.camera,Z,this.type)}F.isPointLightShadow!==!0&&this.type===er&&w(F,O),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,E,k)};function w(D,R){const O=e.update(v);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new no(o.x,o.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(R,null,O,f,v,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(R,null,O,h,v,null)}function S(D,R,O,T){let E=null;const k=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(k!==void 0)E=k;else if(E=O.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const te=E.uuid,W=R.uuid;let se=l[te];se===void 0&&(se={},l[te]=se);let re=se[W];re===void 0&&(re=E.clone(),se[W]=re,R.addEventListener("dispose",L)),E=re}if(E.visible=R.visible,E.wireframe=R.wireframe,T===er?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const te=n.properties.get(E);te.light=O}return E}function x(D,R,O,T,E){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===er)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);const W=e.update(D),se=D.material;if(Array.isArray(se)){const re=W.groups;for(let Y=0,Z=re.length;Y<Z;Y++){const F=re[Y],he=se[F.materialIndex];if(he&&he.visible){const ge=S(D,he,T,E);D.onBeforeShadow(n,D,R,O,W,ge,F),n.renderBufferDirect(O,null,W,ge,D,F),D.onAfterShadow(n,D,R,O,W,ge,F)}}}else if(se.visible){const re=S(D,se,T,E);D.onBeforeShadow(n,D,R,O,W,re,null),n.renderBufferDirect(O,null,W,re,D,null),D.onAfterShadow(n,D,R,O,W,re,null)}}const te=D.children;for(let W=0,se=te.length;W<se;W++)x(te[W],R,O,T,E)}function L(D){D.target.removeEventListener("dispose",L);for(const O in l){const T=l[O],E=D.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const KM={[Dc]:Lc,[kc]:Oc,[Ic]:Nc,[jo]:Uc,[Lc]:Dc,[Oc]:kc,[Nc]:Ic,[Uc]:jo};function ZM(n,e){function t(){let U=!1;const Me=new dt;let ne=null;const de=new dt(0,0,0,0);return{setMask:function(Ce){ne!==Ce&&!U&&(n.colorMask(Ce,Ce,Ce,Ce),ne=Ce)},setLocked:function(Ce){U=Ce},setClear:function(Ce,we,We,_t,kt){kt===!0&&(Ce*=_t,we*=_t,We*=_t),Me.set(Ce,we,We,_t),de.equals(Me)===!1&&(n.clearColor(Ce,we,We,_t),de.copy(Me))},reset:function(){U=!1,ne=null,de.set(-1,0,0,0)}}}function r(){let U=!1,Me=!1,ne=null,de=null,Ce=null;return{setReversed:function(we){if(Me!==we){const We=e.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const _t=Ce;Ce=null,this.setClear(_t)}Me=we},getReversed:function(){return Me},setTest:function(we){we?I(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(we){ne!==we&&!U&&(n.depthMask(we),ne=we)},setFunc:function(we){if(Me&&(we=KM[we]),de!==we){switch(we){case Dc:n.depthFunc(n.NEVER);break;case Lc:n.depthFunc(n.ALWAYS);break;case kc:n.depthFunc(n.LESS);break;case jo:n.depthFunc(n.LEQUAL);break;case Ic:n.depthFunc(n.EQUAL);break;case Uc:n.depthFunc(n.GEQUAL);break;case Oc:n.depthFunc(n.GREATER);break;case Nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=we}},setLocked:function(we){U=we},setClear:function(we){Ce!==we&&(Me&&(we=1-we),n.clearDepth(we),Ce=we)},reset:function(){U=!1,ne=null,de=null,Ce=null,Me=!1}}}function o(){let U=!1,Me=null,ne=null,de=null,Ce=null,we=null,We=null,_t=null,kt=null;return{setTest:function(st){U||(st?I(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(st){Me!==st&&!U&&(n.stencilMask(st),Me=st)},setFunc:function(st,bn,$n){(ne!==st||de!==bn||Ce!==$n)&&(n.stencilFunc(st,bn,$n),ne=st,de=bn,Ce=$n)},setOp:function(st,bn,$n){(we!==st||We!==bn||_t!==$n)&&(n.stencilOp(st,bn,$n),we=st,We=bn,_t=$n)},setLocked:function(st){U=st},setClear:function(st){kt!==st&&(n.clearStencil(st),kt=st)},reset:function(){U=!1,Me=null,ne=null,de=null,Ce=null,we=null,We=null,_t=null,kt=null}}}const i=new t,s=new r,a=new o,c=new WeakMap,l=new WeakMap;let d={},u={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,w=null,S=null,x=null,L=null,D=null,R=new Ke(0,0,0),O=0,T=!1,E=null,k=null,te=null,W=null,se=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(F)[1]),Y=Z>=1):F.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Y=Z>=2);let he=null,ge={};const _e=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Oe=new dt().fromArray(_e),Q=new dt().fromArray(Te);function pe(U,Me,ne,de){const Ce=new Uint8Array(4),we=n.createTexture();n.bindTexture(U,we),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<ne;We++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Me+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return we}const be={};be[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),I(n.DEPTH_TEST),s.setFunc(jo),X(!1),$(du),I(n.CULL_FACE),_(Pr);function I(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function oe(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function ie(U,Me){return u[U]!==Me?(n.bindFramebuffer(U,Me),u[U]=Me,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Me),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ue(U,Me){let ne=h,de=!1;if(U){ne=f.get(Me),ne===void 0&&(ne=[],f.set(Me,ne));const Ce=U.textures;if(ne.length!==Ce.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let we=0,We=Ce.length;we<We;we++)ne[we]=n.COLOR_ATTACHMENT0+we;ne.length=Ce.length,de=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,de=!0);de&&n.drawBuffers(ne)}function Pe(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const C={[qr]:n.FUNC_ADD,[Nb]:n.FUNC_SUBTRACT,[Bb]:n.FUNC_REVERSE_SUBTRACT};C[Fb]=n.MIN,C[zb]=n.MAX;const A={[Hb]:n.ZERO,[Vb]:n.ONE,[Gb]:n.SRC_COLOR,[Rc]:n.SRC_ALPHA,[qb]:n.SRC_ALPHA_SATURATE,[jb]:n.DST_COLOR,[$b]:n.DST_ALPHA,[Wb]:n.ONE_MINUS_SRC_COLOR,[Pc]:n.ONE_MINUS_SRC_ALPHA,[Yb]:n.ONE_MINUS_DST_COLOR,[Xb]:n.ONE_MINUS_DST_ALPHA,[Kb]:n.CONSTANT_COLOR,[Zb]:n.ONE_MINUS_CONSTANT_COLOR,[Jb]:n.CONSTANT_ALPHA,[Qb]:n.ONE_MINUS_CONSTANT_ALPHA};function _(U,Me,ne,de,Ce,we,We,_t,kt,st){if(U===Pr){v===!0&&(oe(n.BLEND),v=!1);return}if(v===!1&&(I(n.BLEND),v=!0),U!==Ob){if(U!==m||st!==T){if((p!==qr||x!==qr)&&(n.blendEquation(n.FUNC_ADD),p=qr,x=qr),st)switch(U){case Ho:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uu:n.blendFunc(n.ONE,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ho:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,S=null,L=null,D=null,R.set(0,0,0),O=0,m=U,T=st}return}Ce=Ce||Me,we=we||ne,We=We||de,(Me!==p||Ce!==x)&&(n.blendEquationSeparate(C[Me],C[Ce]),p=Me,x=Ce),(ne!==w||de!==S||we!==L||We!==D)&&(n.blendFuncSeparate(A[ne],A[de],A[we],A[We]),w=ne,S=de,L=we,D=We),(_t.equals(R)===!1||kt!==O)&&(n.blendColor(_t.r,_t.g,_t.b,kt),R.copy(_t),O=kt),m=U,T=!1}function ee(U,Me){U.side===Bn?oe(n.CULL_FACE):I(n.CULL_FACE);let ne=U.side===jt;Me&&(ne=!ne),X(ne),U.blending===Ho&&U.transparent===!1?_(Pr):_(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const de=U.stencilWrite;a.setTest(de),de&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?I(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function $(U){U!==kb?(I(n.CULL_FACE),U!==k&&(U===du?n.cullFace(n.BACK):U===Ib?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),k=U}function J(U){U!==te&&(Y&&n.lineWidth(U),te=U)}function ae(U,Me,ne){U?(I(n.POLYGON_OFFSET_FILL),(W!==Me||se!==ne)&&(n.polygonOffset(Me,ne),W=Me,se=ne)):oe(n.POLYGON_OFFSET_FILL)}function K(U){U?I(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function y(U){U===void 0&&(U=n.TEXTURE0+re-1),he!==U&&(n.activeTexture(U),he=U)}function b(U,Me,ne){ne===void 0&&(he===null?ne=n.TEXTURE0+re-1:ne=he);let de=ge[ne];de===void 0&&(de={type:void 0,texture:void 0},ge[ne]=de),(de.type!==U||de.texture!==Me)&&(he!==ne&&(n.activeTexture(ne),he=ne),n.bindTexture(U,Me||be[U]),de.type=U,de.texture=Me)}function P(){const U=ge[he];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(U){Oe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Oe.copy(U))}function xe(U){Q.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function Ne(U,Me){let ne=l.get(Me);ne===void 0&&(ne=new WeakMap,l.set(Me,ne));let de=ne.get(U);de===void 0&&(de=n.getUniformBlockIndex(Me,U.name),ne.set(U,de))}function He(U,Me){const de=l.get(Me).get(U);c.get(Me)!==de&&(n.uniformBlockBinding(Me,de,U.__bindingPointIndex),c.set(Me,de))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},he=null,ge={},u={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,w=null,S=null,x=null,L=null,D=null,R=new Ke(0,0,0),O=0,T=!1,E=null,k=null,te=null,W=null,se=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:I,disable:oe,bindFramebuffer:ie,drawBuffers:ue,useProgram:Pe,setBlending:_,setMaterial:ee,setFlipSided:X,setCullFace:$,setLineWidth:J,setPolygonOffset:ae,setScissorTest:K,activeTexture:y,bindTexture:b,unbindTexture:P,compressedTexImage2D:G,compressedTexImage3D:B,texImage2D:Se,texImage3D:De,updateUBOMapping:Ne,uniformBlockBinding:He,texStorage2D:ke,texStorage3D:fe,texSubImage2D:z,texSubImage3D:ce,compressedTexSubImage2D:le,compressedTexSubImage3D:ve,scissor:Ue,viewport:xe,reset:ft}}function JM(n,e,t,r,o,i,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,d=new WeakMap;let u;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,b){return h?new OffscreenCanvas(y,b):Vi("canvas")}function v(y,b,P){let G=1;const B=K(y);if((B.width>P||B.height>P)&&(G=P/Math.max(B.width,B.height)),G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const z=Math.floor(G*B.width),ce=Math.floor(G*B.height);u===void 0&&(u=g(z,ce));const le=b?g(z,ce):u;return le.width=z,le.height=ce,le.getContext("2d").drawImage(y,0,0,z,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+z+"x"+ce+")."),le}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){n.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(y,b,P,G,B=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let z=b;if(b===n.RED&&(P===n.FLOAT&&(z=n.R32F),P===n.HALF_FLOAT&&(z=n.R16F),P===n.UNSIGNED_BYTE&&(z=n.R8)),b===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(z=n.R8UI),P===n.UNSIGNED_SHORT&&(z=n.R16UI),P===n.UNSIGNED_INT&&(z=n.R32UI),P===n.BYTE&&(z=n.R8I),P===n.SHORT&&(z=n.R16I),P===n.INT&&(z=n.R32I)),b===n.RG&&(P===n.FLOAT&&(z=n.RG32F),P===n.HALF_FLOAT&&(z=n.RG16F),P===n.UNSIGNED_BYTE&&(z=n.RG8)),b===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(z=n.RG8UI),P===n.UNSIGNED_SHORT&&(z=n.RG16UI),P===n.UNSIGNED_INT&&(z=n.RG32UI),P===n.BYTE&&(z=n.RG8I),P===n.SHORT&&(z=n.RG16I),P===n.INT&&(z=n.RG32I)),b===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(z=n.RGB8UI),P===n.UNSIGNED_SHORT&&(z=n.RGB16UI),P===n.UNSIGNED_INT&&(z=n.RGB32UI),P===n.BYTE&&(z=n.RGB8I),P===n.SHORT&&(z=n.RGB16I),P===n.INT&&(z=n.RGB32I)),b===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),P===n.UNSIGNED_INT&&(z=n.RGBA32UI),P===n.BYTE&&(z=n.RGBA8I),P===n.SHORT&&(z=n.RGBA16I),P===n.INT&&(z=n.RGBA32I)),b===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),b===n.RGBA){const ce=B?Zs:et.getTransfer(G);P===n.FLOAT&&(z=n.RGBA32F),P===n.HALF_FLOAT&&(z=n.RGBA16F),P===n.UNSIGNED_BYTE&&(z=ce===at?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function x(y,b){let P;return y?b===null||b===to||b===Ko?P=n.DEPTH24_STENCIL8:b===ir?P=n.DEPTH32F_STENCIL8:b===zi&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===to||b===Ko?P=n.DEPTH_COMPONENT24:b===ir?P=n.DEPTH_COMPONENT32F:b===zi&&(P=n.DEPTH_COMPONENT16),P}function L(y,b){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Dn&&y.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?b.mipmaps.length:1}function D(y){const b=y.target;b.removeEventListener("dispose",D),O(b),b.isVideoTexture&&d.delete(b)}function R(y){const b=y.target;b.removeEventListener("dispose",R),E(b)}function O(y){const b=r.get(y);if(b.__webglInit===void 0)return;const P=y.source,G=f.get(P);if(G){const B=G[b.__cacheKey];B.usedTimes--,B.usedTimes===0&&T(y),Object.keys(G).length===0&&f.delete(P)}r.remove(y)}function T(y){const b=r.get(y);n.deleteTexture(b.__webglTexture);const P=y.source,G=f.get(P);delete G[b.__cacheKey],s.memory.textures--}function E(y){const b=r.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),r.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(b.__webglFramebuffer[G]))for(let B=0;B<b.__webglFramebuffer[G].length;B++)n.deleteFramebuffer(b.__webglFramebuffer[G][B]);else n.deleteFramebuffer(b.__webglFramebuffer[G]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[G])}else{if(Array.isArray(b.__webglFramebuffer))for(let G=0;G<b.__webglFramebuffer.length;G++)n.deleteFramebuffer(b.__webglFramebuffer[G]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let G=0;G<b.__webglColorRenderbuffer.length;G++)b.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[G]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const P=y.textures;for(let G=0,B=P.length;G<B;G++){const z=r.get(P[G]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),s.memory.textures--),r.remove(P[G])}r.remove(y)}let k=0;function te(){k=0}function W(){const y=k;return y>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+o.maxTextures),k+=1,y}function se(y){const b=[];return b.push(y.wrapS),b.push(y.wrapT),b.push(y.wrapR||0),b.push(y.magFilter),b.push(y.minFilter),b.push(y.anisotropy),b.push(y.internalFormat),b.push(y.format),b.push(y.type),b.push(y.generateMipmaps),b.push(y.premultiplyAlpha),b.push(y.flipY),b.push(y.unpackAlignment),b.push(y.colorSpace),b.join()}function re(y,b){const P=r.get(y);if(y.isVideoTexture&&J(y),y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){const G=y.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(P,y,b);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+b)}function Y(y,b){const P=r.get(y);if(y.version>0&&P.__version!==y.version){Q(P,y,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+b)}function Z(y,b){const P=r.get(y);if(y.version>0&&P.__version!==y.version){Q(P,y,b);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+b)}function F(y,b){const P=r.get(y);if(y.version>0&&P.__version!==y.version){pe(P,y,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+b)}const he={[Fi]:n.REPEAT,[Zr]:n.CLAMP_TO_EDGE,[Fc]:n.MIRRORED_REPEAT},ge={[Dn]:n.NEAREST,[lv]:n.NEAREST_MIPMAP_NEAREST,[ds]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[Jr]:n.LINEAR_MIPMAP_LINEAR},_e={[hv]:n.NEVER,[_v]:n.ALWAYS,[pv]:n.LESS,[Mp]:n.LEQUAL,[mv]:n.EQUAL,[vv]:n.GEQUAL,[gv]:n.GREATER,[bv]:n.NOTEQUAL};function Te(y,b){if(b.type===ir&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===Ia||b.magFilter===ds||b.magFilter===Jr||b.minFilter===Fn||b.minFilter===Ia||b.minFilter===ds||b.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,he[b.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,he[b.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,he[b.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ge[b.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ge[b.minFilter]),b.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==ds&&b.minFilter!==Jr||b.type===ir&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Oe(y,b){let P=!1;y.__webglInit===void 0&&(y.__webglInit=!0,b.addEventListener("dispose",D));const G=b.source;let B=f.get(G);B===void 0&&(B={},f.set(G,B));const z=se(b);if(z!==y.__cacheKey){B[z]===void 0&&(B[z]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,P=!0),B[z].usedTimes++;const ce=B[y.__cacheKey];ce!==void 0&&(B[y.__cacheKey].usedTimes--,ce.usedTimes===0&&T(b)),y.__cacheKey=z,y.__webglTexture=B[z].texture}return P}function Q(y,b,P){let G=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(G=n.TEXTURE_3D);const B=Oe(y,b),z=b.source;t.bindTexture(G,y.__webglTexture,n.TEXTURE0+P);const ce=r.get(z);if(z.version!==ce.__version||B===!0){t.activeTexture(n.TEXTURE0+P);const le=et.getPrimaries(et.workingColorSpace),ve=b.colorSpace===Tr?null:et.getPrimaries(b.colorSpace),ke=b.colorSpace===Tr||le===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let fe=v(b.image,!1,o.maxTextureSize);fe=ae(b,fe);const Se=i.convert(b.format,b.colorSpace),De=i.convert(b.type);let Ue=S(b.internalFormat,Se,De,b.colorSpace,b.isVideoTexture);Te(G,b);let xe;const Ne=b.mipmaps,He=b.isVideoTexture!==!0,ft=ce.__version===void 0||B===!0,U=z.dataReady,Me=L(b,fe);if(b.isDepthTexture)Ue=x(b.format===Zo,b.type),ft&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ue,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ue,fe.width,fe.height,0,Se,De,null));else if(b.isDataTexture)if(Ne.length>0){He&&ft&&t.texStorage2D(n.TEXTURE_2D,Me,Ue,Ne[0].width,Ne[0].height);for(let ne=0,de=Ne.length;ne<de;ne++)xe=Ne[ne],He?U&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,xe.width,xe.height,Se,De,xe.data):t.texImage2D(n.TEXTURE_2D,ne,Ue,xe.width,xe.height,0,Se,De,xe.data);b.generateMipmaps=!1}else He?(ft&&t.texStorage2D(n.TEXTURE_2D,Me,Ue,fe.width,fe.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Se,De,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,fe.width,fe.height,0,Se,De,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){He&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ue,Ne[0].width,Ne[0].height,fe.depth);for(let ne=0,de=Ne.length;ne<de;ne++)if(xe=Ne[ne],b.format!==An)if(Se!==null)if(He){if(U)if(b.layerUpdates.size>0){const Ce=Wu(xe.width,xe.height,b.format,b.type);for(const we of b.layerUpdates){const We=xe.data.subarray(we*Ce/xe.data.BYTES_PER_ELEMENT,(we+1)*Ce/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,we,xe.width,xe.height,1,Se,We)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,xe.width,xe.height,fe.depth,Se,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Ue,xe.width,xe.height,fe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,xe.width,xe.height,fe.depth,Se,De,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Ue,xe.width,xe.height,fe.depth,0,Se,De,xe.data)}else{He&&ft&&t.texStorage2D(n.TEXTURE_2D,Me,Ue,Ne[0].width,Ne[0].height);for(let ne=0,de=Ne.length;ne<de;ne++)xe=Ne[ne],b.format!==An?Se!==null?He?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Ue,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,xe.width,xe.height,Se,De,xe.data):t.texImage2D(n.TEXTURE_2D,ne,Ue,xe.width,xe.height,0,Se,De,xe.data)}else if(b.isDataArrayTexture)if(He){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ue,fe.width,fe.height,fe.depth),U)if(b.layerUpdates.size>0){const ne=Wu(fe.width,fe.height,b.format,b.type);for(const de of b.layerUpdates){const Ce=fe.data.subarray(de*ne/fe.data.BYTES_PER_ELEMENT,(de+1)*ne/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,fe.width,fe.height,1,Se,De,Ce)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Se,De,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,fe.width,fe.height,fe.depth,0,Se,De,fe.data);else if(b.isData3DTexture)He?(ft&&t.texStorage3D(n.TEXTURE_3D,Me,Ue,fe.width,fe.height,fe.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Se,De,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,fe.width,fe.height,fe.depth,0,Se,De,fe.data);else if(b.isFramebufferTexture){if(ft)if(He)t.texStorage2D(n.TEXTURE_2D,Me,Ue,fe.width,fe.height);else{let ne=fe.width,de=fe.height;for(let Ce=0;Ce<Me;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Ue,ne,de,0,Se,De,null),ne>>=1,de>>=1}}else if(Ne.length>0){if(He&&ft){const ne=K(Ne[0]);t.texStorage2D(n.TEXTURE_2D,Me,Ue,ne.width,ne.height)}for(let ne=0,de=Ne.length;ne<de;ne++)xe=Ne[ne],He?U&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Se,De,xe):t.texImage2D(n.TEXTURE_2D,ne,Ue,Se,De,xe);b.generateMipmaps=!1}else if(He){if(ft){const ne=K(fe);t.texStorage2D(n.TEXTURE_2D,Me,Ue,ne.width,ne.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,De,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Se,De,fe);m(b)&&p(G),ce.__version=z.version,b.onUpdate&&b.onUpdate(b)}y.__version=b.version}function pe(y,b,P){if(b.image.length!==6)return;const G=Oe(y,b),B=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+P);const z=r.get(B);if(B.version!==z.__version||G===!0){t.activeTexture(n.TEXTURE0+P);const ce=et.getPrimaries(et.workingColorSpace),le=b.colorSpace===Tr?null:et.getPrimaries(b.colorSpace),ve=b.colorSpace===Tr||ce===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ke=b.isCompressedTexture||b.image[0].isCompressedTexture,fe=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let de=0;de<6;de++)!ke&&!fe?Se[de]=v(b.image[de],!0,o.maxCubemapSize):Se[de]=fe?b.image[de].image:b.image[de],Se[de]=ae(b,Se[de]);const De=Se[0],Ue=i.convert(b.format,b.colorSpace),xe=i.convert(b.type),Ne=S(b.internalFormat,Ue,xe,b.colorSpace),He=b.isVideoTexture!==!0,ft=z.__version===void 0||G===!0,U=B.dataReady;let Me=L(b,De);Te(n.TEXTURE_CUBE_MAP,b);let ne;if(ke){He&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ne,De.width,De.height);for(let de=0;de<6;de++){ne=Se[de].mipmaps;for(let Ce=0;Ce<ne.length;Ce++){const we=ne[Ce];b.format!==An?Ue!==null?He?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,we.width,we.height,Ue,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,Ne,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,we.width,we.height,Ue,xe,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,Ne,we.width,we.height,0,Ue,xe,we.data)}}}else{if(ne=b.mipmaps,He&&ft){ne.length>0&&Me++;const de=K(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ne,de.width,de.height)}for(let de=0;de<6;de++)if(fe){He?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Se[de].width,Se[de].height,Ue,xe,Se[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ne,Se[de].width,Se[de].height,0,Ue,xe,Se[de].data);for(let Ce=0;Ce<ne.length;Ce++){const We=ne[Ce].image[de].image;He?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,We.width,We.height,Ue,xe,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,Ne,We.width,We.height,0,Ue,xe,We.data)}}else{He?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ue,xe,Se[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ne,Ue,xe,Se[de]);for(let Ce=0;Ce<ne.length;Ce++){const we=ne[Ce];He?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,Ue,xe,we.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,Ne,Ue,xe,we.image[de])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),z.__version=B.version,b.onUpdate&&b.onUpdate(b)}y.__version=b.version}function be(y,b,P,G,B,z){const ce=i.convert(P.format,P.colorSpace),le=i.convert(P.type),ve=S(P.internalFormat,ce,le,P.colorSpace),ke=r.get(b),fe=r.get(P);if(fe.__renderTarget=b,!ke.__hasExternalTextures){const Se=Math.max(1,b.width>>z),De=Math.max(1,b.height>>z);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?t.texImage3D(B,z,ve,Se,De,b.depth,0,ce,le,null):t.texImage2D(B,z,ve,Se,De,0,ce,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),$(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,B,fe.__webglTexture,0,X(b)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,B,fe.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(y,b,P){if(n.bindRenderbuffer(n.RENDERBUFFER,y),b.depthBuffer){const G=b.depthTexture,B=G&&G.isDepthTexture?G.type:null,z=x(b.stencilBuffer,B),ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=X(b);$(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,z,b.width,b.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,z,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,z,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,y)}else{const G=b.textures;for(let B=0;B<G.length;B++){const z=G[B],ce=i.convert(z.format,z.colorSpace),le=i.convert(z.type),ve=S(z.internalFormat,ce,le,z.colorSpace),ke=X(b);P&&$(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ve,b.width,b.height):$(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,ve,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ve,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(y,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=r.get(b.depthTexture);G.__renderTarget=b,(!G.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re(b.depthTexture,0);const B=G.__webglTexture,z=X(b);if(b.depthTexture.format===Vo)$(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0);else if(b.depthTexture.format===Zo)$(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function ie(y){const b=r.get(y),P=y.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==y.depthTexture){const G=y.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),G){const B=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,G.removeEventListener("dispose",B)};G.addEventListener("dispose",B),b.__depthDisposeCallback=B}b.__boundDepthTexture=G}if(y.depthTexture&&!b.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");oe(b.__webglFramebuffer,y)}else if(P){b.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[G]),b.__webglDepthbuffer[G]===void 0)b.__webglDepthbuffer[G]=n.createRenderbuffer(),I(b.__webglDepthbuffer[G],y,!1);else{const B=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=b.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),I(b.__webglDepthbuffer,y,!1);else{const G=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,B)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(y,b,P){const G=r.get(y);b!==void 0&&be(G.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&ie(y)}function Pe(y){const b=y.texture,P=r.get(y),G=r.get(b);y.addEventListener("dispose",R);const B=y.textures,z=y.isWebGLCubeRenderTarget===!0,ce=B.length>1;if(ce||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=b.version,s.memory.textures++),z){P.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){P.__webglFramebuffer[le]=[];for(let ve=0;ve<b.mipmaps.length;ve++)P.__webglFramebuffer[le][ve]=n.createFramebuffer()}else P.__webglFramebuffer[le]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){P.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)P.__webglFramebuffer[le]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ce)for(let le=0,ve=B.length;le<ve;le++){const ke=r.get(B[le]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),s.memory.textures++)}if(y.samples>0&&$(y)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let le=0;le<B.length;le++){const ve=B[le];P.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[le]);const ke=i.convert(ve.format,ve.colorSpace),fe=i.convert(ve.type),Se=S(ve.internalFormat,ke,fe,ve.colorSpace,y.isXRRenderTarget===!0),De=X(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Se,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,P.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),I(P.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Te(n.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)be(P.__webglFramebuffer[le][ve],y,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve);else be(P.__webglFramebuffer[le],y,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let le=0,ve=B.length;le<ve;le++){const ke=B[le],fe=r.get(ke);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Te(n.TEXTURE_2D,ke),be(P.__webglFramebuffer,y,ke,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(le=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,G.__webglTexture),Te(le,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)be(P.__webglFramebuffer[ve],y,b,n.COLOR_ATTACHMENT0,le,ve);else be(P.__webglFramebuffer,y,b,n.COLOR_ATTACHMENT0,le,0);m(b)&&p(le),t.unbindTexture()}y.depthBuffer&&ie(y)}function C(y){const b=y.textures;for(let P=0,G=b.length;P<G;P++){const B=b[P];if(m(B)){const z=w(y),ce=r.get(B).__webglTexture;t.bindTexture(z,ce),p(z),t.unbindTexture()}}}const A=[],_=[];function ee(y){if(y.samples>0){if($(y)===!1){const b=y.textures,P=y.width,G=y.height;let B=n.COLOR_BUFFER_BIT;const z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=r.get(y),le=b.length>1;if(le)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(B|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);const ke=r.get(b[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,P,G,0,0,P,G,B,n.NEAREST),c===!0&&(A.length=0,_.length=0,A.push(n.COLOR_ATTACHMENT0+ve),y.depthBuffer&&y.resolveDepthBuffer===!1&&(A.push(z),_.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);const ke=r.get(b[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const b=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function X(y){return Math.min(o.maxSamples,y.samples)}function $(y){const b=r.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function J(y){const b=s.render.frame;d.get(y)!==b&&(d.set(y,b),y.update())}function ae(y,b){const P=y.colorSpace,G=y.format,B=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||P!==Jo&&P!==Tr&&(et.getTransfer(P)===at?(G!==An||B!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),b}function K(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=te,this.setTexture2D=re,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=F,this.rebindTextures=ue,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=be,this.useMultisampledRTT=$}function QM(n,e){function t(r,o=Tr){let i;const s=et.getTransfer(o);if(r===ur)return n.UNSIGNED_BYTE;if(r===$l)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Xl)return n.UNSIGNED_SHORT_5_5_5_1;if(r===pp)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===fp)return n.BYTE;if(r===hp)return n.SHORT;if(r===zi)return n.UNSIGNED_SHORT;if(r===Wl)return n.INT;if(r===to)return n.UNSIGNED_INT;if(r===ir)return n.FLOAT;if(r===ts)return n.HALF_FLOAT;if(r===mp)return n.ALPHA;if(r===gp)return n.RGB;if(r===An)return n.RGBA;if(r===bp)return n.LUMINANCE;if(r===vp)return n.LUMINANCE_ALPHA;if(r===Vo)return n.DEPTH_COMPONENT;if(r===Zo)return n.DEPTH_STENCIL;if(r===_p)return n.RED;if(r===jl)return n.RED_INTEGER;if(r===xp)return n.RG;if(r===Yl)return n.RG_INTEGER;if(r===ql)return n.RGBA_INTEGER;if(r===Ns||r===Bs||r===Fs||r===zs)if(s===at)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===Ns)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===Ns)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bs)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zs)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zc||r===Hc||r===Vc||r===Gc)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===zc)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hc)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vc)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gc)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wc||r===$c||r===Xc)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===Wc||r===$c)return s===at?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===Xc)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jc||r===Yc||r===qc||r===Kc||r===Zc||r===Jc||r===Qc||r===el||r===tl||r===nl||r===rl||r===ol||r===il||r===sl)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===jc)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yc)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qc)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kc)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zc)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jc)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qc)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===el)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tl)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nl)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rl)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ol)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===il)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sl)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hs||r===al||r===cl)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===Hs)return s===at?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===al)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cl)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yp||r===ll||r===dl||r===ul)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===Hs)return i.COMPRESSED_RED_RGTC1_EXT;if(r===ll)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dl)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ul)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ko?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const eE={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,i=null,s=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&i!==null&&(o=i),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eE)))}return a!==null&&(a.visible=o!==null),c!==null&&(c.visible=i!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Po;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const tE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nE=`
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

}`;class rE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Yt,i=e.properties.get(o);i.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ir({vertexShader:tE,fragmentShader:nE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new pa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oE extends io{constructor(e,t){super();const r=this;let o=null,i=1,s=null,a="local-floor",c=1,l=null,d=null,u=null,f=null,h=null,g=null;const v=new rE,m=t.getContextAttributes();let p=null,w=null;const S=[],x=[],L=new ze;let D=null;const R=new cn;R.viewport=new dt;const O=new cn;O.viewport=new dt;const T=[R,O],E=new S_;let k=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=S[Q];return pe===void 0&&(pe=new lc,S[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=S[Q];return pe===void 0&&(pe=new lc,S[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=S[Q];return pe===void 0&&(pe=new lc,S[Q]=pe),pe.getHandSpace()};function W(Q){const pe=x.indexOf(Q.inputSource);if(pe===-1)return;const be=S[pe];be!==void 0&&(be.update(Q.inputSource,Q.frame,l||s),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function se(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",se),o.removeEventListener("inputsourceschange",re);for(let Q=0;Q<S.length;Q++){const pe=x[Q];pe!==null&&(x[Q]=null,S[Q].disconnect(pe))}k=null,te=null,v.reset(),e.setRenderTarget(p),h=null,f=null,u=null,o=null,w=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){i=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(p=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",se),o.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let be=null,I=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=m.stencil?Zo:Vo,I=m.stencil?Ko:to);const ie={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:i};u=new XRWebGLBinding(o,t),f=u.createProjectionLayer(ie),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new no(f.textureWidth,f.textureHeight,{format:An,type:ur,depthTexture:new kp(f.textureWidth,f.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};h=new XRWebGLLayer(o,t,be),o.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new no(h.framebufferWidth,h.framebufferHeight,{format:An,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await o.requestReferenceSpace(a),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function re(Q){for(let pe=0;pe<Q.removed.length;pe++){const be=Q.removed[pe],I=x.indexOf(be);I>=0&&(x[I]=null,S[I].disconnect(be))}for(let pe=0;pe<Q.added.length;pe++){const be=Q.added[pe];let I=x.indexOf(be);if(I===-1){for(let ie=0;ie<S.length;ie++)if(ie>=x.length){x.push(be),I=ie;break}else if(x[ie]===null){x[ie]=be,I=ie;break}if(I===-1)break}const oe=S[I];oe&&oe.connect(be)}}const Y=new V,Z=new V;function F(Q,pe,be){Y.setFromMatrixPosition(pe.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);const I=Y.distanceTo(Z),oe=pe.projectionMatrix.elements,ie=be.projectionMatrix.elements,ue=oe[14]/(oe[10]-1),Pe=oe[14]/(oe[10]+1),C=(oe[9]+1)/oe[5],A=(oe[9]-1)/oe[5],_=(oe[8]-1)/oe[0],ee=(ie[8]+1)/ie[0],X=ue*_,$=ue*ee,J=I/(-_+ee),ae=J*-_;if(pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ae),Q.translateZ(J),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),oe[10]===-1)Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const K=ue+J,y=Pe+J,b=X-ae,P=$+(I-ae),G=C*Pe/y*K,B=A*Pe/y*K;Q.projectionMatrix.makePerspective(b,P,G,B,K,y),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let pe=Q.near,be=Q.far;v.texture!==null&&(v.depthNear>0&&(pe=v.depthNear),v.depthFar>0&&(be=v.depthFar)),E.near=O.near=R.near=pe,E.far=O.far=R.far=be,(k!==E.near||te!==E.far)&&(o.updateRenderState({depthNear:E.near,depthFar:E.far}),k=E.near,te=E.far),R.layers.mask=Q.layers.mask|2,O.layers.mask=Q.layers.mask|4,E.layers.mask=R.layers.mask|O.layers.mask;const I=Q.parent,oe=E.cameras;he(E,I);for(let ie=0;ie<oe.length;ie++)he(oe[ie],I);oe.length===2?F(E,R,O):E.projectionMatrix.copy(R.projectionMatrix),ge(Q,E,I)};function ge(Q,pe,be){be===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Hi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let _e=null;function Te(Q,pe){if(d=pe.getViewerPose(l||s),g=pe,d!==null){const be=d.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let I=!1;be.length!==E.cameras.length&&(E.cameras.length=0,I=!0);for(let ie=0;ie<be.length;ie++){const ue=be[ie];let Pe=null;if(h!==null)Pe=h.getViewport(ue);else{const A=u.getViewSubImage(f,ue);Pe=A.viewport,ie===0&&(e.setRenderTargetTextures(w,A.colorTexture,f.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(w))}let C=T[ie];C===void 0&&(C=new cn,C.layers.enable(ie),C.viewport=new dt,T[ie]=C),C.matrix.fromArray(ue.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(ue.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ie===0&&(E.matrix.copy(C.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),I===!0&&E.cameras.push(C)}const oe=o.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const ie=u.getDepthInformation(be[0]);ie&&ie.isValid&&ie.texture&&v.init(e,ie,o.renderState)}}for(let be=0;be<S.length;be++){const I=x[be],oe=S[be];I!==null&&oe!==void 0&&oe.update(I,pe,l||s)}_e&&_e(Q,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Oe=new Up;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(Q){_e=Q},this.dispose=function(){}}}const Xr=new Gn,iE=new bt;function sE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,Pp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function o(m,p,w,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),d(m,p)):p.isMeshStandardMaterial?(i(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),v(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),S=w.envMap,x=w.envMapRotation;S&&(m.envMap.value=S,Xr.copy(x),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.envMapRotation.value.setFromMatrix4(iE.makeRotationFromEuler(Xr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function aE(n,e,t,r){let o={},i={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){const x=S.program;r.uniformBlockBinding(w,x)}function l(w,S){let x=o[w.id];x===void 0&&(g(w),x=d(w),o[w.id]=x,w.addEventListener("dispose",m));const L=S.program;r.updateUBOMapping(w,L);const D=e.render.frame;i[w.id]!==D&&(f(w),i[w.id]=D)}function d(w){const S=u();w.__bindingPointIndex=S;const x=n.createBuffer(),L=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function u(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=o[w.id],x=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,R=x.length;D<R;D++){const O=Array.isArray(x[D])?x[D]:[x[D]];for(let T=0,E=O.length;T<E;T++){const k=O[T];if(h(k,D,T,L)===!0){const te=k.__offset,W=Array.isArray(k.value)?k.value:[k.value];let se=0;for(let re=0;re<W.length;re++){const Y=W[re],Z=v(Y);typeof Y=="number"||typeof Y=="boolean"?(k.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,te+se,k.__data)):Y.isMatrix3?(k.__data[0]=Y.elements[0],k.__data[1]=Y.elements[1],k.__data[2]=Y.elements[2],k.__data[3]=0,k.__data[4]=Y.elements[3],k.__data[5]=Y.elements[4],k.__data[6]=Y.elements[5],k.__data[7]=0,k.__data[8]=Y.elements[6],k.__data[9]=Y.elements[7],k.__data[10]=Y.elements[8],k.__data[11]=0):(Y.toArray(k.__data,se),se+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,S,x,L){const D=w.value,R=S+"_"+x;if(L[R]===void 0)return typeof D=="number"||typeof D=="boolean"?L[R]=D:L[R]=D.clone(),!0;{const O=L[R];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return L[R]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function g(w){const S=w.uniforms;let x=0;const L=16;for(let R=0,O=S.length;R<O;R++){const T=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,k=T.length;E<k;E++){const te=T[E],W=Array.isArray(te.value)?te.value:[te.value];for(let se=0,re=W.length;se<re;se++){const Y=W[se],Z=v(Y),F=x%L,he=F%Z.boundary,ge=F+he;x+=he,ge!==0&&L-ge<Z.storage&&(x+=L-ge),te.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=x,x+=Z.storage}}}const D=x%L;return D>0&&(x+=L-D),w.__size=x,w.__cache={},this}function v(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const x=s.indexOf(S.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(o[S.id]),delete o[S.id],delete i[S.id]}function p(){for(const w in o)n.deleteBuffer(o[w]);s=[],o={},i={}}return{bind:c,update:l,dispose:p}}class cE{constructor(e={}){const{canvas:t=Ov(),context:r=null,depth:o=!0,stencil:i=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=r.getContextAttributes().alpha}else h=s;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Dr,this.toneMappingExposure=1;const x=this;let L=!1,D=0,R=0,O=null,T=-1,E=null;const k=new dt,te=new dt;let W=null;const se=new Ke(0);let re=0,Y=t.width,Z=t.height,F=1,he=null,ge=null;const _e=new dt(0,0,Y,Z),Te=new dt(0,0,Y,Z);let Oe=!1;const Q=new td;let pe=!1,be=!1;this.transmissionResolutionScale=1;const I=new bt,oe=new bt,ie=new V,ue=new dt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function A(){return O===null?F:1}let _=r;function ee(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:o,stencil:i,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gl}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",we,!1),_===null){const N="webgl2";if(_=ee(N,M),_===null)throw ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let X,$,J,ae,K,y,b,P,G,B,z,ce,le,ve,ke,fe,Se,De,Ue,xe,Ne,He,ft,U;function Me(){X=new bS(_),X.init(),He=new QM(_,X),$=new uS(_,X,e,He),J=new ZM(_,X),$.reverseDepthBuffer&&f&&J.buffers.depth.setReversed(!0),ae=new xS(_),K=new BM,y=new JM(_,X,J,K,$,He,ae),b=new hS(x),P=new gS(x),G=new C_(_),ft=new lS(_,G),B=new vS(_,G,ae,ft),z=new SS(_,B,G,ae),Ue=new yS(_,$,y),fe=new fS(K),ce=new NM(x,b,P,X,$,ft,fe),le=new sE(x,K),ve=new zM,ke=new XM(X),De=new cS(x,b,P,J,z,h,c),Se=new qM(x,z,$),U=new aE(_,ae,$,J),xe=new dS(_,X,ae),Ne=new _S(_,X,ae),ae.programs=ce.programs,x.capabilities=$,x.extensions=X,x.properties=K,x.renderLists=ve,x.shadowMap=Se,x.state=J,x.info=ae}Me();const ne=new oE(x,_);this.xr=ne,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const M=X.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=X.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(M){M!==void 0&&(F=M,this.setSize(Y,Z,!1))},this.getSize=function(M){return M.set(Y,Z)},this.setSize=function(M,N,j=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,Z=N,t.width=Math.floor(M*F),t.height=Math.floor(N*F),j===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Y*F,Z*F).floor()},this.setDrawingBufferSize=function(M,N,j){Y=M,Z=N,F=j,t.width=Math.floor(M*j),t.height=Math.floor(N*j),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(k)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,N,j,q){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,N,j,q),J.viewport(k.copy(_e).multiplyScalar(F).round())},this.getScissor=function(M){return M.copy(Te)},this.setScissor=function(M,N,j,q){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,N,j,q),J.scissor(te.copy(Te).multiplyScalar(F).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(M){J.setScissorTest(Oe=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){ge=M},this.getClearColor=function(M){return M.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(M=!0,N=!0,j=!0){let q=0;if(M){let H=!1;if(O!==null){const me=O.texture.format;H=me===ql||me===Yl||me===jl}if(H){const me=O.texture.type,Ee=me===ur||me===to||me===zi||me===Ko||me===$l||me===Xl,Ae=De.getClearColor(),Re=De.getClearAlpha(),Be=Ae.r,Fe=Ae.g,Le=Ae.b;Ee?(g[0]=Be,g[1]=Fe,g[2]=Le,g[3]=Re,_.clearBufferuiv(_.COLOR,0,g)):(v[0]=Be,v[1]=Fe,v[2]=Le,v[3]=Re,_.clearBufferiv(_.COLOR,0,v))}else q|=_.COLOR_BUFFER_BIT}N&&(q|=_.DEPTH_BUFFER_BIT),j&&(q|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",we,!1),De.dispose(),ve.dispose(),ke.dispose(),K.dispose(),b.dispose(),P.dispose(),z.dispose(),ft.dispose(),U.dispose(),ce.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ud),ne.removeEventListener("sessionend",fd),Nr.stop()};function de(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=ae.autoReset,N=Se.enabled,j=Se.autoUpdate,q=Se.needsUpdate,H=Se.type;Me(),ae.autoReset=M,Se.enabled=N,Se.autoUpdate=j,Se.needsUpdate=q,Se.type=H}function we(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function We(M){const N=M.target;N.removeEventListener("dispose",We),_t(N)}function _t(M){kt(M),K.remove(M)}function kt(M){const N=K.get(M).programs;N!==void 0&&(N.forEach(function(j){ce.releaseProgram(j)}),M.isShaderMaterial&&ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,j,q,H,me){N===null&&(N=Pe);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,Ae=tm(M,N,j,q,H);J.setMaterial(q,Ee);let Re=j.index,Be=1;if(q.wireframe===!0){if(Re=B.getWireframeAttribute(j),Re===void 0)return;Be=2}const Fe=j.drawRange,Le=j.attributes.position;let Ze=Fe.start*Be,tt=(Fe.start+Fe.count)*Be;me!==null&&(Ze=Math.max(Ze,me.start*Be),tt=Math.min(tt,(me.start+me.count)*Be)),Re!==null?(Ze=Math.max(Ze,0),tt=Math.min(tt,Re.count)):Le!=null&&(Ze=Math.max(Ze,0),tt=Math.min(tt,Le.count));const yt=tt-Ze;if(yt<0||yt===1/0)return;ft.setup(H,q,Ae,j,Re);let xt,Qe=xe;if(Re!==null&&(xt=G.get(Re),Qe=Ne,Qe.setIndex(xt)),H.isMesh)q.wireframe===!0?(J.setLineWidth(q.wireframeLinewidth*A()),Qe.setMode(_.LINES)):Qe.setMode(_.TRIANGLES);else if(H.isLine){let Ie=q.linewidth;Ie===void 0&&(Ie=1),J.setLineWidth(Ie*A()),H.isLineSegments?Qe.setMode(_.LINES):H.isLineLoop?Qe.setMode(_.LINE_LOOP):Qe.setMode(_.LINE_STRIP)}else H.isPoints?Qe.setMode(_.POINTS):H.isSprite&&Qe.setMode(_.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Qe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))Qe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ie=H._multiDrawStarts,Pt=H._multiDrawCounts,nt=H._multiDrawCount,vn=Re?G.get(Re).bytesPerElement:1,ao=K.get(q).currentProgram.getUniforms();for(let en=0;en<nt;en++)ao.setValue(_,"_gl_DrawID",en),Qe.render(Ie[en]/vn,Pt[en])}else if(H.isInstancedMesh)Qe.renderInstances(Ze,yt,H.count);else if(j.isInstancedBufferGeometry){const Ie=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pt=Math.min(j.instanceCount,Ie);Qe.renderInstances(Ze,yt,Pt)}else Qe.render(Ze,yt)};function st(M,N,j){M.transparent===!0&&M.side===Bn&&M.forceSinglePass===!1?(M.side=jt,M.needsUpdate=!0,ss(M,N,j),M.side=kr,M.needsUpdate=!0,ss(M,N,j),M.side=Bn):ss(M,N,j)}this.compile=function(M,N,j=null){j===null&&(j=M),p=ke.get(j),p.init(N),S.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),M!==j&&M.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){const Ae=me[Ee];st(Ae,j,H),q.add(Ae)}else st(me,j,H),q.add(me)}),S.pop(),p=null,q},this.compileAsync=function(M,N,j=null){const q=this.compile(M,N,j);return new Promise(H=>{function me(){if(q.forEach(function(Ee){K.get(Ee).currentProgram.isReady()&&q.delete(Ee)}),q.size===0){H(M);return}setTimeout(me,10)}X.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let bn=null;function $n(M){bn&&bn(M)}function ud(){Nr.stop()}function fd(){Nr.start()}const Nr=new Up;Nr.setAnimationLoop($n),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(M){bn=M,ne.setAnimationLoop(M),M===null?Nr.stop():Nr.start()},ne.addEventListener("sessionstart",ud),ne.addEventListener("sessionend",fd),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(N),N=ne.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,O),p=ke.get(M,S.length),p.init(N),S.push(p),oe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(oe),be=this.localClippingEnabled,pe=fe.init(this.clippingPlanes,be),m=ve.get(M,w.length),m.init(),w.push(m),ne.enabled===!0&&ne.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&va(me,N,-1/0,x.sortObjects)}va(M,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(he,ge),C=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,C&&De.addToRenderList(m,M),this.info.render.frame++,pe===!0&&fe.beginShadows();const j=p.state.shadowsArray;Se.render(j,M,N),pe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,H=m.transmissive;if(p.setupLights(),N.isArrayCamera){const me=N.cameras;if(H.length>0)for(let Ee=0,Ae=me.length;Ee<Ae;Ee++){const Re=me[Ee];pd(q,H,M,Re)}C&&De.render(M);for(let Ee=0,Ae=me.length;Ee<Ae;Ee++){const Re=me[Ee];hd(m,M,Re,Re.viewport)}}else H.length>0&&pd(q,H,M,N),C&&De.render(M),hd(m,M,N);O!==null&&R===0&&(y.updateMultisampleRenderTarget(O),y.updateRenderTargetMipmap(O)),M.isScene===!0&&M.onAfterRender(x,M,N),ft.resetDefaultState(),T=-1,E=null,S.pop(),S.length>0?(p=S[S.length-1],pe===!0&&fe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function va(M,N,j,q){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Q.intersectsSprite(M)){q&&ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(oe);const Ee=z.update(M),Ae=M.material;Ae.visible&&m.push(M,Ee,Ae,j,ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Q.intersectsObject(M))){const Ee=z.update(M),Ae=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ue.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ue.copy(Ee.boundingSphere.center)),ue.applyMatrix4(M.matrixWorld).applyMatrix4(oe)),Array.isArray(Ae)){const Re=Ee.groups;for(let Be=0,Fe=Re.length;Be<Fe;Be++){const Le=Re[Be],Ze=Ae[Le.materialIndex];Ze&&Ze.visible&&m.push(M,Ee,Ze,j,ue.z,Le)}}else Ae.visible&&m.push(M,Ee,Ae,j,ue.z,null)}}const me=M.children;for(let Ee=0,Ae=me.length;Ee<Ae;Ee++)va(me[Ee],N,j,q)}function hd(M,N,j,q){const H=M.opaque,me=M.transmissive,Ee=M.transparent;p.setupLightsView(j),pe===!0&&fe.setGlobalState(x.clippingPlanes,j),q&&J.viewport(k.copy(q)),H.length>0&&is(H,N,j),me.length>0&&is(me,N,j),Ee.length>0&&is(Ee,N,j),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function pd(M,N,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new no(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?ts:ur,minFilter:Jr,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const me=p.state.transmissionRenderTarget[q.id],Ee=q.viewport||k;me.setSize(Ee.z*x.transmissionResolutionScale,Ee.w*x.transmissionResolutionScale);const Ae=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(se),re=x.getClearAlpha(),re<1&&x.setClearColor(16777215,.5),x.clear(),C&&De.render(j);const Re=x.toneMapping;x.toneMapping=Dr;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),pe===!0&&fe.setGlobalState(x.clippingPlanes,q),is(M,j,q),y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me),X.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Le=0,Ze=N.length;Le<Ze;Le++){const tt=N[Le],yt=tt.object,xt=tt.geometry,Qe=tt.material,Ie=tt.group;if(Qe.side===Bn&&yt.layers.test(q.layers)){const Pt=Qe.side;Qe.side=jt,Qe.needsUpdate=!0,md(yt,j,q,xt,Qe,Ie),Qe.side=Pt,Qe.needsUpdate=!0,Fe=!0}}Fe===!0&&(y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me))}x.setRenderTarget(Ae),x.setClearColor(se,re),Be!==void 0&&(q.viewport=Be),x.toneMapping=Re}function is(M,N,j){const q=N.isScene===!0?N.overrideMaterial:null;for(let H=0,me=M.length;H<me;H++){const Ee=M[H],Ae=Ee.object,Re=Ee.geometry,Be=q===null?Ee.material:q,Fe=Ee.group;Ae.layers.test(j.layers)&&md(Ae,N,j,Re,Be,Fe)}}function md(M,N,j,q,H,me){M.onBeforeRender(x,N,j,q,H,me),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(x,N,j,q,M,me),H.transparent===!0&&H.side===Bn&&H.forceSinglePass===!1?(H.side=jt,H.needsUpdate=!0,x.renderBufferDirect(j,N,q,H,M,me),H.side=kr,H.needsUpdate=!0,x.renderBufferDirect(j,N,q,H,M,me),H.side=Bn):x.renderBufferDirect(j,N,q,H,M,me),M.onAfterRender(x,N,j,q,H,me)}function ss(M,N,j){N.isScene!==!0&&(N=Pe);const q=K.get(M),H=p.state.lights,me=p.state.shadowsArray,Ee=H.state.version,Ae=ce.getParameters(M,H.state,me,N,j),Re=ce.getProgramCacheKey(Ae);let Be=q.programs;q.environment=M.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(M.isMeshStandardMaterial?P:b).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",We),Be=new Map,q.programs=Be);let Fe=Be.get(Re);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===Ee)return bd(M,Ae),Fe}else Ae.uniforms=ce.getUniforms(M),M.onBeforeCompile(Ae,x),Fe=ce.acquireProgram(Ae,Re),Be.set(Re,Fe),q.uniforms=Ae.uniforms;const Le=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=fe.uniform),bd(M,Ae),q.needsLights=rm(M),q.lightsStateVersion=Ee,q.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function gd(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Gs.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function bd(M,N){const j=K.get(M);j.outputColorSpace=N.outputColorSpace,j.batching=N.batching,j.batchingColor=N.batchingColor,j.instancing=N.instancing,j.instancingColor=N.instancingColor,j.instancingMorph=N.instancingMorph,j.skinning=N.skinning,j.morphTargets=N.morphTargets,j.morphNormals=N.morphNormals,j.morphColors=N.morphColors,j.morphTargetsCount=N.morphTargetsCount,j.numClippingPlanes=N.numClippingPlanes,j.numIntersection=N.numClipIntersection,j.vertexAlphas=N.vertexAlphas,j.vertexTangents=N.vertexTangents,j.toneMapping=N.toneMapping}function tm(M,N,j,q,H){N.isScene!==!0&&(N=Pe),y.resetTextureUnits();const me=N.fog,Ee=q.isMeshStandardMaterial?N.environment:null,Ae=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Jo,Re=(q.isMeshStandardMaterial?P:b).get(q.envMap||Ee),Be=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Fe=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!j.morphAttributes.position,Ze=!!j.morphAttributes.normal,tt=!!j.morphAttributes.color;let yt=Dr;q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(yt=x.toneMapping);const xt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=xt!==void 0?xt.length:0,Ie=K.get(q),Pt=p.state.lights;if(pe===!0&&(be===!0||M!==E)){const zt=M===E&&q.id===T;fe.setState(q,M,zt)}let nt=!1;q.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Pt.state.version||Ie.outputColorSpace!==Ae||H.isBatchedMesh&&Ie.batching===!1||!H.isBatchedMesh&&Ie.batching===!0||H.isBatchedMesh&&Ie.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ie.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ie.instancing===!1||!H.isInstancedMesh&&Ie.instancing===!0||H.isSkinnedMesh&&Ie.skinning===!1||!H.isSkinnedMesh&&Ie.skinning===!0||H.isInstancedMesh&&Ie.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ie.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ie.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ie.instancingMorph===!1&&H.morphTexture!==null||Ie.envMap!==Re||q.fog===!0&&Ie.fog!==me||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==fe.numPlanes||Ie.numIntersection!==fe.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==Fe||Ie.morphTargets!==Le||Ie.morphNormals!==Ze||Ie.morphColors!==tt||Ie.toneMapping!==yt||Ie.morphTargetsCount!==Qe)&&(nt=!0):(nt=!0,Ie.__version=q.version);let vn=Ie.currentProgram;nt===!0&&(vn=ss(q,N,H));let ao=!1,en=!1,oi=!1;const mt=vn.getUniforms(),un=Ie.uniforms;if(J.useProgram(vn.program)&&(ao=!0,en=!0,oi=!0),q.id!==T&&(T=q.id,en=!0),ao||E!==M){J.buffers.depth.getReversed()?(I.copy(M.projectionMatrix),Bv(I),Fv(I),mt.setValue(_,"projectionMatrix",I)):mt.setValue(_,"projectionMatrix",M.projectionMatrix),mt.setValue(_,"viewMatrix",M.matrixWorldInverse);const qt=mt.map.cameraPosition;qt!==void 0&&qt.setValue(_,ie.setFromMatrixPosition(M.matrixWorld)),$.logarithmicDepthBuffer&&mt.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(_,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,en=!0,oi=!0)}if(H.isSkinnedMesh){mt.setOptional(_,H,"bindMatrix"),mt.setOptional(_,H,"bindMatrixInverse");const zt=H.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),mt.setValue(_,"boneTexture",zt.boneTexture,y))}H.isBatchedMesh&&(mt.setOptional(_,H,"batchingTexture"),mt.setValue(_,"batchingTexture",H._matricesTexture,y),mt.setOptional(_,H,"batchingIdTexture"),mt.setValue(_,"batchingIdTexture",H._indirectTexture,y),mt.setOptional(_,H,"batchingColorTexture"),H._colorsTexture!==null&&mt.setValue(_,"batchingColorTexture",H._colorsTexture,y));const fn=j.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Ue.update(H,j,vn),(en||Ie.receiveShadow!==H.receiveShadow)&&(Ie.receiveShadow=H.receiveShadow,mt.setValue(_,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(un.envMap.value=Re,un.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(un.envMapIntensity.value=N.environmentIntensity),en&&(mt.setValue(_,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&nm(un,oi),me&&q.fog===!0&&le.refreshFogUniforms(un,me),le.refreshMaterialUniforms(un,q,F,Z,p.state.transmissionRenderTarget[M.id]),Gs.upload(_,gd(Ie),un,y)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Gs.upload(_,gd(Ie),un,y),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(_,"center",H.center),mt.setValue(_,"modelViewMatrix",H.modelViewMatrix),mt.setValue(_,"normalMatrix",H.normalMatrix),mt.setValue(_,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const zt=q.uniformsGroups;for(let qt=0,_a=zt.length;qt<_a;qt++){const Br=zt[qt];U.update(Br,vn),U.bind(Br,vn)}}return vn}function nm(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function rm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,N,j){K.get(M.texture).__webglTexture=N,K.get(M.depthTexture).__webglTexture=j;const q=K.get(M);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const j=K.get(M);j.__webglFramebuffer=N,j.__useDefaultFramebuffer=N===void 0};const om=_.createFramebuffer();this.setRenderTarget=function(M,N=0,j=0){O=M,D=N,R=j;let q=!0,H=null,me=!1,Ee=!1;if(M){const Re=K.get(M);if(Re.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(_.FRAMEBUFFER,null),q=!1;else if(Re.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(Re.__hasExternalTextures)y.rebindTextures(M,K.get(M.texture).__webglTexture,K.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Le=M.depthTexture;if(Re.__boundDepthTexture!==Le){if(Le!==null&&K.has(Le)&&(M.width!==Le.image.width||M.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ee=!0);const Fe=K.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?H=Fe[N][j]:H=Fe[N],me=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?H=K.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[j]:H=Fe,k.copy(M.viewport),te.copy(M.scissor),W=M.scissorTest}else k.copy(_e).multiplyScalar(F).floor(),te.copy(Te).multiplyScalar(F).floor(),W=Oe;if(j!==0&&(H=om),J.bindFramebuffer(_.FRAMEBUFFER,H)&&q&&J.drawBuffers(M,H),J.viewport(k),J.scissor(te),J.setScissorTest(W),me){const Re=K.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,j)}else if(Ee){const Re=K.get(M.texture),Be=N;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Re.__webglTexture,j,Be)}else if(M!==null&&j!==0){const Re=K.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Re.__webglTexture,j)}T=-1},this.readRenderTargetPixels=function(M,N,j,q,H,me,Ee){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=K.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){J.bindFramebuffer(_.FRAMEBUFFER,Ae);try{const Re=M.texture,Be=Re.format,Fe=Re.type;if(!$.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-q&&j>=0&&j<=M.height-H&&_.readPixels(N,j,q,H,He.convert(Be),He.convert(Fe),me)}finally{const Re=O!==null?K.get(O).__webglFramebuffer:null;J.bindFramebuffer(_.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,N,j,q,H,me,Ee){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=K.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){const Re=M.texture,Be=Re.format,Fe=Re.type;if(!$.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-q&&j>=0&&j<=M.height-H){J.bindFramebuffer(_.FRAMEBUFFER,Ae);const Le=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Le),_.bufferData(_.PIXEL_PACK_BUFFER,me.byteLength,_.STREAM_READ),_.readPixels(N,j,q,H,He.convert(Be),He.convert(Fe),0);const Ze=O!==null?K.get(O).__webglFramebuffer:null;J.bindFramebuffer(_.FRAMEBUFFER,Ze);const tt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Nv(_,tt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Le),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,me),_.deleteBuffer(Le),_.deleteSync(tt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,j=0){M.isTexture!==!0&&(Co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const q=Math.pow(2,-j),H=Math.floor(M.image.width*q),me=Math.floor(M.image.height*q),Ee=N!==null?N.x:0,Ae=N!==null?N.y:0;y.setTexture2D(M,0),_.copyTexSubImage2D(_.TEXTURE_2D,j,0,0,Ee,Ae,H,me),J.unbindTexture()};const im=_.createFramebuffer(),sm=_.createFramebuffer();this.copyTextureToTexture=function(M,N,j=null,q=null,H=0,me=null){M.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,M=arguments[1],N=arguments[2],me=arguments[3]||0,j=null),me===null&&(H!==0?(Co("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=H,H=0):me=0);let Ee,Ae,Re,Be,Fe,Le,Ze,tt,yt;const xt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(j!==null)Ee=j.max.x-j.min.x,Ae=j.max.y-j.min.y,Re=j.isBox3?j.max.z-j.min.z:1,Be=j.min.x,Fe=j.min.y,Le=j.isBox3?j.min.z:0;else{const fn=Math.pow(2,-H);Ee=Math.floor(xt.width*fn),Ae=Math.floor(xt.height*fn),M.isDataArrayTexture?Re=xt.depth:M.isData3DTexture?Re=Math.floor(xt.depth*fn):Re=1,Be=0,Fe=0,Le=0}q!==null?(Ze=q.x,tt=q.y,yt=q.z):(Ze=0,tt=0,yt=0);const Qe=He.convert(N.format),Ie=He.convert(N.type);let Pt;N.isData3DTexture?(y.setTexture3D(N,0),Pt=_.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(y.setTexture2DArray(N,0),Pt=_.TEXTURE_2D_ARRAY):(y.setTexture2D(N,0),Pt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,N.unpackAlignment);const nt=_.getParameter(_.UNPACK_ROW_LENGTH),vn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),ao=_.getParameter(_.UNPACK_SKIP_PIXELS),en=_.getParameter(_.UNPACK_SKIP_ROWS),oi=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,xt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,xt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Be),_.pixelStorei(_.UNPACK_SKIP_ROWS,Fe),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Le);const mt=M.isDataArrayTexture||M.isData3DTexture,un=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const fn=K.get(M),zt=K.get(N),qt=K.get(fn.__renderTarget),_a=K.get(zt.__renderTarget);J.bindFramebuffer(_.READ_FRAMEBUFFER,qt.__webglFramebuffer),J.bindFramebuffer(_.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let Br=0;Br<Re;Br++)mt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,K.get(M).__webglTexture,H,Le+Br),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,K.get(N).__webglTexture,me,yt+Br)),_.blitFramebuffer(Be,Fe,Ee,Ae,Ze,tt,Ee,Ae,_.DEPTH_BUFFER_BIT,_.NEAREST);J.bindFramebuffer(_.READ_FRAMEBUFFER,null),J.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||K.has(M)){const fn=K.get(M),zt=K.get(N);J.bindFramebuffer(_.READ_FRAMEBUFFER,im),J.bindFramebuffer(_.DRAW_FRAMEBUFFER,sm);for(let qt=0;qt<Re;qt++)mt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,fn.__webglTexture,H,Le+qt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,fn.__webglTexture,H),un?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,zt.__webglTexture,me,yt+qt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,zt.__webglTexture,me),H!==0?_.blitFramebuffer(Be,Fe,Ee,Ae,Ze,tt,Ee,Ae,_.COLOR_BUFFER_BIT,_.NEAREST):un?_.copyTexSubImage3D(Pt,me,Ze,tt,yt+qt,Be,Fe,Ee,Ae):_.copyTexSubImage2D(Pt,me,Ze,tt,Be,Fe,Ee,Ae);J.bindFramebuffer(_.READ_FRAMEBUFFER,null),J.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else un?M.isDataTexture||M.isData3DTexture?_.texSubImage3D(Pt,me,Ze,tt,yt,Ee,Ae,Re,Qe,Ie,xt.data):N.isCompressedArrayTexture?_.compressedTexSubImage3D(Pt,me,Ze,tt,yt,Ee,Ae,Re,Qe,xt.data):_.texSubImage3D(Pt,me,Ze,tt,yt,Ee,Ae,Re,Qe,Ie,xt):M.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,me,Ze,tt,Ee,Ae,Qe,Ie,xt.data):M.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,me,Ze,tt,xt.width,xt.height,Qe,xt.data):_.texSubImage2D(_.TEXTURE_2D,me,Ze,tt,Ee,Ae,Qe,Ie,xt);_.pixelStorei(_.UNPACK_ROW_LENGTH,nt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,vn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,ao),_.pixelStorei(_.UNPACK_SKIP_ROWS,en),_.pixelStorei(_.UNPACK_SKIP_IMAGES,oi),me===0&&N.generateMipmaps&&_.generateMipmap(Pt),J.unbindTexture()},this.copyTextureToTexture3D=function(M,N,j=null,q=null,H=0){return M.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,q=arguments[1]||null,M=arguments[2],N=arguments[3],H=arguments[4]||0),Co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,j,q,H)},this.initRenderTarget=function(M){K.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),J.unbindTexture()},this.resetState=function(){D=0,R=0,O=null,J.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const gf={type:"change"},id={type:"start"},zp={type:"end"},Ds=new Jl,bf=new wr,lE=Math.cos(70*Vs.DEG2RAD),Et=new V,Kt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dc=1e-6;class dE extends w_{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zo.ROTATE,MIDDLE:zo.DOLLY,RIGHT:zo.PAN},this.touches={ONE:Ro.ROTATE,TWO:Ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new ro,this._lastTargetPosition=new V,this._quat=new ro().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gu,this._sphericalDelta=new Gu,this._scale=1,this._panOffset=new V,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new V,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fE.bind(this),this._onPointerDown=uE.bind(this),this._onPointerUp=hE.bind(this),this._onContextMenu=xE.bind(this),this._onMouseWheel=gE.bind(this),this._onKeyDown=bE.bind(this),this._onTouchStart=vE.bind(this),this._onTouchMove=_E.bind(this),this._onMouseDown=pE.bind(this),this._onMouseMove=mE.bind(this),this._interceptControlDown=yE.bind(this),this._interceptControlUp=SE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gf),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Kt:r>Math.PI&&(r-=Kt),o<-Math.PI?o+=Kt:o>Math.PI&&(o-=Kt),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=s!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=Et.length();s=this._clampDistance(a*this._scale);const c=a-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),i=!!c}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=c!==this.object.zoom;const l=new V(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Ds.origin.copy(this.object.position),Ds.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ds.direction))<lE?this.object.lookAt(this.target):(bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ds.intersectPlane(bf,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>dc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dc||this._lastTargetPosition.distanceToSquared(this.target)>dc?(this.dispatchEvent(gf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Et.copy(o).sub(this.target);let i=Et.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/r.clientHeight,this.object.matrix),this._panUp(2*t*i/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,i=t-r.top,s=r.width,a=r.height;this._mouse.x=o/s*2-1,this._mouse.y=-(i/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,i=Math.sqrt(r*r+o*o);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),i=.5*(e.pageY+r.y);this._rotateEnd.set(o,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,i=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function uE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function fE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zp),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case zo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case zo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(id)}function mE(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function gE(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(id),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(zp))}function bE(n){this.enabled!==!1&&this._handleKeyDown(n)}function vE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case Ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case Ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(id)}function _E(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function xE(n){this.enabled!==!1&&n.preventDefault()}function yE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ME=Object.defineProperty,vf=Object.getOwnPropertySymbols,EE=Object.prototype.hasOwnProperty,wE=Object.prototype.propertyIsEnumerable,_f=(n,e,t)=>e in n?ME(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,TE=(n,e)=>{for(var t in e||(e={}))EE.call(e,t)&&_f(n,t,e[t]);if(vf)for(var t of vf(e))wE.call(e,t)&&_f(n,t,e[t]);return n};function so(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&typeof n=="object"&&Object.keys(n).length===0}function sd(n){return!!(n&&n.constructor&&n.call&&n.apply)}function pt(n){return!so(n)}function Wn(n,e=!0){return n instanceof Object&&n.constructor===Object&&(e||Object.keys(n).length!==0)}function mn(n,...e){return sd(n)?n(...e):n}function Qt(n,e=!0){return typeof n=="string"&&(e||n!=="")}function En(n){return Qt(n)?n.replace(/(-|_)/g,"").toLowerCase():n}function ad(n,e="",t={}){const r=En(e).split("."),o=r.shift();return o?Wn(n)?ad(mn(n[Object.keys(n).find(i=>En(i)===o)||""],t),r.join("."),t):void 0:mn(n,t)}function ga(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}function CE(n){return pt(n)&&!isNaN(n)}function ar(n,e){if(e){const t=e.test(n);return e.lastIndex=0,t}return!1}function Hp(...n){const e=(t={},r={})=>{const o=TE({},t);return Object.keys(r).forEach(i=>{Wn(r[i])&&i in t&&Wn(t[i])?o[i]=e(t[i],r[i]):o[i]=r[i]}),o};return n.reduce((t,r,o)=>o===0?r:e(t,r),{})}function Ai(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function AE(n){return Qt(n,!1)?n[0].toUpperCase()+n.slice(1):n}function Vp(n){return Qt(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,t)=>t===0?e:"-"+e.toLowerCase()).toLowerCase():n}function xf(n){return Qt(n)?n.replace(/[A-Z]/g,(e,t)=>t===0?e:"."+e.toLowerCase()).toLowerCase():n}function Gp(){const n=new Map;return{on(e,t){let r=n.get(e);return r?r.push(t):r=[t],n.set(e,r),this},off(e,t){let r=n.get(e);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(e,t){let r=n.get(e);r&&r.slice().map(o=>{o(t)})},clear(){n.clear()}}}var RE=Object.defineProperty,PE=Object.defineProperties,DE=Object.getOwnPropertyDescriptors,ea=Object.getOwnPropertySymbols,Wp=Object.prototype.hasOwnProperty,$p=Object.prototype.propertyIsEnumerable,yf=(n,e,t)=>e in n?RE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,wn=(n,e)=>{for(var t in e||(e={}))Wp.call(e,t)&&yf(n,t,e[t]);if(ea)for(var t of ea(e))$p.call(e,t)&&yf(n,t,e[t]);return n},uc=(n,e)=>PE(n,DE(e)),Qn=(n,e)=>{var t={};for(var r in n)Wp.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&ea)for(var r of ea(n))e.indexOf(r)<0&&$p.call(n,r)&&(t[r]=n[r]);return t};function LE(...n){return Hp(...n)}var kE=Gp(),Mn=kE;function Sf(n,e){ga(n)?n.push(...e||[]):Wn(n)&&Object.assign(n,e)}function IE(n){return Wn(n)&&n.hasOwnProperty("value")&&n.hasOwnProperty("type")?n.value:n}function UE(n){return n.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function pl(n="",e=""){return UE(`${Qt(n,!1)&&Qt(e,!1)?`${n}-`:n}${e}`)}function Xp(n="",e=""){return`--${pl(n,e)}`}function OE(n=""){const e=(n.match(/{/g)||[]).length,t=(n.match(/}/g)||[]).length;return(e+t)%2!==0}function jp(n,e="",t="",r=[],o){if(Qt(n)){const i=/{([^}]*)}/g,s=n.trim();if(OE(s))return;if(ar(s,i)){const a=s.replaceAll(i,d=>{const f=d.replace(/{|}/g,"").split(".").filter(h=>!r.some(g=>ar(h,g)));return`var(${Xp(t,Vp(f.join("-")))}${pt(o)?`, ${o}`:""})`}),c=/(\d+\s+[\+\-\*\/]\s+\d+)/g,l=/var\([^)]+\)/g;return ar(a.replace(l,"0"),c)?`calc(${a})`:a}return s}else if(CE(n))return n}function NE(n,e,t){Qt(e,!1)&&n.push(`${e}:${t};`)}function Ao(n,e){return n?`${n}{${e}}`:""}var Ri=(...n)=>BE(ct.getTheme(),...n),BE=(n={},e,t,r)=>{if(e){const{variable:o,options:i}=ct.defaults||{},{prefix:s,transform:a}=(n==null?void 0:n.options)||i||{},l=ar(e,/{([^}]*)}/g)?e:`{${e}}`;return r==="value"||so(r)&&a==="strict"?ct.getTokenValue(e):jp(l,void 0,s,[o.excludedKeyRegex],t)}return""};function FE(n,e={}){const t=ct.defaults.variable,{prefix:r=t.prefix,selector:o=t.selector,excludedKeyRegex:i=t.excludedKeyRegex}=e,s=(l,d="")=>Object.entries(l).reduce((u,[f,h])=>{const g=ar(f,i)?pl(d):pl(d,Vp(f)),v=IE(h);if(Wn(v)){const{variables:m,tokens:p}=s(v,g);Sf(u.tokens,p),Sf(u.variables,m)}else u.tokens.push((r?g.replace(`${r}-`,""):g).replaceAll("-",".")),NE(u.variables,Xp(g),jp(v,g,r,[i]));return u},{variables:[],tokens:[]}),{variables:a,tokens:c}=s(n,r);return{value:a,tokens:c,declarations:a.join(""),css:Ao(o,a.join(""))}}var Sn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(n){return{type:"class",selector:n,matched:this.pattern.test(n.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(n){return{type:"attr",selector:`:root${n}`,matched:this.pattern.test(n.trim())}}},media:{pattern:/^@media (.*)$/,resolve(n){return{type:"media",selector:`${n}{:root{[CSS]}}`,matched:this.pattern.test(n.trim())}}},system:{pattern:/^system$/,resolve(n){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(n.trim())}}},custom:{resolve(n){return{type:"custom",selector:n,matched:!0}}}},resolve(n){const e=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[n].flat().map(t=>{var r;return(r=e.map(o=>o.resolve(t)).find(o=>o.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(n,e){return FE(n,{prefix:e==null?void 0:e.prefix})},getCommon({name:n="",theme:e={},params:t,set:r,defaults:o}){var i,s,a,c,l,d,u;const{preset:f,options:h}=e;let g,v,m,p,w,S,x;if(pt(f)&&h.transform!=="strict"){const{primitive:L,semantic:D,extend:R}=f,O=D||{},{colorScheme:T}=O,E=Qn(O,["colorScheme"]),k=R||{},{colorScheme:te}=k,W=Qn(k,["colorScheme"]),se=T||{},{dark:re}=se,Y=Qn(se,["dark"]),Z=te||{},{dark:F}=Z,he=Qn(Z,["dark"]),ge=pt(L)?this._toVariables({primitive:L},h):{},_e=pt(E)?this._toVariables({semantic:E},h):{},Te=pt(Y)?this._toVariables({light:Y},h):{},Oe=pt(re)?this._toVariables({dark:re},h):{},Q=pt(W)?this._toVariables({semantic:W},h):{},pe=pt(he)?this._toVariables({light:he},h):{},be=pt(F)?this._toVariables({dark:F},h):{},[I,oe]=[(i=ge.declarations)!=null?i:"",ge.tokens],[ie,ue]=[(s=_e.declarations)!=null?s:"",_e.tokens||[]],[Pe,C]=[(a=Te.declarations)!=null?a:"",Te.tokens||[]],[A,_]=[(c=Oe.declarations)!=null?c:"",Oe.tokens||[]],[ee,X]=[(l=Q.declarations)!=null?l:"",Q.tokens||[]],[$,J]=[(d=pe.declarations)!=null?d:"",pe.tokens||[]],[ae,K]=[(u=be.declarations)!=null?u:"",be.tokens||[]];g=this.transformCSS(n,I,"light","variable",h,r,o),v=oe;const y=this.transformCSS(n,`${ie}${Pe}`,"light","variable",h,r,o),b=this.transformCSS(n,`${A}`,"dark","variable",h,r,o);m=`${y}${b}`,p=[...new Set([...ue,...C,..._])];const P=this.transformCSS(n,`${ee}${$}color-scheme:light`,"light","variable",h,r,o),G=this.transformCSS(n,`${ae}color-scheme:dark`,"dark","variable",h,r,o);w=`${P}${G}`,S=[...new Set([...X,...J,...K])],x=mn(f.css,{dt:Ri})}return{primitive:{css:g,tokens:v},semantic:{css:m,tokens:p},global:{css:w,tokens:S},style:x}},getPreset({name:n="",preset:e={},options:t,params:r,set:o,defaults:i,selector:s}){var a,c,l;let d,u,f;if(pt(e)&&t.transform!=="strict"){const h=n.replace("-directive",""),g=e,{colorScheme:v,extend:m,css:p}=g,w=Qn(g,["colorScheme","extend","css"]),S=m||{},{colorScheme:x}=S,L=Qn(S,["colorScheme"]),D=v||{},{dark:R}=D,O=Qn(D,["dark"]),T=x||{},{dark:E}=T,k=Qn(T,["dark"]),te=pt(w)?this._toVariables({[h]:wn(wn({},w),L)},t):{},W=pt(O)?this._toVariables({[h]:wn(wn({},O),k)},t):{},se=pt(R)?this._toVariables({[h]:wn(wn({},R),E)},t):{},[re,Y]=[(a=te.declarations)!=null?a:"",te.tokens||[]],[Z,F]=[(c=W.declarations)!=null?c:"",W.tokens||[]],[he,ge]=[(l=se.declarations)!=null?l:"",se.tokens||[]],_e=this.transformCSS(h,`${re}${Z}`,"light","variable",t,o,i,s),Te=this.transformCSS(h,he,"dark","variable",t,o,i,s);d=`${_e}${Te}`,u=[...new Set([...Y,...F,...ge])],f=mn(p,{dt:Ri})}return{css:d,tokens:u,style:f}},getPresetC({name:n="",theme:e={},params:t,set:r,defaults:o}){var i;const{preset:s,options:a}=e,c=(i=s==null?void 0:s.components)==null?void 0:i[n];return this.getPreset({name:n,preset:c,options:a,params:t,set:r,defaults:o})},getPresetD({name:n="",theme:e={},params:t,set:r,defaults:o}){var i;const s=n.replace("-directive",""),{preset:a,options:c}=e,l=(i=a==null?void 0:a.directives)==null?void 0:i[s];return this.getPreset({name:s,preset:l,options:c,params:t,set:r,defaults:o})},applyDarkColorScheme(n){return!(n.darkModeSelector==="none"||n.darkModeSelector===!1)},getColorSchemeOption(n,e){var t;return this.applyDarkColorScheme(n)?this.regex.resolve(n.darkModeSelector===!0?e.options.darkModeSelector:(t=n.darkModeSelector)!=null?t:e.options.darkModeSelector):[]},getLayerOrder(n,e={},t,r){const{cssLayer:o}=e;return o?`@layer ${mn(o.order||"primeui",t)}`:""},getCommonStyleSheet({name:n="",theme:e={},params:t,props:r={},set:o,defaults:i}){const s=this.getCommon({name:n,theme:e,params:t,set:o,defaults:i}),a=Object.entries(r).reduce((c,[l,d])=>c.push(`${l}="${d}"`)&&c,[]).join(" ");return Object.entries(s||{}).reduce((c,[l,d])=>{if(d!=null&&d.css){const u=Ai(d==null?void 0:d.css),f=`${l}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${u}</style>`)}return c},[]).join("")},getStyleSheet({name:n="",theme:e={},params:t,props:r={},set:o,defaults:i}){var s;const a={name:n,theme:e,params:t,set:o,defaults:i},c=(s=n.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,l=Object.entries(r).reduce((d,[u,f])=>d.push(`${u}="${f}"`)&&d,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${n}-variables" ${l}>${Ai(c)}</style>`:""},createTokens(n={},e,t="",r="",o={}){return Object.entries(n).forEach(([i,s])=>{const a=ar(i,e.variable.excludedKeyRegex)?t:t?`${t}.${xf(i)}`:xf(i),c=r?`${r}.${i}`:i;Wn(s)?this.createTokens(s,e,a,c,o):(o[a]||(o[a]={paths:[],computed(l,d={}){var u,f;return this.paths.length===1?(u=this.paths[0])==null?void 0:u.computed(this.paths[0].scheme,d.binding):l&&l!=="none"?(f=this.paths.find(h=>h.scheme===l))==null?void 0:f.computed(l,d.binding):this.paths.map(h=>h.computed(h.scheme,d[h.scheme]))}}),o[a].paths.push({path:c,value:s,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(l,d={}){const u=/{([^}]*)}/g;let f=s;if(d.name=this.path,d.binding||(d.binding={}),ar(s,u)){const g=s.trim().replaceAll(u,p=>{var w;const S=p.replace(/{|}/g,""),x=(w=o[S])==null?void 0:w.computed(l,d);return ga(x)&&x.length===2?`light-dark(${x[0].value},${x[1].value})`:x==null?void 0:x.value}),v=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,m=/var\([^)]+\)/g;f=ar(g.replace(m,"0"),v)?`calc(${g})`:g}return so(d.binding)&&delete d.binding,{colorScheme:l,path:this.path,paths:d,value:f.includes("undefined")?void 0:f}}}))}),o},getTokenValue(n,e,t){var r;const i=(c=>c.split(".").filter(d=>!ar(d.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(r=n[i])==null?void 0:r.computed(s)].flat().filter(c=>c);return a.length===1?a[0].value:a.reduce((c={},l)=>{const d=l,{colorScheme:u}=d,f=Qn(d,["colorScheme"]);return c[u]=f,c},void 0)},getSelectorRule(n,e,t,r){return t==="class"||t==="attr"?Ao(pt(e)?`${n}${e},${n} ${e}`:n,r):Ao(n,pt(e)?Ao(e,r):r)},transformCSS(n,e,t,r,o={},i,s,a){if(pt(e)){const{cssLayer:c}=o;if(r!=="style"){const l=this.getColorSchemeOption(o,s);e=t==="dark"?l.reduce((d,{type:u,selector:f})=>(pt(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",e):this.getSelectorRule(f,a,u,e)),d),""):Ao(a??":root",e)}if(c){const l={name:"primeui",order:"primeui"};Wn(c)&&(l.name=mn(c.name,{name:n,type:r})),pt(l.name)&&(e=Ao(`@layer ${l.name}`,e),i==null||i.layerNames(l.name))}return e}return""}},ct={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(n={}){const{theme:e}=n;e&&(this._theme=uc(wn({},e),{options:wn(wn({},this.defaults.options),e.options)}),this._tokens=Sn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var n;return((n=this.theme)==null?void 0:n.preset)||{}},get options(){var n;return((n=this.theme)==null?void 0:n.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(n){this.update({theme:n}),Mn.emit("theme:change",n)},getPreset(){return this.preset},setPreset(n){this._theme=uc(wn({},this.theme),{preset:n}),this._tokens=Sn.createTokens(n,this.defaults),this.clearLoadedStyleNames(),Mn.emit("preset:change",n),Mn.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(n){this._theme=uc(wn({},this.theme),{options:n}),this.clearLoadedStyleNames(),Mn.emit("options:change",n),Mn.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(n){this._layerNames.add(n)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(n){return this._loadedStyleNames.has(n)},setLoadedStyleName(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(n){return Sn.getTokenValue(this.tokens,n,this.defaults)},getCommon(n="",e){return Sn.getCommon({name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Sn.getPresetC(t)},getDirective(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Sn.getPresetD(t)},getCustomPreset(n="",e,t,r){const o={name:n,preset:e,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Sn.getPreset(o)},getLayerOrderCSS(n=""){return Sn.getLayerOrder(n,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(n="",e,t="style",r){return Sn.transformCSS(n,e,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(n="",e,t={}){return Sn.getCommonStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(n,e,t={}){return Sn.getStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(n){this._loadingStyles.add(n)},onStyleUpdated(n){this._loadingStyles.add(n)},onStyleLoaded(n,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),Mn.emit(`theme:${e}:load`,n),!this._loadingStyles.size&&Mn.emit("theme:load"))}};function zE(n,e){return n?n.classList?n.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(n.className):!1}function HE(n,e){if(n&&e){const t=r=>{zE(n,r)||(n.classList?n.classList.add(r):n.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function fc(n,e){if(n&&e){const t=r=>{n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function VE(n,e){return n instanceof HTMLElement?n.offsetWidth:0}function ba(n){return typeof HTMLElement=="object"?n instanceof HTMLElement:n&&typeof n=="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}function ta(n,e={}){if(ba(n)){const t=(r,o)=>{var i,s;const a=(i=n==null?void 0:n.$attrs)!=null&&i[r]?[(s=n==null?void 0:n.$attrs)==null?void 0:s[r]]:[];return[o].flat().reduce((c,l)=>{if(l!=null){const d=typeof l;if(d==="string"||d==="number")c.push(l);else if(d==="object"){const u=Array.isArray(l)?t(r,l):Object.entries(l).map(([f,h])=>r==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);c=u.length?c.concat(u.filter(f=>!!f)):c}}return c},a)};Object.entries(e).forEach(([r,o])=>{if(o!=null){const i=r.match(/^on(.+)/);i?n.addEventListener(i[1].toLowerCase(),o):r==="p-bind"||r==="pBind"?ta(n,o):(o=r==="class"?[...new Set(t("class",o))].join(" ").trim():r==="style"?t("style",o).join(";").trim():o,(n.$attrs=n.$attrs||{})&&(n.$attrs[r]=o),n.setAttribute(r,o))}})}}function GE(n,e={},...t){{const r=document.createElement(n);return ta(r,e),r.append(...t),r}}function WE(n,e){return ba(n)?n.matches(e)?n:n.querySelector(e):null}function $E(n,e){if(ba(n)){const t=n.getAttribute(e);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Mf(n){if(n){let e=n.offsetHeight,t=getComputedStyle(n);return e-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),e}return 0}function XE(n){if(n){let e=n.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function jE(n){if(n){let e=n.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function YE(n,e){return n?n.offsetHeight:0}function qE(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&XE(n))}function Ef(n){if(n){let e=n.offsetWidth,t=getComputedStyle(n);return e-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),e}return 0}function Yp(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function KE(n,e="",t){ba(n)&&t!==null&&t!==void 0&&n.setAttribute(e,t)}var Ls={};function qp(n="pui_id_"){return Ls.hasOwnProperty(n)||(Ls[n]=0),Ls[n]++,`${n}${Ls[n]}`}var Cr={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function Gi(n){"@babel/helpers - typeof";return Gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gi(n)}function wf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Tf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?wf(Object(t),!0).forEach(function(r){ZE(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):wf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ZE(n,e,t){return(e=JE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function JE(n){var e=QE(n,"string");return Gi(e)=="symbol"?e:e+""}function QE(n,e){if(Gi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ew(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;jg()?Ul(n):e?n():Ll(n)}var tw=0;function nw(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=Zt(!1),r=Zt(n),o=Zt(null),i=Yp()?window.document:void 0,s=e.document,a=s===void 0?i:s,c=e.immediate,l=c===void 0?!0:c,d=e.manual,u=d===void 0?!1:d,f=e.name,h=f===void 0?"style_".concat(++tw):f,g=e.id,v=g===void 0?void 0:g,m=e.media,p=m===void 0?void 0:m,w=e.nonce,S=w===void 0?void 0:w,x=e.first,L=x===void 0?!1:x,D=e.onMounted,R=D===void 0?void 0:D,O=e.onUpdated,T=O===void 0?void 0:O,E=e.onLoad,k=E===void 0?void 0:E,te=e.props,W=te===void 0?{}:te,se=function(){},re=function(F){var he=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var ge=Tf(Tf({},W),he),_e=ge.name||h,Te=ge.id||v,Oe=ge.nonce||S;o.value=a.querySelector('style[data-primevue-style-id="'.concat(_e,'"]'))||a.getElementById(Te)||a.createElement("style"),o.value.isConnected||(r.value=F||n,ta(o.value,{type:"text/css",id:Te,media:p,nonce:Oe}),L?a.head.prepend(o.value):a.head.appendChild(o.value),KE(o.value,"data-primevue-style-id",_e),ta(o.value,ge),o.value.onload=function(Q){return k==null?void 0:k(Q,{name:_e})},R==null||R(_e)),!t.value&&(se=or(r,function(Q){o.value.textContent=Q,T==null||T(_e)},{immediate:!0}),t.value=!0)}},Y=function(){!a||!t.value||(se(),qE(o.value)&&a.head.removeChild(o.value),t.value=!1)};return l&&!u&&ew(re),{id:v,name:h,el:o,css:r,unload:Y,load:re,isLoaded:Rl(t)}}function Wi(n){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wi(n)}function Cf(n,e){return sw(n)||iw(n,e)||ow(n,e)||rw()}function rw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ow(n,e){if(n){if(typeof n=="string")return Af(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Af(n,e):void 0}}function Af(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function iw(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],c=!0,l=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(d){l=!0,o=d}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw o}}return a}}function sw(n){if(Array.isArray(n))return n}function Rf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function hc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Rf(Object(t),!0).forEach(function(r){aw(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Rf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function aw(n,e,t){return(e=cw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function cw(n){var e=lw(n,"string");return Wi(e)=="symbol"?e:e+""}function lw(n,e){if(Wi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var dw=function(e){var t=e.dt;return`
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
`)},uw=function(e){var t=e.dt;return`
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
`)},fw={},hw={},gt={name:"base",css:uw,theme:dw,classes:fw,inlineStyles:hw,load:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},o=r(mn(e,{dt:Ri}));return pt(o)?nw(Ai(o),hc({name:this.name},t)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.theme,t,function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return ct.transformCSS(t.name||e.name,"".concat(o).concat(r))})},getCommonTheme:function(e){return ct.getCommon(this.name,e)},getComponentTheme:function(e){return ct.getComponent(this.name,e)},getDirectiveTheme:function(e){return ct.getDirective(this.name,e)},getPresetTheme:function(e,t,r){return ct.getCustomPreset(this.name,e,t,r)},getLayerOrderThemeCSS:function(){return ct.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=mn(this.css,{dt:Ri})||"",o=Ai("".concat(r).concat(e)),i=Object.entries(t).reduce(function(s,a){var c=Cf(a,2),l=c[0],d=c[1];return s.push("".concat(l,'="').concat(d,'"'))&&s},[]).join(" ");return pt(o)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(o,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ct.getCommonStyleSheet(this.name,e,t)},getThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[ct.getStyleSheet(this.name,e,t)];if(this.theme){var o=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=mn(this.theme,{dt:Ri}),s=Ai(ct.transformCSS(o,i)),a=Object.entries(t).reduce(function(c,l){var d=Cf(l,2),u=d[0],f=d[1];return c.push("".concat(u,'="').concat(f,'"'))&&c},[]).join(" ");pt(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(o,'" ').concat(a,">").concat(s,"</style>"))}return r.join("")},extend:function(e){return hc(hc({},this),{},{css:void 0,theme:void 0},e)}},Pf=gt.extend({name:"common"});function $i(n){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$i(n)}function pw(n){return Jp(n)||mw(n)||Zp(n)||Kp()}function mw(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function hi(n,e){return Jp(n)||gw(n,e)||Zp(n,e)||Kp()}function Kp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zp(n,e){if(n){if(typeof n=="string")return Df(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Df(n,e):void 0}}function Df(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function gw(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],c=!0,l=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(d){l=!0,o=d}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw o}}return a}}function Jp(n){if(Array.isArray(n))return n}function Lf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function qe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Lf(Object(t),!0).forEach(function(r){bi(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Lf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function bi(n,e,t){return(e=bw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function bw(n){var e=vw(n,"string");return $i(e)=="symbol"?e:e+""}function vw(n,e){if($i(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var cd={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var t=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return t._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var e,t,r,o,i,s,a,c,l,d,u,f=(e=this.pt)===null||e===void 0?void 0:e._usept,h=f?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,g=f?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(o=g||h)===null||o===void 0||(o=o.hooks)===null||o===void 0||(i=o.onBeforeCreate)===null||i===void 0||i.call(o);var v=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,m=v?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,p=v?(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0||(c=c.pt)===null||c===void 0?void 0:c.value:(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0?void 0:l.pt;(d=p||m)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(u=d.onBeforeCreate)===null||u===void 0||u.call(d),this.$attrSelector=qp("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=WE(this.$el,'[data-pc-name="'.concat(En(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=qe({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),r==null||r()}},_mergeProps:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return sd(e)?e.apply(void 0,r):Wt.apply(void 0,r)},_loadStyles:function(){var e=this,t=function(){Cr.isStyleNameLoaded("base")||(gt.loadCSS(e.$styleOptions),e._loadGlobalStyles(),Cr.setLoadedStyleName("base")),e._loadThemeStyles()};t(),this._themeChangeListener(t)},_loadCoreStyles:function(){var e,t;!Cr.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name&&(Pf.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Cr.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);pt(e)&&gt.load(e,qe({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,t;if(!(this.isUnstyled||this.$theme==="none")){if(!ct.isStyleNameLoaded("common")){var r,o,i=((r=this.$style)===null||r===void 0||(o=r.getCommonTheme)===null||o===void 0?void 0:o.call(r))||{},s=i.primitive,a=i.semantic,c=i.global,l=i.style;gt.load(s==null?void 0:s.css,qe({name:"primitive-variables"},this.$styleOptions)),gt.load(a==null?void 0:a.css,qe({name:"semantic-variables"},this.$styleOptions)),gt.load(c==null?void 0:c.css,qe({name:"global-variables"},this.$styleOptions)),gt.loadTheme(qe({name:"global-style"},this.$styleOptions),l),ct.setLoadedStyleName("common")}if(!ct.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name){var d,u,f,h,g=((d=this.$style)===null||d===void 0||(u=d.getComponentTheme)===null||u===void 0?void 0:u.call(d))||{},v=g.css,m=g.style;(f=this.$style)===null||f===void 0||f.load(v,qe({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadTheme(qe({name:"".concat(this.$style.name,"-style")},this.$styleOptions),m),ct.setLoadedStyleName(this.$style.name)}if(!ct.isStyleNameLoaded("layer-order")){var p,w,S=(p=this.$style)===null||p===void 0||(w=p.getLayerOrderThemeCSS)===null||w===void 0?void 0:w.call(p);gt.load(S,qe({name:"layer-order",first:!0},this.$styleOptions)),ct.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var t,r,o,i=((t=this.$style)===null||t===void 0||(r=t.getPresetTheme)===null||r===void 0?void 0:r.call(t,e,"[".concat(this.$attrSelector,"]")))||{},s=i.css,a=(o=this.$style)===null||o===void 0?void 0:o.load(s,qe({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Cr.clearLoadedStyleNames(),Mn.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return ad(e,t,r)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!o[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},c=a.mergeSections,l=c===void 0?!0:c,d=a.mergeProps,u=d===void 0?!1:d,f=i?s?this._useGlobalPT(this._getPTClassValue,r,o):this._useDefaultPT(this._getPTClassValue,r,o):void 0,h=s?void 0:this._getPTSelf(t,this._getPTClassValue,r,qe(qe({},o),{},{global:f||{}})),g=this._getPTDatasets(r);return l||!l&&h?u?this._mergeProps(u,f,h,g):qe(qe(qe({},f),h),g):qe(qe({},h),g)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return Wt(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o="data-pc-",i=r==="root"&&pt((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&qe(qe({},r==="root"&&qe(qe(bi({},"".concat(o,"name"),En(i?(t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]:this.$.type.name)),i&&bi({},"".concat(o,"extend"),En(this.$.type.name))),Yp()&&bi({},"".concat(this.$attrSelector),""))),{},bi({},"".concat(o,"section"),En(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return Qt(e)||ga(e)?{class:e}:e},_getPT:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,i=function(a){var c,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=o?o(a):a,u=En(r),f=En(t.$name);return(c=l?u!==f?d==null?void 0:d[u]:void 0:d==null?void 0:d[u])!==null&&c!==void 0?c:d};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},_usePT:function(e,t,r,o){var i=function(v){return t(v,r,o)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},c=a.mergeSections,l=c===void 0?!0:c,d=a.mergeProps,u=d===void 0?!1:d,f=i(e.originalValue),h=i(e.value);return f===void 0&&h===void 0?void 0:Qt(h)?h:Qt(f)?f:l||!l&&h?u?this._mergeProps(u,f,h):qe(qe({},f),h):h}return i(e)},_useGlobalPT:function(e,t,r){return this._usePT(this.globalPT,e,t,r)},_useDefaultPT:function(e,t,r){return this._usePT(this.defaultPT,e,t,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,qe(qe({},this.$params),t))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Wt(this.$_attrsWithoutPT,this.ptm(e,t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,qe({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,qe(qe({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var o=this._getOptionValue(this.$style.inlineStyles,e,qe(qe({},this.$params),r)),i=this._getOptionValue(Pf.inlineStyles,e,qe(qe({},this.$params),r));return[i,o]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return mn(r,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return t._getOptionValue(r,t.$name,qe({},t.$params))||mn(r,qe({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$inProps:function(){var e,t=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(r){var o=hi(r,1),i=o[0];return t==null?void 0:t.includes(i)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return qe(qe({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=hi(e,1),r=t[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,t){var r=hi(t,2),o=r[0],i=r[1],s=o.split(":"),a=pw(s),c=a.slice(1);return c==null||c.reduce(function(l,d,u,f){return!l[d]&&(l[d]=u===f.length-1?i:{}),l[d]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=hi(e,1),r=t[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,t){var r=hi(t,2),o=r[0],i=r[1];return e[o]=i,e},{})}}},_w=`
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
`,xw=gt.extend({name:"baseicon",css:_w});function Xi(n){"@babel/helpers - typeof";return Xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xi(n)}function kf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function If(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?kf(Object(t),!0).forEach(function(r){yw(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function yw(n,e,t){return(e=Sw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Sw(n){var e=Mw(n,"string");return Xi(e)=="symbol"?e:e+""}function Mw(n,e){if(Xi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Ew={name:"BaseIcon",extends:cd,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:xw,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=so(this.label);return If(If({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},Qp={name:"SpinnerIcon",extends:Ew};function ww(n,e,t,r,o,i){return Dt(),dr("svg",Wt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[ei("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}Qp.render=ww;var Tw=function(e){var t=e.dt;return`
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
`)},Cw={root:function(e){var t=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":pt(t.value)&&String(t.value).length===1,"p-badge-dot":so(t.value)&&!r.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]}},Aw=gt.extend({name:"badge",theme:Tw,classes:Cw}),Rw={name:"BaseBadge",extends:cd,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:Aw,provide:function(){return{$pcBadge:this,$parentInstance:this}}},em={name:"Badge",extends:Rw,inheritAttrs:!1};function Pw(n,e,t,r,o,i){return Dt(),dr("span",Wt({class:n.cx("root")},n.ptmi("root")),[pi(n.$slots,"default",{},function(){return[$h(Sl(n.value),1)]})],16)}em.render=Pw;var Lo=Gp();function ji(n){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ji(n)}function Uf(n,e){return Iw(n)||kw(n,e)||Lw(n,e)||Dw()}function Dw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lw(n,e){if(n){if(typeof n=="string")return Of(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Of(n,e):void 0}}function Of(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function kw(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],c=!0,l=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(d){l=!0,o=d}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw o}}return a}}function Iw(n){if(Array.isArray(n))return n}function Nf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Je(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Nf(Object(t),!0).forEach(function(r){ml(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Nf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ml(n,e,t){return(e=Uw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Uw(n){var e=Ow(n,"string");return ji(e)=="symbol"?e:e+""}function Ow(n,e){if(ji(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var je={_getMeta:function(){return[Wn(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],mn(Wn(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,t){var r,o,i;return(r=(e==null||(o=e.instance)===null||o===void 0?void 0:o.$primevue)||(t==null||(i=t.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:ad,_getPTValue:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,c=function(){var w=je._getOptionValue.apply(je,arguments);return Qt(w)||ga(w)?{class:w}:w},l=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((t=r.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},d=l.mergeSections,u=d===void 0?!0:d,f=l.mergeProps,h=f===void 0?!1:f,g=a?je._useDefaultPT(r,r.defaultPT(),c,i,s):void 0,v=je._usePT(r,je._getPT(o,r.$name),c,i,Je(Je({},s),{},{global:g||{}})),m=je._getPTDatasets(r,i);return u||!u&&v?h?je._mergeProps(r,h,g,v,m):Je(Je(Je({},g),v),m):Je(Je({},v),m)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return Je(Je({},t==="root"&&ml({},"".concat(r,"name"),En(e.$name))),{},ml({},"".concat(r,"section"),En(t)))},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=function(s){var a,c=r?r(s):s,l=En(t);return(a=c==null?void 0:c[l])!==null&&a!==void 0?a:c};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function(m){return r(m,o,i)};if(t!=null&&t.hasOwnProperty("_usept")){var a,c=t._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},l=c.mergeSections,d=l===void 0?!0:l,u=c.mergeProps,f=u===void 0?!1:u,h=s(t.originalValue),g=s(t.value);return h===void 0&&g===void 0?void 0:Qt(g)?g:Qt(h)?h:d||!d&&g?f?je._mergeProps(e,f,h,g):Je(Je({},h),g):g}return s(t)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return je._usePT(e,t,r,o,i)},_loadStyles:function(e,t,r){var o,i=je._getConfig(t,r),s={nonce:i==null||(o=i.csp)===null||o===void 0?void 0:o.nonce};je._loadCoreStyles(e.$instance,s),je._loadThemeStyles(e.$instance,s),je._loadScopedThemeStyles(e.$instance,s),je._themeChangeListener(function(){return je._loadThemeStyles(e.$instance,s)})},_loadCoreStyles:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!Cr.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(t=r.$style)!==null&&t!==void 0&&t.name){var i;gt.loadCSS(o),(i=r.$style)===null||i===void 0||i.loadCSS(o),Cr.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,t,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!(o!=null&&o.isUnstyled()||(o==null||(e=o.theme)===null||e===void 0?void 0:e.call(o))==="none")){if(!ct.isStyleNameLoaded("common")){var s,a,c=((s=o.$style)===null||s===void 0||(a=s.getCommonTheme)===null||a===void 0?void 0:a.call(s))||{},l=c.primitive,d=c.semantic,u=c.global,f=c.style;gt.load(l==null?void 0:l.css,Je({name:"primitive-variables"},i)),gt.load(d==null?void 0:d.css,Je({name:"semantic-variables"},i)),gt.load(u==null?void 0:u.css,Je({name:"global-variables"},i)),gt.loadTheme(Je({name:"global-style"},i),f),ct.setLoadedStyleName("common")}if(!ct.isStyleNameLoaded((t=o.$style)===null||t===void 0?void 0:t.name)&&(r=o.$style)!==null&&r!==void 0&&r.name){var h,g,v,m,p=((h=o.$style)===null||h===void 0||(g=h.getDirectiveTheme)===null||g===void 0?void 0:g.call(h))||{},w=p.css,S=p.style;(v=o.$style)===null||v===void 0||v.load(w,Je({name:"".concat(o.$style.name,"-variables")},i)),(m=o.$style)===null||m===void 0||m.loadTheme(Je({name:"".concat(o.$style.name,"-style")},i),S),ct.setLoadedStyleName(o.$style.name)}if(!ct.isStyleNameLoaded("layer-order")){var x,L,D=(x=o.$style)===null||x===void 0||(L=x.getLayerOrderThemeCSS)===null||L===void 0?void 0:L.call(x);gt.load(D,Je({name:"layer-order",first:!0},i)),ct.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var o,i,s,a=((o=e.$style)===null||o===void 0||(i=o.getPresetTheme)===null||i===void 0?void 0:i.call(o,r,"[".concat(e.$attrSelector,"]")))||{},c=a.css,l=(s=e.$style)===null||s===void 0?void 0:s.load(c,Je({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},t));e.scopedStyleEl=l.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Cr.clearLoadedStyleNames(),Mn.on("theme:change",e)},_hook:function(e,t,r,o,i,s){var a,c,l="on".concat(AE(t)),d=je._getConfig(o,i),u=r==null?void 0:r.$instance,f=je._usePT(u,je._getPT(o==null||(a=o.value)===null||a===void 0?void 0:a.pt,e),je._getOptionValue,"hooks.".concat(l)),h=je._useDefaultPT(u,d==null||(c=d.pt)===null||c===void 0||(c=c.directives)===null||c===void 0?void 0:c[e],je._getOptionValue,"hooks.".concat(l)),g={el:r,binding:o,vnode:i,prevVnode:s};f==null||f(u,g),h==null||h(u,g)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,t=arguments.length,r=new Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return sd(e)?e.apply(void 0,r):Wt.apply(void 0,r)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(s,a,c,l,d){var u,f,h,g;a._$instances=a._$instances||{};var v=je._getConfig(c,l),m=a._$instances[e]||{},p=so(m)?Je(Je({},t),t==null?void 0:t.methods):{};a._$instances[e]=Je(Je({},m),{},{$name:e,$host:a,$binding:c,$modifiers:c==null?void 0:c.modifiers,$value:c==null?void 0:c.value,$el:m.$el||a||void 0,$style:Je({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},t==null?void 0:t.style),$primevueConfig:v,$attrSelector:(u=a.$pd)===null||u===void 0||(u=u[e])===null||u===void 0?void 0:u.attrSelector,defaultPT:function(){return je._getPT(v==null?void 0:v.pt,void 0,function(S){var x;return S==null||(x=S.directives)===null||x===void 0?void 0:x[e]})},isUnstyled:function(){var S,x;return((S=a.$instance)===null||S===void 0||(S=S.$binding)===null||S===void 0||(S=S.value)===null||S===void 0?void 0:S.unstyled)!==void 0?(x=a.$instance)===null||x===void 0||(x=x.$binding)===null||x===void 0||(x=x.value)===null||x===void 0?void 0:x.unstyled:v==null?void 0:v.unstyled},theme:function(){var S;return(S=a.$instance)===null||S===void 0||(S=S.$primevueConfig)===null||S===void 0?void 0:S.theme},preset:function(){var S;return(S=a.$instance)===null||S===void 0||(S=S.$binding)===null||S===void 0||(S=S.value)===null||S===void 0?void 0:S.dt},ptm:function(){var S,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return je._getPTValue(a.$instance,(S=a.$instance)===null||S===void 0||(S=S.$binding)===null||S===void 0||(S=S.value)===null||S===void 0?void 0:S.pt,x,Je({},L))},ptmo:function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",L=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return je._getPTValue(a.$instance,S,x,L,!1)},cx:function(){var S,x,L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(S=a.$instance)!==null&&S!==void 0&&S.isUnstyled()?void 0:je._getOptionValue((x=a.$instance)===null||x===void 0||(x=x.$style)===null||x===void 0?void 0:x.classes,L,Je({},D))},sx:function(){var S,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return L?je._getOptionValue((S=a.$instance)===null||S===void 0||(S=S.$style)===null||S===void 0?void 0:S.inlineStyles,x,Je({},D)):void 0}},p),a.$instance=a._$instances[e],(f=(h=a.$instance)[s])===null||f===void 0||f.call(h,a,c,l,d),a["$".concat(e)]=a.$instance,je._hook(e,s,a,c,l,d),a.$pd||(a.$pd={}),a.$pd[e]=Je(Je({},(g=a.$pd)===null||g===void 0?void 0:g[e]),{},{name:e,instance:a.$instance})},o=function(s){var a,c,l,d,u,f=(a=s.$instance)===null||a===void 0?void 0:a.watch;f==null||(c=f.config)===null||c===void 0||c.call(s.$instance,(l=s.$instance)===null||l===void 0?void 0:l.$primevueConfig),Lo.on("config:change",function(h){var g,v=h.newValue,m=h.oldValue;return f==null||(g=f.config)===null||g===void 0?void 0:g.call(s.$instance,v,m)}),f==null||(d=f["config.ripple"])===null||d===void 0||d.call(s.$instance,(u=s.$instance)===null||u===void 0||(u=u.$primevueConfig)===null||u===void 0?void 0:u.ripple),Lo.on("config:ripple:change",function(h){var g,v=h.newValue,m=h.oldValue;return f==null||(g=f["config.ripple"])===null||g===void 0?void 0:g.call(s.$instance,v,m)})};return{created:function(s,a,c,l){s.$pd||(s.$pd={}),s.$pd[e]={name:e,attrSelector:qp("pd")},r("created",s,a,c,l)},beforeMount:function(s,a,c,l){je._loadStyles(s,a,c),r("beforeMount",s,a,c,l),o(s)},mounted:function(s,a,c,l){je._loadStyles(s,a,c),r("mounted",s,a,c,l)},beforeUpdate:function(s,a,c,l){r("beforeUpdate",s,a,c,l)},updated:function(s,a,c,l){je._loadStyles(s,a,c),r("updated",s,a,c,l)},beforeUnmount:function(s,a,c,l){r("beforeUnmount",s,a,c,l)},unmounted:function(s,a,c,l){var d;(d=s.$instance)===null||d===void 0||(d=d.scopedStyleEl)===null||d===void 0||(d=d.value)===null||d===void 0||d.remove(),r("unmounted",s,a,c,l)}}},extend:function(){var e=je._getMeta.apply(je,arguments),t=Uf(e,2),r=t[0],o=t[1];return Je({extend:function(){var s=je._getMeta.apply(je,arguments),a=Uf(s,2),c=a[0],l=a[1];return je.extend(c,Je(Je(Je({},o),o==null?void 0:o.methods),l))}},je._extend(r,o))}},Nw=function(e){var t=e.dt;return`
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
`)},Bw={root:"p-ink"},Fw=gt.extend({name:"ripple-directive",theme:Nw,classes:Bw}),zw=je.extend({style:Fw});function Yi(n){"@babel/helpers - typeof";return Yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yi(n)}function Hw(n){return $w(n)||Ww(n)||Gw(n)||Vw()}function Vw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gw(n,e){if(n){if(typeof n=="string")return gl(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?gl(n,e):void 0}}function Ww(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function $w(n){if(Array.isArray(n))return gl(n)}function gl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function Bf(n,e,t){return(e=Xw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Xw(n){var e=jw(n,"string");return Yi(e)=="symbol"?e:e+""}function jw(n,e){if(Yi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Yw=zw.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var t=GE("span",Bf(Bf({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(t),this.$el=t},remove:function(e){var t=this.getInk(e);t&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=this,r=e.currentTarget,o=this.getInk(r);if(!(!o||getComputedStyle(o,null).display==="none")){if(!this.isUnstyled()&&fc(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"),!Mf(o)&&!Ef(o)){var i=Math.max(VE(r),YE(r));o.style.height=i+"px",o.style.width=i+"px"}var s=jE(r),a=e.pageX-s.left+document.body.scrollTop-Ef(o)/2,c=e.pageY-s.top+document.body.scrollLeft-Mf(o)/2;o.style.top=c+"px",o.style.left=a+"px",!this.isUnstyled()&&HE(o,"p-ink-active"),o.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){o&&(!t.isUnstyled()&&fc(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&fc(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?Hw(e.children).find(function(t){return $E(t,"data-pc-name")==="ripple"}):void 0}}});function qi(n){"@babel/helpers - typeof";return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qi(n)}function In(n,e,t){return(e=qw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function qw(n){var e=Kw(n,"string");return qi(e)=="symbol"?e:e+""}function Kw(n,e){if(qi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(qi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Zw=function(e){var t=e.dt;return`
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
`)},Jw={root:function(e){var t=e.instance,r=e.props;return["p-button p-component",In(In(In(In(In(In(In(In(In({"p-button-icon-only":t.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link||r.variant==="link"},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text||r.variant==="text"),"p-button-outlined",r.outlined||r.variant==="outlined"),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",t.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var t=e.props;return["p-button-icon",In({},"p-button-icon-".concat(t.iconPos),t.label)]},label:"p-button-label"},Qw=gt.extend({name:"button",theme:Zw,classes:Jw}),e1={name:"BaseButton",extends:cd,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:Qw,provide:function(){return{$pcButton:this,$parentInstance:this}}},ld={name:"Button",extends:e1,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return Wt(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return so(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:Qp,Badge:em},directives:{ripple:Yw}};function t1(n,e,t,r,o,i){var s=_c("SpinnerIcon"),a=_c("Badge"),c=fg("ripple");return n.asChild?pi(n.$slots,"default",{key:1,class:Pi(n.cx("root")),a11yAttrs:i.a11yAttrs}):Km((Dt(),Rr(ug(n.as),Wt({key:0,class:n.cx("root")},i.attrs),{default:vh(function(){return[pi(n.$slots,"default",{},function(){return[n.loading?pi(n.$slots,"loadingicon",Wt({key:0,class:[n.cx("loadingIcon"),n.cx("icon")]},n.ptm("loadingIcon")),function(){return[n.loadingIcon?(Dt(),dr("span",Wt({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(Dt(),Rr(s,Wt({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):pi(n.$slots,"icon",Wt({key:1,class:[n.cx("icon")]},n.ptm("icon")),function(){return[n.icon?(Dt(),dr("span",Wt({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):Ld("",!0)]}),ei("span",Wt({class:n.cx("label")},n.ptm("label")),Sl(n.label||" "),17),n.badge?(Dt(),Rr(a,{key:2,value:n.badge,class:Pi(n.badgeClass),severity:n.badgeSeverity,unstyled:n.unstyled,pt:n.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):Ld("",!0)]})]}),_:3},16,["class"])),[[c]])}ld.render=t1;const n1={class:"controls"},r1={__name:"ControlPanel",emits:["toggle-animation","toggle-rotation","toggle-zoom","toggle-pan"],setup(n,{emit:e}){const t=e,r=Zt(!0),o=Zt(!0),i=Zt(!0);Zt(!1);const s=()=>{r.value=!r.value,t("toggle-animation",r.value)},a=()=>{o.value=!o.value,t("toggle-zoom",o.value)},c=()=>{i.value=!i.value,t("toggle-rotation",i.value)};return(l,d)=>{const u=ld;return Dt(),dr("div",n1,[wt(u,{icon:r.value?"pi pi-pause":"pi pi-caret-right",severity:"secondary",text:!r.value,onClick:s},null,8,["icon","text"]),wt(u,{icon:"pi pi-arrows-v",severity:"secondary",text:!o.value,onClick:a},null,8,["text"]),wt(u,{icon:"pi pi-undo",severity:"secondary",text:!i.value,onClick:c},null,8,["text"])])}}},o1=ti(r1,[["__scopeId","data-v-bcb9ee77"]]),i1={class:"canvas-warpper"},s1={__name:"ThreeCanvas",setup(n){const e=Zt(null);let t=null;const r=Zt(!0),o=Zt(!0),i=Zt(!0),s=Zt(!1),a=u=>{r.value=u},c=u=>{o.value=u,t.enableZoom=u},l=u=>{i.value=u,t.enableRotate=u},d=u=>{s.value=u,t.enablePan=u};return Ul(()=>{const u=new c_,f=new M_,h=new g_,g=B=>{const z=h.load(B);return z.wrapS=Fi,z.wrapT=Fi,z.mapping=Ks,z.colorSpace=sn,z},v=g("/textures/space/2k_stars_milky_way.jpg"),m=g("/textures/space/2k_sun.jpg"),p=g("/textures/space/2k_mercury.jpg"),w=g("/textures/space/2k_venus_surface.jpg"),S=g("/textures/space/2k_earth_daymap.jpg"),x=g("/textures/space/2k_moon.jpg"),L=g("/textures/space/2k_eris_fictional.jpg"),D=g("/textures/space/2k_mars.jpg"),R=g("/textures/space/2k_jupiter.jpg"),O=g("/textures/space/2k_saturn.jpg"),T=g("/textures/space/2k_saturn_ring_alpha.png"),E=g("/textures/space/2k_uranus.jpg"),k=g("/textures/space/2k_neptune.jpg"),te=new Qs(256,64,64),W=new ed({map:v,side:jt}),se=new pn(te,W);u.add(se);const re=new cE({canvas:e.value,antialias:!0});re.setSize(window.innerWidth,window.innerHeight),re.setPixelRatio(window.devicePixelRatio>1?2:1),re.shadowMap.enabled=!0;const Y=new cn(75,window.innerWidth/window.innerHeight,.1,1e3);Y.position.set(-64,32,32),u.add(Y),(()=>{u.add(new y_("white",.1));const B=new __("white",2048,2048);B.position.set(0,0,0),B.castShadow=!0,B.shadow.mapSize.set(256,256),B.shadow.camera.near=1,B.shadow.camera.far=256,u.add(B)})();const F=(B,z)=>new pn(new Qs(B,32,32),new Uu({map:z})),he=F(12,m);he.material.emissive=new Ke("white"),he.material.emissiveMap=m,he.material.emissiveIntensity=.75;const ge=F(.8,p),_e=F(2,w),Te=F(2,S),Oe=F(.5,x),Q=F(1.1,D),pe=F(5,R),be=F(4.2,O),I=F(1.8,E),oe=F(1.8,k);u.add(he),Te.add(Oe),Te.rotation.x=Vs.degToRad(23.5),be.rotation.x=Vs.degToRad(27);const ue=(()=>{const B=new nd(7,9,64),z=new Uu({side:Bn,opacity:.75,transparent:!0,emissive:new Ke("white"),emissiveMap:T,emissiveIntensity:.75}),ce=new pn(B,z);return ce.rotation.x=Math.PI/2,ce})();be.add(ue);const Pe=new Po;Pe.rotation.y=Vs.degToRad(135),ge.position.set(20,1.2,-3),_e.position.set(25,-1.5,4),Te.position.set(40,0,0),Oe.position.set(4,0,0),Q.position.set(50,-3,5),pe.position.set(90,4,-3),be.position.set(130,-3,7),I.position.set(160,4,-5),oe.position.set(190,-4.5,4),Pe.add(ge,_e,Te,Q,pe,be,I,oe),u.add(Pe);const C=new Po,A=1024,_=[];for(let B=0;B<A;B++){const z=Math.random()*.1+.2,ce=F(z,null);ce.material.emissive=new Ke("white"),ce.material.emissiveMap=L,ce.material.emissiveIntensity=.75,ce.position.set(Math.random()*384-192,Math.random()*384-192,Math.random()*384-192),C.add(ce),_.push(ce)}u.add(C);function ee(B){const z=B*.025;_.forEach((ce,le)=>{const ve=(Math.sin(z+le*.5)+1)*.375;ce.material.emissiveIntensity=ve}),requestAnimationFrame(ee)}requestAnimationFrame(ee),t=new dE(Y,re.domElement),t.maxDistance=256,t.minDistance=32,t.enableZoom=o.value,t.enableRotate=i.value,t.enablePan=s.value;const X=new E_,$=new ze,J=B=>{$.x=B.clientX/window.innerWidth*2-1,$.y=-(B.clientY/window.innerHeight)*2+1,X.setFromCamera($,Y);const z=X.intersectObjects([he,Te,Oe]);if(z.length>0){const ce=z[0].object;ce===he?console.log("Sun clicked",ce):ce===Te?console.log("Earth clicked",ce):ce===Oe&&console.log("Moon clicked",ce)}};window.addEventListener("click",J);const ae=[{object:he,speed:16},{object:Pe,speed:4},{object:Te,speed:1},{object:Oe,speed:.25},{object:ge,speed:1.5},{object:_e,speed:.5},{object:Q,speed:1.2},{object:pe,speed:.3},{object:be,speed:.4},{object:I,speed:.6},{object:oe,speed:.5},{object:C,speed:32}],K=[{object:ge,speed:.06,radius:20,yOffset:1.2},{object:_e,speed:.03,radius:25,yOffset:-1.5},{object:Te,speed:.02,radius:40,yOffset:0},{object:Q,speed:.01,radius:50,yOffset:-3},{object:pe,speed:.004,radius:90,yOffset:4},{object:be,speed:.002,radius:130,yOffset:-3},{object:I,speed:.002,radius:160,yOffset:4},{object:oe,speed:.001,radius:190,yOffset:-4.5}],y={};K.forEach(({object:B})=>{y[B.uuid]=Math.random()*Math.PI*2});const b=B=>{ae.forEach(({object:z,speed:ce})=>{z.rotation.y+=B/ce}),K.forEach(({object:z,speed:ce,radius:le,yOffset:ve})=>{y[z.uuid]+=B*ce;const ke=y[z.uuid];z.position.set(Math.cos(ke)*le,ve,Math.sin(ke)*le)})},P=()=>{const B=f.getDelta();r.value&&b(B),re.render(u,Y),re.setAnimationLoop(P)},G=()=>{const{innerWidth:B,innerHeight:z}=window;Y.aspect=B/z,Y.updateProjectionMatrix(),re.setSize(B,z)};window.addEventListener("resize",G),P(),Ol(()=>{window.removeEventListener("resize",G),window.removeEventListener("click",J),re.setAnimationLoop(null)})}),(u,f)=>(Dt(),dr("div",i1,[ei("canvas",{id:"canvas",ref_key:"canvas",ref:e},null,512),wt(o1,{onToggleAnimation:a,onToggleZoom:c,onToggleRotation:l,onTogglePan:d})]))}},a1=ti(s1,[["__scopeId","data-v-76139900"]]),c1={__name:"Home",setup(n){return(e,t)=>(Dt(),Rr(a1))}},l1={};function d1(n,e){return Dt(),dr("div",null,"노트에용")}const u1=ti(l1,[["render",d1]]),f1={};function h1(n,e){const t=ld;return Dt(),dr(an,null,[e[0]||(e[0]=ei("div",null,"갤러리에요",-1)),wt(t,{label:"버튼"})],64)}const p1=ti(f1,[["render",h1]]),m1={};function g1(n,e){return Dt(),dr("div",null,"Serene1004")}const b1=ti(m1,[["render",g1]]),v1=[{path:"/",name:"Home",component:c1},{path:"/notes",name:"Notes",component:u1},{path:"/gallery",name:"Gallery",component:p1},{path:"/contact",name:"Contact",component:b1}],_1=Db({history:sb(),routes:v1});var Ot={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Ki(n){"@babel/helpers - typeof";return Ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ki(n)}function Ff(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function ks(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ff(Object(t),!0).forEach(function(r){x1(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ff(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function x1(n,e,t){return(e=y1(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function y1(n){var e=S1(n,"string");return Ki(e)=="symbol"?e:e+""}function S1(n,e){if(Ki(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var M1={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Ot.STARTS_WITH,Ot.CONTAINS,Ot.NOT_CONTAINS,Ot.ENDS_WITH,Ot.EQUALS,Ot.NOT_EQUALS],numeric:[Ot.EQUALS,Ot.NOT_EQUALS,Ot.LESS_THAN,Ot.LESS_THAN_OR_EQUAL_TO,Ot.GREATER_THAN,Ot.GREATER_THAN_OR_EQUAL_TO],date:[Ot.DATE_IS,Ot.DATE_IS_NOT,Ot.DATE_BEFORE,Ot.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},E1=Symbol();function w1(n,e){var t={config:Ji(e)};return n.config.globalProperties.$primevue=t,n.provide(E1,t),T1(),C1(n,t),t}var ko=[];function T1(){Mn.clear(),ko.forEach(function(n){return n==null?void 0:n()}),ko=[]}function C1(n,e){var t=Zt(!1),r=function(){var l;if(((l=e.config)===null||l===void 0?void 0:l.theme)!=="none"&&!ct.isStyleNameLoaded("common")){var d,u,f=((d=gt.getCommonTheme)===null||d===void 0?void 0:d.call(gt))||{},h=f.primitive,g=f.semantic,v=f.global,m=f.style,p={nonce:(u=e.config)===null||u===void 0||(u=u.csp)===null||u===void 0?void 0:u.nonce};gt.load(h==null?void 0:h.css,ks({name:"primitive-variables"},p)),gt.load(g==null?void 0:g.css,ks({name:"semantic-variables"},p)),gt.load(v==null?void 0:v.css,ks({name:"global-variables"},p)),gt.loadTheme(ks({name:"global-style"},p),m),ct.setLoadedStyleName("common")}};Mn.on("theme:change",function(c){t.value||(n.config.globalProperties.$primevue.config.theme=c,t.value=!0)});var o=or(e.config,function(c,l){Lo.emit("config:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0}),i=or(function(){return e.config.ripple},function(c,l){Lo.emit("config:ripple:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0}),s=or(function(){return e.config.theme},function(c,l){t.value||ct.setTheme(c),e.config.unstyled||r(),t.value=!1,Lo.emit("config:theme:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!1}),a=or(function(){return e.config.unstyled},function(c,l){!c&&e.config.theme&&r(),Lo.emit("config:unstyled:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0});ko.push(o),ko.push(i),ko.push(s),ko.push(a)}var A1={install:function(e,t){var r=Hp(M1,t);w1(e,r)}},R1={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}},P1={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},D1={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}},L1={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},k1={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},I1={root:{borderRadius:"{content.border.radius}"}},U1={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}},O1={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},N1={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}},B1={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},F1={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"}},z1={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}}},H1={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}},V1={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},G1={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}},W1={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}},$1={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},X1={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},j1={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}},Y1={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.375rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.375rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}},q1={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}},K1={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}},Z1={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},J1={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}},Q1={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}},eT={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}},tT={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}},nT={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}},rT={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}},oT={icon:{color:"{form.field.icon.color}"}},iT={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"}},sT={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},aT={handle:{size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},cT={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},lT={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}},dT={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}},uT={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"}},fT={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},hT={root:{gap:"0.5rem"},input:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}}},pT={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},mT={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}},gT={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}},bT={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},vT={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}},_T={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},xT={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}},yT={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}},ST={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}},MT={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},ET={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}},wT={root:{outline:{width:"2px",color:"{content.background}"}}},TT={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}},CT={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}},AT={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}},RT={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}},PT={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},DT={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}},LT={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}},kT={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}},IT={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}}},UT={root:{gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},OT={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}},NT={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},BT={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}},FT={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},zT={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},HT={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}},VT={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}},GT={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}},WT={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},$T={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"}},XT={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},jT={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}},YT={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},qT={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},KT={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},ZT={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}},JT={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},QT={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},eC={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}},tC={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},nC={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.375rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.625rem 1.25rem"}},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}},rC={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}}},oC={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}},iC={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},sC={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.5rem 0"}},aC={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}},cC={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},lC={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};function Zi(n){"@babel/helpers - typeof";return Zi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zi(n)}function zf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Hf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?zf(Object(t),!0).forEach(function(r){dC(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):zf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function dC(n,e,t){return(e=uC(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function uC(n){var e=fC(n,"string");return Zi(e)=="symbol"?e:e+""}function fC(n,e){if(Zi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Zi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var hC=Hf(Hf({},k1),{},{components:{accordion:R1,autocomplete:P1,avatar:D1,badge:L1,blockui:I1,breadcrumb:U1,button:O1,datepicker:Y1,card:N1,carousel:B1,cascadeselect:F1,checkbox:z1,chip:H1,colorpicker:V1,confirmdialog:G1,confirmpopup:W1,contextmenu:$1,dataview:j1,datatable:X1,dialog:q1,divider:K1,dock:Z1,drawer:J1,editor:Q1,fieldset:eT,fileupload:tT,iftalabel:iT,floatlabel:nT,galleria:rT,iconfield:oT,image:sT,imagecompare:aT,inlinemessage:cT,inplace:lT,inputchips:dT,inputgroup:uT,inputnumber:fT,inputotp:hT,inputtext:pT,knob:mT,listbox:gT,megamenu:bT,menu:vT,menubar:_T,message:xT,metergroup:yT,multiselect:ST,orderlist:MT,organizationchart:ET,overlaybadge:wT,popover:DT,paginator:TT,password:RT,panel:CT,panelmenu:AT,picklist:PT,progressbar:LT,progressspinner:kT,radiobutton:IT,rating:UT,scrollpanel:NT,select:BT,selectbutton:FT,skeleton:zT,slider:HT,speeddial:VT,splitter:WT,splitbutton:GT,stepper:$T,steps:XT,tabmenu:jT,tabs:YT,tabview:qT,textarea:JT,tieredmenu:QT,tag:KT,terminal:ZT,timeline:eC,togglebutton:nC,toggleswitch:rC,tree:sC,treeselect:aC,treetable:cC,toast:tC,toolbar:oC,virtualscroller:lC},directives:{tooltip:iC,ripple:OT}});const pC={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1em",anchorGutter:"2px",primary:{50:"#f8faf8",100:"#dfe7df",200:"#c6d3c6",300:"#adc0ad",400:"#94ac93",500:"#7b997a",600:"#698268",700:"#566b55",800:"#445443",900:"#313d31",950:"#1f261f"},formField:{paddingX:"0.75em",paddingY:"0.5em",sm:{fontSize:"0.875em",paddingX:"0.625em",paddingY:"0.375em"},lg:{fontSize:"1.125em",paddingX:"0.875em",paddingY:"0.625em"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25em 0.25em",gap:"2px",header:{padding:"0.5em 1em 0.25em 1em"},option:{padding:"0.5em 0.75em",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5em 0.75em",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25em 0.25em",gap:"2px"},item:{padding:"0.5em 0.75em",borderRadius:"{border.radius.sm}",gap:"0.5em"},submenuLabel:{padding:"0.5em 0.75em",fontWeight:"600"},submenuIcon:{size:"0.875em"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75em",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25em",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},dd=M0(A0),mC=LE(hC,pC);dd.use(A1,{theme:{preset:mC,options:{prefix:"p",darkModeSelector:".dark",cssLayer:!1}},ripple:!0});dd.use(_1);dd.mount("#app");

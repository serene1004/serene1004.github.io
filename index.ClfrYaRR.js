(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function gf(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const mt={},os=[],Cr=()=>{},kv=()=>!1,mc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),_f=n=>n.startsWith("onUpdate:"),$t=Object.assign,bf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Lv=Object.prototype.hasOwnProperty,at=(n,e)=>Lv.call(n,e),Ne=Array.isArray,ss=n=>gc(n)==="[object Map]",Bg=n=>gc(n)==="[object Set]",ze=n=>typeof n=="function",Dt=n=>typeof n=="string",ii=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Fg=n=>(xt(n)||ze(n))&&ze(n.then)&&ze(n.catch),zg=Object.prototype.toString,gc=n=>zg.call(n),Iv=n=>gc(n).slice(8,-1),Hg=n=>gc(n)==="[object Object]",vf=n=>Dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Js=gf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_c=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ov=/-(\w)/g,Jn=_c(n=>n.replace(Ov,(e,t)=>t?t.toUpperCase():"")),Uv=/\B([A-Z])/g,So=_c(n=>n.replace(Uv,"-$1").toLowerCase()),bc=_c(n=>n.charAt(0).toUpperCase()+n.slice(1)),Vc=_c(n=>n?`on${bc(n)}`:""),Ci=(n,e)=>!Object.is(n,e),Gc=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Vg=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Nv=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Bv=n=>{const e=Dt(n)?Number(n):NaN;return isNaN(e)?n:e};let Lh;const vc=()=>Lh||(Lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yf(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=Dt(r)?Vv(r):yf(r);if(i)for(const o in i)e[o]=i[o]}return e}else if(Dt(n)||xt(n))return n}const Fv=/;(?![^(]*\))/g,zv=/:([^]+)/,Hv=/\/\*[^]*?\*\//g;function Vv(n){const e={};return n.replace(Hv,"").split(Fv).forEach(t=>{if(t){const r=t.split(zv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gs(n){let e="";if(Dt(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const r=gs(n[t]);r&&(e+=r+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Gv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wv=gf(Gv);function Gg(n){return!!n||n===""}const Wg=n=>!!(n&&n.__v_isRef===!0),pa=n=>Dt(n)?n:n==null?"":Ne(n)||xt(n)&&(n.toString===zg||!ze(n.toString))?Wg(n)?pa(n.value):JSON.stringify(n,$g,2):String(n),$g=(n,e)=>Wg(e)?$g(n,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i],o)=>(t[Wc(r,o)+" =>"]=i,t),{})}:Bg(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Wc(t))}:ii(e)?Wc(e):xt(e)&&!Ne(e)&&!Hg(e)?String(e):e,Wc=(n,e="")=>{var t;return ii(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let un;class Xg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=un;try{return un=this,e()}finally{un=t}}}on(){un=this}off(){un=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function jg(n){return new Xg(n)}function Yg(){return un}function $v(n,e=!1){un&&un.cleanups.push(n)}let bt;const $c=new WeakSet;class qg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,un&&un.active&&un.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$c.has(this)&&($c.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ih(this),Jg(this);const e=bt,t=dr;bt=this,dr=!0;try{return this.fn()}finally{Qg(this),bt=e,dr=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mf(e);this.deps=this.depsTail=void 0,Ih(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ju(this)&&this.run()}get dirty(){return ju(this)}}let Kg=0,Qs,ea;function Zg(n,e=!1){if(n.flags|=8,e){n.next=ea,ea=n;return}n.next=Qs,Qs=n}function xf(){Kg++}function Sf(){if(--Kg>0)return;if(ea){let e=ea;for(ea=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Qs;){let e=Qs;for(Qs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Jg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qg(n){let e,t=n.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),Mf(r),Xv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}n.deps=e,n.depsTail=t}function ju(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(e0(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function e0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ma))return;n.globalVersion=ma;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ju(n)){n.flags&=-3;return}const t=bt,r=dr;bt=n,dr=!0;try{Jg(n);const i=n.fn(n._value);(e.version===0||Ci(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{bt=t,dr=r,Qg(n),n.flags&=-3}}function Mf(n,e=!1){const{dep:t,prevSub:r,nextSub:i}=n;if(r&&(r.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Mf(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Xv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let dr=!0;const t0=[];function Bi(){t0.push(dr),dr=!1}function Fi(){const n=t0.pop();dr=n===void 0?!0:n}function Ih(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=bt;bt=void 0;try{e()}finally{bt=t}}}let ma=0;class jv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ef{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!bt||!dr||bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==bt)t=this.activeLink=new jv(bt,this),bt.deps?(t.prevDep=bt.depsTail,bt.depsTail.nextDep=t,bt.depsTail=t):bt.deps=bt.depsTail=t,n0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=bt.depsTail,t.nextDep=void 0,bt.depsTail.nextDep=t,bt.depsTail=t,bt.deps===t&&(bt.deps=r)}return t}trigger(e){this.version++,ma++,this.notify(e)}notify(e){xf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Sf()}}}function n0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)n0(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ql=new WeakMap,uo=Symbol(""),Yu=Symbol(""),ga=Symbol("");function Qt(n,e,t){if(dr&&bt){let r=ql.get(n);r||ql.set(n,r=new Map);let i=r.get(t);i||(r.set(t,i=new Ef),i.map=r,i.key=t),i.track()}}function qr(n,e,t,r,i,o){const s=ql.get(n);if(!s){ma++;return}const a=l=>{l&&l.trigger()};if(xf(),e==="clear")s.forEach(a);else{const l=Ne(n),c=l&&vf(t);if(l&&t==="length"){const u=Number(r);s.forEach((d,f)=>{(f==="length"||f===ga||!ii(f)&&f>=u)&&a(d)})}else switch((t!==void 0||s.has(void 0))&&a(s.get(t)),c&&a(s.get(ga)),e){case"add":l?c&&a(s.get("length")):(a(s.get(uo)),ss(n)&&a(s.get(Yu)));break;case"delete":l||(a(s.get(uo)),ss(n)&&a(s.get(Yu)));break;case"set":ss(n)&&a(s.get(uo));break}}Sf()}function Yv(n,e){const t=ql.get(n);return t&&t.get(e)}function Ro(n){const e=Ze(n);return e===n?e:(Qt(e,"iterate",ga),fr(n)?e:e.map(dn))}function wf(n){return Qt(n=Ze(n),"iterate",ga),n}const qv={__proto__:null,[Symbol.iterator](){return Xc(this,Symbol.iterator,dn)},concat(...n){return Ro(this).concat(...n.map(e=>Ne(e)?Ro(e):e))},entries(){return Xc(this,"entries",n=>(n[1]=dn(n[1]),n))},every(n,e){return Ur(this,"every",n,e,void 0,arguments)},filter(n,e){return Ur(this,"filter",n,e,t=>t.map(dn),arguments)},find(n,e){return Ur(this,"find",n,e,dn,arguments)},findIndex(n,e){return Ur(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ur(this,"findLast",n,e,dn,arguments)},findLastIndex(n,e){return Ur(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ur(this,"forEach",n,e,void 0,arguments)},includes(...n){return jc(this,"includes",n)},indexOf(...n){return jc(this,"indexOf",n)},join(n){return Ro(this).join(n)},lastIndexOf(...n){return jc(this,"lastIndexOf",n)},map(n,e){return Ur(this,"map",n,e,void 0,arguments)},pop(){return Us(this,"pop")},push(...n){return Us(this,"push",n)},reduce(n,...e){return Oh(this,"reduce",n,e)},reduceRight(n,...e){return Oh(this,"reduceRight",n,e)},shift(){return Us(this,"shift")},some(n,e){return Ur(this,"some",n,e,void 0,arguments)},splice(...n){return Us(this,"splice",n)},toReversed(){return Ro(this).toReversed()},toSorted(n){return Ro(this).toSorted(n)},toSpliced(...n){return Ro(this).toSpliced(...n)},unshift(...n){return Us(this,"unshift",n)},values(){return Xc(this,"values",dn)}};function Xc(n,e,t){const r=wf(n),i=r[e]();return r!==n&&!fr(n)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=t(o.value)),o}),i}const Kv=Array.prototype;function Ur(n,e,t,r,i,o){const s=wf(n),a=s!==n&&!fr(n),l=s[e];if(l!==Kv[e]){const d=l.apply(n,o);return a?dn(d):d}let c=t;s!==n&&(a?c=function(d,f){return t.call(this,dn(d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(s,c,r);return a&&i?i(u):u}function Oh(n,e,t,r){const i=wf(n);let o=t;return i!==n&&(fr(n)?t.length>3&&(o=function(s,a,l){return t.call(this,s,a,l,n)}):o=function(s,a,l){return t.call(this,s,dn(a),l,n)}),i[e](o,...r)}function jc(n,e,t){const r=Ze(n);Qt(r,"iterate",ga);const i=r[e](...t);return(i===-1||i===!1)&&Rf(t[0])?(t[0]=Ze(t[0]),r[e](...t)):i}function Us(n,e,t=[]){Bi(),xf();const r=Ze(n)[e].apply(n,t);return Sf(),Fi(),r}const Zv=gf("__proto__,__v_isRef,__isVue"),r0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ii));function Jv(n){ii(n)||(n=String(n));const e=Ze(this);return Qt(e,"has",n),e.hasOwnProperty(n)}class i0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(i?o?ly:l0:o?a0:s0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=Ne(e);if(!i){let l;if(s&&(l=qv[t]))return l;if(t==="hasOwnProperty")return Jv}const a=Reflect.get(e,t,Ct(e)?e:r);return(ii(t)?r0.has(t):Zv(t))||(i||Qt(e,"get",t),o)?a:Ct(a)?s&&vf(t)?a:a.value:xt(a)?i?Cf(a):Mo(a):a}}class o0 extends i0{constructor(e=!1){super(!1,e)}set(e,t,r,i){let o=e[t];if(!this._isShallow){const l=_o(o);if(!fr(r)&&!_o(r)&&(o=Ze(o),r=Ze(r)),!Ne(e)&&Ct(o)&&!Ct(r))return l?!1:(o.value=r,!0)}const s=Ne(e)&&vf(t)?Number(t)<e.length:at(e,t),a=Reflect.set(e,t,r,Ct(e)?e:i);return e===Ze(i)&&(s?Ci(r,o)&&qr(e,"set",t,r):qr(e,"add",t,r)),a}deleteProperty(e,t){const r=at(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&r&&qr(e,"delete",t,void 0),i}has(e,t){const r=Reflect.has(e,t);return(!ii(t)||!r0.has(t))&&Qt(e,"has",t),r}ownKeys(e){return Qt(e,"iterate",Ne(e)?"length":uo),Reflect.ownKeys(e)}}class Qv extends i0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ey=new o0,ty=new Qv,ny=new o0(!0);const qu=n=>n,ol=n=>Reflect.getPrototypeOf(n);function ry(n,e,t){return function(...r){const i=this.__v_raw,o=Ze(i),s=ss(o),a=n==="entries"||n===Symbol.iterator&&s,l=n==="keys"&&s,c=i[n](...r),u=t?qu:e?Ku:dn;return!e&&Qt(o,"iterate",l?Yu:uo),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function sl(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function iy(n,e){const t={get(i){const o=this.__v_raw,s=Ze(o),a=Ze(i);n||(Ci(i,a)&&Qt(s,"get",i),Qt(s,"get",a));const{has:l}=ol(s),c=e?qu:n?Ku:dn;if(l.call(s,i))return c(o.get(i));if(l.call(s,a))return c(o.get(a));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!n&&Qt(Ze(i),"iterate",uo),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,s=Ze(o),a=Ze(i);return n||(Ci(i,a)&&Qt(s,"has",i),Qt(s,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const s=this,a=s.__v_raw,l=Ze(a),c=e?qu:n?Ku:dn;return!n&&Qt(l,"iterate",uo),a.forEach((u,d)=>i.call(o,c(u),c(d),s))}};return $t(t,n?{add:sl("add"),set:sl("set"),delete:sl("delete"),clear:sl("clear")}:{add(i){!e&&!fr(i)&&!_o(i)&&(i=Ze(i));const o=Ze(this);return ol(o).has.call(o,i)||(o.add(i),qr(o,"add",i,i)),this},set(i,o){!e&&!fr(o)&&!_o(o)&&(o=Ze(o));const s=Ze(this),{has:a,get:l}=ol(s);let c=a.call(s,i);c||(i=Ze(i),c=a.call(s,i));const u=l.call(s,i);return s.set(i,o),c?Ci(o,u)&&qr(s,"set",i,o):qr(s,"add",i,o),this},delete(i){const o=Ze(this),{has:s,get:a}=ol(o);let l=s.call(o,i);l||(i=Ze(i),l=s.call(o,i)),a&&a.call(o,i);const c=o.delete(i);return l&&qr(o,"delete",i,void 0),c},clear(){const i=Ze(this),o=i.size!==0,s=i.clear();return o&&qr(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ry(i,n,e)}),t}function Tf(n,e){const t=iy(n,e);return(r,i,o)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(at(t,i)&&i in r?t:r,i,o)}const oy={get:Tf(!1,!1)},sy={get:Tf(!1,!0)},ay={get:Tf(!0,!1)};const s0=new WeakMap,a0=new WeakMap,l0=new WeakMap,ly=new WeakMap;function cy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uy(n){return n.__v_skip||!Object.isExtensible(n)?0:cy(Iv(n))}function Mo(n){return _o(n)?n:Af(n,!1,ey,oy,s0)}function c0(n){return Af(n,!1,ny,sy,a0)}function Cf(n){return Af(n,!0,ty,ay,l0)}function Af(n,e,t,r,i){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=i.get(n);if(o)return o;const s=uy(n);if(s===0)return n;const a=new Proxy(n,s===2?r:t);return i.set(n,a),a}function Ai(n){return _o(n)?Ai(n.__v_raw):!!(n&&n.__v_isReactive)}function _o(n){return!!(n&&n.__v_isReadonly)}function fr(n){return!!(n&&n.__v_isShallow)}function Rf(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function Pf(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&Vg(n,"__v_skip",!0),n}const dn=n=>xt(n)?Mo(n):n,Ku=n=>xt(n)?Cf(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function Un(n){return u0(n,!1)}function dy(n){return u0(n,!0)}function u0(n,e){return Ct(n)?n:new fy(n,e)}class fy{constructor(e,t){this.dep=new Ef,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ze(e),this._value=t?e:dn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||fr(e)||_o(e);e=r?e:Ze(e),Ci(e,t)&&(this._rawValue=e,this._value=r?e:dn(e),this.dep.trigger())}}function Bt(n){return Ct(n)?n.value:n}const hy={get:(n,e,t)=>e==="__v_raw"?n:Bt(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return Ct(i)&&!Ct(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function d0(n){return Ai(n)?n:new Proxy(n,hy)}function py(n){const e=Ne(n)?new Array(n.length):{};for(const t in n)e[t]=f0(n,t);return e}class my{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Yv(Ze(this._object),this._key)}}class gy{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function _y(n,e,t){return Ct(n)?n:ze(n)?new gy(n):xt(n)&&arguments.length>1?f0(n,e,t):Un(n)}function f0(n,e,t){const r=n[e];return Ct(r)?r:new my(n,e,t)}class by{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ef(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ma-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return Zg(this,!0),!0}get value(){const e=this.dep.track();return e0(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vy(n,e,t=!1){let r,i;return ze(n)?r=n:(r=n.get,i=n.set),new by(r,i,t)}const al={},Kl=new WeakMap;let to;function yy(n,e=!1,t=to){if(t){let r=Kl.get(t);r||Kl.set(t,r=[]),r.push(n)}}function xy(n,e,t=mt){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:a,call:l}=t,c=b=>i?b:fr(b)||i===!1||i===0?Kr(b,1):Kr(b);let u,d,f,h,_=!1,m=!1;if(Ct(n)?(d=()=>n.value,_=fr(n)):Ai(n)?(d=()=>c(n),_=!0):Ne(n)?(m=!0,_=n.some(b=>Ai(b)||fr(b)),d=()=>n.map(b=>{if(Ct(b))return b.value;if(Ai(b))return c(b);if(ze(b))return l?l(b,2):b()})):ze(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){Bi();try{f()}finally{Fi()}}const b=to;to=u;try{return l?l(n,3,[h]):n(h)}finally{to=b}}:d=Cr,e&&i){const b=d,T=i===!0?1/0:i;d=()=>Kr(b(),T)}const g=Yg(),p=()=>{u.stop(),g&&g.active&&bf(g.effects,u)};if(o&&e){const b=e;e=(...T)=>{b(...T),p()}}let x=m?new Array(n.length).fill(al):al;const v=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const T=u.run();if(i||_||(m?T.some((R,A)=>Ci(R,x[A])):Ci(T,x))){f&&f();const R=to;to=u;try{const A=[T,x===al?void 0:m&&x[0]===al?[]:x,h];l?l(e,3,A):e(...A),x=T}finally{to=R}}}else u.run()};return a&&a(v),u=new qg(d),u.scheduler=s?()=>s(v,!1):v,h=b=>yy(b,!1,u),f=u.onStop=()=>{const b=Kl.get(u);if(b){if(l)l(b,4);else for(const T of b)T();Kl.delete(u)}},e?r?v(!0):x=u.run():s?s(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Kr(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ct(n))Kr(n.value,e,t);else if(Ne(n))for(let r=0;r<n.length;r++)Kr(n[r],e,t);else if(Bg(n)||ss(n))n.forEach(r=>{Kr(r,e,t)});else if(Hg(n)){for(const r in n)Kr(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Kr(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qa(n,e,t,r){try{return r?n(...r):n()}catch(i){yc(i,e,t)}}function pr(n,e,t,r){if(ze(n)){const i=qa(n,e,t,r);return i&&Fg(i)&&i.catch(o=>{yc(o,e,t)}),i}if(Ne(n)){const i=[];for(let o=0;o<n.length;o++)i.push(pr(n[o],e,t,r));return i}}function yc(n,e,t,r=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(o){Bi(),qa(o,null,10,[n,l,c]),Fi();return}}Sy(n,t,i,r,s)}function Sy(n,e,t,r=!0,i=!1){if(i)throw n;console.error(n)}const fn=[];let br=-1;const as=[];let gi=null,Xo=0;const h0=Promise.resolve();let Zl=null;function xc(n){const e=Zl||h0;return n?e.then(this?n.bind(this):n):e}function My(n){let e=br+1,t=fn.length;for(;e<t;){const r=e+t>>>1,i=fn[r],o=_a(i);o<n||o===n&&i.flags&2?e=r+1:t=r}return e}function Df(n){if(!(n.flags&1)){const e=_a(n),t=fn[fn.length-1];!t||!(n.flags&2)&&e>=_a(t)?fn.push(n):fn.splice(My(e),0,n),n.flags|=1,p0()}}function p0(){Zl||(Zl=h0.then(g0))}function Ey(n){Ne(n)?as.push(...n):gi&&n.id===-1?gi.splice(Xo+1,0,n):n.flags&1||(as.push(n),n.flags|=1),p0()}function Uh(n,e,t=br+1){for(;t<fn.length;t++){const r=fn[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;fn.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function m0(n){if(as.length){const e=[...new Set(as)].sort((t,r)=>_a(t)-_a(r));if(as.length=0,gi){gi.push(...e);return}for(gi=e,Xo=0;Xo<gi.length;Xo++){const t=gi[Xo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}gi=null,Xo=0}}const _a=n=>n.id==null?n.flags&2?-1:1/0:n.id;function g0(n){try{for(br=0;br<fn.length;br++){const e=fn[br];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;br<fn.length;br++){const e=fn[br];e&&(e.flags&=-2)}br=-1,fn.length=0,m0(),Zl=null,(fn.length||as.length)&&g0()}}let zt=null,_0=null;function Jl(n){const e=zt;return zt=n,_0=n&&n.type.__scopeId||null,e}function Mi(n,e=zt,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&Kh(-1);const o=Jl(e);let s;try{s=n(...i)}finally{Jl(o),r._d&&Kh(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function b0(n,e){if(zt===null)return n;const t=Cc(zt),r=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[o,s,a,l=mt]=e[i];o&&(ze(o)&&(o={mounted:o,updated:o}),o.deep&&Kr(s),r.push({dir:o,instance:t,value:s,oldValue:void 0,arg:a,modifiers:l}))}return n}function Gi(n,e,t,r){const i=n.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(Bi(),pr(l,t,8,[n.el,a,n,e]),Fi())}}const v0=Symbol("_vte"),y0=n=>n.__isTeleport,ta=n=>n&&(n.disabled||n.disabled===""),Nh=n=>n&&(n.defer||n.defer===""),Bh=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Fh=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Zu=(n,e)=>{const t=n&&n.to;return Dt(t)?e?e(t):null:t},x0={name:"Teleport",__isTeleport:!0,process(n,e,t,r,i,o,s,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:_,createText:m,createComment:g}}=c,p=ta(e.props);let{shapeFlag:x,children:v,dynamicChildren:b}=e;if(n==null){const T=e.el=m(""),R=e.anchor=m("");h(T,t,r),h(R,t,r);const A=(y,M)=>{x&16&&(i&&i.isCE&&(i.ce._teleportTarget=y),u(v,y,M,i,o,s,a,l))},P=()=>{const y=e.target=Zu(e.props,_),M=S0(y,e,m,h);y&&(s!=="svg"&&Bh(y)?s="svg":s!=="mathml"&&Fh(y)&&(s="mathml"),p||(A(y,M),Ol(e,!1)))};p&&(A(t,R),Ol(e,!0)),Nh(e.props)?cn(()=>{P(),e.el.__isMounted=!0},o):P()}else{if(Nh(e.props)&&!n.el.__isMounted){cn(()=>{x0.process(n,e,t,r,i,o,s,a,l,c),delete n.el.__isMounted},o);return}e.el=n.el,e.targetStart=n.targetStart;const T=e.anchor=n.anchor,R=e.target=n.target,A=e.targetAnchor=n.targetAnchor,P=ta(n.props),y=P?t:R,M=P?T:A;if(s==="svg"||Bh(R)?s="svg":(s==="mathml"||Fh(R))&&(s="mathml"),b?(f(n.dynamicChildren,b,y,i,o,s,a),Uf(n,e,!0)):l||d(n,e,y,M,i,o,s,a,!1),p)P?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):ll(e,t,T,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const k=e.target=Zu(e.props,_);k&&ll(e,k,null,c,0)}else P&&ll(e,R,A,c,1);Ol(e,p)}},remove(n,e,t,{um:r,o:{remove:i}},o){const{shapeFlag:s,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=n;if(d&&(i(c),i(u)),o&&i(l),s&16){const h=o||!ta(f);for(let _=0;_<a.length;_++){const m=a[_];r(m,e,t,h,!!m.dynamicChildren)}}},move:ll,hydrate:wy};function ll(n,e,t,{o:{insert:r},m:i},o=2){o===0&&r(n.targetAnchor,e,t);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=n,d=o===2;if(d&&r(s,e,t),(!d||ta(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,t,2);d&&r(a,e,t)}function wy(n,e,t,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:c,createText:u}},d){const f=e.target=Zu(e.props,l);if(f){const h=ta(e.props),_=f._lpa||f.firstChild;if(e.shapeFlag&16)if(h)e.anchor=d(s(n),e,a(n),t,r,i,o),e.targetStart=_,e.targetAnchor=_&&s(_);else{e.anchor=s(n);let m=_;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,f._lpa=e.targetAnchor&&s(e.targetAnchor);break}}m=s(m)}e.targetAnchor||S0(f,e,u,c),d(_&&s(_),e,f,t,r,i,o)}Ol(e,h)}return e.anchor&&s(e.anchor)}const Ty=x0;function Ol(n,e){const t=n.ctx;if(t&&t.ut){let r,i;for(e?(r=n.el,i=n.anchor):(r=n.targetStart,i=n.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function S0(n,e,t,r){const i=e.targetStart=t(""),o=e.targetAnchor=t("");return i[v0]=o,n&&(r(i,n),r(o,n)),o}const _i=Symbol("_leaveCb"),cl=Symbol("_enterCb");function Cy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ec(()=>{n.isMounted=!0}),D0(()=>{n.isUnmounting=!0}),n}const Xn=[Function,Array],M0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xn,onEnter:Xn,onAfterEnter:Xn,onEnterCancelled:Xn,onBeforeLeave:Xn,onLeave:Xn,onAfterLeave:Xn,onLeaveCancelled:Xn,onBeforeAppear:Xn,onAppear:Xn,onAfterAppear:Xn,onAppearCancelled:Xn},E0=n=>{const e=n.subTree;return e.component?E0(e.component):e},Ay={name:"BaseTransition",props:M0,setup(n,{slots:e}){const t=e_(),r=Cy();return()=>{const i=e.default&&C0(e.default(),!0);if(!i||!i.length)return;const o=w0(i),s=Ze(n),{mode:a}=s;if(r.isLeaving)return Yc(o);const l=zh(o);if(!l)return Yc(o);let c=Ju(l,s,r,t,d=>c=d);l.type!==hn&&ba(l,c);let u=t.subTree&&zh(t.subTree);if(u&&u.type!==hn&&!io(l,u)&&E0(t).type!==hn){let d=Ju(u,s,r,t);if(ba(u,d),a==="out-in"&&l.type!==hn)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Yc(o);a==="in-out"&&l.type!==hn?d.delayLeave=(f,h,_)=>{const m=T0(r,u);m[String(u.key)]=u,f[_i]=()=>{h(),f[_i]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function w0(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==hn){e=t;break}}return e}const Ry=Ay;function T0(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Ju(n,e,t,r,i){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:g,onAppear:p,onAfterAppear:x,onAppearCancelled:v}=e,b=String(n.key),T=T0(t,n),R=(y,M)=>{y&&pr(y,r,9,M)},A=(y,M)=>{const k=M[1];R(y,M),Ne(y)?y.every(O=>O.length<=1)&&k():y.length<=1&&k()},P={mode:s,persisted:a,beforeEnter(y){let M=l;if(!t.isMounted)if(o)M=g||l;else return;y[_i]&&y[_i](!0);const k=T[b];k&&io(n,k)&&k.el[_i]&&k.el[_i](),R(M,[y])},enter(y){let M=c,k=u,O=d;if(!t.isMounted)if(o)M=p||c,k=x||u,O=v||d;else return;let U=!1;const Y=y[cl]=J=>{U||(U=!0,J?R(O,[y]):R(k,[y]),P.delayedLeave&&P.delayedLeave(),y[cl]=void 0)};M?A(M,[y,Y]):Y()},leave(y,M){const k=String(n.key);if(y[cl]&&y[cl](!0),t.isUnmounting)return M();R(f,[y]);let O=!1;const U=y[_i]=Y=>{O||(O=!0,M(),Y?R(m,[y]):R(_,[y]),y[_i]=void 0,T[k]===n&&delete T[k])};T[k]=n,h?A(h,[y,U]):U()},clone(y){const M=Ju(y,e,t,r,i);return i&&i(M),M}};return P}function Yc(n){if(Sc(n))return n=Li(n),n.children=null,n}function zh(n){if(!Sc(n))return y0(n.type)&&n.children?w0(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ze(t.default))return t.default()}}function ba(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ba(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function C0(n,e=!1,t){let r=[],i=0;for(let o=0;o<n.length;o++){let s=n[o];const a=t==null?s.key:String(t)+String(s.key!=null?s.key:o);s.type===en?(s.patchFlag&128&&i++,r=r.concat(C0(s.children,e,a))):(e||s.type!==hn)&&r.push(a!=null?Li(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function A0(n,e){return ze(n)?$t({name:n.name},e,{setup:n}):n}function R0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ql(n,e,t,r,i=!1){if(Ne(n)){n.forEach((_,m)=>Ql(_,e&&(Ne(e)?e[m]:e),t,r,i));return}if(ls(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ql(n,e,t,r.component.subTree);return}const o=r.shapeFlag&4?Cc(r.component):r.el,s=i?null:o,{i:a,r:l}=n,c=e&&e.r,u=a.refs===mt?a.refs={}:a.refs,d=a.setupState,f=Ze(d),h=d===mt?()=>!1:_=>at(f,_);if(c!=null&&c!==l&&(Dt(c)?(u[c]=null,h(c)&&(d[c]=null)):Ct(c)&&(c.value=null)),ze(l))qa(l,a,12,[s,u]);else{const _=Dt(l),m=Ct(l);if(_||m){const g=()=>{if(n.f){const p=_?h(l)?d[l]:u[l]:l.value;i?Ne(p)&&bf(p,o):Ne(p)?p.includes(o)||p.push(o):_?(u[l]=[o],h(l)&&(d[l]=u[l])):(l.value=[o],n.k&&(u[n.k]=l.value))}else _?(u[l]=s,h(l)&&(d[l]=s)):m&&(l.value=s,n.k&&(u[n.k]=s))};s?(g.id=-1,cn(g,t)):g()}}}vc().requestIdleCallback;vc().cancelIdleCallback;const ls=n=>!!n.type.__asyncLoader,Sc=n=>n.type.__isKeepAlive;function Py(n,e){P0(n,"a",e)}function Dy(n,e){P0(n,"da",e)}function P0(n,e,t=Wt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Mc(e,r,t),t){let i=t.parent;for(;i&&i.parent;)Sc(i.parent.vnode)&&ky(r,e,t,i),i=i.parent}}function ky(n,e,t,r){const i=Mc(e,n,r,!0);kf(()=>{bf(r[e],i)},t)}function Mc(n,e,t=Wt,r=!1){if(t){const i=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...s)=>{Bi();const a=Ka(t),l=pr(e,t,n,s);return a(),Fi(),l});return r?i.unshift(o):i.push(o),o}}const oi=n=>(e,t=Wt)=>{(!Ma||n==="sp")&&Mc(n,(...r)=>e(...r),t)},Ly=oi("bm"),Ec=oi("m"),Iy=oi("bu"),Oy=oi("u"),D0=oi("bum"),kf=oi("um"),Uy=oi("sp"),Ny=oi("rtg"),By=oi("rtc");function Fy(n,e=Wt){Mc("ec",n,e)}const Lf="components",zy="directives";function va(n,e){return If(Lf,n,!0,e)||n}const k0=Symbol.for("v-ndc");function Qu(n){return Dt(n)?If(Lf,n,!1)||n:n||k0}function L0(n){return If(zy,n)}function If(n,e,t=!0,r=!1){const i=zt||Wt;if(i){const o=i.type;if(n===Lf){const a=Tx(o,!1);if(a&&(a===e||a===Jn(e)||a===bc(Jn(e))))return o}const s=Hh(i[n]||o[n],e)||Hh(i.appContext[n],e);return!s&&r?o:s}}function Hh(n,e){return n&&(n[e]||n[Jn(e)]||n[bc(Jn(e))])}function Ln(n,e,t={},r,i){if(zt.ce||zt.parent&&ls(zt.parent)&&zt.parent.ce)return e!=="default"&&(t.name=e),tt(),vn(en,null,[yt("slot",t,r&&r())],64);let o=n[e];o&&o._c&&(o._d=!1),tt();const s=o&&I0(o(t)),a=t.key||s&&s.key,l=vn(en,{key:(a&&!ii(a)?a:`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function I0(n){return n.some(e=>xa(e)?!(e.type===hn||e.type===en&&!I0(e.children)):!0)?n:null}const ed=n=>n?t_(n)?Cc(n):ed(n.parent):null,na=$t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ed(n.parent),$root:n=>ed(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>U0(n),$forceUpdate:n=>n.f||(n.f=()=>{Df(n.update)}),$nextTick:n=>n.n||(n.n=xc.bind(n.proxy)),$watch:n=>lx.bind(n)}),qc=(n,e)=>n!==mt&&!n.__isScriptSetup&&at(n,e),Hy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=s[e];if(h!==void 0)switch(h){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return o[e]}else{if(qc(r,e))return s[e]=1,r[e];if(i!==mt&&at(i,e))return s[e]=2,i[e];if((c=n.propsOptions[0])&&at(c,e))return s[e]=3,o[e];if(t!==mt&&at(t,e))return s[e]=4,t[e];td&&(s[e]=0)}}const u=na[e];let d,f;if(u)return e==="$attrs"&&Qt(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==mt&&at(t,e))return s[e]=4,t[e];if(f=l.config.globalProperties,at(f,e))return f[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:o}=n;return qc(i,e)?(i[e]=t,!0):r!==mt&&at(r,e)?(r[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!t[s]||n!==mt&&at(n,s)||qc(e,s)||(a=o[0])&&at(a,s)||at(r,s)||at(na,s)||at(i.config.globalProperties,s)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Vh(n){return Ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let td=!0;function Vy(n){const e=U0(n),t=n.proxy,r=n.ctx;td=!1,e.beforeCreate&&Gh(e.beforeCreate,n,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:m,deactivated:g,beforeDestroy:p,beforeUnmount:x,destroyed:v,unmounted:b,render:T,renderTracked:R,renderTriggered:A,errorCaptured:P,serverPrefetch:y,expose:M,inheritAttrs:k,components:O,directives:U,filters:Y}=e;if(c&&Gy(c,r,null),s)for(const W in s){const z=s[W];ze(z)&&(r[W]=z.bind(t))}if(i){const W=i.call(t,t);xt(W)&&(n.data=Mo(W))}if(td=!0,o)for(const W in o){const z=o[W],he=ze(z)?z.bind(t,t):ze(z.get)?z.get.bind(t,t):Cr,pe=!ze(z)&&ze(z.set)?z.set.bind(t):Cr,_e=yn({get:he,set:pe});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Me=>_e.value=Me})}if(a)for(const W in a)O0(a[W],r,t,W);if(l){const W=ze(l)?l.call(t):l;Reflect.ownKeys(W).forEach(z=>{Ul(z,W[z])})}u&&Gh(u,n,"c");function V(W,z){Ne(z)?z.forEach(he=>W(he.bind(t))):z&&W(z.bind(t))}if(V(Ly,d),V(Ec,f),V(Iy,h),V(Oy,_),V(Py,m),V(Dy,g),V(Fy,P),V(By,R),V(Ny,A),V(D0,x),V(kf,b),V(Uy,y),Ne(M))if(M.length){const W=n.exposed||(n.exposed={});M.forEach(z=>{Object.defineProperty(W,z,{get:()=>t[z],set:he=>t[z]=he})})}else n.exposed||(n.exposed={});T&&n.render===Cr&&(n.render=T),k!=null&&(n.inheritAttrs=k),O&&(n.components=O),U&&(n.directives=U),y&&R0(n)}function Gy(n,e,t=Cr){Ne(n)&&(n=nd(n));for(const r in n){const i=n[r];let o;xt(i)?"default"in i?o=Ar(i.from||r,i.default,!0):o=Ar(i.from||r):o=Ar(i),Ct(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[r]=o}}function Gh(n,e,t){pr(Ne(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function O0(n,e,t,r){let i=r.includes(".")?q0(t,r):()=>t[r];if(Dt(n)){const o=e[n];ze(o)&&Nn(i,o)}else if(ze(n))Nn(i,n.bind(t));else if(xt(n))if(Ne(n))n.forEach(o=>O0(o,e,t,r));else{const o=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(o)&&Nn(i,o,n)}}function U0(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=n.appContext,a=o.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>ec(l,c,s,!0)),ec(l,e,s)),xt(e)&&o.set(e,l),l}function ec(n,e,t,r=!1){const{mixins:i,extends:o}=e;o&&ec(n,o,t,!0),i&&i.forEach(s=>ec(n,s,t,!0));for(const s in e)if(!(r&&s==="expose")){const a=Wy[s]||t&&t[s];n[s]=a?a(n[s],e[s]):e[s]}return n}const Wy={data:Wh,props:$h,emits:$h,methods:js,computed:js,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:js,directives:js,watch:Xy,provide:Wh,inject:$y};function Wh(n,e){return e?n?function(){return $t(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function $y(n,e){return js(nd(n),nd(e))}function nd(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function sn(n,e){return n?[...new Set([].concat(n,e))]:e}function js(n,e){return n?$t(Object.create(null),n,e):e}function $h(n,e){return n?Ne(n)&&Ne(e)?[...new Set([...n,...e])]:$t(Object.create(null),Vh(n),Vh(e??{})):e}function Xy(n,e){if(!n)return e;if(!e)return n;const t=$t(Object.create(null),n);for(const r in e)t[r]=sn(n[r],e[r]);return t}function N0(){return{app:null,config:{isNativeTag:kv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jy=0;function Yy(n,e){return function(r,i=null){ze(r)||(r=$t({},r)),i!=null&&!xt(i)&&(i=null);const o=N0(),s=new WeakSet,a=[];let l=!1;const c=o.app={_uid:jy++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Ax,get config(){return o.config},set config(u){},use(u,...d){return s.has(u)||(u&&ze(u.install)?(s.add(u),u.install(c,...d)):ze(u)&&(s.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||yt(r,i);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Cc(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(pr(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c},runWithContext(u){const d=fo;fo=c;try{return u()}finally{fo=d}}};return c}}let fo=null;function Ul(n,e){if(Wt){let t=Wt.provides;const r=Wt.parent&&Wt.parent.provides;r===t&&(t=Wt.provides=Object.create(r)),t[n]=e}}function Ar(n,e,t=!1){const r=Wt||zt;if(r||fo){const i=fo?fo._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&ze(e)?e.call(r&&r.proxy):e}}function qy(){return!!(Wt||zt||fo)}const B0={},F0=()=>Object.create(B0),z0=n=>Object.getPrototypeOf(n)===B0;function Ky(n,e,t,r=!1){const i={},o=F0();n.propsDefaults=Object.create(null),H0(n,e,i,o);for(const s in n.propsOptions[0])s in i||(i[s]=void 0);t?n.props=r?i:c0(i):n.type.props?n.props=i:n.props=o,n.attrs=o}function Zy(n,e,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=n,a=Ze(i),[l]=n.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(wc(n.emitsOptions,f))continue;const h=e[f];if(l)if(at(o,f))h!==o[f]&&(o[f]=h,c=!0);else{const _=Jn(f);i[_]=rd(l,a,_,h,n,!1)}else h!==o[f]&&(o[f]=h,c=!0)}}}else{H0(n,e,i,o)&&(c=!0);let u;for(const d in a)(!e||!at(e,d)&&((u=So(d))===d||!at(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(i[d]=rd(l,a,d,void 0,n,!0)):delete i[d]);if(o!==a)for(const d in o)(!e||!at(e,d))&&(delete o[d],c=!0)}c&&qr(n.attrs,"set","")}function H0(n,e,t,r){const[i,o]=n.propsOptions;let s=!1,a;if(e)for(let l in e){if(Js(l))continue;const c=e[l];let u;i&&at(i,u=Jn(l))?!o||!o.includes(u)?t[u]=c:(a||(a={}))[u]=c:wc(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=Ze(t),c=a||mt;for(let u=0;u<o.length;u++){const d=o[u];t[d]=rd(i,l,d,c[d],n,!at(c,d))}}return s}function rd(n,e,t,r,i,o){const s=n[t];if(s!=null){const a=at(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&ze(l)){const{propsDefaults:c}=i;if(t in c)r=c[t];else{const u=Ka(i);r=c[t]=l.call(null,e),u()}}else r=l;i.ce&&i.ce._setProp(t,r)}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===So(t))&&(r=!0))}return r}const Jy=new WeakMap;function V0(n,e,t=!1){const r=t?Jy:e.propsCache,i=r.get(n);if(i)return i;const o=n.props,s={},a=[];let l=!1;if(!ze(n)){const u=d=>{l=!0;const[f,h]=V0(d,e,!0);$t(s,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!l)return xt(n)&&r.set(n,os),os;if(Ne(o))for(let u=0;u<o.length;u++){const d=Jn(o[u]);Xh(d)&&(s[d]=mt)}else if(o)for(const u in o){const d=Jn(u);if(Xh(d)){const f=o[u],h=s[d]=Ne(f)||ze(f)?{type:f}:$t({},f),_=h.type;let m=!1,g=!0;if(Ne(_))for(let p=0;p<_.length;++p){const x=_[p],v=ze(x)&&x.name;if(v==="Boolean"){m=!0;break}else v==="String"&&(g=!1)}else m=ze(_)&&_.name==="Boolean";h[0]=m,h[1]=g,(m||at(h,"default"))&&a.push(d)}}const c=[s,a];return xt(n)&&r.set(n,c),c}function Xh(n){return n[0]!=="$"&&!Js(n)}const G0=n=>n[0]==="_"||n==="$stable",Of=n=>Ne(n)?n.map(xr):[xr(n)],Qy=(n,e,t)=>{if(e._n)return e;const r=Mi((...i)=>Of(e(...i)),t);return r._c=!1,r},W0=(n,e,t)=>{const r=n._ctx;for(const i in n){if(G0(i))continue;const o=n[i];if(ze(o))e[i]=Qy(i,o,r);else if(o!=null){const s=Of(o);e[i]=()=>s}}},$0=(n,e)=>{const t=Of(e);n.slots.default=()=>t},X0=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},ex=(n,e,t)=>{const r=n.slots=F0();if(n.vnode.shapeFlag&32){const i=e._;i?(X0(r,e,t),t&&Vg(r,"_",i,!0)):W0(e,r)}else e&&$0(n,e)},tx=(n,e,t)=>{const{vnode:r,slots:i}=n;let o=!0,s=mt;if(r.shapeFlag&32){const a=e._;a?t&&a===1?o=!1:X0(i,e,t):(o=!e.$stable,W0(e,i)),s=e}else e&&($0(n,e),s={default:1});if(o)for(const a in i)!G0(a)&&s[a]==null&&delete i[a]},cn=mx;function nx(n){return rx(n)}function rx(n,e){const t=vc();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Cr,insertStaticContent:_}=n,m=(D,L,E,re=null,K=null,q=null,ne=void 0,ce=null,te=!!L.dynamicChildren)=>{if(D===L)return;D&&!io(D,L)&&(re=N(D),Me(D,K,q,!0),D=null),L.patchFlag===-2&&(te=!1,L.dynamicChildren=null);const{type:w,ref:S,shapeFlag:I}=L;switch(w){case Tc:g(D,L,E,re);break;case hn:p(D,L,E,re);break;case Zc:D==null&&x(L,E,re,ne);break;case en:O(D,L,E,re,K,q,ne,ce,te);break;default:I&1?T(D,L,E,re,K,q,ne,ce,te):I&6?U(D,L,E,re,K,q,ne,ce,te):(I&64||I&128)&&w.process(D,L,E,re,K,q,ne,ce,te,de)}S!=null&&K&&Ql(S,D&&D.ref,q,L||D,!L)},g=(D,L,E,re)=>{if(D==null)r(L.el=a(L.children),E,re);else{const K=L.el=D.el;L.children!==D.children&&c(K,L.children)}},p=(D,L,E,re)=>{D==null?r(L.el=l(L.children||""),E,re):L.el=D.el},x=(D,L,E,re)=>{[D.el,D.anchor]=_(D.children,L,E,re,D.el,D.anchor)},v=({el:D,anchor:L},E,re)=>{let K;for(;D&&D!==L;)K=f(D),r(D,E,re),D=K;r(L,E,re)},b=({el:D,anchor:L})=>{let E;for(;D&&D!==L;)E=f(D),i(D),D=E;i(L)},T=(D,L,E,re,K,q,ne,ce,te)=>{L.type==="svg"?ne="svg":L.type==="math"&&(ne="mathml"),D==null?R(L,E,re,K,q,ne,ce,te):y(D,L,K,q,ne,ce,te)},R=(D,L,E,re,K,q,ne,ce)=>{let te,w;const{props:S,shapeFlag:I,transition:j,dirs:B}=D;if(te=D.el=s(D.type,q,S&&S.is,S),I&8?u(te,D.children):I&16&&P(D.children,te,null,re,K,Kc(D,q),ne,ce),B&&Gi(D,null,re,"created"),A(te,D,D.scopeId,ne,re),S){for(const ae in S)ae!=="value"&&!Js(ae)&&o(te,ae,null,S[ae],q,re);"value"in S&&o(te,"value",null,S.value,q),(w=S.onVnodeBeforeMount)&&gr(w,re,D)}B&&Gi(D,null,re,"beforeMount");const G=ix(K,j);G&&j.beforeEnter(te),r(te,L,E),((w=S&&S.onVnodeMounted)||G||B)&&cn(()=>{w&&gr(w,re,D),G&&j.enter(te),B&&Gi(D,null,re,"mounted")},K)},A=(D,L,E,re,K)=>{if(E&&h(D,E),re)for(let q=0;q<re.length;q++)h(D,re[q]);if(K){let q=K.subTree;if(L===q||Z0(q.type)&&(q.ssContent===L||q.ssFallback===L)){const ne=K.vnode;A(D,ne,ne.scopeId,ne.slotScopeIds,K.parent)}}},P=(D,L,E,re,K,q,ne,ce,te=0)=>{for(let w=te;w<D.length;w++){const S=D[w]=ce?bi(D[w]):xr(D[w]);m(null,S,L,E,re,K,q,ne,ce)}},y=(D,L,E,re,K,q,ne)=>{const ce=L.el=D.el;let{patchFlag:te,dynamicChildren:w,dirs:S}=L;te|=D.patchFlag&16;const I=D.props||mt,j=L.props||mt;let B;if(E&&Wi(E,!1),(B=j.onVnodeBeforeUpdate)&&gr(B,E,L,D),S&&Gi(L,D,E,"beforeUpdate"),E&&Wi(E,!0),(I.innerHTML&&j.innerHTML==null||I.textContent&&j.textContent==null)&&u(ce,""),w?M(D.dynamicChildren,w,ce,E,re,Kc(L,K),q):ne||z(D,L,ce,null,E,re,Kc(L,K),q,!1),te>0){if(te&16)k(ce,I,j,E,K);else if(te&2&&I.class!==j.class&&o(ce,"class",null,j.class,K),te&4&&o(ce,"style",I.style,j.style,K),te&8){const G=L.dynamicProps;for(let ae=0;ae<G.length;ae++){const le=G[ae],be=I[le],Le=j[le];(Le!==be||le==="value")&&o(ce,le,be,Le,K,E)}}te&1&&D.children!==L.children&&u(ce,L.children)}else!ne&&w==null&&k(ce,I,j,E,K);((B=j.onVnodeUpdated)||S)&&cn(()=>{B&&gr(B,E,L,D),S&&Gi(L,D,E,"updated")},re)},M=(D,L,E,re,K,q,ne)=>{for(let ce=0;ce<L.length;ce++){const te=D[ce],w=L[ce],S=te.el&&(te.type===en||!io(te,w)||te.shapeFlag&70)?d(te.el):E;m(te,w,S,null,re,K,q,ne,!0)}},k=(D,L,E,re,K)=>{if(L!==E){if(L!==mt)for(const q in L)!Js(q)&&!(q in E)&&o(D,q,L[q],null,K,re);for(const q in E){if(Js(q))continue;const ne=E[q],ce=L[q];ne!==ce&&q!=="value"&&o(D,q,ce,ne,K,re)}"value"in E&&o(D,"value",L.value,E.value,K)}},O=(D,L,E,re,K,q,ne,ce,te)=>{const w=L.el=D?D.el:a(""),S=L.anchor=D?D.anchor:a("");let{patchFlag:I,dynamicChildren:j,slotScopeIds:B}=L;B&&(ce=ce?ce.concat(B):B),D==null?(r(w,E,re),r(S,E,re),P(L.children||[],E,S,K,q,ne,ce,te)):I>0&&I&64&&j&&D.dynamicChildren?(M(D.dynamicChildren,j,E,K,q,ne,ce),(L.key!=null||K&&L===K.subTree)&&Uf(D,L,!0)):z(D,L,E,S,K,q,ne,ce,te)},U=(D,L,E,re,K,q,ne,ce,te)=>{L.slotScopeIds=ce,D==null?L.shapeFlag&512?K.ctx.activate(L,E,re,ne,te):Y(L,E,re,K,q,ne,te):J(D,L,te)},Y=(D,L,E,re,K,q,ne)=>{const ce=D.component=xx(D,re,K);if(Sc(D)&&(ce.ctx.renderer=de),Sx(ce,!1,ne),ce.asyncDep){if(K&&K.registerDep(ce,V,ne),!D.el){const te=ce.subTree=yt(hn);p(null,te,L,E)}}else V(ce,D,L,E,K,q,ne)},J=(D,L,E)=>{const re=L.component=D.component;if(hx(D,L,E))if(re.asyncDep&&!re.asyncResolved){W(re,L,E);return}else re.next=L,re.update();else L.el=D.el,re.vnode=L},V=(D,L,E,re,K,q,ne)=>{const ce=()=>{if(D.isMounted){let{next:I,bu:j,u:B,parent:G,vnode:ae}=D;{const Se=j0(D);if(Se){I&&(I.el=ae.el,W(D,I,ne)),Se.asyncDep.then(()=>{D.isUnmounted||ce()});return}}let le=I,be;Wi(D,!1),I?(I.el=ae.el,W(D,I,ne)):I=ae,j&&Gc(j),(be=I.props&&I.props.onVnodeBeforeUpdate)&&gr(be,G,I,ae),Wi(D,!0);const Le=Yh(D),me=D.subTree;D.subTree=Le,m(me,Le,d(me.el),N(me),D,K,q),I.el=Le.el,le===null&&px(D,Le.el),B&&cn(B,K),(be=I.props&&I.props.onVnodeUpdated)&&cn(()=>gr(be,G,I,ae),K)}else{let I;const{el:j,props:B}=L,{bm:G,m:ae,parent:le,root:be,type:Le}=D,me=ls(L);Wi(D,!1),G&&Gc(G),!me&&(I=B&&B.onVnodeBeforeMount)&&gr(I,le,L),Wi(D,!0);{be.ce&&be.ce._injectChildStyle(Le);const Se=D.subTree=Yh(D);m(null,Se,E,re,D,K,q),L.el=Se.el}if(ae&&cn(ae,K),!me&&(I=B&&B.onVnodeMounted)){const Se=L;cn(()=>gr(I,le,Se),K)}(L.shapeFlag&256||le&&ls(le.vnode)&&le.vnode.shapeFlag&256)&&D.a&&cn(D.a,K),D.isMounted=!0,L=E=re=null}};D.scope.on();const te=D.effect=new qg(ce);D.scope.off();const w=D.update=te.run.bind(te),S=D.job=te.runIfDirty.bind(te);S.i=D,S.id=D.uid,te.scheduler=()=>Df(S),Wi(D,!0),w()},W=(D,L,E)=>{L.component=D;const re=D.vnode.props;D.vnode=L,D.next=null,Zy(D,L.props,re,E),tx(D,L.children,E),Bi(),Uh(D),Fi()},z=(D,L,E,re,K,q,ne,ce,te=!1)=>{const w=D&&D.children,S=D?D.shapeFlag:0,I=L.children,{patchFlag:j,shapeFlag:B}=L;if(j>0){if(j&128){pe(w,I,E,re,K,q,ne,ce,te);return}else if(j&256){he(w,I,E,re,K,q,ne,ce,te);return}}B&8?(S&16&&ve(w,K,q),I!==w&&u(E,I)):S&16?B&16?pe(w,I,E,re,K,q,ne,ce,te):ve(w,K,q,!0):(S&8&&u(E,""),B&16&&P(I,E,re,K,q,ne,ce,te))},he=(D,L,E,re,K,q,ne,ce,te)=>{D=D||os,L=L||os;const w=D.length,S=L.length,I=Math.min(w,S);let j;for(j=0;j<I;j++){const B=L[j]=te?bi(L[j]):xr(L[j]);m(D[j],B,E,null,K,q,ne,ce,te)}w>S?ve(D,K,q,!0,!1,I):P(L,E,re,K,q,ne,ce,te,I)},pe=(D,L,E,re,K,q,ne,ce,te)=>{let w=0;const S=L.length;let I=D.length-1,j=S-1;for(;w<=I&&w<=j;){const B=D[w],G=L[w]=te?bi(L[w]):xr(L[w]);if(io(B,G))m(B,G,E,null,K,q,ne,ce,te);else break;w++}for(;w<=I&&w<=j;){const B=D[I],G=L[j]=te?bi(L[j]):xr(L[j]);if(io(B,G))m(B,G,E,null,K,q,ne,ce,te);else break;I--,j--}if(w>I){if(w<=j){const B=j+1,G=B<S?L[B].el:re;for(;w<=j;)m(null,L[w]=te?bi(L[w]):xr(L[w]),E,G,K,q,ne,ce,te),w++}}else if(w>j)for(;w<=I;)Me(D[w],K,q,!0),w++;else{const B=w,G=w,ae=new Map;for(w=G;w<=j;w++){const ye=L[w]=te?bi(L[w]):xr(L[w]);ye.key!=null&&ae.set(ye.key,w)}let le,be=0;const Le=j-G+1;let me=!1,Se=0;const De=new Array(Le);for(w=0;w<Le;w++)De[w]=0;for(w=B;w<=I;w++){const ye=D[w];if(be>=Le){Me(ye,K,q,!0);continue}let Be;if(ye.key!=null)Be=ae.get(ye.key);else for(le=G;le<=j;le++)if(De[le-G]===0&&io(ye,L[le])){Be=le;break}Be===void 0?Me(ye,K,q,!0):(De[Be-G]=w+1,Be>=Se?Se=Be:me=!0,m(ye,L[Be],E,null,K,q,ne,ce,te),be++)}const Oe=me?ox(De):os;for(le=Oe.length-1,w=Le-1;w>=0;w--){const ye=G+w,Be=L[ye],Ge=ye+1<S?L[ye+1].el:re;De[w]===0?m(null,Be,E,Ge,K,q,ne,ce,te):me&&(le<0||w!==Oe[le]?_e(Be,E,Ge,2):le--)}}},_e=(D,L,E,re,K=null)=>{const{el:q,type:ne,transition:ce,children:te,shapeFlag:w}=D;if(w&6){_e(D.component.subTree,L,E,re);return}if(w&128){D.suspense.move(L,E,re);return}if(w&64){ne.move(D,L,E,de);return}if(ne===en){r(q,L,E);for(let I=0;I<te.length;I++)_e(te[I],L,E,re);r(D.anchor,L,E);return}if(ne===Zc){v(D,L,E);return}if(re!==2&&w&1&&ce)if(re===0)ce.beforeEnter(q),r(q,L,E),cn(()=>ce.enter(q),K);else{const{leave:I,delayLeave:j,afterLeave:B}=ce,G=()=>r(q,L,E),ae=()=>{I(q,()=>{G(),B&&B()})};j?j(q,G,ae):ae()}else r(q,L,E)},Me=(D,L,E,re=!1,K=!1)=>{const{type:q,props:ne,ref:ce,children:te,dynamicChildren:w,shapeFlag:S,patchFlag:I,dirs:j,cacheIndex:B}=D;if(I===-2&&(K=!1),ce!=null&&Ql(ce,null,E,D,!0),B!=null&&(L.renderCache[B]=void 0),S&256){L.ctx.deactivate(D);return}const G=S&1&&j,ae=!ls(D);let le;if(ae&&(le=ne&&ne.onVnodeBeforeUnmount)&&gr(le,L,D),S&6)fe(D.component,E,re);else{if(S&128){D.suspense.unmount(E,re);return}G&&Gi(D,null,L,"beforeUnmount"),S&64?D.type.remove(D,L,E,de,re):w&&!w.hasOnce&&(q!==en||I>0&&I&64)?ve(w,L,E,!1,!0):(q===en&&I&384||!K&&S&16)&&ve(te,L,E),re&&Ue(D)}(ae&&(le=ne&&ne.onVnodeUnmounted)||G)&&cn(()=>{le&&gr(le,L,D),G&&Gi(D,null,L,"unmounted")},E)},Ue=D=>{const{type:L,el:E,anchor:re,transition:K}=D;if(L===en){Q(E,re);return}if(L===Zc){b(D);return}const q=()=>{i(E),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(D.shapeFlag&1&&K&&!K.persisted){const{leave:ne,delayLeave:ce}=K,te=()=>ne(E,q);ce?ce(D.el,q,te):te()}else q()},Q=(D,L)=>{let E;for(;D!==L;)E=f(D),i(D),D=E;i(L)},fe=(D,L,E)=>{const{bum:re,scope:K,job:q,subTree:ne,um:ce,m:te,a:w}=D;jh(te),jh(w),re&&Gc(re),K.stop(),q&&(q.flags|=8,Me(ne,D,L,E)),ce&&cn(ce,L),cn(()=>{D.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},ve=(D,L,E,re=!1,K=!1,q=0)=>{for(let ne=q;ne<D.length;ne++)Me(D[ne],L,E,re,K)},N=D=>{if(D.shapeFlag&6)return N(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const L=f(D.anchor||D.el),E=L&&L[v0];return E?f(E):L};let se=!1;const oe=(D,L,E)=>{D==null?L._vnode&&Me(L._vnode,null,null,!0):m(L._vnode||null,D,L,null,null,null,E),L._vnode=D,se||(se=!0,Uh(),m0(),se=!1)},de={p:m,um:Me,m:_e,r:Ue,mt:Y,mc:P,pc:z,pbc:M,n:N,o:n};return{render:oe,hydrate:void 0,createApp:Yy(oe)}}function Kc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Wi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ix(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Uf(n,e,t=!1){const r=n.children,i=e.children;if(Ne(r)&&Ne(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=bi(i[o]),a.el=s.el),!t&&a.patchFlag!==-2&&Uf(s,a)),a.type===Tc&&(a.el=s.el)}}function ox(n){const e=n.slice(),t=[0];let r,i,o,s,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(o=0,s=t.length-1;o<s;)a=o+s>>1,n[t[a]]<c?o=a+1:s=a;c<n[t[o]]&&(o>0&&(e[r]=t[o-1]),t[o]=r)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=e[s];return t}function j0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:j0(e)}function jh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const sx=Symbol.for("v-scx"),ax=()=>Ar(sx);function Nn(n,e,t){return Y0(n,e,t)}function Y0(n,e,t=mt){const{immediate:r,deep:i,flush:o,once:s}=t,a=$t({},t),l=e&&r||!e&&o!=="post";let c;if(Ma){if(o==="sync"){const h=ax();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Cr,h.resume=Cr,h.pause=Cr,h}}const u=Wt;a.call=(h,_,m)=>pr(h,u,_,m);let d=!1;o==="post"?a.scheduler=h=>{cn(h,u&&u.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(h,_)=>{_?h():Df(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=xy(n,e,a);return Ma&&(c?c.push(f):l&&f()),f}function lx(n,e,t){const r=this.proxy,i=Dt(n)?n.includes(".")?q0(r,n):()=>r[n]:n.bind(r,r);let o;ze(e)?o=e:(o=e.handler,t=e);const s=Ka(this),a=Y0(i,o.bind(r),t);return s(),a}function q0(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const cx=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Jn(e)}Modifiers`]||n[`${So(e)}Modifiers`];function ux(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||mt;let i=t;const o=e.startsWith("update:"),s=o&&cx(r,e.slice(7));s&&(s.trim&&(i=t.map(u=>Dt(u)?u.trim():u)),s.number&&(i=t.map(Nv)));let a,l=r[a=Vc(e)]||r[a=Vc(Jn(e))];!l&&o&&(l=r[a=Vc(So(e))]),l&&pr(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,pr(c,n,6,i)}}function K0(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const o=n.emits;let s={},a=!1;if(!ze(n)){const l=c=>{const u=K0(c,e,!0);u&&(a=!0,$t(s,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!a?(xt(n)&&r.set(n,null),null):(Ne(o)?o.forEach(l=>s[l]=null):$t(s,o),xt(n)&&r.set(n,s),s)}function wc(n,e){return!n||!mc(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,So(e))||at(n,e))}function Yh(n){const{type:e,vnode:t,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:_,inheritAttrs:m}=n,g=Jl(n);let p,x;try{if(t.shapeFlag&4){const b=i||r,T=b;p=xr(c.call(T,b,u,d,h,f,_)),x=a}else{const b=e;p=xr(b.length>1?b(d,{attrs:a,slots:s,emit:l}):b(d,null)),x=e.props?a:dx(a)}}catch(b){ra.length=0,yc(b,n,1),p=yt(hn)}let v=p;if(x&&m!==!1){const b=Object.keys(x),{shapeFlag:T}=v;b.length&&T&7&&(o&&b.some(_f)&&(x=fx(x,o)),v=Li(v,x,!1,!0))}return t.dirs&&(v=Li(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&ba(v,t.transition),p=v,Jl(g),p}const dx=n=>{let e;for(const t in n)(t==="class"||t==="style"||mc(t))&&((e||(e={}))[t]=n[t]);return e},fx=(n,e)=>{const t={};for(const r in n)(!_f(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function hx(n,e,t){const{props:r,children:i,component:o}=n,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?qh(r,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==r[f]&&!wc(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?qh(r,s,c):!0:!!s;return!1}function qh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==n[o]&&!wc(t,o))return!0}return!1}function px({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Z0=n=>n.__isSuspense;function mx(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):Ey(n)}const en=Symbol.for("v-fgt"),Tc=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),Zc=Symbol.for("v-stc"),ra=[];let Bn=null;function tt(n=!1){ra.push(Bn=n?null:[])}function gx(){ra.pop(),Bn=ra[ra.length-1]||null}let ya=1;function Kh(n,e=!1){ya+=n,n<0&&Bn&&e&&(Bn.hasOnce=!0)}function J0(n){return n.dynamicChildren=ya>0?Bn||os:null,gx(),ya>0&&Bn&&Bn.push(n),n}function Ft(n,e,t,r,i,o){return J0(Qn(n,e,t,r,i,o,!0))}function vn(n,e,t,r,i){return J0(yt(n,e,t,r,i,!0))}function xa(n){return n?n.__v_isVNode===!0:!1}function io(n,e){return n.type===e.type&&n.key===e.key}const Q0=({key:n})=>n??null,Nl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Dt(n)||Ct(n)||ze(n)?{i:zt,r:n,k:e,f:!!t}:n:null);function Qn(n,e=null,t=null,r=0,i=null,o=n===en?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Q0(e),ref:e&&Nl(e),scopeId:_0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:zt};return a?(Nf(l,t),o&128&&n.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),ya>0&&!s&&Bn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Bn.push(l),l}const yt=_x;function _x(n,e=null,t=null,r=0,i=null,o=!1){if((!n||n===k0)&&(n=hn),xa(n)){const a=Li(n,e,!0);return t&&Nf(a,t),ya>0&&!o&&Bn&&(a.shapeFlag&6?Bn[Bn.indexOf(n)]=a:Bn.push(a)),a.patchFlag=-2,a}if(Cx(n)&&(n=n.__vccOpts),e){e=bx(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=gs(a)),xt(l)&&(Rf(l)&&!Ne(l)&&(l=$t({},l)),e.style=yf(l))}const s=Dt(n)?1:Z0(n)?128:y0(n)?64:xt(n)?4:ze(n)?2:0;return Qn(n,e,t,r,i,s,o,!0)}function bx(n){return n?Rf(n)||z0(n)?$t({},n):n:null}function Li(n,e,t=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:a,transition:l}=n,c=e?lt(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Q0(c),ref:e&&e.ref?t&&o?Ne(o)?o.concat(Nl(e)):[o,Nl(e)]:Nl(e):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==en?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Li(n.ssContent),ssFallback:n.ssFallback&&Li(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&ba(u,l.clone(u)),u}function Sa(n=" ",e=0){return yt(Tc,null,n,e)}function vr(n="",e=!1){return e?(tt(),vn(hn,null,n)):yt(hn,null,n)}function xr(n){return n==null||typeof n=="boolean"?yt(hn):Ne(n)?yt(en,null,n.slice()):xa(n)?bi(n):yt(Tc,null,String(n))}function bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Li(n)}function Nf(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Nf(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!z0(e)?e._ctx=zt:i===3&&zt&&(zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:zt},t=32):(e=String(e),r&64?(t=16,e=[Sa(e)]):t=8);n.children=e,n.shapeFlag|=t}function lt(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=gs([e.class,r.class]));else if(i==="style")e.style=yf([e.style,r.style]);else if(mc(i)){const o=e[i],s=r[i];s&&o!==s&&!(Ne(o)&&o.includes(s))&&(e[i]=o?[].concat(o,s):s)}else i!==""&&(e[i]=r[i])}return e}function gr(n,e,t,r=null){pr(n,e,7,[t,r])}const vx=N0();let yx=0;function xx(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||vx,o={uid:yx++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:V0(r,i),emitsOptions:K0(r,i),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:r.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=ux.bind(null,o),n.ce&&n.ce(o),o}let Wt=null;const e_=()=>Wt||zt;let tc,id;{const n=vc(),e=(t,r)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};tc=e("__VUE_INSTANCE_SETTERS__",t=>Wt=t),id=e("__VUE_SSR_SETTERS__",t=>Ma=t)}const Ka=n=>{const e=Wt;return tc(n),n.scope.on(),()=>{n.scope.off(),tc(e)}},Zh=()=>{Wt&&Wt.scope.off(),tc(null)};function t_(n){return n.vnode.shapeFlag&4}let Ma=!1;function Sx(n,e=!1,t=!1){e&&id(e);const{props:r,children:i}=n.vnode,o=t_(n);Ky(n,r,o,e),ex(n,i,t);const s=o?Mx(n,e):void 0;return e&&id(!1),s}function Mx(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Hy);const{setup:r}=t;if(r){Bi();const i=n.setupContext=r.length>1?wx(n):null,o=Ka(n),s=qa(r,n,0,[n.props,i]),a=Fg(s);if(Fi(),o(),(a||n.sp)&&!ls(n)&&R0(n),a){if(s.then(Zh,Zh),e)return s.then(l=>{Jh(n,l)}).catch(l=>{yc(l,n,0)});n.asyncDep=s}else Jh(n,s)}else n_(n)}function Jh(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=d0(e)),n_(n)}function n_(n,e,t){const r=n.type;n.render||(n.render=r.render||Cr);{const i=Ka(n);Bi();try{Vy(n)}finally{Fi(),i()}}}const Ex={get(n,e){return Qt(n,"get",""),n[e]}};function wx(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ex),slots:n.slots,emit:n.emit,expose:e}}function Cc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(d0(Pf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in na)return na[t](n)},has(e,t){return t in e||t in na}})):n.proxy}function Tx(n,e=!0){return ze(n)?n.displayName||n.name:n.name||e&&n.__name}function Cx(n){return ze(n)&&"__vccOpts"in n}const yn=(n,e)=>vy(n,e,Ma);function Bf(n,e,t){const r=arguments.length;return r===2?xt(e)&&!Ne(e)?xa(e)?yt(n,null,[e]):yt(n,e):yt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&xa(t)&&(t=[t]),yt(n,e,t))}const Ax="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let od;const Qh=typeof window<"u"&&window.trustedTypes;if(Qh)try{od=Qh.createPolicy("vue",{createHTML:n=>n})}catch{}const r_=od?n=>od.createHTML(n):n=>n,Rx="http://www.w3.org/2000/svg",Px="http://www.w3.org/1998/Math/MathML",Xr=typeof document<"u"?document:null,ep=Xr&&Xr.createElement("template"),Dx={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e==="svg"?Xr.createElementNS(Rx,n):e==="mathml"?Xr.createElementNS(Px,n):t?Xr.createElement(n,{is:t}):Xr.createElement(n);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Xr.createTextNode(n),createComment:n=>Xr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Xr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,o){const s=t?t.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{ep.innerHTML=r_(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=ep.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ai="transition",Ns="animation",Ea=Symbol("_vtc"),i_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},kx=$t({},M0,i_),Lx=n=>(n.displayName="Transition",n.props=kx,n),Ix=Lx((n,{slots:e})=>Bf(Ry,Ox(n),e)),$i=(n,e=[])=>{Ne(n)?n.forEach(t=>t(...e)):n&&n(...e)},tp=n=>n?Ne(n)?n.some(e=>e.length>1):n.length>1:!1;function Ox(n){const e={};for(const O in n)O in i_||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:r,duration:i,enterFromClass:o=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:c=s,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,_=Ux(i),m=_&&_[0],g=_&&_[1],{onBeforeEnter:p,onEnter:x,onEnterCancelled:v,onLeave:b,onLeaveCancelled:T,onBeforeAppear:R=p,onAppear:A=x,onAppearCancelled:P=v}=e,y=(O,U,Y,J)=>{O._enterCancelled=J,Xi(O,U?u:a),Xi(O,U?c:s),Y&&Y()},M=(O,U)=>{O._isLeaving=!1,Xi(O,d),Xi(O,h),Xi(O,f),U&&U()},k=O=>(U,Y)=>{const J=O?A:x,V=()=>y(U,O,Y);$i(J,[U,V]),np(()=>{Xi(U,O?l:o),Nr(U,O?u:a),tp(J)||rp(U,r,m,V)})};return $t(e,{onBeforeEnter(O){$i(p,[O]),Nr(O,o),Nr(O,s)},onBeforeAppear(O){$i(R,[O]),Nr(O,l),Nr(O,c)},onEnter:k(!1),onAppear:k(!0),onLeave(O,U){O._isLeaving=!0;const Y=()=>M(O,U);Nr(O,d),O._enterCancelled?(Nr(O,f),sp()):(sp(),Nr(O,f)),np(()=>{O._isLeaving&&(Xi(O,d),Nr(O,h),tp(b)||rp(O,r,g,Y))}),$i(b,[O,Y])},onEnterCancelled(O){y(O,!1,void 0,!0),$i(v,[O])},onAppearCancelled(O){y(O,!0,void 0,!0),$i(P,[O])},onLeaveCancelled(O){M(O),$i(T,[O])}})}function Ux(n){if(n==null)return null;if(xt(n))return[Jc(n.enter),Jc(n.leave)];{const e=Jc(n);return[e,e]}}function Jc(n){return Bv(n)}function Nr(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ea]||(n[Ea]=new Set)).add(e)}function Xi(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[Ea];t&&(t.delete(e),t.size||(n[Ea]=void 0))}function np(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Nx=0;function rp(n,e,t,r){const i=n._endId=++Nx,o=()=>{i===n._endId&&r()};if(t!=null)return setTimeout(o,t);const{type:s,timeout:a,propCount:l}=Bx(n,e);if(!s)return r();const c=s+"end";let u=0;const d=()=>{n.removeEventListener(c,f),o()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function Bx(n,e){const t=window.getComputedStyle(n),r=_=>(t[_]||"").split(", "),i=r(`${ai}Delay`),o=r(`${ai}Duration`),s=ip(i,o),a=r(`${Ns}Delay`),l=r(`${Ns}Duration`),c=ip(a,l);let u=null,d=0,f=0;e===ai?s>0&&(u=ai,d=s,f=o.length):e===Ns?c>0&&(u=Ns,d=c,f=l.length):(d=Math.max(s,c),u=d>0?s>c?ai:Ns:null,f=u?u===ai?o.length:l.length:0);const h=u===ai&&/\b(transform|all)(,|$)/.test(r(`${ai}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function ip(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>op(t)+op(n[r])))}function op(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function sp(){return document.body.offsetHeight}function Fx(n,e,t){const r=n[Ea];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ap=Symbol("_vod"),zx=Symbol("_vsh"),Hx=Symbol(""),Vx=/(^|;)\s*display\s*:/;function Gx(n,e,t){const r=n.style,i=Dt(t);let o=!1;if(t&&!i){if(e)if(Dt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();t[a]==null&&Bl(r,a,"")}else for(const s in e)t[s]==null&&Bl(r,s,"");for(const s in t)s==="display"&&(o=!0),Bl(r,s,t[s])}else if(i){if(e!==t){const s=r[Hx];s&&(t+=";"+s),r.cssText=t,o=Vx.test(t)}}else e&&n.removeAttribute("style");ap in n&&(n[ap]=o?r.display:"",n[zx]&&(r.display="none"))}const lp=/\s*!important$/;function Bl(n,e,t){if(Ne(t))t.forEach(r=>Bl(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Wx(n,e);lp.test(t)?n.setProperty(So(r),t.replace(lp,""),"important"):n[r]=t}}const cp=["Webkit","Moz","ms"],Qc={};function Wx(n,e){const t=Qc[e];if(t)return t;let r=Jn(e);if(r!=="filter"&&r in n)return Qc[e]=r;r=bc(r);for(let i=0;i<cp.length;i++){const o=cp[i]+r;if(o in n)return Qc[e]=o}return e}const up="http://www.w3.org/1999/xlink";function dp(n,e,t,r,i,o=Wv(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(up,e.slice(6,e.length)):n.setAttributeNS(up,e,t):t==null||o&&!Gg(t)?n.removeAttribute(e):n.setAttribute(e,o?"":ii(t)?String(t):t)}function fp(n,e,t,r,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?r_(t):t);return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Gg(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(i||e)}function $x(n,e,t,r){n.addEventListener(e,t,r)}function Xx(n,e,t,r){n.removeEventListener(e,t,r)}const hp=Symbol("_vei");function jx(n,e,t,r,i=null){const o=n[hp]||(n[hp]={}),s=o[e];if(r&&s)s.value=r;else{const[a,l]=Yx(e);if(r){const c=o[e]=Zx(r,i);$x(n,a,c,l)}else s&&(Xx(n,a,s,l),o[e]=void 0)}}const pp=/(?:Once|Passive|Capture)$/;function Yx(n){let e;if(pp.test(n)){e={};let r;for(;r=n.match(pp);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):So(n.slice(2)),e]}let eu=0;const qx=Promise.resolve(),Kx=()=>eu||(qx.then(()=>eu=0),eu=Date.now());function Zx(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;pr(Jx(r,t.value),e,5,[r])};return t.value=n,t.attached=Kx(),t}function Jx(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const mp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Qx=(n,e,t,r,i,o)=>{const s=i==="svg";e==="class"?Fx(n,r,s):e==="style"?Gx(n,t,r):mc(e)?_f(e)||jx(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e1(n,e,r,s))?(fp(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&dp(n,e,r,s,o,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Dt(r))?fp(n,Jn(e),r,o,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),dp(n,e,r,s))};function e1(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&mp(e)&&ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return mp(e)&&Dt(t)?!1:e in n}const t1=$t({patchProp:Qx},Dx);let gp;function n1(){return gp||(gp=nx(t1))}const r1=(...n)=>{const e=n1().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=o1(r);if(!i)return;const o=e._component;!ze(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=t(i,!1,i1(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function i1(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function o1(n){return Dt(n)?document.querySelector(n):n}const Eo=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},s1={};function a1(n,e){const t=va("routerView");return tt(),vn(t)}const l1=Eo(s1,[["render",a1]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jo=typeof document<"u";function o_(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function c1(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&o_(n.default)}const st=Object.assign;function tu(n,e){const t={};for(const r in e){const i=e[r];t[r]=mr(i)?i.map(n):n(i)}return t}const ia=()=>{},mr=Array.isArray,s_=/#/g,u1=/&/g,d1=/\//g,f1=/=/g,h1=/\?/g,a_=/\+/g,p1=/%5B/g,m1=/%5D/g,l_=/%5E/g,g1=/%60/g,c_=/%7B/g,_1=/%7C/g,u_=/%7D/g,b1=/%20/g;function Ff(n){return encodeURI(""+n).replace(_1,"|").replace(p1,"[").replace(m1,"]")}function v1(n){return Ff(n).replace(c_,"{").replace(u_,"}").replace(l_,"^")}function sd(n){return Ff(n).replace(a_,"%2B").replace(b1,"+").replace(s_,"%23").replace(u1,"%26").replace(g1,"`").replace(c_,"{").replace(u_,"}").replace(l_,"^")}function y1(n){return sd(n).replace(f1,"%3D")}function x1(n){return Ff(n).replace(s_,"%23").replace(h1,"%3F")}function S1(n){return n==null?"":x1(n).replace(d1,"%2F")}function wa(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const M1=/\/$/,E1=n=>n.replace(M1,"");function nu(n,e,t="/"){let r,i={},o="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),i=n(o)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=A1(r??e,t),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:wa(s)}}function w1(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function _p(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function T1(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&_s(e.matched[r],t.matched[i])&&d_(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function _s(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function d_(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!C1(n[t],e[t]))return!1;return!0}function C1(n,e){return mr(n)?bp(n,e):mr(e)?bp(e,n):n===e}function bp(n,e){return mr(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function A1(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=t.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(s).join("/")}const li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ta;(function(n){n.pop="pop",n.push="push"})(Ta||(Ta={}));var oa;(function(n){n.back="back",n.forward="forward",n.unknown=""})(oa||(oa={}));function R1(n){if(!n)if(jo){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),E1(n)}const P1=/^[^#]+#/;function D1(n,e){return n.replace(P1,"#")+e}function k1(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Ac=()=>({left:window.scrollX,top:window.scrollY});function L1(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=k1(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vp(n,e){return(history.state?history.state.position-e:-1)+n}const ad=new Map;function I1(n,e){ad.set(n,e)}function O1(n){const e=ad.get(n);return ad.delete(n),e}let U1=()=>location.protocol+"//"+location.host;function f_(n,e){const{pathname:t,search:r,hash:i}=e,o=n.indexOf("#");if(o>-1){let a=i.includes(n.slice(o))?n.slice(o).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),_p(l,"")}return _p(t,n)+r+i}function N1(n,e,t,r){let i=[],o=[],s=null;const a=({state:f})=>{const h=f_(n,location),_=t.value,m=e.value;let g=0;if(f){if(t.value=h,e.value=f,s&&s===_){s=null;return}g=m?f.position-m.position:0}else r(h);i.forEach(p=>{p(t.value,_,{delta:g,type:Ta.pop,direction:g?g>0?oa.forward:oa.back:oa.unknown})})};function l(){s=t.value}function c(f){i.push(f);const h=()=>{const _=i.indexOf(f);_>-1&&i.splice(_,1)};return o.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(st({},f.state,{scroll:Ac()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function yp(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?Ac():null}}function B1(n){const{history:e,location:t}=window,r={value:f_(n,t)},i={value:e.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:U1()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(h){console.error(h),t[u?"replace":"assign"](f)}}function s(l,c){const u=st({},e.state,yp(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,u,!0),r.value=l}function a(l,c){const u=st({},i.value,e.state,{forward:l,scroll:Ac()});o(u.current,u,!0);const d=st({},yp(r.value,l,null),{position:u.position+1},c);o(l,d,!1),r.value=l}return{location:r,state:i,push:a,replace:s}}function F1(n){n=R1(n);const e=B1(n),t=N1(n,e.state,e.location,e.replace);function r(o,s=!0){s||t.pauseListeners(),history.go(o)}const i=st({location:"",base:n,go:r,createHref:D1.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function z1(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),F1(n)}function H1(n){return typeof n=="string"||n&&typeof n=="object"}function h_(n){return typeof n=="string"||typeof n=="symbol"}const p_=Symbol("");var xp;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(xp||(xp={}));function bs(n,e){return st(new Error,{type:n,[p_]:!0},e)}function Br(n,e){return n instanceof Error&&p_ in n&&(e==null||!!(n.type&e))}const Sp="[^/]+?",V1={sensitive:!1,strict:!1,start:!0,end:!0},G1=/[.+*?^${}()[\]/\\]/g;function W1(n,e){const t=st({},V1,e),r=[];let i=t.start?"^":"";const o=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(t.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(G1,"\\$&"),h+=40;else if(f.type===1){const{value:_,repeatable:m,optional:g,regexp:p}=f;o.push({name:_,repeatable:m,optional:g});const x=p||Sp;if(x!==Sp){h+=10;try{new RegExp(`(${x})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+b.message)}}let v=m?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(v=g&&c.length<2?`(?:/${v})`:"/"+v),g&&(v+="?"),i+=v,h+=20,g&&(h+=-8),m&&(h+=-20),x===".*"&&(h+=-50)}u.push(h)}r.push(u)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",_=o[f-1];d[_.name]=h&&_.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:_,repeatable:m,optional:g}=h,p=_ in c?c[_]:"";if(mr(p)&&!m)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=mr(p)?p.join("/"):p;if(!x)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:s,score:r,keys:o,parse:a,stringify:l}}function $1(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function m_(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const o=$1(r[t],i[t]);if(o)return o;t++}if(Math.abs(i.length-r.length)===1){if(Mp(r))return 1;if(Mp(i))return-1}return i.length-r.length}function Mp(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const X1={type:0,value:""},j1=/[a-zA-Z0-9_]/;function Y1(n){if(!n)return[[]];if(n==="/")return[[X1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=0,r=t;const i=[];let o;function s(){o&&i.push(o),o=[]}let a=0,l,c="",u="";function d(){c&&(t===0?o.push({type:0,value:c}):t===1||t===2||t===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),s()):l===":"?(d(),t=1):f();break;case 4:f(),t=r;break;case 1:l==="("?t=2:j1.test(l)?f():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),s(),i}function q1(n,e,t){const r=W1(Y1(n.path),t),i=st(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function K1(n,e){const t=[],r=new Map;e=Cp({strict:!1,end:!0,sensitive:!1},e);function i(d){return r.get(d)}function o(d,f,h){const _=!h,m=wp(d);m.aliasOf=h&&h.record;const g=Cp(e,d),p=[m];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const T of b)p.push(wp(st({},m,{components:h?h.record.components:m.components,path:T,aliasOf:h?h.record:m})))}let x,v;for(const b of p){const{path:T}=b;if(f&&T[0]!=="/"){const R=f.record.path,A=R[R.length-1]==="/"?"":"/";b.path=f.record.path+(T&&A+T)}if(x=q1(b,f,g),h?h.alias.push(x):(v=v||x,v!==x&&v.alias.push(x),_&&d.name&&!Tp(x)&&s(d.name)),g_(x)&&l(x),m.children){const R=m.children;for(let A=0;A<R.length;A++)o(R[A],x,h&&h.children[A])}h=h||x}return v?()=>{s(v)}:ia}function s(d){if(h_(d)){const f=r.get(d);f&&(r.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function a(){return t}function l(d){const f=Q1(d,t);t.splice(f,0,d),d.record.name&&!Tp(d)&&r.set(d.record.name,d)}function c(d,f){let h,_={},m,g;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw bs(1,{location:d});g=h.record.name,_=st(Ep(f.params,h.keys.filter(v=>!v.optional).concat(h.parent?h.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),d.params&&Ep(d.params,h.keys.map(v=>v.name))),m=h.stringify(_)}else if(d.path!=null)m=d.path,h=t.find(v=>v.re.test(m)),h&&(_=h.parse(m),g=h.record.name);else{if(h=f.name?r.get(f.name):t.find(v=>v.re.test(f.path)),!h)throw bs(1,{location:d,currentLocation:f});g=h.record.name,_=st({},f.params,d.params),m=h.stringify(_)}const p=[];let x=h;for(;x;)p.unshift(x.record),x=x.parent;return{name:g,path:m,params:_,matched:p,meta:J1(p)}}n.forEach(d=>o(d));function u(){t.length=0,r.clear()}return{addRoute:o,resolve:c,removeRoute:s,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Ep(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function wp(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Z1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Z1(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function Tp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function J1(n){return n.reduce((e,t)=>st(e,t.meta),{})}function Cp(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function Q1(n,e){let t=0,r=e.length;for(;t!==r;){const o=t+r>>1;m_(n,e[o])<0?r=o:t=o+1}const i=eS(n);return i&&(r=e.lastIndexOf(i,r-1)),r}function eS(n){let e=n;for(;e=e.parent;)if(g_(e)&&m_(n,e)===0)return e}function g_({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function tS(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(a_," "),s=o.indexOf("="),a=wa(s<0?o:o.slice(0,s)),l=s<0?null:wa(o.slice(s+1));if(a in e){let c=e[a];mr(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ap(n){let e="";for(let t in n){const r=n[t];if(t=y1(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(mr(r)?r.map(o=>o&&sd(o)):[r&&sd(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+t,o!=null&&(e+="="+o))})}return e}function nS(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=mr(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const rS=Symbol(""),Rp=Symbol(""),zf=Symbol(""),__=Symbol(""),ld=Symbol("");function Bs(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function vi(n,e,t,r,i,o=s=>s()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(bs(4,{from:t,to:e})):f instanceof Error?l(f):H1(f)?l(bs(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},u=o(()=>n.call(r&&r.instances[i],e,t,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function ru(n,e,t,r,i=o=>o()){const o=[];for(const s of n)for(const a in s.components){let l=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(o_(l)){const u=(l.__vccOpts||l)[e];u&&o.push(vi(u,t,r,s,a,i))}else{let c=l();o.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);const d=c1(u)?u.default:u;s.mods[a]=u,s.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&vi(h,t,r,s,a,i)()}))}}return o}function Pp(n){const e=Ar(zf),t=Ar(__),r=yn(()=>{const l=Bt(n.to);return e.resolve(l)}),i=yn(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(_s.bind(null,u));if(f>-1)return f;const h=Dp(l[c-2]);return c>1&&Dp(u)===h&&d[d.length-1].path!==h?d.findIndex(_s.bind(null,l[c-2])):f}),o=yn(()=>i.value>-1&&lS(t.params,r.value.params)),s=yn(()=>i.value>-1&&i.value===t.matched.length-1&&d_(t.params,r.value.params));function a(l={}){if(aS(l)){const c=e[Bt(n.replace)?"replace":"push"](Bt(n.to)).catch(ia);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:yn(()=>r.value.href),isActive:o,isExactActive:s,navigate:a}}function iS(n){return n.length===1?n[0]:n}const oS=A0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pp,setup(n,{slots:e}){const t=Mo(Pp(n)),{options:r}=Ar(zf),i=yn(()=>({[kp(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[kp(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&iS(e.default(t));return n.custom?o:Bf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},o)}}}),sS=oS;function aS(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function lS(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!mr(i)||i.length!==r.length||r.some((o,s)=>o!==i[s]))return!1}return!0}function Dp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const kp=(n,e,t)=>n??e??t,cS=A0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Ar(ld),i=yn(()=>n.route||r.value),o=Ar(Rp,0),s=yn(()=>{let c=Bt(o);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=yn(()=>i.value.matched[s.value]);Ul(Rp,yn(()=>s.value+1)),Ul(rS,a),Ul(ld,i);const l=Un();return Nn(()=>[l.value,a.value,n.name],([c,u,d],[f,h,_])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!_s(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Lp(t.default,{Component:f,route:c});const h=d.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,g=Bf(f,st({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Lp(t.default,{Component:g,route:c})||g}}});function Lp(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const uS=cS;function dS(n){const e=K1(n.routes,n),t=n.parseQuery||tS,r=n.stringifyQuery||Ap,i=n.history,o=Bs(),s=Bs(),a=Bs(),l=dy(li);let c=li;jo&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tu.bind(null,N=>""+N),d=tu.bind(null,S1),f=tu.bind(null,wa);function h(N,se){let oe,de;return h_(N)?(oe=e.getRecordMatcher(N),de=se):de=N,e.addRoute(de,oe)}function _(N){const se=e.getRecordMatcher(N);se&&e.removeRoute(se)}function m(){return e.getRoutes().map(N=>N.record)}function g(N){return!!e.getRecordMatcher(N)}function p(N,se){if(se=st({},se||l.value),typeof N=="string"){const E=nu(t,N,se.path),re=e.resolve({path:E.path},se),K=i.createHref(E.fullPath);return st(E,re,{params:f(re.params),hash:wa(E.hash),redirectedFrom:void 0,href:K})}let oe;if(N.path!=null)oe=st({},N,{path:nu(t,N.path,se.path).path});else{const E=st({},N.params);for(const re in E)E[re]==null&&delete E[re];oe=st({},N,{params:d(E)}),se.params=d(se.params)}const de=e.resolve(oe,se),Pe=N.hash||"";de.params=u(f(de.params));const D=w1(r,st({},N,{hash:v1(Pe),path:de.path})),L=i.createHref(D);return st({fullPath:D,hash:Pe,query:r===Ap?nS(N.query):N.query||{}},de,{redirectedFrom:void 0,href:L})}function x(N){return typeof N=="string"?nu(t,N,l.value.path):st({},N)}function v(N,se){if(c!==N)return bs(8,{from:se,to:N})}function b(N){return A(N)}function T(N){return b(st(x(N),{replace:!0}))}function R(N){const se=N.matched[N.matched.length-1];if(se&&se.redirect){const{redirect:oe}=se;let de=typeof oe=="function"?oe(N):oe;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=x(de):{path:de},de.params={}),st({query:N.query,hash:N.hash,params:de.path!=null?{}:N.params},de)}}function A(N,se){const oe=c=p(N),de=l.value,Pe=N.state,D=N.force,L=N.replace===!0,E=R(oe);if(E)return A(st(x(E),{state:typeof E=="object"?st({},Pe,E.state):Pe,force:D,replace:L}),se||oe);const re=oe;re.redirectedFrom=se;let K;return!D&&T1(r,de,oe)&&(K=bs(16,{to:re,from:de}),_e(de,de,!0,!1)),(K?Promise.resolve(K):M(re,de)).catch(q=>Br(q)?Br(q,2)?q:pe(q):z(q,re,de)).then(q=>{if(q){if(Br(q,2))return A(st({replace:L},x(q.to),{state:typeof q.to=="object"?st({},Pe,q.to.state):Pe,force:D}),se||re)}else q=O(re,de,!0,L,Pe);return k(re,de,q),q})}function P(N,se){const oe=v(N,se);return oe?Promise.reject(oe):Promise.resolve()}function y(N){const se=Q.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(N):N()}function M(N,se){let oe;const[de,Pe,D]=fS(N,se);oe=ru(de.reverse(),"beforeRouteLeave",N,se);for(const E of de)E.leaveGuards.forEach(re=>{oe.push(vi(re,N,se))});const L=P.bind(null,N,se);return oe.push(L),ve(oe).then(()=>{oe=[];for(const E of o.list())oe.push(vi(E,N,se));return oe.push(L),ve(oe)}).then(()=>{oe=ru(Pe,"beforeRouteUpdate",N,se);for(const E of Pe)E.updateGuards.forEach(re=>{oe.push(vi(re,N,se))});return oe.push(L),ve(oe)}).then(()=>{oe=[];for(const E of D)if(E.beforeEnter)if(mr(E.beforeEnter))for(const re of E.beforeEnter)oe.push(vi(re,N,se));else oe.push(vi(E.beforeEnter,N,se));return oe.push(L),ve(oe)}).then(()=>(N.matched.forEach(E=>E.enterCallbacks={}),oe=ru(D,"beforeRouteEnter",N,se,y),oe.push(L),ve(oe))).then(()=>{oe=[];for(const E of s.list())oe.push(vi(E,N,se));return oe.push(L),ve(oe)}).catch(E=>Br(E,8)?E:Promise.reject(E))}function k(N,se,oe){a.list().forEach(de=>y(()=>de(N,se,oe)))}function O(N,se,oe,de,Pe){const D=v(N,se);if(D)return D;const L=se===li,E=jo?history.state:{};oe&&(de||L?i.replace(N.fullPath,st({scroll:L&&E&&E.scroll},Pe)):i.push(N.fullPath,Pe)),l.value=N,_e(N,se,oe,L),pe()}let U;function Y(){U||(U=i.listen((N,se,oe)=>{if(!fe.listening)return;const de=p(N),Pe=R(de);if(Pe){A(st(Pe,{replace:!0,force:!0}),de).catch(ia);return}c=de;const D=l.value;jo&&I1(vp(D.fullPath,oe.delta),Ac()),M(de,D).catch(L=>Br(L,12)?L:Br(L,2)?(A(st(x(L.to),{force:!0}),de).then(E=>{Br(E,20)&&!oe.delta&&oe.type===Ta.pop&&i.go(-1,!1)}).catch(ia),Promise.reject()):(oe.delta&&i.go(-oe.delta,!1),z(L,de,D))).then(L=>{L=L||O(de,D,!1),L&&(oe.delta&&!Br(L,8)?i.go(-oe.delta,!1):oe.type===Ta.pop&&Br(L,20)&&i.go(-1,!1)),k(de,D,L)}).catch(ia)}))}let J=Bs(),V=Bs(),W;function z(N,se,oe){pe(N);const de=V.list();return de.length?de.forEach(Pe=>Pe(N,se,oe)):console.error(N),Promise.reject(N)}function he(){return W&&l.value!==li?Promise.resolve():new Promise((N,se)=>{J.add([N,se])})}function pe(N){return W||(W=!N,Y(),J.list().forEach(([se,oe])=>N?oe(N):se()),J.reset()),N}function _e(N,se,oe,de){const{scrollBehavior:Pe}=n;if(!jo||!Pe)return Promise.resolve();const D=!oe&&O1(vp(N.fullPath,0))||(de||!oe)&&history.state&&history.state.scroll||null;return xc().then(()=>Pe(N,se,D)).then(L=>L&&L1(L)).catch(L=>z(L,N,se))}const Me=N=>i.go(N);let Ue;const Q=new Set,fe={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:m,resolve:p,options:n,push:b,replace:T,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:V.add,isReady:he,install(N){const se=this;N.component("RouterLink",sS),N.component("RouterView",uS),N.config.globalProperties.$router=se,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(l)}),jo&&!Ue&&l.value===li&&(Ue=!0,b(i.location).catch(Pe=>{}));const oe={};for(const Pe in li)Object.defineProperty(oe,Pe,{get:()=>l.value[Pe],enumerable:!0});N.provide(zf,se),N.provide(__,c0(oe)),N.provide(ld,l);const de=N.unmount;Q.add(N),N.unmount=function(){Q.delete(N),Q.size<1&&(c=li,U&&U(),U=null,l.value=li,Ue=!1,W=!1),de()}}};function ve(N){return N.reduce((se,oe)=>se.then(()=>y(oe)),Promise.resolve())}return fe}function fS(n,e){const t=[],r=[],i=[],o=Math.max(e.matched.length,n.matched.length);for(let s=0;s<o;s++){const a=e.matched[s];a&&(n.matched.find(c=>_s(c,a))?r.push(a):t.push(a));const l=n.matched[s];l&&(e.matched.find(c=>_s(c,l))||i.push(l))}return[t,r,i]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="172",cs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hS=0,Ip=1,pS=2,b_=1,mS=2,$r=3,Ii=0,mn=1,Mr=2,Ri=0,us=1,Op=2,Up=3,Np=4,gS=5,oo=100,_S=101,bS=102,vS=103,yS=104,xS=200,SS=201,MS=202,ES=203,cd=204,ud=205,wS=206,TS=207,CS=208,AS=209,RS=210,PS=211,DS=212,kS=213,LS=214,dd=0,fd=1,hd=2,vs=3,pd=4,md=5,gd=6,_d=7,v_=0,IS=1,OS=2,Pi=0,US=1,NS=2,BS=3,FS=4,zS=5,HS=6,VS=7,y_=300,ys=301,xs=302,nc=303,bd=304,Rc=306,Ca=1e3,ao=1001,vd=1002,hr=1003,GS=1004,ul=1005,wr=1006,iu=1007,lo=1008,ti=1009,x_=1010,S_=1011,Aa=1012,Vf=1013,bo=1014,Zr=1015,Za=1016,Gf=1017,Wf=1018,Ss=1020,M_=35902,E_=1021,w_=1022,ur=1023,T_=1024,C_=1025,ds=1026,Ms=1027,A_=1028,$f=1029,R_=1030,Xf=1031,jf=1033,Fl=33776,zl=33777,Hl=33778,Vl=33779,yd=35840,xd=35841,Sd=35842,Md=35843,Ed=36196,wd=37492,Td=37496,Cd=37808,Ad=37809,Rd=37810,Pd=37811,Dd=37812,kd=37813,Ld=37814,Id=37815,Od=37816,Ud=37817,Nd=37818,Bd=37819,Fd=37820,zd=37821,Gl=36492,Hd=36494,Vd=36495,P_=36283,Gd=36284,Wd=36285,$d=36286,WS=3200,$S=3201,D_=0,XS=1,xi="",Dn="srgb",Es="srgb-linear",rc="linear",ut="srgb",Po=7680,Bp=519,jS=512,YS=513,qS=514,k_=515,KS=516,ZS=517,JS=518,QS=519,Fp=35044,zp="300 es",Jr=2e3,ic=2001;class wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hp=1234567;const sa=Math.PI/180,Ra=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function Yf(n,e){return(n%e+e)%e}function eM(n,e,t,r,i){return r+(n-e)*(i-r)/(t-e)}function tM(n,e,t){return n!==e?(t-n)/(e-n):0}function aa(n,e,t){return(1-t)*n+t*e}function nM(n,e,t,r){return aa(n,e,1-Math.exp(-t*r))}function rM(n,e=1){return e-Math.abs(Yf(n,e*2)-e)}function iM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function oM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function aM(n,e){return n+Math.random()*(e-n)}function lM(n){return n*(.5-Math.random())}function cM(n){n!==void 0&&(Hp=n);let e=Hp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uM(n){return n*sa}function dM(n){return n*Ra}function fM(n){return(n&n-1)===0&&n!==0}function hM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mM(n,e,t,r,i){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+r)/2),u=s((e+r)/2),d=o((e-r)/2),f=s((e-r)/2),h=o((r-e)/2),_=s((r-e)/2);switch(i){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xd={DEG2RAD:sa,RAD2DEG:Ra,generateUUID:ks,clamp:Ye,euclideanModulo:Yf,mapLinear:eM,inverseLerp:tM,lerp:aa,damp:nM,pingpong:rM,smoothstep:iM,smootherstep:oM,randInt:sM,randFloat:aM,randFloatSpread:lM,seededRandom:cM,degToRad:uM,radToDeg:dM,isPowerOfTwo:fM,ceilPowerOfTwo:hM,floorPowerOfTwo:pM,setQuaternionFromProperEuler:mM,normalize:an,denormalize:Yo};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ye(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*r-s*i+e.x,this.y=o*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,r,i,o,s,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,o,s,a,l,c)}set(e,t,r,i,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,o=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],u=r[4],d=r[7],f=r[2],h=r[5],_=r[8],m=i[0],g=i[3],p=i[6],x=i[1],v=i[4],b=i[7],T=i[2],R=i[5],A=i[8];return o[0]=s*m+a*x+l*T,o[3]=s*g+a*v+l*R,o[6]=s*p+a*b+l*A,o[1]=c*m+u*x+d*T,o[4]=c*g+u*v+d*R,o[7]=c*p+u*b+d*A,o[2]=f*m+h*x+_*T,o[5]=f*g+h*v+_*R,o[8]=f*p+h*b+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-r*o*u+r*a*l+i*o*c-i*s*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,h=c*o-s*l,_=t*d+r*f+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=d*m,e[1]=(i*c-u*r)*m,e[2]=(a*r-i*s)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*o-a*t)*m,e[6]=h*m,e[7]=(r*l-c*t)*m,e[8]=(s*t-r*o)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ou.makeScale(e,t)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new $e;function L_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gM(){const n=Pa("canvas");return n.style.display="block",n}const Vp={};function qo(n){n in Vp||(Vp[n]=!0,console.warn(n))}function _M(n,e,t){return new Promise(function(r,i){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}function bM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gp=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wp=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yM(){const n={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(i,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ut&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ut&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?rc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,s){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Es]:{primaries:e,whitePoint:r,transfer:rc,toXYZ:Gp,fromXYZ:Wp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:r,transfer:ut,toXYZ:Gp,fromXYZ:Wp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),n}const rt=yM();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Do;class xM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Do===void 0&&(Do=Pa("canvas")),Do.width=e.width,Do.height=e.height;const r=Do.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Do}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=ei(o[s]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ei(t[r]/255)*255):t[r]=ei(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SM=0;class I_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?o.push(su(i[s].image)):o.push(su(i[s]))}else o=su(i);r.url=o}return t||(e.images[this.uuid]=r),r}}function su(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let MM=0;class gn extends wo{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,r=ao,i=ao,o=wr,s=lo,a=ur,l=ti,c=gn.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ks(),this.name="",this.source=new I_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ca:e.x=e.x-Math.floor(e.x);break;case ao:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ca:e.y=e.y-Math.floor(e.y);break;case ao:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=y_;gn.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,r=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i+s[12]*o,this.y=s[1]*t+s[5]*r+s[9]*i+s[13]*o,this.z=s[2]*t+s[6]*r+s[10]*i+s[14]*o,this.w=s[3]*t+s[7]*r+s[11]*i+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+m)<.1&&Math.abs(_+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(h+1)/2,T=(p+1)/2,R=(u+f)/4,A=(d+m)/4,P=(_+g)/4;return v>b&&v>T?v<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(v),i=R/r,o=A/r):b>T?b<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(b),r=R/i,o=P/i):T<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(T),r=A/o,i=P/o),this.set(r,i,o,t),this}let x=Math.sqrt((g-_)*(g-_)+(d-m)*(d-m)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(d-m)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ye(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EM extends wo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const o=new gn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new I_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vo extends EM{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class O_ extends gn{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=hr,this.minFilter=hr,this.wrapR=ao,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wM extends gn{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=hr,this.minFilter=hr,this.wrapR=ao,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,o,s,a){let l=r[i+0],c=r[i+1],u=r[i+2],d=r[i+3];const f=o[s+0],h=o[s+1],_=o[s+2],m=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=_,e[t+3]=m;return}if(d!==m||l!==f||c!==h||u!==_){let g=1-a;const p=l*f+c*h+u*_+d*m,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),R=Math.atan2(T,p*x);g=Math.sin(g*R)/T,a=Math.sin(a*R)/T}const b=a*x;if(l=l*g+f*b,c=c*g+h*b,u=u*g+_*b,d=d*g+m*b,g===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,i,o,s){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],d=o[s],f=o[s+1],h=o[s+2],_=o[s+3];return e[t]=a*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-a*h,e[t+2]=c*_+u*h+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,i=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),d=a(o/2),f=l(r/2),h=l(i/2),_=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=r+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(o-c)*h,this._z=(s-i)*h}else if(r>a&&r>d){const h=2*Math.sqrt(1+r-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(o+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-r-d);this._w=(o-c)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-r-a);this._w=(s-i)/h,this._x=(o+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*a+i*c-o*l,this._y=i*u+s*l+o*a-r*c,this._z=o*u+s*c+r*l-i*a,this._w=s*u-r*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,s=this._w;let a=s*e._w+r*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*r+t*this._x,this._y=h*i+t*this._y,this._z=h*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=r*d+this._x*f,this._y=i*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($p.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*i,this.y=o[1]*t+o[4]*r+o[7]*i,this.z=o[2]*t+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,o=e.elements,s=1/(o[3]*t+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*i+o[12])*s,this.y=(o[1]*t+o[5]*r+o[9]*i+o[13])*s,this.z=(o[2]*t+o[6]*r+o[10]*i+o[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*i-a*r),u=2*(a*t-o*i),d=2*(o*r-s*t);return this.x=t+l*c+s*d-a*u,this.y=r+l*u+a*c-o*d,this.z=i+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*i,this.y=o[1]*t+o[5]*r+o[9]*i,this.z=o[2]*t+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ye(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-o*a,this.y=o*s-r*l,this.z=r*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const au=new X,$p=new yo;class Ja{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,nr):nr.fromBufferAttribute(o,s),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const i=e.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),fl.subVectors(this.max,Fs),ko.subVectors(e.a,Fs),Lo.subVectors(e.b,Fs),Io.subVectors(e.c,Fs),ci.subVectors(Lo,ko),ui.subVectors(Io,Lo),ji.subVectors(ko,Io);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-ji.z,ji.y,ci.z,0,-ci.x,ui.z,0,-ui.x,ji.z,0,-ji.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-ji.y,ji.x,0];return!lu(t,ko,Lo,Io,fl)||(t=[1,0,0,0,1,0,0,0,1],!lu(t,ko,Lo,Io,fl))?!1:(hl.crossVectors(ci,ui),t=[hl.x,hl.y,hl.z],lu(t,ko,Lo,Io,fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fr=[new X,new X,new X,new X,new X,new X,new X,new X],nr=new X,dl=new Ja,ko=new X,Lo=new X,Io=new X,ci=new X,ui=new X,ji=new X,Fs=new X,fl=new X,hl=new X,Yi=new X;function lu(n,e,t,r,i){for(let o=0,s=n.length-3;o<=s;o+=3){Yi.fromArray(n,o);const a=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=r.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const TM=new Ja,zs=new X,cu=new X;class qf{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):TM.setFromPoints(e).getCenter(r);let i=0;for(let o=0,s=e.length;o<s;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(zs,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(cu)),this.expandByPoint(zs.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zr=new X,uu=new X,pl=new X,di=new X,du=new X,ml=new X,fu=new X;class Kf{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,t),zr.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){uu.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),di.copy(this.origin).sub(uu);const o=e.distanceTo(t)*.5,s=-this.direction.dot(pl),a=di.dot(this.direction),l=-di.dot(pl),c=di.lengthSq(),u=Math.abs(1-s*s);let d,f,h,_;if(u>0)if(d=s*l-a,f=s*a-l,_=o*u,d>=0)if(f>=-_)if(f<=_){const m=1/u;d*=m,f*=m,h=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-o,-l),o),h=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(uu).addScaledVector(pl,f),h}intersectSphere(e,t){zr.subVectors(e.center,this.origin);const r=zr.dot(this.direction),i=zr.dot(zr)-r*r,o=e.radius*e.radius;if(i>o)return null;const s=Math.sqrt(o-i),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||o>i||((o>r||isNaN(r))&&(r=o),(s<i||isNaN(i))&&(i=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,t,r,i,o){du.subVectors(t,e),ml.subVectors(r,e),fu.crossVectors(du,ml);let s=this.direction.dot(fu),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(ml.crossVectors(di,ml));if(l<0)return null;const c=a*this.direction.dot(du.cross(di));if(c<0||l+c>s)return null;const u=-a*di.dot(fu);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,r,i,o,s,a,l,c,u,d,f,h,_,m,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,o,s,a,l,c,u,d,f,h,_,m,g)}set(e,t,r,i,o,s,a,l,c,u,d,f,h,_,m,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=i,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/Oo.setFromMatrixColumn(e,0).length(),o=1/Oo.setFromMatrixColumn(e,1).length(),s=1/Oo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,o=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,h=s*d,_=a*u,m=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=_+h*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,m=c*d;t[0]=f+m*a,t[4]=_*a-h,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=h*a-_,t[6]=m+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,m=c*d;t[0]=f-m*a,t[4]=-s*d,t[8]=_+h*a,t[1]=h+_*a,t[5]=s*u,t[9]=m-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,h=s*d,_=a*u,m=a*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+m,t[1]=l*d,t[5]=m*c+f,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,h=s*c,_=a*l,m=a*c;t[0]=l*u,t[4]=m-f*d,t[8]=_*d+h,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-m*d}else if(e.order==="XZY"){const f=s*l,h=s*c,_=a*l,m=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+m,t[5]=s*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=a*u,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CM,e,AM)}lookAt(e,t,r){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),fi.crossVectors(r,Rn),fi.lengthSq()===0&&(Math.abs(r.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),fi.crossVectors(r,Rn)),fi.normalize(),gl.crossVectors(Rn,fi),i[0]=fi.x,i[4]=gl.x,i[8]=Rn.x,i[1]=fi.y,i[5]=gl.y,i[9]=Rn.y,i[2]=fi.z,i[6]=gl.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,o=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],u=r[1],d=r[5],f=r[9],h=r[13],_=r[2],m=r[6],g=r[10],p=r[14],x=r[3],v=r[7],b=r[11],T=r[15],R=i[0],A=i[4],P=i[8],y=i[12],M=i[1],k=i[5],O=i[9],U=i[13],Y=i[2],J=i[6],V=i[10],W=i[14],z=i[3],he=i[7],pe=i[11],_e=i[15];return o[0]=s*R+a*M+l*Y+c*z,o[4]=s*A+a*k+l*J+c*he,o[8]=s*P+a*O+l*V+c*pe,o[12]=s*y+a*U+l*W+c*_e,o[1]=u*R+d*M+f*Y+h*z,o[5]=u*A+d*k+f*J+h*he,o[9]=u*P+d*O+f*V+h*pe,o[13]=u*y+d*U+f*W+h*_e,o[2]=_*R+m*M+g*Y+p*z,o[6]=_*A+m*k+g*J+p*he,o[10]=_*P+m*O+g*V+p*pe,o[14]=_*y+m*U+g*W+p*_e,o[3]=x*R+v*M+b*Y+T*z,o[7]=x*A+v*k+b*J+T*he,o[11]=x*P+v*O+b*V+T*pe,o[15]=x*y+v*U+b*W+T*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],m=e[7],g=e[11],p=e[15];return _*(+o*l*d-i*c*d-o*a*f+r*c*f+i*a*h-r*l*h)+m*(+t*l*h-t*c*f+o*s*f-i*s*h+i*c*u-o*l*u)+g*(+t*c*d-t*a*h-o*s*d+r*s*h+o*a*u-r*c*u)+p*(-i*a*u-t*l*d+t*a*f+i*s*d-r*s*f+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],m=e[13],g=e[14],p=e[15],x=d*g*c-m*f*c+m*l*h-a*g*h-d*l*p+a*f*p,v=_*f*c-u*g*c-_*l*h+s*g*h+u*l*p-s*f*p,b=u*m*c-_*d*c+_*a*h-s*m*h-u*a*p+s*d*p,T=_*d*l-u*m*l-_*a*f+s*m*f+u*a*g-s*d*g,R=t*x+r*v+i*b+o*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=x*A,e[1]=(m*f*o-d*g*o-m*i*h+r*g*h+d*i*p-r*f*p)*A,e[2]=(a*g*o-m*l*o+m*i*c-r*g*c-a*i*p+r*l*p)*A,e[3]=(d*l*o-a*f*o-d*i*c+r*f*c+a*i*h-r*l*h)*A,e[4]=v*A,e[5]=(u*g*o-_*f*o+_*i*h-t*g*h-u*i*p+t*f*p)*A,e[6]=(_*l*o-s*g*o-_*i*c+t*g*c+s*i*p-t*l*p)*A,e[7]=(s*f*o-u*l*o+u*i*c-t*f*c-s*i*h+t*l*h)*A,e[8]=b*A,e[9]=(_*d*o-u*m*o-_*r*h+t*m*h+u*r*p-t*d*p)*A,e[10]=(s*m*o-_*a*o+_*r*c-t*m*c-s*r*p+t*a*p)*A,e[11]=(u*a*o-s*d*o-u*r*c+t*d*c+s*r*h-t*a*h)*A,e[12]=T*A,e[13]=(u*m*i-_*d*i+_*r*f-t*m*f-u*r*g+t*d*g)*A,e[14]=(_*a*i-s*m*i-_*r*l+t*m*l+s*r*g-t*a*g)*A,e[15]=(s*d*i-u*a*i+u*r*l-t*d*l-s*r*f+t*a*f)*A,this}scale(e){const t=this.elements,r=e.x,i=e.y,o=e.z;return t[0]*=r,t[4]*=i,t[8]*=o,t[1]*=r,t[5]*=i,t[9]*=o,t[2]*=r,t[6]*=i,t[10]*=o,t[3]*=r,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),o=1-r,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*s,0,c*l-i*a,u*l+i*s,o*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,o,s){return this.set(1,r,o,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,h=o*u,_=o*d,m=s*u,g=s*d,p=a*d,x=l*c,v=l*u,b=l*d,T=r.x,R=r.y,A=r.z;return i[0]=(1-(m+p))*T,i[1]=(h+b)*T,i[2]=(_-v)*T,i[3]=0,i[4]=(h-b)*R,i[5]=(1-(f+p))*R,i[6]=(g+x)*R,i[7]=0,i[8]=(_+v)*A,i[9]=(g-x)*A,i[10]=(1-(f+m))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let o=Oo.set(i[0],i[1],i[2]).length();const s=Oo.set(i[4],i[5],i[6]).length(),a=Oo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],rr.copy(this);const c=1/o,u=1/s,d=1/a;return rr.elements[0]*=c,rr.elements[1]*=c,rr.elements[2]*=c,rr.elements[4]*=u,rr.elements[5]*=u,rr.elements[6]*=u,rr.elements[8]*=d,rr.elements[9]*=d,rr.elements[10]*=d,t.setFromRotationMatrix(rr),r.x=o,r.y=s,r.z=a,this}makePerspective(e,t,r,i,o,s,a=Jr){const l=this.elements,c=2*o/(t-e),u=2*o/(r-i),d=(t+e)/(t-e),f=(r+i)/(r-i);let h,_;if(a===Jr)h=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===ic)h=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,i,o,s,a=Jr){const l=this.elements,c=1/(t-e),u=1/(r-i),d=1/(s-o),f=(t+e)*c,h=(r+i)*u;let _,m;if(a===Jr)_=(s+o)*d,m=-2*d;else if(a===ic)_=o*d,m=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Oo=new X,rr=new Et,CM=new X(0,0,0),AM=new X(1,1,1),fi=new X,gl=new X,Rn=new X,Xp=new Et,jp=new yo;class kr{constructor(e=0,t=0,r=0,i=kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,o=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ye(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xp,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kr.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RM=0;const Yp=new X,Uo=new yo,Hr=new Et,_l=new X,Hs=new X,PM=new X,DM=new yo,qp=new X(1,0,0),Kp=new X(0,1,0),Zp=new X(0,0,1),Jp={type:"added"},kM={type:"removed"},No={type:"childadded",child:null},hu={type:"childremoved",child:null};class xn extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new X,t=new kr,r=new yo,i=new X(1,1,1);function o(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new $e}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Uo.setFromAxisAngle(e,t),this.quaternion.multiply(Uo),this}rotateOnWorldAxis(e,t){return Uo.setFromAxisAngle(e,t),this.quaternion.premultiply(Uo),this}rotateX(e){return this.rotateOnAxis(qp,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,t){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qp,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_l.copy(e):_l.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hr.lookAt(Hs,_l,this.up):Hr.lookAt(_l,Hs,this.up),this.quaternion.setFromRotationMatrix(Hr),i&&(Hr.extractRotation(i.matrixWorld),Uo.setFromRotationMatrix(Hr),this.quaternion.premultiply(Uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jp),No.child=e,this.dispatchEvent(No),No.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kM),hu.child=e,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jp),No.child=e,this.dispatchEvent(No),No.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,PM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,DM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),h=s(e.animations),_=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),f.length>0&&(r.skeletons=f),h.length>0&&(r.animations=h),_.length>0&&(r.nodes=_)}return r.object=i,r;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}xn.DEFAULT_UP=new X(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new X,Vr=new X,pu=new X,Gr=new X,Bo=new X,Fo=new X,Qp=new X,mu=new X,gu=new X,_u=new X,bu=new ht,vu=new ht,yu=new ht;class cr{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),ir.subVectors(e,t),i.cross(ir);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,r,i,o){ir.subVectors(i,t),Vr.subVectors(r,t),pu.subVectors(e,t);const s=ir.dot(ir),a=ir.dot(Vr),l=ir.dot(pu),c=Vr.dot(Vr),u=Vr.dot(pu),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,_=(s*u-a*l)*f;return o.set(1-h-_,_,h)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,Gr)===null?!1:Gr.x>=0&&Gr.y>=0&&Gr.x+Gr.y<=1}static getInterpolation(e,t,r,i,o,s,a,l){return this.getBarycoord(e,t,r,i,Gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Gr.x),l.addScaledVector(s,Gr.y),l.addScaledVector(a,Gr.z),l)}static getInterpolatedAttribute(e,t,r,i,o,s){return bu.setScalar(0),vu.setScalar(0),yu.setScalar(0),bu.fromBufferAttribute(e,t),vu.fromBufferAttribute(e,r),yu.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(bu,o.x),s.addScaledVector(vu,o.y),s.addScaledVector(yu,o.z),s}static isFrontFacing(e,t,r,i){return ir.subVectors(r,t),Vr.subVectors(e,t),ir.cross(Vr).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Vr.subVectors(this.a,this.b),ir.cross(Vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,i,o){return cr.getInterpolation(e,this.a,this.b,this.c,t,r,i,o)}containsPoint(e){return cr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,o=this.c;let s,a;Bo.subVectors(i,r),Fo.subVectors(o,r),mu.subVectors(e,r);const l=Bo.dot(mu),c=Fo.dot(mu);if(l<=0&&c<=0)return t.copy(r);gu.subVectors(e,i);const u=Bo.dot(gu),d=Fo.dot(gu);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(Bo,s);_u.subVectors(e,o);const h=Bo.dot(_u),_=Fo.dot(_u);if(_>=0&&h<=_)return t.copy(o);const m=h*c-l*_;if(m<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(r).addScaledVector(Fo,a);const g=u*_-h*d;if(g<=0&&d-u>=0&&h-_>=0)return Qp.subVectors(o,i),a=(d-u)/(d-u+(h-_)),t.copy(i).addScaledVector(Qp,a);const p=1/(g+m+f);return s=m*p,a=f*p,t.copy(r).addScaledVector(Bo,s).addScaledVector(Fo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},bl={h:0,s:0,l:0};function xu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=rt.workingColorSpace){if(e=Yf(e,1),t=Ye(t,0,1),r=Ye(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,s=2*r-o;this.r=xu(s,o,e+1/3),this.g=xu(s,o,e),this.b=xu(s,o,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=Dn){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const r=U_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return rt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Ye(Zt.r*255,0,255))*65536+Math.round(Ye(Zt.g*255,0,255))*256+Math.round(Ye(Zt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Zt.copy(this),t);const r=Zt.r,i=Zt.g,o=Zt.b,s=Math.max(r,i,o),a=Math.min(r,i,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case r:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-r)/d+2;break;case o:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Dn){rt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,r=Zt.g,i=Zt.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(bl);const r=aa(hi.h,bl.h,t),i=aa(hi.s,bl.s,t),o=aa(hi.l,bl.l,t);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*i,this.g=o[1]*t+o[4]*r+o[7]*i,this.b=o[2]*t+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Je;Je.NAMES=U_;let LM=0;class Qa extends wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=us,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(r.blending=this.blending),this.side!==Ii&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==cd&&(r.blendSrc=this.blendSrc),this.blendDst!==ud&&(r.blendDst=this.blendDst),this.blendEquation!==oo&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Po&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Po&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Po&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=i(e.textures),s=i(e.images);o.length>0&&(r.textures=o),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jf extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.combine=v_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new X,vl=new Ve;class Rr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Fp,this.updateRanges=[],this.gpuType=Zr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Yo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=an(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yo(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yo(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yo(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),r=an(r,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,o){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),r=an(r,this.array),i=an(i,this.array),o=an(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),e}}class N_ extends Rr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class B_ extends Rr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class zn extends Rr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let IM=0;const jn=new Et,Su=new xn,zo=new X,Pn=new Ja,Vs=new Ja,Gt=new X;class si extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L_(e)?B_:N_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new $e().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,r){return jn.makeTranslation(e,t,r),this.applyMatrix4(jn),this}scale(e,t,r){return jn.makeScale(e,t,r),this.applyMatrix4(jn),this}lookAt(e){return Su.lookAt(e),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zo).negate(),this.translate(zo.x,zo.y,zo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let i=0,o=e.length;i<o;i++){const s=e[i];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new zn(r,3))}else{const r=Math.min(e.length,t.count);for(let i=0;i<r;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const o=t[r];Pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Pn.min,Vs.min),Pn.expandByPoint(Gt),Gt.addVectors(Pn.max,Vs.max),Pn.expandByPoint(Gt)):(Pn.expandByPoint(Vs.min),Pn.expandByPoint(Vs.max))}Pn.getCenter(r);let i=0;for(let o=0,s=e.count;o<s;o++)Gt.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(Gt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(zo.fromBufferAttribute(e,c),Gt.add(zo)),i=Math.max(i,r.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rr(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<r.count;P++)a[P]=new X,l[P]=new X;const c=new X,u=new X,d=new X,f=new Ve,h=new Ve,_=new Ve,m=new X,g=new X;function p(P,y,M){c.fromBufferAttribute(r,P),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,M),f.fromBufferAttribute(o,P),h.fromBufferAttribute(o,y),_.fromBufferAttribute(o,M),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const k=1/(h.x*_.y-_.x*h.y);isFinite(k)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(k),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(k),a[P].add(m),a[y].add(m),a[M].add(m),l[P].add(g),l[y].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,y=x.length;P<y;++P){const M=x[P],k=M.start,O=M.count;for(let U=k,Y=k+O;U<Y;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new X,b=new X,T=new X,R=new X;function A(P){T.fromBufferAttribute(i,P),R.copy(T);const y=a[P];v.copy(y),v.sub(T.multiplyScalar(T.dot(y))).normalize(),b.crossVectors(R,y);const k=b.dot(l[P])<0?-1:1;s.setXYZW(P,v.x,v.y,v.z,k)}for(let P=0,y=x.length;P<y;++P){const M=x[P],k=M.start,O=M.count;for(let U=k,Y=k+O;U<Y;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Rr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,h=r.count;f<h;f++)r.setXYZ(f,0,0,0);const i=new X,o=new X,s=new X,a=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),m=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),a.fromBufferAttribute(r,_),l.fromBufferAttribute(r,m),c.fromBufferAttribute(r,g),a.add(u),l.add(u),c.add(u),r.setXYZ(_,a.x,a.y,a.z),r.setXYZ(m,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?h=l[m]*a.data.stride+a.offset:h=l[m]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new Rr(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,r);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new Et,qi=new Kf,yl=new qf,tm=new X,xl=new X,Sl=new X,Ml=new X,Mu=new X,El=new X,nm=new X,wl=new X;class qn extends xn{constructor(e=new si,t=new Jf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){El.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Mu.fromBufferAttribute(d,e),s?El.addScaledVector(Mu,u):El.addScaledVector(Mu.sub(t),u))}t.add(El)}return t}raycast(e,t){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(o),qi.copy(e.ray).recast(e.near),!(yl.containsPoint(qi.origin)===!1&&(qi.intersectSphere(yl,tm)===null||qi.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(o).invert(),qi.copy(e.ray).applyMatrix4(em),!(r.boundingBox!==null&&qi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,r){let i;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,m=f.length;_<m;_++){const g=f[_],p=s[g.materialIndex],x=Math.max(g.start,h.start),v=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let b=x,T=v;b<T;b+=3){const R=a.getX(b),A=a.getX(b+1),P=a.getX(b+2);i=Tl(this,p,e,r,c,u,d,R,A,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),m=Math.min(a.count,h.start+h.count);for(let g=_,p=m;g<p;g+=3){const x=a.getX(g),v=a.getX(g+1),b=a.getX(g+2);i=Tl(this,s,e,r,c,u,d,x,v,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,m=f.length;_<m;_++){const g=f[_],p=s[g.materialIndex],x=Math.max(g.start,h.start),v=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let b=x,T=v;b<T;b+=3){const R=b,A=b+1,P=b+2;i=Tl(this,p,e,r,c,u,d,R,A,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let g=_,p=m;g<p;g+=3){const x=g,v=g+1,b=g+2;i=Tl(this,s,e,r,c,u,d,x,v,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function OM(n,e,t,r,i,o,s,a){let l;if(e.side===mn?l=r.intersectTriangle(s,o,i,!0,a):l=r.intersectTriangle(i,o,s,e.side===Ii,a),l===null)return null;wl.copy(a),wl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(wl);return c<t.near||c>t.far?null:{distance:c,point:wl.clone(),object:n}}function Tl(n,e,t,r,i,o,s,a,l,c){n.getVertexPosition(a,xl),n.getVertexPosition(l,Sl),n.getVertexPosition(c,Ml);const u=OM(n,e,t,r,xl,Sl,Ml,nm);if(u){const d=new X;cr.getBarycoord(nm,xl,Sl,Ml,d),i&&(u.uv=cr.getInterpolatedAttribute(i,a,l,c,d,new Ve)),o&&(u.uv1=cr.getInterpolatedAttribute(o,a,l,c,d,new Ve)),s&&(u.normal=cr.getInterpolatedAttribute(s,a,l,c,d,new X),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};cr.getNormal(xl,Sl,Ml,f.normal),u.face=f,u.barycoord=d}return u}class el extends si{constructor(e=1,t=1,r=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:o,depthSegments:s};const a=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,r,t,e,s,o,0),_("z","y","x",1,-1,r,t,-e,s,o,1),_("x","z","y",1,1,e,r,t,i,s,2),_("x","z","y",1,-1,e,r,-t,i,s,3),_("x","y","z",1,-1,e,t,r,i,o,4),_("x","y","z",-1,-1,e,t,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(d,2));function _(m,g,p,x,v,b,T,R,A,P,y){const M=b/A,k=T/P,O=b/2,U=T/2,Y=R/2,J=A+1,V=P+1;let W=0,z=0;const he=new X;for(let pe=0;pe<V;pe++){const _e=pe*k-U;for(let Me=0;Me<J;Me++){const Ue=Me*M-O;he[m]=Ue*x,he[g]=_e*v,he[p]=Y,c.push(he.x,he.y,he.z),he[m]=0,he[g]=0,he[p]=R>0?1:-1,u.push(he.x,he.y,he.z),d.push(Me/A),d.push(1-pe/P),W+=1}}for(let pe=0;pe<P;pe++)for(let _e=0;_e<A;_e++){const Me=f+_e+J*pe,Ue=f+_e+J*(pe+1),Q=f+(_e+1)+J*(pe+1),fe=f+(_e+1)+J*pe;l.push(Me,Ue,fe),l.push(Ue,Q,fe),z+=6}a.addGroup(h,z,y),h+=z,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const r=ws(n[t]);for(const i in r)e[i]=r[i]}return e}function UM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function F_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const NM={clone:ws,merge:ln};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=UM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class z_ extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Jr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new X,rm=new Ve,im=new Ve;class In extends z_{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,rm,im),t.subVectors(im,rm)}setViewOffset(e,t,r,i,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,o=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*i/l,t-=s.offsetY*r/c,i*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ho=-90,Vo=1;class zM extends xn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In(Ho,Vo,e,t);i.layers=this.layers,this.add(i);const o=new In(Ho,Vo,e,t);o.layers=this.layers,this.add(o);const s=new In(Ho,Vo,e,t);s.layers=this.layers,this.add(s);const a=new In(Ho,Vo,e,t);a.layers=this.layers,this.add(a);const l=new In(Ho,Vo,e,t);l.layers=this.layers,this.add(l);const c=new In(Ho,Vo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===Jr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,o),e.setRenderTarget(r,1,i),e.render(t,s),e.setRenderTarget(r,2,i),e.render(t,a),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,c),r.texture.generateMipmaps=m,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class H_ extends gn{constructor(e,t,r,i,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,r,i,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HM extends vo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new H_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new el(5,5,5),o=new Oi({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:mn,blending:Ri});o.uniforms.tEquirect.value=t;const s=new qn(i,o),a=t.minFilter;return t.minFilter===lo&&(t.minFilter=wr),new zM(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(o)}}class VM extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kr,this.environmentIntensity=1,this.environmentRotation=new kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Eu=new X,GM=new X,WM=new $e;class yi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=Eu.subVectors(r,t).cross(GM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Eu),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||WM.getNormalMatrix(e),i=this.coplanarPoint(Eu).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new qf,Cl=new X;class Qf{constructor(e=new yi,t=new yi,r=new yi,i=new yi,o=new yi,s=new yi){this.planes=[e,t,r,i,o,s]}set(e,t,r,i,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(i),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Jr){const r=this.planes,i=e.elements,o=i[0],s=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],_=i[9],m=i[10],g=i[11],p=i[12],x=i[13],v=i[14],b=i[15];if(r[0].setComponents(l-o,f-c,g-h,b-p).normalize(),r[1].setComponents(l+o,f+c,g+h,b+p).normalize(),r[2].setComponents(l+s,f+u,g+_,b+x).normalize(),r[3].setComponents(l-s,f-u,g-_,b-x).normalize(),r[4].setComponents(l-a,f-d,g-m,b-v).normalize(),t===Jr)r[5].setComponents(l+a,f+d,g+m,b+v).normalize();else if(t===ic)r[5].setComponents(a,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(Cl.x=i.normal.x>0?e.max.x:e.min.x,Cl.y=i.normal.y>0?e.max.y:e.min.y,Cl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jo extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class V_ extends gn{constructor(e,t,r,i,o,s,a,l,c,u=ds){if(u!==ds&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===ds&&(r=bo),r===void 0&&u===Ms&&(r=Ss),super(null,i,o,s,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hr,this.minFilter=l!==void 0?l:hr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pc extends si{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const o=e/2,s=t/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,h=[],_=[],m=[],g=[];for(let p=0;p<u;p++){const x=p*f-s;for(let v=0;v<c;v++){const b=v*d-o;_.push(b,-x,0),m.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,b=x+c*(p+1),T=x+1+c*(p+1),R=x+1+c*p;h.push(v,b,R),h.push(b,T,R)}this.setIndex(h),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(m,3)),this.setAttribute("uv",new zn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class eh extends si{constructor(e=.5,t=1,r=32,i=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:i,thetaStart:o,thetaLength:s},r=Math.max(3,r),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let d=e;const f=(t-e)/i,h=new X,_=new Ve;for(let m=0;m<=i;m++){for(let g=0;g<=r;g++){const p=o+g/r*s;h.x=d*Math.cos(p),h.y=d*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let m=0;m<i;m++){const g=m*(r+1);for(let p=0;p<r;p++){const x=p+g,v=x,b=x+r+1,T=x+r+2,R=x+1;a.push(v,b,R),a.push(b,T,R)}}this.setIndex(a),this.setAttribute("position",new zn(l,3)),this.setAttribute("normal",new zn(c,3)),this.setAttribute("uv",new zn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class oc extends si{constructor(e=1,t=32,r=16,i=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+a,Math.PI);let c=0;const u=[],d=new X,f=new X,h=[],_=[],m=[],g=[];for(let p=0;p<=r;p++){const x=[],v=p/r;let b=0;p===0&&s===0?b=.5/t:p===r&&l===Math.PI&&(b=-.5/t);for(let T=0;T<=t;T++){const R=T/t;d.x=-e*Math.cos(i+R*o)*Math.sin(s+v*a),d.y=e*Math.cos(s+v*a),d.z=e*Math.sin(i+R*o)*Math.sin(s+v*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),g.push(R+b,1-v),x.push(c++)}u.push(x)}for(let p=0;p<r;p++)for(let x=0;x<t;x++){const v=u[p][x+1],b=u[p][x],T=u[p+1][x],R=u[p+1][x+1];(p!==0||s>0)&&h.push(v,b,R),(p!==r-1||l<Math.PI)&&h.push(b,T,R)}this.setIndex(h),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(m,3)),this.setAttribute("uv",new zn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class om extends Qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D_,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $M extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XM extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sm={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class jM{constructor(e,t,r){const i=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){a++,o===!1&&i.onStart!==void 0&&i.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],_=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null}}}const YM=new jM;class th{constructor(e){this.manager=e!==void 0?e:YM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(i,o){r.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}th.DEFAULT_MATERIAL_NAME="__DEFAULT";class qM extends th{constructor(e){super(e)}load(e,t,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=sm.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=Pa("img");function l(){u(),sm.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),i&&i(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class KM extends th{constructor(e){super(e)}load(e,t,r,i){const o=new gn,s=new qM(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},r,i),o}}class G_ extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const wu=new Et,am=new X,lm=new X;class ZM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qf,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;am.setFromMatrixPosition(e.matrixWorld),t.position.copy(am),lm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lm),t.updateMatrixWorld(),wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cm=new Et,Gs=new X,Tu=new X;class JM extends ZM{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,i=this.matrix,o=e.distance||r.far;o!==r.far&&(r.far=o,r.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),r.position.copy(Gs),Tu.copy(r.position),Tu.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Tu),r.updateMatrixWorld(),i.makeTranslation(-Gs.x,-Gs.y,-Gs.z),cm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cm)}}class QM extends G_{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new JM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class eE extends z_{constructor(e=-1,t=1,r=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,s=r+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tE extends G_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nE extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=um(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=um();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function um(){return performance.now()}const dm=new Et;class iE{constructor(e,t,r=0,i=1/0){this.ray=new Kf(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new Zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dm),this}intersectObject(e,t=!0,r=[]){return jd(e,this,r,t),r.sort(fm),r}intersectObjects(e,t=!0,r=[]){for(let i=0,o=e.length;i<o;i++)jd(e[i],this,r,t);return r.sort(fm),r}}function fm(n,e){return n.distance-e.distance}function jd(n,e,t,r){let i=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(i=!1),i===!0&&r===!0){const o=n.children;for(let s=0,a=o.length;s<a;s++)jd(o[s],e,t,!0)}}class hm{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class oE extends wo{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function pm(n,e,t,r){const i=sE(r);switch(t){case E_:return n*e;case T_:return n*e;case C_:return n*e*2;case A_:return n*e/i.components*i.byteLength;case $f:return n*e/i.components*i.byteLength;case R_:return n*e*2/i.components*i.byteLength;case Xf:return n*e*2/i.components*i.byteLength;case w_:return n*e*3/i.components*i.byteLength;case ur:return n*e*4/i.components*i.byteLength;case jf:return n*e*4/i.components*i.byteLength;case Fl:case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xd:case Md:return Math.max(n,16)*Math.max(e,8)/4;case yd:case Sd:return Math.max(n,8)*Math.max(e,8)/2;case Ed:case wd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Od:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Hd:case Vd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case P_:case Gd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wd:case $d:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sE(n){switch(n){case ti:case x_:return{byteLength:1,components:1};case Aa:case S_:case Za:return{byteLength:2,components:1};case Gf:case Wf:return{byteLength:2,components:4};case bo:case Vf:case Zr:return{byteLength:4,components:1};case M_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W_(){let n=null,e=!1,t=null,r=null;function i(o,s){t(o,s),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function aE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function r(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],m=d[h];m.start<=_.start+_.count+1?_.count=Math.max(_.count,m.start+m.count-_.start):(++f,d[f]=m)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const m=d[h];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:s}}var lE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cE=`#ifdef USE_ALPHAHASH
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
#endif`,uE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pE=`#ifdef USE_AOMAP
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
#endif`,mE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE=`#ifdef USE_BATCHING
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
#endif`,_E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xE=`#ifdef USE_IRIDESCENCE
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
#endif`,SE=`#ifdef USE_BUMPMAP
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
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,DE=`#define PI 3.141592653589793
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
} // validated`,kE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LE=`vec3 transformedNormal = objectNormal;
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
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,GE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qE=`#ifdef USE_GRADIENTMAP
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
}`,KE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QE=`uniform bool receiveShadow;
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
#endif`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ow=`PhysicalMaterial material;
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
#endif`,sw=`struct PhysicalMaterial {
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
}`,aw=`
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
#endif`,lw=`#if defined( RE_IndirectDiffuse )
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
#endif`,cw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_w=`#if defined( USE_POINTS_UV )
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
#endif`,bw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mw=`#ifdef USE_MORPHTARGETS
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
#endif`,Ew=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pw=`#ifdef USE_NORMALMAP
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
#endif`,Dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ow=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ww=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$w=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xw=`float getShadowMask() {
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
}`,jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yw=`#ifdef USE_SKINNING
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
#endif`,qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kw=`#ifdef USE_SKINNING
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
#endif`,Zw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tT=`#ifdef USE_TRANSMISSION
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
#endif`,nT=`#ifdef USE_TRANSMISSION
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lT=`uniform sampler2D t2D;
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
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`#include <common>
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
}`,pT=`#if DEPTH_PACKING == 3200
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
}`,mT=`#define DISTANCE
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
}`,gT=`#define DISTANCE
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
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
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
}`,yT=`uniform vec3 diffuse;
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
}`,xT=`#include <common>
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
}`,ST=`uniform vec3 diffuse;
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
}`,MT=`#define LAMBERT
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
}`,ET=`#define LAMBERT
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
}`,wT=`#define MATCAP
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
}`,TT=`#define MATCAP
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
}`,CT=`#define NORMAL
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
}`,AT=`#define NORMAL
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
}`,RT=`#define PHONG
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
}`,PT=`#define PHONG
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
}`,DT=`#define STANDARD
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
}`,kT=`#define STANDARD
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
}`,LT=`#define TOON
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
}`,IT=`#define TOON
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
}`,OT=`uniform float size;
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
}`,UT=`uniform vec3 diffuse;
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
}`,NT=`#include <common>
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
}`,BT=`uniform vec3 color;
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
}`,FT=`uniform float rotation;
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
}`,zT=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:lE,alphahash_pars_fragment:cE,alphamap_fragment:uE,alphamap_pars_fragment:dE,alphatest_fragment:fE,alphatest_pars_fragment:hE,aomap_fragment:pE,aomap_pars_fragment:mE,batching_pars_vertex:gE,batching_vertex:_E,begin_vertex:bE,beginnormal_vertex:vE,bsdfs:yE,iridescence_fragment:xE,bumpmap_pars_fragment:SE,clipping_planes_fragment:ME,clipping_planes_pars_fragment:EE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:TE,color_fragment:CE,color_pars_fragment:AE,color_pars_vertex:RE,color_vertex:PE,common:DE,cube_uv_reflection_fragment:kE,defaultnormal_vertex:LE,displacementmap_pars_vertex:IE,displacementmap_vertex:OE,emissivemap_fragment:UE,emissivemap_pars_fragment:NE,colorspace_fragment:BE,colorspace_pars_fragment:FE,envmap_fragment:zE,envmap_common_pars_fragment:HE,envmap_pars_fragment:VE,envmap_pars_vertex:GE,envmap_physical_pars_fragment:ew,envmap_vertex:WE,fog_vertex:$E,fog_pars_vertex:XE,fog_fragment:jE,fog_pars_fragment:YE,gradientmap_pars_fragment:qE,lightmap_pars_fragment:KE,lights_lambert_fragment:ZE,lights_lambert_pars_fragment:JE,lights_pars_begin:QE,lights_toon_fragment:tw,lights_toon_pars_fragment:nw,lights_phong_fragment:rw,lights_phong_pars_fragment:iw,lights_physical_fragment:ow,lights_physical_pars_fragment:sw,lights_fragment_begin:aw,lights_fragment_maps:lw,lights_fragment_end:cw,logdepthbuf_fragment:uw,logdepthbuf_pars_fragment:dw,logdepthbuf_pars_vertex:fw,logdepthbuf_vertex:hw,map_fragment:pw,map_pars_fragment:mw,map_particle_fragment:gw,map_particle_pars_fragment:_w,metalnessmap_fragment:bw,metalnessmap_pars_fragment:vw,morphinstance_vertex:yw,morphcolor_vertex:xw,morphnormal_vertex:Sw,morphtarget_pars_vertex:Mw,morphtarget_vertex:Ew,normal_fragment_begin:ww,normal_fragment_maps:Tw,normal_pars_fragment:Cw,normal_pars_vertex:Aw,normal_vertex:Rw,normalmap_pars_fragment:Pw,clearcoat_normal_fragment_begin:Dw,clearcoat_normal_fragment_maps:kw,clearcoat_pars_fragment:Lw,iridescence_pars_fragment:Iw,opaque_fragment:Ow,packing:Uw,premultiplied_alpha_fragment:Nw,project_vertex:Bw,dithering_fragment:Fw,dithering_pars_fragment:zw,roughnessmap_fragment:Hw,roughnessmap_pars_fragment:Vw,shadowmap_pars_fragment:Gw,shadowmap_pars_vertex:Ww,shadowmap_vertex:$w,shadowmask_pars_fragment:Xw,skinbase_vertex:jw,skinning_pars_vertex:Yw,skinning_vertex:qw,skinnormal_vertex:Kw,specularmap_fragment:Zw,specularmap_pars_fragment:Jw,tonemapping_fragment:Qw,tonemapping_pars_fragment:eT,transmission_fragment:tT,transmission_pars_fragment:nT,uv_pars_fragment:rT,uv_pars_vertex:iT,uv_vertex:oT,worldpos_vertex:sT,background_vert:aT,background_frag:lT,backgroundCube_vert:cT,backgroundCube_frag:uT,cube_vert:dT,cube_frag:fT,depth_vert:hT,depth_frag:pT,distanceRGBA_vert:mT,distanceRGBA_frag:gT,equirect_vert:_T,equirect_frag:bT,linedashed_vert:vT,linedashed_frag:yT,meshbasic_vert:xT,meshbasic_frag:ST,meshlambert_vert:MT,meshlambert_frag:ET,meshmatcap_vert:wT,meshmatcap_frag:TT,meshnormal_vert:CT,meshnormal_frag:AT,meshphong_vert:RT,meshphong_frag:PT,meshphysical_vert:DT,meshphysical_frag:kT,meshtoon_vert:LT,meshtoon_frag:IT,points_vert:OT,points_frag:UT,shadow_vert:NT,shadow_frag:BT,sprite_vert:FT,sprite_frag:zT},xe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Sr={basic:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:ln([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:ln([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:ln([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:ln([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:ln([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:ln([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:ln([xe.common,xe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:ln([xe.lights,xe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Sr.physical={uniforms:ln([Sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Al={r:0,b:0,g:0},Zi=new kr,HT=new Et;function VT(n,e,t,r,i,o,s){const a=new Je(0);let l=o===!0?0:1,c,u,d=null,f=0,h=null;function _(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function m(v){let b=!1;const T=_(v);T===null?p(a,l):T&&T.isColor&&(p(T,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,b){const T=_(b);T&&(T.isCubeTexture||T.mapping===Rc)?(u===void 0&&(u=new qn(new el(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:ws(Sr.backgroundCube.uniforms),vertexShader:Sr.backgroundCube.vertexShader,fragmentShader:Sr.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Zi.copy(b.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(HT.makeRotationFromEuler(Zi)),u.material.toneMapped=rt.getTransfer(T.colorSpace)!==ut,(d!==T||f!==T.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new qn(new Pc(2,2),new Oi({name:"BackgroundMaterial",uniforms:ws(Sr.background.uniforms),vertexShader:Sr.background.vertexShader,fragmentShader:Sr.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=rt.getTransfer(T.colorSpace)!==ut,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,b){v.getRGB(Al,F_(n)),r.buffers.color.setClear(Al.r,Al.g,Al.b,b,s)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:m,addToRenderList:g,dispose:x}}function GT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},i=f(null);let o=i,s=!1;function a(M,k,O,U,Y){let J=!1;const V=d(U,O,k);o!==V&&(o=V,c(o.object)),J=h(M,U,O,Y),J&&_(M,U,O,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,b(M,k,O,U),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,k,O){const U=O.wireframe===!0;let Y=r[M.id];Y===void 0&&(Y={},r[M.id]=Y);let J=Y[k.id];J===void 0&&(J={},Y[k.id]=J);let V=J[U];return V===void 0&&(V=f(l()),J[U]=V),V}function f(M){const k=[],O=[],U=[];for(let Y=0;Y<t;Y++)k[Y]=0,O[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:O,attributeDivisors:U,object:M,attributes:{},index:null}}function h(M,k,O,U){const Y=o.attributes,J=k.attributes;let V=0;const W=O.getAttributes();for(const z in W)if(W[z].location>=0){const pe=Y[z];let _e=J[z];if(_e===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;V++}return o.attributesNum!==V||o.index!==U}function _(M,k,O,U){const Y={},J=k.attributes;let V=0;const W=O.getAttributes();for(const z in W)if(W[z].location>=0){let pe=J[z];pe===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),Y[z]=_e,V++}o.attributes=Y,o.attributesNum=V,o.index=U}function m(){const M=o.newAttributes;for(let k=0,O=M.length;k<O;k++)M[k]=0}function g(M){p(M,0)}function p(M,k){const O=o.newAttributes,U=o.enabledAttributes,Y=o.attributeDivisors;O[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),Y[M]!==k&&(n.vertexAttribDivisor(M,k),Y[M]=k)}function x(){const M=o.newAttributes,k=o.enabledAttributes;for(let O=0,U=k.length;O<U;O++)k[O]!==M[O]&&(n.disableVertexAttribArray(O),k[O]=0)}function v(M,k,O,U,Y,J,V){V===!0?n.vertexAttribIPointer(M,k,O,Y,J):n.vertexAttribPointer(M,k,O,U,Y,J)}function b(M,k,O,U){m();const Y=U.attributes,J=O.getAttributes(),V=k.defaultAttributeValues;for(const W in J){const z=J[W];if(z.location>=0){let he=Y[W];if(he===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const pe=he.normalized,_e=he.itemSize,Me=e.get(he);if(Me===void 0)continue;const Ue=Me.buffer,Q=Me.type,fe=Me.bytesPerElement,ve=Q===n.INT||Q===n.UNSIGNED_INT||he.gpuType===Vf;if(he.isInterleavedBufferAttribute){const N=he.data,se=N.stride,oe=he.offset;if(N.isInstancedInterleavedBuffer){for(let de=0;de<z.locationSize;de++)p(z.location+de,N.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let de=0;de<z.locationSize;de++)g(z.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let de=0;de<z.locationSize;de++)v(z.location+de,_e/z.locationSize,Q,pe,se*fe,(oe+_e/z.locationSize*de)*fe,ve)}else{if(he.isInstancedBufferAttribute){for(let N=0;N<z.locationSize;N++)p(z.location+N,he.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let N=0;N<z.locationSize;N++)g(z.location+N);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let N=0;N<z.locationSize;N++)v(z.location+N,_e/z.locationSize,Q,pe,_e*fe,_e/z.locationSize*N*fe,ve)}}else if(V!==void 0){const pe=V[W];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(z.location,pe);break;case 3:n.vertexAttrib3fv(z.location,pe);break;case 4:n.vertexAttrib4fv(z.location,pe);break;default:n.vertexAttrib1fv(z.location,pe)}}}}x()}function T(){P();for(const M in r){const k=r[M];for(const O in k){const U=k[O];for(const Y in U)u(U[Y].object),delete U[Y];delete k[O]}delete r[M]}}function R(M){if(r[M.id]===void 0)return;const k=r[M.id];for(const O in k){const U=k[O];for(const Y in U)u(U[Y].object),delete U[Y];delete k[O]}delete r[M.id]}function A(M){for(const k in r){const O=r[k];if(O[M.id]===void 0)continue;const U=O[M.id];for(const Y in U)u(U[Y].object),delete U[Y];delete O[M.id]}}function P(){y(),s=!0,o!==i&&(o=i,c(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:g,disableUnusedAttributes:x}}function WT(n,e,t){let r;function i(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(r,c,u,d),t.update(u,r,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];t.update(h,r,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)s(c[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,d);let _=0;for(let m=0;m<d;m++)_+=u[m]*f[m];t.update(_,r,1)}}this.setMode=i,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $T(n,e,t,r){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){return!(A!==ur&&r.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ti&&r.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zr&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:T,maxSamples:R}}function XT(n){const e=this;let t=null,r=0,i=!1,o=!1;const s=new yi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||r!==0||i;return i=f,r=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,m=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!i||_===null||_.length===0||o&&!g)o?u(null):c();else{const x=o?0:r,v=x*4;let b=p.clippingState||null;l.value=b,b=u(_,f,v,h);for(let T=0;T!==v;++T)b[T]=t[T];p.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,f,h,_){const m=d!==null?d.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const p=h+m*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,b=h;v!==m;++v,b+=4)s.copy(d[v]).applyMatrix4(x,a),s.normal.toArray(g,b),g[b+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function jT(n){let e=new WeakMap;function t(s,a){return a===nc?s.mapping=ys:a===bd&&(s.mapping=xs),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===nc||a===bd)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new HM(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}const Qo=4,mm=[.125,.215,.35,.446,.526,.582],so=20,Cu=new eE,gm=new Je;let Au=null,Ru=0,Pu=0,Du=!1;const no=(1+Math.sqrt(5))/2,Go=1/no,_m=[new X(-no,Go,0),new X(no,Go,0),new X(-Go,0,no),new X(Go,0,no),new X(0,no,-Go),new X(0,no,Go),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Ru,Pu),this._renderer.xr.enabled=Du,e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wr,minFilter:wr,generateMipmaps:!1,type:Za,format:ur,colorSpace:Es,depthBuffer:!1},i=vm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,t,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YT(o)),this._blurMaterial=qT(o,e,t)}return i}_compileMaterial(e){const t=new qn(this._lodPlanes[0],e);this._renderer.compile(t,Cu)}_sceneToCubeUV(e,t,r,i){const a=new In(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(gm),u.toneMapping=Pi,u.autoClear=!1;const h=new Jf({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new qn(new el,h);let m=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,m=!0):(h.color.copy(gm),m=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Rl(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===ys||e.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ym());const o=i?this._cubemapMaterial:this._equirectMaterial,s=new qn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Rl(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Cu)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=_m[(i-o-1)%_m.length];this._blur(e,o-1,o,s,a)}t.autoClear=r}_blur(e,t,r,i,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",o),this._halfBlur(s,e,r,r,i,"longitudinal",o)}_halfBlur(e,t,r,i,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new qn(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[r]-1,_=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*so-1),m=o/_,g=isFinite(o)?1+Math.floor(u*m):so;g>so&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${so}`);const p=[];let x=0;for(let A=0;A<so;++A){const P=A/m,y=Math.exp(-P*P/2);p.push(y),A===0?x+=y:A<g&&(x+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-r;const b=this._sizeLods[i],T=3*b*(i>v-Qo?i-v+Qo:0),R=4*(this._cubeSize-b);Rl(t,T,R,3*b,2*b),l.setRenderTarget(t),l.render(d,Cu)}}function YT(n){const e=[],t=[],r=[];let i=n;const o=n-Qo+1+mm.length;for(let s=0;s<o;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>n-Qo?l=mm[s-n+Qo-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,m=3,g=2,p=1,x=new Float32Array(m*_*h),v=new Float32Array(g*_*h),b=new Float32Array(p*_*h);for(let R=0;R<h;R++){const A=R%3*2/3-1,P=R>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(y,m*_*R),v.set(f,g*_*R);const M=[R,R,R,R,R,R];b.set(M,p*_*R)}const T=new si;T.setAttribute("position",new Rr(x,m)),T.setAttribute("uv",new Rr(v,g)),T.setAttribute("faceIndex",new Rr(b,p)),e.push(T),i>Qo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function vm(n,e,t){const r=new vo(n,e,t);return r.texture.mapping=Rc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rl(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function qT(n,e,t){const r=new Float32Array(so),i=new X(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:so,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ym(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function xm(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function KT(n){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===nc||l===bd,u=l===ys||l===xs;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new bm(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new bm(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function ZT(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const i=t(r);return i===null&&qo("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function JT(n,e,t,r){const i={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete i[f.id];const h=o.get(f);h&&(e.remove(h),o.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let m=0;if(h!==null){const x=h.array;m=h.version;for(let v=0,b=x.length;v<b;v+=3){const T=x[v+0],R=x[v+1],A=x[v+2];f.push(T,R,R,A,A,T)}}else if(_!==void 0){const x=_.array;m=_.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const T=v+0,R=v+1,A=v+2;f.push(T,R,R,A,A,T)}}else return;const g=new(L_(f)?B_:N_)(f,1);g.version=m;const p=o.get(d);p&&e.remove(p),o.set(d,g)}function u(d){const f=o.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function QT(n,e,t){let r;function i(f){r=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,h){n.drawElements(r,h,o,f*s),t.update(h,r,1)}function c(f,h,_){_!==0&&(n.drawElementsInstanced(r,h,o,f*s,_),t.update(h,r,_))}function u(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,o,f,0,_);let g=0;for(let p=0;p<_;p++)g+=h[p];t.update(g,r,1)}function d(f,h,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/s,h[p],m[p]);else{g.multiDrawElementsInstancedWEBGL(r,h,0,o,f,0,m,0,_);let p=0;for(let x=0;x<_;x++)p+=h[x]*m[x];t.update(p,r,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function eC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function tC(n,e,t){const r=new WeakMap,i=new ht;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=r.get(a);if(f===void 0||f.count!==d){let M=function(){P.dispose(),r.delete(a),a.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),m===!0&&(b=2),g===!0&&(b=3);let T=a.attributes.position.count*b,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*R*4*d),P=new O_(A,T,R,d);P.type=Zr,P.needsUpdate=!0;const y=b*4;for(let k=0;k<d;k++){const O=p[k],U=x[k],Y=v[k],J=T*R*4*k;for(let V=0;V<O.count;V++){const W=V*y;_===!0&&(i.fromBufferAttribute(O,V),A[J+W+0]=i.x,A[J+W+1]=i.y,A[J+W+2]=i.z,A[J+W+3]=0),m===!0&&(i.fromBufferAttribute(U,V),A[J+W+4]=i.x,A[J+W+5]=i.y,A[J+W+6]=i.z,A[J+W+7]=0),g===!0&&(i.fromBufferAttribute(Y,V),A[J+W+8]=i.x,A[J+W+9]=i.y,A[J+W+10]=i.z,A[J+W+11]=Y.itemSize===4?i.w:1)}}f={count:d,texture:P,size:new Ve(T,R)},r.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const m=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function nC(n,e,t,r){let i=new WeakMap;function o(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const $_=new gn,Sm=new V_(1,1),X_=new O_,j_=new wM,Y_=new H_,Mm=[],Em=[],wm=new Float32Array(16),Tm=new Float32Array(9),Cm=new Float32Array(4);function Ls(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let o=Mm[i];if(o===void 0&&(o=new Float32Array(i),Mm[i]=o),e!==0){r.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Dc(n,e){let t=Em[e];t===void 0&&(t=new Int32Array(e),Em[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function rC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function oC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function sC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function aC(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,r))return;Cm.set(r),n.uniformMatrix2fv(this.addr,!1,Cm),Vt(t,r)}}function lC(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,r))return;Tm.set(r),n.uniformMatrix3fv(this.addr,!1,Tm),Vt(t,r)}}function cC(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,r))return;wm.set(r),n.uniformMatrix4fv(this.addr,!1,wm),Vt(t,r)}}function uC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function fC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function hC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function pC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function gC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function _C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function bC(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);let o;this.type===n.SAMPLER_2D_SHADOW?(Sm.compareFunction=k_,o=Sm):o=$_,t.setTexture2D(e||o,i)}function vC(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||j_,i)}function yC(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||Y_,i)}function xC(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||X_,i)}function SC(n){switch(n){case 5126:return rC;case 35664:return iC;case 35665:return oC;case 35666:return sC;case 35674:return aC;case 35675:return lC;case 35676:return cC;case 5124:case 35670:return uC;case 35667:case 35671:return dC;case 35668:case 35672:return fC;case 35669:case 35673:return hC;case 5125:return pC;case 36294:return mC;case 36295:return gC;case 36296:return _C;case 35678:case 36198:case 36298:case 36306:case 35682:return bC;case 35679:case 36299:case 36307:return vC;case 35680:case 36300:case 36308:case 36293:return yC;case 36289:case 36303:case 36311:case 36292:return xC}}function MC(n,e){n.uniform1fv(this.addr,e)}function EC(n,e){const t=Ls(e,this.size,2);n.uniform2fv(this.addr,t)}function wC(n,e){const t=Ls(e,this.size,3);n.uniform3fv(this.addr,t)}function TC(n,e){const t=Ls(e,this.size,4);n.uniform4fv(this.addr,t)}function CC(n,e){const t=Ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AC(n,e){const t=Ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RC(n,e){const t=Ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function PC(n,e){n.uniform1iv(this.addr,e)}function DC(n,e){n.uniform2iv(this.addr,e)}function kC(n,e){n.uniform3iv(this.addr,e)}function LC(n,e){n.uniform4iv(this.addr,e)}function IC(n,e){n.uniform1uiv(this.addr,e)}function OC(n,e){n.uniform2uiv(this.addr,e)}function UC(n,e){n.uniform3uiv(this.addr,e)}function NC(n,e){n.uniform4uiv(this.addr,e)}function BC(n,e,t){const r=this.cache,i=e.length,o=Dc(t,i);Ht(r,o)||(n.uniform1iv(this.addr,o),Vt(r,o));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||$_,o[s])}function FC(n,e,t){const r=this.cache,i=e.length,o=Dc(t,i);Ht(r,o)||(n.uniform1iv(this.addr,o),Vt(r,o));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||j_,o[s])}function zC(n,e,t){const r=this.cache,i=e.length,o=Dc(t,i);Ht(r,o)||(n.uniform1iv(this.addr,o),Vt(r,o));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Y_,o[s])}function HC(n,e,t){const r=this.cache,i=e.length,o=Dc(t,i);Ht(r,o)||(n.uniform1iv(this.addr,o),Vt(r,o));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||X_,o[s])}function VC(n){switch(n){case 5126:return MC;case 35664:return EC;case 35665:return wC;case 35666:return TC;case 35674:return CC;case 35675:return AC;case 35676:return RC;case 5124:case 35670:return PC;case 35667:case 35671:return DC;case 35668:case 35672:return kC;case 35669:case 35673:return LC;case 5125:return IC;case 36294:return OC;case 36295:return UC;case 36296:return NC;case 35678:case 36198:case 36298:case 36306:case 35682:return BC;case 35679:case 36299:case 36307:return FC;case 35680:case 36300:case 36308:case 36293:return zC;case 36289:case 36303:case 36311:case 36292:return HC}}class GC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=SC(t.type)}}class WC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VC(t.type)}}class $C{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let o=0,s=i.length;o!==s;++o){const a=i[o];a.setValue(e,t[a.id],r)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function Am(n,e){n.seq.push(e),n.map[e.id]=e}function XC(n,e,t){const r=n.name,i=r.length;for(ku.lastIndex=0;;){const o=ku.exec(r),s=ku.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){Am(t,c===void 0?new GC(a,n,e):new WC(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new $C(a),Am(t,d)),t=d}}}class Wl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(t,i),s=e.getUniformLocation(t,o.name);XC(o,s,this)}}setValue(e,t,r,i){const o=this.map[t];o!==void 0&&o.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,o=e.length;i!==o;++i){const s=e[i];s.id in t&&r.push(s)}return r}}function Rm(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const jC=37297;let YC=0;function qC(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=i;s<o;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return r.join(`
`)}const Pm=new $e;function KC(n){rt._getMatrix(Pm,rt.workingColorSpace,n);const e=`mat3( ${Pm.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case rc:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dm(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+qC(n.getShaderSource(e),s)}else return i}function ZC(n,e){const t=KC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function JC(n,e){let t;switch(e){case US:t="Linear";break;case NS:t="Reinhard";break;case BS:t="Cineon";break;case FS:t="ACESFilmic";break;case HS:t="AgX";break;case VS:t="Neutral";break;case zS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pl=new X;function QC(){rt.getLuminanceCoefficients(Pl);const n=Pl.x.toFixed(4),e=Pl.y.toFixed(4),t=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function tA(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function nA(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=n.getActiveAttrib(e,i),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Ys(n){return n!==""}function km(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(n){return n.replace(rA,oA)}const iA=new Map;function oA(n,e){let t=Xe[e];if(t===void 0){const r=iA.get(e);if(r!==void 0)t=Xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yd(t)}const sA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(n){return n.replace(sA,aA)}function aA(n,e,t,r){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Om(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function lA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$r&&(e="SHADOWMAP_TYPE_VSM"),e}function cA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ys:case xs:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function dA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case v_:e="ENVMAP_BLENDING_MULTIPLY";break;case IS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function fA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function hA(n,e,t,r){const i=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=lA(t),c=cA(t),u=uA(t),d=dA(t),f=fA(t),h=eA(t),_=tA(o),m=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ys).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(g=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Pi?JC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,ZC("linearToOutputTexel",t.outputColorSpace),QC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),s=Yd(s),s=km(s,t),s=Lm(s,t),a=Yd(a),a=km(a,t),a=Lm(a,t),s=Im(s),a=Im(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+s,b=x+p+a,T=Rm(i,i.VERTEX_SHADER,v),R=Rm(i,i.FRAGMENT_SHADER,b);i.attachShader(m,T),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function A(k){if(n.debug.checkShaderErrors){const O=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(T).trim(),Y=i.getShaderInfoLog(R).trim();let J=!0,V=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,T,R);else{const W=Dm(i,T,"vertex"),z=Dm(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+O+`
`+W+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||Y==="")&&(V=!1);V&&(k.diagnostics={runnable:J,programLog:O,vertexShader:{log:U,prefix:g},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(T),i.deleteShader(R),P=new Wl(i,m),y=nA(i,m)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(m,jC)),M},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YC++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gA(e),t.set(e,r)),r}}class gA{constructor(e){this.id=pA++,this.code=e,this.usedTimes=0}}function _A(n,e,t,r,i,o,s){const a=new Zf,l=new mA,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,M,k,O,U){const Y=O.fog,J=U.geometry,V=y.isMeshStandardMaterial?O.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),z=W&&W.mapping===Rc?W.image.height:null,he=_[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_e=pe!==void 0?pe.length:0;let Me=0;J.morphAttributes.position!==void 0&&(Me=1),J.morphAttributes.normal!==void 0&&(Me=2),J.morphAttributes.color!==void 0&&(Me=3);let Ue,Q,fe,ve;if(he){const ct=Sr[he];Ue=ct.vertexShader,Q=ct.fragmentShader}else Ue=y.vertexShader,Q=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);const N=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),oe=U.isInstancedMesh===!0,de=U.isBatchedMesh===!0,Pe=!!y.map,D=!!y.matcap,L=!!W,E=!!y.aoMap,re=!!y.lightMap,K=!!y.bumpMap,q=!!y.normalMap,ne=!!y.displacementMap,ce=!!y.emissiveMap,te=!!y.metalnessMap,w=!!y.roughnessMap,S=y.anisotropy>0,I=y.clearcoat>0,j=y.dispersion>0,B=y.iridescence>0,G=y.sheen>0,ae=y.transmission>0,le=S&&!!y.anisotropyMap,be=I&&!!y.clearcoatMap,Le=I&&!!y.clearcoatNormalMap,me=I&&!!y.clearcoatRoughnessMap,Se=B&&!!y.iridescenceMap,De=B&&!!y.iridescenceThicknessMap,Oe=G&&!!y.sheenColorMap,ye=G&&!!y.sheenRoughnessMap,Be=!!y.specularMap,Ge=!!y.specularColorMap,gt=!!y.specularIntensityMap,F=ae&&!!y.transmissionMap,Ee=ae&&!!y.thicknessMap,ie=!!y.gradientMap,ue=!!y.alphaMap,Ce=y.alphaTest>0,Te=!!y.alphaHash,We=!!y.extensions;let At=Pi;y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(At=n.toneMapping);const qt={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:Ue,fragmentShader:Q,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:de,batchingColor:de&&U._colorsTexture!==null,instancing:oe,instancingColor:oe&&U.instanceColor!==null,instancingMorph:oe&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Es,alphaToCoverage:!!y.alphaToCoverage,map:Pe,matcap:D,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:z,aoMap:E,lightMap:re,bumpMap:K,normalMap:q,displacementMap:f&&ne,emissiveMap:ce,normalMapObjectSpace:q&&y.normalMapType===XS,normalMapTangentSpace:q&&y.normalMapType===D_,metalnessMap:te,roughnessMap:w,anisotropy:S,anisotropyMap:le,clearcoat:I,clearcoatMap:be,clearcoatNormalMap:Le,clearcoatRoughnessMap:me,dispersion:j,iridescence:B,iridescenceMap:Se,iridescenceThicknessMap:De,sheen:G,sheenColorMap:Oe,sheenRoughnessMap:ye,specularMap:Be,specularColorMap:Ge,specularIntensityMap:gt,transmission:ae,transmissionMap:F,thicknessMap:Ee,gradientMap:ie,opaque:y.transparent===!1&&y.blending===us&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ce,alphaHash:Te,combine:y.combine,mapUv:Pe&&m(y.map.channel),aoMapUv:E&&m(y.aoMap.channel),lightMapUv:re&&m(y.lightMap.channel),bumpMapUv:K&&m(y.bumpMap.channel),normalMapUv:q&&m(y.normalMap.channel),displacementMapUv:ne&&m(y.displacementMap.channel),emissiveMapUv:ce&&m(y.emissiveMap.channel),metalnessMapUv:te&&m(y.metalnessMap.channel),roughnessMapUv:w&&m(y.roughnessMap.channel),anisotropyMapUv:le&&m(y.anisotropyMap.channel),clearcoatMapUv:be&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:Le&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(y.sheenRoughnessMap.channel),specularMapUv:Be&&m(y.specularMap.channel),specularColorMapUv:Ge&&m(y.specularColorMap.channel),specularIntensityMapUv:gt&&m(y.specularIntensityMap.channel),transmissionMapUv:F&&m(y.transmissionMap.channel),thicknessMapUv:Ee&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(q||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!J.attributes.uv&&(Pe||ue),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:se,skinning:U.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:ce&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mr,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:We&&y.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&y.extensions.multiDraw===!0||de)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)M.push(k),M.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(x(M,y),v(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function x(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function b(y){const M=_[y.type];let k;if(M){const O=Sr[M];k=NM.clone(O.uniforms)}else k=y.uniforms;return k}function T(y,M){let k;for(let O=0,U=u.length;O<U;O++){const Y=u[O];if(Y.cacheKey===M){k=Y,++k.usedTimes;break}}return k===void 0&&(k=new hA(n,M,y,o),u.push(k)),k}function R(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:T,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:P}}function bA(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function r(s){n.delete(s)}function i(s,a,l){n.get(s)[a]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:i,dispose:o}}function vA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Um(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nm(){const n=[];let e=0;const t=[],r=[],i=[];function o(){e=0,t.length=0,r.length=0,i.length=0}function s(d,f,h,_,m,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=m,p.group=g),e++,p}function a(d,f,h,_,m,g){const p=s(d,f,h,_,m,g);h.transmission>0?r.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(d,f,h,_,m,g){const p=s(d,f,h,_,m,g);h.transmission>0?r.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||vA),r.length>1&&r.sort(f||Um),i.length>1&&i.sort(f||Um)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:r,transparent:i,init:o,push:a,unshift:l,finish:u,sort:c}}function yA(){let n=new WeakMap;function e(r,i){const o=n.get(r);let s;return o===void 0?(s=new Nm,n.set(r,[s])):i>=o.length?(s=new Nm,o.push(s)):s=o[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function xA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Je};break;case"SpotLight":t={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function SA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let MA=0;function EA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wA(n){const e=new xA,t=SA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new X);const i=new X,o=new Et,s=new Et;function a(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)r.probe[y].set(0,0,0);let h=0,_=0,m=0,g=0,p=0,x=0,v=0,b=0,T=0,R=0,A=0;c.sort(EA);for(let y=0,M=c.length;y<M;y++){const k=c[y],O=k.color,U=k.intensity,Y=k.distance,J=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=O.r*U,d+=O.g*U,f+=O.b*U;else if(k.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(k.sh.coefficients[V],U);A++}else if(k.isDirectionalLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,z=t.get(k);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,r.directionalShadow[h]=z,r.directionalShadowMap[h]=J,r.directionalShadowMatrix[h]=k.shadow.matrix,x++}r.directional[h]=V,h++}else if(k.isSpotLight){const V=e.get(k);V.position.setFromMatrixPosition(k.matrixWorld),V.color.copy(O).multiplyScalar(U),V.distance=Y,V.coneCos=Math.cos(k.angle),V.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),V.decay=k.decay,r.spot[m]=V;const W=k.shadow;if(k.map&&(r.spotLightMap[T]=k.map,T++,W.updateMatrices(k),k.castShadow&&R++),r.spotLightMatrix[m]=W.matrix,k.castShadow){const z=t.get(k);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,r.spotShadow[m]=z,r.spotShadowMap[m]=J,b++}m++}else if(k.isRectAreaLight){const V=e.get(k);V.color.copy(O).multiplyScalar(U),V.halfWidth.set(k.width*.5,0,0),V.halfHeight.set(0,k.height*.5,0),r.rectArea[g]=V,g++}else if(k.isPointLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),V.distance=k.distance,V.decay=k.decay,k.castShadow){const W=k.shadow,z=t.get(k);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,r.pointShadow[_]=z,r.pointShadowMap[_]=J,r.pointShadowMatrix[_]=k.shadow.matrix,v++}r.point[_]=V,_++}else if(k.isHemisphereLight){const V=e.get(k);V.skyColor.copy(k.color).multiplyScalar(U),V.groundColor.copy(k.groundColor).multiplyScalar(U),r.hemi[p]=V,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=f;const P=r.hash;(P.directionalLength!==h||P.pointLength!==_||P.spotLength!==m||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==b||P.numSpotMaps!==T||P.numLightProbes!==A)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=g,r.point.length=_,r.hemi.length=p,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=b+T-R,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=A,P.directionalLength=h,P.pointLength=_,P.spotLength=m,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=b,P.numSpotMaps=T,P.numLightProbes=A,r.version=MA++)}function l(c,u){let d=0,f=0,h=0,_=0,m=0;const g=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(v.isSpotLight){const b=r.spot[h];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),h++}else if(v.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),s.identity(),o.copy(v.matrixWorld),o.premultiply(g),s.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),_++}else if(v.isPointLight){const b=r.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:r}}function Bm(n){const e=new wA(n),t=[],r=[];function i(u){c.camera=u,t.length=0,r.length=0}function o(u){t.push(u)}function s(u){r.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function TA(n){let e=new WeakMap;function t(i,o=0){const s=e.get(i);let a;return s===void 0?(a=new Bm(n),e.set(i,[a])):o>=s.length?(a=new Bm(n),s.push(a)):a=s[o],a}function r(){e=new WeakMap}return{get:t,dispose:r}}const CA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AA=`uniform sampler2D shadow_pass;
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
}`;function RA(n,e,t){let r=new Qf;const i=new Ve,o=new Ve,s=new ht,a=new $M({depthPacking:$S}),l=new XM,c={},u=t.maxTextureSize,d={[Ii]:mn,[mn]:Ii,[Mr]:Mr},f=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:CA,fragmentShader:AA}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new si;_.setAttribute("position",new Rr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new qn(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b_;let p=this.type;this.render=function(R,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ri),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==$r&&this.type===$r,Y=p===$r&&this.type!==$r;for(let J=0,V=R.length;J<V;J++){const W=R[J],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const he=z.getFrameExtents();if(i.multiply(he),o.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/he.x),i.x=o.x*he.x,z.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/he.y),i.y=o.y*he.y,z.mapSize.y=o.y)),z.map===null||U===!0||Y===!0){const _e=this.type!==$r?{minFilter:hr,magFilter:hr}:{};z.map!==null&&z.map.dispose(),z.map=new vo(i.x,i.y,_e),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const pe=z.getViewportCount();for(let _e=0;_e<pe;_e++){const Me=z.getViewport(_e);s.set(o.x*Me.x,o.y*Me.y,o.x*Me.z,o.y*Me.w),O.viewport(s),z.updateMatrices(W,_e),r=z.getFrustum(),b(A,P,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===$r&&x(z,P),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(y,M,k)};function x(R,A){const P=e.update(m);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vo(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,P,f,m,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,P,h,m,null)}function v(R,A,P,y){let M=null;const k=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)M=k;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=M.uuid,U=A.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let J=Y[U];J===void 0&&(J=M.clone(),Y[U]=J,A.addEventListener("dispose",T)),M=J}if(M.visible=A.visible,M.wireframe=A.wireframe,y===$r?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=P}return M}function b(R,A,P,y,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===$r)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const U=e.update(R),Y=R.material;if(Array.isArray(Y)){const J=U.groups;for(let V=0,W=J.length;V<W;V++){const z=J[V],he=Y[z.materialIndex];if(he&&he.visible){const pe=v(R,he,y,M);R.onBeforeShadow(n,R,A,P,U,pe,z),n.renderBufferDirect(P,null,U,pe,R,z),R.onAfterShadow(n,R,A,P,U,pe,z)}}}else if(Y.visible){const J=v(R,Y,y,M);R.onBeforeShadow(n,R,A,P,U,J,null),n.renderBufferDirect(P,null,U,J,R,null),R.onAfterShadow(n,R,A,P,U,J,null)}}const O=R.children;for(let U=0,Y=O.length;U<Y;U++)b(O[U],A,P,y,M)}function T(R){R.target.removeEventListener("dispose",T);for(const P in c){const y=c[P],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const PA={[dd]:fd,[hd]:gd,[pd]:_d,[vs]:md,[fd]:dd,[gd]:hd,[_d]:pd,[md]:vs};function DA(n,e){function t(){let F=!1;const Ee=new ht;let ie=null;const ue=new ht(0,0,0,0);return{setMask:function(Ce){ie!==Ce&&!F&&(n.colorMask(Ce,Ce,Ce,Ce),ie=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,Te,We,At,qt){qt===!0&&(Ce*=At,Te*=At,We*=At),Ee.set(Ce,Te,We,At),ue.equals(Ee)===!1&&(n.clearColor(Ce,Te,We,At),ue.copy(Ee))},reset:function(){F=!1,ie=null,ue.set(-1,0,0,0)}}}function r(){let F=!1,Ee=!1,ie=null,ue=null,Ce=null;return{setReversed:function(Te){if(Ee!==Te){const We=e.get("EXT_clip_control");Ee?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const At=Ce;Ce=null,this.setClear(At)}Ee=Te},getReversed:function(){return Ee},setTest:function(Te){Te?N(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(Te){ie!==Te&&!F&&(n.depthMask(Te),ie=Te)},setFunc:function(Te){if(Ee&&(Te=PA[Te]),ue!==Te){switch(Te){case dd:n.depthFunc(n.NEVER);break;case fd:n.depthFunc(n.ALWAYS);break;case hd:n.depthFunc(n.LESS);break;case vs:n.depthFunc(n.LEQUAL);break;case pd:n.depthFunc(n.EQUAL);break;case md:n.depthFunc(n.GEQUAL);break;case gd:n.depthFunc(n.GREATER);break;case _d:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Te}},setLocked:function(Te){F=Te},setClear:function(Te){Ce!==Te&&(Ee&&(Te=1-Te),n.clearDepth(Te),Ce=Te)},reset:function(){F=!1,ie=null,ue=null,Ce=null,Ee=!1}}}function i(){let F=!1,Ee=null,ie=null,ue=null,Ce=null,Te=null,We=null,At=null,qt=null;return{setTest:function(ct){F||(ct?N(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(ct){Ee!==ct&&!F&&(n.stencilMask(ct),Ee=ct)},setFunc:function(ct,er,Or){(ie!==ct||ue!==er||Ce!==Or)&&(n.stencilFunc(ct,er,Or),ie=ct,ue=er,Ce=Or)},setOp:function(ct,er,Or){(Te!==ct||We!==er||At!==Or)&&(n.stencilOp(ct,er,Or),Te=ct,We=er,At=Or)},setLocked:function(ct){F=ct},setClear:function(ct){qt!==ct&&(n.clearStencil(ct),qt=ct)},reset:function(){F=!1,Ee=null,ie=null,ue=null,Ce=null,Te=null,We=null,At=null,qt=null}}}const o=new t,s=new r,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],_=null,m=!1,g=null,p=null,x=null,v=null,b=null,T=null,R=null,A=new Je(0,0,0),P=0,y=!1,M=null,k=null,O=null,U=null,Y=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=W>=2);let he=null,pe={};const _e=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),Ue=new ht().fromArray(_e),Q=new ht().fromArray(Me);function fe(F,Ee,ie,ue){const Ce=new Uint8Array(4),Te=n.createTexture();n.bindTexture(F,Te),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<ie;We++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Ee+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return Te}const ve={};ve[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),N(n.DEPTH_TEST),s.setFunc(vs),K(!1),q(Ip),N(n.CULL_FACE),E(Ri);function N(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function se(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function oe(F,Ee){return d[F]!==Ee?(n.bindFramebuffer(F,Ee),d[F]=Ee,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ee),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function de(F,Ee){let ie=h,ue=!1;if(F){ie=f.get(Ee),ie===void 0&&(ie=[],f.set(Ee,ie));const Ce=F.textures;if(ie.length!==Ce.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,We=Ce.length;Te<We;Te++)ie[Te]=n.COLOR_ATTACHMENT0+Te;ie.length=Ce.length,ue=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ie)}function Pe(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const D={[oo]:n.FUNC_ADD,[_S]:n.FUNC_SUBTRACT,[bS]:n.FUNC_REVERSE_SUBTRACT};D[vS]=n.MIN,D[yS]=n.MAX;const L={[xS]:n.ZERO,[SS]:n.ONE,[MS]:n.SRC_COLOR,[cd]:n.SRC_ALPHA,[RS]:n.SRC_ALPHA_SATURATE,[CS]:n.DST_COLOR,[wS]:n.DST_ALPHA,[ES]:n.ONE_MINUS_SRC_COLOR,[ud]:n.ONE_MINUS_SRC_ALPHA,[AS]:n.ONE_MINUS_DST_COLOR,[TS]:n.ONE_MINUS_DST_ALPHA,[PS]:n.CONSTANT_COLOR,[DS]:n.ONE_MINUS_CONSTANT_COLOR,[kS]:n.CONSTANT_ALPHA,[LS]:n.ONE_MINUS_CONSTANT_ALPHA};function E(F,Ee,ie,ue,Ce,Te,We,At,qt,ct){if(F===Ri){m===!0&&(se(n.BLEND),m=!1);return}if(m===!1&&(N(n.BLEND),m=!0),F!==gS){if(F!==g||ct!==y){if((p!==oo||b!==oo)&&(n.blendEquation(n.FUNC_ADD),p=oo,b=oo),ct)switch(F){case us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Op:n.blendFunc(n.ONE,n.ONE);break;case Up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Np:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Op:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Np:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,v=null,T=null,R=null,A.set(0,0,0),P=0,g=F,y=ct}return}Ce=Ce||Ee,Te=Te||ie,We=We||ue,(Ee!==p||Ce!==b)&&(n.blendEquationSeparate(D[Ee],D[Ce]),p=Ee,b=Ce),(ie!==x||ue!==v||Te!==T||We!==R)&&(n.blendFuncSeparate(L[ie],L[ue],L[Te],L[We]),x=ie,v=ue,T=Te,R=We),(At.equals(A)===!1||qt!==P)&&(n.blendColor(At.r,At.g,At.b,qt),A.copy(At),P=qt),g=F,y=!1}function re(F,Ee){F.side===Mr?se(n.CULL_FACE):N(n.CULL_FACE);let ie=F.side===mn;Ee&&(ie=!ie),K(ie),F.blending===us&&F.transparent===!1?E(Ri):E(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),o.setMask(F.colorWrite);const ue=F.stencilWrite;a.setTest(ue),ue&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function q(F){F!==hS?(N(n.CULL_FACE),F!==k&&(F===Ip?n.cullFace(n.BACK):F===pS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),k=F}function ne(F){F!==O&&(V&&n.lineWidth(F),O=F)}function ce(F,Ee,ie){F?(N(n.POLYGON_OFFSET_FILL),(U!==Ee||Y!==ie)&&(n.polygonOffset(Ee,ie),U=Ee,Y=ie)):se(n.POLYGON_OFFSET_FILL)}function te(F){F?N(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function w(F){F===void 0&&(F=n.TEXTURE0+J-1),he!==F&&(n.activeTexture(F),he=F)}function S(F,Ee,ie){ie===void 0&&(he===null?ie=n.TEXTURE0+J-1:ie=he);let ue=pe[ie];ue===void 0&&(ue={type:void 0,texture:void 0},pe[ie]=ue),(ue.type!==F||ue.texture!==Ee)&&(he!==ie&&(n.activeTexture(ie),he=ie),n.bindTexture(F,Ee||ve[F]),ue.type=F,ue.texture=Ee)}function I(){const F=pe[he];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){Ue.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ue.copy(F))}function ye(F){Q.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Q.copy(F))}function Be(F,Ee){let ie=c.get(Ee);ie===void 0&&(ie=new WeakMap,c.set(Ee,ie));let ue=ie.get(F);ue===void 0&&(ue=n.getUniformBlockIndex(Ee,F.name),ie.set(F,ue))}function Ge(F,Ee){const ue=c.get(Ee).get(F);l.get(Ee)!==ue&&(n.uniformBlockBinding(Ee,ue,F.__bindingPointIndex),l.set(Ee,ue))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,pe={},d={},f=new WeakMap,h=[],_=null,m=!1,g=null,p=null,x=null,v=null,b=null,T=null,R=null,A=new Je(0,0,0),P=0,y=!1,M=null,k=null,O=null,U=null,Y=null,Ue.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:N,disable:se,bindFramebuffer:oe,drawBuffers:de,useProgram:Pe,setBlending:E,setMaterial:re,setFlipSided:K,setCullFace:q,setLineWidth:ne,setPolygonOffset:ce,setScissorTest:te,activeTexture:w,bindTexture:S,unbindTexture:I,compressedTexImage2D:j,compressedTexImage3D:B,texImage2D:Se,texImage3D:De,updateUBOMapping:Be,uniformBlockBinding:Ge,texStorage2D:Le,texStorage3D:me,texSubImage2D:G,texSubImage3D:ae,compressedTexSubImage2D:le,compressedTexSubImage3D:be,scissor:Oe,viewport:ye,reset:gt}}function kA(n,e,t,r,i,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return h?new OffscreenCanvas(w,S):Pa("canvas")}function m(w,S,I){let j=1;const B=te(w);if((B.width>I||B.height>I)&&(j=I/Math.max(B.width,B.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const G=Math.floor(j*B.width),ae=Math.floor(j*B.height);d===void 0&&(d=_(G,ae));const le=S?_(G,ae):d;return le.width=G,le.height=ae,le.getContext("2d").drawImage(w,0,0,G,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+G+"x"+ae+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function x(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(w,S,I,j,B=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=S;if(S===n.RED&&(I===n.FLOAT&&(G=n.R32F),I===n.HALF_FLOAT&&(G=n.R16F),I===n.UNSIGNED_BYTE&&(G=n.R8)),S===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.R8UI),I===n.UNSIGNED_SHORT&&(G=n.R16UI),I===n.UNSIGNED_INT&&(G=n.R32UI),I===n.BYTE&&(G=n.R8I),I===n.SHORT&&(G=n.R16I),I===n.INT&&(G=n.R32I)),S===n.RG&&(I===n.FLOAT&&(G=n.RG32F),I===n.HALF_FLOAT&&(G=n.RG16F),I===n.UNSIGNED_BYTE&&(G=n.RG8)),S===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RG8UI),I===n.UNSIGNED_SHORT&&(G=n.RG16UI),I===n.UNSIGNED_INT&&(G=n.RG32UI),I===n.BYTE&&(G=n.RG8I),I===n.SHORT&&(G=n.RG16I),I===n.INT&&(G=n.RG32I)),S===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RGB8UI),I===n.UNSIGNED_SHORT&&(G=n.RGB16UI),I===n.UNSIGNED_INT&&(G=n.RGB32UI),I===n.BYTE&&(G=n.RGB8I),I===n.SHORT&&(G=n.RGB16I),I===n.INT&&(G=n.RGB32I)),S===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),I===n.UNSIGNED_INT&&(G=n.RGBA32UI),I===n.BYTE&&(G=n.RGBA8I),I===n.SHORT&&(G=n.RGBA16I),I===n.INT&&(G=n.RGBA32I)),S===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),S===n.RGBA){const ae=B?rc:rt.getTransfer(j);I===n.FLOAT&&(G=n.RGBA32F),I===n.HALF_FLOAT&&(G=n.RGBA16F),I===n.UNSIGNED_BYTE&&(G=ae===ut?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function b(w,S){let I;return w?S===null||S===bo||S===Ss?I=n.DEPTH24_STENCIL8:S===Zr?I=n.DEPTH32F_STENCIL8:S===Aa&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===bo||S===Ss?I=n.DEPTH_COMPONENT24:S===Zr?I=n.DEPTH_COMPONENT32F:S===Aa&&(I=n.DEPTH_COMPONENT16),I}function T(w,S){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==hr&&w.minFilter!==wr?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){const S=w.target;S.removeEventListener("dispose",R),P(S),S.isVideoTexture&&u.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),M(S)}function P(w){const S=r.get(w);if(S.__webglInit===void 0)return;const I=w.source,j=f.get(I);if(j){const B=j[S.__cacheKey];B.usedTimes--,B.usedTimes===0&&y(w),Object.keys(j).length===0&&f.delete(I)}r.remove(w)}function y(w){const S=r.get(w);n.deleteTexture(S.__webglTexture);const I=w.source,j=f.get(I);delete j[S.__cacheKey],s.memory.textures--}function M(w){const S=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let B=0;B<S.__webglFramebuffer[j].length;B++)n.deleteFramebuffer(S.__webglFramebuffer[j][B]);else n.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)n.deleteFramebuffer(S.__webglFramebuffer[j]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=w.textures;for(let j=0,B=I.length;j<B;j++){const G=r.get(I[j]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),s.memory.textures--),r.remove(I[j])}r.remove(w)}let k=0;function O(){k=0}function U(){const w=k;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),k+=1,w}function Y(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function J(w,S){const I=r.get(w);if(w.isVideoTexture&&ne(w),w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(I,w,S);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+S)}function V(w,S){const I=r.get(w);if(w.version>0&&I.__version!==w.version){Q(I,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+S)}function W(w,S){const I=r.get(w);if(w.version>0&&I.__version!==w.version){Q(I,w,S);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+S)}function z(w,S){const I=r.get(w);if(w.version>0&&I.__version!==w.version){fe(I,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+S)}const he={[Ca]:n.REPEAT,[ao]:n.CLAMP_TO_EDGE,[vd]:n.MIRRORED_REPEAT},pe={[hr]:n.NEAREST,[GS]:n.NEAREST_MIPMAP_NEAREST,[ul]:n.NEAREST_MIPMAP_LINEAR,[wr]:n.LINEAR,[iu]:n.LINEAR_MIPMAP_NEAREST,[lo]:n.LINEAR_MIPMAP_LINEAR},_e={[jS]:n.NEVER,[QS]:n.ALWAYS,[YS]:n.LESS,[k_]:n.LEQUAL,[qS]:n.EQUAL,[JS]:n.GEQUAL,[KS]:n.GREATER,[ZS]:n.NOTEQUAL};function Me(w,S){if(S.type===Zr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===wr||S.magFilter===iu||S.magFilter===ul||S.magFilter===lo||S.minFilter===wr||S.minFilter===iu||S.minFilter===ul||S.minFilter===lo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,he[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,he[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,he[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,pe[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hr||S.minFilter!==ul&&S.minFilter!==lo||S.type===Zr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function Ue(w,S){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",R));const j=S.source;let B=f.get(j);B===void 0&&(B={},f.set(j,B));const G=Y(S);if(G!==w.__cacheKey){B[G]===void 0&&(B[G]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,I=!0),B[G].usedTimes++;const ae=B[w.__cacheKey];ae!==void 0&&(B[w.__cacheKey].usedTimes--,ae.usedTimes===0&&y(S)),w.__cacheKey=G,w.__webglTexture=B[G].texture}return I}function Q(w,S,I){let j=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=n.TEXTURE_3D);const B=Ue(w,S),G=S.source;t.bindTexture(j,w.__webglTexture,n.TEXTURE0+I);const ae=r.get(G);if(G.version!==ae.__version||B===!0){t.activeTexture(n.TEXTURE0+I);const le=rt.getPrimaries(rt.workingColorSpace),be=S.colorSpace===xi?null:rt.getPrimaries(S.colorSpace),Le=S.colorSpace===xi||le===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let me=m(S.image,!1,i.maxTextureSize);me=ce(S,me);const Se=o.convert(S.format,S.colorSpace),De=o.convert(S.type);let Oe=v(S.internalFormat,Se,De,S.colorSpace,S.isVideoTexture);Me(j,S);let ye;const Be=S.mipmaps,Ge=S.isVideoTexture!==!0,gt=ae.__version===void 0||B===!0,F=G.dataReady,Ee=T(S,me);if(S.isDepthTexture)Oe=b(S.format===Ms,S.type),gt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Oe,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Oe,me.width,me.height,0,Se,De,null));else if(S.isDataTexture)if(Be.length>0){Ge&&gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Oe,Be[0].width,Be[0].height);for(let ie=0,ue=Be.length;ie<ue;ie++)ye=Be[ie],Ge?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,Se,De,ye.data):t.texImage2D(n.TEXTURE_2D,ie,Oe,ye.width,ye.height,0,Se,De,ye.data);S.generateMipmaps=!1}else Ge?(gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Oe,me.width,me.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,Se,De,me.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,me.width,me.height,0,Se,De,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Oe,Be[0].width,Be[0].height,me.depth);for(let ie=0,ue=Be.length;ie<ue;ie++)if(ye=Be[ie],S.format!==ur)if(Se!==null)if(Ge){if(F)if(S.layerUpdates.size>0){const Ce=pm(ye.width,ye.height,S.format,S.type);for(const Te of S.layerUpdates){const We=ye.data.subarray(Te*Ce/ye.data.BYTES_PER_ELEMENT,(Te+1)*Ce/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Te,ye.width,ye.height,1,Se,We)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,me.depth,Se,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Oe,ye.width,ye.height,me.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,me.depth,Se,De,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Oe,ye.width,ye.height,me.depth,0,Se,De,ye.data)}else{Ge&&gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Oe,Be[0].width,Be[0].height);for(let ie=0,ue=Be.length;ie<ue;ie++)ye=Be[ie],S.format!==ur?Se!==null?Ge?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Oe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,Se,De,ye.data):t.texImage2D(n.TEXTURE_2D,ie,Oe,ye.width,ye.height,0,Se,De,ye.data)}else if(S.isDataArrayTexture)if(Ge){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Oe,me.width,me.height,me.depth),F)if(S.layerUpdates.size>0){const ie=pm(me.width,me.height,S.format,S.type);for(const ue of S.layerUpdates){const Ce=me.data.subarray(ue*ie/me.data.BYTES_PER_ELEMENT,(ue+1)*ie/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,me.width,me.height,1,Se,De,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Se,De,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,me.width,me.height,me.depth,0,Se,De,me.data);else if(S.isData3DTexture)Ge?(gt&&t.texStorage3D(n.TEXTURE_3D,Ee,Oe,me.width,me.height,me.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Se,De,me.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,me.width,me.height,me.depth,0,Se,De,me.data);else if(S.isFramebufferTexture){if(gt)if(Ge)t.texStorage2D(n.TEXTURE_2D,Ee,Oe,me.width,me.height);else{let ie=me.width,ue=me.height;for(let Ce=0;Ce<Ee;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Oe,ie,ue,0,Se,De,null),ie>>=1,ue>>=1}}else if(Be.length>0){if(Ge&&gt){const ie=te(Be[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Oe,ie.width,ie.height)}for(let ie=0,ue=Be.length;ie<ue;ie++)ye=Be[ie],Ge?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Se,De,ye):t.texImage2D(n.TEXTURE_2D,ie,Oe,Se,De,ye);S.generateMipmaps=!1}else if(Ge){if(gt){const ie=te(me);t.texStorage2D(n.TEXTURE_2D,Ee,Oe,ie.width,ie.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,De,me)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Se,De,me);g(S)&&p(j),ae.__version=G.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function fe(w,S,I){if(S.image.length!==6)return;const j=Ue(w,S),B=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+I);const G=r.get(B);if(B.version!==G.__version||j===!0){t.activeTexture(n.TEXTURE0+I);const ae=rt.getPrimaries(rt.workingColorSpace),le=S.colorSpace===xi?null:rt.getPrimaries(S.colorSpace),be=S.colorSpace===xi||ae===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Le&&!me?Se[ue]=m(S.image[ue],!0,i.maxCubemapSize):Se[ue]=me?S.image[ue].image:S.image[ue],Se[ue]=ce(S,Se[ue]);const De=Se[0],Oe=o.convert(S.format,S.colorSpace),ye=o.convert(S.type),Be=v(S.internalFormat,Oe,ye,S.colorSpace),Ge=S.isVideoTexture!==!0,gt=G.__version===void 0||j===!0,F=B.dataReady;let Ee=T(S,De);Me(n.TEXTURE_CUBE_MAP,S);let ie;if(Le){Ge&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Be,De.width,De.height);for(let ue=0;ue<6;ue++){ie=Se[ue].mipmaps;for(let Ce=0;Ce<ie.length;Ce++){const Te=ie[Ce];S.format!==ur?Oe!==null?Ge?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce,0,0,Te.width,Te.height,Oe,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce,0,0,Te.width,Te.height,Oe,ye,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce,Be,Te.width,Te.height,0,Oe,ye,Te.data)}}}else{if(ie=S.mipmaps,Ge&&gt){ie.length>0&&Ee++;const ue=te(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Be,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(me){Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Oe,ye,Se[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Be,Se[ue].width,Se[ue].height,0,Oe,ye,Se[ue].data);for(let Ce=0;Ce<ie.length;Ce++){const We=ie[Ce].image[ue].image;Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce+1,0,0,We.width,We.height,Oe,ye,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce+1,Be,We.width,We.height,0,Oe,ye,We.data)}}else{Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,ye,Se[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Be,Oe,ye,Se[ue]);for(let Ce=0;Ce<ie.length;Ce++){const Te=ie[Ce];Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce+1,0,0,Oe,ye,Te.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce+1,Be,Oe,ye,Te.image[ue])}}}g(S)&&p(n.TEXTURE_CUBE_MAP),G.__version=B.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ve(w,S,I,j,B,G){const ae=o.convert(I.format,I.colorSpace),le=o.convert(I.type),be=v(I.internalFormat,ae,le,I.colorSpace),Le=r.get(S),me=r.get(I);if(me.__renderTarget=S,!Le.__hasExternalTextures){const Se=Math.max(1,S.width>>G),De=Math.max(1,S.height>>G);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?t.texImage3D(B,G,be,Se,De,S.depth,0,ae,le,null):t.texImage2D(B,G,be,Se,De,0,ae,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),q(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,B,me.__webglTexture,0,K(S)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,B,me.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(w,S,I){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const j=S.depthTexture,B=j&&j.isDepthTexture?j.type:null,G=b(S.stencilBuffer,B),ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=K(S);q(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,G,S.width,S.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,G,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,G,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,w)}else{const j=S.textures;for(let B=0;B<j.length;B++){const G=j[B],ae=o.convert(G.format,G.colorSpace),le=o.convert(G.type),be=v(G.internalFormat,ae,le,G.colorSpace),Le=K(S);I&&q(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,be,S.width,S.height):q(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,be,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,be,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=r.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const B=j.__webglTexture,G=K(S);if(S.depthTexture.format===ds)q(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0);else if(S.depthTexture.format===Ms)q(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function oe(w){const S=r.get(w),I=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const B=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",B)};j.addEventListener("dispose",B),S.__depthDisposeCallback=B}S.__boundDepthTexture=j}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");se(S.__webglFramebuffer,w)}else if(I){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=n.createRenderbuffer(),N(S.__webglDepthbuffer[j],w,!1);else{const B=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),N(S.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,B)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(w,S,I){const j=r.get(w);S!==void 0&&ve(j.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&oe(w)}function Pe(w){const S=w.texture,I=r.get(w),j=r.get(S);w.addEventListener("dispose",A);const B=w.textures,G=w.isWebGLCubeRenderTarget===!0,ae=B.length>1;if(ae||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=S.version,s.memory.textures++),G){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let be=0;be<S.mipmaps.length;be++)I.__webglFramebuffer[le][be]=n.createFramebuffer()}else I.__webglFramebuffer[le]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)I.__webglFramebuffer[le]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ae)for(let le=0,be=B.length;le<be;le++){const Le=r.get(B[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),s.memory.textures++)}if(w.samples>0&&q(w)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let le=0;le<B.length;le++){const be=B[le];I.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[le]);const Le=o.convert(be.format,be.colorSpace),me=o.convert(be.type),Se=v(be.internalFormat,Le,me,be.colorSpace,w.isXRRenderTarget===!0),De=K(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Se,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,I.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),N(I.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Me(n.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)ve(I.__webglFramebuffer[le][be],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be);else ve(I.__webglFramebuffer[le],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let le=0,be=B.length;le<be;le++){const Le=B[le],me=r.get(Le);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),Me(n.TEXTURE_2D,Le),ve(I.__webglFramebuffer,w,Le,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),g(Le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),Me(le,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)ve(I.__webglFramebuffer[be],w,S,n.COLOR_ATTACHMENT0,le,be);else ve(I.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,le,0);g(S)&&p(le),t.unbindTexture()}w.depthBuffer&&oe(w)}function D(w){const S=w.textures;for(let I=0,j=S.length;I<j;I++){const B=S[I];if(g(B)){const G=x(w),ae=r.get(B).__webglTexture;t.bindTexture(G,ae),p(G),t.unbindTexture()}}}const L=[],E=[];function re(w){if(w.samples>0){if(q(w)===!1){const S=w.textures,I=w.width,j=w.height;let B=n.COLOR_BUFFER_BIT;const G=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=r.get(w),le=S.length>1;if(le)for(let be=0;be<S.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let be=0;be<S.length;be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(B|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[be]);const Le=r.get(S[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,I,j,0,0,I,j,B,n.NEAREST),l===!0&&(L.length=0,E.length=0,L.push(n.COLOR_ATTACHMENT0+be),w.depthBuffer&&w.resolveDepthBuffer===!1&&(L.push(G),E.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<S.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ae.__webglColorRenderbuffer[be]);const Le=r.get(S[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function K(w){return Math.min(i.maxSamples,w.samples)}function q(w){const S=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ne(w){const S=s.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function ce(w,S){const I=w.colorSpace,j=w.format,B=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!==Es&&I!==xi&&(rt.getTransfer(I)===ut?(j!==ur||B!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function te(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=de,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=q}function LA(n,e){function t(r,i=xi){let o;const s=rt.getTransfer(i);if(r===ti)return n.UNSIGNED_BYTE;if(r===Gf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===M_)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===x_)return n.BYTE;if(r===S_)return n.SHORT;if(r===Aa)return n.UNSIGNED_SHORT;if(r===Vf)return n.INT;if(r===bo)return n.UNSIGNED_INT;if(r===Zr)return n.FLOAT;if(r===Za)return n.HALF_FLOAT;if(r===E_)return n.ALPHA;if(r===w_)return n.RGB;if(r===ur)return n.RGBA;if(r===T_)return n.LUMINANCE;if(r===C_)return n.LUMINANCE_ALPHA;if(r===ds)return n.DEPTH_COMPONENT;if(r===Ms)return n.DEPTH_STENCIL;if(r===A_)return n.RED;if(r===$f)return n.RED_INTEGER;if(r===R_)return n.RG;if(r===Xf)return n.RG_INTEGER;if(r===jf)return n.RGBA_INTEGER;if(r===Fl||r===zl||r===Hl||r===Vl)if(s===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Fl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Fl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yd||r===xd||r===Sd||r===Md)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===yd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Md)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ed||r===wd||r===Td)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ed||r===wd)return s===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Td)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cd||r===Ad||r===Rd||r===Pd||r===Dd||r===kd||r===Ld||r===Id||r===Od||r===Ud||r===Nd||r===Bd||r===Fd||r===zd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Cd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ad)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ld)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Id)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Od)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ud)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gl||r===Hd||r===Vd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Gl)return s===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===P_||r===Gd||r===Wd||r===$d)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Gl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Gd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$d)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ss?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const IA={type:"move"};class Lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,r),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Jo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class NA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const i=new gn,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Oi({vertexShader:OA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new Pc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BA extends wo{constructor(e,t){super();const r=this;let i=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const m=new NA,g=t.getContextAttributes();let p=null,x=null;const v=[],b=[],T=new Ve;let R=null;const A=new In;A.viewport=new ht;const P=new In;P.viewport=new ht;const y=[A,P],M=new nE;let k=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=v[Q];return fe===void 0&&(fe=new Lu,v[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=v[Q];return fe===void 0&&(fe=new Lu,v[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=v[Q];return fe===void 0&&(fe=new Lu,v[Q]=fe),fe.getHandSpace()};function U(Q){const fe=b.indexOf(Q.inputSource);if(fe===-1)return;const ve=v[fe];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,c||s),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",J);for(let Q=0;Q<v.length;Q++){const fe=b[Q];fe!==null&&(b[Q]=null,v[Q].disconnect(fe))}k=null,O=null,m.reset(),e.setRenderTarget(p),h=null,f=null,d=null,i=null,x=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ve=null,N=null,se=null;g.depth&&(se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=g.stencil?Ms:ds,N=g.stencil?Ss:bo);const oe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new vo(f.textureWidth,f.textureHeight,{format:ur,type:ti,depthTexture:new V_(f.textureWidth,f.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new vo(h.framebufferWidth,h.framebufferHeight,{format:ur,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),Ue.setContext(i),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Q){for(let fe=0;fe<Q.removed.length;fe++){const ve=Q.removed[fe],N=b.indexOf(ve);N>=0&&(b[N]=null,v[N].disconnect(ve))}for(let fe=0;fe<Q.added.length;fe++){const ve=Q.added[fe];let N=b.indexOf(ve);if(N===-1){for(let oe=0;oe<v.length;oe++)if(oe>=b.length){b.push(ve),N=oe;break}else if(b[oe]===null){b[oe]=ve,N=oe;break}if(N===-1)break}const se=v[N];se&&se.connect(ve)}}const V=new X,W=new X;function z(Q,fe,ve){V.setFromMatrixPosition(fe.matrixWorld),W.setFromMatrixPosition(ve.matrixWorld);const N=V.distanceTo(W),se=fe.projectionMatrix.elements,oe=ve.projectionMatrix.elements,de=se[14]/(se[10]-1),Pe=se[14]/(se[10]+1),D=(se[9]+1)/se[5],L=(se[9]-1)/se[5],E=(se[8]-1)/se[0],re=(oe[8]+1)/oe[0],K=de*E,q=de*re,ne=N/(-E+re),ce=ne*-E;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ce),Q.translateZ(ne),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),se[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const te=de+ne,w=Pe+ne,S=K-ce,I=q+(N-ce),j=D*Pe/w*te,B=L*Pe/w*te;Q.projectionMatrix.makePerspective(S,I,j,B,te,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let fe=Q.near,ve=Q.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),M.near=P.near=A.near=fe,M.far=P.far=A.far=ve,(k!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),k=M.near,O=M.far),A.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const N=Q.parent,se=M.cameras;he(M,N);for(let oe=0;oe<se.length;oe++)he(se[oe],N);se.length===2?z(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),pe(Q,M,N)};function pe(Q,fe,ve){ve===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ra*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(M)};let _e=null;function Me(Q,fe){if(u=fe.getViewerPose(c||s),_=fe,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let N=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,N=!0);for(let oe=0;oe<ve.length;oe++){const de=ve[oe];let Pe=null;if(h!==null)Pe=h.getViewport(de);else{const L=d.getViewSubImage(f,de);Pe=L.viewport,oe===0&&(e.setRenderTargetTextures(x,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let D=y[oe];D===void 0&&(D=new In,D.layers.enable(oe),D.viewport=new ht,y[oe]=D),D.matrix.fromArray(de.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(de.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),oe===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),N===!0&&M.cameras.push(D)}const se=i.enabledFeatures;if(se&&se.includes("depth-sensing")){const oe=d.getDepthInformation(ve[0]);oe&&oe.isValid&&oe.texture&&m.init(e,oe,i.renderState)}}for(let ve=0;ve<v.length;ve++){const N=b[ve],se=v[ve];N!==null&&se!==void 0&&se.update(N,fe,c||s)}_e&&_e(Q,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Ue=new W_;Ue.setAnimationLoop(Me),this.setAnimationLoop=function(Q){_e=Q},this.dispose=function(){}}}const Ji=new kr,FA=new Et;function zA(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function r(g,p){p.color.getRGB(g.fogColor.value,F_(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),d(g,p)):p.isMeshPhongMaterial?(o(g,p),u(g,p)):p.isMeshStandardMaterial?(o(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,b)):p.isMeshMatcapMaterial?(o(g,p),_(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),m(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,b=x.envMapRotation;v&&(g.envMap.value=v,Ji.copy(b),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),g.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(Ji)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function HA(n,e,t,r){let i={},o={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const b=v.program;r.uniformBlockBinding(x,b)}function c(x,v){let b=i[x.id];b===void 0&&(_(x),b=u(x),i[x.id]=b,x.addEventListener("dispose",g));const T=v.program;r.updateUBOMapping(x,T);const R=e.render.frame;o[x.id]!==R&&(f(x),o[x.id]=R)}function u(x){const v=d();x.__bindingPointIndex=v;const b=n.createBuffer(),T=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function d(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],b=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,A=b.length;R<A;R++){const P=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,M=P.length;y<M;y++){const k=P[y];if(h(k,R,y,T)===!0){const O=k.__offset,U=Array.isArray(k.value)?k.value:[k.value];let Y=0;for(let J=0;J<U.length;J++){const V=U[J],W=m(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,O+Y,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,Y),Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,v,b,T){const R=x.value,A=v+"_"+b;if(T[A]===void 0)return typeof R=="number"||typeof R=="boolean"?T[A]=R:T[A]=R.clone(),!0;{const P=T[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return T[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(x){const v=x.uniforms;let b=0;const T=16;for(let A=0,P=v.length;A<P;A++){const y=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,k=y.length;M<k;M++){const O=y[M],U=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,J=U.length;Y<J;Y++){const V=U[Y],W=m(V),z=b%T,he=z%W.boundary,pe=z+he;b+=he,pe!==0&&T-pe<W.storage&&(b+=T-pe),O.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=W.storage}}}const R=b%T;return R>0&&(b+=T-R),x.__size=b,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const b=s.indexOf(v.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(i[v.id]),delete i[v.id],delete o[v.id]}function p(){for(const x in i)n.deleteBuffer(i[x]);s=[],i={},o={}}return{bind:l,update:c,dispose:p}}class VA{constructor(e={}){const{canvas:t=gM(),context:r=null,depth:i=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=r.getContextAttributes().alpha}else h=s;const _=new Uint32Array(4),m=new Int32Array(4);let g=null,p=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=Pi,this.toneMappingExposure=1;const b=this;let T=!1,R=0,A=0,P=null,y=-1,M=null;const k=new ht,O=new ht;let U=null;const Y=new Je(0);let J=0,V=t.width,W=t.height,z=1,he=null,pe=null;const _e=new ht(0,0,V,W),Me=new ht(0,0,V,W);let Ue=!1;const Q=new Qf;let fe=!1,ve=!1;this.transmissionResolutionScale=1;const N=new Et,se=new Et,oe=new X,de=new ht,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function L(){return P===null?z:1}let E=r;function re(C,H){return t.getContext(C,H)}try{const C={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hf}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Te,!1),E===null){const H="webgl2";if(E=re(H,C),E===null)throw re(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let K,q,ne,ce,te,w,S,I,j,B,G,ae,le,be,Le,me,Se,De,Oe,ye,Be,Ge,gt,F;function Ee(){K=new ZT(E),K.init(),Ge=new LA(E,K),q=new $T(E,K,e,Ge),ne=new DA(E,K),q.reverseDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),ce=new eC(E),te=new bA,w=new kA(E,K,ne,te,q,Ge,ce),S=new jT(b),I=new KT(b),j=new aE(E),gt=new GT(E,j),B=new JT(E,j,ce,gt),G=new nC(E,B,j,ce),Oe=new tC(E,q,w),me=new XT(te),ae=new _A(b,S,I,K,q,gt,me),le=new zA(b,te),be=new yA,Le=new TA(K),De=new VT(b,S,I,ne,G,h,l),Se=new RA(b,G,q),F=new HA(E,ce,q,ne),ye=new WT(E,K,ce),Be=new QT(E,K,ce),ce.programs=ae.programs,b.capabilities=q,b.extensions=K,b.properties=te,b.renderLists=be,b.shadowMap=Se,b.state=ne,b.info=ce}Ee();const ie=new BA(b,E);this.xr=ie,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const C=K.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=K.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(V,W,!1))},this.getSize=function(C){return C.set(V,W)},this.setSize=function(C,H,Z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,W=H,t.width=Math.floor(C*z),t.height=Math.floor(H*z),Z===!0&&(t.style.width=C+"px",t.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(V*z,W*z).floor()},this.setDrawingBufferSize=function(C,H,Z){V=C,W=H,z=Z,t.width=Math.floor(C*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(_e)},this.setViewport=function(C,H,Z,ee){C.isVector4?_e.set(C.x,C.y,C.z,C.w):_e.set(C,H,Z,ee),ne.viewport(k.copy(_e).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,H,Z,ee){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,H,Z,ee),ne.scissor(O.copy(Me).multiplyScalar(z).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(C){ne.setScissorTest(Ue=C)},this.setOpaqueSort=function(C){he=C},this.setTransparentSort=function(C){pe=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(C=!0,H=!0,Z=!0){let ee=0;if(C){let $=!1;if(P!==null){const ge=P.texture.format;$=ge===jf||ge===Xf||ge===$f}if($){const ge=P.texture.type,we=ge===ti||ge===bo||ge===Aa||ge===Ss||ge===Gf||ge===Wf,Ae=De.getClearColor(),Re=De.getClearAlpha(),Fe=Ae.r,He=Ae.g,ke=Ae.b;we?(_[0]=Fe,_[1]=He,_[2]=ke,_[3]=Re,E.clearBufferuiv(E.COLOR,0,_)):(m[0]=Fe,m[1]=He,m[2]=ke,m[3]=Re,E.clearBufferiv(E.COLOR,0,m))}else ee|=E.COLOR_BUFFER_BIT}H&&(ee|=E.DEPTH_BUFFER_BIT),Z&&(ee|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),De.dispose(),be.dispose(),Le.dispose(),te.dispose(),S.dispose(),I.dispose(),G.dispose(),gt.dispose(),F.dispose(),ae.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Th),ie.removeEventListener("sessionend",Ch),Hi.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=ce.autoReset,H=Se.enabled,Z=Se.autoUpdate,ee=Se.needsUpdate,$=Se.type;Ee(),ce.autoReset=C,Se.enabled=H,Se.autoUpdate=Z,Se.needsUpdate=ee,Se.type=$}function Te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function We(C){const H=C.target;H.removeEventListener("dispose",We),At(H)}function At(C){qt(C),te.remove(C)}function qt(C){const H=te.get(C).programs;H!==void 0&&(H.forEach(function(Z){ae.releaseProgram(Z)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,Z,ee,$,ge){H===null&&(H=Pe);const we=$.isMesh&&$.matrixWorld.determinant()<0,Ae=Tv(C,H,Z,ee,$);ne.setMaterial(ee,we);let Re=Z.index,Fe=1;if(ee.wireframe===!0){if(Re=B.getWireframeAttribute(Z),Re===void 0)return;Fe=2}const He=Z.drawRange,ke=Z.attributes.position;let Qe=He.start*Fe,it=(He.start+He.count)*Fe;ge!==null&&(Qe=Math.max(Qe,ge.start*Fe),it=Math.min(it,(ge.start+ge.count)*Fe)),Re!==null?(Qe=Math.max(Qe,0),it=Math.min(it,Re.count)):ke!=null&&(Qe=Math.max(Qe,0),it=Math.min(it,ke.count));const Lt=it-Qe;if(Lt<0||Lt===1/0)return;gt.setup($,ee,Ae,Z,Re);let Rt,nt=ye;if(Re!==null&&(Rt=j.get(Re),nt=Be,nt.setIndex(Rt)),$.isMesh)ee.wireframe===!0?(ne.setLineWidth(ee.wireframeLinewidth*L()),nt.setMode(E.LINES)):nt.setMode(E.TRIANGLES);else if($.isLine){let Ie=ee.linewidth;Ie===void 0&&(Ie=1),ne.setLineWidth(Ie*L()),$.isLineSegments?nt.setMode(E.LINES):$.isLineLoop?nt.setMode(E.LINE_LOOP):nt.setMode(E.LINE_STRIP)}else $.isPoints?nt.setMode(E.POINTS):$.isSprite&&nt.setMode(E.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)nt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ie=$._multiDrawStarts,jt=$._multiDrawCounts,ot=$._multiDrawCount,tr=Re?j.get(Re).bytesPerElement:1,Ao=te.get(ee).currentProgram.getUniforms();for(let An=0;An<ot;An++)Ao.setValue(E,"_gl_DrawID",An),nt.render(Ie[An]/tr,jt[An])}else if($.isInstancedMesh)nt.renderInstances(Qe,Lt,$.count);else if(Z.isInstancedBufferGeometry){const Ie=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,jt=Math.min(Z.instanceCount,Ie);nt.renderInstances(Qe,Lt,jt)}else nt.render(Qe,Lt)};function ct(C,H,Z){C.transparent===!0&&C.side===Mr&&C.forceSinglePass===!1?(C.side=mn,C.needsUpdate=!0,il(C,H,Z),C.side=Ii,C.needsUpdate=!0,il(C,H,Z),C.side=Mr):il(C,H,Z)}this.compile=function(C,H,Z=null){Z===null&&(Z=C),p=Le.get(Z),p.init(H),v.push(p),Z.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),C!==Z&&C.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const ee=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ge=$.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Ae=ge[we];ct(Ae,Z,$),ee.add(Ae)}else ct(ge,Z,$),ee.add(ge)}),v.pop(),p=null,ee},this.compileAsync=function(C,H,Z=null){const ee=this.compile(C,H,Z);return new Promise($=>{function ge(){if(ee.forEach(function(we){te.get(we).currentProgram.isReady()&&ee.delete(we)}),ee.size===0){$(C);return}setTimeout(ge,10)}K.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let er=null;function Or(C){er&&er(C)}function Th(){Hi.stop()}function Ch(){Hi.start()}const Hi=new W_;Hi.setAnimationLoop(Or),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(C){er=C,ie.setAnimationLoop(C),C===null?Hi.stop():Hi.start()},ie.addEventListener("sessionstart",Th),ie.addEventListener("sessionend",Ch),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(H),H=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,H,P),p=Le.get(C,v.length),p.init(H),v.push(p),se.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(se),ve=this.localClippingEnabled,fe=me.init(this.clippingPlanes,ve),g=be.get(C,x.length),g.init(),x.push(g),ie.enabled===!0&&ie.isPresenting===!0){const ge=b.xr.getDepthSensingMesh();ge!==null&&zc(ge,H,-1/0,b.sortObjects)}zc(C,H,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(he,pe),D=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,D&&De.addToRenderList(g,C),this.info.render.frame++,fe===!0&&me.beginShadows();const Z=p.state.shadowsArray;Se.render(Z,C,H),fe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=g.opaque,$=g.transmissive;if(p.setupLights(),H.isArrayCamera){const ge=H.cameras;if($.length>0)for(let we=0,Ae=ge.length;we<Ae;we++){const Re=ge[we];Rh(ee,$,C,Re)}D&&De.render(C);for(let we=0,Ae=ge.length;we<Ae;we++){const Re=ge[we];Ah(g,C,Re,Re.viewport)}}else $.length>0&&Rh(ee,$,C,H),D&&De.render(C),Ah(g,C,H);P!==null&&A===0&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(b,C,H),gt.resetDefaultState(),y=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],fe===!0&&me.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function zc(C,H,Z,ee){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){ee&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(se);const we=G.update(C),Ae=C.material;Ae.visible&&g.push(C,we,Ae,Z,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Q.intersectsObject(C))){const we=G.update(C),Ae=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),de.copy(we.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(se)),Array.isArray(Ae)){const Re=we.groups;for(let Fe=0,He=Re.length;Fe<He;Fe++){const ke=Re[Fe],Qe=Ae[ke.materialIndex];Qe&&Qe.visible&&g.push(C,we,Qe,Z,de.z,ke)}}else Ae.visible&&g.push(C,we,Ae,Z,de.z,null)}}const ge=C.children;for(let we=0,Ae=ge.length;we<Ae;we++)zc(ge[we],H,Z,ee)}function Ah(C,H,Z,ee){const $=C.opaque,ge=C.transmissive,we=C.transparent;p.setupLightsView(Z),fe===!0&&me.setGlobalState(b.clippingPlanes,Z),ee&&ne.viewport(k.copy(ee)),$.length>0&&rl($,H,Z),ge.length>0&&rl(ge,H,Z),we.length>0&&rl(we,H,Z),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Rh(C,H,Z,ee){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new vo(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Za:ti,minFilter:lo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ge=p.state.transmissionRenderTarget[ee.id],we=ee.viewport||k;ge.setSize(we.z*b.transmissionResolutionScale,we.w*b.transmissionResolutionScale);const Ae=b.getRenderTarget();b.setRenderTarget(ge),b.getClearColor(Y),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),D&&De.render(Z);const Re=b.toneMapping;b.toneMapping=Pi;const Fe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),fe===!0&&me.setGlobalState(b.clippingPlanes,ee),rl(C,Z,ee),w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge),K.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ke=0,Qe=H.length;ke<Qe;ke++){const it=H[ke],Lt=it.object,Rt=it.geometry,nt=it.material,Ie=it.group;if(nt.side===Mr&&Lt.layers.test(ee.layers)){const jt=nt.side;nt.side=mn,nt.needsUpdate=!0,Ph(Lt,Z,ee,Rt,nt,Ie),nt.side=jt,nt.needsUpdate=!0,He=!0}}He===!0&&(w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge))}b.setRenderTarget(Ae),b.setClearColor(Y,J),Fe!==void 0&&(ee.viewport=Fe),b.toneMapping=Re}function rl(C,H,Z){const ee=H.isScene===!0?H.overrideMaterial:null;for(let $=0,ge=C.length;$<ge;$++){const we=C[$],Ae=we.object,Re=we.geometry,Fe=ee===null?we.material:ee,He=we.group;Ae.layers.test(Z.layers)&&Ph(Ae,H,Z,Re,Fe,He)}}function Ph(C,H,Z,ee,$,ge){C.onBeforeRender(b,H,Z,ee,$,ge),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(b,H,Z,ee,C,ge),$.transparent===!0&&$.side===Mr&&$.forceSinglePass===!1?($.side=mn,$.needsUpdate=!0,b.renderBufferDirect(Z,H,ee,$,C,ge),$.side=Ii,$.needsUpdate=!0,b.renderBufferDirect(Z,H,ee,$,C,ge),$.side=Mr):b.renderBufferDirect(Z,H,ee,$,C,ge),C.onAfterRender(b,H,Z,ee,$,ge)}function il(C,H,Z){H.isScene!==!0&&(H=Pe);const ee=te.get(C),$=p.state.lights,ge=p.state.shadowsArray,we=$.state.version,Ae=ae.getParameters(C,$.state,ge,H,Z),Re=ae.getProgramCacheKey(Ae);let Fe=ee.programs;ee.environment=C.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(C.isMeshStandardMaterial?I:S).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Fe===void 0&&(C.addEventListener("dispose",We),Fe=new Map,ee.programs=Fe);let He=Fe.get(Re);if(He!==void 0){if(ee.currentProgram===He&&ee.lightsStateVersion===we)return kh(C,Ae),He}else Ae.uniforms=ae.getUniforms(C),C.onBeforeCompile(Ae,b),He=ae.acquireProgram(Ae,Re),Fe.set(Re,He),ee.uniforms=Ae.uniforms;const ke=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=me.uniform),kh(C,Ae),ee.needsLights=Av(C),ee.lightsStateVersion=we,ee.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.directionalShadowMap.value=$.state.directionalShadowMap,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotShadowMap.value=$.state.spotShadowMap,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMap.value=$.state.pointShadowMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=He,ee.uniformsList=null,He}function Dh(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=Wl.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function kh(C,H){const Z=te.get(C);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Tv(C,H,Z,ee,$){H.isScene!==!0&&(H=Pe),w.resetTextureUnits();const ge=H.fog,we=ee.isMeshStandardMaterial?H.environment:null,Ae=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Es,Re=(ee.isMeshStandardMaterial?I:S).get(ee.envMap||we),Fe=ee.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,He=!!Z.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ke=!!Z.morphAttributes.position,Qe=!!Z.morphAttributes.normal,it=!!Z.morphAttributes.color;let Lt=Pi;ee.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Lt=b.toneMapping);const Rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,nt=Rt!==void 0?Rt.length:0,Ie=te.get(ee),jt=p.state.lights;if(fe===!0&&(ve===!0||C!==M)){const on=C===M&&ee.id===y;me.setState(ee,C,on)}let ot=!1;ee.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==jt.state.version||Ie.outputColorSpace!==Ae||$.isBatchedMesh&&Ie.batching===!1||!$.isBatchedMesh&&Ie.batching===!0||$.isBatchedMesh&&Ie.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ie.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ie.instancing===!1||!$.isInstancedMesh&&Ie.instancing===!0||$.isSkinnedMesh&&Ie.skinning===!1||!$.isSkinnedMesh&&Ie.skinning===!0||$.isInstancedMesh&&Ie.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ie.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ie.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ie.instancingMorph===!1&&$.morphTexture!==null||Ie.envMap!==Re||ee.fog===!0&&Ie.fog!==ge||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==me.numPlanes||Ie.numIntersection!==me.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==He||Ie.morphTargets!==ke||Ie.morphNormals!==Qe||Ie.morphColors!==it||Ie.toneMapping!==Lt||Ie.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,Ie.__version=ee.version);let tr=Ie.currentProgram;ot===!0&&(tr=il(ee,H,$));let Ao=!1,An=!1,Os=!1;const St=tr.getUniforms(),Wn=Ie.uniforms;if(ne.useProgram(tr.program)&&(Ao=!0,An=!0,Os=!0),ee.id!==y&&(y=ee.id,An=!0),Ao||M!==C){ne.buffers.depth.getReversed()?(N.copy(C.projectionMatrix),bM(N),vM(N),St.setValue(E,"projectionMatrix",N)):St.setValue(E,"projectionMatrix",C.projectionMatrix),St.setValue(E,"viewMatrix",C.matrixWorldInverse);const _n=St.map.cameraPosition;_n!==void 0&&_n.setValue(E,oe.setFromMatrixPosition(C.matrixWorld)),q.logarithmicDepthBuffer&&St.setValue(E,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&St.setValue(E,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,An=!0,Os=!0)}if($.isSkinnedMesh){St.setOptional(E,$,"bindMatrix"),St.setOptional(E,$,"bindMatrixInverse");const on=$.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),St.setValue(E,"boneTexture",on.boneTexture,w))}$.isBatchedMesh&&(St.setOptional(E,$,"batchingTexture"),St.setValue(E,"batchingTexture",$._matricesTexture,w),St.setOptional(E,$,"batchingIdTexture"),St.setValue(E,"batchingIdTexture",$._indirectTexture,w),St.setOptional(E,$,"batchingColorTexture"),$._colorsTexture!==null&&St.setValue(E,"batchingColorTexture",$._colorsTexture,w));const $n=Z.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Oe.update($,Z,tr),(An||Ie.receiveShadow!==$.receiveShadow)&&(Ie.receiveShadow=$.receiveShadow,St.setValue(E,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Wn.envMap.value=Re,Wn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&H.environment!==null&&(Wn.envMapIntensity.value=H.environmentIntensity),An&&(St.setValue(E,"toneMappingExposure",b.toneMappingExposure),Ie.needsLights&&Cv(Wn,Os),ge&&ee.fog===!0&&le.refreshFogUniforms(Wn,ge),le.refreshMaterialUniforms(Wn,ee,z,W,p.state.transmissionRenderTarget[C.id]),Wl.upload(E,Dh(Ie),Wn,w)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Wl.upload(E,Dh(Ie),Wn,w),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&St.setValue(E,"center",$.center),St.setValue(E,"modelViewMatrix",$.modelViewMatrix),St.setValue(E,"normalMatrix",$.normalMatrix),St.setValue(E,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const on=ee.uniformsGroups;for(let _n=0,Hc=on.length;_n<Hc;_n++){const Vi=on[_n];F.update(Vi,tr),F.bind(Vi,tr)}}return tr}function Cv(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Av(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,H,Z){te.get(C.texture).__webglTexture=H,te.get(C.depthTexture).__webglTexture=Z;const ee=te.get(C);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Z===void 0,ee.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,H){const Z=te.get(C);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const Rv=E.createFramebuffer();this.setRenderTarget=function(C,H=0,Z=0){P=C,R=H,A=Z;let ee=!0,$=null,ge=!1,we=!1;if(C){const Re=te.get(C);if(Re.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(E.FRAMEBUFFER,null),ee=!1;else if(Re.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Re.__hasExternalTextures)w.rebindTextures(C,te.get(C.texture).__webglTexture,te.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ke=C.depthTexture;if(Re.__boundDepthTexture!==ke){if(ke!==null&&te.has(ke)&&(C.width!==ke.image.width||C.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const He=te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[H])?$=He[H][Z]:$=He[H],ge=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?$=te.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?$=He[Z]:$=He,k.copy(C.viewport),O.copy(C.scissor),U=C.scissorTest}else k.copy(_e).multiplyScalar(z).floor(),O.copy(Me).multiplyScalar(z).floor(),U=Ue;if(Z!==0&&($=Rv),ne.bindFramebuffer(E.FRAMEBUFFER,$)&&ee&&ne.drawBuffers(C,$),ne.viewport(k),ne.scissor(O),ne.setScissorTest(U),ge){const Re=te.get(C.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,Z)}else if(we){const Re=te.get(C.texture),Fe=H;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Re.__webglTexture,Z,Fe)}else if(C!==null&&Z!==0){const Re=te.get(C.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Re.__webglTexture,Z)}y=-1},this.readRenderTargetPixels=function(C,H,Z,ee,$,ge,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){ne.bindFramebuffer(E.FRAMEBUFFER,Ae);try{const Re=C.texture,Fe=Re.format,He=Re.type;if(!q.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-ee&&Z>=0&&Z<=C.height-$&&E.readPixels(H,Z,ee,$,Ge.convert(Fe),Ge.convert(He),ge)}finally{const Re=P!==null?te.get(P).__webglFramebuffer:null;ne.bindFramebuffer(E.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(C,H,Z,ee,$,ge,we){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){const Re=C.texture,Fe=Re.format,He=Re.type;if(!q.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=C.width-ee&&Z>=0&&Z<=C.height-$){ne.bindFramebuffer(E.FRAMEBUFFER,Ae);const ke=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ke),E.bufferData(E.PIXEL_PACK_BUFFER,ge.byteLength,E.STREAM_READ),E.readPixels(H,Z,ee,$,Ge.convert(Fe),Ge.convert(He),0);const Qe=P!==null?te.get(P).__webglFramebuffer:null;ne.bindFramebuffer(E.FRAMEBUFFER,Qe);const it=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await _M(E,it,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ke),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ge),E.deleteBuffer(ke),E.deleteSync(it),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,H=null,Z=0){C.isTexture!==!0&&(qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1]);const ee=Math.pow(2,-Z),$=Math.floor(C.image.width*ee),ge=Math.floor(C.image.height*ee),we=H!==null?H.x:0,Ae=H!==null?H.y:0;w.setTexture2D(C,0),E.copyTexSubImage2D(E.TEXTURE_2D,Z,0,0,we,Ae,$,ge),ne.unbindTexture()};const Pv=E.createFramebuffer(),Dv=E.createFramebuffer();this.copyTextureToTexture=function(C,H,Z=null,ee=null,$=0,ge=null){C.isTexture!==!0&&(qo("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,C=arguments[1],H=arguments[2],ge=arguments[3]||0,Z=null),ge===null&&($!==0?(qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=$,$=0):ge=0);let we,Ae,Re,Fe,He,ke,Qe,it,Lt;const Rt=C.isCompressedTexture?C.mipmaps[ge]:C.image;if(Z!==null)we=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Re=Z.isBox3?Z.max.z-Z.min.z:1,Fe=Z.min.x,He=Z.min.y,ke=Z.isBox3?Z.min.z:0;else{const $n=Math.pow(2,-$);we=Math.floor(Rt.width*$n),Ae=Math.floor(Rt.height*$n),C.isDataArrayTexture?Re=Rt.depth:C.isData3DTexture?Re=Math.floor(Rt.depth*$n):Re=1,Fe=0,He=0,ke=0}ee!==null?(Qe=ee.x,it=ee.y,Lt=ee.z):(Qe=0,it=0,Lt=0);const nt=Ge.convert(H.format),Ie=Ge.convert(H.type);let jt;H.isData3DTexture?(w.setTexture3D(H,0),jt=E.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(w.setTexture2DArray(H,0),jt=E.TEXTURE_2D_ARRAY):(w.setTexture2D(H,0),jt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,H.unpackAlignment);const ot=E.getParameter(E.UNPACK_ROW_LENGTH),tr=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ao=E.getParameter(E.UNPACK_SKIP_PIXELS),An=E.getParameter(E.UNPACK_SKIP_ROWS),Os=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Rt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Rt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Fe),E.pixelStorei(E.UNPACK_SKIP_ROWS,He),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ke);const St=C.isDataArrayTexture||C.isData3DTexture,Wn=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const $n=te.get(C),on=te.get(H),_n=te.get($n.__renderTarget),Hc=te.get(on.__renderTarget);ne.bindFramebuffer(E.READ_FRAMEBUFFER,_n.__webglFramebuffer),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,Hc.__webglFramebuffer);for(let Vi=0;Vi<Re;Vi++)St&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,te.get(C).__webglTexture,$,ke+Vi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,te.get(H).__webglTexture,ge,Lt+Vi)),E.blitFramebuffer(Fe,He,we,Ae,Qe,it,we,Ae,E.DEPTH_BUFFER_BIT,E.NEAREST);ne.bindFramebuffer(E.READ_FRAMEBUFFER,null),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||te.has(C)){const $n=te.get(C),on=te.get(H);ne.bindFramebuffer(E.READ_FRAMEBUFFER,Pv),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,Dv);for(let _n=0;_n<Re;_n++)St?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,$n.__webglTexture,$,ke+_n):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,$n.__webglTexture,$),Wn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,on.__webglTexture,ge,Lt+_n):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,on.__webglTexture,ge),$!==0?E.blitFramebuffer(Fe,He,we,Ae,Qe,it,we,Ae,E.COLOR_BUFFER_BIT,E.NEAREST):Wn?E.copyTexSubImage3D(jt,ge,Qe,it,Lt+_n,Fe,He,we,Ae):E.copyTexSubImage2D(jt,ge,Qe,it,Fe,He,we,Ae);ne.bindFramebuffer(E.READ_FRAMEBUFFER,null),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Wn?C.isDataTexture||C.isData3DTexture?E.texSubImage3D(jt,ge,Qe,it,Lt,we,Ae,Re,nt,Ie,Rt.data):H.isCompressedArrayTexture?E.compressedTexSubImage3D(jt,ge,Qe,it,Lt,we,Ae,Re,nt,Rt.data):E.texSubImage3D(jt,ge,Qe,it,Lt,we,Ae,Re,nt,Ie,Rt):C.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ge,Qe,it,we,Ae,nt,Ie,Rt.data):C.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ge,Qe,it,Rt.width,Rt.height,nt,Rt.data):E.texSubImage2D(E.TEXTURE_2D,ge,Qe,it,we,Ae,nt,Ie,Rt);E.pixelStorei(E.UNPACK_ROW_LENGTH,ot),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,tr),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ao),E.pixelStorei(E.UNPACK_SKIP_ROWS,An),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Os),ge===0&&H.generateMipmaps&&E.generateMipmap(jt),ne.unbindTexture()},this.copyTextureToTexture3D=function(C,H,Z=null,ee=null,$=0){return C.isTexture!==!0&&(qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,ee=arguments[1]||null,C=arguments[2],H=arguments[3],$=arguments[4]||0),qo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,H,Z,ee,$)},this.initRenderTarget=function(C){te.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),ne.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,ne.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Fm={type:"change"},rh={type:"start"},q_={type:"end"},Dl=new Kf,zm=new yi,GA=Math.cos(70*Xd.DEG2RAD),Nt=new X,bn=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Iu=1e-6;class WA extends oE{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:Zo.ROTATE,TWO:Zo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new yo,this._lastTargetPosition=new X,this._quat=new yo().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hm,this._sphericalDelta=new hm,this._scale=1,this._panOffset=new X,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new X,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XA.bind(this),this._onPointerDown=$A.bind(this),this._onPointerUp=jA.bind(this),this._onContextMenu=eR.bind(this),this._onMouseWheel=KA.bind(this),this._onKeyDown=ZA.bind(this),this._onTouchStart=JA.bind(this),this._onTouchMove=QA.bind(this),this._onMouseDown=YA.bind(this),this._onMouseMove=qA.bind(this),this._interceptControlDown=tR.bind(this),this._interceptControlUp=nR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fm),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(r)&&isFinite(i)&&(r<-Math.PI?r+=bn:r>Math.PI&&(r-=bn),i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),r<=i?this._spherical.theta=Math.max(r,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+i)/2?Math.max(r,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=Nt.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Dl.origin.copy(this.object.position),Dl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dl.direction))<GA?this.object.lookAt(this.target):(zm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dl.intersectPlane(zm,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Iu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Iu||this._lastTargetPosition.distanceToSquared(this.target)>Iu?(this.dispatchEvent(Fm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Nt.copy(i).sub(this.target);let o=Nt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/r.clientHeight,this.object.matrix),this._panUp(2*t*o/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),i=e-r.left,o=t-r.top,s=r.width,a=r.height;this._mouse.x=i/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(r,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(r,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,i=e.pageY-t.y,o=Math.sqrt(r*r+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),o=.5*(e.pageY+r.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(r,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,i=e.pageY-t.y,o=Math.sqrt(r*r+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function $A(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function XA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function jA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(q_),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function YA(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case cs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case cs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(rh)}function qA(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function KA(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent(rh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(q_))}function ZA(n){this.enabled!==!1&&this._handleKeyDown(n)}function JA(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Zo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case Zo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Zo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case Zo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(rh)}function QA(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function eR(n){this.enabled!==!1&&n.preventDefault()}function tR(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nR(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function K_(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ts={duration:.5,overwrite:!1,delay:0},ih,Yt,Mt,Pr=1e8,nn=1/Pr,qd=Math.PI*2,rR=qd/4,iR=0,Z_=Math.sqrt,oR=Math.cos,sR=Math.sin,Xt=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},ni=function(e){return typeof e=="number"},oh=function(e){return typeof e>"u"},Lr=function(e){return typeof e=="object"},Sn=function(e){return e!==!1},sh=function(){return typeof window<"u"},kl=function(e){return Pt(e)||Xt(e)},J_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,Kd=/(?:-?\.?\d|\.)+/gi,Q_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ou=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eb=/[+-]=-?[.\d]+/,tb=/[^,'"\[\]\s]+/gi,aR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,yr,Zd,ah,Vn={},sc={},nb,rb=function(e){return(sc=Cs(e,Vn))&&Cn},lh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Da=function(e,t){return!t&&console.warn(e)},ib=function(e,t){return e&&(Vn[e]=t)&&sc&&(sc[e]=t)||Vn},ka=function(){return 0},lR={suppressEvents:!0,isStart:!0,kill:!1},$l={suppressEvents:!0,kill:!1},cR={suppressEvents:!0},ch={},Di=[],Jd={},ob,kn={},Uu={},Hm=30,Xl=[],uh="",dh=function(e){var t=e[0],r,i;if(Lr(t)||Pt(t)||(e=[e]),!(r=(t._gsap||{}).harness)){for(i=Xl.length;i--&&!Xl[i].targetTest(t););r=Xl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Rb(e[i],r)))||e.splice(i,1);return e},ho=function(e){return e._gsap||dh(Kn(e))[0]._gsap},sb=function(e,t,r){return(r=e[t])&&Pt(r)?e[t]():oh(r)&&e.getAttribute&&e.getAttribute(t)||r},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},hs=function(e,t){var r=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},uR=function(e,t){for(var r=t.length,i=0;e.indexOf(t[i])<0&&++i<r;);return i<r},ac=function(){var e=Di.length,t=Di.slice(0),r,i;for(Jd={},Di.length=0,r=0;r<e;r++)i=t[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ab=function(e,t,r,i){Di.length&&!Yt&&ac(),e.render(t,r,Yt&&t<0&&(e._initted||e._startAt)),Di.length&&!Yt&&ac()},lb=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tb).length<2?t:Xt(e)?e.trim():e},cb=function(e){return e},Gn=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},dR=function(e){return function(t,r){for(var i in r)i in t||i==="duration"&&e||i==="ease"||(t[i]=r[i])}},Cs=function(e,t){for(var r in t)e[r]=t[r];return e},Vm=function n(e,t){for(var r in t)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=Lr(t[r])?n(e[r]||(e[r]={}),t[r]):t[r]);return e},lc=function(e,t){var r={},i;for(i in e)i in t||(r[i]=e[i]);return r},la=function(e){var t=e.parent||wt,r=e.keyframes?dR(rn(e.keyframes)):Gn;if(Sn(e.inherit))for(;t;)r(e,t.vars.defaults),t=t.parent||t._dp;return e},fR=function(e,t){for(var r=e.length,i=r===t.length;i&&r--&&e[r]===t[r];);return r<0},ub=function(e,t,r,i,o){var s=e[i],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[r],e[r]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},kc=function(e,t,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=t._prev,s=t._next;o?o._next=s:e[r]===t&&(e[r]=s),s?s._prev=o:e[i]===t&&(e[i]=o),t._next=t._prev=t.parent=null},Ui=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},po=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},hR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qd=function(e,t,r,i){return e._startAt&&(Yt?e._startAt.revert($l):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},pR=function n(e){return!e||e._ts&&n(e.parent)},Gm=function(e){return e._repeat?As(e._tTime,e=e.duration()+e._rDelay)*e:0},As=function(e,t){var r=Math.floor(e=Ut(e/t));return e&&r===e?r-1:r},cc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Lc=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||nn)||0))},Ic=function(e,t){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=Ut(r._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Lc(e),r._dirty||po(r,e)),e},db=function(e,t){var r;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(r=cc(e.rawTime(),t),(!t._dur||tl(0,t.totalDuration(),r)-t._tTime>nn)&&t.render(r,!0)),po(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-1e-8}},Er=function(e,t,r,i){return t.parent&&Ui(t),t._start=Ut((ni(r)?r:r||e!==wt?Yn(e,r,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ub(e,t,"_first","_last",e._sort?"_start":0),ef(t)||(e._recent=t),i||db(e,t),e._ts<0&&Ic(e,e._tTime),e},fb=function(e,t){return(Vn.ScrollTrigger||lh("scrollTrigger",t))&&Vn.ScrollTrigger.create(t,e)},hb=function(e,t,r,i,o){if(hh(e,t,o),!e._initted)return 1;if(!r&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ob!==On.frame)return Di.push(e),e._lazy=[o,i],1},mR=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},ef=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gR=function(e,t,r,i){var o=e.ratio,s=t<0||!t&&(!e._start&&mR(e)&&!(!e._initted&&ef(e))||(e._ts<0||e._dp._ts<0)&&!ef(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=tl(0,e._tDur,t),u=As(l,a),e._yoyo&&u&1&&(s=1-s),u!==As(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||Yt||i||e._zTime===nn||!t&&e._zTime){if(!e._initted&&hb(e,t,i,r,l))return;for(d=e._zTime,e._zTime=t||(r?nn:0),r||(r=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Qd(e,t,r,!0),e._onUpdate&&!r&&Fn(e,"onUpdate"),l&&e._repeat&&!r&&e.parent&&Fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Ui(e,1),!r&&!Yt&&(Fn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_R=function(e,t,r){var i;if(r>t)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Rs=function(e,t,r,i){var o=e._repeat,s=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Ut(s*(o+1)+e._rDelay*o):s,a>0&&!i&&Ic(e,e._tTime=e._tDur*a),e.parent&&Lc(e),r||po(e.parent,e),e},Wm=function(e){return e instanceof pn?po(e):Rs(e,e._dur)},bR={_start:0,endTime:ka,totalDuration:ka},Yn=function n(e,t,r){var i=e.labels,o=e._recent||bR,s=e.duration()>=Pr?o.endTime(!1):e._dur,a,l,c;return Xt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:r).totalDuration()/100:1)):a<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&r&&(l=l/100*(rn(r)?r[0]:r).totalDuration()),a>1?n(e,t.substr(0,a-1),r)+l:s+l)):t==null?s:+t},ca=function(e,t,r){var i=ni(t[1]),o=(i?2:1)+(e<2?0:1),s=t[o],a,l;if(i&&(s.duration=t[1]),s.parent=r,e){for(a=s,l=r;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;s.immediateRender=Sn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new Ot(t[0],s,t[o+1])},zi=function(e,t){return e||e===0?t(e):t},tl=function(e,t,r){return r<e?e:r>t?t:r},tn=function(e,t){return!Xt(e)||!(t=aR.exec(e))?"":t[1]},vR=function(e,t,r){return zi(r,function(i){return tl(e,t,i)})},tf=[].slice,pb=function(e,t){return e&&Lr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Lr(e[0]))&&!e.nodeType&&e!==yr},yR=function(e,t,r){return r===void 0&&(r=[]),e.forEach(function(i){var o;return Xt(i)&&!t||pb(i,1)?(o=r).push.apply(o,Kn(i)):r.push(i)})||r},Kn=function(e,t,r){return Mt&&!t&&Mt.selector?Mt.selector(e):Xt(e)&&!r&&(Zd||!Ps())?tf.call((t||ah).querySelectorAll(e),0):rn(e)?yR(e,r):pb(e)?tf.call(e,0):e?[e]:[]},nf=function(e){return e=Kn(e)[0]||Da("Invalid scope")||{},function(t){var r=e.current||e.nativeElement||e;return Kn(t,r.querySelectorAll?r:r===e?Da("Invalid scope")||ah.createElement("div"):e)}},mb=function(e){return e.sort(function(){return .5-Math.random()})},gb=function(e){if(Pt(e))return e;var t=Lr(e)?e:{each:e},r=mo(t.ease),i=t.from||0,o=parseFloat(t.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return Xt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(f,h,_){var m=(_||t).length,g=s[m],p,x,v,b,T,R,A,P,y;if(!g){if(y=t.grid==="auto"?0:(t.grid||[1,Pr])[1],!y){for(A=-1e8;A<(A=_[y++].getBoundingClientRect().left)&&y<m;);y<m&&y--}for(g=s[m]=[],p=l?Math.min(y,m)*u-.5:i%y,x=y===Pr?0:l?m*d/y-.5:i/y|0,A=0,P=Pr,R=0;R<m;R++)v=R%y-p,b=x-(R/y|0),g[R]=T=c?Math.abs(c==="y"?b:v):Z_(v*v+b*b),T>A&&(A=T),T<P&&(P=T);i==="random"&&mb(g),g.max=A-P,g.min=P,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(y>m?m-1:c?c==="y"?m/y:y:Math.max(y,m/y))||0)*(i==="edges"?-1:1),g.b=m<0?o-m:o,g.u=tn(t.amount||t.each)||0,r=r&&m<0?Tb(r):r}return m=(g[f]-g.min)/g.max||0,Ut(g.b+(r?r(m):m)*g.v)+g.u}},rf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=Ut(Math.round(parseFloat(r)/e)*e*t);return(i-i%1)/t+(ni(r)?0:tn(r))}},_b=function(e,t){var r=rn(e),i,o;return!r&&Lr(e)&&(i=r=e.radius||Pr,e.values?(e=Kn(e.values),(o=!ni(e[0]))&&(i*=i)):e=rf(e.increment)),zi(t,r?Pt(e)?function(s){return o=e(s),Math.abs(o-s)<=i?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=Pr,u=0,d=e.length,f,h;d--;)o?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:s,o||u===s||ni(s)?u:u+tn(s)}:rf(e))},bb=function(e,t,r,i){return zi(rn(e)?!t:r===!0?!!(r=0):!i,function(){return rn(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(t-e+r*.99))/r)*r*i)/i})},xR=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(i){return t.reduce(function(o,s){return s(o)},i)}},SR=function(e,t){return function(r){return e(parseFloat(r))+(t||tn(r))}},MR=function(e,t,r){return yb(e,t,0,1,r)},vb=function(e,t,r){return zi(r,function(i){return e[~~t(i)]})},ER=function n(e,t,r){var i=t-e;return rn(e)?vb(e,n(0,e.length),t):zi(r,function(o){return(i+(o-e)%i)%i+e})},wR=function n(e,t,r){var i=t-e,o=i*2;return rn(e)?vb(e,n(0,e.length-1),t):zi(r,function(s){return s=(o+(s-e)%o)%o||0,e+(s>i?o-s:s)})},La=function(e){for(var t=0,r="",i,o,s,a;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",o=e.substr(i+7,s-i-7).match(a?tb:Kd),r+=e.substr(t,i-t)+bb(a?o:+o[0],a?0:+o[1],+o[2]||1e-5),t=s+1;return r+e.substr(t,e.length-t)},yb=function(e,t,r,i,o){var s=t-e,a=i-r;return zi(o,function(l){return r+((l-e)/s*a||0)})},TR=function n(e,t,r,i){var o=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!o){var s=Xt(e),a={},l,c,u,d,f;if(r===!0&&(i=1)&&(r=null),s)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,o=function(_){_*=d;var m=Math.min(f,~~_);return u[m](_-m)},r=t}else i||(e=Cs(rn(e)?[]:{},e));if(!u){for(l in t)fh.call(a,e,l,"get",t[l]);o=function(_){return gh(_,a)||(s?e.p:e)}}}return zi(r,o)},$m=function(e,t,r){var i=e.labels,o=Pr,s,a,l;for(s in i)a=i[s]-t,a<0==!!r&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},Fn=function(e,t,r){var i=e.vars,o=i[t],s=Mt,a=e._ctx,l,c,u;if(o)return l=i[t+"Params"],c=i.callbackScope||e,r&&Di.length&&ac(),a&&(Mt=a),u=l?o.apply(c,l):o.call(c),Mt=s,u},qs=function(e){return Ui(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&Fn(e,"onInterrupt"),e},ts,xb=[],Sb=function(e){if(e)if(e=!e.name&&e.default||e,sh()||e.headless){var t=e.name,r=Pt(e),i=t&&!r&&e.init?function(){this._props=[]}:e,o={init:ka,render:gh,add:fh,kill:VR,modifier:HR,rawVars:0},s={targetTest:0,get:0,getSetter:mh,aliases:{},register:0};if(Ps(),e!==i){if(kn[t])return;Gn(i,Gn(lc(e,o),s)),Cs(i.prototype,Cs(o,lc(e,s))),kn[i.prop=t]=i,e.targetTest&&(Xl.push(i),ch[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ib(t,i),e.register&&e.register(Cn,i,En)}else xb.push(e)},pt=255,Ks={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Nu=function(e,t,r){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(r-t)*e*6:e<.5?r:e*3<2?t+(r-t)*(2/3-e)*6:t)*pt+.5|0},Mb=function(e,t,r){var i=e?ni(e)?[e>>16,e>>8&pt,e&pt]:0:Ks.black,o,s,a,l,c,u,d,f,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ks[e])i=Ks[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Kd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,i.length>3&&(i[3]*=1),i[0]=Nu(l+1/3,o,s),i[1]=Nu(l,o,s),i[2]=Nu(l-1/3,o,s);else if(~e.indexOf("="))return i=e.match(Q_),r&&i.length<4&&(i[3]=1),i}else i=e.match(Kd)||Ks.transparent;i=i.map(Number)}return t&&!_&&(o=i[0]/pt,s=i[1]/pt,a=i[2]/pt,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===o?(s-a)/h+(s<a?6:0):d===s?(a-o)/h+2:(o-s)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),r&&i.length<4&&(i[3]=1),i},Eb=function(e){var t=[],r=[],i=-1;return e.split(ki).forEach(function(o){var s=o.match(es)||[];t.push.apply(t,s),r.push(i+=s.length+1)}),t.c=r,t},Xm=function(e,t,r){var i="",o=(e+i).match(ki),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=Mb(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),r&&(u=Eb(e),l=r.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ki,"1").split(es),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:r).shift());if(!c)for(c=e.split(ki),d=c.length-1;a<d;a++)i+=c[a]+o[a];return i+c[d]},ki=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ks)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),CR=/hsl[a]?\(/,wb=function(e){var t=e.join(" "),r;if(ki.lastIndex=0,ki.test(t))return r=CR.test(t),e[1]=Xm(e[1],r),e[0]=Xm(e[0],r,Eb(e[1])),!0},Ia,On=function(){var n=Date.now,e=500,t=33,r=n(),i=r,o=1e3/240,s=o,a=[],l,c,u,d,f,h,_=function m(g){var p=n()-i,x=g===!0,v,b,T,R;if((p>e||p<0)&&(r+=p-t),i+=p,T=i-r,v=T-s,(v>0||x)&&(R=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,s+=v+(v>=o?4:o-v),b=1),x||(l=c(m)),b)for(h=0;h<a.length;h++)a[h](T,f,R,g)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){nb&&(!Zd&&sh()&&(yr=Zd=window,ah=yr.document||{},Vn.gsap=Cn,(yr.gsapVersions||(yr.gsapVersions=[])).push(Cn.version),rb(sc||yr.GreenSockGlobals||!yr.gsap&&yr||{}),xb.forEach(Sb)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(g){return setTimeout(g,s-d.time*1e3+1|0)},Ia=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ia=0,c=ka},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){o=1e3/(g||240),s=d.time*1e3+o},add:function(g,p,x){var v=p?function(b,T,R,A){g(b,T,R,A),d.remove(v)}:g;return d.remove(g),a[x?"unshift":"push"](v),Ps(),v},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),Ps=function(){return!Ia&&On.wake()},Ke={},AR=/^[\d.\-M][\d.\-,\s]/,RR=/["']/g,PR=function(e){for(var t={},r=e.substr(1,e.length-3).split(":"),i=r[0],o=1,s=r.length,a,l,c;o<s;o++)l=r[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(RR,"").trim():+c,i=l.substr(a+1).trim();return t},DR=function(e){var t=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<r?e.indexOf(")",r+1):r)},kR=function(e){var t=(e+"").split("("),r=Ke[t[0]];return r&&t.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[PR(t[1])]:DR(e).split(",").map(lb)):Ke._CE&&AR.test(e)?Ke._CE("",e):r},Tb=function(e){return function(t){return 1-e(1-t)}},Cb=function n(e,t){for(var r=e._first,i;r;)r instanceof pn?n(r,t):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==t&&(r.timeline?n(r.timeline,t):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=t)),r=r._next},mo=function(e,t){return e&&(Pt(e)?e:Ke[e]||kR(e))||t},To=function(e,t,r,i){r===void 0&&(r=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:r,easeInOut:i},s;return Mn(e,function(a){Ke[a]=Vn[a]=o,Ke[s=a.toLowerCase()]=r;for(var l in o)Ke[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=o[l]}),o},Ab=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bu=function n(e,t,r){var i=t>=1?t:1,o=(r||(e?.3:.45))/(t<1?t:1),s=o/qd*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*sR((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ab(a);return o=qd/o,l.config=function(c,u){return n(e,c,u)},l},Fu=function n(e,t){t===void 0&&(t=1.70158);var r=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?r:e==="in"?function(o){return 1-r(1-o)}:Ab(r);return i.config=function(o){return n(e,o)},i};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;To(n+",Power"+(t-1),e?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(r*2,t)/2:1-Math.pow((1-r)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;To("Elastic",Bu("in"),Bu("out"),Bu());(function(n,e){var t=1/e,r=2*t,i=2.5*t,o=function(a){return a<t?n*a*a:a<r?n*Math.pow(a-1.5/e,2)+.75:a<i?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};To("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);To("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});To("Circ",function(n){return-(Z_(1-n*n)-1)});To("Sine",function(n){return n===1?1:-oR(n*rR)+1});To("Back",Fu("in"),Fu("out"),Fu());Ke.SteppedEase=Ke.steps=Vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var r=1/e,i=e+(t?0:1),o=t?1:0,s=1-nn;return function(a){return((i*tl(0,s,a)|0)+o)*r}}};Ts.ease=Ke["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return uh+=n+","+n+"Params,"});var Rb=function(e,t){this.id=iR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sb,this.set=t?t.getSetter:mh},Oa=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Rs(this,+t.duration,1,1),this.data=t.data,Mt&&(this._ctx=Mt,Mt.data.push(this)),Ia||On.wake()}var e=n.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,Rs(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(Ps(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Ic(this,r),!o._dp||o.parent||db(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Er(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===nn||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),ab(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+Gm(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+Gm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*o,i):this._repeat?As(this._tTime,o)+1:1},e.timeScale=function(r,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var o=this.parent&&this._ts?cc(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(tl(-Math.abs(this._delay),this._tDur,o),i!==!1),Lc(this),hR(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ps(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nn&&(this._tTime-=nn)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Er(i,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(Sn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cc(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=cR);var i=Yt;return Yt=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Yt=i,this},e.globalTime=function(r){for(var i=this,o=arguments.length?r:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):o},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,Wm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,Wm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(Yn(this,r),Sn(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,Sn(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,o;return!!(!r||this._ts&&this._initted&&r.isActive()&&(o=r.rawTime(!0))>=i&&o<this.endTime(!0)-nn)},e.eventCallback=function(r,i,o){var s=this.vars;return arguments.length>1?(i?(s[r]=i,o&&(s[r+"Params"]=o),r==="onUpdate"&&(this._onUpdate=i)):delete s[r],this):s[r]},e.then=function(r){var i=this;return new Promise(function(o){var s=Pt(r)?r:cb,a=function(){var c=i.then;i.then=null,Pt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),o(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){qs(this)},n}();Gn(Oa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var pn=function(n){K_(e,n);function e(r,i){var o;return r===void 0&&(r={}),o=n.call(this,r)||this,o.labels={},o.smoothChildTiming=!!r.smoothChildTiming,o.autoRemoveChildren=!!r.autoRemoveChildren,o._sort=Sn(r.sortChildren),wt&&Er(r.parent||wt,jr(o),i),r.reversed&&o.reverse(),r.paused&&o.paused(!0),r.scrollTrigger&&fb(jr(o),r.scrollTrigger),o}var t=e.prototype;return t.to=function(i,o,s){return ca(0,arguments,this),this},t.from=function(i,o,s){return ca(1,arguments,this),this},t.fromTo=function(i,o,s,a){return ca(2,arguments,this),this},t.set=function(i,o,s){return o.duration=0,o.parent=this,la(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Ot(i,o,Yn(this,s),1),this},t.call=function(i,o,s){return Er(this,Ot.delayedCall(0,i,o),s)},t.staggerTo=function(i,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Ot(i,s,Yn(this,l)),this},t.staggerFrom=function(i,o,s,a,l,c,u){return s.runBackwards=1,la(s).immediateRender=Sn(s.immediateRender),this.staggerTo(i,o,s,a,l,c,u)},t.staggerFromTo=function(i,o,s,a,l,c,u,d){return a.startAt=s,la(a).immediateRender=Sn(a.immediateRender),this.staggerTo(i,o,a,l,c,u,d)},t.render=function(i,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ut(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,_,m,g,p,x,v,b,T,R,A;if(this!==wt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,b=this._start,v=this._ts,p=!v,d&&(c||(a=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,o,s);if(f=Ut(u%g),u===l?(m=this._repeat,f=c):(T=Ut(u/g),m=~~T,m&&m===T&&(f=c,m--),f>c&&(f=c)),T=As(this._tTime,g),!a&&this._tTime&&T!==m&&this._tTime-T*g-this._dur<=0&&(T=m),R&&m&1&&(f=c-f,A=1),m!==T&&!this._lock){var P=R&&T&1,y=P===(R&&m&1);if(m<T&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ut(m*g)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Cb(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=_R(this,Ut(a),Ut(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!o&&!m&&(Fn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,o,s),f!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=-1e-8);break}}h=_}else{h=this._last;for(var M=i<0?i:f;h;){if(_=h._prev,(h._act||M<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(M-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(M-h._start)*h._ts,o,s||Yt&&(h._initted||h._startAt)),f!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=M?-1e-8:nn);break}}h=_}}if(x&&!o&&(this.pause(),x.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=b,Lc(this),this.render(i,o,s);this._onUpdate&&!o&&Fn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ui(this,1),!o&&!(i<0&&!a)&&(u||a||!l)&&(Fn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,o){var s=this;if(ni(o)||(o=Yn(this,o,i)),!(i instanceof Oa)){if(rn(i))return i.forEach(function(a){return s.add(a,o)}),this;if(Xt(i))return this.addLabel(i,o);if(Pt(i))i=Ot.delayedCall(0,i);else return this}return this!==i?Er(this,i,o):this},t.getChildren=function(i,o,s,a){i===void 0&&(i=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ot?o&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(i){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===i)return o[s]},t.remove=function(i){return Xt(i)?this.removeLabel(i):Pt(i)?this.killTweensOf(i):(i.parent===this&&kc(this,i),i===this._recent&&(this._recent=this._last),po(this))},t.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(On.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),n.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},t.addLabel=function(i,o){return this.labels[i]=Yn(this,o),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,o,s){var a=Ot.delayedCall(0,o||ka,s);return a.data="isPause",this._hasPause=1,Er(this,a,Yn(this,i))},t.removePause=function(i){var o=this._first;for(i=Yn(this,i);o;)o._start===i&&o.data==="isPause"&&Ui(o),o=o._next},t.killTweensOf=function(i,o,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)Ei!==a[l]&&a[l].kill(i,o);return this},t.getTweensOf=function(i,o){for(var s=[],a=Kn(i),l=this._first,c=ni(o),u;l;)l instanceof Ot?uR(l._targets,a)&&(c?(!Ei||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,o){o=o||{};var s=this,a=Yn(s,i),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=Ot.to(s,Gn({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||nn,onStart:function(){if(s.pause(),!h){var g=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==g&&Rs(_,g,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},o));return f?_.render(0):_},t.tweenFromTo=function(i,o,s){return this.tweenTo(o,Gn({startAt:{time:Yn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),$m(this,Yn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),$m(this,Yn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+nn)},t.shiftChildren=function(i,o,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=i);return po(this)},t.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return n.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),po(this)},t.totalDuration=function(i){var o=0,s=this,a=s._last,l=Pr,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Er(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;Rs(s,s===wt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(wt._ts&&(ab(wt,cc(i,wt)),ob=On.frame),On.frame>=Hm){Hm+=Hn.autoSleep||120;var o=wt._first;if((!o||!o._ts)&&Hn.autoSleep&&On._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||On.sleep()}}},e}(Oa);Gn(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var LR=function(e,t,r,i,o,s,a){var l=new En(this._pt,e,t,0,1,Ob,null,o),c=0,u=0,d,f,h,_,m,g,p,x;for(l.b=r,l.e=i,r+="",i+="",(p=~i.indexOf("random("))&&(i=La(i)),s&&(x=[r,i],s(x,e,t),r=x[0],i=x[1]),f=r.match(Ou)||[];d=Ou.exec(i);)_=d[0],m=i.substring(c,d.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:_.charAt(1)==="="?hs(g,_)-g:parseFloat(_)-g,m:h&&h<4?Math.round:0},c=Ou.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(eb.test(i)||p)&&(l.e=0),this._pt=l,l},fh=function(e,t,r,i,o,s,a,l,c,u){Pt(i)&&(i=i(o||0,e,s));var d=e[t],f=r!=="get"?r:Pt(d)?c?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Pt(d)?c?BR:Lb:ph,_;if(Xt(i)&&(~i.indexOf("random(")&&(i=La(i)),i.charAt(1)==="="&&(_=hs(f,i)+(tn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||of)return!isNaN(f*i)&&i!==""?(_=new En(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?zR:Ib,0,h),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&lh(t,i),LR.call(this,e,t,f,i,h,l||Hn.stringFilter,c))},IR=function(e,t,r,i,o){if(Pt(e)&&(e=ua(e,o,t,r,i)),!Lr(e)||e.style&&e.nodeType||rn(e)||J_(e))return Xt(e)?ua(e,o,t,r,i):e;var s={},a;for(a in e)s[a]=ua(e[a],o,t,r,i);return s},Pb=function(e,t,r,i,o,s){var a,l,c,u;if(kn[e]&&(a=new kn[e]).init(o,a.rawVars?t[e]:IR(t[e],i,o,s,r),r,i,s)!==!1&&(r._pt=l=new En(r._pt,o,e,0,1,a.render,a,0,a.priority),r!==ts))for(c=r._ptLookup[r._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ei,of,hh=function n(e,t,r){var i=e.vars,o=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,_=e._dur,m=e._startAt,g=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:g,v=e._overwrite==="auto"&&!ih,b=e.timeline,T,R,A,P,y,M,k,O,U,Y,J,V,W;if(b&&(!f||!o)&&(o="none"),e._ease=mo(o,Ts.ease),e._yEase=d?Tb(mo(d===!0?o:d,Ts.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!b&&!!i.runBackwards,!b||f&&!i.stagger){if(O=g[0]?ho(g[0]).harness:0,V=O&&i[O.prop],T=lc(i,ch),m&&(m._zTime<0&&m.progress(1),t<0&&u&&a&&!h?m.render(-1,!0):m.revert(u&&_?$l:lR),m._lazy=0),s){if(Ui(e._startAt=Ot.set(g,Gn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&Sn(l),startAt:null,delay:0,onUpdate:c&&function(){return Fn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!a&&!h)&&e._startAt.revert($l),a&&_&&t<=0&&r<=0){t&&(e._zTime=t);return}}else if(u&&_&&!m){if(t&&(a=!1),A=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Sn(l),immediateRender:a,stagger:0,parent:p},T),V&&(A[O.prop]=V),Ui(e._startAt=Ot.set(g,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert($l):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,nn,nn);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Sn(l)||l&&!_,R=0;R<g.length;R++){if(y=g[R],k=y._gsap||dh(g)[R]._gsap,e._ptLookup[R]=Y={},Jd[k.id]&&Di.length&&ac(),J=x===g?R:x.indexOf(y),O&&(U=new O).init(y,V||T,e,J,x)!==!1&&(e._pt=P=new En(e._pt,y,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(z){Y[z]=P}),U.priority&&(M=1)),!O||V)for(A in T)kn[A]&&(U=Pb(A,T,e,J,y,x))?U.priority&&(M=1):Y[A]=P=fh.call(e,y,A,"get",T[A],J,x,0,i.stringFilter);e._op&&e._op[R]&&e.kill(y,e._op[R]),v&&e._pt&&(Ei=e,wt.killTweensOf(y,Y,e.globalTime(t)),W=!e.parent,Ei=0),e._pt&&l&&(Jd[k.id]=1)}M&&Ub(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,f&&t<=0&&b.render(Pr,!0,!0)},OR=function(e,t,r,i,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return of=1,e.vars[t]="+=0",hh(e,a),of=0,l?Da(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!o?i:u.s+(i||0)+s*u.c,u.c=r-u.s,d.e&&(d.e=kt(r)+tn(d.e)),d.b&&(d.b=u.s+tn(d.b))},UR=function(e,t){var r=e[0]?ho(e[0]).harness:0,i=r&&r.aliases,o,s,a,l;if(!i)return t;o=Cs({},t);for(s in i)if(s in o)for(l=i[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},NR=function(e,t,r,i){var o=t.ease||i||"power1.inOut",s,a;if(rn(t))a=r[e]||(r[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=r[s]||(r[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},ua=function(e,t,r,i,o){return Pt(e)?e.call(t,r,i,o):Xt(e)&&~e.indexOf("random(")?La(e):e},Db=uh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",kb={};Mn(Db+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return kb[n]=1});var Ot=function(n){K_(e,n);function e(r,i,o,s){var a;typeof i=="number"&&(o.duration=i,i=o,o=null),a=n.call(this,s?i:la(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,x=i.parent||wt,v=(rn(r)||J_(r)?ni(r[0]):"length"in i)?[r]:Kn(r),b,T,R,A,P,y,M,k;if(a._targets=v.length?dh(v):Da("GSAP target "+r+" not found. https://gsap.com",!Hn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,_||f||kl(c)||kl(u)){if(i=a.vars,b=a.timeline=new pn({data:"nested",defaults:m||{},targets:x&&x.data==="nested"?x.vars.targets:v}),b.kill(),b.parent=b._dp=jr(a),b._start=0,f||kl(c)||kl(u)){if(A=v.length,M=f&&gb(f),Lr(f))for(P in f)~Db.indexOf(P)&&(k||(k={}),k[P]=f[P]);for(T=0;T<A;T++)R=lc(i,kb),R.stagger=0,p&&(R.yoyoEase=p),k&&Cs(R,k),y=v[T],R.duration=+ua(c,jr(a),T,y,v),R.delay=(+ua(u,jr(a),T,y,v)||0)-a._delay,!f&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),b.to(y,R,M?M(T,y,v):0),b._ease=Ke.none;b.duration()?c=u=0:a.timeline=0}else if(_){la(Gn(b.vars.defaults,{ease:"none"})),b._ease=mo(_.ease||i.ease||"none");var O=0,U,Y,J;if(rn(_))_.forEach(function(V){return b.to(v,V,">")}),b.duration();else{R={};for(P in _)P==="ease"||P==="easeEach"||NR(P,_[P],R,_.easeEach);for(P in R)for(U=R[P].sort(function(V,W){return V.t-W.t}),O=0,T=0;T<U.length;T++)Y=U[T],J={ease:Y.e,duration:(Y.t-(T?U[T-1].t:0))/100*c},J[P]=Y.v,b.to(v,J,O),O+=J.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return h===!0&&!ih&&(Ei=jr(a),wt.killTweensOf(v),Ei=0),Er(x,jr(a),o),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!_&&a._start===Ut(x._time)&&Sn(d)&&pR(jr(a))&&x.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),g&&fb(jr(a),g),a}var t=e.prototype;return t.render=function(i,o,s){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-nn&&!u?l:i<nn?0:i,f,h,_,m,g,p,x,v,b;if(!c)gR(this,i,o,s);else if(d!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,o,s);if(f=Ut(d%m),d===l?(_=this._repeat,f=c):(g=Ut(d/m),_=~~g,_&&_===g?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(b=this._yEase,f=c-f),g=As(this._tTime,m),f===a&&!s&&this._initted&&_===g)return this._tTime=d,this;_!==g&&(v&&this._yEase&&Cb(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==m&&this._initted&&(this._lock=s=1,this.render(Ut(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(hb(this,u?i:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(i,o,s)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(b||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!a&&!o&&!_&&(Fn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(u&&Qd(this,i,o,s),Fn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!o&&this.parent&&Fn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Qd(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ui(this,1),!o&&!(u&&!a)&&(d||a||p)&&(Fn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),n.prototype.invalidate.call(this,i)},t.resetTo=function(i,o,s,a,l){Ia||On.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||hh(this,c),u=this._ease(c/this._dur),OR(this,i,o,s,a,u,c,l)?this.resetTo(i,o,s,a,1):(Ic(this,0),this.parent||ub(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?qs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Yt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,Ei&&Ei.vars.overwrite!==!0)._first||qs(this),this.parent&&s!==this.timeline.totalDuration()&&Rs(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Kn(i):a,c=this._ptLookup,u=this._pt,d,f,h,_,m,g,p;if((!o||o==="all")&&fR(a,l))return o==="all"&&(this._pt=0),qs(this);for(d=this._op=this._op||[],o!=="all"&&(Xt(o)&&(m={},Mn(o,function(x){return m[x]=1}),o=m),o=UR(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,_=f,h={}):(h=d[p]=d[p]||{},_=o);for(m in _)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&kc(this,g,"_pt"),delete f[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&qs(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return ca(1,arguments)},e.delayedCall=function(i,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,o,s){return ca(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,s){return wt.killTweensOf(i,o,s)},e}(Oa);Gn(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(n){Ot[n]=function(){var e=new pn,t=tf.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var ph=function(e,t,r){return e[t]=r},Lb=function(e,t,r){return e[t](r)},BR=function(e,t,r,i){return e[t](i.fp,r)},FR=function(e,t,r){return e.setAttribute(t,r)},mh=function(e,t){return Pt(e[t])?Lb:oh(e[t])&&e.setAttribute?FR:ph},Ib=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},zR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ob=function(e,t){var r=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=t.c}t.set(t.t,t.p,i,t)},gh=function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next},HR=function(e,t,r,i){for(var o=this._pt,s;o;)s=o._next,o.p===i&&o.modifier(e,t,r),o=s},VR=function(e){for(var t=this._pt,r,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?kc(this,t,"_pt"):t.dep||(r=1),t=i;return!r},GR=function(e,t,r,i){i.mSet(e,t,i.m.call(i.tween,r,i.mt),i)},Ub=function(e){for(var t=e._pt,r,i,o,s;t;){for(r=t._next,i=o;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:o=t,(t._next=i)?i._prev=t:s=t,t=r}e._pt=o},En=function(){function n(t,r,i,o,s,a,l,c,u){this.t=r,this.s=o,this.c=s,this.p=i,this.r=a||Ib,this.d=l||this,this.set=c||ph,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(r,i,o){this.mSet=this.mSet||this.set,this.set=GR,this.m=r,this.mt=o,this.tween=i},n}();Mn(uh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return ch[n]=1});Vn.TweenMax=Vn.TweenLite=Ot;Vn.TimelineLite=Vn.TimelineMax=pn;wt=new pn({sortChildren:!1,defaults:Ts,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hn.stringFilter=wb;var go=[],jl={},WR=[],jm=0,$R=0,zu=function(e){return(jl[e]||WR).map(function(t){return t()})},sf=function(){var e=Date.now(),t=[];e-jm>2&&(zu("matchMediaInit"),go.forEach(function(r){var i=r.queries,o=r.conditions,s,a,l,c;for(a in i)s=yr.matchMedia(i[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(r.revert(),l&&t.push(r))}),zu("matchMediaRevert"),t.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),jm=e,zu("matchMedia"))},Nb=function(){function n(t,r){this.selector=r&&nf(r),this.data=[],this._r=[],this.isReverted=!1,this.id=$R++,t&&this.add(t)}var e=n.prototype;return e.add=function(r,i,o){Pt(r)&&(o=i,i=r,r=Pt);var s=this,a=function(){var c=Mt,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=nf(o)),Mt=s,d=i.apply(s,arguments),Pt(d)&&s._r.push(d),Mt=c,s.selector=u,s.isReverted=!1,d};return s.last=a,r===Pt?a(s,function(l){return s.add(null,l)}):r?s[r]=a:a},e.ignore=function(r){var i=Mt;Mt=null,r(this),Mt=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof n?r.push.apply(r,i.getTweens()):i instanceof Ot&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var o=this;if(r?function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(r)}),l=o.data.length;l--;)c=o.data[l],c instanceof pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ot)&&c.revert&&c.revert(r);o._r.forEach(function(u){return u(r,o)}),o.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var s=go.length;s--;)go[s].id===this.id&&go.splice(s,1)},e.revert=function(r){this.kill(r||{})},n}(),XR=function(){function n(t){this.contexts=[],this.scope=t,Mt&&Mt.data.push(this)}var e=n.prototype;return e.add=function(r,i,o){Lr(r)||(r={matches:r});var s=new Nb(0,o||this.scope),a=s.conditions={},l,c,u;Mt&&!s.selector&&(s.selector=Mt.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=r;for(c in r)c==="all"?u=1:(l=yr.matchMedia(r[c]),l&&(go.indexOf(s)<0&&go.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(sf):l.addEventListener("change",sf)));return u&&i(s,function(d){return s.add(null,d)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},n}(),uc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(i){return Sb(i)})},timeline:function(e){return new pn(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,r,i){Xt(e)&&(e=Kn(e)[0]);var o=ho(e||{}).get,s=r?cb:lb;return r==="native"&&(r=""),e&&(t?s((kn[t]&&kn[t].get||o)(e,t,r,i)):function(a,l,c){return s((kn[a]&&kn[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,r){if(e=Kn(e),e.length>1){var i=e.map(function(u){return Cn.quickSetter(u,t,r)}),o=i.length;return function(u){for(var d=o;d--;)i[d](u)}}e=e[0]||{};var s=kn[t],a=ho(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;ts._pt=0,d.init(e,r?u+r:u,ts,0,[e]),d.render(1,d),ts._pt&&gh(1,ts)}:a.set(e,l);return s?c:function(u){return c(e,l,r?u+r:u,a,1)}},quickTo:function(e,t,r){var i,o=Cn.to(e,Gn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),r||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mo(e.ease,Ts.ease)),Vm(Ts,e||{})},config:function(e){return Vm(Hn,e||{})},registerEffect:function(e){var t=e.name,r=e.effect,i=e.plugins,o=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!kn[a]&&!Vn[a]&&Da(t+" effect requires "+a+" plugin.")}),Uu[t]=function(a,l,c){return r(Kn(a),Gn(l||{},o),c)},s&&(pn.prototype[t]=function(a,l,c){return this.add(Uu[t](a,Lr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=mo(t)},parseEase:function(e,t){return arguments.length?mo(e,t):Ke},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var r=new pn(e),i,o;for(r.smoothChildTiming=Sn(e.smoothChildTiming),wt.remove(r),r._dp=0,r._time=r._tTime=wt._time,i=wt._first;i;)o=i._next,(t||!(!i._dur&&i instanceof Ot&&i.vars.onComplete===i._targets[0]))&&Er(r,i,i._start-i._delay),i=o;return Er(wt,r,0),r},context:function(e,t){return e?new Nb(e,t):Mt},matchMedia:function(e){return new XR(e)},matchMediaRefresh:function(){return go.forEach(function(e){var t=e.conditions,r,i;for(i in t)t[i]&&(t[i]=!1,r=1);r&&e.revert()})||sf()},addEventListener:function(e,t){var r=jl[e]||(jl[e]=[]);~r.indexOf(t)||r.push(t)},removeEventListener:function(e,t){var r=jl[e],i=r&&r.indexOf(t);i>=0&&r.splice(i,1)},utils:{wrap:ER,wrapYoyo:wR,distribute:gb,random:bb,snap:_b,normalize:MR,getUnit:tn,clamp:vR,splitColor:Mb,toArray:Kn,selector:nf,mapRange:yb,pipe:xR,unitize:SR,interpolate:TR,shuffle:mb},install:rb,effects:Uu,ticker:On,updateRoot:pn.updateRoot,plugins:kn,globalTimeline:wt,core:{PropTween:En,globals:ib,Tween:Ot,Timeline:pn,Animation:Oa,getCache:ho,_removeLinkedListItem:kc,reverting:function(){return Yt},context:function(e){return e&&Mt&&(Mt.data.push(e),e._ctx=Mt),Mt},suppressOverwrites:function(e){return ih=e}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return uc[n]=Ot[n]});On.add(pn.updateRoot);ts=uc.to({},{duration:0});var jR=function(e,t){for(var r=e._pt;r&&r.p!==t&&r.op!==t&&r.fp!==t;)r=r._next;return r},YR=function(e,t){var r=e._targets,i,o,s;for(i in t)for(o=r.length;o--;)s=e._ptLookup[o][i],s&&(s=s.d)&&(s._pt&&(s=jR(s,i)),s&&s.modifier&&s.modifier(t[i],e,r[o],i))},Hu=function(e,t){return{name:e,rawVars:1,init:function(i,o,s){s._onInit=function(a){var l,c;if(Xt(o)&&(l={},Mn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}YR(a,o)}}}},Cn=uc.registerPlugin({name:"attr",init:function(e,t,r,i,o){var s,a,l;this.tween=r;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],i,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var r=t._pt;r;)Yt?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,t){for(var r=t.length;r--;)this.add(e,r,e[r]||0,t[r],0,0,0,0,0,1)}},Hu("roundProps",rf),Hu("modifiers"),Hu("snap",_b))||uc;Ot.version=pn.version=Cn.version="3.12.7";nb=1;sh()&&Ps();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ym,wi,ps,_h,co,qm,bh,qR=function(){return typeof window<"u"},ri={},ro=180/Math.PI,ms=Math.PI/180,Wo=Math.atan2,Km=1e8,vh=/([A-Z])/g,KR=/(left|right|width|margin|padding|x)/i,ZR=/[\s,\(]\S/,Tr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},af=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},e2=function(e,t){var r=t.s+t.c*e;t.set(t.t,t.p,~~(r+(r<0?-.5:.5))+t.u,t)},Bb=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Fb=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},t2=function(e,t,r){return e.style[t]=r},n2=function(e,t,r){return e.style.setProperty(t,r)},r2=function(e,t,r){return e._gsap[t]=r},i2=function(e,t,r){return e._gsap.scaleX=e._gsap.scaleY=r},o2=function(e,t,r,i,o){var s=e._gsap;s.scaleX=s.scaleY=r,s.renderTransform(o,s)},s2=function(e,t,r,i,o){var s=e._gsap;s[t]=r,s.renderTransform(o,s)},Tt="transform",wn=Tt+"Origin",a2=function n(e,t){var r=this,i=this.target,o=i.style,s=i._gsap;if(e in ri&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Tr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return r.tfm[a]=Yr(i,a)}):this.tfm[e]=s.x?s[e]:Yr(i,e),e===wn&&(this.tfm.zOrigin=s.zOrigin);else return Tr.transform.split(",").forEach(function(a){return n.call(r,a,t)});if(this.props.indexOf(Tt)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=Tt}(o||t)&&this.props.push(e,t,o[e])},zb=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},l2=function(){var e=this.props,t=this.target,r=t.style,i=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?r[e[o]]=e[o+2]:r.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(vh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=bh(),(!o||!o.isStart)&&!r[Tt]&&(zb(r),i.zOrigin&&r[wn]&&(r[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Hb=function(e,t){var r={target:e,props:[],revert:l2,save:a2};return e._gsap||Cn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return r.save(i)}),r},Vb,lf=function(e,t){var r=wi.createElementNS?wi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wi.createElement(e);return r&&r.style?r:wi.createElement(e)},Dr=function n(e,t,r){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(vh,"-$1").toLowerCase())||i.getPropertyValue(t)||!r&&n(e,Ds(t)||t,1)||""},Zm="O,Moz,ms,Ms,Webkit".split(","),Ds=function(e,t,r){var i=t||co,o=i.style,s=5;if(e in o&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Zm[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Zm[s]:"")+e},cf=function(){qR()&&window.document&&(Ym=window,wi=Ym.document,ps=wi.documentElement,co=lf("div")||{style:{}},lf("div"),Tt=Ds(Tt),wn=Tt+"Origin",co.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vb=!!Ds("perspective"),bh=Cn.core.reverting,_h=1)},Jm=function(e){var t=e.ownerSVGElement,r=lf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),o;i.style.display="block",r.appendChild(i),ps.appendChild(r);try{o=i.getBBox()}catch{}return r.removeChild(i),ps.removeChild(r),o},Qm=function(e,t){for(var r=t.length;r--;)if(e.hasAttribute(t[r]))return e.getAttribute(t[r])},Gb=function(e){var t,r;try{t=e.getBBox()}catch{t=Jm(e),r=1}return t&&(t.width||t.height)||r||(t=Jm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Qm(e,["x","cx","x1"])||0,y:+Qm(e,["y","cy","y1"])||0,width:0,height:0}:t},Wb=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Gb(e))},xo=function(e,t){if(t){var r=e.style,i;t in ri&&t!==wn&&(t=Tt),r.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),r.removeProperty(i==="--"?t:t.replace(vh,"-$1").toLowerCase())):r.removeAttribute(t)}},Ti=function(e,t,r,i,o,s){var a=new En(e._pt,t,r,0,1,s?Fb:Bb);return e._pt=a,a.b=i,a.e=o,e._props.push(r),a},eg={deg:1,rad:1,turn:1},c2={grid:1,flex:1},Ni=function n(e,t,r,i){var o=parseFloat(r)||0,s=(r+"").trim().substr((o+"").length)||"px",a=co.style,l=KR.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",_,m,g,p;if(i===s||!o||eg[i]||eg[s])return o;if(s!=="px"&&!f&&(o=n(e,t,r,"px")),p=e.getCTM&&Wb(e),(h||s==="%")&&(ri[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],kt(h?o/_*d:o/100*_);if(a[l?"width":"height"]=d+(f?s:i),m=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===wi||!m.appendChild)&&(m=wi.body),g=m._gsap,g&&h&&g.width&&l&&g.time===On.time&&!g.uncache)return kt(o/g.width*d);if(h&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+i,_=e[u],x?e.style[t]=x:xo(e,t)}else(h||s==="%")&&!c2[Dr(m,"display")]&&(a.position=Dr(e,"position")),m===e&&(a.position="static"),m.appendChild(co),_=co[u],m.removeChild(co),a.position="absolute";return l&&h&&(g=ho(m),g.time=On.time,g.width=m[u]),kt(f?_*o/d:_&&o?d/_*o:0)},Yr=function(e,t,r,i){var o;return _h||cf(),t in Tr&&t!=="transform"&&(t=Tr[t],~t.indexOf(",")&&(t=t.split(",")[0])),ri[t]&&t!=="transform"?(o=Na(e,i),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:fc(Dr(e,wn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=dc[t]&&dc[t](e,t,r)||Dr(e,t)||sb(e,t)||(t==="opacity"?1:0))),r&&!~(o+"").trim().indexOf(" ")?Ni(e,t,o,r)+r:o},u2=function(e,t,r,i){if(!r||r==="none"){var o=Ds(t,e,1),s=o&&Dr(e,o,1);s&&s!==r?(t=o,r=s):t==="borderColor"&&(r=Dr(e,"borderTopColor"))}var a=new En(this._pt,e.style,t,0,1,Ob),l=0,c=0,u,d,f,h,_,m,g,p,x,v,b,T;if(a.b=r,a.e=i,r+="",i+="",i==="auto"&&(m=e.style[t],e.style[t]=i,i=Dr(e,t)||i,m?e.style[t]=m:xo(e,t)),u=[r,i],wb(u),r=u[0],i=u[1],f=r.match(es)||[],T=i.match(es)||[],T.length){for(;d=es.exec(i);)g=d[0],x=i.substring(l,d.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(m=f[c++]||"")&&(h=parseFloat(m)||0,b=m.substr((h+"").length),g.charAt(1)==="="&&(g=hs(h,g)+b),p=parseFloat(g),v=g.substr((p+"").length),l=es.lastIndex-v.length,v||(v=v||Hn.units[t]||b,l===i.length&&(i+=v,a.e+=v)),b!==v&&(h=Ni(e,t,m,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:h,c:p-h,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Fb:Bb;return eb.test(i)&&(a.e=0),this._pt=a,a},tg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},d2=function(e){var t=e.split(" "),r=t[0],i=t[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),t[0]=tg[r]||r,t[1]=tg[i]||i,t.join(" ")},f2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var r=t.t,i=r.style,o=t.u,s=r._gsap,a,l,c;if(o==="all"||o===!0)i.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],ri[a]&&(l=1,a=a==="transformOrigin"?wn:Tt),xo(r,a);l&&(xo(r,Tt),s&&(s.svg&&r.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Na(r,1),s.uncache=1,zb(i)))}},dc={clearProps:function(e,t,r,i,o){if(o.data!=="isFromStart"){var s=e._pt=new En(e._pt,t,r,0,0,f2);return s.u=i,s.pr=-10,s.tween=o,e._props.push(r),1}}},Ua=[1,0,0,1,0,0],$b={},Xb=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ng=function(e){var t=Dr(e,Tt);return Xb(t)?Ua:t.substr(7).match(Q_).map(kt)},yh=function(e,t){var r=e._gsap||ho(e),i=e.style,o=ng(e),s,a,l,c;return r.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?Ua:o):(o===Ua&&!e.offsetParent&&e!==ps&&!r.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ps.appendChild(e)),o=ng(e),l?i.display=l:xo(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):ps.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},uf=function(e,t,r,i,o,s){var a=e._gsap,l=o||yh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],_=l[1],m=l[2],g=l[3],p=l[4],x=l[5],v=t.split(" "),b=parseFloat(v[0])||0,T=parseFloat(v[1])||0,R,A,P,y;r?l!==Ua&&(A=h*g-_*m)&&(P=b*(g/A)+T*(-m/A)+(m*x-g*p)/A,y=b*(-_/A)+T*(h/A)-(h*x-_*p)/A,b=P,T=y):(R=Gb(e),b=R.x+(~v[0].indexOf("%")?b/100*R.width:b),T=R.y+(~(v[1]||v[0]).indexOf("%")?T/100*R.height:T)),i||i!==!1&&a.smooth?(p=b-c,x=T-u,a.xOffset=d+(p*h+x*m)-p,a.yOffset=f+(p*_+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!r,e.style[wn]="0px 0px",s&&(Ti(s,a,"xOrigin",c,b),Ti(s,a,"yOrigin",u,T),Ti(s,a,"xOffset",d,a.xOffset),Ti(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+T)},Na=function(e,t){var r=e._gsap||new Rb(e);if("x"in r&&!t&&!r.uncache)return r;var i=e.style,o=r.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=Dr(e,wn)||"0",u,d,f,h,_,m,g,p,x,v,b,T,R,A,P,y,M,k,O,U,Y,J,V,W,z,he,pe,_e,Me,Ue,Q,fe;return u=d=f=m=g=p=x=v=b=0,h=_=1,r.svg=!!(e.getCTM&&Wb(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Tt]!=="none"?l[Tt]:"")),i.scale=i.rotate=i.translate="none"),A=yh(e,r.svg),r.svg&&(r.uncache?(z=e.getBBox(),c=r.xOrigin-z.x+"px "+(r.yOrigin-z.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),uf(e,W||c,!!W||r.originIsAbsolute,r.smooth!==!1,A)),T=r.xOrigin||0,R=r.yOrigin||0,A!==Ua&&(k=A[0],O=A[1],U=A[2],Y=A[3],u=J=A[4],d=V=A[5],A.length===6?(h=Math.sqrt(k*k+O*O),_=Math.sqrt(Y*Y+U*U),m=k||O?Wo(O,k)*ro:0,x=U||Y?Wo(U,Y)*ro+m:0,x&&(_*=Math.abs(Math.cos(x*ms))),r.svg&&(u-=T-(T*k+R*U),d-=R-(T*O+R*Y))):(fe=A[6],Ue=A[7],pe=A[8],_e=A[9],Me=A[10],Q=A[11],u=A[12],d=A[13],f=A[14],P=Wo(fe,Me),g=P*ro,P&&(y=Math.cos(-P),M=Math.sin(-P),W=J*y+pe*M,z=V*y+_e*M,he=fe*y+Me*M,pe=J*-M+pe*y,_e=V*-M+_e*y,Me=fe*-M+Me*y,Q=Ue*-M+Q*y,J=W,V=z,fe=he),P=Wo(-U,Me),p=P*ro,P&&(y=Math.cos(-P),M=Math.sin(-P),W=k*y-pe*M,z=O*y-_e*M,he=U*y-Me*M,Q=Y*M+Q*y,k=W,O=z,U=he),P=Wo(O,k),m=P*ro,P&&(y=Math.cos(P),M=Math.sin(P),W=k*y+O*M,z=J*y+V*M,O=O*y-k*M,V=V*y-J*M,k=W,J=z),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),h=kt(Math.sqrt(k*k+O*O+U*U)),_=kt(Math.sqrt(V*V+fe*fe)),P=Wo(J,V),x=Math.abs(P)>2e-4?P*ro:0,b=Q?1/(Q<0?-Q:Q):0),r.svg&&(W=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!Xb(Dr(e,Tt)),W&&e.setAttribute("transform",W))),Math.abs(x)>90&&Math.abs(x)<270&&(o?(h*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||r.uncache,r.x=u-((r.xPercent=u&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+s,r.y=d-((r.yPercent=d&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+s,r.z=f+s,r.scaleX=kt(h),r.scaleY=kt(_),r.rotation=kt(m)+a,r.rotationX=kt(g)+a,r.rotationY=kt(p)+a,r.skewX=x+a,r.skewY=v+a,r.transformPerspective=b+s,(r.zOrigin=parseFloat(c.split(" ")[2])||!t&&r.zOrigin||0)&&(i[wn]=fc(c)),r.xOffset=r.yOffset=0,r.force3D=Hn.force3D,r.renderTransform=r.svg?p2:Vb?jb:h2,r.uncache=0,r},fc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vu=function(e,t,r){var i=tn(t);return kt(parseFloat(t)+parseFloat(Ni(e,"x",r+"px",i)))+i},h2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jb(e,t)},Qi="0deg",Ws="0px",eo=") ",jb=function(e,t){var r=t||this,i=r.xPercent,o=r.yPercent,s=r.x,a=r.y,l=r.z,c=r.rotation,u=r.rotationY,d=r.rotationX,f=r.skewX,h=r.skewY,_=r.scaleX,m=r.scaleY,g=r.transformPerspective,p=r.force3D,x=r.target,v=r.zOrigin,b="",T=p==="auto"&&e&&e!==1||p===!0;if(v&&(d!==Qi||u!==Qi)){var R=parseFloat(u)*ms,A=Math.sin(R),P=Math.cos(R),y;R=parseFloat(d)*ms,y=Math.cos(R),s=Vu(x,s,A*y*-v),a=Vu(x,a,-Math.sin(R)*-v),l=Vu(x,l,P*y*-v+v)}g!==Ws&&(b+="perspective("+g+eo),(i||o)&&(b+="translate("+i+"%, "+o+"%) "),(T||s!==Ws||a!==Ws||l!==Ws)&&(b+=l!==Ws||T?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+eo),c!==Qi&&(b+="rotate("+c+eo),u!==Qi&&(b+="rotateY("+u+eo),d!==Qi&&(b+="rotateX("+d+eo),(f!==Qi||h!==Qi)&&(b+="skew("+f+", "+h+eo),(_!==1||m!==1)&&(b+="scale("+_+", "+m+eo),x.style[Tt]=b||"translate(0, 0)"},p2=function(e,t){var r=t||this,i=r.xPercent,o=r.yPercent,s=r.x,a=r.y,l=r.rotation,c=r.skewX,u=r.skewY,d=r.scaleX,f=r.scaleY,h=r.target,_=r.xOrigin,m=r.yOrigin,g=r.xOffset,p=r.yOffset,x=r.forceCSS,v=parseFloat(s),b=parseFloat(a),T,R,A,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ms,c*=ms,T=Math.cos(l)*d,R=Math.sin(l)*d,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=ms,y=Math.tan(c-u),y=Math.sqrt(1+y*y),A*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),T*=y,R*=y)),T=kt(T),R=kt(R),A=kt(A),P=kt(P)):(T=d,P=f,R=A=0),(v&&!~(s+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(v=Ni(h,"x",s,"px"),b=Ni(h,"y",a,"px")),(_||m||g||p)&&(v=kt(v+_-(_*T+m*A)+g),b=kt(b+m-(_*R+m*P)+p)),(i||o)&&(y=h.getBBox(),v=kt(v+i/100*y.width),b=kt(b+o/100*y.height)),y="matrix("+T+","+R+","+A+","+P+","+v+","+b+")",h.setAttribute("transform",y),x&&(h.style[Tt]=y)},m2=function(e,t,r,i,o){var s=360,a=Xt(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?ro:1),c=l-i,u=i+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-360)),d==="cw"&&c<0?c=(c+s*Km)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*Km)%s-~~(c/s)*s)),e._pt=f=new En(e._pt,t,r,i,c,JR),f.e=u,f.u="deg",e._props.push(r),f},rg=function(e,t){for(var r in t)e[r]=t[r];return e},g2=function(e,t,r){var i=rg({},r._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=r.style,a,l,c,u,d,f,h,_;i.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),s[Tt]=t,a=Na(r,1),xo(r,Tt),r.setAttribute("transform",c)):(c=getComputedStyle(r)[Tt],s[Tt]=t,a=Na(r,1),s[Tt]=c);for(l in ri)c=i[l],u=a[l],c!==u&&o.indexOf(l)<0&&(h=tn(c),_=tn(u),d=h!==_?Ni(r,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new En(e._pt,a,l,d,f-d,af),e._pt.u=_||0,e._props.push(l));rg(a,i)};Mn("padding,margin,Width,Radius",function(n,e){var t="Top",r="Right",i="Bottom",o="Left",s=(e<3?[t,r,i,o]:[t+o,t+r,i+r,i+o]).map(function(a){return e<2?n+a:"border"+a+n});dc[e>1?"border"+n:n]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=s.map(function(_){return Yr(a,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},s.forEach(function(_,m){return h[_]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(l,h,d)}});var Yb={name:"css",register:cf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,i,o){var s=this._props,a=e.style,l=r.vars.startAt,c,u,d,f,h,_,m,g,p,x,v,b,T,R,A,P;_h||cf(),this.styles=this.styles||Hb(e),P=this.styles.props,this.tween=r;for(m in t)if(m!=="autoRound"&&(u=t[m],!(kn[m]&&Pb(m,t,r,i,e,o)))){if(h=typeof u,_=dc[m],h==="function"&&(u=u.call(r,i,e,o),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=La(u)),_)_(this,e,m,u,r)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",ki.lastIndex=0,ki.test(c)||(g=tn(c),p=tn(u)),p?g!==p&&(c=Ni(e,m,c,p)+p):g&&(u+=g),this.add(a,"setProperty",c,u,i,o,0,0,m),s.push(m),P.push(m,0,a[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(r,i,e,o):l[m],Xt(c)&&~c.indexOf("random(")&&(c=La(c)),tn(c+"")||c==="auto"||(c+=Hn.units[m]||tn(Yr(e,m))||""),(c+"").charAt(1)==="="&&(c=Yr(e,m))):c=Yr(e,m),f=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),m in Tr&&(m==="autoAlpha"&&(f===1&&Yr(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),Ti(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=Tr[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in ri,v){if(this.styles.save(m),b||(T=e._gsap,T.renderTransform&&!t.parseTransform||Na(e,t.parseTransform),R=t.smoothOrigin!==!1&&T.smooth,b=this._pt=new En(this._pt,a,Tt,0,1,T.renderTransform,T,0,-1),b.dep=1),m==="scale")this._pt=new En(this._pt,T,"scaleY",T.scaleY,(x?hs(T.scaleY,x+d):d)-T.scaleY||0,af),this._pt.u=0,s.push("scaleY",m),m+="X";else if(m==="transformOrigin"){P.push(wn,0,a[wn]),u=d2(u),T.svg?uf(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&Ti(this,T,"zOrigin",T.zOrigin,p),Ti(this,a,m,fc(c),fc(u)));continue}else if(m==="svgOrigin"){uf(e,u,1,R,0,this);continue}else if(m in $b){m2(this,T,m,f,x?hs(f,x+u):u);continue}else if(m==="smoothOrigin"){Ti(this,T,"smooth",T.smooth,u);continue}else if(m==="force3D"){T[m]=u;continue}else if(m==="transform"){g2(this,u,e);continue}}else m in a||(m=Ds(m)||m);if(v||(d||d===0)&&(f||f===0)&&!ZR.test(u)&&m in a)g=(c+"").substr((f+"").length),d||(d=0),p=tn(u)||(m in Hn.units?Hn.units[m]:g),g!==p&&(f=Ni(e,m,c,p)),this._pt=new En(this._pt,v?T:a,m,f,(x?hs(f,x+d):d)-f,!v&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?e2:af),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=QR);else if(m in a)u2.call(this,e,m,c,x?x+u:u);else if(m in e)this.add(e,m,c||e[m],x?x+u:u,i,o);else if(m!=="parseTransform"){lh(m,u);continue}v||(m in a?P.push(m,0,a[m]):typeof e[m]=="function"?P.push(m,2,e[m]()):P.push(m,1,c||e[m])),s.push(m)}}A&&Ub(this)},render:function(e,t){if(t.tween._time||!bh())for(var r=t._pt;r;)r.r(e,r.d),r=r._next;else t.styles.revert()},get:Yr,aliases:Tr,getSetter:function(e,t,r){var i=Tr[t];return i&&i.indexOf(",")<0&&(t=i),t in ri&&t!==wn&&(e._gsap.x||Yr(e,"x"))?r&&qm===r?t==="scale"?i2:r2:(qm=r||{})&&(t==="scale"?o2:s2):e.style&&!oh(e.style[t])?t2:~t.indexOf("-")?n2:mh(e,t)},core:{_removeProperty:xo,_getMatrix:yh}};Cn.utils.checkPrefix=Ds;Cn.core.getStyleSaver=Hb;(function(n,e,t,r){var i=Mn(n+","+e+","+t,function(o){ri[o]=1});Mn(e,function(o){Hn.units[o]="deg",$b[o]=1}),Tr[i[13]]=n+","+e,Mn(r,function(o){var s=o.split(":");Tr[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Hn.units[n]="px"});Cn.registerPlugin(Yb);var qb=Cn.registerPlugin(Yb)||Cn;qb.core.Tween;/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Kb;const Oc=n=>Kb=n,Zb=Symbol();function df(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var da;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(da||(da={}));function _2(){const n=jg(!0),e=n.run(()=>Un({}));let t=[],r=[];const i=Pf({install(o){Oc(i),i._a=o,o.provide(Zb,i),o.config.globalProperties.$pinia=i,r.forEach(s=>t.push(s)),r=[]},use(o){return this._a?t.push(o):r.push(o),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return i}const Jb=()=>{};function ig(n,e,t,r=Jb){n.push(e);const i=()=>{const o=n.indexOf(e);o>-1&&(n.splice(o,1),r())};return!t&&Yg()&&$v(i),i}function $o(n,...e){n.slice().forEach(t=>{t(...e)})}const b2=n=>n(),og=Symbol(),Gu=Symbol();function ff(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],i=n[t];df(i)&&df(r)&&n.hasOwnProperty(t)&&!Ct(r)&&!Ai(r)?n[t]=ff(i,r):n[t]=r}return n}const v2=Symbol();function y2(n){return!df(n)||!n.hasOwnProperty(v2)}const{assign:mi}=Object;function x2(n){return!!(Ct(n)&&n.effect)}function S2(n,e,t,r){const{state:i,actions:o,getters:s}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=i?i():{});const u=py(t.state.value[n]);return mi(u,o,Object.keys(s||{}).reduce((d,f)=>(d[f]=Pf(yn(()=>{Oc(t);const h=t._s.get(n);return s[f].call(h,h)})),d),{}))}return l=Qb(n,c,e,t,r,!0),l}function Qb(n,e,t={},r,i,o){let s;const a=mi({actions:{}},t),l={deep:!0};let c,u,d=[],f=[],h;const _=r.state.value[n];!o&&!_&&(r.state.value[n]={}),Un({});let m;function g(P){let y;c=u=!1,typeof P=="function"?(P(r.state.value[n]),y={type:da.patchFunction,storeId:n,events:h}):(ff(r.state.value[n],P),y={type:da.patchObject,payload:P,storeId:n,events:h});const M=m=Symbol();xc().then(()=>{m===M&&(c=!0)}),u=!0,$o(d,y,r.state.value[n])}const p=o?function(){const{state:y}=t,M=y?y():{};this.$patch(k=>{mi(k,M)})}:Jb;function x(){s.stop(),d=[],f=[],r._s.delete(n)}const v=(P,y="")=>{if(og in P)return P[Gu]=y,P;const M=function(){Oc(r);const k=Array.from(arguments),O=[],U=[];function Y(W){O.push(W)}function J(W){U.push(W)}$o(f,{args:k,name:M[Gu],store:T,after:Y,onError:J});let V;try{V=P.apply(this&&this.$id===n?this:T,k)}catch(W){throw $o(U,W),W}return V instanceof Promise?V.then(W=>($o(O,W),W)).catch(W=>($o(U,W),Promise.reject(W))):($o(O,V),V)};return M[og]=!0,M[Gu]=y,M},b={_p:r,$id:n,$onAction:ig.bind(null,f),$patch:g,$reset:p,$subscribe(P,y={}){const M=ig(d,P,y.detached,()=>k()),k=s.run(()=>Nn(()=>r.state.value[n],O=>{(y.flush==="sync"?u:c)&&P({storeId:n,type:da.direct,events:h},O)},mi({},l,y)));return M},$dispose:x},T=Mo(b);r._s.set(n,T);const A=(r._a&&r._a.runWithContext||b2)(()=>r._e.run(()=>(s=jg()).run(()=>e({action:v}))));for(const P in A){const y=A[P];if(Ct(y)&&!x2(y)||Ai(y))o||(_&&y2(y)&&(Ct(y)?y.value=_[P]:ff(y,_[P])),r.state.value[n][P]=y);else if(typeof y=="function"){const M=v(y,P);A[P]=M,a.actions[P]=y}}return mi(T,A),mi(Ze(T),A),Object.defineProperty(T,"$state",{get:()=>r.state.value[n],set:P=>{g(y=>{mi(y,P)})}}),r._p.forEach(P=>{mi(T,s.run(()=>P({store:T,app:r._a,pinia:r,options:a})))}),_&&o&&t.hydrate&&t.hydrate(T.$state,_),c=!0,u=!0,T}/*! #__NO_SIDE_EFFECTS__ */function M2(n,e,t){let r;const i=typeof e=="function";r=i?t:e;function o(s,a){const l=qy();return s=s||(l?Ar(Zb,null):null),s&&Oc(s),s=Kb,s._s.has(n)||(i?Qb(n,e,r,s):S2(n,r,s)),s._s.get(n)}return o.$id=n,o}function ev(n){const e=Ze(n),t={};for(const r in e){const i=e[r];i.effect?t[r]=yn({get:()=>n[r],set(o){n[r]=o}}):(Ct(i)||Ai(i))&&(t[r]=_y(n,r))}return t}const tv=M2("controls",()=>{const n=Un(!0),e=Un(!0),t=Un(!0),r=Un(!0);return{isAnimationActive:n,isZoomActive:e,isRotationActive:t,isPanActive:r,toggleAnimation:l=>{n.value=l},toggleZoom:l=>{e.value=l},toggleRotation:l=>{t.value=l},togglePan:l=>{r.value=l}}});var E2=Object.defineProperty,sg=Object.getOwnPropertySymbols,w2=Object.prototype.hasOwnProperty,T2=Object.prototype.propertyIsEnumerable,ag=(n,e,t)=>e in n?E2(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,C2=(n,e)=>{for(var t in e||(e={}))w2.call(e,t)&&ag(n,t,e[t]);if(sg)for(var t of sg(e))T2.call(e,t)&&ag(n,t,e[t]);return n};function Co(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&typeof n=="object"&&Object.keys(n).length===0}function xh(n){return!!(n&&n.constructor&&n.call&&n.apply)}function _t(n){return!Co(n)}function Ir(n,e=!0){return n instanceof Object&&n.constructor===Object&&(e||Object.keys(n).length!==0)}function Zn(n,...e){return xh(n)?n(...e):n}function Tn(n,e=!0){return typeof n=="string"&&(e||n!=="")}function ar(n){return Tn(n)?n.replace(/(-|_)/g,"").toLowerCase():n}function Sh(n,e="",t={}){const r=ar(e).split("."),i=r.shift();return i?Ir(n)?Sh(Zn(n[Object.keys(n).find(o=>ar(o)===i)||""],t),r.join("."),t):void 0:Zn(n,t)}function Uc(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}function A2(n){return _t(n)&&!isNaN(n)}function Qr(n,e){if(e){const t=e.test(n);return e.lastIndex=0,t}return!1}function nv(...n){const e=(t={},r={})=>{const i=C2({},t);return Object.keys(r).forEach(o=>{Ir(r[o])&&o in t&&Ir(t[o])?i[o]=e(t[o],r[o]):i[o]=r[o]}),i};return n.reduce((t,r,i)=>i===0?r:e(t,r),{})}function fa(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function R2(n){return Tn(n,!1)?n[0].toUpperCase()+n.slice(1):n}function rv(n){return Tn(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,t)=>t===0?e:"-"+e.toLowerCase()).toLowerCase():n}function lg(n){return Tn(n)?n.replace(/[A-Z]/g,(e,t)=>t===0?e:"."+e.toLowerCase()).toLowerCase():n}function iv(){const n=new Map;return{on(e,t){let r=n.get(e);return r?r.push(t):r=[t],n.set(e,r),this},off(e,t){let r=n.get(e);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(e,t){let r=n.get(e);r&&r.slice().map(i=>{i(t)})},clear(){n.clear()}}}var P2=Object.defineProperty,D2=Object.defineProperties,k2=Object.getOwnPropertyDescriptors,hc=Object.getOwnPropertySymbols,ov=Object.prototype.hasOwnProperty,sv=Object.prototype.propertyIsEnumerable,cg=(n,e,t)=>e in n?P2(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,lr=(n,e)=>{for(var t in e||(e={}))ov.call(e,t)&&cg(n,t,e[t]);if(hc)for(var t of hc(e))sv.call(e,t)&&cg(n,t,e[t]);return n},Wu=(n,e)=>D2(n,k2(e)),Wr=(n,e)=>{var t={};for(var r in n)ov.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&hc)for(var r of hc(n))e.indexOf(r)<0&&sv.call(n,r)&&(t[r]=n[r]);return t};function L2(...n){return nv(...n)}var I2=iv(),sr=I2;function ug(n,e){Uc(n)?n.push(...e||[]):Ir(n)&&Object.assign(n,e)}function O2(n){return Ir(n)&&n.hasOwnProperty("value")&&n.hasOwnProperty("type")?n.value:n}function U2(n){return n.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function hf(n="",e=""){return U2(`${Tn(n,!1)&&Tn(e,!1)?`${n}-`:n}${e}`)}function av(n="",e=""){return`--${hf(n,e)}`}function N2(n=""){const e=(n.match(/{/g)||[]).length,t=(n.match(/}/g)||[]).length;return(e+t)%2!==0}function lv(n,e="",t="",r=[],i){if(Tn(n)){const o=/{([^}]*)}/g,s=n.trim();if(N2(s))return;if(Qr(s,o)){const a=s.replaceAll(o,u=>{const f=u.replace(/{|}/g,"").split(".").filter(h=>!r.some(_=>Qr(h,_)));return`var(${av(t,rv(f.join("-")))}${_t(i)?`, ${i}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return Qr(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(A2(n))return n}function B2(n,e,t){Tn(e,!1)&&n.push(`${e}:${t};`)}function Ko(n,e){return n?`${n}{${e}}`:""}var ha=(...n)=>F2(dt.getTheme(),...n),F2=(n={},e,t,r)=>{if(e){const{variable:i,options:o}=dt.defaults||{},{prefix:s,transform:a}=(n==null?void 0:n.options)||o||{},c=Qr(e,/{([^}]*)}/g)?e:`{${e}}`;return r==="value"||Co(r)&&a==="strict"?dt.getTokenValue(e):lv(c,void 0,s,[i.excludedKeyRegex],t)}return""};function z2(n,e={}){const t=dt.defaults.variable,{prefix:r=t.prefix,selector:i=t.selector,excludedKeyRegex:o=t.excludedKeyRegex}=e,s=(c,u="")=>Object.entries(c).reduce((d,[f,h])=>{const _=Qr(f,o)?hf(u):hf(u,rv(f)),m=O2(h);if(Ir(m)){const{variables:g,tokens:p}=s(m,_);ug(d.tokens,p),ug(d.variables,g)}else d.tokens.push((r?_.replace(`${r}-`,""):_).replaceAll("-",".")),B2(d.variables,av(_),lv(m,_,r,[o]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(n,r);return{value:a,tokens:l,declarations:a.join(""),css:Ko(i,a.join(""))}}var or={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(n){return{type:"class",selector:n,matched:this.pattern.test(n.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(n){return{type:"attr",selector:`:root${n}`,matched:this.pattern.test(n.trim())}}},media:{pattern:/^@media (.*)$/,resolve(n){return{type:"media",selector:`${n}{:root{[CSS]}}`,matched:this.pattern.test(n.trim())}}},system:{pattern:/^system$/,resolve(n){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(n.trim())}}},custom:{resolve(n){return{type:"custom",selector:n,matched:!0}}}},resolve(n){const e=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[n].flat().map(t=>{var r;return(r=e.map(i=>i.resolve(t)).find(i=>i.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(n,e){return z2(n,{prefix:e==null?void 0:e.prefix})},getCommon({name:n="",theme:e={},params:t,set:r,defaults:i}){var o,s,a,l,c,u,d;const{preset:f,options:h}=e;let _,m,g,p,x,v,b;if(_t(f)&&h.transform!=="strict"){const{primitive:T,semantic:R,extend:A}=f,P=R||{},{colorScheme:y}=P,M=Wr(P,["colorScheme"]),k=A||{},{colorScheme:O}=k,U=Wr(k,["colorScheme"]),Y=y||{},{dark:J}=Y,V=Wr(Y,["dark"]),W=O||{},{dark:z}=W,he=Wr(W,["dark"]),pe=_t(T)?this._toVariables({primitive:T},h):{},_e=_t(M)?this._toVariables({semantic:M},h):{},Me=_t(V)?this._toVariables({light:V},h):{},Ue=_t(J)?this._toVariables({dark:J},h):{},Q=_t(U)?this._toVariables({semantic:U},h):{},fe=_t(he)?this._toVariables({light:he},h):{},ve=_t(z)?this._toVariables({dark:z},h):{},[N,se]=[(o=pe.declarations)!=null?o:"",pe.tokens],[oe,de]=[(s=_e.declarations)!=null?s:"",_e.tokens||[]],[Pe,D]=[(a=Me.declarations)!=null?a:"",Me.tokens||[]],[L,E]=[(l=Ue.declarations)!=null?l:"",Ue.tokens||[]],[re,K]=[(c=Q.declarations)!=null?c:"",Q.tokens||[]],[q,ne]=[(u=fe.declarations)!=null?u:"",fe.tokens||[]],[ce,te]=[(d=ve.declarations)!=null?d:"",ve.tokens||[]];_=this.transformCSS(n,N,"light","variable",h,r,i),m=se;const w=this.transformCSS(n,`${oe}${Pe}`,"light","variable",h,r,i),S=this.transformCSS(n,`${L}`,"dark","variable",h,r,i);g=`${w}${S}`,p=[...new Set([...de,...D,...E])];const I=this.transformCSS(n,`${re}${q}color-scheme:light`,"light","variable",h,r,i),j=this.transformCSS(n,`${ce}color-scheme:dark`,"dark","variable",h,r,i);x=`${I}${j}`,v=[...new Set([...K,...ne,...te])],b=Zn(f.css,{dt:ha})}return{primitive:{css:_,tokens:m},semantic:{css:g,tokens:p},global:{css:x,tokens:v},style:b}},getPreset({name:n="",preset:e={},options:t,params:r,set:i,defaults:o,selector:s}){var a,l,c;let u,d,f;if(_t(e)&&t.transform!=="strict"){const h=n.replace("-directive",""),_=e,{colorScheme:m,extend:g,css:p}=_,x=Wr(_,["colorScheme","extend","css"]),v=g||{},{colorScheme:b}=v,T=Wr(v,["colorScheme"]),R=m||{},{dark:A}=R,P=Wr(R,["dark"]),y=b||{},{dark:M}=y,k=Wr(y,["dark"]),O=_t(x)?this._toVariables({[h]:lr(lr({},x),T)},t):{},U=_t(P)?this._toVariables({[h]:lr(lr({},P),k)},t):{},Y=_t(A)?this._toVariables({[h]:lr(lr({},A),M)},t):{},[J,V]=[(a=O.declarations)!=null?a:"",O.tokens||[]],[W,z]=[(l=U.declarations)!=null?l:"",U.tokens||[]],[he,pe]=[(c=Y.declarations)!=null?c:"",Y.tokens||[]],_e=this.transformCSS(h,`${J}${W}`,"light","variable",t,i,o,s),Me=this.transformCSS(h,he,"dark","variable",t,i,o,s);u=`${_e}${Me}`,d=[...new Set([...V,...z,...pe])],f=Zn(p,{dt:ha})}return{css:u,tokens:d,style:f}},getPresetC({name:n="",theme:e={},params:t,set:r,defaults:i}){var o;const{preset:s,options:a}=e,l=(o=s==null?void 0:s.components)==null?void 0:o[n];return this.getPreset({name:n,preset:l,options:a,params:t,set:r,defaults:i})},getPresetD({name:n="",theme:e={},params:t,set:r,defaults:i}){var o;const s=n.replace("-directive",""),{preset:a,options:l}=e,c=(o=a==null?void 0:a.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:r,defaults:i})},applyDarkColorScheme(n){return!(n.darkModeSelector==="none"||n.darkModeSelector===!1)},getColorSchemeOption(n,e){var t;return this.applyDarkColorScheme(n)?this.regex.resolve(n.darkModeSelector===!0?e.options.darkModeSelector:(t=n.darkModeSelector)!=null?t:e.options.darkModeSelector):[]},getLayerOrder(n,e={},t,r){const{cssLayer:i}=e;return i?`@layer ${Zn(i.order||"primeui",t)}`:""},getCommonStyleSheet({name:n="",theme:e={},params:t,props:r={},set:i,defaults:o}){const s=this.getCommon({name:n,theme:e,params:t,set:i,defaults:o}),a=Object.entries(r).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u!=null&&u.css){const d=fa(u==null?void 0:u.css),f=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:n="",theme:e={},params:t,props:r={},set:i,defaults:o}){var s;const a={name:n,theme:e,params:t,set:i,defaults:o},l=(s=n.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(r).reduce((u,[d,f])=>u.push(`${d}="${f}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${n}-variables" ${c}>${fa(l)}</style>`:""},createTokens(n={},e,t="",r="",i={}){return Object.entries(n).forEach(([o,s])=>{const a=Qr(o,e.variable.excludedKeyRegex)?t:t?`${t}.${lg(o)}`:lg(o),l=r?`${r}.${o}`:o;Ir(s)?this.createTokens(s,e,a,l,i):(i[a]||(i[a]={paths:[],computed(c,u={}){var d,f;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(f=this.paths.find(h=>h.scheme===c))==null?void 0:f.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),i[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){const d=/{([^}]*)}/g;let f=s;if(u.name=this.path,u.binding||(u.binding={}),Qr(s,d)){const _=s.trim().replaceAll(d,p=>{var x;const v=p.replace(/{|}/g,""),b=(x=i[v])==null?void 0:x.computed(c,u);return Uc(b)&&b.length===2?`light-dark(${b[0].value},${b[1].value})`:b==null?void 0:b.value}),m=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,g=/var\([^)]+\)/g;f=Qr(_.replace(g,"0"),m)?`calc(${_})`:_}return Co(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:f.includes("undefined")?void 0:f}}}))}),i},getTokenValue(n,e,t){var r;const o=(l=>l.split(".").filter(u=>!Qr(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(r=n[o])==null?void 0:r.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{const u=c,{colorScheme:d}=u,f=Wr(u,["colorScheme"]);return l[d]=f,l},void 0)},getSelectorRule(n,e,t,r){return t==="class"||t==="attr"?Ko(_t(e)?`${n}${e},${n} ${e}`:n,r):Ko(n,_t(e)?Ko(e,r):r)},transformCSS(n,e,t,r,i={},o,s,a){if(_t(e)){const{cssLayer:l}=i;if(r!=="style"){const c=this.getColorSchemeOption(i,s);e=t==="dark"?c.reduce((u,{type:d,selector:f})=>(_t(f)&&(u+=f.includes("[CSS]")?f.replace("[CSS]",e):this.getSelectorRule(f,a,d,e)),u),""):Ko(a??":root",e)}if(l){const c={name:"primeui",order:"primeui"};Ir(l)&&(c.name=Zn(l.name,{name:n,type:r})),_t(c.name)&&(e=Ko(`@layer ${c.name}`,e),o==null||o.layerNames(c.name))}return e}return""}},dt={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(n={}){const{theme:e}=n;e&&(this._theme=Wu(lr({},e),{options:lr(lr({},this.defaults.options),e.options)}),this._tokens=or.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var n;return((n=this.theme)==null?void 0:n.preset)||{}},get options(){var n;return((n=this.theme)==null?void 0:n.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(n){this.update({theme:n}),sr.emit("theme:change",n)},getPreset(){return this.preset},setPreset(n){this._theme=Wu(lr({},this.theme),{preset:n}),this._tokens=or.createTokens(n,this.defaults),this.clearLoadedStyleNames(),sr.emit("preset:change",n),sr.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(n){this._theme=Wu(lr({},this.theme),{options:n}),this.clearLoadedStyleNames(),sr.emit("options:change",n),sr.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(n){this._layerNames.add(n)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(n){return this._loadedStyleNames.has(n)},setLoadedStyleName(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(n){return or.getTokenValue(this.tokens,n,this.defaults)},getCommon(n="",e){return or.getCommon({name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return or.getPresetC(t)},getDirective(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return or.getPresetD(t)},getCustomPreset(n="",e,t,r){const i={name:n,preset:e,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return or.getPreset(i)},getLayerOrderCSS(n=""){return or.getLayerOrder(n,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(n="",e,t="style",r){return or.transformCSS(n,e,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(n="",e,t={}){return or.getCommonStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(n,e,t={}){return or.getStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(n){this._loadingStyles.add(n)},onStyleUpdated(n){this._loadingStyles.add(n)},onStyleLoaded(n,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),sr.emit(`theme:${e}:load`,n),!this._loadingStyles.size&&sr.emit("theme:load"))}};function H2(n,e){return n?n.classList?n.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(n.className):!1}function Mh(n,e){if(n&&e){const t=r=>{H2(n,r)||(n.classList?n.classList.add(r):n.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function V2(){return window.innerWidth-document.documentElement.offsetWidth}function cv(n){for(const e of document==null?void 0:document.styleSheets)try{for(const t of e==null?void 0:e.cssRules)for(const r of t==null?void 0:t.style)if(n.test(r))return{name:r,value:t.style.getPropertyValue(r).trim()}}catch{}return null}function dg(n="p-overflow-hidden"){const e=cv(/-scrollbar-width$/);e!=null&&e.name&&document.body.style.setProperty(e.name,V2()+"px"),Mh(document.body,n)}function Yl(n,e){if(n&&e){const t=r=>{n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function fg(n="p-overflow-hidden"){const e=cv(/-scrollbar-width$/);e!=null&&e.name&&document.body.style.removeProperty(e.name),Yl(document.body,n)}function G2(){let n=window,e=document,t=e.documentElement,r=e.getElementsByTagName("body")[0],i=n.innerWidth||t.clientWidth||r.clientWidth,o=n.innerHeight||t.clientHeight||r.clientHeight;return{width:i,height:o}}function W2(n,e){n&&(typeof e=="string"?n.style.cssText=e:Object.entries(e).forEach(([t,r])=>n.style[t]=r))}function uv(n,e){return n instanceof HTMLElement?n.offsetWidth:0}function Is(n){return typeof HTMLElement=="object"?n instanceof HTMLElement:n&&typeof n=="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}function pc(n,e={}){if(Is(n)){const t=(r,i)=>{var o,s;const a=(o=n==null?void 0:n.$attrs)!=null&&o[r]?[(s=n==null?void 0:n.$attrs)==null?void 0:s[r]]:[];return[i].flat().reduce((l,c)=>{if(c!=null){const u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){const d=Array.isArray(c)?t(r,c):Object.entries(c).map(([f,h])=>r==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},a)};Object.entries(e).forEach(([r,i])=>{if(i!=null){const o=r.match(/^on(.+)/);o?n.addEventListener(o[1].toLowerCase(),i):r==="p-bind"||r==="pBind"?pc(n,i):(i=r==="class"?[...new Set(t("class",i))].join(" ").trim():r==="style"?t("style",i).join(";").trim():i,(n.$attrs=n.$attrs||{})&&(n.$attrs[r]=i),n.setAttribute(r,i))}})}}function dv(n,e={},...t){{const r=document.createElement(n);return pc(r,e),r.append(...t),r}}function $2(n,e){return Is(n)?Array.from(n.querySelectorAll(e)):[]}function X2(n,e){return Is(n)?n.matches(e)?n:n.querySelector(e):null}function ns(n,e){n&&document.activeElement!==n&&n.focus(e)}function j2(n,e){if(Is(n)){const t=n.getAttribute(e);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function fv(n,e=""){let t=$2(n,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),r=[];for(let i of t)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&r.push(i);return r}function $s(n,e){const t=fv(n,e);return t.length>0?t[0]:null}function hg(n){if(n){let e=n.offsetHeight,t=getComputedStyle(n);return e-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),e}return 0}function Y2(n){if(n){let e=n.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function q2(n,e){const t=fv(n,e);return t.length>0?t[t.length-1]:null}function K2(n){if(n){let e=n.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function hv(n,e){return n?n.offsetHeight:0}function Z2(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&Y2(n))}function pg(n){if(n){let e=n.offsetWidth,t=getComputedStyle(n);return e-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),e}return 0}function Eh(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function mg(n,e=""){return Is(n)?n.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}function pv(n,e="",t){Is(n)&&t!==null&&t!==void 0&&n.setAttribute(e,t)}var Ll={};function wh(n="pui_id_"){return Ll.hasOwnProperty(n)||(Ll[n]=0),Ll[n]++,`${n}${Ll[n]}`}var Si={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function Ba(n){"@babel/helpers - typeof";return Ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ba(n)}function gg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function _g(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?gg(Object(t),!0).forEach(function(r){J2(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):gg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function J2(n,e,t){return(e=Q2(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Q2(n){var e=eP(n,"string");return Ba(e)=="symbol"?e:e+""}function eP(n,e){if(Ba(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ba(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function tP(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;e_()?Ec(n):e?n():xc(n)}var nP=0;function rP(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=Un(!1),r=Un(n),i=Un(null),o=Eh()?window.document:void 0,s=e.document,a=s===void 0?o:s,l=e.immediate,c=l===void 0?!0:l,u=e.manual,d=u===void 0?!1:u,f=e.name,h=f===void 0?"style_".concat(++nP):f,_=e.id,m=_===void 0?void 0:_,g=e.media,p=g===void 0?void 0:g,x=e.nonce,v=x===void 0?void 0:x,b=e.first,T=b===void 0?!1:b,R=e.onMounted,A=R===void 0?void 0:R,P=e.onUpdated,y=P===void 0?void 0:P,M=e.onLoad,k=M===void 0?void 0:M,O=e.props,U=O===void 0?{}:O,Y=function(){},J=function(z){var he=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var pe=_g(_g({},U),he),_e=pe.name||h,Me=pe.id||m,Ue=pe.nonce||v;i.value=a.querySelector('style[data-primevue-style-id="'.concat(_e,'"]'))||a.getElementById(Me)||a.createElement("style"),i.value.isConnected||(r.value=z||n,pc(i.value,{type:"text/css",id:Me,media:p,nonce:Ue}),T?a.head.prepend(i.value):a.head.appendChild(i.value),pv(i.value,"data-primevue-style-id",_e),pc(i.value,pe),i.value.onload=function(Q){return k==null?void 0:k(Q,{name:_e})},A==null||A(_e)),!t.value&&(Y=Nn(r,function(Q){i.value.textContent=Q,y==null||y(_e)},{immediate:!0}),t.value=!0)}},V=function(){!a||!t.value||(Y(),Z2(i.value)&&a.head.removeChild(i.value),t.value=!1)};return c&&!d&&tP(J),{id:m,name:h,el:i,css:r,unload:V,load:J,isLoaded:Cf(t)}}function Fa(n){"@babel/helpers - typeof";return Fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fa(n)}function bg(n,e){return aP(n)||sP(n,e)||oP(n,e)||iP()}function iP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oP(n,e){if(n){if(typeof n=="string")return vg(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?vg(n,e):void 0}}function vg(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function sP(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e!==0)for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function aP(n){if(Array.isArray(n))return n}function yg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function $u(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?yg(Object(t),!0).forEach(function(r){lP(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):yg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function lP(n,e,t){return(e=cP(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function cP(n){var e=uP(n,"string");return Fa(e)=="symbol"?e:e+""}function uP(n,e){if(Fa(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Fa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var dP=function(e){var t=e.dt;return`
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
`)},fP=function(e){var t=e.dt;return`
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
`)},hP={},pP={},vt={name:"base",css:fP,theme:dP,classes:hP,inlineStyles:pP,load:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(o){return o},i=r(Zn(e,{dt:ha}));return _t(i)?rP(fa(i),$u({name:this.name},t)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.theme,t,function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return dt.transformCSS(t.name||e.name,"".concat(i).concat(r))})},getCommonTheme:function(e){return dt.getCommon(this.name,e)},getComponentTheme:function(e){return dt.getComponent(this.name,e)},getDirectiveTheme:function(e){return dt.getDirective(this.name,e)},getPresetTheme:function(e,t,r){return dt.getCustomPreset(this.name,e,t,r)},getLayerOrderThemeCSS:function(){return dt.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Zn(this.css,{dt:ha})||"",i=fa("".concat(r).concat(e)),o=Object.entries(t).reduce(function(s,a){var l=bg(a,2),c=l[0],u=l[1];return s.push("".concat(c,'="').concat(u,'"'))&&s},[]).join(" ");return _t(i)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(o,">").concat(i,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return dt.getCommonStyleSheet(this.name,e,t)},getThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[dt.getStyleSheet(this.name,e,t)];if(this.theme){var i=this.name==="base"?"global-style":"".concat(this.name,"-style"),o=Zn(this.theme,{dt:ha}),s=fa(dt.transformCSS(i,o)),a=Object.entries(t).reduce(function(l,c){var u=bg(c,2),d=u[0],f=u[1];return l.push("".concat(d,'="').concat(f,'"'))&&l},[]).join(" ");_t(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(i,'" ').concat(a,">").concat(s,"</style>"))}return r.join("")},extend:function(e){return $u($u({},this),{},{css:void 0,theme:void 0},e)}},xg=vt.extend({name:"common"});function za(n){"@babel/helpers - typeof";return za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},za(n)}function mP(n){return _v(n)||gP(n)||gv(n)||mv()}function gP(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Xs(n,e){return _v(n)||_P(n,e)||gv(n,e)||mv()}function mv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gv(n,e){if(n){if(typeof n=="string")return Sg(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Sg(n,e):void 0}}function Sg(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function _P(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function _v(n){if(Array.isArray(n))return n}function Mg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function qe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Mg(Object(t),!0).forEach(function(r){Zs(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Mg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Zs(n,e,t){return(e=bP(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function bP(n){var e=vP(n,"string");return za(e)=="symbol"?e:e+""}function vP(n,e){if(za(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(za(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Nc={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var t=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return t._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var e,t,r,i,o,s,a,l,c,u,d,f=(e=this.pt)===null||e===void 0?void 0:e._usept,h=f?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,_=f?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(i=_||h)===null||i===void 0||(i=i.hooks)===null||i===void 0||(o=i.onBeforeCreate)===null||o===void 0||o.call(i);var m=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,g=m?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,p=m?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=p||g)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(d=u.onBeforeCreate)===null||d===void 0||d.call(u),this.$attrSelector=wh("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=X2(this.$el,'[data-pc-name="'.concat(ar(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=qe({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),r==null||r()}},_mergeProps:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return xh(e)?e.apply(void 0,r):lt.apply(void 0,r)},_loadStyles:function(){var e=this,t=function(){Si.isStyleNameLoaded("base")||(vt.loadCSS(e.$styleOptions),e._loadGlobalStyles(),Si.setLoadedStyleName("base")),e._loadThemeStyles()};t(),this._themeChangeListener(t)},_loadCoreStyles:function(){var e,t;!Si.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name&&(xg.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Si.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);_t(e)&&vt.load(e,qe({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,t;if(!(this.isUnstyled||this.$theme==="none")){if(!dt.isStyleNameLoaded("common")){var r,i,o=((r=this.$style)===null||r===void 0||(i=r.getCommonTheme)===null||i===void 0?void 0:i.call(r))||{},s=o.primitive,a=o.semantic,l=o.global,c=o.style;vt.load(s==null?void 0:s.css,qe({name:"primitive-variables"},this.$styleOptions)),vt.load(a==null?void 0:a.css,qe({name:"semantic-variables"},this.$styleOptions)),vt.load(l==null?void 0:l.css,qe({name:"global-variables"},this.$styleOptions)),vt.loadTheme(qe({name:"global-style"},this.$styleOptions),c),dt.setLoadedStyleName("common")}if(!dt.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name){var u,d,f,h,_=((u=this.$style)===null||u===void 0||(d=u.getComponentTheme)===null||d===void 0?void 0:d.call(u))||{},m=_.css,g=_.style;(f=this.$style)===null||f===void 0||f.load(m,qe({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadTheme(qe({name:"".concat(this.$style.name,"-style")},this.$styleOptions),g),dt.setLoadedStyleName(this.$style.name)}if(!dt.isStyleNameLoaded("layer-order")){var p,x,v=(p=this.$style)===null||p===void 0||(x=p.getLayerOrderThemeCSS)===null||x===void 0?void 0:x.call(p);vt.load(v,qe({name:"layer-order",first:!0},this.$styleOptions)),dt.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var t,r,i,o=((t=this.$style)===null||t===void 0||(r=t.getPresetTheme)===null||r===void 0?void 0:r.call(t,e,"[".concat(this.$attrSelector,"]")))||{},s=o.css,a=(i=this.$style)===null||i===void 0?void 0:i.load(s,qe({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Si.clearLoadedStyleNames(),sr.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Sh(e,t,r)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!i[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,f=o?s?this._useGlobalPT(this._getPTClassValue,r,i):this._useDefaultPT(this._getPTClassValue,r,i):void 0,h=s?void 0:this._getPTSelf(t,this._getPTClassValue,r,qe(qe({},i),{},{global:f||{}})),_=this._getPTDatasets(r);return c||!c&&h?d?this._mergeProps(d,f,h,_):qe(qe(qe({},f),h),_):qe(qe({},h),_)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return lt(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i="data-pc-",o=r==="root"&&_t((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&qe(qe({},r==="root"&&qe(qe(Zs({},"".concat(i,"name"),ar(o?(t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]:this.$.type.name)),o&&Zs({},"".concat(i,"extend"),ar(this.$.type.name))),Eh()&&Zs({},"".concat(this.$attrSelector),""))),{},Zs({},"".concat(i,"section"),ar(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return Tn(e)||Uc(e)?{class:e}:e},_getPT:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,o=function(a){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i?i(a):a,d=ar(r),f=ar(t.$name);return(l=c?d!==f?u==null?void 0:u[d]:void 0:u==null?void 0:u[d])!==null&&l!==void 0?l:u};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)},_usePT:function(e,t,r,i){var o=function(m){return t(m,r,i)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,f=o(e.originalValue),h=o(e.value);return f===void 0&&h===void 0?void 0:Tn(h)?h:Tn(f)?f:c||!c&&h?d?this._mergeProps(d,f,h):qe(qe({},f),h):h}return o(e)},_useGlobalPT:function(e,t,r){return this._usePT(this.globalPT,e,t,r)},_useDefaultPT:function(e,t,r){return this._usePT(this.defaultPT,e,t,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,qe(qe({},this.$params),t))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return lt(this.$_attrsWithoutPT,this.ptm(e,t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,qe({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,qe(qe({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var i=this._getOptionValue(this.$style.inlineStyles,e,qe(qe({},this.$params),r)),o=this._getOptionValue(xg.inlineStyles,e,qe(qe({},this.$params),r));return[o,i]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return Zn(r,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return t._getOptionValue(r,t.$name,qe({},t.$params))||Zn(r,qe({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$inProps:function(){var e,t=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(r){var i=Xs(r,1),o=i[0];return t==null?void 0:t.includes(o)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return qe(qe({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=Xs(e,1),r=t[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,t){var r=Xs(t,2),i=r[0],o=r[1],s=i.split(":"),a=mP(s),l=a.slice(1);return l==null||l.reduce(function(c,u,d,f){return!c[u]&&(c[u]=d===f.length-1?o:{}),c[u]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=Xs(e,1),r=t[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,t){var r=Xs(t,2),i=r[0],o=r[1];return e[i]=o,e},{})}}},yP=`
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
`,xP=vt.extend({name:"baseicon",css:yP});function Ha(n){"@babel/helpers - typeof";return Ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ha(n)}function Eg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function wg(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Eg(Object(t),!0).forEach(function(r){SP(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Eg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function SP(n,e,t){return(e=MP(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function MP(n){var e=EP(n,"string");return Ha(e)=="symbol"?e:e+""}function EP(n,e){if(Ha(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ha(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Bc={name:"BaseIcon",extends:Nc,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:xP,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=Co(this.label);return wg(wg({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},bv={name:"SpinnerIcon",extends:Bc};function wP(n,e,t,r,i,o){return tt(),Ft("svg",lt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Qn("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}bv.render=wP;var TP=function(e){var t=e.dt;return`
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
`)},CP={root:function(e){var t=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":_t(t.value)&&String(t.value).length===1,"p-badge-dot":Co(t.value)&&!r.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]}},AP=vt.extend({name:"badge",theme:TP,classes:CP}),RP={name:"BaseBadge",extends:Nc,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:AP,provide:function(){return{$pcBadge:this,$parentInstance:this}}},vv={name:"Badge",extends:RP,inheritAttrs:!1};function PP(n,e,t,r,i,o){return tt(),Ft("span",lt({class:n.cx("root")},n.ptmi("root")),[Ln(n.$slots,"default",{},function(){return[Sa(pa(n.value),1)]})],16)}vv.render=PP;var rs=iv();function Va(n){"@babel/helpers - typeof";return Va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Va(n)}function Tg(n,e){return IP(n)||LP(n,e)||kP(n,e)||DP()}function DP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kP(n,e){if(n){if(typeof n=="string")return Cg(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Cg(n,e):void 0}}function Cg(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function LP(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e!==0)for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function IP(n){if(Array.isArray(n))return n}function Ag(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function et(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ag(Object(t),!0).forEach(function(r){pf(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ag(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function pf(n,e,t){return(e=OP(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function OP(n){var e=UP(n,"string");return Va(e)=="symbol"?e:e+""}function UP(n,e){if(Va(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Va(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var je={_getMeta:function(){return[Ir(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],Zn(Ir(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,t){var r,i,o;return(r=(e==null||(i=e.instance)===null||i===void 0?void 0:i.$primevue)||(t==null||(o=t.ctx)===null||o===void 0||(o=o.appContext)===null||o===void 0||(o=o.config)===null||o===void 0||(o=o.globalProperties)===null||o===void 0?void 0:o.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:Sh,_getPTValue:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var x=je._getOptionValue.apply(je,arguments);return Tn(x)||Uc(x)?{class:x}:x},c=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((t=r.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},u=c.mergeSections,d=u===void 0?!0:u,f=c.mergeProps,h=f===void 0?!1:f,_=a?je._useDefaultPT(r,r.defaultPT(),l,o,s):void 0,m=je._usePT(r,je._getPT(i,r.$name),l,o,et(et({},s),{},{global:_||{}})),g=je._getPTDatasets(r,o);return d||!d&&m?h?je._mergeProps(r,h,_,m,g):et(et(et({},_),m),g):et(et({},m),g)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return et(et({},t==="root"&&pf({},"".concat(r,"name"),ar(e.$name))),{},pf({},"".concat(r,"section"),ar(t)))},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(s){var a,l=r?r(s):s,c=ar(t);return(a=l==null?void 0:l[c])!==null&&a!==void 0?a:l};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,s=function(g){return r(g,i,o)};if(t!=null&&t.hasOwnProperty("_usept")){var a,l=t._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},c=l.mergeSections,u=c===void 0?!0:c,d=l.mergeProps,f=d===void 0?!1:d,h=s(t.originalValue),_=s(t.value);return h===void 0&&_===void 0?void 0:Tn(_)?_:Tn(h)?h:u||!u&&_?f?je._mergeProps(e,f,h,_):et(et({},h),_):_}return s(t)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return je._usePT(e,t,r,i,o)},_loadStyles:function(e,t,r){var i,o=je._getConfig(t,r),s={nonce:o==null||(i=o.csp)===null||i===void 0?void 0:i.nonce};je._loadCoreStyles(e.$instance,s),je._loadThemeStyles(e.$instance,s),je._loadScopedThemeStyles(e.$instance,s),je._themeChangeListener(function(){return je._loadThemeStyles(e.$instance,s)})},_loadCoreStyles:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!Si.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(t=r.$style)!==null&&t!==void 0&&t.name){var o;vt.loadCSS(i),(o=r.$style)===null||o===void 0||o.loadCSS(i),Si.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,t,r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!(i!=null&&i.isUnstyled()||(i==null||(e=i.theme)===null||e===void 0?void 0:e.call(i))==="none")){if(!dt.isStyleNameLoaded("common")){var s,a,l=((s=i.$style)===null||s===void 0||(a=s.getCommonTheme)===null||a===void 0?void 0:a.call(s))||{},c=l.primitive,u=l.semantic,d=l.global,f=l.style;vt.load(c==null?void 0:c.css,et({name:"primitive-variables"},o)),vt.load(u==null?void 0:u.css,et({name:"semantic-variables"},o)),vt.load(d==null?void 0:d.css,et({name:"global-variables"},o)),vt.loadTheme(et({name:"global-style"},o),f),dt.setLoadedStyleName("common")}if(!dt.isStyleNameLoaded((t=i.$style)===null||t===void 0?void 0:t.name)&&(r=i.$style)!==null&&r!==void 0&&r.name){var h,_,m,g,p=((h=i.$style)===null||h===void 0||(_=h.getDirectiveTheme)===null||_===void 0?void 0:_.call(h))||{},x=p.css,v=p.style;(m=i.$style)===null||m===void 0||m.load(x,et({name:"".concat(i.$style.name,"-variables")},o)),(g=i.$style)===null||g===void 0||g.loadTheme(et({name:"".concat(i.$style.name,"-style")},o),v),dt.setLoadedStyleName(i.$style.name)}if(!dt.isStyleNameLoaded("layer-order")){var b,T,R=(b=i.$style)===null||b===void 0||(T=b.getLayerOrderThemeCSS)===null||T===void 0?void 0:T.call(b);vt.load(R,et({name:"layer-order",first:!0},o)),dt.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var i,o,s,a=((i=e.$style)===null||i===void 0||(o=i.getPresetTheme)===null||o===void 0?void 0:o.call(i,r,"[".concat(e.$attrSelector,"]")))||{},l=a.css,c=(s=e.$style)===null||s===void 0?void 0:s.load(l,et({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},t));e.scopedStyleEl=c.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Si.clearLoadedStyleNames(),sr.on("theme:change",e)},_hook:function(e,t,r,i,o,s){var a,l,c="on".concat(R2(t)),u=je._getConfig(i,o),d=r==null?void 0:r.$instance,f=je._usePT(d,je._getPT(i==null||(a=i.value)===null||a===void 0?void 0:a.pt,e),je._getOptionValue,"hooks.".concat(c)),h=je._useDefaultPT(d,u==null||(l=u.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],je._getOptionValue,"hooks.".concat(c)),_={el:r,binding:i,vnode:o,prevVnode:s};f==null||f(d,_),h==null||h(d,_)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,t=arguments.length,r=new Array(t>2?t-2:0),i=2;i<t;i++)r[i-2]=arguments[i];return xh(e)?e.apply(void 0,r):lt.apply(void 0,r)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(s,a,l,c,u){var d,f,h,_;a._$instances=a._$instances||{};var m=je._getConfig(l,c),g=a._$instances[e]||{},p=Co(g)?et(et({},t),t==null?void 0:t.methods):{};a._$instances[e]=et(et({},g),{},{$name:e,$host:a,$binding:l,$modifiers:l==null?void 0:l.modifiers,$value:l==null?void 0:l.value,$el:g.$el||a||void 0,$style:et({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},t==null?void 0:t.style),$primevueConfig:m,$attrSelector:(d=a.$pd)===null||d===void 0||(d=d[e])===null||d===void 0?void 0:d.attrSelector,defaultPT:function(){return je._getPT(m==null?void 0:m.pt,void 0,function(v){var b;return v==null||(b=v.directives)===null||b===void 0?void 0:b[e]})},isUnstyled:function(){var v,b;return((v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.unstyled)!==void 0?(b=a.$instance)===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.unstyled:m==null?void 0:m.unstyled},theme:function(){var v;return(v=a.$instance)===null||v===void 0||(v=v.$primevueConfig)===null||v===void 0?void 0:v.theme},preset:function(){var v;return(v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.dt},ptm:function(){var v,b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return je._getPTValue(a.$instance,(v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.pt,b,et({},T))},ptmo:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return je._getPTValue(a.$instance,v,b,T,!1)},cx:function(){var v,b,T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(v=a.$instance)!==null&&v!==void 0&&v.isUnstyled()?void 0:je._getOptionValue((b=a.$instance)===null||b===void 0||(b=b.$style)===null||b===void 0?void 0:b.classes,T,et({},R))},sx:function(){var v,b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return T?je._getOptionValue((v=a.$instance)===null||v===void 0||(v=v.$style)===null||v===void 0?void 0:v.inlineStyles,b,et({},R)):void 0}},p),a.$instance=a._$instances[e],(f=(h=a.$instance)[s])===null||f===void 0||f.call(h,a,l,c,u),a["$".concat(e)]=a.$instance,je._hook(e,s,a,l,c,u),a.$pd||(a.$pd={}),a.$pd[e]=et(et({},(_=a.$pd)===null||_===void 0?void 0:_[e]),{},{name:e,instance:a.$instance})},i=function(s){var a,l,c,u,d,f=(a=s.$instance)===null||a===void 0?void 0:a.watch;f==null||(l=f.config)===null||l===void 0||l.call(s.$instance,(c=s.$instance)===null||c===void 0?void 0:c.$primevueConfig),rs.on("config:change",function(h){var _,m=h.newValue,g=h.oldValue;return f==null||(_=f.config)===null||_===void 0?void 0:_.call(s.$instance,m,g)}),f==null||(u=f["config.ripple"])===null||u===void 0||u.call(s.$instance,(d=s.$instance)===null||d===void 0||(d=d.$primevueConfig)===null||d===void 0?void 0:d.ripple),rs.on("config:ripple:change",function(h){var _,m=h.newValue,g=h.oldValue;return f==null||(_=f["config.ripple"])===null||_===void 0?void 0:_.call(s.$instance,m,g)})};return{created:function(s,a,l,c){s.$pd||(s.$pd={}),s.$pd[e]={name:e,attrSelector:wh("pd")},r("created",s,a,l,c)},beforeMount:function(s,a,l,c){je._loadStyles(s,a,l),r("beforeMount",s,a,l,c),i(s)},mounted:function(s,a,l,c){je._loadStyles(s,a,l),r("mounted",s,a,l,c)},beforeUpdate:function(s,a,l,c){r("beforeUpdate",s,a,l,c)},updated:function(s,a,l,c){je._loadStyles(s,a,l),r("updated",s,a,l,c)},beforeUnmount:function(s,a,l,c){r("beforeUnmount",s,a,l,c)},unmounted:function(s,a,l,c){var u;(u=s.$instance)===null||u===void 0||(u=u.scopedStyleEl)===null||u===void 0||(u=u.value)===null||u===void 0||u.remove(),r("unmounted",s,a,l,c)}}},extend:function(){var e=je._getMeta.apply(je,arguments),t=Tg(e,2),r=t[0],i=t[1];return et({extend:function(){var s=je._getMeta.apply(je,arguments),a=Tg(s,2),l=a[0],c=a[1];return je.extend(l,et(et(et({},i),i==null?void 0:i.methods),c))}},je._extend(r,i))}},NP=function(e){var t=e.dt;return`
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
`)},BP={root:"p-ink"},FP=vt.extend({name:"ripple-directive",theme:NP,classes:BP}),zP=je.extend({style:FP});function Ga(n){"@babel/helpers - typeof";return Ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ga(n)}function HP(n){return $P(n)||WP(n)||GP(n)||VP()}function VP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GP(n,e){if(n){if(typeof n=="string")return mf(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?mf(n,e):void 0}}function WP(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function $P(n){if(Array.isArray(n))return mf(n)}function mf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function Rg(n,e,t){return(e=XP(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function XP(n){var e=jP(n,"string");return Ga(e)=="symbol"?e:e+""}function jP(n,e){if(Ga(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ga(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var yv=zP.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var t=dv("span",Rg(Rg({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(t),this.$el=t},remove:function(e){var t=this.getInk(e);t&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=this,r=e.currentTarget,i=this.getInk(r);if(!(!i||getComputedStyle(i,null).display==="none")){if(!this.isUnstyled()&&Yl(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!hg(i)&&!pg(i)){var o=Math.max(uv(r),hv(r));i.style.height=o+"px",i.style.width=o+"px"}var s=K2(r),a=e.pageX-s.left+document.body.scrollTop-pg(i)/2,l=e.pageY-s.top+document.body.scrollLeft-hg(i)/2;i.style.top=l+"px",i.style.left=a+"px",!this.isUnstyled()&&Mh(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!t.isUnstyled()&&Yl(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&Yl(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?HP(e.children).find(function(t){return j2(t,"data-pc-name")==="ripple"}):void 0}}});function Wa(n){"@babel/helpers - typeof";return Wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wa(n)}function _r(n,e,t){return(e=YP(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function YP(n){var e=qP(n,"string");return Wa(e)=="symbol"?e:e+""}function qP(n,e){if(Wa(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Wa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var KP=function(e){var t=e.dt;return`
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
`)},ZP={root:function(e){var t=e.instance,r=e.props;return["p-button p-component",_r(_r(_r(_r(_r(_r(_r(_r(_r({"p-button-icon-only":t.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link||r.variant==="link"},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text||r.variant==="text"),"p-button-outlined",r.outlined||r.variant==="outlined"),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",t.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var t=e.props;return["p-button-icon",_r({},"p-button-icon-".concat(t.iconPos),t.label)]},label:"p-button-label"},JP=vt.extend({name:"button",theme:KP,classes:ZP}),QP={name:"BaseButton",extends:Nc,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:JP,provide:function(){return{$pcButton:this,$parentInstance:this}}},nl={name:"Button",extends:QP,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return lt(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Co(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:bv,Badge:vv},directives:{ripple:yv}};function e3(n,e,t,r,i,o){var s=va("SpinnerIcon"),a=va("Badge"),l=L0("ripple");return n.asChild?Ln(n.$slots,"default",{key:1,class:gs(n.cx("root")),a11yAttrs:o.a11yAttrs}):b0((tt(),vn(Qu(n.as),lt({key:0,class:n.cx("root")},o.attrs),{default:Mi(function(){return[Ln(n.$slots,"default",{},function(){return[n.loading?Ln(n.$slots,"loadingicon",lt({key:0,class:[n.cx("loadingIcon"),n.cx("icon")]},n.ptm("loadingIcon")),function(){return[n.loadingIcon?(tt(),Ft("span",lt({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(tt(),vn(s,lt({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):Ln(n.$slots,"icon",lt({key:1,class:[n.cx("icon")]},n.ptm("icon")),function(){return[n.icon?(tt(),Ft("span",lt({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):vr("",!0)]}),Qn("span",lt({class:n.cx("label")},n.ptm("label")),pa(n.label||" "),17),n.badge?(tt(),vn(a,{key:2,value:n.badge,class:gs(n.badgeClass),severity:n.badgeSeverity,unstyled:n.unstyled,pt:n.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):vr("",!0)]})]}),_:3},16,["class"])),[[l]])}nl.render=e3;const t3={class:"controls"},n3={__name:"ControlPanel",setup(n){const e=tv(),{isAnimationActive:t,isZoomActive:r,isRotationActive:i,isPanActive:o}=ev(e);return(s,a)=>{const l=nl;return tt(),Ft("div",t3,[yt(l,{icon:Bt(t)?"pi pi-pause":"pi pi-caret-right",severity:Bt(t)?"secondary":"contrast",onClick:a[0]||(a[0]=c=>Bt(e).toggleAnimation(!Bt(t)))},null,8,["icon","severity"]),yt(l,{icon:"pi pi-arrows-v",severity:Bt(r)?"secondary":"contrast",onClick:a[1]||(a[1]=c=>Bt(e).toggleZoom(!Bt(r)))},null,8,["severity"]),yt(l,{icon:"pi pi-undo",severity:Bt(i)?"secondary":"contrast",onClick:a[2]||(a[2]=c=>Bt(e).toggleRotation(!Bt(i)))},null,8,["severity"]),yt(l,{icon:"pi pi-arrows-alt",severity:Bt(o)?"secondary":"contrast",onClick:a[3]||(a[3]=c=>Bt(e).togglePan(!Bt(o)))},null,8,["severity"])])}}},r3=Eo(n3,[["__scopeId","data-v-1180e97c"]]);function i3(){let n=[];const e=(s,a,l=999)=>{const c=i(s,a,l),u=c.value+(c.key===s?0:l)+1;return n.push({key:s,value:u}),u},t=s=>{n=n.filter(a=>a.value!==s)},r=(s,a)=>i(s).value,i=(s,a,l=0)=>[...n].reverse().find(c=>!0)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,a,l)=>{a&&(a.style.zIndex=String(e(s,!0,l)))},clear:s=>{s&&(t(o(s)),s.style.zIndex="")},getCurrent:s=>r(s)}}var Xu=i3();function Pg(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return wh(n)}var xv={name:"TimesIcon",extends:Bc};function o3(n,e,t,r,i,o){return tt(),Ft("svg",lt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Qn("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1)]),16)}xv.render=o3;var Sv={name:"WindowMaximizeIcon",extends:Bc};function s3(n,e,t,r,i,o){return tt(),Ft("svg",lt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Qn("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}Sv.render=s3;var Mv={name:"WindowMinimizeIcon",extends:Bc};function a3(n,e,t,r,i,o){return tt(),Ft("svg",lt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[Qn("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}Mv.render=a3;var l3=vt.extend({name:"focustrap-directive"}),c3=je.extend({style:l3});function $a(n){"@babel/helpers - typeof";return $a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$a(n)}function Dg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function kg(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Dg(Object(t),!0).forEach(function(r){u3(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Dg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function u3(n,e,t){return(e=d3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d3(n){var e=f3(n,"string");return $a(e)=="symbol"?e:e+""}function f3(n,e){if($a(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if($a(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var h3=c3.extend("focustrap",{mounted:function(e,t){var r=t.value||{},i=r.disabled;i||(this.createHiddenFocusableElements(e,t),this.bind(e,t),this.autoElementFocus(e,t)),e.setAttribute("data-pd-focustrap",!0),this.$el=e},updated:function(e,t){var r=t.value||{},i=r.disabled;i&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(e??"")},bind:function(e,t){var r=this,i=t.value||{},o=i.onFocusIn,s=i.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(a){a.forEach(function(l){if(l.type==="childList"&&!e.contains(document.activeElement)){var c=function(d){var f=mg(d)?mg(d,r.getComputedSelector(e.$_pfocustrap_focusableselector))?d:$s(e,r.getComputedSelector(e.$_pfocustrap_focusableselector)):$s(d);return _t(f)?f:d.nextSibling&&c(d.nextSibling)};ns(c(l.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(a){return o&&o(a)},e.$_pfocustrap_focusoutlistener=function(a){return s&&s(a)},e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e){this.autoElementFocus(this.$el,{value:kg(kg({},e),{},{autoFocus:!0})})},autoElementFocus:function(e,t){var r=t.value||{},i=r.autoFocusSelector,o=i===void 0?"":i,s=r.firstFocusableSelector,a=s===void 0?"":s,l=r.autoFocus,c=l===void 0?!1:l,u=$s(e,"[autofocus]".concat(this.getComputedSelector(o)));c&&!u&&(u=$s(e,this.getComputedSelector(a))),ns(u)},onFirstHiddenElementFocus:function(e){var t,r=e.currentTarget,i=e.relatedTarget,o=i===r.$_pfocustrap_lasthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(i))?$s(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_lasthiddenfocusableelement;ns(o)},onLastHiddenElementFocus:function(e){var t,r=e.currentTarget,i=e.relatedTarget,o=i===r.$_pfocustrap_firsthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(i))?q2(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_firsthiddenfocusableelement;ns(o)},createHiddenFocusableElements:function(e,t){var r=this,i=t.value||{},o=i.tabIndex,s=o===void 0?0:o,a=i.firstFocusableSelector,l=a===void 0?"":a,c=i.lastFocusableSelector,u=c===void 0?"":c,d=function(m){return dv("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:s,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:m==null?void 0:m.bind(r)})},f=d(this.onFirstHiddenElementFocus),h=d(this.onLastHiddenElementFocus);f.$_pfocustrap_lasthiddenfocusableelement=h,f.$_pfocustrap_focusableselector=l,f.setAttribute("data-pc-section","firstfocusableelement"),h.$_pfocustrap_firsthiddenfocusableelement=f,h.$_pfocustrap_focusableselector=u,h.setAttribute("data-pc-section","lastfocusableelement"),e.prepend(f),e.append(h)}}}),Ev={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=Eh()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function p3(n,e,t,r,i,o){return o.inline?Ln(n.$slots,"default",{key:0}):i.mounted?(tt(),vn(Ty,{key:1,to:t.appendTo},[Ln(n.$slots,"default")],8,["to"])):vr("",!0)}Ev.render=p3;var m3=function(e){var t=e.dt;return`
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
`)},g3={mask:function(e){var t=e.position,r=e.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"||t==="topleft"||t==="bottomleft"?"flex-start":t==="right"||t==="topright"||t==="bottomright"?"flex-end":"center",alignItems:t==="top"||t==="topleft"||t==="topright"?"flex-start":t==="bottom"||t==="bottomleft"||t==="bottomright"?"flex-end":"center",pointerEvents:r?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},_3={mask:function(e){var t=e.props,r=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],i=r.find(function(o){return o===t.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},i?"p-dialog-".concat(i):""]},root:function(e){var t=e.props,r=e.instance;return["p-dialog p-component",{"p-dialog-maximized":t.maximizable&&r.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},b3=vt.extend({name:"dialog",theme:m3,classes:_3,inlineStyles:g3}),v3={name:"BaseDialog",extends:Nc,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:b3,provide:function(){return{$pcDialog:this,$parentInstance:this}}},wv={name:"Dialog",extends:v3,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var e=this;return{dialogRef:yn(function(){return e._instance})}},data:function(){return{id:this.$attrs.id,containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},watch:{"$attrs.id":function(e){this.id=e||Pg()}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&Xu.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.id=this.id||Pg(),this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&Xu.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Mh(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),ns(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&Xu.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(e){this.maskMouseDownTarget=e.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var e=function(i){return i&&i.querySelector("[autofocus]")},t=this.$slots.footer&&e(this.footerContainer);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=this.$slots.default&&e(this.content),t||(this.maximizable?(this.focusableMax=!0,t=this.maximizableButton):(this.focusableClose=!0,t=this.closeButton)))),t&&ns(t,{focusVisible:!0})},maximize:function(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?dg():fg())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&dg()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&fg()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},maximizableRef:function(e){this.maximizableButton=e?e.$el:void 0},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",pv(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var t="";for(var r in this.breakpoints)t+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[r],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=t}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(e){e.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&W2(document.body,{"user-select":"none"}),this.$emit("dragstart",e))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var e=this;this.documentDragListener=function(t){if(e.dragging){var r=uv(e.container),i=hv(e.container),o=t.pageX-e.lastPageX,s=t.pageY-e.lastPageY,a=e.container.getBoundingClientRect(),l=a.left+o,c=a.top+s,u=G2(),d=getComputedStyle(e.container),f=parseFloat(d.marginLeft),h=parseFloat(d.marginTop);e.container.style.position="fixed",e.keepInViewport?(l>=e.minX&&l+r<u.width&&(e.lastPageX=t.pageX,e.container.style.left=l-f+"px"),c>=e.minY&&c+i<u.height&&(e.lastPageY=t.pageY,e.container.style.top=c-h+"px")):(e.lastPageX=t.pageX,e.container.style.left=l-f+"px",e.lastPageY=t.pageY,e.container.style.top=c-h+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var e=this;this.documentDragEndListener=function(t){e.dragging&&(e.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!e.isUnstyled&&(document.body.style["user-select"]=""),e.$emit("dragend",t))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:yv,focustrap:h3},components:{Button:nl,Portal:Ev,WindowMinimizeIcon:Mv,WindowMaximizeIcon:Sv,TimesIcon:xv}};function Xa(n){"@babel/helpers - typeof";return Xa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xa(n)}function Lg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Ig(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Lg(Object(t),!0).forEach(function(r){y3(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Lg(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function y3(n,e,t){return(e=x3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function x3(n){var e=S3(n,"string");return Xa(e)=="symbol"?e:e+""}function S3(n,e){if(Xa(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Xa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var M3=["aria-labelledby","aria-modal"],E3=["id"];function w3(n,e,t,r,i,o){var s=va("Button"),a=va("Portal"),l=L0("focustrap");return tt(),vn(a,{appendTo:n.appendTo},{default:Mi(function(){return[i.containerVisible?(tt(),Ft("div",lt({key:0,ref:o.maskRef,class:n.cx("mask"),style:n.sx("mask",!0,{position:n.position,modal:n.modal}),onMousedown:e[1]||(e[1]=function(){return o.onMaskMouseDown&&o.onMaskMouseDown.apply(o,arguments)}),onMouseup:e[2]||(e[2]=function(){return o.onMaskMouseUp&&o.onMaskMouseUp.apply(o,arguments)})},n.ptm("mask")),[yt(Ix,lt({name:"p-dialog",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},n.ptm("transition")),{default:Mi(function(){return[n.visible?b0((tt(),Ft("div",lt({key:0,ref:o.containerRef,class:n.cx("root"),style:n.sx("root"),role:"dialog","aria-labelledby":o.ariaLabelledById,"aria-modal":n.modal},n.ptmi("root")),[n.$slots.container?Ln(n.$slots,"container",{key:0,closeCallback:o.close,maximizeCallback:function(u){return o.maximize(u)}}):(tt(),Ft(en,{key:1},[n.showHeader?(tt(),Ft("div",lt({key:0,ref:o.headerContainerRef,class:n.cx("header"),onMousedown:e[0]||(e[0]=function(){return o.initDrag&&o.initDrag.apply(o,arguments)})},n.ptm("header")),[Ln(n.$slots,"header",{class:gs(n.cx("title"))},function(){return[n.header?(tt(),Ft("span",lt({key:0,id:o.ariaLabelledById,class:n.cx("title")},n.ptm("title")),pa(n.header),17,E3)):vr("",!0)]}),Qn("div",lt({class:n.cx("headerActions")},n.ptm("headerActions")),[n.maximizable?(tt(),vn(s,lt({key:0,ref:o.maximizableRef,autofocus:i.focusableMax,class:n.cx("pcMaximizeButton"),onClick:o.maximize,tabindex:n.maximizable?"0":"-1",unstyled:n.unstyled},n.maximizeButtonProps,{pt:n.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:Mi(function(c){return[Ln(n.$slots,"maximizeicon",{maximized:i.maximized},function(){return[(tt(),vn(Qu(o.maximizeIconComponent),lt({class:[c.class,i.maximized?n.minimizeIcon:n.maximizeIcon]},n.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])):vr("",!0),n.closable?(tt(),vn(s,lt({key:1,ref:o.closeButtonRef,autofocus:i.focusableClose,class:n.cx("pcCloseButton"),onClick:o.close,"aria-label":o.closeAriaLabel,unstyled:n.unstyled},n.closeButtonProps,{pt:n.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:Mi(function(c){return[Ln(n.$slots,"closeicon",{},function(){return[(tt(),vn(Qu(n.closeIcon?"span":"TimesIcon"),lt({class:[n.closeIcon,c.class]},n.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])):vr("",!0)],16)],16)):vr("",!0),Qn("div",lt({ref:o.contentRef,class:[n.cx("content"),n.contentClass],style:n.contentStyle},Ig(Ig({},n.contentProps),n.ptm("content"))),[Ln(n.$slots,"default")],16),n.footer||n.$slots.footer?(tt(),Ft("div",lt({key:1,ref:o.footerContainerRef,class:n.cx("footer")},n.ptm("footer")),[Ln(n.$slots,"footer",{},function(){return[Sa(pa(n.footer),1)]})],16)):vr("",!0)],64))],16,M3)),[[l,{disabled:!n.modal}]]):vr("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):vr("",!0)]}),_:3},8,["appendTo"])}wv.render=w3;const T3={class:"actions"},C3={__name:"ControlDialog",emits:["moveToPlanet"],setup(n,{emit:e}){const t=e,r=Mo({aboutMe:{visible:!1,position:"right",planet:"mercury"},project:{visible:!1,position:"left",planet:"earth"}}),i=o=>{Object.values(r).forEach(s=>s.visible=!1),t("moveToPlanet",o.planet),o.visible=!0};return(o,s)=>{const a=nl,l=wv;return tt(),Ft(en,null,[Qn("div",T3,[yt(a,{label:"Project",size:"small",onClick:s[0]||(s[0]=c=>i(r.project))}),yt(a,{label:"AboutMe",size:"small",onClick:s[1]||(s[1]=c=>i(r.aboutMe))})]),yt(l,{visible:r.aboutMe.visible,"onUpdate:visible":s[2]||(s[2]=c=>r.aboutMe.visible=c),position:r.aboutMe.position,draggable:!1,header:"AboutMe"},{default:Mi(()=>s[4]||(s[4]=[Sa(" hello ")])),_:1},8,["visible","position"]),yt(l,{visible:r.project.visible,"onUpdate:visible":s[3]||(s[3]=c=>r.project.visible=c),position:r.project.position,draggable:!1,header:"Project"},{default:Mi(()=>s[5]||(s[5]=[Sa(" hello ")])),_:1},8,["visible","position"])],64)}}},A3=Eo(C3,[["__scopeId","data-v-4001f52d"]]),R3={class:"canvas-warpper"},P3={__name:"ThreeCanvas",setup(n){const e=tv(),{isAnimationActive:t,isZoomActive:r,isRotationActive:i,isPanActive:o}=ev(e),s=Un(null);let a=null,l=null,c=null,u=null;const d=f=>{const h=l.getObjectByName(f);if(!h)return;t.value=!1,a.enableZoom=!1,a.enableRotate=!1,a.enablePan=!1;const _=16,m=new X;u.getWorldDirection(m);const g={x:h.position.x-m.x*_,y:h.position.y-m.y*_,z:h.position.z-m.z*_};qb.to(u.position,{x:g.x,y:g.y,z:g.z,duration:1.2,ease:"power2.inOut",onComplete:()=>{a.target.set(h.position.x,h.position.y,h.position.z),a.update(),a.enableZoom=r.value,a.enableRotate=i.value,a.enablePan=o.value}})};return Ec(()=>{const f=new KM;l=new VM,c=new rE;const h=B=>{const G=f.load(B);return G.wrapS=Ca,G.wrapT=Ca,G.mapping=nc,G.colorSpace=Dn,G},_=h("/textures/space/2k_stars_milky_way.jpg"),m=h("/textures/space/2k_sun.jpg"),g=h("/textures/space/2k_mercury.jpg"),p=h("/textures/space/2k_venus_surface.jpg"),x=h("/textures/space/2k_earth_daymap.jpg"),v=h("/textures/space/2k_moon.jpg"),b=h("/textures/space/2k_eris_fictional.jpg"),T=h("/textures/space/2k_mars.jpg"),R=h("/textures/space/2k_jupiter.jpg"),A=h("/textures/space/2k_saturn.jpg"),P=h("/textures/space/2k_saturn_ring_alpha.png"),y=h("/textures/space/2k_uranus.jpg"),M=h("/textures/space/2k_neptune.jpg"),k=new oc(256,64,64),O=new Jf({map:_,side:mn}),U=new qn(k,O);l.add(U);const Y=new VA({canvas:s.value,antialias:!0});Y.setSize(window.innerWidth,window.innerHeight),Y.setPixelRatio(window.devicePixelRatio>1?2:1),Y.shadowMap.enabled=!0,u=new In(75,window.innerWidth/window.innerHeight,.1,1e3),u.position.set(-64,32,32),l.add(u),(()=>{l.add(new tE("white",.1));const B=new QM("white",2048,2048);B.position.set(0,0,0),B.castShadow=!0,B.shadow.mapSize.set(256,256),B.shadow.camera.near=1,B.shadow.camera.far=256,l.add(B)})();const V=(B,G,ae)=>{const le=new qn(new oc(B,32,32),new om({map:G}));return ae&&(le.name=ae),le},W=V(12,m,"sun");W.material.emissive=new Je("white"),W.material.emissiveMap=m,W.material.emissiveIntensity=.75;const z=V(.8,g,"mercury"),he=V(2,p,"venus"),pe=V(2,x,"earth"),_e=V(.5,v,"moon"),Me=V(1.1,T,"mars"),Ue=V(5,R,"jupiter"),Q=V(4.2,A,"saturn"),fe=V(1.8,y,"uranus"),ve=V(1.8,M,"neptune");l.add(W),pe.add(_e),pe.rotation.x=Xd.degToRad(23.5),Q.rotation.x=Xd.degToRad(27);const se=(()=>{const B=new eh(7,9,64),G=new om({side:Mr,opacity:.75,transparent:!0,emissive:new Je("white"),emissiveMap:P,emissiveIntensity:.75}),ae=new qn(B,G);return ae.rotation.x=Math.PI/2,ae})();Q.add(se);const oe=new Jo;z.position.set(20,1.2,-3),he.position.set(25,-1.5,4),pe.position.set(40,0,0),_e.position.set(4,0,0),Me.position.set(50,-3,5),Ue.position.set(90,4,-3),Q.position.set(130,-3,7),fe.position.set(160,4,-5),ve.position.set(190,-4.5,4),oe.add(z,he,pe,Me,Ue,Q,fe,ve),l.add(oe);const de=new Jo,Pe=1024,D=[];for(let B=0;B<Pe;B++){const G=Math.random()*.1+.2,ae=V(G,null);ae.material.emissive=new Je("white"),ae.material.emissiveMap=b,ae.material.emissiveIntensity=.75,ae.position.set(Math.random()*384-192,Math.random()*384-192,Math.random()*384-192),de.add(ae),D.push(ae)}l.add(de);function L(B){const G=B*.025;D.forEach((ae,le)=>{const be=(Math.sin(G+le*.5)+1)*.375;ae.material.emissiveIntensity=be}),requestAnimationFrame(L)}requestAnimationFrame(L),a=new WA(u,Y.domElement),a.maxDistance=192,a.minDistance=16,a.enableZoom=r.value,a.enableRotate=i.value,a.enablePan=o.value;const E=64,re=()=>{const B=a.target;B.length()>E&&(B.normalize().multiplyScalar(E),a.update())};a.addEventListener("change",re);const K=new iE,q=new Ve,ne=B=>{q.x=B.clientX/window.innerWidth*2-1,q.y=-(B.clientY/window.innerHeight)*2+1,K.setFromCamera(q,u);const G=K.intersectObjects([W,pe,_e]);if(G.length>0){const ae=G[0].object;ae===W?console.log("Sun clicked",ae):ae===pe?console.log("Earth clicked",ae):ae===_e&&console.log("Moon clicked",ae)}};window.addEventListener("click",ne);const ce=[{object:W,speed:16},{object:oe,speed:4},{object:pe,speed:1},{object:_e,speed:.25},{object:z,speed:1.5},{object:he,speed:.5},{object:Me,speed:1.2},{object:Ue,speed:.3},{object:Q,speed:.4},{object:fe,speed:.6},{object:ve,speed:.5},{object:de,speed:32}],te=[{object:z,speed:.06,radius:20,yOffset:1.2},{object:he,speed:.03,radius:25,yOffset:-1.5},{object:pe,speed:.02,radius:40,yOffset:0},{object:Me,speed:.01,radius:50,yOffset:-3},{object:Ue,speed:.004,radius:90,yOffset:4},{object:Q,speed:.002,radius:130,yOffset:-3},{object:fe,speed:.002,radius:160,yOffset:4},{object:ve,speed:.001,radius:190,yOffset:-4.5}],w={};te.forEach(({object:B})=>{w[B.uuid]=Math.random()*Math.PI*2});const S=B=>{ce.forEach(({object:G,speed:ae})=>{G.rotation.y+=B/ae}),te.forEach(({object:G,speed:ae,radius:le,yOffset:be})=>{w[G.uuid]+=B*ae;const Le=w[G.uuid];G.position.set(Math.cos(Le)*le,be,Math.sin(Le)*le)})},I=()=>{const B=c.getDelta();t.value&&S(B),Y.render(l,u),Y.setAnimationLoop(I)},j=()=>{const{innerWidth:B,innerHeight:G}=window;u.aspect=B/G,u.updateProjectionMatrix(),Y.setSize(B,G)};window.addEventListener("resize",j),I(),Nn(r,B=>{a.enableZoom=B}),Nn(i,B=>{a.enableRotate=B}),Nn(o,B=>{a.enablePan=B}),kf(()=>{window.removeEventListener("resize",j),window.removeEventListener("click",ne),Y.setAnimationLoop(null)})}),(f,h)=>(tt(),Ft("div",R3,[Qn("canvas",{id:"canvas",ref_key:"canvas",ref:s},null,512),yt(r3),yt(A3,{onMoveToPlanet:d})]))}},D3=Eo(P3,[["__scopeId","data-v-85a32556"]]),k3={__name:"Home",setup(n){return(e,t)=>(tt(),vn(D3))}},L3={};function I3(n,e){return tt(),Ft("div",null,"노트에용")}const O3=Eo(L3,[["render",I3]]),U3={};function N3(n,e){const t=nl;return tt(),Ft(en,null,[e[0]||(e[0]=Qn("div",null,"갤러리에요",-1)),yt(t,{label:"버튼"})],64)}const B3=Eo(U3,[["render",N3]]),F3={};function z3(n,e){return tt(),Ft("div",null,"Serene1004")}const H3=Eo(F3,[["render",z3]]),V3=[{path:"/",name:"Home",component:k3},{path:"/notes",name:"Notes",component:O3},{path:"/gallery",name:"Gallery",component:B3},{path:"/contact",name:"Contact",component:H3}],G3=dS({history:z1(),routes:V3});var Jt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function ja(n){"@babel/helpers - typeof";return ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ja(n)}function Og(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Il(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Og(Object(t),!0).forEach(function(r){W3(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Og(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function W3(n,e,t){return(e=$3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function $3(n){var e=X3(n,"string");return ja(e)=="symbol"?e:e+""}function X3(n,e){if(ja(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(ja(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var j3={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Jt.STARTS_WITH,Jt.CONTAINS,Jt.NOT_CONTAINS,Jt.ENDS_WITH,Jt.EQUALS,Jt.NOT_EQUALS],numeric:[Jt.EQUALS,Jt.NOT_EQUALS,Jt.LESS_THAN,Jt.LESS_THAN_OR_EQUAL_TO,Jt.GREATER_THAN,Jt.GREATER_THAN_OR_EQUAL_TO],date:[Jt.DATE_IS,Jt.DATE_IS_NOT,Jt.DATE_BEFORE,Jt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},Y3=Symbol();function q3(n,e){var t={config:Mo(e)};return n.config.globalProperties.$primevue=t,n.provide(Y3,t),K3(),Z3(n,t),t}var is=[];function K3(){sr.clear(),is.forEach(function(n){return n==null?void 0:n()}),is=[]}function Z3(n,e){var t=Un(!1),r=function(){var c;if(((c=e.config)===null||c===void 0?void 0:c.theme)!=="none"&&!dt.isStyleNameLoaded("common")){var u,d,f=((u=vt.getCommonTheme)===null||u===void 0?void 0:u.call(vt))||{},h=f.primitive,_=f.semantic,m=f.global,g=f.style,p={nonce:(d=e.config)===null||d===void 0||(d=d.csp)===null||d===void 0?void 0:d.nonce};vt.load(h==null?void 0:h.css,Il({name:"primitive-variables"},p)),vt.load(_==null?void 0:_.css,Il({name:"semantic-variables"},p)),vt.load(m==null?void 0:m.css,Il({name:"global-variables"},p)),vt.loadTheme(Il({name:"global-style"},p),g),dt.setLoadedStyleName("common")}};sr.on("theme:change",function(l){t.value||(n.config.globalProperties.$primevue.config.theme=l,t.value=!0)});var i=Nn(e.config,function(l,c){rs.emit("config:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),o=Nn(function(){return e.config.ripple},function(l,c){rs.emit("config:ripple:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),s=Nn(function(){return e.config.theme},function(l,c){t.value||dt.setTheme(l),e.config.unstyled||r(),t.value=!1,rs.emit("config:theme:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!1}),a=Nn(function(){return e.config.unstyled},function(l,c){!l&&e.config.theme&&r(),rs.emit("config:unstyled:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0});is.push(i),is.push(o),is.push(s),is.push(a)}var J3={install:function(e,t){var r=nv(j3,t);q3(e,r)}},Q3={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}},eD={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},tD={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}},nD={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},rD={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},iD={root:{borderRadius:"{content.border.radius}"}},oD={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}},sD={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},aD={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}},lD={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},cD={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"}},uD={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}}},dD={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}},fD={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},hD={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}},pD={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}},mD={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},gD={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},_D={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}},bD={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.375rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.375rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}},vD={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}},yD={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}},xD={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},SD={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}},MD={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}},ED={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}},wD={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}},TD={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}},CD={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}},AD={icon:{color:"{form.field.icon.color}"}},RD={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"}},PD={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},DD={handle:{size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},kD={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},LD={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}},ID={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}},OD={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"}},UD={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},ND={root:{gap:"0.5rem"},input:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}}},BD={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},FD={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}},zD={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}},HD={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},VD={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}},GD={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},WD={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}},$D={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}},XD={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}},jD={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},YD={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}},qD={root:{outline:{width:"2px",color:"{content.background}"}}},KD={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}},ZD={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}},JD={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}},QD={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}},ek={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},tk={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}},nk={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}},rk={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}},ik={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}}},ok={root:{gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},sk={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}},ak={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},lk={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}},ck={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},uk={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},dk={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}},fk={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}},hk={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}},pk={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},mk={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"}},gk={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},_k={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}},bk={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},vk={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},yk={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},xk={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}},Sk={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},Mk={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},Ek={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}},wk={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},Tk={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.375rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.625rem 1.25rem"}},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}},Ck={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}}},Ak={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}},Rk={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},Pk={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.5rem 0"}},Dk={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}},kk={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},Lk={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};function Ya(n){"@babel/helpers - typeof";return Ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ya(n)}function Ug(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Ng(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ug(Object(t),!0).forEach(function(r){Ik(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ug(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Ik(n,e,t){return(e=Ok(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ok(n){var e=Uk(n,"string");return Ya(e)=="symbol"?e:e+""}function Uk(n,e){if(Ya(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ya(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Nk=Ng(Ng({},rD),{},{components:{accordion:Q3,autocomplete:eD,avatar:tD,badge:nD,blockui:iD,breadcrumb:oD,button:sD,datepicker:bD,card:aD,carousel:lD,cascadeselect:cD,checkbox:uD,chip:dD,colorpicker:fD,confirmdialog:hD,confirmpopup:pD,contextmenu:mD,dataview:_D,datatable:gD,dialog:vD,divider:yD,dock:xD,drawer:SD,editor:MD,fieldset:ED,fileupload:wD,iftalabel:RD,floatlabel:TD,galleria:CD,iconfield:AD,image:PD,imagecompare:DD,inlinemessage:kD,inplace:LD,inputchips:ID,inputgroup:OD,inputnumber:UD,inputotp:ND,inputtext:BD,knob:FD,listbox:zD,megamenu:HD,menu:VD,menubar:GD,message:WD,metergroup:$D,multiselect:XD,orderlist:jD,organizationchart:YD,overlaybadge:qD,popover:tk,paginator:KD,password:QD,panel:ZD,panelmenu:JD,picklist:ek,progressbar:nk,progressspinner:rk,radiobutton:ik,rating:ok,scrollpanel:ak,select:lk,selectbutton:ck,skeleton:uk,slider:dk,speeddial:fk,splitter:pk,splitbutton:hk,stepper:mk,steps:gk,tabmenu:_k,tabs:bk,tabview:vk,textarea:Sk,tieredmenu:Mk,tag:yk,terminal:xk,timeline:Ek,togglebutton:Tk,toggleswitch:Ck,tree:Pk,treeselect:Dk,treetable:kk,toast:wk,toolbar:Ak,virtualscroller:Lk},directives:{tooltip:Rk,ripple:sk}});const Bk={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1em",anchorGutter:"2px",primary:{50:"#f8faf8",100:"#dfe7df",200:"#c6d3c6",300:"#adc0ad",400:"#94ac93",500:"#7b997a",600:"#698268",700:"#566b55",800:"#445443",900:"#313d31",950:"#1f261f"},formField:{paddingX:"0.75em",paddingY:"0.5em",sm:{fontSize:"0.875em",paddingX:"0.625em",paddingY:"0.375em"},lg:{fontSize:"1.125em",paddingX:"0.875em",paddingY:"0.625em"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25em 0.25em",gap:"2px",header:{padding:"0.5em 1em 0.25em 1em"},option:{padding:"0.5em 0.75em",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5em 0.75em",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25em 0.25em",gap:"2px"},item:{padding:"0.5em 0.75em",borderRadius:"{border.radius.sm}",gap:"0.5em"},submenuLabel:{padding:"0.5em 0.75em",fontWeight:"600"},submenuIcon:{size:"0.875em"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75em",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25em",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},Fc=r1(l1),Fk=L2(Nk,Bk);Fc.use(J3,{theme:{preset:Fk,options:{prefix:"p",darkModeSelector:".dark",cssLayer:!1}},ripple:!0});Fc.use(_2());Fc.use(G3);Fc.mount("#app");

import{G as fp,k as K,H as qn,I as hp,J as pp,K as mp,L as cf,A as Ya,M as gp,N as xp,y as Ht,O as uf,P as df,r as Oe,Q as al,R as Hi,S as ja,U as _p,E as R,V as vp,W as Hs,X as yp,Y as bp,Z as Mp,$ as Sp,a0 as hc,a1 as pc,a2 as mc,a3 as xu,a4 as Ts,a5 as $i,a6 as Ep,a7 as wp,a8 as ff,a9 as Tp,z as On,aa as Ap,f as Ee,ab as bt,g as ue,o as ie,w as ne,s as ve,ac as tt,ad as lo,ae as Cp,af as Ai,ag as co,ah as Rp,ai as Dp,aj as uo,ak as _u,al as Zi,am as Gs,an as $s,ao as Wi,a as mt,t as Lt,d as nn,D as nt,i as rl,q as yr,ap as At,aq as Ct,ar as hf,c as Bt,as as na,at as Pp,au as Lp,b as je,n as pf,av as gc,aw as Ip,ax as xc,ay as Ei,az as _c,aA as vc,C as mf,aB as Up,aC as yc,aD as Np,aE as bc,aF as Op,aG as Fp,aH as gf,aI as vu,aJ as Bp,aK as Ws,aL as vi,p as Tt,aM as sl,aN as xf,m as un,F as Sa,B as Ea,aO as kp,h as ki,j as _f,aP as zp,aQ as Vp,aR as Hp,x as Gp}from"./Wd2Lr0ht.js";import{u as $p,a as Wp}from"./DimUvDjV.js";const qp=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Xp=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],Yp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",Ci=[];class jp{_data=new wa;_hash=new wa([...qp]);_nDataBytes=0;_minBufferSize=0;finalize(e){e&&this._append(e);const t=this._nDataBytes*8,i=this._data.sigBytes*8;return this._data.words[i>>>5]|=128<<24-i%32,this._data.words[(i+64>>>9<<4)+14]=Math.floor(t/4294967296),this._data.words[(i+64>>>9<<4)+15]=t,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}_doProcessBlock(e,t){const i=this._hash.words;let a=i[0],r=i[1],s=i[2],o=i[3],l=i[4],c=i[5],u=i[6],d=i[7];for(let h=0;h<64;h++){if(h<16)Ci[h]=e[t+h]|0;else{const y=Ci[h-15],E=(y<<25|y>>>7)^(y<<14|y>>>18)^y>>>3,T=Ci[h-2],w=(T<<15|T>>>17)^(T<<13|T>>>19)^T>>>10;Ci[h]=E+Ci[h-7]+w+Ci[h-16]}const p=l&c^~l&u,x=a&r^a&s^r&s,g=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),m=(l<<26|l>>>6)^(l<<21|l>>>11)^(l<<7|l>>>25),f=d+m+p+Xp[h]+Ci[h],v=g+x;d=u,u=c,c=l,l=o+f|0,o=s,s=r,r=a,a=f+v|0}i[0]=i[0]+a|0,i[1]=i[1]+r|0,i[2]=i[2]+s|0,i[3]=i[3]+o|0,i[4]=i[4]+l|0,i[5]=i[5]+c|0,i[6]=i[6]+u|0,i[7]=i[7]+d|0}_append(e){typeof e=="string"&&(e=wa.fromUtf8(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes}_process(e){let t,i=this._data.sigBytes/64;e?i=Math.ceil(i):i=Math.max((i|0)-this._minBufferSize,0);const a=i*16,r=Math.min(a*4,this._data.sigBytes);if(a){for(let s=0;s<a;s+=16)this._doProcessBlock(this._data.words,s);t=this._data.words.splice(0,a),this._data.sigBytes-=r}return new wa(t,r)}}class wa{words;sigBytes;constructor(e,t){e=this.words=e||[],this.sigBytes=t===void 0?e.length*4:t}static fromUtf8(e){const t=unescape(encodeURIComponent(e)),i=t.length,a=[];for(let r=0;r<i;r++)a[r>>>2]|=(t.charCodeAt(r)&255)<<24-r%4*8;return new wa(a,i)}toBase64(){const e=[];for(let t=0;t<this.sigBytes;t+=3){const i=this.words[t>>>2]>>>24-t%4*8&255,a=this.words[t+1>>>2]>>>24-(t+1)%4*8&255,r=this.words[t+2>>>2]>>>24-(t+2)%4*8&255,s=i<<16|a<<8|r;for(let o=0;o<4&&t*8+o*6<this.sigBytes*8;o++)e.push(Yp.charAt(s>>>6*(3-o)&63))}return e.join("")}concat(e){if(this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4),this.sigBytes%4)for(let t=0;t<e.sigBytes;t++){const i=e.words[t>>>2]>>>24-t%4*8&255;this.words[this.sigBytes+t>>>2]|=i<<24-(this.sigBytes+t)%4*8}else for(let t=0;t<e.sigBytes;t+=4)this.words[this.sigBytes+t>>>2]=e.words[t>>>2];this.sigBytes+=e.sigBytes}}function Kp(n){return new jp().finalize(n).toBase64()}function va(n){return Kp(fp(n))}const Zp={trailing:!0};function Jp(n,e=25,t={}){if(t={...Zp,...t},!Number.isFinite(e))throw new TypeError("Expected `wait` to be a finite number");let i,a,r=[],s,o;const l=(d,h)=>(s=Qp(n,d,h),s.finally(()=>{if(s=null,t.trailing&&o&&!a){const p=l(d,o);return o=null,p}}),s),c=function(...d){return t.trailing&&(o=d),s||new Promise(h=>{const p=!a&&t.leading;clearTimeout(a),a=setTimeout(()=>{a=null;const x=t.leading?i:l(this,d);o=null;for(const g of r)g(x);r=[]},e),p?(i=l(this,d),h(i)):r.push(h)})},u=d=>{d&&(clearTimeout(d),a=null)};return c.isPending=()=>!!a,c.cancel=()=>{u(a),r=[],o=null},c.flush=()=>{if(u(a),!o||s)return;const d=o;return o=null,l(this,d)},c}async function Qp(n,e,t){return await n.apply(e,t)}function em(...n){const e=typeof n[n.length-1]=="string"?n.pop():void 0;tm(n[0],n[1])&&n.unshift(e);let[t,i,a={}]=n,r=!1;const s=K(()=>qn(t));if(typeof s.value!="string")throw new TypeError("[nuxt] [useAsyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");const o=hp();a.server??=!0,a.default??=im,a.getCachedData??=yf,a.lazy??=!1,a.immediate??=!0,a.deep??=pp.deep,a.dedupe??="cancel",a._functionName,o._asyncData[s.value];function l(){const x={cause:"initial",dedupe:a.dedupe};return o._asyncData[s.value]?._init||(x.cachedData=a.getCachedData(s.value,o,{cause:"initial"}),o._asyncData[s.value]=yu(o,s.value,i,a,x.cachedData)),()=>o._asyncData[s.value].execute(x)}const c=l(),u=o._asyncData[s.value];u._deps++;const d=a.server!==!1&&o.payload.serverRendered;{let x=function(E){const T=o._asyncData[E];T?._deps&&(T._deps--,T._deps===0&&T?._off())};const g=mp();if(g&&d&&a.immediate&&!g.sp&&(g.sp=[]),g&&!g._nuxtOnBeforeMountCbs){g._nuxtOnBeforeMountCbs=[];const E=g._nuxtOnBeforeMountCbs;cf(()=>{E.forEach(T=>{T()}),E.splice(0,E.length)}),Ya(()=>E.splice(0,E.length))}const m=g&&(g._nuxtClientOnly||gp(xp,!1));d&&o.isHydrating&&(u.error.value||u.data.value!==void 0)?u.status.value=u.error.value?"error":"success":g&&(!m&&o.payload.serverRendered&&o.isHydrating||a.lazy)&&a.immediate?g._nuxtOnBeforeMountCbs.push(c):a.immediate&&u.status.value!=="success"&&c();const f=df(),v=Ht(s,(E,T)=>{if((E||T)&&E!==T){r=!0;const w=o._asyncData[T]?.data.value!==void 0,C=o._asyncDataPromises[T]!==void 0,I={cause:"initial",dedupe:a.dedupe};if(!o._asyncData[E]?._init){let b;T&&w?b=o._asyncData[T].data.value:(b=a.getCachedData(E,o,{cause:"initial"}),I.cachedData=b),o._asyncData[E]=yu(o,E,i,a,b)}o._asyncData[E]._deps++,T&&x(T),(a.immediate||w||C)&&o._asyncData[E].execute(I),vp(()=>{r=!1})}},{flush:"sync"}),y=a.watch?Ht(a.watch,()=>{r||u._execute({cause:"watch",dedupe:a.dedupe})}):()=>{};f&&uf(()=>{v(),y(),x(s.value)})}const h={data:Br(()=>o._asyncData[s.value]?.data),pending:Br(()=>o._asyncData[s.value]?.pending),status:Br(()=>o._asyncData[s.value]?.status),error:Br(()=>o._asyncData[s.value]?.error),refresh:(...x)=>o._asyncData[s.value]?._init?o._asyncData[s.value].execute(...x):l()(),execute:(...x)=>h.refresh(...x),clear:()=>{const x=o._asyncData[s.value];if(x?._abortController)try{x._abortController.abort(new DOMException("AsyncData aborted by user.","AbortError"))}finally{x._abortController=void 0}vf(o,s.value)}},p=Promise.resolve(o._asyncDataPromises[s.value]).then(()=>h);return Object.assign(p,h),p}function Br(n){return K({get(){return n()?.value},set(e){const t=n();t&&(t.value=e)}})}function tm(n,e){return!(typeof n=="string"||typeof n=="object"&&n!==null||typeof n=="function"&&typeof e=="function")}function vf(n,e){e in n.payload.data&&(n.payload.data[e]=void 0),e in n.payload._errors&&(n.payload._errors[e]=void 0),n._asyncData[e]&&(n._asyncData[e].data.value=R(n._asyncData[e]._default()),n._asyncData[e].error.value=void 0,n._asyncData[e].status.value="idle"),e in n._asyncDataPromises&&(n._asyncDataPromises[e]=void 0)}function nm(n,e){const t={};for(const i of e)t[i]=n[i];return t}function yu(n,e,t,i,a){n.payload._errors[e]??=void 0;const r=i.getCachedData!==yf,s=t,o=i.deep?Oe:al,l=a!==void 0,c=n.hook("app:data:refresh",async d=>{(!d||d.includes(e))&&await u.execute({cause:"refresh:hook"})}),u={data:o(l?a:i.default()),pending:K(()=>u.status.value==="pending"),error:Hi(n.payload._errors,e),status:al("idle"),execute:(...d)=>{const[h,p=void 0]=d,x=h&&p===void 0&&typeof h=="object"?h:{};if(n._asyncDataPromises[e]&&(x.dedupe??i.dedupe)==="defer")return n._asyncDataPromises[e];{const f="cachedData"in x?x.cachedData:i.getCachedData(e,n,{cause:x.cause??"refresh:manual"});if(f!==void 0)return n.payload.data[e]=u.data.value=f,u.error.value=void 0,u.status.value="success",Promise.resolve(f)}u._abortController&&u._abortController.abort(new DOMException("AsyncData request cancelled by deduplication","AbortError")),u._abortController=new AbortController,u.status.value="pending";const g=new AbortController,m=new Promise((f,v)=>{try{const y=x.timeout??i.timeout,E=am([u._abortController?.signal,x?.signal],g.signal,y);if(E.aborted){const T=E.reason;v(T instanceof Error?T:new DOMException(String(T??"Aborted"),"AbortError"));return}return E.addEventListener("abort",()=>{const T=E.reason;v(T instanceof Error?T:new DOMException(String(T??"Aborted"),"AbortError"))},{once:!0,signal:g.signal}),Promise.resolve(s(n,{signal:E})).then(f,v)}catch(y){v(y)}}).then(async f=>{let v=f;i.transform&&(v=await i.transform(f)),i.pick&&(v=nm(v,i.pick)),n.payload.data[e]=v,u.data.value=v,u.error.value=void 0,u.status.value="success"}).catch(f=>{if(!(n._asyncDataPromises[e]&&n._asyncDataPromises[e]!==m)&&!u._abortController?.signal.aborted){if(typeof DOMException<"u"&&f instanceof DOMException&&f.name==="AbortError"){u.status.value="idle";return}u.error.value=_p(f),u.data.value=R(i.default()),u.status.value="error"}}).finally(()=>{g.abort(),delete n._asyncDataPromises[e]});return n._asyncDataPromises[e]=m,n._asyncDataPromises[e]},_execute:Jp((...d)=>u.execute(...d),0,{leading:!0}),_default:i.default,_deps:0,_init:!0,_hash:void 0,_off:()=>{c(),n._asyncData[e]?._init&&(n._asyncData[e]._init=!1),r||ja(()=>{n._asyncData[e]?._init||(vf(n,e),u.execute=()=>Promise.resolve())})}};return u}const im=()=>{},yf=(n,e,t)=>{if(e.isHydrating)return e.payload.data[n];if(t.cause!=="refresh:manual"&&t.cause!=="refresh:hook")return e.static.data[n]};function am(n,e,t){const i=n.filter(s=>!!s);if(typeof t=="number"&&t>=0){const s=AbortSignal.timeout?.(t);s&&i.push(s)}if(AbortSignal.any)return AbortSignal.any(i);const a=new AbortController;for(const s of i)if(s.aborted){const o=s.reason??new DOMException("Aborted","AbortError");try{a.abort(o)}catch{a.abort()}return a.signal}const r=()=>{const o=i.find(l=>l.aborted)?.reason??new DOMException("Aborted","AbortError");try{a.abort(o)}catch{a.abort()}};for(const s of i)s.addEventListener?.("abort",r,{once:!0,signal:e});return a.signal}function rm(n,e,t){const[i={},a]=typeof e=="string"?[{},e]:[e,t],r=K(()=>qn(n)),s=K(()=>qn(i.key)||"$f"+va([a,typeof r.value=="string"?r.value:"",...sm(i)]));if(!i.baseURL&&typeof r.value=="string"&&r.value[0]==="/"&&r.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:o,lazy:l,default:c,transform:u,pick:d,watch:h,immediate:p,getCachedData:x,deep:g,dedupe:m,timeout:f,...v}=i,y=Hs({...yp,...v,cache:typeof i.cache=="boolean"?void 0:i.cache}),E={server:o,lazy:l,default:c,transform:u,pick:d,immediate:p,getCachedData:x,deep:g,dedupe:m,timeout:f,watch:h===!1?[]:[...h||[],y]};return em(h===!1?s.value:s,(w,{signal:C})=>(i.$fetch||globalThis.$fetch)(r.value,{signal:C,...y}),E)}function sm(n){const e=[qn(n.method)?.toUpperCase()||"GET",qn(n.baseURL)];for(const t of[n.query||n.params]){const i=qn(t);if(!i)continue;const a={};for(const[r,s]of Object.entries(i))a[qn(r)]=qn(s);e.push(a)}if(n.body){const t=qn(n.body);if(!t)e.push(va(t));else if(t instanceof ArrayBuffer)e.push(va(Object.fromEntries([...new Uint8Array(t).entries()].map(([i,a])=>[i,a.toString()]))));else if(t instanceof FormData){const i={};for(const a of t.entries()){const[r,s]=a;i[r]=s instanceof File?s.name:s}e.push(va(i))}else if(bp(t))e.push(va(Hs(t)));else try{e.push(va(t))}catch{console.warn("[useFetch] Failed to hash body",t)}}return e}const om=Mp(()=>{const n=Oe(new Map),e=Oe(),t=K(()=>{for(const s of n.value.values())if(s)return!0;return!1}),i=hc({scrollBody:Oe(!0)});let a=null;const r=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.documentElement.style.removeProperty("--scrollbar-width"),document.body.style.overflow=e.value??"",xu&&a?.(),e.value=void 0};return Ht(t,(s,o)=>{if(!pc)return;if(!s){o&&r();return}e.value===void 0&&(e.value=document.body.style.overflow);const l=window.innerWidth-document.documentElement.clientWidth,c={padding:l,margin:0},u=i.scrollBody?.value?typeof i.scrollBody.value=="object"?mc({padding:i.scrollBody.value.padding===!0?l:i.scrollBody.value.padding,margin:i.scrollBody.value.margin===!0?l:i.scrollBody.value.margin},c):c:{padding:0,margin:0};l>0&&(document.body.style.paddingRight=typeof u.padding=="number"?`${u.padding}px`:String(u.padding),document.body.style.marginRight=typeof u.margin=="number"?`${u.margin}px`:String(u.margin),document.documentElement.style.setProperty("--scrollbar-width",`${l}px`),document.body.style.overflow="hidden"),xu&&(a=Ts(document,"touchmove",d=>cm(d),{passive:!1})),ja(()=>{document.body.style.pointerEvents="none",document.body.style.overflow="hidden"})},{immediate:!0,flush:"sync"}),n});function lm(n){const e=Math.random().toString(36).substring(2,7),t=om();t.value.set(e,n);const i=K({get:()=>t.value.get(e)??!1,set:a=>t.value.set(e,a)});return Sp(()=>{t.value.delete(e)}),i}function bf(n){const e=window.getComputedStyle(n);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&n.clientWidth<n.scrollWidth||e.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const t=n.parentNode;return!(t instanceof Element)||t.tagName==="BODY"?!1:bf(t)}}function cm(n){const e=n||window.event,t=e.target;return t instanceof Element&&bf(t)?!1:e.touches.length>1?!0:(e.preventDefault&&e.cancelable&&e.preventDefault(),!1)}function Ca(n,e){return n-e*Math.floor(n/e)}const Mf=1721426;function zi(n,e,t,i){e=Lr(n,e);let a=e-1,r=-2;return t<=2?r=0:gi(e)&&(r=-1),Mf-1+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*t-362)/12+r+i)}function gi(n){return n%4===0&&(n%100!==0||n%400===0)}function Lr(n,e){return n==="BC"?1-e:e}function qs(n){let e="AD";return n<=0&&(e="BC",n=1-n),[e,n]}const um={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class bn{fromJulianDay(e){let t=e,i=t-Mf,a=Math.floor(i/146097),r=Ca(i,146097),s=Math.floor(r/36524),o=Ca(r,36524),l=Math.floor(o/1461),c=Ca(o,1461),u=Math.floor(c/365),d=a*400+s*100+l*4+u+(s!==4&&u!==4?1:0),[h,p]=qs(d),x=t-zi(h,p,1,1),g=2;t<zi(h,p,3,1)?g=0:gi(p)&&(g=1);let m=Math.floor(((x+g)*12+373)/367),f=t-zi(h,p,m,1)+1;return new Rt(h,p,m,f)}toJulianDay(e){return zi(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return um[gi(e.year)?"leapyear":"standard"][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return gi(e.year)?366:365}getYearsInEra(e){return 9999}getEras(){return["BC","AD"]}isInverseEra(e){return e.era==="BC"}balanceDate(e){e.year<=0&&(e.era=e.era==="BC"?"AD":"BC",e.year=1-e.year)}constructor(){this.identifier="gregory"}}const dm={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AU:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CN:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1};function Pt(n,e){return e=jt(e,n.calendar),n.era===e.era&&n.year===e.year&&n.month===e.month&&n.day===e.day}function Mc(n,e){return e=jt(e,n.calendar),n=ol(n),e=ol(e),n.era===e.era&&n.year===e.year&&n.month===e.month}function pi(n,e){return Sc(n.calendar,e.calendar)&&Pt(n,e)}function bu(n,e){return Sc(n.calendar,e.calendar)&&Mc(n,e)}function Sc(n,e){var t,i,a,r;return(r=(a=(t=n.isEqual)===null||t===void 0?void 0:t.call(n,e))!==null&&a!==void 0?a:(i=e.isEqual)===null||i===void 0?void 0:i.call(e,n))!==null&&r!==void 0?r:n.identifier===e.identifier}function Sf(n,e){return Pt(n,wf(e))}function Ef(n,e,t){let i=n.calendar.toJulianDay(n),a=mm(e),r=Math.ceil(i+1-a)%7;return r<0&&(r+=7),r}function fm(n){return Kn(Date.now(),n)}function wf(n){return _m(fm(n))}function Tf(n,e){return n.calendar.toJulianDay(n)-e.calendar.toJulianDay(e)}function hm(n,e){return Mu(n)-Mu(e)}function Mu(n){return n.hour*36e5+n.minute*6e4+n.second*1e3+n.millisecond}let fo=null;function Ka(){return fo==null&&(fo=new Intl.DateTimeFormat().resolvedOptions().timeZone),fo}function ol(n){return n.subtract({days:n.day-1})}function Su(n){return n.add({days:n.calendar.getDaysInMonth(n)-n.day})}const Eu=new Map,ho=new Map;function pm(n){if(Intl.Locale){let t=Eu.get(n);return t||(t=new Intl.Locale(n).maximize().region,t&&Eu.set(n,t)),t}let e=n.split("-")[1];return e==="u"?void 0:e}function mm(n){let e=ho.get(n);if(!e){if(Intl.Locale){let i=new Intl.Locale(n);if("getWeekInfo"in i&&(e=i.getWeekInfo(),e))return ho.set(n,e),e.firstDay}let t=pm(n);if(n.includes("-fw-")){let i=n.split("-fw-")[1].split("-")[0];i==="mon"?e={firstDay:1}:i==="tue"?e={firstDay:2}:i==="wed"?e={firstDay:3}:i==="thu"?e={firstDay:4}:i==="fri"?e={firstDay:5}:i==="sat"?e={firstDay:6}:e={firstDay:0}}else n.includes("-ca-iso8601")?e={firstDay:1}:e={firstDay:t&&dm[t]||0};ho.set(n,e)}return e.firstDay}function Na(n){n=jt(n,new bn);let e=Lr(n.era,n.year);return Af(e,n.month,n.day,n.hour,n.minute,n.second,n.millisecond)}function Af(n,e,t,i,a,r,s){let o=new Date;return o.setUTCHours(i,a,r,s),o.setUTCFullYear(n,e-1,t),o.getTime()}function ll(n,e){if(e==="UTC")return 0;if(n>0&&e===Ka())return new Date(n).getTimezoneOffset()*-6e4;let{year:t,month:i,day:a,hour:r,minute:s,second:o}=Cf(n,e);return Af(t,i,a,r,s,o,0)-Math.floor(n/1e3)*1e3}const wu=new Map;function Cf(n,e){let t=wu.get(e);t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),wu.set(e,t));let i=t.formatToParts(new Date(n)),a={};for(let r of i)r.type!=="literal"&&(a[r.type]=r.value);return{year:a.era==="BC"||a.era==="B"?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:a.hour==="24"?0:+a.hour,minute:+a.minute,second:+a.second}}const Tu=864e5;function gm(n,e,t,i){return(t===i?[t]:[t,i]).filter(r=>xm(n,e,r))}function xm(n,e,t){let i=Cf(t,e);return n.year===i.year&&n.month===i.month&&n.day===i.day&&n.hour===i.hour&&n.minute===i.minute&&n.second===i.second}function Xn(n,e,t="compatible"){let i=Oa(n);if(e==="UTC")return Na(i);if(e===Ka()&&t==="compatible"){i=jt(i,new bn);let l=new Date,c=Lr(i.era,i.year);return l.setFullYear(c,i.month-1,i.day),l.setHours(i.hour,i.minute,i.second,i.millisecond),l.getTime()}let a=Na(i),r=ll(a-Tu,e),s=ll(a+Tu,e),o=gm(i,e,a-r,a-s);if(o.length===1)return o[0];if(o.length>1)switch(t){case"compatible":case"earlier":return o[0];case"later":return o[o.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(t){case"earlier":return Math.min(a-r,a-s);case"compatible":case"later":return Math.max(a-r,a-s);case"reject":throw new RangeError("No such absolute time found")}}function Rf(n,e,t="compatible"){return new Date(Xn(n,e,t))}function Kn(n,e){let t=ll(n,e),i=new Date(n+t),a=i.getUTCFullYear(),r=i.getUTCMonth()+1,s=i.getUTCDate(),o=i.getUTCHours(),l=i.getUTCMinutes(),c=i.getUTCSeconds(),u=i.getUTCMilliseconds();return new Ba(a<1?"BC":"AD",a<1?-a+1:a,r,s,e,t,o,l,c,u)}function _m(n){return new Rt(n.calendar,n.era,n.year,n.month,n.day)}function Oa(n,e){let t=0,i=0,a=0,r=0;if("timeZone"in n)({hour:t,minute:i,second:a,millisecond:r}=n);else if("hour"in n&&!e)return n;return e&&({hour:t,minute:i,second:a,millisecond:r}=e),new Fa(n.calendar,n.era,n.year,n.month,n.day,t,i,a,r)}function jt(n,e){if(Sc(n.calendar,e))return n;let t=e.fromJulianDay(n.calendar.toJulianDay(n)),i=n.copy();return i.calendar=e,i.era=t.era,i.year=t.year,i.month=t.month,i.day=t.day,qi(i),i}function vm(n,e,t){if(n instanceof Ba)return n.timeZone===e?n:bm(n,e);let i=Xn(n,e,t);return Kn(i,e)}function ym(n){let e=Na(n)-n.offset;return new Date(e)}function bm(n,e){let t=Na(n)-n.offset;return jt(Kn(t,e),n.calendar)}const rr=36e5;function Xs(n,e){let t=n.copy(),i="hour"in t?wm(t,e):0;cl(t,e.years||0),t.calendar.balanceYearMonth&&t.calendar.balanceYearMonth(t,n),t.month+=e.months||0,ul(t),Df(t),t.day+=(e.weeks||0)*7,t.day+=e.days||0,t.day+=i,Mm(t),t.calendar.balanceDate&&t.calendar.balanceDate(t),t.year<1&&(t.year=1,t.month=1,t.day=1);let a=t.calendar.getYearsInEra(t);if(t.year>a){var r,s;let l=(r=(s=t.calendar).isInverseEra)===null||r===void 0?void 0:r.call(s,t);t.year=a,t.month=l?1:t.calendar.getMonthsInYear(t),t.day=l?1:t.calendar.getDaysInMonth(t)}t.month<1&&(t.month=1,t.day=1);let o=t.calendar.getMonthsInYear(t);return t.month>o&&(t.month=o,t.day=t.calendar.getDaysInMonth(t)),t.day=Math.max(1,Math.min(t.calendar.getDaysInMonth(t),t.day)),t}function cl(n,e){var t,i;!((t=(i=n.calendar).isInverseEra)===null||t===void 0)&&t.call(i,n)&&(e=-e),n.year+=e}function ul(n){for(;n.month<1;)cl(n,-1),n.month+=n.calendar.getMonthsInYear(n);let e=0;for(;n.month>(e=n.calendar.getMonthsInYear(n));)n.month-=e,cl(n,1)}function Mm(n){for(;n.day<1;)n.month--,ul(n),n.day+=n.calendar.getDaysInMonth(n);for(;n.day>n.calendar.getDaysInMonth(n);)n.day-=n.calendar.getDaysInMonth(n),n.month++,ul(n)}function Df(n){n.month=Math.max(1,Math.min(n.calendar.getMonthsInYear(n),n.month)),n.day=Math.max(1,Math.min(n.calendar.getDaysInMonth(n),n.day))}function qi(n){n.calendar.constrainDate&&n.calendar.constrainDate(n),n.year=Math.max(1,Math.min(n.calendar.getYearsInEra(n),n.year)),Df(n)}function Pf(n){let e={};for(let t in n)typeof n[t]=="number"&&(e[t]=-n[t]);return e}function Lf(n,e){return Xs(n,Pf(e))}function Ec(n,e){let t=n.copy();return e.era!=null&&(t.era=e.era),e.year!=null&&(t.year=e.year),e.month!=null&&(t.month=e.month),e.day!=null&&(t.day=e.day),qi(t),t}function As(n,e){let t=n.copy();return e.hour!=null&&(t.hour=e.hour),e.minute!=null&&(t.minute=e.minute),e.second!=null&&(t.second=e.second),e.millisecond!=null&&(t.millisecond=e.millisecond),Em(t),t}function Sm(n){n.second+=Math.floor(n.millisecond/1e3),n.millisecond=kr(n.millisecond,1e3),n.minute+=Math.floor(n.second/60),n.second=kr(n.second,60),n.hour+=Math.floor(n.minute/60),n.minute=kr(n.minute,60);let e=Math.floor(n.hour/24);return n.hour=kr(n.hour,24),e}function Em(n){n.millisecond=Math.max(0,Math.min(n.millisecond,1e3)),n.second=Math.max(0,Math.min(n.second,59)),n.minute=Math.max(0,Math.min(n.minute,59)),n.hour=Math.max(0,Math.min(n.hour,23))}function kr(n,e){let t=n%e;return t<0&&(t+=e),t}function wm(n,e){return n.hour+=e.hours||0,n.minute+=e.minutes||0,n.second+=e.seconds||0,n.millisecond+=e.milliseconds||0,Sm(n)}function wc(n,e,t,i){let a=n.copy();switch(e){case"era":{let o=n.calendar.getEras(),l=o.indexOf(n.era);if(l<0)throw new Error("Invalid era: "+n.era);l=Zn(l,t,0,o.length-1,i?.round),a.era=o[l],qi(a);break}case"year":var r,s;!((r=(s=a.calendar).isInverseEra)===null||r===void 0)&&r.call(s,a)&&(t=-t),a.year=Zn(n.year,t,-1/0,9999,i?.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,n);break;case"month":a.month=Zn(n.month,t,1,n.calendar.getMonthsInYear(n),i?.round);break;case"day":a.day=Zn(n.day,t,1,n.calendar.getDaysInMonth(n),i?.round);break;default:throw new Error("Unsupported field "+e)}return n.calendar.balanceDate&&n.calendar.balanceDate(a),qi(a),a}function If(n,e,t,i){let a=n.copy();switch(e){case"hour":{let r=n.hour,s=0,o=23;if(i?.hourCycle===12){let l=r>=12;s=l?12:0,o=l?23:11}a.hour=Zn(r,t,s,o,i?.round);break}case"minute":a.minute=Zn(n.minute,t,0,59,i?.round);break;case"second":a.second=Zn(n.second,t,0,59,i?.round);break;case"millisecond":a.millisecond=Zn(n.millisecond,t,0,999,i?.round);break;default:throw new Error("Unsupported field "+e)}return a}function Zn(n,e,t,i,a=!1){if(a){n+=Math.sign(e),n<t&&(n=i);let r=Math.abs(e);e>0?n=Math.ceil(n/r)*r:n=Math.floor(n/r)*r,n>i&&(n=t)}else n+=e,n<t?n=i-(t-n-1):n>i&&(n=t+(n-i-1));return n}function Uf(n,e){let t;if(e.years!=null&&e.years!==0||e.months!=null&&e.months!==0||e.weeks!=null&&e.weeks!==0||e.days!=null&&e.days!==0){let a=Xs(Oa(n),{years:e.years,months:e.months,weeks:e.weeks,days:e.days});t=Xn(a,n.timeZone)}else t=Na(n)-n.offset;t+=e.milliseconds||0,t+=(e.seconds||0)*1e3,t+=(e.minutes||0)*6e4,t+=(e.hours||0)*36e5;let i=Kn(t,n.timeZone);return jt(i,n.calendar)}function Tm(n,e){return Uf(n,Pf(e))}function Am(n,e,t,i){switch(e){case"hour":{let a=0,r=23;if(i?.hourCycle===12){let x=n.hour>=12;a=x?12:0,r=x?23:11}let s=Oa(n),o=jt(As(s,{hour:a}),new bn),l=[Xn(o,n.timeZone,"earlier"),Xn(o,n.timeZone,"later")].filter(x=>Kn(x,n.timeZone).day===o.day)[0],c=jt(As(s,{hour:r}),new bn),u=[Xn(c,n.timeZone,"earlier"),Xn(c,n.timeZone,"later")].filter(x=>Kn(x,n.timeZone).day===c.day).pop(),d=Na(n)-n.offset,h=Math.floor(d/rr),p=d%rr;return d=Zn(h,t,Math.floor(l/rr),Math.floor(u/rr),i?.round)*rr+p,jt(Kn(d,n.timeZone),n.calendar)}case"minute":case"second":case"millisecond":return If(n,e,t,i);case"era":case"year":case"month":case"day":{let a=wc(Oa(n),e,t,i),r=Xn(a,n.timeZone);return jt(Kn(r,n.timeZone),n.calendar)}default:throw new Error("Unsupported field "+e)}}function Cm(n,e,t){let i=Oa(n),a=As(Ec(i,e),e);if(a.compare(i)===0)return n;let r=Xn(a,n.timeZone,t);return jt(Kn(r,n.timeZone),n.calendar)}function Rm(n){return`${String(n.hour).padStart(2,"0")}:${String(n.minute).padStart(2,"0")}:${String(n.second).padStart(2,"0")}${n.millisecond?String(n.millisecond/1e3).slice(1):""}`}function Nf(n){let e=jt(n,new bn),t;return e.era==="BC"?t=e.year===1?"0000":"-"+String(Math.abs(1-e.year)).padStart(6,"00"):t=String(e.year).padStart(4,"0"),`${t}-${String(e.month).padStart(2,"0")}-${String(e.day).padStart(2,"0")}`}function Of(n){return`${Nf(n)}T${Rm(n)}`}function Dm(n){let e=Math.sign(n)<0?"-":"+";n=Math.abs(n);let t=Math.floor(n/36e5),i=Math.floor(n%36e5/6e4),a=Math.floor(n%36e5%6e4/1e3),r=`${e}${String(t).padStart(2,"0")}:${String(i).padStart(2,"0")}`;return a!==0&&(r+=`:${String(a).padStart(2,"0")}`),r}function Pm(n){return`${Of(n)}${Dm(n.offset)}[${n.timeZone}]`}function Lm(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Tc(n,e,t){Lm(n,e),e.set(n,t)}function Ac(n){let e=typeof n[0]=="object"?n.shift():new bn,t;if(typeof n[0]=="string")t=n.shift();else{let s=e.getEras();t=s[s.length-1]}let i=n.shift(),a=n.shift(),r=n.shift();return[e,t,i,a,r]}var Im=new WeakMap;class Rt{copy(){return this.era?new Rt(this.calendar,this.era,this.year,this.month,this.day):new Rt(this.calendar,this.year,this.month,this.day)}add(e){return Xs(this,e)}subtract(e){return Lf(this,e)}set(e){return Ec(this,e)}cycle(e,t,i){return wc(this,e,t,i)}toDate(e){return Rf(this,e)}toString(){return Nf(this)}compare(e){return Tf(this,e)}constructor(...e){Tc(this,Im,{writable:!0,value:void 0});let[t,i,a,r,s]=Ac(e);this.calendar=t,this.era=i,this.year=a,this.month=r,this.day=s,qi(this)}}var Um=new WeakMap;class Fa{copy(){return this.era?new Fa(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new Fa(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return Xs(this,e)}subtract(e){return Lf(this,e)}set(e){return Ec(As(this,e),e)}cycle(e,t,i){switch(e){case"era":case"year":case"month":case"day":return wc(this,e,t,i);default:return If(this,e,t,i)}}toDate(e,t){return Rf(this,e,t)}toString(){return Of(this)}compare(e){let t=Tf(this,e);return t===0?hm(this,Oa(e)):t}constructor(...e){Tc(this,Um,{writable:!0,value:void 0});let[t,i,a,r,s]=Ac(e);this.calendar=t,this.era=i,this.year=a,this.month=r,this.day=s,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,qi(this)}}var Nm=new WeakMap;class Ba{copy(){return this.era?new Ba(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new Ba(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(e){return Uf(this,e)}subtract(e){return Tm(this,e)}set(e,t){return Cm(this,e,t)}cycle(e,t,i){return Am(this,e,t,i)}toDate(){return ym(this)}toString(){return Pm(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(e){return this.toDate().getTime()-vm(e,this.timeZone).toDate().getTime()}constructor(...e){Tc(this,Nm,{writable:!0,value:void 0});let[t,i,a,r,s]=Ac(e),o=e.shift(),l=e.shift();this.calendar=t,this.era=i,this.year=a,this.month=r,this.day=s,this.timeZone=o,this.offset=l,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,qi(this)}}const Ra=[[1868,9,8],[1912,7,30],[1926,12,25],[1989,1,8],[2019,5,1]],Om=[[1912,7,29],[1926,12,24],[1989,1,7],[2019,4,30]],gs=[1867,1911,1925,1988,2018],fi=["meiji","taisho","showa","heisei","reiwa"];function Au(n){const e=Ra.findIndex(([t,i,a])=>n.year<t||n.year===t&&n.month<i||n.year===t&&n.month===i&&n.day<a);return e===-1?Ra.length-1:e===0?0:e-1}function po(n){let e=gs[fi.indexOf(n.era)];if(!e)throw new Error("Unknown era: "+n.era);return new Rt(n.year+e,n.month,n.day)}class Fm extends bn{fromJulianDay(e){let t=super.fromJulianDay(e),i=Au(t);return new Rt(this,fi[i],t.year-gs[i],t.month,t.day)}toJulianDay(e){return super.toJulianDay(po(e))}balanceDate(e){let t=po(e),i=Au(t);fi[i]!==e.era&&(e.era=fi[i],e.year=t.year-gs[i]),this.constrainDate(e)}constrainDate(e){let t=fi.indexOf(e.era),i=Om[t];if(i!=null){let[a,r,s]=i,o=a-gs[t];e.year=Math.max(1,Math.min(o,e.year)),e.year===o&&(e.month=Math.min(r,e.month),e.month===r&&(e.day=Math.min(s,e.day)))}if(e.year===1&&t>=0){let[,a,r]=Ra[t];e.month=Math.max(a,e.month),e.month===a&&(e.day=Math.max(r,e.day))}}getEras(){return fi}getYearsInEra(e){let t=fi.indexOf(e.era),i=Ra[t],a=Ra[t+1];if(a==null)return 9999-i[0]+1;let r=a[0]-i[0];return(e.month<a[1]||e.month===a[1]&&e.day<a[2])&&r++,r}getDaysInMonth(e){return super.getDaysInMonth(po(e))}getMinimumMonthInYear(e){let t=Cu(e);return t?t[1]:1}getMinimumDayInMonth(e){let t=Cu(e);return t&&e.month===t[1]?t[2]:1}constructor(...e){super(...e),this.identifier="japanese"}}function Cu(n){if(n.year===1){let e=fi.indexOf(n.era);return Ra[e]}}const Ff=-543;class Bm extends bn{fromJulianDay(e){let t=super.fromJulianDay(e),i=Lr(t.era,t.year);return new Rt(this,i-Ff,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Ru(e))}getEras(){return["BE"]}getDaysInMonth(e){return super.getDaysInMonth(Ru(e))}balanceDate(){}constructor(...e){super(...e),this.identifier="buddhist"}}function Ru(n){let[e,t]=qs(n.year+Ff);return new Rt(e,t,n.month,n.day)}const Cs=1911;function Bf(n){return n.era==="minguo"?n.year+Cs:1-n.year+Cs}function Du(n){let e=n-Cs;return e>0?["minguo",e]:["before_minguo",1-e]}class km extends bn{fromJulianDay(e){let t=super.fromJulianDay(e),i=Lr(t.era,t.year),[a,r]=Du(i);return new Rt(this,a,r,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Pu(e))}getEras(){return["before_minguo","minguo"]}balanceDate(e){let[t,i]=Du(Bf(e));e.era=t,e.year=i}isInverseEra(e){return e.era==="before_minguo"}getDaysInMonth(e){return super.getDaysInMonth(Pu(e))}getYearsInEra(e){return e.era==="before_minguo"?9999:9999-Cs}constructor(...e){super(...e),this.identifier="roc"}}function Pu(n){let[e,t]=qs(Bf(n));return new Rt(e,t,n.month,n.day)}const Lu=1948320,Iu=[0,31,62,93,124,155,186,216,246,276,306,336];class zm{fromJulianDay(e){let t=e-Lu,i=1+Math.floor((33*t+3)/12053),a=365*(i-1)+Math.floor((8*i+21)/33),r=t-a,s=r<216?Math.floor(r/31):Math.floor((r-6)/30),o=r-Iu[s]+1;return new Rt(this,i,s+1,o)}toJulianDay(e){let t=Lu-1+365*(e.year-1)+Math.floor((8*e.year+21)/33);return t+=Iu[e.month-1],t+=e.day,t}getMonthsInYear(){return 12}getDaysInMonth(e){return e.month<=6?31:e.month<=11||Ca(25*e.year+11,33)<8?30:29}getEras(){return["AP"]}getYearsInEra(){return 9377}constructor(){this.identifier="persian"}}const mo=78,Uu=80;class Vm extends bn{fromJulianDay(e){let t=super.fromJulianDay(e),i=t.year-mo,a=e-zi(t.era,t.year,1,1),r;a<Uu?(i--,r=gi(t.year-1)?31:30,a+=r+155+90+10):(r=gi(t.year)?31:30,a-=Uu);let s,o;if(a<r)s=1,o=a+1;else{let l=a-r;l<155?(s=Math.floor(l/31)+2,o=l%31+1):(l-=155,s=Math.floor(l/30)+7,o=l%30+1)}return new Rt(this,i,s,o)}toJulianDay(e){let t=e.year+mo,[i,a]=qs(t),r,s;return gi(a)?(r=31,s=zi(i,a,3,21)):(r=30,s=zi(i,a,3,22)),e.month===1?s+e.day-1:(s+=r+Math.min(e.month-2,5)*31,e.month>=8&&(s+=(e.month-7)*30),s+=e.day-1,s)}getDaysInMonth(e){return e.month===1&&gi(e.year+mo)||e.month>=2&&e.month<=6?31:30}getYearsInEra(){return 9919}getEras(){return["saka"]}balanceDate(){}constructor(...e){super(...e),this.identifier="indian"}}const Rs=1948440,Nu=1948439,ln=1300,ia=1600,Hm=460322;function Ds(n,e,t,i){return i+Math.ceil(29.5*(t-1))+(e-1)*354+Math.floor((3+11*e)/30)+n-1}function kf(n,e,t){let i=Math.floor((30*(t-e)+10646)/10631),a=Math.min(12,Math.ceil((t-(29+Ds(e,i,1,1)))/29.5)+1),r=t-Ds(e,i,a,1)+1;return new Rt(n,i,a,r)}function Ou(n){return(14+11*n)%30<11}class Cc{fromJulianDay(e){return kf(this,Rs,e)}toJulianDay(e){return Ds(Rs,e.year,e.month,e.day)}getDaysInMonth(e){let t=29+e.month%2;return e.month===12&&Ou(e.year)&&t++,t}getMonthsInYear(){return 12}getDaysInYear(e){return Ou(e.year)?355:354}getYearsInEra(){return 9665}getEras(){return["AH"]}constructor(){this.identifier="islamic-civil"}}class Gm extends Cc{fromJulianDay(e){return kf(this,Nu,e)}toJulianDay(e){return Ds(Nu,e.year,e.month,e.day)}constructor(...e){super(...e),this.identifier="islamic-tbla"}}const $m="qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";let dl,Da;function xs(n){return Hm+Da[n-ln]}function pr(n,e){let t=n-ln,i=1<<11-(e-1);return(dl[t]&i)===0?29:30}function Fu(n,e){let t=xs(n);for(let i=1;i<e;i++)t+=pr(n,i);return t}function Bu(n){return Da[n+1-ln]-Da[n-ln]}class Wm extends Cc{fromJulianDay(e){let t=e-Rs,i=xs(ln),a=xs(ia);if(t<i||t>a)return super.fromJulianDay(e);{let r=ln-1,s=1,o=1;for(;o>0;){r++,o=t-xs(r)+1;let l=Bu(r);if(o===l){s=12;break}else if(o<l){let c=pr(r,s);for(s=1;o>c;)o-=c,s++,c=pr(r,s);break}}return new Rt(this,r,s,t-Fu(r,s)+1)}}toJulianDay(e){return e.year<ln||e.year>ia?super.toJulianDay(e):Rs+Fu(e.year,e.month)+(e.day-1)}getDaysInMonth(e){return e.year<ln||e.year>ia?super.getDaysInMonth(e):pr(e.year,e.month)}getDaysInYear(e){return e.year<ln||e.year>ia?super.getDaysInYear(e):Bu(e.year)}constructor(){if(super(),this.identifier="islamic-umalqura",dl||(dl=new Uint16Array(Uint8Array.from(atob($m),e=>e.charCodeAt(0)).buffer)),!Da){Da=new Uint32Array(ia-ln+1);let e=0;for(let t=ln;t<=ia;t++){Da[t-ln]=e;for(let i=1;i<=12;i++)e+=pr(t,i)}}}}const ku=347997,zf=1080,Vf=24*zf,qm=29,Xm=12*zf+793,Ym=qm*Vf+Xm;function Oi(n){return Ca(n*7+1,19)<7}function _s(n){let e=Math.floor((235*n-234)/19),t=12084+13753*e,i=e*29+Math.floor(t/25920);return Ca(3*(i+1),7)<3&&(i+=1),i}function jm(n){let e=_s(n-1),t=_s(n);return _s(n+1)-t===356?2:t-e===382?1:0}function gr(n){return _s(n)+jm(n)}function Hf(n){return gr(n+1)-gr(n)}function Km(n){let e=Hf(n);switch(e>380&&(e-=30),e){case 353:return 0;case 354:return 1;case 355:return 2}}function zr(n,e){if(e>=6&&!Oi(n)&&e++,e===4||e===7||e===9||e===11||e===13)return 29;let t=Km(n);return e===2?t===2?30:29:e===3?t===0?29:30:e===6?Oi(n)?30:0:30}class Zm{fromJulianDay(e){let t=e-ku,i=t*Vf/Ym,a=Math.floor((19*i+234)/235)+1,r=gr(a),s=Math.floor(t-r);for(;s<1;)a--,r=gr(a),s=Math.floor(t-r);let o=1,l=0;for(;l<s;)l+=zr(a,o),o++;o--,l-=zr(a,o);let c=s-l;return new Rt(this,a,o,c)}toJulianDay(e){let t=gr(e.year);for(let i=1;i<e.month;i++)t+=zr(e.year,i);return t+e.day+ku}getDaysInMonth(e){return zr(e.year,e.month)}getMonthsInYear(e){return Oi(e.year)?13:12}getDaysInYear(e){return Hf(e.year)}getYearsInEra(){return 9999}getEras(){return["AM"]}balanceYearMonth(e,t){t.year!==e.year&&(Oi(t.year)&&!Oi(e.year)&&t.month>6?e.month--:!Oi(t.year)&&Oi(e.year)&&t.month>6&&e.month++)}constructor(){this.identifier="hebrew"}}const fl=1723856,zu=1824665,hl=5500;function Ps(n,e,t,i){return n+365*e+Math.floor(e/4)+30*(t-1)+i-1}function Rc(n,e){let t=Math.floor(4*(e-n)/1461),i=1+Math.floor((e-Ps(n,t,1,1))/30),a=e+1-Ps(n,t,i,1);return[t,i,a]}function Gf(n){return Math.floor(n%4/3)}function $f(n,e){return e%13!==0?30:Gf(n)+5}class Dc{fromJulianDay(e){let[t,i,a]=Rc(fl,e),r="AM";return t<=0&&(r="AA",t+=hl),new Rt(this,r,t,i,a)}toJulianDay(e){let t=e.year;return e.era==="AA"&&(t-=hl),Ps(fl,t,e.month,e.day)}getDaysInMonth(e){return $f(e.year,e.month)}getMonthsInYear(){return 13}getDaysInYear(e){return 365+Gf(e.year)}getYearsInEra(e){return e.era==="AA"?9999:9991}getEras(){return["AA","AM"]}constructor(){this.identifier="ethiopic"}}class Jm extends Dc{fromJulianDay(e){let[t,i,a]=Rc(fl,e);return t+=hl,new Rt(this,"AA",t,i,a)}getEras(){return["AA"]}getYearsInEra(){return 9999}constructor(...e){super(...e),this.identifier="ethioaa"}}class Qm extends Dc{fromJulianDay(e){let[t,i,a]=Rc(zu,e),r="CE";return t<=0&&(r="BCE",t=1-t),new Rt(this,r,t,i,a)}toJulianDay(e){let t=e.year;return e.era==="BCE"&&(t=1-t),Ps(zu,t,e.month,e.day)}getDaysInMonth(e){let t=e.year;return e.era==="BCE"&&(t=1-t),$f(t,e.month)}isInverseEra(e){return e.era==="BCE"}balanceDate(e){e.year<=0&&(e.era=e.era==="BCE"?"CE":"BCE",e.year=1-e.year)}getEras(){return["BCE","CE"]}getYearsInEra(e){return e.era==="BCE"?9999:9715}constructor(...e){super(...e),this.identifier="coptic"}}function e0(n){switch(n){case"buddhist":return new Bm;case"ethiopic":return new Dc;case"ethioaa":return new Jm;case"coptic":return new Qm;case"hebrew":return new Zm;case"indian":return new Vm;case"islamic-civil":return new Cc;case"islamic-tbla":return new Gm;case"islamic-umalqura":return new Wm;case"japanese":return new Fm;case"persian":return new zm;case"roc":return new km;case"gregory":default:return new bn}}let go=new Map;class $n{format(e){return this.formatter.format(e)}formatToParts(e){return this.formatter.formatToParts(e)}formatRange(e,t){if(typeof this.formatter.formatRange=="function")return this.formatter.formatRange(e,t);if(t<e)throw new RangeError("End date must be >= start date");return`${this.formatter.format(e)} – ${this.formatter.format(t)}`}formatRangeToParts(e,t){if(typeof this.formatter.formatRangeToParts=="function")return this.formatter.formatRangeToParts(e,t);if(t<e)throw new RangeError("End date must be >= start date");let i=this.formatter.formatToParts(e),a=this.formatter.formatToParts(t);return[...i.map(r=>({...r,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(r=>({...r,source:"endRange"}))]}resolvedOptions(){let e=this.formatter.resolvedOptions();return i0()&&(this.resolvedHourCycle||(this.resolvedHourCycle=a0(e.locale,this.options)),e.hourCycle=this.resolvedHourCycle,e.hour12=this.resolvedHourCycle==="h11"||this.resolvedHourCycle==="h12"),e.calendar==="ethiopic-amete-alem"&&(e.calendar="ethioaa"),e}constructor(e,t={}){this.formatter=Wf(e,t),this.options=t}}const t0={true:{ja:"h11"},false:{}};function Wf(n,e={}){if(typeof e.hour12=="boolean"&&n0()){e={...e};let a=t0[String(e.hour12)][n.split("-")[0]],r=e.hour12?"h12":"h23";e.hourCycle=a??r,delete e.hour12}let t=n+(e?Object.entries(e).sort((a,r)=>a[0]<r[0]?-1:1).join():"");if(go.has(t))return go.get(t);let i=new Intl.DateTimeFormat(n,e);return go.set(t,i),i}let xo=null;function n0(){return xo==null&&(xo=new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:!1}).format(new Date(2020,2,3,0))==="24"),xo}let _o=null;function i0(){return _o==null&&(_o=new Intl.DateTimeFormat("fr",{hour:"numeric",hour12:!1}).resolvedOptions().hourCycle==="h12"),_o}function a0(n,e){if(!e.timeStyle&&!e.hour)return;n=n.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,""),n+=(n.includes("-u-")?"":"-u")+"-nu-latn";let t=Wf(n,{...e,timeZone:void 0}),i=parseInt(t.formatToParts(new Date(2020,2,3,0)).find(r=>r.type==="hour").value,10),a=parseInt(t.formatToParts(new Date(2020,2,3,23)).find(r=>r.type==="hour").value,10);if(i===0&&a===23)return"h23";if(i===24&&a===23)return"h24";if(i===0&&a===11)return"h11";if(i===12&&a===11)return"h12";throw new Error("Unexpected hour cycle result")}function xn(n,e=Ka()){return Pc(n)?n.toDate():n.toDate(e)}function r0(n){return n instanceof Fa}function Pc(n){return n instanceof Ba}function s0(n){return r0(n)||Pc(n)}function br(n){if(n instanceof Date){const e=n.getFullYear(),t=n.getMonth()+1;return new Date(e,t,0).getDate()}else return n.set({day:100}).day}function Gi(n,e){return n.compare(e)<0}function vs(n,e){return n.compare(e)>0}function o0(n,e){return n.compare(e)<=0}function l0(n,e){return n.compare(e)>=0}function c0(n,e,t){return l0(n,e)&&o0(n,t)}function vo(n,e,t){return vs(n,e)&&Gi(n,t)}function u0(n,e,t){const i=Ef(n,t);return e>i?n.subtract({days:i+7-e}):e===i?n:n.subtract({days:i-e})}function d0(n,e,t){const i=Ef(n,t),a=e===0?6:e-1;return i===a?n:i>a?n.add({days:7-i+a}):n.add({days:a-i})}function f0(n,e,t,i,a){if(t===void 0&&i===void 0&&a===void 0)return!0;let r=n.add({days:1});if((i?.(r)||t?.(r))&&!a?.(r))return!1;const s=e;for(;r.compare(s)<0;)if(r=r.add({days:1}),(i?.(r)||t?.(r))&&!a?.(r))return!1;return!0}function qf(n){const{defaultValue:e,defaultPlaceholder:t,granularity:i="day",locale:a="en"}=n;if(Array.isArray(e)&&e.length)return e.at(-1).copy();if(e&&!Array.isArray(e))return e.copy();if(t)return t.copy();const r=new Date,s=r.getFullYear(),o=r.getMonth()+1,l=r.getDate(),c=["hour","minute","second"],u=new $n(a),d=e0(u.resolvedOptions().calendar);return c.includes(i??"day")?jt(new Fa(s,o,l,0,0,0),d):jt(new Rt(s,o,l),d)}function h0(n,e){const t=[];for(let i=0;i<n.length;i+=e)t.push(n.slice(i,i+e));return t}function Xf(n){const e=n.querySelector("[data-selected]");if(e)return e.focus();const t=n.querySelector("[data-today]");if(t)return t.focus();const i=n.querySelector("[data-reka-calendar-day]");if(i)return i.focus()}function pl(n,e){const t=[];let i=n.add({days:1});const a=e;for(;i.compare(a)<0;)t.push(i),i=i.add({days:1});return t}function yo(n){const{dateObj:e,weekStartsOn:t,fixedWeeks:i,locale:a}=n,r=br(e),s=Array.from({length:r},(m,f)=>e.set({day:f+1})),o=ol(e),l=Su(e),c=u0(o,t,a),u=d0(l,t,a),d=pl(c.subtract({days:1}),o),h=pl(l,u.add({days:1})),p=d.length+s.length+h.length;if(i&&p<42){const m=42-p;let f=h[h.length-1];f||(f=Su(e));const v=Array.from({length:m},(y,E)=>{const T=E+1;return f.add({days:T})});h.push(...v)}const x=d.concat(s,h),g=h0(x,7);return{value:e,cells:x,rows:g}}function Ri(n){const{numberOfMonths:e,dateObj:t,...i}=n,a=[];if(!e||e===1)return a.push(yo({...i,dateObj:t})),a;a.push(yo({...i,dateObj:t}));for(let r=1;r<e;r++){const s=t.add({months:r});a.push(yo({...i,dateObj:s}))}return a}function p0(n,e={}){const t=Oe(n);function i(){return t.value}function a(m){t.value=m}function r(m,f){return new $n(t.value,{...e,...f}).format(m)}function s(m,f=!0){return s0(m)&&f?r(xn(m),{dateStyle:"long",timeStyle:"long"}):r(xn(m),{dateStyle:"long"})}function o(m,f={}){return new $n(t.value,{...e,month:"long",year:"numeric",...f}).format(m)}function l(m,f={}){return new $n(t.value,{...e,month:"long",...f}).format(m)}function c(){const m=wf(Ka());return[1,2,3,4,5,6,7,8,9,10,11,12].map(v=>({label:l(xn(m.set({month:v}))),value:v}))}function u(m,f={}){return new $n(t.value,{...e,year:"numeric",...f}).format(m)}function d(m,f){return Pc(m)?new $n(t.value,{...e,...f,timeZone:m.timeZone}).formatToParts(xn(m)):new $n(t.value,{...e,...f}).formatToParts(xn(m))}function h(m,f="narrow"){return new $n(t.value,{...e,weekday:f}).format(m)}function p(m){const v=new $n(t.value,{...e,hour:"numeric",minute:"numeric"}).formatToParts(m).find(y=>y.type==="dayPeriod")?.value;return v==="PM"||v==="p.m."?"PM":"AM"}const x={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};function g(m,f,v={}){const y={...x,...v},T=d(m,y).find(w=>w.type===f);return T?T.value:""}return{setLocale:a,getLocale:i,fullMonth:l,fullYear:u,fullMonthAndYear:o,toParts:d,custom:r,part:g,dayPeriod:p,selectedDate:s,dayOfWeek:h,getMonths:c}}function Yf(n){const e=hc({dir:Oe("ltr")});return K(()=>n?.value||e.dir?.value||"ltr")}let bo=0;function m0(){$i(n=>{if(!pc)return;const e=document.querySelectorAll("[data-reka-focus-guard]");document.body.insertAdjacentElement("afterbegin",e[0]??Vu()),document.body.insertAdjacentElement("beforeend",e[1]??Vu()),bo++,n(()=>{bo===1&&document.querySelectorAll("[data-reka-focus-guard]").forEach(t=>t.remove()),bo--})})}function Vu(){const n=document.createElement("span");return n.setAttribute("data-reka-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}function jf(n,e){const t=Ep(!1,300),i=Oe(null),a=wp();function r(){i.value=null,t.value=!1}function s(o,l){const c=o.currentTarget,u={x:o.clientX,y:o.clientY},d=g0(u,c.getBoundingClientRect()),h=x0(u,d),p=_0(l.getBoundingClientRect()),x=y0([...h,...p]);i.value=x,t.value=!0}return $i(o=>{if(n.value&&e.value){const l=u=>s(u,e.value),c=u=>s(u,n.value);n.value.addEventListener("pointerleave",l),e.value.addEventListener("pointerleave",c),o(()=>{n.value?.removeEventListener("pointerleave",l),e.value?.removeEventListener("pointerleave",c)})}}),$i(o=>{if(i.value){const l=c=>{if(!i.value||!(c.target instanceof Element))return;const u=c.target,d={x:c.clientX,y:c.clientY},h=n.value?.contains(u)||e.value?.contains(u),p=!v0(d,i.value),x=!!u.closest("[data-grace-area-trigger]");h?r():(p||x)&&(r(),a.trigger())};n.value?.ownerDocument.addEventListener("pointermove",l),o(()=>n.value?.ownerDocument.removeEventListener("pointermove",l))}}),{isPointerInTransit:t,onPointerExit:a.on}}function g0(n,e){const t=Math.abs(e.top-n.y),i=Math.abs(e.bottom-n.y),a=Math.abs(e.right-n.x),r=Math.abs(e.left-n.x);switch(Math.min(t,i,a,r)){case r:return"left";case a:return"right";case t:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function x0(n,e,t=5){const i=[];switch(e){case"top":i.push({x:n.x-t,y:n.y+t},{x:n.x+t,y:n.y+t});break;case"bottom":i.push({x:n.x-t,y:n.y-t},{x:n.x+t,y:n.y-t});break;case"left":i.push({x:n.x+t,y:n.y-t},{x:n.x+t,y:n.y+t});break;case"right":i.push({x:n.x-t,y:n.y-t},{x:n.x-t,y:n.y+t});break}return i}function _0(n){const{top:e,right:t,bottom:i,left:a}=n;return[{x:a,y:e},{x:t,y:e},{x:t,y:i},{x:a,y:i}]}function v0(n,e){const{x:t,y:i}=n;let a=!1;for(let r=0,s=e.length-1;r<e.length;s=r++){const o=e[r].x,l=e[r].y,c=e[s].x,u=e[s].y;l>i!=u>i&&t<(c-o)*(i-l)/(u-l)+o&&(a=!a)}return a}function y0(n){const e=n.slice();return e.sort((t,i)=>t.x<i.x?-1:t.x>i.x?1:t.y<i.y?-1:t.y>i.y?1:0),b0(e)}function b0(n){if(n.length<=1)return n.slice();const e=[];for(let i=0;i<n.length;i++){const a=n[i];for(;e.length>=2;){const r=e[e.length-1],s=e[e.length-2];if((r.x-s.x)*(a.y-s.y)>=(r.y-s.y)*(a.x-s.x))e.pop();else break}e.push(a)}e.pop();const t=[];for(let i=n.length-1;i>=0;i--){const a=n[i];for(;t.length>=2;){const r=t[t.length-1],s=t[t.length-2];if((r.x-s.x)*(a.y-s.y)>=(r.y-s.y)*(a.x-s.x))t.pop();else break}t.push(a)}return t.pop(),e.length===1&&t.length===1&&e[0].x===t[0].x&&e[0].y===t[0].y?e:e.concat(t)}var M0=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},aa=new WeakMap,Vr=new WeakMap,Hr={},Mo=0,Kf=function(n){return n&&(n.host||Kf(n.parentNode))},S0=function(n,e){return e.map(function(t){if(n.contains(t))return t;var i=Kf(t);return i&&n.contains(i)?i:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},E0=function(n,e,t,i){var a=S0(e,Array.isArray(n)?n:[n]);Hr[t]||(Hr[t]=new WeakMap);var r=Hr[t],s=[],o=new Set,l=new Set(a),c=function(d){!d||o.has(d)||(o.add(d),c(d.parentNode))};a.forEach(c);var u=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(h){if(o.has(h))u(h);else try{var p=h.getAttribute(i),x=p!==null&&p!=="false",g=(aa.get(h)||0)+1,m=(r.get(h)||0)+1;aa.set(h,g),r.set(h,m),s.push(h),g===1&&x&&Vr.set(h,!0),m===1&&h.setAttribute(t,"true"),x||h.setAttribute(i,"true")}catch(f){console.error("aria-hidden: cannot operate on ",h,f)}})};return u(e),o.clear(),Mo++,function(){s.forEach(function(d){var h=aa.get(d)-1,p=r.get(d)-1;aa.set(d,h),r.set(d,p),h||(Vr.has(d)||d.removeAttribute(i),Vr.delete(d)),p||d.removeAttribute(t)}),Mo--,Mo||(aa=new WeakMap,aa=new WeakMap,Vr=new WeakMap,Hr={})}},w0=function(n,e,t){t===void 0&&(t="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),a=M0(n);return a?(i.push.apply(i,Array.from(a.querySelectorAll("[aria-live], script"))),E0(i,a,t,"aria-hidden")):function(){return null}};function T0(n){let e;Ht(()=>ff(n),t=>{t?e=w0(t):e&&e()}),Ya(()=>{e&&e()})}function Lc(n,e="reka"){return`${e}-${Tp?.()}`}function Ic(){return{ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",SPACE_CODE:"Space"}}function Zf(n){const e=hc({locale:Oe("en")});return K(()=>n?.value||e.locale?.value||"en")}function A0(n){const e=Oe(),t=K(()=>e.value?.width??0),i=K(()=>e.value?.height??0);return On(()=>{const a=ff(n);if(a){e.value={width:a.offsetWidth,height:a.offsetHeight};const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const o=s[0];let l,c;if("borderBoxSize"in o){const u=o.borderBoxSize,d=Array.isArray(u)?u[0]:u;l=d.inlineSize,c=d.blockSize}else l=a.offsetWidth,c=a.offsetHeight;e.value={width:l,height:c}});return r.observe(a,{box:"border-box"}),()=>r.unobserve(a)}else e.value=void 0}),{width:t,height:i}}const C0=Ap(()=>Oe([]));function R0(){const n=C0();return{add(e){const t=n.value[0];e!==t&&t?.pause(),n.value=Hu(n.value,e),n.value.unshift(e)},remove(e){n.value=Hu(n.value,e),n.value[0]?.resume()}}}function Hu(n,e){const t=[...n],i=t.indexOf(e);return i!==-1&&t.splice(i,1),t}function D0(n){return n.filter(e=>e.tagName!=="A")}var P0=Ee({__name:"FocusScope",props:{loop:{type:Boolean,required:!1,default:!1},trapped:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["mountAutoFocus","unmountAutoFocus"],setup(n,{emit:e}){const t=n,i=e,{currentRef:a,currentElement:r}=bt(),s=Oe(null),o=R0(),l=Hs({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});$i(u=>{if(!pc)return;const d=r.value;if(!t.trapped)return;function h(m){if(l.paused||!d)return;const f=m.target;d.contains(f)?s.value=f:Ai(s.value,{select:!0})}function p(m){if(l.paused||!d)return;const f=m.relatedTarget;f!==null&&(d.contains(f)||Ai(s.value,{select:!0}))}function x(m){d.contains(s.value)||Ai(d)}document.addEventListener("focusin",h),document.addEventListener("focusout",p);const g=new MutationObserver(x);d&&g.observe(d,{childList:!0,subtree:!0}),u(()=>{document.removeEventListener("focusin",h),document.removeEventListener("focusout",p),g.disconnect()})}),$i(async u=>{const d=r.value;if(await ja(),!d)return;o.add(l);const h=lo();if(!d.contains(h)){const x=new CustomEvent(co,_u);d.addEventListener(co,g=>i("mountAutoFocus",g)),d.dispatchEvent(x),x.defaultPrevented||(Rp(D0(Dp(d)),{select:!0}),lo()===h&&Ai(d))}u(()=>{d.removeEventListener(co,m=>i("mountAutoFocus",m));const x=new CustomEvent(uo,_u),g=m=>{i("unmountAutoFocus",m)};d.addEventListener(uo,g),d.dispatchEvent(x),setTimeout(()=>{x.defaultPrevented||Ai(h??document.body,{select:!0}),d.removeEventListener(uo,g),o.remove(l)},0)})});function c(u){if(!t.loop&&!t.trapped||l.paused)return;const d=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,h=lo();if(d&&h){const p=u.currentTarget,[x,g]=Cp(p);x&&g?!u.shiftKey&&h===g?(u.preventDefault(),t.loop&&Ai(x,{select:!0})):u.shiftKey&&h===x&&(u.preventDefault(),t.loop&&Ai(g,{select:!0})):h===p&&u.preventDefault()}}return(u,d)=>(ie(),ue(R(tt),{ref_key:"currentRef",ref:a,tabindex:"-1","as-child":u.asChild,as:u.as,onKeydown:c},{default:ne(()=>[ve(u.$slots,"default")]),_:3},8,["as-child","as"]))}}),L0=P0;function I0(n){function e(i){return Array.isArray(n.date.value)?n.date.value.some(a=>Pt(a,i)):n.date.value?Pt(n.date.value,i):!1}const t=K(()=>{if(Array.isArray(n.date.value)){if(!n.date.value.length)return!1;for(const i of n.date.value)if(n.isDateDisabled?.(i)||n.isDateUnavailable?.(i))return!0}else{if(!n.date.value)return!1;if(n.isDateDisabled?.(n.date.value)||n.isDateUnavailable?.(n.date.value))return!0}return!1});return{isDateSelected:e,isInvalid:t}}function U0(n,e){const t=e(n),i=t.compare(n),a={};return i>=7&&(a.day=1),i>=br(n)&&(a.month=1),t.set({...a})}function N0(n,e){const t=e(n),i=n.compare(t),a={};return i>=7&&(a.day=35),i>=br(n)&&(a.month=13),t.set({...a})}function O0(n,e){return e(n)}function F0(n,e){return e(n)}function Jf(n){const e=p0(n.locale.value),t=K(()=>{const g={calendar:n.placeholder.value.calendar.identifier};return n.placeholder.value.calendar.identifier==="gregory"&&n.placeholder.value.era==="BC"&&(g.era="short"),g}),i=Oe(Ri({dateObj:n.placeholder.value,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value})),a=K(()=>i.value.map(g=>g.value));function r(g){return!a.value.some(m=>bu(g,m))}const s=g=>{if(!n.maxValue.value||!i.value.length)return!1;if(n.disabled.value)return!0;const m=i.value[i.value.length-1].value;if(!g&&!n.nextPage.value){const v=m.add({months:1}).set({day:1});return vs(v,n.maxValue.value)}const f=U0(m,g||n.nextPage.value);return vs(f,n.maxValue.value)},o=g=>{if(!n.minValue.value||!i.value.length)return!1;if(n.disabled.value)return!0;const m=i.value[0].value;if(!g&&!n.prevPage.value){const v=m.subtract({months:1}).set({day:35});return Gi(v,n.minValue.value)}const f=N0(m,g||n.prevPage.value);return Gi(f,n.minValue.value)};function l(g){return!!(n.isDateDisabled?.(g)||n.disabled.value||n.maxValue.value&&vs(g,n.maxValue.value)||n.minValue.value&&Gi(g,n.minValue.value))}const c=g=>!!n.isDateUnavailable?.(g),u=K(()=>i.value.length?i.value[0].rows[0].map(g=>e.dayOfWeek(xn(g),n.weekdayFormat.value)):[]),d=g=>{const m=i.value[0].value;if(!g&&!n.nextPage.value){const E=m.add({months:n.pagedNavigation.value?n.numberOfMonths.value:1}),T=Ri({dateObj:E,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value});i.value=T,n.placeholder.value=T[0].value.set({day:1});return}const f=O0(m,g||n.nextPage.value),v=Ri({dateObj:f,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value});i.value=v;const y={};if(!g){const E=v[0].value.compare(m);E>=br(m)&&(y.day=1),E>=365&&(y.month=1)}n.placeholder.value=v[0].value.set({...y})},h=g=>{const m=i.value[0].value;if(!g&&!n.prevPage.value){const E=m.subtract({months:n.pagedNavigation.value?n.numberOfMonths.value:1}),T=Ri({dateObj:E,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value});i.value=T,n.placeholder.value=T[0].value.set({day:1});return}const f=F0(m,g||n.prevPage.value),v=Ri({dateObj:f,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value});i.value=v;const y={};if(!g){const E=m.compare(v[0].value);E>=br(m)&&(y.day=1),E>=365&&(y.month=1)}n.placeholder.value=v[0].value.set({...y})};Ht(n.placeholder,g=>{a.value.some(m=>bu(m,g))||(i.value=Ri({dateObj:g,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value}))}),Ht([n.locale,n.weekStartsOn,n.fixedWeeks,n.numberOfMonths],()=>{i.value=Ri({dateObj:n.placeholder.value,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value})});const p=K(()=>{if(!i.value.length)return"";if(n.locale.value!==e.getLocale()&&e.setLocale(n.locale.value),i.value.length===1){const w=i.value[0].value;return`${e.fullMonthAndYear(xn(w),t.value)}`}const g=xn(i.value[0].value),m=xn(i.value[i.value.length-1].value),f=e.fullMonth(g,t.value),v=e.fullMonth(m,t.value),y=e.fullYear(g,t.value),E=e.fullYear(m,t.value);return y===E?`${f} - ${v} ${E}`:`${f} ${y} - ${v} ${E}`}),x=K(()=>`${n.calendarLabel.value??"Event Date"}, ${p.value}`);return{isDateDisabled:l,isDateUnavailable:c,isNextButtonDisabled:s,isPrevButtonDisabled:o,grid:i,weekdays:u,visibleView:a,isOutsideVisibleView:r,formatter:e,nextPage:d,prevPage:h,headingValue:p,fullCalendarLabel:x}}const B0={style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute","white-space":"nowrap",width:"1px"}},k0={role:"heading","aria-level":"2"},[Za,z0]=Zi("CalendarRoot");var V0=Ee({__name:"CalendarRoot",props:{defaultValue:{type:null,required:!1,default:void 0},defaultPlaceholder:{type:null,required:!1},placeholder:{type:null,required:!1,default:void 0},pagedNavigation:{type:Boolean,required:!1,default:!1},preventDeselect:{type:Boolean,required:!1,default:!1},weekStartsOn:{type:Number,required:!1,default:0},weekdayFormat:{type:String,required:!1,default:"narrow"},calendarLabel:{type:String,required:!1},fixedWeeks:{type:Boolean,required:!1,default:!1},maxValue:{type:null,required:!1},minValue:{type:null,required:!1},locale:{type:String,required:!1},numberOfMonths:{type:Number,required:!1,default:1},disabled:{type:Boolean,required:!1,default:!1},readonly:{type:Boolean,required:!1,default:!1},initialFocus:{type:Boolean,required:!1,default:!1},isDateDisabled:{type:Function,required:!1,default:void 0},isDateUnavailable:{type:Function,required:!1,default:void 0},dir:{type:String,required:!1},nextPage:{type:Function,required:!1},prevPage:{type:Function,required:!1},modelValue:{type:null,required:!1},multiple:{type:Boolean,required:!1,default:!1},disableDaysOutsideCurrentView:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},emits:["update:modelValue","update:placeholder"],setup(n,{emit:e}){const t=n,i=e,{disabled:a,readonly:r,initialFocus:s,pagedNavigation:o,weekStartsOn:l,weekdayFormat:c,fixedWeeks:u,multiple:d,minValue:h,maxValue:p,numberOfMonths:x,preventDeselect:g,isDateDisabled:m,isDateUnavailable:f,calendarLabel:v,defaultValue:y,nextPage:E,prevPage:T,dir:w,locale:C,disableDaysOutsideCurrentView:I}=Gs(t),{primitiveElement:b,currentElement:M}=$s(),P=Zf(C),U=Yf(w),O=Wi(t,"modelValue",i,{defaultValue:y.value,passive:t.modelValue===void 0}),V=qf({defaultPlaceholder:t.placeholder,defaultValue:O.value,locale:t.locale}),$=Wi(t,"placeholder",i,{defaultValue:t.defaultPlaceholder??V.copy(),passive:t.placeholder===void 0});function W(Be){$.value=Be.copy()}const{fullCalendarLabel:J,headingValue:k,isDateDisabled:Q,isDateUnavailable:re,isNextButtonDisabled:_e,isPrevButtonDisabled:He,weekdays:Je,isOutsideVisibleView:st,nextPage:it,prevPage:Y,formatter:ee,grid:me}=Jf({locale:P,placeholder:$,weekStartsOn:l,fixedWeeks:u,numberOfMonths:x,minValue:h,maxValue:p,disabled:a,weekdayFormat:c,pagedNavigation:o,isDateDisabled:m.value,isDateUnavailable:f.value,calendarLabel:v,nextPage:E,prevPage:T}),{isInvalid:Ue,isDateSelected:we}=I0({date:O,isDateDisabled:Q,isDateUnavailable:re});Ht(O,Be=>{if(Array.isArray(Be)&&Be.length){const ke=Be[Be.length-1];ke&&!pi($.value,ke)&&W(ke)}else!Array.isArray(Be)&&Be&&!pi($.value,Be)&&W(Be)});function We(Be){if(d.value){if(!O.value)O.value=[Be.copy()];else if(Array.isArray(O.value)){if(O.value.findIndex(ot=>Pt(ot,Be))===-1)O.value=[...O.value,Be];else if(!g.value){const ot=O.value.filter(D=>!Pt(D,Be));if(!ot.length){$.value=Be.copy(),O.value=void 0;return}O.value=ot.map(D=>D.copy())}}}else{if(!O.value){O.value=Be.copy();return}!g.value&&pi(O.value,Be)?($.value=Be.copy(),O.value=void 0):O.value=Be.copy()}}return On(()=>{s.value&&Xf(M.value)}),z0({isDateUnavailable:re,dir:U,isDateDisabled:Q,locale:P,formatter:ee,modelValue:O,placeholder:$,disabled:a,initialFocus:s,pagedNavigation:o,grid:me,weekDays:Je,weekStartsOn:l,weekdayFormat:c,fixedWeeks:u,multiple:d,numberOfMonths:x,readonly:r,preventDeselect:g,fullCalendarLabel:J,headingValue:k,isInvalid:Ue,isDateSelected:we,isNextButtonDisabled:_e,isPrevButtonDisabled:He,isOutsideVisibleView:st,nextPage:it,prevPage:Y,parentElement:M,onPlaceholderChange:W,onDateChange:We,disableDaysOutsideCurrentView:I,minValue:h,maxValue:p}),(Be,ke)=>(ie(),ue(R(tt),{ref_key:"primitiveElement",ref:b,as:Be.as,"as-child":Be.asChild,"aria-label":R(J),"data-readonly":R(r)?"":void 0,"data-disabled":R(a)?"":void 0,"data-invalid":R(Ue)?"":void 0,dir:R(U)},{default:ne(()=>[ve(Be.$slots,"default",{date:R($),grid:R(me),weekDays:R(Je),weekStartsOn:R(l),locale:R(P),fixedWeeks:R(u),modelValue:R(O)}),mt("div",B0,[mt("div",k0,Lt(R(J)),1)])]),_:3},8,["as","as-child","aria-label","data-readonly","data-disabled","data-invalid","dir"]))}}),H0=V0,G0=Ee({__name:"CalendarCell",props:{date:{type:null,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"td"}},setup(n){const e=Za();return(t,i)=>(ie(),ue(R(tt),{as:t.as,"as-child":t.asChild,role:"gridcell","aria-selected":R(e).isDateSelected(t.date)?!0:void 0,"aria-disabled":R(e).isDateDisabled(t.date)||R(e).isDateUnavailable?.(t.date)||R(e).disableDaysOutsideCurrentView.value,"data-disabled":R(e).isDateDisabled(t.date)||R(e).disableDaysOutsideCurrentView.value?"":void 0},{default:ne(()=>[ve(t.$slots,"default")]),_:3},8,["as","as-child","aria-selected","aria-disabled","data-disabled"]))}}),$0=G0,W0=Ee({__name:"CalendarCellTrigger",props:{day:{type:null,required:!0},month:{type:null,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n,t=Ic(),i=Za(),{primitiveElement:a}=$s(),r=K(()=>e.day.day.toLocaleString(i.locale.value)),s=K(()=>i.formatter.custom(xn(e.day),{weekday:"long",month:"long",day:"numeric",year:"numeric"})),o=K(()=>i.isDateUnavailable?.(e.day)??!1),l=K(()=>Sf(e.day,Ka())),c=K(()=>!Mc(e.day,e.month)),u=K(()=>i.isOutsideVisibleView(e.day)),d=K(()=>i.isDateDisabled(e.day)||i.disableDaysOutsideCurrentView.value&&c.value),h=K(()=>!i.disabled.value&&Pt(e.day,i.placeholder.value)),p=K(()=>i.isDateSelected(e.day));function x(f){i.readonly.value||i.isDateDisabled(f)||i.isDateUnavailable?.(f)||i.onDateChange(f)}function g(){d.value||x(e.day)}function m(f){if(d.value)return;f.preventDefault(),f.stopPropagation();const v=i.parentElement.value,y=7,E=i.dir.value==="rtl"?-1:1;switch(f.code){case t.ARROW_RIGHT:T(e.day,E);break;case t.ARROW_LEFT:T(e.day,-E);break;case t.ARROW_UP:T(e.day,-y);break;case t.ARROW_DOWN:T(e.day,y);break;case t.ENTER:case t.SPACE_CODE:x(e.day)}function T(w,C){const I=w.add({days:C});if(i.minValue.value&&I.compare(i.minValue.value)<0||i.maxValue.value&&I.compare(i.maxValue.value)>0)return;const b=v.querySelector(`[data-value='${I.toString()}']:not([data-outside-view])`);if(!b){if(C>0){if(i.isNextButtonDisabled())return;i.nextPage()}else{if(i.isPrevButtonDisabled())return;i.prevPage()}ja(()=>{T(w,C)});return}if(b&&b.hasAttribute("data-disabled"))return T(I,C);i.onPlaceholderChange(I),b?.focus()}}return(f,v)=>(ie(),ue(R(tt),nt({ref_key:"primitiveElement",ref:a},e,{role:"button","aria-label":s.value,"data-reka-calendar-cell-trigger":"","aria-disabled":d.value||o.value?!0:void 0,"data-selected":p.value?!0:void 0,"data-value":f.day.toString(),"data-disabled":d.value?"":void 0,"data-unavailable":o.value?"":void 0,"data-today":l.value?"":void 0,"data-outside-view":c.value?"":void 0,"data-outside-visible-view":u.value?"":void 0,"data-focused":h.value?"":void 0,tabindex:h.value?0:c.value||d.value?void 0:-1,onClick:g,onKeydown:[rl(m,["up","down","left","right","space","enter"]),v[0]||(v[0]=rl(yr(()=>{},["prevent"]),["enter"]))]}),{default:ne(()=>[ve(f.$slots,"default",{dayValue:r.value,disabled:d.value,today:l.value,selected:p.value,outsideView:c.value,outsideVisibleView:u.value,unavailable:o.value},()=>[nn(Lt(r.value),1)])]),_:3},16,["aria-label","aria-disabled","data-selected","data-value","data-disabled","data-unavailable","data-today","data-outside-view","data-outside-visible-view","data-focused","tabindex"]))}}),q0=W0,X0=Ee({__name:"CalendarGrid",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"table"}},setup(n){const e=n,t=Za(),i=K(()=>t.disabled.value?!0:void 0),a=K(()=>t.readonly.value?!0:void 0);return(r,s)=>(ie(),ue(R(tt),nt(e,{tabindex:"-1",role:"grid","aria-readonly":a.value,"aria-disabled":i.value,"data-readonly":a.value&&"","data-disabled":i.value&&""}),{default:ne(()=>[ve(r.$slots,"default")]),_:3},16,["aria-readonly","aria-disabled","data-readonly","data-disabled"]))}}),Y0=X0,j0=Ee({__name:"CalendarGridBody",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"tbody"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),K0=j0,Z0=Ee({__name:"CalendarGridHead",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"thead"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),nt(e,{"aria-hidden":"true"}),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),J0=Z0,Q0=Ee({__name:"CalendarGridRow",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"tr"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),eg=Q0,tg=Ee({__name:"CalendarHeadCell",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"th"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),ng=tg,ig=Ee({__name:"CalendarHeader",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),ag=ig,rg=Ee({__name:"CalendarHeading",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n,t=Za();return(i,a)=>(ie(),ue(R(tt),nt(e,{"data-disabled":R(t).disabled.value?"":void 0}),{default:ne(()=>[ve(i.$slots,"default",{headingValue:R(t).headingValue.value},()=>[nn(Lt(R(t).headingValue.value),1)])]),_:3},16,["data-disabled"]))}}),sg=rg,og=Ee({__name:"CalendarNext",props:{nextPage:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=K(()=>i.disabled.value||i.isNextButtonDisabled(e.nextPage)),i=Za();return(a,r)=>(ie(),ue(R(tt),{as:e.as,"as-child":e.asChild,"aria-label":"Next page",type:a.as==="button"?"button":void 0,"aria-disabled":t.value||void 0,"data-disabled":t.value||void 0,disabled:t.value,onClick:r[0]||(r[0]=s=>R(i).nextPage(e.nextPage))},{default:ne(()=>[ve(a.$slots,"default",{disabled:t.value},()=>[r[1]||(r[1]=nn(" Next page "))])]),_:3},8,["as","as-child","type","aria-disabled","data-disabled","disabled"]))}}),lg=og,cg=Ee({__name:"CalendarPrev",props:{prevPage:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=K(()=>i.disabled.value||i.isPrevButtonDisabled(e.prevPage)),i=Za();return(a,r)=>(ie(),ue(R(tt),{"aria-label":"Previous page",as:e.as,"as-child":e.asChild,type:a.as==="button"?"button":void 0,"aria-disabled":t.value||void 0,"data-disabled":t.value||void 0,disabled:t.value,onClick:r[0]||(r[0]=s=>R(i).prevPage(e.prevPage))},{default:ne(()=>[ve(a.$slots,"default",{disabled:t.value},()=>[r[1]||(r[1]=nn(" Prev page "))])]),_:3},8,["as","as-child","type","aria-disabled","data-disabled","disabled"]))}}),ug=cg;const[Qf,dg]=Zi("PopperRoot");var fg=Ee({inheritAttrs:!1,__name:"PopperRoot",setup(n){const e=Oe();return dg({anchor:e,onAnchorChange:t=>e.value=t}),(t,i)=>ve(t.$slots,"default")}}),Uc=fg,hg=Ee({__name:"PopperAnchor",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const e=n,{forwardRef:t,currentElement:i}=bt(),a=Qf();return hf(()=>{a.onAnchorChange(e.reference??i.value)}),(r,s)=>(ie(),ue(R(tt),{ref:R(t),as:r.as,"as-child":r.asChild},{default:ne(()=>[ve(r.$slots,"default")]),_:3},8,["as","as-child"]))}}),Ys=hg;const pg={key:0,d:"M0 0L6 6L12 0"},mg={key:1,d:"M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"};var gg=Ee({__name:"Arrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const e=n;return bt(),(t,i)=>(ie(),ue(R(tt),nt(e,{width:t.width,height:t.height,viewBox:t.asChild?void 0:"0 0 12 6",preserveAspectRatio:t.asChild?void 0:"none"}),{default:ne(()=>[ve(t.$slots,"default",{},()=>[t.rounded?(ie(),Bt("path",mg)):(ie(),Bt("path",pg))])]),_:3},16,["width","height","viewBox","preserveAspectRatio"]))}}),xg=gg;function _g(n){return n!==null}function vg(n){return{name:"transformOrigin",options:n,fn(e){const{placement:t,rects:i,middlewareData:a}=e,s=a.arrow?.centerOffset!==0,o=s?0:n.arrowWidth,l=s?0:n.arrowHeight,[c,u]=ml(t),d={start:"0%",center:"50%",end:"100%"}[u],h=(a.arrow?.x??0)+o/2,p=(a.arrow?.y??0)+l/2;let x="",g="";return c==="bottom"?(x=s?d:`${h}px`,g=`${-l}px`):c==="top"?(x=s?d:`${h}px`,g=`${i.floating.height+l}px`):c==="right"?(x=`${-l}px`,g=s?d:`${p}px`):c==="left"&&(x=`${i.floating.width+l}px`,g=s?d:`${p}px`),{data:{x,y:g}}}}}function ml(n){const[e,t="center"]=n.split("-");return[e,t]}const yg=["top","right","bottom","left"],yi=Math.min,en=Math.max,Ls=Math.round,Gr=Math.floor,Pn=n=>({x:n,y:n}),bg={left:"right",right:"left",bottom:"top",top:"bottom"},Mg={start:"end",end:"start"};function gl(n,e,t){return en(n,yi(e,t))}function ai(n,e){return typeof n=="function"?n(e):n}function ri(n){return n.split("-")[0]}function Ja(n){return n.split("-")[1]}function Nc(n){return n==="x"?"y":"x"}function Oc(n){return n==="y"?"height":"width"}const Sg=new Set(["top","bottom"]);function Cn(n){return Sg.has(ri(n))?"y":"x"}function Fc(n){return Nc(Cn(n))}function Eg(n,e,t){t===void 0&&(t=!1);const i=Ja(n),a=Fc(n),r=Oc(a);let s=a==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Is(s)),[s,Is(s)]}function wg(n){const e=Is(n);return[xl(n),e,xl(e)]}function xl(n){return n.replace(/start|end/g,e=>Mg[e])}const Gu=["left","right"],$u=["right","left"],Tg=["top","bottom"],Ag=["bottom","top"];function Cg(n,e,t){switch(n){case"top":case"bottom":return t?e?$u:Gu:e?Gu:$u;case"left":case"right":return e?Tg:Ag;default:return[]}}function Rg(n,e,t,i){const a=Ja(n);let r=Cg(ri(n),t==="start",i);return a&&(r=r.map(s=>s+"-"+a),e&&(r=r.concat(r.map(xl)))),r}function Is(n){return n.replace(/left|right|bottom|top/g,e=>bg[e])}function Dg(n){return{top:0,right:0,bottom:0,left:0,...n}}function eh(n){return typeof n!="number"?Dg(n):{top:n,right:n,bottom:n,left:n}}function Us(n){const{x:e,y:t,width:i,height:a}=n;return{width:i,height:a,top:t,left:e,right:e+i,bottom:t+a,x:e,y:t}}function Wu(n,e,t){let{reference:i,floating:a}=n;const r=Cn(e),s=Fc(e),o=Oc(s),l=ri(e),c=r==="y",u=i.x+i.width/2-a.width/2,d=i.y+i.height/2-a.height/2,h=i[o]/2-a[o]/2;let p;switch(l){case"top":p={x:u,y:i.y-a.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-a.width,y:d};break;default:p={x:i.x,y:i.y}}switch(Ja(e)){case"start":p[s]-=h*(t&&c?-1:1);break;case"end":p[s]+=h*(t&&c?-1:1);break}return p}const Pg=async(n,e,t)=>{const{placement:i="bottom",strategy:a="absolute",middleware:r=[],platform:s}=t,o=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:n,floating:e,strategy:a}),{x:u,y:d}=Wu(c,i,l),h=i,p={},x=0;for(let g=0;g<o.length;g++){const{name:m,fn:f}=o[g],{x:v,y,data:E,reset:T}=await f({x:u,y:d,initialPlacement:i,placement:h,strategy:a,middlewareData:p,rects:c,platform:s,elements:{reference:n,floating:e}});u=v??u,d=y??d,p={...p,[m]:{...p[m],...E}},T&&x<=50&&(x++,typeof T=="object"&&(T.placement&&(h=T.placement),T.rects&&(c=T.rects===!0?await s.getElementRects({reference:n,floating:e,strategy:a}):T.rects),{x:u,y:d}=Wu(c,h,l)),g=-1)}return{x:u,y:d,placement:h,strategy:a,middlewareData:p}};async function Mr(n,e){var t;e===void 0&&(e={});const{x:i,y:a,platform:r,rects:s,elements:o,strategy:l}=n,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=ai(e,n),x=eh(p),m=o[h?d==="floating"?"reference":"floating":d],f=Us(await r.getClippingRect({element:(t=await(r.isElement==null?void 0:r.isElement(m)))==null||t?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(o.floating)),boundary:c,rootBoundary:u,strategy:l})),v=d==="floating"?{x:i,y:a,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(o.floating)),E=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},T=Us(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:v,offsetParent:y,strategy:l}):v);return{top:(f.top-T.top+x.top)/E.y,bottom:(T.bottom-f.bottom+x.bottom)/E.y,left:(f.left-T.left+x.left)/E.x,right:(T.right-f.right+x.right)/E.x}}const Lg=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:i,placement:a,rects:r,platform:s,elements:o,middlewareData:l}=e,{element:c,padding:u=0}=ai(n,e)||{};if(c==null)return{};const d=eh(u),h={x:t,y:i},p=Fc(a),x=Oc(p),g=await s.getDimensions(c),m=p==="y",f=m?"top":"left",v=m?"bottom":"right",y=m?"clientHeight":"clientWidth",E=r.reference[x]+r.reference[p]-h[p]-r.floating[x],T=h[p]-r.reference[p],w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let C=w?w[y]:0;(!C||!await(s.isElement==null?void 0:s.isElement(w)))&&(C=o.floating[y]||r.floating[x]);const I=E/2-T/2,b=C/2-g[x]/2-1,M=yi(d[f],b),P=yi(d[v],b),U=M,O=C-g[x]-P,V=C/2-g[x]/2+I,$=gl(U,V,O),W=!l.arrow&&Ja(a)!=null&&V!==$&&r.reference[x]/2-(V<U?M:P)-g[x]/2<0,J=W?V<U?V-U:V-O:0;return{[p]:h[p]+J,data:{[p]:$,centerOffset:V-$-J,...W&&{alignmentOffset:J}},reset:W}}}),Ig=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t,i;const{placement:a,middlewareData:r,rects:s,initialPlacement:o,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:g=!0,...m}=ai(n,e);if((t=r.arrow)!=null&&t.alignmentOffset)return{};const f=ri(a),v=Cn(o),y=ri(o)===o,E=await(l.isRTL==null?void 0:l.isRTL(c.floating)),T=h||(y||!g?[Is(o)]:wg(o)),w=x!=="none";!h&&w&&T.push(...Rg(o,g,x,E));const C=[o,...T],I=await Mr(e,m),b=[];let M=((i=r.flip)==null?void 0:i.overflows)||[];if(u&&b.push(I[f]),d){const V=Eg(a,s,E);b.push(I[V[0]],I[V[1]])}if(M=[...M,{placement:a,overflows:b}],!b.every(V=>V<=0)){var P,U;const V=(((P=r.flip)==null?void 0:P.index)||0)+1,$=C[V];if($&&(!(d==="alignment"?v!==Cn($):!1)||M.every(k=>Cn(k.placement)===v?k.overflows[0]>0:!0)))return{data:{index:V,overflows:M},reset:{placement:$}};let W=(U=M.filter(J=>J.overflows[0]<=0).sort((J,k)=>J.overflows[1]-k.overflows[1])[0])==null?void 0:U.placement;if(!W)switch(p){case"bestFit":{var O;const J=(O=M.filter(k=>{if(w){const Q=Cn(k.placement);return Q===v||Q==="y"}return!0}).map(k=>[k.placement,k.overflows.filter(Q=>Q>0).reduce((Q,re)=>Q+re,0)]).sort((k,Q)=>k[1]-Q[1])[0])==null?void 0:O[0];J&&(W=J);break}case"initialPlacement":W=o;break}if(a!==W)return{reset:{placement:W}}}return{}}}};function qu(n,e){return{top:n.top-e.height,right:n.right-e.width,bottom:n.bottom-e.height,left:n.left-e.width}}function Xu(n){return yg.some(e=>n[e]>=0)}const Ug=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(e){const{rects:t}=e,{strategy:i="referenceHidden",...a}=ai(n,e);switch(i){case"referenceHidden":{const r=await Mr(e,{...a,elementContext:"reference"}),s=qu(r,t.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Xu(s)}}}case"escaped":{const r=await Mr(e,{...a,altBoundary:!0}),s=qu(r,t.floating);return{data:{escapedOffsets:s,escaped:Xu(s)}}}default:return{}}}}},th=new Set(["left","top"]);async function Ng(n,e){const{placement:t,platform:i,elements:a}=n,r=await(i.isRTL==null?void 0:i.isRTL(a.floating)),s=ri(t),o=Ja(t),l=Cn(t)==="y",c=th.has(s)?-1:1,u=r&&l?-1:1,d=ai(e,n);let{mainAxis:h,crossAxis:p,alignmentAxis:x}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return o&&typeof x=="number"&&(p=o==="end"?x*-1:x),l?{x:p*u,y:h*c}:{x:h*c,y:p*u}}const Og=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){var t,i;const{x:a,y:r,placement:s,middlewareData:o}=e,l=await Ng(e,n);return s===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:a+l.x,y:r+l.y,data:{...l,placement:s}}}}},Fg=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:i,placement:a}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:o={fn:m=>{let{x:f,y:v}=m;return{x:f,y:v}}},...l}=ai(n,e),c={x:t,y:i},u=await Mr(e,l),d=Cn(ri(a)),h=Nc(d);let p=c[h],x=c[d];if(r){const m=h==="y"?"top":"left",f=h==="y"?"bottom":"right",v=p+u[m],y=p-u[f];p=gl(v,p,y)}if(s){const m=d==="y"?"top":"left",f=d==="y"?"bottom":"right",v=x+u[m],y=x-u[f];x=gl(v,x,y)}const g=o.fn({...e,[h]:p,[d]:x});return{...g,data:{x:g.x-t,y:g.y-i,enabled:{[h]:r,[d]:s}}}}}},Bg=function(n){return n===void 0&&(n={}),{options:n,fn(e){const{x:t,y:i,placement:a,rects:r,middlewareData:s}=e,{offset:o=0,mainAxis:l=!0,crossAxis:c=!0}=ai(n,e),u={x:t,y:i},d=Cn(a),h=Nc(d);let p=u[h],x=u[d];const g=ai(o,e),m=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const y=h==="y"?"height":"width",E=r.reference[h]-r.floating[y]+m.mainAxis,T=r.reference[h]+r.reference[y]-m.mainAxis;p<E?p=E:p>T&&(p=T)}if(c){var f,v;const y=h==="y"?"width":"height",E=th.has(ri(a)),T=r.reference[d]-r.floating[y]+(E&&((f=s.offset)==null?void 0:f[d])||0)+(E?0:m.crossAxis),w=r.reference[d]+r.reference[y]+(E?0:((v=s.offset)==null?void 0:v[d])||0)-(E?m.crossAxis:0);x<T?x=T:x>w&&(x=w)}return{[h]:p,[d]:x}}}},kg=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(e){var t,i;const{placement:a,rects:r,platform:s,elements:o}=e,{apply:l=()=>{},...c}=ai(n,e),u=await Mr(e,c),d=ri(a),h=Ja(a),p=Cn(a)==="y",{width:x,height:g}=r.floating;let m,f;d==="top"||d==="bottom"?(m=d,f=h===(await(s.isRTL==null?void 0:s.isRTL(o.floating))?"start":"end")?"left":"right"):(f=d,m=h==="end"?"top":"bottom");const v=g-u.top-u.bottom,y=x-u.left-u.right,E=yi(g-u[m],v),T=yi(x-u[f],y),w=!e.middlewareData.shift;let C=E,I=T;if((t=e.middlewareData.shift)!=null&&t.enabled.x&&(I=y),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(C=v),w&&!h){const M=en(u.left,0),P=en(u.right,0),U=en(u.top,0),O=en(u.bottom,0);p?I=x-2*(M!==0||P!==0?M+P:en(u.left,u.right)):C=g-2*(U!==0||O!==0?U+O:en(u.top,u.bottom))}await l({...e,availableWidth:I,availableHeight:C});const b=await s.getDimensions(o.floating);return x!==b.width||g!==b.height?{reset:{rects:!0}}:{}}}};function js(){return typeof window<"u"}function Ji(n){return Bc(n)?(n.nodeName||"").toLowerCase():"#document"}function an(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Fn(n){var e;return(e=(Bc(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function Bc(n){return js()?n instanceof Node||n instanceof an(n).Node:!1}function Mn(n){return js()?n instanceof Element||n instanceof an(n).Element:!1}function In(n){return js()?n instanceof HTMLElement||n instanceof an(n).HTMLElement:!1}function Yu(n){return!js()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof an(n).ShadowRoot}const zg=new Set(["inline","contents"]);function Ir(n){const{overflow:e,overflowX:t,overflowY:i,display:a}=Sn(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!zg.has(a)}const Vg=new Set(["table","td","th"]);function Hg(n){return Vg.has(Ji(n))}const Gg=[":popover-open",":modal"];function Ks(n){return Gg.some(e=>{try{return n.matches(e)}catch{return!1}})}const $g=["transform","translate","scale","rotate","perspective"],Wg=["transform","translate","scale","rotate","perspective","filter"],qg=["paint","layout","strict","content"];function kc(n){const e=zc(),t=Mn(n)?Sn(n):n;return $g.some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||Wg.some(i=>(t.willChange||"").includes(i))||qg.some(i=>(t.contain||"").includes(i))}function Xg(n){let e=bi(n);for(;In(e)&&!ka(e);){if(kc(e))return e;if(Ks(e))return null;e=bi(e)}return null}function zc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Yg=new Set(["html","body","#document"]);function ka(n){return Yg.has(Ji(n))}function Sn(n){return an(n).getComputedStyle(n)}function Zs(n){return Mn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function bi(n){if(Ji(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Yu(n)&&n.host||Fn(n);return Yu(e)?e.host:e}function nh(n){const e=bi(n);return ka(e)?n.ownerDocument?n.ownerDocument.body:n.body:In(e)&&Ir(e)?e:nh(e)}function Sr(n,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const a=nh(n),r=a===((i=n.ownerDocument)==null?void 0:i.body),s=an(a);if(r){const o=_l(s);return e.concat(s,s.visualViewport||[],Ir(a)?a:[],o&&t?Sr(o):[])}return e.concat(a,Sr(a,[],t))}function _l(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function ih(n){const e=Sn(n);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const a=In(n),r=a?n.offsetWidth:t,s=a?n.offsetHeight:i,o=Ls(t)!==r||Ls(i)!==s;return o&&(t=r,i=s),{width:t,height:i,$:o}}function Vc(n){return Mn(n)?n:n.contextElement}function Pa(n){const e=Vc(n);if(!In(e))return Pn(1);const t=e.getBoundingClientRect(),{width:i,height:a,$:r}=ih(e);let s=(r?Ls(t.width):t.width)/i,o=(r?Ls(t.height):t.height)/a;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const jg=Pn(0);function ah(n){const e=an(n);return!zc()||!e.visualViewport?jg:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Kg(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==an(n)?!1:e}function Xi(n,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const a=n.getBoundingClientRect(),r=Vc(n);let s=Pn(1);e&&(i?Mn(i)&&(s=Pa(i)):s=Pa(n));const o=Kg(r,t,i)?ah(r):Pn(0);let l=(a.left+o.x)/s.x,c=(a.top+o.y)/s.y,u=a.width/s.x,d=a.height/s.y;if(r){const h=an(r),p=i&&Mn(i)?an(i):i;let x=h,g=_l(x);for(;g&&i&&p!==x;){const m=Pa(g),f=g.getBoundingClientRect(),v=Sn(g),y=f.left+(g.clientLeft+parseFloat(v.paddingLeft))*m.x,E=f.top+(g.clientTop+parseFloat(v.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,d*=m.y,l+=y,c+=E,x=an(g),g=_l(x)}}return Us({width:u,height:d,x:l,y:c})}function Js(n,e){const t=Zs(n).scrollLeft;return e?e.left+t:Xi(Fn(n)).left+t}function rh(n,e){const t=n.getBoundingClientRect(),i=t.left+e.scrollLeft-Js(n,t),a=t.top+e.scrollTop;return{x:i,y:a}}function Zg(n){let{elements:e,rect:t,offsetParent:i,strategy:a}=n;const r=a==="fixed",s=Fn(i),o=e?Ks(e.floating):!1;if(i===s||o&&r)return t;let l={scrollLeft:0,scrollTop:0},c=Pn(1);const u=Pn(0),d=In(i);if((d||!d&&!r)&&((Ji(i)!=="body"||Ir(s))&&(l=Zs(i)),In(i))){const p=Xi(i);c=Pa(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}const h=s&&!d&&!r?rh(s,l):Pn(0);return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:t.y*c.y-l.scrollTop*c.y+u.y+h.y}}function Jg(n){return Array.from(n.getClientRects())}function Qg(n){const e=Fn(n),t=Zs(n),i=n.ownerDocument.body,a=en(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=en(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-t.scrollLeft+Js(n);const o=-t.scrollTop;return Sn(i).direction==="rtl"&&(s+=en(e.clientWidth,i.clientWidth)-a),{width:a,height:r,x:s,y:o}}const ju=25;function ex(n,e){const t=an(n),i=Fn(n),a=t.visualViewport;let r=i.clientWidth,s=i.clientHeight,o=0,l=0;if(a){r=a.width,s=a.height;const u=zc();(!u||u&&e==="fixed")&&(o=a.offsetLeft,l=a.offsetTop)}const c=Js(i);if(c<=0){const u=i.ownerDocument,d=u.body,h=getComputedStyle(d),p=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,x=Math.abs(i.clientWidth-d.clientWidth-p);x<=ju&&(r-=x)}else c<=ju&&(r+=c);return{width:r,height:s,x:o,y:l}}const tx=new Set(["absolute","fixed"]);function nx(n,e){const t=Xi(n,!0,e==="fixed"),i=t.top+n.clientTop,a=t.left+n.clientLeft,r=In(n)?Pa(n):Pn(1),s=n.clientWidth*r.x,o=n.clientHeight*r.y,l=a*r.x,c=i*r.y;return{width:s,height:o,x:l,y:c}}function Ku(n,e,t){let i;if(e==="viewport")i=ex(n,t);else if(e==="document")i=Qg(Fn(n));else if(Mn(e))i=nx(e,t);else{const a=ah(n);i={x:e.x-a.x,y:e.y-a.y,width:e.width,height:e.height}}return Us(i)}function sh(n,e){const t=bi(n);return t===e||!Mn(t)||ka(t)?!1:Sn(t).position==="fixed"||sh(t,e)}function ix(n,e){const t=e.get(n);if(t)return t;let i=Sr(n,[],!1).filter(o=>Mn(o)&&Ji(o)!=="body"),a=null;const r=Sn(n).position==="fixed";let s=r?bi(n):n;for(;Mn(s)&&!ka(s);){const o=Sn(s),l=kc(s);!l&&o.position==="fixed"&&(a=null),(r?!l&&!a:!l&&o.position==="static"&&!!a&&tx.has(a.position)||Ir(s)&&!l&&sh(n,s))?i=i.filter(u=>u!==s):a=o,s=bi(s)}return e.set(n,i),i}function ax(n){let{element:e,boundary:t,rootBoundary:i,strategy:a}=n;const s=[...t==="clippingAncestors"?Ks(e)?[]:ix(e,this._c):[].concat(t),i],o=s[0],l=s.reduce((c,u)=>{const d=Ku(e,u,a);return c.top=en(d.top,c.top),c.right=yi(d.right,c.right),c.bottom=yi(d.bottom,c.bottom),c.left=en(d.left,c.left),c},Ku(e,o,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function rx(n){const{width:e,height:t}=ih(n);return{width:e,height:t}}function sx(n,e,t){const i=In(e),a=Fn(e),r=t==="fixed",s=Xi(n,!0,r,e);let o={scrollLeft:0,scrollTop:0};const l=Pn(0);function c(){l.x=Js(a)}if(i||!i&&!r)if((Ji(e)!=="body"||Ir(a))&&(o=Zs(e)),i){const p=Xi(e,!0,r,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else a&&c();r&&!i&&a&&c();const u=a&&!i&&!r?rh(a,o):Pn(0),d=s.left+o.scrollLeft-l.x-u.x,h=s.top+o.scrollTop-l.y-u.y;return{x:d,y:h,width:s.width,height:s.height}}function So(n){return Sn(n).position==="static"}function Zu(n,e){if(!In(n)||Sn(n).position==="fixed")return null;if(e)return e(n);let t=n.offsetParent;return Fn(n)===t&&(t=t.ownerDocument.body),t}function oh(n,e){const t=an(n);if(Ks(n))return t;if(!In(n)){let a=bi(n);for(;a&&!ka(a);){if(Mn(a)&&!So(a))return a;a=bi(a)}return t}let i=Zu(n,e);for(;i&&Hg(i)&&So(i);)i=Zu(i,e);return i&&ka(i)&&So(i)&&!kc(i)?t:i||Xg(n)||t}const ox=async function(n){const e=this.getOffsetParent||oh,t=this.getDimensions,i=await t(n.floating);return{reference:sx(n.reference,await e(n.floating),n.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function lx(n){return Sn(n).direction==="rtl"}const cx={convertOffsetParentRelativeRectToViewportRelativeRect:Zg,getDocumentElement:Fn,getClippingRect:ax,getOffsetParent:oh,getElementRects:ox,getClientRects:Jg,getDimensions:rx,getScale:Pa,isElement:Mn,isRTL:lx};function lh(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function ux(n,e){let t=null,i;const a=Fn(n);function r(){var o;clearTimeout(i),(o=t)==null||o.disconnect(),t=null}function s(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),r();const c=n.getBoundingClientRect(),{left:u,top:d,width:h,height:p}=c;if(o||e(),!h||!p)return;const x=Gr(d),g=Gr(a.clientWidth-(u+h)),m=Gr(a.clientHeight-(d+p)),f=Gr(u),y={rootMargin:-x+"px "+-g+"px "+-m+"px "+-f+"px",threshold:en(0,yi(1,l))||1};let E=!0;function T(w){const C=w[0].intersectionRatio;if(C!==l){if(!E)return s();C?s(!1,C):i=setTimeout(()=>{s(!1,1e-7)},1e3)}C===1&&!lh(c,n.getBoundingClientRect())&&s(),E=!1}try{t=new IntersectionObserver(T,{...y,root:a.ownerDocument})}catch{t=new IntersectionObserver(T,y)}t.observe(n)}return s(!0),r}function dx(n,e,t,i){i===void 0&&(i={});const{ancestorScroll:a=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Vc(n),u=a||r?[...c?Sr(c):[],...Sr(e)]:[];u.forEach(f=>{a&&f.addEventListener("scroll",t,{passive:!0}),r&&f.addEventListener("resize",t)});const d=c&&o?ux(c,t):null;let h=-1,p=null;s&&(p=new ResizeObserver(f=>{let[v]=f;v&&v.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var y;(y=p)==null||y.observe(e)})),t()}),c&&!l&&p.observe(c),p.observe(e));let x,g=l?Xi(n):null;l&&m();function m(){const f=Xi(n);g&&!lh(g,f)&&t(),g=f,x=requestAnimationFrame(m)}return t(),()=>{var f;u.forEach(v=>{a&&v.removeEventListener("scroll",t),r&&v.removeEventListener("resize",t)}),d?.(),(f=p)==null||f.disconnect(),p=null,l&&cancelAnimationFrame(x)}}const fx=Og,hx=Fg,Ju=Ig,px=kg,mx=Ug,gx=Lg,xx=Bg,_x=(n,e,t)=>{const i=new Map,a={platform:cx,...t},r={...a.platform,_c:i};return Pg(n,e,{...a,platform:r})};function vx(n){return n!=null&&typeof n=="object"&&"$el"in n}function vl(n){if(vx(n)){const e=n.$el;return Bc(e)&&Ji(e)==="#comment"?null:e}return n}function ya(n){return typeof n=="function"?n():R(n)}function yx(n){return{name:"arrow",options:n,fn(e){const t=vl(ya(n.element));return t==null?{}:gx({element:t,padding:n.padding}).fn(e)}}}function ch(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function Qu(n,e){const t=ch(n);return Math.round(e*t)/t}function bx(n,e,t){t===void 0&&(t={});const i=t.whileElementsMounted,a=K(()=>{var C;return(C=ya(t.open))!=null?C:!0}),r=K(()=>ya(t.middleware)),s=K(()=>{var C;return(C=ya(t.placement))!=null?C:"bottom"}),o=K(()=>{var C;return(C=ya(t.strategy))!=null?C:"absolute"}),l=K(()=>{var C;return(C=ya(t.transform))!=null?C:!0}),c=K(()=>vl(n.value)),u=K(()=>vl(e.value)),d=Oe(0),h=Oe(0),p=Oe(o.value),x=Oe(s.value),g=al({}),m=Oe(!1),f=K(()=>{const C={position:p.value,left:"0",top:"0"};if(!u.value)return C;const I=Qu(u.value,d.value),b=Qu(u.value,h.value);return l.value?{...C,transform:"translate("+I+"px, "+b+"px)",...ch(u.value)>=1.5&&{willChange:"transform"}}:{position:p.value,left:I+"px",top:b+"px"}});let v;function y(){if(c.value==null||u.value==null)return;const C=a.value;_x(c.value,u.value,{middleware:r.value,placement:s.value,strategy:o.value}).then(I=>{d.value=I.x,h.value=I.y,p.value=I.strategy,x.value=I.placement,g.value=I.middlewareData,m.value=C!==!1})}function E(){typeof v=="function"&&(v(),v=void 0)}function T(){if(E(),i===void 0){y();return}if(c.value!=null&&u.value!=null){v=i(c.value,u.value,y);return}}function w(){a.value||(m.value=!1)}return Ht([r,s,o,a],y,{flush:"sync"}),Ht([c,u],T,{flush:"sync"}),Ht(a,w,{flush:"sync"}),df()&&uf(E),{x:na(d),y:na(h),strategy:na(p),placement:na(x),middlewareData:na(g),isPositioned:na(m),floatingStyles:f,update:y}}const Mx={side:"bottom",sideOffset:0,sideFlip:!0,align:"center",alignOffset:0,alignFlip:!0,arrowPadding:0,avoidCollisions:!0,collisionBoundary:()=>[],collisionPadding:0,sticky:"partial",hideWhenDetached:!1,positionStrategy:"fixed",updatePositionStrategy:"optimized",prioritizePosition:!1},[Sx,Ex]=Zi("PopperContent");var wx=Ee({inheritAttrs:!1,__name:"PopperContent",props:Pp({side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},{...Mx}),emits:["placed"],setup(n,{emit:e}){const t=n,i=e,a=Qf(),{forwardRef:r,currentElement:s}=bt(),o=Oe(),l=Oe(),{width:c,height:u}=A0(l),d=K(()=>t.side+(t.align!=="center"?`-${t.align}`:"")),h=K(()=>typeof t.collisionPadding=="number"?t.collisionPadding:{top:0,right:0,bottom:0,left:0,...t.collisionPadding}),p=K(()=>Array.isArray(t.collisionBoundary)?t.collisionBoundary:[t.collisionBoundary]),x=K(()=>({padding:h.value,boundary:p.value.filter(_g),altBoundary:p.value.length>0})),g=K(()=>({mainAxis:t.sideFlip,crossAxis:t.alignFlip})),m=Lp(()=>[fx({mainAxis:t.sideOffset+u.value,alignmentAxis:t.alignOffset}),t.prioritizePosition&&t.avoidCollisions&&Ju({...x.value,...g.value}),t.avoidCollisions&&hx({mainAxis:!0,crossAxis:!!t.prioritizePosition,limiter:t.sticky==="partial"?xx():void 0,...x.value}),!t.prioritizePosition&&t.avoidCollisions&&Ju({...x.value,...g.value}),px({...x.value,apply:({elements:U,rects:O,availableWidth:V,availableHeight:$})=>{const{width:W,height:J}=O.reference,k=U.floating.style;k.setProperty("--reka-popper-available-width",`${V}px`),k.setProperty("--reka-popper-available-height",`${$}px`),k.setProperty("--reka-popper-anchor-width",`${W}px`),k.setProperty("--reka-popper-anchor-height",`${J}px`)}}),l.value&&yx({element:l.value,padding:t.arrowPadding}),vg({arrowWidth:c.value,arrowHeight:u.value}),t.hideWhenDetached&&mx({strategy:"referenceHidden",...x.value})]),f=K(()=>t.reference??a.anchor.value),{floatingStyles:v,placement:y,isPositioned:E,middlewareData:T}=bx(f,o,{strategy:t.positionStrategy,placement:d,whileElementsMounted:(...U)=>dx(...U,{layoutShift:!t.disableUpdateOnLayoutShift,animationFrame:t.updatePositionStrategy==="always"}),middleware:m}),w=K(()=>ml(y.value)[0]),C=K(()=>ml(y.value)[1]);hf(()=>{E.value&&i("placed")});const I=K(()=>T.value.arrow?.centerOffset!==0),b=Oe("");$i(()=>{s.value&&(b.value=window.getComputedStyle(s.value).zIndex)});const M=K(()=>T.value.arrow?.x??0),P=K(()=>T.value.arrow?.y??0);return Ex({placedSide:w,onArrowChange:U=>l.value=U,arrowX:M,arrowY:P,shouldHideArrow:I}),(U,O)=>(ie(),Bt("div",{ref_key:"floatingRef",ref:o,"data-reka-popper-content-wrapper":"",style:pf({...R(v),transform:R(E)?R(v).transform:"translate(0, -200%)",minWidth:"max-content",zIndex:b.value,"--reka-popper-transform-origin":[R(T).transformOrigin?.x,R(T).transformOrigin?.y].join(" "),...R(T).hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}})},[je(R(tt),nt({ref:R(r)},U.$attrs,{"as-child":t.asChild,as:U.as,"data-side":w.value,"data-align":C.value,style:{animation:R(E)?void 0:"none"}}),{default:ne(()=>[ve(U.$slots,"default")]),_:3},16,["as-child","as","data-side","data-align","style"])],4))}}),Hc=wx;const Tx={top:"bottom",right:"left",bottom:"top",left:"right"};var Ax=Ee({inheritAttrs:!1,__name:"PopperArrow",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const{forwardRef:e}=bt(),t=Sx(),i=K(()=>Tx[t.placedSide.value]);return(a,r)=>(ie(),Bt("span",{ref:s=>{R(t).onArrowChange(s)},style:pf({position:"absolute",left:R(t).arrowX?.value?`${R(t).arrowX?.value}px`:void 0,top:R(t).arrowY?.value?`${R(t).arrowY?.value}px`:void 0,[i.value]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[R(t).placedSide.value],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[R(t).placedSide.value],visibility:R(t).shouldHideArrow.value?"hidden":void 0})},[je(xg,nt(a.$attrs,{ref:R(e),style:{display:"block"},as:a.as,"as-child":a.asChild,rounded:a.rounded,width:a.width,height:a.height}),{default:ne(()=>[ve(a.$slots,"default")]),_:3},16,["as","as-child","rounded","width","height"])],4))}}),Gc=Ax;const[Qi,Cx]=Zi("PopoverRoot");var Rx=Ee({__name:"PopoverRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},modal:{type:Boolean,required:!1,default:!1}},emits:["update:open"],setup(n,{emit:e}){const t=n,i=e,{modal:a}=Gs(t),r=Wi(t,"open",i,{defaultValue:t.defaultOpen,passive:t.open===void 0}),s=Oe(),o=Oe(!1);return Cx({contentId:"",triggerId:"",modal:a,open:r,onOpenChange:l=>{r.value=l},onOpenToggle:()=>{r.value=!r.value},triggerElement:s,hasCustomAnchor:o}),(l,c)=>(ie(),ue(R(Uc),null,{default:ne(()=>[ve(l.$slots,"default",{open:R(r),close:()=>r.value=!1})]),_:3}))}}),Dx=Rx,Px=Ee({__name:"PopoverAnchor",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const e=n;bt();const t=Qi();return cf(()=>{t.hasCustomAnchor.value=!0}),Ya(()=>{t.hasCustomAnchor.value=!1}),(i,a)=>(ie(),ue(R(Ys),At(Ct(e)),{default:ne(()=>[ve(i.$slots,"default")]),_:3},16))}}),Lx=Px,Ix=Ee({__name:"PopoverArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const e=n;return bt(),(t,i)=>(ie(),ue(R(Gc),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),Ux=Ix,Nx=Ee({__name:"PopoverClose",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n;bt();const t=Qi();return(i,a)=>(ie(),ue(R(tt),{type:i.as==="button"?"button":void 0,as:i.as,"as-child":e.asChild,onClick:a[0]||(a[0]=r=>R(t).onOpenChange(!1))},{default:ne(()=>[ve(i.$slots,"default")]),_:3},8,["type","as","as-child"]))}}),Ox=Nx,Fx=Ee({__name:"PopoverContentImpl",props:{trapFocus:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,a=gc(Ip(t,"trapFocus","disableOutsidePointerEvents")),{forwardRef:r}=bt(),s=Qi();return m0(),(o,l)=>(ie(),ue(R(L0),{"as-child":"",loop:"",trapped:o.trapFocus,onMountAutoFocus:l[5]||(l[5]=c=>i("openAutoFocus",c)),onUnmountAutoFocus:l[6]||(l[6]=c=>i("closeAutoFocus",c))},{default:ne(()=>[je(R(xc),{"as-child":"","disable-outside-pointer-events":o.disableOutsidePointerEvents,onPointerDownOutside:l[0]||(l[0]=c=>i("pointerDownOutside",c)),onInteractOutside:l[1]||(l[1]=c=>i("interactOutside",c)),onEscapeKeyDown:l[2]||(l[2]=c=>i("escapeKeyDown",c)),onFocusOutside:l[3]||(l[3]=c=>i("focusOutside",c)),onDismiss:l[4]||(l[4]=c=>R(s).onOpenChange(!1))},{default:ne(()=>[je(R(Hc),nt(R(a),{id:R(s).contentId,ref:R(r),"data-state":R(s).open.value?"open":"closed","aria-labelledby":R(s).triggerId,style:{"--reka-popover-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-popover-content-available-width":"var(--reka-popper-available-width)","--reka-popover-content-available-height":"var(--reka-popper-available-height)","--reka-popover-trigger-width":"var(--reka-popper-anchor-width)","--reka-popover-trigger-height":"var(--reka-popper-anchor-height)"},role:"dialog"}),{default:ne(()=>[ve(o.$slots,"default")]),_:3},16,["id","data-state","aria-labelledby"])]),_:3},8,["disable-outside-pointer-events"])]),_:3},8,["trapped"]))}}),uh=Fx,Bx=Ee({__name:"PopoverContentModal",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,a=Qi(),r=Oe(!1);lm(!0);const s=Ei(t,i),{forwardRef:o,currentElement:l}=bt();return T0(l),(c,u)=>(ie(),ue(uh,nt(R(s),{ref:R(o),"trap-focus":R(a).open.value,"disable-outside-pointer-events":"",onCloseAutoFocus:u[0]||(u[0]=yr(d=>{i("closeAutoFocus",d),r.value||R(a).triggerElement.value?.focus()},["prevent"])),onPointerDownOutside:u[1]||(u[1]=d=>{i("pointerDownOutside",d);const h=d.detail.originalEvent,p=h.button===0&&h.ctrlKey===!0,x=h.button===2||p;r.value=x}),onFocusOutside:u[2]||(u[2]=yr(()=>{},["prevent"]))}),{default:ne(()=>[ve(c.$slots,"default")]),_:3},16,["trap-focus"]))}}),kx=Bx,zx=Ee({__name:"PopoverContentNonModal",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,a=Qi(),r=Oe(!1),s=Oe(!1),o=Ei(t,i);return(l,c)=>(ie(),ue(uh,nt(R(o),{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:c[0]||(c[0]=u=>{i("closeAutoFocus",u),u.defaultPrevented||(r.value||R(a).triggerElement.value?.focus(),u.preventDefault()),r.value=!1,s.value=!1}),onInteractOutside:c[1]||(c[1]=async u=>{i("interactOutside",u),u.defaultPrevented||(r.value=!0,u.detail.originalEvent.type==="pointerdown"&&(s.value=!0));const d=u.target;R(a).triggerElement.value?.contains(d)&&u.preventDefault(),u.detail.originalEvent.type==="focusin"&&s.value&&u.preventDefault()})}),{default:ne(()=>[ve(l.$slots,"default")]),_:3},16))}}),Vx=zx,Hx=Ee({__name:"PopoverContent",props:{forceMount:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,a=Qi(),r=Ei(t,i),{forwardRef:s}=bt();return a.contentId||=Lc(void 0,"reka-popover-content"),(o,l)=>(ie(),ue(R(_c),{present:o.forceMount||R(a).open.value},{default:ne(()=>[R(a).modal.value?(ie(),ue(kx,nt({key:0},R(r),{ref:R(s)}),{default:ne(()=>[ve(o.$slots,"default")]),_:3},16)):(ie(),ue(Vx,nt({key:1},R(r),{ref:R(s)}),{default:ne(()=>[ve(o.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),Gx=Hx,$x=Ee({__name:"PopoverPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(vc),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),Wx=$x,qx=Ee({__name:"PopoverTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=Qi(),{forwardRef:i,currentElement:a}=bt();return t.triggerId||=Lc(void 0,"reka-popover-trigger"),On(()=>{t.triggerElement.value=a.value}),(r,s)=>(ie(),ue(mf(R(t).hasCustomAnchor.value?R(tt):R(Ys)),{"as-child":""},{default:ne(()=>[je(R(tt),{id:R(t).triggerId,ref:R(i),type:r.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":R(t).open.value,"aria-controls":R(t).contentId,"data-state":R(t).open.value?"open":"closed",as:r.as,"as-child":e.asChild,onClick:R(t).onOpenToggle},{default:ne(()=>[ve(r.$slots,"default")]),_:3},8,["id","type","aria-expanded","aria-controls","data-state","as","as-child","onClick"])]),_:3}))}}),Xx=qx;function Yx(n){const e=K(()=>n.start.value?!!n.isDateDisabled(n.start.value):!1),t=K(()=>n.end.value?!!n.isDateDisabled(n.end.value):!1),i=K(()=>e.value||t.value?!1:!!(n.start.value&&n.end.value&&Gi(n.end.value,n.start.value))),a=h=>n.start.value?Pt(n.start.value,h):!1,r=h=>n.end.value?Pt(n.end.value,h):!1,s=h=>n.start.value&&Pt(n.start.value,h)||n.end.value&&Pt(n.end.value,h)?!0:n.end.value&&n.start.value?vo(h,n.start.value,n.end.value):!1,o=h=>{if(n.isDateDisabled(h))return!0;if(n.maximumDays?.value){if(n.start.value&&n.end.value){if(n.fixedDate.value){const p=pl(n.start.value,n.end.value).length;if(p<=n.maximumDays.value){const x=n.maximumDays.value-p-1,g=n.start.value.subtract({days:x}),m=n.end.value.add({days:x});return!vo(h,g,m)}}return!1}if(n.start.value){const p=n.start.value.add({days:n.maximumDays.value}),x=n.start.value.subtract({days:n.maximumDays.value});return!vo(h,x,p)}}return!n.start.value||n.end.value||Pt(n.start.value,h),!1},l=h=>!!n.isDateHighlightable?.(h),c=K(()=>{if(n.start.value&&n.end.value&&!n.fixedDate.value||!n.start.value||!n.focusedValue.value)return null;const h=Gi(n.start.value,n.focusedValue.value),p=h?n.start.value:n.focusedValue.value,x=h?n.focusedValue.value:n.start.value;if(Pt(p,x))return{start:p,end:x};if(n.maximumDays?.value&&!n.end.value){const m=h?p.add({days:n.maximumDays.value}):p.subtract({days:n.maximumDays.value});return{start:p,end:m}}return f0(p,x,n.allowNonContiguousRanges.value?()=>!1:n.isDateUnavailable,o,n.isDateHighlightable)?{start:p,end:x}:null});return{isInvalid:i,isSelected:s,isDateHighlightable:l,highlightedRange:c,isSelectionStart:a,isSelectionEnd:r,isHighlightedStart:h=>!c.value||!c.value.start?!1:Pt(c.value.start,h),isHighlightedEnd:h=>!c.value||!c.value.end?!1:Pt(c.value.end,h),isDateDisabled:o}}const jx={style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute","white-space":"nowrap",width:"1px"}},Kx={role:"heading","aria-level":"2"},[Qa,Zx]=Zi("RangeCalendarRoot");var Jx=Ee({__name:"RangeCalendarRoot",props:{defaultPlaceholder:{type:null,required:!1},defaultValue:{type:Object,required:!1,default:()=>({start:void 0,end:void 0})},modelValue:{type:[Object,null],required:!1},placeholder:{type:null,required:!1,default:void 0},allowNonContiguousRanges:{type:Boolean,required:!1,default:!1},pagedNavigation:{type:Boolean,required:!1,default:!1},preventDeselect:{type:Boolean,required:!1,default:!1},maximumDays:{type:Number,required:!1,default:void 0},weekStartsOn:{type:Number,required:!1,default:0},weekdayFormat:{type:String,required:!1,default:"narrow"},calendarLabel:{type:String,required:!1},fixedWeeks:{type:Boolean,required:!1,default:!1},maxValue:{type:null,required:!1},minValue:{type:null,required:!1},locale:{type:String,required:!1},numberOfMonths:{type:Number,required:!1,default:1},disabled:{type:Boolean,required:!1,default:!1},readonly:{type:Boolean,required:!1,default:!1},initialFocus:{type:Boolean,required:!1,default:!1},isDateDisabled:{type:Function,required:!1,default:void 0},isDateUnavailable:{type:Function,required:!1,default:void 0},isDateHighlightable:{type:Function,required:!1,default:void 0},dir:{type:String,required:!1},nextPage:{type:Function,required:!1},prevPage:{type:Function,required:!1},disableDaysOutsideCurrentView:{type:Boolean,required:!1,default:!1},fixedDate:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},emits:["update:modelValue","update:validModelValue","update:placeholder","update:startValue"],setup(n,{emit:e}){const t=n,i=e,{disabled:a,readonly:r,initialFocus:s,pagedNavigation:o,weekStartsOn:l,weekdayFormat:c,fixedWeeks:u,numberOfMonths:d,preventDeselect:h,isDateUnavailable:p,isDateHighlightable:x,isDateDisabled:g,calendarLabel:m,maxValue:f,minValue:v,dir:y,locale:E,nextPage:T,prevPage:w,allowNonContiguousRanges:C,disableDaysOutsideCurrentView:I,fixedDate:b,maximumDays:M}=Gs(t),{primitiveElement:P,currentElement:U}=$s(),O=Yf(y),V=Zf(E),$=Oe(),W=Oe(),J=Oe(!1),k=Wi(t,"modelValue",i,{defaultValue:t.defaultValue??{start:void 0,end:void 0},passive:t.modelValue===void 0}),Q=Oe(k.value);Ht(Q,X=>{i("update:validModelValue",X)});const re=qf({defaultPlaceholder:t.placeholder,defaultValue:k.value.start,locale:t.locale}),_e=Oe(k.value.start),He=Oe(k.value.end),Je=Wi(t,"placeholder",i,{defaultValue:t.defaultPlaceholder??re.copy(),passive:t.placeholder===void 0});function st(X){Je.value=X.copy()}const{fullCalendarLabel:it,headingValue:Y,isDateDisabled:ee,isDateUnavailable:me,isNextButtonDisabled:Ue,isPrevButtonDisabled:we,grid:We,weekdays:Be,isOutsideVisibleView:ke,nextPage:ot,prevPage:D,formatter:Ke}=Jf({locale:V,placeholder:Je,weekStartsOn:l,fixedWeeks:u,numberOfMonths:d,minValue:v,maxValue:f,disabled:a,weekdayFormat:c,pagedNavigation:o,isDateDisabled:g.value,isDateUnavailable:p.value,calendarLabel:m,nextPage:T,prevPage:w}),{isInvalid:Ye,isSelected:lt,isDateHighlightable:ye,highlightedRange:gt,isSelectionStart:Ae,isSelectionEnd:ze,isHighlightedStart:A,isHighlightedEnd:_,isDateDisabled:z}=Yx({start:_e,end:He,isDateDisabled:ee,isDateUnavailable:me,isDateHighlightable:x.value,focusedValue:W,allowNonContiguousRanges:C,fixedDate:b,maximumDays:M});Ht(k,(X,H)=>{(!H?.start&&X?.start||!X||!X.start||_e.value&&!pi(X.start,_e.value))&&(_e.value=X?.start?.copy?.()),(!H?.end&&X.end||!X||!X.end||He.value&&!pi(X.end,He.value))&&(He.value=X?.end?.copy?.())}),Ht(_e,X=>{X&&!pi(X,Je.value)&&st(X),i("update:startValue",X)}),Ht([_e,He],([X,H])=>{const be=k.value;be&&be.start&&be.end&&X&&H&&pi(be.start,X)&&pi(be.end,H)||(J.value=!0,H&&X?(Gi(H,X)?k.value={start:H.copy(),end:X.copy()}:k.value={start:X.copy(),end:H.copy()},J.value=!1,Q.value={start:k.value.start?.copy(),end:k.value.end?.copy()}):X?k.value={start:X.copy(),end:void 0}:k.value={start:H?.copy(),end:void 0})});const j=Ic();return Ts("keydown",X=>{X.key===j.ESCAPE&&J.value&&(_e.value=Q.value.start?.copy(),He.value=Q.value.end?.copy())}),Zx({isDateUnavailable:me,isDateHighlightable:ye,startValue:_e,endValue:He,formatter:Ke,modelValue:k,placeholder:Je,disabled:a,initialFocus:s,pagedNavigation:o,grid:We,weekDays:Be,weekStartsOn:l,weekdayFormat:c,fixedWeeks:u,numberOfMonths:d,readonly:r,preventDeselect:h,fullCalendarLabel:it,headingValue:Y,isInvalid:Ye,isDateDisabled:z,allowNonContiguousRanges:C,highlightedRange:gt,focusedValue:W,lastPressedDateValue:$,isSelected:lt,isSelectionEnd:ze,isSelectionStart:Ae,isNextButtonDisabled:Ue,isPrevButtonDisabled:we,isOutsideVisibleView:ke,nextPage:ot,prevPage:D,parentElement:U,onPlaceholderChange:st,locale:V,dir:O,isHighlightedStart:A,isHighlightedEnd:_,disableDaysOutsideCurrentView:I,fixedDate:b,maximumDays:M,minValue:v,maxValue:f}),On(()=>{s.value&&Xf(U.value)}),(X,H)=>(ie(),ue(R(tt),{ref_key:"primitiveElement",ref:P,as:X.as,"as-child":X.asChild,"aria-label":R(it),"data-readonly":R(r)?"":void 0,"data-disabled":R(a)?"":void 0,"data-invalid":R(Ye)?"":void 0,dir:R(O)},{default:ne(()=>[mt("div",jx,[mt("div",Kx,Lt(R(it)),1)]),ve(X.$slots,"default",{date:R(Je),grid:R(We),weekDays:R(Be),weekStartsOn:R(l),locale:R(V),fixedWeeks:R(u),modelValue:R(k)})]),_:3},8,["as","as-child","aria-label","data-readonly","data-disabled","data-invalid","dir"]))}}),Qx=Jx,e_=Ee({__name:"RangeCalendarCell",props:{date:{type:null,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"td"}},setup(n){const e=Qa();return(t,i)=>(ie(),ue(R(tt),{as:t.as,"as-child":t.asChild,role:"gridcell","aria-selected":R(e).isSelected(t.date)?!0:void 0,"aria-disabled":R(e).isDateDisabled(t.date)||R(e).isDateUnavailable?.(t.date)||R(e).disableDaysOutsideCurrentView.value,"data-disabled":R(e).isDateDisabled(t.date)||R(e).disableDaysOutsideCurrentView.value?"":void 0},{default:ne(()=>[ve(t.$slots,"default")]),_:3},8,["as","as-child","aria-selected","aria-disabled","data-disabled"]))}}),t_=e_,n_=Ee({__name:"RangeCalendarCellTrigger",props:{day:{type:null,required:!0},month:{type:null,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n,t=Qa(),i=Ic(),{primitiveElement:a}=$s(),r=K(()=>t.formatter.custom(xn(e.day),{weekday:"long",month:"long",day:"numeric",year:"numeric"})),s=K(()=>t.isDateUnavailable?.(e.day)??!1),o=K(()=>t.isSelected(e.day)),l=K(()=>t.isSelectionStart(e.day)),c=K(()=>t.isSelectionEnd(e.day)),u=K(()=>t.isHighlightedStart(e.day)),d=K(()=>t.isHighlightedEnd(e.day)),h=K(()=>t.highlightedRange.value?c0(e.day,t.highlightedRange.value.start,t.highlightedRange.value.end):!1),p=K(()=>t.allowNonContiguousRanges.value),x=K(()=>Sf(e.day,Ka())),g=K(()=>!Mc(e.day,e.month)),m=K(()=>t.isOutsideVisibleView(e.day)),f=K(()=>t.isDateDisabled(e.day)||t.disableDaysOutsideCurrentView.value&&g.value),v=K(()=>e.day.day.toLocaleString(t.locale.value)),y=K(()=>!t.disabled.value&&Pt(e.day,t.placeholder.value));function E(I,b){if(!t.readonly.value&&!(t.isDateDisabled(b)||t.isDateUnavailable?.(b))){if(t.lastPressedDateValue.value=b.copy(),t.startValue.value&&t.highlightedRange.value===null){if(Pt(b,t.startValue.value)&&!t.preventDeselect.value&&!t.endValue.value){t.startValue.value=void 0,t.onPlaceholderChange(b);return}else if(!t.endValue.value){I.preventDefault(),t.lastPressedDateValue.value&&Pt(t.lastPressedDateValue.value,b)&&(t.startValue.value=b.copy());return}}if(t.startValue.value&&t.endValue.value&&Pt(t.endValue.value,b)&&!t.preventDeselect.value){t.startValue.value=void 0,t.endValue.value=void 0,t.onPlaceholderChange(b);return}t.startValue.value?t.endValue.value?t.endValue.value&&t.startValue.value&&(t.fixedDate.value?t.fixedDate.value==="start"?b.compare(t.startValue.value)<0?t.startValue.value=b.copy():t.endValue.value=b.copy():t.fixedDate.value==="end"&&(b.compare(t.endValue.value)>0?t.endValue.value=b.copy():t.startValue.value=b.copy()):(t.endValue.value=void 0,t.startValue.value=b.copy())):t.endValue.value=b.copy():t.startValue.value=b.copy()}}function T(I){f.value||E(I,e.day)}function w(){f.value||t.isDateUnavailable?.(e.day)||(t.focusedValue.value=e.day.copy())}function C(I){if(f.value)return;I.preventDefault(),I.stopPropagation();const b=t.parentElement.value,M=7,P=t.dir.value==="rtl"?-1:1;switch(I.code){case i.ARROW_RIGHT:U(e.day,P);break;case i.ARROW_LEFT:U(e.day,-P);break;case i.ARROW_UP:U(e.day,-M);break;case i.ARROW_DOWN:U(e.day,M);break;case i.ENTER:case i.SPACE_CODE:E(I,e.day)}function U(O,V){const $=O.add({days:V});if(t.minValue.value&&$.compare(t.minValue.value)<0||t.maxValue.value&&$.compare(t.maxValue.value)>0)return;const W=b.querySelector(`[data-value='${$.toString()}']:not([data-outside-view])`);if(!W){if(V>0){if(t.isNextButtonDisabled())return;t.nextPage()}else{if(t.isPrevButtonDisabled())return;t.prevPage()}ja(()=>{U(O,V)});return}if(W&&W.hasAttribute("data-disabled"))return U($,V);t.onPlaceholderChange($),W?.focus()}}return(I,b)=>(ie(),ue(R(tt),{ref_key:"primitiveElement",ref:a,as:I.as,"as-child":I.asChild,role:"button","aria-label":r.value,"data-reka-calendar-cell-trigger":"","aria-selected":o.value&&(p.value||!s.value)?!0:void 0,"aria-disabled":f.value||s.value?!0:void 0,"data-highlighted":h.value&&(p.value||!s.value)?"":void 0,"data-selection-start":l.value?!0:void 0,"data-selection-end":c.value?!0:void 0,"data-highlighted-start":u.value?!0:void 0,"data-highlighted-end":d.value?!0:void 0,"data-selected":o.value&&(p.value||!s.value)?!0:void 0,"data-outside-visible-view":m.value?"":void 0,"data-value":I.day.toString(),"data-disabled":f.value?"":void 0,"data-unavailable":s.value?"":void 0,"data-today":x.value?"":void 0,"data-outside-view":g.value?"":void 0,"data-focused":y.value?"":void 0,tabindex:y.value?0:g.value||f.value?void 0:-1,onClick:T,onFocusin:w,onMouseenter:w,onKeydown:rl(C,["up","down","left","right","enter","space"])},{default:ne(()=>[ve(I.$slots,"default",{dayValue:v.value,disabled:f.value,today:x.value,selected:o.value,outsideView:g.value,outsideVisibleView:m.value,unavailable:s.value,highlighted:h.value&&(p.value||!s.value),highlightedStart:u.value,highlightedEnd:d.value,selectionStart:l.value,selectionEnd:c.value},()=>[nn(Lt(v.value),1)])]),_:3},8,["as","as-child","aria-label","aria-selected","aria-disabled","data-highlighted","data-selection-start","data-selection-end","data-highlighted-start","data-highlighted-end","data-selected","data-outside-visible-view","data-value","data-disabled","data-unavailable","data-today","data-outside-view","data-focused","tabindex"]))}}),i_=n_,a_=Ee({__name:"RangeCalendarGrid",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"table"}},setup(n){const e=n,t=Qa(),i=K(()=>t.disabled.value?!0:void 0),a=K(()=>t.readonly.value?!0:void 0);return(r,s)=>(ie(),ue(R(tt),nt(e,{tabindex:"-1",role:"grid","aria-readonly":a.value,"aria-disabled":i.value,"data-readonly":a.value&&"","data-disabled":i.value&&""}),{default:ne(()=>[ve(r.$slots,"default")]),_:3},16,["aria-readonly","aria-disabled","data-readonly","data-disabled"]))}}),r_=a_,s_=Ee({__name:"RangeCalendarGridBody",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"tbody"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),o_=s_,l_=Ee({__name:"RangeCalendarGridHead",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"thead"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),nt(e,{"aria-hidden":"true"}),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),c_=l_,u_=Ee({__name:"RangeCalendarGridRow",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"tr"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),d_=u_,f_=Ee({__name:"RangeCalendarHeadCell",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"th"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),h_=f_,p_=Ee({__name:"RangeCalendarHeader",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),m_=p_,g_=Ee({__name:"RangeCalendarHeading",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n,t=Qa();return(i,a)=>(ie(),ue(R(tt),nt(e,{"data-disabled":R(t).disabled.value?"":void 0}),{default:ne(()=>[ve(i.$slots,"default",{headingValue:R(t).headingValue.value},()=>[nn(Lt(R(t).headingValue.value),1)])]),_:3},16,["data-disabled"]))}}),x_=g_,__=Ee({__name:"RangeCalendarNext",props:{nextPage:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=K(()=>i.disabled.value||i.isNextButtonDisabled(e.nextPage)),i=Qa();return(a,r)=>(ie(),ue(R(tt),{as:a.as,"as-child":a.asChild,"aria-label":"Next page",type:a.as==="button"?"button":void 0,"aria-disabled":t.value||void 0,"data-disabled":t.value||void 0,disabled:t.value,onClick:r[0]||(r[0]=s=>R(i).nextPage(e.nextPage))},{default:ne(()=>[ve(a.$slots,"default",{disabled:t.value},()=>[r[1]||(r[1]=nn(" Next page "))])]),_:3},8,["as","as-child","type","aria-disabled","data-disabled","disabled"]))}}),v_=__,y_=Ee({__name:"RangeCalendarPrev",props:{prevPage:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=K(()=>i.disabled.value||i.isPrevButtonDisabled(e.prevPage)),i=Qa();return(a,r)=>(ie(),ue(R(tt),{as:a.as,"as-child":a.asChild,"aria-label":"Previous page",type:a.as==="button"?"button":void 0,"aria-disabled":t.value||void 0,"data-disabled":t.value||void 0,disabled:t.value,onClick:r[0]||(r[0]=s=>R(i).prevPage(e.prevPage))},{default:ne(()=>[ve(a.$slots,"default",{disabled:t.value},()=>[r[1]||(r[1]=nn(" Prev page "))])]),_:3},8,["as","as-child","type","aria-disabled","data-disabled","disabled"]))}}),b_=y_,M_=Ee({__name:"HoverCardArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const e=n;return bt(),(t,i)=>(ie(),ue(R(Gc),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),S_=M_;const[$c,E_]=Zi("HoverCardRoot");var w_=Ee({__name:"HoverCardRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},openDelay:{type:Number,required:!1,default:700},closeDelay:{type:Number,required:!1,default:300}},emits:["update:open"],setup(n,{emit:e}){const t=n,i=e,{openDelay:a,closeDelay:r}=Gs(t);bt();const s=Wi(t,"open",i,{defaultValue:t.defaultOpen,passive:t.open===void 0}),o=Oe(0),l=Oe(0),c=Oe(!1),u=Oe(!1),d=Oe(!1),h=Oe();function p(){clearTimeout(l.value),o.value=window.setTimeout(()=>s.value=!0,a.value)}function x(){clearTimeout(o.value),!c.value&&!u.value&&(l.value=window.setTimeout(()=>s.value=!1,r.value))}function g(){s.value=!1}return E_({open:s,onOpenChange(m){s.value=m},onOpen:p,onClose:x,onDismiss:g,hasSelectionRef:c,isPointerDownOnContentRef:u,isPointerInTransitRef:d,triggerElement:h}),(m,f)=>(ie(),ue(R(Uc),null,{default:ne(()=>[ve(m.$slots,"default",{open:R(s)})]),_:3}))}}),T_=w_;function yl(n){return e=>e.pointerType==="touch"?void 0:n()}function A_(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;t.nextNode();)e.push(t.currentNode);return e}var C_=Ee({__name:"HoverCardContentImpl",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(n,{emit:e}){const t=n,i=e,a=gc(t),{forwardRef:r,currentElement:s}=bt(),o=$c(),{isPointerInTransit:l,onPointerExit:c}=jf(o.triggerElement,s);Up(o.isPointerInTransitRef,l,{direction:"rtl"}),c(()=>{o.onClose()});const u=Oe(!1);let d;$i(p=>{if(u.value){const x=document.body;d=x.style.userSelect||x.style.webkitUserSelect,x.style.userSelect="none",x.style.webkitUserSelect="none",p(()=>{x.style.userSelect=d,x.style.webkitUserSelect=d})}});function h(){u.value=!1,o.isPointerDownOnContentRef.value=!1,ja(()=>{document.getSelection()?.toString()!==""&&(o.hasSelectionRef.value=!0)})}return On(()=>{s.value&&(document.addEventListener("pointerup",h),A_(s.value).forEach(x=>x.setAttribute("tabindex","-1")))}),Ya(()=>{document.removeEventListener("pointerup",h),o.hasSelectionRef.value=!1,o.isPointerDownOnContentRef.value=!1}),(p,x)=>(ie(),ue(R(xc),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:x[1]||(x[1]=g=>i("escapeKeyDown",g)),onPointerDownOutside:x[2]||(x[2]=g=>i("pointerDownOutside",g)),onFocusOutside:x[3]||(x[3]=yr(g=>i("focusOutside",g),["prevent"])),onDismiss:R(o).onDismiss},{default:ne(()=>[je(R(Hc),nt({...R(a),...p.$attrs},{ref:R(r),"data-state":R(o).open.value?"open":"closed",style:{userSelect:u.value?"text":void 0,WebkitUserSelect:u.value?"text":void 0,"--reka-hover-card-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-hover-card-content-available-width":"var(--reka-popper-available-width)","--reka-hover-card-content-available-height":"var(--reka-popper-available-height)","--reka-hover-card-trigger-width":"var(--reka-popper-anchor-width)","--reka-hover-card-trigger-height":"var(--reka-popper-anchor-height)"},onPointerdown:x[0]||(x[0]=g=>{g.currentTarget.contains(g.target)&&(u.value=!0),R(o).hasSelectionRef.value=!1,R(o).isPointerDownOnContentRef.value=!0})}),{default:ne(()=>[ve(p.$slots,"default")]),_:3},16,["data-state","style"])]),_:3},8,["onDismiss"]))}}),R_=C_,D_=Ee({__name:"HoverCardContent",props:{forceMount:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(n,{emit:e}){const a=Ei(n,e),{forwardRef:r}=bt(),s=$c();return(o,l)=>(ie(),ue(R(_c),{present:o.forceMount||R(s).open.value},{default:ne(()=>[je(R_,nt(R(a),{ref:R(r),onPointerenter:l[0]||(l[0]=c=>R(yl)(R(s).onOpen)(c))}),{default:ne(()=>[ve(o.$slots,"default")]),_:3},16)]),_:3},8,["present"]))}}),P_=D_,L_=Ee({__name:"HoverCardPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(vc),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),I_=L_,U_=Ee({__name:"HoverCardTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"a"}},setup(n){const{forwardRef:e,currentElement:t}=bt(),i=$c();i.triggerElement=t;function a(){setTimeout(()=>{!i.isPointerInTransitRef.value&&!i.open.value&&i.onClose()},0)}return(r,s)=>(ie(),ue(R(Ys),{"as-child":"",reference:r.reference},{default:ne(()=>[je(R(tt),{ref:R(e),"as-child":r.asChild,as:r.as,"data-state":R(i).open.value?"open":"closed","data-grace-area-trigger":"",onPointerenter:s[0]||(s[0]=o=>R(yl)(R(i).onOpen)(o)),onPointerleave:s[1]||(s[1]=o=>R(yl)(a)(o)),onFocus:s[2]||(s[2]=o=>R(i).onOpen()),onBlur:s[3]||(s[3]=o=>R(i).onClose())},{default:ne(()=>[ve(r.$slots,"default")]),_:3},8,["as-child","as","data-state"])]),_:3},8,["reference"]))}}),N_=U_,O_=Ee({__name:"TooltipArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const e=n;return bt(),(t,i)=>(ie(),ue(R(Gc),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),F_=O_;const dh="tooltip.open",[Qs,B_]=Zi("TooltipRoot");var k_=Ee({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},delayDuration:{type:Number,required:!1,default:void 0},disableHoverableContent:{type:Boolean,required:!1,default:void 0},disableClosingTrigger:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:void 0},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(n,{emit:e}){const t=n,i=e;bt();const a=yc(),r=K(()=>t.disableHoverableContent??a.disableHoverableContent.value),s=K(()=>t.disableClosingTrigger??a.disableClosingTrigger.value),o=K(()=>t.disabled??a.disabled.value),l=K(()=>t.delayDuration??a.delayDuration.value),c=K(()=>t.ignoreNonKeyboardFocus??a.ignoreNonKeyboardFocus.value),u=Wi(t,"open",i,{defaultValue:t.defaultOpen,passive:t.open===void 0});Ht(u,y=>{a.onClose&&(y?(a.onOpen(),document.dispatchEvent(new CustomEvent(dh))):a.onClose())});const d=Oe(!1),h=Oe(),p=K(()=>u.value?d.value?"delayed-open":"instant-open":"closed"),{start:x,stop:g}=Np(()=>{d.value=!0,u.value=!0},l,{immediate:!1});function m(){g(),d.value=!1,u.value=!0}function f(){g(),u.value=!1}function v(){x()}return B_({contentId:"",open:u,stateAttribute:p,trigger:h,onTriggerChange(y){h.value=y},onTriggerEnter(){a.isOpenDelayed.value?v():m()},onTriggerLeave(){r.value?f():g()},onOpen:m,onClose:f,disableHoverableContent:r,disableClosingTrigger:s,disabled:o,ignoreNonKeyboardFocus:c}),(y,E)=>(ie(),ue(R(Uc),null,{default:ne(()=>[ve(y.$slots,"default",{open:R(u)})]),_:3}))}}),z_=k_,V_=Ee({__name:"TooltipContentImpl",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1,default:0},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1,default:!0},collisionBoundary:{type:null,required:!1,default:()=>[]},collisionPadding:{type:[Number,Object],required:!1,default:0},arrowPadding:{type:Number,required:!1,default:0},sticky:{type:String,required:!1,default:"partial"},hideWhenDetached:{type:Boolean,required:!1,default:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(n,{emit:e}){const t=n,i=e,a=Qs(),{forwardRef:r}=bt(),s=bc(),o=K(()=>s.default?.({})),l=K(()=>{if(t.ariaLabel)return t.ariaLabel;let u="";function d(h){typeof h.children=="string"&&h.type!==Op?u+=h.children:Array.isArray(h.children)&&h.children.forEach(p=>d(p))}return o.value?.forEach(h=>d(h)),u}),c=K(()=>{const{ariaLabel:u,...d}=t;return d});return On(()=>{Ts(window,"scroll",u=>{u.target?.contains(a.trigger.value)&&a.onClose()}),Ts(window,dh,a.onClose)}),(u,d)=>(ie(),ue(R(xc),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:d[0]||(d[0]=h=>i("escapeKeyDown",h)),onPointerDownOutside:d[1]||(d[1]=h=>{R(a).disableClosingTrigger.value&&R(a).trigger.value?.contains(h.target)&&h.preventDefault(),i("pointerDownOutside",h)}),onFocusOutside:d[2]||(d[2]=yr(()=>{},["prevent"])),onDismiss:d[3]||(d[3]=h=>R(a).onClose())},{default:ne(()=>[je(R(Hc),nt({ref:R(r),"data-state":R(a).stateAttribute.value},{...u.$attrs,...c.value},{style:{"--reka-tooltip-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-tooltip-content-available-width":"var(--reka-popper-available-width)","--reka-tooltip-content-available-height":"var(--reka-popper-available-height)","--reka-tooltip-trigger-width":"var(--reka-popper-anchor-width)","--reka-tooltip-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:ne(()=>[ve(u.$slots,"default"),je(R(Fp),{id:R(a).contentId,role:"tooltip"},{default:ne(()=>[nn(Lt(l.value),1)]),_:1},8,["id"])]),_:3},16,["data-state"])]),_:3}))}}),fh=V_,H_=Ee({__name:"TooltipContentHoverable",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},setup(n){const t=gc(n),{forwardRef:i,currentElement:a}=bt(),{trigger:r,onClose:s}=Qs(),o=yc(),{isPointerInTransit:l,onPointerExit:c}=jf(r,a);return o.isPointerInTransitRef=l,c(()=>{s()}),(u,d)=>(ie(),ue(fh,nt({ref:R(i)},R(t)),{default:ne(()=>[ve(u.$slots,"default")]),_:3},16))}}),G_=H_,$_=Ee({__name:"TooltipContent",props:{forceMount:{type:Boolean,required:!1},ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(n,{emit:e}){const t=n,i=e,a=Qs(),r=Ei(t,i),{forwardRef:s}=bt();return(o,l)=>(ie(),ue(R(_c),{present:o.forceMount||R(a).open.value},{default:ne(()=>[(ie(),ue(mf(R(a).disableHoverableContent.value?fh:G_),nt({ref:R(s)},R(r)),{default:ne(()=>[ve(o.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),W_=$_,q_=Ee({__name:"TooltipPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(vc),At(Ct(e)),{default:ne(()=>[ve(t.$slots,"default")]),_:3},16))}}),X_=q_,Y_=Ee({__name:"TooltipTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=Qs(),i=yc();t.contentId||=Lc(void 0,"reka-tooltip-content");const{forwardRef:a,currentElement:r}=bt(),s=Oe(!1),o=Oe(!1),l=K(()=>t.disabled.value?{}:{click:g,focus:p,pointermove:d,pointerleave:h,pointerdown:u,blur:x});On(()=>{t.onTriggerChange(r.value)});function c(){setTimeout(()=>{s.value=!1},1)}function u(){t.open&&!t.disableClosingTrigger.value&&t.onClose(),s.value=!0,document.addEventListener("pointerup",c,{once:!0})}function d(m){m.pointerType!=="touch"&&!o.value&&!i.isPointerInTransitRef.value&&(t.onTriggerEnter(),o.value=!0)}function h(){t.onTriggerLeave(),o.value=!1}function p(m){s.value||t.ignoreNonKeyboardFocus.value&&!m.target.matches?.(":focus-visible")||t.onOpen()}function x(){t.onClose()}function g(){t.disableClosingTrigger.value||t.onClose()}return(m,f)=>(ie(),ue(R(Ys),{"as-child":"",reference:m.reference},{default:ne(()=>[je(R(tt),nt({ref:R(a),"aria-describedby":R(t).open.value?R(t).contentId:void 0,"data-state":R(t).stateAttribute.value,as:m.as,"as-child":e.asChild,"data-grace-area-trigger":""},gf(l.value)),{default:ne(()=>[ve(m.$slots,"default")]),_:3},16,["aria-describedby","data-state","as","as-child"])]),_:3},8,["reference"]))}}),j_=Y_;const Wc="181",La={ROTATE:0,DOLLY:1,PAN:2},Ta={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},K_=0,ed=1,Z_=2,hh=1,J_=2,Wn=3,Mi=0,Gt=1,Yn=2,ni=0,Ia=1,bl=2,td=3,nd=4,Q_=5,Fi=100,ev=101,tv=102,nv=103,iv=104,av=200,rv=201,sv=202,ov=203,Ml=204,Sl=205,lv=206,cv=207,uv=208,dv=209,fv=210,hv=211,pv=212,mv=213,gv=214,El=0,wl=1,Tl=2,za=3,Al=4,Cl=5,Rl=6,Dl=7,ph=0,xv=1,_v=2,_i=0,vv=1,yv=2,bv=3,Mv=4,Sv=5,Ev=6,wv=7,mh=300,Va=301,Ha=302,Pl=303,Ll=304,eo=306,Il=1e3,Jn=1001,Ul=1002,rn=1003,Tv=1004,$r=1005,dn=1006,Eo=1007,Vi=1008,Un=1009,gh=1010,xh=1011,Er=1012,qc=1013,Yi=1014,Qn=1015,er=1016,Xc=1017,Yc=1018,wr=1020,_h=35902,vh=35899,yh=1021,bh=1022,vn=1023,Tr=1026,Ar=1027,Mh=1028,jc=1029,Kc=1030,Zc=1031,Jc=1033,ys=33776,bs=33777,Ms=33778,Ss=33779,Nl=35840,Ol=35841,Fl=35842,Bl=35843,kl=36196,zl=37492,Vl=37496,Hl=37808,Gl=37809,$l=37810,Wl=37811,ql=37812,Xl=37813,Yl=37814,jl=37815,Kl=37816,Zl=37817,Jl=37818,Ql=37819,ec=37820,tc=37821,nc=36492,ic=36494,ac=36495,rc=36283,sc=36284,oc=36285,lc=36286,Av=3200,Cv=3201,Sh=0,Rv=1,mi="",cn="srgb",Ga="srgb-linear",Ns="linear",dt="srgb",ra=7680,id=519,Dv=512,Pv=513,Lv=514,Eh=515,Iv=516,Uv=517,Nv=518,Ov=519,ad=35044,rd="300 es",Rn=2e3,Os=2001;function wh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fv(){const n=Fs("canvas");return n.style.display="block",n}const sd={};function od(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ve(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Et(...n){const e="THREE."+n.shift();console.error(e,...n)}function Cr(...n){const e=n.join(" ");e in sd||(sd[e]=!0,Ve(...n))}function Bv(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ld=1234567;const xr=Math.PI/180,Rr=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Qc(n,e){return(n%e+e)%e}function kv(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function zv(n,e,t){return n!==e?(t-n)/(e-n):0}function _r(n,e,t){return(1-t)*n+t*e}function Vv(n,e,t,i){return _r(n,e,1-Math.exp(-t*i))}function Hv(n,e=1){return e-Math.abs(Qc(n,e*2)-e)}function Gv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $v(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qv(n,e){return n+Math.random()*(e-n)}function Xv(n){return n*(.5-Math.random())}function Yv(n){n!==void 0&&(ld=n);let e=ld+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jv(n){return n*xr}function Kv(n){return n*Rr}function Zv(n){return(n&n-1)===0&&n!==0}function Jv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ey(n,e,t,i,a){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+i)/2),u=s((e+i)/2),d=r((e-i)/2),h=s((e-i)/2),p=r((i-e)/2),x=s((i-e)/2);switch(a){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*p,o*u,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ba(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ma={DEG2RAD:xr,RAD2DEG:Rr,generateUUID:tr,clamp:Ze,euclideanModulo:Qc,mapLinear:kv,inverseLerp:zv,lerp:_r,damp:Vv,pingpong:Hv,smoothstep:Gv,smootherstep:$v,randInt:Wv,randFloat:qv,randFloatSpread:Xv,seededRandom:Yv,degToRad:jv,radToDeg:Kv,isPowerOfTwo:Zv,ceilPowerOfTwo:Jv,floorPowerOfTwo:Qv,setQuaternionFromProperEuler:ey,normalize:zt,denormalize:ba};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Si{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let l=i[a+0],c=i[a+1],u=i[a+2],d=i[a+3],h=r[s+0],p=r[s+1],x=r[s+2],g=r[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o>=1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==h||c!==p||u!==x){let m=l*h+c*p+u*x+d*g;m<0&&(h=-h,p=-p,x=-x,g=-g,m=-m);let f=1-o;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);f=Math.sin(f*v)/y,o=Math.sin(o*v)/y,l=l*f+h*o,c=c*f+p*o,u=u*f+x*o,d=d*f+g*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+x*o,d=d*f+g*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],d=r[s],h=r[s+1],p=r[s+2],x=r[s+3];return e[t]=o*x+u*d+l*p-c*h,e[t+1]=l*x+u*h+c*d-o*p,e[t+2]=c*x+u*p+o*h-l*d,e[t+3]=u*x-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),d=o(r/2),h=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+a*c-r*l,this._y=a*u+s*l+r*o-i*c,this._z=r*u+s*c+i*l-a*o,this._w=s*u-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),u=2*(o*t-r*a),d=2*(r*i-s*t);return this.x=t+l*c+s*d-o*u,this.y=i+l*u+o*c-r*d,this.z=a+l*d+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new B,cd=new Si;class qe{constructor(e,t,i,a,r,s,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,l,c)}set(e,t,i,a,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],g=a[0],m=a[3],f=a[6],v=a[1],y=a[4],E=a[7],T=a[2],w=a[5],C=a[8];return r[0]=s*g+o*v+l*T,r[3]=s*m+o*y+l*w,r[6]=s*f+o*E+l*C,r[1]=c*g+u*v+d*T,r[4]=c*m+u*y+d*w,r[7]=c*f+u*E+d*C,r[2]=h*g+p*v+x*T,r[5]=h*m+p*y+x*w,r[8]=h*f+p*E+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*r*u+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*r,p=c*r-s*l,x=t*d+i*h+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=d*g,e[1]=(a*c-u*i)*g,e[2]=(o*i-a*s)*g,e[3]=h*g,e[4]=(u*t-a*l)*g,e[5]=(a*r-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new qe,ud=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ty(){const n={enabled:!0,workingColorSpace:Ga,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===dt&&(a.r=ii(a.r),a.g=ii(a.g),a.b=ii(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===dt&&(a.r=Ua(a.r),a.g=Ua(a.g),a.b=Ua(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mi?Ns:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ga]:{primaries:e,whitePoint:i,transfer:Ns,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const rt=ty();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let sa;class ny{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sa===void 0&&(sa=Fs("canvas")),sa.width=e.width,sa.height=e.height;const a=sa.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=sa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ii(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iy=0;class eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Ao(a[s].image)):r.push(Ao(a[s]))}else r=Ao(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ny.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let ay=0;const Co=new B;class $t extends ea{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Jn,a=Jn,r=dn,s=Vi,o=vn,l=Un,c=$t.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=tr(),this.name="",this.source=new eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Il:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Il:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=mh;$t.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,a=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(p+1)/2,T=(f+1)/2,w=(u+h)/4,C=(d+g)/4,I=(x+m)/4;return y>E&&y>T?y<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(y),a=w/i,r=C/i):E>T?E<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(E),i=w/a,r=I/a):T<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(T),i=C/r,a=I/r),this.set(i,a,r,t),this}let v=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ry extends ea{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const a={width:e,height:t,depth:i.depth},r=new $t(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new eu(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends ry{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Th extends $t{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sy extends $t{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,pn):pn.fromBufferAttribute(r,s),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),qr.subVectors(this.max,sr),oa.subVectors(e.a,sr),la.subVectors(e.b,sr),ca.subVectors(e.c,sr),si.subVectors(la,oa),oi.subVectors(ca,la),Di.subVectors(oa,ca);let t=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Di.z,Di.y,si.z,0,-si.x,oi.z,0,-oi.x,Di.z,0,-Di.x,-si.y,si.x,0,-oi.y,oi.x,0,-Di.y,Di.x,0];return!Ro(t,oa,la,ca,qr)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,oa,la,ca,qr))?!1:(Xr.crossVectors(si,oi),t=[Xr.x,Xr.y,Xr.z],Ro(t,oa,la,ca,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new B,new B,new B,new B,new B,new B,new B,new B],pn=new B,Wr=new Ur,oa=new B,la=new B,ca=new B,si=new B,oi=new B,Di=new B,sr=new B,qr=new B,Xr=new B,Pi=new B;function Ro(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){Pi.fromArray(n,r);const o=a.x*Math.abs(Pi.x)+a.y*Math.abs(Pi.y)+a.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const oy=new Ur,or=new B,Do=new B;class to{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):oy.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(or,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Do)),this.expandByPoint(or.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kn=new B,Po=new B,Yr=new B,li=new B,Lo=new B,jr=new B,Io=new B;class tu{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Po.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Po);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Yr),o=li.dot(this.direction),l=-li.dot(Yr),c=li.lengthSq(),u=Math.abs(1-s*s);let d,h,p,x;if(u>0)if(d=s*l-o,h=s*o-l,x=r*u,d>=0)if(h>=-x)if(h<=x){const g=1/u;d*=g,h*=g,p=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-s*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(s*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=s>0?-r:r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Po).addScaledVector(Yr,h),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),a=kn.dot(kn)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,a,r){Lo.subVectors(t,e),jr.subVectors(i,e),Io.crossVectors(Lo,jr);let s=this.direction.dot(Io),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;li.subVectors(this.origin,e);const l=o*this.direction.dot(jr.crossVectors(li,jr));if(l<0)return null;const c=o*this.direction.dot(Lo.cross(li));if(c<0||l+c>s)return null;const u=-o*li.dot(Io);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,a,r,s,o,l,c,u,d,h,p,x,g,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,l,c,u,d,h,p,x,g,m)}set(e,t,i,a,r,s,o,l,c,u,d,h,p,x,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ua.setFromMatrixColumn(e,0).length(),r=1/ua.setFromMatrixColumn(e,1).length(),s=1/ua.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=s*u,p=s*d,x=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+x*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=x+p*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,x=c*u,g=c*d;t[0]=h+g*o,t[4]=x*o-p,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=p*o-x,t[6]=g+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,x=c*u,g=c*d;t[0]=h-g*o,t[4]=-s*d,t[8]=x+p*o,t[1]=p+x*o,t[5]=s*u,t[9]=g-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*d,x=o*u,g=o*d;t[0]=l*u,t[4]=x*c-p,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,x=o*l,g=o*c;t[0]=l*u,t[4]=g-h*d,t[8]=x*d+p,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+x,t[10]=h-g*d}else if(e.order==="XZY"){const h=s*l,p=s*c,x=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=s*u,t[9]=p*d-x,t[2]=x*d-p,t[6]=o*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ly,e,cy)}lookAt(e,t,i){const a=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ci.crossVectors(i,Jt),ci.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ci.crossVectors(i,Jt)),ci.normalize(),Kr.crossVectors(Jt,ci),a[0]=ci.x,a[4]=Kr.x,a[8]=Jt.x,a[1]=ci.y,a[5]=Kr.y,a[9]=Jt.y,a[2]=ci.z,a[6]=Kr.z,a[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],g=i[6],m=i[10],f=i[14],v=i[3],y=i[7],E=i[11],T=i[15],w=a[0],C=a[4],I=a[8],b=a[12],M=a[1],P=a[5],U=a[9],O=a[13],V=a[2],$=a[6],W=a[10],J=a[14],k=a[3],Q=a[7],re=a[11],_e=a[15];return r[0]=s*w+o*M+l*V+c*k,r[4]=s*C+o*P+l*$+c*Q,r[8]=s*I+o*U+l*W+c*re,r[12]=s*b+o*O+l*J+c*_e,r[1]=u*w+d*M+h*V+p*k,r[5]=u*C+d*P+h*$+p*Q,r[9]=u*I+d*U+h*W+p*re,r[13]=u*b+d*O+h*J+p*_e,r[2]=x*w+g*M+m*V+f*k,r[6]=x*C+g*P+m*$+f*Q,r[10]=x*I+g*U+m*W+f*re,r[14]=x*b+g*O+m*J+f*_e,r[3]=v*w+y*M+E*V+T*k,r[7]=v*C+y*P+E*$+T*Q,r[11]=v*I+y*U+E*W+T*re,r[15]=v*b+y*O+E*J+T*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+r*l*d-a*c*d-r*o*h+i*c*h+a*o*p-i*l*p)+g*(+t*l*p-t*c*h+r*s*h-a*s*p+a*c*u-r*l*u)+m*(+t*c*d-t*o*p-r*s*d+i*s*p+r*o*u-i*c*u)+f*(-a*o*u-t*l*d+t*o*h+a*s*d-i*s*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],x=e[12],g=e[13],m=e[14],f=e[15],v=d*m*c-g*h*c+g*l*p-o*m*p-d*l*f+o*h*f,y=x*h*c-u*m*c-x*l*p+s*m*p+u*l*f-s*h*f,E=u*g*c-x*d*c+x*o*p-s*g*p-u*o*f+s*d*f,T=x*d*l-u*g*l-x*o*h+s*g*h+u*o*m-s*d*m,w=t*v+i*y+a*E+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=v*C,e[1]=(g*h*r-d*m*r-g*a*p+i*m*p+d*a*f-i*h*f)*C,e[2]=(o*m*r-g*l*r+g*a*c-i*m*c-o*a*f+i*l*f)*C,e[3]=(d*l*r-o*h*r-d*a*c+i*h*c+o*a*p-i*l*p)*C,e[4]=y*C,e[5]=(u*m*r-x*h*r+x*a*p-t*m*p-u*a*f+t*h*f)*C,e[6]=(x*l*r-s*m*r-x*a*c+t*m*c+s*a*f-t*l*f)*C,e[7]=(s*h*r-u*l*r+u*a*c-t*h*c-s*a*p+t*l*p)*C,e[8]=E*C,e[9]=(x*d*r-u*g*r-x*i*p+t*g*p+u*i*f-t*d*f)*C,e[10]=(s*g*r-x*o*r+x*i*c-t*g*c-s*i*f+t*o*f)*C,e[11]=(u*o*r-s*d*r-u*i*c+t*d*c+s*i*p-t*o*p)*C,e[12]=T*C,e[13]=(u*g*a-x*d*a+x*i*h-t*g*h-u*i*m+t*d*m)*C,e[14]=(x*o*a-s*g*a-x*i*l+t*g*l+s*i*m-t*o*m)*C,e[15]=(s*d*a-u*o*a+u*i*l-t*d*l-s*i*h+t*o*h)*C,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*s,0,c*l-a*o,u*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,d=o+o,h=r*c,p=r*u,x=r*d,g=s*u,m=s*d,f=o*d,v=l*c,y=l*u,E=l*d,T=i.x,w=i.y,C=i.z;return a[0]=(1-(g+f))*T,a[1]=(p+E)*T,a[2]=(x-y)*T,a[3]=0,a[4]=(p-E)*w,a[5]=(1-(h+f))*w,a[6]=(m+v)*w,a[7]=0,a[8]=(x+y)*C,a[9]=(m-v)*C,a[10]=(1-(h+g))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let r=ua.set(a[0],a[1],a[2]).length();const s=ua.set(a[4],a[5],a[6]).length(),o=ua.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],mn.copy(this);const c=1/r,u=1/s,d=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,t.setFromRotationMatrix(mn),i.x=r,i.y=s,i.z=o,this}makePerspective(e,t,i,a,r,s,o=Rn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(i-a),h=(t+e)/(t-e),p=(i+a)/(i-a);let x,g;if(l)x=r/(s-r),g=s*r/(s-r);else if(o===Rn)x=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===Os)x=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=Rn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-a),h=-(t+e)/(t-e),p=-(i+a)/(i-a);let x,g;if(l)x=1/(s-r),g=s/(s-r);else if(o===Rn)x=-2/(s-r),g=-(s+r)/(s-r);else if(o===Os)x=-1/(s-r),g=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ua=new B,mn=new yt,ly=new B(0,0,0),cy=new B(1,1,1),ci=new B,Kr=new B,Jt=new B,fd=new yt,hd=new Si;class En{constructor(e=0,t=0,i=0,a=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],d=a[2],h=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hd.setFromEuler(this),this.setFromQuaternion(hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uy=0;const pd=new B,da=new Si,zn=new yt,Zr=new B,lr=new B,dy=new B,fy=new Si,md=new B(1,0,0),gd=new B(0,1,0),xd=new B(0,0,1),_d={type:"added"},hy={type:"removed"},fa={type:"childadded",child:null},Uo={type:"childremoved",child:null};class Wt extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new B,t=new En,i=new Si,a=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new yt},normalMatrix:{value:new qe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(md,e)}rotateY(e){return this.rotateOnAxis(gd,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return pd.copy(e).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(md,e)}translateY(e){return this.translateOnAxis(gd,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(lr,Zr,this.up):zn.lookAt(Zr,lr,this.up),this.quaternion.setFromRotationMatrix(zn),a&&(zn.extractRotation(a.matrixWorld),da.setFromRotationMatrix(zn),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_d),fa.child=e,this.dispatchEvent(fa),fa.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hy),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_d),fa.child=e,this.dispatchEvent(fa),fa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Wt.DEFAULT_UP=new B(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new B,Vn=new B,No=new B,Hn=new B,ha=new B,pa=new B,vd=new B,Oo=new B,Fo=new B,Bo=new B,ko=new ht,zo=new ht,Vo=new ht;class _n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),gn.subVectors(e,t),a.cross(gn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){gn.subVectors(a,t),Vn.subVectors(i,t),No.subVectors(e,t);const s=gn.dot(gn),o=gn.dot(Vn),l=gn.dot(No),c=Vn.dot(Vn),u=Vn.dot(No),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,x=(s*u-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,i,a,r,s,o,l){return this.getBarycoord(e,t,i,a,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(s,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,i,a,r,s){return ko.setScalar(0),zo.setScalar(0),Vo.setScalar(0),ko.fromBufferAttribute(e,t),zo.fromBufferAttribute(e,i),Vo.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(ko,r.x),s.addScaledVector(zo,r.y),s.addScaledVector(Vo,r.z),s}static isFrontFacing(e,t,i,a){return gn.subVectors(i,t),Vn.subVectors(e,t),gn.cross(Vn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),gn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;ha.subVectors(a,i),pa.subVectors(r,i),Oo.subVectors(e,i);const l=ha.dot(Oo),c=pa.dot(Oo);if(l<=0&&c<=0)return t.copy(i);Fo.subVectors(e,a);const u=ha.dot(Fo),d=pa.dot(Fo);if(u>=0&&d<=u)return t.copy(a);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(ha,s);Bo.subVectors(e,r);const p=ha.dot(Bo),x=pa.dot(Bo);if(x>=0&&p<=x)return t.copy(r);const g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(pa,o);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return vd.subVectors(r,a),o=(d-u)/(d-u+(p-x)),t.copy(a).addScaledVector(vd,o);const f=1/(m+g+h);return s=g*f,o=h*f,t.copy(i).addScaledVector(ha,s).addScaledVector(pa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=rt.workingColorSpace){if(e=Qc(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Ho(s,r,e+1/3),this.g=Ho(s,r,e),this.b=Ho(s,r,e-1/3)}return rt.colorSpaceToWorking(this,a),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=Ch[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return rt.workingToColorSpace(Ft.copy(this),e),Math.round(Ze(Ft.r*255,0,255))*65536+Math.round(Ze(Ft.g*255,0,255))*256+Math.round(Ze(Ft.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Ft.copy(this),t);const i=Ft.r,a=Ft.g,r=Ft.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=cn){rt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,a=Ft.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Jr);const i=_r(ui.h,Jr.h,t),a=_r(ui.s,Jr.s,t),r=_r(ui.l,Jr.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new et;et.NAMES=Ch;let py=0;class nr extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Ia,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ia&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ml&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==id&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ra&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ra&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ra&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rh extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new B,Qr=new $e;let my=0;class Ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:my++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ad,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ba(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ba(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ba(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ba(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ba(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ad&&(e.usage=this.usage),e}}class Dh extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ph extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fn extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gy=0;const on=new yt,Go=new Wt,ma=new B,Qt=new Ur,cr=new Ur,Nt=new B;class wn extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wh(e)?Ph:Dh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new fn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(Qt.min,cr.min),Qt.expandByPoint(Nt),Nt.addVectors(Qt.max,cr.max),Qt.expandByPoint(Nt)):(Qt.expandByPoint(cr.min),Qt.expandByPoint(cr.max))}Qt.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)Nt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Nt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(ma.fromBufferAttribute(e,c),Nt.add(ma)),a=Math.max(a,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new B,l[I]=new B;const c=new B,u=new B,d=new B,h=new $e,p=new $e,x=new $e,g=new B,m=new B;function f(I,b,M){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,M),h.fromBufferAttribute(r,I),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,M),u.sub(c),d.sub(c),p.sub(h),x.sub(h);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(P),o[I].add(g),o[b].add(g),o[M].add(g),l[I].add(m),l[b].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,b=v.length;I<b;++I){const M=v[I],P=M.start,U=M.count;for(let O=P,V=P+U;O<V;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new B,E=new B,T=new B,w=new B;function C(I){T.fromBufferAttribute(a,I),w.copy(T);const b=o[I];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),E.crossVectors(w,b);const P=E.dot(l[I])<0?-1:1;s.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,b=v.length;I<b;++I){const M=v[I],P=M.start,U=M.count;for(let O=P,V=P+U;O<V;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const a=new B,r=new B,s=new B,o=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,r),d.subVectors(a,r),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)a.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),d.subVectors(a,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new Ln(h,u,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(a[l]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yd=new yt,Li=new tu,es=new to,bd=new B,ts=new B,ns=new B,is=new B,$o=new B,as=new B,Md=new B,rs=new B;class yn extends Wt{constructor(e=new wn,t=new Rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){as.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&($o.fromBufferAttribute(d,e),s?as.addScaledVector($o,u):as.addScaledVector($o.sub(t),u))}t.add(as)}return t}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(es.containsPoint(Li.origin)===!1&&(Li.intersectSphere(es,bd)===null||Li.origin.distanceToSquared(bd)>(e.far-e.near)**2))&&(yd.copy(r).invert(),Li.copy(e.ray).applyMatrix4(yd),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=s[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,T=y;E<T;E+=3){const w=o.getX(E),C=o.getX(E+1),I=o.getX(E+2);a=ss(this,f,e,i,c,u,d,w,C,I),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const x=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const v=o.getX(m),y=o.getX(m+1),E=o.getX(m+2);a=ss(this,s,e,i,c,u,d,v,y,E),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=s[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,T=y;E<T;E+=3){const w=E,C=E+1,I=E+2;a=ss(this,f,e,i,c,u,d,w,C,I),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const v=m,y=m+1,E=m+2;a=ss(this,s,e,i,c,u,d,v,y,E),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function xy(n,e,t,i,a,r,s,o){let l;if(e.side===Gt?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===Mi,o),l===null)return null;rs.copy(o),rs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(rs);return c<t.near||c>t.far?null:{distance:c,point:rs.clone(),object:n}}function ss(n,e,t,i,a,r,s,o,l,c){n.getVertexPosition(o,ts),n.getVertexPosition(l,ns),n.getVertexPosition(c,is);const u=xy(n,e,t,i,ts,ns,is,Md);if(u){const d=new B;_n.getBarycoord(Md,ts,ns,is,d),a&&(u.uv=_n.getInterpolatedAttribute(a,o,l,c,d,new $e)),r&&(u.uv1=_n.getInterpolatedAttribute(r,o,l,c,d,new $e)),s&&(u.normal=_n.getInterpolatedAttribute(s,o,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};_n.getNormal(ts,ns,is,h.normal),u.face=h,u.barycoord=d}return u}class Nr extends wn{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,s,r,0),x("z","y","x",1,-1,i,t,-e,s,r,1),x("x","z","y",1,1,e,i,t,a,s,2),x("x","z","y",1,-1,e,i,-t,a,s,3),x("x","y","z",1,-1,e,t,i,a,r,4),x("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(d,2));function x(g,m,f,v,y,E,T,w,C,I,b){const M=E/C,P=T/I,U=E/2,O=T/2,V=w/2,$=C+1,W=I+1;let J=0,k=0;const Q=new B;for(let re=0;re<W;re++){const _e=re*P-O;for(let He=0;He<$;He++){const Je=He*M-U;Q[g]=Je*v,Q[m]=_e*y,Q[f]=V,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[f]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(He/C),d.push(1-re/I),J+=1}}for(let re=0;re<I;re++)for(let _e=0;_e<C;_e++){const He=h+_e+$*re,Je=h+_e+$*(re+1),st=h+(_e+1)+$*(re+1),it=h+(_e+1)+$*re;l.push(He,Je,it),l.push(Je,st,it),k+=6}o.addGroup(p,k,b),p+=k,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $a(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=$a(n[t]);for(const a in i)e[a]=i[a]}return e}function _y(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const vy={clone:$a,merge:Vt};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,by=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=by,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$a(e.uniforms),this.uniformsGroups=_y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ih extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new B,Sd=new $e,Ed=new $e;class tn extends Ih{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,Sd,Ed),t.subVectors(Ed,Sd)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,t-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ga=-90,xa=1;class My extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new tn(ga,xa,e,t);a.layers=this.layers,this.add(a);const r=new tn(ga,xa,e,t);r.layers=this.layers,this.add(r);const s=new tn(ga,xa,e,t);s.layers=this.layers,this.add(s);const o=new tn(ga,xa,e,t);o.layers=this.layers,this.add(o);const l=new tn(ga,xa,e,t);l.layers=this.layers,this.add(l);const c=new tn(ga,xa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,r),e.setRenderTarget(i,1,a),e.render(t,s),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,a),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Uh extends $t{constructor(e=[],t=Va,i,a,r,s,o,l,c,u){super(e,t,i,a,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sy extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Uh(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Nr(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:$a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:ni});r.uniforms.tEquirect.value=t;const s=new yn(a,r),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=dn),new My(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}class Aa extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ey={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wy extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ty extends $t{constructor(e=null,t=1,i=1,a,r,s,o,l,c=rn,u=rn,d,h){super(null,s,o,l,c,u,a,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qo=new B,Ay=new B,Cy=new qe;class hi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=qo.subVectors(i,t).cross(Ay.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qo),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cy.getNormalMatrix(e),a=this.coplanarPoint(qo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new to,Ry=new $e(.5,.5),os=new B;class nu{constructor(e=new hi,t=new hi,i=new hi,a=new hi,r=new hi,s=new hi){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],x=r[8],g=r[9],m=r[10],f=r[11],v=r[12],y=r[13],E=r[14],T=r[15];if(a[0].setComponents(c-s,p-u,f-x,T-v).normalize(),a[1].setComponents(c+s,p+u,f+x,T+v).normalize(),a[2].setComponents(c+o,p+d,f+g,T+y).normalize(),a[3].setComponents(c-o,p-d,f-g,T-y).normalize(),i)a[4].setComponents(l,h,m,E).normalize(),a[5].setComponents(c-l,p-h,f-m,T-E).normalize();else if(a[4].setComponents(c-l,p-h,f-m,T-E).normalize(),t===Rn)a[5].setComponents(c+l,p+h,f+m,T+E).normalize();else if(t===Os)a[5].setComponents(l,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);const t=Ry.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(os.x=a.normal.x>0?e.max.x:e.min.x,os.y=a.normal.y>0?e.max.y:e.min.y,os.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nh extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bs=new B,ks=new B,wd=new yt,ur=new tu,ls=new to,Xo=new B,Td=new B;class Dy extends Wt{constructor(e=new wn,t=new Nh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,r=t.count;a<r;a++)Bs.fromBufferAttribute(t,a-1),ks.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Bs.distanceTo(ks);e.setAttribute("lineDistance",new fn(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(a),ls.radius+=r,e.ray.intersectsSphere(ls)===!1)return;wd.copy(a).invert(),ur.copy(e.ray).applyMatrix4(wd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,s.start),x=Math.min(u.count,s.start+s.count);for(let g=p,m=x-1;g<m;g+=c){const f=u.getX(g),v=u.getX(g+1),y=cs(this,e,ur,l,f,v,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(x-1),m=u.getX(p),f=cs(this,e,ur,l,g,m,x-1);f&&t.push(f)}}else{const p=Math.max(0,s.start),x=Math.min(h.count,s.start+s.count);for(let g=p,m=x-1;g<m;g+=c){const f=cs(this,e,ur,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){const g=cs(this,e,ur,l,x-1,p,x-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cs(n,e,t,i,a,r,s){const o=n.geometry.attributes.position;if(Bs.fromBufferAttribute(o,a),ks.fromBufferAttribute(o,r),t.distanceSqToSegment(Bs,ks,Xo,Td)>i)return;Xo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Xo);if(!(c<e.near||c>e.far))return{distance:c,point:Td.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class Py extends Dy{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Oh extends $t{constructor(e,t,i=Yi,a,r,s,o=rn,l=rn,c,u=Tr,d=1){if(u!==Tr&&u!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,a,r,s,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fh extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class no extends wn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,d=e/o,h=t/l,p=[],x=[],g=[],m=[];for(let f=0;f<u;f++){const v=f*h-s;for(let y=0;y<c;y++){const E=y*d-r;x.push(E,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const y=v+c*f,E=v+c*(f+1),T=v+1+c*(f+1),w=v+1+c*f;p.push(y,E,w),p.push(E,T,w)}this.setIndex(p),this.setAttribute("position",new fn(x,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}class vr extends wn{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const u=[],d=new B,h=new B,p=[],x=[],g=[],m=[];for(let f=0;f<=i;f++){const v=[],y=f/i;let E=0;f===0&&s===0?E=.5/t:f===i&&l===Math.PI&&(E=-.5/t);for(let T=0;T<=t;T++){const w=T/t;d.x=-e*Math.cos(a+w*r)*Math.sin(s+y*o),d.y=e*Math.cos(s+y*o),d.z=e*Math.sin(a+w*r)*Math.sin(s+y*o),x.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(w+E,1-y),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const y=u[f][v+1],E=u[f][v],T=u[f+1][v],w=u[f+1][v+1];(f!==0||s>0)&&p.push(y,E,w),(f!==i-1||l<Math.PI)&&p.push(E,T,w)}this.setIndex(p),this.setAttribute("position",new fn(x,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ad extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ly extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iy extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bh extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Yo=new yt,Cd=new B,Rd=new B;class Uy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rd),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dd=new yt,dr=new B,jo=new B;class Ny extends Uy{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),i.position.copy(dr),jo.copy(i.position),jo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(jo),i.updateMatrixWorld(),a.makeTranslation(-dr.x,-dr.y,-dr.z),Dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd,i.coordinateSystem,i.reversedDepth)}}class Oy extends Bh{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Ny}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fy extends Ih{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class By extends Bh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ky extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Pd{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zy extends ea{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ve("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ld(n,e,t,i){const a=Vy(i);switch(t){case yh:return n*e;case Mh:return n*e/a.components*a.byteLength;case jc:return n*e/a.components*a.byteLength;case Kc:return n*e*2/a.components*a.byteLength;case Zc:return n*e*2/a.components*a.byteLength;case bh:return n*e*3/a.components*a.byteLength;case vn:return n*e*4/a.components*a.byteLength;case Jc:return n*e*4/a.components*a.byteLength;case ys:case bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ms:case Ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Bl:return Math.max(n,16)*Math.max(e,8)/4;case Nl:case Fl:return Math.max(n,8)*Math.max(e,8)/2;case kl:case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nc:case ic:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rc:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oc:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vy(n){switch(n){case Un:case gh:return{byteLength:1,components:1};case Er:case xh:case er:return{byteLength:2,components:1};case Xc:case Yc:return{byteLength:2,components:4};case Yi:case qc:case Qn:return{byteLength:4,components:1};case _h:case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);function kh(){let n=null,e=!1,t=null,i=null;function a(r,s){t(r,s),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Hy(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){const x=d[h],g=d[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++h,d[h]=g)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){const g=d[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$y=`#ifdef USE_ALPHAHASH
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
#endif`,Wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
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
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zy=`#ifdef USE_BATCHING
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
#endif`,Jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nb=`#ifdef USE_IRIDESCENCE
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
#endif`,ib=`#ifdef USE_BUMPMAP
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fb=`#define PI 3.141592653589793
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
} // validated`,hb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pb=`vec3 transformedNormal = objectNormal;
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
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
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
#endif`,Nb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zb=`PhysicalMaterial material;
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
#endif`,Vb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Hb=`
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
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
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jb=`#if defined( USE_POINTS_UV )
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
#endif`,Qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
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
#endif`,rM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dM=`#ifdef USE_NORMALMAP
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
#endif`,fM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AM=`float getShadowMask() {
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
}`,CM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RM=`#ifdef USE_SKINNING
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
#endif`,DM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PM=`#ifdef USE_SKINNING
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
#endif`,LM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OM=`#ifdef USE_TRANSMISSION
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
#endif`,FM=`#ifdef USE_TRANSMISSION
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GM=`uniform sampler2D t2D;
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
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`#include <common>
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
}`,jM=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KM=`#define DISTANCE
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
}`,ZM=`#define DISTANCE
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`uniform float scale;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 diffuse;
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
}`,a1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define MATCAP
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
}`,o1=`#define MATCAP
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
}`,l1=`#define NORMAL
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
}`,c1=`#define NORMAL
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
}`,u1=`#define PHONG
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
}`,d1=`#define PHONG
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
}`,f1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
}`,p1=`#define TOON
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
}`,m1=`#define TOON
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
}`,g1=`uniform float size;
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
}`,x1=`uniform vec3 diffuse;
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
}`,_1=`#include <common>
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
}`,v1=`uniform vec3 color;
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
}`,y1=`uniform float rotation;
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
}`,b1=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Gy,alphahash_pars_fragment:$y,alphamap_fragment:Wy,alphamap_pars_fragment:qy,alphatest_fragment:Xy,alphatest_pars_fragment:Yy,aomap_fragment:jy,aomap_pars_fragment:Ky,batching_pars_vertex:Zy,batching_vertex:Jy,begin_vertex:Qy,beginnormal_vertex:eb,bsdfs:tb,iridescence_fragment:nb,bumpmap_pars_fragment:ib,clipping_planes_fragment:ab,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:sb,clipping_planes_vertex:ob,color_fragment:lb,color_pars_fragment:cb,color_pars_vertex:ub,color_vertex:db,common:fb,cube_uv_reflection_fragment:hb,defaultnormal_vertex:pb,displacementmap_pars_vertex:mb,displacementmap_vertex:gb,emissivemap_fragment:xb,emissivemap_pars_fragment:_b,colorspace_fragment:vb,colorspace_pars_fragment:yb,envmap_fragment:bb,envmap_common_pars_fragment:Mb,envmap_pars_fragment:Sb,envmap_pars_vertex:Eb,envmap_physical_pars_fragment:Nb,envmap_vertex:wb,fog_vertex:Tb,fog_pars_vertex:Ab,fog_fragment:Cb,fog_pars_fragment:Rb,gradientmap_pars_fragment:Db,lightmap_pars_fragment:Pb,lights_lambert_fragment:Lb,lights_lambert_pars_fragment:Ib,lights_pars_begin:Ub,lights_toon_fragment:Ob,lights_toon_pars_fragment:Fb,lights_phong_fragment:Bb,lights_phong_pars_fragment:kb,lights_physical_fragment:zb,lights_physical_pars_fragment:Vb,lights_fragment_begin:Hb,lights_fragment_maps:Gb,lights_fragment_end:$b,logdepthbuf_fragment:Wb,logdepthbuf_pars_fragment:qb,logdepthbuf_pars_vertex:Xb,logdepthbuf_vertex:Yb,map_fragment:jb,map_pars_fragment:Kb,map_particle_fragment:Zb,map_particle_pars_fragment:Jb,metalnessmap_fragment:Qb,metalnessmap_pars_fragment:eM,morphinstance_vertex:tM,morphcolor_vertex:nM,morphnormal_vertex:iM,morphtarget_pars_vertex:aM,morphtarget_vertex:rM,normal_fragment_begin:sM,normal_fragment_maps:oM,normal_pars_fragment:lM,normal_pars_vertex:cM,normal_vertex:uM,normalmap_pars_fragment:dM,clearcoat_normal_fragment_begin:fM,clearcoat_normal_fragment_maps:hM,clearcoat_pars_fragment:pM,iridescence_pars_fragment:mM,opaque_fragment:gM,packing:xM,premultiplied_alpha_fragment:_M,project_vertex:vM,dithering_fragment:yM,dithering_pars_fragment:bM,roughnessmap_fragment:MM,roughnessmap_pars_fragment:SM,shadowmap_pars_fragment:EM,shadowmap_pars_vertex:wM,shadowmap_vertex:TM,shadowmask_pars_fragment:AM,skinbase_vertex:CM,skinning_pars_vertex:RM,skinning_vertex:DM,skinnormal_vertex:PM,specularmap_fragment:LM,specularmap_pars_fragment:IM,tonemapping_fragment:UM,tonemapping_pars_fragment:NM,transmission_fragment:OM,transmission_pars_fragment:FM,uv_pars_fragment:BM,uv_pars_vertex:kM,uv_vertex:zM,worldpos_vertex:VM,background_vert:HM,background_frag:GM,backgroundCube_vert:$M,backgroundCube_frag:WM,cube_vert:qM,cube_frag:XM,depth_vert:YM,depth_frag:jM,distanceRGBA_vert:KM,distanceRGBA_frag:ZM,equirect_vert:JM,equirect_frag:QM,linedashed_vert:e1,linedashed_frag:t1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:a1,meshlambert_frag:r1,meshmatcap_vert:s1,meshmatcap_frag:o1,meshnormal_vert:l1,meshnormal_frag:c1,meshphong_vert:u1,meshphong_frag:d1,meshphysical_vert:f1,meshphysical_frag:h1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:x1,shadow_vert:_1,shadow_frag:v1,sprite_vert:y1,sprite_frag:b1},de={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},An={basic:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new et(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Vt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Vt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new et(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Vt([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Vt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Vt([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Vt([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Vt([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Vt([de.lights,de.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};An.physical={uniforms:Vt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const us={r:0,b:0,g:0},Ui=new En,M1=new yt;function S1(n,e,t,i,a,r,s){const o=new et(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function x(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?t:e).get(E)),E}function g(y){let E=!1;const T=x(y);T===null?f(o,l):T&&T.isColor&&(f(T,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,E){const T=x(E);T&&(T.isCubeTexture||T.mapping===eo)?(u===void 0&&(u=new yn(new Nr(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:$a(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Ui.copy(E.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(Ui)),u.material.toneMapped=rt.getTransfer(T.colorSpace)!==dt,(d!==T||h!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,h=T.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new yn(new no(2,2),new Nn({name:"BackgroundMaterial",uniforms:$a(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=rt.getTransfer(T.colorSpace)!==dt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,E){y.getRGB(us,Lh(n)),i.buffers.color.setClear(us.r,us.g,us.b,E,s)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:g,addToRenderList:m,dispose:v}}function E1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=h(null);let r=a,s=!1;function o(M,P,U,O,V){let $=!1;const W=d(O,U,P);r!==W&&(r=W,c(r.object)),$=p(M,O,U,V),$&&x(M,O,U,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,E(M,P,U,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,P,U){const O=U.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let $=V[P.id];$===void 0&&($={},V[P.id]=$);let W=$[O];return W===void 0&&(W=h(l()),$[O]=W),W}function h(M){const P=[],U=[],O=[];for(let V=0;V<t;V++)P[V]=0,U[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,P,U,O){const V=r.attributes,$=P.attributes;let W=0;const J=U.getAttributes();for(const k in J)if(J[k].location>=0){const re=V[k];let _e=$[k];if(_e===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function x(M,P,U,O){const V={},$=P.attributes;let W=0;const J=U.getAttributes();for(const k in J)if(J[k].location>=0){let re=$[k];re===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));const _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),V[k]=_e,W++}r.attributes=V,r.attributesNum=W,r.index=O}function g(){const M=r.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const U=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;U[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),V[M]!==P&&(n.vertexAttribDivisor(M,P),V[M]=P)}function v(){const M=r.newAttributes,P=r.enabledAttributes;for(let U=0,O=P.length;U<O;U++)P[U]!==M[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function y(M,P,U,O,V,$,W){W===!0?n.vertexAttribIPointer(M,P,U,V,$):n.vertexAttribPointer(M,P,U,O,V,$)}function E(M,P,U,O){g();const V=O.attributes,$=U.getAttributes(),W=P.defaultAttributeValues;for(const J in $){const k=$[J];if(k.location>=0){let Q=V[J];if(Q===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const re=Q.normalized,_e=Q.itemSize,He=e.get(Q);if(He===void 0)continue;const Je=He.buffer,st=He.type,it=He.bytesPerElement,Y=st===n.INT||st===n.UNSIGNED_INT||Q.gpuType===qc;if(Q.isInterleavedBufferAttribute){const ee=Q.data,me=ee.stride,Ue=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let we=0;we<k.locationSize;we++)f(k.location+we,ee.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let we=0;we<k.locationSize;we++)m(k.location+we);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let we=0;we<k.locationSize;we++)y(k.location+we,_e/k.locationSize,st,re,me*it,(Ue+_e/k.locationSize*we)*it,Y)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<k.locationSize;ee++)f(k.location+ee,Q.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<k.locationSize;ee++)m(k.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ee=0;ee<k.locationSize;ee++)y(k.location+ee,_e/k.locationSize,st,re,_e*it,_e/k.locationSize*ee*it,Y)}}else if(W!==void 0){const re=W[J];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(k.location,re);break;case 3:n.vertexAttrib3fv(k.location,re);break;case 4:n.vertexAttrib4fv(k.location,re);break;default:n.vertexAttrib1fv(k.location,re)}}}}v()}function T(){I();for(const M in i){const P=i[M];for(const U in P){const O=P[U];for(const V in O)u(O[V].object),delete O[V];delete P[U]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const U in P){const O=P[U];for(const V in O)u(O[V].object),delete O[V];delete P[U]}delete i[M.id]}function C(M){for(const P in i){const U=i[P];if(U[M.id]===void 0)continue;const O=U[M.id];for(const V in O)u(O[V].object),delete O[V];delete U[M.id]}}function I(){b(),s=!0,r!==a&&(r=a,c(r.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function w1(n,e,t){let i;function a(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];t.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g]*h[g];t.update(x,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function T1(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Un&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Qn&&!I)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:T,maxSamples:w}}function A1(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new hi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||a;return a=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!a||x===null||x.length===0||r&&!m)r?u(null):c();else{const v=r?0:i,y=v*4;let E=f.clippingState||null;l.value=E,E=u(x,h,y,p);for(let T=0;T!==y;++T)E[T]=t[T];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,x){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const f=p+g*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,E=p;y!==g;++y,E+=4)s.copy(d[y]).applyMatrix4(v,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function C1(n){let e=new WeakMap;function t(s,o){return o===Pl?s.mapping=Va:o===Ll&&(s.mapping=Ha),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Pl||o===Ll)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Sy(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const xi=4,Id=[.125,.215,.35,.446,.526,.582],Bi=20,R1=256,fr=new Fy,Ud=new et;let Ko=null,Zo=0,Jo=0,Qo=!1;const D1=new B;class Nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=D1}=r;Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Zo,Jo),this._renderer.xr.enabled=Qo,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Va||e.mapping===Ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:er,format:vn,colorSpace:Ga,depthBuffer:!1},a=Od(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P1(r)),this._blurMaterial=I1(r,e,t)}return a}_compileMaterial(e){const t=new yn(new wn,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,i,a,r){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Ud),d.toneMapping=_i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new Nr,new Rh({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let f=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(Ud),f=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):E===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const T=this._cubeSize;_a(a,E*T,y>2?T:0,T,T),d.setRenderTarget(a),f&&d.render(g,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Va||e.mapping===Ha;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,fr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const v=3*Math.max(this._cubeSize,16),y=4*this._cubeSize;this._ggxMaterial=L1(this._lodMax,v,y)}const s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=.05+c*.95,p=d*h,{_lodMax:x}=this,g=this._sizeLods[i],m=3*g*(i>x-xi?i-x+xi:0),f=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,_a(r,m,f,3*g,2*g),a.setRenderTarget(r),a.render(o,fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,_a(e,m,f,3*g,2*g),a.setRenderTarget(e),a.render(o,fr)}_blur(e,t,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,t,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[a];d.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),g=r/x,m=isFinite(r)?1+Math.floor(u*g):Bi;m>Bi&&Ve(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const f=[];let v=0;for(let C=0;C<Bi;++C){const I=C/g,b=Math.exp(-I*I/2);f.push(b),C===0?v+=b:C<m&&(v+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=x,h.mipInt.value=y-i;const E=this._sizeLods[a],T=3*E*(a>y-xi?a-y+xi:0),w=4*(this._cubeSize-E);_a(t,T,w,3*E,2*E),l.setRenderTarget(t),l.render(d,fr)}}function P1(n){const e=[],t=[],i=[];let a=n;const r=n-xi+1+Id.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let l=1/o;s>n-xi?l=Id[s-n+xi-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,g=3,m=2,f=1,v=new Float32Array(g*x*p),y=new Float32Array(m*x*p),E=new Float32Array(f*x*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,I=w>2?0:-1,b=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(b,g*x*w),y.set(h,m*x*w);const M=[w,w,w,w,w,w];E.set(M,f*x*w)}const T=new wn;T.setAttribute("position",new Ln(v,g)),T.setAttribute("uv",new Ln(y,m)),T.setAttribute("faceIndex",new Ln(E,f)),i.push(new yn(T,null)),a>xi&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Od(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function L1(n,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:io(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function I1(n,e,t){const i=new Float32Array(Bi),a=new B(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:io(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Fd(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Bd(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function U1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pl||l===Ll,u=l===Va||l===Ha;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Nd(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&a(p)?(t===null&&(t=new Nd(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function N1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Cr("WebGLRenderer: "+i+" extension not supported."),a}}}function O1(n,e,t,i){const a={},r=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",s),delete a[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,x=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let y=0,E=v.length;y<E;y+=3){const T=v[y+0],w=v[y+1],C=v[y+2];h.push(T,w,w,C,C,T)}}else if(x!==void 0){const v=x.array;g=x.version;for(let y=0,E=v.length/3-1;y<E;y+=3){const T=y+0,w=y+1,C=y+2;h.push(T,w,w,C,C,T)}}else return;const m=new(wh(h)?Ph:Dh)(h,1);m.version=g;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function F1(n,e,t){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*s),t.update(p,i,1)}function c(h,p,x){x!==0&&(n.drawElementsInstanced(i,p,r,h*s,x),t.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];t.update(m,i,1)}function d(h,p,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/s,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,g,0,x);let f=0;for(let v=0;v<x;v++)f+=p[v]*g[v];t.update(f,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function B1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Et("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function k1(n,e,t){const i=new WeakMap,a=new ht;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let b=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let E=o.attributes.position.count*y,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*T*4*d),C=new Th(w,E,T,d);C.type=Qn,C.needsUpdate=!0;const I=y*4;for(let M=0;M<d;M++){const P=m[M],U=f[M],O=v[M],V=E*T*4*M;for(let $=0;$<P.count;$++){const W=$*I;p===!0&&(a.fromBufferAttribute(P,$),w[V+W+0]=a.x,w[V+W+1]=a.y,w[V+W+2]=a.z,w[V+W+3]=0),x===!0&&(a.fromBufferAttribute(U,$),w[V+W+4]=a.x,w[V+W+5]=a.y,w[V+W+6]=a.z,w[V+W+7]=0),g===!0&&(a.fromBufferAttribute(O,$),w[V+W+8]=a.x,w[V+W+9]=a.y,w[V+W+10]=a.z,w[V+W+11]=O.itemSize===4?a.w:1)}}h={count:d,texture:C,size:new $e(E,T)},i.set(o,h),o.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function z1(n,e,t,i){let a=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return d}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const zh=new $t,kd=new Oh(1,1),Vh=new Th,Hh=new sy,Gh=new Uh,zd=[],Vd=[],Hd=new Float32Array(16),Gd=new Float32Array(9),$d=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=zd[a];if(r===void 0&&(r=new Float32Array(a),zd[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ao(n,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function V1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function H1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function G1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function $1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function W1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;$d.set(i),n.uniformMatrix2fv(this.addr,!1,$d),Ut(t,i)}}function q1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Gd.set(i),n.uniformMatrix3fv(this.addr,!1,Gd),Ut(t,i)}}function X1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Hd.set(i),n.uniformMatrix4fv(this.addr,!1,Hd),Ut(t,i)}}function Y1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function J1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function nS(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(kd.compareFunction=Eh,r=kd):r=zh,t.setTexture2D(e||r,a)}function iS(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Hh,a)}function aS(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Gh,a)}function rS(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Vh,a)}function sS(n){switch(n){case 5126:return V1;case 35664:return H1;case 35665:return G1;case 35666:return $1;case 35674:return W1;case 35675:return q1;case 35676:return X1;case 5124:case 35670:return Y1;case 35667:case 35671:return j1;case 35668:case 35672:return K1;case 35669:case 35673:return Z1;case 5125:return J1;case 36294:return Q1;case 36295:return eS;case 36296:return tS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return rS}}function oS(n,e){n.uniform1fv(this.addr,e)}function lS(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function cS(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function uS(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function dS(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fS(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hS(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pS(n,e){n.uniform1iv(this.addr,e)}function mS(n,e){n.uniform2iv(this.addr,e)}function gS(n,e){n.uniform3iv(this.addr,e)}function xS(n,e){n.uniform4iv(this.addr,e)}function _S(n,e){n.uniform1uiv(this.addr,e)}function vS(n,e){n.uniform2uiv(this.addr,e)}function yS(n,e){n.uniform3uiv(this.addr,e)}function bS(n,e){n.uniform4uiv(this.addr,e)}function MS(n,e,t){const i=this.cache,a=e.length,r=ao(t,a);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||zh,r[s])}function SS(n,e,t){const i=this.cache,a=e.length,r=ao(t,a);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Hh,r[s])}function ES(n,e,t){const i=this.cache,a=e.length,r=ao(t,a);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Gh,r[s])}function wS(n,e,t){const i=this.cache,a=e.length,r=ao(t,a);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Vh,r[s])}function TS(n){switch(n){case 5126:return oS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return dS;case 35675:return fS;case 35676:return hS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return xS;case 5125:return _S;case 36294:return vS;case 36295:return yS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return wS}}class AS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sS(t.type)}}class CS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TS(t.type)}}class RS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const el=/(\w+)(\])?(\[|\.)?/g;function Wd(n,e){n.seq.push(e),n.map[e.id]=e}function DS(n,e,t){const i=n.name,a=i.length;for(el.lastIndex=0;;){const r=el.exec(i),s=el.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Wd(t,c===void 0?new AS(o,n,e):new CS(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new RS(o),Wd(t,d)),t=d}}}class Es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=e.getActiveUniform(t,a),s=e.getUniformLocation(t,r.name);DS(r,s,this)}}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function qd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const PS=37297;let LS=0;function IS(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Xd=new qe;function US(n){rt._getMatrix(Xd,rt.workingColorSpace,n);const e=`mat3( ${Xd.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Ns:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+IS(n.getShaderSource(e),o)}else return r}function NS(n,e){const t=US(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function OS(n,e){let t;switch(e){case vv:t="Linear";break;case yv:t="Reinhard";break;case bv:t="Cineon";break;case Mv:t="ACESFilmic";break;case Ev:t="AgX";break;case wv:t="Neutral";break;case Sv:t="Custom";break;default:Ve("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ds=new B;function FS(){rt.getLuminanceCoefficients(ds);const n=ds.x.toFixed(4),e=ds.y.toFixed(4),t=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function kS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function mr(n){return n!==""}function jd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VS=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(VS,GS)}const HS=new Map;function GS(n,e){let t=Xe[e];if(t===void 0){const i=HS.get(e);if(i!==void 0)t=Xe[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}const $S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(n){return n.replace($S,WS)}function WS(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Jd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function qS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function XS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Va:case Ha:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ha:e="ENVMAP_MODE_REFRACTION";break}return e}function jS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ph:e="ENVMAP_BLENDING_MULTIPLY";break;case xv:e="ENVMAP_BLENDING_MIX";break;case _v:e="ENVMAP_BLENDING_ADD";break}return e}function KS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ZS(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=qS(t),c=XS(t),u=YS(t),d=jS(t),h=KS(t),p=BS(t),x=kS(r),g=a.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mr).join(`
`),f.length>0&&(f+=`
`)):(m=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),f=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Xe.tonemapping_pars_fragment:"",t.toneMapping!==_i?OS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,NS("linearToOutputTexel",t.outputColorSpace),FS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),s=cc(s),s=jd(s,t),s=Kd(s,t),o=cc(o),o=jd(o,t),o=Kd(o,t),s=Zd(s),o=Zd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+s,E=v+f+o,T=qd(a,a.VERTEX_SHADER,y),w=qd(a,a.FRAGMENT_SHADER,E);a.attachShader(g,T),a.attachShader(g,w),t.index0AttributeName!==void 0?a.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function C(P){if(n.debug.checkShaderErrors){const U=a.getProgramInfoLog(g)||"",O=a.getShaderInfoLog(T)||"",V=a.getShaderInfoLog(w)||"",$=U.trim(),W=O.trim(),J=V.trim();let k=!0,Q=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,g,T,w);else{const re=Yd(a,T,"vertex"),_e=Yd(a,w,"fragment");Et("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+re+`
`+_e)}else $!==""?Ve("WebGLProgram: Program Info Log:",$):(W===""||J==="")&&(Q=!1);Q&&(P.diagnostics={runnable:k,programLog:$,vertexShader:{log:W,prefix:m},fragmentShader:{log:J,prefix:f}})}a.deleteShader(T),a.deleteShader(w),I=new Es(a,g),b=zS(a,g)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(g,PS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let JS=0;class QS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new e3(e),t.set(e,i)),i}}class e3{constructor(e){this.id=JS++,this.code=e,this.usedTimes=0}}function t3(n,e,t,i,a,r,s){const o=new Ah,l=new QS,c=new Set,u=[],d=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,P,U,O){const V=U.fog,$=O.geometry,W=b.isMeshStandardMaterial?U.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),k=J&&J.mapping===eo?J.image.height:null,Q=x[b.type];b.precision!==null&&(p=a.getMaxPrecision(b.precision),p!==b.precision&&Ve("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const re=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_e=re!==void 0?re.length:0;let He=0;$.morphAttributes.position!==void 0&&(He=1),$.morphAttributes.normal!==void 0&&(He=2),$.morphAttributes.color!==void 0&&(He=3);let Je,st,it,Y;if(Q){const ct=An[Q];Je=ct.vertexShader,st=ct.fragmentShader}else Je=b.vertexShader,st=b.fragmentShader,l.update(b),it=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);const ee=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,we=O.isBatchedMesh===!0,We=!!b.map,Be=!!b.matcap,ke=!!J,ot=!!b.aoMap,D=!!b.lightMap,Ke=!!b.bumpMap,Ye=!!b.normalMap,lt=!!b.displacementMap,ye=!!b.emissiveMap,gt=!!b.metalnessMap,Ae=!!b.roughnessMap,ze=b.anisotropy>0,A=b.clearcoat>0,_=b.dispersion>0,z=b.iridescence>0,j=b.sheen>0,X=b.transmission>0,H=ze&&!!b.anisotropyMap,be=A&&!!b.clearcoatMap,fe=A&&!!b.clearcoatNormalMap,Re=A&&!!b.clearcoatRoughnessMap,Te=z&&!!b.iridescenceMap,te=z&&!!b.iridescenceThicknessMap,oe=j&&!!b.sheenColorMap,Ie=j&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,ge=!!b.specularColorMap,Fe=!!b.specularIntensityMap,L=X&&!!b.transmissionMap,he=X&&!!b.thicknessMap,le=!!b.gradientMap,ce=!!b.alphaMap,ae=b.alphaTest>0,Z=!!b.alphaHash,Me=!!b.extensions;let Ge=_i;b.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const xt={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:st,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:we,batchingColor:we&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ga,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:Be,envMap:ke,envMapMode:ke&&J.mapping,envMapCubeUVHeight:k,aoMap:ot,lightMap:D,bumpMap:Ke,normalMap:Ye,displacementMap:h&&lt,emissiveMap:ye,normalMapObjectSpace:Ye&&b.normalMapType===Rv,normalMapTangentSpace:Ye&&b.normalMapType===Sh,metalnessMap:gt,roughnessMap:Ae,anisotropy:ze,anisotropyMap:H,clearcoat:A,clearcoatMap:be,clearcoatNormalMap:fe,clearcoatRoughnessMap:Re,dispersion:_,iridescence:z,iridescenceMap:Te,iridescenceThicknessMap:te,sheen:j,sheenColorMap:oe,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:ge,specularIntensityMap:Fe,transmission:X,transmissionMap:L,thicknessMap:he,gradientMap:le,opaque:b.transparent===!1&&b.blending===Ia&&b.alphaToCoverage===!1,alphaMap:ce,alphaTest:ae,alphaHash:Z,combine:b.combine,mapUv:We&&g(b.map.channel),aoMapUv:ot&&g(b.aoMap.channel),lightMapUv:D&&g(b.lightMap.channel),bumpMapUv:Ke&&g(b.bumpMap.channel),normalMapUv:Ye&&g(b.normalMap.channel),displacementMapUv:lt&&g(b.displacementMap.channel),emissiveMapUv:ye&&g(b.emissiveMap.channel),metalnessMapUv:gt&&g(b.metalnessMap.channel),roughnessMapUv:Ae&&g(b.roughnessMap.channel),anisotropyMapUv:H&&g(b.anisotropyMap.channel),clearcoatMapUv:be&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(b.sheenRoughnessMap.channel),specularMapUv:Pe&&g(b.specularMap.channel),specularColorMapUv:ge&&g(b.specularColorMap.channel),specularIntensityMapUv:Fe&&g(b.specularIntensityMap.channel),transmissionMapUv:L&&g(b.transmissionMap.channel),thicknessMapUv:he&&g(b.thicknessMap.channel),alphaMapUv:ce&&g(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ye||ze),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(We||ce),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&rt.getTransfer(b.map.colorSpace)===dt,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&rt.getTransfer(b.emissiveMap.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Yn,flipSided:b.side===Gt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Me&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&b.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function E(b){const M=x[b.type];let P;if(M){const U=An[M];P=vy.clone(U.uniforms)}else P=b.uniforms;return P}function T(b,M){let P;for(let U=0,O=u.length;U<O;U++){const V=u[U];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new ZS(n,M,b,r),u.push(P)),P}function w(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:I}}function n3(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,l){n.get(s)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function i3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ef(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(d,h,p,x,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function o(d,h,p,x,g,m){const f=s(d,h,p,x,g,m);p.transmission>0?i.push(f):p.transparent===!0?a.push(f):t.push(f)}function l(d,h,p,x,g,m){const f=s(d,h,p,x,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?a.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||i3),i.length>1&&i.sort(h||Qd),a.length>1&&a.sort(h||Qd)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:u,sort:c}}function a3(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new ef,n.set(i,[s])):a>=r.length?(s=new ef,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function r3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new et};break;case"SpotLight":t={position:new B,direction:new B,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function s3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let o3=0;function l3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function c3(n){const e=new r3,t=s3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const a=new B,r=new yt,s=new yt;function o(c){let u=0,d=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,x=0,g=0,m=0,f=0,v=0,y=0,E=0,T=0,w=0,C=0;c.sort(l3);for(let b=0,M=c.length;b<M;b++){const P=c[b],U=P.color,O=P.intensity,V=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*O,d+=U.g*O,h+=U.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],O);C++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,k=t.get(P);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(O),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[g]=W;const J=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,J.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[g]=J.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,i.spotShadow[g]=k,i.spotShadowMap[g]=$,E++}g++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(U).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const J=P.shadow,k=t.get(P);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,i.pointShadow[x]=k,i.pointShadowMap[x]=$,i.pointShadowMatrix[x]=P.shadow.matrix,y++}i.point[x]=W,x++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==p||I.pointLength!==x||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==E||I.numSpotMaps!==T||I.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,I.directionalLength=p,I.pointLength=x,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=E,I.numSpotMaps=T,I.numLightProbes=C,i.version=o3++)}function l(c,u){let d=0,h=0,p=0,x=0,g=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const y=c[f];if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),d++}else if(y.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),s.identity(),r.copy(y.matrixWorld),r.premultiply(m),s.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),x++}else if(y.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function tf(n){const e=new c3(n),t=[],i=[];function a(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function u3(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new tf(n),e.set(a,[o])):r>=s.length?(o=new tf(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const d3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f3=`uniform sampler2D shadow_pass;
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
}`;function h3(n,e,t){let i=new nu;const a=new $e,r=new $e,s=new ht,o=new Ly({depthPacking:Cv}),l=new Iy,c={},u=t.maxTextureSize,d={[Mi]:Gt,[Gt]:Mi,[Yn]:Yn},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:d3,fragmentShader:f3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new wn;x.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new yn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let f=this.type;this.render=function(w,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ni),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=f!==Wn&&this.type===Wn,V=f===Wn&&this.type!==Wn;for(let $=0,W=w.length;$<W;$++){const J=w[$],k=J.shadow;if(k===void 0){Ve("WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const Q=k.getFrameExtents();if(a.multiply(Q),r.copy(k.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/Q.x),a.x=r.x*Q.x,k.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/Q.y),a.y=r.y*Q.y,k.mapSize.y=r.y)),k.map===null||O===!0||V===!0){const _e=this.type!==Wn?{minFilter:rn,magFilter:rn}:{};k.map!==null&&k.map.dispose(),k.map=new ji(a.x,a.y,_e),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const re=k.getViewportCount();for(let _e=0;_e<re;_e++){const He=k.getViewport(_e);s.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),U.viewport(s),k.updateMatrices(J,_e),i=k.getFrustum(),E(C,I,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===Wn&&v(k,I),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,P)};function v(w,C){const I=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ji(a.x,a.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,I,h,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,I,p,g,null)}function y(w,C,I,b){let M=null;const P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=M.uuid,O=C.uuid;let V=c[U];V===void 0&&(V={},c[U]=V);let $=V[O];$===void 0&&($=M.clone(),V[O]=$,C.addEventListener("dispose",T)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,b===Wn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=I}return M}function E(w,C,I,b,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Wn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const O=e.update(w),V=w.material;if(Array.isArray(V)){const $=O.groups;for(let W=0,J=$.length;W<J;W++){const k=$[W],Q=V[k.materialIndex];if(Q&&Q.visible){const re=y(w,Q,b,M);w.onBeforeShadow(n,w,C,I,O,re,k),n.renderBufferDirect(I,null,O,re,w,k),w.onAfterShadow(n,w,C,I,O,re,k)}}}else if(V.visible){const $=y(w,V,b,M);w.onBeforeShadow(n,w,C,I,O,$,null),n.renderBufferDirect(I,null,O,$,w,null),w.onAfterShadow(n,w,C,I,O,$,null)}}const U=w.children;for(let O=0,V=U.length;O<V;O++)E(U[O],C,I,b,M)}function T(w){w.target.removeEventListener("dispose",T);for(const I in c){const b=c[I],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const p3={[El]:wl,[Tl]:Rl,[Al]:Dl,[za]:Cl,[wl]:El,[Rl]:Tl,[Dl]:Al,[Cl]:za};function m3(n,e){function t(){let L=!1;const he=new ht;let le=null;const ce=new ht(0,0,0,0);return{setMask:function(ae){le!==ae&&!L&&(n.colorMask(ae,ae,ae,ae),le=ae)},setLocked:function(ae){L=ae},setClear:function(ae,Z,Me,Ge,xt){xt===!0&&(ae*=Ge,Z*=Ge,Me*=Ge),he.set(ae,Z,Me,Ge),ce.equals(he)===!1&&(n.clearColor(ae,Z,Me,Ge),ce.copy(he))},reset:function(){L=!1,le=null,ce.set(-1,0,0,0)}}}function i(){let L=!1,he=!1,le=null,ce=null,ae=null;return{setReversed:function(Z){if(he!==Z){const Me=e.get("EXT_clip_control");Z?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),he=Z;const Ge=ae;ae=null,this.setClear(Ge)}},getReversed:function(){return he},setTest:function(Z){Z?ee(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(Z){le!==Z&&!L&&(n.depthMask(Z),le=Z)},setFunc:function(Z){if(he&&(Z=p3[Z]),ce!==Z){switch(Z){case El:n.depthFunc(n.NEVER);break;case wl:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case za:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Cl:n.depthFunc(n.GEQUAL);break;case Rl:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Z}},setLocked:function(Z){L=Z},setClear:function(Z){ae!==Z&&(he&&(Z=1-Z),n.clearDepth(Z),ae=Z)},reset:function(){L=!1,le=null,ce=null,ae=null,he=!1}}}function a(){let L=!1,he=null,le=null,ce=null,ae=null,Z=null,Me=null,Ge=null,xt=null;return{setTest:function(ct){L||(ct?ee(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(ct){he!==ct&&!L&&(n.stencilMask(ct),he=ct)},setFunc:function(ct,Tn,hn){(le!==ct||ce!==Tn||ae!==hn)&&(n.stencilFunc(ct,Tn,hn),le=ct,ce=Tn,ae=hn)},setOp:function(ct,Tn,hn){(Z!==ct||Me!==Tn||Ge!==hn)&&(n.stencilOp(ct,Tn,hn),Z=ct,Me=Tn,Ge=hn)},setLocked:function(ct){L=ct},setClear:function(ct){xt!==ct&&(n.clearStencil(ct),xt=ct)},reset:function(){L=!1,he=null,le=null,ce=null,ae=null,Z=null,Me=null,Ge=null,xt=null}}}const r=new t,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],x=null,g=!1,m=null,f=null,v=null,y=null,E=null,T=null,w=null,C=new et(0,0,0),I=0,b=!1,M=null,P=null,U=null,O=null,V=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=J>=2);let Q=null,re={};const _e=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Je=new ht().fromArray(_e),st=new ht().fromArray(He);function it(L,he,le,ce){const ae=new Uint8Array(4),Z=n.createTexture();n.bindTexture(L,Z),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<le;Me++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(he+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Z}const Y={};Y[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),s.setFunc(za),Ke(!1),Ye(ed),ee(n.CULL_FACE),ot(ni);function ee(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function me(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ue(L,he){return d[L]!==he?(n.bindFramebuffer(L,he),d[L]=he,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=he),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=he),!0):!1}function we(L,he){let le=p,ce=!1;if(L){le=h.get(he),le===void 0&&(le=[],h.set(he,le));const ae=L.textures;if(le.length!==ae.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,Me=ae.length;Z<Me;Z++)le[Z]=n.COLOR_ATTACHMENT0+Z;le.length=ae.length,ce=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ce=!0);ce&&n.drawBuffers(le)}function We(L){return x!==L?(n.useProgram(L),x=L,!0):!1}const Be={[Fi]:n.FUNC_ADD,[ev]:n.FUNC_SUBTRACT,[tv]:n.FUNC_REVERSE_SUBTRACT};Be[nv]=n.MIN,Be[iv]=n.MAX;const ke={[av]:n.ZERO,[rv]:n.ONE,[sv]:n.SRC_COLOR,[Ml]:n.SRC_ALPHA,[fv]:n.SRC_ALPHA_SATURATE,[uv]:n.DST_COLOR,[lv]:n.DST_ALPHA,[ov]:n.ONE_MINUS_SRC_COLOR,[Sl]:n.ONE_MINUS_SRC_ALPHA,[dv]:n.ONE_MINUS_DST_COLOR,[cv]:n.ONE_MINUS_DST_ALPHA,[hv]:n.CONSTANT_COLOR,[pv]:n.ONE_MINUS_CONSTANT_COLOR,[mv]:n.CONSTANT_ALPHA,[gv]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(L,he,le,ce,ae,Z,Me,Ge,xt,ct){if(L===ni){g===!0&&(me(n.BLEND),g=!1);return}if(g===!1&&(ee(n.BLEND),g=!0),L!==Q_){if(L!==m||ct!==b){if((f!==Fi||E!==Fi)&&(n.blendEquation(n.FUNC_ADD),f=Fi,E=Fi),ct)switch(L){case Ia:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bl:n.blendFunc(n.ONE,n.ONE);break;case td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",L);break}else switch(L){case Ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case td:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nd:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",L);break}v=null,y=null,T=null,w=null,C.set(0,0,0),I=0,m=L,b=ct}return}ae=ae||he,Z=Z||le,Me=Me||ce,(he!==f||ae!==E)&&(n.blendEquationSeparate(Be[he],Be[ae]),f=he,E=ae),(le!==v||ce!==y||Z!==T||Me!==w)&&(n.blendFuncSeparate(ke[le],ke[ce],ke[Z],ke[Me]),v=le,y=ce,T=Z,w=Me),(Ge.equals(C)===!1||xt!==I)&&(n.blendColor(Ge.r,Ge.g,Ge.b,xt),C.copy(Ge),I=xt),m=L,b=!1}function D(L,he){L.side===Yn?me(n.CULL_FACE):ee(n.CULL_FACE);let le=L.side===Gt;he&&(le=!le),Ke(le),L.blending===Ia&&L.transparent===!1?ot(ni):ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function Ye(L){L!==K_?(ee(n.CULL_FACE),L!==P&&(L===ed?n.cullFace(n.BACK):L===Z_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),P=L}function lt(L){L!==U&&(W&&n.lineWidth(L),U=L)}function ye(L,he,le){L?(ee(n.POLYGON_OFFSET_FILL),(O!==he||V!==le)&&(n.polygonOffset(he,le),O=he,V=le)):me(n.POLYGON_OFFSET_FILL)}function gt(L){L?ee(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Ae(L){L===void 0&&(L=n.TEXTURE0+$-1),Q!==L&&(n.activeTexture(L),Q=L)}function ze(L,he,le){le===void 0&&(Q===null?le=n.TEXTURE0+$-1:le=Q);let ce=re[le];ce===void 0&&(ce={type:void 0,texture:void 0},re[le]=ce),(ce.type!==L||ce.texture!==he)&&(Q!==le&&(n.activeTexture(le),Q=le),n.bindTexture(L,he||Y[L]),ce.type=L,ce.texture=he)}function A(){const L=re[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function j(){try{n.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function X(){try{n.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function fe(){try{n.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Re(){try{n.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Te(){try{n.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function te(){try{n.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function oe(L){Je.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Je.copy(L))}function Ie(L){st.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),st.copy(L))}function Pe(L,he){let le=c.get(he);le===void 0&&(le=new WeakMap,c.set(he,le));let ce=le.get(L);ce===void 0&&(ce=n.getUniformBlockIndex(he,L.name),le.set(L,ce))}function ge(L,he){const ce=c.get(he).get(L);l.get(he)!==ce&&(n.uniformBlockBinding(he,ce,L.__bindingPointIndex),l.set(he,ce))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,re={},d={},h=new WeakMap,p=[],x=null,g=!1,m=null,f=null,v=null,y=null,E=null,T=null,w=null,C=new et(0,0,0),I=0,b=!1,M=null,P=null,U=null,O=null,V=null,Je.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ee,disable:me,bindFramebuffer:Ue,drawBuffers:we,useProgram:We,setBlending:ot,setMaterial:D,setFlipSided:Ke,setCullFace:Ye,setLineWidth:lt,setPolygonOffset:ye,setScissorTest:gt,activeTexture:Ae,bindTexture:ze,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:Te,texImage3D:te,updateUBOMapping:Pe,uniformBlockBinding:ge,texStorage2D:fe,texStorage3D:Re,texSubImage2D:j,texSubImage3D:X,compressedTexSubImage2D:H,compressedTexSubImage3D:be,scissor:oe,viewport:Ie,reset:Fe}}function g3(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return p?new OffscreenCanvas(A,_):Fs("canvas")}function g(A,_,z){let j=1;const X=ze(A);if((X.width>z||X.height>z)&&(j=z/Math.max(X.width,X.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const H=Math.floor(j*X.width),be=Math.floor(j*X.height);d===void 0&&(d=x(H,be));const fe=_?x(H,be):d;return fe.width=H,fe.height=be,fe.getContext("2d").drawImage(A,0,0,H,be),Ve("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+H+"x"+be+")."),fe}else return"data"in A&&Ve("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,_,z,j,X=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let H=_;if(_===n.RED&&(z===n.FLOAT&&(H=n.R32F),z===n.HALF_FLOAT&&(H=n.R16F),z===n.UNSIGNED_BYTE&&(H=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(H=n.R8UI),z===n.UNSIGNED_SHORT&&(H=n.R16UI),z===n.UNSIGNED_INT&&(H=n.R32UI),z===n.BYTE&&(H=n.R8I),z===n.SHORT&&(H=n.R16I),z===n.INT&&(H=n.R32I)),_===n.RG&&(z===n.FLOAT&&(H=n.RG32F),z===n.HALF_FLOAT&&(H=n.RG16F),z===n.UNSIGNED_BYTE&&(H=n.RG8)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(H=n.RG8UI),z===n.UNSIGNED_SHORT&&(H=n.RG16UI),z===n.UNSIGNED_INT&&(H=n.RG32UI),z===n.BYTE&&(H=n.RG8I),z===n.SHORT&&(H=n.RG16I),z===n.INT&&(H=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(H=n.RGB8UI),z===n.UNSIGNED_SHORT&&(H=n.RGB16UI),z===n.UNSIGNED_INT&&(H=n.RGB32UI),z===n.BYTE&&(H=n.RGB8I),z===n.SHORT&&(H=n.RGB16I),z===n.INT&&(H=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),z===n.UNSIGNED_INT&&(H=n.RGBA32UI),z===n.BYTE&&(H=n.RGBA8I),z===n.SHORT&&(H=n.RGBA16I),z===n.INT&&(H=n.RGBA32I)),_===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),_===n.RGBA){const be=X?Ns:rt.getTransfer(j);z===n.FLOAT&&(H=n.RGBA32F),z===n.HALF_FLOAT&&(H=n.RGBA16F),z===n.UNSIGNED_BYTE&&(H=be===dt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function E(A,_){let z;return A?_===null||_===Yi||_===wr?z=n.DEPTH24_STENCIL8:_===Qn?z=n.DEPTH32F_STENCIL8:_===Er&&(z=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Yi||_===wr?z=n.DEPTH_COMPONENT24:_===Qn?z=n.DEPTH_COMPONENT32F:_===Er&&(z=n.DEPTH_COMPONENT16),z}function T(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==rn&&A.minFilter!==dn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function w(A){const _=A.target;_.removeEventListener("dispose",w),I(_),_.isVideoTexture&&u.delete(_)}function C(A){const _=A.target;_.removeEventListener("dispose",C),M(_)}function I(A){const _=i.get(A);if(_.__webglInit===void 0)return;const z=A.source,j=h.get(z);if(j){const X=j[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(A),Object.keys(j).length===0&&h.delete(z)}i.remove(A)}function b(A){const _=i.get(A);n.deleteTexture(_.__webglTexture);const z=A.source,j=h.get(z);delete j[_.__cacheKey],s.memory.textures--}function M(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let X=0;X<_.__webglFramebuffer[j].length;X++)n.deleteFramebuffer(_.__webglFramebuffer[j][X]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=A.textures;for(let j=0,X=z.length;j<X;j++){const H=i.get(z[j]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),s.memory.textures--),i.remove(z[j])}i.remove(A)}let P=0;function U(){P=0}function O(){const A=P;return A>=a.maxTextures&&Ve("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),P+=1,A}function V(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function $(A,_){const z=i.get(A);if(A.isVideoTexture&&gt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const j=A.image;if(j===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,A,_);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function W(A,_){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Y(z,A,_);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function J(A,_){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Y(z,A,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function k(A,_){const z=i.get(A);if(A.version>0&&z.__version!==A.version){ee(z,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}const Q={[Il]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Ul]:n.MIRRORED_REPEAT},re={[rn]:n.NEAREST,[Tv]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},_e={[Dv]:n.NEVER,[Ov]:n.ALWAYS,[Pv]:n.LESS,[Eh]:n.LEQUAL,[Lv]:n.EQUAL,[Nv]:n.GEQUAL,[Iv]:n.GREATER,[Uv]:n.NOTEQUAL};function He(A,_){if(_.type===Qn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===dn||_.magFilter===Eo||_.magFilter===$r||_.magFilter===Vi||_.minFilter===dn||_.minFilter===Eo||_.minFilter===$r||_.minFilter===Vi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Q[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Q[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Q[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,re[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,re[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,_e[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==$r&&_.minFilter!==Vi||_.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Je(A,_){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",w));const j=_.source;let X=h.get(j);X===void 0&&(X={},h.set(j,X));const H=V(_);if(H!==A.__cacheKey){X[H]===void 0&&(X[H]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,z=!0),X[H].usedTimes++;const be=X[A.__cacheKey];be!==void 0&&(X[A.__cacheKey].usedTimes--,be.usedTimes===0&&b(_)),A.__cacheKey=H,A.__webglTexture=X[H].texture}return z}function st(A,_,z){return Math.floor(Math.floor(A/z)/_)}function it(A,_,z,j){const H=A.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,z,j,_.data);else{H.sort((te,oe)=>te.start-oe.start);let be=0;for(let te=1;te<H.length;te++){const oe=H[be],Ie=H[te],Pe=oe.start+oe.count,ge=st(Ie.start,_.width,4),Fe=st(oe.start,_.width,4);Ie.start<=Pe+1&&ge===Fe&&st(Ie.start+Ie.count-1,_.width,4)===ge?oe.count=Math.max(oe.count,Ie.start+Ie.count-oe.start):(++be,H[be]=Ie)}H.length=be+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let te=0,oe=H.length;te<oe;te++){const Ie=H[te],Pe=Math.floor(Ie.start/4),ge=Math.ceil(Ie.count/4),Fe=Pe%_.width,L=Math.floor(Pe/_.width),he=ge,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Fe,L,he,le,z,j,_.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function Y(A,_,z){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);const X=Je(A,_),H=_.source;t.bindTexture(j,A.__webglTexture,n.TEXTURE0+z);const be=i.get(H);if(H.version!==be.__version||X===!0){t.activeTexture(n.TEXTURE0+z);const fe=rt.getPrimaries(rt.workingColorSpace),Re=_.colorSpace===mi?null:rt.getPrimaries(_.colorSpace),Te=_.colorSpace===mi||fe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let te=g(_.image,!1,a.maxTextureSize);te=Ae(_,te);const oe=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type);let Pe=y(_.internalFormat,oe,Ie,_.colorSpace,_.isVideoTexture);He(j,_);let ge;const Fe=_.mipmaps,L=_.isVideoTexture!==!0,he=be.__version===void 0||X===!0,le=H.dataReady,ce=T(_,te);if(_.isDepthTexture)Pe=E(_.format===Ar,_.type),he&&(L?t.texStorage2D(n.TEXTURE_2D,1,Pe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Pe,te.width,te.height,0,oe,Ie,null));else if(_.isDataTexture)if(Fe.length>0){L&&he&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,Fe[0].width,Fe[0].height);for(let ae=0,Z=Fe.length;ae<Z;ae++)ge=Fe[ae],L?le&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ge.width,ge.height,oe,Ie,ge.data):t.texImage2D(n.TEXTURE_2D,ae,Pe,ge.width,ge.height,0,oe,Ie,ge.data);_.generateMipmaps=!1}else L?(he&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,te.width,te.height),le&&it(_,te,oe,Ie)):t.texImage2D(n.TEXTURE_2D,0,Pe,te.width,te.height,0,oe,Ie,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Pe,Fe[0].width,Fe[0].height,te.depth);for(let ae=0,Z=Fe.length;ae<Z;ae++)if(ge=Fe[ae],_.format!==vn)if(oe!==null)if(L){if(le)if(_.layerUpdates.size>0){const Me=Ld(ge.width,ge.height,_.format,_.type);for(const Ge of _.layerUpdates){const xt=ge.data.subarray(Ge*Me/ge.data.BYTES_PER_ELEMENT,(Ge+1)*Me/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Ge,ge.width,ge.height,1,oe,xt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,te.depth,oe,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Pe,ge.width,ge.height,te.depth,0,ge.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,te.depth,oe,Ie,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Pe,ge.width,ge.height,te.depth,0,oe,Ie,ge.data)}else{L&&he&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,Fe[0].width,Fe[0].height);for(let ae=0,Z=Fe.length;ae<Z;ae++)ge=Fe[ae],_.format!==vn?oe!==null?L?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ge.width,ge.height,oe,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Pe,ge.width,ge.height,0,ge.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?le&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ge.width,ge.height,oe,Ie,ge.data):t.texImage2D(n.TEXTURE_2D,ae,Pe,ge.width,ge.height,0,oe,Ie,ge.data)}else if(_.isDataArrayTexture)if(L){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Pe,te.width,te.height,te.depth),le)if(_.layerUpdates.size>0){const ae=Ld(te.width,te.height,_.format,_.type);for(const Z of _.layerUpdates){const Me=te.data.subarray(Z*ae/te.data.BYTES_PER_ELEMENT,(Z+1)*ae/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,oe,Ie,Me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,Ie,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,te.width,te.height,te.depth,0,oe,Ie,te.data);else if(_.isData3DTexture)L?(he&&t.texStorage3D(n.TEXTURE_3D,ce,Pe,te.width,te.height,te.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,Ie,te.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,te.width,te.height,te.depth,0,oe,Ie,te.data);else if(_.isFramebufferTexture){if(he)if(L)t.texStorage2D(n.TEXTURE_2D,ce,Pe,te.width,te.height);else{let ae=te.width,Z=te.height;for(let Me=0;Me<ce;Me++)t.texImage2D(n.TEXTURE_2D,Me,Pe,ae,Z,0,oe,Ie,null),ae>>=1,Z>>=1}}else if(Fe.length>0){if(L&&he){const ae=ze(Fe[0]);t.texStorage2D(n.TEXTURE_2D,ce,Pe,ae.width,ae.height)}for(let ae=0,Z=Fe.length;ae<Z;ae++)ge=Fe[ae],L?le&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,oe,Ie,ge):t.texImage2D(n.TEXTURE_2D,ae,Pe,oe,Ie,ge);_.generateMipmaps=!1}else if(L){if(he){const ae=ze(te);t.texStorage2D(n.TEXTURE_2D,ce,Pe,ae.width,ae.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Ie,te)}else t.texImage2D(n.TEXTURE_2D,0,Pe,oe,Ie,te);m(_)&&f(j),be.__version=H.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ee(A,_,z){if(_.image.length!==6)return;const j=Je(A,_),X=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const H=i.get(X);if(X.version!==H.__version||j===!0){t.activeTexture(n.TEXTURE0+z);const be=rt.getPrimaries(rt.workingColorSpace),fe=_.colorSpace===mi?null:rt.getPrimaries(_.colorSpace),Re=_.colorSpace===mi||be===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Te=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,oe=[];for(let Z=0;Z<6;Z++)!Te&&!te?oe[Z]=g(_.image[Z],!0,a.maxCubemapSize):oe[Z]=te?_.image[Z].image:_.image[Z],oe[Z]=Ae(_,oe[Z]);const Ie=oe[0],Pe=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),Fe=y(_.internalFormat,Pe,ge,_.colorSpace),L=_.isVideoTexture!==!0,he=H.__version===void 0||j===!0,le=X.dataReady;let ce=T(_,Ie);He(n.TEXTURE_CUBE_MAP,_);let ae;if(Te){L&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Fe,Ie.width,Ie.height);for(let Z=0;Z<6;Z++){ae=oe[Z].mipmaps;for(let Me=0;Me<ae.length;Me++){const Ge=ae[Me];_.format!==vn?Pe!==null?L?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,Ge.width,Ge.height,Pe,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,Fe,Ge.width,Ge.height,0,Ge.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,Ge.width,Ge.height,Pe,ge,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,Fe,Ge.width,Ge.height,0,Pe,ge,Ge.data)}}}else{if(ae=_.mipmaps,L&&he){ae.length>0&&ce++;const Z=ze(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Fe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,oe[Z].width,oe[Z].height,Pe,ge,oe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,oe[Z].width,oe[Z].height,0,Pe,ge,oe[Z].data);for(let Me=0;Me<ae.length;Me++){const xt=ae[Me].image[Z].image;L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,xt.width,xt.height,Pe,ge,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,Fe,xt.width,xt.height,0,Pe,ge,xt.data)}}else{L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,ge,oe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,Pe,ge,oe[Z]);for(let Me=0;Me<ae.length;Me++){const Ge=ae[Me];L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,Pe,ge,Ge.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,Fe,Pe,ge,Ge.image[Z])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),H.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function me(A,_,z,j,X,H){const be=r.convert(z.format,z.colorSpace),fe=r.convert(z.type),Re=y(z.internalFormat,be,fe,z.colorSpace),Te=i.get(_),te=i.get(z);if(te.__renderTarget=_,!Te.__hasExternalTextures){const oe=Math.max(1,_.width>>H),Ie=Math.max(1,_.height>>H);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,H,Re,oe,Ie,_.depth,0,be,fe,null):t.texImage2D(X,H,Re,oe,Ie,0,be,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ye(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,X,te.__webglTexture,0,lt(_)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,X,te.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(A,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){const j=_.depthTexture,X=j&&j.isDepthTexture?j.type:null,H=E(_.stencilBuffer,X),be=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=lt(_);ye(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,H,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,H,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,H,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,A)}else{const j=_.textures;for(let X=0;X<j.length;X++){const H=j[X],be=r.convert(H.format,H.colorSpace),fe=r.convert(H.type),Re=y(H.internalFormat,be,fe,H.colorSpace),Te=lt(_);z&&ye(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Re,_.width,_.height):ye(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Re,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const X=j.__webglTexture,H=lt(_);if(_.depthTexture.format===Tr)ye(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(_.depthTexture.format===Ar)ye(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function We(A){const _=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",X)};j.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=j}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=A.texture.mipmaps;j&&j.length>0?we(_.__webglFramebuffer[0],A):we(_.__webglFramebuffer,A)}else if(z){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),Ue(_.__webglDepthbuffer[j],A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,H)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ue(_.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(A,_,z){const j=i.get(A);_!==void 0&&me(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&We(A)}function ke(A){const _=A.texture,z=i.get(A),j=i.get(_);A.addEventListener("dispose",C);const X=A.textures,H=A.isWebGLCubeRenderTarget===!0,be=X.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,s.memory.textures++),H){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let Re=0;Re<_.mipmaps.length;Re++)z.__webglFramebuffer[fe][Re]=n.createFramebuffer()}else z.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)z.__webglFramebuffer[fe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(be)for(let fe=0,Re=X.length;fe<Re;fe++){const Te=i.get(X[fe]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),s.memory.textures++)}if(A.samples>0&&ye(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<X.length;fe++){const Re=X[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Te=r.convert(Re.format,Re.colorSpace),te=r.convert(Re.type),oe=y(Re.internalFormat,Te,te,Re.colorSpace,A.isXRRenderTarget===!0),Ie=lt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,oe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),He(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)me(z.__webglFramebuffer[fe][Re],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re);else me(z.__webglFramebuffer[fe],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let fe=0,Re=X.length;fe<Re;fe++){const Te=X[fe],te=i.get(Te);let oe=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,te.__webglTexture),He(oe,Te),me(z.__webglFramebuffer,A,Te,n.COLOR_ATTACHMENT0+fe,oe,0),m(Te)&&f(oe)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),He(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)me(z.__webglFramebuffer[Re],A,_,n.COLOR_ATTACHMENT0,fe,Re);else me(z.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&f(fe),t.unbindTexture()}A.depthBuffer&&We(A)}function ot(A){const _=A.textures;for(let z=0,j=_.length;z<j;z++){const X=_[z];if(m(X)){const H=v(A),be=i.get(X).__webglTexture;t.bindTexture(H,be),f(H),t.unbindTexture()}}}const D=[],Ke=[];function Ye(A){if(A.samples>0){if(ye(A)===!1){const _=A.textures,z=A.width,j=A.height;let X=n.COLOR_BUFFER_BIT;const H=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(A),fe=_.length>1;if(fe)for(let Te=0;Te<_.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Re=A.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Te]);const te=i.get(_[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,z,j,0,0,z,j,X,n.NEAREST),l===!0&&(D.length=0,Ke.length=0,D.push(n.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(D.push(H),Ke.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<_.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,be.__webglColorRenderbuffer[Te]);const te=i.get(_[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function lt(A){return Math.min(a.maxSamples,A.samples)}function ye(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function gt(A){const _=s.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function Ae(A,_){const z=A.colorSpace,j=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Ga&&z!==mi&&(rt.getTransfer(z)===dt?(j!==vn||X!==Un)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",z)),_}function ze(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=Be,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye}function x3(n,e){function t(i,a=mi){let r;const s=rt.getTransfer(a);if(i===Un)return n.UNSIGNED_BYTE;if(i===Xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gh)return n.BYTE;if(i===xh)return n.SHORT;if(i===Er)return n.UNSIGNED_SHORT;if(i===qc)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===er)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===bh)return n.RGB;if(i===vn)return n.RGBA;if(i===Tr)return n.DEPTH_COMPONENT;if(i===Ar)return n.DEPTH_STENCIL;if(i===Mh)return n.RED;if(i===jc)return n.RED_INTEGER;if(i===Kc)return n.RG;if(i===Zc)return n.RG_INTEGER;if(i===Jc)return n.RGBA_INTEGER;if(i===ys||i===bs||i===Ms||i===Ss)if(s===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ms)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ol||i===Fl||i===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===zl||i===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kl||i===zl)return s===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vl)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hl||i===Gl||i===$l||i===Wl||i===ql||i===Xl||i===Yl||i===jl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yl)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jl)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kl)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tc)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nc||i===ic||i===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nc)return s===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===sc||i===oc||i===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const _3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v3=`
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

}`;class y3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Fh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nn({vertexShader:_3,fragmentShader:v3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new no(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b3 extends ea{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null;const g=typeof XRWebGLBinding<"u",m=new y3,f={},v=t.getContextAttributes();let y=null,E=null;const T=[],w=[],C=new $e;let I=null;const b=new tn;b.viewport=new ht;const M=new tn;M.viewport=new ht;const P=[b,M],U=new ky;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=T[Y];return ee===void 0&&(ee=new Wo,T[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=T[Y];return ee===void 0&&(ee=new Wo,T[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=T[Y];return ee===void 0&&(ee=new Wo,T[Y]=ee),ee.getHandSpace()};function $(Y){const ee=w.indexOf(Y.inputSource);if(ee===-1)return;const me=T[ee];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||s),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",J);for(let Y=0;Y<T.length;Y++){const ee=w[Y];ee!==null&&(w[Y]=null,T[Y].disconnect(ee))}O=null,V=null,m.reset();for(const Y in f)delete f[Y];e.setRenderTarget(y),p=null,h=null,d=null,a=null,E=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(a,t)),d},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",W),a.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=v.stencil?Ar:Tr,Ue=v.stencil?wr:Yi);const We={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(We),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new ji(h.textureWidth,h.textureHeight,{format:vn,type:Un,depthTexture:new Oh(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,me),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ji(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),it.setContext(a),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Y){for(let ee=0;ee<Y.removed.length;ee++){const me=Y.removed[ee],Ue=w.indexOf(me);Ue>=0&&(w[Ue]=null,T[Ue].disconnect(me))}for(let ee=0;ee<Y.added.length;ee++){const me=Y.added[ee];let Ue=w.indexOf(me);if(Ue===-1){for(let We=0;We<T.length;We++)if(We>=w.length){w.push(me),Ue=We;break}else if(w[We]===null){w[We]=me,Ue=We;break}if(Ue===-1)break}const we=T[Ue];we&&we.connect(me)}}const k=new B,Q=new B;function re(Y,ee,me){k.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const Ue=k.distanceTo(Q),we=ee.projectionMatrix.elements,We=me.projectionMatrix.elements,Be=we[14]/(we[10]-1),ke=we[14]/(we[10]+1),ot=(we[9]+1)/we[5],D=(we[9]-1)/we[5],Ke=(we[8]-1)/we[0],Ye=(We[8]+1)/We[0],lt=Be*Ke,ye=Be*Ye,gt=Ue/(-Ke+Ye),Ae=gt*-Ke;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ae),Y.translateZ(gt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ze=Be+gt,A=ke+gt,_=lt-Ae,z=ye+(Ue-Ae),j=ot*ke/A*ze,X=D*ke/A*ze;Y.projectionMatrix.makePerspective(_,z,j,X,ze,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function _e(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let ee=Y.near,me=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(me=m.depthFar)),U.near=M.near=b.near=ee,U.far=M.far=b.far=me,(O!==U.near||V!==U.far)&&(a.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,V=U.far),U.layers.mask=Y.layers.mask|6,b.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const Ue=Y.parent,we=U.cameras;_e(U,Ue);for(let We=0;We<we.length;We++)_e(we[We],Ue);we.length===2?re(U,b,M):U.projectionMatrix.copy(b.projectionMatrix),He(Y,U,Ue)};function He(Y,ee,me){me===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Rr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return f[Y]};let Je=null;function st(Y,ee){if(u=ee.getViewerPose(c||s),x=ee,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ue=!1;me.length!==U.cameras.length&&(U.cameras.length=0,Ue=!0);for(let ke=0;ke<me.length;ke++){const ot=me[ke];let D=null;if(p!==null)D=p.getViewport(ot);else{const Ye=d.getViewSubImage(h,ot);D=Ye.viewport,ke===0&&(e.setRenderTargetTextures(E,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(E))}let Ke=P[ke];Ke===void 0&&(Ke=new tn,Ke.layers.enable(ke),Ke.viewport=new ht,P[ke]=Ke),Ke.matrix.fromArray(ot.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ot.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(D.x,D.y,D.width,D.height),ke===0&&(U.matrix.copy(Ke.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ue===!0&&U.cameras.push(Ke)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){d=i.getBinding();const ke=d.getDepthInformation(me[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,a.renderState)}if(we&&we.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let ke=0;ke<me.length;ke++){const ot=me[ke].camera;if(ot){let D=f[ot];D||(D=new Fh,f[ot]=D);const Ke=d.getCameraImage(ot);D.sourceTexture=Ke}}}}for(let me=0;me<T.length;me++){const Ue=w[me],we=T[me];Ue!==null&&we!==void 0&&we.update(Ue,ee,c||s)}Je&&Je(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),x=null}const it=new kh;it.setAnimationLoop(st),this.setAnimationLoop=function(Y){Je=Y},this.dispose=function(){}}}const Ni=new En,M3=new yt;function S3(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Lh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,v,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Gt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Gt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),y=v.envMap,E=v.envMapRotation;y&&(m.envMap.value=y,Ni.copy(E),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(M3.makeRotationFromEuler(Ni)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function E3(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const E=y.program;i.uniformBlockBinding(v,E)}function c(v,y){let E=a[v.id];E===void 0&&(x(v),E=u(v),a[v.id]=E,v.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(v,T);const w=e.render.frame;r[v.id]!==w&&(h(v),r[v.id]=w)}function u(v){const y=d();v.__bindingPointIndex=y;const E=n.createBuffer(),T=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function d(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=a[v.id],E=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,C=E.length;w<C;w++){const I=Array.isArray(E[w])?E[w]:[E[w]];for(let b=0,M=I.length;b<M;b++){const P=I[b];if(p(P,w,b,T)===!0){const U=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let $=0;$<O.length;$++){const W=O[$],J=g(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,U+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,E,T){const w=v.value,C=y+"_"+E;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const I=T[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return T[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function x(v){const y=v.uniforms;let E=0;const T=16;for(let C=0,I=y.length;C<I;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,P=b.length;M<P;M++){const U=b[M],O=Array.isArray(U.value)?U.value:[U.value];for(let V=0,$=O.length;V<$;V++){const W=O[V],J=g(W),k=E%T,Q=k%J.boundary,re=k+Q;E+=Q,re!==0&&T-re<J.storage&&(E+=T-re),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=J.storage}}}const w=E%T;return w>0&&(E+=T-w),v.__size=E,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const E=s.indexOf(y.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(a[y.id]),delete a[y.id],delete r[y.id]}function f(){for(const v in a)n.deleteBuffer(a[v]);s=[],a={},r={}}return{bind:l,update:c,dispose:f}}const w3=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Gn=null;function T3(){return Gn===null&&(Gn=new Ty(w3,32,32,Kc,er),Gn.minFilter=dn,Gn.magFilter=dn,Gn.wrapS=Jn,Gn.wrapT=Jn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class A3{constructor(e={}){const{canvas:t=Fv(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const x=new Set([Jc,Zc,jc]),g=new Set([Un,Yi,Er,wr,Xc,Yc]),m=new Uint32Array(4),f=new Int32Array(4);let v=null,y=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1;this._outputColorSpace=cn;let I=0,b=0,M=null,P=-1,U=null;const O=new ht,V=new ht;let $=null;const W=new et(0);let J=0,k=t.width,Q=t.height,re=1,_e=null,He=null;const Je=new ht(0,0,k,Q),st=new ht(0,0,k,Q);let it=!1;const Y=new nu;let ee=!1,me=!1;const Ue=new yt,we=new B,We=new ht,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ot(){return M===null?re:1}let D=i;function Ke(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wc}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",Me,!1),D===null){const N="webgl2";if(D=Ke(N,S),D===null)throw Ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw S("WebGLRenderer: "+S.message),S}let Ye,lt,ye,gt,Ae,ze,A,_,z,j,X,H,be,fe,Re,Te,te,oe,Ie,Pe,ge,Fe,L,he;function le(){Ye=new N1(D),Ye.init(),Fe=new x3(D,Ye),lt=new T1(D,Ye,e,Fe),ye=new m3(D,Ye),lt.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),gt=new B1(D),Ae=new n3,ze=new g3(D,Ye,ye,Ae,lt,Fe,gt),A=new C1(w),_=new U1(w),z=new Hy(D),L=new E1(D,z),j=new O1(D,z,gt,L),X=new z1(D,j,z,gt),Ie=new k1(D,lt,ze),Te=new A1(Ae),H=new t3(w,A,_,Ye,lt,L,Te),be=new S3(w,Ae),fe=new a3,Re=new u3(Ye),oe=new S1(w,A,_,ye,X,p,l),te=new h3(w,X,lt),he=new E3(D,gt,lt,ye),Pe=new w1(D,Ye,gt),ge=new F1(D,Ye,gt),gt.programs=H.programs,w.capabilities=lt,w.extensions=Ye,w.properties=Ae,w.renderLists=fe,w.shadowMap=te,w.state=ye,w.info=gt}le();const ce=new b3(w,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(S){S!==void 0&&(re=S,this.setSize(k,Q,!1))},this.getSize=function(S){return S.set(k,Q)},this.setSize=function(S,N,G=!0){if(ce.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,Q=N,t.width=Math.floor(S*re),t.height=Math.floor(N*re),G===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(k*re,Q*re).floor()},this.setDrawingBufferSize=function(S,N,G){k=S,Q=N,re=G,t.width=Math.floor(S*G),t.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(O)},this.getViewport=function(S){return S.copy(Je)},this.setViewport=function(S,N,G,q){S.isVector4?Je.set(S.x,S.y,S.z,S.w):Je.set(S,N,G,q),ye.viewport(O.copy(Je).multiplyScalar(re).round())},this.getScissor=function(S){return S.copy(st)},this.setScissor=function(S,N,G,q){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,N,G,q),ye.scissor(V.copy(st).multiplyScalar(re).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(S){ye.setScissorTest(it=S)},this.setOpaqueSort=function(S){_e=S},this.setTransparentSort=function(S){He=S},this.getClearColor=function(S){return S.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,G=!0){let q=0;if(S){let F=!1;if(M!==null){const se=M.texture.format;F=x.has(se)}if(F){const se=M.texture.type,pe=g.has(se),Se=oe.getClearColor(),xe=oe.getClearAlpha(),Le=Se.r,Ne=Se.g,Ce=Se.b;pe?(m[0]=Le,m[1]=Ne,m[2]=Ce,m[3]=xe,D.clearBufferuiv(D.COLOR,0,m)):(f[0]=Le,f[1]=Ne,f[2]=Ce,f[3]=xe,D.clearBufferiv(D.COLOR,0,f))}else q|=D.COLOR_BUFFER_BIT}N&&(q|=D.DEPTH_BUFFER_BIT),G&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),oe.dispose(),fe.dispose(),Re.dispose(),Ae.dispose(),A.dispose(),_.dispose(),X.dispose(),L.dispose(),he.dispose(),H.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",uu),ce.removeEventListener("sessionend",du),wi.stop()};function ae(S){S.preventDefault(),od("WebGLRenderer: Context Lost."),C=!0}function Z(){od("WebGLRenderer: Context Restored."),C=!1;const S=gt.autoReset,N=te.enabled,G=te.autoUpdate,q=te.needsUpdate,F=te.type;le(),gt.autoReset=S,te.enabled=N,te.autoUpdate=G,te.needsUpdate=q,te.type=F}function Me(S){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ge(S){const N=S.target;N.removeEventListener("dispose",Ge),xt(N)}function xt(S){ct(S),Ae.remove(S)}function ct(S){const N=Ae.get(S).programs;N!==void 0&&(N.forEach(function(G){H.releaseProgram(G)}),S.isShaderMaterial&&H.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,q,F,se){N===null&&(N=Be);const pe=F.isMesh&&F.matrixWorld.determinant()<0,Se=sp(S,N,G,q,F);ye.setMaterial(q,pe);let xe=G.index,Le=1;if(q.wireframe===!0){if(xe=j.getWireframeAttribute(G),xe===void 0)return;Le=2}const Ne=G.drawRange,Ce=G.attributes.position;let Qe=Ne.start*Le,ut=(Ne.start+Ne.count)*Le;se!==null&&(Qe=Math.max(Qe,se.start*Le),ut=Math.min(ut,(se.start+se.count)*Le)),xe!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,xe.count)):Ce!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Ce.count));const Mt=ut-Qe;if(Mt<0||Mt===1/0)return;L.setup(F,q,Se,G,xe);let St,pt=Pe;if(xe!==null&&(St=z.get(xe),pt=ge,pt.setIndex(St)),F.isMesh)q.wireframe===!0?(ye.setLineWidth(q.wireframeLinewidth*ot()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(F.isLine){let De=q.linewidth;De===void 0&&(De=1),ye.setLineWidth(De*ot()),F.isLineSegments?pt.setMode(D.LINES):F.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else F.isPoints?pt.setMode(D.POINTS):F.isSprite&&pt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Cr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))pt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const De=F._multiDrawStarts,_t=F._multiDrawCounts,at=F._multiDrawCount,Kt=xe?z.get(xe).bytesPerElement:1,ta=Ae.get(q).currentProgram.getUniforms();for(let Zt=0;Zt<at;Zt++)ta.setValue(D,"_gl_DrawID",Zt),pt.render(De[Zt]/Kt,_t[Zt])}else if(F.isInstancedMesh)pt.renderInstances(Qe,Mt,F.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_t=Math.min(G.instanceCount,De);pt.renderInstances(Qe,Mt,_t)}else pt.render(Qe,Mt)};function Tn(S,N,G){S.transparent===!0&&S.side===Yn&&S.forceSinglePass===!1?(S.side=Gt,S.needsUpdate=!0,Fr(S,N,G),S.side=Mi,S.needsUpdate=!0,Fr(S,N,G),S.side=Yn):Fr(S,N,G)}this.compile=function(S,N,G=null){G===null&&(G=S),y=Re.get(G),y.init(N),T.push(y),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(y.pushLight(F),F.castShadow&&y.pushShadow(F))}),S!==G&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(y.pushLight(F),F.castShadow&&y.pushShadow(F))}),y.setupLights();const q=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Se=se[pe];Tn(Se,G,F),q.add(Se)}else Tn(se,G,F),q.add(se)}),y=T.pop(),q},this.compileAsync=function(S,N,G=null){const q=this.compile(S,N,G);return new Promise(F=>{function se(){if(q.forEach(function(pe){Ae.get(pe).currentProgram.isReady()&&q.delete(pe)}),q.size===0){F(S);return}setTimeout(se,10)}Ye.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let hn=null;function rp(S){hn&&hn(S)}function uu(){wi.stop()}function du(){wi.start()}const wi=new kh;wi.setAnimationLoop(rp),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(S){hn=S,ce.setAnimationLoop(S),S===null?wi.stop():wi.start()},ce.addEventListener("sessionstart",uu),ce.addEventListener("sessionend",du),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,N,M),y=Re.get(S,T.length),y.init(N),T.push(y),Ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Ue,Rn,N.reversedDepth),me=this.localClippingEnabled,ee=Te.init(this.clippingPlanes,me),v=fe.get(S,E.length),v.init(),E.push(v),ce.enabled===!0&&ce.isPresenting===!0){const se=w.xr.getDepthSensingMesh();se!==null&&so(se,N,-1/0,w.sortObjects)}so(S,N,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(_e,He),ke=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ke&&oe.addToRenderList(v,S),this.info.render.frame++,ee===!0&&Te.beginShadows();const G=y.state.shadowsArray;te.render(G,S,N),ee===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,F=v.transmissive;if(y.setupLights(),N.isArrayCamera){const se=N.cameras;if(F.length>0)for(let pe=0,Se=se.length;pe<Se;pe++){const xe=se[pe];hu(q,F,S,xe)}ke&&oe.render(S);for(let pe=0,Se=se.length;pe<Se;pe++){const xe=se[pe];fu(v,S,xe,xe.viewport)}}else F.length>0&&hu(q,F,S,N),ke&&oe.render(S),fu(v,S,N);M!==null&&b===0&&(ze.updateMultisampleRenderTarget(M),ze.updateRenderTargetMipmap(M)),S.isScene===!0&&S.onAfterRender(w,S,N),L.resetDefaultState(),P=-1,U=null,T.pop(),T.length>0?(y=T[T.length-1],ee===!0&&Te.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function so(S,N,G,q){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){q&&We.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ue);const pe=X.update(S),Se=S.material;Se.visible&&v.push(S,pe,Se,G,We.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const pe=X.update(S),Se=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),We.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),We.copy(pe.boundingSphere.center)),We.applyMatrix4(S.matrixWorld).applyMatrix4(Ue)),Array.isArray(Se)){const xe=pe.groups;for(let Le=0,Ne=xe.length;Le<Ne;Le++){const Ce=xe[Le],Qe=Se[Ce.materialIndex];Qe&&Qe.visible&&v.push(S,pe,Qe,G,We.z,Ce)}}else Se.visible&&v.push(S,pe,Se,G,We.z,null)}}const se=S.children;for(let pe=0,Se=se.length;pe<Se;pe++)so(se[pe],N,G,q)}function fu(S,N,G,q){const{opaque:F,transmissive:se,transparent:pe}=S;y.setupLightsView(G),ee===!0&&Te.setGlobalState(w.clippingPlanes,G),q&&ye.viewport(O.copy(q)),F.length>0&&Or(F,N,G),se.length>0&&Or(se,N,G),pe.length>0&&Or(pe,N,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function hu(S,N,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[q.id]===void 0&&(y.state.transmissionRenderTarget[q.id]=new ji(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?er:Un,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const se=y.state.transmissionRenderTarget[q.id],pe=q.viewport||O;se.setSize(pe.z*w.transmissionResolutionScale,pe.w*w.transmissionResolutionScale);const Se=w.getRenderTarget(),xe=w.getActiveCubeFace(),Le=w.getActiveMipmapLevel();w.setRenderTarget(se),w.getClearColor(W),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),ke&&oe.render(G);const Ne=w.toneMapping;w.toneMapping=_i;const Ce=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),ee===!0&&Te.setGlobalState(w.clippingPlanes,q),Or(S,G,q),ze.updateMultisampleRenderTarget(se),ze.updateRenderTargetMipmap(se),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ut=0,Mt=N.length;ut<Mt;ut++){const St=N[ut],{object:pt,geometry:De,material:_t,group:at}=St;if(_t.side===Yn&&pt.layers.test(q.layers)){const Kt=_t.side;_t.side=Gt,_t.needsUpdate=!0,pu(pt,G,q,De,_t,at),_t.side=Kt,_t.needsUpdate=!0,Qe=!0}}Qe===!0&&(ze.updateMultisampleRenderTarget(se),ze.updateRenderTargetMipmap(se))}w.setRenderTarget(Se,xe,Le),w.setClearColor(W,J),Ce!==void 0&&(q.viewport=Ce),w.toneMapping=Ne}function Or(S,N,G){const q=N.isScene===!0?N.overrideMaterial:null;for(let F=0,se=S.length;F<se;F++){const pe=S[F],{object:Se,geometry:xe,group:Le}=pe;let Ne=pe.material;Ne.allowOverride===!0&&q!==null&&(Ne=q),Se.layers.test(G.layers)&&pu(Se,N,G,xe,Ne,Le)}}function pu(S,N,G,q,F,se){S.onBeforeRender(w,N,G,q,F,se),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(w,N,G,q,S,se),F.transparent===!0&&F.side===Yn&&F.forceSinglePass===!1?(F.side=Gt,F.needsUpdate=!0,w.renderBufferDirect(G,N,q,F,S,se),F.side=Mi,F.needsUpdate=!0,w.renderBufferDirect(G,N,q,F,S,se),F.side=Yn):w.renderBufferDirect(G,N,q,F,S,se),S.onAfterRender(w,N,G,q,F,se)}function Fr(S,N,G){N.isScene!==!0&&(N=Be);const q=Ae.get(S),F=y.state.lights,se=y.state.shadowsArray,pe=F.state.version,Se=H.getParameters(S,F.state,se,N,G),xe=H.getProgramCacheKey(Se);let Le=q.programs;q.environment=S.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(S.isMeshStandardMaterial?_:A).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",Ge),Le=new Map,q.programs=Le);let Ne=Le.get(xe);if(Ne!==void 0){if(q.currentProgram===Ne&&q.lightsStateVersion===pe)return gu(S,Se),Ne}else Se.uniforms=H.getUniforms(S),S.onBeforeCompile(Se,w),Ne=H.acquireProgram(Se,xe),Le.set(xe,Ne),q.uniforms=Se.uniforms;const Ce=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Te.uniform),gu(S,Se),q.needsLights=lp(S),q.lightsStateVersion=pe,q.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=Ne,q.uniformsList=null,Ne}function mu(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Es.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function gu(S,N){const G=Ae.get(S);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function sp(S,N,G,q,F){N.isScene!==!0&&(N=Be),ze.resetTextureUnits();const se=N.fog,pe=q.isMeshStandardMaterial?N.environment:null,Se=M===null?w.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ga,xe=(q.isMeshStandardMaterial?_:A).get(q.envMap||pe),Le=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color;let Mt=_i;q.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Mt=w.toneMapping);const St=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=St!==void 0?St.length:0,De=Ae.get(q),_t=y.state.lights;if(ee===!0&&(me===!0||S!==U)){const kt=S===U&&q.id===P;Te.setState(q,S,kt)}let at=!1;q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==_t.state.version||De.outputColorSpace!==Se||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isBatchedMesh&&De.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&De.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==xe||q.fog===!0&&De.fog!==se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Te.numPlanes||De.numIntersection!==Te.numIntersection)||De.vertexAlphas!==Le||De.vertexTangents!==Ne||De.morphTargets!==Ce||De.morphNormals!==Qe||De.morphColors!==ut||De.toneMapping!==Mt||De.morphTargetsCount!==pt)&&(at=!0):(at=!0,De.__version=q.version);let Kt=De.currentProgram;at===!0&&(Kt=Fr(q,N,F));let ta=!1,Zt=!1,ar=!1;const vt=Kt.getUniforms(),qt=De.uniforms;if(ye.useProgram(Kt.program)&&(ta=!0,Zt=!0,ar=!0),q.id!==P&&(P=q.id,Zt=!0),ta||U!==S){ye.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),vt.setValue(D,"projectionMatrix",S.projectionMatrix),vt.setValue(D,"viewMatrix",S.matrixWorldInverse);const Xt=vt.map.cameraPosition;Xt!==void 0&&Xt.setValue(D,we.setFromMatrixPosition(S.matrixWorld)),lt.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),U!==S&&(U=S,Zt=!0,ar=!0)}if(F.isSkinnedMesh){vt.setOptional(D,F,"bindMatrix"),vt.setOptional(D,F,"bindMatrixInverse");const kt=F.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),vt.setValue(D,"boneTexture",kt.boneTexture,ze))}F.isBatchedMesh&&(vt.setOptional(D,F,"batchingTexture"),vt.setValue(D,"batchingTexture",F._matricesTexture,ze),vt.setOptional(D,F,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",F._indirectTexture,ze),vt.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",F._colorsTexture,ze));const sn=G.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Ie.update(F,G,Kt),(Zt||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,vt.setValue(D,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qt.envMap.value=xe,qt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(qt.envMapIntensity.value=N.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=T3()),Zt&&(vt.setValue(D,"toneMappingExposure",w.toneMappingExposure),De.needsLights&&op(qt,ar),se&&q.fog===!0&&be.refreshFogUniforms(qt,se),be.refreshMaterialUniforms(qt,q,re,Q,y.state.transmissionRenderTarget[S.id]),Es.upload(D,mu(De),qt,ze)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Es.upload(D,mu(De),qt,ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(D,"center",F.center),vt.setValue(D,"modelViewMatrix",F.modelViewMatrix),vt.setValue(D,"normalMatrix",F.normalMatrix),vt.setValue(D,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const kt=q.uniformsGroups;for(let Xt=0,oo=kt.length;Xt<oo;Xt++){const Ti=kt[Xt];he.update(Ti,Kt),he.bind(Ti,Kt)}}return Kt}function op(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function lp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(S,N,G){const q=Ae.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ae.get(S.texture).__webglTexture=N,Ae.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:G,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const G=Ae.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const cp=D.createFramebuffer();this.setRenderTarget=function(S,N=0,G=0){M=S,I=N,b=G;let q=!0,F=null,se=!1,pe=!1;if(S){const xe=Ae.get(S);if(xe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(xe.__webglFramebuffer===void 0)ze.setupRenderTarget(S);else if(xe.__hasExternalTextures)ze.rebindTextures(S,Ae.get(S.texture).__webglTexture,Ae.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ce=S.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&Ae.has(Ce)&&(S.width!==Ce.image.width||S.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const Ne=Ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?F=Ne[N][G]:F=Ne[N],se=!0):S.samples>0&&ze.useMultisampledRTT(S)===!1?F=Ae.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[G]:F=Ne,O.copy(S.viewport),V.copy(S.scissor),$=S.scissorTest}else O.copy(Je).multiplyScalar(re).floor(),V.copy(st).multiplyScalar(re).floor(),$=it;if(G!==0&&(F=cp),ye.bindFramebuffer(D.FRAMEBUFFER,F)&&q&&ye.drawBuffers(S,F),ye.viewport(O),ye.scissor(V),ye.setScissorTest($),se){const xe=Ae.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,G)}else if(pe){const xe=N;for(let Le=0;Le<S.textures.length;Le++){const Ne=Ae.get(S.textures[Le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,G,xe)}}else if(S!==null&&G!==0){const xe=Ae.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xe.__webglTexture,G)}P=-1},this.readRenderTargetPixels=function(S,N,G,q,F,se,pe,Se=0){if(!(S&&S.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){ye.bindFramebuffer(D.FRAMEBUFFER,xe);try{const Le=S.textures[Se],Ne=Le.format,Ce=Le.type;if(!lt.textureFormatReadable(Ne)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ce)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-q&&G>=0&&G<=S.height-F&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(N,G,q,F,Fe.convert(Ne),Fe.convert(Ce),se))}finally{const Le=M!==null?Ae.get(M).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,N,G,q,F,se,pe,Se=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe)if(N>=0&&N<=S.width-q&&G>=0&&G<=S.height-F){ye.bindFramebuffer(D.FRAMEBUFFER,xe);const Le=S.textures[Se],Ne=Le.format,Ce=Le.type;if(!lt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(N,G,q,F,Fe.convert(Ne),Fe.convert(Ce),0);const ut=M!==null?Ae.get(M).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,ut);const Mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bv(D,Mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(Qe),D.deleteSync(Mt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,G=0){const q=Math.pow(2,-G),F=Math.floor(S.image.width*q),se=Math.floor(S.image.height*q),pe=N!==null?N.x:0,Se=N!==null?N.y:0;ze.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,pe,Se,F,se),ye.unbindTexture()};const up=D.createFramebuffer(),dp=D.createFramebuffer();this.copyTextureToTexture=function(S,N,G=null,q=null,F=0,se=null){se===null&&(F!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=F,F=0):se=0);let pe,Se,xe,Le,Ne,Ce,Qe,ut,Mt;const St=S.isCompressedTexture?S.mipmaps[se]:S.image;if(G!==null)pe=G.max.x-G.min.x,Se=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Le=G.min.x,Ne=G.min.y,Ce=G.isBox3?G.min.z:0;else{const sn=Math.pow(2,-F);pe=Math.floor(St.width*sn),Se=Math.floor(St.height*sn),S.isDataArrayTexture?xe=St.depth:S.isData3DTexture?xe=Math.floor(St.depth*sn):xe=1,Le=0,Ne=0,Ce=0}q!==null?(Qe=q.x,ut=q.y,Mt=q.z):(Qe=0,ut=0,Mt=0);const pt=Fe.convert(N.format),De=Fe.convert(N.type);let _t;N.isData3DTexture?(ze.setTexture3D(N,0),_t=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ze.setTexture2DArray(N,0),_t=D.TEXTURE_2D_ARRAY):(ze.setTexture2D(N,0),_t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const at=D.getParameter(D.UNPACK_ROW_LENGTH),Kt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ta=D.getParameter(D.UNPACK_SKIP_PIXELS),Zt=D.getParameter(D.UNPACK_SKIP_ROWS),ar=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);const vt=S.isDataArrayTexture||S.isData3DTexture,qt=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const sn=Ae.get(S),kt=Ae.get(N),Xt=Ae.get(sn.__renderTarget),oo=Ae.get(kt.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,Xt.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,oo.__webglFramebuffer);for(let Ti=0;Ti<xe;Ti++)vt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(S).__webglTexture,F,Ce+Ti),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(N).__webglTexture,se,Mt+Ti)),D.blitFramebuffer(Le,Ne,pe,Se,Qe,ut,pe,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||Ae.has(S)){const sn=Ae.get(S),kt=Ae.get(N);ye.bindFramebuffer(D.READ_FRAMEBUFFER,up),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,dp);for(let Xt=0;Xt<xe;Xt++)vt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,F,Ce+Xt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,F),qt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kt.__webglTexture,se,Mt+Xt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kt.__webglTexture,se),F!==0?D.blitFramebuffer(Le,Ne,pe,Se,Qe,ut,pe,Se,D.COLOR_BUFFER_BIT,D.NEAREST):qt?D.copyTexSubImage3D(_t,se,Qe,ut,Mt+Xt,Le,Ne,pe,Se):D.copyTexSubImage2D(_t,se,Qe,ut,Le,Ne,pe,Se);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else qt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(_t,se,Qe,ut,Mt,pe,Se,xe,pt,De,St.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,se,Qe,ut,Mt,pe,Se,xe,pt,St.data):D.texSubImage3D(_t,se,Qe,ut,Mt,pe,Se,xe,pt,De,St):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,se,Qe,ut,pe,Se,pt,De,St.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,se,Qe,ut,St.width,St.height,pt,St.data):D.texSubImage2D(D.TEXTURE_2D,se,Qe,ut,pe,Se,pt,De,St);D.pixelStorei(D.UNPACK_ROW_LENGTH,at),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ta),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ar),se===0&&N.generateMipmaps&&D.generateMipmap(_t),ye.unbindTexture()},this.initRenderTarget=function(S){Ae.get(S).__webglFramebuffer===void 0&&ze.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ze.setTextureCube(S,0):S.isData3DTexture?ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ze.setTexture2DArray(S,0):ze.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){I=0,b=0,M=null,ye.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const nf={type:"change"},iu={type:"start"},$h={type:"end"},fs=new tu,af=new hi,C3=Math.cos(70*Ma.DEG2RAD),Dt=new B,Yt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tl=1e-6;class R3 extends zy{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:La.ROTATE,MIDDLE:La.DOLLY,RIGHT:La.PAN},this.touches={ONE:Ta.ROTATE,TWO:Ta.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Si,this._lastTargetPosition=new B,this._quat=new Si().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pd,this._sphericalDelta=new Pd,this._scale=1,this._panOffset=new B,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new B,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=P3.bind(this),this._onPointerDown=D3.bind(this),this._onPointerUp=L3.bind(this),this._onContextMenu=k3.bind(this),this._onMouseWheel=N3.bind(this),this._onKeyDown=O3.bind(this),this._onTouchStart=F3.bind(this),this._onTouchMove=B3.bind(this),this._onMouseDown=I3.bind(this),this._onMouseMove=U3.bind(this),this._interceptControlDown=z3.bind(this),this._interceptControlUp=V3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nf),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Yt:i>Math.PI&&(i-=Yt),a<-Math.PI?a+=Yt:a>Math.PI&&(a-=Yt),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Dt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(fs.origin.copy(this.object.position),fs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fs.direction))<C3?this.object.lookAt(this.target):(af.setFromNormalAndCoplanarPoint(this.object.up,this.target),fs.intersectPlane(af,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tl||this._lastTargetPosition.distanceToSquared(this.target)>tl?(this.dispatchEvent(nf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yt/60*this.autoRotateSpeed*e:Yt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Dt.copy(a).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,r=t-i.top,s=i.width,o=i.height;this._mouse.x=a/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(i*i+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function D3(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function P3(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function L3(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($h),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function I3(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case La.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case La.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case La.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(iu)}function U3(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function N3(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent(iu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent($h))}function O3(n){this.enabled!==!1&&this._handleKeyDown(n)}function F3(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ta.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case Ta.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Ta.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case Ta.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(iu)}function B3(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function k3(n){this.enabled!==!1&&n.preventDefault()}function z3(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function V3(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const H3=Ee({__name:"BackgroundCanvas",setup(n){const e=Oe(null);let t,i,a,r=null,s=null;const o=[];let l=[],c={},u=0;const d=()=>{if(!a||!i)return;const{innerWidth:x,innerHeight:g}=window;i.aspect=x/g,i.updateProjectionMatrix(),a.setSize(x,g)},h=()=>{window.removeEventListener("resize",d),cancelAnimationFrame(u),a&&(a.setAnimationLoop(null),a.dispose()),t&&(t.traverse(x=>{const g=x;g.isMesh&&(g.geometry?.dispose(),Array.isArray(g.material)?g.material.forEach(m=>m&&m.dispose&&m.dispose()):g.material?.dispose())}),t.clear()),r&&(r.dispose(),r=null),l=[],c={}},p=()=>{t=new wy,a=new A3({canvas:e.value,antialias:!0,alpha:!0}),a.setClearColor(0,0),a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(window.devicePixelRatio>1?2:1),a.shadowMap.enabled=!0,i=new tn(75,window.innerWidth/window.innerHeight,.1,1e3),i.position.set(32,32,32),i.lookAt(0,0,0),r=new R3(i,a.domElement),r.enableZoom=!1,r.enablePan=!1,r.enableDamping=!0,r.dampingFactor=.02;const x=new By(16777215,.1);t.add(x);const g=new Oy(16777215,2048,2048);g.position.set(0,0,0),g.castShadow=!0,g.shadow.mapSize.set(256,256),g.shadow.camera.near=1,g.shadow.camera.far=256,t.add(g);const m=new Nn({uniforms:{glowColor:{value:new et(16763955)},viewVector:{value:new B(0,0,1)}},vertexShader:`
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 glowColor;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.8 - dot(vNormal, vec3(0.0, 0.0, 0.5)), 2.0);
        gl_FragColor = vec4(glowColor * intensity, intensity);
      }
    `,side:Gt,blending:bl,transparent:!0}),f=new yn(new vr(8,64,64),m);t.add(f);const v=[{speed:.32,radius:11,incDeg:27,nodeDeg:10,phaseDeg:270},{speed:.17,radius:12,incDeg:-18,nodeDeg:75,phaseDeg:225},{speed:.12,radius:14,incDeg:0,nodeDeg:45,phaseDeg:135},{speed:.07,radius:16,incDeg:-36,nodeDeg:25,phaseDeg:270},{speed:.048,radius:19,incDeg:18,nodeDeg:55,phaseDeg:90},{speed:.027,radius:21,incDeg:-27,nodeDeg:90,phaseDeg:225},{speed:.022,radius:23,incDeg:36,nodeDeg:75,phaseDeg:180},{speed:.012,radius:25,incDeg:-18,nodeDeg:15,phaseDeg:135}],y=new Aa;c={},l=[],v.forEach((I,b)=>{const P=[.5,.6,.7,.8,.9,1,.6,.7][b]??.7,U=new vr(P,16,16),O=new Ad({color:"#FFFFFF"}),V=new yn(U,O);c[V.uuid]=Ma.degToRad(I.phaseDeg??0),t.add(V),l.push({mesh:V,data:I});const $=[];for(let Q=0;Q<=256;Q+=1){const re=Q/256*Math.PI*2;$.push(Math.cos(re)*I.radius,0,Math.sin(re)*I.radius)}const W=new wn;W.setAttribute("position",new fn($,3));const J=new Nh({color:"white",transparent:!0,opacity:.08}),k=new Py(W,J);k.rotation.set(Ma.degToRad(I.incDeg),Ma.degToRad(I.nodeDeg),0),y.add(k)}),t.add(y);const E=I=>{const b=new vr(I,32,32),M=new Ad;return new yn(b,M)};s=new Aa;const T=1024;for(let I=0;I<T;I+=1){const b=Math.random()*.1+.1,M=E(b),P=M.material;P.emissive=new et(16777215),P.emissiveIntensity=.75,M.position.set(Math.random()*256-128,Math.random()*256-128,Math.random()*256-128),s.add(M),o.push(M)}t.add(s);let w=0;const C=I=>{if(!a||!t||!i){u=requestAnimationFrame(C);return}const b=w?(I-w)/1e3:0;w=I;const M=I*.01;o.forEach((P,U)=>{const O=P.material;O.emissiveIntensity=(Math.sin(M+U*.5)+1)*.375}),s&&(s.rotation.y+=b/32),l.forEach(({mesh:P,data:U})=>{const O=P.userData||U,V=O.speed??U.speed??.01,$=O.radius??U.radius??10,W=O.incDeg??U.incDeg??0,J=O.nodeDeg??U.nodeDeg??0;c[P.uuid]=(c[P.uuid]??0)-b*V;const k=c[P.uuid],Q=new B(Math.cos(k)*$,0,Math.sin(k)*$),re=new Si().setFromEuler(new En(Ma.degToRad(W),Ma.degToRad(J),0,"XYZ"));Q.applyQuaternion(re),P.position.copy(Q);const{rotation:_e}=P;_e.y+=b*(1/Math.max(.1,V))}),r&&r.update(),a.render(t,i),u=requestAnimationFrame(C)};u=requestAnimationFrame(C),window.addEventListener("resize",d)};return On(()=>{const x=()=>p();typeof vu<"u"?vu(()=>x(),{timeout:300}):setTimeout(()=>x(),50)}),Ya(()=>{h()}),(x,g)=>(ie(),Bt("canvas",{id:"canvas",ref_key:"canvas",ref:e,class:"absolute z-1 w-full h-full bg-slate-900"},null,512))}}),G3=Object.assign(H3,{__name:"BackgroundCanvas"}),hs={meta:"",ctrl:"",alt:"",win:"⊞",command:"⌘",shift:"⇧",control:"⌃",option:"⌥",enter:"↵",delete:"⌦",backspace:"⌫",escape:"Esc",tab:"⇥",capslock:"⇪",arrowup:"↑",arrowright:"→",arrowdown:"↓",arrowleft:"←",pageup:"⇞",pagedown:"⇟",home:"↖",end:"↘"},$3=()=>{const n=K(()=>navigator&&navigator.userAgent&&navigator.userAgent.match(/Macintosh;/)),e=Hs({meta:" ",alt:" ",ctrl:" "});On(()=>{e.meta=n.value?hs.command:"Ctrl",e.ctrl=n.value?hs.control:"Ctrl",e.alt=n.value?hs.option:"Alt"});function t(i){if(i)return["meta","alt","ctrl"].includes(i)?e[i]:hs[i]||i}return{macOS:n,getKbdKey:t}},W3=Bp($3),q3={base:"inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase",variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},variant:{solid:"",outline:"",soft:"",subtle:""},size:{sm:"h-4 min-w-[16px] text-[10px]",md:"h-5 min-w-[20px] text-[11px]",lg:"h-6 min-w-[24px] text-[12px]"}},compoundVariants:[{color:"primary",variant:"solid",class:"text-inverted bg-primary"},{color:"secondary",variant:"solid",class:"text-inverted bg-secondary"},{color:"success",variant:"solid",class:"text-inverted bg-success"},{color:"info",variant:"solid",class:"text-inverted bg-info"},{color:"warning",variant:"solid",class:"text-inverted bg-warning"},{color:"error",variant:"solid",class:"text-inverted bg-error"},{color:"primary",variant:"outline",class:"ring ring-inset ring-primary/50 text-primary"},{color:"secondary",variant:"outline",class:"ring ring-inset ring-secondary/50 text-secondary"},{color:"success",variant:"outline",class:"ring ring-inset ring-success/50 text-success"},{color:"info",variant:"outline",class:"ring ring-inset ring-info/50 text-info"},{color:"warning",variant:"outline",class:"ring ring-inset ring-warning/50 text-warning"},{color:"error",variant:"outline",class:"ring ring-inset ring-error/50 text-error"},{color:"primary",variant:"soft",class:"text-primary bg-primary/10"},{color:"secondary",variant:"soft",class:"text-secondary bg-secondary/10"},{color:"success",variant:"soft",class:"text-success bg-success/10"},{color:"info",variant:"soft",class:"text-info bg-info/10"},{color:"warning",variant:"soft",class:"text-warning bg-warning/10"},{color:"error",variant:"soft",class:"text-error bg-error/10"},{color:"primary",variant:"subtle",class:"text-primary ring ring-inset ring-primary/25 bg-primary/10"},{color:"secondary",variant:"subtle",class:"text-secondary ring ring-inset ring-secondary/25 bg-secondary/10"},{color:"success",variant:"subtle",class:"text-success ring ring-inset ring-success/25 bg-success/10"},{color:"info",variant:"subtle",class:"text-info ring ring-inset ring-info/25 bg-info/10"},{color:"warning",variant:"subtle",class:"text-warning ring ring-inset ring-warning/25 bg-warning/10"},{color:"error",variant:"subtle",class:"text-error ring ring-inset ring-error/25 bg-error/10"},{color:"neutral",variant:"solid",class:"text-inverted bg-inverted"},{color:"neutral",variant:"outline",class:"ring ring-inset ring-accented text-default bg-default"},{color:"neutral",variant:"soft",class:"text-default bg-elevated"},{color:"neutral",variant:"subtle",class:"ring ring-inset ring-accented text-default bg-elevated"}],defaultVariants:{variant:"outline",color:"neutral",size:"md"}},X3={__name:"UKbd",props:{as:{type:null,required:!1,default:"kbd"},value:{type:null,required:!1},color:{type:null,required:!1},variant:{type:null,required:!1},size:{type:null,required:!1},class:{type:null,required:!1}},setup(n){const e=n,{getKbdKey:t}=W3(),i=Ws(),a=K(()=>vi({extend:vi(q3),...i.ui?.kbd||{}}));return(r,s)=>(ie(),ue(R(tt),{as:n.as,class:Tt(a.value({class:e.class,color:e.color,variant:e.variant,size:e.size}))},{default:ne(()=>[ve(r.$slots,"default",{},()=>[nn(Lt(R(t)(n.value)),1)])]),_:3},8,["as","class"]))}},Y3={slots:{content:"flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",arrow:"fill-default",text:"truncate",kbds:"hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['·'] not-first-of-type:before:me-0.5",kbdsSize:"sm"}},j3={__name:"UTooltip",props:{text:{type:String,required:!1},kbds:{type:Array,required:!1},content:{type:Object,required:!1},arrow:{type:[Boolean,Object],required:!1},portal:{type:[Boolean,String],required:!1,skipCheck:!0,default:!0},reference:{type:null,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1},delayDuration:{type:Number,required:!1},disableHoverableContent:{type:Boolean,required:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1}},emits:["update:open"],setup(n,{emit:e}){const t=n,i=e,a=bc(),r=Ws(),s=Ei(sl(t,"defaultOpen","open","delayDuration","disableHoverableContent","disableClosingTrigger","ignoreNonKeyboardFocus"),i),o=xf(Hi(()=>t.portal)),l=Hi(()=>mc(t.content,{side:"bottom",sideOffset:8,collisionPadding:8})),c=Hi(()=>t.arrow),u=K(()=>vi({extend:vi(Y3),...r.ui?.tooltip||{}})({side:l.value.side}));return(d,h)=>(ie(),ue(R(z_),nt(R(s),{disabled:!(n.text||n.kbds?.length||a.content)||t.disabled}),{default:ne(({open:p})=>[a.default||n.reference?(ie(),ue(R(j_),nt({key:0},d.$attrs,{"as-child":"",reference:n.reference,class:t.class}),{default:ne(()=>[ve(d.$slots,"default",{open:p})]),_:2},1040,["reference","class"])):un("",!0),je(R(X_),At(Ct(R(o))),{default:ne(()=>[je(R(W_),nt(l.value,{class:u.value.content({class:[!a.default&&t.class,t.ui?.content]})}),{default:ne(()=>[ve(d.$slots,"content",{ui:u.value},()=>[n.text?(ie(),Bt("span",{key:0,class:Tt(u.value.text({class:t.ui?.text}))},Lt(n.text),3)):un("",!0),n.kbds?.length?(ie(),Bt("span",{key:1,class:Tt(u.value.kbds({class:t.ui?.kbds}))},[(ie(!0),Bt(Sa,null,Ea(n.kbds,(x,g)=>(ie(),ue(X3,nt({key:g,size:t.ui?.kbdsSize||u.value.kbdsSize()},{ref_for:!0},typeof x=="string"?{value:x}:x),null,16,["size"]))),128))],2)):un("",!0)]),n.arrow?(ie(),ue(R(F_),nt({key:0},c.value,{class:u.value.arrow({class:t.ui?.arrow})}),null,16,["class"])):un("",!0)]),_:3},16,["class"])]),_:3},16)]),_:3},16,["disabled"]))}},K3={Root:H0,Header:ag,Heading:sg,Grid:Y0,Cell:$0,HeadCell:ng,Next:lg,Prev:ug,GridHead:J0,GridBody:K0,GridRow:eg,CellTrigger:q0},Z3={Root:T_,Trigger:N_,Portal:I_,Content:P_,Arrow:S_},J3={Root:Dx,Trigger:Xx,Portal:Wx,Content:Gx,Arrow:Ux,Close:Ox,Anchor:Lx},Q3={Root:Qx,Header:m_,Heading:x_,Grid:r_,Cell:t_,HeadCell:h_,Next:v_,Prev:b_,GridHead:c_,GridBody:o_,GridRow:d_,CellTrigger:i_},eE={slots:{content:"bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",arrow:"fill-default"}},Wh={__name:"UPopover",props:{mode:{type:null,required:!1,default:"click"},content:{type:Object,required:!1},arrow:{type:[Boolean,Object],required:!1},portal:{type:[Boolean,String],required:!1,skipCheck:!0,default:!0},reference:{type:null,required:!1},dismissible:{type:Boolean,required:!1,default:!0},class:{type:null,required:!1},ui:{type:null,required:!1},defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1},modal:{type:Boolean,required:!1},openDelay:{type:Number,required:!1,default:0},closeDelay:{type:Number,required:!1,default:0}},emits:["close:prevent","update:open"],setup(n,{emit:e}){const t=n,i=e,a=bc(),r=Ws(),s=t.mode==="hover"?sl(t,"defaultOpen","open","openDelay","closeDelay"):sl(t,"defaultOpen","open","modal"),o=Ei(s,i),l=xf(Hi(()=>t.portal)),c=Hi(()=>mc(t.content,{side:"bottom",sideOffset:8,collisionPadding:8})),u=K(()=>t.dismissible?{}:["pointerDownOutside","interactOutside","escapeKeyDown"].reduce((g,m)=>(g[m]=f=>{f.preventDefault(),i("close:prevent")},g),{})),d=Hi(()=>t.arrow),h=K(()=>vi({extend:vi(eE),...r.ui?.popover||{}})({side:c.value.side})),p=K(()=>t.mode==="hover"?Z3:J3);return(x,g)=>(ie(),ue(R(p).Root,At(Ct(R(o))),{default:ne(({open:m,close:f})=>[a.default||n.reference?(ie(),ue(R(p).Trigger,{key:0,"as-child":"",reference:n.reference,class:Tt(t.class)},{default:ne(()=>[ve(x.$slots,"default",{open:m})]),_:2},1032,["reference","class"])):un("",!0),"Anchor"in p.value&&a.anchor?(ie(),ue(R(p).Anchor,{key:1,"as-child":""},{default:ne(()=>[ve(x.$slots,"anchor",At(Ct(f?{close:f}:{})))]),_:2},1024)):un("",!0),je(R(p).Portal,At(Ct(R(l))),{default:ne(()=>[je(R(p).Content,nt(c.value,{class:h.value.content({class:[!a.default&&t.class,t.ui?.content]})},gf(u.value)),{default:ne(()=>[ve(x.$slots,"content",At(Ct(f?{close:f}:{}))),n.arrow?(ie(),ue(R(p).Arrow,nt({key:0},d.value,{class:h.value.arrow({class:t.ui?.arrow})}),null,16,["class"])):un("",!0)]),_:2},1040,["class"])]),_:2},1040)]),_:3},16))}},tE=n=>{const[e="",t=""]=n?.split("T")??[];return{date:e,time:t}},nE=()=>{const{data:n,pending:e,error:t,refresh:i}=rm("https://api.open-meteo.com/v1/forecast",{key:"seoul-weather",query:{latitude:37.566,longitude:126.9784,timezone:"Asia/Seoul",current:"temperature_2m,wind_speed_10m,weather_code"}},"$Zg8g7audbx");return{current:K(()=>{const r=n.value?.current,{date:s,time:o}=tE(r?.time);return{temperature:r?.temperature_2m,windspeed:r?.wind_speed_10m,weathercode:r?.weather_code,date:s,time:o}}),pending:e,error:t,refresh:i}},au=()=>kp("color-mode").value,iE={class:"text-xs"},aE={class:"flex flex-col p-2 gap-1.5 text-slate-800 dark:text-slate-100 text-sm"},rE={class:"flex items-center gap-2"},sE={class:"flex flex-col text-xs"},oE={class:"flex items-center gap-2"},lE={class:"flex items-center gap-2"},cE={class:"flex items-center gap-2"},uE="h-10 cursor-pointer rounded-xl border border-transparent text-slate-50/90 hover:border-white/18 hover:bg-white/16 hover:text-white dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/6",dE=Ee({__name:"WeatherButton",setup(n){const{current:e,pending:t,error:i}=nE(),a=au(),r=K(()=>a.value==="dark"?{}:{content:"dark border border-purple-300/18 bg-slate-900/90 text-slate-100 shadow-[0_16px_28px_rgba(15,23,42,0.28)] backdrop-blur-xl"}),s=(g,m)=>{const f=typeof m=="boolean"?m:m===1;return g==null?{text:"정보 없음",icon:"i-lucide-cloud"}:g===0?{text:"맑음",icon:f?"i-lucide-sun":"i-lucide-moon"}:[1,2,3].includes(g)?{text:"구름 조금",icon:f?"i-lucide-cloud-sun":"i-lucide-cloud-moon"}:[45,48].includes(g)?{text:"안개",icon:"i-lucide-fog"}:[51,53,55,56,57].includes(g)?{text:"이슬비",icon:"i-lucide-cloud-drizzle"}:[61,63,65,66,67,80,81,82].includes(g)?{text:"비",icon:"i-lucide-cloud-rain"}:[71,73,75,77,85,86].includes(g)?{text:"눈",icon:"i-lucide-cloud-snow"}:[95,96,99].includes(g)?{text:"뇌우",icon:"i-lucide-cloud-lightning"}:{text:`${g}`,icon:"i-lucide-cloud"}},o=K(()=>t.value&&!i.value),l=K(()=>o.value?{text:"날씨 불러오는 중",icon:"i-lucide-loader-circle"}:i.value?{text:"정보 없음",icon:"i-lucide-cloud"}:s(e.value.weathercode)),c=K(()=>l.value.icon),u=K(()=>{if(o.value)return"--°";if(i.value)return"N/A";const g=e.value.temperature;return g==null?"--°":`${g.toFixed(1)}°`}),d=K(()=>{const g=e.value.temperature;return g==null?"-":`${g.toFixed(1)}°`}),h=K(()=>{const g=e.value.windspeed;return g==null?"-":`${g.toFixed(1)}m/s`}),p=K(()=>{const g=e.value.date??"",m=e.value.time??"";return`${g} ${m}`.trim()||"-"}),x=K(()=>o.value?"weather loading":i.value?"weather error":`weather ${u.value} ${l.value.text}`);return(g,m)=>{const f=_f,v=ki,y=Wh;return ie(),ue(y,{ui:r.value},{content:ne(()=>[mt("ul",aE,[mt("h4",rE,[je(f,{name:"i-lucide-calendar-clock",class:"w-4 h-4","aria-hidden":"true"}),mt("div",sE,[m[0]||(m[0]=mt("span",null,"기준 시각",-1)),mt("span",null,Lt(p.value),1)])]),mt("li",oE,[je(f,{name:"i-lucide-thermometer",class:"w-4 h-4","aria-hidden":"true"}),mt("span",null,Lt(d.value),1)]),mt("li",lE,[je(f,{name:l.value.icon,class:"w-4 h-4","aria-hidden":"true"},null,8,["name"]),mt("span",null,Lt(l.value.text),1)]),mt("li",cE,[je(f,{name:"i-lucide-wind",class:"w-4 h-4","aria-hidden":"true"}),mt("span",null,Lt(h.value),1)])])]),default:ne(()=>[je(v,{variant:"ghost","aria-label":x.value,class:Tt(uE),disabled:o.value},{default:ne(()=>[o.value?(ie(),ue(f,{key:0,name:"i-lucide-loader-circle",class:"w-4 h-4 animate-spin"})):(ie(),ue(f,{key:1,name:c.value,class:"w-4 h-4"},null,8,["name"])),mt("span",iE,Lt(u.value),1)]),_:1},8,["aria-label","disabled"])]),_:1},8,["ui"])}}}),fE=Object.assign(dE,{__name:"WeatherButton"}),hE={slots:{root:"",header:"flex items-center justify-between",body:"flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0",heading:"text-center font-medium truncate mx-auto",grid:"w-full border-collapse select-none space-y-1 focus:outline-none",gridRow:"grid grid-cols-7 place-items-center",gridWeekDaysRow:"mb-1 grid w-full grid-cols-7",gridBody:"grid",headCell:"rounded-md",cell:"relative text-center",cellTrigger:["m-0.5 relative flex items-center justify-center rounded-full whitespace-nowrap focus-visible:ring-2 focus:outline-none data-disabled:text-muted data-unavailable:line-through data-unavailable:text-muted data-unavailable:pointer-events-none data-today:font-semibold data-[outside-view]:text-muted","transition"]},variants:{color:{primary:{headCell:"text-primary",cellTrigger:"focus-visible:ring-primary"},secondary:{headCell:"text-secondary",cellTrigger:"focus-visible:ring-secondary"},success:{headCell:"text-success",cellTrigger:"focus-visible:ring-success"},info:{headCell:"text-info",cellTrigger:"focus-visible:ring-info"},warning:{headCell:"text-warning",cellTrigger:"focus-visible:ring-warning"},error:{headCell:"text-error",cellTrigger:"focus-visible:ring-error"},neutral:{headCell:"text-highlighted",cellTrigger:"focus-visible:ring-inverted"}},variant:{solid:"",outline:"",soft:"",subtle:""},size:{xs:{heading:"text-xs",cell:"text-xs",headCell:"text-[10px]",cellTrigger:"size-7",body:"space-y-2 pt-2"},sm:{heading:"text-xs",headCell:"text-xs",cell:"text-xs",cellTrigger:"size-7"},md:{heading:"text-sm",headCell:"text-xs",cell:"text-sm",cellTrigger:"size-8"},lg:{heading:"text-md",headCell:"text-md",cellTrigger:"size-9 text-md"},xl:{heading:"text-lg",headCell:"text-lg",cellTrigger:"size-10 text-lg"}}},compoundVariants:[{color:"primary",variant:"solid",class:{cellTrigger:"data-[selected]:bg-primary data-[selected]:text-inverted data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20"}},{color:"secondary",variant:"solid",class:{cellTrigger:"data-[selected]:bg-secondary data-[selected]:text-inverted data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20"}},{color:"success",variant:"solid",class:{cellTrigger:"data-[selected]:bg-success data-[selected]:text-inverted data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20"}},{color:"info",variant:"solid",class:{cellTrigger:"data-[selected]:bg-info data-[selected]:text-inverted data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20"}},{color:"warning",variant:"solid",class:{cellTrigger:"data-[selected]:bg-warning data-[selected]:text-inverted data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20"}},{color:"error",variant:"solid",class:{cellTrigger:"data-[selected]:bg-error data-[selected]:text-inverted data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20"}},{color:"primary",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-primary/50 data-[selected]:text-primary data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/10 hover:not-data-[selected]:bg-primary/10"}},{color:"secondary",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-secondary/50 data-[selected]:text-secondary data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/10 hover:not-data-[selected]:bg-secondary/10"}},{color:"success",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-success/50 data-[selected]:text-success data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/10 hover:not-data-[selected]:bg-success/10"}},{color:"info",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-info/50 data-[selected]:text-info data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/10 hover:not-data-[selected]:bg-info/10"}},{color:"warning",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-warning/50 data-[selected]:text-warning data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/10 hover:not-data-[selected]:bg-warning/10"}},{color:"error",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-error/50 data-[selected]:text-error data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/10 hover:not-data-[selected]:bg-error/10"}},{color:"primary",variant:"soft",class:{cellTrigger:"data-[selected]:bg-primary/10 data-[selected]:text-primary data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20"}},{color:"secondary",variant:"soft",class:{cellTrigger:"data-[selected]:bg-secondary/10 data-[selected]:text-secondary data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20"}},{color:"success",variant:"soft",class:{cellTrigger:"data-[selected]:bg-success/10 data-[selected]:text-success data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20"}},{color:"info",variant:"soft",class:{cellTrigger:"data-[selected]:bg-info/10 data-[selected]:text-info data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20"}},{color:"warning",variant:"soft",class:{cellTrigger:"data-[selected]:bg-warning/10 data-[selected]:text-warning data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20"}},{color:"error",variant:"soft",class:{cellTrigger:"data-[selected]:bg-error/10 data-[selected]:text-error data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20"}},{color:"primary",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-primary/10 data-[selected]:text-primary data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-primary/25 data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20"}},{color:"secondary",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-secondary/10 data-[selected]:text-secondary data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-secondary/25 data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20"}},{color:"success",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-success/10 data-[selected]:text-success data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-success/25 data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20"}},{color:"info",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-info/10 data-[selected]:text-info data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-info/25 data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20"}},{color:"warning",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-warning/10 data-[selected]:text-warning data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-warning/25 data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20"}},{color:"error",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-error/10 data-[selected]:text-error data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-error/25 data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20"}},{color:"neutral",variant:"solid",class:{cellTrigger:"data-[selected]:bg-inverted data-[selected]:text-inverted data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10"}},{color:"neutral",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-accented data-[selected]:text-default data-[selected]:bg-default data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/10 hover:not-data-[selected]:bg-inverted/10"}},{color:"neutral",variant:"soft",class:{cellTrigger:"data-[selected]:bg-elevated data-[selected]:text-default data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10"}},{color:"neutral",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-elevated data-[selected]:text-default data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-accented data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10"}}],defaultVariants:{size:"md",color:"primary",variant:"solid"}},pE={__name:"UCalendar",props:{as:{type:null,required:!1},nextYearIcon:{type:[String,Object],required:!1},nextYear:{type:Object,required:!1},nextMonthIcon:{type:[String,Object],required:!1},nextMonth:{type:Object,required:!1},prevYearIcon:{type:[String,Object],required:!1},prevYear:{type:Object,required:!1},prevMonthIcon:{type:[String,Object],required:!1},prevMonth:{type:Object,required:!1},color:{type:null,required:!1},variant:{type:null,required:!1},size:{type:null,required:!1},range:{type:Boolean,required:!1},multiple:{type:Boolean,required:!1},monthControls:{type:Boolean,required:!1,default:!0},yearControls:{type:Boolean,required:!1,default:!0},defaultValue:{type:null,required:!1},modelValue:{type:null,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},defaultPlaceholder:{type:null,required:!1},placeholder:{type:null,required:!1},allowNonContiguousRanges:{type:Boolean,required:!1},pagedNavigation:{type:Boolean,required:!1},preventDeselect:{type:Boolean,required:!1},maximumDays:{type:Number,required:!1},weekStartsOn:{type:Number,required:!1},weekdayFormat:{type:String,required:!1},fixedWeeks:{type:Boolean,required:!1,default:!0},maxValue:{type:null,required:!1},minValue:{type:null,required:!1},numberOfMonths:{type:Number,required:!1},disabled:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},initialFocus:{type:Boolean,required:!1},isDateDisabled:{type:Function,required:!1},isDateUnavailable:{type:Function,required:!1},isDateHighlightable:{type:Function,required:!1},nextPage:{type:Function,required:!1},prevPage:{type:Function,required:!1},disableDaysOutsideCurrentView:{type:Boolean,required:!1},fixedDate:{type:String,required:!1}},emits:["update:modelValue","update:placeholder","update:validModelValue","update:startValue"],setup(n,{emit:e}){const t=n,i=e,{code:a,dir:r,t:s}=zp(),o=Ws(),l=Ei(Vp(t,"range","modelValue","defaultValue","color","variant","size","monthControls","yearControls","class","ui"),i),c=K(()=>t.nextYearIcon||(r.value==="rtl"?o.ui.icons.chevronDoubleLeft:o.ui.icons.chevronDoubleRight)),u=K(()=>t.nextMonthIcon||(r.value==="rtl"?o.ui.icons.chevronLeft:o.ui.icons.chevronRight)),d=K(()=>t.prevYearIcon||(r.value==="rtl"?o.ui.icons.chevronDoubleRight:o.ui.icons.chevronDoubleLeft)),h=K(()=>t.prevMonthIcon||(r.value==="rtl"?o.ui.icons.chevronRight:o.ui.icons.chevronLeft)),p=K(()=>vi({extend:vi(hE),...o.ui?.calendar||{}})({color:t.color,variant:t.variant,size:t.size}));function x(m,f){return f===-1?m.subtract({years:1}):m.add({years:1})}const g=K(()=>t.range?Q3:K3);return(m,f)=>(ie(),ue(R(g).Root,nt(R(l),{"model-value":n.modelValue,"default-value":n.defaultValue,locale:R(a),dir:R(r),class:p.value.root({class:[t.ui?.root,t.class]})}),{default:ne(({weekDays:v,grid:y})=>[je(R(g).Header,{class:Tt(p.value.header({class:t.ui?.header}))},{default:ne(()=>[t.yearControls?(ie(),ue(R(g).Prev,{key:0,"prev-page":E=>x(E,-1),"aria-label":R(s)("calendar.prevYear"),"as-child":""},{default:ne(()=>[je(ki,nt({icon:d.value,size:t.size,color:"neutral",variant:"ghost"},t.prevYear),null,16,["icon","size"])]),_:1},8,["prev-page","aria-label"])):un("",!0),t.monthControls?(ie(),ue(R(g).Prev,{key:1,"aria-label":R(s)("calendar.prevMonth"),"as-child":""},{default:ne(()=>[je(ki,nt({icon:h.value,size:t.size,color:"neutral",variant:"ghost"},t.prevMonth),null,16,["icon","size"])]),_:1},8,["aria-label"])):un("",!0),je(R(g).Heading,{class:Tt(p.value.heading({class:t.ui?.heading}))},{default:ne(({headingValue:E})=>[ve(m.$slots,"heading",{value:E},()=>[nn(Lt(E),1)])]),_:3},8,["class"]),t.monthControls?(ie(),ue(R(g).Next,{key:2,"aria-label":R(s)("calendar.nextMonth"),"as-child":""},{default:ne(()=>[je(ki,nt({icon:u.value,size:t.size,color:"neutral",variant:"ghost"},t.nextMonth),null,16,["icon","size"])]),_:1},8,["aria-label"])):un("",!0),t.yearControls?(ie(),ue(R(g).Next,{key:3,"next-page":E=>x(E,1),"aria-label":R(s)("calendar.nextYear"),"as-child":""},{default:ne(()=>[je(ki,nt({icon:c.value,size:t.size,color:"neutral",variant:"ghost"},t.nextYear),null,16,["icon","size"])]),_:1},8,["next-page","aria-label"])):un("",!0)]),_:3},8,["class"]),mt("div",{class:Tt(p.value.body({class:t.ui?.body}))},[(ie(!0),Bt(Sa,null,Ea(y,E=>(ie(),ue(R(g).Grid,{key:E.value.toString(),class:Tt(p.value.grid({class:t.ui?.grid}))},{default:ne(()=>[je(R(g).GridHead,null,{default:ne(()=>[je(R(g).GridRow,{class:Tt(p.value.gridWeekDaysRow({class:t.ui?.gridWeekDaysRow}))},{default:ne(()=>[(ie(!0),Bt(Sa,null,Ea(v,T=>(ie(),ue(R(g).HeadCell,{key:T,class:Tt(p.value.headCell({class:t.ui?.headCell}))},{default:ne(()=>[ve(m.$slots,"week-day",{day:T},()=>[nn(Lt(T),1)])]),_:2},1032,["class"]))),128))]),_:2},1032,["class"])]),_:2},1024),je(R(g).GridBody,{class:Tt(p.value.gridBody({class:t.ui?.gridBody}))},{default:ne(()=>[(ie(!0),Bt(Sa,null,Ea(E.rows,(T,w)=>(ie(),ue(R(g).GridRow,{key:`weekDate-${w}`,class:Tt(p.value.gridRow({class:t.ui?.gridRow}))},{default:ne(()=>[(ie(!0),Bt(Sa,null,Ea(T,C=>(ie(),ue(R(g).Cell,{key:C.toString(),date:C,class:Tt(p.value.cell({class:t.ui?.cell}))},{default:ne(()=>[je(R(g).CellTrigger,{day:C,month:E.value,class:Tt(p.value.cellTrigger({class:t.ui?.cellTrigger}))},{default:ne(()=>[ve(m.$slots,"day",{day:C},()=>[nn(Lt(C.day),1)])]),_:2},1032,["day","month","class"])]),_:2},1032,["date","class"]))),128))]),_:2},1032,["class"]))),128))]),_:2},1032,["class"])]),_:2},1032,["class"]))),128))],2)]),_:3},16,["model-value","default-value","locale","dir","class"]))}};function nl(n,e){return n-e*Math.floor(n/e)}const qh=1721426;function ps(n,e,t,i){e=ru(n,e);let a=e-1,r=-2;return t<=2?r=0:ws(e)&&(r=-1),qh-1+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*t-362)/12+r+i)}function ws(n){return n%4===0&&(n%100!==0||n%400===0)}function ru(n,e){return n==="BC"?1-e:e}function mE(n){let e="AD";return n<=0&&(e="BC",n=1-n),[e,n]}const gE={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class Wa{fromJulianDay(e){let t=e,i=t-qh,a=Math.floor(i/146097),r=nl(i,146097),s=Math.floor(r/36524),o=nl(r,36524),l=Math.floor(o/1461),c=nl(o,1461),u=Math.floor(c/365),d=a*400+s*100+l*4+u+(s!==4&&u!==4?1:0),[h,p]=mE(d),x=t-ps(h,p,1,1),g=2;t<ps(h,p,3,1)?g=0:ws(p)&&(g=1);let m=Math.floor(((x+g)*12+373)/367),f=t-ps(h,p,m,1)+1;return new Dr(h,p,m,f)}toJulianDay(e){return ps(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return gE[ws(e.year)?"leapyear":"standard"][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return ws(e.year)?366:365}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 31}getYearsInEra(e){return 9999}getEras(){return["BC","AD"]}isInverseEra(e){return e.era==="BC"}balanceDate(e){e.year<=0&&(e.era=e.era==="BC"?"AD":"BC",e.year=1-e.year)}constructor(){this.identifier="gregory"}}function xE(n,e){return n.isEqual?.(e)??e.isEqual?.(n)??n.identifier===e.identifier}function _E(n){return ei(Date.now(),n)}function vE(n){return EE(_E(n))}function Xh(n,e){return n.calendar.toJulianDay(n)-e.calendar.toJulianDay(e)}function yE(n,e){return rf(n)-rf(e)}function rf(n){return n.hour*36e5+n.minute*6e4+n.second*1e3+n.millisecond}let il=null,bE=!1;function su(){return il==null&&(il=new Intl.DateTimeFormat().resolvedOptions().timeZone),il}function Yh(){return bE}function qa(n){n=Dn(n,new Wa);let e=ru(n.era,n.year);return jh(e,n.month,n.day,n.hour,n.minute,n.second,n.millisecond)}function jh(n,e,t,i,a,r,s){let o=new Date;return o.setUTCHours(i,a,r,s),o.setUTCFullYear(n,e-1,t),o.getTime()}function uc(n,e){if(e==="UTC")return 0;if(n>0&&e===su()&&!Yh())return new Date(n).getTimezoneOffset()*-6e4;let{year:t,month:i,day:a,hour:r,minute:s,second:o}=Kh(n,e);return jh(t,i,a,r,s,o,0)-Math.floor(n/1e3)*1e3}const sf=new Map;function Kh(n,e){let t=sf.get(e);t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),sf.set(e,t));let i=t.formatToParts(new Date(n)),a={};for(let r of i)r.type!=="literal"&&(a[r.type]=r.value);return{year:a.era==="BC"||a.era==="B"?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:a.hour==="24"?0:+a.hour,minute:+a.minute,second:+a.second}}const of=864e5;function ME(n,e,t,i){return(t===i?[t]:[t,i]).filter(r=>SE(n,e,r))}function SE(n,e,t){let i=Kh(t,e);return n.year===i.year&&n.month===i.month&&n.day===i.day&&n.hour===i.hour&&n.minute===i.minute&&n.second===i.second}function jn(n,e,t="compatible"){let i=Xa(n);if(e==="UTC")return qa(i);if(e===su()&&t==="compatible"&&!Yh()){i=Dn(i,new Wa);let l=new Date,c=ru(i.era,i.year);return l.setFullYear(c,i.month-1,i.day),l.setHours(i.hour,i.minute,i.second,i.millisecond),l.getTime()}let a=qa(i),r=uc(a-of,e),s=uc(a+of,e),o=ME(i,e,a-r,a-s);if(o.length===1)return o[0];if(o.length>1)switch(t){case"compatible":case"earlier":return o[0];case"later":return o[o.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(t){case"earlier":return Math.min(a-r,a-s);case"compatible":case"later":return Math.max(a-r,a-s);case"reject":throw new RangeError("No such absolute time found")}}function Zh(n,e,t="compatible"){return new Date(jn(n,e,t))}function ei(n,e){let t=uc(n,e),i=new Date(n+t),a=i.getUTCFullYear(),r=i.getUTCMonth()+1,s=i.getUTCDate(),o=i.getUTCHours(),l=i.getUTCMinutes(),c=i.getUTCSeconds(),u=i.getUTCMilliseconds();return new Pr(a<1?"BC":"AD",a<1?-a+1:a,r,s,e,t,o,l,c,u)}function EE(n){return new Dr(n.calendar,n.era,n.year,n.month,n.day)}function Xa(n,e){let t=0,i=0,a=0,r=0;if("timeZone"in n)({hour:t,minute:i,second:a,millisecond:r}=n);else if("hour"in n&&!e)return n;return e&&({hour:t,minute:i,second:a,millisecond:r}=e),new Vs(n.calendar,n.era,n.year,n.month,n.day,t,i,a,r)}function Dn(n,e){if(xE(n.calendar,e))return n;let t=e.fromJulianDay(n.calendar.toJulianDay(n)),i=n.copy();return i.calendar=e,i.era=t.era,i.year=t.year,i.month=t.month,i.day=t.day,Ki(i),i}function wE(n,e,t){if(n instanceof Pr)return n.timeZone===e?n:AE(n,e);let i=jn(n,e,t);return ei(i,e)}function TE(n){let e=qa(n)-n.offset;return new Date(e)}function AE(n,e){let t=qa(n)-n.offset;return Dn(ei(t,e),n.calendar)}const hr=36e5;function ro(n,e){let t=n.copy(),i="hour"in t?PE(t,e):0;dc(t,e.years||0),t.calendar.balanceYearMonth&&t.calendar.balanceYearMonth(t,n),t.month+=e.months||0,fc(t),Jh(t),t.day+=(e.weeks||0)*7,t.day+=e.days||0,t.day+=i,CE(t),t.calendar.balanceDate&&t.calendar.balanceDate(t),t.year<1&&(t.year=1,t.month=1,t.day=1);let a=t.calendar.getYearsInEra(t);if(t.year>a){let s=t.calendar.isInverseEra?.(t);t.year=a,t.month=s?1:t.calendar.getMonthsInYear(t),t.day=s?1:t.calendar.getDaysInMonth(t)}t.month<1&&(t.month=1,t.day=1);let r=t.calendar.getMonthsInYear(t);return t.month>r&&(t.month=r,t.day=t.calendar.getDaysInMonth(t)),t.day=Math.max(1,Math.min(t.calendar.getDaysInMonth(t),t.day)),t}function dc(n,e){n.calendar.isInverseEra?.(n)&&(e=-e),n.year+=e}function fc(n){for(;n.month<1;)dc(n,-1),n.month+=n.calendar.getMonthsInYear(n);let e=0;for(;n.month>(e=n.calendar.getMonthsInYear(n));)n.month-=e,dc(n,1)}function CE(n){for(;n.day<1;)n.month--,fc(n),n.day+=n.calendar.getDaysInMonth(n);for(;n.day>n.calendar.getDaysInMonth(n);)n.day-=n.calendar.getDaysInMonth(n),n.month++,fc(n)}function Jh(n){n.month=Math.max(1,Math.min(n.calendar.getMonthsInYear(n),n.month)),n.day=Math.max(1,Math.min(n.calendar.getDaysInMonth(n),n.day))}function Ki(n){n.calendar.constrainDate&&n.calendar.constrainDate(n),n.year=Math.max(1,Math.min(n.calendar.getYearsInEra(n),n.year)),Jh(n)}function Qh(n){let e={};for(let t in n)typeof n[t]=="number"&&(e[t]=-n[t]);return e}function ep(n,e){return ro(n,Qh(e))}function ou(n,e){let t=n.copy();return e.era!=null&&(t.era=e.era),e.year!=null&&(t.year=e.year),e.month!=null&&(t.month=e.month),e.day!=null&&(t.day=e.day),Ki(t),t}function zs(n,e){let t=n.copy();return e.hour!=null&&(t.hour=e.hour),e.minute!=null&&(t.minute=e.minute),e.second!=null&&(t.second=e.second),e.millisecond!=null&&(t.millisecond=e.millisecond),DE(t),t}function RE(n){n.second+=Math.floor(n.millisecond/1e3),n.millisecond=ms(n.millisecond,1e3),n.minute+=Math.floor(n.second/60),n.second=ms(n.second,60),n.hour+=Math.floor(n.minute/60),n.minute=ms(n.minute,60);let e=Math.floor(n.hour/24);return n.hour=ms(n.hour,24),e}function DE(n){n.millisecond=Math.max(0,Math.min(n.millisecond,1e3)),n.second=Math.max(0,Math.min(n.second,59)),n.minute=Math.max(0,Math.min(n.minute,59)),n.hour=Math.max(0,Math.min(n.hour,23))}function ms(n,e){let t=n%e;return t<0&&(t+=e),t}function PE(n,e){return n.hour+=e.hours||0,n.minute+=e.minutes||0,n.second+=e.seconds||0,n.millisecond+=e.milliseconds||0,RE(n)}function lu(n,e,t,i){let a=n.copy();switch(e){case"era":{let r=n.calendar.getEras(),s=r.indexOf(n.era);if(s<0)throw new Error("Invalid era: "+n.era);s=ti(s,t,0,r.length-1,i?.round),a.era=r[s],Ki(a);break}case"year":a.calendar.isInverseEra?.(a)&&(t=-t),a.year=ti(n.year,t,-1/0,9999,i?.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,n);break;case"month":a.month=ti(n.month,t,1,n.calendar.getMonthsInYear(n),i?.round);break;case"day":a.day=ti(n.day,t,1,n.calendar.getDaysInMonth(n),i?.round);break;default:throw new Error("Unsupported field "+e)}return n.calendar.balanceDate&&n.calendar.balanceDate(a),Ki(a),a}function tp(n,e,t,i){let a=n.copy();switch(e){case"hour":{let r=n.hour,s=0,o=23;if(i?.hourCycle===12){let l=r>=12;s=l?12:0,o=l?23:11}a.hour=ti(r,t,s,o,i?.round);break}case"minute":a.minute=ti(n.minute,t,0,59,i?.round);break;case"second":a.second=ti(n.second,t,0,59,i?.round);break;case"millisecond":a.millisecond=ti(n.millisecond,t,0,999,i?.round);break;default:throw new Error("Unsupported field "+e)}return a}function ti(n,e,t,i,a=!1){if(a){n+=Math.sign(e),n<t&&(n=i);let r=Math.abs(e);e>0?n=Math.ceil(n/r)*r:n=Math.floor(n/r)*r,n>i&&(n=t)}else n+=e,n<t?n=i-(t-n-1):n>i&&(n=t+(n-i-1));return n}function np(n,e){let t;if(e.years!=null&&e.years!==0||e.months!=null&&e.months!==0||e.weeks!=null&&e.weeks!==0||e.days!=null&&e.days!==0){let a=ro(Xa(n),{years:e.years,months:e.months,weeks:e.weeks,days:e.days});t=jn(a,n.timeZone)}else t=qa(n)-n.offset;t+=e.milliseconds||0,t+=(e.seconds||0)*1e3,t+=(e.minutes||0)*6e4,t+=(e.hours||0)*36e5;let i=ei(t,n.timeZone);return Dn(i,n.calendar)}function LE(n,e){return np(n,Qh(e))}function IE(n,e,t,i){switch(e){case"hour":{let a=0,r=23;if(i?.hourCycle===12){let x=n.hour>=12;a=x?12:0,r=x?23:11}let s=Xa(n),o=Dn(zs(s,{hour:a}),new Wa),l=[jn(o,n.timeZone,"earlier"),jn(o,n.timeZone,"later")].filter(x=>ei(x,n.timeZone).day===o.day)[0],c=Dn(zs(s,{hour:r}),new Wa),u=[jn(c,n.timeZone,"earlier"),jn(c,n.timeZone,"later")].filter(x=>ei(x,n.timeZone).day===c.day).pop(),d=qa(n)-n.offset,h=Math.floor(d/hr),p=d%hr;return d=ti(h,t,Math.floor(l/hr),Math.floor(u/hr),i?.round)*hr+p,Dn(ei(d,n.timeZone),n.calendar)}case"minute":case"second":case"millisecond":return tp(n,e,t,i);case"era":case"year":case"month":case"day":{let a=lu(Xa(n),e,t,i),r=jn(a,n.timeZone);return Dn(ei(r,n.timeZone),n.calendar)}default:throw new Error("Unsupported field "+e)}}function UE(n,e,t){let i=Xa(n),a=zs(ou(i,e),e);if(a.compare(i)===0)return n;let r=jn(a,n.timeZone,t);return Dn(ei(r,n.timeZone),n.calendar)}function NE(n){return`${String(n.hour).padStart(2,"0")}:${String(n.minute).padStart(2,"0")}:${String(n.second).padStart(2,"0")}${n.millisecond?String(n.millisecond/1e3).slice(1):""}`}function ip(n){let e=Dn(n,new Wa),t;return e.era==="BC"?t=e.year===1?"0000":"-"+String(Math.abs(1-e.year)).padStart(6,"00"):t=String(e.year).padStart(4,"0"),`${t}-${String(e.month).padStart(2,"0")}-${String(e.day).padStart(2,"0")}`}function ap(n){return`${ip(n)}T${NE(n)}`}function OE(n){let e=Math.sign(n)<0?"-":"+";n=Math.abs(n);let t=Math.floor(n/36e5),i=Math.floor(n%36e5/6e4),a=Math.floor(n%36e5%6e4/1e3),r=`${e}${String(t).padStart(2,"0")}:${String(i).padStart(2,"0")}`;return a!==0&&(r+=`:${String(a).padStart(2,"0")}`),r}function FE(n){return`${ap(n)}${OE(n.offset)}[${n.timeZone}]`}function cu(n){let e=typeof n[0]=="object"?n.shift():new Wa,t;if(typeof n[0]=="string")t=n.shift();else{let s=e.getEras();t=s[s.length-1]}let i=n.shift(),a=n.shift(),r=n.shift();return[e,t,i,a,r]}class Dr{#e;constructor(...e){let[t,i,a,r,s]=cu(e);this.calendar=t,this.era=i,this.year=a,this.month=r,this.day=s,Ki(this)}copy(){return this.era?new Dr(this.calendar,this.era,this.year,this.month,this.day):new Dr(this.calendar,this.year,this.month,this.day)}add(e){return ro(this,e)}subtract(e){return ep(this,e)}set(e){return ou(this,e)}cycle(e,t,i){return lu(this,e,t,i)}toDate(e){return Zh(this,e)}toString(){return ip(this)}compare(e){return Xh(this,e)}}class Vs{#e;constructor(...e){let[t,i,a,r,s]=cu(e);this.calendar=t,this.era=i,this.year=a,this.month=r,this.day=s,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,Ki(this)}copy(){return this.era?new Vs(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new Vs(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return ro(this,e)}subtract(e){return ep(this,e)}set(e){return ou(zs(this,e),e)}cycle(e,t,i){switch(e){case"era":case"year":case"month":case"day":return lu(this,e,t,i);default:return tp(this,e,t,i)}}toDate(e,t){return Zh(this,e,t)}toString(){return ap(this)}compare(e){let t=Xh(this,e);return t===0?yE(this,Xa(e)):t}}class Pr{#e;constructor(...e){let[t,i,a,r,s]=cu(e),o=e.shift(),l=e.shift();this.calendar=t,this.era=i,this.year=a,this.month=r,this.day=s,this.timeZone=o,this.offset=l,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,Ki(this)}copy(){return this.era?new Pr(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new Pr(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(e){return np(this,e)}subtract(e){return LE(this,e)}set(e,t){return UE(this,e,t)}cycle(e,t,i){return IE(this,e,t,i)}toDate(){return TE(this)}toString(){return FE(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(e){return this.toDate().getTime()-wE(e,this.timeZone).toDate().getTime()}}const BE={class:"flex flex-col items-end text-xs leading-tight"},kE={class:"text-[11px]"},zE={class:"p-2 text-slate-800 dark:text-slate-100"},VE="h-10 cursor-pointer rounded-xl border border-transparent text-slate-50/90 hover:border-white/18 hover:bg-white/16 hover:text-white dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/6",HE=Ee({__name:"CalendarButton",setup(n){const e=Oe(""),t=Oe(""),i=au(),a=K(()=>i.value==="dark"?{}:{content:"dark border border-purple-300/18 bg-slate-900/90 text-slate-100 shadow-[0_16px_28px_rgba(15,23,42,0.28)] backdrop-blur-xl"}),r=()=>{const l=new Date;e.value=new Intl.DateTimeFormat("ko-KR",{hour:"numeric",minute:"2-digit",hour12:!0}).format(l);const c=l.getFullYear(),u=String(l.getMonth()+1).padStart(2,"0"),d=String(l.getDate()).padStart(2,"0");t.value=`${c}-${u}-${d}`};let s=null;const o=Oe(vE(su()));return On(()=>{r(),s=window.setInterval(r,1e3)}),Ya(()=>{s!==null&&(window.clearInterval(s),s=null)}),(l,c)=>{const u=ki,d=pE,h=Wh;return ie(),ue(h,{ui:a.value},{content:ne(()=>[mt("div",zE,[je(d,{modelValue:R(o),"onUpdate:modelValue":c[0]||(c[0]=p=>Hp(o)?o.value=p:null)},null,8,["modelValue"])])]),default:ne(()=>[je(u,{variant:"ghost","aria-label":"Calendar/Timer",class:Tt(VE)},{default:ne(()=>[mt("div",BE,[mt("span",null,Lt(R(e)),1),mt("span",kE,Lt(R(t)),1)])]),_:1})]),_:1},8,["ui"])}}}),GE=Object.assign(HE,{__name:"CalendarButton"}),$E={class:"relative z-5 flex h-12 items-center justify-between border-t border-purple-400/18 bg-purple-500/10 px-4 shadow-[0_-10px_28px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-purple-400/18 dark:bg-purple-500/10 dark:shadow-[0_-10px_28px_rgba(15,23,42,0.18)]"},WE={class:"flex flex-1 justify-center gap-2"},qE={class:"flex items-center gap-1"},XE=["src"],YE={class:"flex items-center justify-end gap-1 text-slate-50/90 dark:text-slate-300"},jE="text-slate-50/90 hover:-translate-y-0.5 dark:text-slate-100/90",KE="hover:scale-105 hover:text-white dark:hover:text-white",ZE="scale-105 text-white",lf="h-10 cursor-pointer rounded-xl border border-transparent text-slate-50/90 hover:border-white/18 hover:bg-white/16 hover:text-white dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/6",JE=Ee({__name:"Footer",setup(n){const e=$p(),{openedWindows:t}=Gp(e),{isFolderVisible:i,visibleFolders:a}=Wp(),r=K(()=>t.value.filter(f=>f.visible&&i(f.folderId))),s=K(()=>t.value.filter(f=>f.visible&&!f.hidden&&i(f.folderId))),o=f=>{if(!i(f))return;const v=t.value.find(y=>y.folderId===f);v&&(v.hidden?e.showWindow(f):e.bringToFront(f))},l=K(()=>s.value.reduce((f,v)=>Math.max(f,v.zIndex??0),0)),c=f=>!f.hidden&&(f.zIndex??0)===l.value,u=au(),d=K(()=>u.value==="dark"),h=()=>{u.preference=d.value?"light":"dark"},p=()=>{window.open("https://github.com/serene1004","_blank","noopener")},x=f=>a.value.find(v=>v.id===f)?.icon??"i-lucide-folder",g=f=>a.value.find(v=>v.id===f)?.image,m=f=>a.value.find(v=>v.id===f)?.name??f;return(f,v)=>{const y=_f,E=ki,T=j3,w=fE,C=GE;return ie(),Bt("footer",$E,[v[0]||(v[0]=mt("div",{class:"w-40"},null,-1)),mt("div",WE,[mt("div",qE,[r.value.length?(ie(!0),Bt(Sa,{key:0},Ea(r.value,I=>(ie(),ue(T,{key:I.folderId,text:m(I.folderId),placement:"top"},{default:ne(()=>[je(E,{variant:"ghost",size:"sm",class:Tt(["cursor-pointer h-10 w-10 justify-center transition duration-200",[jE,c(I)?ZE:KE]]),style:{padding:"0"},onClick:b=>o(I.folderId)},{default:ne(()=>[g(I.folderId)?(ie(),Bt("img",{key:0,src:g(I.folderId),alt:"",class:"object-contain",style:{width:"36px",height:"36px"}},null,8,XE)):(ie(),ue(y,{key:1,name:x(I.folderId),class:Tt(["transition duration-200",c(I)?"scale-105 text-white drop-shadow-[0_4px_12px_rgba(168,85,247,0.3)] dark:text-white dark:drop-shadow-[0_4px_12px_rgba(192,132,252,0.45)]":"text-slate-50/90 dark:text-slate-100/90"]),style:{width:"36px",height:"36px"},"aria-hidden":"true"},null,8,["name","class"]))]),_:2},1032,["class","onClick"])]),_:2},1032,["text"]))),128)):un("",!0)])]),mt("div",YE,[je(E,{icon:d.value?"i-lucide-sun":"i-lucide-moon",variant:"ghost",size:"sm","aria-label":d.value?"Switch to light":"Switch to dark",class:Tt(lf),onClick:h},null,8,["icon","aria-label"]),je(E,{icon:"i-lucide-github",variant:"ghost",size:"sm","aria-label":"Open GitHub",class:Tt(lf),onClick:p}),je(w),je(C)])])}}}),QE=Object.assign(JE,{__name:"Footer"}),ew={class:"relative h-dvh w-full overflow-hidden"},tw={class:"flex h-full flex-col text-slate-100 dark:text-slate-50"},nw={class:"flex-1 overflow-hidden"},rw=Ee({__name:"default",setup(n){return(e,t)=>(ie(),Bt("div",ew,[je(G3),mt("div",tw,[mt("main",nw,[ve(e.$slots,"default")]),je(QE)])]))}});export{rw as default};

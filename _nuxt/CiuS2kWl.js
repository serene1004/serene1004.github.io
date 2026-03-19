import{D as uh,k as J,E as dh,r as Pe,G as kl,H as Yt,I as zl,J as Vl,K as kc,L as ls,M as mr,N as ki,O as fh,P as hh,z as gr,Q as wd,R as ph,y as Nn,S as mh,f as Ee,U as bt,V as Td,g as ue,o as ie,w as te,s as ve,B as R,W as tt,X as ks,Y as gh,Z as Mi,$ as zs,a0 as xh,a1 as _h,a2 as Vs,a3 as zc,a4 as qi,a5 as Ms,a6 as Ss,a7 as zi,a as lt,t as Tt,d as Kt,a8 as nt,i as Uo,p as rr,a9 as At,aa as Ct,ab as Ad,c as Bt,ac as vh,ad as yh,ae as bh,af as Zi,ag as Mh,ah as Sh,b as qe,n as Cd,ai as Eh,aj as Hl,ak as wh,al as Gl,am as vi,an as Wl,ao as ql,C as Rd,ap as Th,aq as $l,ar as Ah,as as Xl,at as Ch,au as Rh,av as Dd,aw as Vc,ax as xr,ay as No,az as Pd,aA as va,aB as pi,m as un,q as Ot,aC as Dh,F as Ii,A as Ui,aD as Ph,h as Ni,j as Ld,aE as Lh,aF as Ih,aG as Uh,aH as Nh,x as Fh,u as Oh}from"./BZsCwQdf.js";import{u as Bh,f as Hs}from"./DYk6vd0V.js";const kh=uh(()=>{const n=Pe(new Map),e=Pe(),t=J(()=>{for(const s of n.value.values())if(s)return!0;return!1}),i=kl({scrollBody:Pe(!0)});let a=null;const r=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.documentElement.style.removeProperty("--scrollbar-width"),document.body.style.overflow=e.value??"",kc&&a?.(),e.value=void 0};return Yt(t,(s,o)=>{if(!zl)return;if(!s){o&&r();return}e.value===void 0&&(e.value=document.body.style.overflow);const l=window.innerWidth-document.documentElement.clientWidth,c={padding:l,margin:0},u=i.scrollBody?.value?typeof i.scrollBody.value=="object"?Vl({padding:i.scrollBody.value.padding===!0?l:i.scrollBody.value.padding,margin:i.scrollBody.value.margin===!0?l:i.scrollBody.value.margin},c):c:{padding:0,margin:0};l>0&&(document.body.style.paddingRight=typeof u.padding=="number"?`${u.padding}px`:String(u.padding),document.body.style.marginRight=typeof u.margin=="number"?`${u.margin}px`:String(u.margin),document.documentElement.style.setProperty("--scrollbar-width",`${l}px`),document.body.style.overflow="hidden"),kc&&(a=ls(document,"touchmove",d=>Vh(d),{passive:!1})),mr(()=>{document.body.style.pointerEvents="none",document.body.style.overflow="hidden"})},{immediate:!0,flush:"sync"}),n});function zh(n){const e=Math.random().toString(36).substring(2,7),t=kh();t.value.set(e,n);const i=J({get:()=>t.value.get(e)??!1,set:a=>t.value.set(e,a)});return dh(()=>{t.value.delete(e)}),i}function Id(n){const e=window.getComputedStyle(n);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&n.clientWidth<n.scrollWidth||e.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const t=n.parentNode;return!(t instanceof Element)||t.tagName==="BODY"?!1:Id(t)}}function Vh(n){const e=n||window.event,t=e.target;return t instanceof Element&&Id(t)?!1:e.touches.length>1?!0:(e.preventDefault&&e.cancelable&&e.preventDefault(),!1)}function ya(n,e){return n-e*Math.floor(n/e)}const Ud=1721426;function Fi(n,e,t,i){e=_r(n,e);let a=e-1,r=-2;return t<=2?r=0:di(e)&&(r=-1),Ud-1+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*t-362)/12+r+i)}function di(n){return n%4===0&&(n%100!==0||n%400===0)}function _r(n,e){return n==="BC"?1-e:e}function Es(n){let e="AD";return n<=0&&(e="BC",n=1-n),[e,n]}const Hh={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class bn{fromJulianDay(e){let t=e,i=t-Ud,a=Math.floor(i/146097),r=ya(i,146097),s=Math.floor(r/36524),o=ya(r,36524),l=Math.floor(o/1461),c=ya(o,1461),u=Math.floor(c/365),d=a*400+s*100+l*4+u+(s!==4&&u!==4?1:0),[h,p]=Es(d),g=t-Fi(h,p,1,1),x=2;t<Fi(h,p,3,1)?x=0:di(p)&&(x=1);let m=Math.floor(((g+x)*12+373)/367),f=t-Fi(h,p,m,1)+1;return new Rt(h,p,m,f)}toJulianDay(e){return Fi(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return Hh[di(e.year)?"leapyear":"standard"][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return di(e.year)?366:365}getYearsInEra(e){return 9999}getEras(){return["BC","AD"]}isInverseEra(e){return e.era==="BC"}balanceDate(e){e.year<=0&&(e.era=e.era==="BC"?"AD":"BC",e.year=1-e.year)}constructor(){this.identifier="gregory"}}const Gh={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AU:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CN:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1};function Pt(n,e){return e=jt(e,n.calendar),n.era===e.era&&n.year===e.year&&n.month===e.month&&n.day===e.day}function Yl(n,e){return e=jt(e,n.calendar),n=Fo(n),e=Fo(e),n.era===e.era&&n.year===e.year&&n.month===e.month}function ci(n,e){return jl(n.calendar,e.calendar)&&Pt(n,e)}function Hc(n,e){return jl(n.calendar,e.calendar)&&Yl(n,e)}function jl(n,e){var t,i,a,r;return(r=(a=(t=n.isEqual)===null||t===void 0?void 0:t.call(n,e))!==null&&a!==void 0?a:(i=e.isEqual)===null||i===void 0?void 0:i.call(e,n))!==null&&r!==void 0?r:n.identifier===e.identifier}function Nd(n,e){return Pt(n,Kl(e))}function Fd(n,e,t){let i=n.calendar.toJulianDay(n),a=Xh(e),r=Math.ceil(i+1-a)%7;return r<0&&(r+=7),r}function Wh(n){return Xn(Date.now(),n)}function Kl(n){return Kh(Wh(n))}function Od(n,e){return n.calendar.toJulianDay(n)-e.calendar.toJulianDay(e)}function qh(n,e){return Gc(n)-Gc(e)}function Gc(n){return n.hour*36e5+n.minute*6e4+n.second*1e3+n.millisecond}let Gs=null;function $i(){return Gs==null&&(Gs=new Intl.DateTimeFormat().resolvedOptions().timeZone),Gs}function Fo(n){return n.subtract({days:n.day-1})}function Wc(n){return n.add({days:n.calendar.getDaysInMonth(n)-n.day})}const qc=new Map,Ws=new Map;function $h(n){if(Intl.Locale){let t=qc.get(n);return t||(t=new Intl.Locale(n).maximize().region,t&&qc.set(n,t)),t}let e=n.split("-")[1];return e==="u"?void 0:e}function Xh(n){let e=Ws.get(n);if(!e){if(Intl.Locale){let i=new Intl.Locale(n);if("getWeekInfo"in i&&(e=i.getWeekInfo(),e))return Ws.set(n,e),e.firstDay}let t=$h(n);if(n.includes("-fw-")){let i=n.split("-fw-")[1].split("-")[0];i==="mon"?e={firstDay:1}:i==="tue"?e={firstDay:2}:i==="wed"?e={firstDay:3}:i==="thu"?e={firstDay:4}:i==="fri"?e={firstDay:5}:i==="sat"?e={firstDay:6}:e={firstDay:0}}else n.includes("-ca-iso8601")?e={firstDay:1}:e={firstDay:t&&Gh[t]||0};Ws.set(n,e)}return e.firstDay}function Aa(n){n=jt(n,new bn);let e=_r(n.era,n.year);return Bd(e,n.month,n.day,n.hour,n.minute,n.second,n.millisecond)}function Bd(n,e,t,i,a,r,s){let o=new Date;return o.setUTCHours(i,a,r,s),o.setUTCFullYear(n,e-1,t),o.getTime()}function Oo(n,e){if(e==="UTC")return 0;if(n>0&&e===$i())return new Date(n).getTimezoneOffset()*-6e4;let{year:t,month:i,day:a,hour:r,minute:s,second:o}=kd(n,e);return Bd(t,i,a,r,s,o,0)-Math.floor(n/1e3)*1e3}const $c=new Map;function kd(n,e){let t=$c.get(e);t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),$c.set(e,t));let i=t.formatToParts(new Date(n)),a={};for(let r of i)r.type!=="literal"&&(a[r.type]=r.value);return{year:a.era==="BC"||a.era==="B"?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:a.hour==="24"?0:+a.hour,minute:+a.minute,second:+a.second}}const Xc=864e5;function Yh(n,e,t,i){return(t===i?[t]:[t,i]).filter(r=>jh(n,e,r))}function jh(n,e,t){let i=kd(t,e);return n.year===i.year&&n.month===i.month&&n.day===i.day&&n.hour===i.hour&&n.minute===i.minute&&n.second===i.second}function qn(n,e,t="compatible"){let i=Ca(n);if(e==="UTC")return Aa(i);if(e===$i()&&t==="compatible"){i=jt(i,new bn);let l=new Date,c=_r(i.era,i.year);return l.setFullYear(c,i.month-1,i.day),l.setHours(i.hour,i.minute,i.second,i.millisecond),l.getTime()}let a=Aa(i),r=Oo(a-Xc,e),s=Oo(a+Xc,e),o=Yh(i,e,a-r,a-s);if(o.length===1)return o[0];if(o.length>1)switch(t){case"compatible":case"earlier":return o[0];case"later":return o[o.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(t){case"earlier":return Math.min(a-r,a-s);case"compatible":case"later":return Math.max(a-r,a-s);case"reject":throw new RangeError("No such absolute time found")}}function zd(n,e,t="compatible"){return new Date(qn(n,e,t))}function Xn(n,e){let t=Oo(n,e),i=new Date(n+t),a=i.getUTCFullYear(),r=i.getUTCMonth()+1,s=i.getUTCDate(),o=i.getUTCHours(),l=i.getUTCMinutes(),c=i.getUTCSeconds(),u=i.getUTCMilliseconds();return new Da(a<1?"BC":"AD",a<1?-a+1:a,r,s,e,t,o,l,c,u)}function Kh(n){return new Rt(n.calendar,n.era,n.year,n.month,n.day)}function Ca(n,e){let t=0,i=0,a=0,r=0;if("timeZone"in n)({hour:t,minute:i,second:a,millisecond:r}=n);else if("hour"in n&&!e)return n;return e&&({hour:t,minute:i,second:a,millisecond:r}=e),new Ra(n.calendar,n.era,n.year,n.month,n.day,t,i,a,r)}function jt(n,e){if(jl(n.calendar,e))return n;let t=e.fromJulianDay(n.calendar.toJulianDay(n)),i=n.copy();return i.calendar=e,i.era=t.era,i.year=t.year,i.month=t.month,i.day=t.day,Vi(i),i}function Zh(n,e,t){if(n instanceof Da)return n.timeZone===e?n:Qh(n,e);let i=qn(n,e,t);return Xn(i,e)}function Jh(n){let e=Aa(n)-n.offset;return new Date(e)}function Qh(n,e){let t=Aa(n)-n.offset;return jt(Xn(t,e),n.calendar)}const qa=36e5;function ws(n,e){let t=n.copy(),i="hour"in t?ip(t,e):0;Bo(t,e.years||0),t.calendar.balanceYearMonth&&t.calendar.balanceYearMonth(t,n),t.month+=e.months||0,ko(t),Vd(t),t.day+=(e.weeks||0)*7,t.day+=e.days||0,t.day+=i,ep(t),t.calendar.balanceDate&&t.calendar.balanceDate(t),t.year<1&&(t.year=1,t.month=1,t.day=1);let a=t.calendar.getYearsInEra(t);if(t.year>a){var r,s;let l=(r=(s=t.calendar).isInverseEra)===null||r===void 0?void 0:r.call(s,t);t.year=a,t.month=l?1:t.calendar.getMonthsInYear(t),t.day=l?1:t.calendar.getDaysInMonth(t)}t.month<1&&(t.month=1,t.day=1);let o=t.calendar.getMonthsInYear(t);return t.month>o&&(t.month=o,t.day=t.calendar.getDaysInMonth(t)),t.day=Math.max(1,Math.min(t.calendar.getDaysInMonth(t),t.day)),t}function Bo(n,e){var t,i;!((t=(i=n.calendar).isInverseEra)===null||t===void 0)&&t.call(i,n)&&(e=-e),n.year+=e}function ko(n){for(;n.month<1;)Bo(n,-1),n.month+=n.calendar.getMonthsInYear(n);let e=0;for(;n.month>(e=n.calendar.getMonthsInYear(n));)n.month-=e,Bo(n,1)}function ep(n){for(;n.day<1;)n.month--,ko(n),n.day+=n.calendar.getDaysInMonth(n);for(;n.day>n.calendar.getDaysInMonth(n);)n.day-=n.calendar.getDaysInMonth(n),n.month++,ko(n)}function Vd(n){n.month=Math.max(1,Math.min(n.calendar.getMonthsInYear(n),n.month)),n.day=Math.max(1,Math.min(n.calendar.getDaysInMonth(n),n.day))}function Vi(n){n.calendar.constrainDate&&n.calendar.constrainDate(n),n.year=Math.max(1,Math.min(n.calendar.getYearsInEra(n),n.year)),Vd(n)}function Hd(n){let e={};for(let t in n)typeof n[t]=="number"&&(e[t]=-n[t]);return e}function Gd(n,e){return ws(n,Hd(e))}function Zl(n,e){let t=n.copy();return e.era!=null&&(t.era=e.era),e.year!=null&&(t.year=e.year),e.month!=null&&(t.month=e.month),e.day!=null&&(t.day=e.day),Vi(t),t}function cs(n,e){let t=n.copy();return e.hour!=null&&(t.hour=e.hour),e.minute!=null&&(t.minute=e.minute),e.second!=null&&(t.second=e.second),e.millisecond!=null&&(t.millisecond=e.millisecond),np(t),t}function tp(n){n.second+=Math.floor(n.millisecond/1e3),n.millisecond=Er(n.millisecond,1e3),n.minute+=Math.floor(n.second/60),n.second=Er(n.second,60),n.hour+=Math.floor(n.minute/60),n.minute=Er(n.minute,60);let e=Math.floor(n.hour/24);return n.hour=Er(n.hour,24),e}function np(n){n.millisecond=Math.max(0,Math.min(n.millisecond,1e3)),n.second=Math.max(0,Math.min(n.second,59)),n.minute=Math.max(0,Math.min(n.minute,59)),n.hour=Math.max(0,Math.min(n.hour,23))}function Er(n,e){let t=n%e;return t<0&&(t+=e),t}function ip(n,e){return n.hour+=e.hours||0,n.minute+=e.minutes||0,n.second+=e.seconds||0,n.millisecond+=e.milliseconds||0,tp(n)}function Jl(n,e,t,i){let a=n.copy();switch(e){case"era":{let o=n.calendar.getEras(),l=o.indexOf(n.era);if(l<0)throw new Error("Invalid era: "+n.era);l=Yn(l,t,0,o.length-1,i?.round),a.era=o[l],Vi(a);break}case"year":var r,s;!((r=(s=a.calendar).isInverseEra)===null||r===void 0)&&r.call(s,a)&&(t=-t),a.year=Yn(n.year,t,-1/0,9999,i?.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,n);break;case"month":a.month=Yn(n.month,t,1,n.calendar.getMonthsInYear(n),i?.round);break;case"day":a.day=Yn(n.day,t,1,n.calendar.getDaysInMonth(n),i?.round);break;default:throw new Error("Unsupported field "+e)}return n.calendar.balanceDate&&n.calendar.balanceDate(a),Vi(a),a}function Wd(n,e,t,i){let a=n.copy();switch(e){case"hour":{let r=n.hour,s=0,o=23;if(i?.hourCycle===12){let l=r>=12;s=l?12:0,o=l?23:11}a.hour=Yn(r,t,s,o,i?.round);break}case"minute":a.minute=Yn(n.minute,t,0,59,i?.round);break;case"second":a.second=Yn(n.second,t,0,59,i?.round);break;case"millisecond":a.millisecond=Yn(n.millisecond,t,0,999,i?.round);break;default:throw new Error("Unsupported field "+e)}return a}function Yn(n,e,t,i,a=!1){if(a){n+=Math.sign(e),n<t&&(n=i);let r=Math.abs(e);e>0?n=Math.ceil(n/r)*r:n=Math.floor(n/r)*r,n>i&&(n=t)}else n+=e,n<t?n=i-(t-n-1):n>i&&(n=t+(n-i-1));return n}function qd(n,e){let t;if(e.years!=null&&e.years!==0||e.months!=null&&e.months!==0||e.weeks!=null&&e.weeks!==0||e.days!=null&&e.days!==0){let a=ws(Ca(n),{years:e.years,months:e.months,weeks:e.weeks,days:e.days});t=qn(a,n.timeZone)}else t=Aa(n)-n.offset;t+=e.milliseconds||0,t+=(e.seconds||0)*1e3,t+=(e.minutes||0)*6e4,t+=(e.hours||0)*36e5;let i=Xn(t,n.timeZone);return jt(i,n.calendar)}function ap(n,e){return qd(n,Hd(e))}function rp(n,e,t,i){switch(e){case"hour":{let a=0,r=23;if(i?.hourCycle===12){let g=n.hour>=12;a=g?12:0,r=g?23:11}let s=Ca(n),o=jt(cs(s,{hour:a}),new bn),l=[qn(o,n.timeZone,"earlier"),qn(o,n.timeZone,"later")].filter(g=>Xn(g,n.timeZone).day===o.day)[0],c=jt(cs(s,{hour:r}),new bn),u=[qn(c,n.timeZone,"earlier"),qn(c,n.timeZone,"later")].filter(g=>Xn(g,n.timeZone).day===c.day).pop(),d=Aa(n)-n.offset,h=Math.floor(d/qa),p=d%qa;return d=Yn(h,t,Math.floor(l/qa),Math.floor(u/qa),i?.round)*qa+p,jt(Xn(d,n.timeZone),n.calendar)}case"minute":case"second":case"millisecond":return Wd(n,e,t,i);case"era":case"year":case"month":case"day":{let a=Jl(Ca(n),e,t,i),r=qn(a,n.timeZone);return jt(Xn(r,n.timeZone),n.calendar)}default:throw new Error("Unsupported field "+e)}}function sp(n,e,t){let i=Ca(n),a=cs(Zl(i,e),e);if(a.compare(i)===0)return n;let r=qn(a,n.timeZone,t);return jt(Xn(r,n.timeZone),n.calendar)}function op(n){return`${String(n.hour).padStart(2,"0")}:${String(n.minute).padStart(2,"0")}:${String(n.second).padStart(2,"0")}${n.millisecond?String(n.millisecond/1e3).slice(1):""}`}function $d(n){let e=jt(n,new bn),t;return e.era==="BC"?t=e.year===1?"0000":"-"+String(Math.abs(1-e.year)).padStart(6,"00"):t=String(e.year).padStart(4,"0"),`${t}-${String(e.month).padStart(2,"0")}-${String(e.day).padStart(2,"0")}`}function Xd(n){return`${$d(n)}T${op(n)}`}function lp(n){let e=Math.sign(n)<0?"-":"+";n=Math.abs(n);let t=Math.floor(n/36e5),i=Math.floor(n%36e5/6e4),a=Math.floor(n%36e5%6e4/1e3),r=`${e}${String(t).padStart(2,"0")}:${String(i).padStart(2,"0")}`;return a!==0&&(r+=`:${String(a).padStart(2,"0")}`),r}function cp(n){return`${Xd(n)}${lp(n.offset)}[${n.timeZone}]`}function up(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Ql(n,e,t){up(n,e),e.set(n,t)}function ec(n){let e=typeof n[0]=="object"?n.shift():new bn,t;if(typeof n[0]=="string")t=n.shift();else{let s=e.getEras();t=s[s.length-1]}let i=n.shift(),a=n.shift(),r=n.shift();return[e,t,i,a,r]}var dp=new WeakMap;class Rt{copy(){return this.era?new Rt(this.calendar,this.era,this.year,this.month,this.day):new Rt(this.calendar,this.year,this.month,this.day)}add(e){return ws(this,e)}subtract(e){return Gd(this,e)}set(e){return Zl(this,e)}cycle(e,t,i){return Jl(this,e,t,i)}toDate(e){return zd(this,e)}toString(){return $d(this)}compare(e){return Od(this,e)}constructor(...e){Ql(this,dp,{writable:!0,value:void 0});let[t,i,a,r,s]=ec(e);this.calendar=t,this.era=i,this.year=a,this.month=r,this.day=s,Vi(this)}}var fp=new WeakMap;class Ra{copy(){return this.era?new Ra(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new Ra(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return ws(this,e)}subtract(e){return Gd(this,e)}set(e){return Zl(cs(this,e),e)}cycle(e,t,i){switch(e){case"era":case"year":case"month":case"day":return Jl(this,e,t,i);default:return Wd(this,e,t,i)}}toDate(e,t){return zd(this,e,t)}toString(){return Xd(this)}compare(e){let t=Od(this,e);return t===0?qh(this,Ca(e)):t}constructor(...e){Ql(this,fp,{writable:!0,value:void 0});let[t,i,a,r,s]=ec(e);this.calendar=t,this.era=i,this.year=a,this.month=r,this.day=s,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,Vi(this)}}var hp=new WeakMap;class Da{copy(){return this.era?new Da(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new Da(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(e){return qd(this,e)}subtract(e){return ap(this,e)}set(e,t){return sp(this,e,t)}cycle(e,t,i){return rp(this,e,t,i)}toDate(){return Jh(this)}toString(){return cp(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(e){return this.toDate().getTime()-Zh(e,this.timeZone).toDate().getTime()}constructor(...e){Ql(this,hp,{writable:!0,value:void 0});let[t,i,a,r,s]=ec(e),o=e.shift(),l=e.shift();this.calendar=t,this.era=i,this.year=a,this.month=r,this.day=s,this.timeZone=o,this.offset=l,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,Vi(this)}}const ba=[[1868,9,8],[1912,7,30],[1926,12,25],[1989,1,8],[2019,5,1]],pp=[[1912,7,29],[1926,12,24],[1989,1,7],[2019,4,30]],Qr=[1867,1911,1925,1988,2018],oi=["meiji","taisho","showa","heisei","reiwa"];function Yc(n){const e=ba.findIndex(([t,i,a])=>n.year<t||n.year===t&&n.month<i||n.year===t&&n.month===i&&n.day<a);return e===-1?ba.length-1:e===0?0:e-1}function qs(n){let e=Qr[oi.indexOf(n.era)];if(!e)throw new Error("Unknown era: "+n.era);return new Rt(n.year+e,n.month,n.day)}class mp extends bn{fromJulianDay(e){let t=super.fromJulianDay(e),i=Yc(t);return new Rt(this,oi[i],t.year-Qr[i],t.month,t.day)}toJulianDay(e){return super.toJulianDay(qs(e))}balanceDate(e){let t=qs(e),i=Yc(t);oi[i]!==e.era&&(e.era=oi[i],e.year=t.year-Qr[i]),this.constrainDate(e)}constrainDate(e){let t=oi.indexOf(e.era),i=pp[t];if(i!=null){let[a,r,s]=i,o=a-Qr[t];e.year=Math.max(1,Math.min(o,e.year)),e.year===o&&(e.month=Math.min(r,e.month),e.month===r&&(e.day=Math.min(s,e.day)))}if(e.year===1&&t>=0){let[,a,r]=ba[t];e.month=Math.max(a,e.month),e.month===a&&(e.day=Math.max(r,e.day))}}getEras(){return oi}getYearsInEra(e){let t=oi.indexOf(e.era),i=ba[t],a=ba[t+1];if(a==null)return 9999-i[0]+1;let r=a[0]-i[0];return(e.month<a[1]||e.month===a[1]&&e.day<a[2])&&r++,r}getDaysInMonth(e){return super.getDaysInMonth(qs(e))}getMinimumMonthInYear(e){let t=jc(e);return t?t[1]:1}getMinimumDayInMonth(e){let t=jc(e);return t&&e.month===t[1]?t[2]:1}constructor(...e){super(...e),this.identifier="japanese"}}function jc(n){if(n.year===1){let e=oi.indexOf(n.era);return ba[e]}}const Yd=-543;class gp extends bn{fromJulianDay(e){let t=super.fromJulianDay(e),i=_r(t.era,t.year);return new Rt(this,i-Yd,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Kc(e))}getEras(){return["BE"]}getDaysInMonth(e){return super.getDaysInMonth(Kc(e))}balanceDate(){}constructor(...e){super(...e),this.identifier="buddhist"}}function Kc(n){let[e,t]=Es(n.year+Yd);return new Rt(e,t,n.month,n.day)}const us=1911;function jd(n){return n.era==="minguo"?n.year+us:1-n.year+us}function Zc(n){let e=n-us;return e>0?["minguo",e]:["before_minguo",1-e]}class xp extends bn{fromJulianDay(e){let t=super.fromJulianDay(e),i=_r(t.era,t.year),[a,r]=Zc(i);return new Rt(this,a,r,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Jc(e))}getEras(){return["before_minguo","minguo"]}balanceDate(e){let[t,i]=Zc(jd(e));e.era=t,e.year=i}isInverseEra(e){return e.era==="before_minguo"}getDaysInMonth(e){return super.getDaysInMonth(Jc(e))}getYearsInEra(e){return e.era==="before_minguo"?9999:9999-us}constructor(...e){super(...e),this.identifier="roc"}}function Jc(n){let[e,t]=Es(jd(n));return new Rt(e,t,n.month,n.day)}const Qc=1948320,eu=[0,31,62,93,124,155,186,216,246,276,306,336];class _p{fromJulianDay(e){let t=e-Qc,i=1+Math.floor((33*t+3)/12053),a=365*(i-1)+Math.floor((8*i+21)/33),r=t-a,s=r<216?Math.floor(r/31):Math.floor((r-6)/30),o=r-eu[s]+1;return new Rt(this,i,s+1,o)}toJulianDay(e){let t=Qc-1+365*(e.year-1)+Math.floor((8*e.year+21)/33);return t+=eu[e.month-1],t+=e.day,t}getMonthsInYear(){return 12}getDaysInMonth(e){return e.month<=6?31:e.month<=11||ya(25*e.year+11,33)<8?30:29}getEras(){return["AP"]}getYearsInEra(){return 9377}constructor(){this.identifier="persian"}}const $s=78,tu=80;class vp extends bn{fromJulianDay(e){let t=super.fromJulianDay(e),i=t.year-$s,a=e-Fi(t.era,t.year,1,1),r;a<tu?(i--,r=di(t.year-1)?31:30,a+=r+155+90+10):(r=di(t.year)?31:30,a-=tu);let s,o;if(a<r)s=1,o=a+1;else{let l=a-r;l<155?(s=Math.floor(l/31)+2,o=l%31+1):(l-=155,s=Math.floor(l/30)+7,o=l%30+1)}return new Rt(this,i,s,o)}toJulianDay(e){let t=e.year+$s,[i,a]=Es(t),r,s;return di(a)?(r=31,s=Fi(i,a,3,21)):(r=30,s=Fi(i,a,3,22)),e.month===1?s+e.day-1:(s+=r+Math.min(e.month-2,5)*31,e.month>=8&&(s+=(e.month-7)*30),s+=e.day-1,s)}getDaysInMonth(e){return e.month===1&&di(e.year+$s)||e.month>=2&&e.month<=6?31:30}getYearsInEra(){return 9919}getEras(){return["saka"]}balanceDate(){}constructor(...e){super(...e),this.identifier="indian"}}const ds=1948440,nu=1948439,ln=1300,Ji=1600,yp=460322;function fs(n,e,t,i){return i+Math.ceil(29.5*(t-1))+(e-1)*354+Math.floor((3+11*e)/30)+n-1}function Kd(n,e,t){let i=Math.floor((30*(t-e)+10646)/10631),a=Math.min(12,Math.ceil((t-(29+fs(e,i,1,1)))/29.5)+1),r=t-fs(e,i,a,1)+1;return new Rt(n,i,a,r)}function iu(n){return(14+11*n)%30<11}class tc{fromJulianDay(e){return Kd(this,ds,e)}toJulianDay(e){return fs(ds,e.year,e.month,e.day)}getDaysInMonth(e){let t=29+e.month%2;return e.month===12&&iu(e.year)&&t++,t}getMonthsInYear(){return 12}getDaysInYear(e){return iu(e.year)?355:354}getYearsInEra(){return 9665}getEras(){return["AH"]}constructor(){this.identifier="islamic-civil"}}class bp extends tc{fromJulianDay(e){return Kd(this,nu,e)}toJulianDay(e){return fs(nu,e.year,e.month,e.day)}constructor(...e){super(...e),this.identifier="islamic-tbla"}}const Mp="qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";let zo,Ma;function es(n){return yp+Ma[n-ln]}function Qa(n,e){let t=n-ln,i=1<<11-(e-1);return(zo[t]&i)===0?29:30}function au(n,e){let t=es(n);for(let i=1;i<e;i++)t+=Qa(n,i);return t}function ru(n){return Ma[n+1-ln]-Ma[n-ln]}class Sp extends tc{fromJulianDay(e){let t=e-ds,i=es(ln),a=es(Ji);if(t<i||t>a)return super.fromJulianDay(e);{let r=ln-1,s=1,o=1;for(;o>0;){r++,o=t-es(r)+1;let l=ru(r);if(o===l){s=12;break}else if(o<l){let c=Qa(r,s);for(s=1;o>c;)o-=c,s++,c=Qa(r,s);break}}return new Rt(this,r,s,t-au(r,s)+1)}}toJulianDay(e){return e.year<ln||e.year>Ji?super.toJulianDay(e):ds+au(e.year,e.month)+(e.day-1)}getDaysInMonth(e){return e.year<ln||e.year>Ji?super.getDaysInMonth(e):Qa(e.year,e.month)}getDaysInYear(e){return e.year<ln||e.year>Ji?super.getDaysInYear(e):ru(e.year)}constructor(){if(super(),this.identifier="islamic-umalqura",zo||(zo=new Uint16Array(Uint8Array.from(atob(Mp),e=>e.charCodeAt(0)).buffer)),!Ma){Ma=new Uint32Array(Ji-ln+1);let e=0;for(let t=ln;t<=Ji;t++){Ma[t-ln]=e;for(let i=1;i<=12;i++)e+=Qa(t,i)}}}}const su=347997,Zd=1080,Jd=24*Zd,Ep=29,wp=12*Zd+793,Tp=Ep*Jd+wp;function Di(n){return ya(n*7+1,19)<7}function ts(n){let e=Math.floor((235*n-234)/19),t=12084+13753*e,i=e*29+Math.floor(t/25920);return ya(3*(i+1),7)<3&&(i+=1),i}function Ap(n){let e=ts(n-1),t=ts(n);return ts(n+1)-t===356?2:t-e===382?1:0}function tr(n){return ts(n)+Ap(n)}function Qd(n){return tr(n+1)-tr(n)}function Cp(n){let e=Qd(n);switch(e>380&&(e-=30),e){case 353:return 0;case 354:return 1;case 355:return 2}}function wr(n,e){if(e>=6&&!Di(n)&&e++,e===4||e===7||e===9||e===11||e===13)return 29;let t=Cp(n);return e===2?t===2?30:29:e===3?t===0?29:30:e===6?Di(n)?30:0:30}class Rp{fromJulianDay(e){let t=e-su,i=t*Jd/Tp,a=Math.floor((19*i+234)/235)+1,r=tr(a),s=Math.floor(t-r);for(;s<1;)a--,r=tr(a),s=Math.floor(t-r);let o=1,l=0;for(;l<s;)l+=wr(a,o),o++;o--,l-=wr(a,o);let c=s-l;return new Rt(this,a,o,c)}toJulianDay(e){let t=tr(e.year);for(let i=1;i<e.month;i++)t+=wr(e.year,i);return t+e.day+su}getDaysInMonth(e){return wr(e.year,e.month)}getMonthsInYear(e){return Di(e.year)?13:12}getDaysInYear(e){return Qd(e.year)}getYearsInEra(){return 9999}getEras(){return["AM"]}balanceYearMonth(e,t){t.year!==e.year&&(Di(t.year)&&!Di(e.year)&&t.month>6?e.month--:!Di(t.year)&&Di(e.year)&&t.month>6&&e.month++)}constructor(){this.identifier="hebrew"}}const Vo=1723856,ou=1824665,Ho=5500;function hs(n,e,t,i){return n+365*e+Math.floor(e/4)+30*(t-1)+i-1}function nc(n,e){let t=Math.floor(4*(e-n)/1461),i=1+Math.floor((e-hs(n,t,1,1))/30),a=e+1-hs(n,t,i,1);return[t,i,a]}function ef(n){return Math.floor(n%4/3)}function tf(n,e){return e%13!==0?30:ef(n)+5}class ic{fromJulianDay(e){let[t,i,a]=nc(Vo,e),r="AM";return t<=0&&(r="AA",t+=Ho),new Rt(this,r,t,i,a)}toJulianDay(e){let t=e.year;return e.era==="AA"&&(t-=Ho),hs(Vo,t,e.month,e.day)}getDaysInMonth(e){return tf(e.year,e.month)}getMonthsInYear(){return 13}getDaysInYear(e){return 365+ef(e.year)}getYearsInEra(e){return e.era==="AA"?9999:9991}getEras(){return["AA","AM"]}constructor(){this.identifier="ethiopic"}}class Dp extends ic{fromJulianDay(e){let[t,i,a]=nc(Vo,e);return t+=Ho,new Rt(this,"AA",t,i,a)}getEras(){return["AA"]}getYearsInEra(){return 9999}constructor(...e){super(...e),this.identifier="ethioaa"}}class Pp extends ic{fromJulianDay(e){let[t,i,a]=nc(ou,e),r="CE";return t<=0&&(r="BCE",t=1-t),new Rt(this,r,t,i,a)}toJulianDay(e){let t=e.year;return e.era==="BCE"&&(t=1-t),hs(ou,t,e.month,e.day)}getDaysInMonth(e){let t=e.year;return e.era==="BCE"&&(t=1-t),tf(t,e.month)}isInverseEra(e){return e.era==="BCE"}balanceDate(e){e.year<=0&&(e.era=e.era==="BCE"?"CE":"BCE",e.year=1-e.year)}getEras(){return["BCE","CE"]}getYearsInEra(e){return e.era==="BCE"?9999:9715}constructor(...e){super(...e),this.identifier="coptic"}}function Lp(n){switch(n){case"buddhist":return new gp;case"ethiopic":return new ic;case"ethioaa":return new Dp;case"coptic":return new Pp;case"hebrew":return new Rp;case"indian":return new vp;case"islamic-civil":return new tc;case"islamic-tbla":return new bp;case"islamic-umalqura":return new Sp;case"japanese":return new mp;case"persian":return new _p;case"roc":return new xp;case"gregory":default:return new bn}}let Xs=new Map;class Gn{format(e){return this.formatter.format(e)}formatToParts(e){return this.formatter.formatToParts(e)}formatRange(e,t){if(typeof this.formatter.formatRange=="function")return this.formatter.formatRange(e,t);if(t<e)throw new RangeError("End date must be >= start date");return`${this.formatter.format(e)} – ${this.formatter.format(t)}`}formatRangeToParts(e,t){if(typeof this.formatter.formatRangeToParts=="function")return this.formatter.formatRangeToParts(e,t);if(t<e)throw new RangeError("End date must be >= start date");let i=this.formatter.formatToParts(e),a=this.formatter.formatToParts(t);return[...i.map(r=>({...r,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(r=>({...r,source:"endRange"}))]}resolvedOptions(){let e=this.formatter.resolvedOptions();return Np()&&(this.resolvedHourCycle||(this.resolvedHourCycle=Fp(e.locale,this.options)),e.hourCycle=this.resolvedHourCycle,e.hour12=this.resolvedHourCycle==="h11"||this.resolvedHourCycle==="h12"),e.calendar==="ethiopic-amete-alem"&&(e.calendar="ethioaa"),e}constructor(e,t={}){this.formatter=nf(e,t),this.options=t}}const Ip={true:{ja:"h11"},false:{}};function nf(n,e={}){if(typeof e.hour12=="boolean"&&Up()){e={...e};let a=Ip[String(e.hour12)][n.split("-")[0]],r=e.hour12?"h12":"h23";e.hourCycle=a??r,delete e.hour12}let t=n+(e?Object.entries(e).sort((a,r)=>a[0]<r[0]?-1:1).join():"");if(Xs.has(t))return Xs.get(t);let i=new Intl.DateTimeFormat(n,e);return Xs.set(t,i),i}let Ys=null;function Up(){return Ys==null&&(Ys=new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:!1}).format(new Date(2020,2,3,0))==="24"),Ys}let js=null;function Np(){return js==null&&(js=new Intl.DateTimeFormat("fr",{hour:"numeric",hour12:!1}).resolvedOptions().hourCycle==="h12"),js}function Fp(n,e){if(!e.timeStyle&&!e.hour)return;n=n.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,""),n+=(n.includes("-u-")?"":"-u")+"-nu-latn";let t=nf(n,{...e,timeZone:void 0}),i=parseInt(t.formatToParts(new Date(2020,2,3,0)).find(r=>r.type==="hour").value,10),a=parseInt(t.formatToParts(new Date(2020,2,3,23)).find(r=>r.type==="hour").value,10);if(i===0&&a===23)return"h23";if(i===24&&a===23)return"h24";if(i===0&&a===11)return"h11";if(i===12&&a===11)return"h12";throw new Error("Unexpected hour cycle result")}function xn(n,e=$i()){return ac(n)?n.toDate():n.toDate(e)}function Op(n){return n instanceof Ra}function ac(n){return n instanceof Da}function Bp(n){return Op(n)||ac(n)}function sr(n){if(n instanceof Date){const e=n.getFullYear(),t=n.getMonth()+1;return new Date(e,t,0).getDate()}else return n.set({day:100}).day}function Bi(n,e){return n.compare(e)<0}function ns(n,e){return n.compare(e)>0}function kp(n,e){return n.compare(e)<=0}function zp(n,e){return n.compare(e)>=0}function Vp(n,e,t){return zp(n,e)&&kp(n,t)}function Ks(n,e,t){return ns(n,e)&&Bi(n,t)}function Hp(n,e,t){const i=Fd(n,t);return e>i?n.subtract({days:i+7-e}):e===i?n:n.subtract({days:i-e})}function Gp(n,e,t){const i=Fd(n,t),a=e===0?6:e-1;return i===a?n:i>a?n.add({days:7-i+a}):n.add({days:a-i})}function Wp(n,e,t,i,a){if(t===void 0&&i===void 0&&a===void 0)return!0;let r=n.add({days:1});if((i?.(r)||t?.(r))&&!a?.(r))return!1;const s=e;for(;r.compare(s)<0;)if(r=r.add({days:1}),(i?.(r)||t?.(r))&&!a?.(r))return!1;return!0}function af(n){const{defaultValue:e,defaultPlaceholder:t,granularity:i="day",locale:a="en"}=n;if(Array.isArray(e)&&e.length)return e.at(-1).copy();if(e&&!Array.isArray(e))return e.copy();if(t)return t.copy();const r=new Date,s=r.getFullYear(),o=r.getMonth()+1,l=r.getDate(),c=["hour","minute","second"],u=new Gn(a),d=Lp(u.resolvedOptions().calendar);return c.includes(i??"day")?jt(new Ra(s,o,l,0,0,0),d):jt(new Rt(s,o,l),d)}function qp(n,e){const t=[];for(let i=0;i<n.length;i+=e)t.push(n.slice(i,i+e));return t}function rf(n){const e=n.querySelector("[data-selected]");if(e)return e.focus();const t=n.querySelector("[data-today]");if(t)return t.focus();const i=n.querySelector("[data-reka-calendar-day]");if(i)return i.focus()}function Go(n,e){const t=[];let i=n.add({days:1});const a=e;for(;i.compare(a)<0;)t.push(i),i=i.add({days:1});return t}function Zs(n){const{dateObj:e,weekStartsOn:t,fixedWeeks:i,locale:a}=n,r=sr(e),s=Array.from({length:r},(m,f)=>e.set({day:f+1})),o=Fo(e),l=Wc(e),c=Hp(o,t,a),u=Gp(l,t,a),d=Go(c.subtract({days:1}),o),h=Go(l,u.add({days:1})),p=d.length+s.length+h.length;if(i&&p<42){const m=42-p;let f=h[h.length-1];f||(f=Wc(e));const M=Array.from({length:m},(b,E)=>{const A=E+1;return f.add({days:A})});h.push(...M)}const g=d.concat(s,h),x=qp(g,7);return{value:e,cells:g,rows:x}}function Si(n){const{numberOfMonths:e,dateObj:t,...i}=n,a=[];if(!e||e===1)return a.push(Zs({...i,dateObj:t})),a;a.push(Zs({...i,dateObj:t}));for(let r=1;r<e;r++){const s=t.add({months:r});a.push(Zs({...i,dateObj:s}))}return a}function $p(n,e={}){const t=Pe(n);function i(){return t.value}function a(m){t.value=m}function r(m,f){return new Gn(t.value,{...e,...f}).format(m)}function s(m,f=!0){return Bp(m)&&f?r(xn(m),{dateStyle:"long",timeStyle:"long"}):r(xn(m),{dateStyle:"long"})}function o(m,f={}){return new Gn(t.value,{...e,month:"long",year:"numeric",...f}).format(m)}function l(m,f={}){return new Gn(t.value,{...e,month:"long",...f}).format(m)}function c(){const m=Kl($i());return[1,2,3,4,5,6,7,8,9,10,11,12].map(M=>({label:l(xn(m.set({month:M}))),value:M}))}function u(m,f={}){return new Gn(t.value,{...e,year:"numeric",...f}).format(m)}function d(m,f){return ac(m)?new Gn(t.value,{...e,...f,timeZone:m.timeZone}).formatToParts(xn(m)):new Gn(t.value,{...e,...f}).formatToParts(xn(m))}function h(m,f="narrow"){return new Gn(t.value,{...e,weekday:f}).format(m)}function p(m){const M=new Gn(t.value,{...e,hour:"numeric",minute:"numeric"}).formatToParts(m).find(b=>b.type==="dayPeriod")?.value;return M==="PM"||M==="p.m."?"PM":"AM"}const g={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};function x(m,f,M={}){const b={...g,...M},A=d(m,b).find(w=>w.type===f);return A?A.value:""}return{setLocale:a,getLocale:i,fullMonth:l,fullYear:u,fullMonthAndYear:o,toParts:d,custom:r,part:x,dayPeriod:p,selectedDate:s,dayOfWeek:h,getMonths:c}}function sf(n){const e=kl({dir:Pe("ltr")});return J(()=>n?.value||e.dir?.value||"ltr")}let Js=0;function Xp(){ki(n=>{if(!zl)return;const e=document.querySelectorAll("[data-reka-focus-guard]");document.body.insertAdjacentElement("afterbegin",e[0]??lu()),document.body.insertAdjacentElement("beforeend",e[1]??lu()),Js++,n(()=>{Js===1&&document.querySelectorAll("[data-reka-focus-guard]").forEach(t=>t.remove()),Js--})})}function lu(){const n=document.createElement("span");return n.setAttribute("data-reka-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}function of(n,e){const t=fh(!1,300),i=Pe(null),a=hh();function r(){i.value=null,t.value=!1}function s(o,l){const c=o.currentTarget,u={x:o.clientX,y:o.clientY},d=Yp(u,c.getBoundingClientRect()),h=jp(u,d),p=Kp(l.getBoundingClientRect()),g=Jp([...h,...p]);i.value=g,t.value=!0}return ki(o=>{if(n.value&&e.value){const l=u=>s(u,e.value),c=u=>s(u,n.value);n.value.addEventListener("pointerleave",l),e.value.addEventListener("pointerleave",c),o(()=>{n.value?.removeEventListener("pointerleave",l),e.value?.removeEventListener("pointerleave",c)})}}),ki(o=>{if(i.value){const l=c=>{if(!i.value||!(c.target instanceof Element))return;const u=c.target,d={x:c.clientX,y:c.clientY},h=n.value?.contains(u)||e.value?.contains(u),p=!Zp(d,i.value),g=!!u.closest("[data-grace-area-trigger]");h?r():(p||g)&&(r(),a.trigger())};n.value?.ownerDocument.addEventListener("pointermove",l),o(()=>n.value?.ownerDocument.removeEventListener("pointermove",l))}}),{isPointerInTransit:t,onPointerExit:a.on}}function Yp(n,e){const t=Math.abs(e.top-n.y),i=Math.abs(e.bottom-n.y),a=Math.abs(e.right-n.x),r=Math.abs(e.left-n.x);switch(Math.min(t,i,a,r)){case r:return"left";case a:return"right";case t:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function jp(n,e,t=5){const i=[];switch(e){case"top":i.push({x:n.x-t,y:n.y+t},{x:n.x+t,y:n.y+t});break;case"bottom":i.push({x:n.x-t,y:n.y-t},{x:n.x+t,y:n.y-t});break;case"left":i.push({x:n.x+t,y:n.y-t},{x:n.x+t,y:n.y+t});break;case"right":i.push({x:n.x-t,y:n.y-t},{x:n.x-t,y:n.y+t});break}return i}function Kp(n){const{top:e,right:t,bottom:i,left:a}=n;return[{x:a,y:e},{x:t,y:e},{x:t,y:i},{x:a,y:i}]}function Zp(n,e){const{x:t,y:i}=n;let a=!1;for(let r=0,s=e.length-1;r<e.length;s=r++){const o=e[r].x,l=e[r].y,c=e[s].x,u=e[s].y;l>i!=u>i&&t<(c-o)*(i-l)/(u-l)+o&&(a=!a)}return a}function Jp(n){const e=n.slice();return e.sort((t,i)=>t.x<i.x?-1:t.x>i.x?1:t.y<i.y?-1:t.y>i.y?1:0),Qp(e)}function Qp(n){if(n.length<=1)return n.slice();const e=[];for(let i=0;i<n.length;i++){const a=n[i];for(;e.length>=2;){const r=e[e.length-1],s=e[e.length-2];if((r.x-s.x)*(a.y-s.y)>=(r.y-s.y)*(a.x-s.x))e.pop();else break}e.push(a)}e.pop();const t=[];for(let i=n.length-1;i>=0;i--){const a=n[i];for(;t.length>=2;){const r=t[t.length-1],s=t[t.length-2];if((r.x-s.x)*(a.y-s.y)>=(r.y-s.y)*(a.x-s.x))t.pop();else break}t.push(a)}return t.pop(),e.length===1&&t.length===1&&e[0].x===t[0].x&&e[0].y===t[0].y?e:e.concat(t)}var em=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},Qi=new WeakMap,Tr=new WeakMap,Ar={},Qs=0,lf=function(n){return n&&(n.host||lf(n.parentNode))},tm=function(n,e){return e.map(function(t){if(n.contains(t))return t;var i=lf(t);return i&&n.contains(i)?i:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},nm=function(n,e,t,i){var a=tm(e,Array.isArray(n)?n:[n]);Ar[t]||(Ar[t]=new WeakMap);var r=Ar[t],s=[],o=new Set,l=new Set(a),c=function(d){!d||o.has(d)||(o.add(d),c(d.parentNode))};a.forEach(c);var u=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(h){if(o.has(h))u(h);else try{var p=h.getAttribute(i),g=p!==null&&p!=="false",x=(Qi.get(h)||0)+1,m=(r.get(h)||0)+1;Qi.set(h,x),r.set(h,m),s.push(h),x===1&&g&&Tr.set(h,!0),m===1&&h.setAttribute(t,"true"),g||h.setAttribute(i,"true")}catch(f){console.error("aria-hidden: cannot operate on ",h,f)}})};return u(e),o.clear(),Qs++,function(){s.forEach(function(d){var h=Qi.get(d)-1,p=r.get(d)-1;Qi.set(d,h),r.set(d,p),h||(Tr.has(d)||d.removeAttribute(i),Tr.delete(d)),p||d.removeAttribute(t)}),Qs--,Qs||(Qi=new WeakMap,Qi=new WeakMap,Tr=new WeakMap,Ar={})}},im=function(n,e,t){t===void 0&&(t="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),a=em(n);return a?(i.push.apply(i,Array.from(a.querySelectorAll("[aria-live], script"))),nm(i,a,t,"aria-hidden")):function(){return null}};function am(n){let e;Yt(()=>wd(n),t=>{t?e=im(t):e&&e()}),gr(()=>{e&&e()})}function rc(n,e="reka"){return`${e}-${ph?.()}`}function sc(){return{ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",SPACE_CODE:"Space"}}function cf(n){const e=kl({locale:Pe("en")});return J(()=>n?.value||e.locale?.value||"en")}function rm(n){const e=Pe(),t=J(()=>e.value?.width??0),i=J(()=>e.value?.height??0);return Nn(()=>{const a=wd(n);if(a){e.value={width:a.offsetWidth,height:a.offsetHeight};const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const o=s[0];let l,c;if("borderBoxSize"in o){const u=o.borderBoxSize,d=Array.isArray(u)?u[0]:u;l=d.inlineSize,c=d.blockSize}else l=a.offsetWidth,c=a.offsetHeight;e.value={width:l,height:c}});return r.observe(a,{box:"border-box"}),()=>r.unobserve(a)}else e.value=void 0}),{width:t,height:i}}const sm=mh(()=>Pe([]));function om(){const n=sm();return{add(e){const t=n.value[0];e!==t&&t?.pause(),n.value=cu(n.value,e),n.value.unshift(e)},remove(e){n.value=cu(n.value,e),n.value[0]?.resume()}}}function cu(n,e){const t=[...n],i=t.indexOf(e);return i!==-1&&t.splice(i,1),t}function lm(n){return n.filter(e=>e.tagName!=="A")}var cm=Ee({__name:"FocusScope",props:{loop:{type:Boolean,required:!1,default:!1},trapped:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["mountAutoFocus","unmountAutoFocus"],setup(n,{emit:e}){const t=n,i=e,{currentRef:a,currentElement:r}=bt(),s=Pe(null),o=om(),l=Td({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});ki(u=>{if(!zl)return;const d=r.value;if(!t.trapped)return;function h(m){if(l.paused||!d)return;const f=m.target;d.contains(f)?s.value=f:Mi(s.value,{select:!0})}function p(m){if(l.paused||!d)return;const f=m.relatedTarget;f!==null&&(d.contains(f)||Mi(s.value,{select:!0}))}function g(m){d.contains(s.value)||Mi(d)}document.addEventListener("focusin",h),document.addEventListener("focusout",p);const x=new MutationObserver(g);d&&x.observe(d,{childList:!0,subtree:!0}),u(()=>{document.removeEventListener("focusin",h),document.removeEventListener("focusout",p),x.disconnect()})}),ki(async u=>{const d=r.value;if(await mr(),!d)return;o.add(l);const h=ks();if(!d.contains(h)){const g=new CustomEvent(zs,zc);d.addEventListener(zs,x=>i("mountAutoFocus",x)),d.dispatchEvent(g),g.defaultPrevented||(xh(lm(_h(d)),{select:!0}),ks()===h&&Mi(d))}u(()=>{d.removeEventListener(zs,m=>i("mountAutoFocus",m));const g=new CustomEvent(Vs,zc),x=m=>{i("unmountAutoFocus",m)};d.addEventListener(Vs,x),d.dispatchEvent(g),setTimeout(()=>{g.defaultPrevented||Mi(h??document.body,{select:!0}),d.removeEventListener(Vs,x),o.remove(l)},0)})});function c(u){if(!t.loop&&!t.trapped||l.paused)return;const d=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,h=ks();if(d&&h){const p=u.currentTarget,[g,x]=gh(p);g&&x?!u.shiftKey&&h===x?(u.preventDefault(),t.loop&&Mi(g,{select:!0})):u.shiftKey&&h===g&&(u.preventDefault(),t.loop&&Mi(x,{select:!0})):h===p&&u.preventDefault()}}return(u,d)=>(ie(),ue(R(tt),{ref_key:"currentRef",ref:a,tabindex:"-1","as-child":u.asChild,as:u.as,onKeydown:c},{default:te(()=>[ve(u.$slots,"default")]),_:3},8,["as-child","as"]))}}),um=cm;function dm(n){function e(i){return Array.isArray(n.date.value)?n.date.value.some(a=>Pt(a,i)):n.date.value?Pt(n.date.value,i):!1}const t=J(()=>{if(Array.isArray(n.date.value)){if(!n.date.value.length)return!1;for(const i of n.date.value)if(n.isDateDisabled?.(i)||n.isDateUnavailable?.(i))return!0}else{if(!n.date.value)return!1;if(n.isDateDisabled?.(n.date.value)||n.isDateUnavailable?.(n.date.value))return!0}return!1});return{isDateSelected:e,isInvalid:t}}function fm(n,e){const t=e(n),i=t.compare(n),a={};return i>=7&&(a.day=1),i>=sr(n)&&(a.month=1),t.set({...a})}function hm(n,e){const t=e(n),i=n.compare(t),a={};return i>=7&&(a.day=35),i>=sr(n)&&(a.month=13),t.set({...a})}function pm(n,e){return e(n)}function mm(n,e){return e(n)}function uf(n){const e=$p(n.locale.value),t=J(()=>{const x={calendar:n.placeholder.value.calendar.identifier};return n.placeholder.value.calendar.identifier==="gregory"&&n.placeholder.value.era==="BC"&&(x.era="short"),x}),i=Pe(Si({dateObj:n.placeholder.value,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value})),a=J(()=>i.value.map(x=>x.value));function r(x){return!a.value.some(m=>Hc(x,m))}const s=x=>{if(!n.maxValue.value||!i.value.length)return!1;if(n.disabled.value)return!0;const m=i.value[i.value.length-1].value;if(!x&&!n.nextPage.value){const M=m.add({months:1}).set({day:1});return ns(M,n.maxValue.value)}const f=fm(m,x||n.nextPage.value);return ns(f,n.maxValue.value)},o=x=>{if(!n.minValue.value||!i.value.length)return!1;if(n.disabled.value)return!0;const m=i.value[0].value;if(!x&&!n.prevPage.value){const M=m.subtract({months:1}).set({day:35});return Bi(M,n.minValue.value)}const f=hm(m,x||n.prevPage.value);return Bi(f,n.minValue.value)};function l(x){return!!(n.isDateDisabled?.(x)||n.disabled.value||n.maxValue.value&&ns(x,n.maxValue.value)||n.minValue.value&&Bi(x,n.minValue.value))}const c=x=>!!n.isDateUnavailable?.(x),u=J(()=>i.value.length?i.value[0].rows[0].map(x=>e.dayOfWeek(xn(x),n.weekdayFormat.value)):[]),d=x=>{const m=i.value[0].value;if(!x&&!n.nextPage.value){const E=m.add({months:n.pagedNavigation.value?n.numberOfMonths.value:1}),A=Si({dateObj:E,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value});i.value=A,n.placeholder.value=A[0].value.set({day:1});return}const f=pm(m,x||n.nextPage.value),M=Si({dateObj:f,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value});i.value=M;const b={};if(!x){const E=M[0].value.compare(m);E>=sr(m)&&(b.day=1),E>=365&&(b.month=1)}n.placeholder.value=M[0].value.set({...b})},h=x=>{const m=i.value[0].value;if(!x&&!n.prevPage.value){const E=m.subtract({months:n.pagedNavigation.value?n.numberOfMonths.value:1}),A=Si({dateObj:E,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value});i.value=A,n.placeholder.value=A[0].value.set({day:1});return}const f=mm(m,x||n.prevPage.value),M=Si({dateObj:f,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value});i.value=M;const b={};if(!x){const E=m.compare(M[0].value);E>=sr(m)&&(b.day=1),E>=365&&(b.month=1)}n.placeholder.value=M[0].value.set({...b})};Yt(n.placeholder,x=>{a.value.some(m=>Hc(m,x))||(i.value=Si({dateObj:x,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value}))}),Yt([n.locale,n.weekStartsOn,n.fixedWeeks,n.numberOfMonths],()=>{i.value=Si({dateObj:n.placeholder.value,weekStartsOn:n.weekStartsOn.value,locale:n.locale.value,fixedWeeks:n.fixedWeeks.value,numberOfMonths:n.numberOfMonths.value})});const p=J(()=>{if(!i.value.length)return"";if(n.locale.value!==e.getLocale()&&e.setLocale(n.locale.value),i.value.length===1){const w=i.value[0].value;return`${e.fullMonthAndYear(xn(w),t.value)}`}const x=xn(i.value[0].value),m=xn(i.value[i.value.length-1].value),f=e.fullMonth(x,t.value),M=e.fullMonth(m,t.value),b=e.fullYear(x,t.value),E=e.fullYear(m,t.value);return b===E?`${f} - ${M} ${E}`:`${f} ${b} - ${M} ${E}`}),g=J(()=>`${n.calendarLabel.value??"Event Date"}, ${p.value}`);return{isDateDisabled:l,isDateUnavailable:c,isNextButtonDisabled:s,isPrevButtonDisabled:o,grid:i,weekdays:u,visibleView:a,isOutsideVisibleView:r,formatter:e,nextPage:d,prevPage:h,headingValue:p,fullCalendarLabel:g}}const gm={style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute","white-space":"nowrap",width:"1px"}},xm={role:"heading","aria-level":"2"},[Oa,_m]=qi("CalendarRoot");var vm=Ee({__name:"CalendarRoot",props:{defaultValue:{type:null,required:!1,default:void 0},defaultPlaceholder:{type:null,required:!1},placeholder:{type:null,required:!1,default:void 0},pagedNavigation:{type:Boolean,required:!1,default:!1},preventDeselect:{type:Boolean,required:!1,default:!1},weekStartsOn:{type:Number,required:!1,default:0},weekdayFormat:{type:String,required:!1,default:"narrow"},calendarLabel:{type:String,required:!1},fixedWeeks:{type:Boolean,required:!1,default:!1},maxValue:{type:null,required:!1},minValue:{type:null,required:!1},locale:{type:String,required:!1},numberOfMonths:{type:Number,required:!1,default:1},disabled:{type:Boolean,required:!1,default:!1},readonly:{type:Boolean,required:!1,default:!1},initialFocus:{type:Boolean,required:!1,default:!1},isDateDisabled:{type:Function,required:!1,default:void 0},isDateUnavailable:{type:Function,required:!1,default:void 0},dir:{type:String,required:!1},nextPage:{type:Function,required:!1},prevPage:{type:Function,required:!1},modelValue:{type:null,required:!1},multiple:{type:Boolean,required:!1,default:!1},disableDaysOutsideCurrentView:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},emits:["update:modelValue","update:placeholder"],setup(n,{emit:e}){const t=n,i=e,{disabled:a,readonly:r,initialFocus:s,pagedNavigation:o,weekStartsOn:l,weekdayFormat:c,fixedWeeks:u,multiple:d,minValue:h,maxValue:p,numberOfMonths:g,preventDeselect:x,isDateDisabled:m,isDateUnavailable:f,calendarLabel:M,defaultValue:b,nextPage:E,prevPage:A,dir:w,locale:C,disableDaysOutsideCurrentView:U}=Ms(t),{primitiveElement:v,currentElement:y}=Ss(),P=cf(C),I=sf(w),N=zi(t,"modelValue",i,{defaultValue:b.value,passive:t.modelValue===void 0}),V=af({defaultPlaceholder:t.placeholder,defaultValue:N.value,locale:t.locale}),W=zi(t,"placeholder",i,{defaultValue:t.defaultPlaceholder??V.copy(),passive:t.placeholder===void 0});function q(Be){W.value=Be.copy()}const{fullCalendarLabel:Z,headingValue:k,isDateDisabled:ee,isDateUnavailable:ae,isNextButtonDisabled:xe,isPrevButtonDisabled:He,weekdays:Je,isOutsideVisibleView:st,nextPage:it,prevPage:Y,formatter:Q,grid:me}=uf({locale:P,placeholder:W,weekStartsOn:l,fixedWeeks:u,numberOfMonths:g,minValue:h,maxValue:p,disabled:a,weekdayFormat:c,pagedNavigation:o,isDateDisabled:m.value,isDateUnavailable:f.value,calendarLabel:M,nextPage:E,prevPage:A}),{isInvalid:Ne,isDateSelected:we}=dm({date:N,isDateDisabled:ee,isDateUnavailable:ae});Yt(N,Be=>{if(Array.isArray(Be)&&Be.length){const ke=Be[Be.length-1];ke&&!ci(W.value,ke)&&q(ke)}else!Array.isArray(Be)&&Be&&!ci(W.value,Be)&&q(Be)});function $e(Be){if(d.value){if(!N.value)N.value=[Be.copy()];else if(Array.isArray(N.value)){if(N.value.findIndex(ot=>Pt(ot,Be))===-1)N.value=[...N.value,Be];else if(!x.value){const ot=N.value.filter(D=>!Pt(D,Be));if(!ot.length){W.value=Be.copy(),N.value=void 0;return}N.value=ot.map(D=>D.copy())}}}else{if(!N.value){N.value=Be.copy();return}!x.value&&ci(N.value,Be)?(W.value=Be.copy(),N.value=void 0):N.value=Be.copy()}}return Nn(()=>{s.value&&rf(y.value)}),_m({isDateUnavailable:ae,dir:I,isDateDisabled:ee,locale:P,formatter:Q,modelValue:N,placeholder:W,disabled:a,initialFocus:s,pagedNavigation:o,grid:me,weekDays:Je,weekStartsOn:l,weekdayFormat:c,fixedWeeks:u,multiple:d,numberOfMonths:g,readonly:r,preventDeselect:x,fullCalendarLabel:Z,headingValue:k,isInvalid:Ne,isDateSelected:we,isNextButtonDisabled:xe,isPrevButtonDisabled:He,isOutsideVisibleView:st,nextPage:it,prevPage:Y,parentElement:y,onPlaceholderChange:q,onDateChange:$e,disableDaysOutsideCurrentView:U,minValue:h,maxValue:p}),(Be,ke)=>(ie(),ue(R(tt),{ref_key:"primitiveElement",ref:v,as:Be.as,"as-child":Be.asChild,"aria-label":R(Z),"data-readonly":R(r)?"":void 0,"data-disabled":R(a)?"":void 0,"data-invalid":R(Ne)?"":void 0,dir:R(I)},{default:te(()=>[ve(Be.$slots,"default",{date:R(W),grid:R(me),weekDays:R(Je),weekStartsOn:R(l),locale:R(P),fixedWeeks:R(u),modelValue:R(N)}),lt("div",gm,[lt("div",xm,Tt(R(Z)),1)])]),_:3},8,["as","as-child","aria-label","data-readonly","data-disabled","data-invalid","dir"]))}}),ym=vm,bm=Ee({__name:"CalendarCell",props:{date:{type:null,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"td"}},setup(n){const e=Oa();return(t,i)=>(ie(),ue(R(tt),{as:t.as,"as-child":t.asChild,role:"gridcell","aria-selected":R(e).isDateSelected(t.date)?!0:void 0,"aria-disabled":R(e).isDateDisabled(t.date)||R(e).isDateUnavailable?.(t.date)||R(e).disableDaysOutsideCurrentView.value,"data-disabled":R(e).isDateDisabled(t.date)||R(e).disableDaysOutsideCurrentView.value?"":void 0},{default:te(()=>[ve(t.$slots,"default")]),_:3},8,["as","as-child","aria-selected","aria-disabled","data-disabled"]))}}),Mm=bm,Sm=Ee({__name:"CalendarCellTrigger",props:{day:{type:null,required:!0},month:{type:null,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n,t=sc(),i=Oa(),{primitiveElement:a}=Ss(),r=J(()=>e.day.day.toLocaleString(i.locale.value)),s=J(()=>i.formatter.custom(xn(e.day),{weekday:"long",month:"long",day:"numeric",year:"numeric"})),o=J(()=>i.isDateUnavailable?.(e.day)??!1),l=J(()=>Nd(e.day,$i())),c=J(()=>!Yl(e.day,e.month)),u=J(()=>i.isOutsideVisibleView(e.day)),d=J(()=>i.isDateDisabled(e.day)||i.disableDaysOutsideCurrentView.value&&c.value),h=J(()=>!i.disabled.value&&Pt(e.day,i.placeholder.value)),p=J(()=>i.isDateSelected(e.day));function g(f){i.readonly.value||i.isDateDisabled(f)||i.isDateUnavailable?.(f)||i.onDateChange(f)}function x(){d.value||g(e.day)}function m(f){if(d.value)return;f.preventDefault(),f.stopPropagation();const M=i.parentElement.value,b=7,E=i.dir.value==="rtl"?-1:1;switch(f.code){case t.ARROW_RIGHT:A(e.day,E);break;case t.ARROW_LEFT:A(e.day,-E);break;case t.ARROW_UP:A(e.day,-b);break;case t.ARROW_DOWN:A(e.day,b);break;case t.ENTER:case t.SPACE_CODE:g(e.day)}function A(w,C){const U=w.add({days:C});if(i.minValue.value&&U.compare(i.minValue.value)<0||i.maxValue.value&&U.compare(i.maxValue.value)>0)return;const v=M.querySelector(`[data-value='${U.toString()}']:not([data-outside-view])`);if(!v){if(C>0){if(i.isNextButtonDisabled())return;i.nextPage()}else{if(i.isPrevButtonDisabled())return;i.prevPage()}mr(()=>{A(w,C)});return}if(v&&v.hasAttribute("data-disabled"))return A(U,C);i.onPlaceholderChange(U),v?.focus()}}return(f,M)=>(ie(),ue(R(tt),nt({ref_key:"primitiveElement",ref:a},e,{role:"button","aria-label":s.value,"data-reka-calendar-cell-trigger":"","aria-disabled":d.value||o.value?!0:void 0,"data-selected":p.value?!0:void 0,"data-value":f.day.toString(),"data-disabled":d.value?"":void 0,"data-unavailable":o.value?"":void 0,"data-today":l.value?"":void 0,"data-outside-view":c.value?"":void 0,"data-outside-visible-view":u.value?"":void 0,"data-focused":h.value?"":void 0,tabindex:h.value?0:c.value||d.value?void 0:-1,onClick:x,onKeydown:[Uo(m,["up","down","left","right","space","enter"]),M[0]||(M[0]=Uo(rr(()=>{},["prevent"]),["enter"]))]}),{default:te(()=>[ve(f.$slots,"default",{dayValue:r.value,disabled:d.value,today:l.value,selected:p.value,outsideView:c.value,outsideVisibleView:u.value,unavailable:o.value},()=>[Kt(Tt(r.value),1)])]),_:3},16,["aria-label","aria-disabled","data-selected","data-value","data-disabled","data-unavailable","data-today","data-outside-view","data-outside-visible-view","data-focused","tabindex"]))}}),Em=Sm,wm=Ee({__name:"CalendarGrid",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"table"}},setup(n){const e=n,t=Oa(),i=J(()=>t.disabled.value?!0:void 0),a=J(()=>t.readonly.value?!0:void 0);return(r,s)=>(ie(),ue(R(tt),nt(e,{tabindex:"-1",role:"grid","aria-readonly":a.value,"aria-disabled":i.value,"data-readonly":a.value&&"","data-disabled":i.value&&""}),{default:te(()=>[ve(r.$slots,"default")]),_:3},16,["aria-readonly","aria-disabled","data-readonly","data-disabled"]))}}),Tm=wm,Am=Ee({__name:"CalendarGridBody",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"tbody"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),Cm=Am,Rm=Ee({__name:"CalendarGridHead",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"thead"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),nt(e,{"aria-hidden":"true"}),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),Dm=Rm,Pm=Ee({__name:"CalendarGridRow",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"tr"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),Lm=Pm,Im=Ee({__name:"CalendarHeadCell",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"th"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),Um=Im,Nm=Ee({__name:"CalendarHeader",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),Fm=Nm,Om=Ee({__name:"CalendarHeading",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n,t=Oa();return(i,a)=>(ie(),ue(R(tt),nt(e,{"data-disabled":R(t).disabled.value?"":void 0}),{default:te(()=>[ve(i.$slots,"default",{headingValue:R(t).headingValue.value},()=>[Kt(Tt(R(t).headingValue.value),1)])]),_:3},16,["data-disabled"]))}}),Bm=Om,km=Ee({__name:"CalendarNext",props:{nextPage:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=J(()=>i.disabled.value||i.isNextButtonDisabled(e.nextPage)),i=Oa();return(a,r)=>(ie(),ue(R(tt),{as:e.as,"as-child":e.asChild,"aria-label":"Next page",type:a.as==="button"?"button":void 0,"aria-disabled":t.value||void 0,"data-disabled":t.value||void 0,disabled:t.value,onClick:r[0]||(r[0]=s=>R(i).nextPage(e.nextPage))},{default:te(()=>[ve(a.$slots,"default",{disabled:t.value},()=>[r[1]||(r[1]=Kt(" Next page "))])]),_:3},8,["as","as-child","type","aria-disabled","data-disabled","disabled"]))}}),zm=km,Vm=Ee({__name:"CalendarPrev",props:{prevPage:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=J(()=>i.disabled.value||i.isPrevButtonDisabled(e.prevPage)),i=Oa();return(a,r)=>(ie(),ue(R(tt),{"aria-label":"Previous page",as:e.as,"as-child":e.asChild,type:a.as==="button"?"button":void 0,"aria-disabled":t.value||void 0,"data-disabled":t.value||void 0,disabled:t.value,onClick:r[0]||(r[0]=s=>R(i).prevPage(e.prevPage))},{default:te(()=>[ve(a.$slots,"default",{disabled:t.value},()=>[r[1]||(r[1]=Kt(" Prev page "))])]),_:3},8,["as","as-child","type","aria-disabled","data-disabled","disabled"]))}}),Hm=Vm;const[df,Gm]=qi("PopperRoot");var Wm=Ee({inheritAttrs:!1,__name:"PopperRoot",setup(n){const e=Pe();return Gm({anchor:e,onAnchorChange:t=>e.value=t}),(t,i)=>ve(t.$slots,"default")}}),oc=Wm,qm=Ee({__name:"PopperAnchor",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const e=n,{forwardRef:t,currentElement:i}=bt(),a=df();return Ad(()=>{a.onAnchorChange(e.reference??i.value)}),(r,s)=>(ie(),ue(R(tt),{ref:R(t),as:r.as,"as-child":r.asChild},{default:te(()=>[ve(r.$slots,"default")]),_:3},8,["as","as-child"]))}}),Ts=qm;const $m={key:0,d:"M0 0L6 6L12 0"},Xm={key:1,d:"M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"};var Ym=Ee({__name:"Arrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const e=n;return bt(),(t,i)=>(ie(),ue(R(tt),nt(e,{width:t.width,height:t.height,viewBox:t.asChild?void 0:"0 0 12 6",preserveAspectRatio:t.asChild?void 0:"none"}),{default:te(()=>[ve(t.$slots,"default",{},()=>[t.rounded?(ie(),Bt("path",Xm)):(ie(),Bt("path",$m))])]),_:3},16,["width","height","viewBox","preserveAspectRatio"]))}}),jm=Ym;function Km(n){return n!==null}function Zm(n){return{name:"transformOrigin",options:n,fn(e){const{placement:t,rects:i,middlewareData:a}=e,s=a.arrow?.centerOffset!==0,o=s?0:n.arrowWidth,l=s?0:n.arrowHeight,[c,u]=Wo(t),d={start:"0%",center:"50%",end:"100%"}[u],h=(a.arrow?.x??0)+o/2,p=(a.arrow?.y??0)+l/2;let g="",x="";return c==="bottom"?(g=s?d:`${h}px`,x=`${-l}px`):c==="top"?(g=s?d:`${h}px`,x=`${i.floating.height+l}px`):c==="right"?(g=`${-l}px`,x=s?d:`${p}px`):c==="left"&&(g=`${i.floating.width+l}px`,x=s?d:`${p}px`),{data:{x:g,y:x}}}}}function Wo(n){const[e,t="center"]=n.split("-");return[e,t]}const Jm=["top","right","bottom","left"],mi=Math.min,tn=Math.max,ps=Math.round,Cr=Math.floor,Dn=n=>({x:n,y:n}),Qm={left:"right",right:"left",bottom:"top",top:"bottom"},e0={start:"end",end:"start"};function qo(n,e,t){return tn(n,mi(e,t))}function Qn(n,e){return typeof n=="function"?n(e):n}function ei(n){return n.split("-")[0]}function Ba(n){return n.split("-")[1]}function lc(n){return n==="x"?"y":"x"}function cc(n){return n==="y"?"height":"width"}const t0=new Set(["top","bottom"]);function Cn(n){return t0.has(ei(n))?"y":"x"}function uc(n){return lc(Cn(n))}function n0(n,e,t){t===void 0&&(t=!1);const i=Ba(n),a=uc(n),r=cc(a);let s=a==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=ms(s)),[s,ms(s)]}function i0(n){const e=ms(n);return[$o(n),e,$o(e)]}function $o(n){return n.replace(/start|end/g,e=>e0[e])}const uu=["left","right"],du=["right","left"],a0=["top","bottom"],r0=["bottom","top"];function s0(n,e,t){switch(n){case"top":case"bottom":return t?e?du:uu:e?uu:du;case"left":case"right":return e?a0:r0;default:return[]}}function o0(n,e,t,i){const a=Ba(n);let r=s0(ei(n),t==="start",i);return a&&(r=r.map(s=>s+"-"+a),e&&(r=r.concat(r.map($o)))),r}function ms(n){return n.replace(/left|right|bottom|top/g,e=>Qm[e])}function l0(n){return{top:0,right:0,bottom:0,left:0,...n}}function ff(n){return typeof n!="number"?l0(n):{top:n,right:n,bottom:n,left:n}}function gs(n){const{x:e,y:t,width:i,height:a}=n;return{width:i,height:a,top:t,left:e,right:e+i,bottom:t+a,x:e,y:t}}function fu(n,e,t){let{reference:i,floating:a}=n;const r=Cn(e),s=uc(e),o=cc(s),l=ei(e),c=r==="y",u=i.x+i.width/2-a.width/2,d=i.y+i.height/2-a.height/2,h=i[o]/2-a[o]/2;let p;switch(l){case"top":p={x:u,y:i.y-a.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-a.width,y:d};break;default:p={x:i.x,y:i.y}}switch(Ba(e)){case"start":p[s]-=h*(t&&c?-1:1);break;case"end":p[s]+=h*(t&&c?-1:1);break}return p}const c0=async(n,e,t)=>{const{placement:i="bottom",strategy:a="absolute",middleware:r=[],platform:s}=t,o=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:n,floating:e,strategy:a}),{x:u,y:d}=fu(c,i,l),h=i,p={},g=0;for(let x=0;x<o.length;x++){const{name:m,fn:f}=o[x],{x:M,y:b,data:E,reset:A}=await f({x:u,y:d,initialPlacement:i,placement:h,strategy:a,middlewareData:p,rects:c,platform:s,elements:{reference:n,floating:e}});u=M??u,d=b??d,p={...p,[m]:{...p[m],...E}},A&&g<=50&&(g++,typeof A=="object"&&(A.placement&&(h=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:n,floating:e,strategy:a}):A.rects),{x:u,y:d}=fu(c,h,l)),x=-1)}return{x:u,y:d,placement:h,strategy:a,middlewareData:p}};async function or(n,e){var t;e===void 0&&(e={});const{x:i,y:a,platform:r,rects:s,elements:o,strategy:l}=n,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=Qn(e,n),g=ff(p),m=o[h?d==="floating"?"reference":"floating":d],f=gs(await r.getClippingRect({element:(t=await(r.isElement==null?void 0:r.isElement(m)))==null||t?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(o.floating)),boundary:c,rootBoundary:u,strategy:l})),M=d==="floating"?{x:i,y:a,width:s.floating.width,height:s.floating.height}:s.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(o.floating)),E=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},A=gs(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:M,offsetParent:b,strategy:l}):M);return{top:(f.top-A.top+g.top)/E.y,bottom:(A.bottom-f.bottom+g.bottom)/E.y,left:(f.left-A.left+g.left)/E.x,right:(A.right-f.right+g.right)/E.x}}const u0=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:i,placement:a,rects:r,platform:s,elements:o,middlewareData:l}=e,{element:c,padding:u=0}=Qn(n,e)||{};if(c==null)return{};const d=ff(u),h={x:t,y:i},p=uc(a),g=cc(p),x=await s.getDimensions(c),m=p==="y",f=m?"top":"left",M=m?"bottom":"right",b=m?"clientHeight":"clientWidth",E=r.reference[g]+r.reference[p]-h[p]-r.floating[g],A=h[p]-r.reference[p],w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let C=w?w[b]:0;(!C||!await(s.isElement==null?void 0:s.isElement(w)))&&(C=o.floating[b]||r.floating[g]);const U=E/2-A/2,v=C/2-x[g]/2-1,y=mi(d[f],v),P=mi(d[M],v),I=y,N=C-x[g]-P,V=C/2-x[g]/2+U,W=qo(I,V,N),q=!l.arrow&&Ba(a)!=null&&V!==W&&r.reference[g]/2-(V<I?y:P)-x[g]/2<0,Z=q?V<I?V-I:V-N:0;return{[p]:h[p]+Z,data:{[p]:W,centerOffset:V-W-Z,...q&&{alignmentOffset:Z}},reset:q}}}),d0=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t,i;const{placement:a,middlewareData:r,rects:s,initialPlacement:o,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...m}=Qn(n,e);if((t=r.arrow)!=null&&t.alignmentOffset)return{};const f=ei(a),M=Cn(o),b=ei(o)===o,E=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=h||(b||!x?[ms(o)]:i0(o)),w=g!=="none";!h&&w&&A.push(...o0(o,x,g,E));const C=[o,...A],U=await or(e,m),v=[];let y=((i=r.flip)==null?void 0:i.overflows)||[];if(u&&v.push(U[f]),d){const V=n0(a,s,E);v.push(U[V[0]],U[V[1]])}if(y=[...y,{placement:a,overflows:v}],!v.every(V=>V<=0)){var P,I;const V=(((P=r.flip)==null?void 0:P.index)||0)+1,W=C[V];if(W&&(!(d==="alignment"?M!==Cn(W):!1)||y.every(k=>Cn(k.placement)===M?k.overflows[0]>0:!0)))return{data:{index:V,overflows:y},reset:{placement:W}};let q=(I=y.filter(Z=>Z.overflows[0]<=0).sort((Z,k)=>Z.overflows[1]-k.overflows[1])[0])==null?void 0:I.placement;if(!q)switch(p){case"bestFit":{var N;const Z=(N=y.filter(k=>{if(w){const ee=Cn(k.placement);return ee===M||ee==="y"}return!0}).map(k=>[k.placement,k.overflows.filter(ee=>ee>0).reduce((ee,ae)=>ee+ae,0)]).sort((k,ee)=>k[1]-ee[1])[0])==null?void 0:N[0];Z&&(q=Z);break}case"initialPlacement":q=o;break}if(a!==q)return{reset:{placement:q}}}return{}}}};function hu(n,e){return{top:n.top-e.height,right:n.right-e.width,bottom:n.bottom-e.height,left:n.left-e.width}}function pu(n){return Jm.some(e=>n[e]>=0)}const f0=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(e){const{rects:t}=e,{strategy:i="referenceHidden",...a}=Qn(n,e);switch(i){case"referenceHidden":{const r=await or(e,{...a,elementContext:"reference"}),s=hu(r,t.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:pu(s)}}}case"escaped":{const r=await or(e,{...a,altBoundary:!0}),s=hu(r,t.floating);return{data:{escapedOffsets:s,escaped:pu(s)}}}default:return{}}}}},hf=new Set(["left","top"]);async function h0(n,e){const{placement:t,platform:i,elements:a}=n,r=await(i.isRTL==null?void 0:i.isRTL(a.floating)),s=ei(t),o=Ba(t),l=Cn(t)==="y",c=hf.has(s)?-1:1,u=r&&l?-1:1,d=Qn(e,n);let{mainAxis:h,crossAxis:p,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return o&&typeof g=="number"&&(p=o==="end"?g*-1:g),l?{x:p*u,y:h*c}:{x:h*c,y:p*u}}const p0=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){var t,i;const{x:a,y:r,placement:s,middlewareData:o}=e,l=await h0(e,n);return s===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:a+l.x,y:r+l.y,data:{...l,placement:s}}}}},m0=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:i,placement:a}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:o={fn:m=>{let{x:f,y:M}=m;return{x:f,y:M}}},...l}=Qn(n,e),c={x:t,y:i},u=await or(e,l),d=Cn(ei(a)),h=lc(d);let p=c[h],g=c[d];if(r){const m=h==="y"?"top":"left",f=h==="y"?"bottom":"right",M=p+u[m],b=p-u[f];p=qo(M,p,b)}if(s){const m=d==="y"?"top":"left",f=d==="y"?"bottom":"right",M=g+u[m],b=g-u[f];g=qo(M,g,b)}const x=o.fn({...e,[h]:p,[d]:g});return{...x,data:{x:x.x-t,y:x.y-i,enabled:{[h]:r,[d]:s}}}}}},g0=function(n){return n===void 0&&(n={}),{options:n,fn(e){const{x:t,y:i,placement:a,rects:r,middlewareData:s}=e,{offset:o=0,mainAxis:l=!0,crossAxis:c=!0}=Qn(n,e),u={x:t,y:i},d=Cn(a),h=lc(d);let p=u[h],g=u[d];const x=Qn(o,e),m=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(l){const b=h==="y"?"height":"width",E=r.reference[h]-r.floating[b]+m.mainAxis,A=r.reference[h]+r.reference[b]-m.mainAxis;p<E?p=E:p>A&&(p=A)}if(c){var f,M;const b=h==="y"?"width":"height",E=hf.has(ei(a)),A=r.reference[d]-r.floating[b]+(E&&((f=s.offset)==null?void 0:f[d])||0)+(E?0:m.crossAxis),w=r.reference[d]+r.reference[b]+(E?0:((M=s.offset)==null?void 0:M[d])||0)-(E?m.crossAxis:0);g<A?g=A:g>w&&(g=w)}return{[h]:p,[d]:g}}}},x0=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(e){var t,i;const{placement:a,rects:r,platform:s,elements:o}=e,{apply:l=()=>{},...c}=Qn(n,e),u=await or(e,c),d=ei(a),h=Ba(a),p=Cn(a)==="y",{width:g,height:x}=r.floating;let m,f;d==="top"||d==="bottom"?(m=d,f=h===(await(s.isRTL==null?void 0:s.isRTL(o.floating))?"start":"end")?"left":"right"):(f=d,m=h==="end"?"top":"bottom");const M=x-u.top-u.bottom,b=g-u.left-u.right,E=mi(x-u[m],M),A=mi(g-u[f],b),w=!e.middlewareData.shift;let C=E,U=A;if((t=e.middlewareData.shift)!=null&&t.enabled.x&&(U=b),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(C=M),w&&!h){const y=tn(u.left,0),P=tn(u.right,0),I=tn(u.top,0),N=tn(u.bottom,0);p?U=g-2*(y!==0||P!==0?y+P:tn(u.left,u.right)):C=x-2*(I!==0||N!==0?I+N:tn(u.top,u.bottom))}await l({...e,availableWidth:U,availableHeight:C});const v=await s.getDimensions(o.floating);return g!==v.width||x!==v.height?{reset:{rects:!0}}:{}}}};function As(){return typeof window<"u"}function Xi(n){return dc(n)?(n.nodeName||"").toLowerCase():"#document"}function an(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Fn(n){var e;return(e=(dc(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function dc(n){return As()?n instanceof Node||n instanceof an(n).Node:!1}function Mn(n){return As()?n instanceof Element||n instanceof an(n).Element:!1}function Ln(n){return As()?n instanceof HTMLElement||n instanceof an(n).HTMLElement:!1}function mu(n){return!As()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof an(n).ShadowRoot}const _0=new Set(["inline","contents"]);function vr(n){const{overflow:e,overflowX:t,overflowY:i,display:a}=Sn(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!_0.has(a)}const v0=new Set(["table","td","th"]);function y0(n){return v0.has(Xi(n))}const b0=[":popover-open",":modal"];function Cs(n){return b0.some(e=>{try{return n.matches(e)}catch{return!1}})}const M0=["transform","translate","scale","rotate","perspective"],S0=["transform","translate","scale","rotate","perspective","filter"],E0=["paint","layout","strict","content"];function fc(n){const e=hc(),t=Mn(n)?Sn(n):n;return M0.some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||S0.some(i=>(t.willChange||"").includes(i))||E0.some(i=>(t.contain||"").includes(i))}function w0(n){let e=gi(n);for(;Ln(e)&&!Pa(e);){if(fc(e))return e;if(Cs(e))return null;e=gi(e)}return null}function hc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const T0=new Set(["html","body","#document"]);function Pa(n){return T0.has(Xi(n))}function Sn(n){return an(n).getComputedStyle(n)}function Rs(n){return Mn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function gi(n){if(Xi(n)==="html")return n;const e=n.assignedSlot||n.parentNode||mu(n)&&n.host||Fn(n);return mu(e)?e.host:e}function pf(n){const e=gi(n);return Pa(e)?n.ownerDocument?n.ownerDocument.body:n.body:Ln(e)&&vr(e)?e:pf(e)}function lr(n,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const a=pf(n),r=a===((i=n.ownerDocument)==null?void 0:i.body),s=an(a);if(r){const o=Xo(s);return e.concat(s,s.visualViewport||[],vr(a)?a:[],o&&t?lr(o):[])}return e.concat(a,lr(a,[],t))}function Xo(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function mf(n){const e=Sn(n);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const a=Ln(n),r=a?n.offsetWidth:t,s=a?n.offsetHeight:i,o=ps(t)!==r||ps(i)!==s;return o&&(t=r,i=s),{width:t,height:i,$:o}}function pc(n){return Mn(n)?n:n.contextElement}function Sa(n){const e=pc(n);if(!Ln(e))return Dn(1);const t=e.getBoundingClientRect(),{width:i,height:a,$:r}=mf(e);let s=(r?ps(t.width):t.width)/i,o=(r?ps(t.height):t.height)/a;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const A0=Dn(0);function gf(n){const e=an(n);return!hc()||!e.visualViewport?A0:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function C0(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==an(n)?!1:e}function Hi(n,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const a=n.getBoundingClientRect(),r=pc(n);let s=Dn(1);e&&(i?Mn(i)&&(s=Sa(i)):s=Sa(n));const o=C0(r,t,i)?gf(r):Dn(0);let l=(a.left+o.x)/s.x,c=(a.top+o.y)/s.y,u=a.width/s.x,d=a.height/s.y;if(r){const h=an(r),p=i&&Mn(i)?an(i):i;let g=h,x=Xo(g);for(;x&&i&&p!==g;){const m=Sa(x),f=x.getBoundingClientRect(),M=Sn(x),b=f.left+(x.clientLeft+parseFloat(M.paddingLeft))*m.x,E=f.top+(x.clientTop+parseFloat(M.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,d*=m.y,l+=b,c+=E,g=an(x),x=Xo(g)}}return gs({width:u,height:d,x:l,y:c})}function Ds(n,e){const t=Rs(n).scrollLeft;return e?e.left+t:Hi(Fn(n)).left+t}function xf(n,e){const t=n.getBoundingClientRect(),i=t.left+e.scrollLeft-Ds(n,t),a=t.top+e.scrollTop;return{x:i,y:a}}function R0(n){let{elements:e,rect:t,offsetParent:i,strategy:a}=n;const r=a==="fixed",s=Fn(i),o=e?Cs(e.floating):!1;if(i===s||o&&r)return t;let l={scrollLeft:0,scrollTop:0},c=Dn(1);const u=Dn(0),d=Ln(i);if((d||!d&&!r)&&((Xi(i)!=="body"||vr(s))&&(l=Rs(i)),Ln(i))){const p=Hi(i);c=Sa(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}const h=s&&!d&&!r?xf(s,l):Dn(0);return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:t.y*c.y-l.scrollTop*c.y+u.y+h.y}}function D0(n){return Array.from(n.getClientRects())}function P0(n){const e=Fn(n),t=Rs(n),i=n.ownerDocument.body,a=tn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=tn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-t.scrollLeft+Ds(n);const o=-t.scrollTop;return Sn(i).direction==="rtl"&&(s+=tn(e.clientWidth,i.clientWidth)-a),{width:a,height:r,x:s,y:o}}const gu=25;function L0(n,e){const t=an(n),i=Fn(n),a=t.visualViewport;let r=i.clientWidth,s=i.clientHeight,o=0,l=0;if(a){r=a.width,s=a.height;const u=hc();(!u||u&&e==="fixed")&&(o=a.offsetLeft,l=a.offsetTop)}const c=Ds(i);if(c<=0){const u=i.ownerDocument,d=u.body,h=getComputedStyle(d),p=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,g=Math.abs(i.clientWidth-d.clientWidth-p);g<=gu&&(r-=g)}else c<=gu&&(r+=c);return{width:r,height:s,x:o,y:l}}const I0=new Set(["absolute","fixed"]);function U0(n,e){const t=Hi(n,!0,e==="fixed"),i=t.top+n.clientTop,a=t.left+n.clientLeft,r=Ln(n)?Sa(n):Dn(1),s=n.clientWidth*r.x,o=n.clientHeight*r.y,l=a*r.x,c=i*r.y;return{width:s,height:o,x:l,y:c}}function xu(n,e,t){let i;if(e==="viewport")i=L0(n,t);else if(e==="document")i=P0(Fn(n));else if(Mn(e))i=U0(e,t);else{const a=gf(n);i={x:e.x-a.x,y:e.y-a.y,width:e.width,height:e.height}}return gs(i)}function _f(n,e){const t=gi(n);return t===e||!Mn(t)||Pa(t)?!1:Sn(t).position==="fixed"||_f(t,e)}function N0(n,e){const t=e.get(n);if(t)return t;let i=lr(n,[],!1).filter(o=>Mn(o)&&Xi(o)!=="body"),a=null;const r=Sn(n).position==="fixed";let s=r?gi(n):n;for(;Mn(s)&&!Pa(s);){const o=Sn(s),l=fc(s);!l&&o.position==="fixed"&&(a=null),(r?!l&&!a:!l&&o.position==="static"&&!!a&&I0.has(a.position)||vr(s)&&!l&&_f(n,s))?i=i.filter(u=>u!==s):a=o,s=gi(s)}return e.set(n,i),i}function F0(n){let{element:e,boundary:t,rootBoundary:i,strategy:a}=n;const s=[...t==="clippingAncestors"?Cs(e)?[]:N0(e,this._c):[].concat(t),i],o=s[0],l=s.reduce((c,u)=>{const d=xu(e,u,a);return c.top=tn(d.top,c.top),c.right=mi(d.right,c.right),c.bottom=mi(d.bottom,c.bottom),c.left=tn(d.left,c.left),c},xu(e,o,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function O0(n){const{width:e,height:t}=mf(n);return{width:e,height:t}}function B0(n,e,t){const i=Ln(e),a=Fn(e),r=t==="fixed",s=Hi(n,!0,r,e);let o={scrollLeft:0,scrollTop:0};const l=Dn(0);function c(){l.x=Ds(a)}if(i||!i&&!r)if((Xi(e)!=="body"||vr(a))&&(o=Rs(e)),i){const p=Hi(e,!0,r,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else a&&c();r&&!i&&a&&c();const u=a&&!i&&!r?xf(a,o):Dn(0),d=s.left+o.scrollLeft-l.x-u.x,h=s.top+o.scrollTop-l.y-u.y;return{x:d,y:h,width:s.width,height:s.height}}function eo(n){return Sn(n).position==="static"}function _u(n,e){if(!Ln(n)||Sn(n).position==="fixed")return null;if(e)return e(n);let t=n.offsetParent;return Fn(n)===t&&(t=t.ownerDocument.body),t}function vf(n,e){const t=an(n);if(Cs(n))return t;if(!Ln(n)){let a=gi(n);for(;a&&!Pa(a);){if(Mn(a)&&!eo(a))return a;a=gi(a)}return t}let i=_u(n,e);for(;i&&y0(i)&&eo(i);)i=_u(i,e);return i&&Pa(i)&&eo(i)&&!fc(i)?t:i||w0(n)||t}const k0=async function(n){const e=this.getOffsetParent||vf,t=this.getDimensions,i=await t(n.floating);return{reference:B0(n.reference,await e(n.floating),n.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function z0(n){return Sn(n).direction==="rtl"}const V0={convertOffsetParentRelativeRectToViewportRelativeRect:R0,getDocumentElement:Fn,getClippingRect:F0,getOffsetParent:vf,getElementRects:k0,getClientRects:D0,getDimensions:O0,getScale:Sa,isElement:Mn,isRTL:z0};function yf(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function H0(n,e){let t=null,i;const a=Fn(n);function r(){var o;clearTimeout(i),(o=t)==null||o.disconnect(),t=null}function s(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),r();const c=n.getBoundingClientRect(),{left:u,top:d,width:h,height:p}=c;if(o||e(),!h||!p)return;const g=Cr(d),x=Cr(a.clientWidth-(u+h)),m=Cr(a.clientHeight-(d+p)),f=Cr(u),b={rootMargin:-g+"px "+-x+"px "+-m+"px "+-f+"px",threshold:tn(0,mi(1,l))||1};let E=!0;function A(w){const C=w[0].intersectionRatio;if(C!==l){if(!E)return s();C?s(!1,C):i=setTimeout(()=>{s(!1,1e-7)},1e3)}C===1&&!yf(c,n.getBoundingClientRect())&&s(),E=!1}try{t=new IntersectionObserver(A,{...b,root:a.ownerDocument})}catch{t=new IntersectionObserver(A,b)}t.observe(n)}return s(!0),r}function G0(n,e,t,i){i===void 0&&(i={});const{ancestorScroll:a=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=pc(n),u=a||r?[...c?lr(c):[],...lr(e)]:[];u.forEach(f=>{a&&f.addEventListener("scroll",t,{passive:!0}),r&&f.addEventListener("resize",t)});const d=c&&o?H0(c,t):null;let h=-1,p=null;s&&(p=new ResizeObserver(f=>{let[M]=f;M&&M.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(e)})),t()}),c&&!l&&p.observe(c),p.observe(e));let g,x=l?Hi(n):null;l&&m();function m(){const f=Hi(n);x&&!yf(x,f)&&t(),x=f,g=requestAnimationFrame(m)}return t(),()=>{var f;u.forEach(M=>{a&&M.removeEventListener("scroll",t),r&&M.removeEventListener("resize",t)}),d?.(),(f=p)==null||f.disconnect(),p=null,l&&cancelAnimationFrame(g)}}const W0=p0,q0=m0,vu=d0,$0=x0,X0=f0,Y0=u0,j0=g0,K0=(n,e,t)=>{const i=new Map,a={platform:V0,...t},r={...a.platform,_c:i};return c0(n,e,{...a,platform:r})};function Z0(n){return n!=null&&typeof n=="object"&&"$el"in n}function Yo(n){if(Z0(n)){const e=n.$el;return dc(e)&&Xi(e)==="#comment"?null:e}return n}function pa(n){return typeof n=="function"?n():R(n)}function J0(n){return{name:"arrow",options:n,fn(e){const t=Yo(pa(n.element));return t==null?{}:Y0({element:t,padding:n.padding}).fn(e)}}}function bf(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function yu(n,e){const t=bf(n);return Math.round(e*t)/t}function Q0(n,e,t){t===void 0&&(t={});const i=t.whileElementsMounted,a=J(()=>{var C;return(C=pa(t.open))!=null?C:!0}),r=J(()=>pa(t.middleware)),s=J(()=>{var C;return(C=pa(t.placement))!=null?C:"bottom"}),o=J(()=>{var C;return(C=pa(t.strategy))!=null?C:"absolute"}),l=J(()=>{var C;return(C=pa(t.transform))!=null?C:!0}),c=J(()=>Yo(n.value)),u=J(()=>Yo(e.value)),d=Pe(0),h=Pe(0),p=Pe(o.value),g=Pe(s.value),x=vh({}),m=Pe(!1),f=J(()=>{const C={position:p.value,left:"0",top:"0"};if(!u.value)return C;const U=yu(u.value,d.value),v=yu(u.value,h.value);return l.value?{...C,transform:"translate("+U+"px, "+v+"px)",...bf(u.value)>=1.5&&{willChange:"transform"}}:{position:p.value,left:U+"px",top:v+"px"}});let M;function b(){if(c.value==null||u.value==null)return;const C=a.value;K0(c.value,u.value,{middleware:r.value,placement:s.value,strategy:o.value}).then(U=>{d.value=U.x,h.value=U.y,p.value=U.strategy,g.value=U.placement,x.value=U.middlewareData,m.value=C!==!1})}function E(){typeof M=="function"&&(M(),M=void 0)}function A(){if(E(),i===void 0){b();return}if(c.value!=null&&u.value!=null){M=i(c.value,u.value,b);return}}function w(){a.value||(m.value=!1)}return Yt([r,s,o,a],b,{flush:"sync"}),Yt([c,u],A,{flush:"sync"}),Yt(a,w,{flush:"sync"}),yh()&&bh(E),{x:Zi(d),y:Zi(h),strategy:Zi(p),placement:Zi(g),middlewareData:Zi(x),isPositioned:Zi(m),floatingStyles:f,update:b}}const eg={side:"bottom",sideOffset:0,sideFlip:!0,align:"center",alignOffset:0,alignFlip:!0,arrowPadding:0,avoidCollisions:!0,collisionBoundary:()=>[],collisionPadding:0,sticky:"partial",hideWhenDetached:!1,positionStrategy:"fixed",updatePositionStrategy:"optimized",prioritizePosition:!1},[tg,ng]=qi("PopperContent");var ig=Ee({inheritAttrs:!1,__name:"PopperContent",props:Mh({side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},{...eg}),emits:["placed"],setup(n,{emit:e}){const t=n,i=e,a=df(),{forwardRef:r,currentElement:s}=bt(),o=Pe(),l=Pe(),{width:c,height:u}=rm(l),d=J(()=>t.side+(t.align!=="center"?`-${t.align}`:"")),h=J(()=>typeof t.collisionPadding=="number"?t.collisionPadding:{top:0,right:0,bottom:0,left:0,...t.collisionPadding}),p=J(()=>Array.isArray(t.collisionBoundary)?t.collisionBoundary:[t.collisionBoundary]),g=J(()=>({padding:h.value,boundary:p.value.filter(Km),altBoundary:p.value.length>0})),x=J(()=>({mainAxis:t.sideFlip,crossAxis:t.alignFlip})),m=Sh(()=>[W0({mainAxis:t.sideOffset+u.value,alignmentAxis:t.alignOffset}),t.prioritizePosition&&t.avoidCollisions&&vu({...g.value,...x.value}),t.avoidCollisions&&q0({mainAxis:!0,crossAxis:!!t.prioritizePosition,limiter:t.sticky==="partial"?j0():void 0,...g.value}),!t.prioritizePosition&&t.avoidCollisions&&vu({...g.value,...x.value}),$0({...g.value,apply:({elements:I,rects:N,availableWidth:V,availableHeight:W})=>{const{width:q,height:Z}=N.reference,k=I.floating.style;k.setProperty("--reka-popper-available-width",`${V}px`),k.setProperty("--reka-popper-available-height",`${W}px`),k.setProperty("--reka-popper-anchor-width",`${q}px`),k.setProperty("--reka-popper-anchor-height",`${Z}px`)}}),l.value&&J0({element:l.value,padding:t.arrowPadding}),Zm({arrowWidth:c.value,arrowHeight:u.value}),t.hideWhenDetached&&X0({strategy:"referenceHidden",...g.value})]),f=J(()=>t.reference??a.anchor.value),{floatingStyles:M,placement:b,isPositioned:E,middlewareData:A}=Q0(f,o,{strategy:t.positionStrategy,placement:d,whileElementsMounted:(...I)=>G0(...I,{layoutShift:!t.disableUpdateOnLayoutShift,animationFrame:t.updatePositionStrategy==="always"}),middleware:m}),w=J(()=>Wo(b.value)[0]),C=J(()=>Wo(b.value)[1]);Ad(()=>{E.value&&i("placed")});const U=J(()=>A.value.arrow?.centerOffset!==0),v=Pe("");ki(()=>{s.value&&(v.value=window.getComputedStyle(s.value).zIndex)});const y=J(()=>A.value.arrow?.x??0),P=J(()=>A.value.arrow?.y??0);return ng({placedSide:w,onArrowChange:I=>l.value=I,arrowX:y,arrowY:P,shouldHideArrow:U}),(I,N)=>(ie(),Bt("div",{ref_key:"floatingRef",ref:o,"data-reka-popper-content-wrapper":"",style:Cd({...R(M),transform:R(E)?R(M).transform:"translate(0, -200%)",minWidth:"max-content",zIndex:v.value,"--reka-popper-transform-origin":[R(A).transformOrigin?.x,R(A).transformOrigin?.y].join(" "),...R(A).hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}})},[qe(R(tt),nt({ref:R(r)},I.$attrs,{"as-child":t.asChild,as:I.as,"data-side":w.value,"data-align":C.value,style:{animation:R(E)?void 0:"none"}}),{default:te(()=>[ve(I.$slots,"default")]),_:3},16,["as-child","as","data-side","data-align","style"])],4))}}),mc=ig;const ag={top:"bottom",right:"left",bottom:"top",left:"right"};var rg=Ee({inheritAttrs:!1,__name:"PopperArrow",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const{forwardRef:e}=bt(),t=tg(),i=J(()=>ag[t.placedSide.value]);return(a,r)=>(ie(),Bt("span",{ref:s=>{R(t).onArrowChange(s)},style:Cd({position:"absolute",left:R(t).arrowX?.value?`${R(t).arrowX?.value}px`:void 0,top:R(t).arrowY?.value?`${R(t).arrowY?.value}px`:void 0,[i.value]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[R(t).placedSide.value],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[R(t).placedSide.value],visibility:R(t).shouldHideArrow.value?"hidden":void 0})},[qe(jm,nt(a.$attrs,{ref:R(e),style:{display:"block"},as:a.as,"as-child":a.asChild,rounded:a.rounded,width:a.width,height:a.height}),{default:te(()=>[ve(a.$slots,"default")]),_:3},16,["as","as-child","rounded","width","height"])],4))}}),gc=rg;const[Yi,sg]=qi("PopoverRoot");var og=Ee({__name:"PopoverRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},modal:{type:Boolean,required:!1,default:!1}},emits:["update:open"],setup(n,{emit:e}){const t=n,i=e,{modal:a}=Ms(t),r=zi(t,"open",i,{defaultValue:t.defaultOpen,passive:t.open===void 0}),s=Pe(),o=Pe(!1);return sg({contentId:"",triggerId:"",modal:a,open:r,onOpenChange:l=>{r.value=l},onOpenToggle:()=>{r.value=!r.value},triggerElement:s,hasCustomAnchor:o}),(l,c)=>(ie(),ue(R(oc),null,{default:te(()=>[ve(l.$slots,"default",{open:R(r),close:()=>r.value=!1})]),_:3}))}}),lg=og,cg=Ee({__name:"PopoverAnchor",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const e=n;bt();const t=Yi();return Eh(()=>{t.hasCustomAnchor.value=!0}),gr(()=>{t.hasCustomAnchor.value=!1}),(i,a)=>(ie(),ue(R(Ts),At(Ct(e)),{default:te(()=>[ve(i.$slots,"default")]),_:3},16))}}),ug=cg,dg=Ee({__name:"PopoverArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const e=n;return bt(),(t,i)=>(ie(),ue(R(gc),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),fg=dg,hg=Ee({__name:"PopoverClose",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n;bt();const t=Yi();return(i,a)=>(ie(),ue(R(tt),{type:i.as==="button"?"button":void 0,as:i.as,"as-child":e.asChild,onClick:a[0]||(a[0]=r=>R(t).onOpenChange(!1))},{default:te(()=>[ve(i.$slots,"default")]),_:3},8,["type","as","as-child"]))}}),pg=hg,mg=Ee({__name:"PopoverContentImpl",props:{trapFocus:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,a=Hl(wh(t,"trapFocus","disableOutsidePointerEvents")),{forwardRef:r}=bt(),s=Yi();return Xp(),(o,l)=>(ie(),ue(R(um),{"as-child":"",loop:"",trapped:o.trapFocus,onMountAutoFocus:l[5]||(l[5]=c=>i("openAutoFocus",c)),onUnmountAutoFocus:l[6]||(l[6]=c=>i("closeAutoFocus",c))},{default:te(()=>[qe(R(Gl),{"as-child":"","disable-outside-pointer-events":o.disableOutsidePointerEvents,onPointerDownOutside:l[0]||(l[0]=c=>i("pointerDownOutside",c)),onInteractOutside:l[1]||(l[1]=c=>i("interactOutside",c)),onEscapeKeyDown:l[2]||(l[2]=c=>i("escapeKeyDown",c)),onFocusOutside:l[3]||(l[3]=c=>i("focusOutside",c)),onDismiss:l[4]||(l[4]=c=>R(s).onOpenChange(!1))},{default:te(()=>[qe(R(mc),nt(R(a),{id:R(s).contentId,ref:R(r),"data-state":R(s).open.value?"open":"closed","aria-labelledby":R(s).triggerId,style:{"--reka-popover-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-popover-content-available-width":"var(--reka-popper-available-width)","--reka-popover-content-available-height":"var(--reka-popper-available-height)","--reka-popover-trigger-width":"var(--reka-popper-anchor-width)","--reka-popover-trigger-height":"var(--reka-popper-anchor-height)"},role:"dialog"}),{default:te(()=>[ve(o.$slots,"default")]),_:3},16,["id","data-state","aria-labelledby"])]),_:3},8,["disable-outside-pointer-events"])]),_:3},8,["trapped"]))}}),Mf=mg,gg=Ee({__name:"PopoverContentModal",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,a=Yi(),r=Pe(!1);zh(!0);const s=vi(t,i),{forwardRef:o,currentElement:l}=bt();return am(l),(c,u)=>(ie(),ue(Mf,nt(R(s),{ref:R(o),"trap-focus":R(a).open.value,"disable-outside-pointer-events":"",onCloseAutoFocus:u[0]||(u[0]=rr(d=>{i("closeAutoFocus",d),r.value||R(a).triggerElement.value?.focus()},["prevent"])),onPointerDownOutside:u[1]||(u[1]=d=>{i("pointerDownOutside",d);const h=d.detail.originalEvent,p=h.button===0&&h.ctrlKey===!0,g=h.button===2||p;r.value=g}),onFocusOutside:u[2]||(u[2]=rr(()=>{},["prevent"]))}),{default:te(()=>[ve(c.$slots,"default")]),_:3},16,["trap-focus"]))}}),xg=gg,_g=Ee({__name:"PopoverContentNonModal",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,a=Yi(),r=Pe(!1),s=Pe(!1),o=vi(t,i);return(l,c)=>(ie(),ue(Mf,nt(R(o),{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:c[0]||(c[0]=u=>{i("closeAutoFocus",u),u.defaultPrevented||(r.value||R(a).triggerElement.value?.focus(),u.preventDefault()),r.value=!1,s.value=!1}),onInteractOutside:c[1]||(c[1]=async u=>{i("interactOutside",u),u.defaultPrevented||(r.value=!0,u.detail.originalEvent.type==="pointerdown"&&(s.value=!0));const d=u.target;R(a).triggerElement.value?.contains(d)&&u.preventDefault(),u.detail.originalEvent.type==="focusin"&&s.value&&u.preventDefault()})}),{default:te(()=>[ve(l.$slots,"default")]),_:3},16))}}),vg=_g,yg=Ee({__name:"PopoverContent",props:{forceMount:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,a=Yi(),r=vi(t,i),{forwardRef:s}=bt();return a.contentId||=rc(void 0,"reka-popover-content"),(o,l)=>(ie(),ue(R(Wl),{present:o.forceMount||R(a).open.value},{default:te(()=>[R(a).modal.value?(ie(),ue(xg,nt({key:0},R(r),{ref:R(s)}),{default:te(()=>[ve(o.$slots,"default")]),_:3},16)):(ie(),ue(vg,nt({key:1},R(r),{ref:R(s)}),{default:te(()=>[ve(o.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),bg=yg,Mg=Ee({__name:"PopoverPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(ql),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),Sg=Mg,Eg=Ee({__name:"PopoverTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=Yi(),{forwardRef:i,currentElement:a}=bt();return t.triggerId||=rc(void 0,"reka-popover-trigger"),Nn(()=>{t.triggerElement.value=a.value}),(r,s)=>(ie(),ue(Rd(R(t).hasCustomAnchor.value?R(tt):R(Ts)),{"as-child":""},{default:te(()=>[qe(R(tt),{id:R(t).triggerId,ref:R(i),type:r.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":R(t).open.value,"aria-controls":R(t).contentId,"data-state":R(t).open.value?"open":"closed",as:r.as,"as-child":e.asChild,onClick:R(t).onOpenToggle},{default:te(()=>[ve(r.$slots,"default")]),_:3},8,["id","type","aria-expanded","aria-controls","data-state","as","as-child","onClick"])]),_:3}))}}),wg=Eg;function Tg(n){const e=J(()=>n.start.value?!!n.isDateDisabled(n.start.value):!1),t=J(()=>n.end.value?!!n.isDateDisabled(n.end.value):!1),i=J(()=>e.value||t.value?!1:!!(n.start.value&&n.end.value&&Bi(n.end.value,n.start.value))),a=h=>n.start.value?Pt(n.start.value,h):!1,r=h=>n.end.value?Pt(n.end.value,h):!1,s=h=>n.start.value&&Pt(n.start.value,h)||n.end.value&&Pt(n.end.value,h)?!0:n.end.value&&n.start.value?Ks(h,n.start.value,n.end.value):!1,o=h=>{if(n.isDateDisabled(h))return!0;if(n.maximumDays?.value){if(n.start.value&&n.end.value){if(n.fixedDate.value){const p=Go(n.start.value,n.end.value).length;if(p<=n.maximumDays.value){const g=n.maximumDays.value-p-1,x=n.start.value.subtract({days:g}),m=n.end.value.add({days:g});return!Ks(h,x,m)}}return!1}if(n.start.value){const p=n.start.value.add({days:n.maximumDays.value}),g=n.start.value.subtract({days:n.maximumDays.value});return!Ks(h,g,p)}}return!n.start.value||n.end.value||Pt(n.start.value,h),!1},l=h=>!!n.isDateHighlightable?.(h),c=J(()=>{if(n.start.value&&n.end.value&&!n.fixedDate.value||!n.start.value||!n.focusedValue.value)return null;const h=Bi(n.start.value,n.focusedValue.value),p=h?n.start.value:n.focusedValue.value,g=h?n.focusedValue.value:n.start.value;if(Pt(p,g))return{start:p,end:g};if(n.maximumDays?.value&&!n.end.value){const m=h?p.add({days:n.maximumDays.value}):p.subtract({days:n.maximumDays.value});return{start:p,end:m}}return Wp(p,g,n.allowNonContiguousRanges.value?()=>!1:n.isDateUnavailable,o,n.isDateHighlightable)?{start:p,end:g}:null});return{isInvalid:i,isSelected:s,isDateHighlightable:l,highlightedRange:c,isSelectionStart:a,isSelectionEnd:r,isHighlightedStart:h=>!c.value||!c.value.start?!1:Pt(c.value.start,h),isHighlightedEnd:h=>!c.value||!c.value.end?!1:Pt(c.value.end,h),isDateDisabled:o}}const Ag={style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute","white-space":"nowrap",width:"1px"}},Cg={role:"heading","aria-level":"2"},[ka,Rg]=qi("RangeCalendarRoot");var Dg=Ee({__name:"RangeCalendarRoot",props:{defaultPlaceholder:{type:null,required:!1},defaultValue:{type:Object,required:!1,default:()=>({start:void 0,end:void 0})},modelValue:{type:[Object,null],required:!1},placeholder:{type:null,required:!1,default:void 0},allowNonContiguousRanges:{type:Boolean,required:!1,default:!1},pagedNavigation:{type:Boolean,required:!1,default:!1},preventDeselect:{type:Boolean,required:!1,default:!1},maximumDays:{type:Number,required:!1,default:void 0},weekStartsOn:{type:Number,required:!1,default:0},weekdayFormat:{type:String,required:!1,default:"narrow"},calendarLabel:{type:String,required:!1},fixedWeeks:{type:Boolean,required:!1,default:!1},maxValue:{type:null,required:!1},minValue:{type:null,required:!1},locale:{type:String,required:!1},numberOfMonths:{type:Number,required:!1,default:1},disabled:{type:Boolean,required:!1,default:!1},readonly:{type:Boolean,required:!1,default:!1},initialFocus:{type:Boolean,required:!1,default:!1},isDateDisabled:{type:Function,required:!1,default:void 0},isDateUnavailable:{type:Function,required:!1,default:void 0},isDateHighlightable:{type:Function,required:!1,default:void 0},dir:{type:String,required:!1},nextPage:{type:Function,required:!1},prevPage:{type:Function,required:!1},disableDaysOutsideCurrentView:{type:Boolean,required:!1,default:!1},fixedDate:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},emits:["update:modelValue","update:validModelValue","update:placeholder","update:startValue"],setup(n,{emit:e}){const t=n,i=e,{disabled:a,readonly:r,initialFocus:s,pagedNavigation:o,weekStartsOn:l,weekdayFormat:c,fixedWeeks:u,numberOfMonths:d,preventDeselect:h,isDateUnavailable:p,isDateHighlightable:g,isDateDisabled:x,calendarLabel:m,maxValue:f,minValue:M,dir:b,locale:E,nextPage:A,prevPage:w,allowNonContiguousRanges:C,disableDaysOutsideCurrentView:U,fixedDate:v,maximumDays:y}=Ms(t),{primitiveElement:P,currentElement:I}=Ss(),N=sf(b),V=cf(E),W=Pe(),q=Pe(),Z=Pe(!1),k=zi(t,"modelValue",i,{defaultValue:t.defaultValue??{start:void 0,end:void 0},passive:t.modelValue===void 0}),ee=Pe(k.value);Yt(ee,X=>{i("update:validModelValue",X)});const ae=af({defaultPlaceholder:t.placeholder,defaultValue:k.value.start,locale:t.locale}),xe=Pe(k.value.start),He=Pe(k.value.end),Je=zi(t,"placeholder",i,{defaultValue:t.defaultPlaceholder??ae.copy(),passive:t.placeholder===void 0});function st(X){Je.value=X.copy()}const{fullCalendarLabel:it,headingValue:Y,isDateDisabled:Q,isDateUnavailable:me,isNextButtonDisabled:Ne,isPrevButtonDisabled:we,grid:$e,weekdays:Be,isOutsideVisibleView:ke,nextPage:ot,prevPage:D,formatter:Ke}=uf({locale:V,placeholder:Je,weekStartsOn:l,fixedWeeks:u,numberOfMonths:d,minValue:M,maxValue:f,disabled:a,weekdayFormat:c,pagedNavigation:o,isDateDisabled:x.value,isDateUnavailable:p.value,calendarLabel:m,nextPage:A,prevPage:w}),{isInvalid:je,isSelected:ct,isDateHighlightable:ye,highlightedRange:gt,isSelectionStart:Ae,isSelectionEnd:ze,isHighlightedStart:T,isHighlightedEnd:_,isDateDisabled:z}=Tg({start:xe,end:He,isDateDisabled:Q,isDateUnavailable:me,isDateHighlightable:g.value,focusedValue:q,allowNonContiguousRanges:C,fixedDate:v,maximumDays:y});Yt(k,(X,H)=>{(!H?.start&&X?.start||!X||!X.start||xe.value&&!ci(X.start,xe.value))&&(xe.value=X?.start?.copy?.()),(!H?.end&&X.end||!X||!X.end||He.value&&!ci(X.end,He.value))&&(He.value=X?.end?.copy?.())}),Yt(xe,X=>{X&&!ci(X,Je.value)&&st(X),i("update:startValue",X)}),Yt([xe,He],([X,H])=>{const be=k.value;be&&be.start&&be.end&&X&&H&&ci(be.start,X)&&ci(be.end,H)||(Z.value=!0,H&&X?(Bi(H,X)?k.value={start:H.copy(),end:X.copy()}:k.value={start:X.copy(),end:H.copy()},Z.value=!1,ee.value={start:k.value.start?.copy(),end:k.value.end?.copy()}):X?k.value={start:X.copy(),end:void 0}:k.value={start:H?.copy(),end:void 0})});const j=sc();return ls("keydown",X=>{X.key===j.ESCAPE&&Z.value&&(xe.value=ee.value.start?.copy(),He.value=ee.value.end?.copy())}),Rg({isDateUnavailable:me,isDateHighlightable:ye,startValue:xe,endValue:He,formatter:Ke,modelValue:k,placeholder:Je,disabled:a,initialFocus:s,pagedNavigation:o,grid:$e,weekDays:Be,weekStartsOn:l,weekdayFormat:c,fixedWeeks:u,numberOfMonths:d,readonly:r,preventDeselect:h,fullCalendarLabel:it,headingValue:Y,isInvalid:je,isDateDisabled:z,allowNonContiguousRanges:C,highlightedRange:gt,focusedValue:q,lastPressedDateValue:W,isSelected:ct,isSelectionEnd:ze,isSelectionStart:Ae,isNextButtonDisabled:Ne,isPrevButtonDisabled:we,isOutsideVisibleView:ke,nextPage:ot,prevPage:D,parentElement:I,onPlaceholderChange:st,locale:V,dir:N,isHighlightedStart:T,isHighlightedEnd:_,disableDaysOutsideCurrentView:U,fixedDate:v,maximumDays:y,minValue:M,maxValue:f}),Nn(()=>{s.value&&rf(I.value)}),(X,H)=>(ie(),ue(R(tt),{ref_key:"primitiveElement",ref:P,as:X.as,"as-child":X.asChild,"aria-label":R(it),"data-readonly":R(r)?"":void 0,"data-disabled":R(a)?"":void 0,"data-invalid":R(je)?"":void 0,dir:R(N)},{default:te(()=>[lt("div",Ag,[lt("div",Cg,Tt(R(it)),1)]),ve(X.$slots,"default",{date:R(Je),grid:R($e),weekDays:R(Be),weekStartsOn:R(l),locale:R(V),fixedWeeks:R(u),modelValue:R(k)})]),_:3},8,["as","as-child","aria-label","data-readonly","data-disabled","data-invalid","dir"]))}}),Pg=Dg,Lg=Ee({__name:"RangeCalendarCell",props:{date:{type:null,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"td"}},setup(n){const e=ka();return(t,i)=>(ie(),ue(R(tt),{as:t.as,"as-child":t.asChild,role:"gridcell","aria-selected":R(e).isSelected(t.date)?!0:void 0,"aria-disabled":R(e).isDateDisabled(t.date)||R(e).isDateUnavailable?.(t.date)||R(e).disableDaysOutsideCurrentView.value,"data-disabled":R(e).isDateDisabled(t.date)||R(e).disableDaysOutsideCurrentView.value?"":void 0},{default:te(()=>[ve(t.$slots,"default")]),_:3},8,["as","as-child","aria-selected","aria-disabled","data-disabled"]))}}),Ig=Lg,Ug=Ee({__name:"RangeCalendarCellTrigger",props:{day:{type:null,required:!0},month:{type:null,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n,t=ka(),i=sc(),{primitiveElement:a}=Ss(),r=J(()=>t.formatter.custom(xn(e.day),{weekday:"long",month:"long",day:"numeric",year:"numeric"})),s=J(()=>t.isDateUnavailable?.(e.day)??!1),o=J(()=>t.isSelected(e.day)),l=J(()=>t.isSelectionStart(e.day)),c=J(()=>t.isSelectionEnd(e.day)),u=J(()=>t.isHighlightedStart(e.day)),d=J(()=>t.isHighlightedEnd(e.day)),h=J(()=>t.highlightedRange.value?Vp(e.day,t.highlightedRange.value.start,t.highlightedRange.value.end):!1),p=J(()=>t.allowNonContiguousRanges.value),g=J(()=>Nd(e.day,$i())),x=J(()=>!Yl(e.day,e.month)),m=J(()=>t.isOutsideVisibleView(e.day)),f=J(()=>t.isDateDisabled(e.day)||t.disableDaysOutsideCurrentView.value&&x.value),M=J(()=>e.day.day.toLocaleString(t.locale.value)),b=J(()=>!t.disabled.value&&Pt(e.day,t.placeholder.value));function E(U,v){if(!t.readonly.value&&!(t.isDateDisabled(v)||t.isDateUnavailable?.(v))){if(t.lastPressedDateValue.value=v.copy(),t.startValue.value&&t.highlightedRange.value===null){if(Pt(v,t.startValue.value)&&!t.preventDeselect.value&&!t.endValue.value){t.startValue.value=void 0,t.onPlaceholderChange(v);return}else if(!t.endValue.value){U.preventDefault(),t.lastPressedDateValue.value&&Pt(t.lastPressedDateValue.value,v)&&(t.startValue.value=v.copy());return}}if(t.startValue.value&&t.endValue.value&&Pt(t.endValue.value,v)&&!t.preventDeselect.value){t.startValue.value=void 0,t.endValue.value=void 0,t.onPlaceholderChange(v);return}t.startValue.value?t.endValue.value?t.endValue.value&&t.startValue.value&&(t.fixedDate.value?t.fixedDate.value==="start"?v.compare(t.startValue.value)<0?t.startValue.value=v.copy():t.endValue.value=v.copy():t.fixedDate.value==="end"&&(v.compare(t.endValue.value)>0?t.endValue.value=v.copy():t.startValue.value=v.copy()):(t.endValue.value=void 0,t.startValue.value=v.copy())):t.endValue.value=v.copy():t.startValue.value=v.copy()}}function A(U){f.value||E(U,e.day)}function w(){f.value||t.isDateUnavailable?.(e.day)||(t.focusedValue.value=e.day.copy())}function C(U){if(f.value)return;U.preventDefault(),U.stopPropagation();const v=t.parentElement.value,y=7,P=t.dir.value==="rtl"?-1:1;switch(U.code){case i.ARROW_RIGHT:I(e.day,P);break;case i.ARROW_LEFT:I(e.day,-P);break;case i.ARROW_UP:I(e.day,-y);break;case i.ARROW_DOWN:I(e.day,y);break;case i.ENTER:case i.SPACE_CODE:E(U,e.day)}function I(N,V){const W=N.add({days:V});if(t.minValue.value&&W.compare(t.minValue.value)<0||t.maxValue.value&&W.compare(t.maxValue.value)>0)return;const q=v.querySelector(`[data-value='${W.toString()}']:not([data-outside-view])`);if(!q){if(V>0){if(t.isNextButtonDisabled())return;t.nextPage()}else{if(t.isPrevButtonDisabled())return;t.prevPage()}mr(()=>{I(N,V)});return}if(q&&q.hasAttribute("data-disabled"))return I(W,V);t.onPlaceholderChange(W),q?.focus()}}return(U,v)=>(ie(),ue(R(tt),{ref_key:"primitiveElement",ref:a,as:U.as,"as-child":U.asChild,role:"button","aria-label":r.value,"data-reka-calendar-cell-trigger":"","aria-selected":o.value&&(p.value||!s.value)?!0:void 0,"aria-disabled":f.value||s.value?!0:void 0,"data-highlighted":h.value&&(p.value||!s.value)?"":void 0,"data-selection-start":l.value?!0:void 0,"data-selection-end":c.value?!0:void 0,"data-highlighted-start":u.value?!0:void 0,"data-highlighted-end":d.value?!0:void 0,"data-selected":o.value&&(p.value||!s.value)?!0:void 0,"data-outside-visible-view":m.value?"":void 0,"data-value":U.day.toString(),"data-disabled":f.value?"":void 0,"data-unavailable":s.value?"":void 0,"data-today":g.value?"":void 0,"data-outside-view":x.value?"":void 0,"data-focused":b.value?"":void 0,tabindex:b.value?0:x.value||f.value?void 0:-1,onClick:A,onFocusin:w,onMouseenter:w,onKeydown:Uo(C,["up","down","left","right","enter","space"])},{default:te(()=>[ve(U.$slots,"default",{dayValue:M.value,disabled:f.value,today:g.value,selected:o.value,outsideView:x.value,outsideVisibleView:m.value,unavailable:s.value,highlighted:h.value&&(p.value||!s.value),highlightedStart:u.value,highlightedEnd:d.value,selectionStart:l.value,selectionEnd:c.value},()=>[Kt(Tt(M.value),1)])]),_:3},8,["as","as-child","aria-label","aria-selected","aria-disabled","data-highlighted","data-selection-start","data-selection-end","data-highlighted-start","data-highlighted-end","data-selected","data-outside-visible-view","data-value","data-disabled","data-unavailable","data-today","data-outside-view","data-focused","tabindex"]))}}),Ng=Ug,Fg=Ee({__name:"RangeCalendarGrid",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"table"}},setup(n){const e=n,t=ka(),i=J(()=>t.disabled.value?!0:void 0),a=J(()=>t.readonly.value?!0:void 0);return(r,s)=>(ie(),ue(R(tt),nt(e,{tabindex:"-1",role:"grid","aria-readonly":a.value,"aria-disabled":i.value,"data-readonly":a.value&&"","data-disabled":i.value&&""}),{default:te(()=>[ve(r.$slots,"default")]),_:3},16,["aria-readonly","aria-disabled","data-readonly","data-disabled"]))}}),Og=Fg,Bg=Ee({__name:"RangeCalendarGridBody",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"tbody"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),kg=Bg,zg=Ee({__name:"RangeCalendarGridHead",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"thead"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),nt(e,{"aria-hidden":"true"}),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),Vg=zg,Hg=Ee({__name:"RangeCalendarGridRow",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"tr"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),Gg=Hg,Wg=Ee({__name:"RangeCalendarHeadCell",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"th"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),qg=Wg,$g=Ee({__name:"RangeCalendarHeader",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(tt),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),Xg=$g,Yg=Ee({__name:"RangeCalendarHeading",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(n){const e=n,t=ka();return(i,a)=>(ie(),ue(R(tt),nt(e,{"data-disabled":R(t).disabled.value?"":void 0}),{default:te(()=>[ve(i.$slots,"default",{headingValue:R(t).headingValue.value},()=>[Kt(Tt(R(t).headingValue.value),1)])]),_:3},16,["data-disabled"]))}}),jg=Yg,Kg=Ee({__name:"RangeCalendarNext",props:{nextPage:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=J(()=>i.disabled.value||i.isNextButtonDisabled(e.nextPage)),i=ka();return(a,r)=>(ie(),ue(R(tt),{as:a.as,"as-child":a.asChild,"aria-label":"Next page",type:a.as==="button"?"button":void 0,"aria-disabled":t.value||void 0,"data-disabled":t.value||void 0,disabled:t.value,onClick:r[0]||(r[0]=s=>R(i).nextPage(e.nextPage))},{default:te(()=>[ve(a.$slots,"default",{disabled:t.value},()=>[r[1]||(r[1]=Kt(" Next page "))])]),_:3},8,["as","as-child","type","aria-disabled","data-disabled","disabled"]))}}),Zg=Kg,Jg=Ee({__name:"RangeCalendarPrev",props:{prevPage:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=J(()=>i.disabled.value||i.isPrevButtonDisabled(e.prevPage)),i=ka();return(a,r)=>(ie(),ue(R(tt),{as:a.as,"as-child":a.asChild,"aria-label":"Previous page",type:a.as==="button"?"button":void 0,"aria-disabled":t.value||void 0,"data-disabled":t.value||void 0,disabled:t.value,onClick:r[0]||(r[0]=s=>R(i).prevPage(e.prevPage))},{default:te(()=>[ve(a.$slots,"default",{disabled:t.value},()=>[r[1]||(r[1]=Kt(" Prev page "))])]),_:3},8,["as","as-child","type","aria-disabled","data-disabled","disabled"]))}}),Qg=Jg,ex=Ee({__name:"HoverCardArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const e=n;return bt(),(t,i)=>(ie(),ue(R(gc),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),tx=ex;const[xc,nx]=qi("HoverCardRoot");var ix=Ee({__name:"HoverCardRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},openDelay:{type:Number,required:!1,default:700},closeDelay:{type:Number,required:!1,default:300}},emits:["update:open"],setup(n,{emit:e}){const t=n,i=e,{openDelay:a,closeDelay:r}=Ms(t);bt();const s=zi(t,"open",i,{defaultValue:t.defaultOpen,passive:t.open===void 0}),o=Pe(0),l=Pe(0),c=Pe(!1),u=Pe(!1),d=Pe(!1),h=Pe();function p(){clearTimeout(l.value),o.value=window.setTimeout(()=>s.value=!0,a.value)}function g(){clearTimeout(o.value),!c.value&&!u.value&&(l.value=window.setTimeout(()=>s.value=!1,r.value))}function x(){s.value=!1}return nx({open:s,onOpenChange(m){s.value=m},onOpen:p,onClose:g,onDismiss:x,hasSelectionRef:c,isPointerDownOnContentRef:u,isPointerInTransitRef:d,triggerElement:h}),(m,f)=>(ie(),ue(R(oc),null,{default:te(()=>[ve(m.$slots,"default",{open:R(s)})]),_:3}))}}),ax=ix;function jo(n){return e=>e.pointerType==="touch"?void 0:n()}function rx(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;t.nextNode();)e.push(t.currentNode);return e}var sx=Ee({__name:"HoverCardContentImpl",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(n,{emit:e}){const t=n,i=e,a=Hl(t),{forwardRef:r,currentElement:s}=bt(),o=xc(),{isPointerInTransit:l,onPointerExit:c}=of(o.triggerElement,s);Th(o.isPointerInTransitRef,l,{direction:"rtl"}),c(()=>{o.onClose()});const u=Pe(!1);let d;ki(p=>{if(u.value){const g=document.body;d=g.style.userSelect||g.style.webkitUserSelect,g.style.userSelect="none",g.style.webkitUserSelect="none",p(()=>{g.style.userSelect=d,g.style.webkitUserSelect=d})}});function h(){u.value=!1,o.isPointerDownOnContentRef.value=!1,mr(()=>{document.getSelection()?.toString()!==""&&(o.hasSelectionRef.value=!0)})}return Nn(()=>{s.value&&(document.addEventListener("pointerup",h),rx(s.value).forEach(g=>g.setAttribute("tabindex","-1")))}),gr(()=>{document.removeEventListener("pointerup",h),o.hasSelectionRef.value=!1,o.isPointerDownOnContentRef.value=!1}),(p,g)=>(ie(),ue(R(Gl),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:g[1]||(g[1]=x=>i("escapeKeyDown",x)),onPointerDownOutside:g[2]||(g[2]=x=>i("pointerDownOutside",x)),onFocusOutside:g[3]||(g[3]=rr(x=>i("focusOutside",x),["prevent"])),onDismiss:R(o).onDismiss},{default:te(()=>[qe(R(mc),nt({...R(a),...p.$attrs},{ref:R(r),"data-state":R(o).open.value?"open":"closed",style:{userSelect:u.value?"text":void 0,WebkitUserSelect:u.value?"text":void 0,"--reka-hover-card-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-hover-card-content-available-width":"var(--reka-popper-available-width)","--reka-hover-card-content-available-height":"var(--reka-popper-available-height)","--reka-hover-card-trigger-width":"var(--reka-popper-anchor-width)","--reka-hover-card-trigger-height":"var(--reka-popper-anchor-height)"},onPointerdown:g[0]||(g[0]=x=>{x.currentTarget.contains(x.target)&&(u.value=!0),R(o).hasSelectionRef.value=!1,R(o).isPointerDownOnContentRef.value=!0})}),{default:te(()=>[ve(p.$slots,"default")]),_:3},16,["data-state","style"])]),_:3},8,["onDismiss"]))}}),ox=sx,lx=Ee({__name:"HoverCardContent",props:{forceMount:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(n,{emit:e}){const a=vi(n,e),{forwardRef:r}=bt(),s=xc();return(o,l)=>(ie(),ue(R(Wl),{present:o.forceMount||R(s).open.value},{default:te(()=>[qe(ox,nt(R(a),{ref:R(r),onPointerenter:l[0]||(l[0]=c=>R(jo)(R(s).onOpen)(c))}),{default:te(()=>[ve(o.$slots,"default")]),_:3},16)]),_:3},8,["present"]))}}),cx=lx,ux=Ee({__name:"HoverCardPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(ql),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),dx=ux,fx=Ee({__name:"HoverCardTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"a"}},setup(n){const{forwardRef:e,currentElement:t}=bt(),i=xc();i.triggerElement=t;function a(){setTimeout(()=>{!i.isPointerInTransitRef.value&&!i.open.value&&i.onClose()},0)}return(r,s)=>(ie(),ue(R(Ts),{"as-child":"",reference:r.reference},{default:te(()=>[qe(R(tt),{ref:R(e),"as-child":r.asChild,as:r.as,"data-state":R(i).open.value?"open":"closed","data-grace-area-trigger":"",onPointerenter:s[0]||(s[0]=o=>R(jo)(R(i).onOpen)(o)),onPointerleave:s[1]||(s[1]=o=>R(jo)(a)(o)),onFocus:s[2]||(s[2]=o=>R(i).onOpen()),onBlur:s[3]||(s[3]=o=>R(i).onClose())},{default:te(()=>[ve(r.$slots,"default")]),_:3},8,["as-child","as","data-state"])]),_:3},8,["reference"]))}}),hx=fx,px=Ee({__name:"TooltipArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const e=n;return bt(),(t,i)=>(ie(),ue(R(gc),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),mx=px;const Sf="tooltip.open",[Ps,gx]=qi("TooltipRoot");var xx=Ee({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},delayDuration:{type:Number,required:!1,default:void 0},disableHoverableContent:{type:Boolean,required:!1,default:void 0},disableClosingTrigger:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:void 0},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(n,{emit:e}){const t=n,i=e;bt();const a=$l(),r=J(()=>t.disableHoverableContent??a.disableHoverableContent.value),s=J(()=>t.disableClosingTrigger??a.disableClosingTrigger.value),o=J(()=>t.disabled??a.disabled.value),l=J(()=>t.delayDuration??a.delayDuration.value),c=J(()=>t.ignoreNonKeyboardFocus??a.ignoreNonKeyboardFocus.value),u=zi(t,"open",i,{defaultValue:t.defaultOpen,passive:t.open===void 0});Yt(u,b=>{a.onClose&&(b?(a.onOpen(),document.dispatchEvent(new CustomEvent(Sf))):a.onClose())});const d=Pe(!1),h=Pe(),p=J(()=>u.value?d.value?"delayed-open":"instant-open":"closed"),{start:g,stop:x}=Ah(()=>{d.value=!0,u.value=!0},l,{immediate:!1});function m(){x(),d.value=!1,u.value=!0}function f(){x(),u.value=!1}function M(){g()}return gx({contentId:"",open:u,stateAttribute:p,trigger:h,onTriggerChange(b){h.value=b},onTriggerEnter(){a.isOpenDelayed.value?M():m()},onTriggerLeave(){r.value?f():x()},onOpen:m,onClose:f,disableHoverableContent:r,disableClosingTrigger:s,disabled:o,ignoreNonKeyboardFocus:c}),(b,E)=>(ie(),ue(R(oc),null,{default:te(()=>[ve(b.$slots,"default",{open:R(u)})]),_:3}))}}),_x=xx,vx=Ee({__name:"TooltipContentImpl",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1,default:0},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1,default:!0},collisionBoundary:{type:null,required:!1,default:()=>[]},collisionPadding:{type:[Number,Object],required:!1,default:0},arrowPadding:{type:Number,required:!1,default:0},sticky:{type:String,required:!1,default:"partial"},hideWhenDetached:{type:Boolean,required:!1,default:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(n,{emit:e}){const t=n,i=e,a=Ps(),{forwardRef:r}=bt(),s=Xl(),o=J(()=>s.default?.({})),l=J(()=>{if(t.ariaLabel)return t.ariaLabel;let u="";function d(h){typeof h.children=="string"&&h.type!==Ch?u+=h.children:Array.isArray(h.children)&&h.children.forEach(p=>d(p))}return o.value?.forEach(h=>d(h)),u}),c=J(()=>{const{ariaLabel:u,...d}=t;return d});return Nn(()=>{ls(window,"scroll",u=>{u.target?.contains(a.trigger.value)&&a.onClose()}),ls(window,Sf,a.onClose)}),(u,d)=>(ie(),ue(R(Gl),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:d[0]||(d[0]=h=>i("escapeKeyDown",h)),onPointerDownOutside:d[1]||(d[1]=h=>{R(a).disableClosingTrigger.value&&R(a).trigger.value?.contains(h.target)&&h.preventDefault(),i("pointerDownOutside",h)}),onFocusOutside:d[2]||(d[2]=rr(()=>{},["prevent"])),onDismiss:d[3]||(d[3]=h=>R(a).onClose())},{default:te(()=>[qe(R(mc),nt({ref:R(r),"data-state":R(a).stateAttribute.value},{...u.$attrs,...c.value},{style:{"--reka-tooltip-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-tooltip-content-available-width":"var(--reka-popper-available-width)","--reka-tooltip-content-available-height":"var(--reka-popper-available-height)","--reka-tooltip-trigger-width":"var(--reka-popper-anchor-width)","--reka-tooltip-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:te(()=>[ve(u.$slots,"default"),qe(R(Rh),{id:R(a).contentId,role:"tooltip"},{default:te(()=>[Kt(Tt(l.value),1)]),_:1},8,["id"])]),_:3},16,["data-state"])]),_:3}))}}),Ef=vx,yx=Ee({__name:"TooltipContentHoverable",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},setup(n){const t=Hl(n),{forwardRef:i,currentElement:a}=bt(),{trigger:r,onClose:s}=Ps(),o=$l(),{isPointerInTransit:l,onPointerExit:c}=of(r,a);return o.isPointerInTransitRef=l,c(()=>{s()}),(u,d)=>(ie(),ue(Ef,nt({ref:R(i)},R(t)),{default:te(()=>[ve(u.$slots,"default")]),_:3},16))}}),bx=yx,Mx=Ee({__name:"TooltipContent",props:{forceMount:{type:Boolean,required:!1},ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(n,{emit:e}){const t=n,i=e,a=Ps(),r=vi(t,i),{forwardRef:s}=bt();return(o,l)=>(ie(),ue(R(Wl),{present:o.forceMount||R(a).open.value},{default:te(()=>[(ie(),ue(Rd(R(a).disableHoverableContent.value?Ef:bx),nt({ref:R(s)},R(r)),{default:te(()=>[ve(o.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),Sx=Mx,Ex=Ee({__name:"TooltipPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(n){const e=n;return(t,i)=>(ie(),ue(R(ql),At(Ct(e)),{default:te(()=>[ve(t.$slots,"default")]),_:3},16))}}),wx=Ex,Tx=Ee({__name:"TooltipTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const e=n,t=Ps(),i=$l();t.contentId||=rc(void 0,"reka-tooltip-content");const{forwardRef:a,currentElement:r}=bt(),s=Pe(!1),o=Pe(!1),l=J(()=>t.disabled.value?{}:{click:x,focus:p,pointermove:d,pointerleave:h,pointerdown:u,blur:g});Nn(()=>{t.onTriggerChange(r.value)});function c(){setTimeout(()=>{s.value=!1},1)}function u(){t.open&&!t.disableClosingTrigger.value&&t.onClose(),s.value=!0,document.addEventListener("pointerup",c,{once:!0})}function d(m){m.pointerType!=="touch"&&!o.value&&!i.isPointerInTransitRef.value&&(t.onTriggerEnter(),o.value=!0)}function h(){t.onTriggerLeave(),o.value=!1}function p(m){s.value||t.ignoreNonKeyboardFocus.value&&!m.target.matches?.(":focus-visible")||t.onOpen()}function g(){t.onClose()}function x(){t.disableClosingTrigger.value||t.onClose()}return(m,f)=>(ie(),ue(R(Ts),{"as-child":"",reference:m.reference},{default:te(()=>[qe(R(tt),nt({ref:R(a),"aria-describedby":R(t).open.value?R(t).contentId:void 0,"data-state":R(t).stateAttribute.value,as:m.as,"as-child":e.asChild,"data-grace-area-trigger":""},Dd(l.value)),{default:te(()=>[ve(m.$slots,"default")]),_:3},16,["aria-describedby","data-state","as","as-child"])]),_:3},8,["reference"]))}}),Ax=Tx;const _c="181",Ea={ROTATE:0,DOLLY:1,PAN:2},xa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cx=0,bu=1,Rx=2,wf=1,Dx=2,Wn=3,xi=0,Ht=1,$n=2,Zn=0,wa=1,Ko=2,Mu=3,Su=4,Px=5,Pi=100,Lx=101,Ix=102,Ux=103,Nx=104,Fx=200,Ox=201,Bx=202,kx=203,Zo=204,Jo=205,zx=206,Vx=207,Hx=208,Gx=209,Wx=210,qx=211,$x=212,Xx=213,Yx=214,Qo=0,el=1,tl=2,La=3,nl=4,il=5,al=6,rl=7,Tf=0,jx=1,Kx=2,hi=0,Zx=1,Jx=2,Qx=3,e_=4,t_=5,n_=6,i_=7,Af=300,Ia=301,Ua=302,sl=303,ol=304,Ls=306,ll=1e3,jn=1001,cl=1002,rn=1003,a_=1004,Rr=1005,dn=1006,to=1007,Oi=1008,In=1009,Cf=1010,Rf=1011,cr=1012,vc=1013,Gi=1014,Kn=1015,za=1016,yc=1017,bc=1018,ur=1020,Df=35902,Pf=35899,Lf=1021,If=1022,vn=1023,dr=1026,fr=1027,Uf=1028,Mc=1029,Sc=1030,Ec=1031,wc=1033,is=33776,as=33777,rs=33778,ss=33779,ul=35840,dl=35841,fl=35842,hl=35843,pl=36196,ml=37492,gl=37496,xl=37808,_l=37809,vl=37810,yl=37811,bl=37812,Ml=37813,Sl=37814,El=37815,wl=37816,Tl=37817,Al=37818,Cl=37819,Rl=37820,Dl=37821,Pl=36492,Ll=36494,Il=36495,Ul=36283,Nl=36284,Fl=36285,Ol=36286,r_=3200,s_=3201,Nf=0,o_=1,ui="",cn="srgb",Na="srgb-linear",xs="linear",ft="srgb",ea=7680,Eu=519,l_=512,c_=513,u_=514,Ff=515,d_=516,f_=517,h_=518,p_=519,wu=35044,Tu="300 es",Rn=2e3,_s=2001;function Of(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function m_(){const n=vs("canvas");return n.style.display="block",n}const Au={};function Cu(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ve(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Et(...n){const e="THREE."+n.shift();console.error(e,...n)}function hr(...n){const e=n.join(" ");e in Au||(Au[e]=!0,Ve(...n))}function g_(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ru=1234567;const nr=Math.PI/180,pr=180/Math.PI;function Va(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Tc(n,e){return(n%e+e)%e}function x_(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function __(n,e,t){return n!==e?(t-n)/(e-n):0}function ir(n,e,t){return(1-t)*n+t*e}function v_(n,e,t,i){return ir(n,e,1-Math.exp(-t*i))}function y_(n,e=1){return e-Math.abs(Tc(n,e*2)-e)}function b_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function M_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function S_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function E_(n,e){return n+Math.random()*(e-n)}function w_(n){return n*(.5-Math.random())}function T_(n){n!==void 0&&(Ru=n);let e=Ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function A_(n){return n*nr}function C_(n){return n*pr}function R_(n){return(n&n-1)===0&&n!==0}function D_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function P_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function L_(n,e,t,i,a){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+i)/2),u=s((e+i)/2),d=r((e-i)/2),h=s((e-i)/2),p=r((i-e)/2),g=s((i-e)/2);switch(a){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ma(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ga={DEG2RAD:nr,RAD2DEG:pr,generateUUID:Va,clamp:Ze,euclideanModulo:Tc,mapLinear:x_,inverseLerp:__,lerp:ir,damp:v_,pingpong:y_,smoothstep:b_,smootherstep:M_,randInt:S_,randFloat:E_,randFloatSpread:w_,seededRandom:T_,degToRad:A_,radToDeg:C_,isPowerOfTwo:R_,ceilPowerOfTwo:D_,floorPowerOfTwo:P_,setQuaternionFromProperEuler:L_,normalize:zt,denormalize:ma};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _i{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let l=i[a+0],c=i[a+1],u=i[a+2],d=i[a+3],h=r[s+0],p=r[s+1],g=r[s+2],x=r[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o>=1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+d*x;m<0&&(h=-h,p=-p,g=-g,x=-x,m=-m);let f=1-o;if(m<.9995){const M=Math.acos(m),b=Math.sin(M);f=Math.sin(f*M)/b,o=Math.sin(o*M)/b,l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+x*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+x*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],d=r[s],h=r[s+1],p=r[s+2],g=r[s+3];return e[t]=o*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-o*p,e[t+2]=c*g+u*p+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),d=o(r/2),h=l(i/2),p=l(a/2),g=l(r/2);switch(s){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+a*c-r*l,this._y=a*u+s*l+r*o-i*c,this._z=r*u+s*c+i*l-a*o,this._w=s*u-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),u=2*(o*t-r*a),d=2*(r*i-s*t);return this.x=t+l*c+s*d-o*u,this.y=i+l*u+o*c-r*d,this.z=a+l*d+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new B,Du=new _i;class Xe{constructor(e,t,i,a,r,s,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,l,c)}set(e,t,i,a,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=a[0],m=a[3],f=a[6],M=a[1],b=a[4],E=a[7],A=a[2],w=a[5],C=a[8];return r[0]=s*x+o*M+l*A,r[3]=s*m+o*b+l*w,r[6]=s*f+o*E+l*C,r[1]=c*x+u*M+d*A,r[4]=c*m+u*b+d*w,r[7]=c*f+u*E+d*C,r[2]=h*x+p*M+g*A,r[5]=h*m+p*b+g*w,r[8]=h*f+p*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*r*u+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*r,p=c*r-s*l,g=t*d+i*h+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(a*c-u*i)*x,e[2]=(o*i-a*s)*x,e[3]=h*x,e[4]=(u*t-a*l)*x,e[5]=(a*r-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(s*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Xe,Pu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I_(){const n={enabled:!0,workingColorSpace:Na,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ft&&(a.r=Jn(a.r),a.g=Jn(a.g),a.b=Jn(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(a.r=Ta(a.r),a.g=Ta(a.g),a.b=Ta(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ui?xs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Na]:{primaries:e,whitePoint:i,transfer:xs,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const rt=I_();function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ta;class U_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ta===void 0&&(ta=vs("canvas")),ta.width=e.width,ta.height=e.height;const a=ta.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ta}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Jn(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jn(t[i]/255)*255):t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N_=0;class Ac{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(ao(a[s].image)):r.push(ao(a[s]))}else r=ao(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?U_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let F_=0;const ro=new B;class Gt extends ji{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=jn,a=jn,r=dn,s=Oi,o=vn,l=In,c=Gt.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Va(),this.name="",this.source=new Ac(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ll:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ll:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Af;Gt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,a=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,A=(f+1)/2,w=(u+h)/4,C=(d+x)/4,U=(g+m)/4;return b>E&&b>A?b<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(b),a=w/i,r=C/i):E>A?E<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(E),i=w/a,r=U/a):A<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(A),i=C/r,a=U/r),this.set(i,a,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O_ extends ji{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const a={width:e,height:t,depth:i.depth},r=new Gt(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Ac(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends O_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bf extends Gt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class B_ extends Gt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,pn):pn.fromBufferAttribute(r,s),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($a),Pr.subVectors(this.max,$a),na.subVectors(e.a,$a),ia.subVectors(e.b,$a),aa.subVectors(e.c,$a),ti.subVectors(ia,na),ni.subVectors(aa,ia),Ei.subVectors(na,aa);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Ei.z,Ei.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Ei.z,0,-Ei.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Ei.y,Ei.x,0];return!so(t,na,ia,aa,Pr)||(t=[1,0,0,0,1,0,0,0,1],!so(t,na,ia,aa,Pr))?!1:(Lr.crossVectors(ti,ni),t=[Lr.x,Lr.y,Lr.z],so(t,na,ia,aa,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new B,new B,new B,new B,new B,new B,new B,new B],pn=new B,Dr=new yr,na=new B,ia=new B,aa=new B,ti=new B,ni=new B,Ei=new B,$a=new B,Pr=new B,Lr=new B,wi=new B;function so(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){wi.fromArray(n,r);const o=a.x*Math.abs(wi.x)+a.y*Math.abs(wi.y)+a.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const k_=new yr,Xa=new B,oo=new B;class Is{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):k_.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);const t=Xa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Xa,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(oo)),this.expandByPoint(Xa.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bn=new B,lo=new B,Ir=new B,ii=new B,co=new B,Ur=new B,uo=new B;class Cc{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){lo.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(lo);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ir),o=ii.dot(this.direction),l=-ii.dot(Ir),c=ii.lengthSq(),u=Math.abs(1-s*s);let d,h,p,g;if(u>0)if(d=s*l-o,h=s*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,p=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-s*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(s*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=s>0?-r:r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(lo).addScaledVector(Ir,h),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),a=Bn.dot(Bn)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,a,r){co.subVectors(t,e),Ur.subVectors(i,e),uo.crossVectors(co,Ur);let s=this.direction.dot(uo),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ii.subVectors(this.origin,e);const l=o*this.direction.dot(Ur.crossVectors(ii,Ur));if(l<0)return null;const c=o*this.direction.dot(co.cross(ii));if(c<0||l+c>s)return null;const u=-o*ii.dot(uo);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,a,r,s,o,l,c,u,d,h,p,g,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,l,c,u,d,h,p,g,x,m)}set(e,t,i,a,r,s,o,l,c,u,d,h,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ra.setFromMatrixColumn(e,0).length(),r=1/ra.setFromMatrixColumn(e,1).length(),s=1/ra.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=s*u,p=s*d,g=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,x=c*d;t[0]=h+x*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=p*o-g,t[6]=x+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,x=c*d;t[0]=h-x*o,t[4]=-s*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*u,t[9]=x-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*d,g=o*u,x=o*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*d,t[8]=g*d+p,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,p=s*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=s*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z_,e,V_)}lookAt(e,t,i){const a=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ai.crossVectors(i,Qt),ai.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ai.crossVectors(i,Qt)),ai.normalize(),Nr.crossVectors(Qt,ai),a[0]=ai.x,a[4]=Nr.x,a[8]=Qt.x,a[1]=ai.y,a[5]=Nr.y,a[9]=Qt.y,a[2]=ai.z,a[6]=Nr.z,a[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],M=i[3],b=i[7],E=i[11],A=i[15],w=a[0],C=a[4],U=a[8],v=a[12],y=a[1],P=a[5],I=a[9],N=a[13],V=a[2],W=a[6],q=a[10],Z=a[14],k=a[3],ee=a[7],ae=a[11],xe=a[15];return r[0]=s*w+o*y+l*V+c*k,r[4]=s*C+o*P+l*W+c*ee,r[8]=s*U+o*I+l*q+c*ae,r[12]=s*v+o*N+l*Z+c*xe,r[1]=u*w+d*y+h*V+p*k,r[5]=u*C+d*P+h*W+p*ee,r[9]=u*U+d*I+h*q+p*ae,r[13]=u*v+d*N+h*Z+p*xe,r[2]=g*w+x*y+m*V+f*k,r[6]=g*C+x*P+m*W+f*ee,r[10]=g*U+x*I+m*q+f*ae,r[14]=g*v+x*N+m*Z+f*xe,r[3]=M*w+b*y+E*V+A*k,r[7]=M*C+b*P+E*W+A*ee,r[11]=M*U+b*I+E*q+A*ae,r[15]=M*v+b*N+E*Z+A*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*d-a*c*d-r*o*h+i*c*h+a*o*p-i*l*p)+x*(+t*l*p-t*c*h+r*s*h-a*s*p+a*c*u-r*l*u)+m*(+t*c*d-t*o*p-r*s*d+i*s*p+r*o*u-i*c*u)+f*(-a*o*u-t*l*d+t*o*h+a*s*d-i*s*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],M=d*m*c-x*h*c+x*l*p-o*m*p-d*l*f+o*h*f,b=g*h*c-u*m*c-g*l*p+s*m*p+u*l*f-s*h*f,E=u*x*c-g*d*c+g*o*p-s*x*p-u*o*f+s*d*f,A=g*d*l-u*x*l-g*o*h+s*x*h+u*o*m-s*d*m,w=t*M+i*b+a*E+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=M*C,e[1]=(x*h*r-d*m*r-x*a*p+i*m*p+d*a*f-i*h*f)*C,e[2]=(o*m*r-x*l*r+x*a*c-i*m*c-o*a*f+i*l*f)*C,e[3]=(d*l*r-o*h*r-d*a*c+i*h*c+o*a*p-i*l*p)*C,e[4]=b*C,e[5]=(u*m*r-g*h*r+g*a*p-t*m*p-u*a*f+t*h*f)*C,e[6]=(g*l*r-s*m*r-g*a*c+t*m*c+s*a*f-t*l*f)*C,e[7]=(s*h*r-u*l*r+u*a*c-t*h*c-s*a*p+t*l*p)*C,e[8]=E*C,e[9]=(g*d*r-u*x*r-g*i*p+t*x*p+u*i*f-t*d*f)*C,e[10]=(s*x*r-g*o*r+g*i*c-t*x*c-s*i*f+t*o*f)*C,e[11]=(u*o*r-s*d*r-u*i*c+t*d*c+s*i*p-t*o*p)*C,e[12]=A*C,e[13]=(u*x*a-g*d*a+g*i*h-t*x*h-u*i*m+t*d*m)*C,e[14]=(g*o*a-s*x*a-g*i*l+t*x*l+s*i*m-t*o*m)*C,e[15]=(s*d*a-u*o*a+u*i*l-t*d*l-s*i*h+t*o*h)*C,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*s,0,c*l-a*o,u*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,d=o+o,h=r*c,p=r*u,g=r*d,x=s*u,m=s*d,f=o*d,M=l*c,b=l*u,E=l*d,A=i.x,w=i.y,C=i.z;return a[0]=(1-(x+f))*A,a[1]=(p+E)*A,a[2]=(g-b)*A,a[3]=0,a[4]=(p-E)*w,a[5]=(1-(h+f))*w,a[6]=(m+M)*w,a[7]=0,a[8]=(g+b)*C,a[9]=(m-M)*C,a[10]=(1-(h+x))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let r=ra.set(a[0],a[1],a[2]).length();const s=ra.set(a[4],a[5],a[6]).length(),o=ra.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],mn.copy(this);const c=1/r,u=1/s,d=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,t.setFromRotationMatrix(mn),i.x=r,i.y=s,i.z=o,this}makePerspective(e,t,i,a,r,s,o=Rn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(i-a),h=(t+e)/(t-e),p=(i+a)/(i-a);let g,x;if(l)g=r/(s-r),x=s*r/(s-r);else if(o===Rn)g=-(s+r)/(s-r),x=-2*s*r/(s-r);else if(o===_s)g=-s/(s-r),x=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=Rn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-a),h=-(t+e)/(t-e),p=-(i+a)/(i-a);let g,x;if(l)g=1/(s-r),x=s/(s-r);else if(o===Rn)g=-2/(s-r),x=-(s+r)/(s-r);else if(o===_s)g=-1/(s-r),x=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ra=new B,mn=new yt,z_=new B(0,0,0),V_=new B(1,1,1),ai=new B,Nr=new B,Qt=new B,Iu=new yt,Uu=new _i;class En{constructor(e=0,t=0,i=0,a=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],d=a[2],h=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H_=0;const Nu=new B,sa=new _i,kn=new yt,Fr=new B,Ya=new B,G_=new B,W_=new _i,Fu=new B(1,0,0),Ou=new B(0,1,0),Bu=new B(0,0,1),ku={type:"added"},q_={type:"removed"},oa={type:"childadded",child:null},fo={type:"childremoved",child:null};class Wt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new B,t=new En,i=new _i,a=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new yt},normalMatrix:{value:new Xe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sa.setFromAxisAngle(e,t),this.quaternion.multiply(sa),this}rotateOnWorldAxis(e,t){return sa.setFromAxisAngle(e,t),this.quaternion.premultiply(sa),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ya,Fr,this.up):kn.lookAt(Fr,Ya,this.up),this.quaternion.setFromRotationMatrix(kn),a&&(kn.extractRotation(a.matrixWorld),sa.setFromRotationMatrix(kn),this.quaternion.premultiply(sa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ku),oa.child=e,this.dispatchEvent(oa),oa.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q_),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ku),oa.child=e,this.dispatchEvent(oa),oa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,e,G_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,W_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Wt.DEFAULT_UP=new B(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new B,zn=new B,ho=new B,Vn=new B,la=new B,ca=new B,zu=new B,po=new B,mo=new B,go=new B,xo=new pt,_o=new pt,vo=new pt;class _n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),gn.subVectors(e,t),a.cross(gn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){gn.subVectors(a,t),zn.subVectors(i,t),ho.subVectors(e,t);const s=gn.dot(gn),o=gn.dot(zn),l=gn.dot(ho),c=zn.dot(zn),u=zn.dot(ho),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,g=(s*u-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,a,r,s,o,l){return this.getBarycoord(e,t,i,a,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(s,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,i,a,r,s){return xo.setScalar(0),_o.setScalar(0),vo.setScalar(0),xo.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,i),vo.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(xo,r.x),s.addScaledVector(_o,r.y),s.addScaledVector(vo,r.z),s}static isFrontFacing(e,t,i,a){return gn.subVectors(i,t),zn.subVectors(e,t),gn.cross(zn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;la.subVectors(a,i),ca.subVectors(r,i),po.subVectors(e,i);const l=la.dot(po),c=ca.dot(po);if(l<=0&&c<=0)return t.copy(i);mo.subVectors(e,a);const u=la.dot(mo),d=ca.dot(mo);if(u>=0&&d<=u)return t.copy(a);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(la,s);go.subVectors(e,r);const p=la.dot(go),g=ca.dot(go);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ca,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return zu.subVectors(r,a),o=(d-u)/(d-u+(p-g)),t.copy(a).addScaledVector(zu,o);const f=1/(m+x+h);return s=x*f,o=h*f,t.copy(i).addScaledVector(la,s).addScaledVector(ca,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Or={h:0,s:0,l:0};function yo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=rt.workingColorSpace){if(e=Tc(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=yo(s,r,e+1/3),this.g=yo(s,r,e),this.b=yo(s,r,e-1/3)}return rt.colorSpaceToWorking(this,a),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return rt.workingToColorSpace(Ft.copy(this),e),Math.round(Ze(Ft.r*255,0,255))*65536+Math.round(Ze(Ft.g*255,0,255))*256+Math.round(Ze(Ft.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Ft.copy(this),t);const i=Ft.r,a=Ft.g,r=Ft.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=cn){rt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,a=Ft.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Or);const i=ir(ri.h,Or.h,t),a=ir(ri.s,Or.s,t),r=ir(ri.l,Or.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new et;et.NAMES=zf;let $_=0;class Ha extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=wa,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Jo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wa&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zo&&(i.blendSrc=this.blendSrc),this.blendDst!==Jo&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ea&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ea&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ea&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vf extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new B,Br=new We;let X_=0;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wu,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ma(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wu&&(e.usage=this.usage),e}}class Hf extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gf extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fn extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Y_=0;const on=new yt,bo=new Wt,ua=new B,en=new yr,ja=new yr,Ut=new B;class wn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?Gf:Hf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new fn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];ja.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(en.min,ja.min),en.expandByPoint(Ut),Ut.addVectors(en.max,ja.max),en.expandByPoint(Ut)):(en.expandByPoint(ja.min),en.expandByPoint(ja.max))}en.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)Ut.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Ut));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(ua.fromBufferAttribute(e,c),Ut.add(ua)),a=Math.max(a,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new B,l[U]=new B;const c=new B,u=new B,d=new B,h=new We,p=new We,g=new We,x=new B,m=new B;function f(U,v,y){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,v),d.fromBufferAttribute(i,y),h.fromBufferAttribute(r,U),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,y),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[U].add(x),o[v].add(x),o[y].add(x),l[U].add(m),l[v].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,v=M.length;U<v;++U){const y=M[U],P=y.start,I=y.count;for(let N=P,V=P+I;N<V;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const b=new B,E=new B,A=new B,w=new B;function C(U){A.fromBufferAttribute(a,U),w.copy(A);const v=o[U];b.copy(v),b.sub(A.multiplyScalar(A.dot(v))).normalize(),E.crossVectors(w,v);const P=E.dot(l[U])<0?-1:1;s.setXYZW(U,b.x,b.y,b.z,P)}for(let U=0,v=M.length;U<v;++U){const y=M[U],P=y.start,I=y.count;for(let N=P,V=P+I;N<V;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const a=new B,r=new B,s=new B,o=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),u.subVectors(s,r),d.subVectors(a,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)a.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),d.subVectors(a,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Pn(h,u,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(a[l]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vu=new yt,Ti=new Cc,kr=new Is,Hu=new B,zr=new B,Vr=new B,Hr=new B,Mo=new B,Gr=new B,Gu=new B,Wr=new B;class yn extends Wt{constructor(e=new wn,t=new Vf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Mo.fromBufferAttribute(d,e),s?Gr.addScaledVector(Mo,u):Gr.addScaledVector(Mo.sub(t),u))}t.add(Gr)}return t}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(kr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(kr,Hu)===null||Ti.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(Vu.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=s[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,A=b;E<A;E+=3){const w=o.getX(E),C=o.getX(E+1),U=o.getX(E+2);a=qr(this,f,e,i,c,u,d,w,C,U),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const M=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);a=qr(this,s,e,i,c,u,d,M,b,E),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=s[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,A=b;E<A;E+=3){const w=E,C=E+1,U=E+2;a=qr(this,f,e,i,c,u,d,w,C,U),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const M=m,b=m+1,E=m+2;a=qr(this,s,e,i,c,u,d,M,b,E),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function j_(n,e,t,i,a,r,s,o){let l;if(e.side===Ht?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===xi,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:n}}function qr(n,e,t,i,a,r,s,o,l,c){n.getVertexPosition(o,zr),n.getVertexPosition(l,Vr),n.getVertexPosition(c,Hr);const u=j_(n,e,t,i,zr,Vr,Hr,Gu);if(u){const d=new B;_n.getBarycoord(Gu,zr,Vr,Hr,d),a&&(u.uv=_n.getInterpolatedAttribute(a,o,l,c,d,new We)),r&&(u.uv1=_n.getInterpolatedAttribute(r,o,l,c,d,new We)),s&&(u.normal=_n.getInterpolatedAttribute(s,o,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};_n.getNormal(zr,Vr,Hr,h.normal),u.face=h,u.barycoord=d}return u}class br extends wn{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,s,r,0),g("z","y","x",1,-1,i,t,-e,s,r,1),g("x","z","y",1,1,e,i,t,a,s,2),g("x","z","y",1,-1,e,i,-t,a,s,3),g("x","y","z",1,-1,e,t,i,a,r,4),g("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(d,2));function g(x,m,f,M,b,E,A,w,C,U,v){const y=E/C,P=A/U,I=E/2,N=A/2,V=w/2,W=C+1,q=U+1;let Z=0,k=0;const ee=new B;for(let ae=0;ae<q;ae++){const xe=ae*P-N;for(let He=0;He<W;He++){const Je=He*y-I;ee[x]=Je*M,ee[m]=xe*b,ee[f]=V,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[f]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(He/C),d.push(1-ae/U),Z+=1}}for(let ae=0;ae<U;ae++)for(let xe=0;xe<C;xe++){const He=h+xe+W*ae,Je=h+xe+W*(ae+1),st=h+(xe+1)+W*(ae+1),it=h+(xe+1)+W*ae;l.push(He,Je,it),l.push(Je,st,it),k+=6}o.addGroup(p,k,v),p+=k,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=Fa(n[t]);for(const a in i)e[a]=i[a]}return e}function K_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Z_={clone:Fa,merge:Vt};var J_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J_,this.fragmentShader=Q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fa(e.uniforms),this.uniformsGroups=K_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qf extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new B,Wu=new We,qu=new We;class nn extends qf{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,qu),t.subVectors(qu,Wu)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,t-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const da=-90,fa=1;class ev extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new nn(da,fa,e,t);a.layers=this.layers,this.add(a);const r=new nn(da,fa,e,t);r.layers=this.layers,this.add(r);const s=new nn(da,fa,e,t);s.layers=this.layers,this.add(s);const o=new nn(da,fa,e,t);o.layers=this.layers,this.add(o);const l=new nn(da,fa,e,t);l.layers=this.layers,this.add(l);const c=new nn(da,fa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,r),e.setRenderTarget(i,1,a),e.render(t,s),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,a),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $f extends Gt{constructor(e=[],t=Ia,i,a,r,s,o,l,c,u){super(e,t,i,a,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tv extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new $f(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new br(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Zn});r.uniforms.tEquirect.value=t;const s=new yn(a,r),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=dn),new ev(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}class _a extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nv={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nv)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class iv extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class av extends Gt{constructor(e=null,t=1,i=1,a,r,s,o,l,c=rn,u=rn,d,h){super(null,s,o,l,c,u,a,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eo=new B,rv=new B,sv=new Xe;class li{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Eo.subVectors(i,t).cross(rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Eo),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sv.getNormalMatrix(e),a=this.coplanarPoint(Eo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Is,ov=new We(.5,.5),$r=new B;class Rc{constructor(e=new li,t=new li,i=new li,a=new li,r=new li,s=new li){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],M=r[12],b=r[13],E=r[14],A=r[15];if(a[0].setComponents(c-s,p-u,f-g,A-M).normalize(),a[1].setComponents(c+s,p+u,f+g,A+M).normalize(),a[2].setComponents(c+o,p+d,f+x,A+b).normalize(),a[3].setComponents(c-o,p-d,f-x,A-b).normalize(),i)a[4].setComponents(l,h,m,E).normalize(),a[5].setComponents(c-l,p-h,f-m,A-E).normalize();else if(a[4].setComponents(c-l,p-h,f-m,A-E).normalize(),t===Rn)a[5].setComponents(c+l,p+h,f+m,A+E).normalize();else if(t===_s)a[5].setComponents(l,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=ov.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if($r.x=a.normal.x>0?e.max.x:e.min.x,$r.y=a.normal.y>0?e.max.y:e.min.y,$r.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xf extends Ha{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ys=new B,bs=new B,$u=new yt,Ka=new Cc,Xr=new Is,wo=new B,Xu=new B;class lv extends Wt{constructor(e=new wn,t=new Xf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,r=t.count;a<r;a++)ys.fromBufferAttribute(t,a-1),bs.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=ys.distanceTo(bs);e.setAttribute("lineDistance",new fn(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(a),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;$u.copy(a).invert(),Ka.copy(e.ray).applyMatrix4($u);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let x=p,m=g-1;x<m;x+=c){const f=u.getX(x),M=u.getX(x+1),b=Yr(this,e,Ka,l,f,M,x);b&&t.push(b)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),f=Yr(this,e,Ka,l,x,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let x=p,m=g-1;x<m;x+=c){const f=Yr(this,e,Ka,l,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){const x=Yr(this,e,Ka,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Yr(n,e,t,i,a,r,s){const o=n.geometry.attributes.position;if(ys.fromBufferAttribute(o,a),bs.fromBufferAttribute(o,r),t.distanceSqToSegment(ys,bs,wo,Xu)>i)return;wo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(wo);if(!(c<e.near||c>e.far))return{distance:c,point:Xu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class cv extends lv{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yf extends Gt{constructor(e,t,i=Gi,a,r,s,o=rn,l=rn,c,u=dr,d=1){if(u!==dr&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,a,r,s,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ac(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jf extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Us extends wn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,d=e/o,h=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const M=f*h-s;for(let b=0;b<c;b++){const E=b*d-r;g.push(E,-M,0),x.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const b=M+c*f,E=M+c*(f+1),A=M+1+c*(f+1),w=M+1+c*f;p.push(b,E,w),p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(x,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}class ar extends wn{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const u=[],d=new B,h=new B,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const M=[],b=f/i;let E=0;f===0&&s===0?E=.5/t:f===i&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const w=A/t;d.x=-e*Math.cos(a+w*r)*Math.sin(s+b*o),d.y=e*Math.cos(s+b*o),d.z=e*Math.sin(a+w*r)*Math.sin(s+b*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(w+E,1-b),M.push(c++)}u.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){const b=u[f][M+1],E=u[f][M],A=u[f+1][M],w=u[f+1][M+1];(f!==0||s>0)&&p.push(b,E,w),(f!==i-1||l<Math.PI)&&p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(x,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yu extends Ha{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nf,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uv extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dv extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kf extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const To=new yt,ju=new B,Ku=new B;class fv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(ju),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zu=new yt,Za=new B,Ao=new B;class hv extends fv{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Za.setFromMatrixPosition(e.matrixWorld),i.position.copy(Za),Ao.copy(i.position),Ao.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ao),i.updateMatrixWorld(),a.makeTranslation(-Za.x,-Za.y,-Za.z),Zu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu,i.coordinateSystem,i.reversedDepth)}}class pv extends Kf{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new hv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mv extends qf{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gv extends Kf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xv extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ju{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _v extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ve("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Qu(n,e,t,i){const a=vv(i);switch(t){case Lf:return n*e;case Uf:return n*e/a.components*a.byteLength;case Mc:return n*e/a.components*a.byteLength;case Sc:return n*e*2/a.components*a.byteLength;case Ec:return n*e*2/a.components*a.byteLength;case If:return n*e*3/a.components*a.byteLength;case vn:return n*e*4/a.components*a.byteLength;case wc:return n*e*4/a.components*a.byteLength;case is:case as:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rs:case ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:case hl:return Math.max(n,16)*Math.max(e,8)/4;case ul:case fl:return Math.max(n,8)*Math.max(e,8)/2;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Ll:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ul:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vv(n){switch(n){case In:case Cf:return{byteLength:1,components:1};case cr:case Rf:case za:return{byteLength:2,components:1};case yc:case bc:return{byteLength:2,components:4};case Gi:case vc:case Kn:return{byteLength:4,components:1};case Df:case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);function Zf(){let n=null,e=!1,t=null,i=null;function a(r,s){t(r,s),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yv(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mv=`#ifdef USE_ALPHAHASH
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
#endif`,Sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Av=`#ifdef USE_AOMAP
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
#endif`,Cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rv=`#ifdef USE_BATCHING
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
#endif`,Dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uv=`#ifdef USE_IRIDESCENCE
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
#endif`,Nv=`#ifdef USE_BUMPMAP
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wv=`#define PI 3.141592653589793
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
} // validated`,qv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$v=`vec3 transformedNormal = objectNormal;
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
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qv=`#ifdef USE_ENVMAP
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
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
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
}`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fy=`uniform bool receiveShadow;
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
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_y=`PhysicalMaterial material;
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
#endif`,vy=`uniform sampler2D dfgLUT;
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
}`,yy=`
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
#endif`,by=`#if defined( RE_IndirectDiffuse )
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dy=`#if defined( USE_POINTS_UV )
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
#endif`,Py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`#ifdef USE_MORPHTARGETS
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
#endif`,Oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gy=`#ifdef USE_NORMALMAP
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
#endif`,Wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rb=`float getShadowMask() {
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
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
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
#endif`,lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cb=`#ifdef USE_SKINNING
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
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pb=`#ifdef USE_TRANSMISSION
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
#endif`,mb=`#ifdef USE_TRANSMISSION
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`#include <common>
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
}`,Ab=`#if DEPTH_PACKING == 3200
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
}`,Cb=`#define DISTANCE
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
}`,Rb=`#define DISTANCE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`uniform float scale;
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
}`,Ib=`uniform vec3 diffuse;
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
}`,Ub=`#include <common>
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Fb=`#define LAMBERT
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
}`,Ob=`#define LAMBERT
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
}`,Bb=`#define MATCAP
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
}`,kb=`#define MATCAP
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
}`,zb=`#define NORMAL
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
}`,Vb=`#define NORMAL
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
}`,Hb=`#define PHONG
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
}`,Gb=`#define PHONG
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
}`,Wb=`#define STANDARD
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
}`,qb=`#define STANDARD
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
}`,$b=`#define TOON
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
}`,Xb=`#define TOON
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
}`,Yb=`uniform float size;
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
}`,jb=`uniform vec3 diffuse;
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
}`,Kb=`#include <common>
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
}`,Zb=`uniform vec3 color;
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
}`,Jb=`uniform float rotation;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:bv,alphahash_pars_fragment:Mv,alphamap_fragment:Sv,alphamap_pars_fragment:Ev,alphatest_fragment:wv,alphatest_pars_fragment:Tv,aomap_fragment:Av,aomap_pars_fragment:Cv,batching_pars_vertex:Rv,batching_vertex:Dv,begin_vertex:Pv,beginnormal_vertex:Lv,bsdfs:Iv,iridescence_fragment:Uv,bumpmap_pars_fragment:Nv,clipping_planes_fragment:Fv,clipping_planes_pars_fragment:Ov,clipping_planes_pars_vertex:Bv,clipping_planes_vertex:kv,color_fragment:zv,color_pars_fragment:Vv,color_pars_vertex:Hv,color_vertex:Gv,common:Wv,cube_uv_reflection_fragment:qv,defaultnormal_vertex:$v,displacementmap_pars_vertex:Xv,displacementmap_vertex:Yv,emissivemap_fragment:jv,emissivemap_pars_fragment:Kv,colorspace_fragment:Zv,colorspace_pars_fragment:Jv,envmap_fragment:Qv,envmap_common_pars_fragment:ey,envmap_pars_fragment:ty,envmap_pars_vertex:ny,envmap_physical_pars_fragment:hy,envmap_vertex:iy,fog_vertex:ay,fog_pars_vertex:ry,fog_fragment:sy,fog_pars_fragment:oy,gradientmap_pars_fragment:ly,lightmap_pars_fragment:cy,lights_lambert_fragment:uy,lights_lambert_pars_fragment:dy,lights_pars_begin:fy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:xy,lights_physical_fragment:_y,lights_physical_pars_fragment:vy,lights_fragment_begin:yy,lights_fragment_maps:by,lights_fragment_end:My,logdepthbuf_fragment:Sy,logdepthbuf_pars_fragment:Ey,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:Ty,map_fragment:Ay,map_pars_fragment:Cy,map_particle_fragment:Ry,map_particle_pars_fragment:Dy,metalnessmap_fragment:Py,metalnessmap_pars_fragment:Ly,morphinstance_vertex:Iy,morphcolor_vertex:Uy,morphnormal_vertex:Ny,morphtarget_pars_vertex:Fy,morphtarget_vertex:Oy,normal_fragment_begin:By,normal_fragment_maps:ky,normal_pars_fragment:zy,normal_pars_vertex:Vy,normal_vertex:Hy,normalmap_pars_fragment:Gy,clearcoat_normal_fragment_begin:Wy,clearcoat_normal_fragment_maps:qy,clearcoat_pars_fragment:$y,iridescence_pars_fragment:Xy,opaque_fragment:Yy,packing:jy,premultiplied_alpha_fragment:Ky,project_vertex:Zy,dithering_fragment:Jy,dithering_pars_fragment:Qy,roughnessmap_fragment:eb,roughnessmap_pars_fragment:tb,shadowmap_pars_fragment:nb,shadowmap_pars_vertex:ib,shadowmap_vertex:ab,shadowmask_pars_fragment:rb,skinbase_vertex:sb,skinning_pars_vertex:ob,skinning_vertex:lb,skinnormal_vertex:cb,specularmap_fragment:ub,specularmap_pars_fragment:db,tonemapping_fragment:fb,tonemapping_pars_fragment:hb,transmission_fragment:pb,transmission_pars_fragment:mb,uv_pars_fragment:gb,uv_pars_vertex:xb,uv_vertex:_b,worldpos_vertex:vb,background_vert:yb,background_frag:bb,backgroundCube_vert:Mb,backgroundCube_frag:Sb,cube_vert:Eb,cube_frag:wb,depth_vert:Tb,depth_frag:Ab,distanceRGBA_vert:Cb,distanceRGBA_frag:Rb,equirect_vert:Db,equirect_frag:Pb,linedashed_vert:Lb,linedashed_frag:Ib,meshbasic_vert:Ub,meshbasic_frag:Nb,meshlambert_vert:Fb,meshlambert_frag:Ob,meshmatcap_vert:Bb,meshmatcap_frag:kb,meshnormal_vert:zb,meshnormal_frag:Vb,meshphong_vert:Hb,meshphong_frag:Gb,meshphysical_vert:Wb,meshphysical_frag:qb,meshtoon_vert:$b,meshtoon_frag:Xb,points_vert:Yb,points_frag:jb,shadow_vert:Kb,shadow_frag:Zb,sprite_vert:Jb,sprite_frag:Qb},de={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},An={basic:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Vt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Vt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Vt([de.points,de.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Vt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Vt([de.common,de.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Vt([de.sprite,de.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Vt([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Vt([de.lights,de.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};An.physical={uniforms:Vt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const jr={r:0,b:0,g:0},Ci=new En,eM=new yt;function tM(n,e,t,i,a,r,s){const o=new et(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function x(b){let E=!1;const A=g(b);A===null?f(o,l):A&&A.isColor&&(f(A,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){const A=g(E);A&&(A.isCubeTexture||A.mapping===Ls)?(u===void 0&&(u=new yn(new br(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Fa(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Ci.copy(E.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eM.makeRotationFromEuler(Ci)),u.material.toneMapped=rt.getTransfer(A.colorSpace)!==ft,(d!==A||h!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new yn(new Us(2,2),new Un({name:"BackgroundMaterial",uniforms:Fa(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=rt.getTransfer(A.colorSpace)!==ft,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,E){b.getRGB(jr,Wf(n)),i.buffers.color.setClear(jr.r,jr.g,jr.b,E,s)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:x,addToRenderList:m,dispose:M}}function nM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=h(null);let r=a,s=!1;function o(y,P,I,N,V){let W=!1;const q=d(N,I,P);r!==q&&(r=q,c(r.object)),W=p(y,N,I,V),W&&g(y,N,I,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,E(y,P,I,N),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,P,I){const N=I.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let W=V[P.id];W===void 0&&(W={},V[P.id]=W);let q=W[N];return q===void 0&&(q=h(l()),W[N]=q),q}function h(y){const P=[],I=[],N=[];for(let V=0;V<t;V++)P[V]=0,I[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,P,I,N){const V=r.attributes,W=P.attributes;let q=0;const Z=I.getAttributes();for(const k in Z)if(Z[k].location>=0){const ae=V[k];let xe=W[k];if(xe===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor)),ae===void 0||ae.attribute!==xe||xe&&ae.data!==xe.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function g(y,P,I,N){const V={},W=P.attributes;let q=0;const Z=I.getAttributes();for(const k in Z)if(Z[k].location>=0){let ae=W[k];ae===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const xe={};xe.attribute=ae,ae&&ae.data&&(xe.data=ae.data),V[k]=xe,q++}r.attributes=V,r.attributesNum=q,r.index=N}function x(){const y=r.newAttributes;for(let P=0,I=y.length;P<I;P++)y[P]=0}function m(y){f(y,0)}function f(y,P){const I=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;I[y]=1,N[y]===0&&(n.enableVertexAttribArray(y),N[y]=1),V[y]!==P&&(n.vertexAttribDivisor(y,P),V[y]=P)}function M(){const y=r.newAttributes,P=r.enabledAttributes;for(let I=0,N=P.length;I<N;I++)P[I]!==y[I]&&(n.disableVertexAttribArray(I),P[I]=0)}function b(y,P,I,N,V,W,q){q===!0?n.vertexAttribIPointer(y,P,I,V,W):n.vertexAttribPointer(y,P,I,N,V,W)}function E(y,P,I,N){x();const V=N.attributes,W=I.getAttributes(),q=P.defaultAttributeValues;for(const Z in W){const k=W[Z];if(k.location>=0){let ee=V[Z];if(ee===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){const ae=ee.normalized,xe=ee.itemSize,He=e.get(ee);if(He===void 0)continue;const Je=He.buffer,st=He.type,it=He.bytesPerElement,Y=st===n.INT||st===n.UNSIGNED_INT||ee.gpuType===vc;if(ee.isInterleavedBufferAttribute){const Q=ee.data,me=Q.stride,Ne=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let we=0;we<k.locationSize;we++)f(k.location+we,Q.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let we=0;we<k.locationSize;we++)m(k.location+we);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let we=0;we<k.locationSize;we++)b(k.location+we,xe/k.locationSize,st,ae,me*it,(Ne+xe/k.locationSize*we)*it,Y)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)f(k.location+Q,ee.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Q=0;Q<k.locationSize;Q++)b(k.location+Q,xe/k.locationSize,st,ae,xe*it,xe/k.locationSize*Q*it,Y)}}else if(q!==void 0){const ae=q[Z];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(k.location,ae);break;case 3:n.vertexAttrib3fv(k.location,ae);break;case 4:n.vertexAttrib4fv(k.location,ae);break;default:n.vertexAttrib1fv(k.location,ae)}}}}M()}function A(){U();for(const y in i){const P=i[y];for(const I in P){const N=P[I];for(const V in N)u(N[V].object),delete N[V];delete P[I]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const I in P){const N=P[I];for(const V in N)u(N[V].object),delete N[V];delete P[I]}delete i[y.id]}function C(y){for(const P in i){const I=i[P];if(I[y.id]===void 0)continue;const N=I[y.id];for(const V in N)u(N[V].object),delete N[V];delete I[y.id]}}function U(){v(),s=!0,r!==a&&(r=a,c(r.object))}function v(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function iM(n,e,t){let i;function a(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];t.update(g,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function aM(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==In&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Kn&&!U)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:A,maxSamples:w}}function rM(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new li,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||a;return a=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!a||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,b=M*4;let E=f.clippingState||null;l.value=E,E=u(g,h,b,p);for(let A=0;A!==b;++A)E[A]=t[A];f.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,E=p;b!==x;++b,E+=4)s.copy(d[b]).applyMatrix4(M,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function sM(n){let e=new WeakMap;function t(s,o){return o===sl?s.mapping=Ia:o===ol&&(s.mapping=Ua),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===sl||o===ol)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new tv(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const fi=4,ed=[.125,.215,.35,.446,.526,.582],Li=20,oM=256,Ja=new mv,td=new et;let Co=null,Ro=0,Do=0,Po=!1;const lM=new B;class nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=lM}=r;Co=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,Ro,Do),this._renderer.xr.enabled=Po,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ia||e.mapping===Ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:za,format:vn,colorSpace:Na,depthBuffer:!1},a=id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cM(r)),this._blurMaterial=dM(r,e,t)}return a}_compileMaterial(e){const t=new yn(new wn,e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,i,a,r){const l=new nn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(td),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new br,new Vf({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(td),f=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const A=this._cubeSize;ha(a,E*A,b>2?A:0,A,A),d.setRenderTarget(a),f&&d.render(x,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ia||e.mapping===Ua;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ha(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Ja)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const M=3*Math.max(this._cubeSize,16),b=4*this._cubeSize;this._ggxMaterial=uM(this._lodMax,M,b)}const s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=.05+c*.95,p=d*h,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-fi?i-g+fi:0),f=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,ha(r,m,f,3*x,2*x),a.setRenderTarget(r),a.render(o,Ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ha(e,m,f,3*x,2*x),a.setRenderTarget(e),a.render(o,Ja)}_blur(e,t,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,t,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[a];d.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Li-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Li;m>Li&&Ve(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const f=[];let M=0;for(let C=0;C<Li;++C){const U=C/x,v=Math.exp(-U*U/2);f.push(v),C===0?M+=v:C<m&&(M+=2*v)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const E=this._sizeLods[a],A=3*E*(a>b-fi?a-b+fi:0),w=4*(this._cubeSize-E);ha(t,A,w,3*E,2*E),l.setRenderTarget(t),l.render(d,Ja)}}function cM(n){const e=[],t=[],i=[];let a=n;const r=n-fi+1+ed.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let l=1/o;s>n-fi?l=ed[s-n+fi-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,f=1,M=new Float32Array(x*g*p),b=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,U=w>2?0:-1,v=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];M.set(v,x*g*w),b.set(h,m*g*w);const y=[w,w,w,w,w,w];E.set(y,f*g*w)}const A=new wn;A.setAttribute("position",new Pn(M,x)),A.setAttribute("uv",new Pn(b,m)),A.setAttribute("faceIndex",new Pn(E,f)),i.push(new yn(A,null)),a>fi&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function id(n,e,t){const i=new Wi(n,e,t);return i.texture.mapping=Ls,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function uM(n,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ns(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function dM(n,e,t){const i=new Float32Array(Li),a=new B(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ns(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ad(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ns(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function rd(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ns(){return`

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
	`}function fM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===sl||l===ol,u=l===Ia||l===Ua;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new nd(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&a(p)?(t===null&&(t=new nd(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function hM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&hr("WebGLRenderer: "+i+" extension not supported."),a}}}function pM(n,e,t,i){const a={},r=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete a[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let b=0,E=M.length;b<E;b+=3){const A=M[b+0],w=M[b+1],C=M[b+2];h.push(A,w,w,C,C,A)}}else if(g!==void 0){const M=g.array;x=g.version;for(let b=0,E=M.length/3-1;b<E;b+=3){const A=b+0,w=b+1,C=b+2;h.push(A,w,w,C,C,A)}}else return;const m=new(Of(h)?Gf:Hf)(h,1);m.version=x;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function mM(n,e,t){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*s),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,h*s,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/s,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,x,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*x[M];t.update(f,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function gM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Et("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function xM(n,e,t){const i=new WeakMap,a=new pt;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let v=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",v)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let E=o.attributes.position.count*b,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*d),C=new Bf(w,E,A,d);C.type=Kn,C.needsUpdate=!0;const U=b*4;for(let y=0;y<d;y++){const P=m[y],I=f[y],N=M[y],V=E*A*4*y;for(let W=0;W<P.count;W++){const q=W*U;p===!0&&(a.fromBufferAttribute(P,W),w[V+q+0]=a.x,w[V+q+1]=a.y,w[V+q+2]=a.z,w[V+q+3]=0),g===!0&&(a.fromBufferAttribute(I,W),w[V+q+4]=a.x,w[V+q+5]=a.y,w[V+q+6]=a.z,w[V+q+7]=0),x===!0&&(a.fromBufferAttribute(N,W),w[V+q+8]=a.x,w[V+q+9]=a.y,w[V+q+10]=a.z,w[V+q+11]=N.itemSize===4?a.w:1)}}h={count:d,texture:C,size:new We(E,A)},i.set(o,h),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function _M(n,e,t,i){let a=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return d}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Jf=new Gt,sd=new Yf(1,1),Qf=new Bf,eh=new B_,th=new $f,od=[],ld=[],cd=new Float32Array(16),ud=new Float32Array(9),dd=new Float32Array(4);function Ga(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=od[a];if(r===void 0&&(r=new Float32Array(a),od[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fs(n,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function SM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;dd.set(i),n.uniformMatrix2fv(this.addr,!1,dd),It(t,i)}}function EM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;ud.set(i),n.uniformMatrix3fv(this.addr,!1,ud),It(t,i)}}function wM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),It(t,i)}}function TM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function DM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function UM(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(sd.compareFunction=Ff,r=sd):r=Jf,t.setTexture2D(e||r,a)}function NM(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||eh,a)}function FM(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||th,a)}function OM(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Qf,a)}function BM(n){switch(n){case 5126:return vM;case 35664:return yM;case 35665:return bM;case 35666:return MM;case 35674:return SM;case 35675:return EM;case 35676:return wM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return CM;case 35669:case 35673:return RM;case 5125:return DM;case 36294:return PM;case 36295:return LM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}function kM(n,e){n.uniform1fv(this.addr,e)}function zM(n,e){const t=Ga(e,this.size,2);n.uniform2fv(this.addr,t)}function VM(n,e){const t=Ga(e,this.size,3);n.uniform3fv(this.addr,t)}function HM(n,e){const t=Ga(e,this.size,4);n.uniform4fv(this.addr,t)}function GM(n,e){const t=Ga(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function WM(n,e){const t=Ga(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qM(n,e){const t=Ga(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $M(n,e){n.uniform1iv(this.addr,e)}function XM(n,e){n.uniform2iv(this.addr,e)}function YM(n,e){n.uniform3iv(this.addr,e)}function jM(n,e){n.uniform4iv(this.addr,e)}function KM(n,e){n.uniform1uiv(this.addr,e)}function ZM(n,e){n.uniform2uiv(this.addr,e)}function JM(n,e){n.uniform3uiv(this.addr,e)}function QM(n,e){n.uniform4uiv(this.addr,e)}function eS(n,e,t){const i=this.cache,a=e.length,r=Fs(t,a);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||Jf,r[s])}function tS(n,e,t){const i=this.cache,a=e.length,r=Fs(t,a);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||eh,r[s])}function nS(n,e,t){const i=this.cache,a=e.length,r=Fs(t,a);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||th,r[s])}function iS(n,e,t){const i=this.cache,a=e.length,r=Fs(t,a);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Qf,r[s])}function aS(n){switch(n){case 5126:return kM;case 35664:return zM;case 35665:return VM;case 35666:return HM;case 35674:return GM;case 35675:return WM;case 35676:return qM;case 5124:case 35670:return $M;case 35667:case 35671:return XM;case 35668:case 35672:return YM;case 35669:case 35673:return jM;case 5125:return KM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}class rS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BM(t.type)}}class sS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aS(t.type)}}class oS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function fd(n,e){n.seq.push(e),n.map[e.id]=e}function lS(n,e,t){const i=n.name,a=i.length;for(Lo.lastIndex=0;;){const r=Lo.exec(i),s=Lo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){fd(t,c===void 0?new rS(o,n,e):new sS(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new oS(o),fd(t,d)),t=d}}}class os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=e.getActiveUniform(t,a),s=e.getUniformLocation(t,r.name);lS(r,s,this)}}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const cS=37297;let uS=0;function dS(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const pd=new Xe;function fS(n){rt._getMatrix(pd,rt.workingColorSpace,n);const e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case xs:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dS(n.getShaderSource(e),o)}else return r}function hS(n,e){const t=fS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pS(n,e){let t;switch(e){case Zx:t="Linear";break;case Jx:t="Reinhard";break;case Qx:t="Cineon";break;case e_:t="ACESFilmic";break;case n_:t="AgX";break;case i_:t="Neutral";break;case t_:t="Custom";break;default:Ve("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kr=new B;function mS(){rt.getLuminanceCoefficients(Kr);const n=Kr.x.toFixed(4),e=Kr.y.toFixed(4),t=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function xS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _S(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function er(n){return n!==""}function gd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(n){return n.replace(vS,bS)}const yS=new Map;function bS(n,e){let t=Ye[e];if(t===void 0){const i=yS.get(e);if(i!==void 0)t=Ye[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bl(t)}const MS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(n){return n.replace(MS,SS)}function SS(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function vd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ES(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function wS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ia:case Ua:e="ENVMAP_TYPE_CUBE";break;case Ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ua:e="ENVMAP_MODE_REFRACTION";break}return e}function AS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tf:e="ENVMAP_BLENDING_MULTIPLY";break;case jx:e="ENVMAP_BLENDING_MIX";break;case Kx:e="ENVMAP_BLENDING_ADD";break}return e}function CS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function RS(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=ES(t),c=wS(t),u=TS(t),d=AS(t),h=CS(t),p=gS(t),g=xS(r),x=a.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),f.length>0&&(f+=`
`)):(m=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),f=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==hi?pS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,hS("linearToOutputTexel",t.outputColorSpace),mS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),s=Bl(s),s=gd(s,t),s=xd(s,t),o=Bl(o),o=gd(o,t),o=xd(o,t),s=_d(s),o=_d(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=M+m+s,E=M+f+o,A=hd(a,a.VERTEX_SHADER,b),w=hd(a,a.FRAGMENT_SHADER,E);a.attachShader(x,A),a.attachShader(x,w),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function C(P){if(n.debug.checkShaderErrors){const I=a.getProgramInfoLog(x)||"",N=a.getShaderInfoLog(A)||"",V=a.getShaderInfoLog(w)||"",W=I.trim(),q=N.trim(),Z=V.trim();let k=!0,ee=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,x,A,w);else{const ae=md(a,A,"vertex"),xe=md(a,w,"fragment");Et("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ae+`
`+xe)}else W!==""?Ve("WebGLProgram: Program Info Log:",W):(q===""||Z==="")&&(ee=!1);ee&&(P.diagnostics={runnable:k,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:Z,prefix:f}})}a.deleteShader(A),a.deleteShader(w),U=new os(a,x),v=_S(a,x)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(x,cS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let DS=0;class PS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new LS(e),t.set(e,i)),i}}class LS{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}}function IS(n,e,t,i,a,r,s){const o=new kf,l=new PS,c=new Set,u=[],d=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,P,I,N){const V=I.fog,W=N.geometry,q=v.isMeshStandardMaterial?I.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),k=Z&&Z.mapping===Ls?Z.image.height:null,ee=g[v.type];v.precision!==null&&(p=a.getMaxPrecision(v.precision),p!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=ae!==void 0?ae.length:0;let He=0;W.morphAttributes.position!==void 0&&(He=1),W.morphAttributes.normal!==void 0&&(He=2),W.morphAttributes.color!==void 0&&(He=3);let Je,st,it,Y;if(ee){const ut=An[ee];Je=ut.vertexShader,st=ut.fragmentShader}else Je=v.vertexShader,st=v.fragmentShader,l.update(v),it=l.getVertexShaderID(v),Y=l.getFragmentShaderID(v);const Q=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,we=N.isBatchedMesh===!0,$e=!!v.map,Be=!!v.matcap,ke=!!Z,ot=!!v.aoMap,D=!!v.lightMap,Ke=!!v.bumpMap,je=!!v.normalMap,ct=!!v.displacementMap,ye=!!v.emissiveMap,gt=!!v.metalnessMap,Ae=!!v.roughnessMap,ze=v.anisotropy>0,T=v.clearcoat>0,_=v.dispersion>0,z=v.iridescence>0,j=v.sheen>0,X=v.transmission>0,H=ze&&!!v.anisotropyMap,be=T&&!!v.clearcoatMap,fe=T&&!!v.clearcoatNormalMap,Re=T&&!!v.clearcoatRoughnessMap,Te=z&&!!v.iridescenceMap,ne=z&&!!v.iridescenceThicknessMap,oe=j&&!!v.sheenColorMap,Ue=j&&!!v.sheenRoughnessMap,Le=!!v.specularMap,ge=!!v.specularColorMap,Oe=!!v.specularIntensityMap,L=X&&!!v.transmissionMap,he=X&&!!v.thicknessMap,le=!!v.gradientMap,ce=!!v.alphaMap,re=v.alphaTest>0,K=!!v.alphaHash,Me=!!v.extensions;let Ge=hi;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const xt={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:Je,fragmentShader:st,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:we,batchingColor:we&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Na,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:Be,envMap:ke,envMapMode:ke&&Z.mapping,envMapCubeUVHeight:k,aoMap:ot,lightMap:D,bumpMap:Ke,normalMap:je,displacementMap:h&&ct,emissiveMap:ye,normalMapObjectSpace:je&&v.normalMapType===o_,normalMapTangentSpace:je&&v.normalMapType===Nf,metalnessMap:gt,roughnessMap:Ae,anisotropy:ze,anisotropyMap:H,clearcoat:T,clearcoatMap:be,clearcoatNormalMap:fe,clearcoatRoughnessMap:Re,dispersion:_,iridescence:z,iridescenceMap:Te,iridescenceThicknessMap:ne,sheen:j,sheenColorMap:oe,sheenRoughnessMap:Ue,specularMap:Le,specularColorMap:ge,specularIntensityMap:Oe,transmission:X,transmissionMap:L,thicknessMap:he,gradientMap:le,opaque:v.transparent===!1&&v.blending===wa&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:re,alphaHash:K,combine:v.combine,mapUv:$e&&x(v.map.channel),aoMapUv:ot&&x(v.aoMap.channel),lightMapUv:D&&x(v.lightMap.channel),bumpMapUv:Ke&&x(v.bumpMap.channel),normalMapUv:je&&x(v.normalMap.channel),displacementMapUv:ct&&x(v.displacementMap.channel),emissiveMapUv:ye&&x(v.emissiveMap.channel),metalnessMapUv:gt&&x(v.metalnessMap.channel),roughnessMapUv:Ae&&x(v.roughnessMap.channel),anisotropyMapUv:H&&x(v.anisotropyMap.channel),clearcoatMapUv:be&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(v.sheenRoughnessMap.channel),specularMapUv:Le&&x(v.specularMap.channel),specularColorMapUv:ge&&x(v.specularColorMap.channel),specularIntensityMapUv:Oe&&x(v.specularIntensityMap.channel),transmissionMapUv:L&&x(v.transmissionMap.channel),thicknessMapUv:he&&x(v.thicknessMap.channel),alphaMapUv:ce&&x(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(je||ze),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&($e||ce),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:He,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:ye&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$n,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function f(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)y.push(P),y.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(M(y,v),b(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function M(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const y=g[v.type];let P;if(y){const I=An[y];P=Z_.clone(I.uniforms)}else P=v.uniforms;return P}function A(v,y){let P;for(let I=0,N=u.length;I<N;I++){const V=u[I];if(V.cacheKey===y){P=V,++P.usedTimes;break}}return P===void 0&&(P=new RS(n,y,v,r),u.push(P)),P}function w(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:U}}function US(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,l){n.get(s)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function NS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bd(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(d,h,p,g,x,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function o(d,h,p,g,x,m){const f=s(d,h,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?a.push(f):t.push(f)}function l(d,h,p,g,x,m){const f=s(d,h,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?a.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||NS),i.length>1&&i.sort(h||yd),a.length>1&&a.sort(h||yd)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:u,sort:c}}function FS(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new bd,n.set(i,[s])):a>=r.length?(s=new bd,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function OS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new et};break;case"SpotLight":t={position:new B,direction:new B,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function BS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kS=0;function zS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VS(n){const e=new OS,t=BS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const a=new B,r=new yt,s=new yt;function o(c){let u=0,d=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,M=0,b=0,E=0,A=0,w=0,C=0;c.sort(zS);for(let v=0,y=c.length;v<y;v++){const P=c[v],I=P.color,N=P.intensity,V=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=I.r*N,d+=I.g*N,h+=I.b*N;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],N);C++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,k=t.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=P.shadow.matrix,M++}i.directional[p]=q,p++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(I).multiplyScalar(N),q.distance=V,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[x]=q;const Z=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,Z.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[x]=Z.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=W,E++}x++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(I).multiplyScalar(N),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Z=P.shadow,k=t.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(N),q.groundColor.copy(P.groundColor).multiplyScalar(N),i.hemi[f]=q,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==M||U.numPointShadows!==b||U.numSpotShadows!==E||U.numSpotMaps!==A||U.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=M,U.numPointShadows=b,U.numSpotShadows=E,U.numSpotMaps=A,U.numLightProbes=C,i.version=kS++)}function l(c,u){let d=0,h=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const b=c[f];if(b.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),d++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),s.identity(),r.copy(b.matrixWorld),r.premultiply(m),s.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Md(n){const e=new VS(n),t=[],i=[];function a(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function HS(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Md(n),e.set(a,[o])):r>=s.length?(o=new Md(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const GS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WS=`uniform sampler2D shadow_pass;
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
}`;function qS(n,e,t){let i=new Rc;const a=new We,r=new We,s=new pt,o=new uv({depthPacking:s_}),l=new dv,c={},u=t.maxTextureSize,d={[xi]:Ht,[Ht]:xi,[$n]:$n},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:GS,fragmentShader:WS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new yn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf;let f=this.type;this.render=function(w,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const v=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Zn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=f!==Wn&&this.type===Wn,V=f===Wn&&this.type!==Wn;for(let W=0,q=w.length;W<q;W++){const Z=w[W],k=Z.shadow;if(k===void 0){Ve("WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ee=k.getFrameExtents();if(a.multiply(ee),r.copy(k.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/ee.x),a.x=r.x*ee.x,k.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/ee.y),a.y=r.y*ee.y,k.mapSize.y=r.y)),k.map===null||N===!0||V===!0){const xe=this.type!==Wn?{minFilter:rn,magFilter:rn}:{};k.map!==null&&k.map.dispose(),k.map=new Wi(a.x,a.y,xe),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ae=k.getViewportCount();for(let xe=0;xe<ae;xe++){const He=k.getViewport(xe);s.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),I.viewport(s),k.updateMatrices(Z,xe),i=k.getFrustum(),E(C,U,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===Wn&&M(k,U),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(v,y,P)};function M(w,C){const U=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Wi(a.x,a.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,U,h,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,U,p,x,null)}function b(w,C,U,v){let y=null;const P=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=U.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=y.uuid,N=C.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let W=V[N];W===void 0&&(W=y.clone(),V[N]=W,C.addEventListener("dispose",A)),y=W}if(y.visible=C.visible,y.wireframe=C.wireframe,v===Wn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=n.properties.get(y);I.light=U}return y}function E(w,C,U,v,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Wn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const N=e.update(w),V=w.material;if(Array.isArray(V)){const W=N.groups;for(let q=0,Z=W.length;q<Z;q++){const k=W[q],ee=V[k.materialIndex];if(ee&&ee.visible){const ae=b(w,ee,v,y);w.onBeforeShadow(n,w,C,U,N,ae,k),n.renderBufferDirect(U,null,N,ae,w,k),w.onAfterShadow(n,w,C,U,N,ae,k)}}}else if(V.visible){const W=b(w,V,v,y);w.onBeforeShadow(n,w,C,U,N,W,null),n.renderBufferDirect(U,null,N,W,w,null),w.onAfterShadow(n,w,C,U,N,W,null)}}const I=w.children;for(let N=0,V=I.length;N<V;N++)E(I[N],C,U,v,y)}function A(w){w.target.removeEventListener("dispose",A);for(const U in c){const v=c[U],y=w.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const $S={[Qo]:el,[tl]:al,[nl]:rl,[La]:il,[el]:Qo,[al]:tl,[rl]:nl,[il]:La};function XS(n,e){function t(){let L=!1;const he=new pt;let le=null;const ce=new pt(0,0,0,0);return{setMask:function(re){le!==re&&!L&&(n.colorMask(re,re,re,re),le=re)},setLocked:function(re){L=re},setClear:function(re,K,Me,Ge,xt){xt===!0&&(re*=Ge,K*=Ge,Me*=Ge),he.set(re,K,Me,Ge),ce.equals(he)===!1&&(n.clearColor(re,K,Me,Ge),ce.copy(he))},reset:function(){L=!1,le=null,ce.set(-1,0,0,0)}}}function i(){let L=!1,he=!1,le=null,ce=null,re=null;return{setReversed:function(K){if(he!==K){const Me=e.get("EXT_clip_control");K?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),he=K;const Ge=re;re=null,this.setClear(Ge)}},getReversed:function(){return he},setTest:function(K){K?Q(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(K){le!==K&&!L&&(n.depthMask(K),le=K)},setFunc:function(K){if(he&&(K=$S[K]),ce!==K){switch(K){case Qo:n.depthFunc(n.NEVER);break;case el:n.depthFunc(n.ALWAYS);break;case tl:n.depthFunc(n.LESS);break;case La:n.depthFunc(n.LEQUAL);break;case nl:n.depthFunc(n.EQUAL);break;case il:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=K}},setLocked:function(K){L=K},setClear:function(K){re!==K&&(he&&(K=1-K),n.clearDepth(K),re=K)},reset:function(){L=!1,le=null,ce=null,re=null,he=!1}}}function a(){let L=!1,he=null,le=null,ce=null,re=null,K=null,Me=null,Ge=null,xt=null;return{setTest:function(ut){L||(ut?Q(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(ut){he!==ut&&!L&&(n.stencilMask(ut),he=ut)},setFunc:function(ut,Tn,hn){(le!==ut||ce!==Tn||re!==hn)&&(n.stencilFunc(ut,Tn,hn),le=ut,ce=Tn,re=hn)},setOp:function(ut,Tn,hn){(K!==ut||Me!==Tn||Ge!==hn)&&(n.stencilOp(ut,Tn,hn),K=ut,Me=Tn,Ge=hn)},setLocked:function(ut){L=ut},setClear:function(ut){xt!==ut&&(n.clearStencil(ut),xt=ut)},reset:function(){L=!1,he=null,le=null,ce=null,re=null,K=null,Me=null,Ge=null,xt=null}}}const r=new t,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,M=null,b=null,E=null,A=null,w=null,C=new et(0,0,0),U=0,v=!1,y=null,P=null,I=null,N=null,V=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=Z>=2);let ee=null,ae={};const xe=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Je=new pt().fromArray(xe),st=new pt().fromArray(He);function it(L,he,le,ce){const re=new Uint8Array(4),K=n.createTexture();n.bindTexture(L,K),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<le;Me++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(he+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return K}const Y={};Y[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),s.setFunc(La),Ke(!1),je(bu),Q(n.CULL_FACE),ot(Zn);function Q(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function me(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ne(L,he){return d[L]!==he?(n.bindFramebuffer(L,he),d[L]=he,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=he),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=he),!0):!1}function we(L,he){let le=p,ce=!1;if(L){le=h.get(he),le===void 0&&(le=[],h.set(he,le));const re=L.textures;if(le.length!==re.length||le[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Me=re.length;K<Me;K++)le[K]=n.COLOR_ATTACHMENT0+K;le.length=re.length,ce=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ce=!0);ce&&n.drawBuffers(le)}function $e(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Be={[Pi]:n.FUNC_ADD,[Lx]:n.FUNC_SUBTRACT,[Ix]:n.FUNC_REVERSE_SUBTRACT};Be[Ux]=n.MIN,Be[Nx]=n.MAX;const ke={[Fx]:n.ZERO,[Ox]:n.ONE,[Bx]:n.SRC_COLOR,[Zo]:n.SRC_ALPHA,[Wx]:n.SRC_ALPHA_SATURATE,[Hx]:n.DST_COLOR,[zx]:n.DST_ALPHA,[kx]:n.ONE_MINUS_SRC_COLOR,[Jo]:n.ONE_MINUS_SRC_ALPHA,[Gx]:n.ONE_MINUS_DST_COLOR,[Vx]:n.ONE_MINUS_DST_ALPHA,[qx]:n.CONSTANT_COLOR,[$x]:n.ONE_MINUS_CONSTANT_COLOR,[Xx]:n.CONSTANT_ALPHA,[Yx]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(L,he,le,ce,re,K,Me,Ge,xt,ut){if(L===Zn){x===!0&&(me(n.BLEND),x=!1);return}if(x===!1&&(Q(n.BLEND),x=!0),L!==Px){if(L!==m||ut!==v){if((f!==Pi||E!==Pi)&&(n.blendEquation(n.FUNC_ADD),f=Pi,E=Pi),ut)switch(L){case wa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ko:n.blendFunc(n.ONE,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",L);break}else switch(L){case wa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ko:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mu:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",L);break}M=null,b=null,A=null,w=null,C.set(0,0,0),U=0,m=L,v=ut}return}re=re||he,K=K||le,Me=Me||ce,(he!==f||re!==E)&&(n.blendEquationSeparate(Be[he],Be[re]),f=he,E=re),(le!==M||ce!==b||K!==A||Me!==w)&&(n.blendFuncSeparate(ke[le],ke[ce],ke[K],ke[Me]),M=le,b=ce,A=K,w=Me),(Ge.equals(C)===!1||xt!==U)&&(n.blendColor(Ge.r,Ge.g,Ge.b,xt),C.copy(Ge),U=xt),m=L,v=!1}function D(L,he){L.side===$n?me(n.CULL_FACE):Q(n.CULL_FACE);let le=L.side===Ht;he&&(le=!le),Ke(le),L.blending===wa&&L.transparent===!1?ot(Zn):ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(L){y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),y=L)}function je(L){L!==Cx?(Q(n.CULL_FACE),L!==P&&(L===bu?n.cullFace(n.BACK):L===Rx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),P=L}function ct(L){L!==I&&(q&&n.lineWidth(L),I=L)}function ye(L,he,le){L?(Q(n.POLYGON_OFFSET_FILL),(N!==he||V!==le)&&(n.polygonOffset(he,le),N=he,V=le)):me(n.POLYGON_OFFSET_FILL)}function gt(L){L?Q(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Ae(L){L===void 0&&(L=n.TEXTURE0+W-1),ee!==L&&(n.activeTexture(L),ee=L)}function ze(L,he,le){le===void 0&&(ee===null?le=n.TEXTURE0+W-1:le=ee);let ce=ae[le];ce===void 0&&(ce={type:void 0,texture:void 0},ae[le]=ce),(ce.type!==L||ce.texture!==he)&&(ee!==le&&(n.activeTexture(le),ee=le),n.bindTexture(L,he||Y[L]),ce.type=L,ce.texture=he)}function T(){const L=ae[ee];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function j(){try{n.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function X(){try{n.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function fe(){try{n.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Re(){try{n.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Te(){try{n.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ne(){try{n.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function oe(L){Je.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Je.copy(L))}function Ue(L){st.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),st.copy(L))}function Le(L,he){let le=c.get(he);le===void 0&&(le=new WeakMap,c.set(he,le));let ce=le.get(L);ce===void 0&&(ce=n.getUniformBlockIndex(he,L.name),le.set(L,ce))}function ge(L,he){const ce=c.get(he).get(L);l.get(he)!==ce&&(n.uniformBlockBinding(he,ce,L.__bindingPointIndex),l.set(he,ce))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ee=null,ae={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,M=null,b=null,E=null,A=null,w=null,C=new et(0,0,0),U=0,v=!1,y=null,P=null,I=null,N=null,V=null,Je.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Q,disable:me,bindFramebuffer:Ne,drawBuffers:we,useProgram:$e,setBlending:ot,setMaterial:D,setFlipSided:Ke,setCullFace:je,setLineWidth:ct,setPolygonOffset:ye,setScissorTest:gt,activeTexture:Ae,bindTexture:ze,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:Te,texImage3D:ne,updateUBOMapping:Le,uniformBlockBinding:ge,texStorage2D:fe,texStorage3D:Re,texSubImage2D:j,texSubImage3D:X,compressedTexSubImage2D:H,compressedTexSubImage3D:be,scissor:oe,viewport:Ue,reset:Oe}}function YS(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):vs("canvas")}function x(T,_,z){let j=1;const X=ze(T);if((X.width>z||X.height>z)&&(j=z/Math.max(X.width,X.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(j*X.width),be=Math.floor(j*X.height);d===void 0&&(d=g(H,be));const fe=_?g(H,be):d;return fe.width=H,fe.height=be,fe.getContext("2d").drawImage(T,0,0,H,be),Ve("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+H+"x"+be+")."),fe}else return"data"in T&&Ve("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,_,z,j,X=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=_;if(_===n.RED&&(z===n.FLOAT&&(H=n.R32F),z===n.HALF_FLOAT&&(H=n.R16F),z===n.UNSIGNED_BYTE&&(H=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(H=n.R8UI),z===n.UNSIGNED_SHORT&&(H=n.R16UI),z===n.UNSIGNED_INT&&(H=n.R32UI),z===n.BYTE&&(H=n.R8I),z===n.SHORT&&(H=n.R16I),z===n.INT&&(H=n.R32I)),_===n.RG&&(z===n.FLOAT&&(H=n.RG32F),z===n.HALF_FLOAT&&(H=n.RG16F),z===n.UNSIGNED_BYTE&&(H=n.RG8)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(H=n.RG8UI),z===n.UNSIGNED_SHORT&&(H=n.RG16UI),z===n.UNSIGNED_INT&&(H=n.RG32UI),z===n.BYTE&&(H=n.RG8I),z===n.SHORT&&(H=n.RG16I),z===n.INT&&(H=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(H=n.RGB8UI),z===n.UNSIGNED_SHORT&&(H=n.RGB16UI),z===n.UNSIGNED_INT&&(H=n.RGB32UI),z===n.BYTE&&(H=n.RGB8I),z===n.SHORT&&(H=n.RGB16I),z===n.INT&&(H=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),z===n.UNSIGNED_INT&&(H=n.RGBA32UI),z===n.BYTE&&(H=n.RGBA8I),z===n.SHORT&&(H=n.RGBA16I),z===n.INT&&(H=n.RGBA32I)),_===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),_===n.RGBA){const be=X?xs:rt.getTransfer(j);z===n.FLOAT&&(H=n.RGBA32F),z===n.HALF_FLOAT&&(H=n.RGBA16F),z===n.UNSIGNED_BYTE&&(H=be===ft?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function E(T,_){let z;return T?_===null||_===Gi||_===ur?z=n.DEPTH24_STENCIL8:_===Kn?z=n.DEPTH32F_STENCIL8:_===cr&&(z=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Gi||_===ur?z=n.DEPTH_COMPONENT24:_===Kn?z=n.DEPTH_COMPONENT32F:_===cr&&(z=n.DEPTH_COMPONENT16),z}function A(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==dn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function w(T){const _=T.target;_.removeEventListener("dispose",w),U(_),_.isVideoTexture&&u.delete(_)}function C(T){const _=T.target;_.removeEventListener("dispose",C),y(_)}function U(T){const _=i.get(T);if(_.__webglInit===void 0)return;const z=T.source,j=h.get(z);if(j){const X=j[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&v(T),Object.keys(j).length===0&&h.delete(z)}i.remove(T)}function v(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const z=T.source,j=h.get(z);delete j[_.__cacheKey],s.memory.textures--}function y(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let X=0;X<_.__webglFramebuffer[j].length;X++)n.deleteFramebuffer(_.__webglFramebuffer[j][X]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=T.textures;for(let j=0,X=z.length;j<X;j++){const H=i.get(z[j]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),s.memory.textures--),i.remove(z[j])}i.remove(T)}let P=0;function I(){P=0}function N(){const T=P;return T>=a.maxTextures&&Ve("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),P+=1,T}function V(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function W(T,_){const z=i.get(T);if(T.isVideoTexture&&gt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const j=T.image;if(j===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function q(T,_){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Y(z,T,_);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function Z(T,_){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Y(z,T,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function k(T,_){const z=i.get(T);if(T.version>0&&z.__version!==T.version){Q(z,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}const ee={[ll]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},ae={[rn]:n.NEAREST,[a_]:n.NEAREST_MIPMAP_NEAREST,[Rr]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[to]:n.LINEAR_MIPMAP_NEAREST,[Oi]:n.LINEAR_MIPMAP_LINEAR},xe={[l_]:n.NEVER,[p_]:n.ALWAYS,[c_]:n.LESS,[Ff]:n.LEQUAL,[u_]:n.EQUAL,[h_]:n.GEQUAL,[d_]:n.GREATER,[f_]:n.NOTEQUAL};function He(T,_){if(_.type===Kn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===dn||_.magFilter===to||_.magFilter===Rr||_.magFilter===Oi||_.minFilter===dn||_.minFilter===to||_.minFilter===Rr||_.minFilter===Oi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ee[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ee[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ee[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ae[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==Rr&&_.minFilter!==Oi||_.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Je(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",w));const j=_.source;let X=h.get(j);X===void 0&&(X={},h.set(j,X));const H=V(_);if(H!==T.__cacheKey){X[H]===void 0&&(X[H]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,z=!0),X[H].usedTimes++;const be=X[T.__cacheKey];be!==void 0&&(X[T.__cacheKey].usedTimes--,be.usedTimes===0&&v(_)),T.__cacheKey=H,T.__webglTexture=X[H].texture}return z}function st(T,_,z){return Math.floor(Math.floor(T/z)/_)}function it(T,_,z,j){const H=T.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,z,j,_.data);else{H.sort((ne,oe)=>ne.start-oe.start);let be=0;for(let ne=1;ne<H.length;ne++){const oe=H[be],Ue=H[ne],Le=oe.start+oe.count,ge=st(Ue.start,_.width,4),Oe=st(oe.start,_.width,4);Ue.start<=Le+1&&ge===Oe&&st(Ue.start+Ue.count-1,_.width,4)===ge?oe.count=Math.max(oe.count,Ue.start+Ue.count-oe.start):(++be,H[be]=Ue)}H.length=be+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ne=0,oe=H.length;ne<oe;ne++){const Ue=H[ne],Le=Math.floor(Ue.start/4),ge=Math.ceil(Ue.count/4),Oe=Le%_.width,L=Math.floor(Le/_.width),he=ge,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Oe,L,he,le,z,j,_.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function Y(T,_,z){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);const X=Je(T,_),H=_.source;t.bindTexture(j,T.__webglTexture,n.TEXTURE0+z);const be=i.get(H);if(H.version!==be.__version||X===!0){t.activeTexture(n.TEXTURE0+z);const fe=rt.getPrimaries(rt.workingColorSpace),Re=_.colorSpace===ui?null:rt.getPrimaries(_.colorSpace),Te=_.colorSpace===ui||fe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ne=x(_.image,!1,a.maxTextureSize);ne=Ae(_,ne);const oe=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type);let Le=b(_.internalFormat,oe,Ue,_.colorSpace,_.isVideoTexture);He(j,_);let ge;const Oe=_.mipmaps,L=_.isVideoTexture!==!0,he=be.__version===void 0||X===!0,le=H.dataReady,ce=A(_,ne);if(_.isDepthTexture)Le=E(_.format===fr,_.type),he&&(L?t.texStorage2D(n.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Le,ne.width,ne.height,0,oe,Ue,null));else if(_.isDataTexture)if(Oe.length>0){L&&he&&t.texStorage2D(n.TEXTURE_2D,ce,Le,Oe[0].width,Oe[0].height);for(let re=0,K=Oe.length;re<K;re++)ge=Oe[re],L?le&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,oe,Ue,ge.data):t.texImage2D(n.TEXTURE_2D,re,Le,ge.width,ge.height,0,oe,Ue,ge.data);_.generateMipmaps=!1}else L?(he&&t.texStorage2D(n.TEXTURE_2D,ce,Le,ne.width,ne.height),le&&it(_,ne,oe,Ue)):t.texImage2D(n.TEXTURE_2D,0,Le,ne.width,ne.height,0,oe,Ue,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Le,Oe[0].width,Oe[0].height,ne.depth);for(let re=0,K=Oe.length;re<K;re++)if(ge=Oe[re],_.format!==vn)if(oe!==null)if(L){if(le)if(_.layerUpdates.size>0){const Me=Qu(ge.width,ge.height,_.format,_.type);for(const Ge of _.layerUpdates){const xt=ge.data.subarray(Ge*Me/ge.data.BYTES_PER_ELEMENT,(Ge+1)*Me/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ge,ge.width,ge.height,1,oe,xt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ne.depth,oe,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Le,ge.width,ge.height,ne.depth,0,ge.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ne.depth,oe,Ue,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Le,ge.width,ge.height,ne.depth,0,oe,Ue,ge.data)}else{L&&he&&t.texStorage2D(n.TEXTURE_2D,ce,Le,Oe[0].width,Oe[0].height);for(let re=0,K=Oe.length;re<K;re++)ge=Oe[re],_.format!==vn?oe!==null?L?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,oe,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Le,ge.width,ge.height,0,ge.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?le&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,oe,Ue,ge.data):t.texImage2D(n.TEXTURE_2D,re,Le,ge.width,ge.height,0,oe,Ue,ge.data)}else if(_.isDataArrayTexture)if(L){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Le,ne.width,ne.height,ne.depth),le)if(_.layerUpdates.size>0){const re=Qu(ne.width,ne.height,_.format,_.type);for(const K of _.layerUpdates){const Me=ne.data.subarray(K*re/ne.data.BYTES_PER_ELEMENT,(K+1)*re/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,oe,Ue,Me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,Ue,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,oe,Ue,ne.data);else if(_.isData3DTexture)L?(he&&t.texStorage3D(n.TEXTURE_3D,ce,Le,ne.width,ne.height,ne.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,Ue,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,oe,Ue,ne.data);else if(_.isFramebufferTexture){if(he)if(L)t.texStorage2D(n.TEXTURE_2D,ce,Le,ne.width,ne.height);else{let re=ne.width,K=ne.height;for(let Me=0;Me<ce;Me++)t.texImage2D(n.TEXTURE_2D,Me,Le,re,K,0,oe,Ue,null),re>>=1,K>>=1}}else if(Oe.length>0){if(L&&he){const re=ze(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ce,Le,re.width,re.height)}for(let re=0,K=Oe.length;re<K;re++)ge=Oe[re],L?le&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,oe,Ue,ge):t.texImage2D(n.TEXTURE_2D,re,Le,oe,Ue,ge);_.generateMipmaps=!1}else if(L){if(he){const re=ze(ne);t.texStorage2D(n.TEXTURE_2D,ce,Le,re.width,re.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Ue,ne)}else t.texImage2D(n.TEXTURE_2D,0,Le,oe,Ue,ne);m(_)&&f(j),be.__version=H.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,z){if(_.image.length!==6)return;const j=Je(T,_),X=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const H=i.get(X);if(X.version!==H.__version||j===!0){t.activeTexture(n.TEXTURE0+z);const be=rt.getPrimaries(rt.workingColorSpace),fe=_.colorSpace===ui?null:rt.getPrimaries(_.colorSpace),Re=_.colorSpace===ui||be===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Te=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!Te&&!ne?oe[K]=x(_.image[K],!0,a.maxCubemapSize):oe[K]=ne?_.image[K].image:_.image[K],oe[K]=Ae(_,oe[K]);const Ue=oe[0],Le=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),Oe=b(_.internalFormat,Le,ge,_.colorSpace),L=_.isVideoTexture!==!0,he=H.__version===void 0||j===!0,le=X.dataReady;let ce=A(_,Ue);He(n.TEXTURE_CUBE_MAP,_);let re;if(Te){L&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Oe,Ue.width,Ue.height);for(let K=0;K<6;K++){re=oe[K].mipmaps;for(let Me=0;Me<re.length;Me++){const Ge=re[Me];_.format!==vn?Le!==null?L?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Ge.width,Ge.height,Le,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,Oe,Ge.width,Ge.height,0,Ge.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Ge.width,Ge.height,Le,ge,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,Oe,Ge.width,Ge.height,0,Le,ge,Ge.data)}}}else{if(re=_.mipmaps,L&&he){re.length>0&&ce++;const K=ze(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Oe,K.width,K.height)}for(let K=0;K<6;K++)if(ne){L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,Le,ge,oe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,oe[K].width,oe[K].height,0,Le,ge,oe[K].data);for(let Me=0;Me<re.length;Me++){const xt=re[Me].image[K].image;L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,xt.width,xt.height,Le,ge,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,Oe,xt.width,xt.height,0,Le,ge,xt.data)}}else{L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,ge,oe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,Le,ge,oe[K]);for(let Me=0;Me<re.length;Me++){const Ge=re[Me];L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,Le,ge,Ge.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,Oe,Le,ge,Ge.image[K])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),H.__version=X.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function me(T,_,z,j,X,H){const be=r.convert(z.format,z.colorSpace),fe=r.convert(z.type),Re=b(z.internalFormat,be,fe,z.colorSpace),Te=i.get(_),ne=i.get(z);if(ne.__renderTarget=_,!Te.__hasExternalTextures){const oe=Math.max(1,_.width>>H),Ue=Math.max(1,_.height>>H);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,H,Re,oe,Ue,_.depth,0,be,fe,null):t.texImage2D(X,H,Re,oe,Ue,0,be,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ye(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,X,ne.__webglTexture,0,ct(_)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,X,ne.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(T,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){const j=_.depthTexture,X=j&&j.isDepthTexture?j.type:null,H=E(_.stencilBuffer,X),be=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ct(_);ye(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,H,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,H,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,H,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,T)}else{const j=_.textures;for(let X=0;X<j.length;X++){const H=j[X],be=r.convert(H.format,H.colorSpace),fe=r.convert(H.type),Re=b(H.internalFormat,be,fe,H.colorSpace),Te=ct(_);z&&ye(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Re,_.width,_.height):ye(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Re,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const X=j.__webglTexture,H=ct(_);if(_.depthTexture.format===dr)ye(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(_.depthTexture.format===fr)ye(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function $e(T){const _=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",X)};j.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=j}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=T.texture.mipmaps;j&&j.length>0?we(_.__webglFramebuffer[0],T):we(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),Ne(_.__webglDepthbuffer[j],T,!1);else{const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,H)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ne(_.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(T,_,z){const j=i.get(T);_!==void 0&&me(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&$e(T)}function ke(T){const _=T.texture,z=i.get(T),j=i.get(_);T.addEventListener("dispose",C);const X=T.textures,H=T.isWebGLCubeRenderTarget===!0,be=X.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,s.memory.textures++),H){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let Re=0;Re<_.mipmaps.length;Re++)z.__webglFramebuffer[fe][Re]=n.createFramebuffer()}else z.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)z.__webglFramebuffer[fe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(be)for(let fe=0,Re=X.length;fe<Re;fe++){const Te=i.get(X[fe]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),s.memory.textures++)}if(T.samples>0&&ye(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<X.length;fe++){const Re=X[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Te=r.convert(Re.format,Re.colorSpace),ne=r.convert(Re.type),oe=b(Re.internalFormat,Te,ne,Re.colorSpace,T.isXRRenderTarget===!0),Ue=ct(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,oe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),He(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)me(z.__webglFramebuffer[fe][Re],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re);else me(z.__webglFramebuffer[fe],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let fe=0,Re=X.length;fe<Re;fe++){const Te=X[fe],ne=i.get(Te);let oe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,ne.__webglTexture),He(oe,Te),me(z.__webglFramebuffer,T,Te,n.COLOR_ATTACHMENT0+fe,oe,0),m(Te)&&f(oe)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),He(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)me(z.__webglFramebuffer[Re],T,_,n.COLOR_ATTACHMENT0,fe,Re);else me(z.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&f(fe),t.unbindTexture()}T.depthBuffer&&$e(T)}function ot(T){const _=T.textures;for(let z=0,j=_.length;z<j;z++){const X=_[z];if(m(X)){const H=M(T),be=i.get(X).__webglTexture;t.bindTexture(H,be),f(H),t.unbindTexture()}}}const D=[],Ke=[];function je(T){if(T.samples>0){if(ye(T)===!1){const _=T.textures,z=T.width,j=T.height;let X=n.COLOR_BUFFER_BIT;const H=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(T),fe=_.length>1;if(fe)for(let Te=0;Te<_.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Re=T.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Te]);const ne=i.get(_[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,z,j,0,0,z,j,X,n.NEAREST),l===!0&&(D.length=0,Ke.length=0,D.push(n.COLOR_ATTACHMENT0+Te),T.depthBuffer&&T.resolveDepthBuffer===!1&&(D.push(H),Ke.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<_.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,be.__webglColorRenderbuffer[Te]);const ne=i.get(_[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ct(T){return Math.min(a.maxSamples,T.samples)}function ye(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function gt(T){const _=s.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Ae(T,_){const z=T.colorSpace,j=T.format,X=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Na&&z!==ui&&(rt.getTransfer(z)===ft?(j!==vn||X!==In)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",z)),_}function ze(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=Be,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye}function jS(n,e){function t(i,a=ui){let r;const s=rt.getTransfer(a);if(i===In)return n.UNSIGNED_BYTE;if(i===yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Df)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cf)return n.BYTE;if(i===Rf)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===vc)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===za)return n.HALF_FLOAT;if(i===Lf)return n.ALPHA;if(i===If)return n.RGB;if(i===vn)return n.RGBA;if(i===dr)return n.DEPTH_COMPONENT;if(i===fr)return n.DEPTH_STENCIL;if(i===Uf)return n.RED;if(i===Mc)return n.RED_INTEGER;if(i===Sc)return n.RG;if(i===Ec)return n.RG_INTEGER;if(i===wc)return n.RGBA_INTEGER;if(i===is||i===as||i===rs||i===ss)if(s===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===as)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ul||i===dl||i===fl||i===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pl||i===ml)return s===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xl||i===_l||i===vl||i===yl||i===bl||i===Ml||i===Sl||i===El||i===wl||i===Tl||i===Al||i===Cl||i===Rl||i===Dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_l)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===El)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Al)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pl||i===Ll||i===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pl)return s===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ul||i===Nl||i===Fl||i===Ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ul)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const KS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZS=`
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

}`;class JS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new jf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Un({vertexShader:KS,fragmentShader:ZS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new Us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QS extends ji{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new JS,f={},M=t.getContextAttributes();let b=null,E=null;const A=[],w=[],C=new We;let U=null;const v=new nn;v.viewport=new pt;const y=new nn;y.viewport=new pt;const P=[v,y],I=new xv;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=A[Y];return Q===void 0&&(Q=new So,A[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=A[Y];return Q===void 0&&(Q=new So,A[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=A[Y];return Q===void 0&&(Q=new So,A[Y]=Q),Q.getHandSpace()};function W(Y){const Q=w.indexOf(Y.inputSource);if(Q===-1)return;const me=A[Q];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||s),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<A.length;Y++){const Q=w[Y];Q!==null&&(w[Y]=null,A[Y].disconnect(Q))}N=null,V=null,m.reset();for(const Y in f)delete f[Y];e.setRenderTarget(b),p=null,h=null,d=null,a=null,E=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(a,t)),d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(b=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",q),a.addEventListener("inputsourceschange",Z),M.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ne=null,we=null;M.depth&&(we=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?fr:dr,Ne=M.stencil?ur:Gi);const $e={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer($e),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Wi(h.textureWidth,h.textureHeight,{format:vn,type:In,depthTexture:new Yf(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,me),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Wi(p.framebufferWidth,p.framebufferHeight,{format:vn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),it.setContext(a),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(Y){for(let Q=0;Q<Y.removed.length;Q++){const me=Y.removed[Q],Ne=w.indexOf(me);Ne>=0&&(w[Ne]=null,A[Ne].disconnect(me))}for(let Q=0;Q<Y.added.length;Q++){const me=Y.added[Q];let Ne=w.indexOf(me);if(Ne===-1){for(let $e=0;$e<A.length;$e++)if($e>=w.length){w.push(me),Ne=$e;break}else if(w[$e]===null){w[$e]=me,Ne=$e;break}if(Ne===-1)break}const we=A[Ne];we&&we.connect(me)}}const k=new B,ee=new B;function ae(Y,Q,me){k.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(me.matrixWorld);const Ne=k.distanceTo(ee),we=Q.projectionMatrix.elements,$e=me.projectionMatrix.elements,Be=we[14]/(we[10]-1),ke=we[14]/(we[10]+1),ot=(we[9]+1)/we[5],D=(we[9]-1)/we[5],Ke=(we[8]-1)/we[0],je=($e[8]+1)/$e[0],ct=Be*Ke,ye=Be*je,gt=Ne/(-Ke+je),Ae=gt*-Ke;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ae),Y.translateZ(gt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ze=Be+gt,T=ke+gt,_=ct-Ae,z=ye+(Ne-Ae),j=ot*ke/T*ze,X=D*ke/T*ze;Y.projectionMatrix.makePerspective(_,z,j,X,ze,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xe(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let Q=Y.near,me=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(me=m.depthFar)),I.near=y.near=v.near=Q,I.far=y.far=v.far=me,(N!==I.near||V!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,V=I.far),I.layers.mask=Y.layers.mask|6,v.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const Ne=Y.parent,we=I.cameras;xe(I,Ne);for(let $e=0;$e<we.length;$e++)xe(we[$e],Ne);we.length===2?ae(I,v,y):I.projectionMatrix.copy(v.projectionMatrix),He(Y,I,Ne)};function He(Y,Q,me){me===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=pr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Y){return f[Y]};let Je=null;function st(Y,Q){if(u=Q.getViewerPose(c||s),g=Q,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ne=!1;me.length!==I.cameras.length&&(I.cameras.length=0,Ne=!0);for(let ke=0;ke<me.length;ke++){const ot=me[ke];let D=null;if(p!==null)D=p.getViewport(ot);else{const je=d.getViewSubImage(h,ot);D=je.viewport,ke===0&&(e.setRenderTargetTextures(E,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(E))}let Ke=P[ke];Ke===void 0&&(Ke=new nn,Ke.layers.enable(ke),Ke.viewport=new pt,P[ke]=Ke),Ke.matrix.fromArray(ot.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ot.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(D.x,D.y,D.width,D.height),ke===0&&(I.matrix.copy(Ke.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ne===!0&&I.cameras.push(Ke)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const ke=d.getDepthInformation(me[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,a.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let ke=0;ke<me.length;ke++){const ot=me[ke].camera;if(ot){let D=f[ot];D||(D=new jf,f[ot]=D);const Ke=d.getCameraImage(ot);D.sourceTexture=Ke}}}}for(let me=0;me<A.length;me++){const Ne=w[me],we=A[me];Ne!==null&&we!==void 0&&we.update(Ne,Q,c||s)}Je&&Je(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const it=new Zf;it.setAnimationLoop(st),this.setAnimationLoop=function(Y){Je=Y},this.dispose=function(){}}}const Ri=new En,e1=new yt;function t1(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Wf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,M,b,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),b=M.envMap,E=M.envMapRotation;b&&(m.envMap.value=b,Ri.copy(E),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(Ri)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function n1(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const E=b.program;i.uniformBlockBinding(M,E)}function c(M,b){let E=a[M.id];E===void 0&&(g(M),E=u(M),a[M.id]=E,M.addEventListener("dispose",m));const A=b.program;i.updateUBOMapping(M,A);const w=e.render.frame;r[M.id]!==w&&(h(M),r[M.id]=w)}function u(M){const b=d();M.__bindingPointIndex=b;const E=n.createBuffer(),A=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=a[M.id],E=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,C=E.length;w<C;w++){const U=Array.isArray(E[w])?E[w]:[E[w]];for(let v=0,y=U.length;v<y;v++){const P=U[v];if(p(P,w,v,A)===!0){const I=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let W=0;W<N.length;W++){const q=N[W],Z=x(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,I+V,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,b,E,A){const w=M.value,C=b+"_"+E;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const U=A[C];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return A[C]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(M){const b=M.uniforms;let E=0;const A=16;for(let C=0,U=b.length;C<U;C++){const v=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,P=v.length;y<P;y++){const I=v[y],N=Array.isArray(I.value)?I.value:[I.value];for(let V=0,W=N.length;V<W;V++){const q=N[V],Z=x(q),k=E%A,ee=k%Z.boundary,ae=k+ee;E+=ee,ae!==0&&A-ae<Z.storage&&(E+=A-ae),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=Z.storage}}}const w=E%A;return w>0&&(E+=A-w),M.__size=E,M.__cache={},this}function x(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const E=s.indexOf(b.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(a[b.id]),delete a[b.id],delete r[b.id]}function f(){for(const M in a)n.deleteBuffer(a[M]);s=[],a={},r={}}return{bind:l,update:c,dispose:f}}const i1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Hn=null;function a1(){return Hn===null&&(Hn=new av(i1,32,32,Sc,za),Hn.minFilter=dn,Hn.magFilter=dn,Hn.wrapS=jn,Hn.wrapT=jn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class r1{constructor(e={}){const{canvas:t=m_(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Set([wc,Ec,Mc]),x=new Set([In,Gi,cr,ur,yc,bc]),m=new Uint32Array(4),f=new Int32Array(4);let M=null,b=null;const E=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1;this._outputColorSpace=cn;let U=0,v=0,y=null,P=-1,I=null;const N=new pt,V=new pt;let W=null;const q=new et(0);let Z=0,k=t.width,ee=t.height,ae=1,xe=null,He=null;const Je=new pt(0,0,k,ee),st=new pt(0,0,k,ee);let it=!1;const Y=new Rc;let Q=!1,me=!1;const Ne=new yt,we=new B,$e=new pt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ot(){return y===null?ae:1}let D=i;function Ke(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_c}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",Me,!1),D===null){const F="webgl2";if(D=Ke(F,S),D===null)throw Ke(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw S("WebGLRenderer: "+S.message),S}let je,ct,ye,gt,Ae,ze,T,_,z,j,X,H,be,fe,Re,Te,ne,oe,Ue,Le,ge,Oe,L,he;function le(){je=new hM(D),je.init(),Oe=new jS(D,je),ct=new aM(D,je,e,Oe),ye=new XS(D,je),ct.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),gt=new gM(D),Ae=new US,ze=new YS(D,je,ye,Ae,ct,Oe,gt),T=new sM(w),_=new fM(w),z=new yv(D),L=new nM(D,z),j=new pM(D,z,gt,L),X=new _M(D,j,z,gt),Ue=new xM(D,ct,ze),Te=new rM(Ae),H=new IS(w,T,_,je,ct,L,Te),be=new t1(w,Ae),fe=new FS,Re=new HS(je),oe=new tM(w,T,_,ye,X,p,l),ne=new qS(w,X,ct),he=new n1(D,gt,ct,ye),Le=new iM(D,je,gt),ge=new mM(D,je,gt),gt.programs=H.programs,w.capabilities=ct,w.extensions=je,w.properties=Ae,w.renderLists=fe,w.shadowMap=ne,w.state=ye,w.info=gt}le();const ce=new QS(w,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(S){S!==void 0&&(ae=S,this.setSize(k,ee,!1))},this.getSize=function(S){return S.set(k,ee)},this.setSize=function(S,F,G=!0){if(ce.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,ee=F,t.width=Math.floor(S*ae),t.height=Math.floor(F*ae),G===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(k*ae,ee*ae).floor()},this.setDrawingBufferSize=function(S,F,G){k=S,ee=F,ae=G,t.width=Math.floor(S*G),t.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(Je)},this.setViewport=function(S,F,G,$){S.isVector4?Je.set(S.x,S.y,S.z,S.w):Je.set(S,F,G,$),ye.viewport(N.copy(Je).multiplyScalar(ae).round())},this.getScissor=function(S){return S.copy(st)},this.setScissor=function(S,F,G,$){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,F,G,$),ye.scissor(V.copy(st).multiplyScalar(ae).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(S){ye.setScissorTest(it=S)},this.setOpaqueSort=function(S){xe=S},this.setTransparentSort=function(S){He=S},this.getClearColor=function(S){return S.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,G=!0){let $=0;if(S){let O=!1;if(y!==null){const se=y.texture.format;O=g.has(se)}if(O){const se=y.texture.type,pe=x.has(se),Se=oe.getClearColor(),_e=oe.getClearAlpha(),Ie=Se.r,Fe=Se.g,Ce=Se.b;pe?(m[0]=Ie,m[1]=Fe,m[2]=Ce,m[3]=_e,D.clearBufferuiv(D.COLOR,0,m)):(f[0]=Ie,f[1]=Fe,f[2]=Ce,f[3]=_e,D.clearBufferiv(D.COLOR,0,f))}else $|=D.COLOR_BUFFER_BIT}F&&($|=D.DEPTH_BUFFER_BIT),G&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),oe.dispose(),fe.dispose(),Re.dispose(),Ae.dispose(),T.dispose(),_.dispose(),X.dispose(),L.dispose(),he.dispose(),H.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Lc),ce.removeEventListener("sessionend",Ic),yi.stop()};function re(S){S.preventDefault(),Cu("WebGLRenderer: Context Lost."),C=!0}function K(){Cu("WebGLRenderer: Context Restored."),C=!1;const S=gt.autoReset,F=ne.enabled,G=ne.autoUpdate,$=ne.needsUpdate,O=ne.type;le(),gt.autoReset=S,ne.enabled=F,ne.autoUpdate=G,ne.needsUpdate=$,ne.type=O}function Me(S){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ge(S){const F=S.target;F.removeEventListener("dispose",Ge),xt(F)}function xt(S){ut(S),Ae.remove(S)}function ut(S){const F=Ae.get(S).programs;F!==void 0&&(F.forEach(function(G){H.releaseProgram(G)}),S.isShaderMaterial&&H.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,$,O,se){F===null&&(F=Be);const pe=O.isMesh&&O.matrixWorld.determinant()<0,Se=ah(S,F,G,$,O);ye.setMaterial($,pe);let _e=G.index,Ie=1;if($.wireframe===!0){if(_e=j.getWireframeAttribute(G),_e===void 0)return;Ie=2}const Fe=G.drawRange,Ce=G.attributes.position;let Qe=Fe.start*Ie,dt=(Fe.start+Fe.count)*Ie;se!==null&&(Qe=Math.max(Qe,se.start*Ie),dt=Math.min(dt,(se.start+se.count)*Ie)),_e!==null?(Qe=Math.max(Qe,0),dt=Math.min(dt,_e.count)):Ce!=null&&(Qe=Math.max(Qe,0),dt=Math.min(dt,Ce.count));const Mt=dt-Qe;if(Mt<0||Mt===1/0)return;L.setup(O,$,Se,G,_e);let St,mt=Le;if(_e!==null&&(St=z.get(_e),mt=ge,mt.setIndex(St)),O.isMesh)$.wireframe===!0?(ye.setLineWidth($.wireframeLinewidth*ot()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if(O.isLine){let De=$.linewidth;De===void 0&&(De=1),ye.setLineWidth(De*ot()),O.isLineSegments?mt.setMode(D.LINES):O.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else O.isPoints?mt.setMode(D.POINTS):O.isSprite&&mt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)hr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))mt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const De=O._multiDrawStarts,_t=O._multiDrawCounts,at=O._multiDrawCount,Zt=_e?z.get(_e).bytesPerElement:1,Ki=Ae.get($).currentProgram.getUniforms();for(let Jt=0;Jt<at;Jt++)Ki.setValue(D,"_gl_DrawID",Jt),mt.render(De[Jt]/Zt,_t[Jt])}else if(O.isInstancedMesh)mt.renderInstances(Qe,Mt,O.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_t=Math.min(G.instanceCount,De);mt.renderInstances(Qe,Mt,_t)}else mt.render(Qe,Mt)};function Tn(S,F,G){S.transparent===!0&&S.side===$n&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,Sr(S,F,G),S.side=xi,S.needsUpdate=!0,Sr(S,F,G),S.side=$n):Sr(S,F,G)}this.compile=function(S,F,G=null){G===null&&(G=S),b=Re.get(G),b.init(F),A.push(b),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),S!==G&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),b.setupLights();const $=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Se=se[pe];Tn(Se,G,O),$.add(Se)}else Tn(se,G,O),$.add(se)}),b=A.pop(),$},this.compileAsync=function(S,F,G=null){const $=this.compile(S,F,G);return new Promise(O=>{function se(){if($.forEach(function(pe){Ae.get(pe).currentProgram.isReady()&&$.delete(pe)}),$.size===0){O(S);return}setTimeout(se,10)}je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let hn=null;function ih(S){hn&&hn(S)}function Lc(){yi.stop()}function Ic(){yi.start()}const yi=new Zf;yi.setAnimationLoop(ih),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(S){hn=S,ce.setAnimationLoop(S),S===null?yi.stop():yi.start()},ce.addEventListener("sessionstart",Lc),ce.addEventListener("sessionend",Ic),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,F,y),b=Re.get(S,A.length),b.init(F),A.push(b),Ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Ne,Rn,F.reversedDepth),me=this.localClippingEnabled,Q=Te.init(this.clippingPlanes,me),M=fe.get(S,E.length),M.init(),E.push(M),ce.enabled===!0&&ce.isPresenting===!0){const se=w.xr.getDepthSensingMesh();se!==null&&Os(se,F,-1/0,w.sortObjects)}Os(S,F,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(xe,He),ke=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ke&&oe.addToRenderList(M,S),this.info.render.frame++,Q===!0&&Te.beginShadows();const G=b.state.shadowsArray;ne.render(G,S,F),Q===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=M.opaque,O=M.transmissive;if(b.setupLights(),F.isArrayCamera){const se=F.cameras;if(O.length>0)for(let pe=0,Se=se.length;pe<Se;pe++){const _e=se[pe];Nc($,O,S,_e)}ke&&oe.render(S);for(let pe=0,Se=se.length;pe<Se;pe++){const _e=se[pe];Uc(M,S,_e,_e.viewport)}}else O.length>0&&Nc($,O,S,F),ke&&oe.render(S),Uc(M,S,F);y!==null&&v===0&&(ze.updateMultisampleRenderTarget(y),ze.updateRenderTargetMipmap(y)),S.isScene===!0&&S.onAfterRender(w,S,F),L.resetDefaultState(),P=-1,I=null,A.pop(),A.length>0?(b=A[A.length-1],Q===!0&&Te.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?M=E[E.length-1]:M=null};function Os(S,F,G,$){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){$&&$e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const pe=X.update(S),Se=S.material;Se.visible&&M.push(S,pe,Se,G,$e.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const pe=X.update(S),Se=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$e.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),$e.copy(pe.boundingSphere.center)),$e.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(Se)){const _e=pe.groups;for(let Ie=0,Fe=_e.length;Ie<Fe;Ie++){const Ce=_e[Ie],Qe=Se[Ce.materialIndex];Qe&&Qe.visible&&M.push(S,pe,Qe,G,$e.z,Ce)}}else Se.visible&&M.push(S,pe,Se,G,$e.z,null)}}const se=S.children;for(let pe=0,Se=se.length;pe<Se;pe++)Os(se[pe],F,G,$)}function Uc(S,F,G,$){const{opaque:O,transmissive:se,transparent:pe}=S;b.setupLightsView(G),Q===!0&&Te.setGlobalState(w.clippingPlanes,G),$&&ye.viewport(N.copy($)),O.length>0&&Mr(O,F,G),se.length>0&&Mr(se,F,G),pe.length>0&&Mr(pe,F,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Nc(S,F,G,$){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[$.id]===void 0&&(b.state.transmissionRenderTarget[$.id]=new Wi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?za:In,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const se=b.state.transmissionRenderTarget[$.id],pe=$.viewport||N;se.setSize(pe.z*w.transmissionResolutionScale,pe.w*w.transmissionResolutionScale);const Se=w.getRenderTarget(),_e=w.getActiveCubeFace(),Ie=w.getActiveMipmapLevel();w.setRenderTarget(se),w.getClearColor(q),Z=w.getClearAlpha(),Z<1&&w.setClearColor(16777215,.5),w.clear(),ke&&oe.render(G);const Fe=w.toneMapping;w.toneMapping=hi;const Ce=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),b.setupLightsView($),Q===!0&&Te.setGlobalState(w.clippingPlanes,$),Mr(S,G,$),ze.updateMultisampleRenderTarget(se),ze.updateRenderTargetMipmap(se),je.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let dt=0,Mt=F.length;dt<Mt;dt++){const St=F[dt],{object:mt,geometry:De,material:_t,group:at}=St;if(_t.side===$n&&mt.layers.test($.layers)){const Zt=_t.side;_t.side=Ht,_t.needsUpdate=!0,Fc(mt,G,$,De,_t,at),_t.side=Zt,_t.needsUpdate=!0,Qe=!0}}Qe===!0&&(ze.updateMultisampleRenderTarget(se),ze.updateRenderTargetMipmap(se))}w.setRenderTarget(Se,_e,Ie),w.setClearColor(q,Z),Ce!==void 0&&($.viewport=Ce),w.toneMapping=Fe}function Mr(S,F,G){const $=F.isScene===!0?F.overrideMaterial:null;for(let O=0,se=S.length;O<se;O++){const pe=S[O],{object:Se,geometry:_e,group:Ie}=pe;let Fe=pe.material;Fe.allowOverride===!0&&$!==null&&(Fe=$),Se.layers.test(G.layers)&&Fc(Se,F,G,_e,Fe,Ie)}}function Fc(S,F,G,$,O,se){S.onBeforeRender(w,F,G,$,O,se),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(w,F,G,$,S,se),O.transparent===!0&&O.side===$n&&O.forceSinglePass===!1?(O.side=Ht,O.needsUpdate=!0,w.renderBufferDirect(G,F,$,O,S,se),O.side=xi,O.needsUpdate=!0,w.renderBufferDirect(G,F,$,O,S,se),O.side=$n):w.renderBufferDirect(G,F,$,O,S,se),S.onAfterRender(w,F,G,$,O,se)}function Sr(S,F,G){F.isScene!==!0&&(F=Be);const $=Ae.get(S),O=b.state.lights,se=b.state.shadowsArray,pe=O.state.version,Se=H.getParameters(S,O.state,se,F,G),_e=H.getProgramCacheKey(Se);let Ie=$.programs;$.environment=S.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(S.isMeshStandardMaterial?_:T).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",Ge),Ie=new Map,$.programs=Ie);let Fe=Ie.get(_e);if(Fe!==void 0){if($.currentProgram===Fe&&$.lightsStateVersion===pe)return Bc(S,Se),Fe}else Se.uniforms=H.getUniforms(S),S.onBeforeCompile(Se,w),Fe=H.acquireProgram(Se,_e),Ie.set(_e,Fe),$.uniforms=Se.uniforms;const Ce=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Te.uniform),Bc(S,Se),$.needsLights=sh(S),$.lightsStateVersion=pe,$.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),$.currentProgram=Fe,$.uniformsList=null,Fe}function Oc(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=os.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Bc(S,F){const G=Ae.get(S);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function ah(S,F,G,$,O){F.isScene!==!0&&(F=Be),ze.resetTextureUnits();const se=F.fog,pe=$.isMeshStandardMaterial?F.environment:null,Se=y===null?w.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Na,_e=($.isMeshStandardMaterial?_:T).get($.envMap||pe),Ie=$.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ce=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,dt=!!G.morphAttributes.color;let Mt=hi;$.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Mt=w.toneMapping);const St=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,mt=St!==void 0?St.length:0,De=Ae.get($),_t=b.state.lights;if(Q===!0&&(me===!0||S!==I)){const kt=S===I&&$.id===P;Te.setState($,S,kt)}let at=!1;$.version===De.__version?(De.needsLights&&De.lightsStateVersion!==_t.state.version||De.outputColorSpace!==Se||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==_e||$.fog===!0&&De.fog!==se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Te.numPlanes||De.numIntersection!==Te.numIntersection)||De.vertexAlphas!==Ie||De.vertexTangents!==Fe||De.morphTargets!==Ce||De.morphNormals!==Qe||De.morphColors!==dt||De.toneMapping!==Mt||De.morphTargetsCount!==mt)&&(at=!0):(at=!0,De.__version=$.version);let Zt=De.currentProgram;at===!0&&(Zt=Sr($,F,O));let Ki=!1,Jt=!1,Wa=!1;const vt=Zt.getUniforms(),qt=De.uniforms;if(ye.useProgram(Zt.program)&&(Ki=!0,Jt=!0,Wa=!0),$.id!==P&&(P=$.id,Jt=!0),Ki||I!==S){ye.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),vt.setValue(D,"projectionMatrix",S.projectionMatrix),vt.setValue(D,"viewMatrix",S.matrixWorldInverse);const $t=vt.map.cameraPosition;$t!==void 0&&$t.setValue(D,we.setFromMatrixPosition(S.matrixWorld)),ct.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&vt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),I!==S&&(I=S,Jt=!0,Wa=!0)}if(O.isSkinnedMesh){vt.setOptional(D,O,"bindMatrix"),vt.setOptional(D,O,"bindMatrixInverse");const kt=O.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),vt.setValue(D,"boneTexture",kt.boneTexture,ze))}O.isBatchedMesh&&(vt.setOptional(D,O,"batchingTexture"),vt.setValue(D,"batchingTexture",O._matricesTexture,ze),vt.setOptional(D,O,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",O._indirectTexture,ze),vt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",O._colorsTexture,ze));const sn=G.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Ue.update(O,G,Zt),(Jt||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,vt.setValue(D,"receiveShadow",O.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(qt.envMap.value=_e,qt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&F.environment!==null&&(qt.envMapIntensity.value=F.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=a1()),Jt&&(vt.setValue(D,"toneMappingExposure",w.toneMappingExposure),De.needsLights&&rh(qt,Wa),se&&$.fog===!0&&be.refreshFogUniforms(qt,se),be.refreshMaterialUniforms(qt,$,ae,ee,b.state.transmissionRenderTarget[S.id]),os.upload(D,Oc(De),qt,ze)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(os.upload(D,Oc(De),qt,ze),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&vt.setValue(D,"center",O.center),vt.setValue(D,"modelViewMatrix",O.modelViewMatrix),vt.setValue(D,"normalMatrix",O.normalMatrix),vt.setValue(D,"modelMatrix",O.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const kt=$.uniformsGroups;for(let $t=0,Bs=kt.length;$t<Bs;$t++){const bi=kt[$t];he.update(bi,Zt),he.bind(bi,Zt)}}return Zt}function rh(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function sh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(S,F,G){const $=Ae.get(S);$.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ae.get(S.texture).__webglTexture=F,Ae.get(S.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:G,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const G=Ae.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const oh=D.createFramebuffer();this.setRenderTarget=function(S,F=0,G=0){y=S,U=F,v=G;let $=!0,O=null,se=!1,pe=!1;if(S){const _e=Ae.get(S);if(_e.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(_e.__webglFramebuffer===void 0)ze.setupRenderTarget(S);else if(_e.__hasExternalTextures)ze.rebindTextures(S,Ae.get(S.texture).__webglTexture,Ae.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ce=S.depthTexture;if(_e.__boundDepthTexture!==Ce){if(Ce!==null&&Ae.has(Ce)&&(S.width!==Ce.image.width||S.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(S)}}const Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(pe=!0);const Fe=Ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?O=Fe[F][G]:O=Fe[F],se=!0):S.samples>0&&ze.useMultisampledRTT(S)===!1?O=Ae.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[G]:O=Fe,N.copy(S.viewport),V.copy(S.scissor),W=S.scissorTest}else N.copy(Je).multiplyScalar(ae).floor(),V.copy(st).multiplyScalar(ae).floor(),W=it;if(G!==0&&(O=oh),ye.bindFramebuffer(D.FRAMEBUFFER,O)&&$&&ye.drawBuffers(S,O),ye.viewport(N),ye.scissor(V),ye.setScissorTest(W),se){const _e=Ae.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,G)}else if(pe){const _e=F;for(let Ie=0;Ie<S.textures.length;Ie++){const Fe=Ae.get(S.textures[Ie]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,G,_e)}}else if(S!==null&&G!==0){const _e=Ae.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,G)}P=-1},this.readRenderTargetPixels=function(S,F,G,$,O,se,pe,Se=0){if(!(S&&S.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){ye.bindFramebuffer(D.FRAMEBUFFER,_e);try{const Ie=S.textures[Se],Fe=Ie.format,Ce=Ie.type;if(!ct.textureFormatReadable(Fe)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ce)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-$&&G>=0&&G<=S.height-O&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(F,G,$,O,Oe.convert(Fe),Oe.convert(Ce),se))}finally{const Ie=y!==null?Ae.get(y).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,F,G,$,O,se,pe,Se=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e)if(F>=0&&F<=S.width-$&&G>=0&&G<=S.height-O){ye.bindFramebuffer(D.FRAMEBUFFER,_e);const Ie=S.textures[Se],Fe=Ie.format,Ce=Ie.type;if(!ct.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(F,G,$,O,Oe.convert(Fe),Oe.convert(Ce),0);const dt=y!==null?Ae.get(y).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,dt);const Mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await g_(D,Mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(Qe),D.deleteSync(Mt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,G=0){const $=Math.pow(2,-G),O=Math.floor(S.image.width*$),se=Math.floor(S.image.height*$),pe=F!==null?F.x:0,Se=F!==null?F.y:0;ze.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,pe,Se,O,se),ye.unbindTexture()};const lh=D.createFramebuffer(),ch=D.createFramebuffer();this.copyTextureToTexture=function(S,F,G=null,$=null,O=0,se=null){se===null&&(O!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=O,O=0):se=0);let pe,Se,_e,Ie,Fe,Ce,Qe,dt,Mt;const St=S.isCompressedTexture?S.mipmaps[se]:S.image;if(G!==null)pe=G.max.x-G.min.x,Se=G.max.y-G.min.y,_e=G.isBox3?G.max.z-G.min.z:1,Ie=G.min.x,Fe=G.min.y,Ce=G.isBox3?G.min.z:0;else{const sn=Math.pow(2,-O);pe=Math.floor(St.width*sn),Se=Math.floor(St.height*sn),S.isDataArrayTexture?_e=St.depth:S.isData3DTexture?_e=Math.floor(St.depth*sn):_e=1,Ie=0,Fe=0,Ce=0}$!==null?(Qe=$.x,dt=$.y,Mt=$.z):(Qe=0,dt=0,Mt=0);const mt=Oe.convert(F.format),De=Oe.convert(F.type);let _t;F.isData3DTexture?(ze.setTexture3D(F,0),_t=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ze.setTexture2DArray(F,0),_t=D.TEXTURE_2D_ARRAY):(ze.setTexture2D(F,0),_t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const at=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ki=D.getParameter(D.UNPACK_SKIP_PIXELS),Jt=D.getParameter(D.UNPACK_SKIP_ROWS),Wa=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);const vt=S.isDataArrayTexture||S.isData3DTexture,qt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const sn=Ae.get(S),kt=Ae.get(F),$t=Ae.get(sn.__renderTarget),Bs=Ae.get(kt.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,$t.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let bi=0;bi<_e;bi++)vt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(S).__webglTexture,O,Ce+bi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(F).__webglTexture,se,Mt+bi)),D.blitFramebuffer(Ie,Fe,pe,Se,Qe,dt,pe,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||Ae.has(S)){const sn=Ae.get(S),kt=Ae.get(F);ye.bindFramebuffer(D.READ_FRAMEBUFFER,lh),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,ch);for(let $t=0;$t<_e;$t++)vt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,O,Ce+$t):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,O),qt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kt.__webglTexture,se,Mt+$t):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kt.__webglTexture,se),O!==0?D.blitFramebuffer(Ie,Fe,pe,Se,Qe,dt,pe,Se,D.COLOR_BUFFER_BIT,D.NEAREST):qt?D.copyTexSubImage3D(_t,se,Qe,dt,Mt+$t,Ie,Fe,pe,Se):D.copyTexSubImage2D(_t,se,Qe,dt,Ie,Fe,pe,Se);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else qt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(_t,se,Qe,dt,Mt,pe,Se,_e,mt,De,St.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,se,Qe,dt,Mt,pe,Se,_e,mt,St.data):D.texSubImage3D(_t,se,Qe,dt,Mt,pe,Se,_e,mt,De,St):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,se,Qe,dt,pe,Se,mt,De,St.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,se,Qe,dt,St.width,St.height,mt,St.data):D.texSubImage2D(D.TEXTURE_2D,se,Qe,dt,pe,Se,mt,De,St);D.pixelStorei(D.UNPACK_ROW_LENGTH,at),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ki),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Wa),se===0&&F.generateMipmaps&&D.generateMipmap(_t),ye.unbindTexture()},this.initRenderTarget=function(S){Ae.get(S).__webglFramebuffer===void 0&&ze.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ze.setTextureCube(S,0):S.isData3DTexture?ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ze.setTexture2DArray(S,0):ze.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){U=0,v=0,y=null,ye.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Sd={type:"change"},Dc={type:"start"},nh={type:"end"},Zr=new Cc,Ed=new li,s1=Math.cos(70*ga.DEG2RAD),Dt=new B,Xt=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Io=1e-6;class o1 extends _v{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ea.ROTATE,MIDDLE:Ea.DOLLY,RIGHT:Ea.PAN},this.touches={ONE:xa.ROTATE,TWO:xa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new _i,this._lastTargetPosition=new B,this._quat=new _i().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ju,this._sphericalDelta=new Ju,this._scale=1,this._panOffset=new B,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new B,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c1.bind(this),this._onPointerDown=l1.bind(this),this._onPointerUp=u1.bind(this),this._onContextMenu=x1.bind(this),this._onMouseWheel=h1.bind(this),this._onKeyDown=p1.bind(this),this._onTouchStart=m1.bind(this),this._onTouchMove=g1.bind(this),this._onMouseDown=d1.bind(this),this._onMouseMove=f1.bind(this),this._interceptControlDown=_1.bind(this),this._interceptControlUp=v1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sd),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Xt:i>Math.PI&&(i-=Xt),a<-Math.PI?a+=Xt:a>Math.PI&&(a-=Xt),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Dt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Zr.origin.copy(this.object.position),Zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zr.direction))<s1?this.object.lookAt(this.target):(Ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zr.intersectPlane(Ed,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Io||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Io||this._lastTargetPosition.distanceToSquared(this.target)>Io?(this.dispatchEvent(Sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Dt.copy(a).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,r=t-i.top,s=i.width,o=i.height;this._mouse.x=a/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(i*i+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function l1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function c1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function u1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nh),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function d1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ea.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ht.DOLLY;break;case Ea.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}break;case Ea.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Dc)}function f1(n){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function h1(n){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(n.preventDefault(),this.dispatchEvent(Dc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(nh))}function p1(n){this.enabled!==!1&&this._handleKeyDown(n)}function m1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ht.TOUCH_ROTATE;break;case xa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case xa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ht.TOUCH_DOLLY_PAN;break;case xa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Dc)}function g1(n){switch(this._trackPointer(n),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ht.NONE}}function x1(n){this.enabled!==!1&&n.preventDefault()}function _1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function v1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const y1=Ee({__name:"BackgroundCanvas",setup(n){const e=Pe(null);let t,i,a,r=null,s=null;const o=[];let l=[],c={},u=0;const d=()=>{if(!a||!i)return;const{innerWidth:g,innerHeight:x}=window;i.aspect=g/x,i.updateProjectionMatrix(),a.setSize(g,x)},h=()=>{window.removeEventListener("resize",d),cancelAnimationFrame(u),a&&(a.setAnimationLoop(null),a.dispose(),a=null),t&&(t.traverse(g=>{const x=g;x.isMesh&&(x.geometry?.dispose(),Array.isArray(x.material)?x.material.forEach(m=>m&&m.dispose&&m.dispose()):x.material?.dispose())}),t=null),r&&(r.dispose(),r=null),i=null,l=[],c={}},p=()=>{t=new iv,a=new r1({canvas:e.value,antialias:!0,alpha:!0}),a.setClearColor(0,0),a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(window.devicePixelRatio>1?2:1),a.shadowMap.enabled=!0,i=new nn(75,window.innerWidth/window.innerHeight,.1,1e3),i.position.set(32,32,32),i.lookAt(0,0,0),r=new o1(i,a.domElement),r.enableZoom=!1,r.enablePan=!1,r.enableDamping=!0,r.dampingFactor=.02;const g=new gv(16777215,.1);t.add(g);const x=new pv(16777215,2048,2048);x.position.set(0,0,0),x.castShadow=!0,x.shadow.mapSize.set(256,256),x.shadow.camera.near=1,x.shadow.camera.far=256,t.add(x);const m=new Un({uniforms:{glowColor:{value:new et(16763955)},viewVector:{value:new B(0,0,1)}},vertexShader:`
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
    `,side:Ht,blending:Ko,transparent:!0}),f=new yn(new ar(8,64,64),m);t.add(f);const M=[{speed:.32,radius:11,incDeg:27,nodeDeg:10,phaseDeg:270},{speed:.17,radius:12,incDeg:-18,nodeDeg:75,phaseDeg:225},{speed:.12,radius:14,incDeg:0,nodeDeg:45,phaseDeg:135},{speed:.07,radius:16,incDeg:-36,nodeDeg:25,phaseDeg:270},{speed:.048,radius:19,incDeg:18,nodeDeg:55,phaseDeg:90},{speed:.027,radius:21,incDeg:-27,nodeDeg:90,phaseDeg:225},{speed:.022,radius:23,incDeg:36,nodeDeg:75,phaseDeg:180},{speed:.012,radius:25,incDeg:-18,nodeDeg:15,phaseDeg:135}],b=new _a;c={},l=[],M.forEach((v,y)=>{const I=[.5,.6,.7,.8,.9,1,.6,.7][y]??.7,N=new ar(I,16,16),V=new Yu({color:"#FFFFFF"}),W=new yn(N,V);c[W.uuid]=ga.degToRad(v.phaseDeg??0),t.add(W),l.push({mesh:W,data:v});const q=[];for(let ae=0;ae<=256;ae++){const xe=ae/256*Math.PI*2;q.push(Math.cos(xe)*v.radius,0,Math.sin(xe)*v.radius)}const Z=new wn;Z.setAttribute("position",new fn(q,3));const k=new Xf({color:"white",transparent:!0,opacity:.08}),ee=new cv(Z,k);ee.rotation.set(ga.degToRad(v.incDeg),ga.degToRad(v.nodeDeg),0),b.add(ee)}),t.add(b);const E=v=>{const y=new ar(v,32,32),P=new Yu;return new yn(y,P)};s=new _a;const A=1024;for(let v=0;v<A;v++){const y=Math.random()*.1+.1,P=E(y),I=P.material;I.emissive=new et(16777215),I.emissiveIntensity=.75,P.position.set(Math.random()*256-128,Math.random()*256-128,Math.random()*256-128),s.add(P),o.push(P)}t.add(s);let w=0;const C=v=>{if(!a||!t||!i){u=requestAnimationFrame(C);return}const y=w?(v-w)/1e3:0;w=v;const P=v*.01;o.forEach((I,N)=>{I.material.emissiveIntensity=(Math.sin(P+N*.5)+1)*.375}),s&&(s.rotation.y+=y/32),l.forEach(({mesh:I,data:N})=>{const V=I.userData||N,W=V.speed??N.speed??.01,q=V.radius??N.radius??10,Z=V.incDeg??N.incDeg??0,k=V.nodeDeg??N.nodeDeg??0;c[I.uuid]=(c[I.uuid]??0)-y*W;const ee=c[I.uuid],ae=new B(Math.cos(ee)*q,0,Math.sin(ee)*q),xe=new _i().setFromEuler(new En(ga.degToRad(Z),ga.degToRad(k),0,"XYZ"));ae.applyQuaternion(xe),I.position.copy(ae),I.rotation.y+=y*(1/Math.max(.1,W))}),r&&r.update(),a.render(t,i),u=requestAnimationFrame(C)};u=requestAnimationFrame(C);function U(){if(!a||!i)return;const{innerWidth:v,innerHeight:y}=window;i.aspect=v/y,i.updateProjectionMatrix(),a.setSize(v,y)}window.addEventListener("resize",U)};return Nn(()=>{const g=()=>p();typeof Vc<"u"?Vc(()=>g(),{timeout:300}):setTimeout(()=>g(),50)}),gr(()=>{h()}),(g,x)=>(ie(),Bt("canvas",{id:"canvas",ref_key:"canvas",ref:e,class:"absolute z-1 w-full h-full bg-slate-900"},null,512))}}),b1=Object.assign(y1,{__name:"BackgroundCanvas"}),M1={Root:ym,Header:Fm,Heading:Bm,Grid:Tm,Cell:Mm,HeadCell:Um,Next:zm,Prev:Hm,GridHead:Dm,GridBody:Cm,GridRow:Lm,CellTrigger:Em},S1={Root:ax,Trigger:hx,Portal:dx,Content:cx,Arrow:tx},E1={Root:lg,Trigger:wg,Portal:Sg,Content:bg,Arrow:fg,Close:pg,Anchor:ug},w1={Root:Pg,Header:Xg,Heading:jg,Grid:Og,Cell:Ig,HeadCell:qg,Next:Zg,Prev:Qg,GridHead:Vg,GridBody:kg,GridRow:Gg,CellTrigger:Ng},T1={slots:{content:"bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",arrow:"fill-default"}},Pc={__name:"UPopover",props:{mode:{type:null,required:!1,default:"click"},content:{type:Object,required:!1},arrow:{type:[Boolean,Object],required:!1},portal:{type:[Boolean,String],required:!1,skipCheck:!0,default:!0},reference:{type:null,required:!1},dismissible:{type:Boolean,required:!1,default:!0},class:{type:null,required:!1},ui:{type:null,required:!1},defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1},modal:{type:Boolean,required:!1},openDelay:{type:Number,required:!1,default:0},closeDelay:{type:Number,required:!1,default:0}},emits:["close:prevent","update:open"],setup(n,{emit:e}){const t=n,i=e,a=Xl(),r=xr(),s=t.mode==="hover"?No(t,"defaultOpen","open","openDelay","closeDelay"):No(t,"defaultOpen","open","modal"),o=vi(s,i),l=Pd(va(()=>t.portal)),c=va(()=>Vl(t.content,{side:"bottom",sideOffset:8,collisionPadding:8})),u=J(()=>t.dismissible?{}:["pointerDownOutside","interactOutside","escapeKeyDown"].reduce((x,m)=>(x[m]=f=>{f.preventDefault(),i("close:prevent")},x),{})),d=va(()=>t.arrow),h=J(()=>pi({extend:pi(T1),...r.ui?.popover||{}})({side:c.value.side})),p=J(()=>t.mode==="hover"?S1:E1);return(g,x)=>(ie(),ue(R(p).Root,At(Ct(R(o))),{default:te(({open:m,close:f})=>[a.default||n.reference?(ie(),ue(R(p).Trigger,{key:0,"as-child":"",reference:n.reference,class:Ot(t.class)},{default:te(()=>[ve(g.$slots,"default",{open:m})]),_:2},1032,["reference","class"])):un("",!0),"Anchor"in p.value&&a.anchor?(ie(),ue(R(p).Anchor,{key:1,"as-child":""},{default:te(()=>[ve(g.$slots,"anchor",At(Ct(f?{close:f}:{})))]),_:2},1024)):un("",!0),qe(R(p).Portal,At(Ct(R(l))),{default:te(()=>[qe(R(p).Content,nt(c.value,{class:h.value.content({class:[!a.default&&t.class,t.ui?.content]})},Dd(u.value)),{default:te(()=>[ve(g.$slots,"content",At(Ct(f?{close:f}:{}))),n.arrow?(ie(),ue(R(p).Arrow,nt({key:0},d.value,{class:h.value.arrow({class:t.ui?.arrow})}),null,16,["class"])):un("",!0)]),_:2},1040,["class"])]),_:2},1040)]),_:3},16))}},Jr={meta:"",ctrl:"",alt:"",win:"⊞",command:"⌘",shift:"⇧",control:"⌃",option:"⌥",enter:"↵",delete:"⌦",backspace:"⌫",escape:"Esc",tab:"⇥",capslock:"⇪",arrowup:"↑",arrowright:"→",arrowdown:"↓",arrowleft:"←",pageup:"⇞",pagedown:"⇟",home:"↖",end:"↘"},A1=()=>{const n=J(()=>navigator&&navigator.userAgent&&navigator.userAgent.match(/Macintosh;/)),e=Td({meta:" ",alt:" ",ctrl:" "});Nn(()=>{e.meta=n.value?Jr.command:"Ctrl",e.ctrl=n.value?Jr.control:"Ctrl",e.alt=n.value?Jr.option:"Alt"});function t(i){if(i)return["meta","alt","ctrl"].includes(i)?e[i]:Jr[i]||i}return{macOS:n,getKbdKey:t}},C1=Dh(A1),R1={base:"inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase",variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},variant:{solid:"",outline:"",soft:"",subtle:""},size:{sm:"h-4 min-w-[16px] text-[10px]",md:"h-5 min-w-[20px] text-[11px]",lg:"h-6 min-w-[24px] text-[12px]"}},compoundVariants:[{color:"primary",variant:"solid",class:"text-inverted bg-primary"},{color:"secondary",variant:"solid",class:"text-inverted bg-secondary"},{color:"success",variant:"solid",class:"text-inverted bg-success"},{color:"info",variant:"solid",class:"text-inverted bg-info"},{color:"warning",variant:"solid",class:"text-inverted bg-warning"},{color:"error",variant:"solid",class:"text-inverted bg-error"},{color:"primary",variant:"outline",class:"ring ring-inset ring-primary/50 text-primary"},{color:"secondary",variant:"outline",class:"ring ring-inset ring-secondary/50 text-secondary"},{color:"success",variant:"outline",class:"ring ring-inset ring-success/50 text-success"},{color:"info",variant:"outline",class:"ring ring-inset ring-info/50 text-info"},{color:"warning",variant:"outline",class:"ring ring-inset ring-warning/50 text-warning"},{color:"error",variant:"outline",class:"ring ring-inset ring-error/50 text-error"},{color:"primary",variant:"soft",class:"text-primary bg-primary/10"},{color:"secondary",variant:"soft",class:"text-secondary bg-secondary/10"},{color:"success",variant:"soft",class:"text-success bg-success/10"},{color:"info",variant:"soft",class:"text-info bg-info/10"},{color:"warning",variant:"soft",class:"text-warning bg-warning/10"},{color:"error",variant:"soft",class:"text-error bg-error/10"},{color:"primary",variant:"subtle",class:"text-primary ring ring-inset ring-primary/25 bg-primary/10"},{color:"secondary",variant:"subtle",class:"text-secondary ring ring-inset ring-secondary/25 bg-secondary/10"},{color:"success",variant:"subtle",class:"text-success ring ring-inset ring-success/25 bg-success/10"},{color:"info",variant:"subtle",class:"text-info ring ring-inset ring-info/25 bg-info/10"},{color:"warning",variant:"subtle",class:"text-warning ring ring-inset ring-warning/25 bg-warning/10"},{color:"error",variant:"subtle",class:"text-error ring ring-inset ring-error/25 bg-error/10"},{color:"neutral",variant:"solid",class:"text-inverted bg-inverted"},{color:"neutral",variant:"outline",class:"ring ring-inset ring-accented text-default bg-default"},{color:"neutral",variant:"soft",class:"text-default bg-elevated"},{color:"neutral",variant:"subtle",class:"ring ring-inset ring-accented text-default bg-elevated"}],defaultVariants:{variant:"outline",color:"neutral",size:"md"}},D1={__name:"UKbd",props:{as:{type:null,required:!1,default:"kbd"},value:{type:null,required:!1},color:{type:null,required:!1},variant:{type:null,required:!1},size:{type:null,required:!1},class:{type:null,required:!1}},setup(n){const e=n,{getKbdKey:t}=C1(),i=xr(),a=J(()=>pi({extend:pi(R1),...i.ui?.kbd||{}}));return(r,s)=>(ie(),ue(R(tt),{as:n.as,class:Ot(a.value({class:e.class,color:e.color,variant:e.variant,size:e.size}))},{default:te(()=>[ve(r.$slots,"default",{},()=>[Kt(Tt(R(t)(n.value)),1)])]),_:3},8,["as","class"]))}},P1={slots:{content:"flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",arrow:"fill-default",text:"truncate",kbds:"hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['·'] not-first-of-type:before:me-0.5",kbdsSize:"sm"}},L1={__name:"UTooltip",props:{text:{type:String,required:!1},kbds:{type:Array,required:!1},content:{type:Object,required:!1},arrow:{type:[Boolean,Object],required:!1},portal:{type:[Boolean,String],required:!1,skipCheck:!0,default:!0},reference:{type:null,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1},delayDuration:{type:Number,required:!1},disableHoverableContent:{type:Boolean,required:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1}},emits:["update:open"],setup(n,{emit:e}){const t=n,i=e,a=Xl(),r=xr(),s=vi(No(t,"defaultOpen","open","delayDuration","disableHoverableContent","disableClosingTrigger","ignoreNonKeyboardFocus"),i),o=Pd(va(()=>t.portal)),l=va(()=>Vl(t.content,{side:"bottom",sideOffset:8,collisionPadding:8})),c=va(()=>t.arrow),u=J(()=>pi({extend:pi(P1),...r.ui?.tooltip||{}})({side:l.value.side}));return(d,h)=>(ie(),ue(R(_x),nt(R(s),{disabled:!(n.text||n.kbds?.length||a.content)||t.disabled}),{default:te(({open:p})=>[a.default||n.reference?(ie(),ue(R(Ax),nt({key:0},d.$attrs,{"as-child":"",reference:n.reference,class:t.class}),{default:te(()=>[ve(d.$slots,"default",{open:p})]),_:2},1040,["reference","class"])):un("",!0),qe(R(wx),At(Ct(R(o))),{default:te(()=>[qe(R(Sx),nt(l.value,{class:u.value.content({class:[!a.default&&t.class,t.ui?.content]})}),{default:te(()=>[ve(d.$slots,"content",{ui:u.value},()=>[n.text?(ie(),Bt("span",{key:0,class:Ot(u.value.text({class:t.ui?.text}))},Tt(n.text),3)):un("",!0),n.kbds?.length?(ie(),Bt("span",{key:1,class:Ot(u.value.kbds({class:t.ui?.kbds}))},[(ie(!0),Bt(Ii,null,Ui(n.kbds,(g,x)=>(ie(),ue(D1,nt({key:x,size:t.ui?.kbdsSize||u.value.kbdsSize()},{ref_for:!0},typeof g=="string"?{value:g}:g),null,16,["size"]))),128))],2)):un("",!0)]),n.arrow?(ie(),ue(R(mx),nt({key:0},c.value,{class:u.value.arrow({class:t.ui?.arrow})}),null,16,["class"])):un("",!0)]),_:3},16,["class"])]),_:3},16)]),_:3},16,["disabled"]))}},I1=n=>{if(typeof n!="string")return{date:"",time:""};const e=/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/.exec(n);return e?{date:e[1]??"",time:e[2]??""}:{date:"",time:""}},U1=(n,e,t="auto")=>{const i=J(()=>{const c=R(n),u=R(e);return Number.isFinite(Number(c))&&Number.isFinite(Number(u))?{lat:Number(c),lon:Number(u),tz:t}:null}),a=Pe(null),r=Pe(!1),s=Pe(null),o=async()=>{if(i.value){r.value=!0,s.value=null;try{const u=(await Ph("https://api.open-meteo.com/v1/forecast",{query:{latitude:i.value.lat,longitude:i.value.lon,timezone:i.value.tz,current:"temperature_2m,wind_speed_10m,weather_code"}})).current??{};a.value={temperature:u.temperature_2m,windspeed:u.wind_speed_10m,weathercode:u.weather_code,time:u.time}}catch(c){console.error("open-meteo error",c),s.value=c,a.value=null}finally{r.value=!1}}};Yt(i,()=>{o()},{immediate:!0});const l=J(()=>{const c=a.value,{date:u,time:d}=I1(c?.time);return{temperature:c?.temperature,windspeed:c?.windspeed,weathercode:c?.weathercode,date:u,time:d}});return{data:a,current:l,pending:r,error:s,refresh:o}},N1={class:"text-xs"},F1={class:"flex flex-col p-2 gap-1.5 text-slate-800 dark:text-slate-100 text-sm"},O1={class:"flex items-center gap-2"},B1={class:"flex flex-col text-xs"},k1={class:"flex items-center gap-2"},z1={class:"flex items-center gap-2"},V1={class:"flex items-center gap-2"},H1=Ee({__name:"WeatherButton",setup(n){const e=Pe({lat:37.566,lon:126.9784}),{current:t,pending:i,error:a}=U1(e.value.lat,e.value.lon),r=(g,x)=>{const m=typeof x=="boolean"?x:x===1;return g==null?{text:"정보 없음",icon:"i-lucide-cloud"}:g===0?{text:"맑음",icon:m?"i-lucide-sun":"i-lucide-moon"}:[1,2,3].includes(g)?{text:"구름 조금",icon:m?"i-lucide-cloud-sun":"i-lucide-cloud-moon"}:[45,48].includes(g)?{text:"안개",icon:"i-lucide-fog"}:[51,53,55,56,57].includes(g)?{text:"이슬비",icon:"i-lucide-cloud-drizzle"}:[61,63,65,66,67,80,81,82].includes(g)?{text:"비",icon:"i-lucide-cloud-rain"}:[71,73,75,77,85,86].includes(g)?{text:"눈",icon:"i-lucide-cloud-snow"}:[95,96,99].includes(g)?{text:"뇌우",icon:"i-lucide-cloud-lightning"}:{text:`${g}`,icon:"i-lucide-cloud"}},s=J(()=>i.value&&!a.value),o=J(()=>s.value?{text:"날씨 불러오는 중",icon:"i-lucide-loader-circle"}:a.value?{text:"정보 없음",icon:"i-lucide-cloud"}:r(t.value.weathercode)),l=J(()=>o.value.icon),c=J(()=>{if(s.value)return"--°";if(a.value)return"N/A";const g=t.value.temperature;return g==null?"--°":`${g.toFixed(1)}°`}),u=J(()=>{const g=t.value.temperature;return g==null?"-":`${g.toFixed(1)}°`}),d=J(()=>{const g=t.value.windspeed;return g==null?"-":`${g.toFixed(1)}m/s`}),h=J(()=>{const g=t.value.date??"",x=t.value.time??"";return`${g} ${x}`.trim()||"-"}),p=J(()=>s.value?"weather loading":a.value?"weather error":`weather ${c.value} ${o.value.text}`);return(g,x)=>{const m=Ld,f=Ni,M=Pc;return ie(),ue(M,null,{content:te(()=>[lt("ul",F1,[lt("h4",O1,[qe(m,{name:"i-lucide-calendar-clock",class:"w-4 h-4","aria-hidden":"true"}),lt("div",B1,[x[0]||(x[0]=lt("span",null,"기준 시각",-1)),lt("span",null,Tt(h.value),1)])]),lt("li",k1,[qe(m,{name:"i-lucide-thermometer",class:"w-4 h-4","aria-hidden":"true"}),lt("span",null,Tt(u.value),1)]),lt("li",z1,[qe(m,{name:o.value.icon,class:"w-4 h-4","aria-hidden":"true"},null,8,["name"]),lt("span",null,Tt(o.value.text),1)]),lt("li",V1,[qe(m,{name:"i-lucide-wind",class:"w-4 h-4","aria-hidden":"true"}),lt("span",null,Tt(d.value),1)])])]),default:te(()=>[qe(f,{variant:"ghost","aria-label":p.value,class:"h-10 text-slate-300 cursor-pointer",disabled:s.value},{default:te(()=>[s.value?(ie(),ue(m,{key:0,name:"i-lucide-loader-circle",class:"w-4 h-4 animate-spin"})):(ie(),ue(m,{key:1,name:l.value,class:"w-4 h-4"},null,8,["name"])),lt("span",N1,Tt(c.value),1)]),_:1},8,["aria-label","disabled"])]),_:1})}}}),G1=Object.assign(H1,{__name:"WeatherButton"}),W1={slots:{root:"",header:"flex items-center justify-between",body:"flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0",heading:"text-center font-medium truncate mx-auto",grid:"w-full border-collapse select-none space-y-1 focus:outline-none",gridRow:"grid grid-cols-7 place-items-center",gridWeekDaysRow:"mb-1 grid w-full grid-cols-7",gridBody:"grid",headCell:"rounded-md",cell:"relative text-center",cellTrigger:["m-0.5 relative flex items-center justify-center rounded-full whitespace-nowrap focus-visible:ring-2 focus:outline-none data-disabled:text-muted data-unavailable:line-through data-unavailable:text-muted data-unavailable:pointer-events-none data-today:font-semibold data-[outside-view]:text-muted","transition"]},variants:{color:{primary:{headCell:"text-primary",cellTrigger:"focus-visible:ring-primary"},secondary:{headCell:"text-secondary",cellTrigger:"focus-visible:ring-secondary"},success:{headCell:"text-success",cellTrigger:"focus-visible:ring-success"},info:{headCell:"text-info",cellTrigger:"focus-visible:ring-info"},warning:{headCell:"text-warning",cellTrigger:"focus-visible:ring-warning"},error:{headCell:"text-error",cellTrigger:"focus-visible:ring-error"},neutral:{headCell:"text-highlighted",cellTrigger:"focus-visible:ring-inverted"}},variant:{solid:"",outline:"",soft:"",subtle:""},size:{xs:{heading:"text-xs",cell:"text-xs",headCell:"text-[10px]",cellTrigger:"size-7",body:"space-y-2 pt-2"},sm:{heading:"text-xs",headCell:"text-xs",cell:"text-xs",cellTrigger:"size-7"},md:{heading:"text-sm",headCell:"text-xs",cell:"text-sm",cellTrigger:"size-8"},lg:{heading:"text-md",headCell:"text-md",cellTrigger:"size-9 text-md"},xl:{heading:"text-lg",headCell:"text-lg",cellTrigger:"size-10 text-lg"}}},compoundVariants:[{color:"primary",variant:"solid",class:{cellTrigger:"data-[selected]:bg-primary data-[selected]:text-inverted data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20"}},{color:"secondary",variant:"solid",class:{cellTrigger:"data-[selected]:bg-secondary data-[selected]:text-inverted data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20"}},{color:"success",variant:"solid",class:{cellTrigger:"data-[selected]:bg-success data-[selected]:text-inverted data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20"}},{color:"info",variant:"solid",class:{cellTrigger:"data-[selected]:bg-info data-[selected]:text-inverted data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20"}},{color:"warning",variant:"solid",class:{cellTrigger:"data-[selected]:bg-warning data-[selected]:text-inverted data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20"}},{color:"error",variant:"solid",class:{cellTrigger:"data-[selected]:bg-error data-[selected]:text-inverted data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20"}},{color:"primary",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-primary/50 data-[selected]:text-primary data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/10 hover:not-data-[selected]:bg-primary/10"}},{color:"secondary",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-secondary/50 data-[selected]:text-secondary data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/10 hover:not-data-[selected]:bg-secondary/10"}},{color:"success",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-success/50 data-[selected]:text-success data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/10 hover:not-data-[selected]:bg-success/10"}},{color:"info",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-info/50 data-[selected]:text-info data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/10 hover:not-data-[selected]:bg-info/10"}},{color:"warning",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-warning/50 data-[selected]:text-warning data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/10 hover:not-data-[selected]:bg-warning/10"}},{color:"error",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-error/50 data-[selected]:text-error data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/10 hover:not-data-[selected]:bg-error/10"}},{color:"primary",variant:"soft",class:{cellTrigger:"data-[selected]:bg-primary/10 data-[selected]:text-primary data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20"}},{color:"secondary",variant:"soft",class:{cellTrigger:"data-[selected]:bg-secondary/10 data-[selected]:text-secondary data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20"}},{color:"success",variant:"soft",class:{cellTrigger:"data-[selected]:bg-success/10 data-[selected]:text-success data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20"}},{color:"info",variant:"soft",class:{cellTrigger:"data-[selected]:bg-info/10 data-[selected]:text-info data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20"}},{color:"warning",variant:"soft",class:{cellTrigger:"data-[selected]:bg-warning/10 data-[selected]:text-warning data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20"}},{color:"error",variant:"soft",class:{cellTrigger:"data-[selected]:bg-error/10 data-[selected]:text-error data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20"}},{color:"primary",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-primary/10 data-[selected]:text-primary data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-primary/25 data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20"}},{color:"secondary",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-secondary/10 data-[selected]:text-secondary data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-secondary/25 data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20"}},{color:"success",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-success/10 data-[selected]:text-success data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-success/25 data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20"}},{color:"info",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-info/10 data-[selected]:text-info data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-info/25 data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20"}},{color:"warning",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-warning/10 data-[selected]:text-warning data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-warning/25 data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20"}},{color:"error",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-error/10 data-[selected]:text-error data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-error/25 data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20"}},{color:"neutral",variant:"solid",class:{cellTrigger:"data-[selected]:bg-inverted data-[selected]:text-inverted data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10"}},{color:"neutral",variant:"outline",class:{cellTrigger:"data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-accented data-[selected]:text-default data-[selected]:bg-default data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/10 hover:not-data-[selected]:bg-inverted/10"}},{color:"neutral",variant:"soft",class:{cellTrigger:"data-[selected]:bg-elevated data-[selected]:text-default data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10"}},{color:"neutral",variant:"subtle",class:{cellTrigger:"data-[selected]:bg-elevated data-[selected]:text-default data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-accented data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10"}}],defaultVariants:{size:"md",color:"primary",variant:"solid"}},q1={__name:"UCalendar",props:{as:{type:null,required:!1},nextYearIcon:{type:[String,Object],required:!1},nextYear:{type:Object,required:!1},nextMonthIcon:{type:[String,Object],required:!1},nextMonth:{type:Object,required:!1},prevYearIcon:{type:[String,Object],required:!1},prevYear:{type:Object,required:!1},prevMonthIcon:{type:[String,Object],required:!1},prevMonth:{type:Object,required:!1},color:{type:null,required:!1},variant:{type:null,required:!1},size:{type:null,required:!1},range:{type:Boolean,required:!1},multiple:{type:Boolean,required:!1},monthControls:{type:Boolean,required:!1,default:!0},yearControls:{type:Boolean,required:!1,default:!0},defaultValue:{type:null,required:!1},modelValue:{type:null,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},defaultPlaceholder:{type:null,required:!1},placeholder:{type:null,required:!1},allowNonContiguousRanges:{type:Boolean,required:!1},pagedNavigation:{type:Boolean,required:!1},preventDeselect:{type:Boolean,required:!1},maximumDays:{type:Number,required:!1},weekStartsOn:{type:Number,required:!1},weekdayFormat:{type:String,required:!1},fixedWeeks:{type:Boolean,required:!1,default:!0},maxValue:{type:null,required:!1},minValue:{type:null,required:!1},numberOfMonths:{type:Number,required:!1},disabled:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},initialFocus:{type:Boolean,required:!1},isDateDisabled:{type:Function,required:!1},isDateUnavailable:{type:Function,required:!1},isDateHighlightable:{type:Function,required:!1},nextPage:{type:Function,required:!1},prevPage:{type:Function,required:!1},disableDaysOutsideCurrentView:{type:Boolean,required:!1},fixedDate:{type:String,required:!1}},emits:["update:modelValue","update:placeholder","update:validModelValue","update:startValue"],setup(n,{emit:e}){const t=n,i=e,{code:a,dir:r,t:s}=Lh(),o=xr(),l=vi(Ih(t,"range","modelValue","defaultValue","color","variant","size","monthControls","yearControls","class","ui"),i),c=J(()=>t.nextYearIcon||(r.value==="rtl"?o.ui.icons.chevronDoubleLeft:o.ui.icons.chevronDoubleRight)),u=J(()=>t.nextMonthIcon||(r.value==="rtl"?o.ui.icons.chevronLeft:o.ui.icons.chevronRight)),d=J(()=>t.prevYearIcon||(r.value==="rtl"?o.ui.icons.chevronDoubleRight:o.ui.icons.chevronDoubleLeft)),h=J(()=>t.prevMonthIcon||(r.value==="rtl"?o.ui.icons.chevronRight:o.ui.icons.chevronLeft)),p=J(()=>pi({extend:pi(W1),...o.ui?.calendar||{}})({color:t.color,variant:t.variant,size:t.size}));function g(m,f){return f===-1?m.subtract({years:1}):m.add({years:1})}const x=J(()=>t.range?w1:M1);return(m,f)=>(ie(),ue(R(x).Root,nt(R(l),{"model-value":n.modelValue,"default-value":n.defaultValue,locale:R(a),dir:R(r),class:p.value.root({class:[t.ui?.root,t.class]})}),{default:te(({weekDays:M,grid:b})=>[qe(R(x).Header,{class:Ot(p.value.header({class:t.ui?.header}))},{default:te(()=>[t.yearControls?(ie(),ue(R(x).Prev,{key:0,"prev-page":E=>g(E,-1),"aria-label":R(s)("calendar.prevYear"),"as-child":""},{default:te(()=>[qe(Ni,nt({icon:d.value,size:t.size,color:"neutral",variant:"ghost"},t.prevYear),null,16,["icon","size"])]),_:1},8,["prev-page","aria-label"])):un("",!0),t.monthControls?(ie(),ue(R(x).Prev,{key:1,"aria-label":R(s)("calendar.prevMonth"),"as-child":""},{default:te(()=>[qe(Ni,nt({icon:h.value,size:t.size,color:"neutral",variant:"ghost"},t.prevMonth),null,16,["icon","size"])]),_:1},8,["aria-label"])):un("",!0),qe(R(x).Heading,{class:Ot(p.value.heading({class:t.ui?.heading}))},{default:te(({headingValue:E})=>[ve(m.$slots,"heading",{value:E},()=>[Kt(Tt(E),1)])]),_:3},8,["class"]),t.monthControls?(ie(),ue(R(x).Next,{key:2,"aria-label":R(s)("calendar.nextMonth"),"as-child":""},{default:te(()=>[qe(Ni,nt({icon:u.value,size:t.size,color:"neutral",variant:"ghost"},t.nextMonth),null,16,["icon","size"])]),_:1},8,["aria-label"])):un("",!0),t.yearControls?(ie(),ue(R(x).Next,{key:3,"next-page":E=>g(E,1),"aria-label":R(s)("calendar.nextYear"),"as-child":""},{default:te(()=>[qe(Ni,nt({icon:c.value,size:t.size,color:"neutral",variant:"ghost"},t.nextYear),null,16,["icon","size"])]),_:1},8,["next-page","aria-label"])):un("",!0)]),_:3},8,["class"]),lt("div",{class:Ot(p.value.body({class:t.ui?.body}))},[(ie(!0),Bt(Ii,null,Ui(b,E=>(ie(),ue(R(x).Grid,{key:E.value.toString(),class:Ot(p.value.grid({class:t.ui?.grid}))},{default:te(()=>[qe(R(x).GridHead,null,{default:te(()=>[qe(R(x).GridRow,{class:Ot(p.value.gridWeekDaysRow({class:t.ui?.gridWeekDaysRow}))},{default:te(()=>[(ie(!0),Bt(Ii,null,Ui(M,A=>(ie(),ue(R(x).HeadCell,{key:A,class:Ot(p.value.headCell({class:t.ui?.headCell}))},{default:te(()=>[ve(m.$slots,"week-day",{day:A},()=>[Kt(Tt(A),1)])]),_:2},1032,["class"]))),128))]),_:2},1032,["class"])]),_:2},1024),qe(R(x).GridBody,{class:Ot(p.value.gridBody({class:t.ui?.gridBody}))},{default:te(()=>[(ie(!0),Bt(Ii,null,Ui(E.rows,(A,w)=>(ie(),ue(R(x).GridRow,{key:`weekDate-${w}`,class:Ot(p.value.gridRow({class:t.ui?.gridRow}))},{default:te(()=>[(ie(!0),Bt(Ii,null,Ui(A,C=>(ie(),ue(R(x).Cell,{key:C.toString(),date:C,class:Ot(p.value.cell({class:t.ui?.cell}))},{default:te(()=>[qe(R(x).CellTrigger,{day:C,month:E.value,class:Ot(p.value.cellTrigger({class:t.ui?.cellTrigger}))},{default:te(()=>[ve(m.$slots,"day",{day:C},()=>[Kt(Tt(C.day),1)])]),_:2},1032,["day","month","class"])]),_:2},1032,["date","class"]))),128))]),_:2},1032,["class"]))),128))]),_:2},1032,["class"])]),_:2},1032,["class"]))),128))],2)]),_:3},16,["model-value","default-value","locale","dir","class"]))}},$1={class:"flex flex-col items-end text-xs leading-tight"},X1={class:"text-[11px]"},Y1={class:"p-2 text-slate-800 dark:text-slate-100"},j1=Ee({__name:"CalendarButton",setup(n){const e=Pe(""),t=Pe(""),i=()=>{const s=new Date;e.value=new Intl.DateTimeFormat("ko-KR",{hour:"numeric",minute:"2-digit",hour12:!0}).format(s);const o=s.getFullYear(),l=String(s.getMonth()+1).padStart(2,"0"),c=String(s.getDate()).padStart(2,"0");t.value=`${o}-${l}-${c}`};let a=null;const r=Pe(Kl($i()));return Nn(()=>{i(),a=window.setInterval(i,1e3)}),gr(()=>{a!==null&&(window.clearInterval(a),a=null)}),(s,o)=>{const l=Ni,c=q1,u=Pc;return ie(),ue(u,null,{content:te(()=>[lt("div",Y1,[qe(c,{modelValue:R(r),"onUpdate:modelValue":o[0]||(o[0]=d=>Uh(r)?r.value=d:null)},null,8,["modelValue"])])]),default:te(()=>[qe(l,{variant:"ghost","aria-label":"Calendar/Timer",class:"text-slate-300 cursor-pointer"},{default:te(()=>[lt("div",$1,[lt("span",null,Tt(R(e)),1),lt("span",X1,Tt(R(t)),1)])]),_:1})]),_:1})}}}),K1=Object.assign(j1,{__name:"CalendarButton"}),Z1=()=>Nh("color-mode").value,J1={class:"relative z-5 h-12 flex items-center justify-between bg-purple-500/10 border-t border-purple-400/10 backdrop-blur-sm px-4"},Q1={class:"flex flex-1 justify-center gap-2"},e3={class:"flex items-center gap-2"},t3={class:"min-w-32 p-2 space-y-1"},n3={class:"hidden md:flex items-center min-w-60 px-4 py-2 gap-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300"},i3={class:"flex items-center gap-1"},a3={class:"flex items-center justify-end gap-1 text-slate-300"},r3="border-white/10 bg-white/6 text-slate-100/90 shadow-[0_8px_18px_rgba(15,23,42,0.18)] hover:-translate-y-0.5",s3="hover:border-white/18 hover:bg-white/10 hover:text-white",o3="border-purple-300/35 bg-[linear-gradient(180deg,rgba(192,132,252,0.2),rgba(255,255,255,0.12))] text-white shadow-[0_12px_28px_rgba(168,85,247,0.22),inset_0_1px_0_rgba(255,255,255,0.16)]",l3=Ee({__name:"Footer",setup(n){const e=Bh(),{openedWindows:t}=Fh(e),i=J(()=>t.value.filter(f=>f.visible)),a=J(()=>t.value.filter(f=>f.visible&&!f.hidden)),r=f=>{const M=t.value.find(b=>b.folderId===f);M&&(M.hidden?e.showWindow(f):e.bringToFront(f))},s=J(()=>a.value.reduce((f,M)=>Math.max(f,M.zIndex??0),0)),o=f=>!f.hidden&&(f.zIndex??0)===s.value,l=Z1(),c=J(()=>l.value==="dark"),u=()=>{l.preference=c.value?"light":"dark"},d=()=>{window.open("https://github.com/serene1004","_blank","noopener")},h=Pe(!1),p=J(()=>Hs.map(f=>({id:f.id,icon:f.icon??"i-lucide-folder",label:f.name}))),g=f=>{e.openWindow(f),h.value=!1},x=f=>Hs.find(M=>M.id===f)?.icon??"i-lucide-folder",m=f=>Hs.find(M=>M.id===f)?.name??f;return(f,M)=>{const b=Ni,E=Pc,A=Ld,w=L1,C=G1,U=K1;return ie(),Bt("footer",J1,[M[2]||(M[2]=lt("div",{class:"w-40"},null,-1)),lt("div",Q1,[lt("div",e3,[qe(E,{open:h.value,"onUpdate:open":M[0]||(M[0]=v=>h.value=v),triggers:["click"],"open-delay":0,"close-delay":0},{content:te(()=>[lt("div",t3,[(ie(!0),Bt(Ii,null,Ui(p.value,v=>(ie(),ue(b,{key:v.id,icon:v.icon,variant:"ghost",class:"flex justify-start w-full cursor-pointer",onClick:y=>g(v.id)},{default:te(()=>[Kt(Tt(v.label),1)]),_:2},1032,["icon","onClick"]))),128))])]),default:te(()=>[qe(b,{avatar:{src:"/images/serene.png",size:"sm"},variant:"ghost",class:"cursor-pointer","aria-label":"Start menu"})]),_:1},8,["open"]),lt("div",n3,[qe(A,{name:"i-lucide-search",class:"w-4 h-4"}),M[1]||(M[1]=lt("span",{class:"truncate"},"Type here to search",-1))])]),lt("div",i3,[i.value.length?(ie(!0),Bt(Ii,{key:0},Ui(i.value,v=>(ie(),ue(w,{key:v.folderId,text:m(v.folderId),placement:"top"},{default:te(()=>[qe(b,{variant:"ghost",size:"sm",class:Ot(["cursor-pointer h-10 w-10 rounded-[14px] border backdrop-blur-xl transition duration-200",[r3,o(v)?o3:s3]]),onClick:y=>r(v.folderId)},{default:te(()=>[qe(A,{name:x(v.folderId),class:Ot(["h-5 w-5 transition duration-200",o(v)?"scale-105 drop-shadow-[0_4px_12px_rgba(192,132,252,0.45)]":"text-slate-100/90"]),"aria-hidden":"true"},null,8,["name","class"])]),_:2},1032,["class","onClick"])]),_:2},1032,["text"]))),128)):un("",!0)])]),lt("div",a3,[qe(b,{icon:c.value?"i-lucide-moon":"i-lucide-sun",variant:"ghost",size:"sm","aria-label":c.value?"Switch to light":"Switch to dark",class:"h-10 text-slate-300 cursor-pointer",onClick:u},null,8,["icon","aria-label"]),qe(b,{icon:"i-lucide-github",variant:"ghost",size:"sm","aria-label":"Open GitHub",class:"h-10 text-slate-300 cursor-pointer",onClick:d}),qe(C),qe(U)])])}}}),c3=Object.assign(l3,{__name:"Footer"}),u3={class:"relative h-dvh w-full overflow-hidden"},d3={class:"flex h-full flex-col text-slate-100 dark:text-slate-50"},f3={class:"flex-1 overflow-hidden"},m3=Ee({__name:"default",setup(n){const e=xr();return Oh({title:e.title}),(t,i)=>(ie(),Bt("div",u3,[qe(b1),lt("div",d3,[lt("main",f3,[ve(t.$slots,"default")]),qe(c3)])]))}});export{m3 as default};
